<script>
export default {
  name: "AppProduct",
};
</script>

<script setup>
import { ref, onMounted, getCurrentInstance, computed, onServerPrefetch } from "vue";
import { useRoute } from "vue-router";
import usePageMeta from "@/presentation/composables/usePageMeta";

import BackButton from "@/presentation/components/BackButton.vue";
import CustomButton from "@/presentation/components/CustomButton.vue";
import BackDownAnchor from "@/presentation/components/BackDownAnchor.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import NotFound from "@/presentation/views/NotFound.vue";
import Preloader from "@/presentation/components/Preloader.vue";
import Modal from "@/presentation/components/Modal.vue";
import ContactForm from "@/presentation/modules/ContactForm.vue";
import CatalogSection from "@/presentation/modules/CatalogSection.vue";

const loading = ref(true);
const notFound = ref(false);
const result = ref({
  data: {
    title: "",
    subtitle: "",
    description: "",
    thumbnail: null,
    details: [],
  },
});
const category = ref("");
const categoryName = ref("");

// refs para modais
const productImageDetail = ref(null);
const contactForm = ref(null);

const route = useRoute();
const _vm = getCurrentInstance();
const proxy = _vm ? _vm.proxy : null;
const prismic = proxy?.$prismic;

// usePrismic provides a per-request client in SSR and a default client in CSR
import { usePrismic } from "@/presentation/composables/usePrismic";
const { client: ssrPrismicClient } = usePrismic();
// fallback: directly create a Prismic client in SSR to avoid inject timing issues
import { createPrismicClient } from "@/services/prismic-client";
import { setSsrState } from "@/presentation/composables/useSsrState";

// derive category name synchronously from the route path so it's available in SSR
const pathForCategory = route.path || "";
if (pathForCategory.includes("metalurgia")) {
  category.value = "metallurgy";
  categoryName.value = "Metalurgia";
} else if (pathForCategory.includes("construcao-civil")) {
  category.value = "civil-building";
  categoryName.value = "Construção Civil";
} else if (pathForCategory.includes("ferramentas-ouro")) {
  category.value = "gold-tools";
  categoryName.value = "Ferramentas ouro";
}

// helper to extract plain text from Prismic RichText fields
function plainTextFromRichText(rt) {
  if (!rt) return "";
  if (Array.isArray(rt)) return rt.map((r) => r.text || "").join(" ").trim();
  if (typeof rt === "string") return rt;
  return "";
}

const titleComputed = computed(() => {
  const prod = plainTextFromRichText(result.value?.data?.title) || "Produto";
  const prefix = categoryName.value ? `${categoryName.value}: ` : "";
  return `${prefix}${prod} | INDFER - Ferramentas diamantadas`;
});

const descComputed = computed(() => {
  return plainTextFromRichText(result.value?.data?.subtitle) || "Detalhes do produto INDFER";
});

usePageMeta({ title: titleComputed, description: descComputed });

async function getProductData(uid, clientParam = null) {
  loading.value = true;
  notFound.value = false;

  try {
    // prefer explicit client (SSR) -> clientParam, then plugin proxy client (CSR)
    const clientToUse = clientParam || prismic?.client || proxy?.$prismic?.client;
    if (!clientToUse) throw new Error("Prismic client not available");
    const response = await clientToUse.getByUID("produto", uid);
    if (response) {
      result.value = response;
      loading.value = false;
      return;
    }
    loading.value = false;
    notFound.value = true;
  } catch (error) {
    // preserve debug info
    // eslint-disable-next-line no-console
    console.error(error);
    loading.value = false;
    notFound.value = true;
  }
}

// SSR prefetch: attempt to fetch product data on server so title and meta are rendered
onServerPrefetch(async () => {
  try {
    const uid = route.params.id;
    if (!uid) {
      notFound.value = true;
      loading.value = false;
      return;
    }
    // prefer ssrPrismicClient injected by usePrismic(); fall back to creating a client directly
    const clientToUse = ssrPrismicClient || createPrismicClient();
  if (clientToUse) {
      try {
        const response = await getProductData(uid, clientToUse);
        // Note: getProductData sets result.value
        // serialize product into app-level ssrState so entry-server can use it to build head if necessary
        setSsrState('product', result.value);
        // NOTE: do NOT call useHead/usePageMeta here — calling useHead outside setup triggers
        // the Vue inject() warning because hooks must run during setup. We already registered
        // usePageMeta({ title: titleComputed, description: descComputed }) in setup above
        // so updating `result.value` will update the reactive title/description and Unhead
        // will pick them up during render.
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[Product][onServerPrefetch] getProductData error:', e);
      }
    }
  } catch (e) {
    // ignore server-side errors and let client handle fallback
  }
});

function showModal(refName) {
  // map string keys to template refs
  const map = {
    productImageDetail,
    contactForm,
  };
  const r = map[refName];
  if (r && r.value && typeof r.value.showModal === "function") {
    r.value.showModal(refName);
  }
}

onMounted(() => {
  const uid = route.params.id;

  if (!uid) {
    notFound.value = true;
    loading.value = false;
    return;
  }
  // client-side fetch (onMounted) if SSR didn't populate the result
  getProductData(uid);
});
</script>

<template>
  <Preloader v-if="loading" />
  <NotFound v-else-if="notFound" />

  <div v-else class="product-details">
    <section
      :class="'product-details_header product-details_header--' + category"
    >
      <h1>{{ categoryName }}</h1>
    </section>

    <section class="product-details__main-content">
      <div class="container">
        <BackButton backLink="products" />

        <div class="product-details__row">
          <div
            @click="showModal('productImageDetail')"
            class="product-details__main-content__media"
          >
            <div class="holder">
              <PrismicImage :field="result.data.thumbnail" />

              <div class="zoom-button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <legend>Imagem meramente ilustrativa*</legend>
          </div>

          <div class="product-details__main-content__content">
            <div class="dynamic-content">
              <PrismicText
                :field="result.data.title"
                wrapper="h3"
                fallback="No content"
              />
              <PrismicText
                v-if="result.data.subtitle"
                :field="result.data.subtitle"
                wrapper="h4"
                fallback="No content"
              />
              <PrismicRichText :field="result.data.description" />
            </div>

            <CustomButton @click="showModal('contactForm')"
              >FAZER ORÇAMENTO</CustomButton
            >

            <BackDownAnchor
              v-if="result.data.details && result.data.details.length"
              type="secondary-orange"
              >VISUALIZAR MAIS DETALHES</BackDownAnchor
            >
          </div>
        </div>
      </div>

      <Modal id="product-image-detail-modal" ref="productImageDetail">
        <PrismicImage v-if="result" :field="result.data.thumbnail" />
      </Modal>

      <Modal :isContactForm="true" id="contact-form-modal" ref="contactForm">
        <div class="category-block">
          <h3 class="category-title">SOLICITE UM ORÇAMENTO</h3>
        </div>
        <ContactForm formId="product-page-form" />
      </Modal>
    </section>

    <section
      v-if="result.data.details && result.data.details.length"
      class="product-details__more-details"
    >
      <div class="container">
        <div class="dynamic-content">
          <h3>Detalhamento Técnico</h3>
          <PrismicRichText :field="result.data.details" />
        </div>

        <BackButton backLink="products" />
      </div>
    </section>

    <CatalogSection />

    <ContactSection />
  </div>
</template>
