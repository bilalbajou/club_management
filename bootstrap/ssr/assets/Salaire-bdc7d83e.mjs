import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
import _sfc_main$1 from "./editModalSalaire-823bf6af.mjs";
import { useSSRContext } from "vue";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Salaire",
  __ssrInlineRender: true,
  props: {
    result: Object,
    index: Number
  },
  setup(__props) {
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.result.nom)} ${ssrInterpolate(__props.result.prenom)}</td><td>${ssrInterpolate(__props.result.montant)}</td><td>${ssrInterpolate(__props.result.mois)}</td><td>${ssrInterpolate(__props.result.reglement_date)}</td><td>${ssrInterpolate(__props.result.reste)}</td><td>${ssrInterpolate(__props.result.nom_equipe)}</td><td><button class="ui icon button"><i class="trash icon"></i></button><button class="ui icon button"><i class="edit icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, { salaire: __props.result }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Salaire/Components/Salaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
