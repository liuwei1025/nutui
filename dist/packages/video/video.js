/*!
 * @nutui/nutui v2.3.16 - video.js, e52e9db51c8ff5aa6d12, Thu Sep 14 2023 23:19:08 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('video', [], e)
    : 'object' == typeof exports
    ? (exports.video = e())
    : (t.video = e());
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(o) {
      if (e[o]) return e[o].exports;
      var s = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (i.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if ((i.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var s in t)
            i.d(
              o,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
            );
        return o;
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
      i((i.s = 168))
    );
  })({
    0: function (t, e, i) {
      'use strict';
      function o(t, e, i, o, s, n, r, a) {
        var l,
          d = 'function' == typeof t ? t.options : t;
        if (
          (e && ((d.render = e), (d.staticRenderFns = i), (d._compiled = !0)),
          o && (d.functional = !0),
          n && (d._scopeId = 'data-v-' + n),
          r
            ? ((l = function (t) {
                (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  s && s.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(r);
              }),
              (d._ssrRegister = l))
            : s &&
              (l = a
                ? function () {
                    s.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : s),
          l)
        )
          if (d.functional) {
            d._injectStyles = l;
            var u = d.render;
            d.render = function (t, e) {
              return l.call(e), u(t, e);
            };
          } else {
            var c = d.beforeCreate;
            d.beforeCreate = c ? [].concat(c, l) : [l];
          }
        return { exports: t, options: d };
      }
      i.d(e, 'a', function () {
        return o;
      });
    },
    136: function (t, e, i) {},
    168: function (t, e, i) {
      'use strict';
      i.r(e);
      var o = function (t, e, i) {
          if (1 === i) var o = 0;
          else if (2 === i) var s;
          return function () {
            var n = this,
              r = arguments;
            if (1 === i) {
              var a = Date.now();
              a - o > e && (t.apply(n, r), (o = a));
            } else
              2 === i &&
                (s ||
                  (s = setTimeout(function () {
                    (s = null), t.apply(n, r);
                  }, e)));
          };
        },
        s = {
          name: 'nut-video',
          props: {
            sources: {
              type: Array,
              default: function () {
                return [];
              },
            },
            options: {
              type: Object,
              default: function () {
                return {
                  autoplay: !1,
                  volume: 0.5,
                  poster: '',
                  loop: !1,
                  controls: !0,
                  muted: !1,
                  disabled: !1,
                  playsinline: !1,
                  touchPlay: !1,
                  preload: '',
                };
              },
              required: !0,
            },
            model: { type: String, default: '' },
          },
          data: function () {
            return {
              videoElm: null,
              initial: !0,
              showToolbox: !1,
              player: { $player: null, pos: null },
              progressBar: { progressElm: null, pos: null },
              videoSet: { loaded: 0, displayTime: '00:00', totalTime: '00:00', progress: { width: 0, current: 0 } },
              state: { controlShow: !0, vol: 0.5, currentTime: 0, fullScreen: !1, playing: !1, isLoading: !1, isEnd: !1, isError: !1, isMuted: !1 },
              showTouchMask: !1,
            };
          },
          computed: {
            isDisabled: function () {
              return this.options.disabled;
            },
          },
          watch: {
            sources: {
              handler: function (t, e) {
                var i = this;
                t &&
                  e &&
                  t != e &&
                  this.$nextTick(function () {
                    i.videoElm.load();
                  });
              },
              immediate: !0,
            },
            options: {
              handler: function (t) {
                this.state.isMuted = !!t.muted && t.muted;
              },
              immediate: !0,
            },
          },
          mounted: function () {
            this.init();
          },
          methods: {
            init: function () {
              var t = this;
              (this.videoElm = this.$el.getElementsByTagName('video')[0]),
                this.options.autoplay && this.videoElm.play(),
                this.options.touchPlay && (this.showTouchMask = !0),
                this.options.playsinline &&
                  (this.videoElm.setAttribute('playsinline', this.options.playsinline),
                  this.videoElm.setAttribute('webkit-playsinline', this.options.playsinline),
                  this.videoElm.setAttribute('x5-playsinline', this.options.playsinline),
                  this.videoElm.setAttribute('x5-video-player-type', 'h5'),
                  this.videoElm.setAttribute('x5-video-player-fullscreen', !1)),
                this.volumeHandle(),
                this.showToolbox
                  ? this.customerInit()
                  : (this.videoElm.addEventListener('play', function () {
                      (t.state.playing = !0), t.$emit('play', t.videoElm);
                    }),
                    this.videoElm.addEventListener('pause', function () {
                      (t.state.playing = !1), t.$emit('pause', t.videoElm);
                    }),
                    this.videoElm.addEventListener('ended', this.playEnded),
                    this.videoElm.addEventListener('timeupdate', o(this.getPlayTime, 100, 1)));
            },
            customerInit: function () {
              var t = this.$el,
                e = this.$el.getElementsByClassName('progress')[0];
              (this.player.$player = t),
                (this.progressBar.progressElm = e),
                (this.progressBar.pos = e.getBoundingClientRect()),
                (this.videoSet.progress.width = Math.round(e.getBoundingClientRect().width));
            },
            play: function () {
              var t = this;
              if (this.options.autoplay && this.options.disabled) return (this.state.playing = !0), !1;
              if (((this.state.playing = !this.state.playing), this.videoElm))
                if (this.state.playing)
                  try {
                    this.videoElm.play(),
                      this.videoElm.addEventListener('progress', function (e) {
                        t.getLoadTime();
                      }),
                      this.videoElm.addEventListener('timeupdate', o(this.getPlayTime, 100, 1)),
                      this.videoElm.addEventListener('ended', this.playEnded),
                      this.$emit('play', this.videoElm);
                  } catch (t) {
                    this.handleError();
                  }
                else this.videoElm.pause(), this.$emit('pause', this.videoElm);
            },
            volumeHandle: function () {
              this.state.vol = this.options.volume;
            },
            handleMuted: function () {
              (this.state.isMuted = !this.state.isMuted), (this.videoElm.muted = this.state.isMuted);
            },
            playEnded: function () {
              (this.state.playing = !1),
                (this.state.isEnd = !0),
                (this.state.controlBtnShow = !0),
                (this.videoSet.displayTime = '00:00'),
                (this.videoSet.progress.current = 0),
                (this.videoElm.currentTime = 0),
                this.$emit('playend', this.videoElm);
            },
            handleError: function () {
              this.state.isError = !0;
            },
            fullScreen: function () {
              this.state.fullScreen
                ? ((this.state.fullScreen = !1), document.webkitCancelFullScreen())
                : ((this.state.fullScreen = !0), this.videoElm.webkitRequestFullScreen());
            },
            getPlayTime: function () {
              var t = this.videoElm.currentTime / this.videoElm.duration;
              (this.videoSet.progress.current = Math.round(this.videoSet.progress.width * t)),
                (this.videoSet.totalTime = this.timeFormat(this.videoElm.duration)),
                (this.videoSet.displayTime = this.timeFormat(this.videoElm.currentTime));
            },
            timeFormat: function (t) {
              var e = Math.floor(t / 3600);
              e < 10 && (e = '0' + e);
              var i = Math.floor((t % 3600) / 60);
              i < 10 && (i = '0' + i);
              var o = Math.round((t % 3600) % 60);
              o < 10 && (o = '0' + o);
              return 0 != e ? e + ':' + i + ':' + o : i + ':' + o;
            },
            getLoadTime: function () {
              this.videoSet.loaded && (this.videoSet.loaded = (this.videoElm.buffered.end(0) / this.videoElm.duration) * 100);
            },
            getTime: function () {
              var t = this;
              this.videoElm.addEventListener('durationchange', function (t) {}),
                this.videoElm.addEventListener('progress', function (e) {
                  t.videoSet.loaded = 100 * (t.videoElm.buffered.end(0) / t.videoElm.duration - 1);
                }),
                (this.videoSet.len = this.videoElm.duration);
            },
            touchSlidSrart: function (t) {},
            touchSlidMove: function (t) {
              var e = t.targetTouches[0].pageX - this.progressBar.pos.left;
              e <= 0 && (e = 0), e >= this.videoSet.progress.width && (e = this.videoSet.progress.width), (this.videoSet.progress.current = e);
              var i = this.videoSet.progress.current / this.videoSet.progress.width;
              this.videoElm.duration && this.setPlayTime(i, this.videoElm.duration);
            },
            touchSlidEnd: function (t) {
              var e = t.changedTouches[0].pageX - this.progressBar.pos.left;
              this.videoSet.progress.current = e;
              var i = e / this.videoSet.progress.width;
              this.videoElm.duration && this.setPlayTime(i, this.videoElm.duration);
            },
            setPlayTime: function (t, e) {
              this.videoElm.currentTime = Math.floor(t * e);
            },
            retry: function () {
              (this.state.isError = !1), this.init();
            },
          },
          beforeDestroy: function () {},
        },
        n = i(0),
        r = Object(n.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i('div', { ref: 'videocon', staticClass: 'nut-video' }, [
              i(
                'video',
                {
                  ref: 'video',
                  staticClass: 'nut-videoplayer',
                  attrs: {
                    autoplay: t.options.autoplay,
                    loop: t.options.loop,
                    poster: t.options.poster,
                    controls: t.options.controls,
                    preload: t.options.preload,
                  },
                  domProps: { muted: t.options.muted },
                  on: { error: t.handleError },
                },
                t._l(t.sources, function (t) {
                  return i('source', { key: t.src, attrs: { src: t.src, type: t.type } });
                }),
                0
              ),
              t._v(' '),
              t.showToolbox && !t.isDisabled ? i('div', { ref: 'touchMask', staticClass: 'playing-mask', on: { click: t.play } }) : t._e(),
              t._v(' '),
              t.showToolbox && !t.isDisabled
                ? i('div', {
                    directives: [{ name: 'show', rawName: 'v-show', value: !t.state.playing, expression: '!state.playing' }],
                    ref: 'palyBtn',
                    staticClass: 'nut-video-play-btn',
                    on: { click: t.play },
                  })
                : t._e(),
              t._v(' '),
              i(
                'div',
                {
                  directives: [{ name: 'show', rawName: 'v-show', value: t.showToolbox && !t.isDisabled, expression: 'showToolbox && !isDisabled' }],
                  staticClass: 'nut-video-controller',
                  class: { 'show-control': !t.state.playing, 'hide-control': t.state.playing },
                },
                [
                  i('div', { staticClass: 'control-play-btn', on: { click: t.play } }),
                  t._v(' '),
                  i('div', { staticClass: 'current-time' }, [t._v(t._s(t.videoSet.displayTime))]),
                  t._v(' '),
                  i('div', { staticClass: 'progress-container' }, [
                    i('div', { ref: 'progressBar', staticClass: 'progress' }, [
                      i('div', { staticClass: 'buffered', style: { width: t.videoSet.loaded + '%' } }),
                      t._v(' '),
                      i(
                        'div',
                        {
                          staticClass: 'video-ball',
                          style: { transform: 'translate3d(' + t.videoSet.progress.current + 'px, -50%, 0)' },
                          on: {
                            touchmove: function (e) {
                              return e.stopPropagation(), e.preventDefault(), t.touchSlidMove(e);
                            },
                            touchstart: function (e) {
                              return e.stopPropagation(), t.touchSlidSrart(e);
                            },
                            touchend: function (e) {
                              return e.stopPropagation(), t.touchSlidEnd(e);
                            },
                          },
                        },
                        [i('div', { staticClass: 'move-handle' })]
                      ),
                      t._v(' '),
                      i('div', { ref: 'playedBar', staticClass: 'played' }),
                    ]),
                  ]),
                  t._v(' '),
                  i('div', { staticClass: 'duration-time' }, [t._v(t._s(t.videoSet.totalTime))]),
                  t._v(' '),
                  i('div', { staticClass: 'volume', class: { muted: t.state.isMuted }, on: { click: t.handleMuted } }),
                  t._v(' '),
                  i('div', { staticClass: 'fullscreen-icon', on: { click: t.fullScreen } }),
                ]
              ),
              t._v(' '),
              i(
                'div',
                {
                  directives: [{ name: 'show', rawName: 'v-show', value: t.state.isError, expression: 'state.isError' }],
                  staticClass: 'nut-video-error',
                },
                [
                  i('p', { staticClass: 'lose' }, [t._v('视频加载失败')]),
                  t._v(' '),
                  i('p', { staticClass: 'retry', on: { click: t.retry } }, [t._v('点击重试')]),
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
      i(136);
      r.install = function (t) {
        t.component(r.name, r);
      };
      e.default = r;
    },
  });
});
//# sourceMappingURL=video.js.map
