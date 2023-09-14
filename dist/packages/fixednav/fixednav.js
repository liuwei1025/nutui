/*!
 * @nutui/nutui v2.3.16 - fixednav.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('fixednav', [], e)
    : 'object' == typeof exports
    ? (exports.fixednav = e())
    : (t.fixednav = e());
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
      n((n.s = 210))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, r, i, u, s) {
        var f,
          a = 'function' == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = 'data-v-' + i),
          u
            ? ((f = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(u);
              }),
              (a._ssrRegister = f))
            : r &&
              (f = s
                ? function () {
                    r.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          f)
        )
          if (a.functional) {
            a._injectStyles = f;
            var c = a.render;
            a.render = function (t, e) {
              return f.call(e), c(t, e);
            };
          } else {
            var l = a.beforeCreate;
            a.beforeCreate = l ? [].concat(l, f) : [f];
          }
        return { exports: t, options: a };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    10: function (t, e, n) {
      var o = n(2).default,
        r = n(11);
      (t.exports = function (t) {
        var e = r(t, 'string');
        return 'symbol' === o(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    11: function (t, e, n) {
      var o = n(2).default;
      (t.exports = function (t, e) {
        if ('object' !== o(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || 'default');
          if ('object' !== o(r)) return r;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    150: function (t, e, n) {},
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
    210: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(4),
        r = n.n(o),
        i = {
          name: 'nut-fixednav',
          props: {
            active: { type: Boolean, default: !1 },
            navList: {
              default: function () {
                return [];
              },
              type: Array,
            },
            activeText: { default: '收起导航', type: String },
            unActiveText: { default: '快速导航', type: String },
            type: { default: 'right', type: String },
          },
          computed: {
            styled: function () {
              return r()({ active: this.defaultActive }, this.defaultType, !0);
            },
          },
          watch: {
            active: function (t, e) {
              this.defaultActive = t;
            },
            defaultActive: function (t, e) {
              this.$emit('update:active', t);
            },
          },
          data: function () {
            return { defaultActive: !1, defaultType: '' };
          },
          mounted: function () {
            (this.defaultActive = this.active), (this.defaultType = this.type);
          },
          methods: {
            selected: function (t, e) {
              this.$emit('selected', { item: t, $event: e });
            },
          },
        },
        u = n(0),
        s = Object(u.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'nut-fixednav', class: t.styled },
              [
                n(
                  'div',
                  { staticStyle: { position: 'relative', 'z-index': '1' } },
                  [
                    n('nut-popup', {
                      model: {
                        value: t.defaultActive,
                        callback: function (e) {
                          t.defaultActive = e;
                        },
                        expression: 'defaultActive',
                      },
                    }),
                  ],
                  1
                ),
                t._v(' '),
                t._t('list', [
                  n(
                    'ul',
                    { staticClass: 'fixed-list' },
                    t._l(t.navList, function (e, o) {
                      return n(
                        'li',
                        {
                          key: e.id || o,
                          on: {
                            click: function (n) {
                              return t.selected(e, n);
                            },
                          },
                        },
                        [
                          n('img', { attrs: { src: e.icon } }),
                          t._v(' '),
                          n('span', [t._v(t._s(e.text))]),
                          t._v(' '),
                          e.num ? n('b', [t._v(t._s(e.num))]) : t._e(),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
                t._v(' '),
                n(
                  'div',
                  {
                    staticClass: 'fixed-btn',
                    on: {
                      click: function (e) {
                        t.defaultActive = !t.defaultActive;
                      },
                    },
                  },
                  [
                    t._t('btn', [
                      n('img', {
                        attrs: { src: 'https://img14.360buyimg.com/imagetools/jfs/t1/149975/30/1615/368/5ef86176Eb75bae46/5f70ae80a2d567b4.png' },
                      }),
                      t._v(' '),
                      n('span', [t._v(t._s(t.defaultActive ? t.activeText : t.unActiveText))]),
                    ]),
                  ],
                  2
                ),
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
      n(150);
      s.install = function (t) {
        t.component(s.name, s);
      };
      e.default = s;
    },
    4: function (t, e, n) {
      var o = n(10);
      (t.exports = function (t, e, n) {
        return (e = o(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=fixednav.js.map
