/*!
 * @nutui/nutui v2.3.15 - textinput.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('textinput', [], e)
    : 'object' == typeof exports
    ? (exports.textinput = e())
    : (t.textinput = e());
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
      n((n.s = 194))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, u, i, l) {
        var s,
          a = 'function' == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
          r && (a.functional = !0),
          u && (a._scopeId = 'data-v-' + u),
          i
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(i);
              }),
              (a._ssrRegister = s))
            : o &&
              (s = l
                ? function () {
                    o.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          s)
        )
          if (a.functional) {
            a._injectStyles = s;
            var p = a.render;
            a.render = function (t, e) {
              return s.call(e), p(t, e);
            };
          } else {
            var c = a.beforeCreate;
            a.beforeCreate = c ? [].concat(c, s) : [s];
          }
        return { exports: t, options: a };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    10: function (t, e, n) {
      var r = n(2).default,
        o = n(11);
      (t.exports = function (t) {
        var e = o(t, 'string');
        return 'symbol' === r(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    11: function (t, e, n) {
      var r = n(2).default;
      (t.exports = function (t, e) {
        if ('object' !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(t, e || 'default');
          if ('object' !== r(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    127: function (t, e, n) {},
    194: function (t, e, n) {
      'use strict';
      n.r(e);
      var r,
        o = n(4),
        u = n.n(o),
        i = n(3),
        l = n.n(i),
        s =
          ((r = {
            name: 'nut-textinput',
            props: {
              value: { type: [String, Number], default: '' },
              type: { type: String, default: 'text' },
              label: { type: String, default: '' },
              placeholder: { type: String, default: '' },
              disabled: { type: Boolean, default: !1 },
              hasBorder: { type: Boolean, default: !0 },
              outline: { type: Boolean, default: !1 },
              clearBtn: { type: Boolean, default: !0 },
              clearBtnPersonnal: { type: Boolean, default: !1 },
            },
            computed: {},
            data: function () {
              return { clearBtnShow: !1 };
            },
          }),
          u()(r, 'computed', {
            inputListeners: function () {
              var t = this;
              return l()({}, this.$listeners, {
                input: function (e) {
                  (t.clearBtnShow = !!e.target.value), t.$emit('input', e.target.value);
                },
              });
            },
          }),
          u()(r, 'watch', {
            value: function (t, e) {
              this.clearBtnShow = !!t;
            },
          }),
          u()(r, 'methods', {
            clear: function () {
              this.$emit('input', ''), (this.clearBtnShow = !1);
            },
            focus: function () {
              this.$nextTick(function () {
                this.$refs.nutUiInput.focus();
              });
            },
            blur: function () {
              this.$refs.nutUiInput.blur();
            },
          }),
          u()(r, 'mounted', function () {
            this.clearBtnShow = !!this.value;
          }),
          r),
        a = n(0),
        p = Object(a.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'form',
              {
                class: ['nut-textinput', { 'nut-textinput-disabled': t.disabled }],
                on: {
                  submit: function (t) {
                    t.preventDefault();
                  },
                },
              },
              [
                t.label ? n('span', { staticClass: 'nut-textinput-label' }, [t._v(t._s(t.label))]) : t._e(),
                t._v(' '),
                n(
                  'input',
                  t._g(
                    t._b(
                      {
                        ref: 'nutUiInput',
                        style: { borderWidth: t.hasBorder ? '' : 0, outline: t.outline ? '' : 'none', 'padding-right': t.clearBtn ? '' : '10px' },
                        attrs: { type: t.type, placeholder: t.placeholder, disabled: t.disabled },
                        domProps: { value: t.value },
                      },
                      'input',
                      t.$attrs,
                      !1
                    ),
                    t.inputListeners
                  )
                ),
                t._v(' '),
                t.clearBtn
                  ? n(
                      'span',
                      {
                        directives: [{ name: 'show', rawName: 'v-show', value: t.clearBtnShow, expression: 'clearBtnShow' }],
                        staticClass: 'nut-textinput-clear',
                        on: { click: t.clear },
                      },
                      [
                        t.clearBtnPersonnal
                          ? t._t('clearBtn')
                          : n('svg', { attrs: { version: '1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' } }, [
                              n('path', {
                                attrs: {
                                  d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.8 9.7c.3.3.3.8 0 1.1s-.8.3-1.1 0L8 9.1l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 5.2 6.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 6.9l1.7-1.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l1.7 1.7z',
                                },
                              }),
                            ]),
                      ],
                      2
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(127);
      p.install = function (t) {
        t.component(p.name, p);
      };
      e.default = p;
    },
    2: function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    3: function (t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n.apply(this, arguments)
        );
      }
      (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    4: function (t, e, n) {
      var r = n(10);
      (t.exports = function (t, e, n) {
        return (e = r(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=textinput.js.map
