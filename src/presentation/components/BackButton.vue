<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  backLink: { type: String, default: null },
});

const router = useRouter();

function back() {
  if (props.backLink) {
    router.push({ name: props.backLink });
  } else {
    router.back();
  }
}
</script>

<script>
export default {
  name: "AppBackButton",
};
</script>

<template>
  <a @click="back" class="back-button">
    <font-awesome-icon icon="fa-solid fa-angle-left" />
    <span>VOLTAR</span>
  </a>
</template>
