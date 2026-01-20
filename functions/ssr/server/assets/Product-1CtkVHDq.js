import { ref, getCurrentInstance, computed, onServerPrefetch, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, createCommentVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as usePageMeta } from "./usePageMeta-CeEXd9ar.js";
import { u as usePrismic, c as createPrismicClient, s as setSsrState, P as Preloader, _ as _sfc_main$2 } from "./useSsrState-0_PrhmWr.js";
import { _ as _sfc_main$3, a as Modal, b as _sfc_main$5 } from "../entry-server.js";
import { _ as _sfc_main$4 } from "./BackDownAnchor-nW5uQA_p.js";
import { C as ContactSection } from "./ContactSection-BFbD_bdW.js";
import _sfc_main$1 from "./NotFound-OpkZIdmu.js";
import { _ as _sfc_main$6 } from "./CatalogSection-DyYLgvu4.js";
import "@vueuse/head";
import "@prismicio/client";
import "@vue/server-renderer";
import "emailjs-com";
import "vue-the-mask";
import "@prismicio/vue";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
const __default__ = {
  name: "AppProduct"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const notFound = ref(false);
    const result = ref({
      data: {
        title: "",
        subtitle: "",
        description: "",
        thumbnail: null,
        details: []
      }
    });
    const category = ref("");
    const categoryName = ref("");
    const productImageDetail = ref(null);
    const contactForm = ref(null);
    const route = useRoute();
    const _vm = getCurrentInstance();
    const proxy = _vm ? _vm.proxy : null;
    const prismic = proxy?.$prismic;
    const { client: ssrPrismicClient } = usePrismic();
    const pathForCategory = route.path || "";
    if (pathForCategory.includes("metalurgia")) {
      category.value = "metallurgy";
      categoryName.value = "Metalurgia";
    } else if (pathForCategory.includes("construcao-civil")) {
      category.value = "civil-building";
      categoryName.value = "Construção Civil";
    } else if (pathForCategory.includes("ferramentas-ouro")) {
      category.value = "gold-tools";
      categoryName.value = "Ferramentas ouro";
    }
    function plainTextFromRichText(rt) {
      if (!rt) return "";
      if (Array.isArray(rt)) return rt.map((r) => r.text || "").join(" ").trim();
      if (typeof rt === "string") return rt;
      return "";
    }
    const titleComputed = computed(() => {
      const prod = plainTextFromRichText(result.value?.data?.title) || "Produto";
      const prefix = categoryName.value ? `${categoryName.value}: ` : "";
      return `${prefix}${prod} | INDFER - Ferramentas diamantadas`;
    });
    const descComputed = computed(() => {
      return plainTextFromRichText(result.value?.data?.subtitle) || "Detalhes do produto INDFER";
    });
    usePageMeta({ title: titleComputed, description: descComputed });
    async function getProductData(uid, clientParam = null) {
      loading.value = true;
      notFound.value = false;
      try {
        const clientToUse = clientParam || prismic?.client || proxy?.$prismic?.client;
        if (!clientToUse) throw new Error("Prismic client not available");
        const response = await clientToUse.getByUID("produto", uid);
        if (response) {
          result.value = response;
          loading.value = false;
          return;
        }
        loading.value = false;
        notFound.value = true;
      } catch (error) {
        console.error(error);
        loading.value = false;
        notFound.value = true;
      }
    }
    onServerPrefetch(async () => {
      try {
        const uid = route.params.id;
        if (!uid) {
          notFound.value = true;
          loading.value = false;
          return;
        }
        const clientToUse = ssrPrismicClient || createPrismicClient();
        if (clientToUse) {
          try {
            const response = await getProductData(uid, clientToUse);
            setSsrState("product", result.value);
          } catch (e) {
            console.error("[Product][onServerPrefetch] getProductData error:", e);
          }
        }
      } catch (e) {
      }
    });
    function showModal(refName) {
      const map = {
        productImageDetail,
        contactForm
      };
      const r = map[refName];
      if (r && r.value && typeof r.value.showModal === "function") {
        r.value.showModal(refName);
      }
    }
    onMounted(() => {
      const uid = route.params.id;
      if (!uid) {
        notFound.value = true;
        loading.value = false;
        return;
      }
      getProductData(uid);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = resolveComponent("PrismicImage");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_PrismicText = resolveComponent("PrismicText");
      const _component_PrismicRichText = resolveComponent("PrismicRichText");
      if (loading.value) {
        _push(ssrRenderComponent(Preloader, _attrs, null, _parent));
      } else if (notFound.value) {
        _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-details" }, _attrs))}><section class="${ssrRenderClass("product-details_header product-details_header--" + category.value)}"><h1>${ssrInterpolate(categoryName.value)}</h1></section><section class="product-details__main-content"><div class="container">`);
        _push(ssrRenderComponent(_sfc_main$2, { backLink: "products" }, null, _parent));
        _push(`<div class="product-details__row"><div class="product-details__main-content__media"><div class="holder">`);
        _push(ssrRenderComponent(_component_PrismicImage, {
          field: result.value.data.thumbnail
        }, null, _parent));
        _push(`<div class="zoom-button">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-magnifying-glass" }, null, _parent));
        _push(`</div></div><legend>Imagem meramente ilustrativa*</legend></div><div class="product-details__main-content__content"><div class="dynamic-content">`);
        _push(ssrRenderComponent(_component_PrismicText, {
          field: result.value.data.title,
          wrapper: "h3",
          fallback: "No content"
        }, null, _parent));
        if (result.value.data.subtitle) {
          _push(ssrRenderComponent(_component_PrismicText, {
            field: result.value.data.subtitle,
            wrapper: "h4",
            fallback: "No content"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: result.value.data.description
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          onClick: ($event) => showModal("contactForm")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`FAZER ORÇAMENTO`);
            } else {
              return [
                createTextVNode("FAZER ORÇAMENTO")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (result.value.data.details && result.value.data.details.length) {
          _push(ssrRenderComponent(_sfc_main$4, { type: "secondary-orange" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`VISUALIZAR MAIS DETALHES`);
              } else {
                return [
                  createTextVNode("VISUALIZAR MAIS DETALHES")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
        _push(ssrRenderComponent(Modal, {
          id: "product-image-detail-modal",
          ref_key: "productImageDetail",
          ref: productImageDetail
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (result.value) {
                _push2(ssrRenderComponent(_component_PrismicImage, {
                  field: result.value.data.thumbnail
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                result.value ? (openBlock(), createBlock(_component_PrismicImage, {
                  key: 0,
                  field: result.value.data.thumbnail
                }, null, 8, ["field"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(Modal, {
          isContactForm: true,
          id: "contact-form-modal",
          ref_key: "contactForm",
          ref: contactForm
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="category-block"${_scopeId}><h3 class="category-title"${_scopeId}>SOLICITE UM ORÇAMENTO</h3></div>`);
              _push2(ssrRenderComponent(_sfc_main$5, { formId: "product-page-form" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "category-block" }, [
                  createVNode("h3", { class: "category-title" }, "SOLICITE UM ORÇAMENTO")
                ]),
                createVNode(_sfc_main$5, { formId: "product-page-form" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
        if (result.value.data.details && result.value.data.details.length) {
          _push(`<section class="product-details__more-details"><div class="container"><div class="dynamic-content"><h3>Detalhamento Técnico</h3>`);
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: result.value.data.details
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_sfc_main$2, { backLink: "products" }, null, _parent));
          _push(`</div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(ssrRenderComponent(ContactSection, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
