<script setup>
import { reactive, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
import M from "materialize-css";
import { mask } from "vue-the-mask";
import emailjs from "emailjs-com";

import CustomButtonSubmit from "@/presentation/components/CustomButtonSubmit.vue";
import CustomButton from "@/presentation/components/CustomButton.vue";

const props = defineProps({
  formId: { type: String, required: true },
});

const { proxy } = getCurrentInstance();

function getFormInitialValues() {
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
      company: { value: "", isValid: null, errorMessage: "", isVisited: false },
      phone: { value: "", isValid: null, errorMessage: "", isVisited: false },
      email: { value: "", isValid: null, errorMessage: "", isVisited: false },
      find: { value: "-1", isValid: null, errorMessage: "", isVisited: false },
      message: { value: "", isValid: null, errorMessage: "", isVisited: false },
    },
  };
}

const state = reactive(getFormInitialValues());

function resetForm() {
  const initial = getFormInitialValues();
  Object.keys(initial).forEach((k) => {
    state[k] = initial[k];
  });
}

function visit(reference) {
  state.form[reference].isVisited = true;
}

function validateNotEmpty(value) {
  return value !== null && value !== "";
}

function validateEmail(value) {
  if (!validateNotEmpty(value)) return false;
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

function validatePhone(value) {
  if (!validateNotEmpty(value)) return false;
  return /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/.test(
    value
  );
}

function validateSelect(value) {
  return value !== "" && value !== "-1" && value != "0";
}

function checkForm() {
  const f = state.form;
  state.form.isValid =
    !!f.firstName.isValid &&
    !!f.lastName.isValid &&
    !!f.company.isValid &&
    !!f.phone.isValid &&
    !!f.email.isValid &&
    !!f.find.isValid &&
    !!f.message.isValid;
}

function validateField({ reference, validateFunction, errorMessage }) {
  if (reference.isVisited) {
    if (validateFunction(reference.value)) {
      reference.isValid = true;
      reference.errorMessage = "";
    } else {
      reference.isValid = false;
      reference.errorMessage = errorMessage;
    }
  }
}

function validateInputs() {
  const requiredMessage = "Este campo é obrigatório e não pode estar vazio";
  const invalidPhone = "Telefone inválido";
  const invalidEmail = "E-mail inválido";

  validateField({
    reference: state.form.firstName,
    validateFunction: validateNotEmpty,
    errorMessage: requiredMessage,
  });

  validateField({
    reference: state.form.lastName,
    validateFunction: validateNotEmpty,
    errorMessage: requiredMessage,
  });

  validateField({
    reference: state.form.company,
    validateFunction: validateNotEmpty,
    errorMessage: requiredMessage,
  });

  validateField({
    reference: state.form.phone,
    validateFunction: validatePhone,
    errorMessage: invalidPhone,
  });

  validateField({
    reference: state.form.find,
    validateFunction: validateSelect,
    errorMessage: requiredMessage,
  });

  validateField({
    reference: state.form.email,
    validateFunction: validateEmail,
    errorMessage: invalidEmail,
  });

  validateField({
    reference: state.form.message,
    validateFunction: validateNotEmpty,
    errorMessage: requiredMessage,
  });

  checkForm();
}

async function sendEmail(e) {
  e.preventDefault();
  if (!state.form.isValid) return;

  try {
    await emailjs.send(
      "indfer_orcamento",
      "orcamento_template",
      {
        from_name: `${state.form.firstName.value} ${state.form.lastName.value}`,
        firstName: state.form.firstName.value,
        lastName: state.form.lastName.value,
        company: state.form.company.value,
        phone: state.form.phone.value,
        email: state.form.email.value,
        find: state.form.find.value,
        message: state.form.message.value,
        reply_to: "vendas@indfer.com.br",
      },
      "RgBnMm36ZWKMyXS5b"
    );

    resetForm();
    state.form.success = true;
    state.form.fail = false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    state.form.fail = true;
    state.form.success = false;
  }
}

onMounted(() => {
  const refName = `${props.formId}-find`;
  const selectEl = proxy?.$refs?.[refName];
  if (selectEl) {
    M.FormSelect.init(selectEl);
  }
});

onBeforeUnmount(() => {
  const refName = `${props.formId}-find`;
  const selectEl = proxy?.$refs?.[refName];
  if (selectEl) {
    const instance = M.FormSelect.getInstance(selectEl);
    if (instance) instance.destroy();
  }
});
</script>

<script>
export default {
  name: "ContactForm",
  directives: { mask },
};
</script>

<template>
  <form @submit="sendEmail($event)" class="contact-form forms">
    <div class="input-field">
      <input
        :id="`${formId}-first_name`"
        :ref="`${formId}-first_name`"
        v-model="state.form.firstName.value"
        type="text"
        :class="{
          success: state.form.firstName.isValid === true,
          error: state.form.firstName.isValid === false,
        }"
        @blur="
          visit('firstName');
          validateInputs();
        "
      />
      <span v-if="state.form.firstName.isValid === false" class="helper-text">{{
        state.form.firstName.errorMessage
      }}</span>
      <label :for="`${formId}-first_name`">Nome *</label>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-last_name`"
        :ref="`${formId}-last_name`"
        v-model="state.form.lastName.value"
        type="text"
        :class="{
          success: state.form.lastName.isValid === true,
          error: state.form.lastName.isValid === false,
        }"
        @blur="
          visit('lastName');
          validateInputs();
        "
      />
      <label :for="`${formId}-last_name`">Sobrenome *</label>
      <span v-if="state.form.lastName.isValid === false" class="helper-text">{{
        state.form.lastName.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-company`"
        :ref="`${formId}-company`"
        v-model="state.form.company.value"
        type="text"
        :class="{
          success: state.form.company.isValid === true,
          error: state.form.company.isValid === false,
        }"
        @blur="
          visit('company');
          validateInputs();
        "
      />
      <label :for="`${formId}-company`">Empresa</label>
      <span v-if="state.form.company.isValid === false" class="helper-text">{{
        state.form.company.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-phone`"
        :ref="`${formId}-phone`"
        type="text"
        v-model="state.form.phone.value"
        v-mask="['(##) ####-####', '(##) #####-####']"
        :class="{
          success: state.form.phone.isValid === true,
          error: state.form.phone.isValid === false,
        }"
        @blur="
          visit('phone');
          validateInputs();
        "
      />
      <label :for="`${formId}-phone`">Telefone *</label>
      <span v-if="state.form.phone.isValid === false" class="helper-text">{{
        state.form.phone.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <input
        :id="`${formId}-email`"
        :ref="`${formId}-email`"
        v-model="state.form.email.value"
        type="text"
        :class="{
          success: state.form.email.isValid === true,
          error: state.form.email.isValid === false,
        }"
        @blur="
          visit('email');
          validateInputs();
        "
      />
      <label :for="`${formId}-email`">E-mail *</label>
      <span v-if="state.form.email.isValid === false" class="helper-text">{{
        state.form.email.errorMessage
      }}</span>
    </div>

    <div
      class="input-field input-field--select"
      :class="{
        success: state.form.find.isValid === true,
        error: state.form.find.isValid === false,
      }"
    >
      <select
        :id="`${formId}-find`"
        :ref="`${formId}-find`"
        v-model="state.form.find.value"
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
      <span v-if="state.form.find.isValid === false" class="helper-text">{{
        state.form.find.errorMessage
      }}</span>
    </div>

    <div class="input-field">
      <textarea
        :id="`${formId}-message`"
        :ref="`${formId}-message`"
        v-model="state.form.message.value"
        class="materialize-textarea"
        length="60"
        :class="{
          success: state.form.message.isValid === true,
          error: state.form.message.isValid === false,
        }"
        @blur="
          visit('message');
          validateInputs();
        "
      ></textarea>
      <label :for="`${formId}-message`">Mensagem *</label>
      <span v-if="state.form.message.isValid === false" class="helper-text">{{
        state.form.message.errorMessage
      }}</span>
    </div>

    <CustomButtonSubmit :isEnabled="state.form.isValid"
      >ENVIAR ORÇAMENTO</CustomButtonSubmit
    >

    <div
      v-if="state.form.success"
      class="contact-form__message contact-form__message--sucess"
    >
      <font-awesome-icon icon="fa-regular fa-circle-check" />
      <h2>Seu orçamento foi enviado!</h2>
      <p>Aguarde que logo entraremos em contato.</p>
      <CustomButton @click="resetForm">Enviar novo orçamento</CustomButton>
    </div>

    <div
      v-if="state.form.fail"
      class="contact-form__message contact-form__message--failed"
    >
      <font-awesome-icon icon="fa-regular fa-face-sad-tear" />
      <h2>Ops! Alguma coisa deu errado no envio.</h2>
      <p>Tente novamente mais tarde.</p>
      <CustomButtonSubmit @click="resetForm">Enviar novo orçamento</CustomButtonSubmit>
    </div>
  </form>
</template>
