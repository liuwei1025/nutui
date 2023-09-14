/*!
 * @nutui/nutui v2.3.15 - circleprogress.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('circleprogress', [], e)
    : 'object' == typeof exports
    ? (exports.circleprogress = e())
    : (t.circleprogress = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function r(o) {
      if (e[o]) return e[o].exports;
      var n = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if ((r.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var n in t)
            r.d(
              o,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return o;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = './'),
      r((r.s = 203))
    );
  })({
    0: function (t, e, r) {
      'use strict';
      function o(t, e, r, o, n, s, i, c) {
        var u,
          a = 'function' == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = r), (a._compiled = !0)),
          o && (a.functional = !0),
          s && (a._scopeId = 'data-v-' + s),
          i
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  n && n.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(i);
              }),
              (a._ssrRegister = u))
            : n &&
              (u = c
                ? function () {
                    n.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : n),
          u)
        )
          if (a.functional) {
            a._injectStyles = u;
            var p = a.render;
            a.render = function (t, e) {
              return u.call(e), p(t, e);
            };
          } else {
            var l = a.beforeCreate;
            a.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: t, options: a };
      }
      r.d(e, 'a', function () {
        return o;
      });
    },
    138: function (t, e, r) {},
    203: function (t, e, r) {
      'use strict';
      r.r(e);
      var o = r(3),
        n = r.n(o),
        s = {
          name: 'nut-circleprogress',
          props: {
            progress: { type: [Number, String], required: !0 },
            strokeInnerWidth: { type: [Number, String], default: 10 },
            isAuto: { tyep: Boolean, default: !1 },
            progressOption: { type: Object, default: function () {} },
          },
          data: function () {
            return {};
          },
          computed: {
            arcLength: function () {
              var t = Math.floor(2 * Math.PI * this.option.radius),
                e = (this.progress / 100) * t;
              return ''.concat(e, ',').concat(t);
            },
            option: function () {
              var t = { radius: 50, strokeOutWidth: 10, backColor: '#d9d9d9', progressColor: 'red' };
              return (
                n()(t, this.progressOption),
                (t.cy = t.cx = t.radius + t.strokeOutWidth),
                (t.size = 2 * (t.radius + t.strokeOutWidth)),
                (t.startPosition = 'rotate(-90,' + t.cx + ',' + t.cy + ')'),
                t
              );
            },
          },
        },
        i = r(0),
        c = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r('div', { staticClass: 'nut-circleprogress', style: { height: t.option.size + 'px', width: t.option.size + 'px' } }, [
              r('svg', { attrs: { height: t.option.size, width: t.option.size, 'x-mlns': 'http://www.w3.org/200/svg' } }, [
                r('circle', {
                  attrs: {
                    r: t.option.radius,
                    cx: t.option.cx,
                    cy: t.option.cy,
                    stroke: t.option.backColor,
                    'stroke-width': t.option.strokeOutWidth,
                    fill: 'none',
                  },
                }),
                t._v(' '),
                r('circle', {
                  staticStyle: { transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s' },
                  attrs: {
                    r: t.option.radius,
                    cx: t.option.cx,
                    cy: t.option.cy,
                    stroke: t.option.progressColor,
                    'stroke-dasharray': t.arcLength,
                    'stroke-width': t.strokeInnerWidth,
                    fill: 'none',
                    transform: t.option.startPosition,
                    'stroke-linecap': 'round',
                  },
                }),
              ]),
              t._v(' '),
              r(
                'div',
                { staticClass: 'nut-circleprogress-content' },
                [t.isAuto ? [t._t('default')] : [t._t('default', [t._v(t._s(t.progress) + '%')])]],
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
      r(138);
      c.install = function (t) {
        t.component(c.name, c);
      };
      e.default = c;
    },
    3: function (t, e) {
      function r() {
        return (
          (t.exports = r =
            Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                  }
                  return t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          r.apply(this, arguments)
        );
      }
      (t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=circleprogress.js.map
