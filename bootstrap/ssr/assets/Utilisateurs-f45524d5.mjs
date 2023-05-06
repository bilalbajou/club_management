import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Utilisateur-ea8b938a.mjs";
import "@inertiajs/vue3";
import "./UpdateUtilisateur-fd101d21.mjs";
const _sfc_main = {
  __name: "Utilisateurs",
  __ssrInlineRender: true,
  props: {
    users: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12",
        style: { "padding-left": "10px !important", "padding-right": "10px !important" }
      }, _attrs))}><table class="ui celled table stackable"><thead><tr><th>#</th><th>Nom</th><th>Email</th><th>Type utilisateur</th><th>Etat</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.users, (user, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          user,
          index,
          key: index
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Utilisateur/Components/Utilisateurs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
