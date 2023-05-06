import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import _sfc_main$1 from "./reprterModal-2cacba10.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Entrainement",
  __ssrInlineRender: true,
  props: {
    entrainement: Object,
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
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.entrainement.date)}</td><td>${ssrInterpolate(__props.entrainement.equipe.nom)}</td><td>${ssrInterpolate(__props.entrainement.etat)}</td><td><button class="ui icon button" data-content="Reporter la scéance d&#39;entrainement"><i class="calendar icon"></i></button><button class="ui icon button" data-content="Annuler la scéance d&#39;entrainement"><i class="close icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, { entrainement: __props.entrainement }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Entrainement/Components/Entrainement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
