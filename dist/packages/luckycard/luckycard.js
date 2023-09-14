/*!
 * @nutui/nutui v2.3.15 - luckycard.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('luckycard', [], e)
    : 'object' == typeof exports
    ? (exports.luckycard = e())
    : (t.luckycard = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var i = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            n.d(
              o,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return o;
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
      n((n.s = 170))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, i, r, c, s) {
        var a,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          o && (l.functional = !0),
          r && (l._scopeId = 'data-v-' + r),
          c
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(c);
              }),
              (l._ssrRegister = a))
            : i &&
              (a = s
                ? function () {
                    i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          a)
        )
          if (l.functional) {
            l._injectStyles = a;
            var u = l.render;
            l.render = function (t, e) {
              return a.call(e), u(t, e);
            };
          } else {
            var h = l.beforeCreate;
            l.beforeCreate = h ? [].concat(h, a) : [a];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    152: function (t, e, n) {
      'use strict';
      n(77);
    },
    153: function (t, e, n) {},
    170: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(2),
        i = n.n(o);
      function r(t, e) {
        (this.cover = null),
          (this.ctx = null),
          (this.scratchDiv = t.scratchDiv),
          (this.cardDiv = null),
          (this.cHeight = 0),
          (this.cWidth = 0),
          (this.supportTouch = !1),
          (this.events = []),
          (this.startEventHandler = null),
          (this.moveEventHandler = null),
          (this.endEventHandler = null),
          (this.opt = { coverColor: '#C5C5C5', coverImg: '', ratio: 0.8, callback: null }),
          this.init(t, e);
      }
      function c(t, e, n) {
        var o = t.getImageData(0, 0, this.cWidth, this.cHeight),
          i = [];
        s(o.data, function (t, e) {
          var n = o.data[e + 3];
          0 === n && i.push(n);
        }),
          i.length / o.data.length > n && e && 'function' == typeof e && e();
      }
      function s(t, e) {
        return Array.prototype.forEach.call(t, function (t, n) {
          e(t, n);
        });
      }
      function a() {
        var t = document.createElement('canvas');
        return !(!t.getContext || !t.getContext('2d'));
      }
      function l(t) {
        t.preventDefault(),
          (this.moveEventHandler = u.bind(this)),
          this.cover.addEventListener(this.events[1], this.moveEventHandler, !1),
          (this.endEventHandler = h.bind(this)),
          document.addEventListener(this.events[2], this.endEventHandler, !1);
      }
      function u(t) {
        t.preventDefault();
        var e = this.supportTouch ? t.touches[0] : t,
          n = this.cover.getBoundingClientRect(),
          o = document.documentElement.scrollTop || document.body.scrollTop,
          i = document.documentElement.scrollLeft || document.body.scrollLeft,
          r = e.pageX - n.left - i,
          c = e.pageY - n.top - o;
        this.ctx.beginPath(),
          (this.ctx.fillStyle = '#FFFFFF'),
          (this.ctx.globalCompositeOperation = 'destination-out'),
          this.ctx.arc(r, c, 10, 0, 2 * Math.PI),
          this.ctx.fill();
      }
      function h(t) {
        t.preventDefault(),
          this.opt.callback && 'function' == typeof this.opt.callback && c.call(this, this.ctx, this.opt.callback, this.opt.ratio),
          this.cover.removeEventListener(this.events[1], this.moveEventHandler, !1),
          document.removeEventListener(this.events[2], this.endEventHandler, !1);
      }
      (r.prototype.createCanvas = function () {
        if (
          ((this.cover = document.createElement('canvas')),
          (this.cover.className = 'nut-cover'),
          (this.cover.height = this.cHeight),
          (this.cover.width = this.cWidth),
          (this.ctx = this.cover.getContext('2d')),
          this.opt.coverImg)
        ) {
          var t = this,
            e = new Image();
          (e.src = this.opt.coverImg),
            (e.onload = function () {
              t.ctx.drawImage(e, 0, 0, t.cover.width, t.cover.height);
            });
        } else (this.ctx.fillStyle = this.opt.coverColor), this.ctx.fillRect(0, 0, this.cover.width, this.cover.height);
        this.scratchDiv.appendChild(this.cover), (this.cardDiv.style.opacity = 1);
      }),
        (r.prototype.eventDetect = function () {
          'ontouchstart' in window && (this.supportTouch = !0),
            (this.events = this.supportTouch ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup']),
            this.addEvent();
        }),
        (r.prototype.addEvent = function () {
          (this.startEventHandler = l.bind(this)), this.cover.addEventListener(this.events[0], this.startEventHandler, !1);
        }),
        (r.prototype.clearCover = function () {
          this.ctx.clearRect(0, 0, this.cover.width, this.cover.height),
            this.cover.removeEventListener(this.events[0], this.startEventHandler),
            this.cover.removeEventListener(this.events[1], this.moveEventHandler),
            this.cover.removeEventListener(this.events[2], this.endEventHandler);
        }),
        (r.prototype.init = function (t, e) {
          if (a()) {
            var n = this;
            s(arguments, function (t) {
              if ('object' === i()(t))
                for (var e in t) 'callback' === e && 'function' == typeof t[e] ? (n.opt.callback = t[e].bind(n)) : e in n.opt && (n.opt[e] = t[e]);
              else 'function' == typeof t && (n.opt.callback = t.bind(n));
            }),
              this.scratchDiv &&
                ((this.cardDiv = this.scratchDiv.querySelector('.nut-content')),
                this.cardDiv &&
                  ((this.cHeight = this.cardDiv.clientHeight),
                  (this.cWidth = this.cardDiv.clientWidth),
                  (this.cardDiv.style.opacity = 0),
                  this.createCanvas(),
                  this.eventDetect()));
          } else alert('对不起，当前浏览器不支持Canvas，无法使用本控件！');
        }),
        (r.case = function (t, e) {
          return new r(t, e);
        });
      var d = r.case,
        v = {
          name: 'nut-luckycard',
          props: {
            content: { type: String, default: '' },
            height: { type: [String, Number], default: 50 },
            width: { type: [String, Number], default: 300 },
            coverColor: { type: String, default: '#C5C5C5' },
            coverImg: { type: String, default: '' },
            fontSize: { type: [String, Number], default: 20 },
            backgroundColor: { type: String, default: '#FFFFFF' },
            ratio: { type: [String, Number], default: 0.5 },
          },
          data: function () {
            return { luckcard: null };
          },
          methods: {
            clearCover: function () {
              console.log(this.luckcard), this.luckcard.clearCover();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t;
              t.luckcard = d({
                scratchDiv: t.$el,
                coverColor: t.coverColor,
                coverImg: t.coverImg,
                ratio: Number(t.ratio),
                callback: function () {
                  this.clearCover(), e.$emit('open', this);
                },
              });
            });
          },
        },
        f = (n(152), n(0)),
        p = Object(f.a)(
          v,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { staticClass: 'nut-luckycard', style: { height: this.height + 'px', width: this.width + 'px' } }, [
              e('div', {
                staticClass: 'nut-content',
                style: { backgroundColor: this.backgroundColor, fontSize: this.fontSize + 'px' },
                domProps: { innerHTML: this._s(this.content) },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(153);
      p.install = function (t) {
        t.component(p.name, p);
      };
      e.default = p;
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
    77: function (t, e, n) {},
  });
});
//# sourceMappingURL=luckycard.js.map
