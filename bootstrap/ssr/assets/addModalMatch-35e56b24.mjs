import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "@vuepic/vue-datepicker";
/* empty css                */const _sfc_main = {
  __name: "addModalMatch",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    joueurs: Array
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
    let joueursFilters = ref([]);
    const form = useForm({
      adversaire: null,
      lieu: null,
      equipe: null,
      exclure: [],
      remarque: null,
      date: null,
      championat: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "modalMatch"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau match</div><div class="image content"><div class="description"><form class="ui form"><div class="two fields"><div class="${ssrRenderClass([unref(form).errors.adversaire ? "error" : "", "field"])}"><label>Adversaire</label><input${ssrRenderAttr("value", unref(form).adversaire)} type="text" placeholder="Adveraire"></div><div class="${ssrRenderClass([unref(form).errors.lieu ? "error" : "", "field"])}"><label>Lieu</label><input${ssrRenderAttr("value", unref(form).lieu)} type="text" placeholder="Lieu"></div></div><div class="two fields"><div class="${ssrRenderClass([unref(form).errors.date ? "error" : "", "field"])}"><label>Date</label><input type="datetime-local"${ssrRenderAttr("value", unref(form).date)}></div><div class="${ssrRenderClass([unref(form).errors.equipe ? "error" : "", "field"])}"><label>Equipe</label><select class="ui dropdown" id="select"><!--[-->`);
      ssrRenderList(__props.equipes, (equipe) => {
        _push(`<option${ssrRenderAttr("value", equipe.id)}>${ssrInterpolate(equipe.nom)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.exclure ? "error" : "", "field"])}"><label>Exclure</label><select class="ui fluid multiple search selection dropdown" multiple=""><!--[-->`);
      ssrRenderList(unref(joueursFilters), (joueur) => {
        _push(`<option${ssrRenderAttr("value", joueur.id)}>${ssrInterpolate(joueur.nom)} ${ssrInterpolate(joueur.prenom)}---${ssrInterpolate(joueur.type)}</option>`);
      });
      _push(`<!--]--></select></div><div class="${ssrRenderClass([unref(form).errors.exclure ? "error" : "", "field"])}"><label>Championat</label><input type="text"${ssrRenderAttr("value", unref(form).championat)} placeholder="Championat"></div><div class="${ssrRenderClass([unref(form).errors.remarque ? "error" : "", "field"])}"><label>Remarque</label><input type="text"${ssrRenderAttr("value", unref(form).remarque)} placeholder="Remarque"></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Match/Components/addModalMatch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
