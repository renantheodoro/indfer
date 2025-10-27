<script setup>
import CustomButton from "@/presentation/components/CustomButton.vue";
</script>

<script>
export default {
  name: "app-not-found",
};
</script>

<template>
  <div class="not-found">
    <div class="container">
      <font-awesome-icon icon="fa-solid fa-gears" />
      <h2><strong>404</strong> conteúdo não encontrado</h2>

      <CustomButton :link="{ name: 'home' }" :fullWidth="true"
        >VOLTAR PARA O INÍCIO</CustomButton
      >
    </div>
  </div>
</template>
