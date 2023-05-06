import { onMounted, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$2 from "./addModalMatch-35e56b24.mjs";
import _sfc_main$1 from "./Matches-1a1d7d06.mjs";
import { router } from "@inertiajs/vue3";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import { _ as _sfc_main$3 } from "./AdminDash-c980ce0c.mjs";
import "./Matche-6ad5d483.mjs";
import "./reporterMatche-4b83f67b.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Match",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    joueurs: Array,
    matches: Array,
    search: String,
    equipe: String,
    etat: String,
    date: Array
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
    const etat = ref(props.etat ?? "all");
    const date = ref(props.date ?? []);
    const filter = _.throttle(() => {
      console.log(search.value);
      console.log(equipe.value);
      console.log(etat.value);
      router.get(
        route("matches.index", {
          search: search.value,
          etat: etat.value,
          equipe: equipe.value,
          date: date.value
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
      _push(`<!--[--><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="titlePage"><h2 class="text-4xl font-extrabold">Match</h2></div></div></div><div class="pl-5"><div class="ui stackable five column grid"><div class="column"><div class="ui left icon input"><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Rechercher par adversaire"><i class="users icon"></i></div></div><div class="column"><div class="ui left icon input">`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        onInternalModelChange: unref(filter),
        "model-type": "yyyy.MM.dd",
        modelValue: date.value,
        "onUpdate:modelValue": ($event) => date.value = $event,
        range: ""
      }, null, _parent));
      _push(`</div></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><option value="Annulé">Annulé</option><option value="reporté">Reporté</option><option value="programmé">Programmé</option><option value="terminé">Terminé</option></select></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><!--[-->`);
      ssrRenderList(__props.equipes, (equipe2) => {
        _push(`<option${ssrRenderAttr("value", equipe2.id)}>${ssrInterpolate(equipe2.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="column"><button class="ui primary button"> Ajouter </button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { matches: __props.matches }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        equipes: __props.equipes,
        joueurs: __props.joueurs
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Match/Match.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
