<template>
  <header class="header header--desktop only-desktop">
    <div class="container">
      <div class="header__main-logo">
        <router-link :to="{ name: 'home' }">
          <img
            width="165"
            height="37"
            src="@/assets/images/webp/main-logo.webp"
            alt="INDFER - Ferramentas diamantadas"
            title="INDFER - Ferramentas diamantadas"
          />
        </router-link>
      </div>

      <nav>
        <ul class="header__navigation tabs" ref="header__navigation">
          <li class="tab">
            <router-link
              :to="{ name: 'home' }"
              class="header__navigation__item waves-effect waves-light"
              >Home
            </router-link>
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'about' }"
              class="header__navigation__item waves-effect waves-light"
              >Sobre
            </router-link>
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'products' }"
              class="header__navigation__item waves-effect waves-light"
              >Produtos
            </router-link>
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'catalog' }"
              class="header__navigation__item waves-effect waves-light"
              >Catálogo
            </router-link>
          </li>

          <li class="tab">
            <router-link
              :to="{ name: 'contact' }"
              class="header__navigation__item waves-effect waves-light"
              >Contato
            </router-link>
          </li>

          <li>
            <Button @click="showModal('contact-form-modal')"
              >Solicite orçamento</Button
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <header class="header header--mobile only-mobile">
    <div class="header__main-logo">
      <router-link :to="{ name: 'home' }">
        <img
          width="130"
          height="30"
          src="@/assets/images/webp/main-logo-footer.webp"
          alt="INDFER - Ferramentas diamantadas"
          title="INDFER - Ferramentas diamantadas"
        />
      </router-link>
    </div>

    <ul id="slide-out" class="sidenav" ref="sidenav">
      <li>
        <router-link
          @click="closeMenu"
          :to="{ name: 'home' }"
          class="header__navigation__item waves-effect waves-light"
          >Home
        </router-link>
      </li>

      <li>
        <router-link
          @click="closeMenu"
          :to="{ name: 'about' }"
          class="header__navigation__item waves-effect waves-light"
          >Sobre
        </router-link>
      </li>

      <li>
        <router-link
          @click="closeMenu"
          :to="{ name: 'products' }"
          class="header__navigation__item waves-effect waves-light"
          >Produtos
        </router-link>
      </li>

      <li>
        <router-link
          @click="closeMenu"
          :to="{ name: 'catalog' }"
          class="header__navigation__item waves-effect waves-light"
          >Catálogo
        </router-link>
      </li>

      <li>
        <router-link
          @click="closeMenu"
          :to="{ name: 'contact' }"
          class="header__navigation__item waves-effect waves-light"
          >Contato
        </router-link>
      </li>

      <li><div class="divider"></div></li>

      <li>
        <Button @click="showModal('contact-form-modal')"
          >Solicite orçamento</Button
        >
      </li>
    </ul>

    <a href="#" data-target="slide-out" class="sidenav-trigger">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </a>
  </header>

  <Modal id="contact-form-modal" ref="contact-form-modal" :isContactForm="true">
    <div class="category-block">
      <h3 class="category-title">SOLICITE UM ORÇAMENTO</h3>
    </div>
    <ContactForm formId="header-form" />
  </Modal>
</template>

<script>
import M from "materialize-css";

import Button from "@/presentation/components/Button.vue";
import Modal from "@/presentation/components/Modal.vue";
import ContactForm from "@/presentation/modules/ContactForm.vue";

export default {
  name: "app-header",

  data() {
    return {
      sidenavInstance: null,
    };
  },

  computed: {
    isMobile() {
      if (window.screen.width <= 767) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    closeMenu() {
      var instance = M.Sidenav.getInstance(this.$refs.sidenav);
      instance.close();
    },

    showModal(ref) {
      this.$refs[ref].showModal(ref);
      this.closeMenu();
    },

    hideModal(ref) {
      this.$refs[ref].hideModal(ref);
    },
  },

  mounted() {
    this.sidenavInstance = M.Sidenav.init(this.$refs.sidenav, {
      edge: "right",
    });
  },

  components: {
    Button,
    Modal,
    ContactForm,
  },
};
</script>
