import { ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./ficheJoueur-95057f73.mjs";
import _sfc_main$2 from "./contratJoueurModal-ac3e5f6b.mjs";
import _sfc_main$3 from "./modalPrime-0784c65a.mjs";
import _sfc_main$4 from "./reglerSalaire-9bd27c37.mjs";
import { useForm } from "@inertiajs/vue3";
import { useSSRContext } from "vue";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    joueur: Object
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
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="ui"><div class="ui centered card"><div class="image"><img${ssrRenderAttr("src", __props.joueur.image == null ? "https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png" : "/joueur/image/" + __props.joueur.image)}></div><div class="content"><a style="${ssrRenderStyle(__props.joueur.poste != null ? null : { display: "none" })}" class="ui teal tag label">${ssrInterpolate(__props.joueur.poste)}</a>   <a style="${ssrRenderStyle(__props.joueur.equipe.nom != null ? null : { display: "none" })}" class="ui teal tag label">${ssrInterpolate(__props.joueur.equipe.nom)}</a><br><br><a class="header">${ssrInterpolate(__props.joueur.nom)} ${ssrInterpolate(__props.joueur.prenom)}</a><div class="meta"><span class="date">Age:${ssrInterpolate(__props.joueur.age)}</span><br><span class="date">Téléphone: ${ssrInterpolate(__props.joueur.telephone)}</span></div></div><div class="extra content"><button data-content="Supprimer" class="circular ui icon button"><i class="trash icon"></i></button><button data-content="Modifier" class="circular ui icon button"><i class="icon edit"></i></button><button data-content="Fiche joueur" class="circular ui icon button"><i class="icon eye"></i></button><button style="${ssrRenderStyle(__props.joueur.contrat ? null : { display: "none" })}" data-content="Télecharger contrat" class="circular ui icon button"><i class="icon file"></i></button><button style="${ssrRenderStyle([1, 2, 3].includes(__props.joueur.equipe_id) ? null : { display: "none" })}" data-content="Affecter prime" class="circular ui icon button"><i class="icon dollar sign"></i></button><button style="${ssrRenderStyle([1, 2, 3].includes(__props.joueur.equipe_id) ? null : { display: "none" })}" data-content="Régler Salaire" class="circular ui icon button"><i class="check circle icon"></i></button><button style="${ssrRenderStyle([4, 5, 6, 7].includes(__props.joueur.equipe_id) && __props.joueur.plan_id ? null : { display: "none" })}" data-content="Régler abonnement" class="circular ui icon button"><i class="check icon"></i></button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { joueur: __props.joueur }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { joueur: __props.joueur }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { joueur: __props.joueur }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { joueur: __props.joueur }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
