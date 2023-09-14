/*!
 * @nutui/nutui v2.3.15 - range.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('range', [], e)
    : 'object' == typeof exports
    ? (exports.range = e())
    : (t.range = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
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
      n((n.s = 162))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, i, s, a) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          i && (u._scopeId = 'data-v-' + i),
          s
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (u._ssrRegister = l))
            : o &&
              (l = a
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          l)
        )
          if (u.functional) {
            u._injectStyles = l;
            var c = u.render;
            u.render = function (t, e) {
              return l.call(e), c(t, e);
            };
          } else {
            var f = u.beforeCreate;
            u.beforeCreate = f ? [].concat(f, l) : [l];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    10: function (t, e, n) {
      var r = n(2).default,
        o = n(11);
      (t.exports = function (t) {
        var e = o(t, 'string');
        return 'symbol' === r(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    11: function (t, e, n) {
      var r = n(2).default;
      (t.exports = function (t, e) {
        if ('object' !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(t, e || 'default');
          if ('object' !== r(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    15: function (t, e, n) {
      var r = n(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    162: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(55),
        o = n.n(r),
        i = n(4),
        s = n.n(i),
        a = n(54),
        l = {
          name: 'nut-range-bar',
          props: {
            direction: { type: String, default: 'left' },
            range: {
              type: Array,
              validator: function (t) {
                return 2 === t.length && t[1] > t[0];
              },
              default: function () {
                return [0, 10];
              },
            },
            values: {
              type: Array,
              validator: function (t) {
                return 2 === t.length && t[1] >= t[0];
              },
              default: function () {
                return [0, 0];
              },
            },
            initLeft: { type: Number, default: 0 },
            showLabelAlways: { type: Boolean, default: !1 },
            showLabel: { type: Boolean, default: !1 },
            current: { type: Number, default: 0 },
            stage: { type: Number, default: 0 },
            ani: Boolean,
            mainColor: String,
            subColor: String,
          },
          data: function () {
            return { box: null, posi: 0, scheduledAnimationFrame: !1 };
          },
          watch: {
            initLeft: function (t) {
              this.posi = this.initLeft;
            },
          },
          computed: {
            total: function () {
              return this.range[1] - this.range[0];
            },
          },
          methods: {
            onTouchStart: function (t) {
              t.cancelable && t.preventDefault(), this.$emit('update:ani', !0);
            },
            onTouchMove: function (t) {
              var e = this;
              t.cancelable && t.preventDefault(),
                this.scheduledAnimationFrame ||
                  ((this.scheduledAnimationFrame = !0),
                  Object(a.a)(function () {
                    e.scheduledAnimationFrame = !1;
                    var n = t.touches[0],
                      r = document.documentElement.scrollLeft || document.body.scrollLeft;
                    e.boxLeft = e.box.getBoundingClientRect().left;
                    var o = n.pageX - e.boxLeft - r;
                    e.setPosi(o, !1);
                  }));
            },
            setPosi: function (t, e) {
              t < 0 && (t = 0), t > this.box.clientWidth && (t = this.box.clientWidth);
              var n = o()(this.values, 2),
                r = n[0],
                i = n[1],
                s = o()(this.range, 2),
                a = s[0];
              s[1];
              if ('left' === this.direction) {
                var l = i - a - 1;
                t / this.box.clientWidth >= l / this.total ? (this.posi = l * (this.box.clientWidth / this.total)) : (this.posi = t);
              }
              if ('right' === this.direction) {
                var u = r - a + 1;
                t / this.box.clientWidth <= u / this.total ? (this.posi = u * (this.box.clientWidth / this.total)) : (this.posi = t);
              }
              this.$emit('getPos', this.posi, e);
            },
            onTouchEnd: function (t) {
              var e = this;
              t.preventDefault();
              var n = t.changedTouches[0],
                r = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var o = n.pageX - this.boxLeft - r;
              setTimeout(function () {
                e.setPosi(o, !0), e.$emit('update:ani', !1);
              }, 50);
            },
            onClick: function (t) {
              t.preventDefault();
              var e = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var n = t.pageX - this.boxLeft - e;
              (this.posi = n), this.$emit('getPos', n);
            },
          },
          mounted: function () {
            this.box = this.$el.parentNode;
          },
        },
        u = n(0),
        c = Object(u.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: ['nut-range-Handle', { 'nut-range-ani': t.ani }],
                style: { left: t.posi + 'px', borderColor: t.mainColor, boxShadow: t.ani ? '0 0 0 4px ' + t.subColor : '' },
                on: { touchstart: t.onTouchStart, touchmove: t.onTouchMove, touchend: t.onTouchEnd, click: t.onTouchEnd },
              },
              [
                t.showLabel
                  ? n('span', { class: ['nut-range-label', { 'nut-range-label-always': t.showLabelAlways }], style: { background: t.mainColor } }, [
                      n('span', { staticClass: 'nut-range-after', style: { color: t.mainColor } }, [t._v('▼')]),
                      t._v('\n    ' + t._s(t.current) + '\n  '),
                    ])
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function f(t, e) {
        var n = /(rgb)(\(\d+,\s*\d+,\s*\d+)(\))/;
        return n.test(t)
          ? t.replace(n, '$1' + (e ? 'a' : '') + '$2' + (e ? ',' + e : '') + '$3')
          : /^#[0-9a-f]+/.test(t) && (4 === t.length && (t = t.replace(/^#(\d)(\d)(\d)/, '#$1$1$2$2$3$3')), 7 === t.length)
          ? f('rgb(' + parseInt(t.slice(1, 3), 16) + ', ' + parseInt(t.slice(3, 5), 16) + ', ' + parseInt(t.slice(5, 7), 16) + ')', e)
          : f('#ff0000', e);
      }
      var h = {
          name: 'nut-range',
          components: s()({}, c.name, c),
          props: {
            rangeValues: {
              type: Array,
              validator: function (t) {
                return 2 === t.length && t[1] >= t[0];
              },
              default: function () {
                return [0, 0];
              },
            },
            color: String,
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
            stage: { type: Number, default: 1 },
          },
          data: function () {
            return {
              box: null,
              boxLeft: 0,
              initLeft1: 0,
              initLeft2: 0,
              currentLeft: 0,
              currentRight: 0,
              barleft1: 0,
              barleft2: 0,
              level: null,
              ani: !1,
              prevValues: [],
            };
          },
          watch: {
            range: function () {
              this.init();
            },
            rangeValues: function () {
              this.init();
            },
            ani: function (t) {
              t && (this.prevValues = this.rangeValues);
            },
          },
          computed: {
            total: function () {
              return this.range[1] - this.range[0];
            },
            cell: function () {
              return this.total / this.level;
            },
            mainColor: function () {
              return this.color ? f(this.color) : '';
            },
            boxColor: function () {
              return this.color ? f(this.color, 0.3) : '';
            },
            subColor: function () {
              return this.color ? f(this.color, 0.5) : '';
            },
          },
          methods: {
            init: function () {
              (this.box = this.$el.querySelector('.nut-range-box')), this.propInit();
            },
            updateRangeValues: function () {
              var t = [this.currentLeft, this.currentRight];
              this.$emit('update:rangeValues', t);
            },
            getPosLeft: function (t, e) {
              this.barleft1 = t;
              var n = this.setCurrent(t),
                r = o()(this.prevValues, 2),
                i = r[0];
              r[1];
              if (e)
                if (this.stage) {
                  var s = 0;
                  (s = n > i ? Math.ceil(n / this.stage) : Math.floor(n / this.stage)), (this.currentLeft = s * this.stage);
                } else this.currentLeft = n;
              else this.currentLeft = n;
              e && this.updateRangeValues();
            },
            getPosRight: function (t, e) {
              this.barleft2 = t;
              var n = this.setCurrent(t),
                r = o()(this.prevValues, 2),
                i = (r[0], r[1]);
              if (e)
                if (this.stage) {
                  var s = 0;
                  (s = n > i ? Math.ceil(n / this.stage) : Math.floor(n / this.stage)), (this.currentRight = s * this.stage);
                } else this.currentRight = n;
              else this.currentRight = n;
              e && this.updateRangeValues();
            },
            setCurrent: function (t) {
              var e = (((t / this.box.clientWidth) * this.total) / this.cell) * this.cell + this.range[0];
              return e > this.range[1] - 1 ? this.range[1] : e < this.range[0] + 1 ? this.range[0] : Math.round(e);
            },
            setVal: function (t) {
              var e = (t / this.box.clientWidth) * this.total;
              (this.current = Math.round(e / this.cell) * this.cell + this.range[0]), this.$emit('update:value', this.current);
            },
            valToPosi: function (t) {
              return (t - this.range[0]) * (this.box.clientWidth / this.total);
            },
            setPosi: function (t) {
              t < 0 || t > this.box.clientWidth || ((this.posi = t), this.setVal(t));
            },
            onClick: function (t) {
              t.preventDefault();
              var e = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var n = t.pageX - this.boxLeft - e;
              this.setVal(n), (this.posi = this.valToPosi());
            },
            propInit: function () {
              !this.stage || this.stage > this.range[1] - this.range[0] ? (this.level = this.range[1] - this.range[0]) : (this.level = this.stage),
                (this.currentLeft = Math.max(this.rangeValues[0], this.range[0])),
                (this.currentRight = Math.max(this.currentLeft, Math.min(this.rangeValues[1], this.range[1]))),
                (this.initLeft1 = this.valToPosi(this.currentLeft)),
                (this.initLeft2 = this.valToPosi(this.currentRight)),
                (this.barleft1 = this.initLeft1),
                (this.barleft2 = this.initLeft2);
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.init();
            });
          },
        },
        d = Object(u.a)(
          h,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-range' }, [
              t.showRangeTxt ? n('div', { staticClass: 'nut-range-left-text' }, [t._v(t._s(t.range[0]))]) : t._e(),
              t._v(' '),
              n(
                'div',
                { staticClass: 'nut-range-box', style: { background: t.boxColor }, on: { click: t.onClick } },
                [
                  n('div', {
                    staticClass: 'nut-range-area',
                    style: {
                      width: Math.abs(t.barleft2 - t.barleft1) + 'px',
                      left: Math.min(t.barleft2, t.barleft1) + 'px',
                      background: t.mainColor,
                    },
                  }),
                  t._v(' '),
                  n('nut-range-bar', {
                    attrs: {
                      direction: 'left',
                      stage: t.stage,
                      range: t.range,
                      values: t.rangeValues,
                      initLeft: t.initLeft1,
                      showLabelAlways: t.showLabelAlways,
                      showLabel: t.showLabel,
                      current: t.currentLeft,
                      ani: t.ani,
                      mainColor: t.mainColor,
                    },
                    on: {
                      getPos: t.getPosLeft,
                      'update:ani': function (e) {
                        t.ani = e;
                      },
                    },
                  }),
                  t._v(' '),
                  n('nut-range-bar', {
                    attrs: {
                      direction: 'right',
                      stage: t.stage,
                      range: t.range,
                      values: t.rangeValues,
                      initLeft: t.initLeft2,
                      showLabelAlways: t.showLabelAlways,
                      showLabel: t.showLabel,
                      current: t.currentRight,
                      ani: t.ani,
                      mainColor: t.mainColor,
                    },
                    on: {
                      getPos: t.getPosRight,
                      'update:ani': function (e) {
                        t.ani = e;
                      },
                    },
                  }),
                ],
                1
              ),
              t._v(' '),
              t.showRangeTxt ? n('div', { staticClass: 'nut-range-right-text' }, [t._v(t._s(t.range[1]))]) : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(96);
      d.install = function (t) {
        t.component(d.name, d);
      };
      e.default = d;
    },
    2: function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    4: function (t, e, n) {
      var r = n(10);
      (t.exports = function (t, e, n) {
        return (e = r(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
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
    55: function (t, e, n) {
      var r = n(69),
        o = n(70),
        i = n(15),
        s = n(71);
      (t.exports = function (t, e) {
        return r(t) || o(t, e) || i(t, e) || s();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    69: function (t, e) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    70: function (t, e) {
      (t.exports = function (t, e) {
        var n = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i,
            s,
            a = [],
            l = !0,
            u = !1;
          try {
            if (((i = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              l = !1;
            } else for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
          } catch (t) {
            (u = !0), (o = t);
          } finally {
            try {
              if (!l && null != n.return && ((s = n.return()), Object(s) !== s)) return;
            } finally {
              if (u) throw o;
            }
          }
          return a;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    71: function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    9: function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    96: function (t, e, n) {},
  });
});
//# sourceMappingURL=range.js.map
