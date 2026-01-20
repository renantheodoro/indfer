import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { b as _sfc_main$1 } from "../entry-server.js";
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
  name: "ContactView"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    usePageMeta({ title: "Entre em contato! Solicite um orçamento | INDFER - Ferramentas diamantadas", description: "Solicite um orçamento ou esclareça dúvidas — nossa equipe técnica responde rapidamente." });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))}><div class="container"><div class="category-block"><h3 class="category-title">ENTRE EM CONTATO</h3><h2 class="category-calling text-blue"><strong>SOLICITE UM ORÇAMENTO.<br> NÃO DEIXE DE NOS CONTATAR</strong></h2><p> Solicite um orçamento ou esclareça dúvidas — nossa equipe técnica responde rapidamente e oferece soluções sob medida para sua produção. </p></div><div class="content__row"><div class="column-desktop--6 column--4"><div class="contact-page__center"><div class="contact-page__info-set">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-phone" }, null, _parent));
      _push(`<ul class="contact-page__info-set__block"><li><a href="tel:55112083-2079">(11) 2083-2079</a></li><li><a href="tel:551123089270">(11) 2308-9270</a></li><li><a href="tel:551120836505">(11) 2083-6505</a></li><li><a href="tel:5511985800731" class="icon-whatsapp">(11) 98580-0731 `);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-whatsapp" }, null, _parent));
      _push(`</a></li></ul></div><div class="contact-page__info-set">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-envelope-open" }, null, _parent));
      _push(`<ul class="contact-page__info-set__block"><li><a href="mailto:vendas@indfer.com.br">vendas@indfer.com.br</a></li><li><a href="mailto:indfer@indfer.com.br">indfer@indfer.com.br</a></li></ul></div></div><div class="contact-page__info-set">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }, null, _parent));
      _push(`<div class="contact-page__info-set__block"><address> R. Dom Vilares, 565 - Vila das Mercês<br> São Paulo - SP<br> CEP: 04160-001 </address></div></div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4152809417915!2d-46.61600694897376!3d-23.625294384575852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0d3dfc5523%3A0x987dc0ae75f46e81!2sR.%20Dom%20Vilares%2C%20565%20-%20Vila%20das%20Merces%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004160-001!5e0!3m2!1spt-BR!2sbr!4v1664551517760!5m2!1spt-BR!2sbr" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--5 column--4">`);
      _push(ssrRenderComponent(_sfc_main$1, { formId: "contact-page-form" }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
