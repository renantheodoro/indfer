import { c as _export_sfc, b as _sfc_main$1 } from "../entry-server.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  name: "app-contact-form",
  components: {
    ContactForm: _sfc_main$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactForm = resolveComponent("ContactForm");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-section" }, _attrs))}><div class="container"><div class="content__row content__row--align-center"><div class="column-desktop--6 column--4"><div class="category-block"><h3 class="category-title">ENTRE EM CONTATO</h3><h2 class="category-calling text-blue"><strong>SOLICITE UM ORÇAMENTO. <br> NÃO DEIXE DE NOS CONTATAR</strong></h2><p> Solicite um orçamento ou esclareça dúvidas — nossa equipe técnica responde rapidamente e oferece soluções sob medida para sua produção. </p></div></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--5 column--4">`);
  _push(ssrRenderComponent(_component_ContactForm, { formId: "contact-section-form" }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/modules/ContactSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactSection as C
};
