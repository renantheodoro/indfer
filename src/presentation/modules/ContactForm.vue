<template>
  <form @submit="sendEmail($event)" class="contact-form forms">
    <div class="input-field">
      <input
        :id="`${formId}-first_name`"
        :ref="`${formId}-first_name`"
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
      <span v-if="form.firstName.isValid === false" class="helper-text">{{
        form.firstName.errorMessage
      }}</span>
      <label :for="`${formId}-first_name`">Nome *</label>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-last_name`"
        :ref="`${formId}-last_name`"
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
      <label :for="`${formId}-last_name`">Sobrenome *</label>
      <span v-if="form.lastName.isValid === false" class="helper-text">{{
        form.lastName.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-company`"
        :ref="`${formId}-company`"
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
      <label :for="`${formId}-company`">Empresa</label>
      <span v-if="form.company.isValid === false" class="helper-text">{{
        form.company.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-phone`"
        :ref="`${formId}-phone`"
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
      <label :for="`${formId}-phone`">Telefone*</label>
      <span v-if="form.phone.isValid === false" class="helper-text">{{
        form.phone.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-email`"
        :ref="`${formId}-email`"
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
      <label :for="`${formId}-email`">E-mail*</label>
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
        :id="`${formId}-find`"
        :ref="`${formId}-find`"
        v-model="form.find.value"
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
      <label :for="`${formId}-find`">Como nos encontrou? *</label>
      <span v-if="form.find.isValid === false" class="helper-text">{{
        form.find.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <textarea
        :id="`${formId}-message`"
        :ref="`${formId}-message`"
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
      <label :for="`${formId}-message`">Mensagem *</label>
      <span v-if="form.message.isValid === false" class="helper-text">{{
        form.message.errorMessage
      }}</span>
    </div>

    <ButtonSubmit :isEnabled="form.isValid">ENVIAR ORÇAMENTO</ButtonSubmit>

    <div
      v-if="form.success"
      class="contact-form__message contact-form__message--sucess"
    >
      <font-awesome-icon icon="fa-regular fa-circle-check" />

      <h2>Seu orçamento foi enviado!</h2>

      <p>Aguarde que logo entraremos em contato.</p>

      <Button @click="resetForm">Enviar novo orçamento</Button>
    </div>

    <div
      v-if="form.fail"
      class="contact-form__message contact-form__message--failed"
    >
      <font-awesome-icon icon="fa-regular fa-face-sad-tear" />

      <h2>Ops! Alguma coisa deu errado no envio.</h2>

      <p>Tente novamente mais tarde.</p>

      <Button @click="resetForm">Enviar novo orçamento</Button>
    </div>
  </form>
</template>
<script>
import M from "materialize-css";
import { mask } from "vue-the-mask";

import emailjs from "emailjs-com";
import ButtonSubmit from "@/presentation/components/ButtonSubmit.vue";
import Button from "@/presentation/components/Button.vue";

export default {
  name: "app-contact-form",

  directives: { mask },

  props: {
    formId: {
      type: String,
      required: true
    }
  },

  data() {
    return this.getFormInitialValues();
  },

  methods: {
    getFormInitialValues() {
      return {
        form: {
          isValid: false,
          success: false,
          fail: false,
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
            value: "-1",
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

    resetForm() {
      Object.assign(this.$data, this.getFormInitialValues());
    },

    visit(reference) {
      this.form[reference].isVisited = true;
    },

    validateNotEmpty(value) {
      return value !== null && value !== "";
    },

    validateEmail(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },

    validatePhone(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return new RegExp(
        /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/
      ).test(value);
    },

    validateSelect(value) {
      return value !== "" && value !== "-1" && value != "0";
    },

    checkForm() {
      if (
        this.form.firstName.isValid &&
        this.form.lastName.isValid &&
        this.form.company.isValid &&
        this.form.phone.isValid &&
        this.form.email.isValid &&
        this.form.find.isValid &&
        this.form.message.isValid
      ) {
        this.form.isValid = true;
      } else {
        this.form.isValid = false;
      }
    },

    validateField({ reference, validateFunction, errorMessage }) {
      if (reference.isVisited) {
        if (validateFunction(reference.value)) {
          reference.isValid = true;
        } else {
          reference.isValid = false;
          reference.errorMessage = errorMessage;
        }
      }
    },

    validateInputs() {
      const requiredMessage = "Este campo é obrigatório e não pode estar vazio";
      const invalidPhone = "Telefone inválido";
      const invalidEmail = "E-mail inválido";

      this.validateField({
        reference: this.form.firstName,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.lastName,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.company,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.phone,
        validateFunction: this.validatePhone,
        errorMessage: invalidPhone,
      });

      this.validateField({
        reference: this.form.find,
        validateFunction: this.validateSelect,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.email,
        validateFunction: this.validateEmail,
        errorMessage: invalidEmail,
      });

      this.validateField({
        reference: this.form.message,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.checkForm();
    },

    sendEmail(e) {
      e.preventDefault();

      if (!this.form.isValid) return;
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
        this.resetForm();
        this.form.success = true;
        this.form.fail = false;
      } catch (error) {
        console.error({ error });
        this.form.fail = true;
        this.form.success = false;
      }
    },
  },

  mounted() {
    M.FormSelect.init(this.$refs[`${this.formId}-find`]);
  },

  unmounted() {
    if (this.$refs[`${this.formId}-find`]) {
      var instance = M.FormSelect.getInstance(
        this.$refs[`${this.formId}-find`]
      );
      instance.destroy();
    }
  },

  components: {
    ButtonSubmit,
    Button,
  },
};
</script>
<style lang=""></style>
