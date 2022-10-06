<template>
  <section class="products">
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
        <BackButton></BackButton>

        <div id="metallurgy" class="products__list__item">
          <ul class="product-cards">
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">REBOLO RESINÓIDE</h3>
              <p class="product-card__item__text">Diamantados e CBN</p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample-2.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">PASTAS DIAMANTADAS</h3>
              <p class="product-card__item__text">
                Pasta para polimento e laminação
              </p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample-3.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">DRESSADORES DIAMANTES</h3>
              <p class="product-card__item__text">Para retíficas em geral</p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">REBOLO RESINÓIDE</h3>
              <p class="product-card__item__text">Diamantados e CBN</p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample-2.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">PASTAS DIAMANTADAS</h3>
              <p class="product-card__item__text">
                Pasta para polimento e laminação
              </p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample-3.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">DRESSADORES DIAMANTES</h3>
              <p class="product-card__item__text">Para retíficas em geral</p>

              <Button link="/produtos/metalurgia/produto" :fullWidth="true">ACESSAR</Button>
            </li>
          </ul>
        </div>

        <div id="civil-building" class="products__list__item">
          <ul class="product-cards">
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">REBOLO RESINÓIDE</h3>
              <p class="product-card__item__text">Diamantados e CBN</p>

              <Button link="/produtos/construcao-civil/produto" :fullWidth="true">ACESSAR</Button>
            </li>
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample-2.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">PASTAS DIAMANTADAS</h3>
              <p class="product-card__item__text">
                Pasta para polimento e laminação
              </p>

              <Button link="/produtos/construcao-civil/produto" :fullWidth="true">ACESSAR</Button>
            </li>
          </ul>
        </div>
        <div id="gold-tools" class="products__list__item">
          <ul class="product-cards">
            <li class="product-cards__item">
              <div class="product-cards__item__media">
                <img src="@/assets/images/product-sample.jpg" alt="" />
              </div>

              <h3 class="product-card__item__title">REBOLO RESINÓIDE</h3>
              <p class="product-card__item__text">Diamantados e CBN</p>

              <Button link="/produtos/ferramentas-ouro/produto" :fullWidth="true">ACESSAR</Button>
            </li>
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

export default {
  name: "app-products",
  mounted() {
    M.Tabs.init(this.$refs.tabs);
  },

  components: { Button, BackButton, ContactSection },
};
</script>
