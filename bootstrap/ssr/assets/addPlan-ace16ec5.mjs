import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "addPlan",
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
      duree: "1",
      montant: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui tiny modal",
        id: "modalPlan"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau plan</div><div class="image content"><div class="description"><form class="ui form"><div class="two fields"><div class="${ssrRenderClass([unref(form).errors.duree ? "error" : "", "field"])}"><label>Durée</label><select class="ui dropdown" id="select"><option value="1">1 Mois</option><option value="3">3 Mois</option><option value="6">6 Mois</option><option value="12">12 Mois</option></select></div><div class="${ssrRenderClass([unref(form).errors.montant ? "error" : "", "field"])}"><label>Montant (DH)</label><input${ssrRenderAttr("value", unref(form).montant)} type="text" placeholder="Montant"></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Plan/Components/addPlan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
