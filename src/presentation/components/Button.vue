<template>
  <router-link
    v-if="link"
    :to="link"
    class="button btn waves-effect waves-light"
    :class="buttonClassLogic"
  >
    <slot></slot>
  </router-link>
  <a
    v-else
    class="button btn waves-effect waves-light"
    :class="buttonClassLogic"
    @click="emit($event)"
    :href="externalPath ? externalPath : '#'"
    :target="externalPath ? '_blank' : ''"
  >
    <slot></slot>
  </a>

  <slot name="icon"></slot>
</template>
<script>
export default {
  name: "app-button",

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
      type: [Object, String],
      required: false,
    },
    externalPath: {
      type: [Object, String],
      required: false,
    },
  },

  data() {
    return {
      buttonClassLogic: {
        "button--primary": this.type === "primary",
        "button--primary-blue": this.type === "primary-blue",
        "button--secondary": this.type === "secondary",
        "button--secondary-orange": this.type === "secondary-orange",
        "button--full-width": this.fullWidth,
      },
    };
  },

  methods: {
    emit(event) {
      this.$emit("click", event);
      if (!this.link && !this.externalPath) {
        event.preventDefault();
      }
    },
  },

  emits: ["click"],
};
</script>
