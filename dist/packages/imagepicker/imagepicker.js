/*!
 * @nutui/nutui v2.3.16 - imagepicker.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('imagepicker', [], e)
    : 'object' == typeof exports
    ? (exports.imagepicker = e())
    : (t.imagepicker = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
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
          for (var r in t)
            i.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
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
      i((i.s = 187))
    );
  })({
    0: function (t, e, i) {
      'use strict';
      function n(t, e, i, n, r, o, s, a) {
        var u,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = i), (l._compiled = !0)),
          n && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          s
            ? ((u = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (l._ssrRegister = u))
            : r &&
              (u = a
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          u)
        )
          if (l.functional) {
            l._injectStyles = u;
            var c = l.render;
            l.render = function (t, e) {
              return u.call(e), c(t, e);
            };
          } else {
            var d = l.beforeCreate;
            l.beforeCreate = d ? [].concat(d, u) : [u];
          }
        return { exports: t, options: l };
      }
      i.d(e, 'a', function () {
        return n;
      });
    },
    114: function (t, e, i) {},
    187: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = {
          name: 'nut-imagepicker',
          props: {
            animation: { type: [Boolean], default: !0 },
            width: { type: [String, Number], default: 100 },
            height: { type: [String, Number], default: 100 },
            margin: { type: [String, Number], default: 5 },
            max: { type: [Number, String], default: 9 },
            accept: { type: [String], default: 'image/*' },
            ismultiple: { type: [Boolean], default: !1 },
            delMode: { type: [String], default: 'tap' },
            longTapTime: { type: [Number], default: 500 },
            autoUpload: { type: [Boolean, String], default: !1 },
            imgList: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { timeOutEvent: 0, list: [] };
          },
          watch: {
            imgList: function (t) {
              this.list = t;
            },
          },
          mounted: function () {
            this.list = this.imgList;
          },
          methods: {
            addImg: function (t) {
              var e = this,
                i = t.target.files,
                n = Array.from(i);
              i.length > e.max - e.list.length &&
                (n = n.filter(function (t, i) {
                  return i < e.max - e.list.length;
                })),
                e.autoUpload
                  ? (e.$emit('imgMsg', { code: 1, msg: n }), e.$emit('img-msg', { code: 1, msg: n }))
                  : (n.forEach(function (i, n) {
                      var r = new FileReader();
                      (r.onload = function (i) {
                        e.list.push({ id: Math.random(), src: i.target.result }), (t.target.value = '');
                      }),
                        r.readAsDataURL(i);
                    }),
                    e.$emit('imgMsg', { code: 2, msg: n }),
                    e.$emit('img-msg', { code: 2, msg: n }));
            },
            preview: function (t) {
              this.$emit('imgMsg', { code: 4, msg: t }), this.$emit('img-msg', { code: 4, msg: t });
            },
            deleteImg: function (t) {
              (this.list = this.list.filter(function (e) {
                return e.id != t;
              })),
                this.$emit('update:imgList', this.list),
                this.$emit('imgMsg', { code: 3, msg: t }),
                this.$emit('img-msg', { code: 3, msg: t });
            },
            touchStart: function (t) {
              var e = this;
              return (
                (this.timeOutEvent = setTimeout(function () {
                  e.deleteImg(t);
                }, this.longTapTime)),
                !1
              );
            },
            touchMove: function (t) {
              return clearTimeout(this.timeOutEvent), !1;
            },
            touchEnd: function (t) {
              clearTimeout(this.timeOutEvent), (this.timeOutEvent = 0);
            },
          },
        },
        r = i(0),
        o = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i('div', { staticClass: 'nut-imagepicker' }, [
              i(
                'div',
                { staticClass: 'img-list' },
                [
                  i(
                    'transition-group',
                    { attrs: { name: t.animation ? 'nutEase' : '' } },
                    t._l(this.list, function (e) {
                      return i(
                        'div',
                        {
                          key: e.id,
                          staticClass: 'img-item',
                          style: { width: t.width + 'px', height: t.height + 'px', marginRight: t.margin + 'px' },
                          on: {
                            click: function (i) {
                              'tap' == t.delMode ? t.deleteImg(e.id) : t.preview(e.id);
                            },
                            touchstart: function (i) {
                              'longtap' == t.delMode && t.touchStart(e.id);
                            },
                            touchmove: function (i) {
                              'longtap' == t.delMode && t.touchMove(e.id);
                            },
                            touchend: function (i) {
                              'longtap' == t.delMode && t.touchEnd(e.id);
                            },
                          },
                        },
                        [i('a', { attrs: { href: 'javascript:;' } }, [i('img', { attrs: { src: e.src, alt: '' } })])]
                      );
                    }),
                    0
                  ),
                  t._v(' '),
                  i(
                    'div',
                    {
                      directives: [
                        { name: 'show', rawName: 'v-show', value: this.list.length < this.max, expression: 'this.list.length < this.max' },
                      ],
                      staticClass: 'add-icon',
                      style: { width: t.width + 'px', height: t.height + 'px' },
                    },
                    [
                      i('i', [
                        i('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' } }, [
                          i('g', { attrs: { 'fill-rule': 'evenodd' } }, [
                            i('rect', { attrs: { y: '6', width: '16', height: '4', rx: '2' } }),
                            t._v(' '),
                            i('rect', { attrs: { transform: 'rotate(90 8 8)', y: '6', width: '16', height: '4', rx: '2' } }),
                          ]),
                        ]),
                      ]),
                      t._v(' '),
                      i('input', {
                        attrs: { type: 'file', name: 'files', multiple: t.ismultiple ? 'multiple' : '', accept: t.accept },
                        on: { change: t.addImg },
                      }),
                    ]
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          'fbb12230',
          null
        ).exports;
      i(114);
      o.install = function (t) {
        t.component(o.name, o);
      };
      e.default = o;
    },
  });
});
//# sourceMappingURL=imagepicker.js.map
