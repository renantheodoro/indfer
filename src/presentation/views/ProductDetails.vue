<template>
  <NotFound v-if="notFound"></NotFound>

  <div v-else class="product-details">
    <section
      :class="'product-details_header product-details_header--' + category"
    >
      <h1>{{categoryName}}</h1>
    </section>

    <section class="product-details__main-content">
      <div class="container">
        <BackButton></BackButton>

        <div class="product-details__row">
          <div class="product-details__main-content__media">
            <div class="holder">
              <img src="@/assets/images/product-sample.jpg" alt="" />

              <div class="zoom-button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <legend>Imagem meramente ilustrativa*</legend>
          </div>
          <div class="product-details__main-content__content">
            <div class="dynamic-content">
              <h3>REBOLO RESINÓIDE</h3>
              <h4>Diamante ou CBN</h4>
              <p>
                <strong>Descrição:</strong>
                <br />
                Rebolo de liga resinóide com diamante ou CBN (Cubic Boron
                Nitride)
                <br />
                <br />
                <strong>Grão:</strong><br />
                - Desbaste: 252 (60/80), 181 (100/120), 151 (100/120) <br />
                - Médio Acabamento: 126 (120/140), 107 (140/170), 91 (170/200)
                <br />
                - Acabamento: 76 (200/230), 64 (230/270), 54 (270/325) <br />
                - Fino Acabamento: 46 (325/400), 35 (500)<br />
                - Extra acabamento: 30 (600) ou mais fino <br />
                <br />
                <strong>Concentração:</strong> 25, 50 , 75 e 100
                <br />
                <br />
                <strong>Utilização:</strong>
                <br />
                Diamante: desbaste e afiação de metal duro
                <br />
                CBN (Borazon): desbaste e afiação de aço
              </p>
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
          <h3>FERRAMENTAS ELETROLÍTICAS</h3>

          <p>
            São desenvolvidas com grãos de Diamantes ou Borazon (CBN)
            depositados sobre hastes metálicas através de processo eletrolítico,
            tais como:
          </p>

          <p>
            Limas, Discos de Corte, Rebolos, Rebolos para Retífica Interna ou
            conforme necessidade do cliente.
          </p>

          <h3>REBOLOS E DISCOS DE CORTE</h3>

          <p>
            <strong>Diamante:</strong> Para Metal Duro, Aço Liga, Plástico,
            Grafite, Cerâmica.<br />
            <strong>Borazon(CBN):</strong> Aço (temperado, aço alto carbono, aço
            rápido e ligas alto carbono.<br />
            <strong>Granulometria:</strong> Diamente D126/D181- Borazon
            B126/B181 ou sob consulta.
          </p>

          <h3>LIMAS ABRASIVAS</h3>

          <p>
            Em geral, são utilizadas para trabalhos de acabamentos em moldes,
            ferramentas e matrizes. Granulometria: D 126 ou sob consulta.
          </p>

          <img src="@/assets/images/product-detail-sample.jpg" alt="" />

          <h3>LIMAS DIAMANTADAS</h3>

          <img src="@/assets/images/product-detail-sample.jpg" alt="" />

          <h4>LIMA TIPO AGULHA - MANUAL</h4>

          <img src="@/assets/images/product-detail-sample-2.jpg" alt="" />

          <h4>LIMA MÁQUINA - MECÂNICO OU MANUAL</h4>

          <img src="@/assets/images/product-detail-sample-2.jpg" alt="" />
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

export default {
  name: "app-product-detail",

  data() {
    return {
      category: "",
      categoryName: "",
      notFound: false,
    };
  },

  mounted() {
    let path = this.$route.path;

    console.log("path", path);
    console.log(path.includes("construcao-civil"));

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
  },
};
</script>
