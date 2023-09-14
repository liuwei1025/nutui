/*!
 * @nutui/nutui v2.3.16 - row.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('row', [], e)
    : 'object' == typeof exports
    ? (exports.row = e())
    : (t.row = e());
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
      n((n.s = 103))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, o, i, s, u) {
        var a,
          f = 'function' == typeof t ? t.options : t;
        if (
          (e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
          r && (f.functional = !0),
          i && (f._scopeId = 'data-v-' + i),
          s
            ? ((a = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (f._ssrRegister = a))
            : o &&
              (a = u
                ? function () {
                    o.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          a)
        )
          if (f.functional) {
            f._injectStyles = a;
            var l = f.render;
            f.render = function (t, e) {
              return a.call(e), l(t, e);
            };
          } else {
            var c = f.beforeCreate;
            f.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: t, options: f };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    103: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(61);
      n(104);
      (r.a.install = function (t) {
        t.component(r.a.name, r.a);
      }),
        (e.default = r.a);
    },
    104: function (t, e, n) {},
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
        i = n(15),
        s = n(50);
      (t.exports = function (t) {
        return r(t) || o(t) || i(t) || s();
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
        i = {
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
        s = n(0),
        u = Object(s.a)(
          i,
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
//# sourceMappingURL=row.js.map
