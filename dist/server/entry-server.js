import { renderToString } from "@vue/server-renderer";
import { useSSRContext, computed, resolveComponent, withCtx, renderSlot, ref, onMounted, onBeforeUnmount, mergeProps, getCurrentInstance, reactive, resolveDirective, createTextVNode, createVNode, createSSRApp, createApp as createApp$1 } from "vue";
import * as VueRouter from "vue-router";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "emailjs-com";
import pkg from "vue-the-mask";
import { useHead, createHead } from "@vueuse/head";
import { createPrismic } from "@prismicio/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPhone, faEnvelopeOpen, faLocationDot, faAngleDown, faAngleLeft, faMagnifyingGlass, faGears, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
const Home = () => import("./assets/Home-1kS12nuU.js");
const About = () => import("./assets/About-C3OaJVmw.js");
const Products = () => import("./assets/ProductList-8NuKWdRD.js");
const ProductDetails = () => import("./assets/Product-1CtkVHDq.js");
const Catalog = () => import("./assets/Catalog-D-icNvvi.js");
const Contact = () => import("./assets/Contact-CRoexE-Q.js");
const NotFound = () => import("./assets/NotFound-OpkZIdmu.js");
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/sobre", name: "about", component: About },
  // lista de produtos
  { path: "/produtos", name: "products", component: Products },
  // detalhes (cada categoria com sua rota)
  {
    path: "/produtos/metalurgia/:id",
    name: "product-metalurgia",
    component: ProductDetails,
    props: true
  },
  {
    path: "/produtos/construcao-civil/:id",
    name: "product-construcao-civil",
    component: ProductDetails,
    props: true
  },
  {
    path: "/produtos/ferramentas-ouro/:id",
    name: "product-ferramentas-ouro",
    component: ProductDetails,
    props: true
  },
  { path: "/catalogo", name: "catalog", component: Catalog },
  { path: "/contato", name: "contact", component: Contact },
  // 404
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound }
];
const _imports_0$1 = "/assets/main-logo-WVvuLhC_.webp";
const _imports_1 = "data:image/webp;base64,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";
const Parallax = {
  init: () => null,
  getInstance: () => null
};
const FormSelect = {
  init: () => null,
  getInstance: () => null
};
const Sidenav = {
  init: () => null,
  getInstance: () => null
};
const Tabs = {
  init: () => null,
  getInstance: () => null
};
const M = {
  Parallax,
  FormSelect,
  Sidenav,
  Tabs
  // legacy: some code may call M.Parallax.getInstance(el).destroy()
};
const __default__$3 = {
  name: "AppCustomButton"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$3, {
  __ssrInlineRender: true,
  props: {
    type: { type: String, default: "primary" },
    fullWidth: { type: Boolean, default: false },
    link: { type: [Object, String], required: false },
    externalPath: { type: [Object, String], required: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const buttonClassLogic = computed(() => ({
      "button--primary": props.type === "primary",
      "button--primary-blue": props.type === "primary-blue",
      "button--secondary": props.type === "secondary",
      "button--secondary-orange": props.type === "secondary-orange",
      "button--full-width": props.fullWidth
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      if (__props.link) {
        _push(ssrRenderComponent(_component_router_link, {
          to: __props.link,
          class: ["button btn waves-effect waves-light", buttonClassLogic.value]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a class="${ssrRenderClass([buttonClassLogic.value, "button btn waves-effect waves-light"])}"${ssrRenderAttr("href", __props.externalPath ? __props.externalPath : "#")}${ssrRenderAttr("target", __props.externalPath ? "_blank" : "")}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      }
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/CustomButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$2 = {
  name: "AppModal"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: true },
    isContactForm: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    const modalRef = ref(null);
    const isOpened = ref(false);
    let modalInstance = null;
    function showModal() {
      if (modalInstance) {
        modalInstance.open();
        return;
      }
      if (modalRef.value) {
        modalInstance = M.Modal.init(modalRef.value, {
          onOpenStart() {
            isOpened.value = true;
          },
          onCloseEnd() {
            isOpened.value = false;
          },
          dismissible: true
        });
        modalInstance.open();
      }
    }
    function hideModal() {
      if (modalInstance) {
        try {
          modalInstance.close();
        } catch (e) {
        }
      } else if (modalRef.value) {
        modalRef.value.classList.remove("open");
        isOpened.value = false;
      }
    }
    __expose({ showModal, hideModal });
    onMounted(() => {
      if (modalRef.value) {
        modalInstance = M.Modal.init(modalRef.value, {
          onOpenStart() {
            isOpened.value = true;
          },
          onCloseEnd() {
            isOpened.value = false;
          },
          dismissible: true
        });
      }
    });
    onBeforeUnmount(() => {
      if (modalInstance) {
        try {
          modalInstance.destroy();
        } catch (e) {
        }
        modalInstance = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      if (isOpened.value) {
        _push(`<a class="${ssrRenderClass([{ "close-modal--contact-form": __props.isContactForm }, "close-modal"])}" aria-label="Fechar modal" data-v-510945d4>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-xmark" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttr("id", __props.id)} class="modal" role="dialog"${ssrRenderAttr("aria-modal", true)} data-v-510945d4><div class="modal-content" role="document" data-v-510945d4>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/Modal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-510945d4"]]);
const _sfc_main$4 = {
  name: "AppCustomButtonSubmit",
  props: {
    isEnabled: {
      type: Boolean,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "submit",
    class: ["button button--full-width btn waves-effect waves-light", $props.isEnabled ? "button--primary" : "disabled"]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/CustomButtonSubmit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CustomButtonSubmit = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const { mask } = pkg;
const __default__$1 = {
  name: "ContactForm",
  directives: { mask }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    formId: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const _vm = getCurrentInstance();
    const proxy = _vm ? _vm.proxy : null;
    function getFormInitialValues() {
      return {
        form: {
          isValid: false,
          success: false,
          fail: false,
          firstName: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false
          },
          lastName: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false
          },
          company: { value: "", isValid: null, errorMessage: "", isVisited: false },
          phone: { value: "", isValid: null, errorMessage: "", isVisited: false },
          email: { value: "", isValid: null, errorMessage: "", isVisited: false },
          find: { value: "-1", isValid: null, errorMessage: "", isVisited: false },
          message: { value: "", isValid: null, errorMessage: "", isVisited: false }
        }
      };
    }
    const state = reactive(getFormInitialValues());
    function resetForm() {
      const initial = getFormInitialValues();
      Object.keys(initial).forEach((k) => {
        state[k] = initial[k];
      });
    }
    onMounted(() => {
      const refName = `${props.formId}-find`;
      proxy?.$refs?.[refName];
    });
    onBeforeUnmount(() => {
      const refName = `${props.formId}-find`;
      proxy?.$refs?.[refName];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _directive_mask = resolveDirective("mask");
      let _temp0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "contact-form forms" }, _attrs))}><div class="input-field"><input${ssrRenderAttr("id", `${__props.formId}-first_name`)}${ssrRenderAttr("value", state.form.firstName.value)} type="text" class="${ssrRenderClass({
        success: state.form.firstName.isValid === true,
        error: state.form.firstName.isValid === false
      })}">`);
      if (state.form.firstName.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.firstName.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label${ssrRenderAttr("for", `${__props.formId}-first_name`)}>Nome *</label></div><div class="input-field"><input${ssrRenderAttr("id", `${__props.formId}-last_name`)}${ssrRenderAttr("value", state.form.lastName.value)} type="text" class="${ssrRenderClass({
        success: state.form.lastName.isValid === true,
        error: state.form.lastName.isValid === false
      })}"><label${ssrRenderAttr("for", `${__props.formId}-last_name`)}>Sobrenome *</label>`);
      if (state.form.lastName.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.lastName.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="input-field"><input${ssrRenderAttr("id", `${__props.formId}-company`)}${ssrRenderAttr("value", state.form.company.value)} type="text" class="${ssrRenderClass({
        success: state.form.company.isValid === true,
        error: state.form.company.isValid === false
      })}"><label${ssrRenderAttr("for", `${__props.formId}-company`)}>Empresa</label>`);
      if (state.form.company.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.company.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="input-field"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: `${__props.formId}-phone`,
        ref: `${__props.formId}-phone`,
        type: "text",
        value: state.form.phone.value,
        class: {
          success: state.form.phone.isValid === true,
          error: state.form.phone.isValid === false
        }
      }, ssrGetDirectiveProps(_ctx, _directive_mask, ["(##) ####-####", "(##) #####-####"])), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, state.form.phone.value))))}><label${ssrRenderAttr("for", `${__props.formId}-phone`)}>Telefone *</label>`);
      if (state.form.phone.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.phone.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="input-field"><input${ssrRenderAttr("id", `${__props.formId}-email`)}${ssrRenderAttr("value", state.form.email.value)} type="text" class="${ssrRenderClass({
        success: state.form.email.isValid === true,
        error: state.form.email.isValid === false
      })}"><label${ssrRenderAttr("for", `${__props.formId}-email`)}>E-mail *</label>`);
      if (state.form.email.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.email.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{
        success: state.form.find.isValid === true,
        error: state.form.find.isValid === false
      }, "input-field input-field--select"])}"><select${ssrRenderAttr("id", `${__props.formId}-find`)}><option value="-1" disabled selected>Selecione uma opção</option><option value="Google"${ssrIncludeBooleanAttr(Array.isArray(state.form.find.value) ? ssrLooseContain(state.form.find.value, "Google") : ssrLooseEqual(state.form.find.value, "Google")) ? " selected" : ""}>Google</option><option value="Indicação"${ssrIncludeBooleanAttr(Array.isArray(state.form.find.value) ? ssrLooseContain(state.form.find.value, "Indicação") : ssrLooseEqual(state.form.find.value, "Indicação")) ? " selected" : ""}>Indicação</option><option value="E-mail"${ssrIncludeBooleanAttr(Array.isArray(state.form.find.value) ? ssrLooseContain(state.form.find.value, "E-mail") : ssrLooseEqual(state.form.find.value, "E-mail")) ? " selected" : ""}>E-mail</option></select><label${ssrRenderAttr("for", `${__props.formId}-find`)}>Como nos encontrou? *</label>`);
      if (state.form.find.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.find.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="input-field"><textarea${ssrRenderAttr("id", `${__props.formId}-message`)} length="60" class="${ssrRenderClass([{
        success: state.form.message.isValid === true,
        error: state.form.message.isValid === false
      }, "materialize-textarea"])}">${ssrInterpolate(state.form.message.value)}</textarea><label${ssrRenderAttr("for", `${__props.formId}-message`)}>Mensagem *</label>`);
      if (state.form.message.isValid === false) {
        _push(`<span class="helper-text">${ssrInterpolate(state.form.message.errorMessage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(CustomButtonSubmit, {
        isEnabled: state.form.isValid
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ENVIAR ORÇAMENTO`);
          } else {
            return [
              createTextVNode("ENVIAR ORÇAMENTO")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (state.form.success) {
        _push(`<div class="contact-form__message contact-form__message--sucess">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-regular fa-circle-check" }, null, _parent));
        _push(`<h2>Seu orçamento foi enviado!</h2><p>Aguarde que logo entraremos em contato.</p>`);
        _push(ssrRenderComponent(_sfc_main$6, { onClick: resetForm }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Enviar novo orçamento`);
            } else {
              return [
                createTextVNode("Enviar novo orçamento")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (state.form.fail) {
        _push(`<div class="contact-form__message contact-form__message--failed">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-regular fa-face-sad-tear" }, null, _parent));
        _push(`<h2>Ops! Alguma coisa deu errado no envio.</h2><p>Tente novamente mais tarde.</p>`);
        _push(ssrRenderComponent(CustomButtonSubmit, { onClick: resetForm }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Enviar novo orçamento`);
            } else {
              return [
                createTextVNode("Enviar novo orçamento")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/modules/ContactForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __default__ = {
  name: "AppHeader"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const sidenav = ref(null);
    ref(null);
    const sidenavInstance = ref(null);
    const _vm = getCurrentInstance();
    const proxy = _vm ? _vm.proxy : null;
    function closeMenu() {
      try {
        const instance = M.Sidenav.getInstance(sidenav.value);
        if (instance && typeof instance.close === "function") ;
      } catch (e) {
      }
    }
    function showModal(refName) {
      const modalRef = proxy?.$refs?.[refName];
      if (modalRef && typeof modalRef.showModal === "function") {
        modalRef.showModal(refName);
      }
      closeMenu();
    }
    onMounted(() => {
      if (sidenav.value) {
        sidenavInstance.value = M.Sidenav.init(sidenav.value, { edge: "right" });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><header class="header header--desktop only-desktop"><div class="container"><div class="header__main-logo">`);
      _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="165" height="37"${ssrRenderAttr("src", _imports_0$1)} alt="INDFER - Ferramentas diamantadas" title="INDFER - Ferramentas diamantadas"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "165",
                height: "37",
                src: _imports_0$1,
                alt: "INDFER - Ferramentas diamantadas",
                title: "INDFER - Ferramentas diamantadas"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav><ul class="header__navigation tabs"><li class="tab">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "home" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home `);
          } else {
            return [
              createTextVNode("Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="tab">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "about" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sobre `);
          } else {
            return [
              createTextVNode("Sobre ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="tab">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "products" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Produtos `);
          } else {
            return [
              createTextVNode("Produtos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="tab">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "catalog" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Catálogo `);
          } else {
            return [
              createTextVNode("Catálogo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="tab">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "contact" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato `);
          } else {
            return [
              createTextVNode("Contato ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onClick: ($event) => showModal("contact-form-modal")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Solicite orçamento`);
          } else {
            return [
              createTextVNode("Solicite orçamento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div></header><header class="header header--mobile only-mobile"><div class="header__main-logo">`);
      _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="130" height="30"${ssrRenderAttr("src", _imports_1)} alt="INDFER - Ferramentas diamantadas" title="INDFER - Ferramentas diamantadas"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "130",
                height: "30",
                src: _imports_1,
                alt: "INDFER - Ferramentas diamantadas",
                title: "INDFER - Ferramentas diamantadas"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul id="slide-out" class="sidenav"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        onClick: closeMenu,
        to: { name: "home" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home `);
          } else {
            return [
              createTextVNode("Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        onClick: closeMenu,
        to: { name: "about" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sobre `);
          } else {
            return [
              createTextVNode("Sobre ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        onClick: closeMenu,
        to: { name: "products" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Produtos `);
          } else {
            return [
              createTextVNode("Produtos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        onClick: closeMenu,
        to: { name: "catalog" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Catálogo `);
          } else {
            return [
              createTextVNode("Catálogo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        onClick: closeMenu,
        to: { name: "contact" },
        class: "header__navigation__item waves-effect waves-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato `);
          } else {
            return [
              createTextVNode("Contato ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><div class="divider"></div></li><li>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onClick: ($event) => showModal("contact-form-modal")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Solicite orçamento`);
          } else {
            return [
              createTextVNode("Solicite orçamento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><a href="#" data-target="slide-out" class="sidenav-trigger">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-bars" }, null, _parent));
      _push(`</a></header>`);
      _push(ssrRenderComponent(Modal, {
        id: "contact-form-modal",
        ref: "contact-form-modal",
        isContactForm: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="category-block"${_scopeId}><h3 class="category-title"${_scopeId}>SOLICITE UM ORÇAMENTO</h3></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { formId: "header-form" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "category-block" }, [
                createVNode("h3", { class: "category-title" }, "SOLICITE UM ORÇAMENTO")
              ]),
              createVNode(_sfc_main$3, { formId: "header-form" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/modules/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "/assets/secondary-logo-uHLyitUd.png";
const _sfc_main$1 = {
  name: "app-footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container"><div class="content__row"><div class="column-desktop--4 column--4">`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img width="240" height="50"${ssrRenderAttr("src", _imports_0)} alt="INDFER - Ferramentas diamantadas" title="INDFER - Ferramentas diamantadas" class="footer__logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            width: "240",
            height: "50",
            src: _imports_0,
            alt: "INDFER - Ferramentas diamantadas",
            title: "INDFER - Ferramentas diamantadas",
            class: "footer__logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="footer__description"> A melhor base para a qualidade é a <strong>experiência</strong>. </p><nav class="footer__pages"><ul><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "about" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`SOBRE`);
      } else {
        return [
          createTextVNode("SOBRE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "products" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PRODUTOS`);
      } else {
        return [
          createTextVNode("PRODUTOS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "catalog" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CATÁLOGO`);
      } else {
        return [
          createTextVNode("CATÁLOGO")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "contact" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CONTATO`);
      } else {
        return [
          createTextVNode("CONTATO")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--3 column--4"><h3 class="footer__title">CONTATO</h3><div class="footer__info-set">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-phone" }, null, _parent));
  _push(`<ul class="footer__info-set__block"><li><a href="tel:55112083-2079">(11) 2083-2079</a></li><li><a href="tel:551123089270">(11) 2308-9270</a></li><li><a href="tel:551120836505">(11) 2083-6505</a></li><li><a href="tel:5511985800731" class="icon-whatsapp">(11) 98580-0731 `);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-whatsapp" }, null, _parent));
  _push(`</a></li></ul></div><div class="footer__info-set">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-envelope-open" }, null, _parent));
  _push(`<ul class="footer__info-set__block"><li><a href="mailto:vendas@indfer.com.br">vendas@indfer.com.br</a></li><li><a href="mailto:indfer@indfer.com.br">indfer@indfer.com.br</a></li></ul></div><div class="footer__info-set">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-location-dot" }, null, _parent));
  _push(`<div class="footer__info-set__block"><address> R. Dom Vilares, 565<br> Vila das Mercês<br> São Paulo - SP<br> CEP: 04160-001 </address></div></div></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--3 column--4"><h3 class="footer__title">REDES SOCIAIS</h3><ul class="footer_social-media"><li><a href="https://www.facebook.com/indfer/" target="_blank">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-facebook-f" }, null, _parent));
  _push(`</a></li><li><a href="https://www.instagram.com/indfer10/" target="_blank">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-instagram" }, null, _parent));
  _push(`</a></li><li><a href="tel:5511985800731">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-brands fa-whatsapp" }, null, _parent));
  _push(`</a></li></ul></div></div></div><div class="footer__bottom"><p> Copyright © 2022 • Developed by <a href="https://renantheodoro.dev/" target="_blank" class="text-orange">Renan Theodoro</a></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/modules/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const siteMetaDefaults = {
  title: "INDFER - Ferramentas diamantadas",
  htmlAttrs: { lang: "pt-br" },
  description: "Atuamos no ramo de ferramentas diamantadas com negócios focados em metalurgia e ferramentas ouro.",
  image: "https://firebasestorage.googleapis.com/v0/b/indfer-822a1.appspot.com/o/indfer-thumbnail.jpg?alt=media&token=8d7b9650-b918-4ced-811e-4c0a595f6a45",
  url: "https://www.indfer.com.br"
};
function buildBaseHead({ type = "website", ...overrides } = {}) {
  const defaults = Object.assign({}, siteMetaDefaults, overrides);
  return {
    title: defaults.title,
    htmlAttrs: defaults.htmlAttrs,
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      { name: "title", content: defaults.title },
      { name: "description", content: defaults.description },
      { property: "og:type", content: type },
      { property: "og:url", content: defaults.url },
      { property: "og:title", content: defaults.title },
      { property: "og:description", content: defaults.description },
      { property: "og:image", content: defaults.image },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: defaults.url },
      { property: "twitter:title", content: defaults.title },
      { property: "twitter:description", content: defaults.description },
      { property: "twitter:image", content: defaults.image }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=AW-1009093109", async: true },
      {
        children: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1009093109');",
        type: "text/javascript"
      },
      { children: "window.neuroleadId = 66333;", type: "text/javascript" },
      { src: "https://cdn.leadster.com.br/neurolead/neurolead.min.js", defer: true, type: "text/javascript" }
    ]
  };
}
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "App" }, {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead(buildBaseHead());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function linkResolver(document) {
  if (document.type === "products") {
    return "/produtos/" + document.uid;
  }
  return "/";
}
const endpoint = "https://indfer-v2.prismic.io/api/v2";
const prismic = createPrismic({
  endpoint,
  linkResolver
});
const icons = [
  faStar,
  faPhone,
  faEnvelopeOpen,
  faLocationDot,
  faAngleDown,
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXmark,
  faCircleCheck,
  faFaceSadTear,
  faBars
];
library.add(...icons);
function createApp(url = "/") {
  const isServer = typeof window === "undefined";
  const router = VueRouter.createRouter({
    history: isServer ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior() {
      return { top: 0 };
    }
  });
  const app = isServer ? createSSRApp(_sfc_main) : createApp$1(_sfc_main);
  const head = createHead();
  app.use(head);
  if (isServer) {
    try {
      if (typeof globalThis !== "undefined") globalThis.__VUE_SSR_APP__ = app;
    } catch (e) {
    }
  }
  app.use(router);
  app.use(prismic);
  if (isServer && url) {
    try {
      router.push(url);
    } catch (e) {
    }
  }
  app.component("font-awesome-icon", FontAwesomeIcon);
  return { app, router, head };
}
async function render(url, { req } = {}) {
  const { app, router, head } = createApp(url);
  if (req) app.provide("ssrReq", req);
  await router.isReady();
  const appHtml = await renderToString(app);
  let headTags = "";
  let htmlAttrs = "";
  let bodyAttrs = "";
  if (head && typeof head.renderHeadToString === "function") {
    const res = head.renderHeadToString();
    headTags = res.headTags;
    htmlAttrs = res.htmlAttrs;
    bodyAttrs = res.bodyAttrs;
  } else {
    try {
      const mod = await import("@vueuse/head");
      if (mod && typeof mod.renderHeadToString === "function") {
        const res = mod.renderHeadToString(head || void 0);
        headTags = res.headTags || "";
        htmlAttrs = res.htmlAttrs || "";
        bodyAttrs = res.bodyAttrs || "";
      }
    } catch (e) {
      console.warn("[entry-server] could not render head to string:", e);
    }
  }
  const ssrState = app.config.globalProperties.$ssrState || {};
  try {
    const temp = typeof globalThis !== "undefined" && globalThis.__SSR_STATE_TEMP__ || {};
    const merged = Object.assign({}, temp, ssrState);
    Object.keys(merged).forEach((k) => ssrState[k] = merged[k]);
  } catch (e) {
  }
  try {
    const hasHead = headTags && String(headTags).trim().length > 0;
    if (!hasHead && ssrState && ssrState.product) {
      const product = ssrState.product;
      const extractPlain = (node) => {
        if (!node) return "";
        if (Array.isArray(node)) return node.map((r) => r && (r.text || r.first_child?.text) || "").join(" ").trim();
        if (typeof node === "string") return node;
        if (node.text) return node.text;
        return "";
      };
      const rawTitle = extractPlain(product?.data?.title) || extractPlain(product?.data?.name) || product?.data?.title || "Produto INDFER";
      const categoryRaw = product?.data?.category || Array.isArray(product?.tags) && product.tags[0] || "";
      const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s || "";
      const categoryName = categoryRaw ? capitalize(String(categoryRaw)) : "";
      const titleStr = (categoryName ? `${categoryName}: ` : "") + `${rawTitle} | INDFER - Ferramentas diamantadas`;
      const escapeHtml = (str) => String(str).replace(/[&"'<>]/g, (s) => ({ "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" })[s]);
      headTags = `<title>${escapeHtml(titleStr)}</title>`;
    }
  } catch (e) {
  }
  return { html: appHtml, ssrState, headTags, htmlAttrs, bodyAttrs };
}
export {
  M,
  _sfc_main$6 as _,
  Modal as a,
  _sfc_main$3 as b,
  _export_sfc as c,
  buildBaseHead as d,
  render
};
