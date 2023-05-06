import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$3 from "./addModalStaff-17569b6a.mjs";
import _sfc_main$2 from "./Pagination-021c6eb4.mjs";
import _sfc_main$1 from "./Cards-bfc594d5.mjs";
import { onMounted, ref, useSSRContext } from "vue";
import "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./AdminDash-c980ce0c.mjs";
import "./Card-f75a2a13.mjs";
import "./ficheStaff-fdc27e4b.mjs";
import "./contratStaffModal-4d35ea3f.mjs";
import "./reglerSalaire-6ff05009.mjs";
import "./modalPrime-cc8f8978.mjs";
import "./ApplicationLogo-6bd635f3.mjs";
const __default__ = {
  layout: _sfc_main$4
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Staff",
  __ssrInlineRender: true,
  props: {
    equipes: Array,
    staffs: Object,
    fonction: String,
    equipe: String,
    search: String
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      $(document).ready(function() {
        $(".dropdown").dropdown();
        $(".button").popup({
          on: "hover"
        });
      });
    });
    const search = ref(props.search ?? "");
    const equipe = ref(props.equipe ?? "all");
    const fonction = ref(props.fonction ?? "all");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="titlePage"><h2 class="text-4xl font-extrabold">Staff technique</h2></div></div></div><div class="pl-5"><div class="ui stackable four column grid"><div class="column"><div class="ui left icon input"><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Rechercher"><i class="users icon"></i></div></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><option value="Entraineur">Entraineur</option><option value="Directeur technique">Directeur technique</option><option value="Entraineur adjoint">Entraineur adjoint</option><option value="Staff médical">Staff médical</option><option value="Entraineur du gardien">Entraineur du gardien</option></select></div><div class="column"><select class="ui dropdown" id="select"><option value="all">Tous</option><!--[-->`);
      ssrRenderList(__props.equipes, (equipe2) => {
        _push(`<option${ssrRenderAttr("value", equipe2.id)}>${ssrInterpolate(equipe2.nom)}</option>`);
      });
      _push(`<!--]--></select></div><div class="column"><button class="ui primary button"> Ajouter </button></div></div></div><div class="py-12">`);
      _push(ssrRenderComponent(_sfc_main$1, { staffs: __props.staffs }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-6 flex justify-center items-center",
        links: __props.staffs.links,
        search: search.value,
        equipe: equipe.value,
        fonction: fonction.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        equipes: __props.equipes
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Staff/Staff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
