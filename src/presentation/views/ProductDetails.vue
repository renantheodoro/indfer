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
        <BackButton />

        <div class="product-details__row">
          <div class="product-details__main-content__media">
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
                :field="result.data.subtitle"
                wrapper="h4"
                fallback="No content"
              />
              <PrismicRichText :field="result.data.description" />
            </div>

            <Button>FAZER ORÇAMENTO</Button>
            <ButtonDownAnchor type="secondary-orange"
              >VISUALIZAR MAIS DETALHES</ButtonDownAnchor
            >
          </div>
        </div>
      </div>
    </section>

    <section class="product-details__more-details">
      <div class="container">
        <div class="dynamic-content">
          <PrismicRichText :field="result.data.details" />
        </div>
      </div>
    </section>

    <ContactSection></ContactSection>
  </div>
</template>
<script>
import BackButton from "../components/BackButton.vue";
import Button from "../components/Button.vue";
import ButtonDownAnchor from "../components/ButtonDownAnchor.vue";
import ContactSection from "../modules/ContactSection.vue";
import NotFound from "../views/404.vue";
import Preloader from "../components/Preloader.vue";

export default {
  name: "app-product-detail",

  data() {
    return {
      category: "",
      categoryName: "",
      loading: true,
      notFound: false,
      result: null,
    };
  },

  methods: {
    async getProductData(uid) {
      const response = await this.$prismic.client.getByUID("produto", uid);
      
      if(response) {
        this.result = response;
        this.loading = false;
      }
      
      console.log(this.result.data.details);
    },
  },

  created() {
    let uid = this.$router.currentRoute.value.params.id;
    let path = this.$route.path;

    this.getProductData(uid);

    if (path.includes("metalurgia")) {
      this.category = "metallurgy";
      this.categoryName = "Metalurgia";
      return;
    }

    if (path.includes("construcao-civil")) {
      this.category = "civil-building";
      this.categoryName = "Construção Civil";
      return;
    }

    if (path.includes("ferramentas-ouro")) {
      this.category = "gold-tools";
      this.categoryName = "Ferramentas ouro";
      return;
    }

    this.notFound = true;
  },

  components: {
    BackButton,
    Button,
    ButtonDownAnchor,
    ContactSection,
    NotFound,
    Preloader
},
};
</script>
