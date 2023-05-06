import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Salaire-bdc7d83e.mjs";
import "@inertiajs/inertia-vue3";
import "./editModalSalaire-823bf6af.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Salaires",
  __ssrInlineRender: true,
  props: {
    salaires: Array
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Nom &amp; Prénom</th><th>Montant</th><th>Mois</th><th>Date de réglement</th><th>Reste</th><th>Equipe</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.salaires, (result, index) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Salaire/Components/Salaires.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
