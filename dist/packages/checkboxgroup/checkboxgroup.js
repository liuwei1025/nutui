/*!
 * @nutui/nutui v2.3.15 - checkboxgroup.js, 5b6e8c7d5ef3d09d8ecb, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('checkboxgroup', [], t)
    : 'object' == typeof exports
    ? (exports.checkboxgroup = t())
    : (e.checkboxgroup = t());
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
      n((n.s = 189))
    );
  })({
    0: function (e, t, n) {
      'use strict';
      function i(e, t, n, i, o, a, u, s) {
        var r,
          l = 'function' == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          a && (l._scopeId = 'data-v-' + a),
          u
            ? ((r = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  o && o.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(u);
              }),
              (l._ssrRegister = r))
            : o &&
              (r = s
                ? function () {
                    o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          r)
        )
          if (l.functional) {
            l._injectStyles = r;
            var c = l.render;
            l.render = function (e, t) {
              return r.call(t), c(e, t);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, r) : [r];
          }
        return { exports: e, options: l };
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    10: function (e, t, n) {
      var i = n(2).default,
        o = n(11);
      (e.exports = function (e) {
        var t = o(e, 'string');
        return 'symbol' === i(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    11: function (e, t, n) {
      var i = n(2).default;
      (e.exports = function (e, t) {
        if ('object' !== i(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || 'default');
          if ('object' !== i(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    118: function (e, t, n) {},
    189: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(2),
        o = n.n(i),
        a = n(4),
        u = n.n(a),
        s = n(52),
        r =
          (n(73),
          {
            name: 'nut-checkboxgroup',
            props: {
              name: String,
              checkBoxData: { type: Array, required: !0 },
              value: { type: Array, required: !0 },
              keys: {
                type: Object,
                default: function () {
                  return { id: 'id', name: 'name', class: 'class', label: 'label', value: 'value', disabled: 'disabled' };
                },
              },
              customClass: { type: String, default: '' },
              label: { type: [String, Number, Boolean], default: '' },
              size: { type: [String, Number], default: 'base' },
              disabled: { type: Boolean, default: !1 },
              animation: { type: Boolean, default: !0 },
              vertical: { type: Boolean, default: !1 },
            },
            data: function () {
              return { ignoreChange: !1, checkboxValues: {}, initialValue: [] };
            },
            components: u()({}, s.a.name, s.a),
            watch: {
              value: function () {
                this.init();
              },
            },
            mounted: function () {
              this.init();
            },
            methods: {
              init: function () {
                var e = this;
                (this.initialValue = this.value),
                  this.checkBoxData.map(function (t) {
                    'object' === o()(t) && (t.checked = e.isOptionCheckedByDefault(t));
                  });
              },
              isObject: function (e) {
                return null !== e && 'object' === o()(e);
              },
              looseIndexOf: function (e, t) {
                for (var n = 0; n < e.length; n++) if (this.looseEqual(e[n], t)) return n;
                return -1;
              },
              isOptionCheckedByDefault: function (e) {
                return this.looseIndexOf(this.initialValue, e[this.keys.value] || e) > -1;
              },
              looseEqual: function (e, t) {
                return e == t || (!(!this.isObject(e) || !this.isObject(t)) && JSON.stringify(e) === JSON.stringify(t));
              },
              changeEvt: function (e, t) {
                if (!this.ignoreChange) {
                  var n,
                    i = e[0],
                    o = e[1],
                    a = e[2],
                    u = [];
                  n = void 0 === t[this.keys.value] ? t : t[this.keys.value];
                  var s = this.looseIndexOf(this.value, n);
                  i && s < 0 && (u = this.value.concat(n)),
                    !i && s > -1 && (u = this.value.slice(0, s).concat(this.value.slice(s + 1))),
                    this.$emit('input', u),
                    this.$emit('change', u, o, a);
                }
              },
              toggleAll: function (e) {
                if (!1 !== e) {
                  !0 === e &&
                    this.checkBoxData.map(function (e) {
                      e.checked = !0;
                    }),
                    e ||
                      this.checkBoxData.map(function (e) {
                        e.checked = !e.checked;
                      });
                  var t = [],
                    n = [];
                  this.checkBoxData.filter(function (e) {
                    return e.checked && (t.push(e.value), n.push(e.label)), e.checked;
                  });
                  this.$emit('input', t), this.$emit('change', t, n, null);
                } else this.$emit('input', []);
              },
            },
          }),
        l = n(0),
        c = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              'div',
              { class: ['nut-checkboxgroup', { vertical: e.vertical }, e.customClass] },
              e._l(e.checkBoxData, function (t, i) {
                return n(
                  'div',
                  { key: t[e.keys.id], staticClass: 'checkbox-item' },
                  [
                    n(
                      'nut-checkbox',
                      {
                        attrs: {
                          name: e.name || t[e.keys.name],
                          disabled: e.disabled || t[e.keys.disabled],
                          label: t[e.keys.label],
                          animation: e.animation,
                          size: t.size ? t.size : e.size,
                          id: t[e.keys.id],
                          checked: t.checked,
                        },
                        on: {
                          'update:checked': function (n) {
                            return e.$set(t, 'checked', n);
                          },
                          change: function (n) {
                            return e.changeEvt(arguments, t);
                          },
                        },
                        model: {
                          value: e.checkboxValues[t.id],
                          callback: function (n) {
                            e.$set(e.checkboxValues, t.id, n);
                          },
                          expression: 'checkboxValues[item.id]',
                        },
                      },
                      [e._v(e._s(t[e.keys.label] || t[e.keys.value] || t) + '\n    ')]
                    ),
                  ],
                  1
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
      n(118);
      c.install = function (e) {
        e.component(c.name, c);
      };
      t.default = c;
    },
    2: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    4: function (e, t, n) {
      var i = n(10);
      (e.exports = function (e, t, n) {
        return (t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    52: function (e, t, n) {
      'use strict';
      var i = n(2),
        o = n.n(i),
        a = {
          name: 'nut-checkbox',
          props: {
            name: { type: String },
            size: { type: [String, Number, Boolean], default: 'base' },
            label: { type: String, default: '' },
            value: { required: !0 },
            trueValue: { default: !0 },
            falseValue: { default: !1 },
            submittedValue: { type: String, default: 'on' },
            checked: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            animation: { type: Boolean, default: !0 },
          },
          watch: {
            value: function () {
              this.isChecked = this.looseEqual(this.value, this.trueValue);
            },
            checked: function (e, t) {
              this.isChecked = e;
            },
          },
          data: function () {
            return { isChecked: this.value == this.trueValue || this.checked };
          },
          mounted: function () {
            this.$emit('update:checked', this.isChecked ? this.trueValue : this.falseValue, this.label),
              this.$emit('input', this.isChecked ? this.trueValue : this.falseValue, this.label);
          },
          methods: {
            isObject: function (e) {
              return null !== e && 'object' === o()(e);
            },
            looseEqual: function (e, t) {
              return e == t || (!(!this.isObject(e) || !this.isObject(t)) && JSON.stringify(e) === JSON.stringify(t));
            },
            changeEvt: function (e) {
              var t = this.isChecked,
                n = e.target.checked;
              this.$emit('input', n ? this.trueValue : this.falseValue, this.label, e),
                t !== n && this.$emit('change', n ? this.trueValue : this.falseValue, this.label, e);
            },
          },
        },
        u = n(0),
        s = Object(u.a)(
          a,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n('label', { class: ['nut-checkbox', 'nut-checkbox-size-' + e.size] }, [
              n('input', {
                class: { 'nut-checkbox-ani': e.animation },
                attrs: { type: 'checkbox', name: e.name, disabled: e.disabled },
                domProps: { checked: e.isChecked, value: e.submittedValue },
                on: { change: e.changeEvt },
              }),
              e._v(' '),
              e.label
                ? n('span', { staticClass: 'nut-checkbox-label' }, [e._v('\n    ' + e._s(e.label) + '\n  ')])
                : n('span', { staticClass: 'nut-checkbox-label' }, [e._t('default')], 2),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = s.exports;
    },
    73: function (e, t, n) {},
  });
});
//# sourceMappingURL=checkboxgroup.js.map
