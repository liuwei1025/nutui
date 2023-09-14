/*!
 * @nutui/nutui v2.3.15 - badge.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('badge', [], t)
    : 'object' == typeof exports
    ? (exports.badge = t())
    : (e.badge = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
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
      n((n.s = 181))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r, i, u, s) {
        var a,
          f = 'function' == typeof e ? e.options : e;
        if (
          (t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
          o && (f.functional = !0),
          i && (f._scopeId = 'data-v-' + i),
          u
            ? ((a = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(u);
              }),
              (f._ssrRegister = a))
            : r &&
              (a = s
                ? function () {
                    r.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          a)
        )
          if (f.functional) {
            f._injectStyles = a;
            var d = f.render;
            f.render = function (e, t) {
              return a.call(t), d(e, t);
            };
          } else {
            var c = f.beforeCreate;
            f.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: e, options: f };
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    107: function (e, t, n) {},
    181: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = {
          name: 'nut-badge',
          props: {
            value: { type: [String, Number] },
            max: { type: Number, default: 1e4 },
            isDot: { type: Boolean, default: !1 },
            hidden: { type: Boolean, default: !1 },
            top: { type: String, default: '0' },
            right: { type: String, default: '0' },
            zIndex: { type: Number, default: 10 },
          },
          data: function () {
            return { stl: { top: this.top, right: this.right, zIndex: this.zIndex } };
          },
          computed: {
            content: function () {
              if (!this.isDot) {
                var e = this.value,
                  t = this.max;
                return 'number' == typeof e && 'number' == typeof t && t < e ? ''.concat(t, '+') : e;
              }
            },
          },
        },
        r = n(0),
        i = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              'div',
              { staticClass: 'nut-badge' },
              [
                e._t('default'),
                e._v(' '),
                n('sup', {
                  directives: [
                    { name: 'show', rawName: 'v-show', value: !e.hidden && (e.content || e.isDot), expression: '!hidden && (content || isDot)' },
                  ],
                  staticClass: 'nut-badge__content',
                  class: { 'is-dot': e.isDot },
                  style: e.stl,
                  domProps: { textContent: e._s(e.content) },
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(107);
      i.install = function (e) {
        e.component(i.name, i);
      };
      t.default = i;
    },
  });
});
//# sourceMappingURL=badge.js.map
