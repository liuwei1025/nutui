/*!
 * @nutui/nutui v2.3.16 - price.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('price', [], t)
    : 'object' == typeof exports
    ? (exports.price = t())
    : (e.price = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = './'),
      n((n.s = 180))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, i, o, s, a) {
        var c,
          u = 'function' == typeof e ? e.options : e;
        if (
          (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          o && (u._scopeId = 'data-v-' + o),
          s
            ? ((c = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(s);
              }),
              (u._ssrRegister = c))
            : i &&
              (c = a
                ? function () {
                    i.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          c)
        )
          if (u.functional) {
            u._injectStyles = c;
            var p = u.render;
            u.render = function (e, t) {
              return c.call(t), p(e, t);
            };
          } else {
            var f = u.beforeCreate;
            u.beforeCreate = f ? [].concat(f, c) : [c];
          }
        return { exports: e, options: u };
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    180: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = {
          name: 'nut-price',
          props: {
            price: { type: [Number, String], default: 0 },
            needSymbol: { type: Boolean, default: !0 },
            decimalDigits: { type: [Number, String], default: 2 },
            thousands: { type: Boolean, default: !1 },
          },
          computed: {
            priceShow: function () {
              return (this.needSymbol ? '<span class="price-symbol">￥</span>' : '') + this.formatToHump(this.price);
            },
          },
          data: function () {
            return {};
          },
          methods: {
            checkPoint: function (e) {
              return String(e).indexOf('.') > 0;
            },
            formatToHump: function (e) {
              if (((e = String(e).replace('￥', '')), this.checkPoint(e))) {
                var t = Number(e).toFixed(this.decimalDigits);
                return (
                  (t = String(t).split('.')),
                  '<span class="price-big">' +
                    this.formatThousands(t[0]) +
                    '</span><span class="price-point">.</span><span class="price-small">' +
                    this.formatDecimal(t[1]) +
                    '</span>'
                );
              }
              return (
                '<span class="price-big">' +
                this.formatThousands(e) +
                '</span><span class="price-point">.</span><span class="price-small">' +
                this.formatDecimal(0) +
                '</span>'
              );
            },
            formatDecimal: function (e) {
              var t = this.decimalDigits,
                n = (('0.' + String(e)) / 1).toFixed(t);
              return String(n).substring(2, n.length);
            },
            formatThousands: function (e) {
              return this.thousands ? (e || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : e;
            },
          },
        },
        i = n(0),
        o = Object(i.a)(
          r,
          function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t('div', { staticClass: 'nut-price', domProps: { innerHTML: this._s(this.priceShow) } }, [t('span')]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(99);
      o.install = function (e) {
        e.component(o.name, o);
      };
      t.default = o;
    },
    99: function (e, t, n) {},
  });
});
//# sourceMappingURL=price.js.map
