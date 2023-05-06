import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "contratStaffModal",
  __ssrInlineRender: true,
  props: {
    staff: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui small modal",
        id: "contratStaffModal" + __props.staff.id
      }, _attrs))}><div class="header">Contrat du staff : ${ssrInterpolate(__props.staff.nom)} ${ssrInterpolate(__props.staff.prenom)}</div><div class="content"><embed${ssrRenderAttr("src", "/staff/contrat/" + __props.staff.contrat)} type="application/pdf" width="100%" height="500px"></div><div class="actions"><div class="ui black cancel button">Fermer</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/contratStaffModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
