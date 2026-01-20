import { ref, getCurrentInstance, onServerPrefetch, onMounted, watch, resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { u as usePageMeta } from "./usePageMeta-CeEXd9ar.js";
import { useRouter } from "vue-router";
import { _ as _sfc_main$2, M } from "../entry-server.js";
import { u as usePrismic, s as setSsrState, g as getInitialSsrState, P as Preloader, _ as _sfc_main$1 } from "./useSsrState-0_PrhmWr.js";
import { C as ContactSection } from "./ContactSection-BFbD_bdW.js";
import "@vueuse/head";
import "@vue/server-renderer";
import "emailjs-com";
import "vue-the-mask";
import "@prismicio/vue";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@prismicio/client";
const __default__ = {
  name: "ProductsView"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const results = ref([]);
    const loading = ref(true);
    const tabsRef = ref(null);
    let materializeInstance = null;
    const router = useRouter();
    usePageMeta({ title: "Produtos | INDFER - Ferramentas diamantadas", description: "Nossos produtos: soluções diamantadas para metalurgia e ferramentas ouro." });
    const _vm = getCurrentInstance();
    const proxy = _vm ? _vm.proxy : null;
    const { client: prismicClient } = usePrismic();
    function initTabs() {
      setTimeout(() => {
        if (!tabsRef.value) return;
        materializeInstance = M.Tabs.init(tabsRef.value);
        selectTab();
      }, 10);
    }
    function selectTab() {
      const fullPath = router.currentRoute.value.fullPath.split("/");
      const route = fullPath[fullPath.length - 1].replace("#", "");
      if (materializeInstance && route) {
        materializeInstance.select(route);
      }
    }
    async function fetchProductsFromClient() {
      try {
        if (prismicClient && typeof prismicClient.getByType === "function") {
          const response = await prismicClient.getByType("produto");
          results.value = response.results || [];
        } else if (prismicClient && typeof prismicClient.getAllByType === "function") {
          results.value = await prismicClient.getAllByType("produto");
        } else if (proxy?.$prismic?.client) {
          const r = await proxy.$prismic.client.getByType("produto");
          results.value = r.results || [];
        }
      } catch (e) {
      } finally {
        loading.value = false;
        initTabs();
      }
    }
    function goRoute(category, product) {
      return `/produtos/${category}/${product}`;
    }
    onServerPrefetch(async () => {
      try {
        if (!prismicClient) return;
        if (typeof prismicClient.getByType === "function") {
          const response = await prismicClient.getByType("produto");
          results.value = response.results || [];
        } else if (typeof prismicClient.getAllByType === "function") {
          results.value = await prismicClient.getAllByType("produto");
        }
        setSsrState("products", results.value || []);
      } catch (e) {
      } finally {
        loading.value = false;
      }
    });
    onMounted(() => {
      const initial = getInitialSsrState("products");
      if (initial && initial.length) {
        results.value = initial;
        loading.value = false;
        initTabs();
        return;
      }
      fetchProductsFromClient();
    });
    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        if (materializeInstance) {
          try {
            materializeInstance.updateTabIndicator();
          } catch (e) {
          }
          selectTab();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = resolveComponent("PrismicImage");
      const _component_PrismicText = resolveComponent("PrismicText");
      _push(`<!--[-->`);
      if (loading.value) {
        _push(ssrRenderComponent(Preloader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="products" style="${ssrRenderStyle(!loading.value ? null : { display: "none" })}"><div class="products__header"><div class="container"><div class="center-statement"><h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2></div><div class="center-statement"><p class="center-statement__text text-white"> Soluções diamantadas para metalurgia e usinagem de alianças — desempenho, precisão e vida útil estendida. </p></div><ul class="products__header__tabs tabs"><li class="tab"><a href="#metalurgia">METALURGIA</a></li><li class="tab"><a href="#ferramentas-ouro">FERRAMENTAS OURO</a></li></ul></div></div><div class="products__list"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { backLink: "home" }, null, _parent));
      _push(`<div id="metalurgia" class="products__list__item"><ul class="product-cards"><!--[-->`);
      ssrRenderList(results.value, (result, index) => {
        _push(`<!--[-->`);
        if (result.data.category === "metalurgia") {
          _push(`<li class="product-cards__item"><div class="product-cards__item__media">`);
          _push(ssrRenderComponent(_component_PrismicImage, {
            field: result.data.thumbnail
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.title,
            wrapper: "h3",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.subtitle,
            wrapper: "p",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$2, {
            link: { path: goRoute(result.data.category, result.uid) },
            fullWidth: true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`VER DETALHES`);
              } else {
                return [
                  createTextVNode("VER DETALHES")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div><div id="construcao-civil" class="products__list__item"><ul class="product-cards"><!--[-->`);
      ssrRenderList(results.value, (result, index) => {
        _push(`<!--[-->`);
        if (result.data.category === "construcao-civil") {
          _push(`<li class="product-cards__item"><div class="product-cards__item__media">`);
          _push(ssrRenderComponent(_component_PrismicImage, {
            field: result.data.thumbnail
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.title,
            wrapper: "h3",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.subtitle,
            wrapper: "p",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$2, {
            link: { path: goRoute(result.data.category, result.uid) },
            fullWidth: true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`ACESSAR`);
              } else {
                return [
                  createTextVNode("ACESSAR")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div><div id="ferramentas-ouro" class="products__list__item"><ul class="product-cards"><!--[-->`);
      ssrRenderList(results.value, (result, index) => {
        _push(`<!--[-->`);
        if (result.data.category === "ferramentas-ouro") {
          _push(`<li class="product-cards__item"><div class="product-cards__item__media">`);
          _push(ssrRenderComponent(_component_PrismicImage, {
            field: result.data.thumbnail
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.title,
            wrapper: "h3",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.data.subtitle,
            wrapper: "p",
            fallback: "No content"
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$2, {
            link: { path: goRoute(result.data.category, result.uid) },
            fullWidth: true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`ACESSAR`);
              } else {
                return [
                  createTextVNode("ACESSAR")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
