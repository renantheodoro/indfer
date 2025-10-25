<template>
  <h3>
    +<span class="big">{{ formattedMain }}</span
    ><span v-if="formattedDecimal">.{{ formattedDecimal }}</span>
  </h3>
</template>

<script>
export default {
  name: "app-counter",

  props: {
    number: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000, // tempo total da animação (ms)
    },
  },

  data() {
    return {
      current: 0,
      targetTop: 0,
      started: false,
    };
  },

  computed: {
    formatted() {
      // se já chegou no valor, formata para milhar/decimal
      if (this.current >= 1000) {
        // arredonda para milhar inteiro
        const thousands = Math.floor(this.current / 1000);
        const remainder = this.current % 1000;
        return remainder > 0
          ? `${thousands}.${String(remainder).padStart(3, "0")}`
          : `${thousands} mil`;
      }
      return new Intl.NumberFormat("pt-BR").format(this.current);
    },

    // separa a parte antes e depois do ponto
    formattedMain() {
      return this.formatted.split(".")[0];
    },

    formattedDecimal() {
      return this.formatted.split(".")[1] || "";
    },
  },

  methods: {
    startCounter() {
      if (this.started) return;
      this.started = true;

      const start = performance.now();

      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / this.duration, 1);
        // interpolação suave
        this.current = Math.floor(this.number * progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.current = this.number;
        }
      };

      requestAnimationFrame(animate);
    },

    handleScroll() {
      const top = window.scrollY || document.documentElement.scrollTop;
      if (top >= this.targetTop) {
        this.startCounter();
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },

  mounted() {
    const section = document.querySelector(".our-products");
    if (section) this.targetTop = section.offsetTop;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
