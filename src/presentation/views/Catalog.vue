<template>
  <section class="catalog-page">
    <div class="container">
      <div class="center-statement">
        <h2 class="center-statement__title center-statement__title--simple text-blue">BAIXE NOSSO CATÁLOGO</h2>
      </div>

      <div class="content__row content__row--align-center">
        <div class="column-desktop--6">
          <div class="catalog-page__media">
            <span
              class="catalog-page__media__shape catalog-page__media__shape--colored"
            ></span>
            <span
              class="catalog-page__media__shape catalog-page__media__shape--grey"
            ></span>
            <span
              class="catalog-page__media__shape catalog-page__media__shape--light"
            ></span>

            <img
              src="@/assets/images/catalog-media.jpg"
              alt="Baixe nosso catálogo"
            />
          </div>
        </div>
        <div class="column-desktop--1"></div>
        <div class="column-desktop--5">
          <ul class="catalog-page__gallery">
            <li class="catalog-page__gallery__item">
              <img
                src="@/assets/images/our_products-metallurgy.jpg"
                title="Nossos produtos - Metalurgia"
                alt="Nossos produtos - metalurgia"
              />
              <h4>METALURGIA</h4>
            </li>

            <li class="catalog-page__gallery__item">
              <img
                src="@/assets/images/our_products-civil_building.jpg"
                title="Nossos produtos - Construção Civil"
                alt="Nossos produtos - Construção Civil"
              />
              <h4>CONSTRUÇÃO CIVIL</h4>
            </li>

            <li class="catalog-page__gallery__item">
              <img
                src="@/assets/images/our_products-gold_tools.jpg"
                title="Nossos produtos - Ferramentas ouro"
                alt="Nossos produtos - Ferramentas ouro"
              />
              <h4>FERRAMENTAS OURO</h4>
            </li>
          </ul>

          <Button :fullWidth="true" type="primary-blue">BAIXAR CATÁLOGO</Button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/presentation/components/Button.vue";

export default {
  name: "app-catalog",
  components: { Button },
};
</script>
<style lang=""></style>
