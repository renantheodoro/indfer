<template>
  <a @click="back" class="back-button">
    <font-awesome-icon icon="fa-solid fa-angle-left" />
    <span>VOLTAR</span>
  </a>
</template>
<script>
export default {
    name: 'app-back-button',

    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>