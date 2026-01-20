<script setup>
import { ref, onMounted, watch, getCurrentInstance, onServerPrefetch } from "vue";
import usePageMeta from "@/presentation/composables/usePageMeta";
import { useRouter } from "vue-router";
import M from "materialize-css";

import CustomButton from "@/presentation/components/CustomButton.vue";
import BackButton from "@/presentation/components/BackButton.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import Preloader from "@/presentation/components/Preloader.vue";

import { usePrismic } from "@/presentation/composables/usePrismic";
import { setSsrState, getInitialSsrState } from "@/presentation/composables/useSsrState";

const results = ref([]);
const loading = ref(true);
const tabsRef = ref(null);
let materializeInstance = null;

const router = useRouter();
usePageMeta({ title: 'Produtos | INDFER - Ferramentas diamantadas', description: 'Nossos produtos: soluções diamantadas para metalurgia e ferramentas ouro.' });
const _vm = getCurrentInstance();
const proxy = _vm ? _vm.proxy : null;

// per-request prismic client (SSR) or plugin client (CSR)
const { client: prismicClient } = usePrismic();

function initTabs() {
  setTimeout(() => {
    if (!tabsRef.value) return;
    materializeInstance = M.Tabs.init(tabsRef.value);
    selectTab();
  }, 10);
}

function selectTab() {
  const fullPath = router.currentRoute.value.fullPath.split("/");
  const route = fullPath[fullPath.length - 1].replace("#", "");
  if (materializeInstance && route) {
    materializeInstance.select(route);
  }
}

async function fetchProductsFromClient() {
  try {
    if (prismicClient && typeof prismicClient.getByType === "function") {
      const response = await prismicClient.getByType("produto");
      results.value = response.results || [];
    } else if (prismicClient && typeof prismicClient.getAllByType === "function") {
      results.value = await prismicClient.getAllByType("produto");
    } else if (proxy?.$prismic?.client) {
      const r = await proxy.$prismic.client.getByType("produto");
      results.value = r.results || [];
    }
  } catch (e) {
    // ignore
  } finally {
    loading.value = false;
    initTabs();
  }
}

function goRoute(category, product) {
  return `/produtos/${category}/${product}`;
}

// SSR: prefetch and set ssrState
onServerPrefetch(async () => {
  try {
    if (!prismicClient) return;
    if (typeof prismicClient.getByType === "function") {
      const response = await prismicClient.getByType("produto");
      results.value = response.results || [];
    } else if (typeof prismicClient.getAllByType === "function") {
      results.value = await prismicClient.getAllByType("produto");
    }
    setSsrState("products", results.value || []);
  } catch (e) {
    // ignore
  } finally {
    loading.value = false;
  }
});

onMounted(() => {
  const initial = getInitialSsrState("products");
  if (initial && initial.length) {
    results.value = initial;
    loading.value = false;
    initTabs();
    return;
  }
  fetchProductsFromClient();
});

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    if (materializeInstance) {
      try {
        materializeInstance.updateTabIndicator();
      } catch (e) {
        /* ignore */
      }
      selectTab();
    }
  },
);
</script>

<script>
export default {
  name: "ProductsView",
};
</script>

<template>
  <Preloader v-if="loading" />

  <section v-show="!loading" class="products">
    <div class="products__header">
      <div class="container">
        <div class="center-statement">
          <h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2>
        </div>

        <div class="center-statement">
          <p class="center-statement__text text-white">
            Soluções diamantadas para metalurgia e usinagem de alianças —
            desempenho, precisão e vida útil estendida.
          </p>
        </div>

        <ul ref="tabsRef" class="products__header__tabs tabs">
          <li class="tab">
            <a href="#metalurgia">METALURGIA</a>
          </li>
          <li class="tab">
            <a href="#ferramentas-ouro">FERRAMENTAS OURO</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="products__list">
      <div class="container">
        <BackButton backLink="home" />

        <div id="metalurgia" class="products__list__item">
          <ul class="product-cards">
            <template v-for="(result, index) in results" :key="index">
              <li
                v-if="result.data.category === 'metalurgia'"
                class="product-cards__item"
              >
                <div class="product-cards__item__media">
                  <PrismicImage :field="result.data.thumbnail" />
                </div>

                <PrismicText
                  :field="result.data.title"
                  wrapper="h3"
                  fallback="No content"
                />

                <PrismicText
                  :field="result.data.subtitle"
                  wrapper="p"
                  fallback="No content"
                />

                <CustomButton
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >VER DETALHES</CustomButton
                >
              </li>
            </template>
          </ul>
        </div>

        <div id="construcao-civil" class="products__list__item">
          <ul class="product-cards">
            <template v-for="(result, index) in results" :key="index">
              <li
                v-if="result.data.category === 'construcao-civil'"
                class="product-cards__item"
              >
                <div class="product-cards__item__media">
                  <PrismicImage :field="result.data.thumbnail" />
                </div>

                <PrismicText
                  :field="result.data.title"
                  wrapper="h3"
                  fallback="No content"
                />

                <PrismicText
                  :field="result.data.subtitle"
                  wrapper="p"
                  fallback="No content"
                />

                <CustomButton
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >ACESSAR</CustomButton
                >
              </li>
            </template>
          </ul>
        </div>

        <div id="ferramentas-ouro" class="products__list__item">
          <ul class="product-cards">
            <template v-for="(result, index) in results" :key="index">
              <li
                v-if="result.data.category === 'ferramentas-ouro'"
                class="product-cards__item"
              >
                <div class="product-cards__item__media">
                  <PrismicImage :field="result.data.thumbnail" />
                </div>

                <PrismicText
                  :field="result.data.title"
                  wrapper="h3"
                  fallback="No content"
                />

                <PrismicText
                  :field="result.data.subtitle"
                  wrapper="p"
                  fallback="No content"
                />

                <CustomButton
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >ACESSAR</CustomButton
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <ContactSection />
</template>
