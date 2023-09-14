/*!
 * @nutui/nutui v2.3.15 - elevator.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('elevator', [], e)
    : 'object' == typeof exports
    ? (exports.elevator = e())
    : (t.elevator = e());
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
      n((n.s = 197))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, o, a, u) {
        var s,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          a
            ? ((s = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (l._ssrRegister = s))
            : r &&
              (s = u
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          s)
        )
          if (l.functional) {
            l._injectStyles = s;
            var c = l.render;
            l.render = function (t, e) {
              return s.call(e), c(t, e);
            };
          } else {
            var d = l.beforeCreate;
            l.beforeCreate = d ? [].concat(d, s) : [s];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    131: function (t, e, n) {},
    197: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = {
          name: 'nut-elevator',
          props: {
            otherHeight: { type: Number, default: 60 },
            dataArray: { type: Array, required: !0 },
            navHeight: { type: Number, default: 40 },
            hiddenTime: { type: Number, default: 10 },
            showIndicator: { type: Boolean, default: !0 },
            initIndex: { type: Number, default: 0 },
          },
          computed: {
            navListHeight: function () {
              return this.navHeight;
            },
          },
          data: function () {
            return { wrapHeight: '40', currTitle: '', currBox: !1 };
          },
          watch: {
            dataArray: function (t) {
              var e = this;
              t.length > 0 &&
                this.$nextTick(function () {
                  e.initPage();
                });
            },
          },
          mounted: function () {
            this.dataArray.length > 0 && this.initPage();
          },
          methods: {
            initPage: function () {
              var t = document.documentElement.clientHeight;
              this.wrapHeight = t - this.otherHeight;
              var e = this.dataArray[this.initIndex].title;
              document.getElementById(e).scrollIntoView();
            },
            getStyle: function (t, e) {
              return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e];
            },
            getFontSize: function () {
              var t = document.getElementsByTagName('html')[0],
                e = this.getStyle(t, 'fontSize');
              return e.substring(0, e.length - 2);
            },
            clickNav: function (t, e) {
              var n = this;
              (this.currBox = !0),
                (this.currTitle = t),
                setTimeout(function () {
                  n.currBox = !1;
                }, this.hiddenTime),
                this.moveFun(t, e);
            },
            clickList: function (t, e) {
              this.$emit('clickList', t, e);
            },
            moveFun: function (t, e) {
              document.getElementById(t).scrollIntoView();
            },
            onPointerEnd: function (t) {
              var e = this,
                n = this.dataArray.length,
                i = document.getElementById('nut-elevator-nav').clientHeight,
                r = document.getElementById('nut-elevator-nav').offsetTop - i / 2,
                o = -1 !== t.type.indexOf('touch') ? t.changedTouches[0].clientY : t.clientY,
                a = parseInt((o - r) / this.navHeight);
              setTimeout(function () {
                e.currBox = !1;
              }, this.hiddenTime),
                a < n && a >= 0 && this.$emit('clickNav', this.dataArray[a].title, a);
            },
            onPointerMove: function (t) {
              t.preventDefault();
              var e = this.dataArray.length,
                n = document.getElementById('nut-elevator-nav').clientHeight,
                i = document.getElementById('nut-elevator-nav').offsetTop - n / 2,
                r = -1 !== t.type.indexOf('touch') ? t.touches[0].clientY : t.clientY,
                o = parseInt((r - i) / this.navHeight);
              o < e && o >= 0 && (this.moveFun(this.dataArray[o].title, o), (this.currBox = !0), (this.currTitle = this.dataArray[o].title));
            },
          },
        },
        r = n(0),
        o = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.dataArray.length > 0
              ? n('div', { staticClass: 'nut-elevator', style: { height: t.wrapHeight + 'px' } }, [
                  n(
                    'div',
                    { staticClass: 'nut-main', style: { height: t.wrapHeight + 'px' } },
                    [
                      n(
                        'ul',
                        { staticClass: 'nut-elevator-ul', attrs: { id: 'nut-elevator-ul' } },
                        t._l(t.dataArray, function (e) {
                          return n('li', { key: e.title, staticClass: 'nut-list-title' }, [
                            n('h3', { staticClass: 'nut-list-h', attrs: { id: e.title } }, [t._v(t._s(e.title))]),
                            t._v(' '),
                            n(
                              'ul',
                              { staticClass: 'nut-people-list' },
                              t._l(e.list, function (i, r) {
                                return n(
                                  'li',
                                  {
                                    key: r,
                                    staticClass: 'nut-list-name',
                                    attrs: { id: i.id ? i.id : 'list' + e.title + r },
                                    on: {
                                      click: function (n) {
                                        return t.clickList(i, e);
                                      },
                                    },
                                  },
                                  [t._v(t._s(i.name))]
                                );
                              }),
                              0
                            ),
                          ]);
                        }),
                        0
                      ),
                      t._v(' '),
                      n(
                        'ul',
                        {
                          staticClass: 'nut-elevator-nav',
                          attrs: { id: 'nut-elevator-nav' },
                          on: {
                            touchmove: function (e) {
                              return t.onPointerMove(e);
                            },
                            touchstart: function (e) {
                              return t.onPointerMove(e);
                            },
                            touchend: function (e) {
                              return t.onPointerEnd(e);
                            },
                          },
                        },
                        t._l(t.dataArray, function (e, i) {
                          return n(
                            'li',
                            {
                              key: i,
                              staticClass: 'nut-nav-list',
                              style: { height: t.navListHeight + 'px', lineHeight: t.navListHeight + 'px' },
                              attrs: { id: 'nav' + i },
                              on: {
                                click: function (n) {
                                  return t.clickNav(e.title, i);
                                },
                              },
                            },
                            [t._v(t._s(e.title))]
                          );
                        }),
                        0
                      ),
                      t._v(' '),
                      t.showIndicator
                        ? [
                            n(
                              'div',
                              {
                                directives: [{ name: 'show', rawName: 'v-show', value: t.currBox, expression: 'currBox' }],
                                staticClass: 'nut-big-box',
                              },
                              [t._v('\n        ' + t._s(t.currTitle) + '\n      ')]
                            ),
                          ]
                        : t._e(),
                    ],
                    2
                  ),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(131);
      o.install = function (t) {
        t.component(o.name, o);
      };
      e.default = o;
    },
  });
});
//# sourceMappingURL=elevator.js.map
