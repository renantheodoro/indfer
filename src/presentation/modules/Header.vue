<template>
  <header class="header">
    <div class="container">
      <div class="header__main-logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/main-logo.png" alt="INDFER - Ferramentas diamantadas"
            title="INDFER - Ferramentas diamantadas" />
        </router-link>
      </div>

      <nav>
        <ul class="header__navigation tabs" ref="header__navigation">
          <li class="tab">
            <router-link :to="{ name: 'home' }" class="header__navigation__item waves-effect waves-light">Home
            </router-link>
          </li>

          <li class="tab">
            <router-link :to="{ name: 'about' }" class="header__navigation__item waves-effect waves-light">Sobre
            </router-link>
          </li>

          <li class="tab">
            <router-link :to="{ name: 'products' }" class="header__navigation__item waves-effect waves-light">Produtos
            </router-link>
          </li>

          <li class="tab">
            <router-link :to="{ name: 'catalog' }" class="header__navigation__item waves-effect waves-light">Catálogo
            </router-link>
          </li>

          <li class="tab">
            <router-link :to="{ name: 'contact' }" class="header__navigation__item waves-effect waves-light">Contato
            </router-link>
          </li>

          <li>
            <Button @click="showModal('contact-form-modal')">Solicite orçamento</Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <Modal id="contact-form-modal" ref="contact-form-modal">
    <div class="category-block">
      <h3 class="category-title">SOLICITE UM ORÇAMENTO</h3>
    </div>
    <ContactForm />
  </Modal>
</template>

<script>
import Button from "@/presentation/components/button.vue";
import Modal from "@/presentation/components/modal.vue";
import ContactForm from "@/presentation/modules/contact-form.vue";

export default {
  name: "app-header",

  methods: {
    showModal(ref) {
      this.$refs[ref].showModal(ref);
    },
  },

  components: {
    Button, Modal,
    ContactForm
  },
};
</script>
