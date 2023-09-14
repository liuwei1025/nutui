/*!
 * @nutui/nutui v2.3.16 - swiper.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('swiper', [], e)
    : 'object' == typeof exports
    ? (exports.swiper = e())
    : (t.swiper = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var s = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var s in t)
            i.d(
              n,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, 'a', e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = './'),
      i((i.s = 183))
    );
  })({
    0: function (t, e, i) {
      'use strict';
      function n(t, e, i, n, s, r, a, o) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = i), (u._compiled = !0)),
          n && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          a
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  s && s.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (u._ssrRegister = l))
            : s &&
              (l = o
                ? function () {
                    s.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : s),
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
      i.d(e, 'a', function () {
        return n;
      });
    },
    108: function (t, e, i) {},
    15: function (t, e, i) {
      var n = i(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return n(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === i && t.constructor && (i = t.constructor.name),
            'Map' === i || 'Set' === i ? Array.from(t) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    183: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = i(5),
        s = i.n(n),
        r = 'vertical',
        a = 'horizontal',
        o = {
          name: 'nut-swiper',
          props: {
            direction: {
              type: String,
              default: a,
              validator: function (t) {
                return [r, a].indexOf(t) > -1;
              },
            },
            paginationVisible: { type: Boolean, default: !1 },
            paginationClickable: { type: Boolean, default: !1 },
            loop: { type: Boolean, default: !1 },
            speed: { type: Number, default: 500 },
            canDragging: { type: Boolean, default: !0 },
            autoPlay: { type: Number, default: 0 },
            initPage: { type: Number, default: 1 },
            newCurrentPage: { type: Number, default: 1 },
            lazyLoad: { type: Boolean, default: !1 },
            lazyLoadUrl: { type: String, default: '' },
            swiperData: {
              type: [Array],
              default: function () {
                return [];
              },
            },
          },
          watch: {
            swiperData: function (t, e) {
              this.updateEvent();
            },
            newCurrentPage: function (t) {
              var e = t % this.slideEls.length;
              (t = 0 == e ? this.slideEls.length : e < 0 ? this.slideEls.length + e : e) >= this.currentPage
                ? this.next(t - this.currentPage)
                : this.prev(this.currentPage - t);
            },
          },
          data: function () {
            return {
              dragging: !1,
              currentPage: this.initPage || this.newCurrentPage,
              lastPage: 1,
              translateX: 0,
              translateY: 0,
              startTranslate: 0,
              slideEls: [],
              translateOffset: 0,
              transitionDuration: 0,
              startPos: null,
              delta: 0,
              startTime: null,
              isLoop: this.loop,
              timer: null,
              domTimer: null,
              stopAutoPlay: !1,
              swiperWrap: null,
              oneSlideTranslate: 0,
            };
          },
          methods: {
            next: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = this.currentPage;
              e + t < this.slideEls.length || this.isLoop ? this.setPage(e + t, !0, 'NEXT') : this._revert();
            },
            prev: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = this.currentPage;
              e - t > 1 || this.isLoop ? this.setPage(e - t, !0, 'PREV') : this._revert();
            },
            setPage: function (t, e, i) {
              0 === t
                ? (this.currentPage = this.slideEls.length)
                : t > this.slideEls.length
                ? (this.currentPage = t - this.slideEls.length)
                : (this.currentPage = t),
                this._setTranslate(this._getTranslateOfPage(t)),
                e ? this._onTransitionStart(i) : this._slideClassHandle();
            },
            isHorizontal: function () {
              return this.direction === a;
            },
            isVertical: function () {
              return this.direction === r;
            },
            renderLazyDom: function (t) {
              var e = this;
              return (
                t.forEach(function (t, i) {
                  t.getAttribute('data-src');
                  if ('nut-swiper-slide nut-swiper-slide-selected' != t.className) {
                    var n = document.createElement('div');
                    e.lazyLoadUrl
                      ? ((n.style.backgroundImage = "url('".concat(e.lazyLoadUrl, "')")), (n.className = 'nut-lazy img'))
                      : (n.className = 'nut-lazy preloader'),
                      t.appendChild(n);
                  }
                }),
                !0
              );
            },
            updateEvent: function (t) {
              var e = this;
              this.$nextTick(function () {
                e.domTimer = setTimeout(function () {
                  null != t && (e.currentPage = t),
                    (e.swiperWrap = e.$el.querySelector('.nut-swiper-wrap')),
                    (e.slideEls = s()(e.swiperWrap.children)),
                    0 !== e.slideEls.length &&
                      (e._getSlideDistance(e.slideEls[0]),
                      0 != e.autoPlay && ((e.isLoop = !0), e._createAutoPlay()),
                      e.isLoop && e._createLoop(),
                      e.setPage(e.currentPage, !1),
                      e.lazyLoad && e.renderLazyDom(e.slideEls) && e._imgLazyLoad());
                }, 0);
              });
            },
            _slideClassHandle: function () {
              var t = this.$el.querySelector('.nut-swiper-slide-selected');
              t && t.classList.remove('nut-swiper-slide-selected'),
                this.slideEls[this.currentPage - 1].classList.add('nut-swiper-slide-selected'),
                (this.lastPage = this.currentPage);
            },
            _getSlideDistance: function (t) {
              var e = getComputedStyle(t),
                i = e.marginTop.replace('px', '') - 0,
                n = e.marginBottom.replace('px', '') - 0,
                s = e.marginRight.replace('px', '') - 0,
                r = e.marginLeft.replace('px', '') - 0;
              this.isHorizontal() ? (this.oneSlideTranslate = s + r + t.offsetWidth) : (this.oneSlideTranslate = i + n + t.offsetHeight);
            },
            _onTouchStart: function (t) {
              this.swiperWrap.addEventListener('touchmove', this._onTouchMove, !1),
                this.swiperWrap.addEventListener('touchend', this._onTouchEnd, !1),
                this.swiperWrap.addEventListener('mousemove', this._onTouchMove, !1),
                this.swiperWrap.addEventListener('mouseup', this._onTouchEnd, !1),
                (this.startPos = this._getTouchPos(t)),
                (this.delta = 0),
                (this.startTranslate = this._getTranslateOfPage(this.currentPage)),
                this.isLoop && this._setTranslate(this.startTranslate),
                (this.startTime = new Date().getTime()),
                (this.dragging = !0),
                (this.transitionDuration = 0),
                (this.stopAutoPlay = !0);
            },
            _onTouchMove: function (t) {
              this.dragging &&
                (this.isHorizontal()
                  ? (this.delta = this._getTouchPos(t).x - this.startPos.x)
                  : (this.delta = this._getTouchPos(t).y - this.startPos.y),
                this.canDragging &&
                  this._computePreventDefault(t) &&
                  (t.preventDefault(),
                  this._setTranslate(this.startTranslate + this.delta),
                  this.$emit('slideMove', this._getTranslate(), this.$el),
                  this.$emit('slide-move', this._getTranslate(), this.$el)));
            },
            _onTouchEnd: function (t) {
              if (this.dragging) {
                (this.dragging = !1), (this.transitionDuration = this.speed);
                var e = new Date().getTime() - this.startTime < 1e3;
                this.delta < -this.oneSlideTranslate / 2 || (e && this.delta < -15)
                  ? this.next()
                  : this.delta > this.oneSlideTranslate / 2 || (e && this.delta > 15)
                  ? this.prev()
                  : this._revert(),
                  this.swiperWrap.removeEventListener('touchmove', this._onTouchMove, !1),
                  this.swiperWrap.removeEventListener('touchend', this._onTouchEnd, !1),
                  this.swiperWrap.removeEventListener('mousemove', this._onTouchMove, !1),
                  this.swiperWrap.removeEventListener('mouseup', this._onTouchEnd, !1);
              }
            },
            _revert: function () {
              this.setPage(this.currentPage, !0);
            },
            _computePreventDefault: function (t) {
              var e = this._getTouchPos(t),
                i = Math.abs(this.startPos.x - e.x),
                n = Math.abs(this.startPos.y - e.y);
              return !(i <= 5 && i >= 0) && !(n > 5 && n / i > 0.5);
            },
            _getTouchPos: function (t) {
              return { x: t.changedTouches ? t.changedTouches[0].pageX : t.pageX, y: t.changedTouches ? t.changedTouches[0].pageY : t.pageY };
            },
            _onTransitionStart: function (t) {
              (this.transitionDuration = this.speed),
                this.lazyLoad && this._imgLazyLoad(1),
                this._isPageChanged()
                  ? (this.$emit('slideChangeStart', this.currentPage, this.$el, t), this.$emit('slide-change-start', this.currentPage, this.$el, t))
                  : (this.$emit('slideRevertStart', this.currentPage, this.$el, t), this.$emit('slide-revert-start', this.currentPage, this.$el, t));
            },
            _onTransitionEnd: function () {
              this._isPageChanged()
                ? (this.$emit('slideChangeEnd', this.currentPage, this.$el), this.$emit('slide-change-end', this.currentPage, this.$el))
                : (this.$emit('slideRevertEnd', this.currentPage, this.$el), this.$emit('slide-revert-end', this.currentPage, this.$el)),
                (this.transitionDuration = 0),
                (this.delta = 0),
                (this.lastPage = this.currentPage),
                this._slideClassHandle(),
                this.isLoop && this._setTranslate(this._getTranslateOfPage(this.currentPage)),
                (this.stopAutoPlay = !1);
            },
            _isPageChanged: function () {
              return this.lastPage !== this.currentPage;
            },
            _setTranslate: function (t) {
              this[this.isHorizontal() ? 'translateX' : 'translateY'] = t;
            },
            _getTranslate: function () {
              return this[this.isHorizontal() ? 'translateX' : 'translateY'];
            },
            _getTranslateOfPage: function (t) {
              if (0 === t) return 0;
              this.isHorizontal();
              var e = this;
              return (
                -[].reduce.call(
                  this.slideEls,
                  function (i, n, s) {
                    return s > t - 2 ? i : i + e.oneSlideTranslate;
                  },
                  0
                ) + this.translateOffset
              );
            },
            _createLoop: function () {
              this.isHorizontal();
              var t = this.$el.querySelector('.nut-swiper-wrap'),
                e = t.firstElementChild.cloneNode(!0),
                i = t.lastElementChild.cloneNode(!0);
              t.insertBefore(i, t.firstElementChild), t.appendChild(e), (this.translateOffset = -this.oneSlideTranslate);
            },
            _createAutoPlay: function () {
              var t = this;
              clearInterval(this.timer),
                (this.timer = setInterval(function () {
                  t.stopAutoPlay || t.next();
                }, this.autoPlay));
            },
            _requestAniFrame: function () {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (t) {
                  window.setTimeout(t, 1e3 / 60);
                }
              );
            },
            _imgLazyLoad: function (t) {
              var e,
                i = this;
              this._requestAniFrame()(function () {
                (e = i.swiperWrap.querySelectorAll('.nut-img-lazyload')),
                  1 == t && (e = i.slideEls[i.currentPage - 1].querySelectorAll('.nut-img-lazyload')),
                  e.forEach(function (e, n) {
                    if (i._checkInView(e) || 1 == t) {
                      var s = e.getAttribute('data-src'),
                        r = new Image();
                      (r.src = s),
                        (r.onload = function () {
                          var t = e.parentElement.querySelector('.nut-lazy');
                          t && e.parentElement.removeChild(t), (e.src = s), e.classList.remove('nut-img-lazyload');
                        }),
                        (r.onerror = function () {
                          (e.src = i.lazyLoadUrl), e.classList.remove('nut-img-lazyload');
                        });
                    }
                  });
              });
            },
            _checkInView: function (t) {
              var e = t.getBoundingClientRect(),
                i = this.$el.getBoundingClientRect(),
                n = e.top,
                s = e.left,
                r = this.$el.clientWidth,
                a = this.$el.clientHeight,
                o = i.top,
                l = i.left,
                u = !0;
              return (n > o + a || s > l + r) && (u = !1), u;
            },
          },
          created: function () {},
          mounted: function () {
            (this._onTouchMove = this._onTouchMove.bind(this)), (this._onTouchEnd = this._onTouchEnd.bind(this)), this.updateEvent();
          },
          destroyed: function () {
            this.timer && clearInterval(this.timer), this.domTimer && clearTimeout(this.domTimer);
          },
          activated: function () {
            this.keepAlive && ((this.keepAlive = !1), this.updateEvent());
          },
          deactivated: function () {
            (this.keepAlive = !0), this.timer && clearInterval(this.timer), this.domTimer && clearTimeout(this.domTimer);
          },
        },
        l = i(0),
        u = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              'div',
              {
                staticClass: 'nut-swiper',
                class: [t.direction, { dragging: t.dragging }],
                on: {
                  touchstart: function (e) {
                    return t._onTouchStart(e);
                  },
                  mousedown: function (e) {
                    return t._onTouchStart(e);
                  },
                },
              },
              [
                i(
                  'div',
                  {
                    staticClass: 'nut-swiper-wrap',
                    style: {
                      transform: 'translate3d(' + t.translateX + 'px,' + t.translateY + 'px,0)',
                      'transition-duration': t.transitionDuration + 'ms',
                      '-webkit-transform': 'translate3d(' + t.translateX + 'px,' + t.translateY + 'px,0)',
                      '-webkit-transition-duration': t.transitionDuration + 'ms',
                      'transition-timing-function': 'ease',
                    },
                    on: { transitionend: t._onTransitionEnd },
                  },
                  [t._t('default')],
                  2
                ),
                t._v(' '),
                i(
                  'div',
                  {
                    directives: [{ name: 'show', rawName: 'v-show', value: t.paginationVisible, expression: 'paginationVisible' }],
                    staticClass: 'nut-swiper-pagination',
                  },
                  t._l(t.slideEls, function (e, n) {
                    return i('span', {
                      key: n,
                      staticClass: 'swiper-pagination-bullet',
                      class: { active: n + 1 === t.currentPage },
                      on: {
                        click: function (e) {
                          t.paginationClickable && t.setPage(n + 1, !0);
                        },
                      },
                    });
                  }),
                  0
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      i(108);
      u.install = function (t) {
        t.component(u.name, u);
      };
      e.default = u;
    },
    48: function (t, e, i) {
      var n = i(9);
      (t.exports = function (t) {
        if (Array.isArray(t)) return n(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    49: function (t, e) {
      (t.exports = function (t) {
        if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    5: function (t, e, i) {
      var n = i(48),
        s = i(49),
        r = i(15),
        a = i(50);
      (t.exports = function (t) {
        return n(t) || s(t) || r(t) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    50: function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    9: function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=swiper.js.map
