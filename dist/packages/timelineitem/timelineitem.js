/*!
 * @nutui/nutui v2.3.16 - timelineitem.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('timelineitem', [], e)
    : 'object' == typeof exports
    ? (exports.timelineitem = e())
    : (t.timelineitem = e());
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
      n((n.s = 204))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, o, r, s, l) {
        var u,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          i && (c.functional = !0),
          r && (c._scopeId = 'data-v-' + r),
          s
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (c._ssrRegister = u))
            : o &&
              (u = l
                ? function () {
                    o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          u)
        )
          if (c.functional) {
            c._injectStyles = u;
            var a = c.render;
            c.render = function (t, e) {
              return u.call(e), a(t, e);
            };
          } else {
            var f = c.beforeCreate;
            c.beforeCreate = f ? [].concat(f, u) : [u];
          }
        return { exports: t, options: c };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    139: function (t, e, n) {},
    204: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = {
          name: 'nut-timelineitem',
          props: { pointType: { type: String, default: 'circle' }, pointColor: { type: String, default: '#fa2e05' } },
          data: function () {
            return { isCustomPoint: !1 };
          },
          computed: {
            pointClass: function () {
              return this.pointType + '-icon';
            },
            pointStyle: function () {
              return { borderColor: this.pointColor, background: 'circle' == this.pointType ? this.pointColor : 'transparent' };
            },
            isShowTitle: function () {
              return !!this.$slots.title;
            },
          },
          mounted: function () {
            this.isCustomPoint = !!this.$slots.dot;
          },
          methods: {},
        },
        o = n(0),
        r = Object(o.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nut-timelineitem left-border' }, [
              n('div', { staticClass: 'timelineitem-list-box' }, [
                n('div', { class: ['timelineitem-list'] }, [
                  n('div', { staticClass: 'timelineitem-left' }, [
                    n('div', { staticClass: 'timelineitem-point' }, [
                      t.isCustomPoint
                        ? n('div', { staticClass: 'custom-icon' }, [t._t('dot')], 2)
                        : n('div', { class: [t.pointClass, 'point-icon'], style: t.pointStyle }),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'timelineitem-line' }),
                  ]),
                  t._v(' '),
                  n('div', { staticClass: 'timelineitem-right' }, [
                    t.isShowTitle ? n('div', { staticClass: 'timelineitem-title' }, [n('div', { staticClass: 'time' }, [t._t('title')], 2)]) : t._e(),
                    t._v(' '),
                    n('div', { staticClass: 'timelineitem-content' }, [t._t('default')], 2),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(139);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
    },
  });
});
//# sourceMappingURL=timelineitem.js.map
