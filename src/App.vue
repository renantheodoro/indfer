<template>
  <Header></Header>
  <Home />
</template>

<script>

import Header from "@/presentation/components/modules/Header.vue";
import Home from "./presentation/views/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },

  mounted() {
    // M.AutoInit();
  },
};
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
