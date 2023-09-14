/*!
 * @nutui/nutui v2.3.16 - subsidenavbar.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('subsidenavbar', [], e)
    : 'object' == typeof exports
    ? (exports.subsidenavbar = e())
    : (t.subsidenavbar = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var r = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
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
          for (var r in t)
            n.d(
              i,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
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
      n((n.s = 142))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, o, s, a) {
        var u,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          i && (c.functional = !0),
          o && (c._scopeId = 'data-v-' + o),
          s
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (c._ssrRegister = u))
            : r &&
              (u = a
                ? function () {
                    r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          u)
        )
          if (c.functional) {
            c._injectStyles = u;
            var l = c.render;
            c.render = function (t, e) {
              return u.call(e), l(t, e);
            };
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, u) : [u];
          }
        return { exports: t, options: c };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    142: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(59);
      n(143);
      (i.a.install = function (t) {
        t.component(i.a.name, i.a);
      }),
        (e.default = i.a);
    },
    143: function (t, e, n) {},
    59: function (t, e, n) {
      'use strict';
      var i = {
          name: 'nut-subsidenavbar',
          props: { title: { type: String, default: '' }, ikey: { type: [String, Number], default: '' }, open: { type: Boolean, default: !0 } },
          data: function () {
            return { direction: '' };
          },
          mounted: function () {
            this.direction = this.open ? '' : 'up';
          },
          methods: {
            handleClick: function () {
              this.$emit('titleClick'), (this.direction = this.direction ? '' : 'up');
            },
          },
        },
        r = n(0),
        o = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-subsidenavbar sidenavbar-item', attrs: { ikey: t.ikey } }, [
              n(
                'div',
                {
                  staticClass: 'item-title',
                  on: {
                    click: function (e) {
                      return e.stopPropagation(), t.handleClick(e);
                    },
                  },
                },
                [
                  n('a', { staticClass: 'sidenavbar-title', attrs: { href: 'javascript:;' } }, [t._v(t._s(t.title))]),
                  t._v(' '),
                  n('span', { staticClass: 'sidenavbar-icon' }, [n('nut-icon', { class: t.direction, attrs: { type: 'down' } })], 1),
                ]
              ),
              t._v(' '),
              n(
                'div',
                { staticClass: 'sub-sidenavbar-list', class: t.direction ? 'nutFadeOut' : 'nutFadeIn', style: { height: t.direction ? 0 : 'auto' } },
                [t._t('default')],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = o.exports;
    },
  });
});
//# sourceMappingURL=subsidenavbar.js.map
