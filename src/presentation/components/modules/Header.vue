<template>
  <header class="header">
    <div class="container">
      <div class="header__main-logo">
        <a href="/">
          <img
            src="@/assets/images/main-logo.png"
            alt="INDFER - Ferramentas diamantadas"
            title="INDFER - Ferramentas diamantadas"
          />
        </a>
        <!-- <h1>INDFER - Ferramentas diamantadas</h1> -->
      </div>

      <nav>
        <ul class="header__navigation tabs" ref="header__navigation">
          <li class="tab">
            <a
              href="/"
              class="header__navigation__item waves-effect waves-light"
              >Home</a
            >
          </li>

          <li class="tab">
            <a
              href="/"
              class="header__navigation__item waves-effect waves-light"
              >Sobre</a
            >
          </li>

          <li class="tab">
            <a
              href="/"
              class="header__navigation__item waves-effect waves-light"
              >Produtos</a
            >
          </li>

          <li class="tab">
            <a
              href="/"
              class="header__navigation__item waves-effect waves-light"
              >Catálogo</a
            >
          </li>

          <li class="tab">
            <a
              href="/"
              class="header__navigation__item waves-effect waves-light"
              >Contato</a
            >
          </li>

          <li>
            <PrimaryButton></PrimaryButton>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import M from "materialize-css";

import PrimaryButton from "@/presentation/components/PrimaryButton.vue";

export default {
  name: "app-header",

  mounted() {
    setTimeout(() => {
      M.Tabs.init(this.$refs.header__navigation, {});
    }, 100);
  },

  components: {
    PrimaryButton,
  },
};
</script>
