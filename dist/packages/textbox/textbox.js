/*!
 * @nutui/nutui v2.3.15 - textbox.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('textbox', [], e)
    : 'object' == typeof exports
    ? (exports.textbox = e())
    : (t.textbox = e());
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
      n((n.s = 196))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, i, u, a) {
        var s,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          i && (l._scopeId = 'data-v-' + i),
          u
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(u);
              }),
              (l._ssrRegister = s))
            : o &&
              (s = a
                ? function () {
                    o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          s)
        )
          if (l.functional) {
            l._injectStyles = s;
            var c = l.render;
            l.render = function (t, e) {
              return s.call(e), c(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, s) : [s];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    130: function (t, e, n) {},
    196: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-textbox',
          props: {
            value: { type: [String, Number], default: '' },
            disabled: { type: Boolean, default: !1 },
            maxNum: { type: [String, Number], default: 50 },
            placeText: { type: String, default: '请您在此输入' },
            txtAreaH: { type: [String, Number], default: '50' },
            switchMax: { type: Boolean, default: !1 },
            textBgColor: { type: String, default: '#fff' },
            limitShow: { type: Boolean, default: !0 },
          },
          data: function () {
            return { errorState: !1, txtNum: 0 };
          },
          mounted: function () {},
          computed: {
            currentValue: {
              get: function () {
                return (
                  (this.txtNum = this.value.length),
                  this.txtNum > this.maxNum ? ((this.txtNum = this.maxNum), this.value.substr(0, this.maxNum)) : this.value
                );
              },
              set: function (t) {},
            },
            txtAreaHeight: function () {
              return this.txtAreaH;
            },
            iptMaxlength: function () {
              var t;
              return this.switchMax && (t = this.maxNum), t;
            },
          },
          methods: {
            txtIptLength: function (t) {
              var e = t.target.value,
                n = e.length;
              (this.txtNum = n),
                n > this.maxNum ? ((this.errorState = !0), this.$emit('errorFunc')) : (this.errorState = !1),
                this.$emit('inputFunc', e),
                this.$emit('input', e);
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
            return n('div', { staticClass: 'nut-textbox' }, [
              n(
                'div',
                {
                  staticClass: 'txt-area',
                  class: { error: t.errorState, 'num-none': 0 == t.limitShow, disabled: t.disabled },
                  style: { background: t.textBgColor },
                },
                [
                  n('textarea', {
                    directives: [{ name: 'model', rawName: 'v-model', value: t.currentValue, expression: 'currentValue' }],
                    style: { height: t.txtAreaHeight + 'px' },
                    attrs: { placeholder: t.placeText, disabled: t.disabled, maxlength: t.iptMaxlength },
                    domProps: { value: t.currentValue },
                    on: {
                      input: [
                        function (e) {
                          e.target.composing || (t.currentValue = e.target.value);
                        },
                        t.txtIptLength,
                      ],
                    },
                  }),
                  t._v(' '),
                  n('span', { directives: [{ name: 'show', rawName: 'v-show', value: t.limitShow, expression: 'limitShow' }] }, [
                    t._v(t._s(t.txtNum) + '/' + t._s(t.maxNum)),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(130);
      i.install = function (t) {
        t.component(i.name, i);
      };
      e.default = i;
    },
  });
});
//# sourceMappingURL=textbox.js.map
