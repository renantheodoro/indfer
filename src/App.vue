<script setup>
import AppHeader from "@/presentation/modules/Header.vue";
import AppFooter from "@/presentation/modules/Footer.vue";
import { useHead } from "@vueuse/head";
import { defineOptions } from "vue";
import { buildBaseHead } from "@/presentation/composables/siteMeta";

defineOptions({ name: "App" });

// centraliza o head base (meta/link/script) no composable siteMeta
useHead(buildBaseHead());
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style lang="scss" src="./assets/styles/index.scss"></style>
