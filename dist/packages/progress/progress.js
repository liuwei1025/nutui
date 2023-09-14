/*!
 * @nutui/nutui v2.3.16 - progress.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('progress', [], e)
    : 'object' == typeof exports
    ? (exports.progress = e())
    : (t.progress = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var s = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
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
          for (var s in t)
            n.d(
              r,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
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
      n((n.s = 179))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, s, o, i, u) {
        var a,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          i
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  s && s.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(i);
              }),
              (l._ssrRegister = a))
            : s &&
              (a = u
                ? function () {
                    s.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : s),
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
      n.d(e, 'a', function () {
        return r;
      });
    },
    179: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-progress',
          props: {
            percentage: { type: [Number, String], default: 0, required: !0 },
            size: { type: String, default: '' },
            status: { type: String, default: 'text' },
            strokeWidth: { type: [Number, String], default: '' },
            textInside: { type: Boolean, default: !1 },
            showText: { type: Boolean, default: !0 },
            strokeColor: { type: String, default: '' },
            textColor: { tyep: String, default: '' },
          },
          data: function () {
            return { height: this.strokeWidth + 'px' };
          },
          computed: {
            bgStyle: function () {
              return { width: this.percentage + '%', backgroundColor: this.strokeColor || '' };
            },
            textStyle: function () {
              return { color: this.textColor || '' };
            },
            statusIcon: function () {
              return 'success' === this.status ? 'nut-icon-success' : 'wrong' === this.status ? 'nut-icon-fail' : '';
            },
          },
        },
        s = n(0),
        o = Object(s.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-progress' }, [
              n(
                'div',
                {
                  staticClass: 'nut-progress-outer',
                  class: [t.showText && !t.textInside ? 'nut-progress-outer-part' : '', 'nut-progress-' + t.size],
                  style: { height: t.height },
                },
                [
                  n('div', { class: ['nut-progress-inner', 'active' == t.status ? 'nut-active' : ''], style: t.bgStyle }, [
                    t.showText && t.textInside
                      ? n('div', { staticClass: 'nut-progress-text', style: { lineHeight: t.height } }, [
                          n('span', { style: t.textStyle }, [t._v(t._s(t.percentage) + '%')]),
                        ])
                      : t._e(),
                  ]),
                ]
              ),
              t._v(' '),
              t.showText && !t.textInside
                ? n(
                    'div',
                    { staticClass: 'nut-progress-text', style: { lineHeight: t.height } },
                    [
                      t._t('default', [
                        'text' == t.status || 'active' == t.status
                          ? [n('span', { style: t.textStyle }, [t._v(t._s(t.percentage) + '%')])]
                          : (t.status, [n('i', { class: t.statusIcon })]),
                      ]),
                    ],
                    2
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
      n(98);
      o.install = function (t) {
        t.component(o.name, o);
      };
      e.default = o;
    },
    98: function (t, e, n) {},
  });
});
//# sourceMappingURL=progress.js.map
