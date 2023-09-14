/*!
 * @nutui/nutui v2.3.15 - stepper.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('stepper', [], e)
    : 'object' == typeof exports
    ? (exports.stepper = e())
    : (t.stepper = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var s = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
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
          for (var s in t)
            n.d(
              i,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
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
      n((n.s = 185))
    );
  })({
    0: function (t, e, n) {
      'use strict';
      function i(t, e, n, i, s, r, a, u) {
        var o,
          m = 'function' == typeof t ? t.options : t;
        if (
          (e && ((m.render = e), (m.staticRenderFns = n), (m._compiled = !0)),
          i && (m.functional = !0),
          r && (m._scopeId = 'data-v-' + r),
          a
            ? ((o = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  s && s.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (m._ssrRegister = o))
            : s &&
              (o = u
                ? function () {
                    s.call(this, (m.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : s),
          o)
        )
          if (m.functional) {
            m._injectStyles = o;
            var l = m.render;
            m.render = function (t, e) {
              return o.call(e), l(t, e);
            };
          } else {
            var d = m.beforeCreate;
            m.beforeCreate = d ? [].concat(d, o) : [o];
          }
        return { exports: t, options: m };
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    110: function (t, e, n) {},
    13: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4"><rect x="14" y="20" width="16" height="4" rx="2" transform="translate(-14 -20)" fill-rule="evenodd"/></svg>';
    },
    14: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd"><rect y="6" width="16" height="4" rx="2"/><rect transform="rotate(90 8 8)" y="6" width="16" height="4" rx="2"/></g></svg>';
    },
    15: function (t, e, n) {
      var i = n(9);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    185: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(55),
        s = n.n(i),
        r = {
          name: 'nut-stepper',
          props: {
            simple: { type: Boolean, default: !0 },
            min: { type: [Number, String], default: 0 },
            max: { type: [Number, String], default: 1 / 0 },
            step: { type: [Number, String], default: 1 },
            readonly: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            transition: { type: Boolean, default: !0 },
            value: { type: [String, Number], required: !0 },
            decimalPlaces: { type: Number, default: 0 },
          },
          data: function () {
            return {
              tempNum: '',
              focusing: !1,
              num: this.value,
              minNum: this.min,
              showNum: !0,
              showAddAnim: !1,
              showReduceAnim: !1,
              animNum: [this.value, this.value],
              animTranslate_add: 0,
              animTranslate_: -100,
              isLegal: !0,
            };
          },
          filters: {
            maxv: function (t, e, n) {
              var i = t;
              return i > n && (i = n), i < e && (i = e), i;
            },
          },
          watch: {
            value: {
              handler: function (t, e) {
                t > this.max && (t = this.max),
                  t < this.minNum && (t = this.minNum),
                  (this.num = t > 0 ? this.fixedDecimalPlaces(t) : t),
                  this.$emit('change', this.num);
              },
              immediate: !0,
            },
            min: {
              handler: function (t, e) {
                (this.isLegal = !0), t < this.max ? (this.minNum = t) : (this.isLegal = !1);
              },
              immediate: !0,
            },
            max: {
              handler: function (t, e) {
                (this.isLegal = !0), t <= this.min && (this.isLegal = !1);
              },
              immediate: !0,
            },
          },
          computed: {
            isGray: function () {
              return (this.focusing ? this.tempNum : this.num) - this.step < this.min;
            },
          },
          methods: {
            focus: function (t) {
              if (!this.readonly && this.isLegal && !this.disabled) {
                var e = this.num;
                (this.tempNum = e), (this.minNum = ''), (this.focusing = !0), this.$emit('focus', t, this.num);
              }
            },
            blur: function (t) {
              if (this.readonly || !this.isLegal || this.disabled) return this.$emit('blur', t, this.num);
              var e = t.target.value;
              (this.minNum = this.min),
                (this.focusing = !1),
                e ? (e > this.max && (e = this.max), e < this.minNum && (e = this.minNum), (this.num = e)) : (this.num = this.tempNum),
                this.$emit('update:value', this.num),
                this.$emit('blur', t, this.num);
            },
            checknum: function (t) {
              var e = t.target.value;
              (this.focusing = !1), e > this.max && (e = this.max), e < this.minNum && (e = this.minNum), (t.target.value = e), (this.num = e);
            },
            numchange: function (t) {
              var e = t.target.value;
              e > this.max && (e = this.max),
                e < this.minNum && (e = this.minNum),
                (t.target.value = e),
                (this.num = e),
                this.$emit('update:value', this.num),
                this.$emit('change', this.num);
            },
            fixedDecimalPlaces: function (t) {
              return Number(t).toFixed(this.decimalPlaces);
            },
            add: function () {
              var t = this;
              if (!this.disabled)
                if (((this.num = Number(this.num)), this.num <= this.max - this.step && this.max > this.minNum)) {
                  var e = this.fixedDecimalPlaces(this.num + Number(this.step)).split('.'),
                    n = s()(e, 2),
                    i = n[0],
                    r = n[1],
                    a = r ? r.length : 0;
                  if (((this.num = parseFloat(i + (r ? '.' + r : '')).toFixed(a)), this.transition))
                    (this.showNum = !1),
                      (this.showAddAnim = !0),
                      (this.showReduceAnim = !1),
                      (this.animNum = [parseFloat(this.num - this.step).toFixed(a), this.num]),
                      (this.animTranslate_add = -100),
                      this.$el.querySelector('.nut-stepper-fake').addEventListener('webkitTransitionEnd', function () {
                        (t.showNum = !0), (t.showAddAnim = !1), (t.animTranslate_add = 0);
                      });
                  this.$emit('update:value', this.num), this.$emit('add', this.num);
                } else this.$emit('add-no-allow');
            },
            animEnd: function () {
              this.showNum = !0;
            },
            reduce: function () {
              var t = this;
              if (!this.disabled)
                if (this.num - this.step >= this.minNum) {
                  var e = this.fixedDecimalPlaces(this.num - Number(this.step)).split('.'),
                    n = s()(e, 2),
                    i = n[0],
                    r = n[1],
                    a = r ? r.length : 0;
                  if (((this.num = parseFloat(i + (r ? '.' + r : '')).toFixed(a)), this.transition))
                    (this.showNum = !1),
                      (this.showAddAnim = !1),
                      (this.showReduceAnim = !0),
                      (this.animNum = [this.num, this.num]),
                      (this.animTranslate_ = 0),
                      this.$el.querySelector('.nut-stepper-fake-').addEventListener('webkitTransitionEnd', function () {
                        (t.showNum = !0), (t.showReduceAnim = !1), (t.animTranslate_ = -100);
                      });
                  this.$emit('update:value', this.num), this.$emit('reduce', this.num);
                } else this.$emit('reduce-no-allow');
            },
          },
        },
        a = n(0),
        u = Object(a.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i('div', { class: { 'nut-stepper': !t.simple, 'nut-stepper-simple': t.simple } }, [
              i('span', {
                class: { 'nut-stepper-grey': t.isGray || t.disabled },
                domProps: { innerHTML: t._s(n(13)) },
                on: {
                  click: function (e) {
                    return t.reduce();
                  },
                },
              }),
              t._v(' '),
              i('input', {
                style: { visibility: t.showNum ? 'visible' : 'hidden' },
                attrs: { type: 'number', min: t.minNum, max: t.max, disabled: t.disabled, readonly: t.readonly || !t.isLegal },
                domProps: { value: t._f('maxv')(t.num, t.minNum, t.max) },
                on: { input: t.numchange, keyup: t.checknum, focus: t.focus, blur: t.blur },
              }),
              t._v(' '),
              i(
                'div',
                {
                  class: ['nut-stepper-fake', t.showAddAnim ? 'nut-stepper-transition' : 'nut-stepper-none-transition'],
                  style: {
                    visibility: t.showAddAnim ? 'visible' : 'hidden',
                    transform: 'translate(0,' + t.animTranslate_add + '%)',
                    '-ms-transform': 'translate(0,' + t.animTranslate_add + '%)',
                    '-moz-transform': 'translate(0,' + t.animTranslate_add + '%)',
                    '-webkit-transform': 'translate(0,' + t.animTranslate_add + '%)',
                    '-o-transform': 'translate(0,' + t.animTranslate_add + '%)',
                  },
                },
                [i('div', [t._v(t._s(t.animNum[0]))]), t._v(' '), i('div', [t._v(t._s(t.animNum[1]))])]
              ),
              t._v(' '),
              i(
                'div',
                {
                  class: ['nut-stepper-fake-', t.showReduceAnim ? 'nut-stepper-transition' : 'nut-stepper-none-transition'],
                  style: {
                    visibility: t.showReduceAnim ? 'visible' : 'hidden',
                    transform: 'translate(0,' + t.animTranslate_ + '%)',
                    '-ms-transform': 'translate(0,' + t.animTranslate_ + '%)',
                    '-moz-transform': 'translate(0,' + t.animTranslate_ + '%)',
                    '-webkit-transform': 'translate(0,' + t.animTranslate_ + '%)',
                    '-o-transform': 'translate(0,' + t.animTranslate_ + '%)',
                  },
                },
                [i('div', [t._v(t._s(t.animNum[0]))]), t._v(' '), i('div', [t._v(t._s(t.animNum[1]))])]
              ),
              t._v(' '),
              i('span', {
                class: { 'nut-stepper-grey': (t.max && Number(t.num) > t.max - t.step) || !t.isLegal || t.disabled },
                domProps: { innerHTML: t._s(n(14)) },
                on: {
                  click: function (e) {
                    return t.add();
                  },
                },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(110);
      u.install = function (t) {
        t.component(u.name, u);
      };
      e.default = u;
    },
    55: function (t, e, n) {
      var i = n(69),
        s = n(70),
        r = n(15),
        a = n(71);
      (t.exports = function (t, e) {
        return i(t) || s(t, e) || r(t, e) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    69: function (t, e) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    70: function (t, e) {
      (t.exports = function (t, e) {
        var n = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != n) {
          var i,
            s,
            r,
            a,
            u = [],
            o = !0,
            m = !1;
          try {
            if (((r = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              o = !1;
            } else for (; !(o = (i = r.call(n)).done) && (u.push(i.value), u.length !== e); o = !0);
          } catch (t) {
            (m = !0), (s = t);
          } finally {
            try {
              if (!o && null != n.return && ((a = n.return()), Object(a) !== a)) return;
            } finally {
              if (m) throw s;
            }
          }
          return u;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    71: function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    9: function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  });
});
//# sourceMappingURL=stepper.js.map
