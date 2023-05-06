import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, computed } from "vue";
import "./ApplicationLogo-6bd635f3.mjs";
import { Link, usePage } from "@inertiajs/vue3";
const _sfc_main$3 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    $(document).ready(function() {
      $(".dropdown").dropdown();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "ui top fixed inverted menu" }, _attrs))}><div class="left menu"><a href="#" class="sidebar-menu-toggler item" data-target="#sidebar"><i class="sidebar icon"></i></a><img class="ui mini circular image" src="image/logo_club.png"><a href="#" class="header item"> Casa football club </a></div><div class="right menu"><a href="#" class="item"><i class="bell icon"></i></a><div class="ui dropdown item" tabindex="0"><i class="user cirlce icon"></i><div class="menu left transition hidden" tabindex="-1" style="${ssrRenderStyle({ "display": "block !important" })}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.edit"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="info circle icon"${_scopeId}></i> Profil`);
          } else {
            return [
              createVNode("i", { class: "info circle icon" }),
              createTextVNode(" Profil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        as: "button",
        method: "post",
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="sign-out icon"${_scopeId}></i> Logout `);
          } else {
            return [
              createVNode("i", { class: "sign-out icon" }),
              createTextVNode(" Logout ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/NavBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const user = computed(() => usePage().props.auth.user);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "ui sidebar inverted vertical menu sidebar-menu",
        id: "sidebar"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><i class="icon chart line"${_scopeId}></i> Tableau du bord </div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("i", { class: "icon chart line" }),
                createTextVNode(" Tableau du bord ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("equipes.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><i class="icon sitemap"${_scopeId}></i> Equipe </div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("i", { class: "icon sitemap" }),
                createTextVNode(" Equipe ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("joueurs.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon users"${_scopeId}></i> Joueur </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon users" }),
                createTextVNode(" Joueur ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("staffs.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon user"${_scopeId}></i> Staff Techniques </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon user" }),
                createTextVNode(" Staff Techniques ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("matches.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon futbol"${_scopeId}></i> Match </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon futbol" }),
                createTextVNode(" Match ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("entrainements.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon calendar"${_scopeId}></i> Entrainement </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon calendar" }),
                createTextVNode(" Entrainement ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("primes.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon money"${_scopeId}></i> Prime </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon money" }),
                createTextVNode(" Prime ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("salaires.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="dollar sign icon"${_scopeId}></i> Reg Salaire </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "dollar sign icon" }),
                createTextVNode(" Reg Salaire ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("plans.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="file alternate icon"${_scopeId}></i> Plans </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "file alternate icon" }),
                createTextVNode(" Plans ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        style: unref(user).role == "admin" ? null : { display: "none" },
        href: _ctx.route("users.index"),
        class: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><i class="icon user circle"${_scopeId}></i> Utilisateur </div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("i", { class: "icon user circle" }),
                createTextVNode(" Utilisateur ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/SideBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AdminDash",
  __ssrInlineRender: true,
  setup(__props) {
    $(document).ready(function() {
      $(".ui.dropdown").dropdown();
      $(".sidebar-menu-toggler").on("click", function() {
        var target = $(this).data("target");
        $(target).sidebar({
          dinPage: true,
          transition: "overlay",
          mobileTransition: "overlay"
        }).sidebar("toggle");
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="pusher"><div class="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminDash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
