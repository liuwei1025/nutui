/*!
 * @nutui/nutui v2.3.16 - lazyload.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('lazyload', [], e)
    : 'object' == typeof exports
    ? (exports.lazyload = e())
    : (t.lazyload = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if ((r.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var n in t)
            r.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = './'),
      r((r.s = 216))
    );
  })({
    129: function (t, e, r) {},
    216: function (t, e, r) {
      'use strict';
      r.r(e);
      /*!
       * Vue-Lazyload.js v1.3.4
       * (c) 2021 Awe <hilongjw@gmail.com>
       * Released under the MIT License.
       */
      /*!
       * is-primitive <https://github.com/jonschlinkert/is-primitive>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */
      var i = function (t) {
          return null == t || ('function' != typeof t && 'object' != typeof t);
        },
        n = Object.freeze({ __proto__: null, default: i, __moduleExports: i }),
        o = function (t, e) {
          if (null == t) throw new TypeError('expected first argument to be an object.');
          if (void 0 === e || 'undefined' == typeof Symbol) return t;
          if ('function' != typeof Object.getOwnPropertySymbols) return t;
          for (var r = Object.prototype.propertyIsEnumerable, i = Object(t), n = arguments.length, o = 0; ++o < n; )
            for (var s = Object(arguments[o]), a = Object.getOwnPropertySymbols(s), d = 0; d < a.length; d++) {
              var l = a[d];
              r.call(s, l) && (i[l] = s[l]);
            }
          return i;
        },
        s = Object.freeze({ __proto__: null, default: o, __moduleExports: o }),
        a = Object.prototype.toString,
        d = function (t) {
          var e = typeof t;
          return 'undefined' === e
            ? 'undefined'
            : null === t
            ? 'null'
            : !0 === t || !1 === t || t instanceof Boolean
            ? 'boolean'
            : 'string' === e || t instanceof String
            ? 'string'
            : 'number' === e || t instanceof Number
            ? 'number'
            : 'function' === e || t instanceof Function
            ? void 0 !== t.constructor.name && 'Generator' === t.constructor.name.slice(0, 9)
              ? 'generatorfunction'
              : 'function'
            : void 0 !== Array.isArray && Array.isArray(t)
            ? 'array'
            : t instanceof RegExp
            ? 'regexp'
            : t instanceof Date
            ? 'date'
            : '[object RegExp]' === (e = a.call(t))
            ? 'regexp'
            : '[object Date]' === e
            ? 'date'
            : '[object Arguments]' === e
            ? 'arguments'
            : '[object Error]' === e
            ? 'error'
            : '[object Promise]' === e
            ? 'promise'
            : (function (t) {
                return t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
              })(t)
            ? 'buffer'
            : '[object Set]' === e
            ? 'set'
            : '[object WeakSet]' === e
            ? 'weakset'
            : '[object Map]' === e
            ? 'map'
            : '[object WeakMap]' === e
            ? 'weakmap'
            : '[object Symbol]' === e
            ? 'symbol'
            : '[object Map Iterator]' === e
            ? 'mapiterator'
            : '[object Set Iterator]' === e
            ? 'setiterator'
            : '[object String Iterator]' === e
            ? 'stringiterator'
            : '[object Array Iterator]' === e
            ? 'arrayiterator'
            : '[object Int8Array]' === e
            ? 'int8array'
            : '[object Uint8Array]' === e
            ? 'uint8array'
            : '[object Uint8ClampedArray]' === e
            ? 'uint8clampedarray'
            : '[object Int16Array]' === e
            ? 'int16array'
            : '[object Uint16Array]' === e
            ? 'uint16array'
            : '[object Int32Array]' === e
            ? 'int32array'
            : '[object Uint32Array]' === e
            ? 'uint32array'
            : '[object Float32Array]' === e
            ? 'float32array'
            : '[object Float64Array]' === e
            ? 'float64array'
            : 'object';
        };
      var l = Object.freeze({ __proto__: null, default: d, __moduleExports: d }),
        h = (n && i) || n,
        c = (s && o) || s,
        u = (l && d) || l;
      function p(t) {
        t = t || {};
        var e = arguments.length,
          r = 0;
        if (1 === e) return t;
        for (; ++r < e; ) {
          var i = arguments[r];
          h(t) && (t = i), b(i) && f(t, i);
        }
        return t;
      }
      function f(t, e) {
        for (var r in (c(t, e), e))
          if (m(r) && g(e, r)) {
            var i = e[r];
            b(i) ? ('undefined' === u(t[r]) && 'function' === u(i) && (t[r] = i), (t[r] = p(t[r] || {}, i))) : (t[r] = i);
          }
        return t;
      }
      function b(t) {
        return 'object' === u(t) || 'function' === u(t);
      }
      function g(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      function m(t) {
        return '__proto__' !== t && 'constructor' !== t && 'prototype' !== t;
      }
      var v = p;
      const y = 'undefined' != typeof window && null !== window,
        w = (function () {
          if (
            y &&
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype
          )
            return (
              'isIntersecting' in window.IntersectionObserverEntry.prototype ||
                Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }),
              !0
            );
          return !1;
        })();
      const _ = 'event',
        L = 'observer',
        E = (function () {
          if (y) return 'function' == typeof window.CustomEvent ? window.CustomEvent : ((t.prototype = window.Event.prototype), t);
          function t(t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var r = document.createEvent('CustomEvent');
            return r.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), r;
          }
        })();
      function z(t, e) {
        if (!t.length) return;
        const r = t.indexOf(e);
        return r > -1 ? t.splice(r, 1) : void 0;
      }
      function j(t, e) {
        if ('IMG' !== t.tagName || !t.getAttribute('data-srcset')) return;
        let r = t.getAttribute('data-srcset');
        const i = [],
          n = t.parentNode.offsetWidth * e;
        let o, s, a;
        (r = r.trim().split(',')),
          r.map((t) => {
            (t = t.trim()),
              (o = t.lastIndexOf(' ')),
              -1 === o ? ((s = t), (a = 999998)) : ((s = t.substr(0, o)), (a = parseInt(t.substr(o + 1, t.length - o - 2), 10))),
              i.push([a, s]);
          }),
          i.sort(function (t, e) {
            if (t[0] < e[0]) return 1;
            if (t[0] > e[0]) return -1;
            if (t[0] === e[0]) {
              if (-1 !== e[1].indexOf('.webp', e[1].length - 5)) return 1;
              if (-1 !== t[1].indexOf('.webp', t[1].length - 5)) return -1;
            }
            return 0;
          });
        let d,
          l = '';
        for (let t = 0; t < i.length; t++) {
          (d = i[t]), (l = d[1]);
          const e = i[t + 1];
          if (e && e[0] < n) {
            l = d[1];
            break;
          }
          if (!e) {
            l = d[1];
            break;
          }
        }
        return l;
      }
      function A(t, e) {
        let r;
        for (let i = 0, n = t.length; i < n; i++)
          if (e(t[i])) {
            r = t[i];
            break;
          }
        return r;
      }
      const x = (t = 1) => (y && window.devicePixelRatio) || t;
      function O() {
        if (!y) return !1;
        let t = !0;
        try {
          const e = document.createElement('canvas');
          e.getContext && e.getContext('2d') && (t = 0 === e.toDataURL('image/webp').indexOf('data:image/webp'));
        } catch (e) {
          t = !1;
        }
        return t;
      }
      const $ = (function () {
          if (!y) return;
          let t = !1;
          try {
            let e = Object.defineProperty({}, 'passive', {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener('test', null, e);
          } catch (t) {}
          return t;
        })(),
        T = {
          on(t, e, r, i = !1) {
            $ ? t.addEventListener(e, r, { capture: i, passive: !0 }) : t.addEventListener(e, r, i);
          },
          off(t, e, r, i = !1) {
            t.removeEventListener(e, r, i);
          },
        },
        I = (t, e, r) => {
          let i = new Image();
          if (!t || !t.src) {
            const t = new Error('image src is required');
            return r(t);
          }
          (i.src = t.src),
            t.cors && (i.crossOrigin = t.cors),
            (i.onload = function () {
              e({ naturalHeight: i.naturalHeight, naturalWidth: i.naturalWidth, src: i.src });
            }),
            (i.onerror = function (t) {
              r(t);
            });
        },
        S = (t, e) => ('undefined' != typeof getComputedStyle ? getComputedStyle(t, null).getPropertyValue(e) : t.style[e]),
        C = (t) => S(t, 'overflow') + S(t, 'overflow-y') + S(t, 'overflow-x');
      function H() {}
      class Q {
        constructor({ max: t }) {
          (this.options = { max: t || 100 }), (this._caches = []);
        }
        has(t) {
          return this._caches.indexOf(t) > -1;
        }
        add(t) {
          this.has(t) || (this._caches.push(t), this._caches.length > this.options.max && this.free());
        }
        free() {
          this._caches.shift();
        }
      }
      class R {
        constructor({ el: t, src: e, error: r, loading: i, bindType: n, $parent: o, options: s, cors: a, elRenderer: d, imageCache: l }) {
          (this.el = t),
            (this.src = e),
            (this.error = r),
            (this.loading = i),
            (this.bindType = n),
            (this.attempt = 0),
            (this.cors = a),
            (this.naturalHeight = 0),
            (this.naturalWidth = 0),
            (this.options = s),
            (this.rect = null),
            (this.$parent = o),
            (this.elRenderer = d),
            (this._imageCache = l),
            (this.performanceData = { init: Date.now(), loadStart: 0, loadEnd: 0 }),
            this.filter(),
            this.initState(),
            this.render('loading', !1);
        }
        initState() {
          'dataset' in this.el ? (this.el.dataset.src = this.src) : this.el.setAttribute('data-src', this.src),
            (this.state = { loading: !1, error: !1, loaded: !1, rendered: !1 });
        }
        record(t) {
          this.performanceData[t] = Date.now();
        }
        update({ src: t, loading: e, error: r }) {
          const i = this.src;
          (this.src = t), (this.loading = e), (this.error = r), this.filter(), i !== this.src && ((this.attempt = 0), this.initState());
        }
        getRect() {
          this.rect = this.el.getBoundingClientRect();
        }
        checkInView() {
          return (
            this.getRect(),
            this.rect.top < window.innerHeight * this.options.preLoad &&
              this.rect.bottom > this.options.preLoadTop &&
              this.rect.left < window.innerWidth * this.options.preLoad &&
              this.rect.right > 0
          );
        }
        filter() {
          (function (t) {
            if (!(t instanceof Object)) return [];
            if (Object.keys) return Object.keys(t);
            {
              let e = [];
              for (let r in t) t.hasOwnProperty(r) && e.push(r);
              return e;
            }
          })(this.options.filter).map((t) => {
            this.options.filter[t](this, this.options);
          });
        }
        renderLoading(t) {
          (this.state.loading = !0),
            I(
              { src: this.loading, cors: this.cors },
              (e) => {
                this.render('loading', !1), (this.state.loading = !1), t();
              },
              () => {
                t(),
                  (this.state.loading = !1),
                  this.options.silent || console.warn(`VueLazyload log: load failed with loading image(${this.loading})`);
              }
            );
        }
        load(t = H) {
          return this.attempt > this.options.attempt - 1 && this.state.error
            ? (this.options.silent || console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`), void t())
            : this.state.rendered && this.state.loaded
            ? void 0
            : this._imageCache.has(this.src)
            ? ((this.state.loaded = !0), this.render('loaded', !0), (this.state.rendered = !0), t())
            : void this.renderLoading(() => {
                this.attempt++,
                  this.options.adapter.beforeLoad && this.options.adapter.beforeLoad(this, this.options),
                  this.record('loadStart'),
                  I(
                    { src: this.src, cors: this.cors },
                    (e) => {
                      (this.naturalHeight = e.naturalHeight),
                        (this.naturalWidth = e.naturalWidth),
                        (this.state.loaded = !0),
                        (this.state.error = !1),
                        this.record('loadEnd'),
                        this.render('loaded', !1),
                        (this.state.rendered = !0),
                        this._imageCache.add(this.src),
                        t();
                    },
                    (t) => {
                      !this.options.silent && console.error(t), (this.state.error = !0), (this.state.loaded = !1), this.render('error', !1);
                    }
                  );
              });
        }
        render(t, e) {
          this.elRenderer(this, t, e);
        }
        performance() {
          let t = 'loading',
            e = 0;
          return (
            this.state.loaded && ((t = 'loaded'), (e = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3)),
            this.state.error && (t = 'error'),
            { src: this.src, state: t, time: e }
          );
        }
        $destroy() {
          (this.el = null), (this.src = null), (this.error = null), (this.loading = null), (this.bindType = null), (this.attempt = 0);
        }
      }
      const k = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        B = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'],
        P = { rootMargin: '0px', threshold: 0 };
      function W(t) {
        return class {
          constructor({
            preLoad: t,
            error: e,
            throttleWait: r,
            preLoadTop: i,
            dispatchEvent: n,
            loading: o,
            attempt: s,
            silent: a = !0,
            scale: d,
            listenEvents: l,
            hasbind: h,
            filter: c,
            adapter: u,
            observer: p,
            observerOptions: f,
          }) {
            (this.version = '"1.3.4"'),
              (this.mode = _),
              (this.ListenerQueue = []),
              (this.TargetIndex = 0),
              (this.TargetQueue = []),
              (this.options = {
                silent: a,
                dispatchEvent: !!n,
                throttleWait: r || 200,
                preLoad: t || 1.3,
                preLoadTop: i || 0,
                error: e || k,
                loading: o || k,
                attempt: s || 3,
                scale: d || x(d),
                ListenEvents: l || B,
                hasbind: !1,
                supportWebp: O(),
                filter: c || {},
                adapter: u || {},
                observer: !!p,
                observerOptions: f || P,
              }),
              this._initEvent(),
              (this._imageCache = new Q({ max: 200 })),
              (this.lazyLoadHandler = (function (t, e) {
                let r = null,
                  i = null,
                  n = 0,
                  o = !1;
                return function () {
                  if (((o = !0), r)) return;
                  let s = Date.now() - n,
                    a = this,
                    d = arguments,
                    l = function () {
                      (n = Date.now()), (r = !1), t.apply(a, d);
                    };
                  s >= e ? l() : (r = setTimeout(l, e)), o && (clearTimeout(i), (i = setTimeout(l, 2 * e)));
                };
              })(this._lazyLoadHandler.bind(this), this.options.throttleWait)),
              this.setMode(this.options.observer ? L : _);
          }
          config(t = {}) {
            v(this.options, t);
          }
          performance() {
            let t = [];
            return (
              this.ListenerQueue.map((e) => {
                t.push(e.performance());
              }),
              t
            );
          }
          addLazyBox(t) {
            this.ListenerQueue.push(t),
              y &&
                (this._addListenerTarget(window),
                this._observer && this._observer.observe(t.el),
                t.$el && t.$el.parentNode && this._addListenerTarget(t.$el.parentNode));
          }
          add(e, r, i) {
            if (
              (function (t, e) {
                let r = !1;
                for (let i = 0, n = t.length; i < n; i++)
                  if (e(t[i])) {
                    r = !0;
                    break;
                  }
                return r;
              })(this.ListenerQueue, (t) => t.el === e)
            )
              return this.update(e, r), t.nextTick(this.lazyLoadHandler);
            let { src: n, loading: o, error: s, cors: a } = this._valueFormatter(r.value);
            t.nextTick(() => {
              (n = j(e, this.options.scale) || n), this._observer && this._observer.observe(e);
              const d = Object.keys(r.modifiers)[0];
              let l;
              d && ((l = i.context.$refs[d]), (l = l ? l.$el || l : document.getElementById(d))),
                l ||
                  (l = ((t) => {
                    if (!y) return;
                    if (!(t instanceof HTMLElement)) return window;
                    let e = t;
                    for (; e && e !== document.body && e !== document.documentElement && e.parentNode; ) {
                      if (/(scroll|auto)/.test(C(e))) return e;
                      e = e.parentNode;
                    }
                    return window;
                  })(e));
              const h = new R({
                bindType: r.arg,
                $parent: l,
                el: e,
                loading: o,
                error: s,
                src: n,
                cors: a,
                elRenderer: this._elRenderer.bind(this),
                options: this.options,
                imageCache: this._imageCache,
              });
              this.ListenerQueue.push(h),
                y && (this._addListenerTarget(window), this._addListenerTarget(l)),
                this.lazyLoadHandler(),
                t.nextTick(() => this.lazyLoadHandler());
            });
          }
          update(e, r, i) {
            let { src: n, loading: o, error: s } = this._valueFormatter(r.value);
            n = j(e, this.options.scale) || n;
            const a = A(this.ListenerQueue, (t) => t.el === e);
            a ? a.update({ src: n, loading: o, error: s }) : this.add(e, r, i),
              this._observer && (this._observer.unobserve(e), this._observer.observe(e)),
              this.lazyLoadHandler(),
              t.nextTick(() => this.lazyLoadHandler());
          }
          remove(t) {
            if (!t) return;
            this._observer && this._observer.unobserve(t);
            const e = A(this.ListenerQueue, (e) => e.el === t);
            e && (this._removeListenerTarget(e.$parent), this._removeListenerTarget(window), z(this.ListenerQueue, e), e.$destroy());
          }
          removeComponent(t) {
            t &&
              (z(this.ListenerQueue, t),
              this._observer && this._observer.unobserve(t.el),
              t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode),
              this._removeListenerTarget(window));
          }
          setMode(t) {
            w || t !== L || (t = _),
              (this.mode = t),
              t === _
                ? (this._observer &&
                    (this.ListenerQueue.forEach((t) => {
                      this._observer.unobserve(t.el);
                    }),
                    (this._observer = null)),
                  this.TargetQueue.forEach((t) => {
                    this._initListen(t.el, !0);
                  }))
                : (this.TargetQueue.forEach((t) => {
                    this._initListen(t.el, !1);
                  }),
                  this._initIntersectionObserver());
          }
          _addListenerTarget(t) {
            if (!t) return;
            let e = A(this.TargetQueue, (e) => e.el === t);
            return (
              e
                ? e.childrenCount++
                : ((e = { el: t, id: ++this.TargetIndex, childrenCount: 1, listened: !0 }),
                  this.mode === _ && this._initListen(e.el, !0),
                  this.TargetQueue.push(e)),
              this.TargetIndex
            );
          }
          _removeListenerTarget(t) {
            this.TargetQueue.forEach((e, r) => {
              e.el === t && (e.childrenCount--, e.childrenCount || (this._initListen(e.el, !1), this.TargetQueue.splice(r, 1), (e = null)));
            });
          }
          _initListen(t, e) {
            this.options.ListenEvents.forEach((r) => T[e ? 'on' : 'off'](t, r, this.lazyLoadHandler));
          }
          _initEvent() {
            (this.Event = { listeners: { loading: [], loaded: [], error: [] } }),
              (this.$on = (t, e) => {
                this.Event.listeners[t] || (this.Event.listeners[t] = []), this.Event.listeners[t].push(e);
              }),
              (this.$once = (t, e) => {
                const r = this;
                this.$on(t, function i() {
                  r.$off(t, i), e.apply(r, arguments);
                });
              }),
              (this.$off = (t, e) => {
                if (e) z(this.Event.listeners[t], e);
                else {
                  if (!this.Event.listeners[t]) return;
                  this.Event.listeners[t].length = 0;
                }
              }),
              (this.$emit = (t, e, r) => {
                this.Event.listeners[t] && this.Event.listeners[t].forEach((t) => t(e, r));
              });
          }
          _lazyLoadHandler() {
            const t = [];
            this.ListenerQueue.forEach((e, r) => {
              (e.el && e.el.parentNode) || t.push(e);
              e.checkInView() && e.load();
            }),
              t.forEach((t) => {
                z(this.ListenerQueue, t), t.$destroy();
              });
          }
          _initIntersectionObserver() {
            w &&
              ((this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions)),
              this.ListenerQueue.length &&
                this.ListenerQueue.forEach((t) => {
                  this._observer.observe(t.el);
                }));
          }
          _observerHandler(t, e) {
            t.forEach((t) => {
              t.isIntersecting &&
                this.ListenerQueue.forEach((e) => {
                  if (e.el === t.target) {
                    if (e.state.loaded) return this._observer.unobserve(e.el);
                    e.load();
                  }
                });
            });
          }
          _elRenderer(t, e, r) {
            if (!t.el) return;
            const { el: i, bindType: n } = t;
            let o;
            switch (e) {
              case 'loading':
                o = t.loading;
                break;
              case 'error':
                o = t.error;
                break;
              default:
                o = t.src;
            }
            if (
              (n ? (i.style[n] = 'url("' + o + '")') : i.getAttribute('src') !== o && i.setAttribute('src', o),
              i.setAttribute('lazy', e),
              this.$emit(e, t, r),
              this.options.adapter[e] && this.options.adapter[e](t, this.options),
              this.options.dispatchEvent)
            ) {
              const r = new E(e, { detail: t });
              i.dispatchEvent(r);
            }
          }
          _valueFormatter(t) {
            let e = t,
              r = this.options.loading,
              i = this.options.error;
            var n;
            return (
              null !== (n = t) &&
                'object' == typeof n &&
                (t.src || this.options.silent || console.error('Vue Lazyload warning: miss src with ' + t),
                (e = t.src),
                (r = t.loading || this.options.loading),
                (i = t.error || this.options.error)),
              { src: e, loading: r, error: i }
            );
          }
        };
      }
      W.install = (t, e = {}) => {
        const r = new (W(t))(e);
        '2' === t.version.split('.')[0]
          ? t.directive('lazy', {
              bind: r.add.bind(r),
              update: r.update.bind(r),
              componentUpdated: r.lazyLoadHandler.bind(r),
              unbind: r.remove.bind(r),
            })
          : t.directive('lazy', {
              bind: r.lazyLoadHandler.bind(r),
              update(t, e) {
                v(this.vm.$refs, this.vm.$els),
                  r.add(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: t, oldValue: e }, { context: this.vm });
              },
              unbind() {
                r.remove(this.el);
              },
            });
      };
      const D = (t) => ({
        props: { tag: { type: String, default: 'div' } },
        render(t) {
          return t(this.tag, null, this.show ? this.$slots.default : null);
        },
        data: () => ({ el: null, state: { loaded: !1 }, rect: {}, show: !1 }),
        mounted() {
          (this.el = this.$el), t.addLazyBox(this), t.lazyLoadHandler();
        },
        beforeDestroy() {
          t.removeComponent(this);
        },
        methods: {
          getRect() {
            this.rect = this.$el.getBoundingClientRect();
          },
          checkInView() {
            return (
              this.getRect(),
              y &&
                this.rect.top < window.innerHeight * t.options.preLoad &&
                this.rect.bottom > 0 &&
                this.rect.left < window.innerWidth * t.options.preLoad &&
                this.rect.right > 0
            );
          },
          load() {
            (this.show = !0), (this.state.loaded = !0), this.$emit('show', this);
          },
          destroy() {
            return this.$destroy;
          },
        },
      });
      D.install = function (t, e = {}) {
        const r = new (W(t))(e);
        t.component('lazy-component', D(r));
      };
      class M {
        constructor({ lazy: t }) {
          (this.lazy = t), (t.lazyContainerMananger = this), (this._queue = []);
        }
        bind(t, e, r) {
          const i = new N({ el: t, binding: e, vnode: r, lazy: this.lazy });
          this._queue.push(i);
        }
        update(t, e, r) {
          const i = A(this._queue, (e) => e.el === t);
          i && i.update({ el: t, binding: e, vnode: r });
        }
        unbind(t, e, r) {
          const i = A(this._queue, (e) => e.el === t);
          i && (i.clear(), z(this._queue, i));
        }
      }
      const V = { selector: 'img' };
      class N {
        constructor({ el: t, binding: e, vnode: r, lazy: i }) {
          (this.el = null),
            (this.vnode = r),
            (this.binding = e),
            (this.options = {}),
            (this.lazy = i),
            (this._queue = []),
            this.update({ el: t, binding: e });
        }
        update({ el: t, binding: e }) {
          (this.el = t), (this.options = v({}, V, e.value));
          this.getImgs().forEach((t) => {
            this.lazy.add(
              t,
              v({}, this.binding, {
                value: {
                  src: 'dataset' in t ? t.dataset.src : t.getAttribute('data-src'),
                  error: ('dataset' in t ? t.dataset.error : t.getAttribute('data-error')) || this.options.error,
                  loading: ('dataset' in t ? t.dataset.loading : t.getAttribute('data-loading')) || this.options.loading,
                },
              }),
              this.vnode
            );
          });
        }
        getImgs() {
          return (function (t) {
            let e = t.length;
            const r = [];
            for (let i = 0; i < e; i++) r.push(t[i]);
            return r;
          })(this.el.querySelectorAll(this.options.selector));
        }
        clear() {
          this.getImgs().forEach((t) => this.lazy.remove(t)), (this.vnode = null), (this.binding = null), (this.lazy = null);
        }
      }
      N.install = (t, e = {}) => {
        const r = new (W(t))(e),
          i = new N({ lazy: r });
        '2' === t.version.split('.')[0]
          ? t.directive('lazy-container', { bind: i.bind.bind(i), componentUpdated: i.update.bind(i), unbind: i.unbind.bind(i) })
          : t.directive('lazy-container', {
              update(t, e) {
                i.update(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: t, oldValue: e }, { context: this.vm });
              },
              unbind() {
                i.unbind(this.el);
              },
            });
      };
      const U = (t) => ({
        props: { src: [String, Object], tag: { type: String, default: 'img' } },
        render(t) {
          return t(this.tag, { attrs: { src: this.renderSrc } }, this.$slots.default);
        },
        data: () => ({
          el: null,
          options: { src: '', error: '', loading: '', attempt: t.options.attempt },
          state: { loaded: !1, error: !1, attempt: 0 },
          rect: {},
          renderSrc: '',
        }),
        watch: {
          src() {
            this.init(), t.addLazyBox(this), t.lazyLoadHandler();
          },
        },
        created() {
          this.init(), (this.renderSrc = this.options.loading);
        },
        mounted() {
          (this.el = this.$el), t.addLazyBox(this), t.lazyLoadHandler();
        },
        beforeDestroy() {
          t.removeComponent(this);
        },
        methods: {
          init() {
            const { src: e, loading: r, error: i } = t._valueFormatter(this.src);
            (this.state.loaded = !1),
              (this.options.src = e),
              (this.options.error = i),
              (this.options.loading = r),
              (this.renderSrc = this.options.loading);
          },
          getRect() {
            this.rect = this.$el.getBoundingClientRect();
          },
          checkInView() {
            return (
              this.getRect(),
              y &&
                this.rect.top < window.innerHeight * t.options.preLoad &&
                this.rect.bottom > 0 &&
                this.rect.left < window.innerWidth * t.options.preLoad &&
                this.rect.right > 0
            );
          },
          load(e = H) {
            if (this.state.attempt > this.options.attempt - 1 && this.state.error)
              return (
                t.options.silent || console.log(`VueLazyload log: ${this.options.src} tried too more than ${this.options.attempt} times`), void e()
              );
            const r = this.options.src;
            I(
              { src: r },
              ({ src: t }) => {
                (this.renderSrc = t), (this.state.loaded = !0);
              },
              (t) => {
                this.state.attempt++, (this.renderSrc = this.options.error), (this.state.error = !0);
              }
            );
          },
        },
      });
      U.install = (t, e = {}) => {
        const r = new (W(t))(e);
        t.component('lazy-image', U(r));
      };
      var q = {
        install(t, e = {}) {
          const r = new (W(t))(e),
            i = new M({ lazy: r }),
            n = '2' === t.version.split('.')[0];
          (t.prototype.$Lazyload = r),
            e.lazyComponent && t.component('lazy-component', D(r)),
            e.lazyImage && t.component('lazy-image', U(r)),
            n
              ? (t.directive('lazy', {
                  bind: r.add.bind(r),
                  update: r.update.bind(r),
                  componentUpdated: r.lazyLoadHandler.bind(r),
                  unbind: r.remove.bind(r),
                }),
                t.directive('lazy-container', { bind: i.bind.bind(i), componentUpdated: i.update.bind(i), unbind: i.unbind.bind(i) }))
              : (t.directive('lazy', {
                  bind: r.lazyLoadHandler.bind(r),
                  update(t, e) {
                    v(this.vm.$refs, this.vm.$els),
                      r.add(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: t, oldValue: e }, { context: this.vm });
                  },
                  unbind() {
                    r.remove(this.el);
                  },
                }),
                t.directive('lazy-container', {
                  update(t, e) {
                    i.update(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: t, oldValue: e }, { context: this.vm });
                  },
                  unbind() {
                    i.unbind(this.el);
                  },
                }));
        },
      };
      r(129);
      q.name = 'vue-lazyload';
      e.default = q;
    },
  });
});
//# sourceMappingURL=lazyload.js.map
