import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "reporterMatche",
  __ssrInlineRender: true,
  props: {
    matche: Object
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
    const form = useForm({
      date: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui mini modal",
        id: "modalMatchReporter" + __props.matche.id
      }, _attrs))}><div class="header">Reporter le matche</div><div class="content"><form class="ui form"><div class="${ssrRenderClass([unref(form).errors.date ? "error" : "", "field"])}"><input type="datetime-local"${ssrRenderAttr("value", unref(form).date)}></div></form></div><div class="actions"><div class="ui cancel button">Annuler</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui black button">Confirmer</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Match/Components/reporterMatche.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
