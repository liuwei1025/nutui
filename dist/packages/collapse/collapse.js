/*!
 * @nutui/nutui v2.3.16 - collapse.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('collapse', [], t)
    : 'object' == typeof exports
    ? (exports.collapse = t())
    : (e.collapse = t());
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
      n((n.s = 211))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r, i, a, c) {
        var u,
          s = 'function' == typeof e ? e.options : e;
        if (
          (t && ((s.render = t), (s.staticRenderFns = n), (s._compiled = !0)),
          o && (s.functional = !0),
          i && (s._scopeId = 'data-v-' + i),
          a
            ? ((u = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(a);
              }),
              (s._ssrRegister = u))
            : r &&
              (u = c
                ? function () {
                    r.call(this, (s.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          u)
        )
          if (s.functional) {
            s._injectStyles = u;
            var f = s.render;
            s.render = function (e, t) {
              return u.call(t), f(e, t);
            };
          } else {
            var l = s.beforeCreate;
            s.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: e, options: s };
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    151: function (e, t, n) {},
    211: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = {
          name: 'nut-collapse',
          model: { prop: 'value', event: 'change-active' },
          props: {
            value: { type: String | Number },
            accordion: { type: Boolean },
            expandIconPosition: { type: String, default: 'right' },
            icon: { type: String, default: '' },
            rotate: { type: Number | String, default: 180 },
          },
          watch: {
            value: function (e, t) {
              this.accordionFun(e);
            },
          },
          data: function () {
            return {};
          },
          methods: {
            changeEvt: function (e) {
              this.$parent.change && 'function' == typeof this.$parent.change ? this.$parent.change(e) : this.$emit('change', e);
            },
            changeValAry: function (e) {
              var t = -1;
              this.value.forEach(function (n, o) {
                String(n) == String(e) && (t = o);
              });
              var n = JSON.parse(JSON.stringify(this.value));
              t > -1 ? n.splice(t, 1) : n.push(e), this.$emit('change-active', n), this.changeEvt(n);
            },
            changeVal: function (e) {
              this.$emit('change-active', e), this.changeEvt(e);
            },
            accordionFun: function (e) {
              e instanceof Array ||
                this.$children.forEach(function (t) {
                  t.name == e && t.openExpanded ? t.changeOpen(!1) : (t.name == e ? t.changeOpen(!0) : t.changeOpen(!1), t.animation());
                });
            },
          },
        },
        r = n(0),
        i = Object(r.a)(
          o,
          function () {
            var e = this.$createElement;
            return (this._self._c || e)('div', { staticClass: 'nut-collapse' }, [this._t('default')], 2);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(151);
      i.install = function (e) {
        e.component(i.name, i);
      };
      t.default = i;
    },
  });
});
//# sourceMappingURL=collapse.js.map
