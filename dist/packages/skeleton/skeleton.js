/*!
 * @nutui/nutui v2.3.15 - skeleton.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('skeleton', [], e)
    : 'object' == typeof exports
    ? (exports.skeleton = e())
    : (t.skeleton = e());
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
      n((n.s = 158))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, i, l, a) {
        var s,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          i && (u._scopeId = 'data-v-' + i),
          l
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(l);
              }),
              (u._ssrRegister = s))
            : o &&
              (s = a
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          s)
        )
          if (u.functional) {
            u._injectStyles = s;
            var c = u.render;
            u.render = function (t, e) {
              return s.call(e), c(t, e);
            };
          } else {
            var f = u.beforeCreate;
            u.beforeCreate = f ? [].concat(f, s) : [s];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    120: function (t, e, n) {},
    158: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-skeleton',
          data: function () {
            return {};
          },
        },
        o = n(0),
        i = Object(o.a)(
          r,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { staticClass: 'vue-skeleton-loading' }, [
              e('div', { staticClass: 'skeleton-bac-animation' }),
              this._v(' '),
              e('div', { staticClass: 'skeleton-bac-content' }, [this._t('default')], 2),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        l = {
          name: 'skeletonCircle',
          data: function () {
            return {};
          },
          props: {
            backColor: { type: String, default: '#efefef' },
            diameter: { type: String, default: '50px' },
            margin: { type: String, default: '0 0 0 0' },
          },
        },
        a = Object(o.a)(
          l,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)('div', {
              ref: 'vueSkeletonCircle',
              staticClass: 'vue-skeleton-circle',
              style: { backgroundColor: this.backColor, width: this.diameter, height: this.diameter, 'border-radius': '50%', margin: this.margin },
            });
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        s = {
          name: 'skeletonSquare',
          data: function () {
            return {};
          },
          props: {
            backColor: { type: String, default: '#efefef' },
            width: { type: String, default: '100%' },
            height: { type: String, default: '12px' },
            margin: { type: String, default: '0 0 0 0' },
            count: { type: Number, default: 1 },
          },
        },
        u = Object(o.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'vue-skeleton-square-wrap' },
              t._l(t.count, function (e) {
                return n('div', {
                  key: e,
                  staticClass: 'vue-skeleton-square',
                  style: { backgroundColor: t.backColor, width: t.width, height: t.height, margin: t.margin },
                });
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        c = {
          name: 'row',
          data: function () {
            return {};
          },
          props: {
            width: { type: String, default: 'auto' },
            padding: { type: String, default: '0 0 0 0' },
            center: { type: String, default: 'flex-start' },
          },
        },
        f = Object(o.a)(
          c,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              'div',
              { staticClass: 'vue-skeleton-row', style: { width: this.width, padding: this.padding, 'justify-content': this.center } },
              [this._t('default')],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        d = {
          name: 'column',
          data: function () {
            return {};
          },
          props: {
            width: { type: String, width: 'auto' },
            padding: { type: String, default: '0 0 0 0' },
            center: { type: String, default: 'flex-start' },
          },
        },
        p = Object(o.a)(
          d,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              'div',
              { staticClass: 'vue-skeleton-column', style: { width: this.width, padding: this.padding, 'align-items': this.center } },
              [this._t('default')],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      (i.skeletonCircle = a), (i.skeletonSquare = u), (i.skeletonRow = f), (i.skeletonColumn = p);
      var h = i,
        m = (n(120), h.skeletonCircle),
        g = h.skeletonSquare,
        y = h.skeletonRow,
        v = h.skeletonColumn;
      (h.install = function (t) {
        t.component(h.name, h);
      }),
        (m.install = function (t) {
          t.component(m.name, m);
        }),
        (g.install = function (t) {
          t.component(g.name, g);
        }),
        (y.install = function (t) {
          t.component(y.name, y);
        }),
        (v.install = function (t) {
          t.component(v.name, v);
        });
      e.default = { skeleton: h, skeletonCircle: m, skeletonSquare: g, skeletonRow: y, skeletonColumn: v };
    },
  });
});
//# sourceMappingURL=skeleton.js.map
