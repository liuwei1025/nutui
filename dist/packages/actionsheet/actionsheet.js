/*!
 * @nutui/nutui v2.3.16 - actionsheet.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('actionsheet', [], e)
    : 'object' == typeof exports
    ? (exports.actionsheet = e())
    : (t.actionsheet = e());
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
      n((n.s = 85))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, i, s, c, a) {
        var l,
          r = 'function' == typeof t ? t.options : t;
        if (
          (e && ((r.render = e), (r.staticRenderFns = n), (r._compiled = !0)),
          o && (r.functional = !0),
          s && (r._scopeId = 'data-v-' + s),
          c
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(c);
              }),
              (r._ssrRegister = l))
            : i &&
              (l = a
                ? function () {
                    i.call(this, (r.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          l)
        )
          if (r.functional) {
            r._injectStyles = l;
            var u = r.render;
            r.render = function (t, e) {
              return l.call(e), u(t, e);
            };
          } else {
            var d = r.beforeCreate;
            r.beforeCreate = d ? [].concat(d, l) : [l];
          }
        return { exports: t, options: r };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    51: function (t, e, n) {
      'use strict';
      var o = {
          name: 'nut-actionsheet',
          props: {
            isAnimation: { type: Boolean, default: !0 },
            isLockBgScroll: { type: Boolean, default: !1 },
            isVisible: { type: Boolean, default: !1 },
            isShowMask: { type: Boolean, default: !0 },
            isClickChooseClose: { type: Boolean, default: !0 },
            isClickCloseMask: { type: Boolean, default: !0 },
            cancelTxt: { type: String, default: '' },
            optionTag: { type: String, default: 'name' },
            chooseTagValue: { type: String, default: '' },
            menuItems: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {};
          },
          watch: {
            isVisible: function (t) {
              t && this.$emit('open'), this.isLockBgScroll && (t ? document.body.classList.add('nut-overflow-hidden') : this.removeLockScroll());
            },
          },
          deactivated: function () {
            this.removeLockScroll();
          },
          destroyed: function () {
            this.removeLockScroll();
          },
          methods: {
            removeLockScroll: function () {
              document.body.classList.remove('nut-overflow-hidden');
            },
            isHighlight: function (t) {
              return (this.chooseTagValue && this.chooseTagValue == t[this.optionTag]) || 0 === this.chooseTagValue;
            },
            closeActionSheet: function () {
              this.$emit('close');
            },
            cancelActionSheet: function () {
              this.closeActionSheet(), this.$emit('cancel');
            },
            clickActionSheetMask: function () {
              this.isClickCloseMask && this.closeActionSheet();
            },
            chooseItem: function (t, e) {
              t.disable || (this.isClickChooseClose && this.closeActionSheet(), this.$emit('choose', t, e));
            },
          },
        },
        i = n(0),
        s = Object(i.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'nut-actionsheet' },
              [
                t.isShowMask
                  ? n('transition', { attrs: { name: t.isAnimation ? 'nutFade' : '' } }, [
                      n('div', {
                        directives: [{ name: 'show', rawName: 'v-show', value: t.isVisible, expression: 'isVisible' }],
                        staticClass: 'nut-actionsheet-mask',
                        on: { click: t.clickActionSheetMask },
                      }),
                    ])
                  : t._e(),
                t._v(' '),
                n('transition', { attrs: { name: t.isAnimation ? 'nutSlideUp' : '' } }, [
                  n(
                    'div',
                    {
                      directives: [{ name: 'show', rawName: 'v-show', value: t.isVisible, expression: 'isVisible' }],
                      staticClass: 'nut-actionsheet-panel',
                    },
                    [
                      n('div', { staticClass: 'nut-actionsheet-custom' }, [t._t('custom')], 2),
                      t._v(' '),
                      t.$slots.title || t.$slots.subTitle
                        ? n('dl', { staticClass: 'nut-actionsheet-modal' }, [
                            n('dt', { staticClass: 'nut-actionsheet-title' }, [t._t('title')], 2),
                            t._v(' '),
                            n('dd', { staticClass: 'nut-actionsheet-sub-title' }, [t._t('sub-title')], 2),
                          ])
                        : t._e(),
                      t._v(' '),
                      n(
                        'ul',
                        { staticClass: 'nut-actionsheet-menu' },
                        t._l(t.menuItems, function (e, o) {
                          return n(
                            'li',
                            {
                              key: o,
                              staticClass: 'nut-actionsheet-item',
                              class: { 'nut-actionsheet-item-active': t.isHighlight(e), 'nut-actionsheet-item-disabled': e.disable },
                              on: {
                                click: function (n) {
                                  return t.chooseItem(e, o);
                                },
                              },
                            },
                            [t._v(t._s(e[t.optionTag]))]
                          );
                        }),
                        0
                      ),
                      t._v(' '),
                      t.cancelTxt
                        ? n('div', { staticClass: 'nut-actionsheet-cancel', on: { click: t.cancelActionSheet } }, [t._v(t._s(t.cancelTxt))])
                        : t._e(),
                    ]
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = s.exports;
    },
    64: function (t, e, n) {},
    85: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(51);
      n(64);
      (o.a.install = function (t) {
        t.component(o.a.name, o.a);
      }),
        (e.default = o.a);
    },
  });
});
//# sourceMappingURL=actionsheet.js.map
