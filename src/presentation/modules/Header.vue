<template>
  <header class="header">
    <div class="container">
      <div class="header__main-logo">
        <router-link :to="{ name: 'home' }">
          <img
            src="@/assets/images/main-logo.png"
            alt="INDFER - Ferramentas diamantadas"
            title="INDFER - Ferramentas diamantadas"
          />
        </router-link>
        <!-- <h1>INDFER - Ferramentas diamantadas</h1> -->
      </div>

      <nav>
        <ul class="header__navigation tabs" ref="header__navigation">
          <li class="tab">
            <router-link
              :to="{ name: 'home' }"
              class="header__navigation__item waves-effect waves-light"
              >Home</router-link
            >
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'about' }"
              class="header__navigation__item waves-effect waves-light"
              >Sobre</router-link
            >
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'products' }"
              class="header__navigation__item waves-effect waves-light"
              >Produtos</router-link
            >
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'catalog' }"
              class="header__navigation__item waves-effect waves-light"
              >Catálogo</router-link
            >
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'contact' }"
              class="header__navigation__item waves-effect waves-light"
              >Contato</router-link
            >
          </li>

          <li>
            <Button :link="{name: 'contact'}">Solicite orçamento</Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import M from "materialize-css";

import Button from "@/presentation/components/Button.vue";

export default {
  name: "app-header",

  mounted() {
    setTimeout(() => {
      M.Tabs.init(this.$refs.header__navigation, {});
    }, 100);
  },

  components: {
    Button,
  },
};
</script>
