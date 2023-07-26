<template>
  <a
    v-if="isOpened"
    @click="hideModal"
    class="close-modal"
    :class="{ 'close-modal--contact-form': isContactForm }"
  >
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </a>
  <div :id="id" ref="modal" class="modal">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "app-modal",

  props: {
    id: {
      type: String,
      required: true,
    },
    isContactForm: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      materializeInstance: null,
      isOpened: false,
    };
  },

  methods: {
    showModal() {
      this.materializeInstance.open();
      this.isOpened = true;
    },

    hideModal() {
      this.materializeInstance.close();
      this.isOpened = false;
    },
  },

  mounted() {
    const element = this.$refs.modal;
    this.materializeInstance = M.Modal.init(element, {
      onCloseStart: () => {
        this.isOpened = false;
      },
    });
  },

  beforeUnmount() {
    this.materializeInstance.destroy();
  },
};
</script>
<style lang=""></style>
