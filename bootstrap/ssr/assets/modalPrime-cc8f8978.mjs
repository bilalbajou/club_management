import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "modalPrime",
  __ssrInlineRender: true,
  props: {
    staff: Object
  },
  setup(__props) {
    const props = __props;
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
      libelle: null,
      montant: null,
      remarque: null,
      staff_id: props.staff.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "primeStaffModal" + props.staff.id
      }, _attrs))}><i class="close icon"></i><div class="header">Affecter prime pour ${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</div><div class="image content"><div class="description"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.libelle ? "error" : "", "field"])}"><label>Libellé</label><input${ssrRenderAttr("value", unref(form).libelle)} type="text" placeholder="Libellé"></div><div class="${ssrRenderClass([unref(form).errors.montant ? "error" : "", "field"])}"><label>Montant en (DH)</label><input${ssrRenderAttr("value", unref(form).montant)} type="text" placeholder="Montant"></div><div class="${ssrRenderClass([unref(form).errors.remarque ? "error" : "", "field"])}"><label>Remarque</label><input${ssrRenderAttr("value", unref(form).remarque)} type="text" placeholder="Remarque"></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/modalPrime.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
