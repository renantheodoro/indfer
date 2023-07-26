<template>
  <Preloader v-if="loading" />

  <section v-show="!loading" class="products">
    <div class="products__header">
      <div class="container">
        <div class="center-statement">
          <h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2>
        </div>

        <ul ref="tabs" class="products__header__tabs tabs">
          <li class="tab">
            <a href="#metalurgia">{{$products.productNames.metallurgy}}</a>
          </li>
          <li class="tab">
            <a href="#construcao-civil">{{$products.productNames.civilBuilding}}</a>
          </li>
          <li class="tab">
            <a href="#ferramentas-ouro">{{$products.productNames.goldTools}}</a>
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

                <Button
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >ACESSAR</Button
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

                <Button
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >ACESSAR</Button
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

                <Button
                  :link="{ path: goRoute(result.data.category, result.uid) }"
                  :fullWidth="true"
                  >ACESSAR</Button
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <ContactSection></ContactSection>
</template>
<script>
import M from "materialize-css";
import Button from "@/presentation/components/Button.vue";
import BackButton from "@/presentation/components/BackButton.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import Preloader from "@/presentation/components/Preloader.vue";

export default {
  name: "app-products",

  data() {
    return {
      results: [],
      loading: true,
      materializeInstance: null,
    };
  },

  methods: {
    initTabs() {
      setTimeout(() => {
        this.materializeInstance = M.Tabs.init(this.$refs.tabs, 
        // {swipeable: true}
        );
        this.selectTab();
      }, 10);
    },

    selectTab() {
      const fullPath = this.$router.currentRoute.value.fullPath.split("/");
      const route = fullPath[fullPath.length - 1].replace("#", "");

      if (this.materializeInstance) {
        this.materializeInstance.select(route);
      }
    },

    async getAllProducts() {
      const response = await this.$prismic.client.getByType("produto");
      if (response) {
        this.results = response.results;
        this.loading = false;
        this.initTabs();
      }
    },

    goRoute(category, product) {
      return `/produtos/${category}/${product}`;
    },
  },

  created() {
    this.getAllProducts();
  },

  watch: {
    $route() {
      if (this.materializeInstance) {
        this.materializeInstance.updateTabIndicator();
        this.selectTab();
      }
    },
  },

  components: { Button, BackButton, ContactSection, Preloader },
};
</script>
