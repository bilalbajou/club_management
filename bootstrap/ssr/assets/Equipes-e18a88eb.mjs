import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Equipe-ceecfbef.mjs";
import "@inertiajs/vue3";
import "./editModalEquipe-9f96d2ec.mjs";
const _sfc_main = {
  __name: "Equipes",
  __ssrInlineRender: true,
  props: {
    equipes: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Nom</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.equipes, (equipe, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          equipe,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipe/Components/Equipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
