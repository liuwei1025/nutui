/*!
 * @nutui/nutui v2.3.16 - tabbar.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('tabbar', [], e)
    : 'object' == typeof exports
    ? (exports.tabbar = e())
    : (t.tabbar = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = './'),
      n((n.s = 173))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, i, a, s) {
        var u,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          i && (c._scopeId = 'data-v-' + i),
          a
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (c._ssrRegister = u))
            : o &&
              (u = s
                ? function () {
                    o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          u)
        )
          if (c.functional) {
            c._injectStyles = u;
            var f = c.render;
            c.render = function (t, e) {
              return u.call(e), f(t, e);
            };
          } else {
            var l = c.beforeCreate;
            c.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: t, options: c };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    173: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-tabbar',
          props: {
            tabbarList: {
              type: Array,
              default: function () {
                return [];
              },
            },
            bottom: { type: Boolean, default: !1 },
            type: { type: String, default: 'based' },
            replace: { type: Boolean, default: !1 },
          },
          data: function () {
            return { currIndex: null, tabList: this.tabbarList };
          },
          mounted: function () {
            this.initBar();
          },
          watch: {
            tabbarList: {
              handler: function (t) {
                (this.tabList = t), this.initBar();
              },
              deep: !0,
            },
          },
          methods: {
            initBar: function () {
              var t = this;
              this.tabList.forEach(function (e, n) {
                e.curr && (t.currIndex = n);
              });
            },
            switchTabs: function (t, e) {
              (this.currIndex = e),
                this.replace ? window.location.replace(t.href) : t.href && (window.location.href = t.href),
                this.$emit('tab-switch', t, e);
            },
          },
        },
        o = n(0),
        i = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'nut-tabbar', class: { bottom: t.bottom } },
              t._l(t.tabList, function (e, r) {
                return n(
                  'a',
                  {
                    key: e.tabTitle,
                    staticClass: 'tabbar-nav',
                    class: [{ curr: r == t.currIndex }, t.type],
                    on: {
                      click: function (n) {
                        return t.switchTabs(e, r);
                      },
                    },
                  },
                  [
                    n(
                      'span',
                      { staticClass: 'icon-box' },
                      [
                        e.num && e.num <= 99
                          ? n('b', { staticClass: 'tips num' }, [t._v(t._s(e.num))])
                          : e.num && e.num >= 100
                          ? n('b', { staticClass: 'tips' }, [t._v(t._s('...'))])
                          : t._e(),
                        t._v(' '),
                        e.icon
                          ? [n('div', { staticClass: 'icon', style: { backgroundImage: 'url(' + (r == t.currIndex ? e.activeIcon : e.icon) + ')' } })]
                          : t._e(),
                        t._v(' '),
                        n('span', { class: ['tabbar-nav-word', { 'big-word': !e.icon }] }, [t._v(t._s(e.tabTitle))]),
                      ],
                      2
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(88);
      i.install = function (t) {
        t.component(i.name, i);
      };
      e.default = i;
    },
    88: function (t, e, n) {},
  });
});
//# sourceMappingURL=tabbar.js.map
