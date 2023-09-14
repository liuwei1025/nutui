/*!
 * @nutui/nutui v2.3.16 - slider.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('slider', [], e)
    : 'object' == typeof exports
    ? (exports.slider = e())
    : (t.slider = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var o = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
          for (var o in t)
            n.d(
              i,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
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
      n((n.s = 178))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, o, r, s, l) {
        var a,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          i && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          s
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (u._ssrRegister = a))
            : o &&
              (a = l
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          a)
        )
          if (u.functional) {
            u._injectStyles = a;
            var c = u.render;
            u.render = function (t, e) {
              return a.call(e), c(t, e);
            };
          } else {
            var d = u.beforeCreate;
            u.beforeCreate = d ? [].concat(d, a) : [a];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    178: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(54),
        o = {
          name: 'nut-slider',
          props: {
            value: { type: [String, Number] },
            showLabel: { type: Boolean, default: !1 },
            showLabelAlways: { type: Boolean, default: !1 },
            showRangeTxt: { type: Boolean, default: !1 },
            range: {
              type: Array,
              validator: function (t) {
                return 2 === t.length && t[1] > t[0];
              },
              default: function () {
                return [0, 10];
              },
            },
            stage: { type: [String, Number] },
          },
          data: function () {
            return { box: null, boxLeft: 0, current: 0, handle: null, posi: null, level: null, ani: !1, scheduledAnimationFrame: !1 };
          },
          computed: {
            total: function () {
              return this.range[1] - this.range[0];
            },
            cell: function () {
              return this.total / this.level;
            },
          },
          methods: {
            onTouchStart: function (t) {
              t.cancelable && t.preventDefault(), (this.ani = !0);
            },
            onTouchMove: function (t) {
              var e = this;
              t.cancelable && t.preventDefault(),
                this.scheduledAnimationFrame ||
                  ((this.scheduledAnimationFrame = !0),
                  Object(i.a)(function () {
                    e.scheduledAnimationFrame = !1;
                    var n = t.touches[0],
                      i = document.documentElement.scrollLeft || document.body.scrollLeft;
                    e.boxLeft = e.box.getBoundingClientRect().left;
                    var o = n.pageX - e.boxLeft - i;
                    e.setPosi(o);
                  }));
            },
            setVal: function (t) {
              var e = (t / this.box.clientWidth) * this.total;
              (this.current = Math.round(e / this.cell) * this.cell + this.range[0]),
                this.$emit('change', this.current),
                this.$emit('input', this.current);
            },
            valToPosi: function () {
              return (this.current - this.range[0]) * (this.box.clientWidth / this.total);
            },
            setPosi: function (t) {
              t < 0 || t > this.box.clientWidth || ((this.posi = t), this.setVal(t));
            },
            onTouchEnd: function (t) {
              t.cancelable && t.preventDefault(), (this.posi = this.valToPosi()), (this.ani = !1);
            },
            onClick: function (t) {
              t.cancelable && t.preventDefault();
              var e = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var n = t.pageX - this.boxLeft - e;
              this.setVal(n), (this.posi = this.valToPosi());
            },
            propInit: function () {
              'undefined' !== this.value && this.value >= this.range[0] && this.value <= this.range[1]
                ? (this.current = this.value)
                : (this.current = this.range[0]),
                !this.stage || this.stage > this.range[1] - this.range[0] ? (this.level = this.range[1] - this.range[0]) : (this.level = this.stage),
                (this.posi = this.valToPosi());
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              (t.box = t.$el.querySelector('.nut-slider-box')), (t.handle = t.box.querySelector('.nut-slider-Handle')), t.propInit();
            });
          },
        },
        r = n(0),
        s = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-slider' }, [
              t.showRangeTxt ? n('div', { staticClass: 'nut-slider-left-text' }, [t._v(t._s(t.range[0]))]) : t._e(),
              t._v(' '),
              n('div', { staticClass: 'nut-slider-box', on: { click: t.onClick } }, [
                n(
                  'div',
                  {
                    class: ['nut-slider-Handle', { 'nut-slider-ani': t.ani }],
                    style: { left: t.posi + 'px' },
                    on: {
                      touchstart: t.onTouchStart,
                      touchmove: t.onTouchMove,
                      touchend: t.onTouchEnd,
                      click: t.onTouchEnd,
                      touchcancel: t.onTouchEnd,
                    },
                  },
                  [
                    t.showLabel
                      ? n('span', { class: ['nut-slider-label', { 'nut-slider-label-always': t.showLabelAlways }] }, [t._v(t._s(t.current))])
                      : t._e(),
                  ]
                ),
              ]),
              t._v(' '),
              t.showRangeTxt ? n('div', { staticClass: 'nut-slider-right-text' }, [t._v(t._s(t.range[1]))]) : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(95);
      s.install = function (t) {
        t.component(s.name, s);
      };
      e.default = s;
    },
    54: function (t, e, n) {
      'use strict';
      e.a =
        'undefined' != typeof window
          ? window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 1e3 / 60);
            }
          : function (t) {
              setTimeout(t, 1e3 / 60);
            };
    },
    95: function (t, e, n) {},
  });
});
//# sourceMappingURL=slider.js.map
