import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Plan-a6f82d0b.mjs";
import "@inertiajs/vue3";
import "./editPlan-430a0e24.mjs";
const _sfc_main = {
  __name: "Plans",
  __ssrInlineRender: true,
  props: {
    plans: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Durée</th><th>Montant</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.plans, (plan, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          plan,
          index,
          key: index
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Plan/Components/Plans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
