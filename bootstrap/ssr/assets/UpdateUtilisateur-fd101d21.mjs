import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "UpdateUtilisateur",
  __ssrInlineRender: true,
  props: {
    user: Object
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
      name: props.user.name,
      email: props.user.email,
      role: props.user.role
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui small modal",
        id: "updateUser" + props.user.id
      }, _attrs))}><div class="header">Modifier utilisateur</div><div class="content"><form class="ui form"><div class="three fields"><div class="${ssrRenderClass([unref(form).errors.adversaire ? "error" : "", "field"])}"><label>Nom</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Nom"></div><div class="${ssrRenderClass([unref(form).errors.email ? "error" : "", "field"])}"><label>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="text" placeholder="Email"></div><div class="${ssrRenderClass([unref(form).errors.role ? "error" : "", "field"])}"><label>Type</label><select class="ui dropdown" id="select"><option value="admin"> Admin </option><option value="user"> User </option></select></div></div></form></div><div class="actions"><div class="ui cancel button">Annuler</div><div${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="ui black button">Confirmer</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Utilisateur/Components/UpdateUtilisateur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
