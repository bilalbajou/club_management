import { ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Card-f75a2a13.mjs";
import { useSSRContext } from "vue";
import "@inertiajs/vue3";
import "./ficheStaff-fdc27e4b.mjs";
import "./contratStaffModal-4d35ea3f.mjs";
import "./reglerSalaire-6ff05009.mjs";
import "./modalPrime-cc8f8978.mjs";
const _sfc_main = {
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    staffs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h3 style="${ssrRenderStyle(__props.staffs.length == 0 ? null : { display: "none" })}" class="ui center aligned header"> Aucun enregistrement trouvé</h3><div class="ui three column doubling stackable grid container"><!--[-->`);
      ssrRenderList(__props.staffs.data, (staff) => {
        _push(`<div class="column">`);
        _push(ssrRenderComponent(_sfc_main$1, { staff }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Components/Cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
