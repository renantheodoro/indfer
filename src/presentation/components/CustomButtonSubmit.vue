<template>
  <button
    type="submit"
    class="button button--full-width btn waves-effect waves-light"
    :class="isEnabled ? 'button--primary' : 'disabled'"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "AppCustomButtonSubmit",

  props: {
    isEnabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
