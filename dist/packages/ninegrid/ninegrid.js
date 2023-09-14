/*!
 * @nutui/nutui v2.3.16 - ninegrid.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('ninegrid', [], e)
    : 'object' == typeof exports
    ? (exports.ninegrid = e())
    : (t.ninegrid = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
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
      n((n.s = 214))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, i, o, s, a) {
        var c,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          o && (u._scopeId = 'data-v-' + o),
          s
            ? ((c = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
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
            var f = u.render;
            u.render = function (t, e) {
              return c.call(e), f(t, e);
            };
          } else {
            var l = u.beforeCreate;
            u.beforeCreate = l ? [].concat(l, c) : [c];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    157: function (t, e, n) {},
    214: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'nut-ninegrid',
          props: {
            data: {
              type: [Object, Array],
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { gridList: [], activeState: !1, shakeIndexs: [], loadingDataState: !1, countDown: 10, number: 0 };
          },
          watch: {
            data: {
              handler: function (t) {
                t && this.resResponse(t);
              },
            },
          },
          methods: {
            resResponse: function (t) {
              if (t.length > 15) {
                var e = t,
                  n = this.spArray(8, e),
                  r = n[0],
                  i = n[1],
                  o = [];
                r.forEach(function (t, e) {
                  o.push({ front: t, back: i[e] });
                }),
                  o.splice(4, 0, {}),
                  (this.gridList = o);
              }
            },
            beginTimeIntervar: function () {
              var t = this;
              this.timeIntervar = setInterval(function () {
                t.countDown--,
                  0 == t.countDown && t.refresh(),
                  7 == t.countDown ? (t.shakeIndexs = [2, 4, 6, 8]) : 3 == t.countDown && (t.shakeIndexs = [1, 3, 7, 9]);
              }, 1e3);
            },
            refresh: function () {
              var t = this;
              this.loadingDataState ||
                ((this.number += 1),
                (this.countDown = 10),
                (this.shakeIndexs = []),
                (this.activeState = !this.activeState),
                this.number % 2 == 0
                  ? (console.log(123), this.$emit('refresh'))
                  : ((this.loadingDataState = !0),
                    setTimeout(function () {
                      t.loadingDataState = !1;
                    }, 1e3)));
            },
            toDetail: function (t) {
              this.$emit('toDetail', t);
            },
            spArray: function (t, e) {
              var n,
                r = [];
              for (n = 0; n < e.length; ) r.push(e.slice(n, (n += t)));
              return r;
            },
          },
          mounted: function () {
            this.resResponse(this.data), this.beginTimeIntervar();
          },
        },
        i = n(0),
        o = Object(i.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'nut-ninegrid' },
              t._l(t.gridList, function (e, r) {
                return n(
                  'div',
                  { key: r, staticClass: 'item', class: [{ active: t.activeState && 4 != r }, { shake: t.shakeIndexs.includes(r + 1) }] },
                  [
                    4 == r
                      ? n(
                          'div',
                          {
                            staticClass: 'center',
                            on: {
                              click: function (e) {
                                return t.refresh(!0);
                              },
                            },
                          },
                          [
                            n('img', {
                              class: { rotate: t.loadingDataState },
                              attrs: {
                                src: '//img13.360buyimg.com/imagetools/jfs/t1/190805/24/20092/1136/6126fce9E6c61cf21/acd44eec9fc694bd.png',
                                alt: 'refresh.png',
                              },
                            }),
                            t._v(' '),
                            n('span', [t._v('换一换')]),
                            t._v(' '),
                            n('p', [t._v(t._s(t.countDown) + 'S 后自动换')]),
                          ]
                        )
                      : [
                          n(
                            'div',
                            {
                              staticClass: 'front',
                              on: {
                                click: function (n) {
                                  return t.toDetail(e.front);
                                },
                              },
                            },
                            [
                              n('p', [t._v(t._s(e.front.name))]),
                              t._v(' '),
                              n('nut-price', { staticClass: 'price', attrs: { price: e.front.price, thousands: !0 } }),
                              t._v(' '),
                              n('img', { attrs: { src: e.front.pictureUrl } }),
                            ],
                            1
                          ),
                          t._v(' '),
                          n(
                            'div',
                            {
                              staticClass: 'back',
                              on: {
                                click: function (n) {
                                  return t.toDetail(e.back);
                                },
                              },
                            },
                            [
                              n('p', [t._v(t._s(e.back.name))]),
                              t._v(' '),
                              n('nut-price', { staticClass: 'price', attrs: { price: e.back.price, thousands: !0 } }),
                              t._v(' '),
                              n('img', { attrs: { src: e.back.pictureUrl } }),
                            ],
                            1
                          ),
                        ],
                  ],
                  2
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(157);
      o.install = function (t) {
        t.component(o.name, o);
      };
      e.default = o;
    },
  });
});
//# sourceMappingURL=ninegrid.js.map
