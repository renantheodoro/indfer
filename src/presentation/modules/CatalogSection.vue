<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import M from "materialize-css";
import CustomButton from "@/presentation/components/CustomButton.vue";

const parallaxRef = ref(null);
let parallaxInstance = null;

onMounted(() => {
  if (parallaxRef.value) {
    parallaxInstance = M.Parallax.init(parallaxRef.value);
  }
});

onBeforeUnmount(() => {
  if (parallaxInstance && typeof parallaxInstance.destroy === "function") {
    parallaxInstance.destroy();
  } else if (parallaxRef.value) {
    const inst = M.Parallax.getInstance(parallaxRef.value);
    if (inst && typeof inst.destroy === "function") inst.destroy();
  }
});
</script>

<script>
export default {
  name: "CatalogSection",
};
</script>

<template>
  <section class="catalog">
    <div class="parallax-container">
      <div class="parallax" ref="parallaxRef">
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
              <CustomButton :link="{ name: 'catalog' }" type="secondary"
                >ACESSAR CATÁLOGO</CustomButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
