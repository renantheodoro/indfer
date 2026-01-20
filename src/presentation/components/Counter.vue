<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  number: { type: Number, required: true },
  duration: { type: Number, default: 2000 },
});

const current = ref(0);
const targetTop = ref(0);
const started = ref(false);
let rafId = null;

const formatted = computed(() => {
  if (current.value >= 1000) {
    const thousands = Math.floor(current.value / 1000);
    const remainder = current.value % 1000;
    return remainder > 0
      ? `${thousands}.${String(remainder).padStart(3, "0")}`
      : `${thousands} mil`;
  }
  return new Intl.NumberFormat("pt-BR").format(current.value);
});

const formattedMain = computed(() => formatted.value.split(".")[0]);
const formattedDecimal = computed(() => formatted.value.split(".")[1] || "");

function startCounter() {
  if (started.value) return;
  started.value = true;

  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / props.duration, 1);
    current.value = Math.floor(props.number * progress);

    if (progress < 1) {
      rafId = requestAnimationFrame(animate);
    } else {
      current.value = props.number;
      rafId = null;
    }
  }

  rafId = requestAnimationFrame(animate);
}

function handleScroll() {
  const top = window.scrollY || document.documentElement.scrollTop;
  if (top >= targetTop.value) {
    startCounter();
    window.removeEventListener("scroll", handleScroll);
  }
}

onMounted(() => {
  const section = document.querySelector(".our-products");
  if (section) targetTop.value = section.offsetTop;
  window.addEventListener("scroll", handleScroll, { passive: true });

  const top = window.scrollY || document.documentElement.scrollTop;
  if (top >= targetTop.value) {
    startCounter();
    window.removeEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<script>
export default {
  name: "AppCounter",
}
</script>

<template>
  <h3>
    +<span class="big">{{ formattedMain }}</span
    ><span v-if="formattedDecimal">.{{ formattedDecimal }}</span>
  </h3>
</template>
