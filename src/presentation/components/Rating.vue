<script setup>
defineProps({
  count: { type: Number, default: 5 },
  icon: { type: [String, Array, Object], default: "fa-solid fa-star" },
  sizeClass: { type: String, default: "" },
  label: { type: String, default: "Avaliação" },
});
</script>

<script>
export default {
  name: "RatingStars",
};
</script>

<template>
  <div class="box-rating" :aria-label="label" role="img">
    <font-awesome-icon
      v-for="n in count"
      :key="n"
      class="testimonials__item__box__class"
      :class="sizeClass"
      :icon="icon"
      aria-hidden="true"
    />
  </div>
</template>
