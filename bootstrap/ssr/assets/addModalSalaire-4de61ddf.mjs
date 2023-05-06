import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "addModalSalaire",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    personnes: Array
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
      libelle: null,
      mois: null,
      exclure: [],
      equipe: null
    });
    let joueursFilters = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "modalSalaire"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau réglement de salaire</div><div class="image content"><div class="description"><form class="ui form"><div class="two fields"><div class="${ssrRenderClass([unref(form).errors.libelle ? "error" : "", "field"])}"><label>Libellé</label><input${ssrRenderAttr("value", unref(form).libelle)} type="text" placeholder="Libellé"></div><div class="${ssrRenderClass([unref(form).errors.mois ? "error" : "", "field"])}"><label>Mois</label><select class="ui dropdown" id="select"><option value="janvier">Janvier</option><option value="fevrier">Février</option><option value="mars">Mars</option><option value="avril">Avril</option><option value="mai">Mai</option><option value="juin">Juin</option><option value="juillet">Juillet</option><option value="aout">Août</option><option value="septembre">Septembre</option><option value="octobre">Octobre</option><option value="novembre">Novembre</option><option value="decembre">Décembre</option></select></div></div><div class="two fields"><div class="${ssrRenderClass([unref(form).errors.equipe ? "error" : "", "field"])}"><label>Equipe</label><select class="ui dropdown" id="select"><!--[-->`);
      ssrRenderList(__props.equipes, (equipe) => {
        _push(`<option${ssrRenderAttr("value", equipe.id)}>${ssrInterpolate(equipe.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="${ssrRenderClass([unref(form).errors.exclure ? "error" : "", "field"])}"><label>Exclure</label><select class="ui fluid multiple search selection dropdown" multiple=""><!--[-->`);
      ssrRenderList(unref(joueursFilters), (joueur) => {
        _push(`<option${ssrRenderAttr("value", joueur.id)}>${ssrInterpolate(joueur.nom)} ${ssrInterpolate(joueur.prenom)}---${ssrInterpolate(joueur.type)}</option>`);
      });
      _push(`<!--]--></select></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Salaire/Components/addModalSalaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
