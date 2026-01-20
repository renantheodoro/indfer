import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_3 } from "./our_products-gold_tools-B1Bmm_W0.js";
import { _ as _sfc_main$1 } from "../entry-server.js";
import { u as usePageMeta } from "./usePageMeta-CeEXd9ar.js";
import "@vue/server-renderer";
import "vue-router";
import "emailjs-com";
import "vue-the-mask";
import "@vueuse/head";
import "@prismicio/vue";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
const _imports_0 = "/assets/catalog-media-CjWHe5OF.webp";
const __default__ = {
  name: "app-catalog"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    usePageMeta({ title: "Catálogo de Produtos | INDFER - Ferramentas diamantadas", description: "Baixe nosso catálogo e conheça as soluções INDFER para sua produção." });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog-page" }, _attrs))}><div class="container"><div class="center-statement"><h2 class="center-statement__title center-statement__title--simple text-blue"> BAIXE NOSSO CATÁLOGO </h2></div><div class="content__row content__row--align-center"><div class="column-desktop--6 column--4"><div class="catalog-page__media"><span class="catalog-page__media__shape catalog-page__media__shape--colored"></span><span class="catalog-page__media__shape catalog-page__media__shape--grey"></span><span class="catalog-page__media__shape catalog-page__media__shape--light"></span><img${ssrRenderAttr("src", _imports_0)} alt="Baixe nosso catálogo"></div></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--5 column--4"><ul class="catalog-page__gallery"><li class="catalog-page__gallery__item"><img${ssrRenderAttr("src", _imports_1)} title="Nossos produtos - Metalurgia" alt="Nossos produtos - metalurgia"><h4>METALURGIA</h4></li>`);
      {
        _push(`<!---->`);
      }
      _push(`<li class="catalog-page__gallery__item"><img${ssrRenderAttr("src", _imports_3)} title="Nossos produtos - Ferramentas ouro" alt="Nossos produtos - Ferramentas ouro"><h4>FERRAMENTAS OURO</h4></li></ul>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        externalPath: "https://firebasestorage.googleapis.com/v0/b/indfer-822a1.appspot.com/o/catalogo_2014.pdf?alt=media&token=69c3271c-eb2b-428d-ac8f-a6c892df0cab",
        fullWidth: true,
        type: "primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BAIXAR CATÁLOGO`);
          } else {
            return [
              createTextVNode("BAIXAR CATÁLOGO")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/Catalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
