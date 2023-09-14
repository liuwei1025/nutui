/*!
 * @nutui/nutui v2.3.15 - luckdraw.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('luckdraw', [], e)
    : 'object' == typeof exports
    ? (exports.luckdraw = e())
    : (t.luckdraw = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            r.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
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
      r((r.s = 201))
    );
  })({
    0: function (t, e, r) {
      'use strict';
      function n(t, e, r, n, i, o, s, a) {
        var u,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = r), (l._compiled = !0)),
          n && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          s
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (l._ssrRegister = u))
            : i &&
              (u = a
                ? function () {
                    i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          u)
        )
          if (l.functional) {
            l._injectStyles = u;
            var c = l.render;
            l.render = function (t, e) {
              return u.call(e), c(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, u) : [u];
          }
        return { exports: t, options: l };
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    135: function (t, e, r) {},
    201: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = {
          name: 'nut-luckdraw',
          mounted: function () {
            this.init();
          },
          props: {
            luckWidth: { required: !0 },
            luckHeight: { required: !0 },
            prizeList: { required: !0 },
            turnsNumber: { default: 5 },
            styleOpt: {
              default: function () {
                return {
                  prizeBgColors: [
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                  ],
                  borderColor: '#ff9800',
                };
              },
            },
            turnsTime: { default: 5 },
          },
          watch: {
            prizeList: function (t, e) {
              this.init();
            },
          },
          data: function () {
            return { winningPrize: 0, startRotateDegree: 0, rotateAngle: 0, rotateTransition: '' };
          },
          methods: {
            getRotateAngle: function (t) {
              var e = (360 / this.prizeList.length) * t + 180 / this.prizeList.length;
              return { transform: 'rotate('.concat(e, 'deg)') };
            },
            init: function () {
              var t = this.styleOpt,
                e = this.prizeList.length,
                r = t.prizeBgColors,
                n = t.borderColor,
                i = this.$refs.canvas.getContext('2d'),
                o = (this.$refs.canvas.width = this.$refs.luckdraw.clientWidth),
                s = (this.$refs.canvas.height = this.$refs.luckdraw.clientHeight);
              i.translate(0, s), i.rotate((-90 * Math.PI) / 180);
              var a = o / 2 - 1,
                u = (2 * Math.PI) / e;
              i.clearRect(0, 0, o, s), (i.strokeStyle = n);
              for (var l = 0; l < e; l++) {
                var c = l * u;
                this.prizeList[l].prizeColor ? (i.fillStyle = this.prizeList[l].prizeColor) : (i.fillStyle = r[l]),
                  i.beginPath(),
                  i.arc(0.5 * o, 0.5 * s, a, c, c + u, !1),
                  i.arc(0.5 * o, 0.5 * s, 0, c + u, c, !0),
                  i.stroke(),
                  i.fill(),
                  i.save();
              }
            },
            rotate: function (t) {
              var e = this,
                r = this.turnsTime,
                n =
                  this.startRotateDegree +
                  360 * this.turnsNumber +
                  360 -
                  (180 / this.prizeList.length + (360 / this.prizeList.length) * t) -
                  (this.startRotateDegree % 360);
              (this.startRotateDegree = n),
                (this.rotateAngle = 'rotate('.concat(n, 'deg)')),
                (this.rotateTransition = 'transform '.concat(r, 's cubic-bezier(0.250, 0.460, 0.455, 0.995)')),
                setTimeout(function () {
                  e.$emit('end-turns');
                }, 1e3 * r + 500);
            },
          },
        },
        i = r(0),
        o = Object(i.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r('div', { ref: 'luckdraw', staticClass: 'nut-luckdraw', style: { width: t.luckWidth, height: t.luckHeight } }, [
              r('div', { staticClass: 'lucktable', style: { transform: t.rotateAngle, transition: t.rotateTransition } }, [
                r('canvas', { ref: 'canvas', attrs: { id: 'canvas' } }, [t._v('\n      浏览器版本过低\n    ')]),
                t._v(' '),
                r(
                  'div',
                  { staticClass: 'prize' },
                  t._l(t.prizeList, function (e, n) {
                    return r('div', { key: n, staticClass: 'item', style: t.getRotateAngle(n) }, [t._t('item', null, { item: e })], 2);
                  }),
                  0
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      r(135);
      o.install = function (t) {
        t.component(o.name, o);
      };
      e.default = o;
    },
  });
});
//# sourceMappingURL=luckdraw.js.map
