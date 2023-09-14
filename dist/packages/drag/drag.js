/*!
 * @nutui/nutui v2.3.16 - drag.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('drag', [], e)
    : 'object' == typeof exports
    ? (exports.drag = e())
    : (t.drag = e());
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
      n((n.s = 207))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, o, s, r, u) {
        var h,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          s && (l._scopeId = 'data-v-' + s),
          r
            ? ((h = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(r);
              }),
              (l._ssrRegister = h))
            : o &&
              (h = u
                ? function () {
                    o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          h)
        )
          if (l.functional) {
            l._injectStyles = h;
            var a = l.render;
            l.render = function (t, e) {
              return h.call(e), a(t, e);
            };
          } else {
            var c = l.beforeCreate;
            l.beforeCreate = c ? [].concat(c, h) : [h];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    146: function (t, e, n) {},
    207: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(54),
        o = {
          name: 'nut-drag',
          props: {
            attract: { type: Boolean, default: !1 },
            direction: { type: String, default: 'all' },
            zIndex: { type: [Number, String], default: 11 },
            boundary: {
              type: Object,
              default: function () {
                return { top: 0, left: 0, right: 0, bottom: 0 };
              },
            },
          },
          data: function () {
            return { elWidth: 0, elHeight: 0, screenWidth: 0, screenHeight: 0, startTop: 0, startLeft: 0, position: { x: 0, y: 0 } };
          },
          methods: {
            getElementInfo: function () {
              var t = this.$el,
                e = document.documentElement;
              (this.elWidth = t.offsetWidth),
                (this.elHeight = t.offsetHeight),
                (this.screenWidth = e.clientWidth),
                (this.screenHeight = e.clientHeight),
                (t.style.zIndex = this.zIndex),
                this.boundary.left && !t.style.left
                  ? (t.style.left = this.boundary.left + 'px')
                  : this.boundary.right && !t.style.right && (t.style.right = this.boundary.right + 'px'),
                this.boundary.top && !t.style.top
                  ? (t.style.top = this.boundary.top + 'px')
                  : this.boundary.bottom && !t.style.bottom && (t.style.bottom = this.boundary.bottom + 'px');
            },
            touchStart: function (t) {
              var e = t.currentTarget;
              (this.startTop = e.offsetTop),
                (this.startLeft = e.offsetLeft),
                (this.position.x = t.touches[0].clientX),
                (this.position.y = t.touches[0].clientY),
                this.$el.addEventListener('touchmove', this.touchMove, !1),
                this.$el.addEventListener('touchend', this.touchEnd, !1);
            },
            touchMove: function (t) {
              t.preventDefault();
              var e = t.currentTarget;
              if (1 == t.targetTouches.length) {
                var n = t.targetTouches[0];
                (this.nx = n.clientX - this.position.x),
                  (this.ny = n.clientY - this.position.y),
                  (this.xPum = this.startLeft + this.nx),
                  (this.yPum = this.startTop + this.ny);
                var i = this.screenWidth - this.elWidth - this.boundary.right;
                Math.abs(this.xPum) > i ? (this.xPum = i) : this.xPum <= this.boundary.left && (this.xPum = this.boundary.left),
                  this.yPum < this.boundary.top
                    ? (this.yPum = this.boundary.top)
                    : this.yPum > this.screenHeight - this.elHeight - this.boundary.bottom &&
                      (this.yPum = this.screenHeight - this.elHeight - this.boundary.bottom),
                  'y' != this.direction && (e.style.left = this.xPum + 'px'),
                  'x' != this.direction && (e.style.top = this.yPum + 'px');
              }
            },
            touchEnd: function (t) {
              var e = t.currentTarget,
                n = t.changedTouches[0].clientX,
                i = this.screenWidth - this.elWidth - this.boundary.right;
              (n = n > i ? i : n < this.boundary.left || n < this.screenWidth / 2 ? this.boundary.left : i),
                'y' != this.direction && this.attract && (n < this.screenWidth / 2 ? this.goLeft(e) : this.goRight(e, i)),
                'x' != this.direction && (e.style.top = this.yPum + 'px');
            },
            goLeft: function (t) {
              var e = this;
              this.boundary.left
                ? t.style.left.split('px')[0] > this.boundary.left
                  ? ((t.style.left = t.style.left.split('px')[0] - 10 + 'px'),
                    Object(i.a)(function () {
                      e.goLeft(t);
                    }))
                  : (t.style.left = ''.concat(this.boundary.left, 'px'))
                : t.style.left.split('px')[0] > 10
                ? ((t.style.left = t.style.left.split('px')[0] - 10 + 'px'),
                  Object(i.a)(function () {
                    e.goLeft(t);
                  }))
                : (t.style.left = '0px');
            },
            goRight: function (t, e) {
              var n = this;
              e - parseInt(t.style.left.split('px')[0]) > 10
                ? ((t.style.left = parseInt(t.style.left.split('px')[0]) + 10 + 'px'),
                  Object(i.a)(function () {
                    n.goRight(t, e);
                  }))
                : (t.style.left = e + 'px');
            },
          },
          mounted: function () {
            this.getElementInfo();
          },
          activated: function () {
            this.keepAlive && (this.keepAlive = !1);
          },
          deactivated: function () {
            (this.keepAlive = !0),
              this.$el.removeEventListener('touchmove', this.handleScroll, !1),
              this.$el.removeEventListener('touchend', this.handleScroll, !1);
          },
          destroyed: function () {
            this.$el.removeEventListener('touchmove', this.handleScroll, !1), this.$el.removeEventListener('touchend', this.handleScroll, !1);
          },
        },
        s = n(0),
        r = Object(s.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              'div',
              {
                staticClass: 'nut-drag',
                on: {
                  touchstart: function (e) {
                    return t.touchStart(e);
                  },
                },
              },
              [t._t('default')],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(146);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
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
  });
});
//# sourceMappingURL=drag.js.map
