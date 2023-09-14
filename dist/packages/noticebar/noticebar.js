/*!
 * @nutui/nutui v2.3.15 - noticebar.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('noticebar', [], e)
    : 'object' == typeof exports
    ? (exports.noticebar = e())
    : (t.noticebar = e());
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
      i((i.s = 165))
    );
  })({
    0: function (t, e, i) {
      'use strict';
      function n(t, e, i, n, o, s, r, a) {
        var l,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = i), (c._compiled = !0)),
          n && (c.functional = !0),
          s && (c._scopeId = 'data-v-' + s),
          r
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(r);
              }),
              (c._ssrRegister = l))
            : o &&
              (l = a
                ? function () {
                    o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          l)
        )
          if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (t, e) {
              return l.call(e), u(t, e);
            };
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, l) : [l];
          }
        return { exports: t, options: c };
      }
      i.d(e, 'a', function () {
        return n;
      });
    },
    165: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = {
          name: 'nut-noticebar',
          props: {
            direction: { type: String, default: 'across' },
            list: {
              type: Array,
              default: function () {
                return [];
              },
            },
            standTime: { type: Number, default: 1e3 },
            complexAm: { type: Boolean, default: !1 },
            height: { type: Number, default: 40 },
            text: { type: String, default: '' },
            closeMode: { type: Boolean, default: !1 },
            wrapable: { type: Boolean, default: !1 },
            leftIcon: { type: String, default: '' },
            color: { type: String, default: '#F9911B' },
            background: { type: String, default: 'rgba(254,250,216,1)' },
            delay: { type: [String, Number], default: 1 },
            scrollable: { type: Boolean, default: !0 },
            speed: { type: Number, default: 50 },
          },
          data: function () {
            return {
              wrapWidth: 0,
              firstRound: !0,
              duration: 0,
              offsetWidth: 0,
              showNoticeBar: !0,
              animationClass: '',
              animate: !1,
              scrollList: [],
              distance: 0,
              timer: null,
              keepAlive: !1,
            };
          },
          components: {
            ScrollItem: {
              name: 'ScrollItem',
              functional: !0,
              props: { item: null },
              render: function (t, e) {
                var i = e.props.item,
                  n = i.tag,
                  o = i.children;
                return t(n, i.data, o);
              },
            },
          },
          computed: {
            iconShow: function () {
              return 'close' != this.leftIcon;
            },
            barStyle: function () {
              var t = { color: this.color, background: this.background };
              return 'vertical' == this.direction && (t.height = ''.concat(this.height, 'px')), t;
            },
            contentStyle: function () {
              return {
                paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
                animationDelay: (this.firstRound ? this.delay : 0) + 's',
                animationDuration: this.duration + 's',
              };
            },
            iconBg: function () {
              var t = null;
              return this.leftIcon && (t = this.leftIcon), t;
            },
            horseLampStyle: function () {
              var t = {};
              return (
                this.complexAm
                  ? (t = { transform: 'translateY('.concat(this.distance, 'px)') })
                  : this.animate &&
                    (t = { transition: 'all '.concat(~~(this.height / this.speed / 4), 's'), 'margin-top': '-'.concat(this.height, 'px') }),
                t
              );
            },
          },
          watch: {
            text: {
              handler: function (t, e) {
                var i = this;
                0 != this.showNoticeBar &&
                  this.$nextTick(function () {
                    var t = i.$refs,
                      e = t.wrap,
                      n = t.content;
                    if (e && n) {
                      var o = e.getBoundingClientRect().width,
                        s = n.getBoundingClientRect().width;
                      i.scrollable && s > o
                        ? ((i.wrapWidth = o), (i.offsetWidth = s), (i.duration = s / i.speed), (i.animationClass = 'play'))
                        : (i.animationClass = '');
                    }
                  });
              },
              immediate: !0,
            },
            list: function (t, e) {
              this.scrollList = [].concat(t);
            },
          },
          mounted: function () {
            var t = this;
            console.log(this.direction),
              'vertical' == this.direction &&
                (this.$slots.default ? (this.scrollList = [].concat(this.$slots.default)) : (this.scrollList = [].concat(this.list)),
                setTimeout(function () {
                  t.complexAm ? t.startRoll() : t.startRollEasy();
                }, this.standTime));
          },
          methods: {
            handleClick: function (t) {
              this.$emit('click', t);
            },
            onClickIcon: function (t) {
              (this.showNoticeBar = !this.closeMode), this.$emit('close', t);
            },
            onAnimationEnd: function () {
              var t = this;
              (this.firstRound = !1),
                this.$nextTick(function () {
                  (t.duration = (t.offsetWidth + t.wrapWidth) / t.speed), (t.animationClass = 'play-infinite');
                });
            },
            startRollEasy: function () {
              this.showhorseLamp(), (this.timer = setInterval(this.showhorseLamp, 1e3 * ~~(this.height / this.speed / 4) + this.standTime));
            },
            showhorseLamp: function () {
              var t = this;
              (this.animate = !0),
                setTimeout(function () {
                  t.scrollList.push(t.scrollList[0]), t.scrollList.shift(), (t.animate = !1);
                }, 1e3 * ~~(this.height / this.speed / 4));
            },
            startRoll: function () {
              var t = this;
              this.timer = setInterval(function () {
                for (var e = 0; e < 100; e++) t.scroll(e, !(e < 99));
              }, this.standTime + 100 * this.speed);
            },
            scroll: function (t, e) {
              var i = this;
              setTimeout(function () {
                (i.distance -= i.height / 100), e && (i.scrollList.push(i.scrollList[0]), i.scrollList.shift(), (i.distance = 0));
              }, t * this.speed);
            },
            go: function (t) {
              this.$emit('click', t);
            },
            handleClickIcon: function () {
              this.$emit('close', this.scrollList[0]);
            },
            activated: function () {
              this.keepAlive && (this.keepAlive = !1);
            },
            deactivated: function () {
              (this.keepAlive = !0), clearInterval(this.timer);
            },
            destroyed: function () {
              clearInterval(this.timer);
            },
          },
        },
        o = (i(92), i(0)),
        s = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i('div', [
              'across' == t.direction
                ? i(
                    'div',
                    {
                      directives: [{ name: 'show', rawName: 'v-show', value: t.showNoticeBar, expression: 'showNoticeBar' }],
                      staticClass: 'nut-noticebar',
                      class: { withicon: t.closeMode, close: t.closeMode, wrapable: t.wrapable },
                      style: t.barStyle,
                      on: { click: t.handleClick },
                    },
                    [
                      t.iconShow
                        ? i(
                            'div',
                            { staticClass: 'left-icon', style: { 'background-image': 'url(' + t.iconBg + ')' } },
                            [t.iconBg ? t._e() : i('nut-icon', { attrs: { type: 'notice', color: t.color, size: '16px' } })],
                            1
                          )
                        : t._e(),
                      t._v(' '),
                      i('div', { ref: 'wrap', staticClass: 'wrap' }, [
                        i(
                          'div',
                          {
                            ref: 'content',
                            staticClass: 'content',
                            class: [t.animationClass, { 'nut-ellipsis': !t.scrollable && !t.wrapable }],
                            style: t.contentStyle,
                            on: { animationend: t.onAnimationEnd, webkitAnimationEnd: t.onAnimationEnd },
                          },
                          [t._t('default', [t._v(t._s(t.text))])],
                          2
                        ),
                      ]),
                      t._v(' '),
                      t.closeMode
                        ? i(
                            'div',
                            {
                              staticClass: 'right-icon',
                              on: {
                                click: function (e) {
                                  return e.stopPropagation(), t.onClickIcon(e);
                                },
                              },
                            },
                            [i('nut-icon', { attrs: { type: 'cross', color: t.color, size: '11px' } })],
                            1
                          )
                        : t._e(),
                    ]
                  )
                : t._e(),
              t._v(' '),
              t.scrollList.length > 0 && 'vertical' == t.direction
                ? i(
                    'div',
                    { staticClass: 'nut-noticebar-vertical', style: t.barStyle },
                    [
                      t.$slots.default
                        ? [
                            i(
                              'div',
                              { staticClass: 'horseLamp_list', style: t.horseLampStyle },
                              t._l(t.scrollList, function (e, n) {
                                return i('ScrollItem', { key: n, style: { height: t.height }, attrs: { item: e } });
                              }),
                              1
                            ),
                          ]
                        : [
                            i(
                              'ul',
                              { staticClass: 'horseLamp_list', style: t.horseLampStyle },
                              t._l(t.scrollList, function (e, n) {
                                return i(
                                  'li',
                                  {
                                    key: n,
                                    staticClass: 'horseLamp_list_item',
                                    style: { height: t.height },
                                    on: {
                                      click: function (i) {
                                        return t.go(e);
                                      },
                                    },
                                  },
                                  [t._v('\n          ' + t._s(e) + '\n        ')]
                                );
                              }),
                              0
                            ),
                          ],
                      t._v(' '),
                      i(
                        'div',
                        {
                          staticClass: 'go',
                          on: {
                            click: function (e) {
                              !t.$slots.rightIcon && t.handleClickIcon();
                            },
                          },
                        },
                        [
                          t.$slots.rightIcon
                            ? [t._t('rightIcon')]
                            : t.closeMode
                            ? [i('nut-icon', { attrs: { type: 'cross', color: t.color, size: '11px' } })]
                            : t._e(),
                        ],
                        2
                      ),
                    ],
                    2
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      i(93);
      s.install = function (t) {
        t.component(s.name, s);
      };
      e.default = s;
    },
    75: function (t, e, i) {},
    92: function (t, e, i) {
      'use strict';
      i(75);
    },
    93: function (t, e, i) {},
  });
});
//# sourceMappingURL=noticebar.js.map
