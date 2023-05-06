import { ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Card-9c5ab211.mjs";
import { useSSRContext } from "vue";
import "./ficheJoueur-95057f73.mjs";
import "@inertiajs/inertia-vue3";
import "./contratJoueurModal-ac3e5f6b.mjs";
import "./modalPrime-0784c65a.mjs";
import "@inertiajs/vue3";
import "./reglerSalaire-9bd27c37.mjs";
const _sfc_main = {
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    joueurs: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.joueurs.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h3 style="${ssrRenderStyle(__props.joueurs.length === 0 ? null : { display: "none" })}" class="ui center aligned header"> Aucun joueur trouvé</h3><div class="ui three column doubling stackable grid container"><!--[-->`);
      ssrRenderList(props.joueurs.data, (joueur) => {
        _push(`<div class="column">`);
        _push(ssrRenderComponent(_sfc_main$1, { joueur }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Components/Cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
