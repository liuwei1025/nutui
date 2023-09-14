/*!
 * @nutui/nutui v2.3.16 - flex.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('flex', [], e)
    : 'object' == typeof exports
    ? (exports.flex = e())
    : (t.flex = e());
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
      n((n.s = 215))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, s, i, u) {
        var a,
          l = 'function' == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          s && (l._scopeId = 'data-v-' + s),
          i
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(i);
              }),
              (l._ssrRegister = a))
            : o &&
              (a = u
                ? function () {
                    o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          a)
        )
          if (l.functional) {
            l._injectStyles = a;
            var f = l.render;
            l.render = function (t, e) {
              return a.call(e), f(t, e);
            };
          } else {
            var c = l.beforeCreate;
            l.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: t, options: l };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    10: function (t, e, n) {
      var r = n(2).default,
        o = n(11);
      (t.exports = function (t) {
        var e = o(t, 'string');
        return 'symbol' === r(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    100: function (t, e, n) {},
    11: function (t, e, n) {
      var r = n(2).default;
      (t.exports = function (t, e) {
        if ('object' !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(t, e || 'default');
          if ('object' !== r(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    15: function (t, e, n) {
      var r = n(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
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
    215: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(61),
        o = n(62);
      n(100);
      (r.a.install = function (t) {
        t.component(Flex.name, r.a);
      }),
        (o.a.install = function (t) {
          t.component(Flex.name, o.a);
        });
      e.default = { Row: r.a, Col: o.a };
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
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
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
    4: function (t, e, n) {
      var r = n(10);
      (t.exports = function (t, e, n) {
        return (e = r(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    48: function (t, e, n) {
      var r = n(9);
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
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
    5: function (t, e, n) {
      var r = n(48),
        o = n(49),
        s = n(15),
        i = n(50);
      (t.exports = function (t) {
        return r(t) || o(t) || s(t) || i();
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
    61: function (t, e, n) {
      'use strict';
      var r = n(5),
        o = n.n(r),
        s = {
          name: 'nut-row',
          props: {
            type: { type: String, default: '' },
            gutter: { type: [String, Number], default: '' },
            tag: { type: String, default: 'div' },
            justify: { type: String, default: 'start' },
            align: { type: String, default: 'flex-start' },
            flexWrap: { type: String, default: 'nowrap' },
          },
          computed: {
            getGutter: function () {
              return ''.concat(this.gutter, 'px');
            },
          },
          methods: {
            initCol: function (t) {
              for (var e = 0; e < t.length; e++) {
                var n = t[e].tag;
                if ('string' == typeof n && -1 != n.indexOf('nut-col')) {
                  var r = t[e].elm;
                  (r.style.paddingLeft = this.getGutter), (r.style.paddingRight = this.getGutter);
                }
              }
            },
            getClass: function (t, e) {
              return t ? (e ? 'nut-row-'.concat(t, '-').concat(e) : '') : 'nut-row-'.concat(e);
            },
            getClassObject: function () {
              return '\n                '
                .concat(this.getClass('', this.type), '  \n                ')
                .concat(this.getClass('justify', this.justify), ' \n                ')
                .concat(this.getClass('align', this.align), ' \n                ')
                .concat(this.getClass('flex', this.flexWrap), '\n                ');
            },
          },
          mounted: function () {
            var t = o()(this.$slots.default);
            this.initCol(t);
          },
        },
        i = n(0),
        u = Object(i.a)(
          s,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)('div', { staticClass: 'nut-row', class: this.getClassObject() }, [this._t('default')], 2);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = u.exports;
    },
    62: function (t, e, n) {
      'use strict';
      var r = n(4),
        o = n.n(r),
        s = n(3),
        i = n.n(s),
        u = {
          name: 'nut-col',
          props: { span: { type: [String, Number], default: '24' }, offset: { type: [String, Number], default: '0' } },
          data: function () {
            return { classObject: {} };
          },
          watch: {
            span: {
              handler: function (t) {
                t && (this.classObject = i()(this.classObject, o()({}, 'nut-col-' + t, this.span == t)));
              },
              immediate: !0,
            },
            offset: {
              handler: function (t) {
                t && (this.classObject = i()(this.classObject, o()({}, 'nut-col-offset-' + t, this.offset == t)));
              },
              immediate: !0,
            },
          },
        },
        a = n(0),
        l = Object(a.a)(
          u,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)('div', { staticClass: 'nut-col', class: this.classObject }, [this._t('default')], 2);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = l.exports;
    },
    9: function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=flex.js.map
