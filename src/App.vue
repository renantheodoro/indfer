<script setup>
import AppHeader from "@/presentation/modules/Header.vue";
import AppFooter from "@/presentation/modules/Footer.vue";
</script>

<script>
export default {
  name: "App",
};
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}
    </template>
  </metainfo>

  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style lang="scss" src="./assets/styles/index.scss"></style>
