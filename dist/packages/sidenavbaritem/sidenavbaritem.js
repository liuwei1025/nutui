/*!
 * @nutui/nutui v2.3.16 - sidenavbaritem.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('sidenavbaritem', [], t)
    : 'object' == typeof exports
    ? (exports.sidenavbaritem = t())
    : (e.sidenavbaritem = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = './'),
      n((n.s = 144))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, o, i, a, s) {
        var u,
          c = 'function' == typeof e ? e.options : e;
        if (
          (t && ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          i && (c._scopeId = 'data-v-' + i),
          a
            ? ((u = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  o && o.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(a);
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
            c.render = function (e, t) {
              return u.call(t), f(e, t);
            };
          } else {
            var l = c.beforeCreate;
            c.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: e, options: c };
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    144: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(60);
      n(145);
      (r.a.install = function (e) {
        e.component(r.a.name, r.a);
      }),
        (t.default = r.a);
    },
    145: function (e, t, n) {},
    60: function (e, t, n) {
      'use strict';
      var r = {
          name: 'nut-sidenavbaritem',
          props: { title: { type: String, default: '' }, ikey: { type: String, default: '' } },
          methods: {
            handleClick: function () {
              this.$emit('click');
            },
          },
        },
        o = n(0),
        i = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              'div',
              {
                staticClass: 'nut-sidenavbaritem',
                attrs: { ikey: e.ikey },
                on: {
                  click: function (t) {
                    return t.stopPropagation(), e.handleClick(t);
                  },
                },
              },
              [n('a', { staticClass: 'item-title', attrs: { href: 'javascript:;' } }, [e._v('\n    ' + e._s(e.title) + '\n  ')])]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = i.exports;
    },
  });
});
//# sourceMappingURL=sidenavbaritem.js.map
