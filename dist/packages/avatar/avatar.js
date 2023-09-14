/*!
 * @nutui/nutui v2.3.15 - avatar.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('avatar', [], e)
    : 'object' == typeof exports
    ? (exports.avatar = e())
    : (t.avatar = e());
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
      n((n.s = 195))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, a, c, i) {
        var s,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          a && (u._scopeId = 'data-v-' + a),
          c
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(c);
              }),
              (u._ssrRegister = s))
            : o &&
              (s = i
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          s)
        )
          if (u.functional) {
            u._injectStyles = s;
            var l = u.render;
            u.render = function (t, e) {
              return s.call(e), l(t, e);
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
    128: function (t, e, n) {},
    195: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-avatar',
          props: {
            size: { type: String, default: 'normal' },
            shape: { type: String, default: 'round' },
            bgColor: { type: String, default: '#eee' },
            bgIcon: {
              type: String,
              default:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg==',
            },
            bgImage: { type: String, default: '' },
          },
          computed: {
            styles: function () {
              return { backgroundImage: this.bgImage ? 'url('.concat(this.bgImage, ')') : null, backgroundColor: ''.concat(this.bgColor) };
            },
            iconStyles: function () {
              return this.bgIcon ? { backgroundImage: 'url('.concat(this.bgIcon, ')') } : null;
            },
            isShowText: function () {
              return this.$slots.default;
            },
          },
          data: function () {
            return {};
          },
          methods: {
            activeAvatar: function () {
              this.$emit('active-avatar', event);
            },
          },
        },
        o = n(0),
        a = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { class: ['nut-avatar', 'avatar-' + t.size, 'avatar-' + t.shape], style: t.styles, on: { click: t.activeAvatar } }, [
              n('i', { staticClass: 'icon', style: t.iconStyles }),
              t._v(' '),
              t.isShowText ? n('span', { staticClass: 'text' }, [t._t('default')], 2) : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(128);
      a.install = function (t) {
        t.component(a.name, a);
      };
      e.default = a;
    },
  });
});
//# sourceMappingURL=avatar.js.map
