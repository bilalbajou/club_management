import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$3 from "./addModalJoueur-fc51339a.mjs";
import _sfc_main$1 from "./Cards-323091b0.mjs";
import { onMounted, ref, useSSRContext } from "vue";
import _sfc_main$2 from "./Pagination-d99a3ed5.mjs";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./AdminDash-c980ce0c.mjs";
import "./Card-9c5ab211.mjs";
import "./ficheJoueur-95057f73.mjs";
import "@inertiajs/inertia-vue3";
import "./contratJoueurModal-ac3e5f6b.mjs";
import "./modalPrime-0784c65a.mjs";
import "./reglerSalaire-9bd27c37.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$4
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Joueur",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    joueurs: Array,
    poste: String,
    equipe: String,
    search: String,
    plans: Object
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      $(document).ready(function() {
        $(".dropdown").dropdown();
        $(".button").popup({
          on: "hover"
        });
      });
    });
    const search = ref(props.search ?? "");
    const equipe = ref(props.equipe ?? "all");
    const poste = ref(props.poste ?? "all");
    _.throttle(() => {
      console.log(search.value);
      console.log(equipe.value);
      console.log(poste.value);
      router.get(
        route("joueurs.index", {
          search: search.value,
          poste: poste.value,
          equipe: equipe.value
        }),
        {},
        {
          preserveState: true,
          replace: true,
          preserveScroll: true
        }
      );
    }, 1e3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="titlePage"><h2 class="text-4xl font-extrabold">Joueurs</h2></div></div></div><div class="pl-5"><div class="ui stackable four column grid"><div class="column"><div class="ui left icon input"><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Rechercher"><i class="users icon"></i></div></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><option value="Gardien">Gardien</option><option value="Defense">Defense</option><option value="Milieu">Milieu</option><option value="Attack">Attack</option></select></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><!--[-->`);
      ssrRenderList(__props.equipes, (equipe2) => {
        _push(`<option${ssrRenderAttr("value", equipe2.id)}>${ssrInterpolate(equipe2.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="column"><button class="ui primary button"> Ajouter </button></div></div></div><div class="py-12">`);
      _push(ssrRenderComponent(_sfc_main$1, { joueurs: __props.joueurs }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-6 flex justify-center items-center",
        links: __props.joueurs.links,
        search: search.value,
        equipe: equipe.value,
        poste: poste.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        equipes: __props.equipes,
        plans: __props.plans
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Joueur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
