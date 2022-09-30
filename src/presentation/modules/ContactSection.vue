<template>
  <section class="contact-section">
    <div class="container">
      <div class="content__row content__row--align-center">
        <div class="column-desktop--6">
          <div class="category-block">
            <h3 class="category-title">ENTRE EM CONTATO</h3>
            <h2 class="category-calling text-blue">
              <strong>SOLICITE UM ORÇAMENTO NÃO DEIXE DE NOS CONTATAR</strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div class="column-desktop--1"></div>
        <div class="column-desktop--5">
          <form action="" class="contact-section__form forms">
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
        </div>
      </div>
    </div>
  </section>
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
