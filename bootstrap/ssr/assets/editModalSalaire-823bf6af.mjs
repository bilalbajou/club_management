import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "editModalSalaire",
  __ssrInlineRender: true,
  props: {
    salaire: Object
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
      montant: props.salaire.montant,
      mois: props.salaire.mois,
      reglement_date: props.salaire.reglement_date
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "editModalSalaire" + props.salaire.id
      }, _attrs))}><i class="close icon"></i><div class="header">Modifier </div><div class="image content"><div class="description"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.reglement_date ? "error" : "", "field"])}"><label>Date de réglement</label><input${ssrRenderAttr("value", unref(form).reglement_date)} type="datetime-local" placeholder="Date de réglement"></div><div class="${ssrRenderClass([unref(form).errors.montant ? "error" : "", "field"])}"><label>Montant en (DH)</label><input${ssrRenderAttr("value", unref(form).montant)} type="text" placeholder="Montant"></div><div class="${ssrRenderClass([unref(form).errors.mois ? "error" : "", "field"])}"><label>Mois</label><select class="ui dropdown" id="select"><option value="janvier">Janvier</option><option value="février">Février</option><option value="mars">Mars</option><option value="avril">Avril</option><option value="mai">Mai</option><option value="juin">Juin</option><option value="juillet">Juillet</option><option value="aout">Août</option><option value="septembre">Septembre</option><option value="octobre">Octobre</option><option value="novembre">Novembre</option><option value="decembre">Décembre</option></select></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Modifier <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Salaire/Components/editModalSalaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
