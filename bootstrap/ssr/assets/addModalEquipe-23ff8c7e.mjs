import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "addModalEquipe",
  __ssrInlineRender: true,
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
      nom: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui tiny modal",
        id: "modalEquipe"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau equipe</div><div class="image content"><div class="description"><form class="ui form"><div class="${ssrRenderClass([unref(form).errors.nom ? "error" : "", "field"])}"><label>Nom d&#39;équipe</label><input${ssrRenderAttr("value", unref(form).nom)} type="text" placeholder="Nom"></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipe/Components/addModalEquipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
