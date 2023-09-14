/*!
 * @nutui/nutui v2.3.16 - shortpassword.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('vue')))
    : 'function' == typeof define && define.amd
    ? define('shortpassword', ['vue'], e)
    : 'object' == typeof exports
    ? (exports.shortpassword = e(require('vue')))
    : (t.shortpassword = e(t.Vue));
})('undefined' != typeof self ? self : this, function (t) {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
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
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
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
      n((n.s = 190))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function o(t, e, n, o, r, s, a, i) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          o && (u.functional = !0),
          s && (u._scopeId = 'data-v-' + s),
          a
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (u._ssrRegister = l))
            : r &&
              (l = i
                ? function () {
                    r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          l)
        )
          if (u.functional) {
            u._injectStyles = l;
            var p = u.render;
            u.render = function (t, e) {
              return l.call(e), p(t, e);
            };
          } else {
            var c = u.beforeCreate;
            u.beforeCreate = c ? [].concat(c, l) : [l];
          }
        return { exports: t, options: u };
      }
      n.d(e, 'a', function () {
        return o;
      });
    },
    1: function (e, n) {
      e.exports = t;
    },
    119: function (t, e, n) {},
    12: function (t, e, n) {
      'use strict';
      n(2);
      var o = n(3),
        r = n.n(o),
        s = n(1),
        a = n.n(s);
      a.a.config.lang = 'zn-CH';
      var i = {
          lang: {
            okBtnTxt: '确 定',
            cancelBtnTxt: '取 消',
            calendar: {
              loadPrevMonth: '加载上一个月',
              noMoreMonth: '没有更早月份~',
              start: '开始',
              end: '结束',
              title: '选择日期',
              week: '日,一,二,三,四,五,六',
              monthTitle: '{year}年{month}月',
              year: '年',
              month: '月',
              day: '日',
              hour: '时',
              minute: '分',
              second: '秒',
              morning: '上午',
              afternoon: '下午',
            },
            menu: { resetBtnTxt: '重置' },
            searchbar: { placeText: '请输入内容...', textInfo: '搜索' },
            shortpassword: { tip1: '输入数字密码', tip2: '忘记密码' },
            steps: { step: '步骤', stepDesc: '步骤描述' },
            uploader: { xmlError: '对不起，您的浏览器不支持本组件！', typeError: '不支持上传该类型文件', limitError: '文件大小超过限制' },
          },
        },
        l = {},
        u = !1,
        p = function () {
          var t = Object.getPrototypeOf(this || a.a).$t;
          if ('function' == typeof t && a.a.locale)
            return (
              u || ((u = !0), a.a.locale(a.a.config.lang, r()('zn-CH' === a.a.config.lang ? i : {}, a.a.locale(a.a.config.lang) || {}, l))),
              t.apply(this, arguments)
            );
        };
      function c(t, e) {
        var n = p.apply(this, arguments);
        if (null != n) return n;
        var o = r()({}, 'zn-CH' === a.a.config.lang ? i : {}, l),
          s = (t && t.split('.')) || [],
          u = null;
        if (s.length)
          for (var c = 0; c < s.length; c++) {
            var d = s[c];
            if (!d || !o[d]) {
              u = null;
              break;
            }
            u = o = o[d];
          }
        return f(u, e);
      }
      function f(t, e) {
        var n = t && t.match(/{.+?}/g);
        return (
          n &&
            e &&
            (n = n.map(function (t) {
              return t.replace(/\{\s*(\w+|\d+).*?\}/, '$1');
            })).forEach(function (n, o) {
              var r = new RegExp('{\\s*' + n + '\\s*(?:=\\s*(\\S*?))?\\s*?}', 'g');
              t = t.replace(r, function (t, o) {
                return 'function' ==
                  ((r = e[n]),
                  Object.prototype.toString
                    .call(r)
                    .toLowerCase()
                    .match(/\s(\w+)/)[1])
                  ? e[n]()
                  : void 0 !== e[n]
                  ? e[n]
                  : o || t;
                var r;
              });
            }),
          t
        );
      }
      e.a = {
        methods: {
          nutTranslate: function () {
            return c.apply(this, arguments);
          },
        },
      };
    },
    190: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'nut-shortpassword',
          mixins: [n(12).a],
          props: {
            visible: { type: Boolean, default: !1 },
            link: { type: String, default: 'javascript:;' },
            type: { type: String, default: 'bottom' },
          },
          data: function () {
            return {
              shortpwdValue: '',
              regExp: /^[0-9]*$/,
              fakeInputItems: [
                { id: 1, val: '' },
                { id: 2, val: '' },
                { id: 3, val: '' },
                { id: 4, val: '' },
                { id: 5, val: '' },
                { id: 6, val: '' },
              ],
              timer: null,
              isCenter: 'bottom' != this.type,
              layerTran: 'bottom' == this.type ? 'popup' : 'fade',
              show: !1,
            };
          },
          watch: {
            visible: function (t, e) {
              var n = this;
              t
                ? (this.show = t)
                : (clearTimeout(this.timer),
                  (this.timer = setTimeout(function () {
                    n.show = t;
                  }, 100)));
            },
          },
          methods: {
            closeLayer: function () {
              var t = this;
              this.timer = setTimeout(function () {
                t.$emit('close');
              }, 300);
            },
            shortpwdInput: function (t) {
              var e = this,
                n = t.target.value;
              if (this.regExp.test(n)) {
                if (n.length < 6) {
                  var o = this.$refs.nutFakeList.offsetLeft + 26;
                  n.length;
                } else
                  this.$refs.realInput.blur(),
                    (this.timer = setTimeout(function () {
                      e.$emit('close', n),
                        (e.shortpwdValue = ''),
                        (e.fakeInputItems = [
                          { id: 1, val: '' },
                          { id: 2, val: '' },
                          { id: 3, val: '' },
                          { id: 4, val: '' },
                          { id: 5, val: '' },
                          { id: 6, val: '' },
                        ]);
                    }, 300));
                for (var r = 0; r < n.length; r++) this.fakeInputItems[r].val = n[r];
              } else this.shortpwdValue = n.replace(/\D/g, '');
              for (r = 0; r < 6; r++) r >= n.length && (this.fakeInputItems[r].val = '');
            },
          },
          computed: {},
          mounted: function () {},
          destroyed: function () {
            this.timer = null;
          },
        },
        r = n(0),
        s = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { directives: [{ name: 'show', rawName: 'v-show', value: t.show, expression: 'show' }], staticClass: 'nut-short-pwd' },
              [
                n('transition', { attrs: { name: 'fade' } }, [
                  n('div', {
                    directives: [{ name: 'show', rawName: 'v-show', value: t.show, expression: 'show' }],
                    staticClass: 'nut-mask',
                    on: { click: t.closeLayer },
                  }),
                ]),
                t._v(' '),
                n('transition', { attrs: { name: t.layerTran } }, [
                  n(
                    'div',
                    {
                      directives: [{ name: 'show', rawName: 'v-show', value: t.show, expression: 'show' }],
                      staticClass: 'nut-layer',
                      class: { 'nut-layer-center': t.isCenter },
                    },
                    [
                      n('div', { staticClass: 'nut-title' }, [
                        n('span', { staticClass: 'nut-close', on: { click: t.closeLayer } }),
                        t._v('\n        ' + t._s(t.nutTranslate('lang.shortpassword.tip1')) + '\n      '),
                      ]),
                      t._v(' '),
                      n('div', { staticClass: 'nut-input-w' }, [
                        n('input', {
                          directives: [{ name: 'model', rawName: 'v-model', value: t.shortpwdValue, expression: 'shortpwdValue' }],
                          ref: 'realInput',
                          staticClass: 'nut-real-input',
                          attrs: { type: 'tel', maxlength: '6', autocomplete: 'off', autofocus: 'autofocus' },
                          domProps: { value: t.shortpwdValue },
                          on: {
                            input: [
                              function (e) {
                                e.target.composing || (t.shortpwdValue = e.target.value);
                              },
                              function (e) {
                                return t.shortpwdInput(e);
                              },
                            ],
                          },
                        }),
                        t._v(' '),
                        n('div', { ref: 'nutFakeList', staticClass: 'nut-fake-list' }, [
                          n(
                            'ul',
                            t._l(t.fakeInputItems, function (e) {
                              return n('li', { key: e.id }, [
                                n('input', {
                                  directives: [{ name: 'model', rawName: 'v-model', value: e.val, expression: 'item.val' }],
                                  attrs: { type: 'password', maxlength: '1' },
                                  domProps: { value: e.val },
                                  on: {
                                    input: function (n) {
                                      n.target.composing || t.$set(e, 'val', n.target.value);
                                    },
                                  },
                                }),
                              ]);
                            }),
                            0
                          ),
                        ]),
                        t._v(' '),
                        '' != t.link
                          ? n('div', { staticClass: 'nut-forget' }, [
                              n('a', { attrs: { href: t.link } }, [t._v(t._s(t.nutTranslate('lang.shortpassword.tip2')))]),
                            ])
                          : t._e(),
                      ]),
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
        ).exports;
      n(119);
      s.install = function (t) {
        t.component(s.name, s);
      };
      e.default = s;
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
    3: function (t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                  }
                  return t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n.apply(this, arguments)
        );
      }
      (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=shortpassword.js.map
