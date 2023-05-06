import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Prime",
  __ssrInlineRender: true,
  props: {
    result: Object,
    index: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(_attrs)}><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.result.nom)}</td><td>${ssrInterpolate(__props.result.prenom)}</td><td>${ssrInterpolate(__props.result.type)}</td><td>${ssrInterpolate(__props.result.libellé)}</td><td>${ssrInterpolate(__props.result.montant)}</td><td>${ssrInterpolate(__props.result.nom_equipe)}</td></tr>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Prime/Components/Prime.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
