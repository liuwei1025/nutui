/*!
 * @nutui/nutui v2.3.16 - toast.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('vue')))
    : 'function' == typeof define && define.amd
    ? define('toast', ['vue'], e)
    : 'object' == typeof exports
    ? (exports.toast = e(require('vue')))
    : (t.toast = e(t.Vue));
})('undefined' != typeof self ? self : this, function (t) {
  return (function (t) {
    var e = {};
    function o(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (o.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            o.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, 'a', e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = './'),
      o((o.s = 164))
    );
  })({
    0: function (t, e, o) {
      'use strict';
      function n(t, e, o, n, r, i, s, u) {
        var a,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = o), (l._compiled = !0)),
          n && (l.functional = !0),
          i && (l._scopeId = 'data-v-' + i),
          s
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (l._ssrRegister = a))
            : r &&
              (a = u
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          a)
        )
          if (l.functional) {
            l._injectStyles = a;
            var c = l.render;
            l.render = function (t, e) {
              return a.call(e), c(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, a) : [a];
          }
        return { exports: t, options: l };
      }
      o.d(e, 'a', function () {
        return n;
      });
    },
    1: function (e, o) {
      e.exports = t;
    },
    10: function (t, e, o) {
      var n = o(2).default,
        r = o(11);
      (t.exports = function (t) {
        var e = r(t, 'string');
        return 'symbol' === n(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    11: function (t, e, o) {
      var n = o(2).default;
      (t.exports = function (t, e) {
        if ('object' !== n(t) || null === t) return t;
        var o = t[Symbol.toPrimitive];
        if (void 0 !== o) {
          var r = o.call(t, e || 'default');
          if ('object' !== n(r)) return r;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    164: function (t, e, o) {
      'use strict';
      o.r(e);
      var n = o(3),
        r = o.n(n),
        i = o(4),
        s = o.n(i),
        u = o(1),
        a = o.n(u),
        l = {
          name: 'nut-toast',
          props: {},
          data: function () {
            return {
              id: '',
              msg: '',
              visible: !1,
              duration: 2e3,
              timer: null,
              center: !0,
              type: '',
              customClass: '',
              bottom: 30,
              size: 'base',
              icon: null,
              textAlignCenter: !0,
              loadingRotate: !0,
              bgColor: 'rgba(46, 46, 46, 0.7)',
              onClose: null,
              textTimer: null,
              cover: !1,
              coverColor: 'rgba(0, 0, 0, 0)',
              toastStyle: {},
              toastClass: '',
              timeStamp: null,
              closeOnClickOverlay: !1,
            };
          },
          watch: {
            visible: function (t) {
              t && this.show();
            },
          },
          computed: {
            cusIcon: function () {
              return this.icon ? 'url("'.concat(this.icon, '")') : '';
            },
            toastBodyClass: function () {
              return [
                'nut-toast',
                { 'nut-toast-center': this.center },
                { 'nut-toast-has-icon': this.hasIcon },
                { 'nut-toast-cover': this.cover },
                { 'nut-loading': 'loading' == this.type },
                this.customClass,
                'nut-toast-' + this.size,
              ];
            },
            hasIcon: function () {
              return 'text' !== this.type || this.cusIcon;
            },
          },
          methods: {
            show: function (t) {
              var e = this;
              this.clearTimer(),
                clearTimeout(this.textTimer),
                this.duration &&
                  (this.timer = setTimeout(function () {
                    e.hide(t);
                  }, this.duration));
            },
            hide: function (t) {
              var e = this;
              this.clearTimer(),
                (this.visible = !1),
                t
                  ? clearTimeout(this.textTimer)
                  : (this.textTimer = setTimeout(function () {
                      clearTimeout(e.textTimer), (e.msg = '');
                    }, 300)),
                'function' == typeof this.onClose && this.onClose();
            },
            clearTimer: function () {
              this.timer && (clearTimeout(this.timer), (this.timer = null));
            },
            clickCover: function () {
              this.closeOnClickOverlay && this.hide();
            },
          },
          destroyed: function () {
            (this.textTimer = null), (this.timer = null);
          },
        },
        c = o(0),
        f = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('transition', { attrs: { name: 'toastfade' } }, [
              t.visible
                ? o(
                    'div',
                    {
                      class: t.toastBodyClass,
                      style: { bottom: t.center ? 'auto' : t.bottom + 'px', 'background-color': t.coverColor },
                      attrs: { id: t.id },
                      on: { click: t.clickCover },
                    },
                    [
                      o(
                        'div',
                        {
                          staticClass: 'nut-toast-inner',
                          class: t.toastClass,
                          style: Object.assign(
                            {},
                            { 'text-align': t.textAlignCenter ? 'center' : 'left', 'background-color': t.bgColor },
                            t.toastStyle
                          ),
                        },
                        [
                          t.hasIcon
                            ? o('span', { staticClass: 'nut-toast-icon-wrapper' }, [
                                o('i', {
                                  class: ['nut-toast-icon', t.type, { 'nut-toast-icon-rotate': 'loading' === t.type && t.loadingRotate }],
                                  style: { 'background-image': t.cusIcon },
                                }),
                              ])
                            : t._e(),
                          t._v(' '),
                          o('span', { staticClass: 'nut-toast-text', domProps: { innerHTML: t._s(t.msg) } }),
                        ]
                      ),
                    ]
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function p(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(o), !0).forEach(function (e) {
                s()(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : p(Object(o)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
              });
        }
        return t;
      }
      var m,
        v = a.a.extend(f),
        y = [],
        b = {},
        h = {
          msg: '',
          visible: !1,
          duration: 2e3,
          timer: null,
          center: !0,
          type: '',
          customClass: '',
          bottom: 30,
          size: 'base',
          icon: null,
          textAlignCenter: !0,
          loadingRotate: !0,
          bgColor: 'rgba(36, 36, 36, 0.8)',
          onClose: null,
          textTimer: null,
          cover: !1,
          coverColor: 'rgba(0, 0, 0, 0)',
          timeStamp: null,
          closeOnClickOverlay: !1,
        },
        g = d({}, h);
      function x(t) {
        var e = d(d(d({ id: new Date().getTime() }, g), b[t.type]), t);
        return (
          e.id && y[e.id] ? ((m = y[e.id]).hide(!0), (m = r()(m, e))) : ((m = new v({ data: r()(e, t) })), e.id && (y[e.id] = m)),
          (m.vm = m.$mount()),
          document.body.appendChild(m.$el),
          (m.visible = !0),
          m
        );
      }
      function _(t) {
        t || console.warn('[NutUI Toast]: msg不能为空');
      }
      var O = {
        text: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return _(t), x(d(d({}, e), {}, { msg: t, type: 'text' }));
        },
        success: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return _(t), x(d(d({}, e), {}, { msg: t, type: 'success' }));
        },
        fail: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return _(t), x(d(d({}, e), {}, { msg: t, type: 'fail' }));
        },
        warn: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return _(t), x(d(d({}, e), {}, { msg: t, type: 'warn' }));
        },
        loading: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            ((e = d(d({}, e), {}, { id: e.id || 'loading', msg: t, type: 'loading' })).cover = void 0 === e.cover || e.cover),
            (e.duration = e.duration || 0),
            x(e)
          );
        },
        setDefaultOptions: function (t, e) {
          'string' == typeof t ? (b[t] = e) : r()(g, t);
        },
        resetDefaultOptions: function (t) {
          'string' == typeof t ? (b[t] = null) : ((g = d({}, h)), (b = {}));
        },
      };
      o(84);
      O.install = function (t) {
        t.prototype.$toast = O;
      };
      e.default = O;
    },
    2: function (t, e) {
      function o(e) {
        return (
          (t.exports = o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          o(e)
        );
      }
      (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    3: function (t, e) {
      function o() {
        return (
          (t.exports = o =
            Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                  }
                  return t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          o.apply(this, arguments)
        );
      }
      (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    4: function (t, e, o) {
      var n = o(10);
      (t.exports = function (t, e, o) {
        return (e = n(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = o), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    84: function (t, e, o) {},
  });
});
//# sourceMappingURL=toast.js.map
