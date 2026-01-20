import { ref, onMounted, onBeforeUnmount, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { M, _ as _sfc_main$1 } from "../entry-server.js";
const _imports_0 = "/assets/catalog-bg-DFR0bBUy.webp";
const __default__ = {
  name: "CatalogSection"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const parallaxRef = ref(null);
    let parallaxInstance = null;
    onMounted(() => {
      if (parallaxRef.value) {
        parallaxInstance = M.Parallax.init(parallaxRef.value);
      }
    });
    onBeforeUnmount(() => {
      if (parallaxInstance && typeof parallaxInstance.destroy === "function") {
        parallaxInstance.destroy();
      } else if (parallaxRef.value) {
        M.Parallax.getInstance(parallaxRef.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog" }, _attrs))}><div class="parallax-container"><div class="parallax"><img width="1400" height="1080"${ssrRenderAttr("src", _imports_0)} title="Fundo da seção catálogo - INDFER" alt="Fundo da seção catálogo - INDFER"><div class="container"><div class="center-statement"><h2 class="center-statement__title text-white"> BAIXE NOSSO CATÁLOGO </h2><p class="center-statement__text text-white"> Acesse todos os nossos catálogos e baixe gratuitamente para saber mais detalhes de cada produto. </p><div class="content__row justify-content--center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        link: { name: "catalog" },
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ACESSAR CATÁLOGO`);
          } else {
            return [
              createTextVNode("ACESSAR CATÁLOGO")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/modules/CatalogSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
