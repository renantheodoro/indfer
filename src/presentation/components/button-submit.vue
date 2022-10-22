<template>
  <button
    type="submit"
    class="button button--primary button--full-width btn waves-effect waves-light"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "app-button-submit",
};
</script>
