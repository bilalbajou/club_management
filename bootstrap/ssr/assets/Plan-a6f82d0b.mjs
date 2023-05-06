import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import _sfc_main$1 from "./editPlan-430a0e24.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Plan",
  __ssrInlineRender: true,
  props: {
    plan: Object,
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
    useForm([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.plan.duree)} Mois </td><td>${ssrInterpolate(__props.plan.montant)} DH</td><td><button class="ui icon button"><i class="trash icon"></i></button><button class="ui icon button"><i class="edit icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, { plan: __props.plan }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Plan/Components/Plan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
