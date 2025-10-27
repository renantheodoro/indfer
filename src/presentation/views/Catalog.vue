<script setup>
import CustomButton from "@/presentation/components/CustomButton.vue";
</script>

<script>
export default {
  name: "app-catalog",
};
</script>

<template>
  <section class="catalog-page">
    <div class="container">
      <div class="center-statement">
        <h2
          class="center-statement__title center-statement__title--simple text-blue"
        >
          BAIXE NOSSO CATÁLOGO
        </h2>
      </div>

      <div class="content__row content__row--align-center">
        <div class="column-desktop--6 column--4">
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
              src="@/assets/images/webp/catalog-media.webp"
              alt="Baixe nosso catálogo"
            />
          </div>
        </div>
        <div class="column-desktop--1 only-desktop"></div>
        <div class="column-desktop--5 column--4">
          <ul class="catalog-page__gallery">
            <li class="catalog-page__gallery__item">
              <img
                src="@/assets/images/webp/our_products-metallurgy.webp"
                title="Nossos produtos - Metalurgia"
                alt="Nossos produtos - metalurgia"
              />
              <h4>METALURGIA</h4>
            </li>

            <li v-if="false" class="catalog-page__gallery__item">
              <img
                src="@/assets/images/webp/our_products-civil_building.webp"
                title="Nossos produtos - Construção Civil"
                alt="Nossos produtos - Construção Civil"
              />
              <h4>CONSTRUÇÃO CIVIL</h4>
            </li>

            <li class="catalog-page__gallery__item">
              <img
                src="@/assets/images/webp/our_products-gold_tools.webp"
                title="Nossos produtos - Ferramentas ouro"
                alt="Nossos produtos - Ferramentas ouro"
              />
              <h4>FERRAMENTAS OURO</h4>
            </li>
          </ul>

          <CustomButton
            externalPath="https://firebasestorage.googleapis.com/v0/b/indfer-822a1.appspot.com/o/catalogo_2014.pdf?alt=media&token=69c3271c-eb2b-428d-ac8f-a6c892df0cab"
            :fullWidth="true"
            type="primary-blue"
            >BAIXAR CATÁLOGO</CustomButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
