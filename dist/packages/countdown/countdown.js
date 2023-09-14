/*!
 * @nutui/nutui v2.3.15 - countdown.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('countdown', [], e)
    : 'object' == typeof exports
    ? (exports.countdown = e())
    : (t.countdown = e());
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
      n((n.s = 192))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, s, o, a) {
        var u,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          i && (c.functional = !0),
          s && (c._scopeId = 'data-v-' + s),
          o
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(o);
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
            var d = c.render;
            c.render = function (t, e) {
              return u.call(e), d(t, e);
            };
          } else {
            var l = c.beforeCreate;
            c.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: t, options: c };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    123: function (t, e, n) {},
    192: function (t, e, n) {
      'use strict';
      n.r(e);
      function i(t) {
        for (t += ''; t.length < 2; ) t = '0' + t;
        return t;
      }
      function r(t) {
        var e = t,
          n = { d: '-', h: '--', m: '--', s: '--' };
        if ((0 === e && (n = { d: '0', h: '00', m: '00', s: '00' }), e)) {
          var r = 864e5,
            s = 36e5,
            o = e >= r ? parseInt(e / r) : 0,
            a = e - o * r >= s ? parseInt((e - o * r) / s) : 0,
            u = e - o * r - a * s >= 6e4 ? parseInt((e - o * r - a * s) / 6e4) : 0,
            c = Math.round((e - o * r - a * s - 6e4 * u) / 1e3);
          o >= 0 && (n.d = o + ''), a >= 0 && (n.h = i(a)), u >= 0 && (n.m = i(u)), c >= 0 && (n.s = i(c));
        }
        return n;
      }
      var s = {
        name: 'nut-countdown',
        data: function () {
          return { restTime: 0, p: 0, _curr: 0 };
        },
        props: {
          value: {
            type: Object,
            default: function () {
              return {};
            },
          },
          paused: { default: !1, type: Boolean },
          showDays: { default: !1, type: Boolean },
          showPlainText: { default: !1, type: Boolean },
          startTime: {
            type: [Number, String],
            validator: function (t) {
              return 'invalid date' !== new Date(t).toString().toLowerCase();
            },
          },
          endTime: {
            type: [Number, String],
            validator: function (t) {
              return 'invalid date' !== new Date(t).toString().toLowerCase();
            },
          },
        },
        computed: {
          resttime: function () {
            var t = r(this.restTime),
              e = t.d;
            t.h, t.m, t.s;
            return !this.showDays && e > 0 && ((t.h = i(Number(t.h) + 24 * e)), (t.d = 0)), t;
          },
          plainText: function () {
            var t = this.resttime,
              e = t.d,
              n = t.h,
              i = t.m,
              r = t.s;
            return ''
              .concat(e > 0 && this.showDays ? e + '天' + n : n, '小时')
              .concat(i, '分')
              .concat(r, '秒');
          },
        },
        watch: {
          value: function (t, e) {},
          restTime: function (t, e) {
            var n = r(t);
            this.$emit('input', n);
          },
          paused: function (t, e) {
            e
              ? ((this.p += this.getTimeStamp() - this._curr), this.$emit('on-restart', this.restTime))
              : ((this._curr = this.getTimeStamp()), this.$emit('on-paused', this.restTime));
          },
          endTime: function () {
            this.initTimer();
          },
          startTime: function () {
            this.initTimer();
          },
        },
        methods: {
          getTimeStamp: function (t) {
            if (!t) return Date.now();
            var e = t;
            return (e = e > 0 ? +e : e.toString().replace(/\-/g, '/')), new Date(e).getTime();
          },
          initTimer: function () {
            var t = this,
              e = Date.now(),
              n = this.getTimeStamp(this.startTime || e),
              i = this.getTimeStamp(this.endTime || e),
              r = e - n;
            (this.restTime = i - (n + r)),
              (this.timer = setInterval(function () {
                if (!t.paused) {
                  var e = i - (Date.now() - t.p + r);
                  (t.restTime = e), e < 1e3 && ((t.restTime = 0), t.$emit('on-end'), clearInterval(t.timer));
                }
              }, 1e3));
          },
        },
        created: function () {
          this.initTimer();
        },
        destroyed: function () {
          this.timer && clearInterval(this.timer);
        },
      };
      s.restTime = r;
      var o = s,
        a = n(0),
        u = Object(a.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'span',
              { staticClass: 'nut-cd-timer' },
              [
                t.$slots.default
                  ? [t._t('default')]
                  : t.showPlainText
                  ? [n('span', { staticClass: 'nut-cd-block' }, [t._v(t._s(t.plainText))])]
                  : [
                      t.resttime.d >= 0 && t.showDays
                        ? [
                            n('span', { staticClass: 'nut-cd-block' }, [t._v(t._s(t.resttime.d))]),
                            t._v(' '),
                            n('span', { staticClass: 'nut-cd-dot' }, [t._v('天')]),
                          ]
                        : t._e(),
                      t._v(' '),
                      n('span', { staticClass: 'nut-cd-block' }, [t._v(t._s(t.resttime.h))]),
                      n('span', { staticClass: 'nut-cd-dot' }, [t._v(':')]),
                      n('span', { staticClass: 'nut-cd-block' }, [t._v(t._s(t.resttime.m))]),
                      n('span', { staticClass: 'nut-cd-dot' }, [t._v(':')]),
                      n('span', { staticClass: 'nut-cd-block' }, [t._v(t._s(t.resttime.s))]),
                    ],
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
      n(123);
      u.install = function (t) {
        t.component(u.name, u);
      };
      e.default = u;
    },
  });
});
//# sourceMappingURL=countdown.js.map
