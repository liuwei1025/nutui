/*!
 * @nutui/nutui v2.3.15 - magic.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('magic', [], e)
    : 'object' == typeof exports
    ? (exports.magic = e())
    : (t.magic = e());
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
      n((n.s = 160))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, a, o, s) {
        var c,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          a && (l._scopeId = 'data-v-' + a),
          o
            ? ((c = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(o);
              }),
              (l._ssrRegister = c))
            : r &&
              (c = s
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          c)
        )
          if (l.functional) {
            l._injectStyles = c;
            var u = l.render;
            l.render = function (t, e) {
              return c.call(e), u(t, e);
            };
          } else {
            var p = l.beforeCreate;
            l.beforeCreate = p ? [].concat(p, c) : [c];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    15: function (t, e, n) {
      var i = n(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    156: function (t, e, n) {},
    160: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(5),
        r = n.n(i),
        a = {
          name: 'CubeItem',
          props: { item: { type: Object, default: null } },
          data: function () {
            return {};
          },
          methods: {
            cubeClick: function (t) {
              this.$emit('clickEvent', t);
            },
          },
        },
        o = n(0),
        s = Object(o.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: 'cube-item cube-item--' + t.item.type,
                on: {
                  click: function (e) {
                    return t.cubeClick(t.item);
                  },
                },
              },
              [
                n('div', { staticClass: 'cube-item-box' }, [
                  n('div', { staticClass: 'sub-image', style: { backgroundImage: 'url(' + t.item.pictureUrl + ')' } }),
                ]),
                t._v(' '),
                t.item.desc ? n('div', { staticClass: 'sub-desc' }, [n('span', [t._v(t._s(t.item.desc))])]) : t._e(),
                t._v(' '),
                t.item.name ? n('div', { staticClass: 'sub-name' }, [n('span', [t._v(t._s(t.item.name))])]) : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function c(t, e, n, i) {
        return -n * (t /= i) * (t - 2) + e;
      }
      function l(t, e) {
        var n = window.getComputedStyle(t, null),
          i =
            n.getPropertyValue('-webkit-' + e) ||
            n.getPropertyValue('-moz-' + e) ||
            n.getPropertyValue('-ms-' + e) ||
            n.getPropertyValue('-o-' + e) ||
            n.getPropertyValue(e);
        return i && 'none' != i ? i : null;
      }
      var u = {
          props: {
            dataMagic: { type: [Object, Array], default: null },
            type: { type: String, default: 'rank' },
            overflow: {
              type: [String, Number],
              default: 1.4,
              validator: function (t) {
                return t >= 1 && t < 1.5;
              },
            },
            autoplay: { type: Boolean, default: !1 },
            interval: { type: [String, Number], default: 3e3 },
          },
          components: { CubeItem: s },
          data: function () {
            return { clone: 4 };
          },
          computed: {
            data_top: function () {
              return this.dataMagic.filter(function (t, e) {
                return e % 2 == 0;
              });
            },
            data_bottom: function () {
              return this.dataMagic.filter(function (t, e) {
                return e % 2 == 1;
              });
            },
          },
          watch: {
            autoplay: function (t) {
              t ? this.startPlay() : this.clearPlayer();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              (t.canMove = !0),
                (t.$wrapper = t.$refs.wrapper),
                (t.$cubes = r()(t.$wrapper.children)),
                (t.ITEM_WIDTH = t.$wrapper.clientWidth / 4),
                (t.computeWidth = {
                  '-2': 2 * -t.ITEM_WIDTH,
                  '-1': -t.ITEM_WIDTH,
                  0: 0,
                  1: t.ITEM_WIDTH,
                  2: 2 * t.ITEM_WIDTH,
                  3: 3 * t.ITEM_WIDTH,
                  4: 4 * t.ITEM_WIDTH,
                  5: 5 * t.ITEM_WIDTH,
                }),
                (t.current = t.clone),
                (t.endX = -t.ITEM_WIDTH * t.current),
                (t.offsetX = t.endX),
                (t.$wrapper.style.transitionDuration = null),
                t.$cubes.forEach(function (t, e) {
                  t.style.transition && (t.style.transition = null);
                }),
                t.setWrapper(t.endX),
                t.setCube(t.endX),
                (t.$wrapper.style.webkitPerspectiveOrigin = ''.concat(t.current * t.ITEM_WIDTH + t.$wrapper.clientWidth / 2, 'px center')),
                setTimeout(function () {
                  t.startPlay(), t.$wrapper.classList.add('cube-wrapper--inited');
                }, 1e3),
                t.bindEvent();
            }),
              this.initWQVisibleEvent(),
              document.addEventListener('visibilitychange', function (e) {
                e.hidden ? t.clearPlayer() : t.startPlay();
              });
          },
          methods: {
            clickEvent: function (t) {
              this.$emit('clickItem', t);
            },
            bindEvent: function () {
              this.$wrapper.addEventListener('touchstart', this.touchStartHandler),
                this.$wrapper.addEventListener('touchmove', this.touchMoveHandler),
                this.$wrapper.addEventListener('touchend', this.touchEndHandler);
            },
            initWQVisibleEvent: function () {
              document.addEventListener(
                'qbrowserVisibilityChange',
                function (t) {
                  var e = document.createEvent('HTMLEvents');
                  e.initEvent('visibilitychange', !1, !1), (e.hidden = t.hidden), document.dispatchEvent(e);
                },
                !0
              ),
                document.addEventListener(
                  'visibilitychange',
                  function (t) {
                    t.hidden = void 0 === t.hidden ? document.hidden : t.hidden;
                  },
                  !0
                );
            },
            startPlay: function () {
              var t = this;
              this.autoplay &&
                (this.clearPlayer(),
                (this.player = setInterval(function () {
                  (t.canMove = !0), t.goto(t.current + 1, 600, !0);
                }, this.interval)));
            },
            clearPlayer: function () {
              clearInterval(this.player), (this.player = null);
            },
            touchStartHandler: function (t) {
              this.canMove &&
                (this.clearPlayer(),
                (this.touching = !0),
                this.$wrapper.style.transitionDuration,
                (this.startX = t.touches[0].pageX),
                (this.startY = t.touches[0].pageY),
                (this.$wrapper.style.transitionDuration = null),
                this.$cubes.forEach(function (t, e) {
                  t.style.transition && (t.style.transition = null);
                }));
            },
            touchMoveHandler: function (t) {
              if (this.canMove && this.touching) {
                var e = t.touches[0].pageX - this.startX,
                  n = t.touches[0].pageY - this.startY;
                if ((Math.abs(n) > 1.5 * Math.abs(e) || (t.cancelable && t.preventDefault()), (e /= 3) > 0)) this.direction = -1;
                else {
                  if (!(e < 0)) return;
                  this.direction = 1;
                }
                this.offsetX = e + this.endX;
                this.getMiddleRotate(e);
                this.setWrapper(this.offsetX), this.setCube(this.offsetX, this.offsetX > 0 ? e : -e);
              }
            },
            touchEndHandler: function (t) {
              if (this.canMove && this.touching) {
                var e,
                  n = (this.offsetX % this.ITEM_WIDTH) * this.direction;
                ((e = -(e =
                  0 == n
                    ? this.offsetX / this.ITEM_WIDTH
                    : (n > 0 && n < this.ITEM_WIDTH * (3 / 4)) || (n < 0 && n >= -this.ITEM_WIDTH * (1 / 4))
                    ? Math.ceil(this.offsetX / this.ITEM_WIDTH)
                    : Math.floor(this.offsetX / this.ITEM_WIDTH))) >=
                  this.data_bottom.length + this.clone ||
                  e <= this.clone - 1) &&
                  (this.canMove = !1),
                  this.goto(e, 400),
                  this.startPlay(),
                  (this.touching = !1);
              }
            },
            continueTransition: function () {
              var t = l(this.$wrapper, 'transform'),
                e = l(this.$wrapper, 'perspective-origin');
              t &&
                this.$wrapper.style.transitionDuration &&
                ((this.$wrapper.style.transform = t),
                (this.$wrapper.style.perspectiveOrigin = e),
                this.$cubes.forEach(function (t) {
                  (t.style.transform = l(t, 'transform')), (t.style.opacity = +l(t, 'opacity')), (t.style.transformOrigin = l(t, 'transform-origin'));
                }),
                (this.endX = 0));
            },
            setWrapper: function (t, e, n) {
              var i = this;
              (this.offsetX = t),
                e > 0 && (this.$wrapper.style.transitionDuration = ''.concat(e, 'ms')),
                n
                  ? setTimeout(function () {
                      i.$wrapper.style.transform = 'translate3d('.concat(t, 'px, 0, 0)');
                    }, 0)
                  : (this.$wrapper.style.transform = 'translate3d('.concat(t, 'px, 0, 0)'));
            },
            setCube: function (t) {
              var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              this.$cubes.forEach(function (i, r) {
                i.style.transition && (i.style.transition = null);
                var a = r * e.ITEM_WIDTH + t;
                if (a > e.computeWidth[-1] && a < e.computeWidth[0]) {
                  var o = c(a % e.ITEM_WIDTH, 0, -e.ITEM_WIDTH, -e.ITEM_WIDTH);
                  (i.style.transform = 'rotateY('.concat(e.getBetweenRotate(a), 'deg) translate3d(0, ').concat(e.getTranslate(a), 'px, 0)')),
                    (i.style.opacity = e.getOpacity(o));
                } else if (a > e.computeWidth[3] && a < e.computeWidth[4]) {
                  var s = c(a % e.ITEM_WIDTH, 0, e.ITEM_WIDTH, e.ITEM_WIDTH);
                  (i.style.transform = 'rotateY('.concat(e.getBetweenRotate(a), 'deg) translate3d(0, ').concat(e.getTranslate(a), 'px, 0)')),
                    (i.style.opacity = e.getOpacity(s));
                } else
                  a >= e.computeWidth[4] && a < e.computeWidth[5]
                    ? ((i.style.transform = 'rotateY(60deg) translate3d(0, '.concat(e.getTranslate(a), 'px, 0)')), (i.style.opacity = 0))
                    : a > e.computeWidth[-2] && a <= e.computeWidth[-1]
                    ? ((i.style.transform = 'rotateY(-60deg) translate3d(0, '.concat(e.getTranslate(a), 'px, 0)')), (i.style.opacity = 0))
                    : a >= e.computeWidth[0] &&
                      a <= e.computeWidth[3] &&
                      ((i.style.transform = 'rotateY('.concat(e.getMiddleRotate(n), 'deg) translate3d(0, ').concat(e.getTranslate(a), 'px, 0)')),
                      (i.style.opacity = 1));
                i.style.transformOrigin = e.getTransformOrigin(a);
              });
            },
            getTransformOrigin: function (t, e) {
              if (t >= this.computeWidth[-1] && t <= this.computeWidth[4]) {
                var n = this.ITEM_WIDTH - t / 3;
                return (
                  n < this.computeWidth[0] ? (n = this.computeWidth[0]) : n > this.computeWidth[1] && (n = this.computeWidth[1]),
                  ''.concat(n, 'px center')
                );
              }
            },
            getBetweenRotate: function (t) {
              return ((t % this.ITEM_WIDTH) * (360 / this.$wrapper.clientWidth) * 70) / 90;
            },
            getMiddleRotate: function (t) {
              var e = 0.35;
              return t > (5 * this.ITEM_WIDTH) / 10
                ? 0.35 * (this.ITEM_WIDTH - t)
                : t < (5 * -this.ITEM_WIDTH) / 10
                ? -0.35 * (this.ITEM_WIDTH + t)
                : e * t;
            },
            getOpacity: function (t) {
              return 1 - ((Math.abs(t) / this.ITEM_WIDTH) % 1);
            },
            getTranslate: function (t) {
              return t > this.computeWidth[2]
                ? t > this.computeWidth[3]
                  ? (this.computeWidth[3] - t) / 5
                  : (this.computeWidth[3] - t) / 7
                : t < this.computeWidth[1]
                ? t < 0
                  ? t / 5
                  : t / 7
                : this.ITEM_WIDTH / 7;
            },
            transitionEndHandler: function (t) {
              var e = this;
              t.target === this.$wrapper &&
                ((this.$wrapper.style.transitionDuration = null),
                this.$cubes.forEach(function (t, e) {
                  t.style.transition && (t.style.transition = null);
                }),
                (this.$wrapper.style.webkitPerspectiveOrigin = ''.concat(
                  this.current * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2,
                  'px center'
                )),
                this.current >= this.data_bottom.length + this.clone
                  ? (this.goto(this.current % this.data_bottom.length, 0),
                    setTimeout(function () {
                      e.canMove = !0;
                    }, 0))
                  : this.current <= this.clone - 1 &&
                    (this.goto(this.data_bottom.length + this.current, 0),
                    setTimeout(function () {
                      e.canMove = !0;
                    }, 0)));
            },
            goto: function (t) {
              var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = i ? t - 0.5 : t;
              (this.$wrapper.style.webkitPerspectiveOrigin = ''.concat(r * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2, 'px center')),
                (this.current = t),
                (this.endX = -t * this.ITEM_WIDTH),
                n
                  ? (this.setWrapper(this.endX, n),
                    this.$cubes.forEach(function (r, a) {
                      var o = a * e.ITEM_WIDTH + e.endX;
                      (r.style.transformOrigin = e.getTransformOrigin(o)),
                        t - 1 == a
                          ? ((r.style.transition = 'all '.concat(n, 'ms cubic-bezier(0.215, 0.610, 0.355, 1.000)')),
                            (r.style.transform = 'rotateY(-60deg) translate3d(0, '.concat(e.getTranslate(r.offsetLeft + e.endX), 'px, 0)')),
                            (r.style.opacity = 0))
                          : t + 4 == a
                          ? ((r.style.transition = 'all '.concat(n, 'ms cubic-bezier(0.215, 0.610, 0.355, 1.000)')),
                            (r.style.transform = 'rotateY(60deg) translate3d(0, '.concat(e.getTranslate(r.offsetLeft + e.endX), 'px, 0)')),
                            (r.style.opacity = 0))
                          : a > t - 1 && a < t + 4
                          ? ((r.style.transition = i
                              ? 'transform '
                                  .concat(n, 'ms cubic-bezier(0.22, 0.01, 0.68, 1.00), opacity ')
                                  .concat(0.9 * n, 'ms cubic-bezier(0.62, 0.02, 0.68, 1.00)')
                              : 'all '.concat(n, 'ms cubic-bezier(0.390, 0.575, 0.565, 1.000)')),
                            (r.style.transform = 'rotateY(0.1deg) translate3d(0, '.concat(e.getTranslate(r.offsetLeft + e.endX), 'px, 0)')),
                            (r.style.opacity = 1))
                          : ((r.style.transition = null), (r.style.transform = null), (r.style.opacity = null), (r.style.transformOrigin = null));
                    }))
                  : ((this.$wrapper.style.transitionDuration = null),
                    (this.$wrapper.style.transitionDuration = null),
                    this.$cubes.forEach(function (t, e) {
                      t.style.transition && (t.style.transition = null);
                    }),
                    this.setCube(this.endX, 0),
                    this.setWrapper(this.endX, 0, !0));
            },
          },
        },
        p = Object(o.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'cube' }, [
              n('div', { ref: 'container', staticClass: 'adjust-position cube-container' }, [
                n(
                  'div',
                  { ref: 'wrapper', staticClass: 'cube-wrapper', on: { transitionend: t.transitionEndHandler } },
                  [
                    t._l(t.clone, function (e) {
                      return n(
                        'div',
                        { key: 'clone-prev-' + e, staticClass: 'cube-col' },
                        [
                          n('CubeItem', {
                            staticClass: 'cube-item-wrap',
                            attrs: { item: t.data_top[e + t.data_bottom.length - t.clone - 1] },
                            on: { clickEvent: t.clickEvent },
                          }),
                          t._v(' '),
                          n('CubeItem', {
                            staticClass: 'cube-item-wrap',
                            attrs: { item: t.data_bottom[e + t.data_bottom.length - t.clone - 1] },
                            on: { clickEvent: t.clickEvent },
                          }),
                        ],
                        1
                      );
                    }),
                    t._v(' '),
                    t._l(t.data_bottom, function (e, i) {
                      return n(
                        'div',
                        { key: i, staticClass: 'cube-col cube-col--anime' },
                        [
                          n('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: t.data_top[i] }, on: { clickEvent: t.clickEvent } }),
                          t._v(' '),
                          n('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: t.data_bottom[i] }, on: { clickEvent: t.clickEvent } }),
                        ],
                        1
                      );
                    }),
                    t._v(' '),
                    t._l(t.data_bottom.slice(0, t.clone), function (e, i) {
                      return n(
                        'div',
                        { key: 'clone-next-' + i, staticClass: 'cube-col' },
                        [
                          n('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: t.data_top[i] }, on: { clickEvent: t.clickEvent } }),
                          t._v(' '),
                          n('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: t.data_bottom[i] }, on: { clickEvent: t.clickEvent } }),
                        ],
                        1
                      );
                    }),
                  ],
                  2
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        d = {
          name: 'nut-magic',
          components: { Cube: p },
          props: {
            data: {
              type: [Object, Array],
              default: function () {
                return [];
              },
            },
            type: { type: String, default: 'rank' },
            autoplay: { default: !0 },
          },
          computed: {},
          data: function () {
            return {};
          },
          watch: { data: function (t, e) {} },
          methods: {
            clickItem: function (t) {
              this.$emit('click', t);
            },
          },
        },
        h = Object(o.a)(
          d,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return this.data && this.data.length >= 8
              ? e('Cube', { attrs: { dataMagic: this.data, type: this.type, autoplay: this.autoplay }, on: { clickItem: this.clickItem } })
              : this._e();
          },
          [],
          !1,
          null,
          '601c4726',
          null
        ).exports;
      n(156);
      h.install = function (t) {
        t.component(h.name, h), t.component('Cube', p), t.component('CubeItem', s);
      };
      e.default = h;
    },
    48: function (t, e, n) {
      var i = n(9);
      (t.exports = function (t) {
        if (Array.isArray(t)) return i(t);
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
    5: function (t, e, n) {
      var i = n(48),
        r = n(49),
        a = n(15),
        o = n(50);
      (t.exports = function (t) {
        return i(t) || r(t) || a(t) || o();
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
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=magic.js.map
