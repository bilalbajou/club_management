import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import _sfc_main$1 from "./editModalEquipe-9f96d2ec.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Equipe",
  __ssrInlineRender: true,
  props: {
    equipe: Object,
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.equipe.nom)}</td><td><button data-content="Modifier nom d&#39;équipe" class="ui icon button"><i class="edit icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, { equipe: __props.equipe }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipe/Components/Equipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
