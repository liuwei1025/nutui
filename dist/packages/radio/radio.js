/*!
 * @nutui/nutui v2.3.16 - radio.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('radio', [], t)
    : 'object' == typeof exports
    ? (exports.radio = t())
    : (e.radio = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
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
      n((n.s = 166))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, i, o, a, u) {
        var s,
          l = 'function' == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          a
            ? ((s = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(a);
              }),
              (l._ssrRegister = s))
            : i &&
              (s = u
                ? function () {
                    i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          s)
        )
          if (l.functional) {
            l._injectStyles = s;
            var d = l.render;
            l.render = function (e, t) {
              return s.call(t), d(e, t);
            };
          } else {
            var c = l.beforeCreate;
            l.beforeCreate = c ? [].concat(c, s) : [s];
          }
        return { exports: e, options: l };
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    115: function (e, t, n) {},
    166: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = {
          name: 'nut-radio',
          mixins: [
            {
              methods: {
                findCptUpward: function (e) {
                  for (var t = this.$parent; t; ) {
                    if (t.$options.name === e) {
                      this.parent = t;
                      break;
                    }
                    t = parent.$parent;
                  }
                },
              },
            },
          ],
          props: {
            value: { type: [String, Number, Boolean], default: !1 },
            label: [String, Number, Boolean],
            size: { type: String, default: 'base' },
            disabled: { type: Boolean, default: !1 },
            animated: { type: Boolean, default: !0 },
          },
          data: function () {
            return { parent: null };
          },
          computed: {
            currentValue: {
              get: function () {
                return this.parent ? this.parent.value : this.value;
              },
              set: function (e) {
                (this.parent || this).$emit('input', e);
              },
            },
            currentSize: function () {
              return (this.parent && this.parent.size) || this.size;
            },
            isDisabled: function () {
              return (this.parent && this.parent.disabled) || this.disabled;
            },
            isAnimated: function () {
              return this.parent ? this.parent.animated && this.animated : this.animated;
            },
          },
          created: function () {
            this.findCptUpward('nut-radiogroup');
          },
          methods: {
            clickEvt: function (e) {
              if (this.isDisabled) return !1;
              this.currentValue = this.label;
            },
          },
        },
        i = n(0),
        o = Object(i.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n('label', { class: ['nut-radio', 'nut-radio-size-' + e.currentSize], on: { click: e.clickEvt } }, [
              n('input', {
                class: { 'nut-radio-ani': e.isAnimated },
                attrs: { type: 'radio', disabled: e.isDisabled, label: e.label },
                domProps: { value: e.currentValue, checked: e.currentValue === e.label },
              }),
              e._v(' '),
              n('span', { staticClass: 'nut-radio-label' }, [e._t('default')], 2),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(115);
      o.install = function (e) {
        e.component(o.name, o);
      };
      t.default = o;
    },
  });
});
//# sourceMappingURL=radio.js.map
