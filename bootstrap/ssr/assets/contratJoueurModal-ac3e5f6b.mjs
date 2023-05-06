import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "contratJoueurModal",
  __ssrInlineRender: true,
  props: {
    joueur: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui small modal",
        id: "contratJoueurModal" + __props.joueur.id
      }, _attrs))}><div class="header">Contrat du joueur : ${ssrInterpolate(__props.joueur.nom)} ${ssrInterpolate(__props.joueur.prenom)}</div><div class="content"><embed${ssrRenderAttr("src", "/joueur/contrat/" + __props.joueur.contrat)} type="application/pdf" width="100%" height="500px"></div><div class="actions"><div class="ui black cancel button">Fermer</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Components/contratJoueurModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
