<script setup>
import { computed } from "vue";
import CustomButton from "@/presentation/components/CustomButton.vue";

const props = defineProps({
  type: { type: String, default: "primary" },
  fullWidth: { type: Boolean, default: false },
  link: { type: Object, default: null },
});

const buttonClassLogic = computed(() => ({
  "button-down-anchor--full-width": props.fullWidth,
}));

function scroll(event) {
  const section = event?.target?.closest?.("section");
  if (!section) return;
  const nextSection = section.nextElementSibling;
  if (!nextSection) return;
  const header = document.getElementsByTagName("header")[0];
  const offset = header?.offsetHeight || 0;
  window.scrollTo({
    top: nextSection.offsetTop - offset,
    behavior: "smooth",
  });
}
</script>

<script>
export default {
  name: "BackDownAnchor",
};
</script>

<template>
  <div class="button-down-anchor" :class="buttonClassLogic">
    <CustomButton
      @click="scroll"
      :type="props.type"
      :fullWidth="props.fullWidth"
      :link="props.link"
    >
      <slot />
    </CustomButton>
    <font-awesome-icon icon="fa-solid fa-angle-down" />
  </div>
</template>
