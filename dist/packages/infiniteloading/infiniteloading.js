/*!
 * @nutui/nutui v2.3.16 - infiniteloading.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('infiniteloading', [], e)
    : 'object' == typeof exports
    ? (exports.infiniteloading = e())
    : (t.infiniteloading = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function o(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (o.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            o.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, 'a', e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = './'),
      o((o.s = 193))
    );
  })({
    0: function (t, e, o) {
      'use strict';
      function n(t, e, o, n, i, r, s, l) {
        var a,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = o), (u._compiled = !0)),
          n && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          s
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (u._ssrRegister = a))
            : i &&
              (a = l
                ? function () {
                    i.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
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
      o.d(e, 'a', function () {
        return n;
      });
    },
    124: function (t, e, o) {},
    193: function (t, e, o) {
      'use strict';
      o.r(e);
      var n = {
          name: 'nut-infiniteloading',
          props: {
            hasMore: { type: Boolean, default: !0 },
            isLoading: { type: Boolean, default: !1 },
            threshold: { type: Number, default: 200 },
            useWindow: { type: Boolean, default: !0 },
            useCapture: { type: Boolean, default: !1 },
            isShowMod: { type: Boolean, default: !1 },
            isShowBottomTips: { type: Boolean, default: !0 },
            unloadMoreTxt: { type: String, default: '哎呀，这里是底部了啦' },
            loadingTxt: { type: String, default: '加载中...' },
            scrollChange: { type: Function },
            containerId: { type: String, default: '' },
          },
          data: function () {
            return { startX: 0, startY: 0, diffX: 0, diffY: 0, beforeScrollTop: 0, slotUnloadMore: !1, slotLoading: !1 };
          },
          mounted: function () {
            var t = this.getParentElement(this.$el),
              e = window;
            !1 === this.useWindow && (e = t),
              (this.scrollEl = e),
              this.scrollListener(),
              (this.slotUnloadMore = !!this.$slots.unloadMore),
              (this.slotLoading = !!this.$slots.loading);
          },
          methods: {
            touchStartHandle: function (t) {
              try {
                (this.startX = Number(t.changedTouches[0].pageX)), (this.startY = Number(t.changedTouches[0].pageY));
              } catch (t) {
                console.log(t.message);
              }
            },
            touchMoveHandle: function (t) {
              var e = Number(t.changedTouches[0].pageX),
                o = Number(t.changedTouches[0].pageY);
              (this.diffX = e - this.startX), (this.diffY = o - this.startY);
            },
            getParentElement: function (t) {
              return this.containerId ? document.querySelector('#'.concat(this.containerId)) : t && t.parentNode;
            },
            scrollListener: function () {
              this.scrollEl.addEventListener('scroll', this.handleScroll, this.useCapture),
                window.addEventListener('resize', this.handleScroll, this.useCapture);
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
            handleScroll: function () {
              var t = this;
              this.requestAniFrame()(function () {
                if (!t.isScrollAtBottom() || !t.hasMore || t.isLoading || !t.isShowMod) return !1;
                t.$emit('loadmore');
              });
            },
            calculateTopPosition: function (t) {
              return t ? t.offsetTop + this.calculateTopPosition(t.offsetParent) : 0;
            },
            getWindowScrollTop: function () {
              return void 0 !== window.pageYOffset
                ? window.pageYOffset
                : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            },
            isScrollAtBottom: function () {
              var t,
                e = 0,
                o = this.getWindowScrollTop();
              if (this.useWindow) t = this.calculateTopPosition(this.$refs.scroller) + this.$refs.scroller.offsetHeight - o - window.innerHeight;
              else {
                var n = this.scrollEl,
                  i = n.scrollHeight,
                  r = n.clientHeight,
                  s = n.scrollTop;
                (t = i - r - s), (e = s);
              }
              this.$emit('scrollChange', this.useWindow ? o : e);
              this.beforeScrollTop;
              return (this.beforeScrollTop = o), t <= this.threshold && o >= this.beforeScrollTop;
            },
          },
          activated: function () {
            this.keepAlive && ((this.keepAlive = !1), this.scrollListener());
          },
          deactivated: function () {
            (this.keepAlive = !0),
              this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture),
              window.removeEventListener('resize', this.handleScroll, this.useCapture);
          },
          destroyed: function () {
            this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture),
              window.removeEventListener('resize', this.handleScroll, this.useCapture);
          },
        },
        i = o(0),
        r = Object(i.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              'div',
              {
                ref: 'scroller',
                staticClass: 'nut-infiniteloading',
                on: {
                  touchstart: function (e) {
                    return t.touchStartHandle(e);
                  },
                  touchmove: function (e) {
                    return t.touchMoveHandle(e);
                  },
                },
              },
              [
                t._t('default'),
                t._v(' '),
                o('div', { staticClass: 'load-more' }, [
                  t.isShowBottomTips
                    ? o(
                        'div',
                        { staticClass: 'bottom-tips' },
                        [
                          t.isLoading
                            ? [
                                t.slotLoading
                                  ? t._t('loading')
                                  : [o('i', { staticClass: 'loading-hint' }), o('span', { staticClass: 'loading-txt' }, [t._v(t._s(t.loadingTxt))])],
                              ]
                            : t.hasMore
                            ? t._e()
                            : [t.slotUnloadMore ? t._t('unloadMore') : o('span', { staticClass: 'tips-txt' }, [t._v(t._s(t.unloadMoreTxt))])],
                        ],
                        2
                      )
                    : t._e(),
                ]),
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
      o(124);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
    },
  });
});
//# sourceMappingURL=infiniteloading.js.map
