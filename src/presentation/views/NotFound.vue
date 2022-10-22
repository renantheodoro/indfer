<template>
  <div class="not-found">
    <div class="container">
      <font-awesome-icon icon="fa-solid fa-gears" />
      <h2><strong>404</strong> conteúdo não encontrado</h2>

      <Button :link="{name: 'home'}" :fullWidth="true">VOLTAR PARA O INÍCIO</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/presentation/components/button.vue';
export default {
    name: "app-not-found",
    components: { Button }
};
</script>
