/*!
 * @nutui/nutui v2.3.16 - countup.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('countup', [], e)
    : 'object' == typeof exports
    ? (exports.countup = e())
    : (t.countup = e());
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
      n((n.s = 209))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, u, o, l) {
        var a,
          s = 'function' == typeof t ? t.options : t;
        if (
          (e && ((s.render = e), (s.staticRenderFns = n), (s._compiled = !0)),
          i && (s.functional = !0),
          u && (s._scopeId = 'data-v-' + u),
          o
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(o);
              }),
              (s._ssrRegister = a))
            : r &&
              (a = l
                ? function () {
                    r.call(this, (s.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          a)
        )
          if (s.functional) {
            s._injectStyles = a;
            var m = s.render;
            s.render = function (t, e) {
              return a.call(e), m(t, e);
            };
          } else {
            var c = s.beforeCreate;
            s.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: t, options: s };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    149: function (t, e, n) {},
    209: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = {
          name: 'nut-countup',
          props: {
            initNum: { type: Number, default: 0 },
            endNum: { type: Number, default: 0 },
            speed: { type: Number, default: 1 },
            toFixed: { type: Number, default: 0 },
            during: { type: Number, default: 1e3 },
            startFlag: { type: Boolean, default: !0 },
            numWidth: { type: Number, default: 20 },
            numHeight: { type: Number, default: 20 },
            scrolling: { type: Boolean, default: !1 },
            customBgImg: { type: String, default: '' },
            customSpacNum: { type: Number, default: 0 },
            customChangeNum: { type: Number, default: 1 },
            type: { type: String, default: '' },
            machineNum: { type: Number, default: 3 },
            machinePrizeNum: { type: Number, default: 0 },
            machinePrizeLevel: { type: Number, default: 0 },
            machineTrunMore: { type: Number, default: 0 },
          },
          data: function () {
            return {
              valFlag: !1,
              current: 0,
              sortFlag: 'add',
              initDigit1: 0,
              initDigit2: 0,
              to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
              to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
              timer: null,
              totalCount: 0,
              pointNum: 0,
              numberVal: 0,
              num_total_len: 0,
              relNum: 0,
              customNumber: 1,
              prizeLevelTrun: 0,
              prizeY: [],
              prizeYPrev: [],
              finshMachine: 0,
              notPrize: [],
              typeMachine: '',
            };
          },
          computed: {},
          watch: {
            customChangeNum: function (t, e) {
              (this.customNumber = t), this.countGo();
            },
            machinePrizeLevel: function (t, e) {
              this.prizeLevelTrun = t;
            },
            initNum: function (t, e) {
              (this.current = t), (this.valFlag = !1), this.valChange();
            },
            endNum: function (t, e) {
              (this.current = this.initNum), (this.valFlag = !1), this.valChange();
            },
          },
          mounted: function () {
            (this.current = this.initNum), this.valChange();
          },
          beforeDestroy: function () {
            clearInterval(this.timer), (this.timer = null);
          },
          methods: {
            valChange: function () {
              var t = this;
              if (this.valFlag) return !1;
              this.startFlag &&
                (this.scrolling || this.customBgImg
                  ? 'machine' != this.type && this.countGo()
                  : (this.countChange(),
                    setTimeout(function () {
                      t.valFlag = !0;
                    }, 300)));
            },
            clearInterval: (function (t) {
              function e() {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return t.toString();
                }),
                e
              );
            })(function () {
              clearInterval(this.timer), (this.timer = null);
            }),
            calculation: function (t, e, n) {
              var i = (t.toString().split('.')[1] || '').length,
                r = (e.toString().split('.')[1] || '').length,
                u = Math.pow(10, Math.max(i, r));
              return '-' == n ? (t * u - e * u).toFixed(0) / u : (t * u + e * u).toFixed(0) / u;
            },
            countChange: function () {
              var t = this,
                e = this.endNum,
                n = this.initNum,
                i = this.speed,
                r = this.toFixed,
                u = setInterval(function () {
                  n > e
                    ? t.current <= e || t.current <= i
                      ? ((t.current = e.toFixed(r)), clearInterval(u), t.$emit('scroll-end'), (t.valFlag = !1))
                      : (t.current = (parseFloat(t.current) - parseFloat(i)).toFixed(r))
                    : t.current >= e
                    ? ((t.current = e.toFixed(r)), clearInterval(u), t.$emit('scroll-end'), (t.valFlag = !1))
                    : (t.current = (parseFloat(t.current) + parseFloat(i)).toFixed(r));
                }, this.during);
            },
            topNumber: function (t) {
              var e = this.num_total_len,
                n = this.pointNum,
                i = this.initDigit1,
                r = this.initDigit2,
                u = this.sortFlag,
                o = 'add' == u || 'equal' == u ? r[t - (e - n)] : 10 - r[t - (e - n)],
                l = 'add' == u || 'equal' == u ? i[t] : 10 - i[t],
                a = t > e - n - 1 ? 100 * -o + '%' : t <= i.length - 1 ? 100 * -l + '%' : 0;
              return '-1000%' == a && (a = 0), a;
            },
            turnNumber: function (t) {
              var e = this.num_total_len,
                n = this.pointNum,
                i = this.initDigit1,
                r = this.initDigit2,
                u = (this.sortFlag, r[t - (e - n)]);
              return t > e - n - 1 ? u || 0 : t <= i.length - 1 ? i[t] : 0;
            },
            countGo: function () {
              var t,
                e,
                n,
                i,
                r = this,
                u = this.initNum,
                o = this.endNum,
                l = this.toFixed,
                a = this.customBgImg;
              a && (u = this.customNumber),
                0 != u
                  ? (0 != l && (u = u.toFixed(l)),
                    String(u).indexOf('.') > -1
                      ? ((t = String(u).split('.')[0].length), (e = String(u).split('.')[1].length))
                      : ((t = String(u).length), (e = 0)))
                  : ((t = 1), (e = 0)),
                0 != o
                  ? (0 != l && (o = o.toFixed(l)),
                    String(o).indexOf('.') > -1
                      ? ((n = String(o).split('.')[0].length), (i = String(o).split('.')[1].length))
                      : ((n = String(o).length), (i = 0)))
                  : ((n = 1), (i = 0));
              var s = t >= n ? t : n,
                m = e >= i ? e : i;
              (this.num_total_len = s + m),
                (this.pointNum = m),
                u > o
                  ? ((this.sortFlag = 'reduce'),
                    (this.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
                    (this.totalCount = this.calculation(u, o, '-')),
                    (this.numberVal = String(u)))
                  : u < o
                  ? ((this.sortFlag = 'add'),
                    (this.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
                    (this.totalCount = this.calculation(o, u, '-')),
                    (this.numberVal = String(o)))
                  : (this.sortFlag = 'equal');
              for (var c = 1, h = 0; h < this.pointNum; h++) c *= 10;
              var p = this.numberVal * c;
              if (
                ((this.relNum = p),
                0 != l &&
                  ((this.pointNum = this.numberVal.split('.')[1] ? this.numberVal.split('.')[1].length : 0), (this.num_total_len = String(p).length)),
                String(u).indexOf('.') > -1)
              ) {
                var g = String(u).split('.');
                (this.initDigit1 = g[0]), (this.initDigit2 = g[1]);
              } else (this.initDigit1 = String(u)), (this.initDigit2 = '0');
              this.scrolling && !a
                ? this.$nextTick(function () {
                    if ('equal' == r.sortFlag) return !1;
                    var t = r.$refs.numberItem[r.num_total_len - 1];
                    r.runTurn(t);
                  })
                : this.imgNumberScroll();
            },
            runTurn: function (t) {
              var e = this,
                n = this;
              n.clearInterval();
              var i = 1;
              0 != this.pointNum && (i = 1 / Math.pow(10, this.pointNum)),
                (n.timer = setInterval(function () {
                  n.runStep(t),
                    (n.totalCount = n.calculation(n.totalCount, i, '-')),
                    n.totalCount <= 0 && (n.clearInterval(), e.$emit('scroll-end'), (e.valFlag = !1));
                }, n.during));
            },
            runStep: function (t) {
              var e = this,
                n = t.getAttribute('turn-number'),
                i = null;
              if (
                ((i = 'add' == e.sortFlag ? parseInt(n) + 1 : parseInt(n) - 1 >= 0 ? parseInt(n) - 1 : 9),
                t.setAttribute('turn-number', i),
                ('none 0s ease 0s' != t.style.transition && 1 != i && t.style.transition) ||
                  (t.style.transition = 'all linear '.concat(e.during, 'ms')),
                10 == i || ('reduce' == e.sortFlag && 0 == i))
              ) {
                var r = null;
                (t.style.top = '-'.concat('add' == e.sortFlag ? 100 * i : 100 * (10 - i), '%')),
                  t.setAttribute('turn-number', 0),
                  (r = setTimeout(function () {
                    r && clearTimeout(r),
                      (t.style.transition = 'none'),
                      (t.style.top = 0),
                      10 == i && t.previousSibling && e.runStep(t.previousSibling);
                  }, 0.975 * e.during));
              } else t.style.top = '-'.concat('add' == e.sortFlag ? 100 * i : 100 * (10 - i), '%');
              '-100%' == t.style.top && 'reduce' == e.sortFlag && e.runStep(t.previousSibling);
            },
            imgNumberScroll: function () {
              var t = this,
                e = this,
                n = 1;
              0 != e.pointNum && (n = Math.pow(10, e.pointNum)),
                this.$nextTick(function () {
                  var i = e.$el.querySelector('.run-number-img');
                  setTimeout(function () {
                    e.relNum = e.calculation(e.relNum, n * e.speed, '+');
                  }, e.during),
                    i.addEventListener('webkitTransitionEnd', function () {
                      t.$emit('scroll-end'),
                        (t.valFlag = !1),
                        setTimeout(function () {
                          e.relNum = e.calculation(e.relNum, n * e.speed, '+');
                        }, e.during);
                    });
                });
            },
            generateRandom: function () {
              for (this.notPrize = []; this.notPrize.length < 3; ) {
                var t = Math.floor(Math.random() * this.machinePrizeNum + 1);
                -1 == this.notPrize.indexOf(t) && this.notPrize.push(t);
              }
            },
            machineLuck: function () {
              var t = this;
              this.machineTrunMore = this.machineTrunMore < 0 ? 0 : this.machineTrunMore;
              var e = this.numHeight * this.machinePrizeNum;
              this.prizeLevelTrun < 0 && this.generateRandom();
              for (
                var n = function (n) {
                    setTimeout(function () {
                      var i = e * (n + 1 + parseFloat(t.machineTrunMore));
                      0 != t.prizeYPrev.length && t.$set(t.prizeY, n, t.prizeYPrev[n]);
                      var r = t.prizeYPrev[n] ? t.prizeYPrev[n] : 0,
                        u = i + r + (t.machinePrizeNum - t.prizeLevelTrun + 1) * t.numHeight + (e - r);
                      t.prizeLevelTrun < 0 && (u += t.numHeight * t.notPrize[n]), t.scrollTime(n, u, r);
                    }, 500 * n);
                  },
                  i = 0;
                i < this.machineNum;
                i++
              )
                n(i);
            },
            scrollTime: function (t, e, n) {
              var i = this,
                r = setInterval(function () {
                  if (n <= e) (n += 10), i.$set(i.prizeY, t, parseFloat(n));
                  else if ((clearInterval(r), (r = null), (i.finshMachine += 1), i.$set(i.prizeY, t, e), i.finshMachine == i.machineNum)) {
                    var u = i.numHeight * i.machinePrizeNum;
                    (i.prizeYPrev = []),
                      JSON.parse(JSON.stringify(i.prizeY)).forEach(function (t) {
                        for (var e = t; e > u; ) e -= u;
                        i.prizeYPrev.push(e);
                      }),
                      setTimeout(function () {
                        (i.finshMachine = 0),
                          i.prizeLevelTrun < 0 ? (i.$emit('scroll-end', !1), (i.valFlag = !1)) : (i.$emit('scroll-end', !0), (i.valFlag = !1));
                      }, 130);
                  }
                }, 30);
            },
          },
        },
        r = n(0),
        u = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'nut-countup' },
              [
                '' != t.customBgImg
                  ? [
                      'machine' == t.type
                        ? [
                            n(
                              'ul',
                              { staticClass: 'run-number-machine-img', style: { height: t.numHeight + 'px' } },
                              t._l(t.machineNum, function (e, i) {
                                return n('li', {
                                  key: 'mImg' + i,
                                  ref: 'run-number-machine-img-li',
                                  refInFor: !0,
                                  staticClass: 'run-number-machine-img-li',
                                  style: {
                                    width: t.numWidth + 'px',
                                    height: t.numHeight + 'px',
                                    backgroundImage: 'url(' + t.customBgImg + ')',
                                    backgroundPositionY: t.prizeY[i] + 'px',
                                  },
                                });
                              }),
                              0
                            ),
                          ]
                        : [
                            n(
                              'ul',
                              { staticClass: 'run-number-img', style: { height: t.numHeight + 'px' } },
                              [
                                t._l(t.num_total_len, function (e, i) {
                                  return n('li', {
                                    key: 'cImg' + i,
                                    staticClass: 'run-number-img-li',
                                    style: {
                                      width: t.numWidth + 'px',
                                      height: t.numHeight + 'px',
                                      left:
                                        t.numWidth *
                                          (i > t.num_total_len - t.pointNum - 1 ? (i == t.num_total_len - t.pointNum ? 1.5 * i : 1.3 * i) : i) +
                                        'px',
                                      backgroundImage: 'url(' + t.customBgImg + ')',
                                      backgroundPosition: '0 ' + -(String(t.relNum)[i] * t.numHeight + t.customSpacNum * String(t.relNum)[i]) + 'px',
                                      transition: 'all linear ' + t.during / 10 + 'ms',
                                    },
                                  });
                                }),
                                t._v(' '),
                                t.pointNum > 0
                                  ? n(
                                      'div',
                                      {
                                        staticClass: 'pointstyl',
                                        style: {
                                          width: t.numWidth / 2 + 'px',
                                          bottom: 0,
                                          left: t.numWidth * (t.num_total_len - t.pointNum) * 1.1 + 'px',
                                          fontSize: '30px',
                                        },
                                      },
                                      [t._v('.')]
                                    )
                                  : t._e(),
                              ],
                              2
                            ),
                          ],
                    ]
                  : [
                      t.scrolling
                        ? n(
                            'ul',
                            {
                              staticClass: 'run-number',
                              style: {
                                width: t.numWidth * t.num_total_len + t.numWidth / 3 + 'px',
                                height: t.numHeight + 'px',
                                lineHeight: t.numHeight + 'px',
                              },
                            },
                            [
                              t._l(t.num_total_len, function (e, i) {
                                return n(
                                  'li',
                                  {
                                    key: e,
                                    ref: 'numberItem',
                                    refInFor: !0,
                                    style: { top: t.topNumber(i), left: t.numWidth * (i > t.num_total_len - t.pointNum - 1 ? 1.1 * i : i) + 'px' },
                                    attrs: { 'turn-number': t.turnNumber(i) },
                                  },
                                  t._l(t.to0_10, function (e, i) {
                                    return n(
                                      'span',
                                      {
                                        key: 'dote' + i,
                                        style: { width: t.numWidth + 'px', height: t.numHeight + 'px', lineHeight: t.numHeight + 'px' },
                                      },
                                      [t._v('\n          ' + t._s(e) + '\n        ')]
                                    );
                                  }),
                                  0
                                );
                              }),
                              t._v(' '),
                              t.pointNum > 0
                                ? n(
                                    'div',
                                    {
                                      staticClass: 'pointstyl',
                                      style: {
                                        width: t.numWidth / 3 + 'px',
                                        height: t.numHeight + 'px',
                                        lineHeight: t.numHeight + 'px',
                                        top: 0,
                                        left: t.numWidth * (t.num_total_len - t.pointNum) + 'px',
                                      },
                                    },
                                    [t._v('.')]
                                  )
                                : t._e(),
                            ],
                            2
                          )
                        : [t._v('\n      ' + t._s(t.current) + '\n    ')],
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
      n(149);
      u.install = function (t) {
        t.component(u.name, u);
      };
      e.default = u;
    },
  });
});
//# sourceMappingURL=countup.js.map
