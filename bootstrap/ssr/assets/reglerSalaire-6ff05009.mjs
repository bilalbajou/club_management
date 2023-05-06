import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "reglerSalaire",
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
      montant: props.staff.salaire,
      mois: "janvier",
      staff_id: props.staff.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "salaireStaffModal" + props.staff.id
      }, _attrs))}><i class="close icon"></i><div class="header">Régler salaire pour ${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</div><div class="image content"><div class="description"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.libelle ? "error" : "", "field"])}"><label>Libellé</label><input${ssrRenderAttr("value", unref(form).libelle)} type="text" placeholder="Libellé"></div><div class="${ssrRenderClass([unref(form).errors.montant ? "error" : "", "field"])}"><label>Montant en (DH)</label><input${ssrRenderAttr("value", unref(form).montant)} type="text" placeholder="Montant"></div><div class="${ssrRenderClass([unref(form).errors.mois ? "error" : "", "field"])}"><label>Mois</label><select class="ui dropdown" id="select"><option value="janvier">Janvier</option><option value="fevrier">Février</option><option value="mars">Mars</option><option value="avril">Avril</option><option value="mai">Mai</option><option value="juin">Juin</option><option value="juillet">Juillet</option><option value="aout">Août</option><option value="septembre">Septembre</option><option value="octobre">Octobre</option><option value="novembre">Novembre</option><option value="decembre">Décembre</option></select></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/reglerSalaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
