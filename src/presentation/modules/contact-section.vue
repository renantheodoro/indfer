<template>
  <section class="contact-section">
    <div class="container">
      <div class="content__row content__row--align-center">
        <div class="column-desktop--6">
          <div class="category-block">
            <h3 class="category-title">ENTRE EM CONTATO</h3>
            <h2 class="category-calling text-blue">
              <strong
                >SOLICITE UM ORÇAMENTO. <br />
                NÃO DEIXE DE NOS CONTATAR</strong
              >
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
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactForm from "@/presentation/modules/contact-form.vue";

export default {
  name: "app-contact-form",
  components: {
    ContactForm,
  },
};
</script>
