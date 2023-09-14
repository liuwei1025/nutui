/*!
 * @nutui/nutui v2.3.16 - tab.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('tab', [], e)
    : 'object' == typeof exports
    ? (exports.tab = e())
    : (t.tab = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            i.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, 'a', e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = './'),
      i((i.s = 86))
    );
  })({
    0: function (t, e, i) {
      'use strict';
      function n(t, e, i, n, o, a, s, r) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = i), (u._compiled = !0)),
          n && (u.functional = !0),
          a && (u._scopeId = 'data-v-' + a),
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
              (l = r
                ? function () {
                    o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          l)
        )
          if (u.functional) {
            u._injectStyles = l;
            var d = u.render;
            u.render = function (t, e) {
              return l.call(e), d(t, e);
            };
          } else {
            var c = u.beforeCreate;
            u.beforeCreate = c ? [].concat(c, l) : [l];
          }
        return { exports: t, options: u };
      }
      i.d(e, 'a', function () {
        return n;
      });
    },
    15: function (t, e, i) {
      var n = i(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return n(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === i && t.constructor && (i = t.constructor.name),
            'Map' === i || 'Set' === i ? Array.from(t) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    48: function (t, e, i) {
      var n = i(9);
      (t.exports = function (t) {
        if (Array.isArray(t)) return n(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    49: function (t, e) {
      (t.exports = function (t) {
        if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    5: function (t, e, i) {
      var n = i(48),
        o = i(49),
        a = i(15),
        s = i(50);
      (t.exports = function (t) {
        return n(t) || o(t) || a(t) || s();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    50: function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    58: function (t, e, i) {
      'use strict';
      var n = i(5),
        o = i.n(n),
        a = {
          name: 'nut-tab',
          props: {
            isScroll: { type: Boolean, default: !1 },
            isShowLine: { type: Boolean, default: !0 },
            defIndex: { type: Number, default: 0 },
            positionNav: { type: String, default: 'top' },
            initData: {
              type: Array,
              default: function () {
                return [];
              },
            },
            wrapperHeight: { type: [String, Number], default: '200' },
            lineWidth: { type: Number, default: 0 },
          },
          data: function () {
            return { tabTitleList: [], activeIndex: this.defIndex, initX: '0', navWidth: 0, tapWidth: 0, smoothFlag: !0 };
          },
          watch: {
            $route: {
              handler: function (t, e) {
                (this.smoothFlag = !1), this.scrollTab(this.activeIndex);
              },
              deep: !0,
            },
            isScroll: function () {
              this.updeteTab();
            },
            lineWidth: function () {
              this.updeteTab();
            },
            defIndex: function () {
              this.updeteTab();
            },
            initData: {
              handler: function () {
                this.updeteTab();
              },
              deep: !0,
            },
          },
          computed: {
            positionNavCss: function () {
              if ('left' === this.positionNav || 'right' === this.positionNav) return !0;
            },
            titleClass: function () {
              var t = this.smoothFlag ? 'nut-tab-title-smooth' : '';
              return 'top' == this.positionNav ? 'nut-tab-title ' + t : 'nut-tab-title-' + this.positionNav + 'nav ' + t;
            },
            navBarClass: function () {
              return 'top' == this.positionNav ? 'nav-bar' : 'nav-bar-' + this.positionNav;
            },
            titleNavList: function () {
              return 'top' == this.positionNav || 'bottom' == this.positionNav
                ? this.isScroll
                  ? 'nut-title-nav-scroll'
                  : 'nut-title-nav-list'
                : this.isScroll
                ? 'nut-title-vertical-scroll'
                : 'nut-title-nav-' + this.positionNav + 'nav';
            },
            navBarStyle: function () {
              return 'top' === this.positionNav || 'bottom' === this.positionNav
                ? { transform: 'translateX('.concat(this.initX, 'px)'), width: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px' }
                : { transform: 'translateY('.concat(this.initX, 'px)'), height: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px' };
            },
            customHeight: function () {
              return !this.isScroll || ('left' !== this.positionNav && 'right' !== this.positionNav) ? null : { height: this.wrapperHeight + 'px' };
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.$slots.default && t.updeteTab(t.$slots.default);
            });
          },
          methods: {
            updeteTab: function () {
              var t = this;
              this.$nextTick(function () {
                (t.tabTitleList = []), (t.activeIndex = t.defIndex), t.initTab(o()(t.$slots.default));
              });
            },
            initTab: function (t) {
              for (var e = this, i = 0; i < t.length; i++) {
                var n = t[i].tag;
                if ('string' == typeof n && -1 != n.indexOf('nut-tab-panel')) {
                  var o = t[i].data.attrs,
                    a = {
                      tabTitle: o['tab-title'] || o.tabTitle,
                      disable: !1 === o.disable,
                      iconUrl: o.iconUrl || o['icon-url'],
                      tabSlot: o['tab-slot'] || o.tabSlot || '',
                      badge: o.badge || !1,
                    };
                  this.tabTitleList.push(a);
                }
              }
              this.$nextTick(function () {
                var t;
                'top' == e.positionNav || 'bottom' == e.positionNav
                  ? ((e.navWidth = e.$refs.navlist.querySelector('.nut-title-nav').offsetWidth), (t = e.$refs.navlist.offsetWidth))
                  : ((e.navWidth = e.$refs.navlist.querySelector('.nut-title-nav').offsetHeight), (t = e.$refs.navlist.offsetHeight)),
                  e.lineWidth > 0 && e.lineWidth < e.navWidth
                    ? ((e.initX = parseInt((e.navWidth - e.lineWidth) / 2 + e.navWidth * e.defIndex)), (e.tapWidth = t / 2 - e.navWidth / 2))
                    : ((e.initX = parseInt(e.navWidth * e.defIndex)), (e.tapWidth = t / 2 - e.navWidth / 2)),
                  e.scrollTab(e.activeIndex);
              });
            },
            findParent: function (t, e) {
              for (var i = t.target, n = 0; i && n < 10 && (n++, !i.className || i.className !== e); ) i = i.parentNode;
              return i;
            },
            switchTab: function (t, e, i) {
              i || ((this.smoothFlag = !0), (this.activeIndex = t), this.scrollTab(t), this.$emit('tab-switch', t, e), this.$emit('tabSwitch', t, e));
            },
            scrollTab: function (t) {
              this.lineWidth > 0 && this.lineWidth < this.navWidth
                ? (this.initX = parseInt((this.navWidth - this.lineWidth) / 2 + this.navWidth * t))
                : (this.initX = parseInt(this.navWidth * t)),
                this.$refs.navlist.scroll &&
                  ('top' == this.positionNav || 'bottom' == this.positionNav
                    ? this.$refs.navlist.scroll(this.initX - this.tapWidth, 0, 0)
                    : this.$refs.navlist.scroll(0, this.initX - this.tapWidth));
              for (var e = this.$refs.items.children, i = 0; i < e.length; i++) i == t ? e[i].classList.remove('hide') : e[i].classList.add('hide');
            },
          },
        },
        s = i(0),
        r = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i('div', { staticClass: 'nut-tab-part' }, [
              i('div', { staticClass: 'nut-tab', class: { 'nut-tab-horizontal': t.positionNavCss } }, [
                'right' == t.positionNav || 'bottom' == t.positionNav
                  ? i('div', { ref: 'items', staticClass: 'nut-tab-item' }, [t._t('default')], 2)
                  : t._e(),
                t._v(' '),
                i(
                  'div',
                  { ref: 'navlist', class: t.titleClass, style: t.customHeight },
                  [
                    t.isShowLine ? i('b', { class: t.navBarClass, style: t.navBarStyle }) : t._e(),
                    t._v(' '),
                    t._l(t.tabTitleList, function (e, n) {
                      return i(
                        'span',
                        {
                          key: n,
                          class: [t.titleNavList, 'nut-title-nav', { 'nut-tab-disable': e.disable }, { 'nut-tab-active': t.activeIndex == n }],
                        },
                        [
                          i(
                            'a',
                            {
                              staticClass: 'nut-tab-link',
                              on: {
                                click: function (i) {
                                  return t.switchTab(n, i, e.disable);
                                },
                              },
                            },
                            [
                              e.tabSlot
                                ? t._t(e.tabSlot, null, { item: e })
                                : e.badge
                                ? i(
                                    'nut-badge',
                                    {
                                      attrs: {
                                        value: e.badge.value,
                                        max: e.badge.max,
                                        zIndex: e.badge.zIndex,
                                        isDot: e.badge.isDot,
                                        hidden: e.badge.hidden,
                                        top: e.badge.top,
                                        left: e.badge.left,
                                      },
                                    },
                                    [
                                      e.iconUrl
                                        ? i('i', { staticClass: 'nut-tab-icon', style: { backgroundImage: 'url(' + e.iconUrl + ')' } })
                                        : t._e(),
                                      t._v('\n            ' + t._s(e.tabTitle) + '\n          '),
                                    ]
                                  )
                                : [
                                    e.iconUrl
                                      ? i('i', { staticClass: 'nut-tab-icon', style: { backgroundImage: 'url(' + e.iconUrl + ')' } })
                                      : t._e(),
                                    t._v('\n            ' + t._s(e.tabTitle) + '\n          '),
                                  ],
                            ],
                            2
                          ),
                        ]
                      );
                    }),
                  ],
                  2
                ),
                t._v(' '),
                'top' == t.positionNav || 'left' == t.positionNav
                  ? i('div', { ref: 'items', staticClass: 'nut-tab-item', style: t.customHeight }, [t._t('default')], 2)
                  : t._e(),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = r.exports;
    },
    67: function (t, e, i) {},
    86: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = i(58);
      i(67);
      (n.a.install = function (t) {
        t.component(n.a.name, n.a);
      }),
        (e.default = n.a);
    },
    9: function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=tab.js.map
