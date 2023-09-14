/*!
 * @nutui/nutui v2.3.15 - switch.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('switch', [], e)
    : 'object' == typeof exports
    ? (exports.switch = e())
    : (t.switch = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var o = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              i,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return i;
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
      n((n.s = 177))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, o, r, s, c) {
        var a,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          i && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          s
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (u._ssrRegister = a))
            : o &&
              (a = c
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          a)
        )
          if (u.functional) {
            u._injectStyles = a;
            var l = u.render;
            u.render = function (t, e) {
              return a.call(e), l(t, e);
            };
          } else {
            var f = u.beforeCreate;
            u.beforeCreate = f ? [].concat(f, a) : [a];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    177: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = {
          name: 'nut-switch',
          props: {
            active: { type: Boolean, default: !1 },
            size: { type: String, default: 'base' },
            disabled: { type: Boolean, default: !1 },
            label: { type: String, default: '' },
          },
          data: function () {
            return { isActive: !1, arrLabel: (this.label || '').split('|') };
          },
          created: function () {
            this.isActive = this.active;
          },
          watch: {
            active: function (t) {
              this.isActive = t;
            },
          },
          methods: {
            toggle: function () {
              var t = this,
                e = this.isActive;
              this.disabled ||
                ((this.isActive = !e),
                setTimeout(function () {
                  t.$emit('change', t.isActive), t.$emit('update:active', t.isActive);
                }, 300));
            },
          },
        },
        o = n(0),
        r = Object(o.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                staticClass: 'nut-switch',
                class: [{ 'nut-switch-active': t.isActive }, 'nut-switch-' + t.size, { 'nut-switch-disabled': t.disabled }],
                on: { click: t.toggle },
              },
              [
                n('div', { staticClass: 'nut-switch-btn' }),
                t._v(' '),
                t.isActive
                  ? n('div', { staticClass: 'nut-switch-label' }, [t._v(t._s(t.arrLabel[0]))])
                  : n('div', { staticClass: 'nut-switch-label' }, [t._v(t._s(t.arrLabel[1]))]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(94);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
    },
    94: function (t, e, n) {},
  });
});
//# sourceMappingURL=switch.js.map
