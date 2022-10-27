<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
