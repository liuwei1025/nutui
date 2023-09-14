/*!
 * @nutui/nutui v2.3.15 - leftslip.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('leftslip', [], e)
    : 'object' == typeof exports
    ? (exports.leftslip = e())
    : (t.leftslip = e());
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
      n((n.s = 198))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, s, o, l) {
        var a,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          i && (u.functional = !0),
          s && (u._scopeId = 'data-v-' + s),
          o
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(o);
              }),
              (u._ssrRegister = a))
            : r &&
              (a = l
                ? function () {
                    r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          a)
        )
          if (u.functional) {
            u._injectStyles = a;
            var f = u.render;
            u.render = function (t, e) {
              return a.call(e), f(t, e);
            };
          } else {
            var c = u.beforeCreate;
            u.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    132: function (t, e, n) {},
    198: function (t, e, n) {
      'use strict';
      n.r(e);
      function i(t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return r(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              s = function () {};
            return {
              s: s,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: s,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          l = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (a = !0), (o = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (a) throw o;
            }
          },
        };
      }
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var s = {
          name: 'nut-leftslip',
          props: {
            isClickBack: { type: Boolean, default: !0 },
            rightWidth: { type: [Number, String], default: '0.8' },
            disabled: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              startX: 0,
              startY: 0,
              moveX: 0,
              moveY: 0,
              buttonWidth: 0,
              pageWidth: null,
              startPos: 0,
              startLeft: 0,
              startRightW: 0,
              isOpen: !1,
              scrollTop: 0,
              oldScrollTop: 0,
              lock: !1,
            };
          },
          watch: {},
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              var e,
                n = i(t.$slots.slipbtns);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  t.buttonWidth = t.buttonWidth + r.elm.offsetWidth;
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
            }),
              (this.pageWidth = document.documentElement.clientWidth),
              (this.sliderEle = this.$refs.slipItem);
          },
          beforeDestroy: function () {
            window.removeEventListener('scroll', this.handleScroll());
          },
          methods: {
            handleRestet: function () {
              document.getElementsByClassName('leftslip-open') && this.restSlide();
            },
            handleScroll: function () {
              var t = this;
              window.addEventListener('scroll', function () {
                t.scrollTop = window.scrollY;
              });
            },
            touchStart: function (t) {
              if (this.disabled) return !1;
              var e = t.currentTarget.parentElement;
              if (document.getElementsByClassName('leftslip-open')) {
                if (1 == e.dataset.type) return;
                this.restSlide();
              }
              1 == t.touches.length && ((this.startX = t.touches[0].pageX), (this.startY = t.touches[0].pageY));
              var n = this.sliderEle.style.transform;
              (this.startLeft = Number(n ? n.split('(')[1].split('px')[0] : 0)),
                (this.startRightW = this.startLeft < 0 ? Number(this.$refs.right.style.width.split('px')[0]) : 0);
            },
            touchMove: function (t) {
              if (this.disabled) return !1;
              t.currentTarget.parentElement;
              var e = t.touches[0].pageX - this.startX,
                n = t.touches[0].pageY - this.startY;
              if (1 == t.touches.length && Math.abs(n) < 5) {
                if (e > 0 || (e > 0 && this.startLeft >= 0)) return !1;
                this.doSlide(-this.buttonWidth, !0);
              }
            },
            touchEnd: function (t) {
              if (this.disabled) return !1;
              var e,
                n = t.currentTarget.parentElement,
                i = t.changedTouches[0].pageX - this.startX;
              if (!this.isClickBack && 0 === i) return !1;
              -i > 50
                ? ((e = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth),
                  (n.className = 'nut-leftslip-item leftslip-open'),
                  (n.dataset.type = 1))
                : ((e = 0), (n.className = 'nut-leftslip-item'), (n.dataset.type = 0)),
                this.doSlide(-e, !0);
            },
            openSlide: function () {
              this.isOpen = !0;
              var t = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth;
              this.doSlide(-t, !0);
            },
            doSlide: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              (this.sliderEle.style.transform = 'translateX('.concat(t, 'px)')),
                (this.$refs.right.style.width = -t + 'px'),
                (this.sliderEle.style.transition = e ? 'transform .5s' : 'initial'),
                (this.$refs.right.style.transition = e ? 'width .5s' : 'initial');
            },
            restSlide: function () {
              for (var t = document.querySelectorAll('.nut-leftslip-item.leftslip-open'), e = 0; e < t.length; e++)
                (t[e].style = 'transform:translateX(0px)'), (t[e].dataset.type = 0), (t[e].className = 'nut-leftslip-item'), (this.isOpen = !1);
            },
          },
        },
        o = n(0),
        l = Object(o.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-leftslip' }, [
              n('div', { ref: 'slipItem', staticClass: 'nut-leftslip-item', class: { 'leftslip-open': t.isOpen } }, [
                n(
                  'div',
                  {
                    staticClass: 'nut-leftslip-item-main',
                    on: {
                      touchstart: function (e) {
                        return t.touchStart(e);
                      },
                      touchmove: function (e) {
                        return t.touchMove(e);
                      },
                      touchend: function (e) {
                        return t.touchEnd(e);
                      },
                    },
                  },
                  [t._t('slip-main')],
                  2
                ),
                t._v(' '),
                n('div', { ref: 'right', staticClass: 'nut-leftslip-item-btn' }, [t._t('slipbtns')], 2),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(132);
      l.install = function (t) {
        t.component(l.name, l);
      };
      e.default = l;
    },
  });
});
//# sourceMappingURL=leftslip.js.map
