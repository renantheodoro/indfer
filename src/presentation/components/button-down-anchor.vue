<template>
  <div class="button-down-anchor" :class="buttonClassLogic">
    <Button @click="scroll" :type="type" :fullWidth="fullWidth" :link="link">
      <slot></slot>
    </Button>
    <font-awesome-icon icon="fa-solid fa-angle-down" />
  </div>
</template>
<script>
import Button from './button.vue';
export default {
  name: "app-button-down-anchor",

  props: {
    type: {
      type: String,
      default: "primary",
      required: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
      required: false,
    },
    link: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      buttonClassLogic: {
        "button-down-anchor--full-width": this.fullWidth,
      },
    };
  },

  methods: {
    scroll(event) {
      const nextSection = event.srcElement.closest('section').nextSibling;
      const header = document.getElementsByTagName('header')[0];

      window.scrollTo({
        top: nextSection.offsetTop - header.offsetHeight
      });
    },
  },

  components: {
    Button
},
};
</script>
