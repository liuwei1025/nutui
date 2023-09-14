/*!
 * @nutui/nutui v2.3.16 - navbar.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('navbar', [], e)
    : 'object' == typeof exports
    ? (exports.navbar = e())
    : (t.navbar = e());
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
      n((n.s = 176))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, r, i, a, s) {
        var c,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          o && (l.functional = !0),
          i && (l._scopeId = 'data-v-' + i),
          a
            ? ((c = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (l._ssrRegister = c))
            : r &&
              (c = s
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          c)
        )
          if (l.functional) {
            l._injectStyles = c;
            var u = l.render;
            l.render = function (t, e) {
              return c.call(e), u(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, c) : [c];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    176: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'nut-navbar',
          props: { title: { type: String, default: 'NavBar' }, leftShow: { type: Boolean, default: !0 }, rightShow: { type: Boolean, default: !0 } },
          data: function () {
            return {};
          },
          methods: {
            onClickBack: function () {
              this.$router ? this.$router.back() : window.history.back();
            },
          },
        },
        r = n(0),
        i = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-navbar' }, [
              n(
                'div',
                { directives: [{ name: 'show', rawName: 'v-show', value: t.leftShow, expression: 'leftShow' }], staticClass: 'nav-left' },
                [
                  n(
                    'div',
                    {
                      staticClass: 'back',
                      on: {
                        click: function (e) {
                          return t.$emit('on-click-back');
                        },
                      },
                    },
                    [t._t('back-icon', [n('i', { staticClass: 'back-icon' })])],
                    2
                  ),
                  t._v(' '),
                  t._t('left'),
                ],
                2
              ),
              t._v(' '),
              n('div', { staticClass: 'nav-center' }, [
                n(
                  'h3',
                  {
                    staticClass: 'nav-title',
                    on: {
                      click: function (e) {
                        return t.$emit('on-click-title');
                      },
                    },
                  },
                  [
                    t._t('default', [
                      n('span', { directives: [{ name: 'show', rawName: 'v-show', value: t.title, expression: 'title' }] }, [t._v(t._s(t.title))]),
                    ]),
                  ],
                  2
                ),
              ]),
              t._v(' '),
              n(
                'div',
                { directives: [{ name: 'show', rawName: 'v-show', value: t.rightShow, expression: 'rightShow' }], staticClass: 'nav-right' },
                [
                  t._t('right'),
                  t._v(' '),
                  n(
                    'div',
                    {
                      staticClass: 'more',
                      on: {
                        click: function (e) {
                          return t.$emit('on-click-more');
                        },
                      },
                    },
                    [t._t('more-icon', [n('i', { staticClass: 'more-icon' })])],
                    2
                  ),
                ],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(91);
      i.install = function (t) {
        t.component(i.name, i);
      };
      e.default = i;
    },
    91: function (t, e, n) {},
  });
});
//# sourceMappingURL=navbar.js.map
