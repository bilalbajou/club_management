import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "ficheJoueur",
  __ssrInlineRender: true,
  props: {
    joueur: Object
  },
  setup(__props) {
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui small modal",
        id: "ficheClient" + __props.joueur.id
      }, _attrs))}><i class="close icon"></i><div class="header"> Joueur : ${ssrInterpolate(__props.joueur.nom)} ${ssrInterpolate(__props.joueur.prenom)}</div><div class="image content"><div class="ui medium image"><img${ssrRenderAttr("src", __props.joueur.image ? "/joueur/image/" + __props.joueur.image : "https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png")}></div><div class="description"><div class="ui header">Informations personnelles</div><p><b>Nom : </b> ${ssrInterpolate(__props.joueur.nom)}</p><p><b>Prénom : </b> ${ssrInterpolate(__props.joueur.prenom)}</p><p><b>Adresse : </b> ${ssrInterpolate(__props.joueur.adresse)}</p><p><b>Téléphone : </b> ${ssrInterpolate(__props.joueur.telephone)}</p><p><b>Email : </b> ${ssrInterpolate(__props.joueur.email)}</p><p><b>Age : </b> ${ssrInterpolate(__props.joueur.age)}</p><p style="${ssrRenderStyle([1, 2, 3].includes(__props.joueur.equipe_id) && __props.joueur.salaire ? null : { display: "none" })}"><b>Salaire : </b> ${ssrInterpolate(__props.joueur.salaire)} DH</p><p><b>Poste : </b> ${ssrInterpolate(__props.joueur.poste)}</p><p><b>Equipe : </b> ${ssrInterpolate(__props.joueur.equipe.nom)}</p></div></div><div class="actions"><div class="ui black deny button"> Fermer </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Joueur/Components/ficheJoueur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
