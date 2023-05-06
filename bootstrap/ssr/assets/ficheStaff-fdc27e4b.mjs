import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "ficheStaff",
  __ssrInlineRender: true,
  props: {
    staff: Object
  },
  setup(__props) {
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui small modal",
        id: "ficheStaff" + __props.staff.id
      }, _attrs))}><i class="close icon"></i><div class="header"> Joueur : ${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</div><div class="image content"><div class="ui medium image"><img${ssrRenderAttr("src", __props.staff.image ? "/staff/image/" + __props.staff.image : "https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png")}></div><div class="description"><div class="ui header">Informations personnelles</div><p><b>Nom : </b> ${ssrInterpolate(__props.staff.nom)}</p><p><b>Prénom : </b> ${ssrInterpolate(__props.staff.prenom)}</p><p><b>Adresse : </b> ${ssrInterpolate(__props.staff.adresse)}</p><p><b>Téléphone : </b> ${ssrInterpolate(__props.staff.telephone)}</p><p><b>Email : </b> ${ssrInterpolate(__props.staff.email)}</p><p><b>Age : </b> ${ssrInterpolate(__props.staff.age)}</p><p style="${ssrRenderStyle(__props.staff.salaire ? null : { display: "none" })}"><b>Salaire : </b> ${ssrInterpolate(__props.staff.salaire)} DH</p><p><b>Fonction : </b> ${ssrInterpolate(__props.staff.fonction)}</p><p><b>Equipe : </b> ${ssrInterpolate(__props.staff.equipe.nom)}</p></div></div><div class="actions"><div class="ui black deny button"> Fermer </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/ficheStaff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
