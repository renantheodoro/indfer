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
            <a class="active" href="#metallurgy">METALURGIA</a>
          </li>
          <li class="tab">
            <a href="#civil-building">CONSTRUÇÃO CIVIL</a>
          </li>
          <li class="tab"><a href="#gold-tools">FERRAMENTAS OURO</a></li>
        </ul>
      </div>
    </div>

    <div class="products__list">
      <div class="container">
        <BackButton />

        <div id="metallurgy" class="products__list__item">
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

        <div id="civil-building" class="products__list__item">
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

        <div id="gold-tools" class="products__list__item">
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
      </div>
    </div>
  </section>

  <ContactSection></ContactSection>
</template>
<script>
import M from "materialize-css";
import Button from "../components/Button.vue";
import BackButton from "../components/BackButton.vue";
import ContactSection from "../modules/ContactSection.vue";
import Preloader from "../components/Preloader.vue";

export default {
  name: "app-products",

  data() {
    return {
      results: [],
      loading: true,
    };
  },

  methods: {
    async getAllProducts() {
      const response = await this.$prismic.client.getByType("produto");
      if (response) {
        this.results = response.results;
        this.loading = false;
      }
    },

    goRoute(category, product) {
      return `/produtos/${category}/${product}`;
    },
  },

  created() {
    this.getAllProducts();
  },

  mounted() {
    M.Tabs.init(this.$refs.tabs);
  },

  components: { Button, BackButton, ContactSection, Preloader },
};
</script>
