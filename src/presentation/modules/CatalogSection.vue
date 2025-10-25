<template>
  <section class="catalog">
    <div class="parallax-container">
      <div class="parallax" ref="parallax">
        <img
          width="1400"
          height="1080"
          src="@/assets/images/webp/catalog-bg.webp"
          title="Fundo da seção catálogo - INDFER"
          alt="Fundo da seção catálogo - INDFER"
        />

        <div class="container">
          <div class="center-statement">
            <h2 class="center-statement__title text-white">
              BAIXE NOSSO CATÁLOGO
            </h2>

            <p class="center-statement__text text-white">
              Acesse todos os nossos catálogos e baixe gratuitamente para saber
              mais detalhes de cada produto.
            </p>

            <div class="content__row justify-content--center">
              <Button :link="{ name: 'catalog' }" type="secondary"
                >ACESSAR CATÁLOGO</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import M from "materialize-css";
import Button from "@/presentation/components/Button.vue";

export default {
  name: "app-catalog-section",

  mounted() {
    M.Parallax.init(this.$refs.parallax);
  },

  components: {
    Button,
  },
};
</script>
