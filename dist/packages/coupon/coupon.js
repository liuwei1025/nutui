/*!
 * @nutui/nutui v2.3.15 - coupon.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('coupon', [], e)
    : 'object' == typeof exports
    ? (exports.coupon = e())
    : (t.coupon = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var u = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
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
          for (var u in t)
            n.d(
              o,
              u,
              function (e) {
                return t[e];
              }.bind(null, u)
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
      n((n.s = 199))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, u, i, r, c) {
        var s,
          a = 'function' == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = 'data-v-' + i),
          r
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  u && u.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(r);
              }),
              (a._ssrRegister = s))
            : u &&
              (s = c
                ? function () {
                    u.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : u),
          s)
        )
          if (a.functional) {
            a._injectStyles = s;
            var l = a.render;
            a.render = function (t, e) {
              return s.call(e), l(t, e);
            };
          } else {
            var d = a.beforeCreate;
            a.beforeCreate = d ? [].concat(d, s) : [s];
          }
        return { exports: t, options: a };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    133: function (t, e, n) {},
    199: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'nut-coupon',
          props: {
            item: { type: Object, default: null },
            type: { type: [String, Number], default: '1' },
            discount: { type: [String, Number], default: null },
            cText1: { type: [String, Number], default: null },
            cText2: { type: [String, Number], default: null },
            cImage: { type: [Boolean, String], default: !1 },
            state: { type: [String, Number], default: '0' },
          },
          data: function () {
            return {};
          },
          components: {},
          mounted: function () {},
          methods: {
            clickHandler: function (t) {
              this.$emit('click', t);
            },
            cleanZero: function (t) {
              var e = /\.0+$/.exec((t = t));
              return e ? t.slice(0, e.index) : t;
            },
          },
        },
        u = n(0),
        i = Object(u.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: [
                  'nut-coupon',
                  'nut-coupon-' + t.type,
                  1 == t.cImage ? 'nut-coupon-image' : '',
                  'nut-coupon-' + ['get', 'use', 'ban'][t.state],
                ],
                on: { click: t.clickHandler },
              },
              [
                n('div', { staticClass: 'nut-coupon-info' }, [
                  2 == t.type && t.cImage
                    ? n('div', { staticClass: 'nut-coupon-imgbox' }, [n('img', { staticClass: 'nut-coupon-img', attrs: { src: t.cImage } })])
                    : t._e(),
                  t._v(' '),
                  n(
                    'div',
                    { staticClass: 'nut-coupon-desc' },
                    [
                      '1' != t.type
                        ? [
                            'number' != typeof +t.discount || isNaN(+t.discount)
                              ? [n('div', { staticClass: 'nut-coupon-discount' }, [t._v('\n            ' + t._s(t.discount) + '\n          ')])]
                              : [
                                  n('div', { staticClass: 'nut-coupon-discount' }, [
                                    n('span', { staticClass: 'rmb' }, [t._v('¥')]),
                                    t._v('\n            ' + t._s(t.discount) + '\n          '),
                                  ]),
                                ],
                          ]
                        : t._e(),
                      t._v(' '),
                      n('div', { staticClass: 'nut-coupon-quota' }, [t._v(t._s(t.cleanZero(t.cText1)))]),
                    ],
                    2
                  ),
                ]),
                t._v(' '),
                n('div', { staticClass: 'nut-coupon-limitStr' }, [t._v(t._s(t.cleanZero(t.cText2)))]),
                t._v(' '),
                n('div', { staticClass: 'nut-coupon-btn' }, [
                  0 == t.state
                    ? n('div', [t._v('立即领取')])
                    : 1 == t.state
                    ? n('div', [t._v('去使用')])
                    : 2 == t.state
                    ? n('div', [t._v('已抢光')])
                    : t._e(),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(133);
      i.install = function (t) {
        t.component(i.name, i);
      };
      e.default = i;
    },
  });
});
//# sourceMappingURL=coupon.js.map
