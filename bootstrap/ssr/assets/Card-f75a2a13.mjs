import { ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import _sfc_main$1 from "./ficheStaff-fdc27e4b.mjs";
import _sfc_main$2 from "./contratStaffModal-4d35ea3f.mjs";
import _sfc_main$4 from "./reglerSalaire-6ff05009.mjs";
import _sfc_main$3 from "./modalPrime-cc8f8978.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    staff: Object
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
      _push(`<!--[--><div class="ui"><div class="ui centered card"><div class="image"><img${ssrRenderAttr("src", __props.staff.image == null ? "https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png" : "/staff/image/" + __props.staff.image)}></div><div class="content"><a style="${ssrRenderStyle(__props.staff.fonction != null ? null : { display: "none" })}" class="ui teal tag label">${ssrInterpolate(__props.staff.fonction)}</a>   <a style="${ssrRenderStyle(__props.staff.equipe.nom != null ? null : { display: "none" })}" class="ui teal tag label">${ssrInterpolate(__props.staff.equipe.nom)}</a><br><br><a class="header">${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</a><div class="meta"><span class="date">Age:${ssrInterpolate(__props.staff.age)}</span><br><span class="date">Téléphone: ${ssrInterpolate(__props.staff.telephone)}</span></div></div><div class="extra content"><button data-content="Supprimer" class="circular ui icon button"><i class="trash icon"></i></button><button data-content="Modifier" class="circular ui icon button"><i class="icon edit"></i></button><button data-content="Fiche joueur" class="circular ui icon button"><i class="icon eye"></i></button><button style="${ssrRenderStyle(__props.staff.contrat ? null : { display: "none" })}" data-content="Télecharger contrat" class="circular ui icon button"><i class="icon file"></i></button><button data-content="Affecter prime" class="circular ui icon button"><i class="icon dollar sign"></i></button><button data-content="Régler salaire" class="circular ui icon button"><i class="check circle icon"></i></button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { staff: __props.staff }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { staff: __props.staff }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { staff: __props.staff }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { staff: __props.staff }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
