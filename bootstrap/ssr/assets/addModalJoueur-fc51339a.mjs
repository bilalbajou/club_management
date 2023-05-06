import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "addModalJoueur",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    plans: Array
  },
  setup(__props) {
    const props = __props;
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "1500",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    };
    console.log(props.plans);
    ref(null);
    const form = useForm({
      nom: null,
      prenom: null,
      cin: null,
      email: null,
      adresse: null,
      poste: "Attack",
      telephone: null,
      salaire: null,
      contrat: null,
      image: null,
      equipe: 1,
      age: null,
      plan_id: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "modalJoueur"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau joueur</div><div class="image content"><div class="ui medium image"><img id="img_player" src="https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png"></div><div class="description"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.nom ? "error" : "", "field"])}"><label>Nom</label><input${ssrRenderAttr("value", unref(form).nom)} type="text" placeholder="Nom"></div><div class="${ssrRenderClass([unref(form).errors.prenom ? "error" : "", "field"])}"><label>Prénom</label><input${ssrRenderAttr("value", unref(form).prenom)} type="text" placeholder="Prénom"></div><div class="${ssrRenderClass([unref(form).errors.age ? "error" : "", "field"])}"><label>Age</label><input${ssrRenderAttr("value", unref(form).age)} type="text" placeholder="Age"></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.cin ? "error" : "", "field"])}"><label>CIN</label><input${ssrRenderAttr("value", unref(form).cin)} type="text" placeholder="CIN"></div><div class="${ssrRenderClass([unref(form).errors.email ? "error" : "", "field"])}"><label>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="text" placeholder="Email"></div><div class="${ssrRenderClass([unref(form).errors.telephone ? "error" : "", "field"])}"><label>Téléphone</label><input${ssrRenderAttr("value", unref(form).telephone)} type="text" placeholder="Téléphone"></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.adresse ? "error" : "", "field"])}"><label>Adresse</label><input type="text"${ssrRenderAttr("value", unref(form).adresse)} placeholder="Adresse"></div><div class="${ssrRenderClass([unref(form).errors.poste ? "error" : "", "field"])}"><label>Poste</label><select class="ui dropdown" id="select"><option value="Attack" selected>Attack</option><option value="Defense">Défense</option><option value="Milieu">Milieu</option><option value="Gardien">Gardien</option></select></div><div class="${ssrRenderClass([unref(form).errors.equipe ? "error" : "", "field"])}"><label>Equipe</label><select name="gender" class="ui dropdown" id="select"><!--[-->`);
      ssrRenderList(__props.equipes, (equipe) => {
        _push(`<option${ssrRenderAttr("value", equipe.id)}>${ssrInterpolate(equipe.nom)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="three fields"><div style="${ssrRenderStyle([1, 2, 3].includes(unref(form).equipe) ? null : { display: "none" })}" class="${ssrRenderClass([unref(form).errors.salaire ? "error" : "", "field"])}"><label>Salaire</label><input type="text"${ssrRenderAttr("value", unref(form).salaire)} placeholder="Salaire"></div><div style="${ssrRenderStyle([4, 5, 6, 7].includes(unref(form).equipe) ? null : { display: "none" })}" class="${ssrRenderClass([unref(form).errors.plan_id ? "error" : "", "field"])}"><label>Plan d&#39;adhésion</label><select class="ui dropdown" id="select"><!--[-->`);
      ssrRenderList(props.plans, (plan) => {
        _push(`<option${ssrRenderAttr("value", plan.id)}>${ssrInterpolate(plan.duree)} Mois --- ${ssrInterpolate(plan.montant)} DH </option>`);
      });
      _push(`<!--]--></select></div><div class="${ssrRenderClass([unref(form).errors.contrat ? "error" : "", "field"])}"><label>Contrat</label><input type="file"></div><div class="${ssrRenderClass([unref(form).errors.image ? "error" : "", "field"])}"><label>Image</label><input type="file" multiple></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Components/addModalJoueur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
