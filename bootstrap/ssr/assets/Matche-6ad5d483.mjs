import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./reporterMatche-4b83f67b.mjs";
import { useForm } from "@inertiajs/vue3";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Matche",
  __ssrInlineRender: true,
  props: {
    matche: Object,
    index: Number
  },
  setup(__props) {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "1500",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.matche.adversaire)}</td><td>${ssrInterpolate(__props.matche.date)}</td><td>${ssrInterpolate(__props.matche.championat)}</td><td>${ssrInterpolate(__props.matche.nb_joueurs)}</td><td>${ssrInterpolate(__props.matche.etat)}</td><td><button class="ui icon button" data-content="Annuler le matche"><i class="x icon icon"></i></button><button class="ui icon button" data-content="Reporté le matche"><i class="calendar icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, { matche: __props.matche }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Match/Components/Matche.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
