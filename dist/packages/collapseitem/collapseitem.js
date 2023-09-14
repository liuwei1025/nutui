/*!
 * @nutui/nutui v2.3.15 - collapseitem.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('collapseitem', [], t)
    : 'object' == typeof exports
    ? (exports.collapseitem = t())
    : (e.collapseitem = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var o = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              i,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return i;
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
      n((n.s = 213))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function i(e, t, n, i, o, a, r, s) {
        var l,
          c = 'function' == typeof e ? e.options : e;
        if (
          (t && ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
          i && (c.functional = !0),
          a && (c._scopeId = 'data-v-' + a),
          r
            ? ((l = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  o && o.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(r);
              }),
              (c._ssrRegister = l))
            : o &&
              (l = s
                ? function () {
                    o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          l)
        )
          if (c.functional) {
            c._injectStyles = l;
            var p = c.render;
            c.render = function (e, t) {
              return l.call(t), p(e, t);
            };
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, l) : [l];
          }
        return { exports: e, options: c };
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    155: function (e, t, n) {},
    213: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = {
          name: 'nut-collapse-item',
          props: {
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' },
            disabled: { type: Boolean, default: !1 },
            name: { type: Number | String, default: -1, required: !0 },
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = e.$parent && e.$parent.value;
              (('number' != typeof t && 'string' != typeof t) || (e.name == t && e.defaultOpen()), t instanceof Array) &&
                t.filter(function (t) {
                  return t == e.name;
                }).length > 0 &&
                e.defaultOpen();
            }),
              (this.classDirection = this.$parent.expandIconPosition),
              this.$parent.icon && this.$set(this.iconStyle, 'background-image', 'url(' + this.$parent.icon + ')');
          },
          data: function () {
            return {
              openExpanded: !1,
              classDirection: 'right',
              iconStyle: {
                'background-image': 'url(https://img10.360buyimg.com/imagetools/jfs/t1/111306/10/17422/341/5f58aa0eEe9218dd6/28d76a42db334e31.png)',
                'background-repeat': 'no-repeat',
                'background-size': '100% 100%',
                transform: 'rotate(0deg)',
              },
            };
          },
          methods: {
            defaultOpen: function () {
              this.$parent.accordion ? this.$parent.accordionFun(this.name) : this.open(),
                this.$parent.icon && this.$set(this.iconStyle, 'transform', 'rotate(' + this.$parent.rotate + 'deg)');
            },
            toggleOpen: function () {
              this.$parent.accordion
                ? (this.$parent.value == this.name && this.$parent.accordionFun(this.name), this.animation(), this.$parent.changeVal(this.name))
                : (this.$parent.changeValAry(this.name), this.open());
            },
            open: function () {
              (this.openExpanded = !this.openExpanded), this.animation();
            },
            animation: function () {
              var e = this;
              this.$nextTick(function () {
                var t = e.$refs,
                  n = t.content,
                  i = t.wrapper;
                if (n && i) {
                  var o = n.offsetHeight;
                  if (o) {
                    var a = ''.concat(o, 'px');
                    (i.style.willChange = 'height'),
                      e.openExpanded
                        ? (i.style.height = a)
                        : ((i.style.height = a),
                          requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                              i.style.height = 0;
                            });
                          })),
                      e.$parent.icon && !e.openExpanded
                        ? e.$set(e.iconStyle, 'transform', 'rotate(0deg)')
                        : e.$set(e.iconStyle, 'transform', 'rotate(' + e.$parent.rotate + 'deg)');
                  }
                  e.openExpanded || e.onTransitionEnd();
                }
              });
            },
            changeOpen: function (e) {
              this.openExpanded = e;
            },
            onTransitionEnd: function () {
              this.openExpanded && (this.$refs.wrapper.style.height = 'auto'), (this.$refs.wrapper.style.willChange = 'auto');
            },
          },
        },
        o = n(0),
        a = Object(o.a)(
          i,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              'div',
              {
                class: [
                  'nut-collapse-item',
                  { 'nut-collapse-item-left': 'left' == e.classDirection },
                  { 'nut-collapse-item-icon': this.$parent.icon },
                ],
              },
              [
                n(
                  'div',
                  {
                    class: ['collapse-item', { 'item-expanded': e.openExpanded }, { 'nut-collapse-item-disabled': e.disabled }],
                    on: { click: e.toggleOpen },
                  },
                  [
                    n('div', { staticClass: 'collapse-title' }, [n('span', { domProps: { innerHTML: e._s(e.title) } })]),
                    e._v(' '),
                    e.subTitle ? n('span', { staticClass: 'subTitle', domProps: { innerHTML: e._s(e.subTitle) } }) : e._e(),
                    e._v(' '),
                    this.$parent.icon
                      ? n('i', {
                          class: ['collapse-icon', { 'col-expanded': e.openExpanded }, { 'collapse-icon-disabled': e.disabled }],
                          style: e.iconStyle,
                        })
                      : n('i', { class: ['collapse-icon', { 'col-expanded': e.openExpanded }, { 'collapse-icon-disabled': e.disabled }] }),
                  ]
                ),
                e._v(' '),
                n('div', { ref: 'wrapper', class: ['collapse-wrapper'], on: { transitionend: e.onTransitionEnd } }, [
                  n('div', { ref: 'content', staticClass: 'collapse-content' }, [e._t('default')], 2),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(155);
      a.install = function (e) {
        e.component(a.name, a);
      };
      t.default = a;
    },
  });
});
//# sourceMappingURL=collapseitem.js.map
