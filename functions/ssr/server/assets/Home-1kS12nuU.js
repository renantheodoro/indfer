import { ref, computed, onMounted, onBeforeUnmount, useSSRContext, resolveComponent, mergeProps, nextTick, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1$1, a as _imports_3 } from "./our_products-gold_tools-B1Bmm_W0.js";
import { u as usePageMeta } from "./usePageMeta-CeEXd9ar.js";
import { M, _ as _sfc_main$3 } from "../entry-server.js";
import { C as ContactSection } from "./ContactSection-BFbD_bdW.js";
import { _ as _sfc_main$4 } from "./CatalogSection-DyYLgvu4.js";
import "@vueuse/head";
import "@vue/server-renderer";
import "vue-router";
import "emailjs-com";
import "vue-the-mask";
import "@prismicio/vue";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
const _imports_0 = "/assets/white-diamond-bBmdh3Ch.png";
const _imports_1 = "/assets/about-diamond-bg25elv2.webp";
const __default__$2 = {
  name: "AppCounter"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  props: {
    number: { type: Number, required: true },
    duration: { type: Number, default: 2e3 }
  },
  setup(__props) {
    const props = __props;
    const current = ref(0);
    const targetTop = ref(0);
    const started = ref(false);
    let rafId = null;
    const formatted = computed(() => {
      if (current.value >= 1e3) {
        const thousands = Math.floor(current.value / 1e3);
        const remainder = current.value % 1e3;
        return remainder > 0 ? `${thousands}.${String(remainder).padStart(3, "0")}` : `${thousands} mil`;
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(_attrs)}> +<span class="big">${ssrInterpolate(formattedMain.value)}</span>`);
      if (formattedDecimal.value) {
        _push(`<span>.${ssrInterpolate(formattedDecimal.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/Counter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __default__$1 = {
  name: "RatingStars"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    count: { type: Number, default: 5 },
    icon: { type: [String, Array, Object], default: "fa-solid fa-star" },
    sizeClass: { type: String, default: "" },
    label: { type: String, default: "Avaliação" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "box-rating",
        "aria-label": __props.label,
        role: "img"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.count, (n) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          key: n,
          class: ["testimonials__item__box__class", __props.sizeClass],
          icon: __props.icon,
          "aria-hidden": "true"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/Rating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  name: "AppHome"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, { name: "AppHome" }, {
  __ssrInlineRender: true,
  setup(__props) {
    usePageMeta({
      title: "INDFER - Ferramentas diamantadas",
      description: "Ferramentas diamantadas de alta performance: soluções desenvolvidas com tecnologia própria e controle de qualidade rigoroso."
    });
    const elfsightContainer = ref(null);
    const yearsExperience = computed(() => (/* @__PURE__ */ new Date()).getFullYear() - 1993);
    const DEBUG = false;
    const selector = ".elfsight-app-f35d0164-0588-452d-8397-5813e046bb15";
    const textMatch = "Free Google Reviews widget";
    const intervalMs = 300;
    const maxTries = 600;
    let containerEl = null;
    let intervalId = null;
    let tries = 0;
    let containerObserver = null;
    let documentObserver = null;
    const isQueryable = (n) => !!n && (n instanceof Element || n instanceof Document || n instanceof DocumentFragment);
    const log = (...a) => DEBUG;
    function attachToElement(refEl) {
      if (!refEl) return;
      if (typeof refEl === "object" && "value" in refEl) {
        containerEl = isQueryable(refEl.value) ? refEl.value : null;
        return;
      }
      if (isQueryable(refEl)) {
        containerEl = refEl;
        return;
      }
      if (typeof refEl === "string") {
        const el = document.querySelector(refEl);
        containerEl = isQueryable(el) ? el : null;
        return;
      }
      containerEl = null;
    }
    function getContainer() {
      if (isQueryable(containerEl)) return containerEl;
      const el = document.querySelector(selector);
      return isQueryable(el) ? el : null;
    }
    function getAnchor(root = null) {
      const parent = getContainer();
      const scope = isQueryable(root) ? root : parent;
      if (!isQueryable(scope)) return null;
      const anchors = scope.querySelectorAll(
        "a[href^='https://elfsight.com/google-reviews-widget']"
      );
      for (const a of anchors) {
        if ((a.textContent || "").includes(textMatch)) return a;
      }
      return null;
    }
    function enforceHiddenStyles(anchor) {
      if (!isQueryable(anchor)) return false;
      if (anchor.__hiding) return true;
      anchor.__hiding = true;
      const setImp = (p, v) => anchor.style.setProperty(p, v, "important");
      setImp("display", "none");
      setImp("visibility", "hidden");
      setImp("opacity", "0");
      setImp("pointer-events", "none");
      setImp("width", "0px");
      setImp("height", "0px");
      setImp("margin", "0");
      setImp("padding", "0");
      setImp("transform", "none");
      setImp("line-height", "0");
      setImp("font-size", "0");
      setImp("z-index", "-1");
      anchor.setAttribute("aria-hidden", "true");
      anchor.tabIndex = -1;
      anchor.dataset.elfsightHidden = "1";
      anchor.__hiding = false;
      return true;
    }
    function attachAnchorObserver(anchor) {
      if (!isQueryable(anchor) || anchor.__elfsightObserver) return;
      const obs = new MutationObserver((muts) => {
        if (anchor.__hiding) return;
        const styleChanged = muts.some(
          (m) => m.type === "attributes" && m.attributeName === "style"
        );
        if (styleChanged) {
          enforceHiddenStyles(anchor);
        }
      });
      obs.observe(anchor, { attributes: true, attributeFilter: ["style"] });
      anchor.__elfsightObserver = obs;
    }
    function handleNodeForAnchor(node) {
      if (node.tagName === "A" && node.href?.startsWith("https://elfsight.com/google-reviews-widget")) {
        enforceHiddenStyles(node);
        attachAnchorObserver(node);
        return true;
      }
      const a = getAnchor(node);
      if (a) {
        enforceHiddenStyles(a);
        attachAnchorObserver(a);
        return true;
      }
      return false;
    }
    function attachContainerObserver() {
      const parent = getContainer();
      if (!isQueryable(parent) || parent.__elfsightContainerObs) return;
      const containerObs = new MutationObserver((muts) => {
        for (const m of muts) {
          for (const node of m.addedNodes || []) {
            if (!isQueryable(node)) continue;
            if (handleNodeForAnchor(node)) ;
          }
        }
      });
      containerObs.observe(parent, { childList: true, subtree: true });
      parent.__elfsightContainerObs = containerObs;
      containerObserver = containerObs;
      const a = getAnchor(parent);
      if (a) {
        enforceHiddenStyles(a);
        attachAnchorObserver(a);
      }
    }
    function attachDocumentFallbackObserver() {
      if (documentObserver) return;
      const obs = new MutationObserver((muts) => {
        for (const m of muts) {
          for (const node of m.addedNodes || []) {
            if (!isQueryable(node)) continue;
            if (handleNodeForAnchor(node)) ;
          }
        }
      });
      obs.observe(document.body, { childList: true, subtree: true });
      documentObserver = obs;
    }
    function hideOnceFound() {
      let a = getAnchor();
      if (!a) {
        const global = document.querySelectorAll(
          "a[href^='https://elfsight.com/google-reviews-widget']"
        );
        a = Array.from(global).find(
          (el) => (el.textContent || "").includes(textMatch)
        );
      }
      if (!a) return false;
      enforceHiddenStyles(a);
      attachAnchorObserver(a);
      attachContainerObserver();
      return true;
    }
    function tick() {
      tries += 1;
      if (hideOnceFound()) {
        stopWatcher();
        return;
      }
      if (tries >= maxTries) {
        stopWatcher();
      }
    }
    function startWatcher() {
      if (intervalId) return;
      if (hideOnceFound()) return;
      tries = 0;
      intervalId = setInterval(tick, intervalMs);
    }
    function stopWatcher() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      tries = 0;
    }
    function cleanupObservers() {
      if (containerObserver) {
        try {
          containerObserver.disconnect();
        } catch (e) {
          console.warn("[useElfsight] containerObserver.disconnect error:", e);
        }
        containerObserver = null;
      }
      const parent = getContainer();
      if (isQueryable(parent) && parent.__elfsightContainerObs) {
        try {
          parent.__elfsightContainerObs.disconnect();
        } catch (e) {
          console.warn("[useElfsight] parent.__elfsightContainerObs error:", e);
        }
        parent.__elfsightContainerObs = null;
      }
      if (documentObserver) {
        try {
          documentObserver.disconnect();
        } catch (e) {
          console.warn("[useElfsight] documentObserver.disconnect error:", e);
        }
        documentObserver = null;
      }
      try {
        const scope = getContainer() || document;
        scope.querySelectorAll("a").forEach((a) => {
          if (a.__elfsightObserver) {
            try {
              a.__elfsightObserver.disconnect();
            } catch (e) {
              console.warn("[useElfsight] anchor observer disconnect error:", e);
            }
            a.__elfsightObserver = null;
          }
        });
      } catch (e) {
        console.warn("[useElfsight] cleanup anchors error:", e);
      }
    }
    function initWidgets() {
      try {
        window.elfsightWidgets?.init?.();
        log("elfsight init called");
      } catch (e) {
        console.debug("[useElfsight] initWidgets error:", e);
      }
    }
    function buildWidget() {
      if (typeof window === "undefined") return;
      const SRC = "https://elfsightcdn.com/platform.js";
      const existing = document.querySelector(`script[src="${SRC}"]`);
      if (!existing) {
        const s = document.createElement("script");
        s.src = SRC;
        s.async = true;
        s.addEventListener("load", initWidgets, { once: true });
        document.body.appendChild(s);
      } else {
        initWidgets();
      }
    }
    onMounted(async () => {
      await nextTick();
      attachToElement(elfsightContainer);
      try {
        if (M?.Parallax) {
          const elems = document.querySelectorAll(".parallax");
          if (elems.length) M.Parallax.init(elems);
        }
      } catch (e) {
        console.warn("[home] Parallax init error:", e);
      }
      buildWidget();
      attachContainerObserver();
      attachDocumentFallbackObserver();
      startWatcher();
    });
    onBeforeUnmount(() => {
      try {
        if (M?.Parallax?.getInstance) {
          document.querySelectorAll(".parallax").forEach((el) => {
            const inst = M.Parallax.getInstance(el);
            inst?.destroy?.();
          });
        }
      } catch (e) {
        console.warn("[home] Parallax destroy error:", e);
      }
      stopWatcher();
      cleanupObservers();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><section class="banner"><div class="container"><div class="content__row"><div class="column-desktop--8 column--4"><img class="diamond"${ssrRenderAttr("src", _imports_0)} alt="Diamante branco - INDFER" width="120" height="120" loading="lazy"><h1> TECNOLOGIA EM<br><strong>FERRAMENTAS DIAMANTADAS</strong></h1><p> Ferramentas diamantadas de alta performance: soluções desenvolvidas com tecnologia própria e controle de qualidade rigoroso — <strong>mais eficiência e menor custo por peça.</strong></p>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        link: { name: "about" },
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SAIBA MAIS`);
          } else {
            return [
              createTextVNode("SAIBA MAIS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="column-desktop--4 column--4"></div></div></div></section><section class="about"><div class="container"><div class="content__row"><div class="column-desktop--6 column--4"><img width="410" height="300"${ssrRenderAttr("src", _imports_1)} title="INDFER - sobre a empresa" alt="Trabalhador dentro de uma máscara de diamante"></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--5 column--4"><div class="category-block"><h3 class="category-title">SOBRE</h3><h2 class="category-calling text-blue"><strong>INOVAÇÃO &amp; RENOVAÇÃO</strong> que garantem nossa <strong class="text-orange">qualidade</strong></h2>`);
      _push(ssrRenderComponent(_sfc_main$3, { link: { name: "about" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CONHEÇA NOSSA HISTÓRIA`);
          } else {
            return [
              createTextVNode("CONHEÇA NOSSA HISTÓRIA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="our-products"><div class="center-statement"><h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2><p class="center-statement__text text-white"> Soluções especializadas para metalurgia e usinagem de alianças com precisão e acabamento superior. </p></div><ul class="our-products__products_gallery"><li class="our-products__products_gallery__item"><img${ssrRenderAttr("src", _imports_1$1)} title="Nossos produtos - Metalurgia" alt="Nossos produtos - metalurgia"><h4>METALURGIA</h4>`);
      _push(ssrRenderComponent(_sfc_main$3, { link: "produtos/#metalurgia" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VER PRODUTOS`);
          } else {
            return [
              createTextVNode("VER PRODUTOS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      {
        _push(`<!---->`);
      }
      _push(`<li class="our-products__products_gallery__item"><img${ssrRenderAttr("src", _imports_3)} title="Nossos produtos - Ferramentas ouro" alt="Nossos produtos - Ferramentas ouro"><h4>FERRAMENTAS PARA USINAGEM DE ALIANÇAS</h4>`);
      _push(ssrRenderComponent(_sfc_main$3, { link: "produtos/#ferramentas-ouro" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VER PRODUTOS`);
          } else {
            return [
              createTextVNode("VER PRODUTOS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="content__row justify-content--center">`);
      _push(ssrRenderComponent(_sfc_main$3, { link: { name: "products" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VER TODOS OS PRODUTOS`);
          } else {
            return [
              createTextVNode("VER TODOS OS PRODUTOS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="counter"><div class="container"><div class="counter__list content__row"><div class="counter__list__item column-desktop--4 column--4">`);
      _push(ssrRenderComponent(_sfc_main$2, { number: 5e4 }, null, _parent));
      _push(`<p>FERRAMENTAS DESENVOLVIDAS</p></div><div class="counter__list__item column-desktop--4 column--4">`);
      _push(ssrRenderComponent(_sfc_main$2, { number: yearsExperience.value }, null, _parent));
      _push(`<p>ANOS DE EXPERIÊNCIA</p></div><div class="counter__list__item column-desktop--4 column--4">`);
      _push(ssrRenderComponent(_sfc_main$2, { number: 350 }, null, _parent));
      _push(`<p>CLIENTES ATENDIDOS</p></div></div></div></section><section class="testimonials"><div class="center-statement"><h2 class="center-statement__title text-blue"> O QUE NOSSOS CLIENTES DIZEM </h2><p class="center-statement__text"> Depoimentos extraídos de avaliações reais feitas no <strong>Google Avaliações</strong></p></div><div class="container">`);
      {
        _push(`<!---->`);
      }
      _push(`<div class="content__row"><div class="elfsight-app-f35d0164-0588-452d-8397-5813e046bb15" data-elfsight-app-lazy></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
