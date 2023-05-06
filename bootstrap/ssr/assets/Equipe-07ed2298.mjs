import { ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { onMounted, useSSRContext } from "vue";
import _sfc_main$2 from "./addModalEquipe-23ff8c7e.mjs";
import _sfc_main$1 from "./Equipes-e18a88eb.mjs";
import { _ as _sfc_main$3 } from "./AdminDash-c980ce0c.mjs";
import "@inertiajs/vue3";
import "./Equipe-ceecfbef.mjs";
import "./editModalEquipe-9f96d2ec.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Equipe",
  __ssrInlineRender: true,
  props: {
    equipes: Array
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
      _push(`<!--[--><div class="pt-10"><div class="ui grid" style="${ssrRenderStyle({ "padding-left": "20px !important", "padding-right": "20px !important" })}"><div class="left floated five wide column"><h1 class="ui header font-extrabold">Equipe</h1></div><div class="right floated three wide column"><button class="ui primary button"> Ajouter </button></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { equipes: __props.equipes }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipe/Equipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
