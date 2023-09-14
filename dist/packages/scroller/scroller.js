/*!
 * @nutui/nutui v2.3.16 - scroller.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('scroller', [], e)
    : 'object' == typeof exports
    ? (exports.scroller = e())
    : (t.scroller = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function s(o) {
      if (e[o]) return e[o].exports;
      var i = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
    }
    return (
      (s.m = t),
      (s.c = e),
      (s.d = function (t, e, o) {
        s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (s.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (s.t = function (t, e) {
        if ((1 & e && (t = s(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if ((s.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            s.d(
              o,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return o;
      }),
      (s.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return s.d(e, 'a', e), e;
      }),
      (s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (s.p = './'),
      s((s.s = 159))
    );
  })({
    0: function (t, e, s) {
      'use strict';
      function o(t, e, s, o, i, r, n, a) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = s), (u._compiled = !0)),
          o && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          n
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(n);
              }),
              (u._ssrRegister = l))
            : i &&
              (l = a
                ? function () {
                    i.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          l)
        )
          if (u.functional) {
            u._injectStyles = l;
            var h = u.render;
            u.render = function (t, e) {
              return l.call(e), h(t, e);
            };
          } else {
            var c = u.beforeCreate;
            u.beforeCreate = c ? [].concat(c, l) : [l];
          }
        return { exports: t, options: u };
      }
      s.d(e, 'a', function () {
        return o;
      });
    },
    10: function (t, e, s) {
      var o = s(2).default,
        i = s(11);
      (t.exports = function (t) {
        var e = i(t, 'string');
        return 'symbol' === o(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    11: function (t, e, s) {
      var o = s(2).default;
      (t.exports = function (t, e) {
        if ('object' !== o(t) || null === t) return t;
        var s = t[Symbol.toPrimitive];
        if (void 0 !== s) {
          var i = s.call(t, e || 'default');
          if ('object' !== o(i)) return i;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    121: function (t, e, s) {},
    159: function (t, e, s) {
      'use strict';
      s.r(e);
      var o,
        i = s(4),
        r = s.n(i),
        n = {
          name: 'nut-vert-scroll',
          props: {
            stretch: { type: Number, default: 100 },
            isUnMore: { type: Boolean, default: !1 },
            isLoading: { type: Boolean, default: !1 },
            pulldownTxt: { type: String, default: '下拉刷新' },
            loadMoreTxt: { type: String, default: '上拉加载' },
            loadingTxt: { type: String, default: '加载中...' },
            unloadMoreTxt: { type: String, default: '没有更多了' },
            threshold: { type: Number, default: 100 },
            propsTime: { type: Number, default: 0 },
            scrollTo: { type: Number, default: 1 },
          },
          watch: {
            isLoading: function (t) {
              var e = this;
              t ||
                0 !== this.realMove ||
                (clearTimeout(this.timer),
                (this.timer = setTimeout(function () {
                  e.setTransform(e.realMove, 'end', null);
                }, this.propsTime)));
            },
            isUnMore: function () {
              this.isShow();
            },
            scrollTo: function (t) {
              'number' == typeof t && !isNaN(t) && t <= 0 && (this.setTransform(t, null, 500), this.$emit('scrollToCbk'));
            },
          },
          data: function () {
            return {
              touchParams: { startY: 0, endY: 0, startTime: 0, endTime: 0 },
              translateY: 0,
              scrollDistance: 0,
              timer: null,
              timerEmit: null,
              realMove: 0,
              isShowLoadMore: !1,
              listMinHeightStyle: 'auto',
              isFirstPull: !0,
            };
          },
          methods: {
            isShow: function () {
              var t = this.$refs.wrapper.offsetHeight;
              t < this.$refs.list.offsetHeight
                ? ((this.isShowLoadMore = !0), (this.listMinHeightStyle = 'auto'))
                : ((this.isShowLoadMore = !1), (this.isFirstPull = !0), (this.listMinHeightStyle = ''.concat(t, 'px')));
            },
            setTransform: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 ? arguments[1] : void 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
              (this.$refs.list.style.webkitTransition = 'end' === e ? 'transform '.concat(s, 'ms cubic-bezier(0.19, 1, 0.22, 1)') : ''),
                (this.$refs.list.style.webkitTransform = 'translate3d(0, '.concat(t, 'px, 0)')),
                (this.scrollDistance = t),
                this.$emit('scrollChange', t);
            },
            setMove: function (t, e, s) {
              var o = this,
                i = t + this.translateY,
                r = this.$refs.wrapper.offsetHeight,
                n = -this.$refs.list.offsetHeight + r;
              'end' === e
                ? (i > 0
                    ? ((this.realMove = 0),
                      (!this.isShowLoadMore || this.isFirstPull) && !this.isLoading && i > this.stretch
                        ? ((i = 50),
                          clearTimeout(this.timerEmit),
                          (this.timerEmit = setTimeout(function () {
                            o.$emit('pulldown');
                          }, s / 2)))
                        : ((this.isFirstPull = !0), (i = 0)))
                    : i < 0 &&
                      i < n + this.threshold &&
                      (i < n && (i = n), (this.realMove = n), this.isLoading || this.isUnMore || this.$emit('loadMore')),
                  this.setTransform(i, e, s))
                : (i > 0 && i > this.stretch ? (i = this.stretch) : i < n - this.stretch && (i = n - this.stretch), this.setTransform(i, null, null));
            },
            touchStart: function (t) {
              var e = t.changedTouches[0];
              (this.touchParams.startY = e.pageY), (this.touchParams.startTime = t.timestamp || Date.now()), (this.translateY = this.scrollDistance);
            },
            touchMove: function (t) {
              t.preventDefault();
              var e = t.changedTouches[0];
              (this.touchParams.lastY = e.pageY), (this.touchParams.lastTime = t.timestamp || Date.now());
              var s = this.touchParams.lastY - this.touchParams.startY;
              s < 0 && this.isShowLoadMore && this.isFirstPull && (this.isFirstPull = !1), this.setMove(s);
            },
            touchEnd: function (t) {
              var e = t.changedTouches[0];
              (this.touchParams.lastY = e.pageY), (this.touchParams.lastTime = t.timestamp || Date.now());
              var s = this.touchParams.lastY - this.touchParams.startY,
                o = this.touchParams.lastTime - this.touchParams.startTime,
                i = this.$refs.wrapper.offsetHeight,
                r = -this.$refs.list.offsetHeight + i;
              o <= 300 ? ((s *= 2) < 0 && s < r && (s = r), (o += 500), this.setMove(s, 'end', o)) : this.setMove(s, 'end');
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.isShow(),
                t.$el.addEventListener('touchstart', t.touchStart),
                t.$el.addEventListener('touchmove', t.touchMove),
                t.$el.addEventListener('touchend', t.touchEnd);
            });
          },
          beforeDestroy: function () {
            this.$el.removeEventListener('touchstart', this.touchStart),
              this.$el.removeEventListener('touchmove', this.touchMove),
              this.$el.removeEventListener('touchend', this.touchEnd),
              clearTimeout(this.timer),
              clearTimeout(this.timerEmit);
          },
        },
        a = s(0),
        l = Object(a.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s('div', { ref: 'wrapper', staticClass: 'nut-vert-scroll' }, [
              s(
                'div',
                { ref: 'list', staticClass: 'nut-vert-list', style: { 'min-height': t.listMinHeightStyle } },
                [
                  t.isFirstPull
                    ? s('div', { staticClass: 'nut-vert-pulldown' }, [
                        t.isLoading
                          ? s('div', { staticClass: 'nut-vert-pulldown-status' }, [
                              s('span', { staticClass: 'nut-vert-loading' }),
                              t._v(' '),
                              s('span', { staticClass: 'nut-vert-loading-txt' }, [t._v(t._s(t.loadingTxt))]),
                            ])
                          : s('div', { staticClass: 'nut-vert-pulldown-txt' }, [t._v(t._s(t.pulldownTxt))]),
                      ])
                    : t._e(),
                  t._v(' '),
                  t._t('list'),
                  t._v(' '),
                  s(
                    'div',
                    { staticClass: 'nut-vert-loadmore' },
                    [
                      !t.isUnMore && t.isShowLoadMore
                        ? [
                            t.isLoading
                              ? s('div', { staticClass: 'nut-vert-load-status' }, [
                                  s('span', { staticClass: 'nut-vert-loading' }),
                                  t._v(' '),
                                  s('span', { staticClass: 'nut-vert-loading-txt' }, [t._v(t._s(t.loadingTxt))]),
                                ])
                              : t._e(),
                          ]
                        : t.isUnMore
                        ? [s('div', { staticClass: 'nut-vert-unloadmore-txt' }, [t._v(t._s(t.unloadMoreTxt))])]
                        : t._e(),
                    ],
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
        ).exports,
        u = {
          name: 'nut-hor-scroll',
          props: { stretch: { type: Number, default: 40 }, scrollTo: { type: Number, default: 1 }, listWidth: { type: Number, default: 0 } },
          watch: {
            scrollTo: function (t) {
              'number' == typeof t && !isNaN(t) && t <= 0 && (this.setTransform(t, null, 500), this.$emit('scrollToCbk'));
            },
          },
          data: function () {
            return {
              touchParams: { startX: 0, endX: 0, startY: 0, endY: 0, startTime: 0, endTime: 0 },
              transformX: 0,
              scrollDistance: 0,
              timer: null,
              isShowLoadMore: !1,
              isFirstShow: !1,
            };
          },
          methods: {
            isShow: function () {
              var t = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                e = this.$refs.list.offsetWidth;
              this.isShowLoadMore = t <= e;
            },
            setTransform: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 ? arguments[1] : void 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'px';
              (this.scrollDistance = t),
                (t += o),
                (this.$refs.list.style.webkitTransition = 'end' === e ? 'transform '.concat(s, 'ms cubic-bezier(0.19, 1, 0.22, 1)') : ''),
                (this.$refs.list.style.webkitTransform = 'translate3d('.concat(t, ', 0, 0)'));
            },
            setMove: function (t, e, s) {
              var o = t + this.transformX,
                i = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                r = this.$refs.list.offsetWidth;
              if ('end' === e) o > 0 ? (o = 0) : o < -r + i && (o = -r + i <= 0 ? -r + i : 0), this.setTransform(o, e, s);
              else {
                var n = -r + i;
                o > 0 && o > this.stretch
                  ? (o = this.stretch)
                  : o < n - this.stretch && (o = n <= 0 ? n - this.stretch : o < -this.stretch ? -this.stretch : o),
                  this.setTransform(o, null, null);
              }
            },
            touchStart: function (t) {
              var e = t.changedTouches[0];
              (this.touchParams.startX = e.pageX),
                (this.touchParams.startY = e.pageY),
                (this.touchParams.startTime = t.timestamp || Date.now()),
                (this.transformX = this.scrollDistance);
            },
            touchEvent: function (t, e) {
              (this.touchParams.lastX = t.pageX), (this.touchParams.lastY = t.pageY);
              var s = this.touchParams.lastY - this.touchParams.startY,
                o = this.touchParams.lastX - this.touchParams.startX;
              if (!(Math.abs(o) > 20 && Math.abs(o) > Math.abs(s))) return !1;
              var i = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                r = -this.$refs.list.offsetWidth + i;
              e && e(o, r, s);
            },
            touchMove: function (t) {
              var e = this,
                s = t.changedTouches[0];
              this.touchParams.lastTime = t.timestamp || Date.now();
              this.touchParams.lastTime, this.touchParams.startTime;
              this.touchEvent(s, function (s, o, i) {
                t.preventDefault(), t.cancelable && t.preventDefault(), s > 0 && e.isFirstShow && (e.isFirstShow = !1), e.setMove(s);
              });
            },
            touchEnd: function (t) {
              var e = this;
              t.stopPropagation();
              var s = t.changedTouches[0];
              this.touchParams.lastTime = t.timestamp || Date.now();
              var o = this.touchParams.lastTime - this.touchParams.startTime;
              this.touchEvent(s, function (t, s) {
                Math.abs(t) > 100 && (t *= 1.5),
                  t < 0 && t + e.transformX < s - 20 && e.isFirstShow && e.$emit('jump'),
                  !e.isFirstShow && t < 0 && t + e.transformX < s && e.$slots.more && (e.isFirstShow = !0),
                  o <= 300 ? ((o += 500), e.setMove(t, 'end', o)) : e.setMove(t, 'end');
              });
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.isShow(),
                t.$el.addEventListener('touchstart', t.touchStart),
                t.$el.addEventListener('touchmove', t.touchMove),
                t.$el.addEventListener('touchend', t.touchEnd);
            });
          },
          beforeDestroy: function () {
            this.$el.removeEventListener('touchstart', this.touchStart),
              this.$el.removeEventListener('touchmove', this.touchMove),
              this.$el.removeEventListener('touchend', this.touchEnd),
              clearTimeout(this.timer);
          },
        },
        h = Object(a.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s('div', { ref: 'wrapper', staticClass: 'nut-hor-scroll' }, [
              s(
                'div',
                { ref: 'list', staticClass: 'nut-hor-list' },
                [
                  t._t('list'),
                  t._v(' '),
                  t.$slots.more && t.isShowLoadMore ? s('div', { staticClass: 'nut-hor-control' }, [t._t('more')], 2) : t._e(),
                  t._v(' '),
                  t.$slots.arrow ? t._t('arrow') : t._e(),
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
        ).exports,
        c = {
          name: 'nut-scroller',
          props: {
            type: { type: String, default: 'horizontal' },
            stretch: { type: Number, default: 100 },
            isUnMore: { type: Boolean, default: !1 },
            isLoading: { type: Boolean, default: !1 },
            threshold: { type: Number, default: 100 },
            pulldownTxt: { type: String, default: '下拉刷新' },
            loadMoreTxt: { type: String, default: '上拉加载' },
            loadingTxt: { type: String, default: '加载中...' },
            unloadMoreTxt: { type: String, default: '没有更多了' },
            propsTime: { type: Number, default: 0 },
            scrollTo: { type: Number, default: 1 },
          },
          data: function () {
            return {};
          },
          components: ((o = {}), r()(o, l.name, l), r()(o, h.name, h), o),
          methods: {
            loadMore: function () {
              this.$emit('loadMore');
            },
            jump: function () {
              this.$emit('jump');
            },
            pulldown: function () {
              this.$emit('pulldown');
            },
            scrollToCbk: function () {
              this.$emit('scrollToCbk');
            },
            scrollChange: function (t) {
              this.$emit('scrollChange', t);
            },
          },
        },
        d = Object(a.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s(
              'div',
              { staticClass: 'nut-scroller' },
              [
                'vertical' === t.type
                  ? [
                      s(
                        'nut-vert-scroll',
                        {
                          attrs: {
                            stretch: t.stretch,
                            'is-un-more': t.isUnMore,
                            'is-loading': t.isLoading,
                            threshold: t.threshold,
                            'pulldown-txt': t.pulldownTxt,
                            'load-more-txt': t.loadMoreTxt,
                            'loading-txt': t.loadingTxt,
                            'unload-more-txt': t.unloadMoreTxt,
                            'props-time': t.propsTime,
                            'scroll-to': t.scrollTo,
                          },
                          on: { loadMore: t.loadMore, pulldown: t.pulldown, scrollToCbk: t.scrollToCbk, scrollChange: t.scrollChange },
                        },
                        [t._t('list', null, { slot: 'list' })],
                        2
                      ),
                    ]
                  : 'horizontal' === t.type
                  ? [
                      s(
                        'nut-hor-scroll',
                        { attrs: { stretch: t.stretch, 'scroll-to': t.scrollTo }, on: { jump: t.jump, scrollToCbk: t.scrollToCbk } },
                        [
                          t._t('list', null, { slot: 'list' }),
                          t._v(' '),
                          t._t('more', null, { slot: 'more' }),
                          t._v(' '),
                          t._t('arrow', null, { slot: 'arrow' }),
                        ],
                        2
                      ),
                    ]
                  : t._e(),
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
      s(121);
      d.install = function (t) {
        t.component(d.name, d);
      };
      e.default = d;
    },
    2: function (t, e) {
      function s(e) {
        return (
          (t.exports = s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          s(e)
        );
      }
      (t.exports = s), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    4: function (t, e, s) {
      var o = s(10);
      (t.exports = function (t, e, s) {
        return (e = o(e)) in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = s), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=scroller.js.map
