import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Matche-6ad5d483.mjs";
import "./reporterMatche-4b83f67b.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Matches",
  __ssrInlineRender: true,
  props: {
    matches: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Adversaire</th><th>Date</th><th>Championat</th><th>Nombre du joueurs convoquées</th><th>Etat</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.matches, (matche, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          matche,
          index
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Match/Components/Matches.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
