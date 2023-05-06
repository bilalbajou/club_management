import { ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import _sfc_main$1 from "./UpdateUtilisateur-fd101d21.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Utilisateur",
  __ssrInlineRender: true,
  props: {
    user: Object,
    index: Number
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
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><tr><td>${ssrInterpolate(__props.index + 1)}</td><td>${ssrInterpolate(__props.user.name)}</td><td>${ssrInterpolate(__props.user.email)}</td><td>${ssrInterpolate(__props.user.role)}</td><td>${ssrInterpolate(__props.user.etat == 0 ? "désactivé" : "activé")}</td><td><button data-content="Modifier utilisateur" class="ui icon button"><i class="edit icon"></i></button><button style="${ssrRenderStyle(__props.user.etat === "0" ? null : { display: "none" })}" class="ui icon button" data-content="Activer"><i class="check icon"></i></button><button style="${ssrRenderStyle(__props.user.etat === "1" ? null : { display: "none" })}" class="ui icon button" data-content="Désactiver"><i class="power off icon"></i></button></td></tr>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        user: props.user
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Utilisateur/Components/Utilisateur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
