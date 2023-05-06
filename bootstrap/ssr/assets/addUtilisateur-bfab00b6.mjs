import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "addUtilisateur",
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
    const form = useForm({
      name: null,
      email: null,
      role: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui modal",
        id: "modalUser"
      }, _attrs))}><i class="close icon"></i><div class="header">Ajouter nouveau utilisateur</div><div class="image content"><div class="description"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.adversaire ? "error" : "", "field"])}"><label>Nom</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Nom"></div><div class="${ssrRenderClass([unref(form).errors.email ? "error" : "", "field"])}"><label>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="text" placeholder="Email"></div><div class="${ssrRenderClass([unref(form).errors.role ? "error" : "", "field"])}"><label>Type</label><select class="ui dropdown" id="select"><option value="admin"> Admin </option><option value="user"> User </option></select></div></div></form></div></div><div class="actions"><div class="ui black deny button">Annuler</div><div class="ui black button">Rséinitialiser</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui right labeled icon button"> Ajouter <i class="checkmark icon"></i></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Utilisateur/Components/addUtilisateur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
