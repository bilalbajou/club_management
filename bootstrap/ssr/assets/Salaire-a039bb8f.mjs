import { onMounted, ref, unref, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import "./Pagination-83b1592d.mjs";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import _sfc_main$1 from "./Salaires-b289024b.mjs";
import _sfc_main$2 from "./addModalSalaire-4de61ddf.mjs";
import { _ as _sfc_main$3 } from "./AdminDash-c980ce0c.mjs";
import "./Salaire-bdc7d83e.mjs";
import "@inertiajs/inertia-vue3";
import "./editModalSalaire-823bf6af.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Salaire",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    personnes: Array,
    salaires: Array,
    search: String,
    equipe: String,
    type: String,
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
    const type = ref(props.type ?? "all");
    const date = ref(props.date ?? []);
    const filter = _.throttle(() => {
      console.log(search.value);
      console.log(equipe.value);
      console.log(type.value);
      console.log(date.value);
      router.get(
        route("salaires.index", {
          search: search.value,
          type: type.value,
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
      _push(`<!--[--><div class="pt-10"><div class="ui grid" style="${ssrRenderStyle({ "padding-left": "20px !important", "padding-right": "20px !important" })}"><div class="left floated five wide column"><h1 class="ui header">Réglement des Salaires</h1></div></div></div><div class="pl-5"><div class="ui stackable five column grid"><div class="column"><div class="ui left icon input"><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Rechercher"><i class="users icon"></i></div></div><div class="column"><div class="ui left icon input">`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        onInternalModelChange: unref(filter),
        "model-type": "yyyy.MM.dd",
        modelValue: date.value,
        "onUpdate:modelValue": ($event) => date.value = $event,
        range: ""
      }, null, _parent));
      _push(`</div></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><option value="joueur">Joueur</option><option value="staff">Staff</option></select></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><!--[-->`);
      ssrRenderList(__props.equipes, (equipe2) => {
        _push(`<option${ssrRenderAttr("value", equipe2.id)}>${ssrInterpolate(equipe2.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="column"><button class="ui primary button"> Ajouter </button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { salaires: __props.salaires }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        equipes: __props.equipes,
        personnes: __props.personnes
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Salaire/Salaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
