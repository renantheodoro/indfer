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
            @click="showModal('product-image-detail-modal')"
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

            <Button @click="showModal('contact-form-modal')"
              >FAZER ORÇAMENTO</Button
            >
            <ButtonDownAnchor v-if="result.data.details && result.data.details.length" type="secondary-orange"
              >VISUALIZAR MAIS DETALHES</ButtonDownAnchor
            >
          </div>
        </div>
      </div>

      <Modal id="product-image-detail-modal" ref="product-image-detail-modal">
        <PrismicImage v-if="result" :field="result.data.thumbnail" />
      </Modal>

      <Modal :isContactForm="true" id="contact-form-modal" ref="contact-form-modal">
        <div class="category-block">
          <h3 class="category-title">SOLICITE UM ORÇAMENTO</h3>
        </div>
        <ContactForm formId="product-page-form" />
      </Modal>
    </section>

    <section v-if="result.data.details && result.data.details.length" class="product-details__more-details">
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
import BackButton from "@/presentation/components/BackButton.vue";
import Button from "@/presentation/components/Button.vue";
import ButtonDownAnchor from "@/presentation/components/BackDownAnchor.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import NotFound from "@/presentation/views/NotFound.vue";
import Preloader from "@/presentation/components/Preloader.vue";
import Modal from "@/presentation/components/Modal.vue";
import ContactForm from "@/presentation/modules/ContactForm.vue";

export default {
  name: "app-product-detail",

  data() {
    return {
      category: "",
      categoryName: "",
      loading: true,
      notFound: false,
      result: null,
      materializeInstance: null,
    };
  },

  methods: {
    async getProductData(uid) {
      try {
        const response = await this.$prismic.client.getByUID("produto", uid);

        if (response) {
          console.log(response)
          this.result = response;
          this.loading = false;
        }
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.notFound = true;
      }
    },

    showModal(ref) {
      this.$refs[ref].showModal(ref);
    },
  },

  mounted() {
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
    Preloader,
    Modal,
    ContactForm,
  },
};
</script>
