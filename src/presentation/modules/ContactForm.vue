<template>
  <form action="" class="contact-form forms">
    <div class="input-field">
      <input id="first_name" type="text" class="validate" />
      <label for="first_name">Nome *</label>
    </div>

    <div class="input-field">
      <input id="last_name" type="text" class="validate" />
      <label for="last_name">Sobrenome *</label>
    </div>

    <div class="input-field">
      <input id="company" type="text" class="validate" />
      <label for="company">Empresa</label>
    </div>

    <div class="input-field">
      <input id="phone" type="text" class="validate" />
      <label for="phone">Telefone</label>
    </div>

    <div class="input-field">
      <select ref="select">
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="1">Google</option>
        <option value="2">Indicação</option>
        <option value="3">E-mail</option>
      </select>
      <label>Como nos encontrou? *</label>
    </div>

    <div class="input-field">
      <textarea class="materialize-textarea" length="120"></textarea>
      <label for="textarea1">Mensagem *</label>
    </div>

    <Button :fullWidth="true">ENVIAR ORÇAMENTO</Button>
  </form>
</template>
<script>
import M from "materialize-css";
import Button from "@/presentation/components/Button.vue";

export default {
  name: "app-contact-form",

  mounted() {
    M.FormSelect.init(this.$refs.select);
  },

  unmounted() {
    if (this.$refs.select) {
      var instance = M.FormSelect.getInstance(this.$refs.select);
      instance.destroy();
    }
  },

  components: {
    Button,
  },
};
</script>
<style lang=""></style>
