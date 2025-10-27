<script>
export default {
  name: "AppProduct",
};
</script>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";

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
const { proxy } = getCurrentInstance();
const prismic = proxy?.$prismic;

async function getProductData(uid) {
  loading.value = true;
  notFound.value = false;

  try {
    const response = await prismic.client.getByUID("produto", uid);
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
  const path = route.path || "";

  if (!uid) {
    notFound.value = true;
    loading.value = false;
    return;
  }

  getProductData(uid);

  if (path.includes("metalurgia")) {
    category.value = "metallurgy";
    categoryName.value = "Metalurgia";
    return;
  }

  if (path.includes("construcao-civil")) {
    category.value = "civil-building";
    categoryName.value = "Construção Civil";
    return;
  }

  if (path.includes("ferramentas-ouro")) {
    category.value = "gold-tools";
    categoryName.value = "Ferramentas ouro";
    return;
  }

  notFound.value = true;
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
