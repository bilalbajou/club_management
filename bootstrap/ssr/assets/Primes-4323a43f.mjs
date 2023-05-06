import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Prime-bd6f77dd.mjs";
const _sfc_main = {
  __name: "Primes",
  __ssrInlineRender: true,
  props: {
    joueurs: Array
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Nom</th><th>Prénom</th><th>Type</th><th>Libellé prime</th><th>Montant</th><th>Equipe</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.joueurs, (result, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          result,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Prime/Components/Primes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
