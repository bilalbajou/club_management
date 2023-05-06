import { ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { onMounted, useSSRContext } from "vue";
import _sfc_main$2 from "./addPlan-ace16ec5.mjs";
import _sfc_main$1 from "./Plans-05d6c94a.mjs";
import { _ as _sfc_main$3 } from "./AdminDash-c980ce0c.mjs";
import "@inertiajs/vue3";
import "./Plan-a6f82d0b.mjs";
import "./editPlan-430a0e24.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Plan",
  __ssrInlineRender: true,
  props: {
    plans: Array
  },
  setup(__props) {
    onMounted(() => {
      $(document).ready(function() {
        $(".button").popup({
          on: "hover"
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="pt-10"><div class="ui grid" style="${ssrRenderStyle({ "padding-left": "20px !important", "padding-right": "20px !important" })}"><div class="left floated five wide column"><h1 class="ui header font-extrabold">Plans</h1></div><div class="right floated three wide column"><button class="ui primary button"> Ajouter </button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { plans: __props.plans }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Plan/Plan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
