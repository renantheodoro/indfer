<template>
  <form @submit="sendEmail($event)" class="contact-form forms">
    <div class="input-field">
      <input
        id="first_name"
        v-model="form.firstName.value"
        type="text"
        :class="{
          success: form.firstName.isValid === true,
          error: form.firstName.isValid === false,
        }"
        @blur="
          visit('firstName');
          validateInputs();
        "
      />
      <label for="first_name">Nome *</label>
      <span v-if="form.firstName.isValid === false" class="helper-text">{{
        form.firstName.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="last_name"
        v-model="form.lastName.value"
        type="text"
        :class="{
          success: form.lastName.isValid === true,
          error: form.lastName.isValid === false,
        }"
        @blur="
          visit('lastName');
          validateInputs();
        "
      />
      <label for="last_name">Sobrenome *</label>
      <span v-if="form.lastName.isValid === false" class="helper-text">{{
        form.lastName.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="company"
        v-model="form.company.value"
        type="text"
        :class="{
          success: form.company.isValid === true,
          error: form.company.isValid === false,
        }"
        @blur="
          visit('company');
          validateInputs();
        "
      />
      <label for="company">Empresa</label>
      <span v-if="form.company.isValid === false" class="helper-text">{{
        form.company.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="phone"
        type="text"
        v-model="form.phone.value"
        v-mask="['(##) ####-####', '(##) #####-####']"
        :class="{
          success: form.phone.isValid === true,
          error: form.phone.isValid === false,
        }"
        @blur="
          visit('phone');
          validateInputs();
        "
      />
      <label for="phone">Telefone*</label>
      <span v-if="form.phone.isValid === false" class="helper-text">{{
        form.phone.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="email"
        v-model="form.email.value"
        type="text"
        :class="{
          success: form.email.isValid === true,
          error: form.email.isValid === false,
        }"
        @blur="
          visit('email');
          validateInputs();
        "
      />
      <label for="email">E-mail*</label>
      <span v-if="form.email.isValid === false" class="helper-text">{{
        form.email.errorMessage
      }}</span>
    </div>

    <div
      class="input-field input-field--select"
      :class="{
        success: form.find.isValid === true,
        error: form.find.isValid === false,
      }"
    >
      <select
        id="find"
        v-model="form.find.value"
        ref="select"
        @change="
          visit('find');
          validateInputs();
        "
      >
        <option value="-1" disabled selected>Selecione uma opção</option>
        <option value="Google">Google</option>
        <option value="Indicação">Indicação</option>
        <option value="E-mail">E-mail</option>
      </select>
      <label>Como nos encontrou? *</label>
      <span v-if="form.find.isValid === false" class="helper-text">{{
        form.find.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <textarea
        v-model="form.message.value"
        class="materialize-textarea"
        length="120"
        :class="{
          success: form.message.isValid === true,
          error: form.message.isValid === false,
        }"
        @blur="
          visit('message');
          validateInputs();
        "
      ></textarea>
      <label for="textarea1">Mensagem *</label>
      <span v-if="form.message.isValid === false" class="helper-text">{{
        form.message.errorMessage
      }}</span>
    </div>

    <ButtonSubmit>ENVIAR ORÇAMENTO</ButtonSubmit>

    <div
      v-if="form.success"
      class="contact-form__message contact-form__message--sucess"
    >
      <font-awesome-icon icon="fa-regular fa-circle-check" />

      <h2>Seu orçamento foi enviado!</h2>

      <p>Aguarde que logo entraremos em contato.</p>

      <Button>Enviar novo orçamento</Button>
    </div>

    <div
      v-if="form.success === false"
      class="contact-form__message contact-form__message--failed"
    >
      <font-awesome-icon icon="fa-regular fa-face-sad-tear" />

      <h2>Ops! Alguma coisa deu errado no envio.</h2>

      <p>Tente novamente mais tarde.</p>

      <Button>Enviar novo orçamento</Button>
    </div>
  </form>
</template>
<script>
import M from "materialize-css";
import { mask } from "vue-the-mask";

import emailjs from "emailjs-com";
import ButtonSubmit from "@/presentation/components/button-submit.vue";
import Button from "@/presentation/components/button.vue";

export default {
  name: "app-contact-form",

  directives: { mask },

  data() {
    return this.resetForm();
  },

  methods: {
    resetForm() {
      return {
        form: {
          isValid: null,
          success: null,
          firstName: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          lastName: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          company: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          phone: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          email: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          find: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          message: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
        },
      };
    },

    visit(reference) {
      this.form[reference].isVisited = true;
    },

    validateNotEmpty(value) {
      return value !== null && value !== "";
    },

    validateEmail(value) {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },

    validatePhone(value) {
      return new RegExp(
        /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/
      ).test(value);
    },

    validateSelect(value) {
      return value !== "" && value !== "-1" && value != "0";
    },

    validateInputs() {
      const requiredMessage = "Este campo é obrigatório e não pode estar vazio";
      const invalidPhone = "Telefone inválido";
      const invalidEmail = "E-mail inválido";

      if (this.validateNotEmpty(this.form.firstName.value)) {
        this.form.firstName.isValid = true;
      } else {
        if (this.form.firstName.isVisited) {
          this.form.firstName.isValid = false;
          this.form.firstName.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validateNotEmpty(this.form.lastName.value)) {
        this.form.lastName.isValid = true;
      } else {
        if (this.form.lastName.isVisited) {
          this.form.lastName.isValid = false;
          this.form.lastName.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validateNotEmpty(this.form.company.value)) {
        this.form.company.isValid = true;
      } else {
        if (this.form.company.isVisited) {
          this.form.company.isValid = false;
          this.form.company.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validateNotEmpty(this.form.phone.value)) {
        this.form.phone.isValid = true;
      } else {
        if (this.form.phone.isVisited) {
          this.form.phone.isValid = false;
          this.form.phone.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validatePhone(this.form.phone.value)) {
        this.form.phone.isValid = true;
      } else {
        if (this.form.phone.isVisited) {
          this.form.phone.isValid = false;
          this.form.phone.errorMessage = invalidPhone;
          this.form.isValid = false;
        }
      }

      if (this.validateSelect(this.form.find.value)) {
        this.form.find.isValid = true;
      } else {
        if (this.form.find.isVisited) {
          this.form.find.isValid = false;
          this.form.find.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validateNotEmpty(this.form.email.value)) {
        this.form.email.isValid = true;
      } else {
        if (this.form.email.isVisited) {
          this.form.email.isValid = false;
          this.form.email.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      if (this.validateEmail(this.form.email.value)) {
        this.form.email.isValid = true;
      } else {
        if (this.form.email.isVisited) {
          this.form.email.isValid = false;
          this.form.email.errorMessage = invalidEmail;
          this.form.isValid = false;
        }
      }

      if (this.validateNotEmpty(this.form.message.value)) {
        this.form.message.isValid = true;
      } else {
        if (this.form.message.isVisited) {
          this.form.message.isValid = false;
          this.form.message.errorMessage = requiredMessage;
          this.form.isValid = false;
        }
      }

      this.form.isValid = true;
    },

    sendEmail(e) {
      try {
        emailjs.send(
          "indfer_orcamento",
          "orcamento_template",
          {
            from_name: `${this.form.firstName.value} ${this.form.lastName.value}`,
            firstName: this.form.firstName.value,
            lastName: this.form.lastName.value,
            company: this.form.company.value,
            phone: this.form.phone.value,
            email: this.form.email.value,
            find: this.form.find.value,
            message: this.form.message.value,
            reply_to: "renan.b.theodoro@gmail.com",
          },
          "RgBnMm36ZWKMyXS5b"
        );
        Object.assign(this.$data, this.resetForm());
        this.form.success = true;
      } catch (error) {
        console.error({ error });
        this.form.success = false;
      }

      e.preventDefault();
    },
  },

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
    ButtonSubmit,
    Button
},
};
</script>
<style lang=""></style>
