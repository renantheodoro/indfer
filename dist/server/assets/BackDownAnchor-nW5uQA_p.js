import { computed, resolveComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../entry-server.js";
const __default__ = {
  name: "BackDownAnchor"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    type: { type: String, default: "primary" },
    fullWidth: { type: Boolean, default: false },
    link: { type: Object, default: null }
  },
  setup(__props) {
    const props = __props;
    const buttonClassLogic = computed(() => ({
      "button-down-anchor--full-width": props.fullWidth
    }));
    function scroll(event) {
      const section = event?.target?.closest?.("section");
      if (!section) return;
      const nextSection = section.nextElementSibling;
      if (!nextSection) return;
      const header = document.getElementsByTagName("header")[0];
      const offset = header?.offsetHeight || 0;
      window.scrollTo({
        top: nextSection.offsetTop - offset,
        behavior: "smooth"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["button-down-anchor", buttonClassLogic.value]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: scroll,
        type: props.type,
        fullWidth: props.fullWidth,
        link: props.link
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
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-angle-down" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/components/BackDownAnchor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
