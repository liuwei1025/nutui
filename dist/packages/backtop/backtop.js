/*!
 * @nutui/nutui v2.3.16 - backtop.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('backtop', [], e)
    : 'object' == typeof exports
    ? (exports.backtop = e())
    : (t.backtop = e());
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
      n((n.s = 191))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, o, r, s, l) {
        var c,
          a = 'function' == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
          i && (a.functional = !0),
          r && (a._scopeId = 'data-v-' + r),
          s
            ? ((c = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (a._ssrRegister = c))
            : o &&
              (c = l
                ? function () {
                    o.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          c)
        )
          if (a.functional) {
            a._injectStyles = c;
            var u = a.render;
            a.render = function (t, e) {
              return c.call(e), u(t, e);
            };
          } else {
            var d = a.beforeCreate;
            a.beforeCreate = d ? [].concat(d, c) : [c];
          }
        return { exports: t, options: a };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    122: function (t, e, n) {},
    191: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = {
          name: 'nut-backtop',
          props: {
            distance: { type: Number, default: 200 },
            bottom: { type: Number, default: 20 },
            right: { type: Number, default: 10 },
            duration: { type: Number, default: 1e3 },
            isAnimation: { type: Boolean, default: !0 },
            elId: { type: String, default: '' },
            zIndex: { type: Number, default: 1111 },
          },
          data: function () {
            return { backTop: !1, scrollEl: window };
          },
          mounted: function () {
            this.init();
          },
          activated: function () {
            this.keepAlive && ((this.keepAlive = !1), this.init());
          },
          deactivated: function () {
            (this.keepAlive = !0), this.removeEventListener();
          },
          destroyed: function () {
            this.removeEventListener();
          },
          computed: {
            styles: function () {
              return { bottom: ''.concat(this.bottom, 'px'), right: ''.concat(this.right, 'px'), 'z-index': this.zIndex };
            },
          },
          methods: {
            addEventListener: function () {
              this.scrollEl.addEventListener('scroll', this.scrollListener, !1), this.scrollEl.addEventListener('resize', this.scrollListener, !1);
            },
            removeEventListener: function () {
              this.scrollEl.removeEventListener('scroll', this.scrollListener, !1),
                this.scrollEl.removeEventListener('resize', this.scrollListener, !1);
            },
            requestAniFrame: function () {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (t) {
                  window.setTimeout(t, 1e3 / 60);
                }
              );
            },
            initCancelAniFrame: function () {
              for (var t = ['webkit', 'moz'], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
                window.cancelAnimationFrame = window[t[e] + 'CancelAnimationFrame'] || window[t[e] + 'CancelRequestAnimationFrame'];
            },
            init: function () {
              this.elId && document.getElementById(this.elId) && (this.scrollEl = document.getElementById(this.elId)),
                this.addEventListener(),
                this.initCancelAniFrame();
            },
            scrollListener: function () {
              (this.scrollTop = void 0 !== this.scrollEl.pageYOffset ? this.scrollEl.pageYOffset : this.scrollEl.scrollTop),
                (this.backTop = this.scrollTop >= this.distance);
            },
            click: function () {
              (this.startTime = +new Date()), this.isAnimation && this.duration > 0 ? this.scrollAnimation() : this.scroll(), this.$emit('click');
            },
            scrollAnimation: function () {
              var t = this,
                e = t.requestAniFrame()(function n() {
                  var i = t.duration - Math.max(0, t.startTime - +new Date() + t.duration),
                    o = (i * -t.scrollTop) / t.duration + t.scrollTop;
                  t.scroll(o), (e = t.requestAniFrame()(n)), (i != t.duration && 0 != o) || window.cancelAnimationFrame(e);
                });
            },
            scroll: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              this.scrollEl === window ? window.scrollTo(0, t) : (this.scrollEl.scrollTop = t);
            },
          },
        },
        o = n(0),
        r = Object(o.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: ['nut-backtop', { show: t.backTop }],
                style: t.styles,
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.click(e);
                  },
                },
              },
              [t._t('default', [n('div', { staticClass: 'nut-backtop-main' })])],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(122);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
    },
  });
});
//# sourceMappingURL=backtop.js.map
