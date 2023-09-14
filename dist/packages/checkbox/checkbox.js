/*!
 * @nutui/nutui v2.3.15 - checkbox.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('checkbox', [], t)
    : 'object' == typeof exports
    ? (exports.checkbox = t())
    : (e.checkbox = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
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
      n((n.s = 117))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, i, r, u, s) {
        var a,
          l = 'function' == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          o && (l.functional = !0),
          r && (l._scopeId = 'data-v-' + r),
          u
            ? ((a = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(u);
              }),
              (l._ssrRegister = a))
            : i &&
              (a = s
                ? function () {
                    i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          a)
        )
          if (l.functional) {
            l._injectStyles = a;
            var c = l.render;
            l.render = function (e, t) {
              return a.call(t), c(e, t);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, a) : [a];
          }
        return { exports: e, options: l };
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    117: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n(52);
      n(73);
      (o.a.install = function (e) {
        e.component(o.a.name, o.a);
      }),
        (t.default = o.a);
    },
    2: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    52: function (e, t, n) {
      'use strict';
      var o = n(2),
        i = n.n(o),
        r = {
          name: 'nut-checkbox',
          props: {
            name: { type: String },
            size: { type: [String, Number, Boolean], default: 'base' },
            label: { type: String, default: '' },
            value: { required: !0 },
            trueValue: { default: !0 },
            falseValue: { default: !1 },
            submittedValue: { type: String, default: 'on' },
            checked: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            animation: { type: Boolean, default: !0 },
          },
          watch: {
            value: function () {
              this.isChecked = this.looseEqual(this.value, this.trueValue);
            },
            checked: function (e, t) {
              this.isChecked = e;
            },
          },
          data: function () {
            return { isChecked: this.value == this.trueValue || this.checked };
          },
          mounted: function () {
            this.$emit('update:checked', this.isChecked ? this.trueValue : this.falseValue, this.label),
              this.$emit('input', this.isChecked ? this.trueValue : this.falseValue, this.label);
          },
          methods: {
            isObject: function (e) {
              return null !== e && 'object' === i()(e);
            },
            looseEqual: function (e, t) {
              return e == t || (!(!this.isObject(e) || !this.isObject(t)) && JSON.stringify(e) === JSON.stringify(t));
            },
            changeEvt: function (e) {
              var t = this.isChecked,
                n = e.target.checked;
              this.$emit('input', n ? this.trueValue : this.falseValue, this.label, e),
                t !== n && this.$emit('change', n ? this.trueValue : this.falseValue, this.label, e);
            },
          },
        },
        u = n(0),
        s = Object(u.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n('label', { class: ['nut-checkbox', 'nut-checkbox-size-' + e.size] }, [
              n('input', {
                class: { 'nut-checkbox-ani': e.animation },
                attrs: { type: 'checkbox', name: e.name, disabled: e.disabled },
                domProps: { checked: e.isChecked, value: e.submittedValue },
                on: { change: e.changeEvt },
              }),
              e._v(' '),
              e.label
                ? n('span', { staticClass: 'nut-checkbox-label' }, [e._v('\n    ' + e._s(e.label) + '\n  ')])
                : n('span', { staticClass: 'nut-checkbox-label' }, [e._t('default')], 2),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = s.exports;
    },
    73: function (e, t, n) {},
  });
});
//# sourceMappingURL=checkbox.js.map
