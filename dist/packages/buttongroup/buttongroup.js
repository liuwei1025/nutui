/*!
 * @nutui/nutui v2.3.15 - buttongroup.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('buttongroup', [], e)
    : 'object' == typeof exports
    ? (exports.buttongroup = e())
    : (t.buttongroup = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return o;
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
      n((n.s = 111))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, r, u, i, s) {
        var c,
          f = 'function' == typeof t ? t.options : t;
        if (
          (e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
          o && (f.functional = !0),
          u && (f._scopeId = 'data-v-' + u),
          i
            ? ((c = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(i);
              }),
              (f._ssrRegister = c))
            : r &&
              (c = s
                ? function () {
                    r.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          c)
        )
          if (f.functional) {
            f._injectStyles = c;
            var a = f.render;
            f.render = function (t, e) {
              return c.call(e), a(t, e);
            };
          } else {
            var l = f.beforeCreate;
            f.beforeCreate = l ? [].concat(l, c) : [c];
          }
        return { exports: t, options: f };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    111: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(63);
      n(112);
      (o.a.install = function (t) {
        t.component(o.a.name, o.a);
      }),
        (e.default = o.a);
    },
    112: function (t, e, n) {},
    63: function (t, e, n) {
      'use strict';
      var o = {
          name: 'nut-buttongroup',
          props: { shape: { type: String, default: '' }, type: { type: String, default: '' } },
          data: function () {
            return { cls: '' };
          },
          mounted: function () {
            this.cls = 'nut-buttongroup '.concat(this.shape, ' ').concat(this.type);
          },
        },
        r = n(0),
        u = Object(r.a)(
          o,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)('div', { class: this.cls }, [this._t('default')], 2);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = u.exports;
    },
  });
});
//# sourceMappingURL=buttongroup.js.map
