import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const __default__ = {
  name: "app-not-found"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    usePageMeta({ title: "404 - Página não encontrada | INDFER - Ferramentas diamantadas", description: "Conteúdo não encontrado" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-found" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-gears" }, null, _parent));
      _push(`<h2><strong>404</strong> conteúdo não encontrado</h2>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        link: { name: "home" },
        fullWidth: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VOLTAR PARA O INÍCIO`);
          } else {
            return [
              createTextVNode("VOLTAR PARA O INÍCIO")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
