<template>
  <a @click="back" class="back-button">
    <font-awesome-icon icon="fa-solid fa-angle-left" />
    <span>VOLTAR</span>
  </a>
</template>
<script>
export default {
  name: "app-back-button",

  props: {
    backLink: {
      type: String,
      required: false,
      default: null
    },
  },

  methods: {
    back() {
      if (this.backLink) {
        this.$router.push({ name: this.backLink });
      } else {
        this.$router.back();
      }
    },
  },
};
</script>
