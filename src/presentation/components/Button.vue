<template>
  <a
    href="/"
    class="button btn waves-effect waves-light"
    :class="{
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--full-width': fullWidth,
    }"
  >
    <slot></slot>
  </a>
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
  },
};
</script>
