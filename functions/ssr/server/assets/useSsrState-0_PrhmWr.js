import { resolveComponent, mergeProps, useSSRContext, inject, getCurrentInstance } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { c as _export_sfc } from "../entry-server.js";
import * as prismic from "@prismicio/client";
const __default__ = {
  name: "AppBackButton"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    backLink: { type: String, default: null }
  },
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<a${ssrRenderAttrs(mergeProps({ class: "back-button" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-angle-left" }, null, _parent));
      _push(`<span>VOLTAR</span></a>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/BackButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  name: "AppPreloader"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "preloader",
    role: "status",
    "aria-label": "Carregando"
  }, _attrs))}><div class="preloader-wrapper active"><div class="spinner-layer"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/Preloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Preloader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const endpoint = "https://indfer-v2.cdn.prismic.io/api/v2";
function createPrismicClient({ fetchFn } = {}) {
  const client = prismic.createClient(endpoint, {
    fetch: fetchFn || globalThis.fetch,
    // Use a variável de ambiente PRISMIC_ACCESS_TOKEN para repositórios privados
    accessToken: process.env.PRISMIC_ACCESS_TOKEN || void 0
  });
  return client;
}
const SSR_REQ_KEY = "ssrReq";
function usePrismic(options = {}) {
  const ssrReq = inject(SSR_REQ_KEY, null);
  const fetchFn = options.fetch || null;
  const client = createPrismicClient({ fetchFn });
  return { client, ssrReq };
}
function setSsrState(key, value) {
  const vm = getCurrentInstance();
  if (vm) {
    const app = vm.appContext.app;
    if (!app.config.globalProperties.$ssrState) app.config.globalProperties.$ssrState = {};
    app.config.globalProperties.$ssrState[key] = value;
  }
  try {
    if (typeof globalThis !== "undefined" && globalThis.__VUE_SSR_APP__) {
      const app = globalThis.__VUE_SSR_APP__;
      if (app && app.config) {
        if (!app.config.globalProperties.$ssrState) app.config.globalProperties.$ssrState = {};
        app.config.globalProperties.$ssrState[key] = value;
      }
    }
  } catch (e) {
  }
  try {
    if (typeof globalThis !== "undefined" && !globalThis.__VUE_SSR_APP__) {
      if (!globalThis.__SSR_STATE_TEMP__) globalThis.__SSR_STATE_TEMP__ = {};
      globalThis.__SSR_STATE_TEMP__[key] = value;
    }
  } catch (e) {
  }
}
function getInitialSsrState(key) {
  if (typeof window === "undefined") return void 0;
  const s = window.__SSR_STATE__ || {};
  return s[key];
}
export {
  Preloader as P,
  _sfc_main$1 as _,
  createPrismicClient as c,
  getInitialSsrState as g,
  setSsrState as s,
  usePrismic as u
};
