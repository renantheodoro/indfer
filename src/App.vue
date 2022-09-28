<template>
  <Header></Header>
  <Home />
  <Footer></Footer>
</template> 

<script>

import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";

import Home from "@/presentation/views/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer
  },
};
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
