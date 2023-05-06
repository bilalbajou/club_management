import { onMounted, ref, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AdminDash-c980ce0c.mjs";
import { useForm } from "@inertiajs/vue3";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "updateStaff",
  __ssrInlineRender: true,
  props: {
    staff: Object,
    equipes: Array
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
    onMounted(() => {
      $(document).ready(function() {
        $(".button").popup({
          on: "hover"
        });
        $(".dropdown").dropdown();
      });
    });
    ref();
    const form = useForm({
      nom: props.staff.nom,
      prenom: props.staff.prenom,
      cin: props.staff.cin,
      email: props.staff.email,
      adresse: props.staff.adresse,
      fonction: props.staff.fonction,
      telephone: props.staff.telephone,
      salaire: props.staff.salaire,
      contrat: null,
      image: null,
      equipe: props.staff.equipe_id,
      age: props.staff.age,
      _method: "put"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="titlePage"><h2 class="text-4xl font-extrabold">Modifier staff:${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</h2></div></div></div><div class="ui container"><img class="ui medium circular centered fluid image" id="img_staff"${ssrRenderAttr("src", __props.staff.image != null ? "/staff/image/" + __props.staff.image : "https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png")}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.nom ? "error" : "", "field"])}"><label>Nom</label><input${ssrRenderAttr("value", unref(form).nom)} type="text" placeholder="Nom"></div><div class="${ssrRenderClass([unref(form).errors.prenom ? "error" : "", "field"])}"><label>Prénom</label><input${ssrRenderAttr("value", unref(form).prenom)} type="text" placeholder="Prénom"></div><div class="${ssrRenderClass([unref(form).errors.age ? "error" : "", "field"])}"><label>Age</label><input${ssrRenderAttr("value", unref(form).age)} type="text" placeholder="Age"></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.cin ? "error" : "", "field"])}"><label>CIN</label><input${ssrRenderAttr("value", unref(form).cin)} type="text" placeholder="CIN"></div><div class="${ssrRenderClass([unref(form).errors.email ? "error" : "", "field"])}"><label>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="text" placeholder="Email"></div><div class="${ssrRenderClass([unref(form).errors.telephone ? "error" : "", "field"])}"><label>Téléphone</label><input${ssrRenderAttr("value", unref(form).telephone)} type="text" placeholder="Téléphone"></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.adresse ? "error" : "", "field"])}"><label>Adresse</label><input type="text"${ssrRenderAttr("value", unref(form).adresse)} placeholder="Adresse"></div><div class="${ssrRenderClass([unref(form).errors.fonction ? "error" : "", "field"])}"><label>Poste</label><select class="ui dropdown" id="select"><option value="Directeur technique">Directeur technique</option><option value="Entraineur">Entraineur</option><option value="Entraineur adjoint">Entraineur adjoint</option><option value="Entraineur gardien">Entraineur gardien</option></select></div><div class="${ssrRenderClass([unref(form).errors.equipe ? "error" : "", "field"])}"><label>Equipe</label><select name="gender" class="ui dropdown" id="select"><!--[-->`);
      ssrRenderList(__props.equipes, (equipe) => {
        _push(`<option${ssrRenderAttr("value", equipe.id)}>${ssrInterpolate(equipe.nom)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.salaire ? "error" : "", "field"])}"><label>Salaire</label><input type="text"${ssrRenderAttr("value", unref(form).salaire)} placeholder="Salaire"></div><div class="${ssrRenderClass([unref(form).errors.contrat ? "error" : "", "field"])}"><label>Contrat</label><input type="file"></div><div class="${ssrRenderClass([unref(form).errors.image ? "error" : "", "field"])}"><label>Image</label><input type="file"></div></div></form><div class="ui black deny button">Réinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui primary right labeled icon button"> Modifier <i class="checkmark icon"></i></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/updateStaff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
