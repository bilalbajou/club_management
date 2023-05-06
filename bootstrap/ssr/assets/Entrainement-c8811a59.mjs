import { onMounted, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./Entrainements-bf5811c6.mjs";
import _sfc_main$2 from "./addModalEntr-24810790.mjs";
import { router } from "@inertiajs/vue3";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import { _ as _sfc_main$3 } from "./AdminDash-c980ce0c.mjs";
import "./Entrainement-f18236ec.mjs";
import "./reprterModal-2cacba10.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Entrainement",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    entrainements: Array,
    etat: String,
    equipe: String,
    date: Array
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      $(document).ready(function() {
        $(".ui.dropdown").dropdown();
        $(".button").popup({
          on: "hover"
        });
      });
    });
    const equipe = ref(props.equipe ?? "all");
    const etat = ref(props.etat ?? "all");
    const date = ref(props.date ?? []);
    const filter = _.throttle(() => {
      console.log(equipe.value);
      console.log(etat.value);
      console.log(date.value);
      router.get(
        route("entrainements.index", {
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
      _push(`<!--[--><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="titlePage"><h2 class="text-4xl font-extrabold">Entrainements</h2></div></div></div><div class="pl-5"><div class="ui stackable four column grid"><div class="column"><div class="ui left icon input">`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        onInternalModelChange: unref(filter),
        "model-type": "yyyy.MM.dd",
        modelValue: date.value,
        "onUpdate:modelValue": ($event) => date.value = $event,
        range: ""
      }, null, _parent));
      _push(`</div></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><option value="annulé">Annulé</option><option value="reporté">Reporté</option><option value="programmé">Programmé</option><option value="terminé">Terminé</option></select></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><!--[-->`);
      ssrRenderList(__props.equipes, (equipe2) => {
        _push(`<option${ssrRenderAttr("value", equipe2.id)}>${ssrInterpolate(equipe2.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="column"><button class="ui primary button"> Ajouter </button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { entrainements: __props.entrainements }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { equipes: __props.equipes }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Entrainement/Entrainement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
