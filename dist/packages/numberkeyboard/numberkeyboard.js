/*!
 * @nutui/nutui v2.3.15 - numberkeyboard.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('numberkeyboard', [], t)
    : 'object' == typeof exports
    ? (exports.numberkeyboard = t())
    : (e.numberkeyboard = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
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
      n((n.s = 212))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r, i, s, u) {
        var a,
          c = 'function' == typeof e ? e.options : e;
        if (
          (t && ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
          o && (c.functional = !0),
          i && (c._scopeId = 'data-v-' + i),
          s
            ? ((a = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(s);
              }),
              (c._ssrRegister = a))
            : r &&
              (a = u
                ? function () {
                    r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          a)
        )
          if (c.functional) {
            c._injectStyles = a;
            var l = c.render;
            c.render = function (e, t) {
              return a.call(t), l(e, t);
            };
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, a) : [a];
          }
        return { exports: e, options: c };
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    15: function (e, t, n) {
      var o = n(9);
      (e.exports = function (e, t) {
        if (e) {
          if ('string' == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    154: function (e, t, n) {},
    212: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n(5),
        r = n.n(o),
        i = {
          name: 'nut-numberkeyboard',
          props: {
            title: { type: String, default: '' },
            visible: { type: Boolean, default: !1 },
            type: { type: String, default: 'default' },
            customKey: {
              type: Array,
              default: function () {
                return [];
              },
            },
            value: { type: String, default: '' },
            maxlength: { type: [Number, String], default: 6 },
          },
          model: { prop: 'value', event: 'update:value' },
          computed: {
            keysList: function () {
              return 'rightColumn' == this.type || '' != this.title ? this.genCustomKeys() : this.defaultKey();
            },
          },
          data: function () {
            return { once: 0, keys: [], clickKeyIndex: void 0 };
          },
          beforeDestroy: function () {
            document.getElementsByTagName('body')[0].removeEventListener('click', function () {});
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = e.$el;
              document.getElementsByTagName('body')[0].addEventListener('click', function (n) {
                var o = (n || window.event).target;
                if (t.contains(o)) {
                  '完成' == o.innerText && e.$emit('close');
                } else {
                  if (0 == e.once && e.visible) return (e.once += 1), !1;
                  e.closeBoard();
                }
              });
            });
          },
          created: function () {
            this.visible && (this.once += 1);
          },
          methods: {
            getBasicKeys: function () {
              for (var e = [], t = 1; t <= 9; t++) e.push({ id: t, type: 'number' });
              return e;
            },
            defaultKey: function () {
              return [].concat(r()(this.getBasicKeys()), [
                { id: 'lock', type: 'lock' },
                { id: 0, type: 'number' },
                { id: 'delete', type: 'delete' },
              ]);
            },
            genCustomKeys: function () {
              var e = this.getBasicKeys(),
                t = this.customKey,
                n = Array.isArray(t) ? t : [t];
              return (
                n.length > 2 && (n = [n[0], n[1]]),
                1 === n.length
                  ? this.title
                    ? e.push({ id: n[0], type: 'custom' }, { id: 0, type: 'number' }, { id: 'delete', type: 'delete' })
                    : e.push({ id: 0, type: 'number' }, { id: n[0], type: 'custom' })
                  : 2 === n.length
                  ? (e.push({ id: n[0], type: 'custom' }, { id: 0, type: 'number' }, { id: n[1], type: 'custom' }),
                    this.title && e.push({ id: 'delete', type: 'delete' }))
                  : e.push({ id: 0, type: 'number' }),
                e
              );
            },
            afterEnter: function () {
              this.$emit('enter');
            },
            afterLeave: function () {
              this.$emit('leave');
            },
            onTouchstart: function (e, t) {
              t.stopPropagation(),
                (this.clickKeyIndex = e.id),
                ('number' != e.type && 'custom' != e.type) ||
                  (this.$emit('input', e.id), this.value.length < this.maxlength && this.$emit('update:value', this.value + e.id)),
                'lock' == e.type && this.closeBoard(),
                'delete' == e.type && (this.$emit('delete'), this.$emit('update:value', this.value.slice(0, this.value.length - 1)));
            },
            onTouchMove: function (e, t) {
              t.stopPropagation();
            },
            onTouchEnd: function () {
              this.clickKeyIndex = void 0;
            },
            closeBoard: function () {
              this.once > 0 && ((this.once = 0), this.$emit('close'));
            },
          },
        },
        s = n(0),
        u = Object(s.a)(
          i,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n('transition', { attrs: { name: 'nut-board-slide-up' }, on: { 'after-enter': e.afterEnter, 'after-leave': e.afterLeave } }, [
              n(
                'div',
                { directives: [{ name: 'show', rawName: 'v-show', value: e.visible, expression: 'visible' }], staticClass: 'nut-numberkeyboard' },
                [
                  e.title
                    ? n('div', { staticClass: 'number-board-header' }, [
                        n('h3', { staticClass: 'tit' }, [e._v(e._s(e.title))]),
                        e._v(' '),
                        n(
                          'span',
                          {
                            staticClass: 'keyboard-close',
                            on: {
                              click: function () {
                                return e.closeBoard();
                              },
                            },
                          },
                          [e._v('完成')]
                        ),
                      ])
                    : e._e(),
                  e._v(' '),
                  n('div', { staticClass: 'number-board-body' }, [
                    n(
                      'div',
                      { staticClass: 'number-board' },
                      e._l(e.keysList, function (t) {
                        return n(
                          'div',
                          {
                            key: 'key' + t.id,
                            class: [
                              'key-board-wrapper',
                              {
                                'key-board-wrapper-large':
                                  0 == t.id && 'rightColumn' == e.type && Array.isArray(e.customKey) && 1 == e.customKey.length,
                              },
                            ],
                          },
                          [
                            n(
                              'div',
                              {
                                class: ['key', { active: t.id == e.clickKeyIndex }, { lock: 'lock' == t.type }, { delete: 'delete' == t.type }],
                                on: {
                                  touchstart: function (n) {
                                    return e.onTouchstart(t, n);
                                  },
                                  touchmove: function (n) {
                                    return e.onTouchMove(t, n);
                                  },
                                  touchend: e.onTouchEnd,
                                },
                              },
                              [
                                'number' == t.type || 'custom' == t.type ? [e._v(e._s(t.id))] : e._e(),
                                e._v(' '),
                                'lock' == t.type
                                  ? n('img', {
                                      attrs: {
                                        src: 'https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png',
                                      },
                                    })
                                  : e._e(),
                                e._v(' '),
                                'delete' == t.type
                                  ? n('img', {
                                      attrs: {
                                        src: 'https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png',
                                      },
                                    })
                                  : e._e(),
                              ],
                              2
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    e._v(' '),
                    'rightColumn' == e.type
                      ? n('div', { staticClass: 'number-board-sidebar' }, [
                          n('div', { staticClass: 'key-board-wrapper' }, [
                            n(
                              'div',
                              {
                                class: ['key', { active: 'delete' == e.clickKeyIndex }],
                                on: {
                                  touchstart: function (t) {
                                    return e.onTouchstart({ id: 'delete', type: 'delete' }, t);
                                  },
                                  touchmove: function (t) {
                                    return e.onTouchMove({ id: 'delete', type: 'delete' }, t);
                                  },
                                  touchend: e.onTouchEnd,
                                },
                              },
                              [
                                n('img', {
                                  attrs: {
                                    src: 'https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png',
                                  },
                                }),
                              ]
                            ),
                          ]),
                          e._v(' '),
                          '' == e.title
                            ? n(
                                'div',
                                {
                                  staticClass: 'key-board-wrapper',
                                  on: {
                                    click: function () {
                                      return e.closeBoard();
                                    },
                                  },
                                },
                                [
                                  n('div', { class: ['key', 'finish', { activeFinsh: 'finish' == e.clickKeyIndex }] }, [
                                    e._v('\n            完成\n          '),
                                  ]),
                                ]
                              )
                            : e._e(),
                        ])
                      : e._e(),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(154);
      u.install = function (e) {
        e.component(u.name, u);
      };
      t.default = u;
    },
    48: function (e, t, n) {
      var o = n(9);
      (e.exports = function (e) {
        if (Array.isArray(e)) return o(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    49: function (e, t) {
      (e.exports = function (e) {
        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5: function (e, t, n) {
      var o = n(48),
        r = n(49),
        i = n(15),
        s = n(50);
      (e.exports = function (e) {
        return o(e) || r(e) || i(e) || s();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    50: function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    9: function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  });
});
//# sourceMappingURL=numberkeyboard.js.map
