<script setup>
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "primary" },
  fullWidth: { type: Boolean, default: false },
  link: { type: [Object, String], required: false },
  externalPath: { type: [Object, String], required: false },
});

const emit = defineEmits(["click"]);

const buttonClassLogic = computed(() => ({
  "button--primary": props.type === "primary",
  "button--primary-blue": props.type === "primary-blue",
  "button--secondary": props.type === "secondary",
  "button--secondary-orange": props.type === "secondary-orange",
  "button--full-width": props.fullWidth,
}));

function handleClick(event) {
  emit("click", event);
  if (!props.link && !props.externalPath) {
    event.preventDefault();
  }
}
</script>

<script>
export default {
  name: "AppCustomButton",
};
</script>

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
    @click="handleClick"
    :href="externalPath ? externalPath : '#'"
    :target="externalPath ? '_blank' : ''"
  >
    <slot></slot>
  </a>

  <slot name="icon"></slot>
</template>
