/*!
 * @nutui/nutui v2.3.15 - nutui.js, 65d3c3236a280bade6a4, Thu Sep 14 2023 13:58:10 GMT+0800 (China Standard Time)
 * (c) 2017-2020 JDC
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require('vue'));
  else if (typeof define === 'function' && define.amd) define('nutui', ['vue'], factory);
  else if (typeof exports === 'object') exports['nutui'] = factory(require('vue'));
  else root['nutui'] = factory(root['Vue']);
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__3__) {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = './';
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 130));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        var arrayWithoutHoles = __webpack_require__(120);
        var iterableToArray = __webpack_require__(121);
        var unsupportedIterableToArray = __webpack_require__(27);
        var nonIterableSpread = __webpack_require__(122);
        function _toConsumableArray(arr) {
          return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
        }
        (module.exports = _toConsumableArray), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 1 */
      /***/ function (module, exports, __webpack_require__) {
        var toPropertyKey = __webpack_require__(15);
        function _defineProperty(obj, key, value) {
          key = toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        (module.exports = _defineProperty), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 2 */
      /***/ function (module, exports) {
        function _extends() {
          (module.exports = _extends =
            Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }
                  return target;
                }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports);
          return _extends.apply(this, arguments);
        }
        (module.exports = _extends), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 3 */
      /***/ function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

        /***/
      },
      /* 4 */
      /***/ function (module, exports) {
        function _typeof(obj) {
          '@babel/helpers - typeof';

          return (
            ((module.exports = _typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                  }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports)),
            _typeof(obj)
          );
        }
        (module.exports = _typeof), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 5 */
      /***/ function (module, exports, __webpack_require__) {
        var arrayWithHoles = __webpack_require__(124);
        var iterableToArrayLimit = __webpack_require__(125);
        var unsupportedIterableToArray = __webpack_require__(27);
        var nonIterableRest = __webpack_require__(126);
        function _slicedToArray(arr, i) {
          return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
        }
        (module.exports = _slicedToArray), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 6 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 7 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 8 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 9 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 10 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 11 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 12 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 13 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 14 */
      /***/ function (module, exports, __webpack_require__) {
        // TODO(Babel 8): Remove this file.

        var runtime = __webpack_require__(127)();
        module.exports = runtime;

        // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          if (typeof globalThis === 'object') {
            globalThis.regeneratorRuntime = runtime;
          } else {
            Function('r', 'regeneratorRuntime = r')(runtime);
          }
        }

        /***/
      },
      /* 15 */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(4)['default'];
        var toPrimitive = __webpack_require__(94);
        function _toPropertyKey(arg) {
          var key = toPrimitive(arg, 'string');
          return _typeof(key) === 'symbol' ? key : String(key);
        }
        (module.exports = _toPropertyKey), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 16 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->\n    <title>icon_address_black</title>\n    <desc>Created with Sketch.</desc>\n    <g id="搜索流程" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="3_搜索流程-copy" transform="translate(-137.000000, -90.000000)" fill="#333333">\n            <g id="icon_address" transform="translate(137.000000, 90.000000)">\n                <g id="分组">\n                    <path d="M8.84815,8.7378 C8.06565,9.3058 7.28265,9.8733 6.50015,10.4408 C5.71715,9.8733 4.93465,9.3058 4.15165,8.7378 C2.74865,7.7203 2.16065,5.9148 2.69565,4.2658 C3.23065,2.6168 4.76665,1.5003 6.50015,1.5003 C8.23365,1.5003 9.76965,2.6168 10.30465,4.2658 C10.83915,5.9148 10.25165,7.7203 8.84815,8.7378 M11.25565,3.9568 C10.58715,1.8958 8.66665,0.4998 6.50015,0.4998 C4.33315,0.4998 2.41315,1.8958 1.74415,3.9568 C1.07565,6.0183 1.81065,8.2753 3.56465,9.5478 C4.39665,10.1508 5.22815,10.7538 6.05965,11.3568 C6.32215,11.5478 6.67765,11.5478 6.94065,11.3568 C7.77215,10.7538 8.60365,10.1508 9.43515,9.5478 C11.18915,8.2753 11.92415,6.0183 11.25565,3.9568" id="Fill-2"></path>\n                    <path d="M7.9143,4.08595 C7.7188,3.89045 7.4023,3.89045 7.2068,4.08595 C7.0118,4.28145 7.0118,4.59745 7.2068,4.79295 C7.8373,5.42295 7.3908,6.49995 6.4998,6.49995 C5.6093,6.49995 5.1628,5.42295 5.7928,4.79295 C5.9878,4.59745 5.9878,4.28145 5.7928,4.08595 C5.5978,3.89045 5.2808,3.89045 5.0858,4.08595 C3.8258,5.34595 4.7183,7.49995 6.4998,7.49995 C8.2818,7.49995 9.1743,5.34595 7.9143,4.08595" id="Fill-4"></path>\n                    <path d="M8,12 L5,12 C4.724,12 4.5,12.2235 4.5,12.5 C4.5,12.7765 4.724,13 5,13 L8,13 C8.276,13 8.5,12.7765 8.5,12.5 C8.5,12.2235 8.276,12 8,12" id="Fill-6"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 17 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <!-- Generator: Sketch 59 (86127) - https://sketch.com -->\n    <title>back_original 2</title>\n    <desc>Created with Sketch.</desc>\n    <g id="地址选择" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="地址选择1" transform="translate(-18.000000, -284.000000)" fill="#333333">\n            <g id="back_original-2" transform="translate(18.000000, 284.000000)">\n                <path d="M4,10.0009322 C3.99859741,10.5049575 4.39578918,10.8616307 4.4994895,10.9579412 L12.2671305,18.7441237 C12.6723966,19.0981592 13.322967,19.083897 13.7141881,18.7069986 C14.1081366,18.3274726 14.0918341,17.7356488 13.6838673,17.379254 L6.23965094,10.0009322 L13.6838673,2.62261026 C14.0891334,2.26857481 14.1054091,1.67176406 13.7141881,1.2948657 C13.3202395,0.915339684 12.6750973,0.901345866 12.2671305,1.25774058 L4.4994895,9.03838594 C4.40147558,9.15875944 4.00141004,9.49690678 4,10.0009322 Z" id="back_original"></path>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 18 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M30 15c0 8.285-6.716 15-15 15-8.284 0-15-6.715-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15zM10.56 8.44a1.501 1.501 0 0 0-2.12 2.121l4.439 4.44-4.44 4.438a1.5 1.5 0 0 0 2.121 2.122l4.44-4.44 4.44 4.44a1.501 1.501 0 0 0 2.12-2.122l-11-11zm11 2.12a1.5 1.5 0 0 0-2.12-2.121l-2 2a1.5 1.5 0 0 0 2.12 2.122l2-2z" fill-rule="evenodd" fill-opacity=".6"/></svg>';

        /***/
      },
      /* 19 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->\n    <title>Fill 3</title>\n    <desc>Created with Sketch.</desc>\n    <g id="地址选择" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="地址选择-已有地址" transform="translate(-18.000000, -384.000000)" fill="#F2270C">\n            <g id="Fill-3" transform="translate(18.000000, 384.000000)">\n                <path d="M3.8235773,10.236 C2.6030773,9.113 1.3830773,7.9905 0.162577302,6.868 C-0.172922698,6.5595 0.0455773022,6 0.501077302,6 L1.0030773,6 C1.7555773,6 2.4800773,6.2825 3.0335773,6.792 C3.5180773,7.2375 4.0025773,7.6835 4.4870773,8.129 C5.9855773,6.6965 7.4835773,5.264 8.9820773,3.8315 C9.5400773,3.298 10.2825773,3 11.0545773,3 L11.4990773,3 C11.9500773,3 12.1705773,3.5495 11.8445773,3.861 C9.6265773,5.982 7.4090773,8.102 5.1910773,10.223 C4.7860773,10.6105 4.1415773,10.589 3.7625773,10.175 C3.7620773,10.1765 3.7615773,10.1775 3.7610773,10.1785" id="Fill-2"></path>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 20 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4"><rect x="14" y="20" width="16" height="4" rx="2" transform="translate(-14 -20)" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 21 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd"><rect y="6" width="16" height="4" rx="2"/><rect transform="rotate(90 8 8)" y="6" width="16" height="4" rx="2"/></g></svg>';

        /***/
      },
      /* 22 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->\n    <title>Fill 3</title>\n    <desc>Created with Sketch.</desc>\n    <g id="分类" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="4-排序状态" transform="translate(-18.000000, -296.000000)" fill="#F2270C">\n            <g id="分组-2-copy" transform="translate(0.000000, 222.000000)">\n                <g id="Fill-3" transform="translate(18.000000, 74.000000)">\n                    <path d="M3.8235773,10.236 C2.6030773,9.113 1.3830773,7.9905 0.162577302,6.868 C-0.172922698,6.5595 0.0455773022,6 0.501077302,6 L1.0030773,6 C1.7555773,6 2.4800773,6.2825 3.0335773,6.792 C3.5180773,7.2375 4.0025773,7.6835 4.4870773,8.129 C5.9855773,6.6965 7.4835773,5.264 8.9820773,3.8315 C9.5400773,3.298 10.2825773,3 11.0545773,3 L11.4990773,3 C11.9500773,3 12.1705773,3.5495 11.8445773,3.861 C9.6265773,5.982 7.4090773,8.102 5.1910773,10.223 C4.7860773,10.6105 4.1415773,10.589 3.7625773,10.175 C3.7620773,10.1765 3.7615773,10.1775 3.7610773,10.1785" id="Fill-2"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 23 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 24 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 25 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 26 */
      /***/ function (module, exports) {
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        (module.exports = _arrayLikeToArray), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 27 */
      /***/ function (module, exports, __webpack_require__) {
        var arrayLikeToArray = __webpack_require__(26);
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
        }
        (module.exports = _unsupportedIterableToArray), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 28 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 29 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 30 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 31 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 32 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 33 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 34 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 35 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 36 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 37 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 38 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 39 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 40 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 41 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 42 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 43 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 44 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 45 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 46 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 47 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 48 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 49 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 50 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 51 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 52 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 53 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 54 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 55 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 56 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 57 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 58 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 59 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 60 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 61 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 62 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 63 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 64 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 65 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 66 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 67 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 68 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 69 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 70 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 71 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 72 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 73 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 74 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 75 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 76 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 77 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 78 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 79 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 80 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 81 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 82 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 83 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 84 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 85 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 86 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 87 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 88 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 89 */
      /***/ function (module) {
        module.exports = JSON.parse('{"a":"2.3.15"}');

        /***/
      },
      /* 90 */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"a":[{"name":"Cell","version":"1.0.0","sort":"4","chnName":"列表项","type":"component","showDemo":true,"desc":"列表项，可组合成列表","author":"Frans、玉磊"},{"name":"Dialog","version":"1.0.0","sort":"2","chnName":"对话框","type":"method","showDemo":true,"desc":"模态弹窗，支持按钮交互，支持图片弹窗。","star":5,"author":"Frans、肖晓"},{"name":"Icon","version":"1.0.0","sort":"5","chnName":"图标","type":"component","showDemo":true,"desc":"网页小图标。","author":"Frans"},{"version":"1.0.0","name":"Toast","sort":"2","chnName":"吐司","desc":"轻提示。","type":"method","showDemo":true,"star":4,"author":"Frans、张宇"},{"version":"1.0.0","name":"ActionSheet","sort":"2","chnName":"动作面板","desc":"从底部弹出的动作菜单面板。","type":"component","showDemo":true,"star":5,"author":"iris"},{"version":"1.0.0","name":"Tab","sort":"3","chnName":"选项卡","desc":"常用于平级区域大块内容的的收纳和展现。","type":"component","showDemo":true,"star":3,"author":"甄玉磊"},{"version":"1.0.0","name":"TabPanel","sort":"3","chnName":"选项卡","desc":"标签栏 选项卡组件","type":"component","showDemo":false,"author":"甄玉磊"},{"version":"1.0.0","name":"TabBar","sort":"3","chnName":"标签栏","desc":"用于不同模块以之间的切换","type":"component","showDemo":true,"star":3,"author":"甄玉磊"},{"version":"1.0.0","name":"Calendar","sort":"1","chnName":"日历","desc":"日历","type":"component","showDemo":true,"star":5,"author":"iris"},{"version":"1.0.0","name":"DatePicker","sort":"1","chnName":"日期选择","desc":"日期选择","type":"component","showDemo":true,"star":5,"author":"iris"},{"version":"1.0.0","name":"NavBar","sort":"3","chnName":"导航栏","desc":"移动端头部导航栏","type":"component","showDemo":true,"author":"lishaoqi"},{"version":"1.0.0","name":"NoticeBar","sort":"3","chnName":"公告栏","desc":"移动端公告栏","type":"component","showDemo":true,"author":"wangyue"},{"name":"Switch","version":"1.0.0","sort":"1","chnName":"开关","type":"component","showDemo":true,"desc":"滑动开关，通过点击使按钮左右滑动，同时触发对应的开关状态","author":"Frans"},{"version":"1.0.0","name":"Slider","sort":"1","chnName":"滑块","desc":"滑动输入器，用于在数值区间/自定义区间内进行选择。","type":"component","showDemo":true,"star":4,"author":"Frans"},{"version":"1.0.0","name":"Range","sort":"1","chnName":"区间选择器","desc":"区间选择器组件","type":"component","showDemo":true,"star":4,"author":"famanoder"},{"version":"1.0.0","name":"Picker","sort":"1","chnName":"拾取器","desc":"提供多个选项集合供用户选择其中一项。","type":"component","showDemo":true,"star":5,"author":"iris"},{"version":"1.0.0","name":"Progress","sort":"2","chnName":"进度条","desc":"展示操作或任务的当前进度，比如上传文件。","type":"component","showDemo":true,"author":"张毓飞"},{"version":"1.0.0","name":"Price","sort":"0","chnName":"商品价格","desc":"商品价格组件，支持小数点前后应用不同样式、千位分隔、人民币符号等功能","type":"component","showDemo":true,"author":"liaoyanli5"},{"version":"1.0.0","name":"Flex","sort":"4","chnName":"Flex布局","desc":"Flex布局速简便地创建布局","type":"component","showDemo":true,"author":"秦伟伟,苏子刚"},{"version":"1.0.0","name":"Col","sort":"4","chnName":"Flex布局","desc":"Flex布局速简便地创建布局","type":"component","showDemo":false,"author":"秦伟伟,苏子刚"},{"version":"1.0.0","name":"Row","sort":"4","chnName":"Flex布局","desc":"Flex布局速简便地创建布局","type":"component","showDemo":false,"author":"秦伟伟,苏子刚"},{"version":"1.0.0","name":"Steps","sort":"0","chnName":"步骤条","desc":"拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。","type":"component","showDemo":true,"author":"宋其斌"},{"version":"1.0.0","name":"Button","sort":"5","chnName":"按钮","desc":"各式各样的按钮","type":"component","showDemo":true,"author":"杨磊"},{"version":"1.0.0","name":"Badge","sort":"0","chnName":"徽标","desc":"出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息","type":"component","showDemo":true,"author":"杨磊"},{"version":"1.0.0","name":"Rate","sort":"1","chnName":"评分","desc":"用于快速的评级操作，或对评价进行展示。","type":"component","showDemo":true,"star":4,"author":"永无止晋"},{"version":"1.0.1","name":"Swiper","chnName":"滑动切换","sort":"0","desc":"常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。","type":"component","showDemo":true,"star":5,"author":"wangnan31"},{"version":"1.0.0","name":"Menu","sort":"3","chnName":"菜单","desc":"菜单","type":"component","showDemo":true,"author":"苏子刚"},{"version":"1.0.0","name":"Stepper","chnName":"步进器","desc":"通过点击按钮控制数字加减","type":"component","sort":"1","showDemo":true,"star":3,"author":"famanoder"},{"version":"1.0.0","name":"ButtonGroup","chnName":"按钮组","desc":"用于页面底部的按钮组","type":"component","sort":"5","showDemo":true,"author":"杨磊"},{"version":"1.0.0","name":"SearchBar","chnName":"搜索栏","desc":"搜索栏","type":"component","sort":"1","showDemo":true,"author":"lemon"},{"version":"1.0.0","name":"ImagePicker","sort":"1","chnName":"图片选择器","desc":"图片选择器","type":"component","showDemo":true,"author":"苏子刚"},{"name":"Radio","version":"1.0.0","sort":"1","chnName":"单选按钮","type":"component","showDemo":true,"desc":"单选按钮，可组合成单选按钮组","author":"Frans"},{"name":"RadioGroup","version":"1.0.0","sort":"1","chnName":"单选按钮组","type":"component","showDemo":false,"desc":"单选按钮组","author":"Frans"},{"version":"1.0.0","name":"CheckBox","sort":"1","chnName":"复选按钮","desc":"复选多个选项","type":"component","showDemo":true,"author":"Vicky.Ye"},{"version":"1.0.0","name":"CheckBoxGroup","sort":"1","chnName":"复选按钮组","desc":"成组出现的复选按钮组件","type":"component","showDemo":true,"author":"Vicky.Ye"},{"version":"1.0.0","name":"ShortPassword","chnName":"短密码","des":"短密码","type":"component","sort":"1","showDemo":true,"author":"wangnan31"},{"version":"1.0.0","name":"Skeleton","chnName":"骨架屏","des":"在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果","type":"component","sort":"0","showDemo":true,"author":"wangnan31"},{"version":"1.0.0","name":"Scroller","chnName":"滚动","desc":"滚动组件","type":"component","sort":"0","star":5,"showDemo":true,"author":"iris"},{"version":"1.0.0","name":"BackTop","chnName":"回到顶部","desc":"用于页面内容高度过长，快捷回到顶部使用。","type":"component","sort":"2","showDemo":true,"author":"永无止晋、richard1015"},{"version":"1.0.0","name":"CountDown","chnName":"倒计时","desc":"倒计时组件","type":"component","sort":"0","showDemo":true,"author":"famanoder"},{"version":"1.0.0","name":"InfiniteLoading","chnName":"无限加载","desc":"无限加载","type":"component","sort":"0","star":4,"showDemo":true,"author":"iris"},{"version":"1.0.0","name":"Uploader","chnName":"上传","desc":"文件上传组件","type":"component","sort":"5","showDemo":true,"author":"林如风"},{"version":"1.0.0","name":"TextInput","chnName":"文本框","desc":"单行文本框","type":"component","sort":"1","showDemo":true,"author":"Frans"},{"version":"1.0.0","name":"Avatar","chnName":"头像","desc":"用来表示用户或事物，支持图片或字符展示。","type":"component","sort":"5","showDemo":true,"author":"zhenyulei"},{"version":"1.0.0","name":"Lazyload","chnName":"图片懒加载","desc":"图片懒加载","type":"component","sort":"0","showDemo":true,"author":"richard1015"},{"version":"1.0.0","name":"TextBox","chnName":"文本域","desc":"文本域","type":"component","sort":"1","showDemo":true,"author":"guoxiaoxiao"},{"version":"1.0.0","name":"Elevator","chnName":"电梯楼层","desc":"类似于电梯楼层，组件可以跟着右侧索引而滑动","type":"component","sort":"3","showDemo":true,"author":"zhenyulei"},{"version":"1.0.0","name":"Popup","chnName":"弹出层","desc":"弹出层","type":"component","sort":"5","showDemo":true,"author":"杨凯旋"},{"version":"1.0.0","name":"LeftSlip","chnName":"左滑删除","desc":"手势左滑删除元素","type":"component","sort":"2","showDemo":true,"author":"vickyYE"},{"version":"1.0.0","name":"Coupon","chnName":"优惠券","desc":"优惠券","type":"component","sort":"6","showDemo":true,"author":""},{"version":"1.0.0","name":"TabSelect","chnName":"配送时间","desc":"两级配送时间","type":"component","sort":"6","showDemo":true,"author":"dsj"},{"version":"1.0.0","name":"LuckDraw","chnName":"转盘抽奖","desc":"可设置中奖奖品，转动时间，中奖标识等","type":"component","sort":"6","showDemo":true,"author":"Ymm0008"},{"version":"1.0.0","name":"Video","chnName":"视频","desc":"视频播放器","type":"component","sort":"0","showDemo":true,"author":"VickyYe"},{"version":"1.0.0","name":"Signature","chnName":"签名","desc":"签名","type":"component","sort":"6","showDemo":true,"author":"irisSong"},{"version":"1.0.0","name":"CircleProgress","chnName":"圆形进度条","desc":"显示当前任务的操作进度","type":"component","sort":"2","showDemo":true,"author":"zyf"},{"version":"1.0.0","name":"TimeLineItem","chnName":"时间轴节点","desc":"定义时间轴节点","type":"component","sort":"0","showDemo":false,"author":"yangxiaolu"},{"version":"1.0.0","name":"TimeLine","chnName":"时间轴节点","desc":"定义时间轴节点","type":"component","sort":"0","showDemo":true,"author":"yangxiaolu"},{"version":"1.0.0","name":"SideNavBar","chnName":"侧边栏导航","desc":"侧边栏导航","type":"component","sort":"3","showDemo":true,"author":"szg2008"},{"version":"1.0.0","name":"SubSideNavBar","chnName":"侧边栏导航","desc":"侧边栏导航","type":"component","sort":"3","showDemo":false,"author":"szg2008"},{"version":"1.0.0","name":"SideNavBarItem","chnName":"侧边栏导航","desc":"侧边栏导航","type":"component","sort":"3","showDemo":false,"author":"szg2008"},{"name":"Drag","chnName":"拖拽","desc":"实现可拖拽的任意元素","type":"component","sort":"5","showDemo":true,"author":"张宇"},{"version":"1.0.0","name":"Address","chnName":"地址选择","desc":"业务功能-地址选择","type":"component","sort":"6","showDemo":true,"author":"yangxiaolu"},{"version":"1.0.0","name":"Notify","type":"method","chnName":"展示消息提示","desc":"在页面顶部展示消息提示，支持函数调用和组件调用两种方式","sort":"2","showDemo":true,"author":"wangyue217"},{"name":"CountUp","type":"component","chnName":"数字滚动","desc":"用于数据展示","sort":"0","showDemo":true,"author":"Ymm0008"},{"name":"FixedNav","type":"component","chnName":"悬浮导航","desc":"拖拽导航","sort":"3","showDemo":true,"author":"richard1015"},{"version":"1.0.0","name":"Collapse","type":"component","chnName":"折叠面板","desc":"可以折叠/展开的内容区域","sort":"0","showDemo":true,"author":"Ymm0008","showTest":true},{"version":"1.0.0","name":"Luckycard","type":"component","chnName":"刮刮卡","desc":"刮刮卡抽奖","sort":"6","showDemo":true,"author":"guoxiao"},{"version":"1.0.0","name":"NumberKeyboard","type":"component","chnName":"数字键盘","desc":"数字虚拟键盘，自定义键盘","sort":"1","showDemo":true,"author":"Ymm0008","showTest":true},{"version":"1.0.0","name":"CollapseItem","type":"component","chnName":"折叠面板单个组件","desc":"用于折叠面板组合使用","sort":"0","showDemo":false,"author":"Ymm0008","showTest":true},{"version":"1.0.0","name":"Magic","type":"component","chnName":"魔方","desc":"魔方","sort":"6","showDemo":true,"author":"zongyue3","showTest":false},{"version":"1.0.0","name":"NineGrid","type":"component","chnName":"九宫格","desc":"九宫格展示","sort":"6","showDemo":true,"author":"Drjingfubo","showTest":true}]}'
        );

        /***/
      },
      /* 91 */
      /***/ function (module, exports) {
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        (module.exports = _asyncToGenerator), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 92 */
      /***/ function (module, exports) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }
        (module.exports = _classCallCheck), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 93 */
      /***/ function (module, exports, __webpack_require__) {
        var toPropertyKey = __webpack_require__(15);
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', {
            writable: false,
          });
          return Constructor;
        }
        (module.exports = _createClass), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 94 */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(4)['default'];
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== 'object' || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (_typeof(res) !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (hint === 'string' ? String : Number)(input);
        }
        (module.exports = _toPrimitive), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 95 */
      /***/ function (module, exports, __webpack_require__) {
        var map = {
          './action.svg': 96,
          './address-location.svg': 16,
          './arrow-to-left.svg': 97,
          './arrow-to-top.svg': 98,
          './arrows-back.svg': 17,
          './back.svg': 99,
          './checked.svg': 100,
          './checked2.svg': 101,
          './circle-cross.svg': 18,
          './close.svg': 102,
          './cross.svg': 103,
          './down.svg': 104,
          './github.svg': 105,
          './hook-red.svg': 19,
          './message.svg': 106,
          './minus.svg': 20,
          './more.svg': 107,
          './more2.svg': 108,
          './more3.svg': 109,
          './notice.svg': 110,
          './plus.svg': 21,
          './qrcode.svg': 111,
          './right.svg': 112,
          './search.svg': 113,
          './search2.svg': 114,
          './share.svg': 115,
          './tick-red.svg': 22,
          './tick.svg': 116,
          './top.svg': 117,
          './trolley.svg': 118,
          './unchecked.svg': 119,
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 95;

        /***/
      },
      /* 96 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M.5 12c0 6.351 5.149 11.5 11.5 11.5S23.5 18.351 23.5 12 18.351.5 12 .5.5 5.649.5 12z" stroke-opacity=".6" stroke="currentColor" fill="#FFF"/><path d="M10.909 4.364h2.182v2.182h-2.182zM10.909 8.727h2.182v10.909h-2.182z"/></g></svg>';

        /***/
      },
      /* 97 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="19" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M18.552 35.569a1.5 1.5 0 0 1-2.121-.017c-5.952-6.05-9.905-10.1-15.857-16.15a2 2 0 0 1 0-2.804c5.952-6.05 9.905-10.1 15.857-16.15a1.5 1.5 0 1 1 2.138 2.104C12.847 8.368 9.125 12.184 3.403 18c5.722 5.816 9.444 9.632 15.166 15.448a1.5 1.5 0 0 1-.017 2.121z" fill="#2E2D2D" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 98 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 39"><g fill-rule="evenodd"><path d="M1.41 0C.63 0 0 .672 0 1.5S.63 3 1.41 3h28.18C30.37 3 31 2.328 31 1.5S30.369 0 29.59 0H1.41zM17 7.5a1.5 1.5 0 0 0-3 0v30a1.5 1.5 0 1 0 3 0v-30zM8.44 12.44l-8 8a1.5 1.5 0 1 0 2.12 2.12l8-8a1.5 1.5 0 1 0-2.12-2.12z"/><path d="M16.56 6.44l14 14a1.5 1.5 0 1 1-2.12 2.12l-14-14a1.5 1.5 0 1 1 2.12-2.12z"/></g></svg>';

        /***/
      },
      /* 99 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <!-- Generator: Sketch 59 (86127) - https://sketch.com -->\n    <title>back_original 2</title>\n    <desc>Created with Sketch.</desc>\n    <g id="地址选择" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="地址选择1" transform="translate(-18.000000, -284.000000)" fill="#333333">\n            <g id="back_original-2" transform="translate(18.000000, 284.000000)">\n                <path d="M4,10.0009322 C3.99859741,10.5049575 4.39578918,10.8616307 4.4994895,10.9579412 L12.2671305,18.7441237 C12.6723966,19.0981592 13.322967,19.083897 13.7141881,18.7069986 C14.1081366,18.3274726 14.0918341,17.7356488 13.6838673,17.379254 L6.23965094,10.0009322 L13.6838673,2.62261026 C14.0891334,2.26857481 14.1054091,1.67176406 13.7141881,1.2948657 C13.3202395,0.915339684 12.6750973,0.901345866 12.2671305,1.25774058 L4.4994895,9.03838594 C4.40147558,9.15875944 4.00141004,9.49690678 4,10.0009322 Z" id="back_original"></path>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 100 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><defs><path d="M38 19C38 8.507 29.493 0 19 0S0 8.507 0 19s8.507 19 19 19 19-8.507 19-19" id="b"/><filter x="-28.9%" y="-18.4%" width="157.9%" height="157.9%" filterUnits="objectBoundingBox" id="a"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.941176471 0 0 0 0 0.145098039 0 0 0 0 0.0588235294 0 0 0 0.15 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(6 2)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F0250F" xlink:href="#b"/></g><path d="M16 31h20V11H16z"/><path fill="#FFF" d="M16 21l2.5-2.5 5 4.5 10-9.5L36 16 24 28h-1z"/></g></svg>';

        /***/
      },
      /* 101 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><defs><path d="M19 0C8.506 0 0 8.506 0 19s8.506 19 19 19 19-8.506 19-19S29.494 0 19 0z" id="b"/><filter x="-28.9%" y="-18.4%" width="157.9%" height="157.9%" filterUnits="objectBoundingBox" id="a"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.941176471 0 0 0 0 0.145098039 0 0 0 0 0.0588235294 0 0 0 0.15 0" in="shadowBlurOuter1"/></filter></defs><g fill-rule="evenodd"><g transform="translate(6 2)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><path stroke="#F0250F" stroke-width="3" d="M19 1.5C9.335 1.5 1.5 9.335 1.5 19S9.335 36.5 19 36.5 36.5 28.665 36.5 19 28.665 1.5 19 1.5z" stroke-linejoin="square" fill="#FFF"/></g><path d="M37 21c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12" fill="#F0250F"/></g></svg>';

        /***/
      },
      /* 102 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>btn_close</title>\n    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="4_商品详情页-赠品" transform="translate(-337.000000, -305.000000)">\n            <g id="弹层" transform="translate(0.000000, 287.000000)">\n                <g id="关闭" transform="translate(337.000000, 18.000000)">\n                    <circle id="椭圆形" fill="#F2F2F2" cx="10" cy="10" r="10"></circle>\n                    <path d="M12.2803,8.7803 C11.9873,9.0733 11.5128,9.0733 11.2198,8.7803 C10.9268,8.4878 10.9268,8.0128 11.2198,7.7198 L12.7198,6.2198 C13.0128,5.9268 13.4873,5.9268 13.7803,6.2198 C14.0733,6.5123 14.0733,6.9878 13.7803,7.2803 L12.2803,8.7803 Z" id="Fill-5" fill="#8C8C8C"></path>\n                    <path d="M13.7803,12.71975 C14.0733,13.01225 14.0733,13.48775 13.7803,13.78025 C13.4873,14.07325 13.0128,14.07325 12.7198,13.78025 C11.8128,12.87375 10.9068,11.96725 9.9998,11.06075 C9.0933,11.96725 8.1868,12.87375 7.2803,13.78025 C6.9873,14.07325 6.5128,14.07325 6.2198,13.78025 C5.9268,13.48775 5.9268,13.01225 6.2198,12.71975 C7.1263,11.81325 8.0328,10.90675 8.9393,10.00025 C8.0328,9.09375 7.1263,8.18725 6.2198,7.28025 C5.9268,6.98775 5.9268,6.51225 6.2198,6.21975 C6.5128,5.92675 6.9873,5.92675 7.2803,6.21975 C9.4468,8.38625 11.6138,10.55325 13.7803,12.71975" id="Fill-8" fill="#8C8C8C"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

        /***/
      },
      /* 103 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill-rule="evenodd"><path d="M.44 2.56A1.5 1.5 0 1 1 2.56.44l27 27a1.5 1.5 0 1 1-2.12 2.12L15 17.123 2.56 29.56A1.5 1.5 0 1 1 .44 27.44L12.878 15 .44 2.56zM27.44.44a1.5 1.5 0 1 1 2.12 2.12l-9 9a1.5 1.5 0 1 1-2.12-2.12l9-9z"/></g></svg>';

        /***/
      },
      /* 104 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 11"><path d="M15 7.757L27.737.21a1.5 1.5 0 0 1 1.53 2.58c-4.5 2.668-9 5.334-13.5 8a1.503 1.503 0 0 1-1.53 0c-4.5-2.666-9-5.332-13.5-8A1.5 1.5 0 1 1 2.266.21C6.51 2.726 10.756 5.24 15 7.757" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 105 */
      /***/ function (module, exports) {
        module.exports =
          '<svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';

        /***/
      },
      /* 106 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="#2E2D2D" fill-rule="evenodd"><path d="M10 35.899c1.369-.79 2.743-1.58 4.111-2.371a1.377 1.377 0 0 1 1.136-.15l.021.006a18.57 18.57 0 0 0 7.865.348 18.198 18.198 0 0 0 4.757-1.507 17.286 17.286 0 0 0 2.912-1.763 16.288 16.288 0 0 0 2.467-2.282 15.604 15.604 0 0 0 1.874-2.649c.254-.455.485-.924.69-1.403A14.457 14.457 0 0 0 37 18.5a14.416 14.416 0 0 0-1.167-5.63 15.083 15.083 0 0 0-2.564-4.052 16.092 16.092 0 0 0-2.467-2.282 16.79 16.79 0 0 0-1.412-.954 17.746 17.746 0 0 0-4.655-1.968 18.577 18.577 0 0 0-9.467 0 18.085 18.085 0 0 0-3.155 1.159c-.512.246-1.013.515-1.5.809A16.774 16.774 0 0 0 7.901 7.62a15.883 15.883 0 0 0-2.184 2.487A15.346 15.346 0 0 0 4.17 12.87a14.413 14.413 0 0 0-.886 2.852A14.162 14.162 0 0 0 3 18.5c0 .932.101 1.862.284 2.776a14.455 14.455 0 0 0 1.212 3.56 1.5 1.5 0 1 1-2.691 1.324C-2.282 17.851.85 8.412 8.399 3.434c7.336-4.837 17.307-4.554 24.314.787 7.227 5.508 9.538 15.166 4.84 23.136-4.552 7.722-13.987 11.064-22.468 9.073l-5.829 3.367a1.5 1.5 0 0 1-2.249-1.299v-7C7.007 30.67 7.672 30 8.5 30c.828 0 1.5.67 1.5 1.498v4.401"/><path d="M18.5 17h3a1.5 1.5 0 1 1 0 3h-3a1.5 1.5 0 1 1 0-3M31.5 17a1.5 1.5 0 1 1 0 3h-3a1.5 1.5 0 1 1 0-3h3M11.5 17a1.5 1.5 0 1 1 0 3h-3a1.5 1.5 0 1 1 0-3h3"/></g></svg>';

        /***/
      },
      /* 107 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 9"><g transform="translate(0 -13)" fill-rule="evenodd"><rect opacity=".3" y="15" width="5" height="5" rx="2.5"/><circle opacity=".8" cx="17.5" cy="17.5" r="4.5"/><rect opacity=".3" x="30" y="15" width="5" height="5" rx="2.5"/></g></svg>';

        /***/
      },
      /* 108 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="37" height="37" xmlns="http://www.w3.org/2000/svg"><g fill="#2E2D2D" fill-rule="evenodd"><path d="M34.414 29.914a2 2 0 0 0 0-2.828l-4.5-4.5a2 2 0 0 0-2.828 0l-4.5 4.5a2 2 0 0 0 0 2.828l4.5 4.5a2 2 0 0 0 2.828 0l4.5-4.5" opacity=".35"/><path d="M34 13a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9zM33 0h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zM14 13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9zM13 0H4a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zM14 33a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9zm-1-13H4a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4zM33.707 29.207l-4.5 4.5a.999.999 0 0 1-1.414 0l-4.5-4.5a.999.999 0 0 1 0-1.414l4.5-4.5a.999.999 0 0 1 1.414 0l4.5 4.5a.999.999 0 0 1 0 1.414zm2.122-3.536l-4.5-4.5a4.002 4.002 0 0 0-5.658 0l-4.5 4.5a4.002 4.002 0 0 0 0 5.658l4.5 4.5a4.002 4.002 0 0 0 5.658 0l4.5-4.5a4.002 4.002 0 0 0 0-5.658z"/></g></svg>';

        /***/
      },
      /* 109 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="39" height="7" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-1 -17)" fill="#2E2D2D" fill-rule="evenodd"><circle cx="36.5" cy="20.5" r="3.5"/><circle cx="20.5" cy="20.5" r="3.5"/><circle cx="4.5" cy="20.5" r="3.5"/></g></svg>';

        /***/
      },
      /* 110 */
      /***/ function (module, exports) {
        module.exports =
          '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1591940507377" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 256c117.632 0 213.333333 95.701333 213.333333 213.333333v149.333334c0 13.845333 4.501333 27.328 12.8 38.4L789.333333 725.333333H234.666667l51.2-68.266666c8.298667-11.072 12.8-24.554667 12.8-38.4v-149.333334c0-117.632 95.701333-213.333333 213.333333-213.333333m0-64c-153.173333 0-277.333333 124.16-277.333333 277.333333v149.333334l-64 85.333333v42.666667c0 23.466667 19.2 42.666667 42.666666 42.666666h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666666v-42.666667l-64-85.333333v-149.333334c0-153.173333-124.16-277.333333-277.333333-277.333333zM512 853.333333a64 64 0 0 1-64-64h-64c0 70.570667 57.429333 128 128 128s128-57.429333 128-128h-64a64 64 0 0 1-64 64z"  p-id="1390"></path><path d="M512 256a42.666667 42.666667 0 1 1-0.021333-85.312A42.666667 42.666667 0 0 1 512 256h97.621333A105.962667 105.962667 0 0 0 618.666667 213.333333c0-58.816-47.850667-106.666667-106.666667-106.666666s-106.666667 47.850667-106.666667 106.666666c0 15.189333 3.306667 29.568 9.045334 42.666667H512z" p-id="1391"></path></svg>';

        /***/
      },
      /* 111 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="40" height="39" xmlns="http://www.w3.org/2000/svg"><g fill="#2E2D2D" fill-rule="evenodd"><path d="M34 39a6 6 0 0 0 6-6v-3.5a1.5 1.5 0 1 0-3 0V33a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.5a1.5 1.5 0 1 0-3 0V33a6 6 0 0 0 6 6h28M38.5 18a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 1 1 0-3h5M26.5 18a1.5 1.5 0 1 1 0 3h-25a1.5 1.5 0 1 1 0-3h25M40 6a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v3.5a1.5 1.5 0 1 0 3 0V6a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v3.5a1.5 1.5 0 1 0 3 0V6"/></g></svg>';

        /***/
      },
      /* 112 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 30"><g fill="none" fill-rule="evenodd"><path d="M-11 0h30v30h-30z"/><path d="M7.757 15C5.241 10.755 2.727 6.51.21 2.266A1.5 1.5 0 0 1 2.79.736l8 13.499c.28.472.28 1.058 0 1.53l-8 13.5a1.499 1.499 0 1 1-2.58-1.53L7.757 15z" fill="currentColor"/></g></svg>';

        /***/
      },
      /* 113 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M13.658 22.979c-5.511.363-10.273-3.81-10.637-9.321-.363-5.511 3.81-10.273 9.321-10.637 5.511-.363 10.273 3.81 10.637 9.321.363 5.511-3.81 10.273-9.321 10.637zM26.56 24.44l-3.369-3.37c4.277-5.4 3.599-13.197-1.545-17.778-5.144-4.581-12.968-4.355-17.838.516-4.871 4.87-5.097 12.694-.516 17.838 4.581 5.143 12.378 5.822 17.778 1.545l3.37 3.37a1.5 1.5 0 0 0 2.12-2.121z" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 114 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="#2E2D2D" fill-rule="evenodd"><path d="M24.495 34.027a1.5 1.5 0 0 1 1.03 2.818c-8.971 3.28-18.983-.611-23.385-9.088C-2.262 19.28.313 8.852 8.156 3.4 16-2.053 26.671-.834 33.083 6.246c6.412 7.08 6.571 17.82.371 25.087l6.107 6.107a1.501 1.501 0 0 1-2.122 2.121l-7.125-7.126a1.501 1.501 0 0 1 0-2.121c5.773-5.773 6.273-14.967 1.161-21.333-5.113-6.365-14.198-7.86-21.08-3.469-6.883 4.392-9.354 13.262-5.736 20.58 3.619 7.319 12.168 10.739 19.836 7.935"/><path d="M27.272 15.453a1.5 1.5 0 0 0 2.757-1.182 12 12 0 0 0-6.299-6.299 1.5 1.5 0 0 0-1.182 2.757 9 9 0 0 1 4.821 4.959"/></g></svg>';

        /***/
      },
      /* 115 */
      /***/ function (module, exports) {
        module.exports =
          '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="#2E2D2D" fill-rule="evenodd"><path d="M31 40H6a6 6 0 0 1-6-6V11a6 6 0 0 1 6-6h9.5a1.5 1.5 0 0 1 0 3H6a3 3 0 0 0-3 3v23a3 3 0 0 0 3 3h25a3 3 0 0 0 3-3v-9.5a1.5 1.5 0 0 1 3 0V34a6 6 0 0 1-6 6"/><path d="M39.435 5.313l-.024-.004a1.5 1.5 0 0 1 .15 2.252l-5 5a1.502 1.502 0 0 1-2.122 0 1.502 1.502 0 0 1 0-2.122l2.397-2.397C26.474 8.652 20 15.615 20 24v2.5a1.5 1.5 0 0 1-3 0V24c0-10.07 7.856-18.391 17.91-18.97-.824-.822-1.647-1.646-2.471-2.47a1.502 1.502 0 0 1 0-2.121 1.502 1.502 0 0 1 2.122 0l5 5"/></g></svg>';

        /***/
      },
      /* 116 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 21"><path d="M10 13.5l-7-6-3 3L10.5 21 28 3.5l-3-3z" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 117 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 33"><g fill-rule="evenodd"><path d="M17 1.5a1.5 1.5 0 0 0-3 0v30a1.5 1.5 0 1 0 3 0v-30zM8.44 6.44l-8 8a1.5 1.5 0 1 0 2.12 2.12l8-8a1.5 1.5 0 1 0-2.12-2.12z"/><path d="M16.56.44l14 14a1.5 1.5 0 1 1-2.12 2.12l-14-14A1.5 1.5 0 1 1 16.56.44z"/></g></svg>';

        /***/
      },
      /* 118 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 39"><path d="M3.63 5h22.363c5.789 0 9.278 4.972 8.312 10.342L32.6 24.037c-.56 3.69-4.112 5.893-7.9 5.893H5.27C4.513 29.93 4 29.274 4 28.52c0-.756.615-1.52 1.37-1.52H24.7c2.58 0 4.874-1.242 5.203-3.408l1.713-8.732C32.293 11.094 29.999 8 25.993 8H2.553C1.748 8 1.108 7.772.99 7.026L.017 1.581a1.367 1.367 0 1 1 2.699-.428L3.63 5zM3.5 16h12a1.5 1.5 0 0 1 1.5 1.5v.047a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5V17.5A1.5 1.5 0 0 1 3.5 16zM7 39a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm20 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="evenodd"/></svg>';

        /***/
      },
      /* 119 */
      /***/ function (module, exports) {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><defs><path d="M0 19c0 10.494 8.506 19 19 19s19-8.506 19-19S29.494 0 19 0 0 8.506 0 19z" id="b"/><filter x="-28.9%" y="-18.4%" width="157.9%" height="157.9%" filterUnits="objectBoundingBox" id="a"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(6 2)" fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><path stroke-opacity=".6" stroke="#848484" stroke-width="3" d="M1.5 19c0 9.665 7.835 17.5 17.5 17.5S36.5 28.665 36.5 19 28.665 1.5 19 1.5 1.5 9.335 1.5 19z" stroke-linejoin="square" fill="#FFF"/></g></svg>';

        /***/
      },
      /* 120 */
      /***/ function (module, exports, __webpack_require__) {
        var arrayLikeToArray = __webpack_require__(26);
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return arrayLikeToArray(arr);
        }
        (module.exports = _arrayWithoutHoles), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 121 */
      /***/ function (module, exports) {
        function _iterableToArray(iter) {
          if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null) return Array.from(iter);
        }
        (module.exports = _iterableToArray), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 122 */
      /***/ function (module, exports) {
        function _nonIterableSpread() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        (module.exports = _nonIterableSpread), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 123 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_noticebar_vue_vue_type_style_index_0_id_257e2140_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(33);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_noticebar_vue_vue_type_style_index_0_id_257e2140_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_noticebar_vue_vue_type_style_index_0_id_257e2140_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__
          );
        /* unused harmony reexport * */

        /***/
      },
      /* 124 */
      /***/ function (module, exports) {
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        (module.exports = _arrayWithHoles), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 125 */
      /***/ function (module, exports) {
        function _iterableToArrayLimit(arr, i) {
          var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
          if (null != _i) {
            var _s,
              _e,
              _x,
              _r,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                if (Object(_i) !== _i) return;
                _n = !1;
              } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                if (!_n && null != _i['return'] && ((_r = _i['return']()), Object(_r) !== _r)) return;
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
        }
        (module.exports = _iterableToArrayLimit), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 126 */
      /***/ function (module, exports) {
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        (module.exports = _nonIterableRest), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 127 */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(4)['default'];
        function _regeneratorRuntime() {
          'use strict'; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          (module.exports = _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports);
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: 'normal',
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: 'throw',
                arg: err,
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      }
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state) throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method) context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else 'return' === context.method && context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (((state = context.done ? 'completed' : 'suspendedYield'), record.arg === ContinueSentinel)) continue;
                  return {
                    value: record.arg,
                    done: context.done,
                  };
                }
                'throw' === record.type && ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator['return'] &&
                  ((context.method = 'return'), (context.arg = undefined), maybeInvokeDelegate(delegate, context), 'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'), (context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type) return (context.method = 'throw'), (context.arg = record.arg), (context.delegate = null), ContinueSentinel;
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError('iterator result is not an object')),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'), delete record.arg, (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [
              {
                tryLoc: 'root',
              },
            ]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return {
              next: doneResult,
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0,
            };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction')),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype), define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return {
                __await: arg,
              };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object) return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) 't' === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught && ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally) throw new Error('try statement without catch or finally');
                      if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel) : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
                    : 'normal' === record.type && afterLoc && (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(iterable, resultName, nextLoc) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        (module.exports = _regeneratorRuntime), (module.exports.__esModule = true), (module.exports['default'] = module.exports);

        /***/
      },
      /* 128 */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },
      /* 129 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_luckycard_vue_vue_type_style_index_0_id_1a2402ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(82);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_luckycard_vue_vue_type_style_index_0_id_1a2402ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_0_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_luckycard_vue_vue_type_style_index_0_id_1a2402ac_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__
          );
        /* unused harmony reexport * */

        /***/
      },
      /* 130 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
        var defineProperty = __webpack_require__(1);
        var defineProperty_default = /*#__PURE__*/ __webpack_require__.n(defineProperty);

        // EXTERNAL MODULE: ./package.json
        var package_0 = __webpack_require__(89);

        // EXTERNAL MODULE: ./src/config.json
        var src_config = __webpack_require__(90);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
        var helpers_typeof = __webpack_require__(4);
        var typeof_default = /*#__PURE__*/ __webpack_require__.n(helpers_typeof);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
        var helpers_extends = __webpack_require__(2);
        var extends_default = /*#__PURE__*/ __webpack_require__.n(helpers_extends);

        // EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
        var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(3);
        var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/ __webpack_require__.n(
          external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_
        );

        // CONCATENATED MODULE: ./src/locales/lang/zn-CH.js

        var zn_CH_lang = {
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
            menu: {
              resetBtnTxt: '重置',
            },
            searchbar: {
              placeText: '请输入内容...',
              textInfo: '搜索',
            },
            shortpassword: {
              tip1: '输入数字密码',
              tip2: '忘记密码',
            },
            steps: {
              step: '步骤',
              stepDesc: '步骤描述',
            },
            uploader: {
              xmlError: '对不起，您的浏览器不支持本组件！',
              typeError: '不支持上传该类型文件',
              limitError: '文件大小超过限制',
            },
          },
        };
        external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang = 'zn-CH';
        /* harmony default export */ var zn_CH = zn_CH_lang;
        // CONCATENATED MODULE: ./src/locales/index.js

        var defaultMessages = {};
        var merged = false;
        var locales_vueI18nHandler = function vueI18nHandler() {
          var vuei18n = Object.getPrototypeOf(this || external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a).$t;
          if (typeof vuei18n === 'function' && !!external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale) {
            if (!merged) {
              merged = true;
              external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale(
                external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang,
                extends_default()(
                  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang === 'zn-CH' ? zn_CH : {},
                  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale(
                    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang
                  ) || {},
                  defaultMessages
                )
              );
            }
            return vuei18n.apply(this, arguments);
          }
        };
        function i18n(keysStr, params) {
          var value = locales_vueI18nHandler.apply(this, arguments);
          if (value !== null && value !== undefined) return value;
          var message = extends_default()(
            {},
            external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang === 'zn-CH' ? zn_CH : {},
            defaultMessages
          );
          var keys = (keysStr && keysStr.split('.')) || [];
          var result = null;
          if (keys.length) {
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key && message[key]) {
                message = message[key];
                result = message;
              } else {
                result = null;
                break;
              }
            }
          }
          return simpleTemplate(result, params);
        }
        function locale(lang, messages) {
          if (typeof_default()(lang) === 'object') {
            messages = lang;
            lang = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang;
          }
          external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang = lang;
          extends_default()(defaultMessages, messages);
        }
        function getArgType(arg) {
          return Object.prototype.toString
            .call(arg)
            .toLowerCase()
            .match(/\s(\w+)/)[1];
        }
        function simpleTemplate(templ, conf) {
          var pars = templ && templ.match(/{.+?}/g);
          if (pars && conf) {
            pars = pars.map(function (p) {
              return p.replace(/\{\s*(\w+|\d+).*?\}/, '$1');
            });
            pars.forEach(function (c, i) {
              var reg = new RegExp('{\\s*' + c + '\\s*(?:=\\s*(\\S*?))?\\s*?}', 'g');
              templ = templ.replace(reg, function (a, b) {
                return getArgType(conf[c]) == 'function' ? conf[c]() : conf[c] !== undefined ? conf[c] : b ? b : a;
              });
            });
          }
          return templ;
        }

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/cell/cell.vue?vue&type=template&id=f50b618e&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'a',
            {
              class: ['nut-cell', { 'nut-cell-link': _vm.isLink }],
              style: { 'background-color': _vm.bgColor },
              attrs: { href: _vm.linkUrl, target: _vm.target },
              on: { click: _vm.jumpPage },
            },
            [
              _c(
                'div',
                { staticClass: 'nut-cell-box', on: { click: _vm.clickCell } },
                [
                  _vm._t('avatar'),
                  _vm._v(' '),
                  _c('div', { staticClass: 'nut-cell-left' }, [
                    _c('span', { staticClass: 'nut-cell-title' }, [_vm._t('title', [_vm._v(_vm._s(_vm.title))])], 2),
                    _vm._v(' '),
                    _c('span', { staticClass: 'nut-cell-sub-title' }, [_vm._t('sub-title', [_vm._v(_vm._s(_vm.subTitle))])], 2),
                  ]),
                  _vm._v(' '),
                  _c('div', { staticClass: 'nut-cell-right' }, [
                    _c('span', { staticClass: 'nut-cell-desc' }, [_vm._t('desc', [_vm._v(_vm._s(_vm.desc))])], 2),
                    _vm._v(' '),
                    _c(
                      'span',
                      { staticClass: 'nut-cell-icon' },
                      [_vm.showIcon ? _vm._t('icon', [_c('nut-icon', { attrs: { type: 'right', size: '15px', color: '#848484' } })]) : _vm._e()],
                      2
                    ),
                  ]),
                ],
                2
              ),
            ]
          );
        };
        var staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/cell/cell.vue?vue&type=template&id=f50b618e&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/icon/icon.vue?vue&type=template&id=508b7854&
        var iconvue_type_template_id_508b7854_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('i', {
            class: ['nut-icon', 'nut-icon-' + _vm.type],
            style: { height: _vm.size, width: _vm.size, color: _vm.color },
            domProps: { innerHTML: _vm._s(_vm.icon) },
          });
        };
        var iconvue_type_template_id_508b7854_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/icon/icon.vue?vue&type=template&id=508b7854&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/icon/icon.vue?vue&type=script&lang=js&
        //
        //
        //

        var types = ['top', 'action', 'cross', 'down', 'right', 'more', 'notice', 'plus', 'search', 'trolley', 'tick', 'minus', 'circle-cross'];
        /* harmony default export */ var iconvue_type_script_lang_js_ = {
          name: 'nut-icon',
          props: {
            type: {
              type: String,
              default: '',
            },
            size: {
              type: String,
              default: '',
            },
            color: {
              type: String,
              default: '#2e2d2d',
            },
            url: {
              type: String,
              default: '',
            },
          },
          data: function data() {
            return {
              icon: null,
            };
          },
          watch: {
            url: function url(val) {
              this.icon = val;
            },
          },
          created: function created() {
            if (this.url) {
              this.icon = this.url;
              this.type = 'self';
            } else {
              if (types.indexOf(this.type) === -1) {
                console.error('nut-icon组件type值(' + this.type + ')有误，无此icon!');
              } else {
                this.icon = __webpack_require__(95)('./' + this.type + '.svg');
              }
            }
          },
        };
        // CONCATENATED MODULE: ./src/packages/icon/icon.vue?vue&type=script&lang=js&
        /* harmony default export */ var icon_iconvue_type_script_lang_js_ = iconvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(
          scriptExports,
          render,
          staticRenderFns,
          functionalTemplate,
          injectStyles,
          scopeId,
          moduleIdentifier /* server only */,
          shadowMode /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }

          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context =
                context || // cached call
                (this.$vnode && this.$vnode.ssrContext) || // stateful
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode
              ? function () {
                  injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
                }
              : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options,
          };
        }

        // CONCATENATED MODULE: ./src/packages/icon/icon.vue

        /* normalize component */

        var component = normalizeComponent(
          icon_iconvue_type_script_lang_js_,
          iconvue_type_template_id_508b7854_render,
          iconvue_type_template_id_508b7854_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var icon = component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/cell/cell.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var cellvue_type_script_lang_js_ = {
          name: 'nut-cell',
          props: {
            title: {
              type: String,
              default: '',
            },
            subTitle: {
              type: String,
              default: '',
            },
            desc: {
              type: String,
              default: '',
            },
            isLink: {
              type: Boolean,
              default: false,
            },
            linkUrl: {
              type: String,
              default: 'javascript:void(0)',
            },
            showIcon: {
              type: Boolean,
              default: false,
            },
            bgColor: {
              type: String,
              default: '#fff',
            },
            to: {
              type: String,
              default: '',
            },
            target: {
              type: String,
              default: '_self',
            },
          },
          components: {
            'nut-icon': icon,
          },
          data: function data() {
            return {};
          },
          methods: {
            clickCell: function clickCell() {
              this.$emit('click-cell');
            },
            jumpPage: function jumpPage() {
              if (!this.to) return false;
              this.$router.push(this.to);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/cell/cell.vue?vue&type=script&lang=js&
        /* harmony default export */ var cell_cellvue_type_script_lang_js_ = cellvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/cell/cell.vue

        /* normalize component */

        var cell_component = normalizeComponent(cell_cellvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

        /* harmony default export */ var cell = cell_component.exports;
        // EXTERNAL MODULE: ./src/packages/cell/cell.scss
        var cell_cell = __webpack_require__(23);

        // CONCATENATED MODULE: ./src/packages/cell/index.js

        cell.install = function (Vue) {
          Vue.component(cell.name, cell);
        };
        /* harmony default export */ var packages_cell = cell;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/dialog/dialog.vue?vue&type=template&id=a052a778&
        var dialogvue_type_template_id_a052a778_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _vm.destroy
            ? _c(
                'div',
                { class: ['nut-dialog-wrapper', _vm.customClass, { 'nut-dialog-image-wrapper': _vm.type === 'image' }], attrs: { id: _vm.id } },
                [
                  _c('transition', { attrs: { name: _vm.animation ? 'nutFade' : '' } }, [
                    _c('div', {
                      directives: [{ name: 'show', rawName: 'v-show', value: _vm.curVisible, expression: 'curVisible' }],
                      class: 'nut-dialog-mask',
                      style: { background: _vm.maskBgStyle },
                      on: { click: _vm.modalClick },
                    }),
                  ]),
                  _vm._v(' '),
                  _c('transition', { attrs: { name: _vm.animation ? 'nutEase' : '' } }, [
                    _c(
                      'div',
                      {
                        directives: [{ name: 'show', rawName: 'v-show', value: _vm.curVisible, expression: 'curVisible' }],
                        staticClass: 'nut-dialog-box',
                        on: { click: _vm.modalClick },
                      },
                      [
                        _c(
                          'div',
                          {
                            staticClass: 'nut-dialog',
                            on: {
                              click: function ($event) {
                                $event.stopPropagation();
                              },
                            },
                          },
                          [
                            _vm.closeBtn
                              ? _c('a', { staticClass: 'nut-dialog-close', attrs: { href: 'javascript:;' }, on: { click: _vm.closeBtnClick } })
                              : _vm._e(),
                            _vm._v(' '),
                            _vm.type === 'image'
                              ? [
                                  _c('a', { staticClass: 'nut-dialog-link', attrs: { href: 'javascript:;' }, on: { click: _vm.imageLinkClick } }, [
                                    _c('img', { staticClass: 'nut-dialog-image', attrs: { src: _vm.imgSrc, alt: '' } }),
                                  ]),
                                ]
                              : [
                                  _c('div', { staticClass: 'nut-dialog-body' }, [
                                    _vm.title
                                      ? _c('span', { staticClass: 'nut-dialog-title', domProps: { innerHTML: _vm._s(_vm.title) } })
                                      : _vm._e(),
                                    _vm._v(' '),
                                    _vm.$slots.default
                                      ? _c('div', { staticClass: 'nut-dialog-content', style: { textAlign: _vm.textAlign } }, [_vm._t('default')], 2)
                                      : _vm.content
                                      ? _c('div', {
                                          staticClass: 'nut-dialog-content',
                                          style: { textAlign: _vm.textAlign },
                                          domProps: { innerHTML: _vm._s(_vm.content) },
                                        })
                                      : _vm._e(),
                                  ]),
                                  _vm._v(' '),
                                  !_vm.noFooter
                                    ? _c('div', { staticClass: 'nut-dialog-footer' }, [
                                        !_vm.noCancelBtn
                                          ? _c(
                                              'button',
                                              {
                                                staticClass: 'nut-dialog-btn nut-dialog-cancel',
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.cancelBtnClick(_vm.cancelAutoClose);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.cancelBtnTxt || _vm.nutTranslate('lang.cancelBtnTxt')))]
                                            )
                                          : _vm._e(),
                                        _vm._v(' '),
                                        !_vm.noOkBtn
                                          ? _c(
                                              'button',
                                              {
                                                staticClass: 'nut-dialog-btn nut-dialog-ok',
                                                class: { disabled: _vm.okBtnDisabled },
                                                attrs: { disabled: _vm.okBtnDisabled },
                                                on: { click: _vm.okBtnClick },
                                              },
                                              [_vm._v(_vm._s(_vm.okBtnTxt || _vm.nutTranslate('lang.okBtnTxt')))]
                                            )
                                          : _vm._e(),
                                      ])
                                    : _vm._e(),
                                ],
                          ],
                          2
                        ),
                      ]
                    ),
                  ]),
                ],
                1
              )
            : _vm._e();
        };
        var dialogvue_type_template_id_a052a778_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/dialog/dialog.vue?vue&type=template&id=a052a778&

        // CONCATENATED MODULE: ./src/mixins/locale/index.js

        /* harmony default export */ var mixins_locale = {
          methods: {
            nutTranslate: function nutTranslate() {
              return i18n.apply(this, arguments);
            },
          },
        };
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/dialog/dialog.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var lockMaskScroll = (function (bodyCls) {
          var scrollTop;
          return {
            afterOpen: function afterOpen() {
              scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop;
              document.body.classList.add(bodyCls);
              document.body.style.top = -scrollTop + 'px';
            },
            beforeClose: function beforeClose() {
              if (document.body.classList.contains(bodyCls)) {
                document.body.classList.remove(bodyCls);
                document.scrollingElement.scrollTop = scrollTop;
              }
            },
          };
        })('dialog-open');
        /* harmony default export */ var dialogvue_type_script_lang_js_ = {
          name: 'nut-dialog',
          mixins: [mixins_locale],
          props: {
            id: {
              type: String,
              default: '',
            },
            title: {
              type: String,
              default: '',
            },
            content: {
              type: String,
              default: '',
            },
            type: {
              type: String,
              default: '',
            },
            link: {
              type: String,
              default: '',
            },
            imgSrc: {
              type: String,
              default: '',
            },
            animation: {
              type: Boolean,
              default: true,
            },
            lockBgScroll: {
              type: Boolean,
              default: false,
            },
            visible: {
              type: Boolean,
              default: false,
            },
            closeBtn: {
              type: Boolean,
              default: false,
            },
            closeOnClickModal: {
              type: Boolean,
              default: true,
            },
            noFooter: {
              type: Boolean,
              default: false,
            },
            noOkBtn: {
              type: Boolean,
              default: false,
            },
            noCancelBtn: {
              type: Boolean,
              default: false,
            },
            cancelBtnTxt: {
              type: String,
              default: '',
            },
            okBtnTxt: {
              type: String,
              default: '',
            },
            okBtnDisabled: {
              type: Boolean,
              default: false,
            },
            cancelAutoClose: {
              type: Boolean,
              default: true,
            },
            textAlign: {
              type: String,
              default: 'center',
            },
            onOkBtn: {
              type: Function,
              default: null,
            },
            onCloseBtn: {
              type: Function,
              default: null,
            },
            onCancelBtn: {
              type: Function,
              default: null,
            },
            closeCallback: {
              type: Function,
              default: null,
            },
            onClickImageLink: {
              type: Function,
              default: null,
            },
            maskBgStyle: {
              type: String,
              default: '',
            },
            canDestroy: {
              type: Boolean,
              default: true,
            },
            customClass: {
              type: String,
              default: '',
            },
            closeOnPopstate: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              curVisible: false,
              destroy: false,
            };
          },
          created: function created() {
            this.destroy = true;
          },
          mounted: function mounted() {
            var that = this;
            if (that.closeOnPopstate) {
              window.addEventListener('popstate', function () {
                that.close();
              });
            }
          },
          methods: {
            modalClick: function modalClick() {
              if (!this.closeOnClickModal) {
                return;
              }
              this.close('modal');
            },
            todestroy: function todestroy() {
              this.canDestroy ? '' : (this.destroy = false);
            },
            close: function close(target) {
              this.$emit('close', target);
              this.$emit('close-callback', target);
              this.todestroy();
              if (typeof this.closeCallback === 'function' && this.closeCallback(target) === false) {
                return;
              }
              this.curVisible = false;
            },
            okBtnClick: function okBtnClick() {
              this.$emit('ok-btn-click');
              if (typeof this.onOkBtn === 'function') {
                this.onOkBtn.call(this);
              }
            },
            cancelBtnClick: function cancelBtnClick(autoClose) {
              this.$emit('cancel-btn-click');
              if (!autoClose) {
                return;
              }
              if (typeof this.onCancelBtn === 'function') {
                if (this.onCancelBtn.call(this) === false) {
                  return;
                }
              }
              this.close('cancelBtn');
            },
            closeBtnClick: function closeBtnClick() {
              if (typeof this.onCloseBtn === 'function') {
                if (this.onCloseBtn.call(this) === false) {
                  return;
                }
              }
              this.close('closeBtn');
            },
            //图片类型弹窗中的链接点击事件，默认跳转
            imageLinkClick: function imageLinkClick() {
              if (this.onClickImageLink && this.onClickImageLink.call(this) === false) {
                return;
              }
              if (this.link) {
                location.href = this.link;
              }
            },
          },
          watch: {
            visible: {
              handler: function handler(val) {
                this.curVisible = val;
              },
              immediate: true,
            },
            curVisible: function curVisible(val) {
              if (this.lockBgScroll) {
                //锁定or解锁页面滚动
                lockMaskScroll[val ? 'afterOpen' : 'beforeClose']();
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/dialog/dialog.vue?vue&type=script&lang=js&
        /* harmony default export */ var dialog_dialogvue_type_script_lang_js_ = dialogvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/dialog/dialog.vue

        /* normalize component */

        var dialog_component = normalizeComponent(
          dialog_dialogvue_type_script_lang_js_,
          dialogvue_type_template_id_a052a778_render,
          dialogvue_type_template_id_a052a778_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var dialog = dialog_component.exports;
        // CONCATENATED MODULE: ./src/packages/dialog/_dialog.js

        var DialogConstructor = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog);
        var inst;
        var _dialog_Dialog = function Dialog(options) {
          options.id = options.id || 'nut-dialog-default-id';
          if (options.type === 'image' && typeof options.closeBtn === 'undefined') {
            options.closeBtn = true;
          }
          inst = new DialogConstructor({
            propsData: options,
          });
          inst.vm = inst.$mount();
          var dialogDom = document.querySelector('#' + options.id);
          if (options.id && dialogDom) {
            dialogDom.parentNode.replaceChild(inst.$el, dialogDom);
          } else {
            document.body.appendChild(inst.$el);
          }

          // setTimeout(() => {
          //     //  设置z-index保证最新的弹窗再最上面
          //     let dialogThis = document.querySelector('#'+options.id);
          //     var nutDialogWrapper = document.getElementsByClassName('nut-dialog-wrapper');
          //     var zIndexNum = 100 + (10 * (nutDialogWrapper.length));
          //     dialogThis.style.zIndex = zIndexNum;
          //     setTimeout(function() {
          //         for(var i = 0;i < nutDialogWrapper.length;i++) {
          //             nutDialogWrapper[i].style.zIndex = zIndexNum - 1 - i;
          //         }
          //     }, 0);
          // }, 10);

          external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.nextTick(function () {
            inst.visible = true;
          });
        };
        _dialog_Dialog.closed = function () {
          if (inst) {
            inst.close();
          }
        };
        /* harmony default export */ var _dialog = _dialog_Dialog;
        // EXTERNAL MODULE: ./src/packages/dialog/dialog.scss
        var dialog_dialog = __webpack_require__(24);

        // CONCATENATED MODULE: ./src/packages/dialog/index.js

        var DialogArr = [_dialog, dialog];
        DialogArr.install = function (Vue) {
          Vue.prototype['$dialog'] = _dialog;
          Vue.component(dialog.name, dialog);
        };
        /* harmony default export */ var packages_dialog = DialogArr;
        // EXTERNAL MODULE: ./src/packages/icon/icon.scss
        var icon_icon = __webpack_require__(6);

        // CONCATENATED MODULE: ./src/packages/icon/index.js

        icon.install = function (Vue) {
          Vue.component(icon.name, icon);
        };
        /* harmony default export */ var packages_icon = icon;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=template&id=8b1baa48&
        var toastvue_type_template_id_8b1baa48_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('transition', { attrs: { name: 'toastfade' } }, [
            _vm.visible
              ? _c(
                  'div',
                  {
                    class: _vm.toastBodyClass,
                    style: {
                      bottom: _vm.center ? 'auto' : _vm.bottom + 'px',
                      'background-color': _vm.coverColor,
                    },
                    attrs: { id: _vm.id },
                    on: { click: _vm.clickCover },
                  },
                  [
                    _c(
                      'div',
                      {
                        staticClass: 'nut-toast-inner',
                        class: _vm.toastClass,
                        style: Object.assign(
                          {},
                          { 'text-align': _vm.textAlignCenter ? 'center' : 'left', 'background-color': _vm.bgColor },
                          _vm.toastStyle
                        ),
                      },
                      [
                        _vm.hasIcon
                          ? _c('span', { staticClass: 'nut-toast-icon-wrapper' }, [
                              _c('i', {
                                class: ['nut-toast-icon', _vm.type, { 'nut-toast-icon-rotate': _vm.type === 'loading' && _vm.loadingRotate }],
                                style: { 'background-image': _vm.cusIcon },
                              }),
                            ])
                          : _vm._e(),
                        _vm._v(' '),
                        _c('span', { staticClass: 'nut-toast-text', domProps: { innerHTML: _vm._s(_vm.msg) } }),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
          ]);
        };
        var toastvue_type_template_id_8b1baa48_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=template&id=8b1baa48&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var toastvue_type_script_lang_js_ = {
          name: 'nut-toast',
          props: {},
          data: function data() {
            return {
              id: '',
              msg: '',
              visible: false,
              duration: 2000,
              //显示时间(毫秒)
              timer: null,
              center: true,
              type: '',
              customClass: '',
              bottom: 30,
              size: 'base',
              icon: null,
              textAlignCenter: true,
              loadingRotate: true,
              bgColor: 'rgba(46, 46, 46, 0.7)',
              onClose: null,
              textTimer: null,
              cover: false,
              coverColor: 'rgba(0, 0, 0, 0)',
              toastStyle: {},
              toastClass: '',
              timeStamp: null,
              closeOnClickOverlay: false,
            };
          },
          watch: {
            visible: function visible(val) {
              if (val) {
                this.show();
              }
            },
          },
          computed: {
            cusIcon: function cusIcon() {
              return this.icon ? 'url("'.concat(this.icon, '")') : '';
            },
            toastBodyClass: function toastBodyClass() {
              return [
                'nut-toast',
                {
                  'nut-toast-center': this.center,
                },
                {
                  'nut-toast-has-icon': this.hasIcon,
                },
                {
                  'nut-toast-cover': this.cover,
                },
                {
                  'nut-loading': this.type == 'loading',
                },
                this.customClass,
                'nut-toast-' + this.size,
              ];
            },
            hasIcon: function hasIcon() {
              if (this.type !== 'text') {
                return true;
              } else {
                return this.cusIcon;
              }
            },
          },
          methods: {
            show: function show(force) {
              var _this = this;
              this.clearTimer();
              clearTimeout(this.textTimer);
              if (this.duration) {
                this.timer = setTimeout(function () {
                  _this.hide(force);
                }, this.duration);
              }
            },
            hide: function hide(force) {
              var _this2 = this;
              this.clearTimer();
              this.visible = false;
              if (force) {
                clearTimeout(this.textTimer);
              } else {
                this.textTimer = setTimeout(function () {
                  clearTimeout(_this2.textTimer);
                  _this2.msg = '';
                }, 300);
              }
              typeof this.onClose === 'function' && this.onClose();
            },
            clearTimer: function clearTimer() {
              if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
              }
            },
            clickCover: function clickCover() {
              if (this.closeOnClickOverlay) {
                this.hide();
              }
            },
          },
          destroyed: function destroyed() {
            this.textTimer = null;
            this.timer = null;
          },
        };
        // CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=script&lang=js&
        /* harmony default export */ var toast_toastvue_type_script_lang_js_ = toastvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/toast/toast.vue

        /* normalize component */

        var toast_component = normalizeComponent(
          toast_toastvue_type_script_lang_js_,
          toastvue_type_template_id_8b1baa48_render,
          toastvue_type_template_id_8b1baa48_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var toast = toast_component.exports;
        // CONCATENATED MODULE: ./src/packages/toast/_toast.js

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }

        var ToastConstructor = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(toast);
        var _toast_instance;
        var instanceArr = [];
        var defaultOptionsMap = {};
        var defaultOptions = {
          msg: '',
          visible: false,
          duration: 2000,
          //显示时间(毫秒)
          timer: null,
          center: true,
          type: '',
          customClass: '',
          bottom: 30,
          size: 'base',
          icon: null,
          textAlignCenter: true,
          loadingRotate: true,
          bgColor: 'rgba(36, 36, 36, 0.8)',
          onClose: null,
          textTimer: null,
          cover: false,
          //透明遮罩层
          coverColor: 'rgba(0, 0, 0, 0)',
          timeStamp: null,
          closeOnClickOverlay: false,
        };
        var currentOptions = _objectSpread({}, defaultOptions);
        function _showToast() {
          _toast_instance.vm = _toast_instance.$mount();
          document.body.appendChild(_toast_instance.$el);
          // Vue.nextTick(() => {
          _toast_instance.visible = true;
          // });
        }

        function _getInstance(obj) {
          var opt = _objectSpread(
            _objectSpread(
              _objectSpread(
                {
                  id: new Date().getTime(),
                },
                currentOptions
              ),
              defaultOptionsMap[obj.type]
            ),
            obj
          );

          //有相同id者共用一个实例，否则新增实例
          if (opt['id'] && instanceArr[opt['id']]) {
            _toast_instance = instanceArr[opt['id']];
            _toast_instance.hide(true);
            _toast_instance = extends_default()(_toast_instance, opt);
          } else {
            _toast_instance = new ToastConstructor({
              data: extends_default()(opt, obj),
            });
            opt['id'] && (instanceArr[opt['id']] = _toast_instance);
          }
          _showToast();
          return _toast_instance;
        }
        function errorMsg(msg) {
          if (!msg) {
            console.warn('[NutUI Toast]: msg不能为空');
            return;
          }
        }
        var Toast = {
          text: function text(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            errorMsg(msg);
            return _getInstance(
              _objectSpread(
                _objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'text',
                }
              )
            );
          },
          success: function success(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            errorMsg(msg);
            return _getInstance(
              _objectSpread(
                _objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'success',
                }
              )
            );
          },
          fail: function fail(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            errorMsg(msg);
            return _getInstance(
              _objectSpread(
                _objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'fail',
                }
              )
            );
          },
          warn: function warn(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            errorMsg(msg);
            return _getInstance(
              _objectSpread(
                _objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'warn',
                }
              )
            );
          },
          loading: function loading(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            obj = _objectSpread(
              _objectSpread({}, obj),
              {},
              {
                id: obj.id || 'loading',
                msg: msg,
                type: 'loading',
              }
            );
            obj.cover = typeof obj.cover !== 'undefined' ? obj.cover : true; //loading类型默认打开遮罩层
            obj.duration = obj.duration || 0; //loading类型默认不自动关闭
            return _getInstance(obj);
          },
          setDefaultOptions: function setDefaultOptions(type, options) {
            if (typeof type === 'string') {
              defaultOptionsMap[type] = options;
            } else {
              extends_default()(currentOptions, type);
            }
          },
          resetDefaultOptions: function resetDefaultOptions(type) {
            if (typeof type === 'string') {
              defaultOptionsMap[type] = null;
            } else {
              currentOptions = _objectSpread({}, defaultOptions);
              defaultOptionsMap = {};
            }
          },
        };
        /* harmony default export */ var _toast = Toast;
        // EXTERNAL MODULE: ./src/packages/toast/toast.scss
        var toast_toast = __webpack_require__(25);

        // CONCATENATED MODULE: ./src/packages/toast/index.js

        _toast.install = function (Vue) {
          Vue.prototype['$toast'] = _toast;
        };
        /* harmony default export */ var packages_toast = _toast;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/actionsheet/actionsheet.vue?vue&type=template&id=2be58a63&
        var actionsheetvue_type_template_id_2be58a63_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-actionsheet' },
            [
              _vm.isShowMask
                ? _c('transition', { attrs: { name: _vm.isAnimation ? 'nutFade' : '' } }, [
                    _c('div', {
                      directives: [{ name: 'show', rawName: 'v-show', value: _vm.isVisible, expression: 'isVisible' }],
                      staticClass: 'nut-actionsheet-mask',
                      on: { click: _vm.clickActionSheetMask },
                    }),
                  ])
                : _vm._e(),
              _vm._v(' '),
              _c('transition', { attrs: { name: _vm.isAnimation ? 'nutSlideUp' : '' } }, [
                _c(
                  'div',
                  {
                    directives: [{ name: 'show', rawName: 'v-show', value: _vm.isVisible, expression: 'isVisible' }],
                    staticClass: 'nut-actionsheet-panel',
                  },
                  [
                    _c('div', { staticClass: 'nut-actionsheet-custom' }, [_vm._t('custom')], 2),
                    _vm._v(' '),
                    _vm.$slots.title || _vm.$slots.subTitle
                      ? _c('dl', { staticClass: 'nut-actionsheet-modal' }, [
                          _c('dt', { staticClass: 'nut-actionsheet-title' }, [_vm._t('title')], 2),
                          _vm._v(' '),
                          _c('dd', { staticClass: 'nut-actionsheet-sub-title' }, [_vm._t('sub-title')], 2),
                        ])
                      : _vm._e(),
                    _vm._v(' '),
                    _c(
                      'ul',
                      { staticClass: 'nut-actionsheet-menu' },
                      _vm._l(_vm.menuItems, function (item, index) {
                        return _c(
                          'li',
                          {
                            key: index,
                            staticClass: 'nut-actionsheet-item',
                            class: { 'nut-actionsheet-item-active': _vm.isHighlight(item), 'nut-actionsheet-item-disabled': item.disable },
                            on: {
                              click: function ($event) {
                                return _vm.chooseItem(item, index);
                              },
                            },
                          },
                          [_vm._v(_vm._s(item[_vm.optionTag]))]
                        );
                      }),
                      0
                    ),
                    _vm._v(' '),
                    _vm.cancelTxt
                      ? _c('div', { staticClass: 'nut-actionsheet-cancel', on: { click: _vm.cancelActionSheet } }, [_vm._v(_vm._s(_vm.cancelTxt))])
                      : _vm._e(),
                  ]
                ),
              ]),
            ],
            1
          );
        };
        var actionsheetvue_type_template_id_2be58a63_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue?vue&type=template&id=2be58a63&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/actionsheet/actionsheet.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var actionsheetvue_type_script_lang_js_ = {
          name: 'nut-actionsheet',
          props: {
            isAnimation: {
              type: Boolean,
              default: true,
            },
            isLockBgScroll: {
              type: Boolean,
              default: false,
            },
            isVisible: {
              type: Boolean,
              default: false,
            },
            isShowMask: {
              type: Boolean,
              default: true,
            },
            isClickChooseClose: {
              type: Boolean,
              default: true,
            },
            isClickCloseMask: {
              type: Boolean,
              default: true,
            },
            cancelTxt: {
              type: String,
              default: '',
            },
            optionTag: {
              type: String,
              default: 'name',
            },
            chooseTagValue: {
              type: String,
              default: '',
            },
            menuItems: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
          },
          data: function data() {
            return {};
          },
          watch: {
            isVisible: function isVisible(value) {
              !!value && this.$emit('open');
              if (this.isLockBgScroll) {
                if (value) {
                  document.body.classList.add('nut-overflow-hidden');
                } else {
                  this.removeLockScroll();
                }
              }
            },
          },
          deactivated: function deactivated() {
            this.removeLockScroll();
          },
          destroyed: function destroyed() {
            this.removeLockScroll();
          },
          methods: {
            removeLockScroll: function removeLockScroll() {
              document.body.classList.remove('nut-overflow-hidden');
            },
            isHighlight: function isHighlight(item) {
              return (this.chooseTagValue && this.chooseTagValue == item[this.optionTag]) || this.chooseTagValue === 0;
            },
            closeActionSheet: function closeActionSheet() {
              this.$emit('close');
            },
            cancelActionSheet: function cancelActionSheet() {
              this.closeActionSheet();
              this.$emit('cancel');
            },
            clickActionSheetMask: function clickActionSheetMask() {
              this.isClickCloseMask && this.closeActionSheet();
            },
            chooseItem: function chooseItem(item, index) {
              if (!item.disable) {
                if (this.isClickChooseClose) {
                  this.closeActionSheet();
                }
                this.$emit('choose', item, index);
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue?vue&type=script&lang=js&
        /* harmony default export */ var actionsheet_actionsheetvue_type_script_lang_js_ = actionsheetvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue

        /* normalize component */

        var actionsheet_component = normalizeComponent(
          actionsheet_actionsheetvue_type_script_lang_js_,
          actionsheetvue_type_template_id_2be58a63_render,
          actionsheetvue_type_template_id_2be58a63_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var actionsheet = actionsheet_component.exports;
        // EXTERNAL MODULE: ./src/packages/actionsheet/actionsheet.scss
        var actionsheet_actionsheet = __webpack_require__(7);

        // CONCATENATED MODULE: ./src/packages/actionsheet/index.js

        actionsheet.install = function (Vue) {
          Vue.component(actionsheet.name, actionsheet);
        };
        /* harmony default export */ var packages_actionsheet = actionsheet;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tab/tab.vue?vue&type=template&id=eccc7fee&
        var tabvue_type_template_id_eccc7fee_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-tab-part' }, [
            _c('div', { staticClass: 'nut-tab', class: { 'nut-tab-horizontal': _vm.positionNavCss } }, [
              _vm.positionNav == 'right' || _vm.positionNav == 'bottom'
                ? _c('div', { ref: 'items', staticClass: 'nut-tab-item' }, [_vm._t('default')], 2)
                : _vm._e(),
              _vm._v(' '),
              _c(
                'div',
                { ref: 'navlist', class: _vm.titleClass, style: _vm.customHeight },
                [
                  _vm.isShowLine ? _c('b', { class: _vm.navBarClass, style: _vm.navBarStyle }) : _vm._e(),
                  _vm._v(' '),
                  _vm._l(_vm.tabTitleList, function (value, index) {
                    return _c(
                      'span',
                      {
                        key: index,
                        class: [
                          _vm.titleNavList,
                          'nut-title-nav',
                          { 'nut-tab-disable': value.disable },
                          { 'nut-tab-active': _vm.activeIndex == index },
                        ],
                      },
                      [
                        _c(
                          'a',
                          {
                            staticClass: 'nut-tab-link',
                            on: {
                              click: function ($event) {
                                return _vm.switchTab(index, $event, value.disable);
                              },
                            },
                          },
                          [
                            !!value.tabSlot
                              ? _vm._t(value.tabSlot, null, { item: value })
                              : !!value.badge
                              ? _c(
                                  'nut-badge',
                                  {
                                    attrs: {
                                      value: value.badge.value,
                                      max: value.badge.max,
                                      zIndex: value.badge.zIndex,
                                      isDot: value.badge.isDot,
                                      hidden: value.badge.hidden,
                                      top: value.badge.top,
                                      left: value.badge.left,
                                    },
                                  },
                                  [
                                    value.iconUrl
                                      ? _c('i', { staticClass: 'nut-tab-icon', style: { backgroundImage: 'url(' + value.iconUrl + ')' } })
                                      : _vm._e(),
                                    _vm._v('\n            ' + _vm._s(value.tabTitle) + '\n          '),
                                  ]
                                )
                              : [
                                  value.iconUrl
                                    ? _c('i', { staticClass: 'nut-tab-icon', style: { backgroundImage: 'url(' + value.iconUrl + ')' } })
                                    : _vm._e(),
                                  _vm._v('\n            ' + _vm._s(value.tabTitle) + '\n          '),
                                ],
                          ],
                          2
                        ),
                      ]
                    );
                  }),
                ],
                2
              ),
              _vm._v(' '),
              _vm.positionNav == 'top' || _vm.positionNav == 'left'
                ? _c('div', { ref: 'items', staticClass: 'nut-tab-item', style: _vm.customHeight }, [_vm._t('default')], 2)
                : _vm._e(),
            ]),
          ]);
        };
        var tabvue_type_template_id_eccc7fee_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/tab/tab.vue?vue&type=template&id=eccc7fee&

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
        var toConsumableArray = __webpack_require__(0);
        var toConsumableArray_default = /*#__PURE__*/ __webpack_require__.n(toConsumableArray);

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tab/tab.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var tabvue_type_script_lang_js_ = {
          name: 'nut-tab',
          props: {
            isScroll: {
              type: Boolean,
              default: false,
            },
            isShowLine: {
              type: Boolean,
              default: true,
            },
            defIndex: {
              type: Number,
              default: 0,
            },
            positionNav: {
              type: String,
              default: 'top',
            },
            initData: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            wrapperHeight: {
              type: [String, Number],
              default: '200',
            },
            lineWidth: {
              type: Number,
              default: 0,
            },
          },
          data: function data() {
            return {
              tabTitleList: [],
              activeIndex: this.defIndex,
              initX: '0',
              navWidth: 0,
              tapWidth: 0,
              smoothFlag: true,
            };
          },
          watch: {
            $route: {
              handler: function handler(val, oldval) {
                this.smoothFlag = false;
                this.scrollTab(this.activeIndex);
              },
              // 深度观察监听
              deep: true,
            },
            isScroll: function isScroll() {
              this.updeteTab();
            },
            lineWidth: function lineWidth() {
              this.updeteTab();
            },
            defIndex: function defIndex() {
              this.updeteTab();
            },
            initData: {
              handler: function handler() {
                this.updeteTab();
              },
              deep: true,
            },
          },
          computed: {
            //下面有些样式名称是为了兼容之前的版本
            positionNavCss: function positionNavCss() {
              if (this.positionNav === 'left' || this.positionNav === 'right') return true;
            },
            titleClass: function titleClass() {
              var smooth = this.smoothFlag ? 'nut-tab-title-smooth' : '';
              if (this.positionNav == 'top') {
                return 'nut-tab-title' + ' ' + smooth;
              }
              return 'nut-tab-title-' + this.positionNav + 'nav' + ' ' + smooth;
            },
            navBarClass: function navBarClass() {
              if (this.positionNav == 'top') {
                return 'nav-bar';
              }
              return 'nav-bar-' + this.positionNav;
            },
            titleNavList: function titleNavList() {
              if (this.positionNav == 'top' || this.positionNav == 'bottom') {
                if (this.isScroll) {
                  return 'nut-title-nav-scroll';
                }
                return 'nut-title-nav-list';
              } else {
                if (this.isScroll) {
                  return 'nut-title-vertical-scroll';
                }
                return 'nut-title-nav-' + this.positionNav + 'nav';
              }
            },
            navBarStyle: function navBarStyle() {
              if (this.positionNav === 'top' || this.positionNav === 'bottom') {
                return {
                  transform: 'translateX('.concat(this.initX, 'px)'),
                  //width: this.navWidth + 'px'
                  width: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px',
                };
              }
              return {
                transform: 'translateY('.concat(this.initX, 'px)'),
                //height: this.navWidth + 'px'
                height: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px',
              };
            },
            customHeight: function customHeight() {
              if (this.isScroll && (this.positionNav === 'left' || this.positionNav === 'right')) {
                return {
                  height: this.wrapperHeight + 'px',
                };
              } else {
                return null;
              }
            },
          },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              _this.$slots.default && _this.updeteTab(_this.$slots.default);
            });
          },
          methods: {
            updeteTab: function updeteTab() {
              var _this2 = this;
              this.$nextTick(function () {
                _this2.tabTitleList = [];
                _this2.activeIndex = _this2.defIndex;
                _this2.initTab(toConsumableArray_default()(_this2.$slots.default));
              });
            },
            initTab: function initTab(slot) {
              var _this3 = this;
              for (var i = 0; i < slot.length; i++) {
                var slotTag = slot[i].tag;
                if (typeof slotTag == 'string' && slotTag.indexOf('nut-tab-panel') != -1) {
                  var attrs = slot[i].data.attrs;
                  var item = {
                    tabTitle: attrs['tab-title'] || attrs['tabTitle'],
                    disable: attrs.disable === false,
                    iconUrl: attrs['iconUrl'] || attrs['icon-url'],
                    tabSlot: attrs['tab-slot'] || attrs['tabSlot'] || '',
                    badge: attrs['badge'] || false,
                  };
                  this.tabTitleList.push(item);
                  //   let slotElm = slot[i].elm;
                  //   if (slotElm) {
                  //     slotElm.classList.add('hide');
                  //     if (this.activeIndex == i) {
                  //       slotElm.classList.remove('hide');
                  //     }
                  //   }
                }
              }

              this.$nextTick(function () {
                var tapWidth;
                if (_this3.positionNav == 'top' || _this3.positionNav == 'bottom') {
                  _this3.navWidth = _this3.$refs.navlist.querySelector('.nut-title-nav').offsetWidth;
                  tapWidth = _this3.$refs.navlist.offsetWidth;
                } else {
                  _this3.navWidth = _this3.$refs.navlist.querySelector('.nut-title-nav').offsetHeight;
                  tapWidth = _this3.$refs.navlist.offsetHeight;
                }
                // this.initX = parseInt(this.navWidth * this.defIndex);
                // this.tapWidth = tapWidth / 2 - this.navWidth / 2;
                if (_this3.lineWidth > 0 && _this3.lineWidth < _this3.navWidth) {
                  _this3.initX = parseInt((_this3.navWidth - _this3.lineWidth) / 2 + _this3.navWidth * _this3.defIndex);
                  _this3.tapWidth = tapWidth / 2 - _this3.navWidth / 2;
                } else {
                  _this3.initX = parseInt(_this3.navWidth * _this3.defIndex);
                  _this3.tapWidth = tapWidth / 2 - _this3.navWidth / 2;
                }
                _this3.scrollTab(_this3.activeIndex);
              });
            },
            findParent: function findParent(event, myclass) {
              var parentCpt = event.target;
              var flag = 0; //避免死循环
              while (parentCpt && flag < 10) {
                flag++;
                if (parentCpt.className && parentCpt.className === myclass) {
                  break;
                }
                parentCpt = parentCpt.parentNode;
              }
              return parentCpt;
            },
            switchTab: function switchTab(index, event, disable) {
              if (!disable) {
                this.smoothFlag = true;
                this.activeIndex = index;
                // this.initX = parseInt(this.navWidth * index);
                this.scrollTab(index);
                this.$emit('tab-switch', index, event);
                this.$emit('tabSwitch', index, event); //兼容以前驼峰法命名
              }
            },
            scrollTab: function scrollTab(index) {
              if (this.lineWidth > 0 && this.lineWidth < this.navWidth) {
                this.initX = parseInt((this.navWidth - this.lineWidth) / 2 + this.navWidth * index);
              } else {
                this.initX = parseInt(this.navWidth * index);
              }
              if (this.$refs.navlist.scroll) {
                if (this.positionNav == 'top' || this.positionNav == 'bottom') {
                  this.$refs.navlist.scroll(this.initX - this.tapWidth, 0, 0);
                } else {
                  this.$refs.navlist.scroll(0, this.initX - this.tapWidth);
                }
              }
              var items = this.$refs.items.children;
              for (var i = 0; i < items.length; i++) {
                if (i == index) {
                  items[i].classList.remove('hide');
                } else {
                  items[i].classList.add('hide');
                }
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/tab/tab.vue?vue&type=script&lang=js&
        /* harmony default export */ var tab_tabvue_type_script_lang_js_ = tabvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/tab/tab.vue

        /* normalize component */

        var tab_component = normalizeComponent(
          tab_tabvue_type_script_lang_js_,
          tabvue_type_template_id_eccc7fee_render,
          tabvue_type_template_id_eccc7fee_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var tab = tab_component.exports;
        // EXTERNAL MODULE: ./src/packages/tab/tab.scss
        var tab_tab = __webpack_require__(8);

        // CONCATENATED MODULE: ./src/packages/tab/index.js

        tab.install = function (Vue) {
          Vue.component(tab.name, tab);
        };
        /* harmony default export */ var packages_tab = tab;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabpanel/tabpanel.vue?vue&type=template&id=76d1f316&
        var tabpanelvue_type_template_id_76d1f316_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-tab-panel hide' }, [_vm._t('default')], 2);
        };
        var tabpanelvue_type_template_id_76d1f316_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue?vue&type=template&id=76d1f316&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabpanel/tabpanel.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var tabpanelvue_type_script_lang_js_ = {
          name: 'nut-tab-panel',
          props: {},
          data: function data() {
            return {};
          },
          computed: {},
          mounted: function mounted() {},
          methods: {},
        };
        // CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue?vue&type=script&lang=js&
        /* harmony default export */ var tabpanel_tabpanelvue_type_script_lang_js_ = tabpanelvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue

        /* normalize component */

        var tabpanel_component = normalizeComponent(
          tabpanel_tabpanelvue_type_script_lang_js_,
          tabpanelvue_type_template_id_76d1f316_render,
          tabpanelvue_type_template_id_76d1f316_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var tabpanel = tabpanel_component.exports;
        // EXTERNAL MODULE: ./src/packages/tabpanel/tabpanel.scss
        var tabpanel_tabpanel = __webpack_require__(28);

        // CONCATENATED MODULE: ./src/packages/tabpanel/index.js

        tabpanel.install = function (Vue) {
          Vue.component(tabpanel.name, tabpanel);
        };
        /* harmony default export */ var packages_tabpanel = tabpanel;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabbar/tabbar.vue?vue&type=template&id=475f5c4a&
        var tabbarvue_type_template_id_475f5c4a_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-tabbar', class: { bottom: _vm.bottom } },
            _vm._l(_vm.tabList, function (value, index) {
              return _c(
                'a',
                {
                  key: value.tabTitle,
                  staticClass: 'tabbar-nav',
                  class: [{ curr: index == _vm.currIndex }, _vm.type],
                  on: {
                    click: function ($event) {
                      return _vm.switchTabs(value, index);
                    },
                  },
                },
                [
                  _c(
                    'span',
                    { staticClass: 'icon-box' },
                    [
                      value.num && value.num <= 99
                        ? _c('b', { staticClass: 'tips num' }, [_vm._v(_vm._s(value.num))])
                        : value.num && value.num >= 100
                        ? _c('b', { staticClass: 'tips' }, [_vm._v(_vm._s('...'))])
                        : _vm._e(),
                      _vm._v(' '),
                      value.icon
                        ? [
                            _c('div', {
                              staticClass: 'icon',
                              style: { backgroundImage: 'url(' + (index == _vm.currIndex ? value.activeIcon : value.icon) + ')' },
                            }),
                          ]
                        : _vm._e(),
                      _vm._v(' '),
                      _c('span', { class: ['tabbar-nav-word', { 'big-word': !value.icon }] }, [_vm._v(_vm._s(value.tabTitle))]),
                    ],
                    2
                  ),
                ]
              );
            }),
            0
          );
        };
        var tabbarvue_type_template_id_475f5c4a_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/tabbar/tabbar.vue?vue&type=template&id=475f5c4a&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabbar/tabbar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var tabbarvue_type_script_lang_js_ = {
          name: 'nut-tabbar',
          props: {
            tabbarList: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            bottom: {
              type: Boolean,
              default: false,
            },
            type: {
              type: String,
              default: 'based',
            },
            replace: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              currIndex: null,
              tabList: this.tabbarList,
            };
          },
          mounted: function mounted() {
            this.initBar();
          },
          watch: {
            tabbarList: {
              handler: function handler(value) {
                this.tabList = value;
                this.initBar();
              },
              deep: true,
            },
          },
          methods: {
            initBar: function initBar() {
              var _this = this;
              this.tabList.forEach(function (item, index) {
                if (item.curr) {
                  _this.currIndex = index;
                }
              });
            },
            switchTabs: function switchTabs(value, index) {
              this.currIndex = index;
              if (this.replace) {
                //替换url
                window.location.replace(value.href);
              } else {
                if (value.href) {
                  window.location.href = value.href;
                }
              }
              this.$emit('tab-switch', value, index);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/tabbar/tabbar.vue?vue&type=script&lang=js&
        /* harmony default export */ var tabbar_tabbarvue_type_script_lang_js_ = tabbarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/tabbar/tabbar.vue

        /* normalize component */

        var tabbar_component = normalizeComponent(
          tabbar_tabbarvue_type_script_lang_js_,
          tabbarvue_type_template_id_475f5c4a_render,
          tabbarvue_type_template_id_475f5c4a_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var tabbar = tabbar_component.exports;
        // EXTERNAL MODULE: ./src/packages/tabbar/tabbar.scss
        var tabbar_tabbar = __webpack_require__(29);

        // CONCATENATED MODULE: ./src/packages/tabbar/index.js

        tabbar.install = function (Vue) {
          Vue.component(tabbar.name, tabbar);
        };
        /* harmony default export */ var packages_tabbar = tabbar;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/calendar/calendar.vue?vue&type=template&id=1036820e&
        var calendarvue_type_template_id_1036820e_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('transition', { attrs: { name: _vm.animation } }, [
            _c(
              'div',
              {
                directives: [{ name: 'show', rawName: 'v-show', value: _vm.childIsVisible, expression: 'childIsVisible' }],
                staticClass: 'nut-calendar',
              },
              [
                _c('div', { staticClass: 'nut-calendar-control' }, [
                  (_vm.type == 'range' && _vm.currDate && _vm.currDate.length == 2) || _vm.type != 'range'
                    ? _c('span', { staticClass: 'nut-calendar-confirm-btn', on: { click: _vm.confirm } }, [
                        _vm._v(_vm._s(_vm.nutTranslate('lang.okBtnTxt'))),
                      ])
                    : _vm._e(),
                  _vm._v(' '),
                  _c('span', { staticClass: 'nut-calendar-cancel-btn', on: { click: _vm.closeActionSheet } }, [
                    _vm._v(_vm._s(_vm.nutTranslate('lang.cancelBtnTxt'))),
                  ]),
                  _vm._v(' '),
                  _c('div', { staticClass: 'nut-calendar-title' }, [_vm._v(_vm._s(_vm.title || _vm.nutTranslate('lang.calendar.title')))]),
                  _vm._v(' '),
                  _c(
                    'div',
                    { staticClass: 'nut-calendar-week' },
                    _vm._l(_vm.week, function (item, index) {
                      return _c('span', { key: index }, [_vm._v(_vm._s(item))]);
                    }),
                    0
                  ),
                ]),
                _vm._v(' '),
                _c(
                  'div',
                  {
                    staticClass: 'nut-calendar-months',
                    on: {
                      touchstart: function ($event) {
                        $event.stopPropagation();
                        return _vm.touchStart($event);
                      },
                      touchmove: function ($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.touchMove($event);
                      },
                      touchend: function ($event) {
                        $event.stopPropagation();
                        return _vm.touchEnd($event);
                      },
                    },
                  },
                  [
                    _c(
                      'div',
                      { ref: 'months', staticClass: 'nut-calendar-months-panel' },
                      [
                        _c('div', { staticClass: 'nut-calendar-loading-tip' }, [
                          _vm._v(
                            _vm._s(!_vm.unLoadPrev ? _vm.nutTranslate('lang.calendar.loadPrevMonth') : _vm.nutTranslate('lang.calendar.noMoreMonth'))
                          ),
                        ]),
                        _vm._v(' '),
                        _vm._l(_vm.monthsData, function (month, index) {
                          return _c('div', { key: index, staticClass: 'nut-calendar-month' }, [
                            _c('div', { staticClass: 'nut-calendar-month-title' }, [_vm._v(_vm._s(month.title))]),
                            _vm._v(' '),
                            _c('div', { staticClass: 'nut-calendar-month-con' }, [
                              _c(
                                'div',
                                { staticClass: 'nut-calendar-month-item' },
                                [
                                  _vm._l(month.monthData, function (day, i) {
                                    return [
                                      _c(
                                        'div',
                                        {
                                          key: i,
                                          staticClass: 'nut-calendar-month-day',
                                          class: _vm.getClass(day, month),
                                          on: {
                                            click: function ($event) {
                                              return _vm.chooseDay(day, month);
                                            },
                                          },
                                        },
                                        [
                                          _c('span', [_vm._v(_vm._s(day.type == 'curr' ? day.day : ''))]),
                                          _vm._v(' '),
                                          _vm.isStartTip(day, month)
                                            ? _c('span', { staticClass: 'nut-calendar-day-tip' }, [
                                                _vm._v(_vm._s(_vm.nutTranslate('lang.calendar.start'))),
                                              ])
                                            : _vm.isEndTip(day, month)
                                            ? _c('span', { staticClass: 'nut-calendar-day-tip' }, [
                                                _vm._v(_vm._s(_vm.nutTranslate('lang.calendar.end'))),
                                              ])
                                            : _vm._e(),
                                        ]
                                      ),
                                    ];
                                  }),
                                ],
                                2
                              ),
                            ]),
                          ]);
                        }),
                      ],
                      2
                    ),
                  ]
                ),
              ]
            ),
          ]);
        };
        var calendarvue_type_template_id_1036820e_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/calendar/calendar.vue?vue&type=template&id=1036820e&

        // CONCATENATED MODULE: ./src/utils/date.js
        var Utils = {
          /**
           * 是否为闫年
           * @return {Boolse} true|false
           */
          isLeapYear: function isLeapYear(y) {
            return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
          },
          /**
           * 返回星期数
           * @return {Number}
           */
          getWhatDay: function getWhatDay(year, month, day) {
            var date = new Date(year + '/' + month + '/' + day);
            var index = date.getDay();
            var dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            return dayNames[index];
          },
          /**
           * 返回星期数
           * @return {Number}
           */
          getMonthPreDay: function getMonthPreDay(year, month) {
            var date = new Date(year + '/' + month + '/01');
            var day = date.getDay();
            if (day == 0) {
              day = 7;
            }
            return day;
          },
          /**
           * 返回月份天数
           * @return {Number}
           */
          getMonthDays: function getMonthDays(year, month) {
            if (/^0/.test(month)) {
              month = month.split('')[1];
            }
            return [0, 31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
          },
          /**
           * 补齐数字位数
           * @return {string}
           */
          getNumTwoBit: function getNumTwoBit(n) {
            n = Number(n);
            return (n > 9 ? '' : '0') + n;
          },
          /**
           * 日期对象转成字符串
           * @return {string}
           */
          date2Str: function date2Str(date, split) {
            if (typeof date == 'string') return date;
            split = split || '-';
            var y = date.getFullYear();
            var m = this.getNumTwoBit(date.getMonth() + 1);
            var d = this.getNumTwoBit(date.getDate());
            return [y, m, d].join(split);
          },
          /**
           * 返回日期格式字符串
           * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
           * @return {string} '2014-12-31'
           */
          getDay: function getDay(i) {
            i = i || 0;
            var date = new Date();
            var diff = i * (1000 * 60 * 60 * 24);
            date = new Date(date.getTime() + diff);
            return this.date2Str(date);
          },
          /**
           * 时间戳转换为日期格式
           * @return {String}
           */
          timestampToDate: function timestampToDate(timestamp) {
            var date = new Date(timestamp);
            return date.getFullYear() + '-' + getNumTwoBit(date.getMonth() + 1) + '-' + getNumTwoBit(date.getDate());
          },
          /**
           * 时间比较
           * @return {Boolean}
           */
          compareDate: function compareDate(date1, date2) {
            var startTime = new Date(date1.replace('-', '/').replace('-', '/'));
            var endTime = new Date(date2.replace('-', '/').replace('-', '/'));
            if (startTime >= endTime) {
              return false;
            }
            return true;
          },
          /**
           * 时间比较
           * @return {Boolean}
           */
          compareDateArr: function compareDateArr(date1, date2) {
            var startTime = new Date();
            startTime.setFullYear(parseInt(date1[0]), parseInt(date1[1]) - 1, parseInt(date1[2]));
            startTime.setHours(parseInt(date1[3]), parseInt(date1[4]));
            var endTime = new Date();
            endTime.setFullYear(parseInt(date2[0]), parseInt(date2[1]) - 1, parseInt(date2[2]));
            endTime.setHours(parseInt(date2[3]), parseInt(date2[4]));
            if (startTime >= endTime) {
              return false;
            }
            return true;
          },
          /**
           * 时间是否相等
           * @return {Boolean}
           */
          isEqual: function isEqual(date1, date2) {
            var startTime = new Date(date1).getTime();
            var endTime = new Date(date2).getTime();
            if (startTime == endTime) {
              return true;
            }
            return false;
          },
          getDateArr: function getDateArr(str) {
            return [this.getYear(str), this.getMonth(str), this.getDate(str), this.getHour(str), this.getMinute(str)];
          },
          isDateString: function isDateString(str) {
            return /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str) || /^([01][0-9]|2[0-3])(:[0-5][0-9]){1,2}$/.test(str);
          },
          getYear: function getYear(value) {
            return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
          },
          getMonth: function getMonth(value) {
            return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
          },
          getDate: function getDate(value) {
            return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
          },
          getHour: function getHour(value) {
            if (this.isDateString(value)) {
              var str = value.split(' ')[1] || '00:00:00';
              return str.split(':')[0];
            }
            return value.getHours();
          },
          getMinute: function getMinute(value) {
            if (this.isDateString(value)) {
              var str = value.split(' ')[1] || '00:00:00';
              return str.split(':')[1];
            }
            return value.getMinutes();
          },
        };
        /* harmony default export */ var date = Utils;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/calendar/calendar.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var calendarvue_type_script_lang_js_ = {
          name: 'nut-calendar',
          mixins: [mixins_locale],
          props: {
            type: {
              type: String,
              default: 'one',
            },
            animation: {
              type: String,
              default: 'nutSlideUp',
            },
            isAutoBackFill: {
              type: Boolean,
              default: false,
            },
            isOpenRangeSelect: {
              type: Boolean,
              default: false,
            },
            isVisible: {
              type: Boolean,
              default: false,
            },
            title: {
              type: String,
            },
            defaultValue: {
              type: String | Array,
              default: null,
            },
            startDate: {
              type: String,
              //default: null
              default: date.getDay(0),
            },
            endDate: {
              type: String,
              //default: null
              default: date.getDay(365),
            },
          },
          watch: {
            isVisible: function isVisible(newValue, oldValue) {
              this.childIsVisible = newValue;
            },
            defaultValue: {
              handler: function handler(oldValue, val) {
                if (val) {
                  this.resetRender();
                }
              },
              immediate: true,
            },
          },
          data: function data() {
            var week = this.nutTranslate('lang.calendar.week');
            return {
              childIsVisible: false,
              currDate: null,
              week: week.split(','),
              unLoadPrev: false,
              unLoadNext: false,
              touchParams: {
                startY: 0,
                endY: 0,
                startTime: 0,
                endTime: 0,
              },
              transformY: 0,
              scrollDistance: 0,
              defaultData: null,
              chooseData: [],
              monthsData: [],
              dayPrefix: 'nut-calendar-month-day',
            };
          },
          computed: {
            isRange: function isRange() {
              return this.type === 'range';
            },
          },
          methods: {
            isActive: function isActive(day, month) {
              return this.isRange && day.type == 'curr' && this.getClass(day, month) == 'nut-calendar-month-day-active';
            },
            isStartTip: function isStartTip(day, month) {
              if (this.isActive(day, month)) {
                return this.isStart(this.getCurrDate(day, month));
              } else {
                return false;
              }
            },
            isEndTip: function isEndTip(day, month) {
              return this.isActive(day, month);
            },
            getCurrData: function getCurrData(type) {
              var monthData = type == 'prev' ? this.monthsData[0] : this.monthsData[this.monthsData.length - 1];
              var year = parseInt(monthData.curData[0]);
              var month = parseInt(monthData.curData[1].toString().replace(/^0/, ''));
              switch (type) {
                case 'prev':
                  month == 1 && (year -= 1);
                  month = month == 1 ? 12 : --month;
                  break;
                case 'next':
                  month == 12 && (year += 1);
                  month = month == 12 ? 1 : ++month;
                  break;
              }
              return [year, date.getNumTwoBit(month), date.getMonthDays(year, month)];
            },
            getDaysStatus: function getDaysStatus(days, type) {
              // 修复：当某个月的1号是周日时，月份下方会空出来一行
              if (type == 'prev' && days >= 7) {
                days -= 7;
              }
              return Array.from(Array(days), function (v, k) {
                return {
                  day: k + 1,
                  type: type,
                };
              });
            },
            getMonth: function getMonth(curData, type) {
              var preMonthDays = date.getMonthPreDay(curData[0], curData[1]);
              var currMonthDays = date.getMonthDays(curData[0], curData[1]);
              var nextMonthDays = 42 - preMonthDays - currMonthDays;
              var title = this.nutTranslate('lang.calendar.monthTitle', {
                year: curData[0],
                month: curData[1],
              });
              var monthInfo = {
                curData: curData,
                title: title,
                monthData: [].concat(
                  toConsumableArray_default()(this.getDaysStatus(preMonthDays, 'prev')),
                  toConsumableArray_default()(this.getDaysStatus(currMonthDays, 'curr'))
                ),
              };
              if (type == 'next') {
                if (
                  !this.endData ||
                  !date.compareDate(
                    ''.concat(this.endData[0], '-').concat(this.endData[1], '-').concat(date.getMonthDays(this.endData[0], this.endData[1])),
                    ''.concat(curData[0], '-').concat(curData[1], '-').concat(curData[2])
                  )
                ) {
                  this.monthsData.push(monthInfo);
                } else {
                  this.unLoadNext = true;
                }
              } else {
                if (
                  !this.startData ||
                  !date.compareDate(
                    ''.concat(curData[0], '-').concat(curData[1], '-').concat(curData[2]),
                    ''.concat(this.startData[0], '-').concat(this.startData[1], '-01')
                  )
                ) {
                  this.monthsData.unshift(monthInfo);
                } else {
                  this.unLoadPrev = true;
                }
              }
            },
            getCurrDate: function getCurrDate(day, month, isRange) {
              return isRange
                ? month.curData[3] + '-' + month.curData[4] + '-' + date.getNumTwoBit(day.day)
                : month.curData[0] + '-' + month.curData[1] + '-' + date.getNumTwoBit(day.day);
            },
            isStart: function isStart(currDate) {
              return date.isEqual(this.currDate[0], currDate);
            },
            isEnd: function isEnd(currDate) {
              return date.isEqual(this.currDate[1], currDate);
            },
            splitDate: function splitDate(date) {
              return date.split('-');
            },
            getClass: function getClass(day, month, isRange) {
              var currDate = this.getCurrDate(day, month, isRange);
              if (day.type == 'curr') {
                if ((!this.isRange && date.isEqual(this.currDate, currDate)) || (this.isRange && (this.isStart(currDate) || this.isEnd(currDate)))) {
                  return ''.concat(this.dayPrefix, '-active');
                } else if (
                  (this.startDate && date.compareDate(currDate, this.startDate)) ||
                  (this.endDate && date.compareDate(this.endDate, currDate))
                ) {
                  return ''.concat(this.dayPrefix, '-disabled');
                } else if (
                  this.isRange & (this.currDate.length == 2) &&
                  date.compareDate(this.currDate[0], currDate) &&
                  date.compareDate(currDate, this.currDate[1])
                ) {
                  return ''.concat(this.dayPrefix, '-choose');
                } else {
                  return null;
                }
              } else {
                return ''.concat(this.dayPrefix, '-disabled');
              }
            },
            chooseDay: function chooseDay(day, month, isFirst, isRange) {
              if (this.getClass(day, month, isRange) != ''.concat(this.dayPrefix, '-disabled')) {
                var days = toConsumableArray_default()(month.curData);
                days = isRange ? days.splice(3) : days.splice(0, 3);
                days[2] = typeof day.day == 'number' ? date.getNumTwoBit(day.day) : day.day;
                days[3] = ''.concat(days[0], '-').concat(days[1], '-').concat(days[2]);
                days[4] = date.getWhatDay(days[0], days[1], days[2]);
                if (!this.isRange) {
                  this.currDate = days[3];
                  this.chooseData = toConsumableArray_default()(days);
                } else {
                  if (this.currDate.length == 2) {
                    this.currDate = [days[3]];
                  } else {
                    if (date.compareDate(this.currDate[0], days[3])) {
                      this.currDate.push(days[3]);
                    } else {
                      this.currDate.unshift(days[3]);
                    }
                  }
                  if (this.chooseData.length == 2 || !this.chooseData.length) {
                    this.chooseData = toConsumableArray_default()(days);
                  } else {
                    if (date.compareDate(this.chooseData[3], days[3])) {
                      this.chooseData = [toConsumableArray_default()(this.chooseData), toConsumableArray_default()(days)];
                    } else {
                      this.chooseData = [toConsumableArray_default()(days), toConsumableArray_default()(this.chooseData)];
                    }
                  }
                }
                if (this.isAutoBackFill && !isFirst) {
                  this.confirm();
                }
                this.$emit('choose-click', this.chooseData);
              }
            },
            confirm: function confirm() {
              if ((this.isRange && this.chooseData.length == 2) || !this.isRange) {
                this.$emit('choose', this.chooseData);
                this.childIsVisible = false;
                this.$emit('update:is-visible', false);
              }
            },
            resetRender: function resetRender() {
              this.chooseData.splice(0);
              this.monthsData.splice(0);
              this.scrollDistance = 0;
              this.translateY = 0;
              this.setTransform(this.scrollDistance);
              this.initData();
            },
            closeActionSheet: function closeActionSheet() {
              this.childIsVisible = false;
              this.$emit('update:is-visible', false);
              this.$emit('close');
              this.resetRender();
            },
            touchStart: function touchStart(event) {
              var changedTouches = event.changedTouches[0];
              this.touchParams.startY = changedTouches.pageY;
              this.touchParams.startTime = event.timestamp || Date.now();
              this.transformY = this.scrollDistance;
            },
            touchMove: function touchMove(event) {
              //event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              if (Math.abs(move) < 5) {
                return false;
              }
              this.setMove(move);
            },
            touchEnd: function touchEnd(event) {
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              if (Math.abs(move) < 5) {
                return false;
              }
              var updateMove = move + this.transformY;
              var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
              var offsetHeight = this.$refs.months.offsetHeight;
              if (updateMove > 0) {
                this.getMonth(this.getCurrData('prev'), 'prev');
              } else if (updateMove < -offsetHeight + h * 2) {
                this.getMonth(this.getCurrData('next'), 'next');
                if (Math.abs(move) >= 300) {
                  this.getMonth(this.getCurrData('next'), 'next');
                }
              }
              var moveTime = this.touchParams.lastTime - this.touchParams.startTime;
              if (moveTime <= 300) {
                move = move * 2;
                moveTime = moveTime + 1000;
                this.setMove(move, 'end', moveTime);
              } else {
                this.setMove(move, 'end');
              }
            },
            setTransform: function setTransform() {
              var translateY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var type = arguments.length > 1 ? arguments[1] : undefined;
              var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
              if (type === 'end') {
                this.$refs.months.style.webkitTransition = 'transform '.concat(time, 'ms cubic-bezier(0.19, 1, 0.22, 1)');
                //this.$refs.months.style.transition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
              } else {
                this.$refs.months.style.webkitTransition = '';
                //this.$refs.months.style.transition = '';
              }

              this.$refs.months.style.webkitTransform = 'translateY('.concat(translateY, 'px)');
              //this.$refs.months.style.transform = `translateY(${translateY}px)`;
              this.scrollDistance = translateY;
            },
            setMove: function setMove(move, type, time) {
              var updateMove = move + this.transformY;
              var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
              var offsetHeight = this.$refs.months.offsetHeight;
              if (type === 'end') {
                // 限定滚动距离
                if (updateMove > 0) {
                  updateMove = 0;
                }
                if (updateMove < 0 && updateMove < -offsetHeight + h - 70) {
                  updateMove = -offsetHeight + h - 70;
                }
                if (offsetHeight <= h && this.monthsData.length == 1) {
                  updateMove = 0;
                }
                var endMove = updateMove;
                this.setTransform(endMove, type, time);
              } else {
                if (updateMove > 0 && updateMove > 100) {
                  updateMove = 100;
                }
                if (updateMove < -offsetHeight + h - 170 && this.monthsData.length > 1) {
                  updateMove = -offsetHeight + h - 170;
                }
                if (updateMove < 0 && updateMove < -100 && this.monthsData.length == 1) {
                  updateMove = -100;
                }
                this.setTransform(updateMove);
              }
            },
            initData: function initData() {
              this.startData = this.startDate ? this.splitDate(this.startDate) : null;
              this.endData = this.endDate ? this.splitDate(this.endDate) : null;
              if (!this.defaultValue) {
                this.currDate = this.isRange ? [date.date2Str(new Date()), date.getDay(2)] : date.date2Str(new Date());
              } else {
                this.currDate = this.isRange ? toConsumableArray_default()(this.defaultValue) : this.defaultValue;
              }
              if (this.isRange) {
                if (this.startDate && date.compareDate(this.currDate[0], this.startDate)) {
                  this.currDate.splice(0, 1, this.startDate);
                }
                if (this.endDate && date.compareDate(this.endDate, this.currDate[1])) {
                  this.currDate.splice(1, 1, this.endDate);
                }
                this.defaultData = [].concat(
                  toConsumableArray_default()(this.splitDate(this.currDate[0])),
                  toConsumableArray_default()(this.splitDate(this.currDate[1]))
                );
              } else {
                if (this.startDate && date.compareDate(this.currDate, this.startDate)) {
                  this.currDate = this.startDate;
                } else if (this.endDate && !date.compareDate(this.currDate, this.endDate)) {
                  this.currDate = this.endDate;
                }
                this.defaultData = toConsumableArray_default()(this.splitDate(this.currDate));
              }
              this.getMonth(this.defaultData, 'next');
              var i = 1;
              do {
                this.getMonth(this.getCurrData('next'), 'next');
              } while (i++ < 4);
              if (this.isRange) {
                this.chooseDay(
                  {
                    day: this.defaultData[2],
                    type: 'curr',
                  },
                  this.monthsData[0],
                  true
                );
                this.chooseDay(
                  {
                    day: this.defaultData[5],
                    type: 'curr',
                  },
                  this.monthsData[0],
                  true,
                  true
                );
              } else {
                this.chooseDay(
                  {
                    day: this.defaultData[2],
                    type: 'curr',
                  },
                  this.monthsData[0],
                  true
                );
              }
            },
          },
          mounted: function mounted() {
            this.initData();
          },
        };
        // CONCATENATED MODULE: ./src/packages/calendar/calendar.vue?vue&type=script&lang=js&
        /* harmony default export */ var calendar_calendarvue_type_script_lang_js_ = calendarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/calendar/calendar.vue

        /* normalize component */

        var calendar_component = normalizeComponent(
          calendar_calendarvue_type_script_lang_js_,
          calendarvue_type_template_id_1036820e_render,
          calendarvue_type_template_id_1036820e_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var calendar = calendar_component.exports;
        // EXTERNAL MODULE: ./src/packages/calendar/calendar.scss
        var calendar_calendar = __webpack_require__(30);

        // CONCATENATED MODULE: ./src/packages/calendar/index.js

        calendar.install = function (Vue) {
          Vue.component(calendar.name, calendar);
        };
        /* harmony default export */ var packages_calendar = calendar;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/datepicker/datepicker.vue?vue&type=template&id=4a4c3d78&
        var datepickervue_type_template_id_4a4c3d78_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('nut-picker', {
            attrs: {
              'is-visible': _vm.isVisible,
              title: _vm.title,
              'list-data': _vm.listData,
              'default-value-data': _vm.defaultValueData,
              'custom-class-name': 'nut-datepicker',
            },
            on: {
              close: function ($event) {
                return _vm.switchPicker('isVisible');
              },
              confirm: _vm.setChooseValue,
              choose: _vm.updateChooseValue,
              'close-update': _vm.closeUpdateChooseValue,
            },
          });
        };
        var datepickervue_type_template_id_4a4c3d78_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/datepicker/datepicker.vue?vue&type=template&id=4a4c3d78&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker.vue?vue&type=template&id=a029fcdc&
        var pickervue_type_template_id_a029fcdc_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('nut-actionsheet', { attrs: { 'is-visible': _vm.isVisible }, on: { close: _vm.closeActionSheet } }, [
            _c(
              'div',
              { staticClass: 'nut-picker', class: _vm.customClassName ? _vm.customClassName : null, attrs: { slot: 'custom' }, slot: 'custom' },
              [
                _c('div', { staticClass: 'nut-picker-control' }, [
                  _c('span', { staticClass: 'nut-picker-cancel-btn', on: { click: _vm.closeActionSheet } }, [
                    _vm._v(_vm._s(_vm.nutTranslate('lang.cancelBtnTxt'))),
                  ]),
                  _vm._v(' '),
                  _c('div', { staticClass: 'nut-picker-title' }, [_vm._v(_vm._s(_vm.title ? _vm.title : ''))]),
                  _vm._v(' '),
                  _c('span', { staticClass: 'nut-picker-confirm-btn', on: { click: _vm.confirm } }, [
                    _vm._v(_vm._s(_vm.nutTranslate('lang.okBtnTxt'))),
                  ]),
                ]),
                _vm._v(' '),
                _c(
                  'div',
                  { staticClass: 'nut-picker-panel' },
                  [
                    _vm._l(_vm.listData, function (item, index) {
                      return [
                        _c('nut-picker-slot', {
                          key: index,
                          ref: 'picker-slot-' + index,
                          refInFor: true,
                          attrs: {
                            'default-value': _vm.chooseValueData[index],
                            'is-update': _vm.isUpdate,
                            'list-data': item,
                            'key-index': index,
                            'swipe-duration': _vm.swipeDuration,
                          },
                          on: { chooseItem: _vm.chooseItem },
                        }),
                      ];
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]);
        };
        var pickervue_type_template_id_a029fcdc_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/picker/picker.vue?vue&type=template&id=a029fcdc&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker-slot.vue?vue&type=template&id=bf0f2630&
        var picker_slotvue_type_template_id_bf0f2630_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-picker-list', on: { touchstart: _vm.onTouchStart, touchmove: _vm.onTouchMove, touchend: _vm.onTouchEnd } },
            [
              _c(
                'div',
                { ref: 'roller', staticClass: 'nut-picker-roller', on: { transitionend: _vm.stopMomentum } },
                _vm._l(_vm.listData, function (item, index) {
                  return _c(
                    'div',
                    {
                      key: item.label ? item.label : index,
                      staticClass: 'nut-picker-roller-item',
                      class: { 'nut-picker-roller-item-hidden': _vm.isHidden(index + 1) },
                      style: _vm.setRollerStyle(index + 1),
                    },
                    [_vm._v('\n      ' + _vm._s(item.value ? item.value : item) + '\n    ')]
                  );
                }),
                0
              ),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-picker-content' }, [
                _c(
                  'div',
                  { ref: 'list', staticClass: 'nut-picker-list-panel' },
                  [
                    _vm._l(_vm.listData, function (item, index) {
                      return _c('div', { key: item.label ? item.label : index, staticClass: 'nut-picker-item' }, [
                        _vm._v(_vm._s(item.value ? item.value : item) + '\n      '),
                      ]);
                    }),
                    _vm._v(' '),
                    _vm.listData && _vm.listData.length === 1 ? _c('div', { staticClass: 'nut-picker-placeholder' }) : _vm._e(),
                  ],
                  2
                ),
              ]),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-picker-mask' }),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-picker-indicator' }),
            ]
          );
        };
        var picker_slotvue_type_template_id_bf0f2630_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue?vue&type=template&id=bf0f2630&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker-slot.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var DEFAULT_DURATION = 200;

        // 触发惯性滑动条件:
        // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
        // 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
        var INERTIA_TIME = 300;
        var INERTIA_DISTANCE = 15;
        /* harmony default export */ var picker_slotvue_type_script_lang_js_ = {
          name: 'nut-picker-slot',
          props: {
            listData: {
              type: Array,
              required: true,
            },
            defaultValue: {
              type: String | Number,
            },
            keyIndex: {
              type: Number,
              default: 0,
            },
            isUpdate: {
              type: Boolean,
              default: false,
            },
            swipeDuration: {
              type: Number | String,
              default: '1000',
            },
          },
          data: function data() {
            return {
              touchParams: {
                startY: 0,
                endY: 0,
                startTime: 0,
                endTime: 0,
              },
              currIndex: 1,
              transformY: 0,
              scrollDistance: 0,
              lineSpacing: 36,
              rotation: 20,
              timer: null,
              touchTime: 0,
            };
          },
          watch: {
            isUpdate: function isUpdate() {
              this.transformY = 0;
              this.modifyStatus();
            },
            defaultValue: function defaultValue() {
              this.transformY = 0;
              this.modifyStatus();
            },
          },
          methods: {
            updateTransform: function updateTransform(value) {
              var _this = this;
              if (value) {
                this.transformY = 0;
                this.timer = setTimeout(function () {
                  _this.modifyStatus(null, value);
                }, 10);
              }
            },
            setRollerStyle: function setRollerStyle(index) {
              return 'transform: rotate3d(1, 0, 0, '.concat(-this.rotation * index, 'deg) translate3d(0px, 0px, 104px)');
            },
            isHidden: function isHidden(index) {
              if (index >= this.currIndex + 8 || index <= this.currIndex - 8) {
                return true;
              } else {
                return false;
              }
            },
            setTransform: function setTransform() {
              var translateY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var type = arguments.length > 1 ? arguments[1] : undefined;
              var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_DURATION;
              var deg = arguments.length > 3 ? arguments[3] : undefined;
              if (type === 'end') {
                this.$refs.list.style.webkitTransition = 'transform '.concat(time, 'ms cubic-bezier(0.19, 1, 0.22, 1)');
                this.$refs.roller.style.webkitTransition = 'transform '.concat(time, 'ms cubic-bezier(0.19, 1, 0.22, 1)');
              } else {
                this.$refs.list.style.webkitTransition = '';
                this.$refs.roller.style.webkitTransition = '';
              }
              if (translateY != null) {
                this.$refs.list.style.webkitTransform = 'translate3d(0, '.concat(translateY, 'px, 0)');
                this.$refs.roller.style.webkitTransform = 'rotate3d(1, 0, 0, '.concat(deg, ')');
                this.scrollDistance = translateY;
              }
            },
            setMove: function setMove(move, type, time) {
              var _this2 = this;
              var updateMove = move + this.transformY;
              if (type === 'end') {
                // 限定滚动距离
                if (updateMove > 0) {
                  updateMove = 0;
                }
                if (updateMove < -(this.listData.length - 1) * this.lineSpacing) {
                  updateMove = -(this.listData.length - 1) * this.lineSpacing;
                }

                // 设置滚动距离为lineSpacing的倍数值
                var endMove = Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
                var deg = ''.concat((Math.abs(Math.round(endMove / this.lineSpacing)) + 1) * this.rotation, 'deg');
                this.setTransform(endMove, type, time, deg);
                this.timer = setTimeout(function () {
                  _this2.setChooseValue(endMove);
                }, time / 2);
                this.currIndex = Math.abs(Math.round(endMove / this.lineSpacing)) + 1;
              } else {
                var _deg = '0deg';
                if (updateMove < 0) {
                  _deg = ''.concat((Math.abs(updateMove / this.lineSpacing) + 1) * this.rotation, 'deg');
                } else {
                  _deg = ''.concat((-updateMove / this.lineSpacing + 1) * this.rotation, 'deg');
                }
                this.setTransform(updateMove, null, null, _deg);
                this.currIndex = Math.abs(Math.round(updateMove / this.lineSpacing)) + 1;
              }
            },
            setChooseValue: function setChooseValue(move) {
              this.$emit('chooseItem', this.listData[Math.round(-move / this.lineSpacing)], this.keyIndex);
            },
            onTouchStart: function onTouchStart(event) {
              event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.startY = changedTouches.pageY;
              this.touchParams.startTime = event.timestamp || Date.now();
              this.transformY = this.scrollDistance;
            },
            onTouchMove: function onTouchMove(event) {
              event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              this.setMove(move);
            },
            onTouchEnd: function onTouchEnd(event) {
              event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              var moveTime = this.touchParams.lastTime - this.touchParams.startTime;
              if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
                var distance = this.momentum(move, moveTime);
                this.setMove(distance, 'end', +this.swipeDuration);
              } else {
                this.setMove(move, 'end');
              }
            },
            modifyStatus: function modifyStatus(type, defaultValue) {
              defaultValue = defaultValue ? defaultValue : this.defaultValue;
              var index = -1;
              if (defaultValue && defaultValue.value) {
                this.listData.some(function (item, idx) {
                  if (item.value == defaultValue.value) {
                    index = idx;
                    return true;
                  }
                });
              } else {
                index = this.listData.indexOf(defaultValue);
              }
              this.currIndex = index === -1 ? 1 : index + 1;
              var move = index === -1 ? 0 : index * this.lineSpacing;
              type && this.setChooseValue(-move);
              this.setMove(-move);
            },
            // 惯性滚动结束
            stopMomentum: function stopMomentum() {
              console.log('惯性滚动结束');
              this.setChooseValue(this.scrollDistance);
              this.setTransform(null, 'end');
            },
            // 惯性滚动 距离
            momentum: function momentum(distance, duration) {
              // 惯性滚动的速度
              var speed = Math.abs(distance / duration);
              // 惯性滚动的距离
              distance = (speed / 0.003) * (distance < 0 ? -1 : 1);
              return distance;
            },
          },
          mounted: function mounted() {
            var _this3 = this;
            this.$nextTick(function () {
              _this3.modifyStatus(true);
              // 监听
              // this.$el.addEventListener('touchstart', this.touchStart);
              // this.$el.addEventListener('touchmove', this.touchMove);
              // this.$el.addEventListener('touchend', this.touchEnd);
            });
          },
          beforeDestroy: function beforeDestroy() {
            // 移除监听
            // this.$el.removeEventListener('touchstart', this.touchStart);
            // this.$el.removeEventListener('touchmove', this.touchMove);
            // this.$el.removeEventListener('touchend', this.touchEnd);
            clearTimeout(this.timer);
          },
        };
        // CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue?vue&type=script&lang=js&
        /* harmony default export */ var picker_picker_slotvue_type_script_lang_js_ = picker_slotvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue

        /* normalize component */

        var picker_slot_component = normalizeComponent(
          picker_picker_slotvue_type_script_lang_js_,
          picker_slotvue_type_template_id_bf0f2630_render,
          picker_slotvue_type_template_id_bf0f2630_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var picker_slot = picker_slot_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker.vue?vue&type=script&lang=js&

        var _components;
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var pickervue_type_script_lang_js_ = {
          name: 'nut-picker',
          mixins: [mixins_locale],
          props: {
            isVisible: {
              type: Boolean,
              default: false,
            },
            customClassName: {
              type: String,
              default: null,
            },
            title: {
              type: String,
              default: ' ',
            },
            listData: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            defaultValueData: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            swipeDuration: {
              type: Number | String,
              default: '1000',
            },
          },
          components:
            ((_components = {}),
            defineProperty_default()(_components, actionsheet.name, actionsheet),
            defineProperty_default()(_components, picker_slot.name, picker_slot),
            _components),
          data: function data() {
            return {
              chooseValueData: [],
              cacheValueData: [],
              isUpdate: false,
            };
          },
          watch: {
            defaultValueData: function defaultValueData() {
              this.chooseValueData = toConsumableArray_default()(this.defaultValueData);
              this.cacheValueData = toConsumableArray_default()(this.defaultValueData);
              this.$emit('confirm', this.cacheValueData);
            },
            listData: function listData() {
              this.init();
            },
          },
          methods: {
            updateChooseValue: function updateChooseValue(self, index, value) {
              self.cacheValueData.splice(index, 1, value);
              var ref = 'picker-slot-'.concat(index);
              self.$refs[ref] && self.$refs[ref][0].updateTransform(value);
            },
            closeActionSheet: function closeActionSheet() {
              this.isUpdate = !this.isUpdate;
              this.cacheValueData = toConsumableArray_default()(this.chooseValueData);
              this.$emit('close');
              this.$emit('close-update', this, this.chooseValueData);
            },
            confirm: function confirm() {
              var _this = this;
              this.listData.map(function (tag, i) {
                var ref = 'picker-slot-'.concat(i);
                _this.$refs[ref] && _this.$refs[ref][0].stopMomentum();
              });
              this.$emit('confirm', this.cacheValueData);
              this.chooseValueData = toConsumableArray_default()(this.cacheValueData);
              this.$emit('close');
            },
            chooseItem: function chooseItem(value, index) {
              if (this.cacheValueData[index] !== value) {
                this.cacheValueData[index] = value;
                this.$emit('choose', this, index, value, this.cacheValueData);
              }
            },
            init: function init() {
              if (this.defaultValueData && this.defaultValueData.length) {
                this.chooseValueData = toConsumableArray_default()(this.defaultValueData);
              } else {
                var defaultValueData = [];
                this.listData.map(function (item, index) {
                  defaultValueData.push(item[0]);
                });
                this.chooseValueData = [].concat(defaultValueData);
              }
            },
          },
          created: function created() {
            this.init();
          },
        };
        // CONCATENATED MODULE: ./src/packages/picker/picker.vue?vue&type=script&lang=js&
        /* harmony default export */ var picker_pickervue_type_script_lang_js_ = pickervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/picker/picker.vue

        /* normalize component */

        var picker_component = normalizeComponent(
          picker_pickervue_type_script_lang_js_,
          pickervue_type_template_id_a029fcdc_render,
          pickervue_type_template_id_a029fcdc_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var picker = picker_component.exports;
        // EXTERNAL MODULE: ./src/packages/picker/picker.scss
        var picker_picker = __webpack_require__(9);

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/datepicker/datepicker.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var datepickervue_type_script_lang_js_ = {
          name: 'nut-datepicker',
          mixins: [mixins_locale],
          props: {
            type: {
              type: String,
              default: 'date',
            },
            isSetSecond: {
              type: Boolean,
              default: false,
            },
            isVisible: {
              type: Boolean,
              default: true,
            },
            isUse12Hours: {
              type: Boolean,
              default: false,
            },
            isAm: {
              type: Boolean,
              default: true,
            },
            minuteStep: {
              type: Number,
              default: 1,
            },
            secondStep: {
              type: Number,
              default: 1,
            },
            isShowChinese: {
              type: Boolean,
              default: true,
            },
            title: {
              type: String,
              default: null,
            },
            defaultValue: {
              type: String,
              default: null,
            },
            startDate: {
              type: String,
              default: '2000-01-01',
            },
            endDate: {
              type: String,
              default: date.date2Str(new Date()),
            },
            startHour: {
              type: Number | String,
              default: 0,
            },
            endHour: {
              type: Number | String,
              default: 23,
            },
          },
          data: function data() {
            return {
              listData: [],
              defaultValueData: null,
              startDateArr: null,
              endDateArr: null,
              startYear: null,
              endYear: null,
              cacheDefaultData: [],
              cacheListData: [],
              updateYear: null,
              updateMonth: null,
              updateDay: null,
              updateHour: null,
              use12Hours: [],
              chinese: [],
            };
          },
          components: defineProperty_default()({}, picker.name, picker),
          created: function created() {
            this.init();
            console.log(this.nutTranslate('lang.calendar.year'));
          },
          computed: {
            dateRange: function dateRange() {
              var startDate = this.startDate,
                endDate = this.endDate,
                defaultValue = this.defaultValue;
              return {
                startDate: startDate,
                endDate: endDate,
                defaultValue: defaultValue,
              };
            },
          },
          watch: {
            dateRange: function dateRange(newValue, oldValue) {
              this.init();
            },
          },
          methods: {
            init: function init() {
              if (this.startDate && date.isDateString(this.startDate)) {
                this.startDateArr = date.getDateArr(this.startDate);
              } else {
                this.startDateArr = date.getDateArr('2000-01-01');
              }
              if (this.endDate && date.isDateString(this.endDate)) {
                this.endDateArr = date.getDateArr(this.endDate);
              } else {
                this.endDateArr = date.date2Str(new Date());
              }
              // 结束时间小于开始时间，结束时间重置为开始时间
              if (date.compareDateArr(this.endDateArr, this.startDateArr)) {
                // this.endDate = this.startDate;
                this.endDateArr = this.startDateArr;
              }
              // this.startDateArr = this.startDate.replace(/-/g, '/').split('/');
              // this.endDateArr = this.endDate.replace(/-/g, '/').split('/');
              // 国际化
              var year = this.nutTranslate('lang.calendar.year');
              var month = this.nutTranslate('lang.calendar.month');
              var day = this.nutTranslate('lang.calendar.day');
              var hour = this.nutTranslate('lang.calendar.hour');
              var minute = this.nutTranslate('lang.calendar.minute');
              var second = this.nutTranslate('lang.calendar.second');
              var morning = this.nutTranslate('lang.calendar.morning');
              var afternoon = this.nutTranslate('lang.calendar.afternoon');
              (this.use12Hours = [morning, afternoon]),
                (this.chinese = !this.isShowChinese
                  ? new Array(6).fill('')
                  : this.type == 'time'
                  ? this.isUse12Hours
                    ? [hour, minute, '']
                    : [hour, minute, second]
                  : [year, month, day, hour, minute]),
                this.initListData();
            },
            initListData: function initListData() {
              this.resetDefaultValue();
              switch (this.type) {
                case 'date':
                  this.cacheListData = [
                    this.getYears(),
                    this.getMonths(this.defaultValueData[0]),
                    this.getDays(this.defaultValueData[0], this.defaultValueData[1]),
                  ].concat();
                  break;
                case 'datetime':
                  this.cacheListData = [
                    this.getYears(),
                    this.getMonths(this.defaultValueData[0]),
                    this.getDays(this.defaultValueData[0], this.defaultValueData[1]),
                    this.getChangeHours(this.defaultValueData[0], this.defaultValueData[1], this.defaultValueData[2]),
                    this.getChangeMinutes(this.defaultValueData[0], this.defaultValueData[1], this.defaultValueData[2], this.defaultValueData[3]),
                  ].concat();
                  break;
                case 'time':
                  this.cacheListData = [this.getHours(), this.getMinutes()].concat();
                  if (this.isUse12Hours) {
                    this.cacheListData = [].concat(toConsumableArray_default()(this.cacheListData), [this.use12Hours]);
                  } else {
                    this.cacheListData = this.isSetSecond
                      ? [].concat(toConsumableArray_default()(this.cacheListData), [this.getSeconds()])
                      : toConsumableArray_default()(this.cacheListData);
                  }
                  break;
              }
              this.listData = toConsumableArray_default()(this.cacheListData);
            },
            resetDefaultValue: function resetDefaultValue() {
              var cacheDefaultValue = null;
              if (!this.defaultValue || !date.isDateString(this.defaultValue)) {
                switch (this.type) {
                  case 'time':
                    cacheDefaultValue = this.isSetSecond ? '00:00:00' : '00:00';
                    break;
                  case 'date':
                  case 'datetime':
                    cacheDefaultValue = ''
                      .concat(this.startDateArr[0], '-')
                      .concat(this.startDateArr[1], '-')
                      .concat(this.startDateArr[2], ' ')
                      .concat(this.startDateArr[3], ':')
                      .concat(this.startDateArr[4]);
                    break;
                }
              } else {
                cacheDefaultValue = this.defaultValue;
              }
              var splitArr = cacheDefaultValue.split(' ');
              if (this.type === 'time') {
                var timeArr = splitArr[0].split(':');
                this.isUse12Hours && timeArr.push(this.isAm ? this.use12Hours[0] : this.use12Hours[1]);
                this.cacheDefaultData = this.getCacheData(timeArr);
              } else {
                var cacheData = toConsumableArray_default()(splitArr[0].replace(/-/g, '/').split('/'));
                if (this.type == 'datetime') {
                  cacheData = [].concat(toConsumableArray_default()(cacheData), toConsumableArray_default()(splitArr[1].split(':')));
                }
                this.cacheDefaultData = this.getCacheData(cacheData);
                this.updateYear = this.cacheDefaultData[0];
                this.updateMonth = this.cacheDefaultData[1];
                this.updateDay = this.cacheDefaultData[2];
                this.updateHour = this.cacheDefaultData[3];
              }
              this.defaultValueData = toConsumableArray_default()(this.cacheDefaultData);
            },
            getCacheData: function getCacheData(data) {
              var _this = this;
              var cacheData = [];
              data.map(function (item, index) {
                item < 10 && (item = item.replace(/^0/g, ''));
                cacheData.push(''.concat(item).concat(_this.chinese[index]));
              });
              return cacheData;
            },
            getYears: function getYears() {
              var cacheYears = [];
              for (var i = this.startDateArr[0]; i <= this.endDateArr[0]; i++) {
                cacheYears.push(''.concat(i).concat(this.chinese[0]));
              }
              return cacheYears;
            },
            getMonths: function getMonths(year) {
              year = this.removeChinese(year);
              var cacheMonths = [];
              for (var i = 1; i <= 12; i++) {
                if (!(year == this.startDateArr[0] && i < this.startDateArr[1]) && !(year == this.endDateArr[0] && i > this.endDateArr[1])) {
                  cacheMonths.push(''.concat(i).concat(this.chinese[1]));
                }
              }
              return cacheMonths;
            },
            getDays: function getDays(year, month) {
              var _this2 = this;
              year = this.removeChinese(year);
              month = this.removeChinese(month);
              var days = Array.from(Array(date.getMonthDays(year, month)), function (v, k) {
                if (
                  !(year == _this2.startDateArr[0] && month == parseInt(_this2.startDateArr[1]) && k + 1 < parseInt(_this2.startDateArr[2])) &&
                  !(year == _this2.endDateArr[0] && month == parseInt(_this2.endDateArr[1]) && k + 1 > parseInt(_this2.endDateArr[2]))
                ) {
                  return ''.concat(k + 1).concat(_this2.chinese[2]);
                }
              });
              return days.filter(function (item) {
                return item;
              });
            },
            getChangeHours: function getChangeHours(year, month, day) {
              var _this3 = this;
              year = this.removeChinese(year);
              month = this.removeChinese(month).padStart(2, '0');
              day = this.removeChinese(day).padStart(2, '0');
              var hours = Array.from(Array(24).keys()).map(function (hour) {
                var startEqualState = year == _this3.startDateArr[0] && month == _this3.startDateArr[1] && day == _this3.startDateArr[2];
                var endEqualState = year == _this3.endDateArr[0] && month == _this3.endDateArr[1] && day == _this3.endDateArr[2];
                var startHour = _this3.startDateArr[3],
                  endHour = _this3.endDateArr[3];
                var resHour = undefined;
                if (startEqualState && endEqualState) {
                  if (hour >= parseInt(startHour) && hour <= parseInt(endHour)) {
                    resHour = hour;
                  }
                } else if (startEqualState) {
                  if (hour >= parseInt(startHour)) {
                    resHour = hour;
                  }
                } else if (endEqualState) {
                  if (hour <= parseInt(endHour)) {
                    resHour = hour;
                  }
                } else {
                  resHour = hour;
                }
                if (resHour == 0) {
                  resHour = '0';
                }
                return resHour ? ''.concat(resHour).concat(_this3.chinese[3]) : undefined;
              });
              return hours.filter(function (item) {
                return item;
              });
            },
            getChangeMinutes: function getChangeMinutes(year, month, day, hour) {
              var _this4 = this;
              year = this.removeChinese(year);
              month = this.removeChinese(month).padStart(2, '0');
              day = this.removeChinese(day).padStart(2, '0');
              hour = this.removeChinese(hour).padStart(2, '0');
              var minutes = Array.from(Array(60).keys()).map(function (minute) {
                var startEqualState =
                  year == _this4.startDateArr[0] &&
                  month == _this4.startDateArr[1] &&
                  day == _this4.startDateArr[2] &&
                  hour == _this4.startDateArr[3];
                var endEqualState =
                  year == _this4.endDateArr[0] && month == _this4.endDateArr[1] && day == _this4.endDateArr[2] && hour == _this4.endDateArr[3];
                var startMinute = _this4.startDateArr[4],
                  endMinute = _this4.endDateArr[4];
                var resMinute = undefined;
                if (startEqualState && endEqualState) {
                  if (minute >= parseInt(startMinute) && minute <= parseInt(endMinute)) {
                    resMinute = minute;
                  }
                } else if (startEqualState) {
                  if (minute >= parseInt(startMinute)) {
                    resMinute = minute;
                  }
                } else if (endEqualState) {
                  if (minute <= parseInt(endMinute)) {
                    resMinute = minute;
                  }
                } else {
                  resMinute = minute;
                }
                if (resMinute == 0) {
                  resMinute = '0';
                }
                return resMinute % _this4.minuteStep == 0 ? ''.concat(resMinute).concat(_this4.chinese[4]) : undefined;
              });
              return minutes.filter(function (item) {
                return item;
              });
            },
            getHours: function getHours() {
              var _this5 = this;
              var endHour = this.endHour;
              if (this.isUse12Hours) {
                endHour = 11;
              }
              var hours = Array.from(Array(parseInt(endHour) + 1), function (v, k) {
                if (_this5.isUse12Hours && k == 0) {
                  k = 12;
                }
                if (k >= _this5.startHour) {
                  return ''.concat(k).concat(_this5.type == 'time' ? _this5.chinese[0] : _this5.chinese[3]);
                }
              });
              return hours.filter(function (item) {
                return item;
              });
            },
            getMinutes: function getMinutes() {
              var _this6 = this;
              var minutes = Array.from(Array(60), function (v, k) {
                if (k == 0 || k % _this6.minuteStep == 0) {
                  return ''.concat(k).concat(_this6.type == 'time' ? _this6.chinese[1] : _this6.chinese[4]);
                }
              });
              return minutes.filter(function (item) {
                return item;
              });
            },
            getSeconds: function getSeconds() {
              var _this7 = this;
              var seconds = Array.from(Array(60), function (v, k) {
                if (k == 0 || k % _this7.secondStep == 0) {
                  return ''.concat(k).concat(_this7.type == 'time' ? _this7.chinese[2] : _this7.chinese[5]);
                }
              });
              return seconds.filter(function (item) {
                return item;
              });
            },
            setChooseValue: function setChooseValue(chooseData) {
              var _this8 = this;
              var cacheChooseData = [];
              chooseData.map(function (item, index) {
                if (_this8.isUse12Hours && _this8.type == 'time' && index == 2) {
                  cacheChooseData.push(item);
                } else {
                  cacheChooseData.push(date.getNumTwoBit(_this8.removeChinese(item)));
                }
              });
              if (/^date/.test(this.type)) {
                switch (this.type) {
                  case 'date':
                    cacheChooseData.push(''.concat(cacheChooseData[0], '-').concat(cacheChooseData[1], '-').concat(cacheChooseData[2]));
                    break;
                  case 'datetime':
                    cacheChooseData.push(
                      ''
                        .concat(cacheChooseData[0], '-')
                        .concat(cacheChooseData[1], '-')
                        .concat(cacheChooseData[2], ' ')
                        .concat(cacheChooseData[3], ':')
                        .concat(cacheChooseData[4])
                    );
                    break;
                }
                var week = date.getWhatDay(cacheChooseData[0], cacheChooseData[1], cacheChooseData[2]);
                cacheChooseData.push(week);
              } else {
                cacheChooseData.push(
                  ''
                    .concat(cacheChooseData[0], ':')
                    .concat(cacheChooseData[1])
                    .concat(this.isSetSecond ? ':' + cacheChooseData[2] : '')
                );
              }
              this.$emit('choose', cacheChooseData);
            },
            removeChinese: function removeChinese(value) {
              return value.toString().replace(/([^\u0000-\u00FF])/g, '');
            },
            updateLinkage: function updateLinkage(self, index, value, chooseValue, cacheValueData) {
              if (!value || !cacheValueData[index] || this.type == 'time') {
                return false;
              }
              value = this.removeChinese(value);
              switch (index) {
                case 1:
                  //year
                  this.updateYear = value;
                  this.listData.splice(index, 1, this.getMonths(value));
                  chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                  var curMonthsData = this.listData[index];
                  if (curMonthsData.indexOf(chooseValue) === -1) {
                    chooseValue = curMonthsData[0];
                  }
                  self && self.updateChooseValue(self, index, chooseValue);
                  this.updateLinkage(self, 2, cacheValueData[index], null, cacheValueData);
                  break;
                case 2:
                  //month
                  this.updateMonth = value;
                  this.listData.splice(index, 1, this.getDays(parseInt(this.updateYear), value));
                  chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                  var curDaysData = this.listData[index];
                  if (curDaysData.indexOf(chooseValue) === -1) {
                    if (curDaysData.length < 28) {
                      chooseValue = curDaysData[0];
                    } else {
                      var curChooseDay = parseInt(this.removeChinese(chooseValue));
                      var days = curDaysData.length;
                      chooseValue = (curChooseDay > days ? days : curChooseDay) + this.chinese[2];
                    }
                  }
                  self && self.updateChooseValue(self, index, chooseValue);
                  this.updateLinkage(self, 3, cacheValueData[index], null, cacheValueData);
                  break;
                case 3:
                  //day
                  this.updateDay = value;
                  this.listData.splice(index, 1, this.getChangeHours(parseInt(this.updateYear), parseInt(this.updateMonth), value));
                  chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                  var curHoursData = this.listData[index];
                  if (curHoursData.indexOf(chooseValue) === -1) {
                    chooseValue = curHoursData[0];
                  }
                  self && self.updateChooseValue(self, index, chooseValue);
                  this.updateLinkage(self, 4, cacheValueData[index], null, cacheValueData);
                  break;
                case 4:
                  //hour
                  this.updateHour = value;
                  this.listData.splice(
                    index,
                    1,
                    this.getChangeMinutes(
                      parseInt(this.updateYear),
                      parseInt(this.updateMonth),
                      parseInt(this.updateDay),
                      parseInt(this.updateHour),
                      value
                    )
                  );
                  chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                  var curMinuteData = this.listData[index];
                  if (curMinuteData.indexOf(chooseValue) === -1) {
                    chooseValue = curMinuteData[0];
                  }
                  self && self.updateChooseValue(self, index, chooseValue);
              }
            },
            updateChooseValue: function updateChooseValue(self, index, value, cacheValueData) {
              switch (index) {
                case 0: //year
                case 1: //month
                case 2: //day
                case 3:
                  //hour
                  this.updateLinkage(self, index + 1, value, null, cacheValueData);
                  break;
                case 4:
                  //min
                  break;
              }
            },
            closeUpdateChooseValue: function closeUpdateChooseValue(self, chooseData) {
              this.updateLinkage(self, 1, chooseData[0], chooseData[1], chooseData);
            },
            switchPicker: function switchPicker(param) {
              this.$emit('close');
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/datepicker/datepicker.vue?vue&type=script&lang=js&
        /* harmony default export */ var datepicker_datepickervue_type_script_lang_js_ = datepickervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/datepicker/datepicker.vue

        /* normalize component */

        var datepicker_component = normalizeComponent(
          datepicker_datepickervue_type_script_lang_js_,
          datepickervue_type_template_id_4a4c3d78_render,
          datepickervue_type_template_id_4a4c3d78_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var datepicker = datepicker_component.exports;
        // EXTERNAL MODULE: ./src/packages/datepicker/datepicker.scss
        var datepicker_datepicker = __webpack_require__(31);

        // CONCATENATED MODULE: ./src/packages/datepicker/index.js

        datepicker.install = function (Vue) {
          Vue.component(datepicker.name, datepicker);
        };
        /* harmony default export */ var packages_datepicker = datepicker;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/navbar/navbar.vue?vue&type=template&id=43684a05&
        var navbarvue_type_template_id_43684a05_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-navbar' }, [
            _c(
              'div',
              { directives: [{ name: 'show', rawName: 'v-show', value: _vm.leftShow, expression: 'leftShow' }], staticClass: 'nav-left' },
              [
                _c(
                  'div',
                  {
                    staticClass: 'back',
                    on: {
                      click: function ($event) {
                        return _vm.$emit('on-click-back');
                      },
                    },
                  },
                  [_vm._t('back-icon', [_c('i', { staticClass: 'back-icon' })])],
                  2
                ),
                _vm._v(' '),
                _vm._t('left'),
              ],
              2
            ),
            _vm._v(' '),
            _c('div', { staticClass: 'nav-center' }, [
              _c(
                'h3',
                {
                  staticClass: 'nav-title',
                  on: {
                    click: function ($event) {
                      return _vm.$emit('on-click-title');
                    },
                  },
                },
                [
                  _vm._t('default', [
                    _c('span', { directives: [{ name: 'show', rawName: 'v-show', value: _vm.title, expression: 'title' }] }, [
                      _vm._v(_vm._s(_vm.title)),
                    ]),
                  ]),
                ],
                2
              ),
            ]),
            _vm._v(' '),
            _c(
              'div',
              { directives: [{ name: 'show', rawName: 'v-show', value: _vm.rightShow, expression: 'rightShow' }], staticClass: 'nav-right' },
              [
                _vm._t('right'),
                _vm._v(' '),
                _c(
                  'div',
                  {
                    staticClass: 'more',
                    on: {
                      click: function ($event) {
                        return _vm.$emit('on-click-more');
                      },
                    },
                  },
                  [_vm._t('more-icon', [_c('i', { staticClass: 'more-icon' })])],
                  2
                ),
              ],
              2
            ),
          ]);
        };
        var navbarvue_type_template_id_43684a05_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/navbar/navbar.vue?vue&type=template&id=43684a05&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/navbar/navbar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var navbarvue_type_script_lang_js_ = {
          name: 'nut-navbar',
          props: {
            title: {
              type: String,
              default: 'NavBar',
            },
            leftShow: {
              type: Boolean,
              default: true,
            },
            rightShow: {
              type: Boolean,
              default: true,
            },
          },
          data: function data() {
            return {};
          },
          methods: {
            onClickBack: function onClickBack() {
              // this.$emit('on-click-back');
              this.$router ? this.$router.back() : window.history.back();
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/navbar/navbar.vue?vue&type=script&lang=js&
        /* harmony default export */ var navbar_navbarvue_type_script_lang_js_ = navbarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/navbar/navbar.vue

        /* normalize component */

        var navbar_component = normalizeComponent(
          navbar_navbarvue_type_script_lang_js_,
          navbarvue_type_template_id_43684a05_render,
          navbarvue_type_template_id_43684a05_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var navbar = navbar_component.exports;
        // EXTERNAL MODULE: ./src/packages/navbar/navbar.scss
        var navbar_navbar = __webpack_require__(32);

        // CONCATENATED MODULE: ./src/packages/navbar/index.js

        navbar.install = function (Vue) {
          Vue.component(navbar.name, navbar);
        };
        /* harmony default export */ var packages_navbar = navbar;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/noticebar/noticebar.vue?vue&type=template&id=257e2140&
        var noticebarvue_type_template_id_257e2140_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', [
            _vm.direction == 'across'
              ? _c(
                  'div',
                  {
                    directives: [{ name: 'show', rawName: 'v-show', value: _vm.showNoticeBar, expression: 'showNoticeBar' }],
                    staticClass: 'nut-noticebar',
                    class: { withicon: _vm.closeMode, close: _vm.closeMode, wrapable: _vm.wrapable },
                    style: _vm.barStyle,
                    on: { click: _vm.handleClick },
                  },
                  [
                    _vm.iconShow
                      ? _c(
                          'div',
                          { staticClass: 'left-icon', style: { 'background-image': 'url(' + _vm.iconBg + ')' } },
                          [!_vm.iconBg ? _c('nut-icon', { attrs: { type: 'notice', color: _vm.color, size: '16px' } }) : _vm._e()],
                          1
                        )
                      : _vm._e(),
                    _vm._v(' '),
                    _c('div', { ref: 'wrap', staticClass: 'wrap' }, [
                      _c(
                        'div',
                        {
                          ref: 'content',
                          staticClass: 'content',
                          class: [_vm.animationClass, { 'nut-ellipsis': !_vm.scrollable && !_vm.wrapable }],
                          style: _vm.contentStyle,
                          on: { animationend: _vm.onAnimationEnd, webkitAnimationEnd: _vm.onAnimationEnd },
                        },
                        [_vm._t('default', [_vm._v(_vm._s(_vm.text))])],
                        2
                      ),
                    ]),
                    _vm._v(' '),
                    _vm.closeMode
                      ? _c(
                          'div',
                          {
                            staticClass: 'right-icon',
                            on: {
                              click: function ($event) {
                                $event.stopPropagation();
                                return _vm.onClickIcon($event);
                              },
                            },
                          },
                          [_c('nut-icon', { attrs: { type: 'cross', color: _vm.color, size: '11px' } })],
                          1
                        )
                      : _vm._e(),
                  ]
                )
              : _vm._e(),
            _vm._v(' '),
            _vm.scrollList.length > 0 && _vm.direction == 'vertical'
              ? _c(
                  'div',
                  { staticClass: 'nut-noticebar-vertical', style: _vm.barStyle },
                  [
                    _vm.$slots.default
                      ? [
                          _c(
                            'div',
                            { staticClass: 'horseLamp_list', style: _vm.horseLampStyle },
                            _vm._l(_vm.scrollList, function (item, index) {
                              return _c('ScrollItem', { key: index, style: { height: _vm.height }, attrs: { item: item } });
                            }),
                            1
                          ),
                        ]
                      : [
                          _c(
                            'ul',
                            { staticClass: 'horseLamp_list', style: _vm.horseLampStyle },
                            _vm._l(_vm.scrollList, function (item, index) {
                              return _c(
                                'li',
                                {
                                  key: index,
                                  staticClass: 'horseLamp_list_item',
                                  style: { height: _vm.height },
                                  on: {
                                    click: function ($event) {
                                      return _vm.go(item);
                                    },
                                  },
                                },
                                [_vm._v('\n          ' + _vm._s(item) + '\n        ')]
                              );
                            }),
                            0
                          ),
                        ],
                    _vm._v(' '),
                    _c(
                      'div',
                      {
                        staticClass: 'go',
                        on: {
                          click: function ($event) {
                            !_vm.$slots.rightIcon && _vm.handleClickIcon();
                          },
                        },
                      },
                      [
                        _vm.$slots.rightIcon
                          ? [_vm._t('rightIcon')]
                          : _vm.closeMode
                          ? [_c('nut-icon', { attrs: { type: 'cross', color: _vm.color, size: '11px' } })]
                          : _vm._e(),
                      ],
                      2
                    ),
                  ],
                  2
                )
              : _vm._e(),
          ]);
        };
        var noticebarvue_type_template_id_257e2140_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue?vue&type=template&id=257e2140&

        // CONCATENATED MODULE: ./src/packages/noticebar/item.js
        /* harmony default export */ var noticebar_item = {
          name: 'ScrollItem',
          functional: true,
          props: {
            item: null,
          },
          render: function render(createElement, context) {
            // console.log(context.props.item)
            // console.log(context.slots().default)
            var _context$props$item = context.props.item,
              tag = _context$props$item.tag,
              children = _context$props$item.children,
              data = _context$props$item.data;
            return createElement(tag, data, children);
          },
        };
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/noticebar/noticebar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var noticebarvue_type_script_lang_js_ = {
          name: 'nut-noticebar',
          props: {
            // 滚动方向  across 横向 vertical 纵向
            direction: {
              type: String,
              default: 'across',
            },
            list: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            standTime: {
              type: Number,
              default: 1000,
            },
            complexAm: {
              type: Boolean,
              default: false,
            },
            height: {
              type: Number,
              default: 40,
            },
            text: {
              type: String,
              default: '',
            },
            closeMode: {
              type: Boolean,
              default: false,
            },
            wrapable: {
              type: Boolean,
              default: false,
            },
            leftIcon: {
              type: String,
              default: '',
            },
            color: {
              type: String,
              default: '#F9911B',
            },
            background: {
              type: String,
              default: 'rgba(254,250,216,1)',
            },
            delay: {
              type: [String, Number],
              default: 1,
            },
            scrollable: {
              type: Boolean,
              default: true,
            },
            speed: {
              type: Number,
              default: 50,
            },
          },
          data: function data() {
            return {
              wrapWidth: 0,
              firstRound: true,
              duration: 0,
              offsetWidth: 0,
              showNoticeBar: true,
              animationClass: '',
              animate: false,
              scrollList: [],
              distance: 0,
              timer: null,
              keepAlive: false,
            };
          },
          components: {
            ScrollItem: noticebar_item,
          },
          computed: {
            iconShow: function iconShow() {
              if (this.leftIcon == 'close') {
                return false;
              } else {
                return true;
              }
            },
            barStyle: function barStyle() {
              var style = {
                color: this.color,
                background: this.background,
              };
              if (this.direction == 'vertical') {
                style.height = ''.concat(this.height, 'px');
              }
              return style;
            },
            contentStyle: function contentStyle() {
              return {
                paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
                animationDelay: (this.firstRound ? this.delay : 0) + 's',
                animationDuration: this.duration + 's',
              };
            },
            iconBg: function iconBg() {
              var iconBg = null;
              if (this.leftIcon) {
                iconBg = this.leftIcon;
              }
              return iconBg;
            },
            horseLampStyle: function horseLampStyle() {
              var styles = {};
              if (this.complexAm) {
                styles = {
                  transform: 'translateY('.concat(this.distance, 'px)'),
                };
              } else {
                if (this.animate) {
                  styles = {
                    transition: 'all '.concat(~~(this.height / this.speed / 4), 's'),
                    'margin-top': '-'.concat(this.height, 'px'),
                  };
                }
              }
              return styles;
            },
          },
          watch: {
            text: {
              handler: function handler(val, newVal) {
                var _this = this;
                // console.log(val, newVal, this.showNoticeBar == false, 'text');

                if (this.showNoticeBar == false) {
                  return;
                }
                this.$nextTick(function () {
                  var _this$$refs = _this.$refs,
                    wrap = _this$$refs.wrap,
                    content = _this$$refs.content;
                  if (!wrap || !content) {
                    return;
                  }
                  var wrapWidth = wrap.getBoundingClientRect().width;
                  var offsetWidth = content.getBoundingClientRect().width;
                  // console.log(wrapWidth, offsetWidth, 'text222');

                  if (_this.scrollable && offsetWidth > wrapWidth) {
                    _this.wrapWidth = wrapWidth;
                    _this.offsetWidth = offsetWidth;
                    _this.duration = offsetWidth / _this.speed;
                    _this.animationClass = 'play';
                  } else {
                    _this.animationClass = '';
                  }
                });
              },
              immediate: true,
            },
            list: function list(newValue, oldValue) {
              this.scrollList = [].concat(newValue);
            },
          },
          mounted: function mounted() {
            var _this2 = this;
            console.log(this.direction);
            if (this.direction == 'vertical') {
              if (this.$slots.default) {
                this.scrollList = [].concat(this.$slots.default);
              } else {
                this.scrollList = [].concat(this.list);
              }
              setTimeout(function () {
                _this2.complexAm ? _this2.startRoll() : _this2.startRollEasy();
              }, this.standTime);
            }
          },
          methods: {
            handleClick: function handleClick(event) {
              this.$emit('click', event);
            },
            onClickIcon: function onClickIcon(event) {
              this.showNoticeBar = !this.closeMode;
              this.$emit('close', event);
            },
            onAnimationEnd: function onAnimationEnd() {
              var _this3 = this;
              this.firstRound = false;
              this.$nextTick(function () {
                _this3.duration = (_this3.offsetWidth + _this3.wrapWidth) / _this3.speed;
                _this3.animationClass = 'play-infinite';
              });
            },
            /**
             * 利益点滚动方式一
             */
            startRollEasy: function startRollEasy() {
              this.showhorseLamp();
              this.timer = setInterval(this.showhorseLamp, ~~(this.height / this.speed / 4) * 1000 + this.standTime);
            },
            showhorseLamp: function showhorseLamp() {
              var _this4 = this;
              this.animate = true;
              setTimeout(function () {
                _this4.scrollList.push(_this4.scrollList[0]);
                _this4.scrollList.shift();
                _this4.animate = false;
              }, ~~(this.height / this.speed / 4) * 1000);
            },
            startRoll: function startRoll() {
              var _this5 = this;
              this.timer = setInterval(function () {
                var chunk = 100;
                for (var i = 0; i < chunk; i++) {
                  _this5.scroll(i, i < chunk - 1 ? false : true);
                }
              }, this.standTime + 100 * this.speed);
            },
            scroll: function scroll(n, last) {
              var _this6 = this;
              setTimeout(function () {
                _this6.distance -= _this6.height / 100;
                if (last) {
                  _this6.scrollList.push(_this6.scrollList[0]);
                  _this6.scrollList.shift();
                  _this6.distance = 0;
                }
              }, n * this.speed);
            },
            /**
             * 点击滚动单元
             */
            go: function go(item) {
              this.$emit('click', item);
            },
            handleClickIcon: function handleClickIcon() {
              this.$emit('close', this.scrollList[0]);
            },
            activated: function activated() {
              if (this.keepAlive) {
                this.keepAlive = false;
              }
            },
            deactivated: function deactivated() {
              this.keepAlive = true;
              clearInterval(this.timer);
            },
            destroyed: function destroyed() {
              clearInterval(this.timer);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue?vue&type=script&lang=js&
        /* harmony default export */ var noticebar_noticebarvue_type_script_lang_js_ = noticebarvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./src/packages/noticebar/noticebar.vue?vue&type=style&index=0&id=257e2140&prod&lang=scss&
        var noticebarvue_type_style_index_0_id_257e2140_prod_lang_scss_ = __webpack_require__(123);

        // CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue

        /* normalize component */

        var noticebar_component = normalizeComponent(
          noticebar_noticebarvue_type_script_lang_js_,
          noticebarvue_type_template_id_257e2140_render,
          noticebarvue_type_template_id_257e2140_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var noticebar = noticebar_component.exports;
        // EXTERNAL MODULE: ./src/packages/noticebar/noticebar.scss
        var noticebar_noticebar = __webpack_require__(34);

        // CONCATENATED MODULE: ./src/packages/noticebar/index.js

        noticebar.install = function (Vue) {
          Vue.component(noticebar.name, noticebar);
        };
        /* harmony default export */ var packages_noticebar = noticebar;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/switch/switch.vue?vue&type=template&id=4b7a9d67&
        var switchvue_type_template_id_4b7a9d67_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'nut-switch',
              class: [{ 'nut-switch-active': _vm.isActive }, 'nut-switch-' + _vm.size, { 'nut-switch-disabled': _vm.disabled }],
              on: { click: _vm.toggle },
            },
            [
              _c('div', { staticClass: 'nut-switch-btn' }),
              _vm._v(' '),
              _vm.isActive
                ? _c('div', { staticClass: 'nut-switch-label' }, [_vm._v(_vm._s(_vm.arrLabel[0]))])
                : _c('div', { staticClass: 'nut-switch-label' }, [_vm._v(_vm._s(_vm.arrLabel[1]))]),
            ]
          );
        };
        var switchvue_type_template_id_4b7a9d67_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/switch/switch.vue?vue&type=template&id=4b7a9d67&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/switch/switch.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var switchvue_type_script_lang_js_ = {
          name: 'nut-switch',
          props: {
            active: {
              type: Boolean,
              default: false,
            },
            size: {
              type: String,
              default: 'base',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            label: {
              type: String,
              default: '',
            },
          },
          data: function data() {
            return {
              isActive: false,
              arrLabel: (this.label || '').split('|'),
            };
          },
          created: function created() {
            this.isActive = this.active;
          },
          watch: {
            active: function active(newVal) {
              this.isActive = newVal;
            },
          },
          methods: {
            toggle: function toggle() {
              var _this = this;
              var status = this.isActive;
              if (!this.disabled) {
                this.isActive = !status;
                setTimeout(function () {
                  _this.$emit('change', _this.isActive);
                  _this.$emit('update:active', _this.isActive);
                }, 300);
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/switch/switch.vue?vue&type=script&lang=js&
        /* harmony default export */ var switch_switchvue_type_script_lang_js_ = switchvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/switch/switch.vue

        /* normalize component */

        var switch_component = normalizeComponent(
          switch_switchvue_type_script_lang_js_,
          switchvue_type_template_id_4b7a9d67_render,
          switchvue_type_template_id_4b7a9d67_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var switch_switch = switch_component.exports;
        // EXTERNAL MODULE: ./src/packages/switch/switch.scss
        var packages_switch_switch = __webpack_require__(35);

        // CONCATENATED MODULE: ./src/packages/switch/index.js

        switch_switch.install = function (Vue) {
          Vue.component(switch_switch.name, switch_switch);
        };
        /* harmony default export */ var packages_switch = switch_switch;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/slider/slider.vue?vue&type=template&id=22e6e728&
        var slidervue_type_template_id_22e6e728_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-slider' }, [
            _vm.showRangeTxt ? _c('div', { staticClass: 'nut-slider-left-text' }, [_vm._v(_vm._s(_vm.range[0]))]) : _vm._e(),
            _vm._v(' '),
            _c('div', { staticClass: 'nut-slider-box', on: { click: _vm.onClick } }, [
              _c(
                'div',
                {
                  class: ['nut-slider-Handle', { 'nut-slider-ani': _vm.ani }],
                  style: { left: _vm.posi + 'px' },
                  on: {
                    touchstart: _vm.onTouchStart,
                    touchmove: _vm.onTouchMove,
                    touchend: _vm.onTouchEnd,
                    click: _vm.onTouchEnd,
                    touchcancel: _vm.onTouchEnd,
                  },
                },
                [
                  _vm.showLabel
                    ? _c('span', { class: ['nut-slider-label', { 'nut-slider-label-always': _vm.showLabelAlways }] }, [_vm._v(_vm._s(_vm.current))])
                    : _vm._e(),
                ]
              ),
            ]),
            _vm._v(' '),
            _vm.showRangeTxt ? _c('div', { staticClass: 'nut-slider-right-text' }, [_vm._v(_vm._s(_vm.range[1]))]) : _vm._e(),
          ]);
        };
        var slidervue_type_template_id_22e6e728_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/slider/slider.vue?vue&type=template&id=22e6e728&

        // CONCATENATED MODULE: ./src/utils/raf.js
        function requestAniFrame() {
          if (typeof window !== 'undefined') {
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (callback) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          } else {
            return function (callback) {
              setTimeout(callback, 1000 / 60);
            };
          }
        }
        /* harmony default export */ var raf = requestAniFrame();
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/slider/slider.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var slidervue_type_script_lang_js_ = {
          name: 'nut-slider',
          props: {
            value: {
              type: [String, Number],
            },
            showLabel: {
              type: Boolean,
              default: false,
            },
            showLabelAlways: {
              type: Boolean,
              default: false,
            },
            showRangeTxt: {
              type: Boolean,
              default: false,
            },
            range: {
              type: Array,
              validator: function validator(value) {
                return value.length === 2 && value[1] > value[0];
              },
              default: function _default() {
                return [0, 10];
              },
            },
            stage: {
              type: [String, Number],
            },
          },
          data: function data() {
            return {
              box: null,
              boxLeft: 0,
              current: 0,
              handle: null,
              posi: null,
              level: null,
              ani: false,
              scheduledAnimationFrame: false,
            };
          },
          computed: {
            total: function total() {
              return this.range[1] - this.range[0];
            },
            cell: function cell() {
              return this.total / this.level;
            },
          },
          methods: {
            onTouchStart: function onTouchStart(event) {
              if (event.cancelable) {
                event.preventDefault();
              }
              this.ani = true;
            },
            onTouchMove: function onTouchMove(event) {
              var _this = this;
              if (event.cancelable) {
                event.preventDefault();
              }
              if (this.scheduledAnimationFrame) return;
              this.scheduledAnimationFrame = true;
              raf(function () {
                _this.scheduledAnimationFrame = false;
                var evt = event.touches[0];
                var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                _this.boxLeft = _this.box.getBoundingClientRect().left;
                var posi = evt.pageX - _this.boxLeft - pageScrollLeft;
                _this.setPosi(posi);
              });
            },
            setVal: function setVal(posi) {
              var trans = (posi / this.box.clientWidth) * this.total;
              this.current = Math.round(trans / this.cell) * this.cell + this.range[0];
              this.$emit('change', this.current);
              this.$emit('input', this.current);
            },
            valToPosi: function valToPosi() {
              return (this.current - this.range[0]) * (this.box.clientWidth / this.total);
            },
            setPosi: function setPosi(posi) {
              if (posi < 0 || posi > this.box.clientWidth) return;
              this.posi = posi;
              this.setVal(posi);
            },
            onTouchEnd: function onTouchEnd(event) {
              if (event.cancelable) {
                event.preventDefault();
              }
              this.posi = this.valToPosi();
              this.ani = false;
            },
            onClick: function onClick(event) {
              if (event.cancelable) {
                event.preventDefault();
              }
              var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var posi = event.pageX - this.boxLeft - pageScrollLeft;
              this.setVal(posi);
              this.posi = this.valToPosi();
            },
            propInit: function propInit() {
              if (this.value !== 'undefined' && this.value >= this.range[0] && this.value <= this.range[1]) {
                this.current = this.value;
              } else {
                this.current = this.range[0];
              }
              if (!this.stage || this.stage > this.range[1] - this.range[0]) {
                this.level = this.range[1] - this.range[0];
              } else {
                this.level = this.stage;
              }
              this.posi = this.valToPosi();
            },
          },
          mounted: function mounted() {
            var _this2 = this;
            this.$nextTick(function () {
              _this2.box = _this2.$el.querySelector('.nut-slider-box');
              _this2.handle = _this2.box.querySelector('.nut-slider-Handle');
              _this2.propInit();
            });
          },
        };
        // CONCATENATED MODULE: ./src/packages/slider/slider.vue?vue&type=script&lang=js&
        /* harmony default export */ var slider_slidervue_type_script_lang_js_ = slidervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/slider/slider.vue

        /* normalize component */

        var slider_component = normalizeComponent(
          slider_slidervue_type_script_lang_js_,
          slidervue_type_template_id_22e6e728_render,
          slidervue_type_template_id_22e6e728_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var slider = slider_component.exports;
        // EXTERNAL MODULE: ./src/packages/slider/slider.scss
        var slider_slider = __webpack_require__(36);

        // CONCATENATED MODULE: ./src/packages/slider/index.js

        slider.install = function (Vue) {
          Vue.component(slider.name, slider);
        };
        /* harmony default export */ var packages_slider = slider;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/range/range.vue?vue&type=template&id=ff279bd4&
        var rangevue_type_template_id_ff279bd4_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-range' }, [
            _vm.showRangeTxt ? _c('div', { staticClass: 'nut-range-left-text' }, [_vm._v(_vm._s(_vm.range[0]))]) : _vm._e(),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'nut-range-box', style: { background: _vm.boxColor }, on: { click: _vm.onClick } },
              [
                _c('div', {
                  staticClass: 'nut-range-area',
                  style: {
                    width: Math.abs(_vm.barleft2 - _vm.barleft1) + 'px',
                    left: Math.min(_vm.barleft2, _vm.barleft1) + 'px',
                    background: _vm.mainColor,
                  },
                }),
                _vm._v(' '),
                _c('nut-range-bar', {
                  attrs: {
                    direction: 'left',
                    stage: _vm.stage,
                    range: _vm.range,
                    values: _vm.rangeValues,
                    initLeft: _vm.initLeft1,
                    showLabelAlways: _vm.showLabelAlways,
                    showLabel: _vm.showLabel,
                    current: _vm.currentLeft,
                    ani: _vm.ani,
                    mainColor: _vm.mainColor,
                  },
                  on: {
                    getPos: _vm.getPosLeft,
                    'update:ani': function ($event) {
                      _vm.ani = $event;
                    },
                  },
                }),
                _vm._v(' '),
                _c('nut-range-bar', {
                  attrs: {
                    direction: 'right',
                    stage: _vm.stage,
                    range: _vm.range,
                    values: _vm.rangeValues,
                    initLeft: _vm.initLeft2,
                    showLabelAlways: _vm.showLabelAlways,
                    showLabel: _vm.showLabel,
                    current: _vm.currentRight,
                    ani: _vm.ani,
                    mainColor: _vm.mainColor,
                  },
                  on: {
                    getPos: _vm.getPosRight,
                    'update:ani': function ($event) {
                      _vm.ani = $event;
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(' '),
            _vm.showRangeTxt ? _c('div', { staticClass: 'nut-range-right-text' }, [_vm._v(_vm._s(_vm.range[1]))]) : _vm._e(),
          ]);
        };
        var rangevue_type_template_id_ff279bd4_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/range/range.vue?vue&type=template&id=ff279bd4&

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
        var slicedToArray = __webpack_require__(5);
        var slicedToArray_default = /*#__PURE__*/ __webpack_require__.n(slicedToArray);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/range/movebar.vue?vue&type=template&id=5c64d29d&
        var movebarvue_type_template_id_5c64d29d_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              class: ['nut-range-Handle', { 'nut-range-ani': _vm.ani }],
              style: { left: _vm.posi + 'px', borderColor: _vm.mainColor, boxShadow: _vm.ani ? '0 0 0 4px ' + _vm.subColor : '' },
              on: { touchstart: _vm.onTouchStart, touchmove: _vm.onTouchMove, touchend: _vm.onTouchEnd, click: _vm.onTouchEnd },
            },
            [
              _vm.showLabel
                ? _c(
                    'span',
                    { class: ['nut-range-label', { 'nut-range-label-always': _vm.showLabelAlways }], style: { background: _vm.mainColor } },
                    [
                      _c('span', { staticClass: 'nut-range-after', style: { color: _vm.mainColor } }, [_vm._v('▼')]),
                      _vm._v('\n    ' + _vm._s(_vm.current) + '\n  '),
                    ]
                  )
                : _vm._e(),
            ]
          );
        };
        var movebarvue_type_template_id_5c64d29d_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/range/movebar.vue?vue&type=template&id=5c64d29d&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/range/movebar.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var movebarvue_type_script_lang_js_ = {
          name: 'nut-range-bar',
          props: {
            direction: {
              type: String,
              default: 'left',
            },
            range: {
              type: Array,
              validator: function validator(value) {
                return value.length === 2 && value[1] > value[0];
              },
              default: function _default() {
                return [0, 10];
              },
            },
            values: {
              type: Array,
              validator: function validator(value) {
                return value.length === 2 && value[1] >= value[0];
              },
              default: function _default() {
                return [0, 0];
              },
            },
            initLeft: {
              type: Number,
              default: 0,
            },
            showLabelAlways: {
              type: Boolean,
              default: false,
            },
            showLabel: {
              type: Boolean,
              default: false,
            },
            current: {
              type: Number,
              default: 0,
            },
            stage: {
              type: Number,
              default: 0,
            },
            ani: Boolean,
            mainColor: String,
            subColor: String,
          },
          data: function data() {
            return {
              box: null,
              posi: 0,
              scheduledAnimationFrame: false,
            };
          },
          watch: {
            initLeft: function initLeft(val) {
              this.posi = this.initLeft;
            },
          },
          computed: {
            total: function total() {
              return this.range[1] - this.range[0];
            },
          },
          methods: {
            onTouchStart: function onTouchStart(event) {
              if (event.cancelable) {
                event.preventDefault();
              }
              this.$emit('update:ani', true);
            },
            onTouchMove: function onTouchMove(event) {
              var _this = this;
              if (event.cancelable) {
                event.preventDefault();
              }
              if (this.scheduledAnimationFrame) return;
              this.scheduledAnimationFrame = true;
              raf(function () {
                _this.scheduledAnimationFrame = false;
                var evt = event.touches[0];
                var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                _this.boxLeft = _this.box.getBoundingClientRect().left;
                var posi = evt.pageX - _this.boxLeft - pageScrollLeft;
                _this.setPosi(posi, false);
              });
            },
            setPosi: function setPosi(posi, isEnd) {
              if (posi < 0) {
                posi = 0;
              }
              if (posi > this.box.clientWidth) {
                posi = this.box.clientWidth;
              }
              var _this$values = slicedToArray_default()(this.values, 2),
                prevLeft = _this$values[0],
                prevRight = _this$values[1];
              var _this$range = slicedToArray_default()(this.range, 2),
                rangeLeft = _this$range[0],
                rangeRight = _this$range[1];
              if (this.direction === 'left') {
                var maxRight = prevRight - rangeLeft - 1;
                if (posi / this.box.clientWidth >= maxRight / this.total) {
                  this.posi = maxRight * (this.box.clientWidth / this.total);
                } else {
                  this.posi = posi;
                }
              }
              if (this.direction === 'right') {
                var minLeft = prevLeft - rangeLeft + 1;
                if (posi / this.box.clientWidth <= minLeft / this.total) {
                  this.posi = minLeft * (this.box.clientWidth / this.total);
                } else {
                  this.posi = posi;
                }
              }
              this.$emit('getPos', this.posi, isEnd);
            },
            onTouchEnd: function onTouchEnd(event) {
              var _this2 = this;
              event.preventDefault();
              var evt = event.changedTouches[0];
              var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var posi = evt.pageX - this.boxLeft - pageScrollLeft;
              setTimeout(function () {
                _this2.setPosi(posi, true);
                _this2.$emit('update:ani', false);
              }, 50);
            },
            onClick: function onClick(event) {
              event.preventDefault();
              var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var posi = event.pageX - this.boxLeft - pageScrollLeft;
              this.posi = posi;
              this.$emit('getPos', posi);
            },
          },
          mounted: function mounted() {
            this.box = this.$el.parentNode;
          },
        };
        // CONCATENATED MODULE: ./src/packages/range/movebar.vue?vue&type=script&lang=js&
        /* harmony default export */ var range_movebarvue_type_script_lang_js_ = movebarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/range/movebar.vue

        /* normalize component */

        var movebar_component = normalizeComponent(
          range_movebarvue_type_script_lang_js_,
          movebarvue_type_template_id_5c64d29d_render,
          movebarvue_type_template_id_5c64d29d_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var movebar = movebar_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/range/range.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        function toRGBA(c, opacity) {
          // 16进制、rgb颜色转rgba
          var reg = /(rgb)(\(\d+,\s*\d+,\s*\d+)(\))/;
          if (reg.test(c)) return c.replace(reg, '$1' + (opacity ? 'a' : '') + '$2' + (opacity ? ',' + opacity : '') + '$3');
          if (/^#[0-9a-f]+/.test(c)) {
            if (c.length === 4) {
              c = c.replace(/^#(\d)(\d)(\d)/, '#$1$1$2$2$3$3');
            }
            if (c.length === 7) {
              return toRGBA(
                'rgb(' + parseInt(c.slice(1, 3), 16) + ', ' + parseInt(c.slice(3, 5), 16) + ', ' + parseInt(c.slice(5, 7), 16) + ')',
                opacity
              );
            }
          }
          return toRGBA('#ff0000', opacity);
        }

        /* harmony default export */ var rangevue_type_script_lang_js_ = {
          name: 'nut-range',
          components: defineProperty_default()({}, movebar.name, movebar),
          props: {
            rangeValues: {
              type: Array,
              validator: function validator(value) {
                return value.length === 2 && value[1] >= value[0];
              },
              default: function _default() {
                return [0, 0];
              },
            },
            color: String,
            showLabel: {
              type: Boolean,
              default: false,
            },
            showLabelAlways: {
              type: Boolean,
              default: false,
            },
            showRangeTxt: {
              type: Boolean,
              default: false,
            },
            range: {
              type: Array,
              validator: function validator(value) {
                return value.length === 2 && value[1] > value[0];
              },
              default: function _default() {
                return [0, 10];
              },
            },
            stage: {
              type: Number,
              default: 1,
            },
          },
          data: function data() {
            return {
              box: null,
              boxLeft: 0,
              initLeft1: 0,
              initLeft2: 0,
              currentLeft: 0,
              currentRight: 0,
              barleft1: 0,
              barleft2: 0,
              level: null,
              ani: false,
              prevValues: [],
            };
          },
          watch: {
            range: function range() {
              this.init();
            },
            rangeValues: function rangeValues() {
              this.init();
            },
            ani: function ani(flag) {
              if (flag) {
                this.prevValues = this.rangeValues;
              }
            },
          },
          computed: {
            total: function total() {
              return this.range[1] - this.range[0];
            },
            cell: function cell() {
              return this.total / this.level;
            },
            mainColor: function mainColor() {
              return this.color ? toRGBA(this.color) : '';
            },
            boxColor: function boxColor() {
              return this.color ? toRGBA(this.color, 0.3) : '';
            },
            subColor: function subColor() {
              return this.color ? toRGBA(this.color, 0.5) : '';
            },
          },
          methods: {
            init: function init() {
              this.box = this.$el.querySelector('.nut-range-box');
              this.propInit();
            },
            updateRangeValues: function updateRangeValues() {
              var rangeValues = [this.currentLeft, this.currentRight];
              this.$emit('update:rangeValues', rangeValues);
            },
            getPosLeft: function getPosLeft(pos, isEnd) {
              this.barleft1 = pos;
              var currentLeft = this.setCurrent(pos);
              var _this$prevValues = slicedToArray_default()(this.prevValues, 2),
                prevLeft = _this$prevValues[0],
                prevRight = _this$prevValues[1];
              if (isEnd) {
                if (this.stage) {
                  var stageNum = 0;
                  if (currentLeft > prevLeft) {
                    stageNum = Math.ceil(currentLeft / this.stage);
                  } else {
                    stageNum = Math.floor(currentLeft / this.stage);
                  }
                  this.currentLeft = stageNum * this.stage;
                } else {
                  this.currentLeft = currentLeft;
                }
              } else {
                this.currentLeft = currentLeft;
              }
              if (isEnd) {
                this.updateRangeValues();
              }
            },
            getPosRight: function getPosRight(pos, isEnd) {
              this.barleft2 = pos;
              var currentRight = this.setCurrent(pos);
              var _this$prevValues2 = slicedToArray_default()(this.prevValues, 2),
                prevLeft = _this$prevValues2[0],
                prevRight = _this$prevValues2[1];
              if (isEnd) {
                if (this.stage) {
                  var stageNum = 0;
                  if (currentRight > prevRight) {
                    stageNum = Math.ceil(currentRight / this.stage);
                  } else {
                    stageNum = Math.floor(currentRight / this.stage);
                  }
                  this.currentRight = stageNum * this.stage;
                } else {
                  this.currentRight = currentRight;
                }
              } else {
                this.currentRight = currentRight;
              }
              if (isEnd) {
                this.updateRangeValues();
              }
            },
            setCurrent: function setCurrent(posi) {
              var trans = (posi / this.box.clientWidth) * this.total;
              var current = (trans / this.cell) * this.cell + this.range[0];
              return current > this.range[1] - 1 ? this.range[1] : current < this.range[0] + 1 ? this.range[0] : Math.round(current);
            },
            setVal: function setVal(posi) {
              var trans = (posi / this.box.clientWidth) * this.total;
              this.current = Math.round(trans / this.cell) * this.cell + this.range[0];
              this.$emit('update:value', this.current);
            },
            valToPosi: function valToPosi(current) {
              var pos = (current - this.range[0]) * (this.box.clientWidth / this.total);
              return pos;
            },
            setPosi: function setPosi(posi) {
              if (posi < 0 || posi > this.box.clientWidth) return;
              this.posi = posi;
              this.setVal(posi);
            },
            onClick: function onClick(event) {
              event.preventDefault();
              var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              this.boxLeft = this.box.getBoundingClientRect().left;
              var posi = event.pageX - this.boxLeft - pageScrollLeft;
              this.setVal(posi);
              this.posi = this.valToPosi();
            },
            propInit: function propInit() {
              if (!this.stage || this.stage > this.range[1] - this.range[0]) {
                this.level = this.range[1] - this.range[0];
              } else {
                this.level = this.stage;
              }
              this.currentLeft = Math.max(this.rangeValues[0], this.range[0]);
              this.currentRight = Math.max(this.currentLeft, Math.min(this.rangeValues[1], this.range[1]));
              this.initLeft1 = this.valToPosi(this.currentLeft);
              this.initLeft2 = this.valToPosi(this.currentRight);
              this.barleft1 = this.initLeft1;
              this.barleft2 = this.initLeft2;
            },
          },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              _this.init();
            });
          },
        };
        // CONCATENATED MODULE: ./src/packages/range/range.vue?vue&type=script&lang=js&
        /* harmony default export */ var range_rangevue_type_script_lang_js_ = rangevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/range/range.vue

        /* normalize component */

        var range_component = normalizeComponent(
          range_rangevue_type_script_lang_js_,
          rangevue_type_template_id_ff279bd4_render,
          rangevue_type_template_id_ff279bd4_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var range = range_component.exports;
        // EXTERNAL MODULE: ./src/packages/range/range.scss
        var range_range = __webpack_require__(37);

        // CONCATENATED MODULE: ./src/packages/range/index.js

        range.install = function (Vue) {
          Vue.component(range.name, range);
        };
        /* harmony default export */ var packages_range = range;
        // CONCATENATED MODULE: ./src/packages/picker/index.js

        picker.install = function (Vue) {
          Vue.component(picker.name, picker);
        };
        /* harmony default export */ var packages_picker = picker;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/progress/progress.vue?vue&type=template&id=7abe3814&
        var progressvue_type_template_id_7abe3814_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-progress' }, [
            _c(
              'div',
              {
                staticClass: 'nut-progress-outer',
                class: [_vm.showText && !_vm.textInside ? 'nut-progress-outer-part' : '', 'nut-progress-' + _vm.size],
                style: { height: _vm.height },
              },
              [
                _c('div', { class: ['nut-progress-inner', _vm.status == 'active' ? 'nut-active' : ''], style: _vm.bgStyle }, [
                  _vm.showText && _vm.textInside
                    ? _c('div', { staticClass: 'nut-progress-text', style: { lineHeight: _vm.height } }, [
                        _c('span', { style: _vm.textStyle }, [_vm._v(_vm._s(_vm.percentage) + '%')]),
                      ])
                    : _vm._e(),
                ]),
              ]
            ),
            _vm._v(' '),
            _vm.showText && !_vm.textInside
              ? _c(
                  'div',
                  { staticClass: 'nut-progress-text', style: { lineHeight: _vm.height } },
                  [
                    _vm._t('default', [
                      _vm.status == 'text' || _vm.status == 'active'
                        ? [_c('span', { style: _vm.textStyle }, [_vm._v(_vm._s(_vm.percentage) + '%')])]
                        : _vm.status == 'success' || 'wrong'
                        ? [_c('i', { class: _vm.statusIcon })]
                        : _vm._e(),
                    ]),
                  ],
                  2
                )
              : _vm._e(),
          ]);
        };
        var progressvue_type_template_id_7abe3814_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/progress/progress.vue?vue&type=template&id=7abe3814&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/progress/progress.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var progressvue_type_script_lang_js_ = {
          name: 'nut-progress',
          props: {
            percentage: {
              type: [Number, String],
              default: 0,
              required: true,
            },
            size: {
              type: String,
              default: '',
            },
            status: {
              type: String,
              default: 'text',
            },
            strokeWidth: {
              type: [Number, String],
              default: '',
            },
            textInside: {
              type: Boolean,
              default: false,
            },
            showText: {
              type: Boolean,
              default: true,
            },
            strokeColor: {
              type: String,
              default: '',
            },
            textColor: {
              tyep: String,
              default: '',
            },
          },
          data: function data() {
            return {
              height: this.strokeWidth + 'px',
            };
          },
          computed: {
            bgStyle: function bgStyle() {
              return {
                width: this.percentage + '%',
                backgroundColor: this.strokeColor || '',
              };
            },
            textStyle: function textStyle() {
              return {
                color: this.textColor || '',
              };
            },
            statusIcon: function statusIcon() {
              return this.status === 'success' ? 'nut-icon-success' : this.status === 'wrong' ? 'nut-icon-fail' : '';
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/progress/progress.vue?vue&type=script&lang=js&
        /* harmony default export */ var progress_progressvue_type_script_lang_js_ = progressvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/progress/progress.vue

        /* normalize component */

        var progress_component = normalizeComponent(
          progress_progressvue_type_script_lang_js_,
          progressvue_type_template_id_7abe3814_render,
          progressvue_type_template_id_7abe3814_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var progress = progress_component.exports;
        // EXTERNAL MODULE: ./src/packages/progress/progress.scss
        var progress_progress = __webpack_require__(38);

        // CONCATENATED MODULE: ./src/packages/progress/index.js

        progress.install = function (Vue) {
          Vue.component(progress.name, progress);
        };
        /* harmony default export */ var packages_progress = progress;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/price/price.vue?vue&type=template&id=039bfd33&
        var pricevue_type_template_id_039bfd33_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-price', domProps: { innerHTML: _vm._s(_vm.priceShow) } }, [_c('span')]);
        };
        var pricevue_type_template_id_039bfd33_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/price/price.vue?vue&type=template&id=039bfd33&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/price/price.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var pricevue_type_script_lang_js_ = {
          name: 'nut-price',
          props: {
            price: {
              type: [Number, String],
              default: 0,
            },
            needSymbol: {
              type: Boolean,
              default: true,
            },
            decimalDigits: {
              type: [Number, String],
              default: 2,
            },
            thousands: {
              type: Boolean,
              default: false,
            },
          },
          computed: {
            priceShow: function priceShow() {
              var self = this;
              var symbol = self.needSymbol ? '<span class="price-symbol">￥</span>' : '';
              return symbol + self.formatToHump(self.price);
            },
          },
          data: function data() {
            return {};
          },
          methods: {
            //判断是否为小数点
            checkPoint: function checkPoint(num) {
              return String(num).indexOf('.') > 0;
            },
            //将数字转换成驼峰形式
            formatToHump: function formatToHump(num) {
              var self = this;
              num = String(num).replace('￥', '');
              if (self.checkPoint(num)) {
                var numArray = Number(num).toFixed(this.decimalDigits);
                numArray = String(numArray).split('.');
                return (
                  '<span class="price-big">' +
                  self.formatThousands(numArray[0]) +
                  '</span><span class="price-point">.</span><span class="price-small">' +
                  self.formatDecimal(numArray[1]) +
                  '</span>'
                );
              } else {
                return (
                  '<span class="price-big">' +
                  self.formatThousands(num) +
                  '</span><span class="price-point">.</span><span class="price-small">' +
                  self.formatDecimal(0) +
                  '</span>'
                );
              }
            },
            //根据小数位数格式化小数部分
            formatDecimal: function formatDecimal(decimalNum) {
              var self = this;
              var decimalDigits = self.decimalDigits;
              var result = '0.' + String(decimalNum);
              var resultFixed = (result / 1).toFixed(decimalDigits);
              return String(resultFixed).substring(2, resultFixed.length);
            },
            //千分位显示
            formatThousands: function formatThousands(num) {
              var self = this;
              var result = '';
              // let
              if (self.thousands) {
                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
              } else {
                return num;
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/price/price.vue?vue&type=script&lang=js&
        /* harmony default export */ var price_pricevue_type_script_lang_js_ = pricevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/price/price.vue

        /* normalize component */

        var price_component = normalizeComponent(
          price_pricevue_type_script_lang_js_,
          pricevue_type_template_id_039bfd33_render,
          pricevue_type_template_id_039bfd33_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var price = price_component.exports;
        // EXTERNAL MODULE: ./src/packages/price/price.scss
        var price_price = __webpack_require__(39);

        // CONCATENATED MODULE: ./src/packages/price/index.js

        price.install = function (Vue) {
          Vue.component(price.name, price);
        };
        /* harmony default export */ var packages_price = price;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/row/row.vue?vue&type=template&id=e4176690&
        var rowvue_type_template_id_e4176690_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-row', class: _vm.getClassObject() }, [_vm._t('default')], 2);
        };
        var rowvue_type_template_id_e4176690_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/row/row.vue?vue&type=template&id=e4176690&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/row/row.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //

        /* harmony default export */ var rowvue_type_script_lang_js_ = {
          name: 'nut-row',
          props: {
            type: {
              type: String,
              default: '',
            },
            gutter: {
              type: [String, Number],
              default: '',
            },
            tag: {
              type: String,
              default: 'div',
            },
            justify: {
              type: String,
              default: 'start',
            },
            align: {
              type: String,
              default: 'flex-start',
            },
            flexWrap: {
              type: String,
              default: 'nowrap',
            },
          },
          computed: {
            getGutter: function getGutter() {
              return ''.concat(this.gutter, 'px');
            },
          },
          methods: {
            initCol: function initCol(slot) {
              for (var i = 0; i < slot.length; i++) {
                var tag = slot[i].tag;
                if (typeof tag == 'string') {
                  if (tag.indexOf('nut-col') != -1) {
                    var slotElm = slot[i].elm;
                    slotElm.style.paddingLeft = this.getGutter;
                    slotElm.style.paddingRight = this.getGutter;
                  }
                }
              }
            },
            getClass: function getClass(prefix, type) {
              return prefix ? (type ? 'nut-row-'.concat(prefix, '-').concat(type) : '') : 'nut-row-'.concat(type);
            },
            getClassObject: function getClassObject() {
              return '\n                '
                .concat(this.getClass('', this.type), '  \n                ')
                .concat(this.getClass('justify', this.justify), ' \n                ')
                .concat(this.getClass('align', this.align), ' \n                ')
                .concat(this.getClass('flex', this.flexWrap), '\n                ');
            },
          },
          mounted: function mounted() {
            var slot = toConsumableArray_default()(this.$slots.default);
            this.initCol(slot);
          },
        };
        // CONCATENATED MODULE: ./src/packages/row/row.vue?vue&type=script&lang=js&
        /* harmony default export */ var row_rowvue_type_script_lang_js_ = rowvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/row/row.vue

        /* normalize component */

        var row_component = normalizeComponent(
          row_rowvue_type_script_lang_js_,
          rowvue_type_template_id_e4176690_render,
          rowvue_type_template_id_e4176690_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var row = row_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/col/col.vue?vue&type=template&id=8b626f72&
        var colvue_type_template_id_8b626f72_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-col', class: _vm.classObject }, [_vm._t('default')], 2);
        };
        var colvue_type_template_id_8b626f72_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/col/col.vue?vue&type=template&id=8b626f72&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/col/col.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //

        /* harmony default export */ var colvue_type_script_lang_js_ = {
          name: 'nut-col',
          props: {
            span: {
              type: [String, Number],
              default: '24',
            },
            offset: {
              type: [String, Number],
              default: '0',
            },
          },
          data: function data() {
            return {
              classObject: {},
            };
          },
          watch: {
            span: {
              handler: function handler(val) {
                if (val) {
                  this.classObject = extends_default()(this.classObject, defineProperty_default()({}, 'nut-col-' + val, this.span == val));
                }
              },
              immediate: true,
            },
            offset: {
              handler: function handler(val) {
                if (val) {
                  this.classObject = extends_default()(this.classObject, defineProperty_default()({}, 'nut-col-offset-' + val, this.offset == val));
                }
              },
              immediate: true,
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/col/col.vue?vue&type=script&lang=js&
        /* harmony default export */ var col_colvue_type_script_lang_js_ = colvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/col/col.vue

        /* normalize component */

        var col_component = normalizeComponent(
          col_colvue_type_script_lang_js_,
          colvue_type_template_id_8b626f72_render,
          colvue_type_template_id_8b626f72_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var col = col_component.exports;
        // CONCATENATED MODULE: ./src/packages/flex/_flex.js

        // EXTERNAL MODULE: ./src/packages/flex/flex.scss
        var flex = __webpack_require__(40);

        // CONCATENATED MODULE: ./src/packages/flex/index.js

        row.install = function (Vue) {
          Vue.component(Flex.name, row);
        };
        col.install = function (Vue) {
          Vue.component(Flex.name, col);
        };
        /* harmony default export */ var packages_flex = {
          Row: row,
          Col: col,
        };
        // EXTERNAL MODULE: ./src/packages/col/col.scss
        var col_col = __webpack_require__(41);

        // CONCATENATED MODULE: ./src/packages/col/index.js

        col.install = function (Vue) {
          Vue.component(col.name, col);
        };
        /* harmony default export */ var packages_col = col;
        // EXTERNAL MODULE: ./src/packages/row/row.scss
        var row_row = __webpack_require__(42);

        // CONCATENATED MODULE: ./src/packages/row/index.js

        row.install = function (Vue) {
          Vue.component(row.name, row);
        };
        /* harmony default export */ var packages_row = row;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/steps/steps.vue?vue&type=template&id=0f9c0326&
        var stepsvue_type_template_id_0f9c0326_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-steps' }, [_vm._t('default')], 2);
        };
        var stepsvue_type_template_id_0f9c0326_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/steps/steps.vue?vue&type=template&id=0f9c0326&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/steps/steps.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var stepsvue_type_script_lang_js_ = {
          name: 'nut-steps',
          props: {
            current: {
              type: Number,
            },
            source: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            status: {
              validator: function validator(value) {
                return ['wait', 'process', 'finish', 'error'].includes(value);
              },
              default: 'process',
            },
          },
          data: function data() {
            return {
              steps: [],
              stepOffset: 0,
            };
          },
          methods: {
            updateChildProps: function updateChildProps(isInit) {
              var _this = this;
              var total = this.steps.length;
              this.steps.forEach(function (child, index) {
                child.stepNumber = index + 1;
                if (_this.direction === 'horizontal') {
                  child.total = total;
                }
                // 如果已存在status,且在初始化时,则略过
                // todo 如果当前是error,在current改变时需要处理
                if (!(isInit && child.currentStatus)) {
                  if (index == _this.current - 1) {
                    if (_this.status != 'error') {
                      child.currentStatus = 'process';
                    } else {
                      child.currentStatus = 'error';
                    }
                  } else if (index < _this.current) {
                    child.currentStatus = 'finish';
                  } else {
                    child.currentStatus = 'wait';
                  }
                }
                if (index + 1 === total) {
                  child.currentStatus += ' nut-step-last';
                }
              });
            },
            init: function init() {
              if (this.$slots.default) {
                this.steps = this.$slots.default
                  .filter(function (vnode) {
                    return !!vnode.componentInstance;
                  })
                  .map(function (node) {
                    return node.componentInstance;
                  });
                this.updateChildProps(true);
              }
            },
          },
          mounted: function mounted() {
            this.init();
          },
          watch: {
            current: function current() {
              this.updateChildProps();
            },
            source: function source() {
              var _this2 = this;
              this.$nextTick(function () {
                _this2.init();
              });
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/steps/steps.vue?vue&type=script&lang=js&
        /* harmony default export */ var steps_stepsvue_type_script_lang_js_ = stepsvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/steps/steps.vue

        /* normalize component */

        var steps_component = normalizeComponent(
          steps_stepsvue_type_script_lang_js_,
          stepsvue_type_template_id_0f9c0326_render,
          stepsvue_type_template_id_0f9c0326_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var steps = steps_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/steps/Step.vue?vue&type=template&id=6436ad52&
        var Stepvue_type_template_id_6436ad52_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-step clearfix', class: 'nut-step-status-' + _vm.currentStatus }, [
            _c('div', { staticClass: 'nut-step-line' }),
            _vm._v(' '),
            _c('div', { staticClass: 'nut-step-index' }, [_vm._v(_vm._s(_vm.stepNumber))]),
            _vm._v(' '),
            _c('div', { staticClass: 'nut-step-main' }, [
              _c('div', { staticClass: 'nut-step-title' }, [_vm._v(_vm._s(_vm.title || _vm.nutTranslate('lang.steps.step')))]),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-step-content' }, [_vm._v(_vm._s(_vm.content || _vm.nutTranslate('lang.steps.stepDesc')))]),
            ]),
          ]);
        };
        var Stepvue_type_template_id_6436ad52_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/steps/Step.vue?vue&type=template&id=6436ad52&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/steps/Step.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var Stepvue_type_script_lang_js_ = {
          name: 'nut-step',
          mixins: [mixins_locale],
          props: {
            title: {
              type: String,
            },
            content: {
              type: String,
            },
          },
          data: function data() {
            return {
              currentStatus: '',
              stepNumber: 0,
              stepStatus: 'nut-step-status',
            };
          },
          methods: {},
          mounted: function mounted() {},
        };
        // CONCATENATED MODULE: ./src/packages/steps/Step.vue?vue&type=script&lang=js&
        /* harmony default export */ var steps_Stepvue_type_script_lang_js_ = Stepvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/steps/Step.vue

        /* normalize component */

        var Step_component = normalizeComponent(
          steps_Stepvue_type_script_lang_js_,
          Stepvue_type_template_id_6436ad52_render,
          Stepvue_type_template_id_6436ad52_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var Step = Step_component.exports;
        // CONCATENATED MODULE: ./src/packages/steps/_steps.js

        steps.Step = Step;
        /* harmony default export */ var _steps = steps;
        // EXTERNAL MODULE: ./src/packages/steps/steps.scss
        var steps_steps = __webpack_require__(43);

        // CONCATENATED MODULE: ./src/packages/steps/index.js

        var steps_Step = _steps.Step;
        _steps.install = function (Vue) {
          Vue.component(_steps.name, _steps);
        };
        steps_Step.install = function (Vue) {
          Vue.component(steps_Step.name, steps_Step);
        };
        /* harmony default export */ var packages_steps = {
          Steps: _steps,
          Step: steps_Step,
        };
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/button/button.vue?vue&type=template&id=5b107c94&
        var buttonvue_type_template_id_5b107c94_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'button',
            { class: _vm.clsStyle, attrs: { disabled: _vm.disabled }, on: { click: _vm.clickHandler } },
            [
              _vm.icon != '' ? _c('nut-icon', { staticClass: 'txt-icon', attrs: { type: _vm.icon, color: _vm.color } }) : _vm._e(),
              _vm._v(' '),
              _c('span', { style: { color: _vm.color } }, [_vm._t('default')], 2),
            ],
            1
          );
        };
        var buttonvue_type_template_id_5b107c94_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/button/button.vue?vue&type=template&id=5b107c94&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/button/button.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var buttonvue_type_script_lang_js_ = {
          name: 'nut-button',
          props: {
            type: {
              type: String,
              default: '',
            },
            shape: {
              type: String,
              default: '',
            },
            icon: {
              type: String,
              default: '',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            block: {
              type: Boolean,
              default: false,
            },
            small: {
              type: Boolean,
              default: false,
            },
            label: {
              type: Boolean,
              default: false,
            },
            color: {
              type: String,
              default: '',
            },
          },
          components: {
            'nut-icon': icon,
          },
          computed: {
            clsStyle: function clsStyle() {
              var cls = 'nut-button '
                .concat(this.type, ' ')
                .concat(this.shape, ' \n            ')
                .concat(this.small ? ' small' : '', ' \n            ')
                .concat(this.block ? ' block' : '', ' \n            ')
                .concat(this.label ? ' label' : '', '\n            ')
                .concat(!this.$slots.default ? (this.small ? 'no-txt-small' : 'no-txt') : '');
              return cls;
            },
          },
          methods: {
            clickHandler: function clickHandler(event) {
              // 如果是loading就阻止点击
              if (this.disabled) {
                return;
              }
              this.$emit('click', event);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/button/button.vue?vue&type=script&lang=js&
        /* harmony default export */ var button_buttonvue_type_script_lang_js_ = buttonvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/button/button.vue

        /* normalize component */

        var button_component = normalizeComponent(
          button_buttonvue_type_script_lang_js_,
          buttonvue_type_template_id_5b107c94_render,
          buttonvue_type_template_id_5b107c94_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var button_button = button_component.exports;
        // EXTERNAL MODULE: ./src/packages/button/button.scss
        var packages_button_button = __webpack_require__(10);

        // CONCATENATED MODULE: ./src/packages/button/index.js

        button_button.install = function (Vue) {
          Vue.component(button_button.name, button_button);
        };
        /* harmony default export */ var packages_button = button_button;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/badge/badge.vue?vue&type=template&id=592dead7&
        var badgevue_type_template_id_592dead7_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-badge' },
            [
              _vm._t('default'),
              _vm._v(' '),
              _c('sup', {
                directives: [
                  { name: 'show', rawName: 'v-show', value: !_vm.hidden && (_vm.content || _vm.isDot), expression: '!hidden && (content || isDot)' },
                ],
                staticClass: 'nut-badge__content',
                class: { 'is-dot': _vm.isDot },
                style: _vm.stl,
                domProps: { textContent: _vm._s(_vm.content) },
              }),
            ],
            2
          );
        };
        var badgevue_type_template_id_592dead7_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/badge/badge.vue?vue&type=template&id=592dead7&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/badge/badge.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var badgevue_type_script_lang_js_ = {
          name: 'nut-badge',
          props: {
            value: {
              type: [String, Number],
            },
            max: {
              type: Number,
              default: 10000,
            },
            isDot: {
              type: Boolean,
              default: false,
            },
            hidden: {
              type: Boolean,
              default: false,
            },
            top: {
              type: String,
              default: '0',
            },
            right: {
              type: String,
              default: '0',
            },
            zIndex: {
              type: Number,
              default: 10,
            },
          },
          data: function data() {
            return {
              stl: {
                top: this.top,
                right: this.right,
                zIndex: this.zIndex,
              },
            };
          },
          computed: {
            content: function content() {
              if (this.isDot) return;
              var value = this.value;
              var max = this.max;
              if (typeof value === 'number' && typeof max === 'number') {
                return max < value ? ''.concat(max, '+') : value;
              }
              return value;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/badge/badge.vue?vue&type=script&lang=js&
        /* harmony default export */ var badge_badgevue_type_script_lang_js_ = badgevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/badge/badge.vue

        /* normalize component */

        var badge_component = normalizeComponent(
          badge_badgevue_type_script_lang_js_,
          badgevue_type_template_id_592dead7_render,
          badgevue_type_template_id_592dead7_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var badge = badge_component.exports;
        // EXTERNAL MODULE: ./src/packages/badge/badge.scss
        var badge_badge = __webpack_require__(44);

        // CONCATENATED MODULE: ./src/packages/badge/index.js

        badge.install = function (Vue) {
          Vue.component(badge.name, badge);
        };
        /* harmony default export */ var packages_badge = badge;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/rate/rate.vue?vue&type=template&id=1b0e1569&
        var ratevue_type_template_id_1b0e1569_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-rate' },
            _vm._l(_vm.total, function (n) {
              return _c('span', {
                key: n,
                staticClass: 'nut-rate-item',
                class: [{ 'nut-rate-active': n <= _vm.current }],
                style: {
                  height: _vm.size + 'px',
                  width: _vm.size + 'px',
                  marginRight: _vm.spacing + 'px',
                  backgroundImage: n <= _vm.current ? _vm.checkedIcon : _vm.uncheckedIcon,
                },
                on: {
                  click: function ($event) {
                    return _vm.onClick($event, n);
                  },
                },
              });
            }),
            0
          );
        };
        var ratevue_type_template_id_1b0e1569_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/rate/rate.vue?vue&type=template&id=1b0e1569&

        // EXTERNAL MODULE: ./src/packages/rate/rate.scss
        var rate = __webpack_require__(11);

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/rate/rate.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var ratevue_type_script_lang_js_ = {
          name: 'nut-rate',
          props: {
            total: {
              type: [String, Number],
              default: 5,
            },
            value: {
              type: [String, Number],
              default: 3,
            },
            size: {
              type: [String, Number],
              default: 25,
            },
            uncheckedIcon: {
              type: String,
              default: null,
            },
            checkedIcon: {
              type: String,
              default: null,
            },
            readOnly: {
              type: Boolean,
              default: false,
            },
            spacing: {
              type: [String, Number],
              default: 20,
            },
          },
          data: function data() {
            return {
              current: 3,
            };
          },
          created: function created() {
            this.current = this.value;
          },
          methods: {
            onClick: function onClick($event, idx) {
              if (this.readOnly) {
                this.$emit('input', this.current);
                this.$emit('click', this.current);
              } else {
                if (this.current == idx) {
                  this.current = 0;
                } else {
                  this.current = idx;
                }
                this.$emit('input', this.current);
                this.$emit('click', this.current);
              }
            },
          },
          watch: {
            value: function value(newVal, oldVal) {
              this.current = newVal;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/rate/rate.vue?vue&type=script&lang=js&
        /* harmony default export */ var rate_ratevue_type_script_lang_js_ = ratevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/rate/rate.vue

        /* normalize component */

        var rate_component = normalizeComponent(
          rate_ratevue_type_script_lang_js_,
          ratevue_type_template_id_1b0e1569_render,
          ratevue_type_template_id_1b0e1569_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var rate_rate = rate_component.exports;
        // CONCATENATED MODULE: ./src/packages/rate/index.js

        rate_rate.install = function (Vue) {
          Vue.component(rate_rate.name, rate_rate);
        };
        /* harmony default export */ var packages_rate = rate_rate;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/swiper/swiper.vue?vue&type=template&id=0aa414e9&
        var swipervue_type_template_id_0aa414e9_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'nut-swiper',
              class: [_vm.direction, { dragging: _vm.dragging }],
              on: {
                touchstart: function ($event) {
                  return _vm._onTouchStart($event);
                },
                mousedown: function ($event) {
                  return _vm._onTouchStart($event);
                },
              },
            },
            [
              _c(
                'div',
                {
                  staticClass: 'nut-swiper-wrap',
                  style: {
                    transform: 'translate3d(' + _vm.translateX + 'px,' + _vm.translateY + 'px,0)',
                    'transition-duration': _vm.transitionDuration + 'ms',
                    '-webkit-transform': 'translate3d(' + _vm.translateX + 'px,' + _vm.translateY + 'px,0)',
                    '-webkit-transition-duration': _vm.transitionDuration + 'ms',
                    'transition-timing-function': 'ease',
                  },
                  on: { transitionend: _vm._onTransitionEnd },
                },
                [_vm._t('default')],
                2
              ),
              _vm._v(' '),
              _c(
                'div',
                {
                  directives: [{ name: 'show', rawName: 'v-show', value: _vm.paginationVisible, expression: 'paginationVisible' }],
                  staticClass: 'nut-swiper-pagination',
                },
                _vm._l(_vm.slideEls, function (slide, index) {
                  return _c('span', {
                    key: index,
                    staticClass: 'swiper-pagination-bullet',
                    class: { active: index + 1 === _vm.currentPage },
                    on: {
                      click: function ($event) {
                        _vm.paginationClickable && _vm.setPage(index + 1, true);
                      },
                    },
                  });
                }),
                0
              ),
            ]
          );
        };
        var swipervue_type_template_id_0aa414e9_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/swiper/swiper.vue?vue&type=template&id=0aa414e9&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/swiper/swiper.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var VERTICAL = 'vertical';
        var HORIZONTAL = 'horizontal';
        /* harmony default export */ var swipervue_type_script_lang_js_ = {
          name: 'nut-swiper',
          props: {
            direction: {
              type: String,
              default: HORIZONTAL,
              validator: function validator(value) {
                return [VERTICAL, HORIZONTAL].indexOf(value) > -1;
              },
            },
            paginationVisible: {
              type: Boolean,
              default: false,
            },
            paginationClickable: {
              type: Boolean,
              default: false,
            },
            loop: {
              type: Boolean,
              default: false,
            },
            speed: {
              type: Number,
              default: 500,
            },
            canDragging: {
              type: Boolean,
              default: true,
            },
            autoPlay: {
              type: Number,
              default: 0,
            },
            initPage: {
              type: Number,
              default: 1,
            },
            newCurrentPage: {
              type: Number,
              default: 1,
            },
            lazyLoad: {
              type: Boolean,
              default: false,
            },
            lazyLoadUrl: {
              type: String,
              default: '',
            },
            swiperData: {
              type: [Array],
              default: function _default() {
                return [];
              },
            },
          },
          watch: {
            swiperData: function swiperData(newValue, oldValue) {
              this.updateEvent();
            },
            newCurrentPage: function newCurrentPage(newPage) {
              var modTempNum = newPage % this.slideEls.length;
              newPage = modTempNum == 0 ? this.slideEls.length : modTempNum < 0 ? this.slideEls.length + modTempNum : modTempNum;
              if (newPage >= this.currentPage) {
                this.next(newPage - this.currentPage);
              } else {
                this.prev(this.currentPage - newPage);
              }
            },
          },
          data: function data() {
            return {
              dragging: false,
              currentPage: this.initPage || this.newCurrentPage,
              lastPage: 1,
              translateX: 0,
              translateY: 0,
              startTranslate: 0,
              slideEls: [],
              translateOffset: 0,
              //当前偏移初始位置距离
              transitionDuration: 0,
              //切换动画时间
              startPos: null,
              delta: 0,
              //拖动距离
              startTime: null,
              isLoop: this.loop,
              timer: null,
              //自动播放定时器
              domTimer: null,
              //渲染延迟查找
              stopAutoPlay: false,
              //停止自动播放
              swiperWrap: null,
              oneSlideTranslate: 0, //一个slide的大小
            };
          },

          methods: {
            //下一张
            next: function next() {
              var turnPageCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var page = this.currentPage;
              if (page + turnPageCount < this.slideEls.length || this.isLoop) {
                this.setPage(page + turnPageCount, true, 'NEXT');
              } else {
                this._revert();
              }
            },
            //上一张
            prev: function prev() {
              var turnPageCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var page = this.currentPage;
              if (page - turnPageCount > 1 || this.isLoop) {
                this.setPage(page - turnPageCount, true, 'PREV');
              } else {
                this._revert();
              }
            },
            setPage: function setPage(page, isHasAnimation, type) {
              if (page === 0) {
                this.currentPage = this.slideEls.length;
              } else if (page > this.slideEls.length) {
                this.currentPage = page - this.slideEls.length;
              } else {
                this.currentPage = page;
              }
              this._setTranslate(this._getTranslateOfPage(page));
              if (!isHasAnimation) {
                this._slideClassHandle();
              } else {
                this._onTransitionStart(type);
              }
            },
            isHorizontal: function isHorizontal() {
              return this.direction === HORIZONTAL;
            },
            isVertical: function isVertical() {
              return this.direction === VERTICAL;
            },
            renderLazyDom: function renderLazyDom(slideEls) {
              var _this2 = this;
              slideEls.forEach(function (item, index) {
                var src = item.getAttribute('data-src');
                if (item.className != 'nut-swiper-slide nut-swiper-slide-selected') {
                  var dom = document.createElement('div');
                  //jd 图片占位图)
                  if (_this2.lazyLoadUrl) {
                    dom.style.backgroundImage = "url('".concat(_this2.lazyLoadUrl, "')");
                    dom.className = 'nut-lazy img';
                  } else {
                    dom.className = 'nut-lazy preloader';
                  }
                  item.appendChild(dom);
                }
              });
              return true;
            },
            updateEvent: function updateEvent(pageSize) {
              var _this3 = this;
              this.$nextTick(function () {
                _this3.domTimer = setTimeout(function () {
                  if (pageSize != undefined) _this3.currentPage = pageSize;
                  _this3.swiperWrap = _this3.$el.querySelector('.nut-swiper-wrap');
                  _this3.slideEls = toConsumableArray_default()(_this3.swiperWrap.children);
                  if (_this3.slideEls.length === 0) return;
                  _this3._getSlideDistance(_this3.slideEls[0]);
                  if (_this3.autoPlay != 0) {
                    _this3.isLoop = true;
                    _this3._createAutoPlay();
                  }
                  _this3.isLoop && _this3._createLoop();
                  _this3.setPage(_this3.currentPage, false);
                  _this3.lazyLoad && _this3.renderLazyDom(_this3.slideEls) && _this3._imgLazyLoad();
                }, 0);
              });
            },
            _slideClassHandle: function _slideClassHandle() {
              var selectedSlide = this.$el.querySelector('.nut-swiper-slide-selected');
              selectedSlide && selectedSlide.classList.remove('nut-swiper-slide-selected');
              this.slideEls[this.currentPage - 1].classList.add('nut-swiper-slide-selected');
              this.lastPage = this.currentPage;
            },
            _getSlideDistance: function _getSlideDistance(el) {
              var styleArr = getComputedStyle(el);
              var marginTop = styleArr['marginTop'].replace('px', '') - 0;
              var marginBottom = styleArr['marginBottom'].replace('px', '') - 0;
              var marginRight = styleArr['marginRight'].replace('px', '') - 0;
              var marginLeft = styleArr['marginLeft'].replace('px', '') - 0;
              if (this.isHorizontal()) {
                this.oneSlideTranslate = marginRight + marginLeft + el['offsetWidth'];
              } else {
                this.oneSlideTranslate = marginTop + marginBottom + el['offsetHeight'];
              }
            },
            _onTouchStart: function _onTouchStart(e) {
              this.swiperWrap.addEventListener('touchmove', this._onTouchMove, false);
              this.swiperWrap.addEventListener('touchend', this._onTouchEnd, false);
              this.swiperWrap.addEventListener('mousemove', this._onTouchMove, false);
              this.swiperWrap.addEventListener('mouseup', this._onTouchEnd, false);
              this.startPos = this._getTouchPos(e);
              this.delta = 0;
              this.startTranslate = this._getTranslateOfPage(this.currentPage);
              if (this.isLoop) {
                this._setTranslate(this.startTranslate);
              }
              this.startTime = new Date().getTime();
              this.dragging = true;
              this.transitionDuration = 0;
              this.stopAutoPlay = true;
            },
            _onTouchMove: function _onTouchMove(e) {
              if (!this.dragging) return;
              if (this.isHorizontal()) {
                this.delta = this._getTouchPos(e).x - this.startPos.x;
              } else {
                this.delta = this._getTouchPos(e).y - this.startPos.y;
              }
              //let  isQuickAction = (new Date().getTime() - this.startTime) < 200;
              if (this.canDragging && this._computePreventDefault(e)) {
                e.preventDefault();
                this._setTranslate(this.startTranslate + this.delta);
                this.$emit('slideMove', this._getTranslate(), this.$el);
                this.$emit('slide-move', this._getTranslate(), this.$el);
              }
            },
            _onTouchEnd: function _onTouchEnd(e) {
              if (!this.dragging) return;
              this.dragging = false;
              this.transitionDuration = this.speed;
              var isQuickAction = new Date().getTime() - this.startTime < 1000;
              if (this.delta < -this.oneSlideTranslate / 2 || (isQuickAction && this.delta < -15)) {
                this.next();
              } else if (this.delta > this.oneSlideTranslate / 2 || (isQuickAction && this.delta > 15)) {
                this.prev();
              } else {
                this._revert();
              }
              this.swiperWrap.removeEventListener('touchmove', this._onTouchMove, false);
              this.swiperWrap.removeEventListener('touchend', this._onTouchEnd, false);
              this.swiperWrap.removeEventListener('mousemove', this._onTouchMove, false);
              this.swiperWrap.removeEventListener('mouseup', this._onTouchEnd, false);
            },
            _revert: function _revert() {
              this.setPage(this.currentPage, true);
            },
            _computePreventDefault: function _computePreventDefault(e) {
              var pos = this._getTouchPos(e);
              var xDis = Math.abs(this.startPos.x - pos.x);
              var yDis = Math.abs(this.startPos.y - pos.y);
              if (xDis <= 5 && xDis >= 0) {
                return false;
              } else if (yDis > 5 && yDis / xDis > 0.5) {
                return false;
              } else {
                return true;
              }
            },
            _getTouchPos: function _getTouchPos(e) {
              var x = e.changedTouches ? e.changedTouches[0]['pageX'] : e['pageX'];
              var y = e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY'];
              return {
                x: x,
                y: y,
              };
            },
            _onTransitionStart: function _onTransitionStart(type) {
              this.transitionDuration = this.speed;
              this.lazyLoad && this._imgLazyLoad(1);
              if (this._isPageChanged()) {
                this.$emit('slideChangeStart', this.currentPage, this.$el, type);
                this.$emit('slide-change-start', this.currentPage, this.$el, type);
              } else {
                this.$emit('slideRevertStart', this.currentPage, this.$el, type);
                this.$emit('slide-revert-start', this.currentPage, this.$el, type);
              }
            },
            _onTransitionEnd: function _onTransitionEnd() {
              if (this._isPageChanged()) {
                this.$emit('slideChangeEnd', this.currentPage, this.$el);
                this.$emit('slide-change-end', this.currentPage, this.$el);
              } else {
                this.$emit('slideRevertEnd', this.currentPage, this.$el);
                this.$emit('slide-revert-end', this.currentPage, this.$el);
              }
              this.transitionDuration = 0;
              this.delta = 0;
              this.lastPage = this.currentPage;
              this._slideClassHandle();
              if (this.isLoop) {
                this._setTranslate(this._getTranslateOfPage(this.currentPage));
              }
              this.stopAutoPlay = false;
            },
            _isPageChanged: function _isPageChanged() {
              return this.lastPage !== this.currentPage;
            },
            _setTranslate: function _setTranslate(value) {
              var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
              this[translateName] = value;
            },
            _getTranslate: function _getTranslate() {
              var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
              return this[translateName];
            },
            _getTranslateOfPage: function _getTranslateOfPage(page) {
              if (page === 0) return 0;
              var propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
              var _this = this;
              return (
                -[].reduce.call(
                  this.slideEls,
                  function (total, el, i) {
                    return i > page - 2 ? total : total + _this.oneSlideTranslate;
                  },
                  0
                ) + this.translateOffset
              );
            },
            _createLoop: function _createLoop() {
              var propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
              var swiperWrapEl = this.$el.querySelector('.nut-swiper-wrap');
              var duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true);
              var duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true);
              swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild);
              swiperWrapEl.appendChild(duplicateFirstChild);
              this.translateOffset = -this.oneSlideTranslate;
            },
            _createAutoPlay: function _createAutoPlay() {
              var _this4 = this;
              clearInterval(this.timer);
              this.timer = setInterval(function () {
                if (!_this4.stopAutoPlay) {
                  _this4.next();
                }
              }, this.autoPlay);
            },
            _requestAniFrame: function _requestAniFrame() {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (callback) {
                  window.setTimeout(callback, 1000 / 60);
                }
              );
            },
            _imgLazyLoad: function _imgLazyLoad(type) {
              var _this5 = this;
              var requestAniFrame = this._requestAniFrame();
              var imgLazyLoadEl;
              requestAniFrame(function () {
                imgLazyLoadEl = _this5.swiperWrap.querySelectorAll('.nut-img-lazyload');
                if (type == 1) {
                  imgLazyLoadEl = _this5.slideEls[_this5.currentPage - 1].querySelectorAll('.nut-img-lazyload');
                }
                imgLazyLoadEl.forEach(function (item, index) {
                  if (!_this5._checkInView(item) && type != 1) return;
                  var src = item.getAttribute('data-src');
                  var img = new Image();
                  img.src = src;
                  img.onload = function () {
                    var lazyLoadingEle = item.parentElement.querySelector('.nut-lazy');
                    if (lazyLoadingEle) {
                      item.parentElement.removeChild(lazyLoadingEle);
                    }
                    item.src = src;
                    item.classList.remove('nut-img-lazyload');
                  };
                  img.onerror = function () {
                    item.src = _this5.lazyLoadUrl;
                    item.classList.remove('nut-img-lazyload');
                  };
                });
              });
            },
            _checkInView: function _checkInView(imgItem) {
              var imgRect = imgItem.getBoundingClientRect();
              var swiperRect = this.$el.getBoundingClientRect();
              var imgTop = imgRect.top;
              var imgLeft = imgRect.left;
              var swiperWidth = this.$el.clientWidth;
              var swiperHeight = this.$el.clientHeight;
              var swiperTop = swiperRect.top;
              var swiperLeft = swiperRect.left;
              var isInView = true;
              if (imgTop > swiperTop + swiperHeight || imgLeft > swiperLeft + swiperWidth) {
                isInView = false;
              }
              return isInView;
            },
          },
          created: function created() {},
          mounted: function mounted() {
            this._onTouchMove = this._onTouchMove.bind(this);
            this._onTouchEnd = this._onTouchEnd.bind(this);
            this.updateEvent();
          },
          destroyed: function destroyed() {
            this.timer && clearInterval(this.timer);
            this.domTimer && clearTimeout(this.domTimer);
          },
          activated: function activated() {
            if (this.keepAlive) {
              this.keepAlive = false;
              this.updateEvent();
            }
          },
          deactivated: function deactivated() {
            this.keepAlive = true;
            this.timer && clearInterval(this.timer);
            this.domTimer && clearTimeout(this.domTimer);
          },
        };
        // CONCATENATED MODULE: ./src/packages/swiper/swiper.vue?vue&type=script&lang=js&
        /* harmony default export */ var swiper_swipervue_type_script_lang_js_ = swipervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/swiper/swiper.vue

        /* normalize component */

        var swiper_component = normalizeComponent(
          swiper_swipervue_type_script_lang_js_,
          swipervue_type_template_id_0aa414e9_render,
          swipervue_type_template_id_0aa414e9_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var swiper = swiper_component.exports;
        // EXTERNAL MODULE: ./src/packages/swiper/swiper.scss
        var swiper_swiper = __webpack_require__(45);

        // CONCATENATED MODULE: ./src/packages/swiper/index.js

        swiper.install = function (Vue) {
          Vue.component(swiper.name, swiper);
        };
        /* harmony default export */ var packages_swiper = swiper;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/menu/menu.vue?vue&type=template&id=34f80202&
        var menuvue_type_template_id_34f80202_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-menu' },
            [
              _c('transition', { attrs: { name: !_vm.isAnimation ? 'nutFade' : '' } }, [
                _c('div', {
                  directives: [{ name: 'show', rawName: 'v-show', value: _vm.isVisible, expression: 'isVisible' }],
                  staticClass: 'nut-menu-mask',
                  on: { click: _vm.clickMenuMask },
                }),
              ]),
              _vm._v(' '),
              _c('transition', { attrs: { name: !_vm.isAnimation ? 'nutSlideDown' : '' } }, [
                _c(
                  'div',
                  { directives: [{ name: 'show', rawName: 'v-show', value: _vm.isVisible, expression: 'isVisible' }], staticClass: 'nut-menu-panel' },
                  [
                    _vm.type === 'simple' && !_vm.$slots.custom
                      ? _c('div', { staticClass: 'menu-simple' }, [
                          _c(
                            'ul',
                            _vm._l(_vm.datalist, function (item, index) {
                              return _c(
                                'li',
                                {
                                  key: index,
                                  class: item.selected ? 'selected' : '',
                                  on: {
                                    click: function ($event) {
                                      return _vm.selectedItem(item, index);
                                    },
                                  },
                                },
                                [
                                  _vm._v('\n            ' + _vm._s(item.text) + '\n            '),
                                  item.selected ? _c('span', [_c('nut-icon', { attrs: { type: 'tick', color: '#f0250f' } })], 1) : _vm._e(),
                                ]
                              );
                            }),
                            0
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(' '),
                    _vm.type === 'multiple' && _vm.mulstyle === 'style1'
                      ? _c(
                          'div',
                          { staticClass: 'menu-multiple-style1' },
                          [
                            _c(
                              'ul',
                              _vm._l(_vm.datalist, function (item, index) {
                                return _c(
                                  'li',
                                  {
                                    key: index,
                                    class: {
                                      selected: item.selected ? true : false,
                                      col2: _vm.col == 2 ? true : false,
                                      col3: _vm.col == 3 ? true : false,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.selectMutiple(index);
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      'nut-checkbox',
                                      {
                                        attrs: {
                                          size: 'small',
                                          disabled:
                                            !item.selected &&
                                            _vm.max <=
                                              _vm.list.filter(function (value) {
                                                return value.selected == true;
                                              }).length
                                              ? true
                                              : false,
                                        },
                                        model: {
                                          value: item.selected,
                                          callback: function ($$v) {
                                            _vm.$set(item, 'selected', $$v);
                                          },
                                          expression: 'item.selected',
                                        },
                                      },
                                      [_vm._v(_vm._s(item.text))]
                                    ),
                                  ],
                                  1
                                );
                              }),
                              0
                            ),
                            _vm._v(' '),
                            _c(
                              'nut-button-group',
                              [
                                _c('nut-button', { attrs: { type: 'light' }, on: { click: _vm.resetMenu } }, [_vm._v(_vm._s(_vm.resetBtnTxt))]),
                                _vm._v(' '),
                                _c('nut-button', { on: { click: _vm.sureMenu } }, [_vm._v(_vm._s(_vm.okBtnTxt))]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(' '),
                    _vm.type === 'multiple' && _vm.mulstyle === 'style2'
                      ? _c(
                          'div',
                          { staticClass: 'menu-multiple-style2' },
                          [
                            _c(
                              'ul',
                              _vm._l(_vm.datalist, function (item, index) {
                                return _c(
                                  'li',
                                  {
                                    key: index,
                                    class: {
                                      selected: item.selected ? true : false,
                                      col2: _vm.col == 2 ? true : false,
                                      col3: _vm.col == 3 ? true : false,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.selectMutiple(index);
                                      },
                                    },
                                  },
                                  [_c('a', { attrs: { href: 'javascript:void(0);' } }, [_vm._v(_vm._s(item.text))])]
                                );
                              }),
                              0
                            ),
                            _vm._v(' '),
                            _c(
                              'nut-button-group',
                              [
                                _c('nut-button', { attrs: { type: 'light' }, on: { click: _vm.resetMenu } }, [_vm._v(_vm._s(_vm.resetBtnTxt))]),
                                _vm._v(' '),
                                _c('nut-button', { on: { click: _vm.sureMenu } }, [_vm._v(_vm._s(_vm.okBtnTxt))]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(' '),
                    _vm.type === 'multiple' && _vm.mulstyle === 'style3'
                      ? _c(
                          'div',
                          { staticClass: 'menu-multiple-style3' },
                          [
                            _c(
                              'ul',
                              _vm._l(_vm.datalist, function (item, index) {
                                return _c(
                                  'li',
                                  {
                                    key: index,
                                    class: {
                                      selected: item.selected ? true : false,
                                      col2: _vm.col == 2 ? true : false,
                                      col3: _vm.col == 3 ? true : false,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.selectMutiple(index);
                                      },
                                    },
                                  },
                                  [_c('label', [_vm._v(_vm._s(item.text))])]
                                );
                              }),
                              0
                            ),
                            _vm._v(' '),
                            _c(
                              'nut-button-group',
                              [
                                _c('nut-button', { attrs: { type: 'light' }, on: { click: _vm.resetMenu } }, [_vm._v(_vm._s(_vm.resetBtnTxt))]),
                                _vm._v(' '),
                                _c('nut-button', { on: { click: _vm.sureMenu } }, [_vm._v(_vm._s(_vm.okBtnTxt))]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(' '),
                    _vm.$slots.custom ? _c('div', { staticClass: 'menu-custom' }, [_vm._t('custom', [_vm._v(_vm._s(_vm.custom))])], 2) : _vm._e(),
                  ]
                ),
              ]),
            ],
            1
          );
        };
        var menuvue_type_template_id_34f80202_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/menu/menu.vue?vue&type=template&id=34f80202&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/checkbox/checkbox.vue?vue&type=template&id=26d19cb3&
        var checkboxvue_type_template_id_26d19cb3_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('label', { class: ['nut-checkbox', 'nut-checkbox-size-' + _vm.size] }, [
            _c('input', {
              class: { 'nut-checkbox-ani': _vm.animation },
              attrs: { type: 'checkbox', name: _vm.name, disabled: _vm.disabled },
              domProps: { checked: _vm.isChecked, value: _vm.submittedValue },
              on: { change: _vm.changeEvt },
            }),
            _vm._v(' '),
            _vm.label
              ? _c('span', { staticClass: 'nut-checkbox-label' }, [_vm._v('\n    ' + _vm._s(_vm.label) + '\n  ')])
              : _c('span', { staticClass: 'nut-checkbox-label' }, [_vm._t('default')], 2),
          ]);
        };
        var checkboxvue_type_template_id_26d19cb3_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/checkbox/checkbox.vue?vue&type=template&id=26d19cb3&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/checkbox/checkbox.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var checkboxvue_type_script_lang_js_ = {
          name: 'nut-checkbox',
          props: {
            name: {
              type: String,
            },
            size: {
              type: [String, Number, Boolean],
              default: 'base',
            },
            label: {
              type: String,
              default: '',
            },
            value: {
              required: true,
            },
            trueValue: {
              default: true,
            },
            falseValue: {
              default: false,
            },
            submittedValue: {
              type: String,
              default: 'on', // HTML default
            },

            checked: {
              type: Boolean,
              default: false,
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            animation: {
              type: Boolean,
              default: true,
            },
          },
          watch: {
            value: function value() {
              this.isChecked = this.looseEqual(this.value, this.trueValue);
            },
            checked: function checked(newValue, oldValue) {
              this.isChecked = newValue;
            },
          },
          data: function data() {
            return {
              isChecked: this.value == this.trueValue || this.checked,
            };
          },
          mounted: function mounted() {
            this.$emit('update:checked', this.isChecked ? this.trueValue : this.falseValue, this.label);
            this.$emit('input', this.isChecked ? this.trueValue : this.falseValue, this.label);
          },
          methods: {
            isObject: function isObject(obj) {
              return obj !== null && typeof_default()(obj) === 'object';
            },
            looseEqual: function looseEqual(a, b) {
              return a == b || (this.isObject(a) && this.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
            },
            changeEvt: function changeEvt(event) {
              var isCheckedPrevious = this.isChecked;
              var isChecked = event.target.checked;
              this.$emit('input', isChecked ? this.trueValue : this.falseValue, this.label, event);
              if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, this.label, event);
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/checkbox/checkbox.vue?vue&type=script&lang=js&
        /* harmony default export */ var checkbox_checkboxvue_type_script_lang_js_ = checkboxvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/checkbox/checkbox.vue

        /* normalize component */

        var checkbox_component = normalizeComponent(
          checkbox_checkboxvue_type_script_lang_js_,
          checkboxvue_type_template_id_26d19cb3_render,
          checkboxvue_type_template_id_26d19cb3_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var checkbox_checkbox = checkbox_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/buttongroup/buttongroup.vue?vue&type=template&id=37a34025&
        var buttongroupvue_type_template_id_37a34025_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { class: _vm.cls }, [_vm._t('default')], 2);
        };
        var buttongroupvue_type_template_id_37a34025_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/buttongroup/buttongroup.vue?vue&type=template&id=37a34025&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/buttongroup/buttongroup.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var buttongroupvue_type_script_lang_js_ = {
          name: 'nut-buttongroup',
          props: {
            shape: {
              type: String,
              default: '',
            },
            type: {
              type: String,
              default: '',
            },
          },
          data: function data() {
            return {
              cls: '',
            };
          },
          mounted: function mounted() {
            this.cls = 'nut-buttongroup '.concat(this.shape, ' ').concat(this.type);
          },
        };
        // CONCATENATED MODULE: ./src/packages/buttongroup/buttongroup.vue?vue&type=script&lang=js&
        /* harmony default export */ var buttongroup_buttongroupvue_type_script_lang_js_ = buttongroupvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/buttongroup/buttongroup.vue

        /* normalize component */

        var buttongroup_component = normalizeComponent(
          buttongroup_buttongroupvue_type_script_lang_js_,
          buttongroupvue_type_template_id_37a34025_render,
          buttongroupvue_type_template_id_37a34025_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var buttongroup = buttongroup_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/menu/menu.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var menuvue_type_script_lang_js_lockMaskScroll = (function (bodyCls) {
          var scrollTop;
          return {
            afterOpen: function afterOpen() {
              scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop;
              document.body.classList.add(bodyCls);
              document.body.style.top = -scrollTop + 'px';
            },
            beforeClose: function beforeClose() {
              if (document.body.classList.contains(bodyCls)) {
                document.body.classList.remove(bodyCls);
                document.scrollingElement.scrollTop = scrollTop;
              }
            },
          };
        })('dialog-open');
        /* harmony default export */ var menuvue_type_script_lang_js_ = {
          name: 'nut-menu',
          mixins: [mixins_locale],
          components: {
            'nut-button': button_button,
            'nut-button-group': buttongroup,
            'nut-checkbox': checkbox_checkbox,
            'nut-icon': icon,
          },
          props: {
            isAnimation: {
              //是否有动画效果
              type: Boolean,
              default: false,
            },
            isVisible: {
              //是否显示
              type: Boolean,
              default: false,
            },
            type: {
              //单选 simple  多选  multiple
              type: String,
              default: 'simple',
            },
            col: {
              //显示的列数
              type: [Number, String],
              default: 1,
            },
            mulstyle: {
              //多选样式,支持三种多选样式 style1 style2 style3
              type: [String],
              default: 'style1',
            },
            max: {
              type: [String, Number],
              default: 5,
            },
            custom: {
              type: String,
              default: '',
            },
            list: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
          },
          watch: {
            isVisible: function isVisible(val) {
              menuvue_type_script_lang_js_lockMaskScroll[val ? 'afterOpen' : 'beforeClose']();
            },
          },
          data: function data() {
            return {
              datalist: [],
            };
          },
          mounted: function mounted() {
            this.datalist = this.list;
          },
          computed: {
            okBtnTxt: function okBtnTxt() {
              return this.nutTranslate('lang.okBtnTxt');
            },
            resetBtnTxt: function resetBtnTxt() {
              return this.nutTranslate('lang.menu.resetBtnTxt');
            },
          },
          methods: {
            clickMenuMask: function clickMenuMask() {
              this.$emit('close');
            },
            selectedItem: function selectedItem(item, index) {
              this.$emit('choose', item, index);
            },
            selectMutiple: function selectMutiple(index) {
              if (!this.datalist[index].selected) {
                //判断设置的最大可选项
                var count = 0;
                this.datalist.forEach(function (item) {
                  if (item.selected) count++;
                });
                if (count >= this.max) {
                  this.$emit('maxTip');
                  return;
                }
              }
              this.$set(this.datalist[index], 'selected', !this.datalist[index].selected);
            },
            resetMenu: function resetMenu() {
              this.datalist.map(function (value, key) {
                return (value.selected = false);
              });
              this.$emit('reset', this.datalist);
            },
            sureMenu: function sureMenu() {
              this.$emit('close');
              this.$emit('ok', this.datalist);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/menu/menu.vue?vue&type=script&lang=js&
        /* harmony default export */ var menu_menuvue_type_script_lang_js_ = menuvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/menu/menu.vue

        /* normalize component */

        var menu_component = normalizeComponent(
          menu_menuvue_type_script_lang_js_,
          menuvue_type_template_id_34f80202_render,
          menuvue_type_template_id_34f80202_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var menu = menu_component.exports;
        // EXTERNAL MODULE: ./src/packages/menu/menu.scss
        var menu_menu = __webpack_require__(46);

        // CONCATENATED MODULE: ./src/packages/menu/index.js

        menu.install = function (Vue) {
          Vue.component(menu.name, menu);
        };
        /* harmony default export */ var packages_menu = menu;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/stepper/stepper.vue?vue&type=template&id=25786529&
        var steppervue_type_template_id_25786529_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { class: { 'nut-stepper': !_vm.simple, 'nut-stepper-simple': _vm.simple } }, [
            _c('span', {
              class: { 'nut-stepper-grey': _vm.isGray || _vm.disabled },
              domProps: { innerHTML: _vm._s(__webpack_require__(20)) },
              on: {
                click: function ($event) {
                  return _vm.reduce();
                },
              },
            }),
            _vm._v(' '),
            _c('input', {
              style: { visibility: _vm.showNum ? 'visible' : 'hidden' },
              attrs: { type: 'number', min: _vm.minNum, max: _vm.max, disabled: _vm.disabled, readonly: _vm.readonly || !_vm.isLegal },
              domProps: { value: _vm._f('maxv')(_vm.num, _vm.minNum, _vm.max) },
              on: { input: _vm.numchange, keyup: _vm.checknum, focus: _vm.focus, blur: _vm.blur },
            }),
            _vm._v(' '),
            _c(
              'div',
              {
                class: ['nut-stepper-fake', _vm.showAddAnim ? 'nut-stepper-transition' : 'nut-stepper-none-transition'],
                style: {
                  visibility: _vm.showAddAnim ? 'visible' : 'hidden',
                  transform: 'translate(0,' + _vm.animTranslate_add + '%)',
                  '-ms-transform': 'translate(0,' + _vm.animTranslate_add + '%)',
                  '-moz-transform': 'translate(0,' + _vm.animTranslate_add + '%)',
                  '-webkit-transform': 'translate(0,' + _vm.animTranslate_add + '%)',
                  '-o-transform': 'translate(0,' + _vm.animTranslate_add + '%)',
                },
              },
              [_c('div', [_vm._v(_vm._s(_vm.animNum[0]))]), _vm._v(' '), _c('div', [_vm._v(_vm._s(_vm.animNum[1]))])]
            ),
            _vm._v(' '),
            _c(
              'div',
              {
                class: ['nut-stepper-fake-', _vm.showReduceAnim ? 'nut-stepper-transition' : 'nut-stepper-none-transition'],
                style: {
                  visibility: _vm.showReduceAnim ? 'visible' : 'hidden',
                  transform: 'translate(0,' + _vm.animTranslate_ + '%)',
                  '-ms-transform': 'translate(0,' + _vm.animTranslate_ + '%)',
                  '-moz-transform': 'translate(0,' + _vm.animTranslate_ + '%)',
                  '-webkit-transform': 'translate(0,' + _vm.animTranslate_ + '%)',
                  '-o-transform': 'translate(0,' + _vm.animTranslate_ + '%)',
                },
              },
              [_c('div', [_vm._v(_vm._s(_vm.animNum[0]))]), _vm._v(' '), _c('div', [_vm._v(_vm._s(_vm.animNum[1]))])]
            ),
            _vm._v(' '),
            _c('span', {
              class: { 'nut-stepper-grey': (_vm.max && Number(_vm.num) > _vm.max - _vm.step) || !_vm.isLegal || _vm.disabled },
              domProps: { innerHTML: _vm._s(__webpack_require__(21)) },
              on: {
                click: function ($event) {
                  return _vm.add();
                },
              },
            }),
          ]);
        };
        var steppervue_type_template_id_25786529_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/stepper/stepper.vue?vue&type=template&id=25786529&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/stepper/stepper.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var steppervue_type_script_lang_js_ = {
          name: 'nut-stepper',
          props: {
            simple: {
              type: Boolean,
              default: true,
            },
            min: {
              type: [Number, String],
              default: 0,
            },
            max: {
              type: [Number, String],
              default: Infinity,
            },
            step: {
              type: [Number, String],
              default: 1,
            },
            readonly: {
              type: Boolean,
              default: false,
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            transition: {
              type: Boolean,
              default: true,
            },
            value: {
              type: [String, Number],
              required: true,
            },
            decimalPlaces: {
              type: Number,
              default: 0,
            },
          },
          data: function data() {
            return {
              tempNum: '',
              focusing: false,
              num: this.value,
              minNum: this.min,
              showNum: true,
              showAddAnim: false,
              showReduceAnim: false,
              animNum: [this.value, this.value],
              animTranslate_add: 0,
              animTranslate_: -100,
              isLegal: true, //是否合法 isLegal
            };
          },

          filters: {
            maxv: function maxv(v, min, max) {
              var val = v;
              if (val > max) val = max;
              if (val < min) val = min;
              return val;
            },
          },
          watch: {
            value: {
              handler: function handler(v, ov) {
                if (v > this.max) v = this.max;
                if (v < this.minNum) v = this.minNum;
                this.num = v > 0 ? this.fixedDecimalPlaces(v) : v;
                this.$emit('change', this.num);
              },
              immediate: true,
            },
            min: {
              handler: function handler(v, ov) {
                this.isLegal = true;
                if (v < this.max) {
                  this.minNum = v;
                } else {
                  this.isLegal = false;
                }
              },
              immediate: true,
            },
            max: {
              handler: function handler(v, ov) {
                this.isLegal = true;
                if (v <= this.min) {
                  this.isLegal = false;
                }
              },
              immediate: true,
            },
          },
          computed: {
            isGray: function isGray() {
              return (this.focusing ? this.tempNum : this.num) - this.step < this.min;
            },
          },
          methods: {
            focus: function focus(e) {
              if (this.readonly || !this.isLegal || this.disabled) return;
              // clear val temporary when focus, e...s
              var v = this.num;
              this.tempNum = v;
              this.minNum = '';
              // this.num = '';
              this.focusing = true;
              this.$emit('focus', e, this.num);
            },
            blur: function blur(e) {
              if (this.readonly || !this.isLegal || this.disabled) return this.$emit('blur', e, this.num);
              var v = e.target.value;
              this.minNum = this.min;
              this.focusing = false;
              if (v) {
                if (v > this.max) v = this.max;
                if (v < this.minNum) v = this.minNum;
                this.num = v;
              } else {
                this.num = this.tempNum;
              }
              this.$emit('update:value', this.num);
              this.$emit('blur', e, this.num);
            },
            checknum: function checknum(e) {
              var v = e.target.value;
              // this.minNum = this.min;
              this.focusing = false;
              if (v > this.max) v = this.max;
              if (v < this.minNum) v = this.minNum;
              e.target.value = v;
              this.num = v;
            },
            numchange: function numchange(e) {
              var v = e.target.value;
              if (v > this.max) v = this.max;
              if (v < this.minNum) v = this.minNum;
              e.target.value = v;
              this.num = v;
              this.$emit('update:value', this.num);
              this.$emit('change', this.num);
            },
            fixedDecimalPlaces: function fixedDecimalPlaces(v) {
              return Number(v).toFixed(this.decimalPlaces);
              // .replace(/(\d+\.[^0]*)0+$/, '$1').replace(/\.$/, '')
            },
            add: function add() {
              var _this = this;
              if (this.disabled) return;
              this.num = Number(this.num);
              if (this.num <= this.max - this.step && this.max > this.minNum) {
                var _this$fixedDecimalPla = this.fixedDecimalPlaces(this.num + Number(this.step)).split('.'),
                  _this$fixedDecimalPla2 = slicedToArray_default()(_this$fixedDecimalPla, 2),
                  n1 = _this$fixedDecimalPla2[0],
                  n2 = _this$fixedDecimalPla2[1];
                var fixedLen = n2 ? n2.length : 0;
                this.num = parseFloat(n1 + (n2 ? '.' + n2 : '')).toFixed(fixedLen);
                if (this.transition) {
                  this.showNum = false;
                  this.showAddAnim = true;
                  this.showReduceAnim = false;
                  this.animNum = [parseFloat(this.num - this.step).toFixed(fixedLen), this.num];
                  this.animTranslate_add = -100;
                  var f = this.$el.querySelector('.nut-stepper-fake');
                  f.addEventListener('webkitTransitionEnd', function () {
                    _this.showNum = true;
                    _this.showAddAnim = false;
                    _this.animTranslate_add = 0;
                  });
                }
                this.$emit('update:value', this.num);
                this.$emit('add', this.num);
              } else {
                this.$emit('add-no-allow');
              }
            },
            animEnd: function animEnd() {
              // unbind
              this.showNum = true;
            },
            reduce: function reduce() {
              var _this2 = this;
              if (this.disabled) return;
              if (this.num - this.step >= this.minNum) {
                var _this$fixedDecimalPla3 = this.fixedDecimalPlaces(this.num - Number(this.step)).split('.'),
                  _this$fixedDecimalPla4 = slicedToArray_default()(_this$fixedDecimalPla3, 2),
                  n1 = _this$fixedDecimalPla4[0],
                  n2 = _this$fixedDecimalPla4[1];
                var fixedLen = n2 ? n2.length : 0;
                this.num = parseFloat(n1 + (n2 ? '.' + n2 : '')).toFixed(fixedLen);
                if (this.transition) {
                  this.showNum = false;
                  this.showAddAnim = false;
                  this.showReduceAnim = true;
                  this.animNum = [this.num, this.num];
                  this.animTranslate_ = 0;
                  var f = this.$el.querySelector('.nut-stepper-fake-');
                  f.addEventListener('webkitTransitionEnd', function () {
                    _this2.showNum = true;
                    _this2.showReduceAnim = false;
                    _this2.animTranslate_ = -100;
                  });
                }
                this.$emit('update:value', this.num);
                this.$emit('reduce', this.num);
              } else {
                this.$emit('reduce-no-allow');
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/stepper/stepper.vue?vue&type=script&lang=js&
        /* harmony default export */ var stepper_steppervue_type_script_lang_js_ = steppervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/stepper/stepper.vue

        /* normalize component */

        var stepper_component = normalizeComponent(
          stepper_steppervue_type_script_lang_js_,
          steppervue_type_template_id_25786529_render,
          steppervue_type_template_id_25786529_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var stepper = stepper_component.exports;
        // EXTERNAL MODULE: ./src/packages/stepper/stepper.scss
        var stepper_stepper = __webpack_require__(47);

        // CONCATENATED MODULE: ./src/packages/stepper/index.js

        stepper.install = function (Vue) {
          Vue.component(stepper.name, stepper);
        };
        /* harmony default export */ var packages_stepper = stepper;
        // EXTERNAL MODULE: ./src/packages/buttongroup/buttongroup.scss
        var buttongroup_buttongroup = __webpack_require__(48);

        // CONCATENATED MODULE: ./src/packages/buttongroup/index.js

        buttongroup.install = function (Vue) {
          Vue.component(buttongroup.name, buttongroup);
        };
        /* harmony default export */ var packages_buttongroup = buttongroup;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/searchbar/searchbar.vue?vue&type=template&id=9ffeef26&
        var searchbarvue_type_template_id_9ffeef26_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { class: ['nut-searchbar', _vm.customClass ? _vm.customClass : ''] }, [
            _c('div', { staticClass: 'search-input', class: [_vm.animation ? 'nut-search-ani' : '', _vm.inputFocusAnimation ? 'focus' : ''] }, [
              _c('form', { attrs: { id: 'input-form', action: 'javascript:return true' } }, [
                _vm.hasIcon
                  ? _c(
                      'div',
                      { staticClass: 'nut-search-left-icon', on: { click: _vm.clickLeftIcon } },
                      [
                        _c('nut-icon', {
                          staticClass: 'nut-search-left-icon',
                          attrs: { type: 'search', size: _vm.searchIconSize, color: _vm.searchIconColor },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(' '),
                _c('input', {
                  ref: 'searchInput',
                  attrs: { type: 'search', placeholder: _vm.placeText == undefined ? _vm.nutTranslate('lang.searchbar.placeText') : _vm.placeText },
                  domProps: { value: _vm.value },
                  on: {
                    keyup: function ($event) {
                      if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter')) {
                        return null;
                      }
                      return _vm.submitFun($event);
                    },
                    input: _vm.inputFun,
                    blur: _vm.blurFun,
                    focus: _vm.focusFun,
                  },
                }),
                _vm._v(' '),
                _c(
                  'span',
                  { staticClass: 'close-icon', class: _vm.hasCloseIcon ? 'show' : '', on: { click: _vm.clearInput } },
                  [_c('nut-icon', { attrs: { type: 'circle-cross', size: _vm.clearIconSize, color: _vm.clearIconColor } })],
                  1
                ),
              ]),
            ]),
            _vm._v(' '),
            _vm.hasSearchButton
              ? _c(
                  'a',
                  { staticClass: 'btn-search', attrs: { href: 'javascript:;' }, on: { click: _vm.clickRightText } },
                  [
                    _vm.hasTextButton
                      ? _c('span', [_vm._v(_vm._s(_vm.textInfo || _vm.nutTranslate('lang.searchbar.textInfo')))])
                      : _c('nut-icon', { attrs: { type: 'search', size: _vm.searchBtnIconSize, color: _vm.searchBtnIconColor } }),
                  ],
                  1
                )
              : _vm._e(),
          ]);
        };
        var searchbarvue_type_template_id_9ffeef26_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/searchbar/searchbar.vue?vue&type=template&id=9ffeef26&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/searchbar/searchbar.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var searchbarvue_type_script_lang_js_ = {
          name: 'nut-searchbar',
          mixins: [mixins_locale],
          props: {
            hasIcon: {
              type: Boolean,
              default: false,
            },
            searchIconSize: {
              type: String,
              default: '20px',
            },
            searchIconColor: {
              type: String,
              default: '#2e2d2d',
            },
            searchBtnIconSize: {
              type: String,
              default: '20px',
            },
            searchBtnIconColor: {
              type: String,
              default: '#2e2d2d',
            },
            clearIconSize: {
              type: String,
              default: '15px',
            },
            clearIconColor: {
              type: String,
              default: '#2e2d2d',
            },
            placeText: {
              type: String,
            },
            hasSearchButton: {
              type: Boolean,
              default: true,
            },
            hasTextButton: {
              type: Boolean,
              default: false,
            },
            textInfo: {
              type: String,
            },
            animation: {
              type: Boolean,
              default: true,
            },
            customClass: {
              type: String,
              default: '',
            },
            value: {
              type: [String, Number],
              default: '',
            },
          },
          components: defineProperty_default()({}, icon.name, icon),
          data: function data() {
            return {
              inputFocusAnimation: false,
            };
          },
          watch: {
            value: function value(newValue, oldValue) {
              this.updateValue('change');
            },
          },
          computed: {
            hasCloseIcon: function hasCloseIcon() {
              return this.value ? true : false;
            },
          },
          mounted: function mounted() {},
          methods: {
            updateValue: function updateValue() {
              var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input';
              var searchInputValue = trigger == 'change' ? this.value : this.$refs.searchInput.value;
              this.$emit(trigger, searchInputValue);
            },
            //清空 input 输入
            clearInput: function clearInput() {
              this.$emit('clear', '');
              this.$emit('input', '');
            },
            focusFun: function focusFun() {
              this.inputFocusAnimation = true;
              this.$emit('focus');
            },
            inputFun: function inputFun() {
              this.updateValue();
            },
            blurFun: function blurFun() {
              this.inputFocusAnimation = false;
              this.updateValue('blur');
            },
            submitFun: function submitFun() {
              if (document.activeElement) {
                document.activeElement.blur();
              }
              this.updateValue('submit');
            },
            // 失去焦点
            blur: function blur() {
              this.$refs.searchInput.blur();
            },
            //js控制获取焦点
            focus: function focus() {
              this.$nextTick(function () {
                this.$refs.searchInput.focus();
              });
            },
            // 点击左侧图标
            clickLeftIcon: function clickLeftIcon() {
              this.$emit('click-left-icon');
            },
            // 点击右侧图标或文字
            clickRightText: function clickRightText() {
              this.$emit('click-right-icon');
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/searchbar/searchbar.vue?vue&type=script&lang=js&
        /* harmony default export */ var searchbar_searchbarvue_type_script_lang_js_ = searchbarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/searchbar/searchbar.vue

        /* normalize component */

        var searchbar_component = normalizeComponent(
          searchbar_searchbarvue_type_script_lang_js_,
          searchbarvue_type_template_id_9ffeef26_render,
          searchbarvue_type_template_id_9ffeef26_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var searchbar = searchbar_component.exports;
        // EXTERNAL MODULE: ./src/packages/searchbar/searchbar.scss
        var searchbar_searchbar = __webpack_require__(49);

        // CONCATENATED MODULE: ./src/packages/searchbar/index.js

        searchbar.install = function (Vue) {
          Vue.component(searchbar.name, searchbar);
        };
        /* harmony default export */ var packages_searchbar = searchbar;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/imagepicker/imagepicker.vue?vue&type=template&id=fbb12230&scoped=true&
        var imagepickervue_type_template_id_fbb12230_scoped_true_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-imagepicker' }, [
            _c(
              'div',
              { staticClass: 'img-list' },
              [
                _c(
                  'transition-group',
                  { attrs: { name: _vm.animation ? 'nutEase' : '' } },
                  _vm._l(this.list, function (item) {
                    return _c(
                      'div',
                      {
                        key: item.id,
                        staticClass: 'img-item',
                        style: { width: _vm.width + 'px', height: _vm.height + 'px', marginRight: _vm.margin + 'px' },
                        on: {
                          click: function ($event) {
                            _vm.delMode == 'tap' ? _vm.deleteImg(item.id) : _vm.preview(item.id);
                          },
                          touchstart: function ($event) {
                            _vm.delMode == 'longtap' ? _vm.touchStart(item.id) : '';
                          },
                          touchmove: function ($event) {
                            _vm.delMode == 'longtap' ? _vm.touchMove(item.id) : '';
                          },
                          touchend: function ($event) {
                            _vm.delMode == 'longtap' ? _vm.touchEnd(item.id) : '';
                          },
                        },
                      },
                      [_c('a', { attrs: { href: 'javascript:;' } }, [_c('img', { attrs: { src: item.src, alt: '' } })])]
                    );
                  }),
                  0
                ),
                _vm._v(' '),
                _c(
                  'div',
                  {
                    directives: [{ name: 'show', rawName: 'v-show', value: this.list.length < this.max, expression: 'this.list.length < this.max' }],
                    staticClass: 'add-icon',
                    style: { width: _vm.width + 'px', height: _vm.height + 'px' },
                  },
                  [
                    _c('i', [
                      _c('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' } }, [
                        _c('g', { attrs: { 'fill-rule': 'evenodd' } }, [
                          _c('rect', { attrs: { y: '6', width: '16', height: '4', rx: '2' } }),
                          _vm._v(' '),
                          _c('rect', { attrs: { transform: 'rotate(90 8 8)', y: '6', width: '16', height: '4', rx: '2' } }),
                        ]),
                      ]),
                    ]),
                    _vm._v(' '),
                    _c('input', {
                      attrs: { type: 'file', name: 'files', multiple: _vm.ismultiple ? 'multiple' : '', accept: _vm.accept },
                      on: { change: _vm.addImg },
                    }),
                  ]
                ),
              ],
              1
            ),
          ]);
        };
        var imagepickervue_type_template_id_fbb12230_scoped_true_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/imagepicker/imagepicker.vue?vue&type=template&id=fbb12230&scoped=true&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/imagepicker/imagepicker.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var imagepickervue_type_script_lang_js_ = {
          name: 'nut-imagepicker',
          props: {
            animation: {
              type: [Boolean],
              default: true,
            },
            width: {
              type: [String, Number],
              default: 100,
            },
            height: {
              type: [String, Number],
              default: 100,
            },
            margin: {
              type: [String, Number],
              default: 5,
            },
            max: {
              //允许上传的最大数量
              type: [Number, String],
              default: 9,
            },
            accept: {
              type: [String],
              default: 'image/*',
            },
            ismultiple: {
              //是否开启多图片上传
              type: [Boolean],
              default: false,
            },
            delMode: {
              //删除图片的方式，支持tap、longtap
              type: [String],
              default: 'tap',
            },
            longTapTime: {
              type: [Number],
              default: 500,
            },
            autoUpload: {
              //选择完图片之后是否自动完成上传
              type: [Boolean, String],
              default: false,
            },
            imgList: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
          },
          data: function data() {
            return {
              timeOutEvent: 0,
              list: [],
            };
          },
          watch: {
            imgList: function imgList(val) {
              this.list = val;
            },
          },
          mounted: function mounted() {
            this.list = this.imgList;
          },
          methods: {
            addImg: function addImg(event) {
              var self = this;
              //限制图片上传数量
              var file = event.target.files;
              var fileArr = Array.from(file);
              if (file.length > self.max - self.list.length) {
                fileArr = fileArr.filter(function (item, index) {
                  return index < self.max - self.list.length;
                });
              }
              if (self.autoUpload) {
                //自动上传
                self.$emit('imgMsg', {
                  code: 1,
                  msg: fileArr,
                });
                self.$emit('img-msg', {
                  code: 1,
                  msg: fileArr,
                });
              } else {
                fileArr.forEach(function (item, index) {
                  var reader = new FileReader();
                  reader.onload = function (evt) {
                    self.list.push({
                      id: Math.random(),
                      src: evt.target.result,
                    });
                    event.target.value = '';
                  };
                  reader.readAsDataURL(item);
                });
                self.$emit('imgMsg', {
                  code: 2,
                  msg: fileArr,
                });
                self.$emit('img-msg', {
                  code: 2,
                  msg: fileArr,
                });
              }
            },
            preview: function preview(id) {
              this.$emit('imgMsg', {
                code: 4,
                msg: id,
              });
              this.$emit('img-msg', {
                code: 4,
                msg: id,
              });
            },
            deleteImg: function deleteImg(id) {
              this.list = this.list.filter(function (item) {
                return item.id != id;
              });
              this.$emit('update:imgList', this.list);
              this.$emit('imgMsg', {
                code: 3,
                msg: id,
              });
              this.$emit('img-msg', {
                code: 3,
                msg: id,
              });
            },
            touchStart: function touchStart(id) {
              var _this = this;
              // console.log(this.longTapTime);
              this.timeOutEvent = setTimeout(function () {
                _this.deleteImg(id);
              }, this.longTapTime);
              return false;
            },
            touchMove: function touchMove(id) {
              clearTimeout(this.timeOutEvent);
              return false;
            },
            touchEnd: function touchEnd(id) {
              clearTimeout(this.timeOutEvent); //清除定时器
              this.timeOutEvent = 0;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/imagepicker/imagepicker.vue?vue&type=script&lang=js&
        /* harmony default export */ var imagepicker_imagepickervue_type_script_lang_js_ = imagepickervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/imagepicker/imagepicker.vue

        /* normalize component */

        var imagepicker_component = normalizeComponent(
          imagepicker_imagepickervue_type_script_lang_js_,
          imagepickervue_type_template_id_fbb12230_scoped_true_render,
          imagepickervue_type_template_id_fbb12230_scoped_true_staticRenderFns,
          false,
          null,
          'fbb12230',
          null
        );

        /* harmony default export */ var imagepicker = imagepicker_component.exports;
        // EXTERNAL MODULE: ./src/packages/imagepicker/imagepicker.scss
        var imagepicker_imagepicker = __webpack_require__(50);

        // CONCATENATED MODULE: ./src/packages/imagepicker/index.js

        imagepicker.install = function (Vue) {
          Vue.component(imagepicker.name, imagepicker);
        };
        /* harmony default export */ var packages_imagepicker = imagepicker;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/radio/radio.vue?vue&type=template&id=3fdb2ec0&
        var radiovue_type_template_id_3fdb2ec0_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('label', { class: ['nut-radio', 'nut-radio-size-' + _vm.currentSize], on: { click: _vm.clickEvt } }, [
            _c('input', {
              class: { 'nut-radio-ani': _vm.isAnimated },
              attrs: { type: 'radio', disabled: _vm.isDisabled, label: _vm.label },
              domProps: { value: _vm.currentValue, checked: _vm.currentValue === _vm.label },
            }),
            _vm._v(' '),
            _c('span', { staticClass: 'nut-radio-label' }, [_vm._t('default')], 2),
          ]);
        };
        var radiovue_type_template_id_3fdb2ec0_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/radio/radio.vue?vue&type=template&id=3fdb2ec0&

        // CONCATENATED MODULE: ./src/mixins/findCptUpward/index.js
        /* harmony default export */ var findCptUpward = {
          methods: {
            findCptUpward: function findCptUpward(cptName) {
              var parentCpt = this.$parent;
              while (parentCpt) {
                if (parentCpt.$options.name === cptName) {
                  this.parent = parentCpt;
                  break;
                }
                parentCpt = parent.$parent;
              }
            },
          },
        };
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/radio/radio.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var radiovue_type_script_lang_js_ = {
          name: 'nut-radio',
          mixins: [findCptUpward],
          props: {
            value: {
              type: [String, Number, Boolean],
              default: false,
            },
            label: [String, Number, Boolean],
            size: {
              type: String,
              default: 'base',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            animated: {
              type: Boolean,
              default: true,
            },
          },
          data: function data() {
            return {
              parent: null,
            };
          },
          computed: {
            currentValue: {
              get: function get() {
                return this.parent ? this.parent.value : this.value;
              },
              set: function set(val) {
                (this.parent || this).$emit('input', val);
              },
            },
            currentSize: function currentSize() {
              return this.parent ? this.parent.size || this.size : this.size;
            },
            isDisabled: function isDisabled() {
              return this.parent ? this.parent.disabled || this.disabled : this.disabled;
            },
            isAnimated: function isAnimated() {
              return this.parent ? this.parent.animated && this.animated : this.animated;
            },
          },
          created: function created() {
            this.findCptUpward('nut-radiogroup');
          },
          methods: {
            clickEvt: function clickEvt(event) {
              if (this.isDisabled) {
                return false;
              }
              this.currentValue = this.label;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/radio/radio.vue?vue&type=script&lang=js&
        /* harmony default export */ var radio_radiovue_type_script_lang_js_ = radiovue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/radio/radio.vue

        /* normalize component */

        var radio_component = normalizeComponent(
          radio_radiovue_type_script_lang_js_,
          radiovue_type_template_id_3fdb2ec0_render,
          radiovue_type_template_id_3fdb2ec0_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var radio_radio = radio_component.exports;
        // EXTERNAL MODULE: ./src/packages/radio/radio.scss
        var packages_radio_radio = __webpack_require__(51);

        // CONCATENATED MODULE: ./src/packages/radio/index.js

        radio_radio.install = function (Vue) {
          Vue.component(radio_radio.name, radio_radio);
        };
        /* harmony default export */ var packages_radio = radio_radio;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/radiogroup/radiogroup.vue?vue&type=template&id=41de577b&
        var radiogroupvue_type_template_id_41de577b_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-radiogroup' }, [_vm._t('default')], 2);
        };
        var radiogroupvue_type_template_id_41de577b_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/radiogroup/radiogroup.vue?vue&type=template&id=41de577b&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/radiogroup/radiogroup.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var radiogroupvue_type_script_lang_js_ = {
          name: 'nut-radiogroup',
          props: {
            value: {
              type: [String, Number, Boolean],
              default: false,
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            size: {
              type: String,
              default: 'base',
            },
            animated: {
              type: Boolean,
              default: true,
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/radiogroup/radiogroup.vue?vue&type=script&lang=js&
        /* harmony default export */ var radiogroup_radiogroupvue_type_script_lang_js_ = radiogroupvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/radiogroup/radiogroup.vue

        /* normalize component */

        var radiogroup_component = normalizeComponent(
          radiogroup_radiogroupvue_type_script_lang_js_,
          radiogroupvue_type_template_id_41de577b_render,
          radiogroupvue_type_template_id_41de577b_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var radiogroup = radiogroup_component.exports;
        // EXTERNAL MODULE: ./src/packages/radiogroup/radiogroup.scss
        var radiogroup_radiogroup = __webpack_require__(52);

        // CONCATENATED MODULE: ./src/packages/radiogroup/index.js

        radiogroup.install = function (Vue) {
          Vue.component(radiogroup.name, radiogroup);
        };
        /* harmony default export */ var packages_radiogroup = radiogroup;
        // EXTERNAL MODULE: ./src/packages/checkbox/checkbox.scss
        var packages_checkbox_checkbox = __webpack_require__(12);

        // CONCATENATED MODULE: ./src/packages/checkbox/index.js

        checkbox_checkbox.install = function (Vue) {
          Vue.component(checkbox_checkbox.name, checkbox_checkbox);
        };
        /* harmony default export */ var packages_checkbox = checkbox_checkbox;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/checkboxgroup/checkboxgroup.vue?vue&type=template&id=0c662aaa&
        var checkboxgroupvue_type_template_id_0c662aaa_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { class: ['nut-checkboxgroup', { vertical: _vm.vertical }, _vm.customClass] },
            _vm._l(_vm.checkBoxData, function (item, index) {
              return _c(
                'div',
                { key: item[_vm.keys.id], staticClass: 'checkbox-item' },
                [
                  _c(
                    'nut-checkbox',
                    {
                      attrs: {
                        name: _vm.name || item[_vm.keys.name],
                        disabled: _vm.disabled || item[_vm.keys.disabled],
                        label: item[_vm.keys.label],
                        animation: _vm.animation,
                        size: item.size ? item.size : _vm.size,
                        id: item[_vm.keys.id],
                        checked: item.checked,
                      },
                      on: {
                        'update:checked': function ($event) {
                          return _vm.$set(item, 'checked', $event);
                        },
                        change: function ($event) {
                          return _vm.changeEvt(arguments, item);
                        },
                      },
                      model: {
                        value: _vm.checkboxValues[item.id],
                        callback: function ($$v) {
                          _vm.$set(_vm.checkboxValues, item.id, $$v);
                        },
                        expression: 'checkboxValues[item.id]',
                      },
                    },
                    [_vm._v(_vm._s(item[_vm.keys.label] || item[_vm.keys.value] || item) + '\n    ')]
                  ),
                ],
                1
              );
            }),
            0
          );
        };
        var checkboxgroupvue_type_template_id_0c662aaa_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/checkboxgroup/checkboxgroup.vue?vue&type=template&id=0c662aaa&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/checkboxgroup/checkboxgroup.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var checkboxgroupvue_type_script_lang_js_ = {
          name: 'nut-checkboxgroup',
          props: {
            name: String,
            checkBoxData: {
              type: Array,
              required: true,
            },
            value: {
              type: Array,
              required: true,
            },
            keys: {
              type: Object,
              default: function _default() {
                return {
                  id: 'id',
                  name: 'name',
                  class: 'class',
                  label: 'label',
                  value: 'value',
                  disabled: 'disabled',
                };
              },
            },
            customClass: {
              type: String,
              default: '',
            },
            label: {
              type: [String, Number, Boolean],
              default: '',
            },
            size: {
              type: [String, Number],
              default: 'base',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            animation: {
              type: Boolean,
              default: true,
            },
            vertical: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              ignoreChange: false,
              checkboxValues: {},
              initialValue: [],
            };
          },
          components: defineProperty_default()({}, checkbox_checkbox.name, checkbox_checkbox),
          watch: {
            value: function value() {
              this.init();
            },
          },
          mounted: function mounted() {
            this.init();
          },
          methods: {
            init: function init() {
              var _this = this;
              this.initialValue = this.value;
              this.checkBoxData.map(function (item) {
                if (typeof_default()(item) === 'object') {
                  item.checked = _this.isOptionCheckedByDefault(item);
                }
              });
            },
            isObject: function isObject(obj) {
              return obj !== null && typeof_default()(obj) === 'object';
            },
            looseIndexOf: function looseIndexOf(arr, val) {
              for (var i = 0; i < arr.length; i++) {
                if (this.looseEqual(arr[i], val)) {
                  return i;
                }
              }
              return -1;
            },
            isOptionCheckedByDefault: function isOptionCheckedByDefault(item) {
              return this.looseIndexOf(this.initialValue, item[this.keys.value] || item) > -1;
            },
            looseEqual: function looseEqual(a, b) {
              return a == b || (this.isObject(a) && this.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
            },
            changeEvt: function changeEvt(args, item) {
              if (this.ignoreChange) {
                return;
              }
              var checked = args[0];
              var label = args[1];
              var e = args[2];
              var value = [];
              var itemValue;
              if (item[this.keys.value] === undefined) {
                itemValue = item;
              } else {
                itemValue = item[this.keys.value];
              }
              var i = this.looseIndexOf(this.value, itemValue);
              if (checked && i < 0) {
                value = this.value.concat(itemValue);
              }
              if (!checked && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
              }
              this.$emit('input', value);
              this.$emit('change', value, label, e);
            },
            toggleAll: function toggleAll(checked) {
              if (checked === false) {
                this.$emit('input', []);
                return;
              }
              if (checked === true) {
                this.checkBoxData.map(function (item) {
                  item.checked = true;
                });
              }
              if (!checked) {
                this.checkBoxData.map(function (item) {
                  item.checked = !item.checked;
                });
              }
              var value = [],
                label = [];
              var resData = this.checkBoxData.filter(function (item) {
                if (item.checked) {
                  value.push(item.value);
                  label.push(item.label);
                }
                return item.checked;
              });
              this.$emit('input', value);
              this.$emit('change', value, label, null);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/checkboxgroup/checkboxgroup.vue?vue&type=script&lang=js&
        /* harmony default export */ var checkboxgroup_checkboxgroupvue_type_script_lang_js_ = checkboxgroupvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/checkboxgroup/checkboxgroup.vue

        /* normalize component */

        var checkboxgroup_component = normalizeComponent(
          checkboxgroup_checkboxgroupvue_type_script_lang_js_,
          checkboxgroupvue_type_template_id_0c662aaa_render,
          checkboxgroupvue_type_template_id_0c662aaa_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var checkboxgroup = checkboxgroup_component.exports;
        // EXTERNAL MODULE: ./src/packages/checkboxgroup/checkboxgroup.scss
        var checkboxgroup_checkboxgroup = __webpack_require__(53);

        // CONCATENATED MODULE: ./src/packages/checkboxgroup/index.js

        checkboxgroup.install = function (Vue) {
          Vue.component(checkboxgroup.name, checkboxgroup);
        };
        /* harmony default export */ var packages_checkboxgroup = checkboxgroup;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/shortpassword/shortpassword.vue?vue&type=template&id=0f4bfa14&
        var shortpasswordvue_type_template_id_0f4bfa14_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { directives: [{ name: 'show', rawName: 'v-show', value: _vm.show, expression: 'show' }], staticClass: 'nut-short-pwd' },
            [
              _c('transition', { attrs: { name: 'fade' } }, [
                _c('div', {
                  directives: [{ name: 'show', rawName: 'v-show', value: _vm.show, expression: 'show' }],
                  staticClass: 'nut-mask',
                  on: { click: _vm.closeLayer },
                }),
              ]),
              _vm._v(' '),
              _c('transition', { attrs: { name: _vm.layerTran } }, [
                _c(
                  'div',
                  {
                    directives: [{ name: 'show', rawName: 'v-show', value: _vm.show, expression: 'show' }],
                    staticClass: 'nut-layer',
                    class: { 'nut-layer-center': _vm.isCenter },
                  },
                  [
                    _c('div', { staticClass: 'nut-title' }, [
                      _c('span', { staticClass: 'nut-close', on: { click: _vm.closeLayer } }),
                      _vm._v('\n        ' + _vm._s(_vm.nutTranslate('lang.shortpassword.tip1')) + '\n      '),
                    ]),
                    _vm._v(' '),
                    _c('div', { staticClass: 'nut-input-w' }, [
                      _c('input', {
                        directives: [{ name: 'model', rawName: 'v-model', value: _vm.shortpwdValue, expression: 'shortpwdValue' }],
                        ref: 'realInput',
                        staticClass: 'nut-real-input',
                        attrs: { type: 'tel', maxlength: '6', autocomplete: 'off', autofocus: 'autofocus' },
                        domProps: { value: _vm.shortpwdValue },
                        on: {
                          input: [
                            function ($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.shortpwdValue = $event.target.value;
                            },
                            function ($event) {
                              return _vm.shortpwdInput($event);
                            },
                          ],
                        },
                      }),
                      _vm._v(' '),
                      _c('div', { ref: 'nutFakeList', staticClass: 'nut-fake-list' }, [
                        _c(
                          'ul',
                          _vm._l(_vm.fakeInputItems, function (item) {
                            return _c('li', { key: item.id }, [
                              _c('input', {
                                directives: [{ name: 'model', rawName: 'v-model', value: item.val, expression: 'item.val' }],
                                attrs: { type: 'password', maxlength: '1' },
                                domProps: { value: item.val },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return;
                                    }
                                    _vm.$set(item, 'val', $event.target.value);
                                  },
                                },
                              }),
                            ]);
                          }),
                          0
                        ),
                      ]),
                      _vm._v(' '),
                      _vm.link != ''
                        ? _c('div', { staticClass: 'nut-forget' }, [
                            _c('a', { attrs: { href: _vm.link } }, [_vm._v(_vm._s(_vm.nutTranslate('lang.shortpassword.tip2')))]),
                          ])
                        : _vm._e(),
                    ]),
                  ]
                ),
              ]),
            ],
            1
          );
        };
        var shortpasswordvue_type_template_id_0f4bfa14_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/shortpassword/shortpassword.vue?vue&type=template&id=0f4bfa14&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/shortpassword/shortpassword.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var shortpasswordvue_type_script_lang_js_ = {
          name: 'nut-shortpassword',
          mixins: [mixins_locale],
          props: {
            visible: {
              type: Boolean,
              default: false,
            },
            link: {
              type: String,
              default: 'javascript:;',
            },
            type: {
              type: String,
              default: 'bottom',
            },
          },
          data: function data() {
            return {
              shortpwdValue: '',
              regExp: /^[0-9]*$/,
              // fakeCursorStyle:{
              // 	display:'none',
              // 	left:'0px'
              // },
              fakeInputItems: [
                {
                  id: 1,
                  val: '',
                },
                {
                  id: 2,
                  val: '',
                },
                {
                  id: 3,
                  val: '',
                },
                {
                  id: 4,
                  val: '',
                },
                {
                  id: 5,
                  val: '',
                },
                {
                  id: 6,
                  val: '',
                },
              ],
              timer: null,
              isCenter: this.type == 'bottom' ? false : true,
              layerTran: this.type == 'bottom' ? 'popup' : 'fade',
              show: false,
            };
          },
          watch: {
            visible: function visible(val, oldVal) {
              var _this = this;
              if (!val) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                  _this.show = val;
                }, 100);
              } else {
                this.show = val;
              }
            },
          },
          methods: {
            closeLayer: function closeLayer() {
              var _this2 = this;
              this.timer = setTimeout(function () {
                _this2.$emit('close');
              }, 300);
            },
            shortpwdInput: function shortpwdInput(e) {
              var _this3 = this;
              var val = e.target.value;
              if (this.regExp.test(val)) {
                //位移假光标
                if (val.length < 6) {
                  var num = this.$refs.nutFakeList.offsetLeft + 26;
                  var left = val.length * 54 + num;
                  // this.fakeCursorStyle = {
                  // 	'left':left+'px',
                  // 	'display':'block'
                  // }
                } else {
                  // this.fakeCursorStyle = {
                  // 	'display':'none'
                  // }
                  this.$refs.realInput.blur();
                  this.timer = setTimeout(function () {
                    //如果是6位输入满，将直接关闭弹层，给出输入的值

                    _this3.$emit('close', val);
                    _this3.shortpwdValue = '';
                    _this3.fakeInputItems = [
                      {
                        id: 1,
                        val: '',
                      },
                      {
                        id: 2,
                        val: '',
                      },
                      {
                        id: 3,
                        val: '',
                      },
                      {
                        id: 4,
                        val: '',
                      },
                      {
                        id: 5,
                        val: '',
                      },
                      {
                        id: 6,
                        val: '',
                      },
                    ];
                  }, 300);
                }
                for (var i = 0; i < val.length; i++) {
                  this.fakeInputItems[i].val = val[i];
                }
              } else {
                //清空非数字
                this.shortpwdValue = val.replace(/\D/g, '');
              }

              //删除操作的时候同步假密码框
              for (var i = 0; i < 6; i++) {
                if (i >= val.length) {
                  this.fakeInputItems[i].val = '';
                }
              }
            },
          },
          computed: {},
          mounted: function mounted() {},
          destroyed: function destroyed() {
            this.timer = null;
          },
        };
        // CONCATENATED MODULE: ./src/packages/shortpassword/shortpassword.vue?vue&type=script&lang=js&
        /* harmony default export */ var shortpassword_shortpasswordvue_type_script_lang_js_ = shortpasswordvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/shortpassword/shortpassword.vue

        /* normalize component */

        var shortpassword_component = normalizeComponent(
          shortpassword_shortpasswordvue_type_script_lang_js_,
          shortpasswordvue_type_template_id_0f4bfa14_render,
          shortpasswordvue_type_template_id_0f4bfa14_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var shortpassword = shortpassword_component.exports;
        // EXTERNAL MODULE: ./src/packages/shortpassword/shortpassword.scss
        var shortpassword_shortpassword = __webpack_require__(54);

        // CONCATENATED MODULE: ./src/packages/shortpassword/index.js

        shortpassword.install = function (Vue) {
          Vue.component(shortpassword.name, shortpassword);
        };
        /* harmony default export */ var packages_shortpassword = shortpassword;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/skeleton.vue?vue&type=template&id=42732df9&
        var skeletonvue_type_template_id_42732df9_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'vue-skeleton-loading' }, [
            _c('div', { staticClass: 'skeleton-bac-animation' }),
            _vm._v(' '),
            _c('div', { staticClass: 'skeleton-bac-content' }, [_vm._t('default')], 2),
          ]);
        };
        var skeletonvue_type_template_id_42732df9_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/skeleton/skeleton.vue?vue&type=template&id=42732df9&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/skeleton.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var skeletonvue_type_script_lang_js_ = {
          name: 'nut-skeleton',
          data: function data() {
            return {};
          },
        };
        // CONCATENATED MODULE: ./src/packages/skeleton/skeleton.vue?vue&type=script&lang=js&
        /* harmony default export */ var skeleton_skeletonvue_type_script_lang_js_ = skeletonvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/skeleton/skeleton.vue

        /* normalize component */

        var skeleton_component = normalizeComponent(
          skeleton_skeletonvue_type_script_lang_js_,
          skeletonvue_type_template_id_42732df9_render,
          skeletonvue_type_template_id_42732df9_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var skeleton = skeleton_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/basic/skeleton-circle.vue?vue&type=template&id=2cbcc335&
        var skeleton_circlevue_type_template_id_2cbcc335_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', {
            ref: 'vueSkeletonCircle',
            staticClass: 'vue-skeleton-circle',
            style: {
              backgroundColor: _vm.backColor,
              width: _vm.diameter,
              height: _vm.diameter,
              'border-radius': '50%',
              margin: _vm.margin,
            },
          });
        };
        var skeleton_circlevue_type_template_id_2cbcc335_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-circle.vue?vue&type=template&id=2cbcc335&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/basic/skeleton-circle.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var skeleton_circlevue_type_script_lang_js_ = {
          name: 'skeletonCircle',
          data: function data() {
            return {};
          },
          props: {
            backColor: {
              type: String,
              default: '#efefef',
            },
            diameter: {
              type: String,
              default: '50px',
            },
            margin: {
              type: String,
              default: '0 0 0 0',
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-circle.vue?vue&type=script&lang=js&
        /* harmony default export */ var basic_skeleton_circlevue_type_script_lang_js_ = skeleton_circlevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-circle.vue

        /* normalize component */

        var skeleton_circle_component = normalizeComponent(
          basic_skeleton_circlevue_type_script_lang_js_,
          skeleton_circlevue_type_template_id_2cbcc335_render,
          skeleton_circlevue_type_template_id_2cbcc335_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var skeleton_circle = skeleton_circle_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/basic/skeleton-square.vue?vue&type=template&id=0daff141&
        var skeleton_squarevue_type_template_id_0daff141_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'vue-skeleton-square-wrap' },
            _vm._l(_vm.count, function (i) {
              return _c('div', {
                key: i,
                staticClass: 'vue-skeleton-square',
                style: {
                  backgroundColor: _vm.backColor,
                  width: _vm.width,
                  height: _vm.height,
                  margin: _vm.margin,
                },
              });
            }),
            0
          );
        };
        var skeleton_squarevue_type_template_id_0daff141_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-square.vue?vue&type=template&id=0daff141&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/basic/skeleton-square.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var skeleton_squarevue_type_script_lang_js_ = {
          name: 'skeletonSquare',
          data: function data() {
            return {};
          },
          props: {
            backColor: {
              type: String,
              default: '#efefef',
            },
            width: {
              type: String,
              default: '100%',
            },
            height: {
              type: String,
              default: '12px',
            },
            margin: {
              type: String,
              default: '0 0 0 0',
            },
            count: {
              type: Number,
              default: 1,
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-square.vue?vue&type=script&lang=js&
        /* harmony default export */ var basic_skeleton_squarevue_type_script_lang_js_ = skeleton_squarevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/skeleton/basic/skeleton-square.vue

        /* normalize component */

        var skeleton_square_component = normalizeComponent(
          basic_skeleton_squarevue_type_script_lang_js_,
          skeleton_squarevue_type_template_id_0daff141_render,
          skeleton_squarevue_type_template_id_0daff141_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var skeleton_square = skeleton_square_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/layout/skeleton-row.vue?vue&type=template&id=2deb289d&
        var skeleton_rowvue_type_template_id_2deb289d_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'vue-skeleton-row',
              style: {
                width: _vm.width,
                padding: _vm.padding,
                'justify-content': _vm.center,
              },
            },
            [_vm._t('default')],
            2
          );
        };
        var skeleton_rowvue_type_template_id_2deb289d_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-row.vue?vue&type=template&id=2deb289d&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/layout/skeleton-row.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var skeleton_rowvue_type_script_lang_js_ = {
          name: 'row',
          data: function data() {
            return {};
          },
          props: {
            width: {
              type: String,
              default: 'auto',
            },
            padding: {
              type: String,
              default: '0 0 0 0',
            },
            center: {
              type: String,
              default: 'flex-start',
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-row.vue?vue&type=script&lang=js&
        /* harmony default export */ var layout_skeleton_rowvue_type_script_lang_js_ = skeleton_rowvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-row.vue

        /* normalize component */

        var skeleton_row_component = normalizeComponent(
          layout_skeleton_rowvue_type_script_lang_js_,
          skeleton_rowvue_type_template_id_2deb289d_render,
          skeleton_rowvue_type_template_id_2deb289d_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var skeleton_row = skeleton_row_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/layout/skeleton-column.vue?vue&type=template&id=6fdc2362&
        var skeleton_columnvue_type_template_id_6fdc2362_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'vue-skeleton-column',
              style: {
                width: _vm.width,
                padding: _vm.padding,
                'align-items': _vm.center,
              },
            },
            [_vm._t('default')],
            2
          );
        };
        var skeleton_columnvue_type_template_id_6fdc2362_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-column.vue?vue&type=template&id=6fdc2362&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/skeleton/layout/skeleton-column.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var skeleton_columnvue_type_script_lang_js_ = {
          name: 'column',
          data: function data() {
            return {};
          },
          props: {
            width: {
              type: String,
              width: 'auto',
            },
            padding: {
              type: String,
              default: '0 0 0 0',
            },
            center: {
              type: String,
              default: 'flex-start',
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-column.vue?vue&type=script&lang=js&
        /* harmony default export */ var layout_skeleton_columnvue_type_script_lang_js_ = skeleton_columnvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/skeleton/layout/skeleton-column.vue

        /* normalize component */

        var skeleton_column_component = normalizeComponent(
          layout_skeleton_columnvue_type_script_lang_js_,
          skeleton_columnvue_type_template_id_6fdc2362_render,
          skeleton_columnvue_type_template_id_6fdc2362_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var skeleton_column = skeleton_column_component.exports;
        // CONCATENATED MODULE: ./src/packages/skeleton/_skeleton.js

        skeleton.skeletonCircle = skeleton_circle;
        skeleton.skeletonSquare = skeleton_square;
        skeleton.skeletonRow = skeleton_row;
        skeleton.skeletonColumn = skeleton_column;
        /* harmony default export */ var _skeleton = skeleton;
        // EXTERNAL MODULE: ./src/packages/skeleton/skeleton.scss
        var skeleton_skeleton = __webpack_require__(55);

        // CONCATENATED MODULE: ./src/packages/skeleton/index.js

        var skeletonCircle = _skeleton.skeletonCircle,
          skeletonSquare = _skeleton.skeletonSquare,
          skeletonRow = _skeleton.skeletonRow,
          skeletonColumn = _skeleton.skeletonColumn;
        _skeleton.install = function (Vue) {
          Vue.component(_skeleton.name, _skeleton);
        };
        skeletonCircle.install = function (Vue) {
          Vue.component(skeletonCircle.name, skeletonCircle);
        };
        skeletonSquare.install = function (Vue) {
          Vue.component(skeletonSquare.name, skeletonSquare);
        };
        skeletonRow.install = function (Vue) {
          Vue.component(skeletonRow.name, skeletonRow);
        };
        skeletonColumn.install = function (Vue) {
          Vue.component(skeletonColumn.name, skeletonColumn);
        };
        /* harmony default export */ var packages_skeleton = {
          skeleton: _skeleton,
          skeletonCircle: skeletonCircle,
          skeletonSquare: skeletonSquare,
          skeletonRow: skeletonRow,
          skeletonColumn: skeletonColumn,
        };
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/scroller.vue?vue&type=template&id=8b024c4c&
        var scrollervue_type_template_id_8b024c4c_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-scroller' },
            [
              _vm.type === 'vertical'
                ? [
                    _c(
                      'nut-vert-scroll',
                      {
                        attrs: {
                          stretch: _vm.stretch,
                          'is-un-more': _vm.isUnMore,
                          'is-loading': _vm.isLoading,
                          threshold: _vm.threshold,
                          'pulldown-txt': _vm.pulldownTxt,
                          'load-more-txt': _vm.loadMoreTxt,
                          'loading-txt': _vm.loadingTxt,
                          'unload-more-txt': _vm.unloadMoreTxt,
                          'props-time': _vm.propsTime,
                          'scroll-to': _vm.scrollTo,
                        },
                        on: { loadMore: _vm.loadMore, pulldown: _vm.pulldown, scrollToCbk: _vm.scrollToCbk, scrollChange: _vm.scrollChange },
                      },
                      [_vm._t('list', null, { slot: 'list' })],
                      2
                    ),
                  ]
                : _vm.type === 'horizontal'
                ? [
                    _c(
                      'nut-hor-scroll',
                      { attrs: { stretch: _vm.stretch, 'scroll-to': _vm.scrollTo }, on: { jump: _vm.jump, scrollToCbk: _vm.scrollToCbk } },
                      [
                        _vm._t('list', null, { slot: 'list' }),
                        _vm._v(' '),
                        _vm._t('more', null, { slot: 'more' }),
                        _vm._v(' '),
                        _vm._t('arrow', null, { slot: 'arrow' }),
                      ],
                      2
                    ),
                  ]
                : _vm._e(),
            ],
            2
          );
        };
        var scrollervue_type_template_id_8b024c4c_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/scroller/scroller.vue?vue&type=template&id=8b024c4c&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/vertical-scroll.vue?vue&type=template&id=44be7398&
        var vertical_scrollvue_type_template_id_44be7398_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { ref: 'wrapper', staticClass: 'nut-vert-scroll' }, [
            _c(
              'div',
              { ref: 'list', staticClass: 'nut-vert-list', style: { 'min-height': _vm.listMinHeightStyle } },
              [
                _vm.isFirstPull
                  ? _c('div', { staticClass: 'nut-vert-pulldown' }, [
                      !_vm.isLoading
                        ? _c('div', { staticClass: 'nut-vert-pulldown-txt' }, [_vm._v(_vm._s(_vm.pulldownTxt))])
                        : _c('div', { staticClass: 'nut-vert-pulldown-status' }, [
                            _c('span', { staticClass: 'nut-vert-loading' }),
                            _vm._v(' '),
                            _c('span', { staticClass: 'nut-vert-loading-txt' }, [_vm._v(_vm._s(_vm.loadingTxt))]),
                          ]),
                    ])
                  : _vm._e(),
                _vm._v(' '),
                _vm._t('list'),
                _vm._v(' '),
                _c(
                  'div',
                  { staticClass: 'nut-vert-loadmore' },
                  [
                    !_vm.isUnMore && _vm.isShowLoadMore
                      ? [
                          _vm.isLoading
                            ? _c('div', { staticClass: 'nut-vert-load-status' }, [
                                _c('span', { staticClass: 'nut-vert-loading' }),
                                _vm._v(' '),
                                _c('span', { staticClass: 'nut-vert-loading-txt' }, [_vm._v(_vm._s(_vm.loadingTxt))]),
                              ])
                            : _vm._e(),
                        ]
                      : _vm.isUnMore
                      ? [_c('div', { staticClass: 'nut-vert-unloadmore-txt' }, [_vm._v(_vm._s(_vm.unloadMoreTxt))])]
                      : _vm._e(),
                  ],
                  2
                ),
              ],
              2
            ),
          ]);
        };
        var vertical_scrollvue_type_template_id_44be7398_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/scroller/vertical-scroll.vue?vue&type=template&id=44be7398&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/vertical-scroll.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var vertical_scrollvue_type_script_lang_js_ = {
          name: 'nut-vert-scroll',
          props: {
            stretch: {
              type: Number,
              default: 100,
            },
            isUnMore: {
              type: Boolean,
              default: false,
            },
            isLoading: {
              type: Boolean,
              default: false,
            },
            pulldownTxt: {
              type: String,
              default: '下拉刷新',
            },
            loadMoreTxt: {
              type: String,
              default: '上拉加载',
            },
            loadingTxt: {
              type: String,
              default: '加载中...',
            },
            unloadMoreTxt: {
              type: String,
              default: '没有更多了',
            },
            threshold: {
              type: Number,
              default: 100,
            },
            propsTime: {
              type: Number,
              default: 0,
            },
            scrollTo: {
              type: Number,
              default: 1,
            },
          },
          watch: {
            isLoading: function isLoading(status) {
              var _this = this;
              if (!status && this.realMove === 0) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                  _this.setTransform(_this.realMove, 'end', null);
                }, this.propsTime);
              }
            },
            isUnMore: function isUnMore() {
              this.isShow();
            },
            scrollTo: function scrollTo(val) {
              if (typeof val === 'number' && !isNaN(val) && val <= 0) {
                this.setTransform(val, null, 500);
                this.$emit('scrollToCbk');
              }
            },
          },
          data: function data() {
            return {
              touchParams: {
                startY: 0,
                endY: 0,
                startTime: 0,
                endTime: 0,
              },
              translateY: 0,
              scrollDistance: 0,
              timer: null,
              timerEmit: null,
              realMove: 0,
              isShowLoadMore: false,
              listMinHeightStyle: 'auto',
              isFirstPull: true,
            };
          },
          methods: {
            isShow: function isShow() {
              var wrapH = this.$refs.wrapper.offsetHeight;
              var listH = this.$refs.list.offsetHeight;
              if (wrapH < listH) {
                this.isShowLoadMore = true;
                this.listMinHeightStyle = 'auto';
              } else {
                this.isShowLoadMore = false;
                this.isFirstPull = true;
                this.listMinHeightStyle = ''.concat(wrapH, 'px');
              }
            },
            setTransform: function setTransform() {
              var translateY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var type = arguments.length > 1 ? arguments[1] : undefined;
              var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
              if (type === 'end') {
                this.$refs.list.style.webkitTransition = 'transform '.concat(time, 'ms cubic-bezier(0.19, 1, 0.22, 1)');
              } else {
                this.$refs.list.style.webkitTransition = '';
              }
              this.$refs.list.style.webkitTransform = 'translate3d(0, '.concat(translateY, 'px, 0)');
              this.scrollDistance = translateY;
              this.$emit('scrollChange', translateY);
            },
            setMove: function setMove(move, type, time) {
              var _this2 = this;
              var updateMove = move + this.translateY;
              var h = this.$refs.wrapper.offsetHeight;
              var maxMove = -this.$refs.list.offsetHeight + h;
              if (type === 'end') {
                if (updateMove > 0) {
                  this.realMove = 0;
                  if ((!this.isShowLoadMore || this.isFirstPull) && !this.isLoading && updateMove > this.stretch) {
                    updateMove = 50;
                    clearTimeout(this.timerEmit);
                    this.timerEmit = setTimeout(function () {
                      _this2.$emit('pulldown');
                    }, time / 2);
                  } else {
                    this.isFirstPull = true;
                    updateMove = 0;
                  }
                } else if (updateMove < 0 && updateMove < maxMove + this.threshold) {
                  if (updateMove < maxMove) {
                    updateMove = maxMove;
                  }
                  this.realMove = maxMove;
                  if (!this.isLoading && !this.isUnMore) {
                    //clearTimeout(this.timerEmit);
                    //this.timerEmit = setTimeout(() => {
                    this.$emit('loadMore');
                    // }, time / 2);
                  }
                }
                // if (updateMove == 50 && !this.isLoading) {
                //     clearTimeout(this.timer);
                //     this.timer = setTimeout(() => {
                //         this.setTransform(this.realMove, 'end', null);
                //     }, 3000);
                // }
                this.setTransform(updateMove, type, time);
              } else {
                if (updateMove > 0 && updateMove > this.stretch) {
                  updateMove = this.stretch;
                } else if (updateMove < maxMove - this.stretch) {
                  updateMove = maxMove - this.stretch;
                }
                this.setTransform(updateMove, null, null);
              }
            },
            touchStart: function touchStart(event) {
              // event.preventDefault();

              var changedTouches = event.changedTouches[0];
              this.touchParams.startY = changedTouches.pageY;
              this.touchParams.startTime = event.timestamp || Date.now();
              this.translateY = this.scrollDistance;
            },
            touchMove: function touchMove(event) {
              event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              if (move < 0 && this.isShowLoadMore && this.isFirstPull) {
                this.isFirstPull = false;
              }
              this.setMove(move);
            },
            touchEnd: function touchEnd(event) {
              // event.preventDefault();

              var changedTouches = event.changedTouches[0];
              this.touchParams.lastY = changedTouches.pageY;
              this.touchParams.lastTime = event.timestamp || Date.now();
              var move = this.touchParams.lastY - this.touchParams.startY;
              var moveTime = this.touchParams.lastTime - this.touchParams.startTime;
              var h = this.$refs.wrapper.offsetHeight;
              var maxMove = -this.$refs.list.offsetHeight + h;
              if (moveTime <= 300) {
                move = move * 2;
                if (move < 0 && move < maxMove) {
                  move = maxMove;
                }
                moveTime = moveTime + 500;
                this.setMove(move, 'end', moveTime);
              } else {
                this.setMove(move, 'end');
              }
            },
          },
          mounted: function mounted() {
            var _this3 = this;
            this.$nextTick(function () {
              _this3.isShow();
              // 监听
              _this3.$el.addEventListener('touchstart', _this3.touchStart);
              _this3.$el.addEventListener('touchmove', _this3.touchMove);
              _this3.$el.addEventListener('touchend', _this3.touchEnd);
            });
          },
          beforeDestroy: function beforeDestroy() {
            // 移除监听
            this.$el.removeEventListener('touchstart', this.touchStart);
            this.$el.removeEventListener('touchmove', this.touchMove);
            this.$el.removeEventListener('touchend', this.touchEnd);
            clearTimeout(this.timer);
            clearTimeout(this.timerEmit);
          },
        };
        // CONCATENATED MODULE: ./src/packages/scroller/vertical-scroll.vue?vue&type=script&lang=js&
        /* harmony default export */ var scroller_vertical_scrollvue_type_script_lang_js_ = vertical_scrollvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/scroller/vertical-scroll.vue

        /* normalize component */

        var vertical_scroll_component = normalizeComponent(
          scroller_vertical_scrollvue_type_script_lang_js_,
          vertical_scrollvue_type_template_id_44be7398_render,
          vertical_scrollvue_type_template_id_44be7398_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var vertical_scroll = vertical_scroll_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/horizontal-scroll.vue?vue&type=template&id=04a6c994&
        var horizontal_scrollvue_type_template_id_04a6c994_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { ref: 'wrapper', staticClass: 'nut-hor-scroll' }, [
            _c(
              'div',
              { ref: 'list', staticClass: 'nut-hor-list' },
              [
                _vm._t('list'),
                _vm._v(' '),
                _vm.$slots.more && _vm.isShowLoadMore ? _c('div', { staticClass: 'nut-hor-control' }, [_vm._t('more')], 2) : _vm._e(),
                _vm._v(' '),
                _vm.$slots.arrow ? _vm._t('arrow') : _vm._e(),
              ],
              2
            ),
          ]);
        };
        var horizontal_scrollvue_type_template_id_04a6c994_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/scroller/horizontal-scroll.vue?vue&type=template&id=04a6c994&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/horizontal-scroll.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var horizontal_scrollvue_type_script_lang_js_ = {
          name: 'nut-hor-scroll',
          props: {
            stretch: {
              type: Number,
              default: 40,
            },
            scrollTo: {
              type: Number,
              default: 1,
            },
            listWidth: {
              type: Number,
              default: 0,
            },
          },
          watch: {
            scrollTo: function scrollTo(val) {
              if (typeof val === 'number' && !isNaN(val) && val <= 0) {
                this.setTransform(val, null, 500);
                this.$emit('scrollToCbk');
              }
            },
          },
          data: function data() {
            return {
              touchParams: {
                startX: 0,
                endX: 0,
                startY: 0,
                endY: 0,
                startTime: 0,
                endTime: 0,
              },
              transformX: 0,
              scrollDistance: 0,
              timer: null,
              isShowLoadMore: false,
              isFirstShow: false,
            };
          },
          methods: {
            isShow: function isShow() {
              var wrapH = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              var listH = this.$refs.list.offsetWidth;
              if (wrapH <= listH) {
                this.isShowLoadMore = true;
              } else {
                this.isShowLoadMore = false;
              }
            },
            setTransform: function setTransform() {
              var translateX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var type = arguments.length > 1 ? arguments[1] : undefined;
              var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
              var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'px';
              this.scrollDistance = translateX;
              translateX = translateX + unit;
              if (type === 'end') {
                this.$refs.list.style.webkitTransition = 'transform '.concat(time, 'ms cubic-bezier(0.19, 1, 0.22, 1)');
              } else {
                this.$refs.list.style.webkitTransition = '';
              }
              this.$refs.list.style.webkitTransform = 'translate3d('.concat(translateX, ', 0, 0)');
            },
            setMove: function setMove(move, type, time) {
              var updateMove = move + this.transformX;
              var w = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              var offsetWidth = this.$refs.list.offsetWidth;
              if (type === 'end') {
                if (updateMove > 0) {
                  updateMove = 0;
                } else if (updateMove < -offsetWidth + w) {
                  if (-offsetWidth + w <= 0) {
                    updateMove = -offsetWidth + w;
                  } else {
                    updateMove = 0;
                  }
                }
                this.setTransform(updateMove, type, time);
              } else {
                var maxMove = -offsetWidth + w;
                if (updateMove > 0 && updateMove > this.stretch) {
                  updateMove = this.stretch;
                } else if (updateMove < maxMove - this.stretch) {
                  if (maxMove <= 0) {
                    updateMove = maxMove - this.stretch;
                  } else {
                    updateMove = updateMove < -this.stretch ? -this.stretch : updateMove;
                  }
                }
                this.setTransform(updateMove, null, null);
              }
            },
            touchStart: function touchStart(event) {
              // event.preventDefault();

              var changedTouches = event.changedTouches[0];
              this.touchParams.startX = changedTouches.pageX;
              this.touchParams.startY = changedTouches.pageY;
              this.touchParams.startTime = event.timestamp || Date.now();
              this.transformX = this.scrollDistance;
            },
            touchEvent: function touchEvent(changedTouches, callback) {
              this.touchParams.lastX = changedTouches.pageX;
              this.touchParams.lastY = changedTouches.pageY;
              var moveY = this.touchParams.lastY - this.touchParams.startY;
              var move = this.touchParams.lastX - this.touchParams.startX;
              if (!(Math.abs(move) > 20 && Math.abs(move) > Math.abs(moveY))) {
                return false;
              } else {
                var w = this.listWidth ? this.listWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var maxMove = -this.$refs.list.offsetWidth + w;
                callback && callback(move, maxMove, moveY);
              }
            },
            touchMove: function touchMove(event) {
              var _this = this;
              //event.preventDefault();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastTime = event.timestamp || Date.now();
              var moveTime = this.touchParams.lastTime - this.touchParams.startTime;
              this.touchEvent(changedTouches, function (move, maxMove, moveY) {
                event.preventDefault();
                if (event.cancelable) {
                  event.preventDefault();
                }
                if (move > 0 && _this.isFirstShow) {
                  _this.isFirstShow = false;
                }
                _this.setMove(move);
              });
            },
            touchEnd: function touchEnd(event) {
              var _this2 = this;
              event.stopPropagation();
              var changedTouches = event.changedTouches[0];
              this.touchParams.lastTime = event.timestamp || Date.now();
              var moveTime = this.touchParams.lastTime - this.touchParams.startTime;
              this.touchEvent(changedTouches, function (move, maxMove) {
                //if (moveTime <= 300) {
                if (Math.abs(move) > 100) {
                  move = move * 1.5;
                }

                // 释放跳转之类
                if (move < 0 && move + _this2.transformX < maxMove - 20 && _this2.isFirstShow) {
                  _this2.$emit('jump');
                }
                if (!_this2.isFirstShow && move < 0 && move + _this2.transformX < maxMove && _this2.$slots.more) {
                  _this2.isFirstShow = true;
                  //move = maxMove - this.transformX;
                }

                if (moveTime <= 300) {
                  moveTime = moveTime + 500;
                  _this2.setMove(move, 'end', moveTime);
                } else {
                  _this2.setMove(move, 'end');
                }
              });
            },
          },
          mounted: function mounted() {
            var _this3 = this;
            this.$nextTick(function () {
              _this3.isShow();
              // 监听
              _this3.$el.addEventListener('touchstart', _this3.touchStart);
              _this3.$el.addEventListener('touchmove', _this3.touchMove);
              _this3.$el.addEventListener('touchend', _this3.touchEnd);
            });
          },
          beforeDestroy: function beforeDestroy() {
            // 移除监听
            this.$el.removeEventListener('touchstart', this.touchStart);
            this.$el.removeEventListener('touchmove', this.touchMove);
            this.$el.removeEventListener('touchend', this.touchEnd);
            clearTimeout(this.timer);
          },
        };
        // CONCATENATED MODULE: ./src/packages/scroller/horizontal-scroll.vue?vue&type=script&lang=js&
        /* harmony default export */ var scroller_horizontal_scrollvue_type_script_lang_js_ = horizontal_scrollvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/scroller/horizontal-scroll.vue

        /* normalize component */

        var horizontal_scroll_component = normalizeComponent(
          scroller_horizontal_scrollvue_type_script_lang_js_,
          horizontal_scrollvue_type_template_id_04a6c994_render,
          horizontal_scrollvue_type_template_id_04a6c994_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var horizontal_scroll = horizontal_scroll_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/scroller/scroller.vue?vue&type=script&lang=js&

        var scrollervue_type_script_lang_js_components;
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var scrollervue_type_script_lang_js_ = {
          name: 'nut-scroller',
          props: {
            type: {
              type: String,
              default: 'horizontal',
            },
            stretch: {
              type: Number,
              default: 100,
            },
            isUnMore: {
              type: Boolean,
              default: false,
            },
            isLoading: {
              type: Boolean,
              default: false,
            },
            threshold: {
              type: Number,
              default: 100,
            },
            pulldownTxt: {
              type: String,
              default: '下拉刷新',
            },
            loadMoreTxt: {
              type: String,
              default: '上拉加载',
            },
            loadingTxt: {
              type: String,
              default: '加载中...',
            },
            unloadMoreTxt: {
              type: String,
              default: '没有更多了',
            },
            propsTime: {
              type: Number,
              default: 0,
            },
            scrollTo: {
              type: Number,
              default: 1,
            },
          },
          data: function data() {
            return {};
          },
          components:
            ((scrollervue_type_script_lang_js_components = {}),
            defineProperty_default()(scrollervue_type_script_lang_js_components, vertical_scroll.name, vertical_scroll),
            defineProperty_default()(scrollervue_type_script_lang_js_components, horizontal_scroll.name, horizontal_scroll),
            scrollervue_type_script_lang_js_components),
          methods: {
            loadMore: function loadMore() {
              this.$emit('loadMore');
            },
            jump: function jump() {
              this.$emit('jump');
            },
            pulldown: function pulldown() {
              this.$emit('pulldown');
            },
            scrollToCbk: function scrollToCbk() {
              this.$emit('scrollToCbk');
            },
            scrollChange: function scrollChange(event) {
              this.$emit('scrollChange', event);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/scroller/scroller.vue?vue&type=script&lang=js&
        /* harmony default export */ var scroller_scrollervue_type_script_lang_js_ = scrollervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/scroller/scroller.vue

        /* normalize component */

        var scroller_component = normalizeComponent(
          scroller_scrollervue_type_script_lang_js_,
          scrollervue_type_template_id_8b024c4c_render,
          scrollervue_type_template_id_8b024c4c_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var scroller = scroller_component.exports;
        // EXTERNAL MODULE: ./src/packages/scroller/scroller.scss
        var scroller_scroller = __webpack_require__(56);

        // CONCATENATED MODULE: ./src/packages/scroller/index.js

        scroller.install = function (Vue) {
          Vue.component(scroller.name, scroller);
        };
        /* harmony default export */ var packages_scroller = scroller;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/backtop/backtop.vue?vue&type=template&id=5ea5b2b8&
        var backtopvue_type_template_id_5ea5b2b8_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              class: ['nut-backtop', { show: _vm.backTop }],
              style: _vm.styles,
              on: {
                click: function ($event) {
                  $event.stopPropagation();
                  return _vm.click($event);
                },
              },
            },
            [_vm._t('default', [_c('div', { staticClass: 'nut-backtop-main' })])],
            2
          );
        };
        var backtopvue_type_template_id_5ea5b2b8_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/backtop/backtop.vue?vue&type=template&id=5ea5b2b8&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/backtop/backtop.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var backtopvue_type_script_lang_js_ = {
          name: 'nut-backtop',
          props: {
            distance: {
              type: Number,
              default: 200,
            },
            bottom: {
              type: Number,
              default: 20,
            },
            right: {
              type: Number,
              default: 10,
            },
            duration: {
              type: Number,
              default: 1000,
            },
            isAnimation: {
              type: Boolean,
              default: true,
            },
            elId: {
              type: String,
              default: '',
            },
            zIndex: {
              type: Number,
              default: 1111,
            },
          },
          data: function data() {
            return {
              backTop: false,
              scrollEl: window,
            };
          },
          mounted: function mounted() {
            this.init();
          },
          activated: function activated() {
            if (this.keepAlive) {
              this.keepAlive = false;
              this.init();
            }
          },
          deactivated: function deactivated() {
            this.keepAlive = true;
            this.removeEventListener();
          },
          destroyed: function destroyed() {
            this.removeEventListener();
          },
          computed: {
            styles: function styles() {
              return {
                bottom: ''.concat(this.bottom, 'px'),
                right: ''.concat(this.right, 'px'),
                'z-index': this.zIndex,
              };
            },
          },
          methods: {
            addEventListener: function addEventListener() {
              this.scrollEl.addEventListener('scroll', this.scrollListener, false);
              this.scrollEl.addEventListener('resize', this.scrollListener, false);
            },
            removeEventListener: function removeEventListener() {
              this.scrollEl.removeEventListener('scroll', this.scrollListener, false);
              this.scrollEl.removeEventListener('resize', this.scrollListener, false);
            },
            requestAniFrame: function requestAniFrame() {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                  window.setTimeout(callback, 1000 / 60);
                }
              );
            },
            initCancelAniFrame: function initCancelAniFrame() {
              var vendors = ['webkit', 'moz'];
              for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
              }
            },
            init: function init() {
              if (this.elId && document.getElementById(this.elId)) {
                this.scrollEl = document.getElementById(this.elId);
              }
              this.addEventListener();
              this.initCancelAniFrame();
            },
            scrollListener: function scrollListener() {
              this.scrollTop = this.scrollEl.pageYOffset !== undefined ? this.scrollEl.pageYOffset : this.scrollEl.scrollTop;
              this.backTop = this.scrollTop >= this.distance;
            },
            click: function click() {
              this.startTime = +new Date();
              this.isAnimation && this.duration > 0 ? this.scrollAnimation() : this.scroll();
              this.$emit('click');
            },
            scrollAnimation: function scrollAnimation() {
              var self = this;
              var cid = self.requestAniFrame()(function fn() {
                var t = self.duration - Math.max(0, self.startTime - +new Date() + self.duration);
                var y = (t * -self.scrollTop) / self.duration + self.scrollTop;
                self.scroll(y);
                cid = self.requestAniFrame()(fn);
                if (t == self.duration || y == 0) {
                  window.cancelAnimationFrame(cid);
                }
              });
            },
            scroll: function scroll() {
              var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              if (this.scrollEl === window) {
                window.scrollTo(0, y);
              } else {
                this.scrollEl.scrollTop = y;
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/backtop/backtop.vue?vue&type=script&lang=js&
        /* harmony default export */ var backtop_backtopvue_type_script_lang_js_ = backtopvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/backtop/backtop.vue

        /* normalize component */

        var backtop_component = normalizeComponent(
          backtop_backtopvue_type_script_lang_js_,
          backtopvue_type_template_id_5ea5b2b8_render,
          backtopvue_type_template_id_5ea5b2b8_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var backtop = backtop_component.exports;
        // EXTERNAL MODULE: ./src/packages/backtop/backtop.scss
        var backtop_backtop = __webpack_require__(57);

        // CONCATENATED MODULE: ./src/packages/backtop/index.js

        backtop.install = function (Vue) {
          Vue.component(backtop.name, backtop);
        };
        /* harmony default export */ var packages_backtop = backtop;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/countdown/countdown.vue?vue&type=template&id=5863995e&
        var countdownvue_type_template_id_5863995e_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'span',
            { staticClass: 'nut-cd-timer' },
            [
              _vm.$slots.default
                ? [_vm._t('default')]
                : _vm.showPlainText
                ? [_c('span', { staticClass: 'nut-cd-block' }, [_vm._v(_vm._s(_vm.plainText))])]
                : [
                    _vm.resttime.d >= 0 && _vm.showDays
                      ? [
                          _c('span', { staticClass: 'nut-cd-block' }, [_vm._v(_vm._s(_vm.resttime.d))]),
                          _vm._v(' '),
                          _c('span', { staticClass: 'nut-cd-dot' }, [_vm._v('天')]),
                        ]
                      : _vm._e(),
                    _vm._v(' '),
                    _c('span', { staticClass: 'nut-cd-block' }, [_vm._v(_vm._s(_vm.resttime.h))]),
                    _c('span', { staticClass: 'nut-cd-dot' }, [_vm._v(':')]),
                    _c('span', { staticClass: 'nut-cd-block' }, [_vm._v(_vm._s(_vm.resttime.m))]),
                    _c('span', { staticClass: 'nut-cd-dot' }, [_vm._v(':')]),
                    _c('span', { staticClass: 'nut-cd-block' }, [_vm._v(_vm._s(_vm.resttime.s))]),
                  ],
            ],
            2
          );
        };
        var countdownvue_type_template_id_5863995e_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/countdown/countdown.vue?vue&type=template&id=5863995e&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/countdown/countdown.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        function fill2(v) {
          v += '';
          while (v.length < 2) {
            v = '0' + v;
          }
          return v;
        }
        function _restTime(t) {
          var ts = t;
          var rest = {
            d: '-',
            h: '--',
            m: '--',
            s: '--',
          };
          if (ts === 0) {
            rest = {
              d: '0',
              h: '00',
              m: '00',
              s: '00',
            };
          }
          if (ts) {
            var ds = 24 * 60 * 60 * 1000;
            var hs = 60 * 60 * 1000;
            var ms = 60 * 1000;
            var d = ts >= ds ? parseInt(ts / ds) : 0;
            var h = ts - d * ds >= hs ? parseInt((ts - d * ds) / hs) : 0;
            var m = ts - d * ds - h * hs >= ms ? parseInt((ts - d * ds - h * hs) / ms) : 0;
            var s = Math.round((ts - d * ds - h * hs - m * ms) / 1000);
            if (d >= 0) rest.d = d + '';
            if (h >= 0) rest.h = fill2(h);
            if (m >= 0) rest.m = fill2(m);
            if (s >= 0) rest.s = fill2(s);
          }
          return rest;
        }
        var countdownTimer = {
          name: 'nut-countdown',
          data: function data() {
            return {
              restTime: 0,
              p: 0,
              _curr: 0,
            };
          },
          props: {
            value: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            paused: {
              default: false,
              type: Boolean,
            },
            showDays: {
              default: false,
              type: Boolean,
            },
            showPlainText: {
              default: false,
              type: Boolean,
            },
            startTime: {
              // 可以是服务器当前时间
              type: [Number, String],
              validator: function validator(v) {
                var dateStr = new Date(v).toString().toLowerCase();
                return dateStr !== 'invalid date';
              },
            },
            endTime: {
              type: [Number, String],
              validator: function validator(v) {
                var dateStr = new Date(v).toString().toLowerCase();
                return dateStr !== 'invalid date';
              },
            },
          },
          computed: {
            resttime: function resttime() {
              var rest = _restTime(this.restTime);
              var d = rest.d,
                h = rest.h,
                m = rest.m,
                s = rest.s;
              if (!this.showDays && d > 0) {
                rest.h = fill2(Number(rest.h) + d * 24);
                rest.d = 0;
              }
              return rest;
            },
            plainText: function plainText() {
              var _this$resttime = this.resttime,
                d = _this$resttime.d,
                h = _this$resttime.h,
                m = _this$resttime.m,
                s = _this$resttime.s;
              return ''
                .concat(d > 0 && this.showDays ? d + '天' + h : h, '\u5C0F\u65F6')
                .concat(m, '\u5206')
                .concat(s, '\u79D2');
            },
          },
          watch: {
            value: function value(newVal, oldVal) {},
            restTime: function restTime(n, o) {
              var tranTime = _restTime(n);
              this.$emit('input', tranTime);
            },
            paused: function paused(v, ov) {
              if (!ov) {
                this._curr = this.getTimeStamp();
                this.$emit('on-paused', this.restTime);
              } else {
                this.p += this.getTimeStamp() - this._curr;
                this.$emit('on-restart', this.restTime);
              }
            },
            endTime: function endTime() {
              this.initTimer();
            },
            startTime: function startTime() {
              this.initTimer();
            },
          },
          methods: {
            getTimeStamp: function getTimeStamp(timeStr) {
              if (!timeStr) return Date.now();
              var t = timeStr;
              t = t > 0 ? +t : t.toString().replace(/\-/g, '/');
              return new Date(t).getTime();
            },
            initTimer: function initTimer() {
              var _this = this;
              var delay = 1000;
              var curr = Date.now();
              var start = this.getTimeStamp(this.startTime || curr);
              var end = this.getTimeStamp(this.endTime || curr);
              var diffTime = curr - start;
              this.restTime = end - (start + diffTime);
              this.timer = setInterval(function () {
                if (!_this.paused) {
                  var restTime = end - (Date.now() - _this.p + diffTime);
                  _this.restTime = restTime;
                  if (restTime < delay) {
                    _this.restTime = 0;
                    _this.$emit('on-end');
                    clearInterval(_this.timer);
                  }
                } else {
                  // 暂停
                }
              }, delay);
            },
          },
          created: function created() {
            this.initTimer();
          },
          destroyed: function destroyed() {
            this.timer && clearInterval(this.timer);
          },
        };
        countdownTimer.restTime = _restTime;

        // export fill2 for test

        /* harmony default export */ var countdownvue_type_script_lang_js_ = countdownTimer;
        // CONCATENATED MODULE: ./src/packages/countdown/countdown.vue?vue&type=script&lang=js&
        /* harmony default export */ var countdown_countdownvue_type_script_lang_js_ = countdownvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/countdown/countdown.vue

        /* normalize component */

        var countdown_component = normalizeComponent(
          countdown_countdownvue_type_script_lang_js_,
          countdownvue_type_template_id_5863995e_render,
          countdownvue_type_template_id_5863995e_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var countdown = countdown_component.exports;
        // EXTERNAL MODULE: ./src/packages/countdown/countdown.scss
        var countdown_countdown = __webpack_require__(58);

        // CONCATENATED MODULE: ./src/packages/countdown/index.js

        countdown.install = function (Vue) {
          Vue.component(countdown.name, countdown);
        };
        /* harmony default export */ var packages_countdown = countdown;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/infiniteloading/infiniteloading.vue?vue&type=template&id=48fb25f8&
        var infiniteloadingvue_type_template_id_48fb25f8_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              ref: 'scroller',
              staticClass: 'nut-infiniteloading',
              on: {
                touchstart: function ($event) {
                  return _vm.touchStartHandle($event);
                },
                touchmove: function ($event) {
                  return _vm.touchMoveHandle($event);
                },
              },
            },
            [
              _vm._t('default'),
              _vm._v(' '),
              _c('div', { staticClass: 'load-more' }, [
                _vm.isShowBottomTips
                  ? _c(
                      'div',
                      { staticClass: 'bottom-tips' },
                      [
                        _vm.isLoading
                          ? [
                              !_vm.slotLoading
                                ? [
                                    _c('i', { staticClass: 'loading-hint' }),
                                    _c('span', { staticClass: 'loading-txt' }, [_vm._v(_vm._s(_vm.loadingTxt))]),
                                  ]
                                : _vm._t('loading'),
                            ]
                          : !_vm.hasMore
                          ? [
                              !_vm.slotUnloadMore
                                ? _c('span', { staticClass: 'tips-txt' }, [_vm._v(_vm._s(_vm.unloadMoreTxt))])
                                : _vm._t('unloadMore'),
                            ]
                          : _vm._e(),
                      ],
                      2
                    )
                  : _vm._e(),
              ]),
            ],
            2
          );
        };
        var infiniteloadingvue_type_template_id_48fb25f8_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/infiniteloading/infiniteloading.vue?vue&type=template&id=48fb25f8&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/infiniteloading/infiniteloading.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var infiniteloadingvue_type_script_lang_js_ = {
          name: 'nut-infiniteloading',
          props: {
            hasMore: {
              type: Boolean,
              default: true,
            },
            isLoading: {
              type: Boolean,
              default: false,
            },
            threshold: {
              type: Number,
              default: 200,
            },
            useWindow: {
              type: Boolean,
              default: true,
            },
            useCapture: {
              type: Boolean,
              default: false,
            },
            isShowMod: {
              type: Boolean,
              default: false,
            },
            isShowBottomTips: {
              type: Boolean,
              default: true,
            },
            unloadMoreTxt: {
              type: String,
              default: '哎呀，这里是底部了啦',
            },
            loadingTxt: {
              type: String,
              default: '加载中...',
            },
            scrollChange: {
              type: Function,
            },
            containerId: {
              type: String,
              default: '',
            },
          },
          data: function data() {
            return {
              startX: 0,
              startY: 0,
              diffX: 0,
              diffY: 0,
              beforeScrollTop: 0,
              slotUnloadMore: false,
              slotLoading: false,
            };
          },
          mounted: function mounted() {
            var parentElement = this.getParentElement(this.$el);
            var scrollEl = window;
            if (this.useWindow === false) {
              scrollEl = parentElement;
            }
            this.scrollEl = scrollEl;
            this.scrollListener();
            this.slotUnloadMore = this.$slots.unloadMore ? true : false;
            this.slotLoading = this.$slots.loading ? true : false;
          },
          methods: {
            touchStartHandle: function touchStartHandle(e) {
              try {
                this.startX = Number(e.changedTouches[0].pageX);
                this.startY = Number(e.changedTouches[0].pageY);
              } catch (e) {
                console.log(e.message);
              }
            },
            touchMoveHandle: function touchMoveHandle(e) {
              var endX = Number(e.changedTouches[0].pageX);
              var endY = Number(e.changedTouches[0].pageY);
              this.diffX = endX - this.startX;
              this.diffY = endY - this.startY;
            },
            getParentElement: function getParentElement(el) {
              if (this.containerId) {
                return document.querySelector('#'.concat(this.containerId));
              }
              return el && el.parentNode;
            },
            scrollListener: function scrollListener() {
              this.scrollEl.addEventListener('scroll', this.handleScroll, this.useCapture);
              window.addEventListener('resize', this.handleScroll, this.useCapture);
            },
            requestAniFrame: function requestAniFrame() {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                  window.setTimeout(callback, 1000 / 60);
                }
              );
            },
            handleScroll: function handleScroll() {
              var _this = this;
              this.requestAniFrame()(function () {
                if (!_this.isScrollAtBottom() || !_this.hasMore || _this.isLoading || !_this.isShowMod) {
                  return false;
                } else {
                  _this.$emit('loadmore');
                }
              });
            },
            calculateTopPosition: function calculateTopPosition(el) {
              if (!el) {
                return 0;
              }
              return el.offsetTop + this.calculateTopPosition(el.offsetParent);
            },
            getWindowScrollTop: function getWindowScrollTop() {
              return window.pageYOffset !== undefined
                ? window.pageYOffset
                : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            },
            isScrollAtBottom: function isScrollAtBottom() {
              var offsetDistance;
              var resScrollTop = 0;
              var windowScrollTop = this.getWindowScrollTop();
              if (this.useWindow) {
                offsetDistance =
                  this.calculateTopPosition(this.$refs.scroller) + this.$refs.scroller.offsetHeight - windowScrollTop - window.innerHeight;
              } else {
                var _this$scrollEl = this.scrollEl,
                  scrollHeight = _this$scrollEl.scrollHeight,
                  clientHeight = _this$scrollEl.clientHeight,
                  scrollTop = _this$scrollEl.scrollTop;
                offsetDistance = scrollHeight - clientHeight - scrollTop;
                resScrollTop = scrollTop;
              }
              this.$emit('scrollChange', this.useWindow ? windowScrollTop : resScrollTop);
              // 保证是往下滑动的
              var beforeScrollTop = this.beforeScrollTop;
              this.beforeScrollTop = windowScrollTop;
              return offsetDistance <= this.threshold && windowScrollTop >= this.beforeScrollTop;
            },
          },
          activated: function activated() {
            if (this.keepAlive) {
              this.keepAlive = false;
              this.scrollListener();
            }
          },
          deactivated: function deactivated() {
            this.keepAlive = true;
            this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture);
            window.removeEventListener('resize', this.handleScroll, this.useCapture);
          },
          destroyed: function destroyed() {
            this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture);
            window.removeEventListener('resize', this.handleScroll, this.useCapture);
          },
        };
        // CONCATENATED MODULE: ./src/packages/infiniteloading/infiniteloading.vue?vue&type=script&lang=js&
        /* harmony default export */ var infiniteloading_infiniteloadingvue_type_script_lang_js_ = infiniteloadingvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/infiniteloading/infiniteloading.vue

        /* normalize component */

        var infiniteloading_component = normalizeComponent(
          infiniteloading_infiniteloadingvue_type_script_lang_js_,
          infiniteloadingvue_type_template_id_48fb25f8_render,
          infiniteloadingvue_type_template_id_48fb25f8_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var infiniteloading = infiniteloading_component.exports;
        // EXTERNAL MODULE: ./src/packages/infiniteloading/infiniteloading.scss
        var infiniteloading_infiniteloading = __webpack_require__(59);

        // CONCATENATED MODULE: ./src/packages/infiniteloading/index.js

        infiniteloading.install = function (Vue) {
          Vue.component(infiniteloading.name, infiniteloading);
        };
        /* harmony default export */ var packages_infiniteloading = infiniteloading;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/uploader/uploader.vue?vue&type=template&id=1c8e4744&
        var uploadervue_type_template_id_1c8e4744_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-uploader' },
            [
              _vm._t('default'),
              _vm._v(' '),
              _vm.capture
                ? _c('input', {
                    staticClass: 'uploader',
                    attrs: { type: 'file', name: _vm.name, multiple: _vm.multiple, capture: '', disabled: _vm.newdisabled, accept: _vm.acceptType },
                    on: {
                      click: _vm.preventMoreClick,
                      change: function ($event) {
                        return _vm.upload($event);
                      },
                    },
                  })
                : _c('input', {
                    staticClass: 'uploader',
                    attrs: { type: 'file', name: _vm.name, multiple: _vm.multiple, disabled: _vm.newdisabled, accept: _vm.acceptType },
                    on: {
                      click: _vm.preventMoreClick,
                      change: function ($event) {
                        return _vm.upload($event);
                      },
                    },
                  }),
            ],
            2
          );
        };
        var uploadervue_type_template_id_1c8e4744_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/uploader/uploader.vue?vue&type=template&id=1c8e4744&

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
        var asyncToGenerator = __webpack_require__(91);
        var asyncToGenerator_default = /*#__PURE__*/ __webpack_require__.n(asyncToGenerator);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
        var regenerator = __webpack_require__(14);
        var regenerator_default = /*#__PURE__*/ __webpack_require__.n(regenerator);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
        var classCallCheck = __webpack_require__(92);
        var classCallCheck_default = /*#__PURE__*/ __webpack_require__.n(classCallCheck);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
        var createClass = __webpack_require__(93);
        var createClass_default = /*#__PURE__*/ __webpack_require__.n(createClass);

        // CONCATENATED MODULE: ./src/utils/uploader.js

        var uploader_IdaUploader = /*#__PURE__*/ (function () {
          function IdaUploader(settings) {
            classCallCheck_default()(this, IdaUploader);
            this.options = {
              url: '',
              formData: null,
              headers: {},
              //自定义headers
              withCredentials: false,
              //支持发送 cookie 凭证信息
              isPreview: true,
              //是否开启本地预览
              previewData: null,
              maxSize: 0,
              //允许上传的文件最大字节,0为不限制
              acceptType: [],
              //允许上传的文件类型,如'image/jpeg'
              showMsgFn: null,
              onStart: null,
              onProgress: null,
              onPreview: null,
              onSuccess: null,
              onFailure: null,
              xhrStatus: 200,
              //默认上传成功是200
              readyState: 4,
              xmlError: null,
              typeError: null,
              limitError: null,
            };
            extends_default()(this.options, settings);
            this[this.options.isPreview ? 'preview' : 'uploader']();
          }
          createClass_default()(IdaUploader, [
            {
              key: 'triggerFunc',
              value: function triggerFunc(func) {
                if (typeof func === 'function') {
                  return func.bind(this);
                } else {
                  console.warn(func + 'is not a function!');
                  return function () {};
                }
              },
            },
            {
              key: 'showMsg',
              value: function showMsg(msg) {
                if (typeof this.options.showMsgFn == 'function') {
                  this.options.showMsgFn(msg);
                } else {
                  console.log(msg);
                }
              },
            },
            {
              key: 'check',
              value: function check(file) {
                if (Array.isArray(file)) {
                  for (var key in file) {
                    if (this.options.maxSize && file[key].size > this.options.maxSize) {
                      this.showMsg(this.options.limitError);
                      return false;
                    }
                    if (this.options.acceptType.length && this.options.acceptType.indexOf(file[key].type) === -1) {
                      this.showMsg(this.options.typeError);
                      return false;
                    }
                  }
                } else {
                  if (this.options.maxSize && file.size > this.options.maxSize) {
                    this.showMsg(this.options.limitError);
                    return false;
                  }
                  if (this.options.acceptType.length && this.options.acceptType.indexOf(file.type) === -1) {
                    this.showMsg(this.options.typeError);
                    return false;
                  }
                }
                return true;
              },
            },
            {
              key: 'preview',
              value: function preview() {
                var _this = this;
                var file = Array.from(this.options.previewData);
                if (!this.check(file)) return;
                var promArray = [];
                file.map(function (item) {
                  var temp = new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.readAsDataURL(item);
                    reader.onload = function (e) {
                      _this.uploader();
                      resolve(e);
                    };
                  });
                  promArray.push(temp);
                });
                Promise.all(promArray).then(function (res) {
                  console.log(res);
                  var out = [];
                  if (res) {
                    res.map(function (item) {
                      out.push(item.target.result);
                    });
                  }
                  _this.triggerFunc.call(_this.options, _this.options.onPreview)(out);
                });
              },
            },
            {
              key: 'uploader',
              value: function uploader() {
                var _this2 = this;
                var xhr = new XMLHttpRequest();
                var options = this.options;
                var formData = options.formData;
                if (xhr.upload) {
                  xhr.upload.addEventListener(
                    'progress',
                    function (e) {
                      _this2.triggerFunc.call(options, options.onProgress)(formData, e.loaded, e.total);
                    },
                    false
                  );
                  xhr.onreadystatechange = function (e) {
                    if (xhr.readyState === 4) {
                      if (xhr.status === options.xhrState) {
                        _this2.triggerFunc.call(options, options.onSuccess)(formData, xhr.responseText);
                      } else {
                        _this2.triggerFunc.call(options, options.onFailure)(formData, xhr.responseText);
                      }
                    }
                  };
                  xhr.withCredentials = options.withCredentials;
                  xhr.open('POST', options.url, true);
                  // headers
                  for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                  }
                  this.triggerFunc.call(options, options.onStart)();
                  xhr.send(formData);
                  if (options.clearInput) {
                    options.$el.value = '';
                  }
                } else {
                  this.showMsg(this.xmlError);
                }
              },
            },
          ]);
          return IdaUploader;
        })();
        /* harmony default export */ var uploader = uploader_IdaUploader;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/uploader/uploader.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var uploadervue_type_script_lang_js_ = {
          name: 'nut-uploader',
          mixins: [mixins_locale],
          props: {
            name: {
              type: String,
              default: 'file',
            },
            url: {
              type: String,
              default: '',
            },
            multiple: {
              type: Boolean,
              default: false,
            },
            capture: {
              type: Boolean,
              default: false,
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            isPreview: {
              type: Boolean,
              default: false,
            },
            maxSize: {
              type: Number,
              default: 5242880,
            },
            acceptType: {
              type: Array,
              default: function _default() {
                return ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
              },
            },
            selfData: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            attach: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            headers: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            beforeUpload: {
              type: Function,
            },
            xhrState: {
              type: Number,
              default: 200,
            },
            clearInput: {
              type: Boolean,
              default: true,
            },
            xmlError: {
              type: String,
              default: '',
            },
            typeError: {
              type: String,
              default: '不支持上传该类型文件',
            },
            limitError: {
              type: String,
              default: '对不起，您的浏览器不支持本组件',
            },
            withCredentials: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              newdisabled: this.disabled,
            };
          },
          methods: {
            createUploaderOpts: function createUploaderOpts() {
              var _this = this;
              return {
                $el: {},
                url: this.url,
                //图片上传地址
                formData: null,
                headers: {},
                //自定义headers
                isPreview: this.isPreview,
                //是否开启本地预览
                previewData: null,
                maxSize: this.maxSize,
                //允许上传的文件最大字节
                acceptType: this.acceptType,
                //允许上传的文件类型
                xhrState: this.xhrState,
                clearInput: this.clearInput,
                withCredentials: this.withCredentials,
                //支持发送 cookie 凭证信息
                xmlError: this.xmlError || this.nutTranslate('lang.uploader.xmlError'),
                typeError: this.typeError || this.nutTranslate('lang.uploader.typeError'),
                limitError: this.limitError || this.nutTranslate('lang.uploader.limitError'),
                onStart: function onStart() {
                  _this.$emit('start');
                },
                onProgress: function onProgress(file, loaded, total) {
                  _this.$emit('progress', file, loaded, total);
                },
                onPreview: function onPreview(previewFile) {
                  _this.$emit('preview', previewFile);
                },
                onSuccess: function onSuccess(file, responseTxt) {
                  _this.$emit('success', file, responseTxt);
                },
                onFailure: function onFailure(file, responseTxt) {
                  _this.$emit('failure', file, responseTxt);
                },
              };
            },
            preventMoreClick: function preventMoreClick() {
              var _this2 = this;
              setTimeout(function () {
                _this2.newdisabled = true;
              }, 0);
              setTimeout(function () {
                _this2.newdisabled = false;
              }, 500);
            },
            uploadData: function uploadData($event) {
              var _this3 = this;
              var selfData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var fileBlob = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
              var tar = $event.target;
              if (!this.url) {
                this.$emit('showMsg', '请先配置上传url');
                this.$emit('afterChange', tar, $event);
                return;
              }
              var formData = new FormData();
              var opt = this.createUploaderOpts();
              opt.$el = tar;
              if (this.isPreview) {
                opt.previewData = tar.files;
              }
              var len = this.multiple ? tar.files.length : 1;
              if (fileBlob) {
                formData.append(tar.name, fileBlob);
              } else {
                formData.append(tar.name, tar.files[0]);
              }
              for (var _i = 0, _Object$keys = Object.keys(this.attach); _i < _Object$keys.length; _i++) {
                var key = _Object$keys[_i];
                formData.append(key, this.attach[key]);
              }
              var finialyOutData = extends_default()(this.selfData, selfData);
              if (finialyOutData) {
                for (var _key in finialyOutData) {
                  formData.append(_key, finialyOutData[_key]);
                }
              }
              opt.formData = formData;
              opt.headers = this.headers || {};
              opt.showMsgFn = function (msg) {
                _this3.$emit('showMsg', msg);
              };
              new uploader(opt);
              this.$emit('afterChange', tar, $event);
            },
            upload: function upload($event) {
              var _this4 = this;
              return asyncToGenerator_default()(
                /*#__PURE__*/ regenerator_default.a.mark(function _callee() {
                  var promise, resData;
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!(typeof _this4.beforeUpload === 'function')) {
                            _context.next = 8;
                            break;
                          }
                          promise = new Promise(function (reslove, reject) {
                            reslove(_this4.beforeUpload($event));
                          });
                          _context.next = 4;
                          return promise;
                        case 4:
                          resData = _context.sent;
                          if (typeof_default()(resData) === 'object' && typeof_default()(resData.event) === 'object') {
                            _this4.uploadData(resData.event, resData.data, resData.fileBlob);
                          } else {
                            console.warn('resData： 必须包含 event字段且为input $event 的事件对象');
                          }
                          _context.next = 9;
                          break;
                        case 8:
                          _this4.uploadData($event);
                        case 9:
                        case 'end':
                          return _context.stop();
                      }
                  }, _callee);
                })
              )();
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/uploader/uploader.vue?vue&type=script&lang=js&
        /* harmony default export */ var uploader_uploadervue_type_script_lang_js_ = uploadervue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/uploader/uploader.vue

        /* normalize component */

        var uploader_component = normalizeComponent(
          uploader_uploadervue_type_script_lang_js_,
          uploadervue_type_template_id_1c8e4744_render,
          uploadervue_type_template_id_1c8e4744_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var uploader_uploader = uploader_component.exports;
        // EXTERNAL MODULE: ./src/packages/uploader/uploader.scss
        var packages_uploader_uploader = __webpack_require__(60);

        // CONCATENATED MODULE: ./src/packages/uploader/index.js

        uploader_uploader.install = function (Vue) {
          Vue.component(uploader_uploader.name, uploader_uploader);
        };
        /* harmony default export */ var packages_uploader = uploader_uploader;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/textinput/textinput.vue?vue&type=template&id=2ea79ea3&
        var textinputvue_type_template_id_2ea79ea3_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'form',
            {
              class: ['nut-textinput', { 'nut-textinput-disabled': _vm.disabled }],
              on: {
                submit: function ($event) {
                  $event.preventDefault();
                },
              },
            },
            [
              _vm.label ? _c('span', { staticClass: 'nut-textinput-label' }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(),
              _vm._v(' '),
              _c(
                'input',
                _vm._g(
                  _vm._b(
                    {
                      ref: 'nutUiInput',
                      style: { borderWidth: _vm.hasBorder ? '' : 0, outline: _vm.outline ? '' : 'none', 'padding-right': _vm.clearBtn ? '' : '10px' },
                      attrs: { type: _vm.type, placeholder: _vm.placeholder, disabled: _vm.disabled },
                      domProps: { value: _vm.value },
                    },
                    'input',
                    _vm.$attrs,
                    false
                  ),
                  _vm.inputListeners
                )
              ),
              _vm._v(' '),
              _vm.clearBtn
                ? _c(
                    'span',
                    {
                      directives: [{ name: 'show', rawName: 'v-show', value: _vm.clearBtnShow, expression: 'clearBtnShow' }],
                      staticClass: 'nut-textinput-clear',
                      on: { click: _vm.clear },
                    },
                    [
                      !_vm.clearBtnPersonnal
                        ? _c('svg', { attrs: { version: '1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' } }, [
                            _c('path', {
                              attrs: {
                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.8 9.7c.3.3.3.8 0 1.1s-.8.3-1.1 0L8 9.1l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 5.2 6.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 6.9l1.7-1.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l1.7 1.7z',
                              },
                            }),
                          ])
                        : _vm._t('clearBtn'),
                    ],
                    2
                  )
                : _vm._e(),
            ]
          );
        };
        var textinputvue_type_template_id_2ea79ea3_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/textinput/textinput.vue?vue&type=template&id=2ea79ea3&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/textinput/textinput.vue?vue&type=script&lang=js&

        var _name$props$computed$;
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var textinputvue_type_script_lang_js_ =
          ((_name$props$computed$ = {
            name: 'nut-textinput',
            props: {
              value: {
                type: [String, Number],
                default: '',
              },
              type: {
                type: String,
                default: 'text',
              },
              label: {
                type: String,
                default: '',
              },
              placeholder: {
                type: String,
                default: '',
              },
              disabled: {
                type: Boolean,
                default: false,
              },
              hasBorder: {
                type: Boolean,
                default: true,
              },
              outline: {
                type: Boolean,
                default: false,
              },
              clearBtn: {
                type: Boolean,
                default: true,
              },
              clearBtnPersonnal: {
                type: Boolean,
                default: false,
              },
            },
            computed: {},
            data: function data() {
              return {
                clearBtnShow: false,
              };
            },
          }),
          defineProperty_default()(_name$props$computed$, 'computed', {
            inputListeners: function inputListeners() {
              var vm = this;
              return extends_default()({}, this.$listeners, {
                input: function input(event) {
                  vm.clearBtnShow = !!event.target.value;
                  vm.$emit('input', event.target.value);
                },
              });
            },
          }),
          defineProperty_default()(_name$props$computed$, 'watch', {
            value: function value(newVal, oldVal) {
              this.clearBtnShow = !!newVal;
            },
          }),
          defineProperty_default()(_name$props$computed$, 'methods', {
            clear: function clear() {
              this.$emit('input', '');
              this.clearBtnShow = false;
            },
            focus: function focus() {
              this.$nextTick(function () {
                this.$refs.nutUiInput.focus();
              });
            },
            blur: function blur() {
              this.$refs.nutUiInput.blur();
            },
          }),
          defineProperty_default()(_name$props$computed$, 'mounted', function mounted() {
            this.clearBtnShow = !!this.value;
          }),
          _name$props$computed$);
        // CONCATENATED MODULE: ./src/packages/textinput/textinput.vue?vue&type=script&lang=js&
        /* harmony default export */ var textinput_textinputvue_type_script_lang_js_ = textinputvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/textinput/textinput.vue

        /* normalize component */

        var textinput_component = normalizeComponent(
          textinput_textinputvue_type_script_lang_js_,
          textinputvue_type_template_id_2ea79ea3_render,
          textinputvue_type_template_id_2ea79ea3_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var textinput = textinput_component.exports;
        // EXTERNAL MODULE: ./src/packages/textinput/textinput.scss
        var textinput_textinput = __webpack_require__(61);

        // CONCATENATED MODULE: ./src/packages/textinput/index.js

        textinput.install = function (Vue) {
          Vue.component(textinput.name, textinput);
        };
        /* harmony default export */ var packages_textinput = textinput;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/avatar/avatar.vue?vue&type=template&id=26710d56&
        var avatarvue_type_template_id_26710d56_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { class: ['nut-avatar', 'avatar-' + _vm.size, 'avatar-' + _vm.shape], style: _vm.styles, on: { click: _vm.activeAvatar } },
            [
              _c('i', { staticClass: 'icon', style: _vm.iconStyles }),
              _vm._v(' '),
              _vm.isShowText ? _c('span', { staticClass: 'text' }, [_vm._t('default')], 2) : _vm._e(),
            ]
          );
        };
        var avatarvue_type_template_id_26710d56_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/avatar/avatar.vue?vue&type=template&id=26710d56&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/avatar/avatar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var avatarvue_type_script_lang_js_ = {
          name: 'nut-avatar',
          props: {
            size: {
              type: String,
              default: 'normal',
            },
            shape: {
              type: String,
              default: 'round',
            },
            bgColor: {
              type: String,
              default: '#eee',
            },
            bgIcon: {
              type: String,
              default:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg==',
            },
            bgImage: {
              type: String,
              default: '',
            },
          },
          computed: {
            styles: function styles() {
              return {
                backgroundImage: this.bgImage ? 'url('.concat(this.bgImage, ')') : null,
                backgroundColor: ''.concat(this.bgColor),
              };
            },
            iconStyles: function iconStyles() {
              return this.bgIcon
                ? {
                    backgroundImage: 'url('.concat(this.bgIcon, ')'),
                  }
                : null;
            },
            isShowText: function isShowText() {
              return this.$slots.default;
            },
          },
          data: function data() {
            return {};
          },
          methods: {
            activeAvatar: function activeAvatar() {
              this.$emit('active-avatar', event);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/avatar/avatar.vue?vue&type=script&lang=js&
        /* harmony default export */ var avatar_avatarvue_type_script_lang_js_ = avatarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/avatar/avatar.vue

        /* normalize component */

        var avatar_component = normalizeComponent(
          avatar_avatarvue_type_script_lang_js_,
          avatarvue_type_template_id_26710d56_render,
          avatarvue_type_template_id_26710d56_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var avatar = avatar_component.exports;
        // EXTERNAL MODULE: ./src/packages/avatar/avatar.scss
        var avatar_avatar = __webpack_require__(62);

        // CONCATENATED MODULE: ./src/packages/avatar/index.js

        avatar.install = function (Vue) {
          Vue.component(avatar.name, avatar);
        };
        /* harmony default export */ var packages_avatar = avatar;
        // CONCATENATED MODULE: ./node_modules/vue-lazyload/vue-lazyload.esm.js
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

        // see http://jsperf.com/testing-value-is-primitive/7

        var isPrimitive = function isPrimitive(value) {
          return value == null || (typeof value !== 'function' && typeof value !== 'object');
        };

        var isPrimitive$1 = /*#__PURE__*/ Object.freeze({
          __proto__: null,
          default: isPrimitive,
          __moduleExports: isPrimitive,
        });

        /*!
         * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
         *
         * Copyright (c) 2015, Jon Schlinkert.
         * Licensed under the MIT License.
         */

        var assignSymbols = function (receiver, objects) {
          if (receiver === null || typeof receiver === 'undefined') {
            throw new TypeError('expected first argument to be an object.');
          }

          if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
            return receiver;
          }

          if (typeof Object.getOwnPropertySymbols !== 'function') {
            return receiver;
          }

          var isEnumerable = Object.prototype.propertyIsEnumerable;
          var target = Object(receiver);
          var len = arguments.length,
            i = 0;

          while (++i < len) {
            var provider = Object(arguments[i]);
            var names = Object.getOwnPropertySymbols(provider);

            for (var j = 0; j < names.length; j++) {
              var key = names[j];

              if (isEnumerable.call(provider, key)) {
                target[key] = provider[key];
              }
            }
          }
          return target;
        };

        var assignSymbols$1 = /*#__PURE__*/ Object.freeze({
          __proto__: null,
          default: assignSymbols,
          __moduleExports: assignSymbols,
        });

        var vue_lazyload_esm_toString = Object.prototype.toString;

        /**
         * Get the native `typeof` a value.
         *
         * @param  {*} `val`
         * @return {*} Native javascript type
         */

        var kindOf = function kindOf(val) {
          var type = typeof val;

          // primitivies
          if (type === 'undefined') {
            return 'undefined';
          }
          if (val === null) {
            return 'null';
          }
          if (val === true || val === false || val instanceof Boolean) {
            return 'boolean';
          }
          if (type === 'string' || val instanceof String) {
            return 'string';
          }
          if (type === 'number' || val instanceof Number) {
            return 'number';
          }

          // functions
          if (type === 'function' || val instanceof Function) {
            if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
              return 'generatorfunction';
            }
            return 'function';
          }

          // array
          if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
            return 'array';
          }

          // check for instances of RegExp and Date before calling `toString`
          if (val instanceof RegExp) {
            return 'regexp';
          }
          if (val instanceof Date) {
            return 'date';
          }

          // other objects
          type = vue_lazyload_esm_toString.call(val);

          if (type === '[object RegExp]') {
            return 'regexp';
          }
          if (type === '[object Date]') {
            return 'date';
          }
          if (type === '[object Arguments]') {
            return 'arguments';
          }
          if (type === '[object Error]') {
            return 'error';
          }
          if (type === '[object Promise]') {
            return 'promise';
          }

          // buffer
          if (isBuffer(val)) {
            return 'buffer';
          }

          // es6: Map, WeakMap, Set, WeakSet
          if (type === '[object Set]') {
            return 'set';
          }
          if (type === '[object WeakSet]') {
            return 'weakset';
          }
          if (type === '[object Map]') {
            return 'map';
          }
          if (type === '[object WeakMap]') {
            return 'weakmap';
          }
          if (type === '[object Symbol]') {
            return 'symbol';
          }

          if (type === '[object Map Iterator]') {
            return 'mapiterator';
          }
          if (type === '[object Set Iterator]') {
            return 'setiterator';
          }
          if (type === '[object String Iterator]') {
            return 'stringiterator';
          }
          if (type === '[object Array Iterator]') {
            return 'arrayiterator';
          }

          // typed arrays
          if (type === '[object Int8Array]') {
            return 'int8array';
          }
          if (type === '[object Uint8Array]') {
            return 'uint8array';
          }
          if (type === '[object Uint8ClampedArray]') {
            return 'uint8clampedarray';
          }
          if (type === '[object Int16Array]') {
            return 'int16array';
          }
          if (type === '[object Uint16Array]') {
            return 'uint16array';
          }
          if (type === '[object Int32Array]') {
            return 'int32array';
          }
          if (type === '[object Uint32Array]') {
            return 'uint32array';
          }
          if (type === '[object Float32Array]') {
            return 'float32array';
          }
          if (type === '[object Float64Array]') {
            return 'float64array';
          }

          // must be a plain object
          return 'object';
        };

        /**
         * If you need to support Safari 5-7 (8-10 yr-old browser),
         * take a look at https://github.com/feross/is-buffer
         */

        function isBuffer(val) {
          return val.constructor && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
        }

        var kindOf$1 = /*#__PURE__*/ Object.freeze({
          __proto__: null,
          default: kindOf,
          __moduleExports: kindOf,
        });

        var isPrimitive$2 = (isPrimitive$1 && isPrimitive) || isPrimitive$1;

        var assignSymbols$2 = (assignSymbols$1 && assignSymbols) || assignSymbols$1;

        var typeOf = (kindOf$1 && kindOf) || kindOf$1;

        function vue_lazyload_esm_assign(target /*, objects*/) {
          target = target || {};
          var len = arguments.length,
            i = 0;
          if (len === 1) {
            return target;
          }
          while (++i < len) {
            var val = arguments[i];
            if (isPrimitive$2(target)) {
              target = val;
            }
            if (vue_lazyload_esm_isObject(val)) {
              extend(target, val);
            }
          }
          return target;
        }

        /**
         * Shallow extend
         */

        function extend(target, obj) {
          assignSymbols$2(target, obj);

          for (var key in obj) {
            if (isValidKey(key) && hasOwn(obj, key)) {
              var val = obj[key];
              if (vue_lazyload_esm_isObject(val)) {
                if (typeOf(target[key]) === 'undefined' && typeOf(val) === 'function') {
                  target[key] = val;
                }
                target[key] = vue_lazyload_esm_assign(target[key] || {}, val);
              } else {
                target[key] = val;
              }
            }
          }
          return target;
        }

        /**
         * Returns true if the object is a plain object or a function.
         */

        function vue_lazyload_esm_isObject(obj) {
          return typeOf(obj) === 'object' || typeOf(obj) === 'function';
        }

        /**
         * Returns true if the given `key` is an own property of `obj`.
         */

        function hasOwn(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }

        /**
         * Returns true if the given `key` is a valid key that can be used for assigning properties.
         */

        function isValidKey(key) {
          return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
        }

        /**
         * Expose `assign`
         */

        var assignDeep = vue_lazyload_esm_assign;

        const inBrowser = typeof window !== 'undefined' && window !== null;

        const hasIntersectionObserver = checkIntersectionObserver();

        function checkIntersectionObserver() {
          if (
            inBrowser &&
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype
          ) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
              Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function () {
                  return this.intersectionRatio > 0;
                },
              });
            }
            return true;
          }
          return false;
        }

        const modeType = {
          event: 'event',
          observer: 'observer',

          // CustomEvent polyfill for IE
        };
        const CustomEvent = (function () {
          if (!inBrowser) return;
          // not IE
          if (typeof window.CustomEvent === 'function') return window.CustomEvent;
          function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          }
          CustomEvent.prototype = window.Event.prototype;
          return CustomEvent;
        })();

        function remove(arr, item) {
          if (!arr.length) return;
          const index = arr.indexOf(item);
          if (index > -1) return arr.splice(index, 1);
        }

        function some(arr, fn) {
          let has = false;
          for (let i = 0, len = arr.length; i < len; i++) {
            if (fn(arr[i])) {
              has = true;
              break;
            }
          }
          return has;
        }

        function getBestSelectionFromSrcset(el, scale) {
          if (el.tagName !== 'IMG' || !el.getAttribute('data-srcset')) return;

          let options = el.getAttribute('data-srcset');
          const result = [];
          const container = el.parentNode;
          const containerWidth = container.offsetWidth * scale;

          let spaceIndex;
          let tmpSrc;
          let tmpWidth;

          options = options.trim().split(',');

          options.map((item) => {
            item = item.trim();
            spaceIndex = item.lastIndexOf(' ');
            if (spaceIndex === -1) {
              tmpSrc = item;
              tmpWidth = 999998;
            } else {
              tmpSrc = item.substr(0, spaceIndex);
              tmpWidth = parseInt(item.substr(spaceIndex + 1, item.length - spaceIndex - 2), 10);
            }
            result.push([tmpWidth, tmpSrc]);
          });

          result.sort(function (a, b) {
            if (a[0] < b[0]) {
              return 1;
            }
            if (a[0] > b[0]) {
              return -1;
            }
            if (a[0] === b[0]) {
              if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
                return 1;
              }
              if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
                return -1;
              }
            }
            return 0;
          });
          let bestSelectedSrc = '';
          let tmpOption;

          for (let i = 0; i < result.length; i++) {
            tmpOption = result[i];
            bestSelectedSrc = tmpOption[1];
            const next = result[i + 1];
            if (next && next[0] < containerWidth) {
              bestSelectedSrc = tmpOption[1];
              break;
            } else if (!next) {
              bestSelectedSrc = tmpOption[1];
              break;
            }
          }

          return bestSelectedSrc;
        }

        function find(arr, fn) {
          let item;
          for (let i = 0, len = arr.length; i < len; i++) {
            if (fn(arr[i])) {
              item = arr[i];
              break;
            }
          }
          return item;
        }

        const getDPR = (scale = 1) => (inBrowser ? window.devicePixelRatio || scale : scale);

        function supportWebp() {
          if (!inBrowser) return false;

          let support = true;

          try {
            const elem = document.createElement('canvas');

            if (elem.getContext && elem.getContext('2d')) {
              support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            }
          } catch (err) {
            support = false;
          }

          return support;
        }

        function throttle(action, delay) {
          let timeout = null;
          let movement = null;
          let lastRun = 0;
          let needRun = false;
          return function () {
            needRun = true;
            if (timeout) {
              return;
            }
            let elapsed = Date.now() - lastRun;
            let context = this;
            let args = arguments;
            let runCallback = function () {
              lastRun = Date.now();
              timeout = false;
              action.apply(context, args);
            };
            if (elapsed >= delay) {
              runCallback();
            } else {
              timeout = setTimeout(runCallback, delay);
            }
            if (needRun) {
              clearTimeout(movement);
              movement = setTimeout(runCallback, 2 * delay);
            }
          };
        }

        function testSupportsPassive() {
          if (!inBrowser) return;
          let support = false;
          try {
            let opts = Object.defineProperty({}, 'passive', {
              get: function () {
                support = true;
              },
            });
            window.addEventListener('test', null, opts);
          } catch (e) {}
          return support;
        }

        const supportsPassive = testSupportsPassive();

        const _ = {
          on(el, type, func, capture = false) {
            if (supportsPassive) {
              el.addEventListener(type, func, {
                capture: capture,
                passive: true,
              });
            } else {
              el.addEventListener(type, func, capture);
            }
          },
          off(el, type, func, capture = false) {
            el.removeEventListener(type, func, capture);
          },
        };

        const loadImageAsync = (item, resolve, reject) => {
          let image = new Image();
          if (!item || !item.src) {
            const err = new Error('image src is required');
            return reject(err);
          }

          image.src = item.src;
          if (item.cors) {
            image.crossOrigin = item.cors;
          }

          image.onload = function () {
            resolve({
              naturalHeight: image.naturalHeight,
              naturalWidth: image.naturalWidth,
              src: image.src,
            });
          };

          image.onerror = function (e) {
            reject(e);
          };
        };

        const style = (el, prop) => {
          return typeof getComputedStyle !== 'undefined' ? getComputedStyle(el, null).getPropertyValue(prop) : el.style[prop];
        };

        const overflow = (el) => {
          return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x');
        };

        const scrollParent = (el) => {
          if (!inBrowser) return;
          if (!(el instanceof HTMLElement)) {
            return window;
          }

          let parent = el;

          while (parent) {
            if (parent === document.body || parent === document.documentElement) {
              break;
            }

            if (!parent.parentNode) {
              break;
            }

            if (/(scroll|auto)/.test(overflow(parent))) {
              return parent;
            }

            parent = parent.parentNode;
          }

          return window;
        };

        function isObject$1(obj) {
          return obj !== null && typeof obj === 'object';
        }

        function ObjectKeys(obj) {
          if (!(obj instanceof Object)) return [];
          if (Object.keys) {
            return Object.keys(obj);
          } else {
            let keys = [];
            for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                keys.push(key);
              }
            }
            return keys;
          }
        }

        function ArrayFrom(arrLike) {
          let len = arrLike.length;
          const list = [];
          for (let i = 0; i < len; i++) {
            list.push(arrLike[i]);
          }
          return list;
        }

        function noop() {}

        class ImageCache {
          constructor({ max }) {
            this.options = {
              max: max || 100,
            };
            this._caches = [];
          }

          has(key) {
            return this._caches.indexOf(key) > -1;
          }

          add(key) {
            if (this.has(key)) return;
            this._caches.push(key);
            if (this._caches.length > this.options.max) {
              this.free();
            }
          }

          free() {
            this._caches.shift();
          }
        }

        // el: {
        //     state,
        //     src,
        //     error,
        //     loading
        // }

        class ReactiveListener {
          constructor({ el, src, error, loading, bindType, $parent, options, cors, elRenderer, imageCache }) {
            this.el = el;
            this.src = src;
            this.error = error;
            this.loading = loading;
            this.bindType = bindType;
            this.attempt = 0;
            this.cors = cors;

            this.naturalHeight = 0;
            this.naturalWidth = 0;

            this.options = options;

            this.rect = null;

            this.$parent = $parent;
            this.elRenderer = elRenderer;
            this._imageCache = imageCache;
            this.performanceData = {
              init: Date.now(),
              loadStart: 0,
              loadEnd: 0,
            };

            this.filter();
            this.initState();
            this.render('loading', false);
          }

          /*
           * init listener state
           * @return
           */
          initState() {
            if ('dataset' in this.el) {
              this.el.dataset.src = this.src;
            } else {
              this.el.setAttribute('data-src', this.src);
            }

            this.state = {
              loading: false,
              error: false,
              loaded: false,
              rendered: false,
            };
          }

          /*
           * record performance
           * @return
           */
          record(event) {
            this.performanceData[event] = Date.now();
          }

          /*
           * update image listener data
           * @param  {String} image uri
           * @param  {String} loading image uri
           * @param  {String} error image uri
           * @return
           */
          update({ src, loading, error }) {
            const oldSrc = this.src;
            this.src = src;
            this.loading = loading;
            this.error = error;
            this.filter();
            if (oldSrc !== this.src) {
              this.attempt = 0;
              this.initState();
            }
          }

          /*
           * get el node rect
           * @return
           */
          getRect() {
            this.rect = this.el.getBoundingClientRect();
          }

          /*
           *  check el is in view
           * @return {Boolean} el is in view
           */
          checkInView() {
            this.getRect();
            return (
              this.rect.top < window.innerHeight * this.options.preLoad &&
              this.rect.bottom > this.options.preLoadTop &&
              this.rect.left < window.innerWidth * this.options.preLoad &&
              this.rect.right > 0
            );
          }

          /*
           * listener filter
           */
          filter() {
            ObjectKeys(this.options.filter).map((key) => {
              this.options.filter[key](this, this.options);
            });
          }

          /*
           * render loading first
           * @params cb:Function
           * @return
           */
          renderLoading(cb) {
            this.state.loading = true;
            loadImageAsync(
              {
                src: this.loading,
                cors: this.cors,
              },
              (data) => {
                this.render('loading', false);
                this.state.loading = false;
                cb();
              },
              () => {
                // handler `loading image` load failed
                cb();
                this.state.loading = false;
                if (!this.options.silent) console.warn(`VueLazyload log: load failed with loading image(${this.loading})`);
              }
            );
          }

          /*
           * try load image and  render it
           * @return
           */
          load(onFinish = noop) {
            if (this.attempt > this.options.attempt - 1 && this.state.error) {
              if (!this.options.silent) console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`);
              onFinish();
              return;
            }
            if (this.state.rendered && this.state.loaded) return;
            if (this._imageCache.has(this.src)) {
              this.state.loaded = true;
              this.render('loaded', true);
              this.state.rendered = true;
              return onFinish();
            }

            this.renderLoading(() => {
              this.attempt++;

              this.options.adapter['beforeLoad'] && this.options.adapter['beforeLoad'](this, this.options);
              this.record('loadStart');

              loadImageAsync(
                {
                  src: this.src,
                  cors: this.cors,
                },
                (data) => {
                  this.naturalHeight = data.naturalHeight;
                  this.naturalWidth = data.naturalWidth;
                  this.state.loaded = true;
                  this.state.error = false;
                  this.record('loadEnd');
                  this.render('loaded', false);
                  this.state.rendered = true;
                  this._imageCache.add(this.src);
                  onFinish();
                },
                (err) => {
                  !this.options.silent && console.error(err);
                  this.state.error = true;
                  this.state.loaded = false;
                  this.render('error', false);
                }
              );
            });
          }

          /*
           * render image
           * @param  {String} state to render // ['loading', 'src', 'error']
           * @param  {String} is form cache
           * @return
           */
          render(state, cache) {
            this.elRenderer(this, state, cache);
          }

          /*
           * output performance data
           * @return {Object} performance data
           */
          performance() {
            let state = 'loading';
            let time = 0;

            if (this.state.loaded) {
              state = 'loaded';
              time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000;
            }

            if (this.state.error) state = 'error';

            return {
              src: this.src,
              state,
              time,
            };
          }

          /*
           * $destroy
           * @return
           */
          $destroy() {
            this.el = null;
            this.src = null;
            this.error = null;
            this.loading = null;
            this.bindType = null;
            this.attempt = 0;
          }
        }

        const DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        const DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];
        const DEFAULT_OBSERVER_OPTIONS = {
          rootMargin: '0px',
          threshold: 0,
        };

        function Lazy(Vue) {
          return class Lazy {
            constructor({
              preLoad,
              error,
              throttleWait,
              preLoadTop,
              dispatchEvent,
              loading,
              attempt,
              silent = true,
              scale,
              listenEvents,
              hasbind,
              filter,
              adapter,
              observer,
              observerOptions,
            }) {
              this.version = '"1.3.4"';
              this.mode = modeType.event;
              this.ListenerQueue = [];
              this.TargetIndex = 0;
              this.TargetQueue = [];
              this.options = {
                silent: silent,
                dispatchEvent: !!dispatchEvent,
                throttleWait: throttleWait || 200,
                preLoad: preLoad || 1.3,
                preLoadTop: preLoadTop || 0,
                error: error || DEFAULT_URL,
                loading: loading || DEFAULT_URL,
                attempt: attempt || 3,
                scale: scale || getDPR(scale),
                ListenEvents: listenEvents || DEFAULT_EVENTS,
                hasbind: false,
                supportWebp: supportWebp(),
                filter: filter || {},
                adapter: adapter || {},
                observer: !!observer,
                observerOptions: observerOptions || DEFAULT_OBSERVER_OPTIONS,
              };
              this._initEvent();
              this._imageCache = new ImageCache({ max: 200 });
              this.lazyLoadHandler = throttle(this._lazyLoadHandler.bind(this), this.options.throttleWait);

              this.setMode(this.options.observer ? modeType.observer : modeType.event);
            }

            /**
             * update config
             * @param  {Object} config params
             * @return
             */
            config(options = {}) {
              assignDeep(this.options, options);
            }

            /**
             * output listener's load performance
             * @return {Array}
             */
            performance() {
              let list = [];

              this.ListenerQueue.map((item) => {
                list.push(item.performance());
              });

              return list;
            }

            /*
             * add lazy component to queue
             * @param  {Vue} vm lazy component instance
             * @return
             */
            addLazyBox(vm) {
              this.ListenerQueue.push(vm);
              if (inBrowser) {
                this._addListenerTarget(window);
                this._observer && this._observer.observe(vm.el);
                if (vm.$el && vm.$el.parentNode) {
                  this._addListenerTarget(vm.$el.parentNode);
                }
              }
            }

            /*
             * add image listener to queue
             * @param  {DOM} el
             * @param  {object} binding vue directive binding
             * @param  {vnode} vnode vue directive vnode
             * @return
             */
            add(el, binding, vnode) {
              if (some(this.ListenerQueue, (item) => item.el === el)) {
                this.update(el, binding);
                return Vue.nextTick(this.lazyLoadHandler);
              }

              let { src, loading, error, cors } = this._valueFormatter(binding.value);

              Vue.nextTick(() => {
                src = getBestSelectionFromSrcset(el, this.options.scale) || src;
                this._observer && this._observer.observe(el);

                const container = Object.keys(binding.modifiers)[0];
                let $parent;

                if (container) {
                  $parent = vnode.context.$refs[container];
                  // if there is container passed in, try ref first, then fallback to getElementById to support the original usage
                  $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
                }

                if (!$parent) {
                  $parent = scrollParent(el);
                }

                const newListener = new ReactiveListener({
                  bindType: binding.arg,
                  $parent,
                  el,
                  loading,
                  error,
                  src,
                  cors,
                  elRenderer: this._elRenderer.bind(this),
                  options: this.options,
                  imageCache: this._imageCache,
                });

                this.ListenerQueue.push(newListener);

                if (inBrowser) {
                  this._addListenerTarget(window);
                  this._addListenerTarget($parent);
                }

                this.lazyLoadHandler();
                Vue.nextTick(() => this.lazyLoadHandler());
              });
            }

            /**
             * update image src
             * @param  {DOM} el
             * @param  {object} vue directive binding
             * @return
             */
            update(el, binding, vnode) {
              let { src, loading, error } = this._valueFormatter(binding.value);
              src = getBestSelectionFromSrcset(el, this.options.scale) || src;

              const exist = find(this.ListenerQueue, (item) => item.el === el);
              if (!exist) {
                this.add(el, binding, vnode);
              } else {
                exist.update({
                  src,
                  loading,
                  error,
                });
              }
              if (this._observer) {
                this._observer.unobserve(el);
                this._observer.observe(el);
              }
              this.lazyLoadHandler();
              Vue.nextTick(() => this.lazyLoadHandler());
            }

            /**
             * remove listener form list
             * @param  {DOM} el
             * @return
             */
            remove(el) {
              if (!el) return;
              this._observer && this._observer.unobserve(el);
              const existItem = find(this.ListenerQueue, (item) => item.el === el);
              if (existItem) {
                this._removeListenerTarget(existItem.$parent);
                this._removeListenerTarget(window);
                remove(this.ListenerQueue, existItem);
                existItem.$destroy();
              }
            }

            /*
             * remove lazy components form list
             * @param  {Vue} vm Vue instance
             * @return
             */
            removeComponent(vm) {
              if (!vm) return;
              remove(this.ListenerQueue, vm);
              this._observer && this._observer.unobserve(vm.el);
              if (vm.$parent && vm.$el.parentNode) {
                this._removeListenerTarget(vm.$el.parentNode);
              }
              this._removeListenerTarget(window);
            }

            setMode(mode) {
              if (!hasIntersectionObserver && mode === modeType.observer) {
                mode = modeType.event;
              }

              this.mode = mode; // event or observer

              if (mode === modeType.event) {
                if (this._observer) {
                  this.ListenerQueue.forEach((listener) => {
                    this._observer.unobserve(listener.el);
                  });
                  this._observer = null;
                }

                this.TargetQueue.forEach((target) => {
                  this._initListen(target.el, true);
                });
              } else {
                this.TargetQueue.forEach((target) => {
                  this._initListen(target.el, false);
                });
                this._initIntersectionObserver();
              }
            }

            /*
             *** Private functions ***
             */

            /*
             * add listener target
             * @param  {DOM} el listener target
             * @return
             */
            _addListenerTarget(el) {
              if (!el) return;
              let target = find(this.TargetQueue, (target) => target.el === el);
              if (!target) {
                target = {
                  el: el,
                  id: ++this.TargetIndex,
                  childrenCount: 1,
                  listened: true,
                };
                this.mode === modeType.event && this._initListen(target.el, true);
                this.TargetQueue.push(target);
              } else {
                target.childrenCount++;
              }
              return this.TargetIndex;
            }

            /*
             * remove listener target or reduce target childrenCount
             * @param  {DOM} el or window
             * @return
             */
            _removeListenerTarget(el) {
              this.TargetQueue.forEach((target, index) => {
                if (target.el === el) {
                  target.childrenCount--;
                  if (!target.childrenCount) {
                    this._initListen(target.el, false);
                    this.TargetQueue.splice(index, 1);
                    target = null;
                  }
                }
              });
            }

            /*
             * add or remove eventlistener
             * @param  {DOM} el DOM or Window
             * @param  {boolean} start flag
             * @return
             */
            _initListen(el, start) {
              this.options.ListenEvents.forEach((evt) => _[start ? 'on' : 'off'](el, evt, this.lazyLoadHandler));
            }

            _initEvent() {
              this.Event = {
                listeners: {
                  loading: [],
                  loaded: [],
                  error: [],
                },
              };

              this.$on = (event, func) => {
                if (!this.Event.listeners[event]) this.Event.listeners[event] = [];
                this.Event.listeners[event].push(func);
              };

              this.$once = (event, func) => {
                const vm = this;
                function on() {
                  vm.$off(event, on);
                  func.apply(vm, arguments);
                }
                this.$on(event, on);
              };

              this.$off = (event, func) => {
                if (!func) {
                  if (!this.Event.listeners[event]) return;
                  this.Event.listeners[event].length = 0;
                  return;
                }
                remove(this.Event.listeners[event], func);
              };

              this.$emit = (event, context, inCache) => {
                if (!this.Event.listeners[event]) return;
                this.Event.listeners[event].forEach((func) => func(context, inCache));
              };
            }

            /**
             * find nodes which in viewport and trigger load
             * @return
             */
            _lazyLoadHandler() {
              const freeList = [];
              this.ListenerQueue.forEach((listener, index) => {
                if (!listener.el || !listener.el.parentNode) {
                  freeList.push(listener);
                }
                const catIn = listener.checkInView();
                if (!catIn) return;
                listener.load();
              });
              freeList.forEach((item) => {
                remove(this.ListenerQueue, item);
                item.$destroy();
              });
            }
            /**
             * init IntersectionObserver
             * set mode to observer
             * @return
             */
            _initIntersectionObserver() {
              if (!hasIntersectionObserver) return;
              this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions);
              if (this.ListenerQueue.length) {
                this.ListenerQueue.forEach((listener) => {
                  this._observer.observe(listener.el);
                });
              }
            }

            /**
             * init IntersectionObserver
             * @return
             */
            _observerHandler(entries, observer) {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  this.ListenerQueue.forEach((listener) => {
                    if (listener.el === entry.target) {
                      if (listener.state.loaded) return this._observer.unobserve(listener.el);
                      listener.load();
                    }
                  });
                }
              });
            }

            /**
             * set element attribute with image'url and state
             * @param  {object} lazyload listener object
             * @param  {string} state will be rendered
             * @param  {bool} inCache  is rendered from cache
             * @return
             */
            _elRenderer(listener, state, cache) {
              if (!listener.el) return;
              const { el, bindType } = listener;

              let src;
              switch (state) {
                case 'loading':
                  src = listener.loading;
                  break;
                case 'error':
                  src = listener.error;
                  break;
                default:
                  src = listener.src;
                  break;
              }

              if (bindType) {
                el.style[bindType] = 'url("' + src + '")';
              } else if (el.getAttribute('src') !== src) {
                el.setAttribute('src', src);
              }

              el.setAttribute('lazy', state);

              this.$emit(state, listener, cache);
              this.options.adapter[state] && this.options.adapter[state](listener, this.options);

              if (this.options.dispatchEvent) {
                const event = new CustomEvent(state, {
                  detail: listener,
                });
                el.dispatchEvent(event);
              }
            }

            /**
             * generate loading loaded error image url
             * @param {string} image's src
             * @return {object} image's loading, loaded, error url
             */
            _valueFormatter(value) {
              let src = value;
              let loading = this.options.loading;
              let error = this.options.error;

              // value is object
              if (isObject$1(value)) {
                if (!value.src && !this.options.silent) console.error('Vue Lazyload warning: miss src with ' + value);
                src = value.src;
                loading = value.loading || this.options.loading;
                error = value.error || this.options.error;
              }
              return {
                src,
                loading,
                error,
              };
            }
          };
        }

        Lazy.install = (Vue, options = {}) => {
          const LazyClass = Lazy(Vue);
          const lazy = new LazyClass(options);

          const isVue2 = Vue.version.split('.')[0] === '2';
          if (isVue2) {
            Vue.directive('lazy', {
              bind: lazy.add.bind(lazy),
              update: lazy.update.bind(lazy),
              componentUpdated: lazy.lazyLoadHandler.bind(lazy),
              unbind: lazy.remove.bind(lazy),
            });
          } else {
            Vue.directive('lazy', {
              bind: lazy.lazyLoadHandler.bind(lazy),
              update(newValue, oldValue) {
                assignDeep(this.vm.$refs, this.vm.$els);
                lazy.add(
                  this.el,
                  {
                    modifiers: this.modifiers || {},
                    arg: this.arg,
                    value: newValue,
                    oldValue: oldValue,
                  },
                  {
                    context: this.vm,
                  }
                );
              },
              unbind() {
                lazy.remove(this.el);
              },
            });
          }
        };

        const LazyComponent = (lazy) => {
          return {
            props: {
              tag: {
                type: String,
                default: 'div',
              },
            },
            render(h) {
              return h(this.tag, null, this.show ? this.$slots.default : null);
            },
            data() {
              return {
                el: null,
                state: {
                  loaded: false,
                },
                rect: {},
                show: false,
              };
            },
            mounted() {
              this.el = this.$el;
              lazy.addLazyBox(this);
              lazy.lazyLoadHandler();
            },
            beforeDestroy() {
              lazy.removeComponent(this);
            },
            methods: {
              getRect() {
                this.rect = this.$el.getBoundingClientRect();
              },
              checkInView() {
                this.getRect();
                return (
                  inBrowser &&
                  this.rect.top < window.innerHeight * lazy.options.preLoad &&
                  this.rect.bottom > 0 &&
                  this.rect.left < window.innerWidth * lazy.options.preLoad &&
                  this.rect.right > 0
                );
              },
              load() {
                this.show = true;
                this.state.loaded = true;
                this.$emit('show', this);
              },
              destroy() {
                return this.$destroy;
              },
            },
          };
        };

        LazyComponent.install = function (Vue, options = {}) {
          const LazyClass = Lazy(Vue);
          const lazy = new LazyClass(options);
          Vue.component('lazy-component', LazyComponent(lazy));
        };

        class LazyContainerMananger {
          constructor({ lazy }) {
            this.lazy = lazy;
            lazy.lazyContainerMananger = this;
            this._queue = [];
          }

          bind(el, binding, vnode) {
            const container = new LazyContainer({ el, binding, vnode, lazy: this.lazy });
            this._queue.push(container);
          }

          update(el, binding, vnode) {
            const container = find(this._queue, (item) => item.el === el);
            if (!container) return;
            container.update({ el, binding, vnode });
          }

          unbind(el, binding, vnode) {
            const container = find(this._queue, (item) => item.el === el);
            if (!container) return;
            container.clear();
            remove(this._queue, container);
          }
        }

        const vue_lazyload_esm_defaultOptions = {
          selector: 'img',
        };

        class LazyContainer {
          constructor({ el, binding, vnode, lazy }) {
            this.el = null;
            this.vnode = vnode;
            this.binding = binding;
            this.options = {};
            this.lazy = lazy;

            this._queue = [];
            this.update({ el, binding });
          }

          update({ el, binding }) {
            this.el = el;
            this.options = assignDeep({}, vue_lazyload_esm_defaultOptions, binding.value);

            const imgs = this.getImgs();
            imgs.forEach((el) => {
              this.lazy.add(
                el,
                assignDeep({}, this.binding, {
                  value: {
                    src: 'dataset' in el ? el.dataset.src : el.getAttribute('data-src'),
                    error: ('dataset' in el ? el.dataset.error : el.getAttribute('data-error')) || this.options.error,
                    loading: ('dataset' in el ? el.dataset.loading : el.getAttribute('data-loading')) || this.options.loading,
                  },
                }),
                this.vnode
              );
            });
          }

          getImgs() {
            return ArrayFrom(this.el.querySelectorAll(this.options.selector));
          }

          clear() {
            const imgs = this.getImgs();
            imgs.forEach((el) => this.lazy.remove(el));

            this.vnode = null;
            this.binding = null;
            this.lazy = null;
          }
        }

        LazyContainer.install = (Vue, options = {}) => {
          const LazyClass = Lazy(Vue);
          const lazy = new LazyClass(options);
          const lazyContainer = new LazyContainer({ lazy });

          const isVue2 = Vue.version.split('.')[0] === '2';
          if (isVue2) {
            Vue.directive('lazy-container', {
              bind: lazyContainer.bind.bind(lazyContainer),
              componentUpdated: lazyContainer.update.bind(lazyContainer),
              unbind: lazyContainer.unbind.bind(lazyContainer),
            });
          } else {
            Vue.directive('lazy-container', {
              update(newValue, oldValue) {
                lazyContainer.update(
                  this.el,
                  {
                    modifiers: this.modifiers || {},
                    arg: this.arg,
                    value: newValue,
                    oldValue: oldValue,
                  },
                  {
                    context: this.vm,
                  }
                );
              },
              unbind() {
                lazyContainer.unbind(this.el);
              },
            });
          }
        };

        const LazyImage = (lazyManager) => {
          return {
            props: {
              src: [String, Object],
              tag: {
                type: String,
                default: 'img',
              },
            },
            render(h) {
              return h(
                this.tag,
                {
                  attrs: {
                    src: this.renderSrc,
                  },
                },
                this.$slots.default
              );
            },
            data() {
              return {
                el: null,
                options: {
                  src: '',
                  error: '',
                  loading: '',
                  attempt: lazyManager.options.attempt,
                },
                state: {
                  loaded: false,
                  error: false,
                  attempt: 0,
                },
                rect: {},
                renderSrc: '',
              };
            },
            watch: {
              src() {
                this.init();
                lazyManager.addLazyBox(this);
                lazyManager.lazyLoadHandler();
              },
            },
            created() {
              this.init();
              this.renderSrc = this.options.loading;
            },
            mounted() {
              this.el = this.$el;
              lazyManager.addLazyBox(this);
              lazyManager.lazyLoadHandler();
            },
            beforeDestroy() {
              lazyManager.removeComponent(this);
            },
            methods: {
              init() {
                const { src, loading, error } = lazyManager._valueFormatter(this.src);
                this.state.loaded = false;
                this.options.src = src;
                this.options.error = error;
                this.options.loading = loading;
                this.renderSrc = this.options.loading;
              },
              getRect() {
                this.rect = this.$el.getBoundingClientRect();
              },
              checkInView() {
                this.getRect();
                return (
                  inBrowser &&
                  this.rect.top < window.innerHeight * lazyManager.options.preLoad &&
                  this.rect.bottom > 0 &&
                  this.rect.left < window.innerWidth * lazyManager.options.preLoad &&
                  this.rect.right > 0
                );
              },
              load(onFinish = noop) {
                if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
                  if (!lazyManager.options.silent)
                    console.log(`VueLazyload log: ${this.options.src} tried too more than ${this.options.attempt} times`);
                  onFinish();
                  return;
                }
                const src = this.options.src;
                loadImageAsync(
                  { src },
                  ({ src }) => {
                    this.renderSrc = src;
                    this.state.loaded = true;
                  },
                  (e) => {
                    this.state.attempt++;
                    this.renderSrc = this.options.error;
                    this.state.error = true;
                  }
                );
              },
            },
          };
        };

        LazyImage.install = (Vue, options = {}) => {
          const LazyClass = Lazy(Vue);
          const lazy = new LazyClass(options);
          Vue.component('lazy-image', LazyImage(lazy));
        };

        var vue_lazyload_esm_index = {
          /*
           * install function
           * @param  {Vue} Vue
           * @param  {object} options  lazyload options
           */
          install(Vue, options = {}) {
            const LazyClass = Lazy(Vue);
            const lazy = new LazyClass(options);
            const lazyContainer = new LazyContainerMananger({ lazy });

            const isVue2 = Vue.version.split('.')[0] === '2';

            Vue.prototype.$Lazyload = lazy;

            if (options.lazyComponent) {
              Vue.component('lazy-component', LazyComponent(lazy));
            }

            if (options.lazyImage) {
              Vue.component('lazy-image', LazyImage(lazy));
            }

            if (isVue2) {
              Vue.directive('lazy', {
                bind: lazy.add.bind(lazy),
                update: lazy.update.bind(lazy),
                componentUpdated: lazy.lazyLoadHandler.bind(lazy),
                unbind: lazy.remove.bind(lazy),
              });
              Vue.directive('lazy-container', {
                bind: lazyContainer.bind.bind(lazyContainer),
                componentUpdated: lazyContainer.update.bind(lazyContainer),
                unbind: lazyContainer.unbind.bind(lazyContainer),
              });
            } else {
              Vue.directive('lazy', {
                bind: lazy.lazyLoadHandler.bind(lazy),
                update(newValue, oldValue) {
                  assignDeep(this.vm.$refs, this.vm.$els);
                  lazy.add(
                    this.el,
                    {
                      modifiers: this.modifiers || {},
                      arg: this.arg,
                      value: newValue,
                      oldValue: oldValue,
                    },
                    {
                      context: this.vm,
                    }
                  );
                },
                unbind() {
                  lazy.remove(this.el);
                },
              });

              Vue.directive('lazy-container', {
                update(newValue, oldValue) {
                  lazyContainer.update(
                    this.el,
                    {
                      modifiers: this.modifiers || {},
                      arg: this.arg,
                      value: newValue,
                      oldValue: oldValue,
                    },
                    {
                      context: this.vm,
                    }
                  );
                },
                unbind() {
                  lazyContainer.unbind(this.el);
                },
              });
            }
          },
        };

        /* harmony default export */ var vue_lazyload_esm = vue_lazyload_esm_index;

        // EXTERNAL MODULE: ./src/packages/lazyload/lazyload.scss
        var lazyload = __webpack_require__(128);

        // CONCATENATED MODULE: ./src/packages/lazyload/index.js

        vue_lazyload_esm.name = 'vue-lazyload';

        /* harmony default export */ var packages_lazyload = vue_lazyload_esm;
        // EXTERNAL MODULE: ./src/packages/textbox/textbox.scss
        var textbox = __webpack_require__(63);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/textbox/textbox.vue?vue&type=template&id=90a8327c&
        var textboxvue_type_template_id_90a8327c_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-textbox' }, [
            _c(
              'div',
              {
                staticClass: 'txt-area',
                class: { error: _vm.errorState, 'num-none': _vm.limitShow == false, disabled: _vm.disabled },
                style: { background: _vm.textBgColor },
              },
              [
                _c('textarea', {
                  directives: [{ name: 'model', rawName: 'v-model', value: _vm.currentValue, expression: 'currentValue' }],
                  style: { height: _vm.txtAreaHeight + 'px' },
                  attrs: { placeholder: _vm.placeText, disabled: _vm.disabled, maxlength: _vm.iptMaxlength },
                  domProps: { value: _vm.currentValue },
                  on: {
                    input: [
                      function ($event) {
                        if ($event.target.composing) {
                          return;
                        }
                        _vm.currentValue = $event.target.value;
                      },
                      _vm.txtIptLength,
                    ],
                  },
                }),
                _vm._v(' '),
                _c('span', { directives: [{ name: 'show', rawName: 'v-show', value: _vm.limitShow, expression: 'limitShow' }] }, [
                  _vm._v(_vm._s(_vm.txtNum) + '/' + _vm._s(_vm.maxNum)),
                ]),
              ]
            ),
          ]);
        };
        var textboxvue_type_template_id_90a8327c_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/textbox/textbox.vue?vue&type=template&id=90a8327c&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/textbox/textbox.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var textboxvue_type_script_lang_js_ = {
          name: 'nut-textbox',
          props: {
            value: {
              type: [String, Number],
              default: '',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            maxNum: {
              type: [String, Number],
              default: 50,
            },
            placeText: {
              type: String,
              default: '请您在此输入',
            },
            txtAreaH: {
              type: [String, Number],
              default: '50',
            },
            switchMax: {
              type: Boolean,
              default: false,
            },
            textBgColor: {
              type: String,
              default: '#fff',
            },
            limitShow: {
              type: Boolean,
              default: true,
            },
          },
          data: function data() {
            return {
              errorState: false,
              txtNum: 0,
            };
          },
          mounted: function mounted() {},
          computed: {
            currentValue: {
              get: function get() {
                this.txtNum = this.value.length;
                if (this.txtNum > this.maxNum) {
                  this.txtNum = this.maxNum;
                  return this.value.substr(0, this.maxNum);
                } else {
                  return this.value;
                }
              },
              set: function set(val) {},
            },
            txtAreaHeight: function txtAreaHeight() {
              var txtAreaH;
              txtAreaH = this.txtAreaH;
              return txtAreaH;
            },
            iptMaxlength: function iptMaxlength() {
              var maxlength;
              if (this.switchMax) {
                maxlength = this.maxNum;
              }
              return maxlength;
            },
          },
          methods: {
            txtIptLength: function txtIptLength(event) {
              var data = event.target.value;
              var txtLength = data.length;
              this.txtNum = txtLength;
              if (txtLength > this.maxNum) {
                this.errorState = true;
                this.$emit('errorFunc');
              } else {
                this.errorState = false;
              }
              this.$emit('inputFunc', data);
              this.$emit('input', data);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/textbox/textbox.vue?vue&type=script&lang=js&
        /* harmony default export */ var textbox_textboxvue_type_script_lang_js_ = textboxvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/textbox/textbox.vue

        /* normalize component */

        var textbox_component = normalizeComponent(
          textbox_textboxvue_type_script_lang_js_,
          textboxvue_type_template_id_90a8327c_render,
          textboxvue_type_template_id_90a8327c_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var textbox_textbox = textbox_component.exports;
        // CONCATENATED MODULE: ./src/packages/textbox/index.js

        textbox_textbox.install = function (Vue) {
          Vue.component(textbox_textbox.name, textbox_textbox);
        };
        /* harmony default export */ var packages_textbox = textbox_textbox;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/elevator/elevator.vue?vue&type=template&id=7b961c41&
        var elevatorvue_type_template_id_7b961c41_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _vm.dataArray.length > 0
            ? _c('div', { staticClass: 'nut-elevator', style: { height: _vm.wrapHeight + 'px' } }, [
                _c(
                  'div',
                  { staticClass: 'nut-main', style: { height: _vm.wrapHeight + 'px' } },
                  [
                    _c(
                      'ul',
                      { staticClass: 'nut-elevator-ul', attrs: { id: 'nut-elevator-ul' } },
                      _vm._l(_vm.dataArray, function (item) {
                        return _c('li', { key: item.title, staticClass: 'nut-list-title' }, [
                          _c('h3', { staticClass: 'nut-list-h', attrs: { id: item.title } }, [_vm._v(_vm._s(item.title))]),
                          _vm._v(' '),
                          _c(
                            'ul',
                            { staticClass: 'nut-people-list' },
                            _vm._l(item.list, function (list, idx) {
                              return _c(
                                'li',
                                {
                                  key: idx,
                                  staticClass: 'nut-list-name',
                                  attrs: { id: list.id ? list.id : 'list' + item.title + idx },
                                  on: {
                                    click: function ($event) {
                                      return _vm.clickList(list, item);
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(list.name))]
                              );
                            }),
                            0
                          ),
                        ]);
                      }),
                      0
                    ),
                    _vm._v(' '),
                    _c(
                      'ul',
                      {
                        staticClass: 'nut-elevator-nav',
                        attrs: { id: 'nut-elevator-nav' },
                        on: {
                          touchmove: function ($event) {
                            return _vm.onPointerMove($event);
                          },
                          touchstart: function ($event) {
                            return _vm.onPointerMove($event);
                          },
                          touchend: function ($event) {
                            return _vm.onPointerEnd($event);
                          },
                        },
                      },
                      _vm._l(_vm.dataArray, function (item, index) {
                        return _c(
                          'li',
                          {
                            key: index,
                            staticClass: 'nut-nav-list',
                            style: { height: _vm.navListHeight + 'px', lineHeight: _vm.navListHeight + 'px' },
                            attrs: { id: 'nav' + index },
                            on: {
                              click: function ($event) {
                                return _vm.clickNav(item.title, index);
                              },
                            },
                          },
                          [_vm._v(_vm._s(item.title))]
                        );
                      }),
                      0
                    ),
                    _vm._v(' '),
                    _vm.showIndicator
                      ? [
                          _c(
                            'div',
                            {
                              directives: [{ name: 'show', rawName: 'v-show', value: _vm.currBox, expression: 'currBox' }],
                              staticClass: 'nut-big-box',
                            },
                            [_vm._v('\n        ' + _vm._s(_vm.currTitle) + '\n      ')]
                          ),
                        ]
                      : _vm._e(),
                  ],
                  2
                ),
              ])
            : _vm._e();
        };
        var elevatorvue_type_template_id_7b961c41_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/elevator/elevator.vue?vue&type=template&id=7b961c41&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/elevator/elevator.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var elevatorvue_type_script_lang_js_ = {
          name: 'nut-elevator',
          props: {
            otherHeight: {
              type: Number,
              default: 60,
            },
            dataArray: {
              type: Array,
              required: true,
            },
            navHeight: {
              type: Number,
              default: 40,
            },
            hiddenTime: {
              type: Number,
              default: 10,
            },
            showIndicator: {
              type: Boolean,
              default: true,
            },
            initIndex: {
              type: Number,
              default: 0,
            },
          },
          computed: {
            navListHeight: function navListHeight() {
              return this.navHeight;
            },
          },
          data: function data() {
            return {
              wrapHeight: '40',
              currTitle: '',
              currBox: false,
            };
          },
          watch: {
            dataArray: function dataArray(val) {
              var _this = this;
              if (val.length > 0) {
                this.$nextTick(function () {
                  _this.initPage();
                });
              }
            },
          },
          mounted: function mounted() {
            if (this.dataArray.length > 0) {
              this.initPage();
            }
          },
          methods: {
            initPage: function initPage() {
              var innerHeight = document.documentElement.clientHeight;
              this.wrapHeight = innerHeight - this.otherHeight;
              var initIndex = this.dataArray[this.initIndex].title;
              document.getElementById(initIndex).scrollIntoView();
            },
            getStyle: function getStyle(element, attr) {
              if (element.currentStyle) {
                return element.currentStyle[attr];
              } else {
                return getComputedStyle(element, false)[attr];
              }
            },
            getFontSize: function getFontSize() {
              var htmlDom = document.getElementsByTagName('html')[0];
              var bili = this.getStyle(htmlDom, 'fontSize');
              return bili.substring(0, bili.length - 2);
            },
            clickNav: function clickNav(title, index) {
              var _this2 = this;
              this.currBox = true;
              this.currTitle = title;
              setTimeout(function () {
                _this2.currBox = false;
              }, this.hiddenTime);
              this.moveFun(title, index);
            },
            clickList: function clickList(list, item) {
              this.$emit('clickList', list, item);
            },
            moveFun: function moveFun(title, index) {
              var titleBox = document.getElementById(title);
              titleBox.scrollIntoView();
            },
            onPointerEnd: function onPointerEnd(e) {
              var _this3 = this;
              var dataArrayLength = this.dataArray.length;
              var navHeight = document.getElementById('nut-elevator-nav').clientHeight;
              var navTop = document.getElementById('nut-elevator-nav').offsetTop;
              var navOffsetTop = navTop - navHeight / 2; //nav距离顶部的距离
              var eTop = e.type.indexOf('touch') !== -1 ? e.changedTouches[0].clientY : e.clientY;
              var navIndex = parseInt((eTop - navOffsetTop) / this.navHeight);
              setTimeout(function () {
                _this3.currBox = false;
              }, this.hiddenTime);
              if (navIndex < dataArrayLength && navIndex >= 0) {
                this.$emit('clickNav', this.dataArray[navIndex].title, navIndex);
              }
            },
            onPointerMove: function onPointerMove(e) {
              e.preventDefault();
              var dataArrayLength = this.dataArray.length;
              var navHeight = document.getElementById('nut-elevator-nav').clientHeight;
              var navTop = document.getElementById('nut-elevator-nav').offsetTop;
              var navOffsetTop = navTop - navHeight / 2; //nav距离顶部的距离
              var eTop = e.type.indexOf('touch') !== -1 ? e.touches[0].clientY : e.clientY;
              var navIndex = parseInt((eTop - navOffsetTop) / this.navHeight);
              if (navIndex < dataArrayLength && navIndex >= 0) {
                this.moveFun(this.dataArray[navIndex].title, navIndex);
                this.currBox = true;
                this.currTitle = this.dataArray[navIndex].title;
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/elevator/elevator.vue?vue&type=script&lang=js&
        /* harmony default export */ var elevator_elevatorvue_type_script_lang_js_ = elevatorvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/elevator/elevator.vue

        /* normalize component */

        var elevator_component = normalizeComponent(
          elevator_elevatorvue_type_script_lang_js_,
          elevatorvue_type_template_id_7b961c41_render,
          elevatorvue_type_template_id_7b961c41_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var elevator = elevator_component.exports;
        // EXTERNAL MODULE: ./src/packages/elevator/elevator.scss
        var elevator_elevator = __webpack_require__(64);

        // CONCATENATED MODULE: ./src/packages/elevator/index.js

        elevator.install = function (Vue) {
          Vue.component(elevator.name, elevator);
        };
        /* harmony default export */ var packages_elevator = elevator;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/popup/popup.vue?vue&type=template&id=7fc90bec&
        var popupvue_type_template_id_7fc90bec_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'transition',
            {
              attrs: { name: _vm.transitionName },
              on: {
                'after-enter': function ($event) {
                  return _vm.$emit('opened');
                },
                'after-leave': function ($event) {
                  return _vm.$emit('closed');
                },
              },
            },
            [
              _c(
                'div',
                {
                  directives: [{ name: 'show', rawName: 'v-show', value: _vm.value, expression: 'value' }],
                  ref: 'popupBox',
                  staticClass: 'popup-box',
                  class: ['popup-' + _vm.position, { round: _vm.round }],
                  style: { animationDuration: _vm.transitionDuration },
                  on: {
                    click: function ($event) {
                      return _vm.$emit('click', this);
                    },
                  },
                },
                [
                  _vm.showSlot ? _vm._t('default') : _vm._e(),
                  _vm._v(' '),
                  _vm.closeable
                    ? _c('icon', {
                        staticClass: 'nutui-popup__close-icon',
                        class: 'nutui-popup__close-icon--' + _vm.closeIconPosition,
                        attrs: { type: _vm.closeIcon, size: '12px' },
                        nativeOn: {
                          click: function ($event) {
                            return _vm.$emit('input', false);
                          },
                        },
                      })
                    : _vm._e(),
                ],
                2
              ),
            ]
          );
        };
        var popupvue_type_template_id_7fc90bec_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/popup/popup.vue?vue&type=template&id=7fc90bec&

        // CONCATENATED MODULE: ./src/mixins/touch.js

        var MIN_DISTANCE = 10;
        function getDirection(x, y) {
          if (x > y && x > MIN_DISTANCE) {
            return 'horizontal';
          }
          if (y > x && y > MIN_DISTANCE) {
            return 'vertical';
          }
          return '';
        }
        var TouchMixin = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
          data: function data() {
            return {
              direction: '',
            };
          },
          methods: {
            touchStart: function touchStart(event) {
              this.resetTouchStatus();
              this.startX = event.touches[0].clientX;
              this.startY = event.touches[0].clientY;
            },
            touchMove: function touchMove(event) {
              var touch = event.touches[0];
              this.deltaX = touch.clientX - this.startX;
              this.deltaY = touch.clientY - this.startY;
              this.offsetX = Math.abs(this.deltaX);
              this.offsetY = Math.abs(this.deltaY);
              this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
            },
            resetTouchStatus: function resetTouchStatus() {
              this.direction = '';
              this.deltaX = 0;
              this.deltaY = 0;
              this.offsetX = 0;
              this.offsetY = 0;
            },
          },
        });
        /* harmony default export */ var touch = TouchMixin;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/popup/overlay/overlay.vue?vue&type=template&id=6ac1460a&
        var overlayvue_type_template_id_6ac1460a_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('transition', { attrs: { name: 'popup-fade' } }, [
            _c('div', {
              directives: [{ name: 'show', rawName: 'v-show', value: _vm.value, expression: 'value' }],
              staticClass: 'popup-bg nut-mask',
              class: _vm.overlayClass,
              style: Object.assign({}, { animationDuration: _vm.duration + 's' }, _vm.overlayStyle, { zIndex: _vm.zIndex }),
              on: {
                touchmove: function ($event) {
                  $event.stopPropagation();
                  return _vm.touchmove($event);
                },
              },
            }),
          ]);
        };
        var overlayvue_type_template_id_6ac1460a_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/popup/overlay/overlay.vue?vue&type=template&id=6ac1460a&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/popup/overlay/overlay.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var overlayProps = {
          value: {
            type: Boolean,
            default: false,
          },
          overlay: {
            type: Boolean,
            default: true,
          },
          lockScroll: {
            type: Boolean,
            default: true,
          },
          duration: {
            type: Number,
            default: 0.3,
          },
          closeOnClickOverlay: {
            type: Boolean,
            default: true,
          },
          overlayClass: {
            type: String,
            default: '',
          },
          overlayStyle: {
            type: Object,
            default: function _default() {},
          },
          zIndex: {
            type: Number,
          },
        };

        /* harmony default export */ var overlayvue_type_script_lang_js_ = {
          name: 'nut-popup-overlay',
          props: overlayProps,
          methods: {
            touchmove: function touchmove(e) {
              if (this.lockScroll) {
                e.preventDefault();
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/popup/overlay/overlay.vue?vue&type=script&lang=js&
        /* harmony default export */ var overlay_overlayvue_type_script_lang_js_ = overlayvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/popup/overlay/overlay.vue

        /* normalize component */

        var overlay_component = normalizeComponent(
          overlay_overlayvue_type_script_lang_js_,
          overlayvue_type_template_id_6ac1460a_render,
          overlayvue_type_template_id_6ac1460a_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var overlay = overlay_component.exports;
        // CONCATENATED MODULE: ./src/packages/popup/overlay/overlay-manager.js

        function overlay_manager_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function overlay_manager_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? overlay_manager_ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : overlay_manager_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }

        var modalStack = [];
        var _zIndex = 2000;
        var overlay_manager_overlay;
        var overlayManager = {
          lockCount: 0,
          get topStack() {
            return modalStack[modalStack.length - 1];
          },
          getZIndex: function getZIndex(id) {
            if (!id) return ++_zIndex;
            var overlay = modalStack.find(function (res) {
              return res.config.id === id;
            });
            if (overlay) {
              return overlay.config.zIndex;
            } else {
              return ++_zIndex;
            }
          },
          updateOverlay: function updateOverlay() {
            var clickHandle = overlayManager.clickHandle,
              topStack = overlayManager.topStack;
            if (!overlay_manager_overlay) {
              overlay_manager_overlay = mount(overlay, {
                nativeOn: {
                  click: clickHandle,
                },
              });
            }
            if (topStack) {
              var vm = topStack.vm,
                config = topStack.config;
              var el = vm.$el;
              el && el.parentNode && el.parentNode.nodeType !== 11
                ? el.parentNode.appendChild(overlay_manager_overlay.$el)
                : document.body.appendChild(overlay_manager_overlay.$el);
              extends_default()(overlay_manager_overlay, config, {
                value: true,
              });
            } else {
              overlay_manager_overlay.value = false;
            }
          },
          //打开遮罩层
          openModal: function openModal(vm, config) {
            var zIndex = config.zIndex,
              duration = config.duration,
              overlayClass = config.overlayClass,
              overlayStyle = config.overlayStyle,
              id = config.id;
            modalStack.push({
              vm: vm,
              config: {
                id: id,
                zIndex: zIndex,
                duration: duration,
                overlayClass: overlayClass,
                overlayStyle: overlayStyle,
              },
            });
            overlayManager.updateOverlay();
          },
          clickHandle: function clickHandle() {
            var topStack = overlayManager.topStack;

            //防止多次点击
            if (modalStack.length && topStack.vm.closeOnClickOverlay) {
              topStack.vm.$emit('click-overlay');
              topStack.vm.close();
            }
          },
          closeOverlay: function closeOverlay(vm) {
            if (modalStack.length) {
              if (overlayManager.topStack.vm === vm) {
                modalStack.pop();
                overlayManager.updateOverlay();
              } else {
                modalStack = modalStack.filter(function (item) {
                  return item.vm !== vm;
                });
              }
            }
          },
        };
        var overlay_manager_overlayProps = {
          value: {
            type: Boolean,
            default: false,
          },
          overlay: {
            type: Boolean,
            default: true,
          },
          lockScroll: {
            type: Boolean,
            default: true,
          },
          duration: {
            type: Number,
            default: 0.3,
          },
          closeOnClickOverlay: {
            type: Boolean,
            default: true,
          },
          overlayClass: {
            type: String,
            default: '',
          },
          overlayStyle: {
            type: Object,
            default: function _default() {
              return null;
            },
          },
          zIndex: {
            type: Number,
          },
        };
        function mount(Component, data) {
          var instance = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a({
            props: Component.props,
            render: function render(h) {
              return h(
                Component,
                overlay_manager_objectSpread(
                  {
                    props: this.$props,
                  },
                  data
                )
              );
            },
          }).$mount();
          return instance;
        }
        function getProps() {
          var _this = this;
          if (!this) return {};
          var obj = {};
          Object.keys(overlay_manager_overlayProps).forEach(function (res) {
            obj[res] = _this[res];
          });
          return obj;
        }

        // CONCATENATED MODULE: ./src/utils/event.js
        var passiveSupported = false;
        try {
          var event_options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            },
          });
          window.addEventListener('test', null, event_options);
        } catch (err) {}
        function on(target, event, handler) {
          var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          target.addEventListener(
            event,
            handler,
            passiveSupported
              ? {
                  capture: false,
                  passive: passive,
                }
              : false
          );
        }
        function off(target, event, handler) {
          target.removeEventListener(event, handler);
        }
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/popup/popup.vue?vue&type=script&lang=js&

        function popupvue_type_script_lang_js_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function popupvue_type_script_lang_js_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? popupvue_type_script_lang_js_ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : popupvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var overflowScrollReg = /scroll|auto/i;
        var popupProps = {
          id: {
            type: String | Number,
            default: '',
          },
          position: {
            type: String,
            default: 'center',
          },
          transition: String,
          closeable: {
            type: Boolean,
            default: false,
          },
          closeIconPosition: {
            type: String,
            default: 'top-right',
          },
          closeIcon: {
            type: String,
            default: 'cross',
          },
          closeOnClickOverlay: {
            type: Boolean,
            default: true,
          },
          destroyOnClose: {
            type: Boolean,
            default: false,
          },
          getContainer: String,
          round: {
            type: Boolean,
            default: false,
          },
        };
        /* harmony default export */ var popupvue_type_script_lang_js_ = {
          name: 'nut-popup',
          mixins: [touch],
          components: {
            icon: icon,
          },
          props: popupvue_type_script_lang_js_objectSpread(popupvue_type_script_lang_js_objectSpread({}, overlayProps), popupProps),
          created: function created() {
            this.transition ? (this.transitionName = this.transition) : (this.transitionName = 'popup-slide-'.concat(this.position));
          },
          mounted: function mounted() {
            if (this.value) {
              this.open();
            }
            this.portal();
          },
          beforeDestroy: function beforeDestroy() {
            if (this.value) {
              this.close();
            }
          },
          activated: function activated() {
            if (this.keepAlive) {
              this.$emit('input', true);
              this.keepAlive = false;
            }
          },
          deactivated: function deactivated() {
            if (this.value) {
              this.close();
              this.keepAlive = true;
            }
          },
          watch: {
            value: function value(val) {
              var type = val ? 'open' : 'close';
              this[type]();
            },
            position: function position(val) {
              val === 'center' ? (this.transitionName = 'popup-fade') : (this.transitionName = 'popup-slide-'.concat(this.position));
            },
            getContainer: 'portal',
            overlay: 'renderOverlay',
          },
          data: function data() {
            return {
              showSlot: true,
              transitionName: 'popup-fade-center',
              overlayInstant: null,
            };
          },
          computed: {
            transitionDuration: function transitionDuration() {
              return this.duration ? this.duration + 's' : 'initial';
            },
          },
          methods: {
            open: function open() {
              if (this.opened) {
                return;
              }
              if (this.destroyOnClose) {
                this.showSlot = true;
              }
              this.opened = true;
              this.$emit('open');
              var duration = this.duration,
                overlayClass = this.overlayClass,
                overlayStyle = this.overlayStyle,
                lockScroll = this.lockScroll,
                closeOnClickOverlay = this.closeOnClickOverlay;
              var config = {
                id: this.id,
                zIndex: this.zIndex ? this.zIndex : overlayManager.getZIndex(this.id),
                duration: duration,
                overlayClass: overlayClass,
                overlayStyle: overlayStyle,
                lockScroll: lockScroll,
                closeOnClickOverlay: closeOnClickOverlay,
              };
              this.renderOverlay(config);
              if (this.lockScroll) {
                on(document, 'touchstart', this.touchStart);
                on(document, 'touchmove', this.onTouchMove);
                if (!overlayManager.lockCount) {
                  document.body.classList.add('nut-overflow-hidden');
                }
                overlayManager.lockCount++;
              }
              this.$el.style.zIndex = this.zIndex ? this.zIndex + 1 : overlayManager.getZIndex();
            },
            renderOverlay: function renderOverlay(config) {
              if (!this.value) {
                return;
              }
              if (this.overlay) {
                overlayManager.openModal(this, config);
              } else {
                overlayManager.closeOverlay(this);
              }
            },
            onTouchMove: function onTouchMove(event) {
              this.touchMove(event);
              var el = this.getScroller(event.target);
              var _ref = el ? el : this.$el,
                scrollHeight = _ref.scrollHeight,
                offsetHeight = _ref.offsetHeight,
                scrollTop = _ref.scrollTop;
              if ((this.deltaY > 0 && scrollTop === 0) || (this.deltaY < 0 && scrollTop + offsetHeight >= scrollHeight)) {
                if (event.cancelable) {
                  event.preventDefault();
                }
              }
            },
            getScroller: function getScroller(el) {
              var node = el;
              while (node && node.tagName !== 'HTML' && node.nodeType === 1) {
                var _window$getComputedSt = window.getComputedStyle(node),
                  overflowY = _window$getComputedSt.overflowY;
                if (overflowScrollReg.test(overflowY)) {
                  return node;
                }
                node = node.parentNode;
              }
            },
            close: function close() {
              var _this = this;
              if (!this.opened) {
                return;
              }
              this.$emit('close');
              this.opened = false;
              if (this.lockScroll) {
                overlayManager.lockCount--;
                off(document, 'touchstart', this.touchStart);
                off(document, 'touchmove', this.onTouchMove);
                if (!overlayManager.lockCount) {
                  document.body.classList.remove('nut-overflow-hidden');
                }
              }
              if (this.destroyOnClose) {
                setTimeout(function () {
                  _this.showSlot = false;
                }, this.duration * 1000);
              }
              overlayManager.closeOverlay(this);
              this.$emit('input', false);
            },
            getElement: function getElement(selector) {
              return document.querySelector(selector);
            },
            portal: function portal() {
              var getContainer = this.getContainer;
              var el = this.$el;
              var container;
              if (getContainer) {
                container = this.getElement(getContainer);
              } else {
                return;
              }
              if (container && container !== el.parentNode) {
                container.appendChild(el);
              }
            },
          },
        };

        // CONCATENATED MODULE: ./src/packages/popup/popup.vue?vue&type=script&lang=js&
        /* harmony default export */ var popup_popupvue_type_script_lang_js_ = popupvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/popup/popup.vue

        /* normalize component */

        var popup_component = normalizeComponent(
          popup_popupvue_type_script_lang_js_,
          popupvue_type_template_id_7fc90bec_render,
          popupvue_type_template_id_7fc90bec_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var popup = popup_component.exports;
        // EXTERNAL MODULE: ./src/packages/popup/popup.scss
        var popup_popup = __webpack_require__(13);

        // CONCATENATED MODULE: ./src/packages/popup/index.js

        popup.install = function (Vue) {
          Vue.component(popup.name, popup);
        };
        /* harmony default export */ var packages_popup = popup;

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/leftslip/leftslip.vue?vue&type=template&id=f0919bdc&
        var leftslipvue_type_template_id_f0919bdc_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-leftslip' }, [
            _c('div', { ref: 'slipItem', staticClass: 'nut-leftslip-item', class: { 'leftslip-open': _vm.isOpen } }, [
              _c(
                'div',
                {
                  staticClass: 'nut-leftslip-item-main',
                  on: {
                    touchstart: function ($event) {
                      return _vm.touchStart($event);
                    },
                    touchmove: function ($event) {
                      return _vm.touchMove($event);
                    },
                    touchend: function ($event) {
                      return _vm.touchEnd($event);
                    },
                  },
                },
                [_vm._t('slip-main')],
                2
              ),
              _vm._v(' '),
              _c('div', { ref: 'right', staticClass: 'nut-leftslip-item-btn' }, [_vm._t('slipbtns')], 2),
            ]),
          ]);
        };
        var leftslipvue_type_template_id_f0919bdc_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/leftslip/leftslip.vue?vue&type=template&id=f0919bdc&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/leftslip/leftslip.vue?vue&type=script&lang=js&
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === 'number')) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var leftslipvue_type_script_lang_js_ = {
          name: 'nut-leftslip',
          props: {
            isClickBack: {
              type: Boolean,
              default: true,
            },
            rightWidth: {
              type: [Number, String],
              default: '0.8',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              startX: 0,
              startY: 0,
              moveX: 0,
              moveY: 0,
              buttonWidth: 0,
              pageWidth: null,
              startPos: 0,
              startLeft: 0,
              startRightW: 0,
              isOpen: false,
              scrollTop: 0,
              oldScrollTop: 0,
              lock: false,
            };
          },
          watch: {
            // scrollTop(newValue, oldValue) {
            //     setTimeout(() => {
            //         if (newValue == window.scrollY) { //延时执行后当newValue等于window.scrollY，代表滚动结束
            //             console.log('滚动结束');
            //             this.oldScrollTop = newValue; //每次滚动结束后都要给oldScrollTop赋值
            //             this.lock = false
            //         };
            //     }, 20); //必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
            //     if (this.oldScrollTop == oldValue) { //每次滚动开始时oldScrollTop与oldValue相等
            //         console.log('滚动开始');
            //         this.lock = true;
            //     }
            // }
          },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              var _iterator = _createForOfIteratorHelper(_this.$slots.slipbtns),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var slot = _step.value;
                  _this.buttonWidth = _this.buttonWidth + slot.elm.offsetWidth;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            this.pageWidth = document.documentElement.clientWidth;
            this.sliderEle = this.$refs.slipItem;
            // this.handleScroll();
            // document.addEventListener('touchstart', this.touchStart, false);
          },
          beforeDestroy: function beforeDestroy() {
            // 移除监听
            window.removeEventListener('scroll', this.handleScroll());
          },
          methods: {
            handleRestet: function handleRestet() {
              var slip = document.getElementsByClassName('leftslip-open');
              if (slip) {
                this.restSlide();
              }
            },
            handleScroll: function handleScroll() {
              var _this2 = this;
              window.addEventListener('scroll', function () {
                _this2.scrollTop = window.scrollY;
              });
            },
            touchStart: function touchStart(e) {
              if (this.disabled) return false;
              var parentElement = e.currentTarget.parentElement;
              var slip = [];
              slip = document.getElementsByClassName('leftslip-open');
              if (slip) {
                if (parentElement.dataset.type == 1) return;
                this.restSlide();
              }
              if (e.touches.length == 1) {
                this.startX = e.touches[0].pageX;
                this.startY = e.touches[0].pageY;
              }
              var transform = this.sliderEle.style.transform;
              this.startLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0);
              this.startRightW = this.startLeft < 0 ? Number(this.$refs.right.style.width.split('px')[0]) : 0;
            },
            touchMove: function touchMove(e) {
              if (this.disabled) return false;
              var parentElement = e.currentTarget.parentElement;
              var disX = e.touches[0].pageX - this.startX; // >0 右滑，<0 左滑
              var disY = e.touches[0].pageY - this.startY;
              if (e.touches.length == 1) {
                if (Math.abs(disY) < 5) {
                  // console.log(disX, disY)
                  if (disX > 0 || (disX > 0 && this.startLeft >= 0)) {
                    //禁止右滑
                    return false;
                  } else {
                    this.doSlide(-this.buttonWidth, true); // 最大滑动距离为右侧宽度
                  }
                }
              }
            },
            touchEnd: function touchEnd(e) {
              if (this.disabled) return false;
              var parentElement = e.currentTarget.parentElement;
              var disX = e.changedTouches[0].pageX - this.startX; // >0 右滑，<0 左滑
              var distance;
              // console.log(1, disX, this.isClickBack)
              if (!this.isClickBack && disX === 0) {
                // 点击时不收起右侧
                // console.log(2, disX, this.isClickBack)
                return false;
              } else {
                if (-disX > 50) {
                  // 向左滑动超过阙值时,右侧滑出固定距离
                  distance = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth;
                  parentElement.className = 'nut-leftslip-item leftslip-open';
                  parentElement.dataset.type = 1;
                } else {
                  // 向左滑动未超过阙值，或向右滑动时，回原位
                  distance = 0;
                  parentElement.className = 'nut-leftslip-item';
                  parentElement.dataset.type = 0;
                }
                // console.log(3, disX, this.isClickBack)
                this.doSlide(-distance, true);
              }
            },
            openSlide: function openSlide() {
              this.isOpen = true;
              var distance = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth;
              this.doSlide(-distance, true);
            },
            doSlide: function doSlide(distance) {
              var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              this.sliderEle.style.transform = 'translateX('.concat(distance, 'px)');
              this.$refs.right.style.width = -distance + 'px';
              this.sliderEle.style.transition = animate ? 'transform .5s' : 'initial';
              this.$refs.right.style.transition = animate ? 'width .5s' : 'initial';
            },
            restSlide: function restSlide() {
              var listItems = document.querySelectorAll('.nut-leftslip-item.leftslip-open');

              // 复位
              for (var i = 0; i < listItems.length; i++) {
                listItems[i].style = 'transform:translateX(0px)';
                listItems[i].dataset.type = 0; //是否展开标志位默认0，左滑展开为1，右滑隐藏为0
                listItems[i].className = 'nut-leftslip-item';
                this.isOpen = false;
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/leftslip/leftslip.vue?vue&type=script&lang=js&
        /* harmony default export */ var leftslip_leftslipvue_type_script_lang_js_ = leftslipvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/leftslip/leftslip.vue

        /* normalize component */

        var leftslip_component = normalizeComponent(
          leftslip_leftslipvue_type_script_lang_js_,
          leftslipvue_type_template_id_f0919bdc_render,
          leftslipvue_type_template_id_f0919bdc_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var leftslip = leftslip_component.exports;
        // EXTERNAL MODULE: ./src/packages/leftslip/leftslip.scss
        var leftslip_leftslip = __webpack_require__(65);

        // CONCATENATED MODULE: ./src/packages/leftslip/index.js

        leftslip.install = function (Vue) {
          Vue.component(leftslip.name, leftslip);
        };
        /* harmony default export */ var packages_leftslip = leftslip;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabselect/tabselect.vue?vue&type=template&id=67057514&
        var tabselectvue_type_template_id_67057514_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _vm.list.length
            ? _c(
                'div',
                { staticClass: 'nut-tabselect' },
                [
                  _c(
                    'nut-popup',
                    {
                      style: { height: '457px' },
                      attrs: { round: '', closeable: '', position: 'bottom', 'lock-scroll': _vm.isLockBgScroll },
                      model: {
                        value: _vm.isShow,
                        callback: function ($$v) {
                          _vm.isShow = $$v;
                        },
                        expression: 'isShow',
                      },
                    },
                    [
                      _c('div', { staticClass: 'nut-tabselect-main-title', domProps: { innerHTML: _vm._s(_vm.mainTitle) } }),
                      _vm._v(' '),
                      _c(
                        'nut-tab',
                        { attrs: { 'init-data': _vm.list }, on: { 'tab-switch': _vm.tabSwitchOuter } },
                        _vm._l(_vm.list, function (value, idx) {
                          return _c(
                            'nut-tab-panel',
                            { key: value.tabTitle, attrs: { tabTitle: value.tabTitle } },
                            [
                              _c('div', { staticClass: 'nut-tabselect-sub-title', domProps: { innerHTML: _vm._s(_vm.subTitle) } }),
                              _vm._v(' '),
                              _c(
                                'nut-tab',
                                {
                                  staticClass: 'nut-tab-inner',
                                  attrs: { positionNav: 'left', 'init-data': value.children, defIndex: _vm.defIndex },
                                  on: { 'tab-switch': _vm.tabSwitchInner },
                                },
                                _vm._l(value.children, function (item, index) {
                                  return _c('nut-tab-panel', { key: item.tabTitle, attrs: { tabTitle: item.tabTitle } }, [
                                    _c(
                                      'ul',
                                      [
                                        item.content
                                          ? _vm._l(item.content, function (sitem, sIndex) {
                                              return _c(
                                                'li',
                                                {
                                                  key: sitem,
                                                  staticClass: 'nut-tab-panel-list',
                                                  class: {
                                                    'nut-tab-panel-list-active': _vm.isActive(idx, index, sIndex),
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.choose(idx, index, sIndex, item, sitem);
                                                    },
                                                  },
                                                },
                                                [_vm._v('\n                  ' + _vm._s(sitem) + '\n                ')]
                                              );
                                            })
                                          : _vm.defaultContent
                                          ? _vm._l(_vm.defaultContent, function (sitem, sIndex) {
                                              return _c(
                                                'li',
                                                {
                                                  key: sitem,
                                                  staticClass: 'nut-tab-panel-list',
                                                  class: {
                                                    'nut-tab-panel-list-active': _vm.isActive(idx, index, sIndex),
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.choose(idx, index, sIndex, item, sitem);
                                                    },
                                                  },
                                                },
                                                [_vm._v('\n                  ' + _vm._s(sitem) + '\n                ')]
                                              );
                                            })
                                          : _vm._e(),
                                      ],
                                      2
                                    ),
                                  ]);
                                }),
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                      _vm._v(' '),
                      _c('div', { staticClass: 'nut-tabselect-btn' }, [
                        _c('a', { attrs: { href: 'javascript:;' }, on: { click: _vm.clickHandler } }, [_vm._v('确定')]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e();
        };
        var tabselectvue_type_template_id_67057514_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/tabselect/tabselect.vue?vue&type=template&id=67057514&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabselect/tabselect.vue?vue&type=script&lang=js&

        var tabselectvue_type_script_lang_js_components;
        function tabselectvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) {
          var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = tabselectvue_type_script_lang_js_unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === 'number')
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function tabselectvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return tabselectvue_type_script_lang_js_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return tabselectvue_type_script_lang_js_arrayLikeToArray(o, minLen);
        }
        function tabselectvue_type_script_lang_js_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var tabselectvue_type_script_lang_js_ = {
          name: 'nut-tabselect',
          props: {
            mainTitle: {
              type: String,
              default: '',
            },
            subTitle: {
              type: String,
              default: '',
            },
            isLockBgScroll: {
              type: Boolean,
              default: true,
            },
            defaultContent: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            tabList: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            show: {
              type: Boolean,
              default: false,
            },
            multiple: {
              type: Boolean,
              default: false,
            },
            max: {
              type: Number,
              default: Infinity,
            },
            isDefaultSelected: {
              type: Boolean,
              default: false,
            },
          },
          data: function data() {
            return {
              isShow: false,
              level0: 0,
              level1: new Set([0]),
              level2: this.isDefaultSelected ? new Set(['0-0']) : new Set(),
              allChoose: this.getText(0, 0, this.isDefaultSelected ? 0 : null),
              list: [],
              defIndex: 0,
            };
          },
          components:
            ((tabselectvue_type_script_lang_js_components = {}),
            defineProperty_default()(tabselectvue_type_script_lang_js_components, tab.name, tab),
            defineProperty_default()(tabselectvue_type_script_lang_js_components, popup.name, popup),
            tabselectvue_type_script_lang_js_components),
          watch: {
            show: function show(val) {
              this.isShow = val;
            },
            isShow: function isShow(val) {
              if (!val) {
                this.$emit('close');
              }
            },
            tabList: {
              handler: function handler(val) {
                this.list = val;
                this.level0 = 0;
                this.level1 = new Set([0]);
                this.level2 = this.isDefaultSelected ? new Set(['0-0']) : new Set();
                this.allChoose = this.getText(0, 0, this.isDefaultSelected ? 0 : null);
                this.emit();
              },
              deep: true,
            },
          },
          mounted: function mounted() {
            this.list = this.tabList;
            this.allChoose = this.getText(0, 0, this.isDefaultSelected ? 0 : null);
            this.emit();
          },
          methods: {
            emit: function emit() {
              this.$emit(
                'choose',
                (this.list && this.list[this.level0] && this.list[this.level0].tabTitle) || '',
                (this.allChoose && toConsumableArray_default()(this.allChoose)) || []
              );
            },
            getText: function getText(idx, index, sIndex) {
              if (sIndex === null) {
                return null;
              }
              var tab = (this.list && this.list[idx] && this.list[idx].children[index]) || {};
              var subTit = tab.tabTitle;
              var content = (tab.content && tab.content[sIndex]) || this.defaultContent[sIndex];
              return new Set([
                {
                  subTit: subTit,
                  content: content,
                },
              ]);
            },
            tabSwitchOuter: function tabSwitchOuter(index, event) {
              this.defIndex = 0;
              this.level0 = index;
              this.level1 = new Set([0]);
              this.level2 = this.isDefaultSelected ? new Set(['0-0']) : new Set();
              this.allChoose = this.getText(index, 0, this.isDefaultSelected ? 0 : null);
              this.emit();
            },
            tabSwitchInner: function tabSwitchInner(index, event) {
              this.defIndex = index;
              if (!this.multiple) {
                this.level1 = new Set([index]);
              } else {
                this.level1.add(index);
              }
            },
            unChoose: function unChoose(index, sIndex) {
              this.level2.delete(index + '-' + sIndex);
              this.level2 = new Set(this.level2);
            },
            choose: function choose(idx, index, sIndex) {
              var _this = this;
              if (this.multiple && this.isActive(idx, index, sIndex)) {
                this.unChoose(index, sIndex);
                this.getText(idx, index, sIndex).forEach(function (o) {
                  var _iterator = tabselectvue_type_script_lang_js_createForOfIteratorHelper(_this.allChoose.values()),
                    _step;
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      var indexdel = _step.value;
                      if (JSON.stringify(o) === JSON.stringify(indexdel)) {
                        _this.allChoose.delete(indexdel);
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                });
                this.emit();
                return;
              }
              if (!this.multiple) {
                this.level2 = new Set([index + '-' + sIndex]);
                this.allChoose = this.getText(idx, index, sIndex);
              } else {
                if (this.max !== Infinity && this.max === this.level2.size) {
                  return;
                }
                this.level2 = new Set(toConsumableArray_default()(this.level2.add(index + '-' + sIndex)));
                if (this.allChoose) {
                  var _this$allChoose;
                  (_this$allChoose = this.allChoose).add.apply(_this$allChoose, toConsumableArray_default()(this.getText(idx, index, sIndex)));
                } else {
                  this.allChoose = this.getText(idx, index, sIndex);
                }
              }
              this.emit();
            },
            clickHandler: function clickHandler(event) {
              this.$emit('onOkBtn', event);
              this.isShow = false;
            },
            isActive: function isActive(idx, index, sIndex) {
              if (idx === this.level0 && this.level1.has(index) && this.level2.has(index + '-' + sIndex)) {
                return true;
              }
              return false;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/tabselect/tabselect.vue?vue&type=script&lang=js&
        /* harmony default export */ var tabselect_tabselectvue_type_script_lang_js_ = tabselectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/tabselect/tabselect.vue

        /* normalize component */

        var tabselect_component = normalizeComponent(
          tabselect_tabselectvue_type_script_lang_js_,
          tabselectvue_type_template_id_67057514_render,
          tabselectvue_type_template_id_67057514_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var tabselect = tabselect_component.exports;
        // EXTERNAL MODULE: ./src/packages/tabselect/tabselect.scss
        var tabselect_tabselect = __webpack_require__(66);

        // CONCATENATED MODULE: ./src/packages/tabselect/index.js

        tabselect.install = function (Vue) {
          Vue.component(tabselect.name, tabselect);
        };
        /* harmony default export */ var packages_tabselect = tabselect;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/luckdraw/luckdraw.vue?vue&type=template&id=c2015698&
        var luckdrawvue_type_template_id_c2015698_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { ref: 'luckdraw', staticClass: 'nut-luckdraw', style: { width: _vm.luckWidth, height: _vm.luckHeight } }, [
            _c('div', { staticClass: 'lucktable', style: { transform: _vm.rotateAngle, transition: _vm.rotateTransition } }, [
              _c('canvas', { ref: 'canvas', attrs: { id: 'canvas' } }, [_vm._v('\n      浏览器版本过低\n    ')]),
              _vm._v(' '),
              _c(
                'div',
                { staticClass: 'prize' },
                _vm._l(_vm.prizeList, function (item, index) {
                  return _c('div', { key: index, staticClass: 'item', style: _vm.getRotateAngle(index) }, [_vm._t('item', null, { item: item })], 2);
                }),
                0
              ),
            ]),
          ]);
        };
        var luckdrawvue_type_template_id_c2015698_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/luckdraw/luckdraw.vue?vue&type=template&id=c2015698&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/luckdraw/luckdraw.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var luckdrawvue_type_script_lang_js_ = {
          name: 'nut-luckdraw',
          mounted: function mounted() {
            this.init();
          },
          props: {
            luckWidth: {
              required: true,
            },
            luckHeight: {
              required: true,
            },
            prizeList: {
              required: true,
            },
            turnsNumber: {
              default: 5,
            },
            styleOpt: {
              default: function _default() {
                return {
                  // 每一块扇形的背景色,默认值,可通过父组件来改变
                  prizeBgColors: [
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                    'rgb(255, 231, 149)',
                    'rgb(255, 247, 223)',
                  ],
                  // 每一块扇形的外边框颜色,默认值,可通过父组件来改变
                  borderColor: '#ff9800',
                };
              },
            },
            turnsTime: {
              // 转动需要持续的时间(秒)
              default: 5,
            },
          },
          watch: {
            prizeList: function prizeList(newVal, oldVal) {
              this.init();
            },
          },
          data: function data() {
            return {
              winningPrize: 0,
              // 开始转动的角度
              startRotateDegree: 0,
              // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
              rotateAngle: 0,
              //`rotate(30deg)`
              rotateTransition: '',
            };
          },
          methods: {
            // 根据index计算每一格要旋转的角度的样式
            getRotateAngle: function getRotateAngle(index) {
              var angle = (360 / this.prizeList.length) * index + 180 / this.prizeList.length;
              return {
                transform: 'rotate('.concat(angle, 'deg)'),
              };
            },
            // 初始化圆形转盘canvas
            init: function init() {
              var data = this.styleOpt;
              var prizeNum = this.prizeList.length;
              var prizeBgColors = data.prizeBgColors,
                borderColor = data.borderColor;
              // 开始绘画
              var canvas = this.$refs.canvas;
              var ctx = canvas.getContext('2d');
              var canvasW = (this.$refs.canvas.width = this.$refs.luckdraw.clientWidth); // 画板的高度
              var canvasH = (this.$refs.canvas.height = this.$refs.luckdraw.clientHeight); // 画板的宽度
              // translate方法重新映射画布上的 (0,0) 位置
              ctx.translate(0, canvasH);
              // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
              ctx.rotate((-90 * Math.PI) / 180);
              // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
              var outRadius = canvasW / 2 - 1;
              // 圆环的内圆的半径
              var innerRadius = 0;
              var baseAngle = (Math.PI * 2) / prizeNum; // 每个奖项所占角度数
              ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色
              ctx.strokeStyle = borderColor; // 设置画图线的颜色
              for (var index = 0; index < prizeNum; index++) {
                var angle = index * baseAngle;
                if (this.prizeList[index]['prizeColor']) {
                  ctx.fillStyle = this.prizeList[index]['prizeColor']; //设置每个扇形区域的颜色,根据每条数据中单独设置的优先
                } else {
                  ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
                }

                ctx.beginPath(); //开始绘制
                // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)
                ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
                ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
                ctx.stroke();
                ctx.fill();
                ctx.save();
              }
            },
            // 转动起来
            rotate: function rotate(index) {
              var _this = this;
              var turnsTime = this.turnsTime;
              var rotateAngle =
                this.startRotateDegree +
                this.turnsNumber * 360 +
                360 -
                (180 / this.prizeList.length + (360 / this.prizeList.length) * index) -
                (this.startRotateDegree % 360);
              this.startRotateDegree = rotateAngle;
              this.rotateAngle = 'rotate('.concat(rotateAngle, 'deg)');
              this.rotateTransition = 'transform '.concat(turnsTime, 's cubic-bezier(0.250, 0.460, 0.455, 0.995)');
              setTimeout(function () {
                _this.$emit('end-turns');
              }, turnsTime * 1000 + 500);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/luckdraw/luckdraw.vue?vue&type=script&lang=js&
        /* harmony default export */ var luckdraw_luckdrawvue_type_script_lang_js_ = luckdrawvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/luckdraw/luckdraw.vue

        /* normalize component */

        var luckdraw_component = normalizeComponent(
          luckdraw_luckdrawvue_type_script_lang_js_,
          luckdrawvue_type_template_id_c2015698_render,
          luckdrawvue_type_template_id_c2015698_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var luckdraw = luckdraw_component.exports;
        // EXTERNAL MODULE: ./src/packages/luckdraw/luckdraw.scss
        var luckdraw_luckdraw = __webpack_require__(67);

        // CONCATENATED MODULE: ./src/packages/luckdraw/index.js

        luckdraw.install = function (Vue) {
          Vue.component(luckdraw.name, luckdraw);
        };
        /* harmony default export */ var packages_luckdraw = luckdraw;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/video/video.vue?vue&type=template&id=62e2def6&
        var videovue_type_template_id_62e2def6_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { ref: 'videocon', staticClass: 'nut-video' }, [
            _c(
              'video',
              {
                ref: 'video',
                staticClass: 'nut-videoplayer',
                attrs: {
                  autoplay: _vm.options.autoplay,
                  loop: _vm.options.loop,
                  poster: _vm.options.poster,
                  controls: _vm.options.controls,
                  preload: _vm.options.preload,
                },
                domProps: { muted: _vm.options.muted },
                on: { error: _vm.handleError },
              },
              _vm._l(_vm.sources, function (source) {
                return _c('source', { key: source.src, attrs: { src: source.src, type: source.type } });
              }),
              0
            ),
            _vm._v(' '),
            _vm.showToolbox && !_vm.isDisabled ? _c('div', { ref: 'touchMask', staticClass: 'playing-mask', on: { click: _vm.play } }) : _vm._e(),
            _vm._v(' '),
            _vm.showToolbox && !_vm.isDisabled
              ? _c('div', {
                  directives: [{ name: 'show', rawName: 'v-show', value: !_vm.state.playing, expression: '!state.playing' }],
                  ref: 'palyBtn',
                  staticClass: 'nut-video-play-btn',
                  on: { click: _vm.play },
                })
              : _vm._e(),
            _vm._v(' '),
            _c(
              'div',
              {
                directives: [
                  { name: 'show', rawName: 'v-show', value: _vm.showToolbox && !_vm.isDisabled, expression: 'showToolbox && !isDisabled' },
                ],
                staticClass: 'nut-video-controller',
                class: { 'show-control': !_vm.state.playing, 'hide-control': _vm.state.playing },
              },
              [
                _c('div', { staticClass: 'control-play-btn', on: { click: _vm.play } }),
                _vm._v(' '),
                _c('div', { staticClass: 'current-time' }, [_vm._v(_vm._s(_vm.videoSet.displayTime))]),
                _vm._v(' '),
                _c('div', { staticClass: 'progress-container' }, [
                  _c('div', { ref: 'progressBar', staticClass: 'progress' }, [
                    _c('div', { staticClass: 'buffered', style: { width: _vm.videoSet.loaded + '%' } }),
                    _vm._v(' '),
                    _c(
                      'div',
                      {
                        staticClass: 'video-ball',
                        style: { transform: 'translate3d(' + _vm.videoSet.progress.current + 'px, -50%, 0)' },
                        on: {
                          touchmove: function ($event) {
                            $event.stopPropagation();
                            $event.preventDefault();
                            return _vm.touchSlidMove($event);
                          },
                          touchstart: function ($event) {
                            $event.stopPropagation();
                            return _vm.touchSlidSrart($event);
                          },
                          touchend: function ($event) {
                            $event.stopPropagation();
                            return _vm.touchSlidEnd($event);
                          },
                        },
                      },
                      [_c('div', { staticClass: 'move-handle' })]
                    ),
                    _vm._v(' '),
                    _c('div', { ref: 'playedBar', staticClass: 'played' }),
                  ]),
                ]),
                _vm._v(' '),
                _c('div', { staticClass: 'duration-time' }, [_vm._v(_vm._s(_vm.videoSet.totalTime))]),
                _vm._v(' '),
                _c('div', { staticClass: 'volume', class: { muted: _vm.state.isMuted }, on: { click: _vm.handleMuted } }),
                _vm._v(' '),
                _c('div', { staticClass: 'fullscreen-icon', on: { click: _vm.fullScreen } }),
              ]
            ),
            _vm._v(' '),
            _c(
              'div',
              {
                directives: [{ name: 'show', rawName: 'v-show', value: _vm.state.isError, expression: 'state.isError' }],
                staticClass: 'nut-video-error',
              },
              [
                _c('p', { staticClass: 'lose' }, [_vm._v('视频加载失败')]),
                _vm._v(' '),
                _c('p', { staticClass: 'retry', on: { click: _vm.retry } }, [_vm._v('点击重试')]),
              ]
            ),
          ]);
        };
        var videovue_type_template_id_62e2def6_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/video/video.vue?vue&type=template&id=62e2def6&

        // CONCATENATED MODULE: ./src/utils/throttle.js
        /**
         * @desc 函数节流
         * @param func 函数
         * @param wait 延迟执行毫秒数
         * @param type 1 表时间戳版，2 表定时器版
         */
        var throttle_throttle = function throttle(func, wait, type) {
          if (type === 1) {
            var previous = 0;
          } else if (type === 2) {
            var timeout;
          }
          return function () {
            var context = this;
            var args = arguments;
            if (type === 1) {
              var now = Date.now();
              if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
              }
            } else if (type === 2) {
              if (!timeout) {
                timeout = setTimeout(function () {
                  timeout = null;
                  func.apply(context, args);
                }, wait);
              }
            }
          };
        };
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/video/video.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var videovue_type_script_lang_js_ = {
          name: 'nut-video',
          props: {
            sources: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            options: {
              type: Object,
              default: function _default() {
                return {
                  autoplay: false,
                  //是否自动播放
                  volume: 0.5,
                  poster: '',
                  loop: false,
                  controls: true,
                  muted: false,
                  //是否静音
                  disabled: false,
                  //禁止操作
                  playsinline: false,
                  //行内展示
                  touchPlay: false,
                  preload: '',
                };
              },
              required: true,
            },
            model: {
              type: String,
              default: '',
            },
          },
          data: function data() {
            return {
              videoElm: null,
              initial: true,
              //控制封面的显示
              showToolbox: false,
              //控制控制器和标题的显示
              // 视频容器元素
              player: {
                $player: null,
                pos: null,
              },
              // progress进度条元素
              progressBar: {
                progressElm: null,
                // 进度条DOM对象
                pos: null,
              },
              // video控制显示设置
              videoSet: {
                loaded: 0,
                // 缓存长度
                displayTime: '00:00',
                // 进度时间
                totalTime: '00:00',
                // 总时间
                progress: {
                  width: 0,
                  // 进度条长度
                  current: 0, // 进度条当前位置
                },
              },

              state: {
                controlShow: true,
                vol: 0.5,
                //音量
                currentTime: 0,
                //当前时间
                fullScreen: false,
                playing: false,
                //是否正在播放
                isLoading: false,
                isEnd: false,
                isError: false,
                isMuted: false,
              },
              showTouchMask: false,
            };
          },
          computed: {
            isDisabled: function isDisabled() {
              return this.options.disabled;
            },
          },
          watch: {
            sources: {
              handler: function handler(newValue, oldValue) {
                var _this = this;
                if (newValue && oldValue && newValue != oldValue) {
                  this.$nextTick(function () {
                    _this.videoElm.load();
                  });
                }
              },
              immediate: true,
            },
            options: {
              handler: function handler(val) {
                this.state.isMuted = val.muted ? val.muted : false;
              },
              immediate: true,
            },
            // model: {
            //     handler(val) {
            //         if (val) {
            //             if (val == 'custom') {
            //                 this.state.controlShow = false;
            //                 this.showToolbox = this.options.controls ? true : false
            //             }
            //         } else {
            //             this.showToolbox = false;
            //             this.state.controlShow = this.options.controls ? true : false
            //         }
            //     },
            //     immediate: true

            // }
          },
          mounted: function mounted() {
            this.init();
          },
          methods: {
            init: function init() {
              var _this2 = this;
              this.videoElm = this.$el.getElementsByTagName('video')[0];
              if (this.options.autoplay) {
                this.videoElm.play();
              }
              if (this.options.touchPlay) {
                this.showTouchMask = true;
              }
              if (this.options.playsinline) {
                this.videoElm.setAttribute('playsinline', this.options.playsinline);
                this.videoElm.setAttribute('webkit-playsinline', this.options.playsinline);
                this.videoElm.setAttribute('x5-playsinline', this.options.playsinline);
                this.videoElm.setAttribute('x5-video-player-type', 'h5');
                this.videoElm.setAttribute('x5-video-player-fullscreen', false);
              }
              this.volumeHandle();
              if (this.showToolbox) {
                this.customerInit();
              } else {
                this.videoElm.addEventListener('play', function () {
                  _this2.state.playing = true;
                  _this2.$emit('play', _this2.videoElm);
                });
                this.videoElm.addEventListener('pause', function () {
                  _this2.state.playing = false;
                  _this2.$emit('pause', _this2.videoElm);
                });
                this.videoElm.addEventListener('ended', this.playEnded);
                this.videoElm.addEventListener('timeupdate', throttle_throttle(this.getPlayTime, 100, 1));
              }
            },
            customerInit: function customerInit() {
              var $player = this.$el;
              var $progress = this.$el.getElementsByClassName('progress')[0];
              // 播放器位置
              this.player.$player = $player;
              this.progressBar.progressElm = $progress;
              // this.player.pos = $player.getBoundingClientRect();
              this.progressBar.pos = $progress.getBoundingClientRect();
              this.videoSet.progress.width = Math.round($progress.getBoundingClientRect().width);
            },
            play: function play() {
              var _this3 = this;
              if (this.options.autoplay && this.options.disabled) {
                this.state.playing = true;
                // this.state.controlShow = false
                return false;
              }
              this.state.playing = !this.state.playing;
              if (this.videoElm) {
                // 播放状态
                if (this.state.playing) {
                  try {
                    this.videoElm.play();
                    // 监听缓存进度
                    this.videoElm.addEventListener('progress', function (e) {
                      _this3.getLoadTime();
                    });
                    // 监听播放进度
                    this.videoElm.addEventListener('timeupdate', throttle_throttle(this.getPlayTime, 100, 1));
                    // 监听结束
                    this.videoElm.addEventListener('ended', this.playEnded);
                    this.$emit('play', this.videoElm);
                  } catch (e) {
                    // 捕获url异常出现的错误
                    this.handleError();
                  }
                }
                // 停止状态
                else {
                  this.videoElm.pause();
                  this.$emit('pause', this.videoElm);
                }
              }
            },
            // 音量控制
            volumeHandle: function volumeHandle() {
              this.state.vol = this.options.volume;
            },
            // 静音控制
            handleMuted: function handleMuted() {
              this.state.isMuted = !this.state.isMuted;
              this.videoElm.muted = this.state.isMuted;
            },
            playEnded: function playEnded() {
              this.state.playing = false;
              this.state.isEnd = true;
              this.state.controlBtnShow = true;
              this.videoSet.displayTime = '00:00';
              this.videoSet.progress.current = 0;
              this.videoElm.currentTime = 0;
              this.$emit('playend', this.videoElm);
            },
            // 数据加载出错
            handleError: function handleError() {
              // console.log('error')
              this.state.isError = true;
            },
            fullScreen: function fullScreen() {
              if (!this.state.fullScreen) {
                this.state.fullScreen = true;
                this.videoElm.webkitRequestFullScreen();
              } else {
                this.state.fullScreen = false;
                document.webkitCancelFullScreen();
              }
              // setTimeout(this.initVideo, 200);
            },
            // 获取播放时间
            getPlayTime: function getPlayTime() {
              var percent = this.videoElm.currentTime / this.videoElm.duration;
              this.videoSet.progress.current = Math.round(this.videoSet.progress.width * percent);

              // 赋值时长
              this.videoSet.totalTime = this.timeFormat(this.videoElm.duration);
              this.videoSet.displayTime = this.timeFormat(this.videoElm.currentTime);
            },
            timeFormat: function timeFormat(t) {
              var h = Math.floor(t / 3600);
              if (h < 10) {
                h = '0' + h;
              }
              var m = Math.floor((t % 3600) / 60);
              if (m < 10) {
                m = '0' + m;
              }
              var s = Math.round((t % 3600) % 60);
              if (s < 10) {
                s = '0' + s;
              }
              var str = '';
              if (h != 0) {
                str = h + ':' + m + ':' + s;
              } else {
                str = m + ':' + s;
              }
              return str;
            },
            // 获取缓存时间
            getLoadTime: function getLoadTime() {
              if (this.videoSet.loaded) this.videoSet.loaded = (this.videoElm.buffered.end(0) / this.videoElm.duration) * 100;
            },
            getTime: function getTime() {
              var _this4 = this;
              this.videoElm.addEventListener('durationchange', function (e) {
                // console.log(e);
              });
              this.videoElm.addEventListener('progress', function (e) {
                _this4.videoSet.loaded = (-1 + _this4.videoElm.buffered.end(0) / _this4.videoElm.duration) * 100;
              });
              this.videoSet.len = this.videoElm.duration;
            },
            // 拖动播放进度
            touchSlidSrart: function touchSlidSrart(e) {},
            touchSlidMove: function touchSlidMove(e) {
              var currentX = e.targetTouches[0].pageX;
              var offsetX = currentX - this.progressBar.pos.left;
              // 边界检测
              if (offsetX <= 0) {
                offsetX = 0;
              }
              if (offsetX >= this.videoSet.progress.width) {
                offsetX = this.videoSet.progress.width;
              }
              this.videoSet.progress.current = offsetX;
              var percent = this.videoSet.progress.current / this.videoSet.progress.width;
              this.videoElm.duration && this.setPlayTime(percent, this.videoElm.duration);
            },
            touchSlidEnd: function touchSlidEnd(e) {
              var currentX = e.changedTouches[0].pageX;
              var offsetX = currentX - this.progressBar.pos.left;
              this.videoSet.progress.current = offsetX;
              // 这里的offsetX都是正数
              var percent = offsetX / this.videoSet.progress.width;
              this.videoElm.duration && this.setPlayTime(percent, this.videoElm.duration);
            },
            // 设置手动播放时间
            setPlayTime: function setPlayTime(percent, totalTime) {
              this.videoElm.currentTime = Math.floor(percent * totalTime);
            },
            // 点击重新加载
            retry: function retry() {
              // console.log('error');
              this.state.isError = false;
              this.init();
            },
          },
          beforeDestroy: function beforeDestroy() {},
        };
        // CONCATENATED MODULE: ./src/packages/video/video.vue?vue&type=script&lang=js&
        /* harmony default export */ var video_videovue_type_script_lang_js_ = videovue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/video/video.vue

        /* normalize component */

        var video_component = normalizeComponent(
          video_videovue_type_script_lang_js_,
          videovue_type_template_id_62e2def6_render,
          videovue_type_template_id_62e2def6_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var video = video_component.exports;
        // EXTERNAL MODULE: ./src/packages/video/video.scss
        var video_video = __webpack_require__(68);

        // CONCATENATED MODULE: ./src/packages/video/index.js

        video.install = function (Vue) {
          Vue.component(video.name, video);
        };
        /* harmony default export */ var packages_video = video;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/signature/signature.vue?vue&type=template&id=2c8bb468&
        var signaturevue_type_template_id_2c8bb468_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-signature', class: _vm.customClass },
            [
              _c('div', { ref: 'wrap', staticClass: 'nut-signature-inner' }, [
                _vm.isCanvasSupported
                  ? _c('canvas', { ref: 'canvas', attrs: { height: _vm.canvasHeight, width: _vm.canvasWidth } })
                  : _c('p', { staticClass: 'nut-signature-unsopport' }, [_vm._v(_vm._s(_vm.unSupportTpl))]),
              ]),
              _vm._v(' '),
              _vm._t('default'),
              _vm._v(' '),
              _c(
                'nut-button',
                {
                  attrs: { type: 'red', shape: 'circle', small: '' },
                  on: {
                    click: function ($event) {
                      return _vm.clear();
                    },
                  },
                },
                [_vm._v('重签')]
              ),
              _vm._v(' '),
              _c(
                'nut-button',
                {
                  attrs: { shape: 'circle', small: '' },
                  on: {
                    click: function ($event) {
                      return _vm.confirm();
                    },
                  },
                },
                [_vm._v('确认')]
              ),
            ],
            2
          );
        };
        var signaturevue_type_template_id_2c8bb468_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/signature/signature.vue?vue&type=template&id=2c8bb468&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/signature/signature.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var signaturevue_type_script_lang_js_ = {
          name: 'nut-signature',
          props: {
            customClass: {
              type: String,
              default: '',
            },
            lineWidth: {
              type: Number,
              default: 2,
            },
            strokeStyle: {
              type: String,
              default: '#000',
            },
            type: {
              type: String,
              default: 'png',
            },
            unSupportTpl: {
              type: String,
              default: '对不起，当前浏览器不支持Canvas，无法使用本控件！',
            },
          },
          data: function data() {
            return {
              canvasHeight: 0,
              canvasWidth: 0,
              ctx: null,
              isSupportTouch: 'ontouchstart' in window,
              events:
                'ontouchstart' in window
                  ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
                  : ['mousedown', 'mousemove', 'mouseup', 'mouseleave'],
            };
          },
          components: {
            'nut-button': button_button,
          },
          computed: {
            isCanvasSupported: function isCanvasSupported() {
              var elem = document.createElement('canvas');
              return !!(elem.getContext && elem.getContext('2d'));
            },
          },
          methods: {
            addEvent: function addEvent() {
              (this.startEventHandler = this.startEventHandler.bind(this)),
                this.$refs.canvas.addEventListener(this.events[0], this.startEventHandler, false);
            },
            startEventHandler: function startEventHandler(event) {
              event.preventDefault();
              this.ctx.beginPath();
              this.ctx.lineWidth = this.lineWidth;
              this.ctx.strokeStyle = this.strokeStyle;
              (this.moveEventHandler = this.moveEventHandler.bind(this)),
                (this.leaveEventHandler = this.leaveEventHandler.bind(this)),
                (this.endEventHandler = this.endEventHandler.bind(this));
              this.$refs.canvas.addEventListener(this.events[1], this.moveEventHandler, false);
              this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
              this.$refs.canvas.addEventListener(this.events[3], this.leaveEventHandler, false);
            },
            moveEventHandler: function moveEventHandler(event) {
              event.preventDefault();
              var evt = this.isSupportTouch ? event.touches[0] : event;
              var coverPos = this.$refs.canvas.getBoundingClientRect();
              var mouseX = evt.clientX - coverPos.left;
              var mouseY = evt.clientY - coverPos.top;
              this.ctx.lineTo(mouseX, mouseY);
              this.ctx.stroke();
            },
            endEventHandler: function endEventHandler(event) {
              event.preventDefault();
              this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
              this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
            },
            leaveEventHandler: function leaveEventHandler(event) {
              event.preventDefault();
              this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
              this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
            },
            clear: function clear(isUnEmit) {
              this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
              this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
              this.ctx.closePath();
              if (!isUnEmit) {
                this.$emit('clear');
              }
            },
            confirm: function confirm() {
              this.onSave(this.$refs.canvas);
            },
            onSave: function onSave(canvas) {
              var dataurl;
              switch (this.type) {
                case 'png':
                  dataurl = canvas.toDataURL('image/png');
                  break;
                case 'jpg':
                  dataurl = canvas.toDataURL('image/jpeg', 0.8);
                  break;
              }
              this.clear(true);
              this.$emit('confirm', canvas, dataurl);
            },
          },
          mounted: function mounted() {
            if (this.isCanvasSupported) {
              this.ctx = this.$refs.canvas.getContext('2d');
              this.canvasWidth = this.$refs.wrap.offsetWidth;
              (this.canvasHeight = this.$refs.wrap.offsetHeight), this.addEvent();
            }
          },
        };
        // CONCATENATED MODULE: ./src/packages/signature/signature.vue?vue&type=script&lang=js&
        /* harmony default export */ var signature_signaturevue_type_script_lang_js_ = signaturevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/signature/signature.vue

        /* normalize component */

        var signature_component = normalizeComponent(
          signature_signaturevue_type_script_lang_js_,
          signaturevue_type_template_id_2c8bb468_render,
          signaturevue_type_template_id_2c8bb468_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var signature = signature_component.exports;
        // EXTERNAL MODULE: ./src/packages/signature/signature.scss
        var signature_signature = __webpack_require__(69);

        // CONCATENATED MODULE: ./src/packages/signature/index.js

        signature.install = function (Vue) {
          Vue.component(signature.name, signature);
        };
        /* harmony default export */ var packages_signature = signature;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/circleprogress/circleprogress.vue?vue&type=template&id=5220e654&
        var circleprogressvue_type_template_id_5220e654_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-circleprogress', style: { height: _vm.option.size + 'px', width: _vm.option.size + 'px' } }, [
            _c('svg', { attrs: { height: _vm.option.size, width: _vm.option.size, 'x-mlns': 'http://www.w3.org/200/svg' } }, [
              _c('circle', {
                attrs: {
                  r: _vm.option.radius,
                  cx: _vm.option.cx,
                  cy: _vm.option.cy,
                  stroke: _vm.option.backColor,
                  'stroke-width': _vm.option.strokeOutWidth,
                  fill: 'none',
                },
              }),
              _vm._v(' '),
              _c('circle', {
                staticStyle: { transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s' },
                attrs: {
                  r: _vm.option.radius,
                  cx: _vm.option.cx,
                  cy: _vm.option.cy,
                  stroke: _vm.option.progressColor,
                  'stroke-dasharray': _vm.arcLength,
                  'stroke-width': _vm.strokeInnerWidth,
                  fill: 'none',
                  transform: _vm.option.startPosition,
                  'stroke-linecap': 'round',
                },
              }),
            ]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'nut-circleprogress-content' },
              [!_vm.isAuto ? [_vm._t('default', [_vm._v(_vm._s(_vm.progress) + '%')])] : [_vm._t('default')]],
              2
            ),
          ]);
        };
        var circleprogressvue_type_template_id_5220e654_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/circleprogress/circleprogress.vue?vue&type=template&id=5220e654&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/circleprogress/circleprogress.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var circleprogressvue_type_script_lang_js_ = {
          name: 'nut-circleprogress',
          props: {
            progress: {
              type: [Number, String],
              required: true,
            },
            strokeInnerWidth: {
              type: [Number, String],
              default: 10,
            },
            isAuto: {
              tyep: Boolean,
              default: false,
            },
            progressOption: {
              type: Object,
              default: function _default() {},
            },
          },
          data: function data() {
            return {};
          },
          computed: {
            arcLength: function arcLength() {
              var circleLength = Math.floor(2 * Math.PI * this.option.radius);
              var progressLength = (this.progress / 100) * circleLength;
              // console.log(this.progress,progressLength)
              return ''.concat(progressLength, ',').concat(circleLength);
            },
            // :stroke-dashoffset="dashOffset"
            // dashOffset() {
            //   // 偏移初始值为dashArray长度，随着percent增大逐渐减小
            //   return (1 - this.progress) *Math.floor(2 * Math.PI * this.option.radius);
            // },
            option: function option() {
              // 所有进度条的可配置项
              var baseOption = {
                radius: 50,
                strokeOutWidth: 10,
                backColor: '#d9d9d9',
                progressColor: 'red',
              };
              extends_default()(baseOption, this.progressOption);
              // 圆心位置自动生成
              baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeOutWidth;
              baseOption.size = (baseOption.radius + baseOption.strokeOutWidth) * 2;
              baseOption.startPosition = 'rotate(-90,' + baseOption.cx + ',' + baseOption.cy + ')';
              return baseOption;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/circleprogress/circleprogress.vue?vue&type=script&lang=js&
        /* harmony default export */ var circleprogress_circleprogressvue_type_script_lang_js_ = circleprogressvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/circleprogress/circleprogress.vue

        /* normalize component */

        var circleprogress_component = normalizeComponent(
          circleprogress_circleprogressvue_type_script_lang_js_,
          circleprogressvue_type_template_id_5220e654_render,
          circleprogressvue_type_template_id_5220e654_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var circleprogress = circleprogress_component.exports;
        // EXTERNAL MODULE: ./src/packages/circleprogress/circleprogress.scss
        var circleprogress_circleprogress = __webpack_require__(70);

        // CONCATENATED MODULE: ./src/packages/circleprogress/index.js

        circleprogress.install = function (Vue) {
          Vue.component(circleprogress.name, circleprogress);
        };
        /* harmony default export */ var packages_circleprogress = circleprogress;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/timeline/timeline.vue?vue&type=template&id=7c35a686&
        var timelinevue_type_template_id_7c35a686_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-timeline' }, [_vm._t('default')], 2);
        };
        var timelinevue_type_template_id_7c35a686_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/timeline/timeline.vue?vue&type=template&id=7c35a686&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/timeline/timeline.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var timelinevue_type_script_lang_js_ = {
          name: 'nut-timeline',
          props: {},
          data: function data() {
            return {};
          },
          mounted: function mounted() {},
          methods: {},
        };
        // CONCATENATED MODULE: ./src/packages/timeline/timeline.vue?vue&type=script&lang=js&
        /* harmony default export */ var timeline_timelinevue_type_script_lang_js_ = timelinevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/timeline/timeline.vue

        /* normalize component */

        var timeline_component = normalizeComponent(
          timeline_timelinevue_type_script_lang_js_,
          timelinevue_type_template_id_7c35a686_render,
          timelinevue_type_template_id_7c35a686_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var timeline = timeline_component.exports;
        // EXTERNAL MODULE: ./src/packages/timeline/timeline.scss
        var timeline_timeline = __webpack_require__(71);

        // CONCATENATED MODULE: ./src/packages/timeline/index.js

        timeline.install = function (Vue) {
          Vue.component(timeline.name, timeline);
        };
        /* harmony default export */ var packages_timeline = timeline;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/timelineitem/timelineitem.vue?vue&type=template&id=28c462e8&
        var timelineitemvue_type_template_id_28c462e8_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-timelineitem left-border' }, [
            _c('div', { staticClass: 'timelineitem-list-box' }, [
              _c('div', { class: ['timelineitem-list'] }, [
                _c('div', { staticClass: 'timelineitem-left' }, [
                  _c('div', { staticClass: 'timelineitem-point' }, [
                    !_vm.isCustomPoint
                      ? _c('div', { class: [_vm.pointClass, 'point-icon'], style: _vm.pointStyle })
                      : _c('div', { staticClass: 'custom-icon' }, [_vm._t('dot')], 2),
                  ]),
                  _vm._v(' '),
                  _c('div', { staticClass: 'timelineitem-line' }),
                ]),
                _vm._v(' '),
                _c('div', { staticClass: 'timelineitem-right' }, [
                  _vm.isShowTitle
                    ? _c('div', { staticClass: 'timelineitem-title' }, [_c('div', { staticClass: 'time' }, [_vm._t('title')], 2)])
                    : _vm._e(),
                  _vm._v(' '),
                  _c('div', { staticClass: 'timelineitem-content' }, [_vm._t('default')], 2),
                ]),
              ]),
            ]),
          ]);
        };
        var timelineitemvue_type_template_id_28c462e8_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/timelineitem/timelineitem.vue?vue&type=template&id=28c462e8&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/timelineitem/timelineitem.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var timelineitemvue_type_script_lang_js_ = {
          name: 'nut-timelineitem',
          props: {
            // 轴点的样式：circle 圆  hollow 空心
            pointType: {
              type: String,
              default: 'circle',
            },
            // 轴点的颜色
            pointColor: {
              type: String,
              default: '#fa2e05',
            },
          },
          data: function data() {
            return {
              isCustomPoint: false, //是否自定义轴点
            };
          },

          computed: {
            pointClass: function pointClass() {
              return this.pointType + '-icon';
            },
            pointStyle: function pointStyle() {
              return {
                borderColor: this.pointColor,
                background: this.pointType == 'circle' ? this.pointColor : 'transparent',
              };
            },
            isShowTitle: function isShowTitle() {
              return this.$slots.title ? true : false;
            },
          },
          mounted: function mounted() {
            this.isCustomPoint = this.$slots.dot ? true : false;
          },
          methods: {},
        };
        // CONCATENATED MODULE: ./src/packages/timelineitem/timelineitem.vue?vue&type=script&lang=js&
        /* harmony default export */ var timelineitem_timelineitemvue_type_script_lang_js_ = timelineitemvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/timelineitem/timelineitem.vue

        /* normalize component */

        var timelineitem_component = normalizeComponent(
          timelineitem_timelineitemvue_type_script_lang_js_,
          timelineitemvue_type_template_id_28c462e8_render,
          timelineitemvue_type_template_id_28c462e8_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var timelineitem = timelineitem_component.exports;
        // EXTERNAL MODULE: ./src/packages/timelineitem/timelineitem.scss
        var timelineitem_timelineitem = __webpack_require__(72);

        // CONCATENATED MODULE: ./src/packages/timelineitem/index.js

        timelineitem.install = function (Vue) {
          Vue.component(timelineitem.name, timelineitem);
        };
        /* harmony default export */ var packages_timelineitem = timelineitem;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sidenavbar/sidenavbar.vue?vue&type=template&id=2d390796&
        var sidenavbarvue_type_template_id_2d390796_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-sidenavbar' }, [
            _c('div', { staticClass: 'sidenavbar-content' }, [_c('div', { ref: 'list', staticClass: 'sidenavbar-list' }, [_vm._t('default')], 2)]),
          ]);
        };
        var sidenavbarvue_type_template_id_2d390796_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/sidenavbar/sidenavbar.vue?vue&type=template&id=2d390796&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sidenavbar/sidenavbar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var sidenavbarvue_type_script_lang_js_ = {
          name: 'nut-sidenavbar',
          props: {
            offset: {
              type: [String, Number],
              default: 15,
            },
          },
          mounted: function mounted() {
            this.handleSlots();
            this.observer = new MutationObserver(
              function (mutations) {
                this.count = 1;
                this.handleSlots();
              }.bind(this)
            );
            this.observer.observe(this.$refs.list, {
              attributes: false,
              childList: true,
              characterData: false,
              subtree: false,
            });
          },
          data: function data() {
            return {
              count: 1,
              observer: null,
            };
          },
          methods: {
            handleSlots: function handleSlots() {
              var slots = this.$slots.default;
              if (slots) {
                slots = slots
                  .filter(function (item) {
                    return item.elm.nodeType !== 3;
                  })
                  .map(function (item) {
                    return item.elm;
                  });
                this.setPaddingLeft(slots);
              }
            },
            setPaddingLeft: function setPaddingLeft(nodeList) {
              var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              for (var i = 0; i < nodeList.length; i++) {
                var item = nodeList[i];
                item.children[0].style.paddingLeft = this.offset * level + 'px';
                if (!item.className.includes('nut-sidenavbaritem')) {
                  this.setPaddingLeft(Array.from(item.children[1].children), ++this.count);
                }
              }
              this.count--;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/sidenavbar/sidenavbar.vue?vue&type=script&lang=js&
        /* harmony default export */ var sidenavbar_sidenavbarvue_type_script_lang_js_ = sidenavbarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/sidenavbar/sidenavbar.vue

        /* normalize component */

        var sidenavbar_component = normalizeComponent(
          sidenavbar_sidenavbarvue_type_script_lang_js_,
          sidenavbarvue_type_template_id_2d390796_render,
          sidenavbarvue_type_template_id_2d390796_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var sidenavbar = sidenavbar_component.exports;
        // EXTERNAL MODULE: ./src/packages/sidenavbar/sidenavbar.scss
        var sidenavbar_sidenavbar = __webpack_require__(73);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/subsidenavbar/subsidenavbar.vue?vue&type=template&id=8d8f4c46&
        var subsidenavbarvue_type_template_id_8d8f4c46_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-subsidenavbar sidenavbar-item', attrs: { ikey: _vm.ikey } }, [
            _c(
              'div',
              {
                staticClass: 'item-title',
                on: {
                  click: function ($event) {
                    $event.stopPropagation();
                    return _vm.handleClick($event);
                  },
                },
              },
              [
                _c('a', { staticClass: 'sidenavbar-title', attrs: { href: 'javascript:;' } }, [_vm._v(_vm._s(_vm.title))]),
                _vm._v(' '),
                _c('span', { staticClass: 'sidenavbar-icon' }, [_c('nut-icon', { class: _vm.direction, attrs: { type: 'down' } })], 1),
              ]
            ),
            _vm._v(' '),
            _c(
              'div',
              {
                staticClass: 'sub-sidenavbar-list',
                class: !_vm.direction ? 'nutFadeIn' : 'nutFadeOut',
                style: { height: !_vm.direction ? 'auto' : 0 },
              },
              [_vm._t('default')],
              2
            ),
          ]);
        };
        var subsidenavbarvue_type_template_id_8d8f4c46_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/subsidenavbar/subsidenavbar.vue?vue&type=template&id=8d8f4c46&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/subsidenavbar/subsidenavbar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var subsidenavbarvue_type_script_lang_js_ = {
          name: 'nut-subsidenavbar',
          props: {
            title: {
              type: String,
              default: '',
            },
            ikey: {
              type: [String, Number],
              default: '',
            },
            open: {
              type: Boolean,
              default: true,
            },
          },
          data: function data() {
            return {
              direction: '',
            };
          },
          mounted: function mounted() {
            this.direction = this.open ? '' : 'up';
          },
          methods: {
            handleClick: function handleClick() {
              this.$emit('titleClick');
              this.direction = !this.direction ? 'up' : '';
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/subsidenavbar/subsidenavbar.vue?vue&type=script&lang=js&
        /* harmony default export */ var subsidenavbar_subsidenavbarvue_type_script_lang_js_ = subsidenavbarvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/subsidenavbar/subsidenavbar.vue

        /* normalize component */

        var subsidenavbar_component = normalizeComponent(
          subsidenavbar_subsidenavbarvue_type_script_lang_js_,
          subsidenavbarvue_type_template_id_8d8f4c46_render,
          subsidenavbarvue_type_template_id_8d8f4c46_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var subsidenavbar = subsidenavbar_component.exports;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sidenavbaritem/sidenavbaritem.vue?vue&type=template&id=a0fb824e&
        var sidenavbaritemvue_type_template_id_a0fb824e_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'nut-sidenavbaritem',
              attrs: { ikey: _vm.ikey },
              on: {
                click: function ($event) {
                  $event.stopPropagation();
                  return _vm.handleClick($event);
                },
              },
            },
            [_c('a', { staticClass: 'item-title', attrs: { href: 'javascript:;' } }, [_vm._v('\n    ' + _vm._s(_vm.title) + '\n  ')])]
          );
        };
        var sidenavbaritemvue_type_template_id_a0fb824e_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/sidenavbaritem/sidenavbaritem.vue?vue&type=template&id=a0fb824e&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sidenavbaritem/sidenavbaritem.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var sidenavbaritemvue_type_script_lang_js_ = {
          name: 'nut-sidenavbaritem',
          props: {
            title: {
              type: String,
              default: '',
            },
            ikey: {
              type: String,
              default: '',
            },
          },
          methods: {
            handleClick: function handleClick() {
              this.$emit('click');
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/sidenavbaritem/sidenavbaritem.vue?vue&type=script&lang=js&
        /* harmony default export */ var sidenavbaritem_sidenavbaritemvue_type_script_lang_js_ = sidenavbaritemvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/sidenavbaritem/sidenavbaritem.vue

        /* normalize component */

        var sidenavbaritem_component = normalizeComponent(
          sidenavbaritem_sidenavbaritemvue_type_script_lang_js_,
          sidenavbaritemvue_type_template_id_a0fb824e_render,
          sidenavbaritemvue_type_template_id_a0fb824e_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var sidenavbaritem = sidenavbaritem_component.exports;
        // CONCATENATED MODULE: ./src/packages/sidenavbar/index.js

        sidenavbar.install = function (Vue) {
          Vue.component(sidenavbar.name, sidenavbar);
          Vue.component(subsidenavbar.name, subsidenavbar);
          Vue.component(sidenavbaritem.name, sidenavbaritem);
          Vue.component(icon.name, icon);
        };
        /* harmony default export */ var packages_sidenavbar = sidenavbar;
        // EXTERNAL MODULE: ./src/packages/subsidenavbar/subsidenavbar.scss
        var subsidenavbar_subsidenavbar = __webpack_require__(74);

        // CONCATENATED MODULE: ./src/packages/subsidenavbar/index.js

        subsidenavbar.install = function (Vue) {
          Vue.component(subsidenavbar.name, subsidenavbar);
        };
        /* harmony default export */ var packages_subsidenavbar = subsidenavbar;
        // EXTERNAL MODULE: ./src/packages/sidenavbaritem/sidenavbaritem.scss
        var sidenavbaritem_sidenavbaritem = __webpack_require__(75);

        // CONCATENATED MODULE: ./src/packages/sidenavbaritem/index.js

        sidenavbaritem.install = function (Vue) {
          Vue.component(sidenavbaritem.name, sidenavbaritem);
        };
        /* harmony default export */ var packages_sidenavbaritem = sidenavbaritem;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/drag/drag.vue?vue&type=template&id=04510862&
        var dragvue_type_template_id_04510862_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              staticClass: 'nut-drag',
              on: {
                touchstart: function ($event) {
                  return _vm.touchStart($event);
                },
              },
            },
            [_vm._t('default')],
            2
          );
        };
        var dragvue_type_template_id_04510862_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/drag/drag.vue?vue&type=template&id=04510862&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/drag/drag.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /**
         * @module drag
         * @description 拖拽组件，用于页面中需要拖拽的元素
         * @vue-prop {Boolean} [attract=false] - 拖拽元素是否需要自动吸边
         * @vue-prop {String} [direction='all'] - 拖拽元素的拖拽方向
         * @vue-prop {Number | String} [zIndex=11] - 拖拽元素的堆叠顺序
         * @vue-prop {Object} [boundary={top: 0,left: 0,right: 0,bottom: 0}] - 拖拽元素的拖拽边界
         * @vue-data {Number} elWidth 拖拽元素的宽度
         * @vue-data {Number} elHeight 拖拽元素的高度
         * @vue-data {Number} screenWidth 屏幕的宽度
         * @vue-data {Number} screenHeight 屏幕的高度
         * @vue-data {Number} startTop 拖拽元素距离顶部的距离
         * @vue-data {Number} startLeft 拖拽元素距离左侧的距离
         * @vue-data {Object} position 鼠标点击的位置，包含距离x轴和y轴的距离
         */
        /* harmony default export */ var dragvue_type_script_lang_js_ = {
          name: 'nut-drag',
          props: {
            attract: {
              type: Boolean,
              default: false,
            },
            direction: {
              type: String,
              default: 'all',
            },
            zIndex: {
              type: [Number, String],
              default: 11,
            },
            boundary: {
              type: Object,
              default: function _default() {
                return {
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                };
              },
            },
          },
          data: function data() {
            return {
              elWidth: 0,
              elHeight: 0,
              screenWidth: 0,
              screenHeight: 0,
              startTop: 0,
              startLeft: 0,
              position: {
                x: 0,
                y: 0,
              },
            };
          },
          methods: {
            /**
             * 获取拖拽元素的属性和屏幕的宽高，初始化拖拽元素的位置
             */
            getElementInfo: function getElementInfo() {
              var el = this.$el;
              var domElem = document.documentElement;
              this.elWidth = el.offsetWidth;
              this.elHeight = el.offsetHeight;
              this.screenWidth = domElem.clientWidth;
              this.screenHeight = domElem.clientHeight;
              el.style.zIndex = this.zIndex;
              if (this.boundary.left && !el.style.left) {
                el.style.left = this.boundary.left + 'px';
              } else if (this.boundary.right && !el.style.right) {
                el.style.right = this.boundary.right + 'px';
              }
              if (this.boundary.top && !el.style.top) {
                el.style.top = this.boundary.top + 'px';
              } else if (this.boundary.bottom && !el.style.bottom) {
                el.style.bottom = this.boundary.bottom + 'px';
              }
            },
            touchStart: function touchStart(e) {
              var target = e.currentTarget;
              this.startTop = target.offsetTop; // 元素距离顶部的距离
              this.startLeft = target.offsetLeft; // 元素距离左侧的距离
              this.position.x = e.touches[0].clientX; // 鼠标点击的x轴的距离
              this.position.y = e.touches[0].clientY; // 鼠标点击的y轴的距离
              this.$el.addEventListener('touchmove', this.touchMove, false);
              this.$el.addEventListener('touchend', this.touchEnd, false);
            },
            touchMove: function touchMove(e) {
              e.preventDefault();
              var target = e.currentTarget;
              if (e.targetTouches.length == 1) {
                var touch = e.targetTouches[0];
                this.nx = touch.clientX - this.position.x;
                this.ny = touch.clientY - this.position.y;
                this.xPum = this.startLeft + this.nx;
                this.yPum = this.startTop + this.ny;
                var rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
                // 限制左右拖拽边界
                if (Math.abs(this.xPum) > rightLocation) {
                  this.xPum = rightLocation;
                } else if (this.xPum <= this.boundary.left) {
                  this.xPum = this.boundary.left;
                }
                // 限制上下拖拽边界
                if (this.yPum < this.boundary.top) {
                  this.yPum = this.boundary.top;
                } else if (this.yPum > this.screenHeight - this.elHeight - this.boundary.bottom) {
                  this.yPum = this.screenHeight - this.elHeight - this.boundary.bottom;
                }
                if (this.direction != 'y') {
                  target.style.left = this.xPum + 'px';
                }
                if (this.direction != 'x') {
                  target.style.top = this.yPum + 'px';
                }
              }
            },
            touchEnd: function touchEnd(e) {
              var target = e.currentTarget;
              var touch = e.changedTouches[0];
              var currX = touch.clientX;
              var rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
              if (currX > rightLocation) {
                currX = rightLocation;
                // console.log('往右划出边界');
              } else if (currX < this.boundary.left) {
                currX = this.boundary.left;
                // console.log('往左划出边界');
              } else {
                currX = currX < this.screenWidth / 2 ? this.boundary.left : rightLocation;
                // console.log('在边界内滑动');
              }

              if (this.direction != 'y' && this.attract) {
                if (currX < this.screenWidth / 2) {
                  this.goLeft(target);
                } else {
                  this.goRight(target, rightLocation);
                }
              }
              if (this.direction != 'x') {
                target.style.top = this.yPum + 'px';
              }
            },
            goLeft: function goLeft(target) {
              var _this = this;
              if (this.boundary.left) {
                if (target.style.left.split('px')[0] > this.boundary.left) {
                  target.style.left = target.style.left.split('px')[0] - 10 + 'px';
                  raf(function () {
                    _this.goLeft(target);
                  });
                } else {
                  target.style.left = ''.concat(this.boundary.left, 'px');
                }
              } else {
                if (target.style.left.split('px')[0] > 10) {
                  target.style.left = target.style.left.split('px')[0] - 10 + 'px';
                  raf(function () {
                    _this.goLeft(target);
                  });
                } else {
                  target.style.left = '0px';
                }
              }
            },
            goRight: function goRight(target, rightLocation) {
              var _this2 = this;
              if (rightLocation - parseInt(target.style.left.split('px')[0]) > 10) {
                target.style.left = parseInt(target.style.left.split('px')[0]) + 10 + 'px';
                raf(function () {
                  _this2.goRight(target, rightLocation);
                });
              } else {
                target.style.left = rightLocation + 'px';
              }
            },
          },
          mounted: function mounted() {
            this.getElementInfo();
          },
          activated: function activated() {
            if (this.keepAlive) {
              this.keepAlive = false;
            }
          },
          deactivated: function deactivated() {
            this.keepAlive = true;
            this.$el.removeEventListener('touchmove', this.handleScroll, false);
            this.$el.removeEventListener('touchend', this.handleScroll, false);
          },
          destroyed: function destroyed() {
            this.$el.removeEventListener('touchmove', this.handleScroll, false);
            this.$el.removeEventListener('touchend', this.handleScroll, false);
          },
        };
        // CONCATENATED MODULE: ./src/packages/drag/drag.vue?vue&type=script&lang=js&
        /* harmony default export */ var drag_dragvue_type_script_lang_js_ = dragvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/drag/drag.vue

        /* normalize component */

        var drag_component = normalizeComponent(
          drag_dragvue_type_script_lang_js_,
          dragvue_type_template_id_04510862_render,
          dragvue_type_template_id_04510862_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var drag = drag_component.exports;
        // EXTERNAL MODULE: ./src/packages/drag/drag.scss
        var drag_drag = __webpack_require__(76);

        // CONCATENATED MODULE: ./src/packages/drag/index.js

        drag.install = function (Vue) {
          Vue.component(drag.name, drag);
        };
        /* harmony default export */ var packages_drag = drag;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/address/address.vue?vue&type=template&id=594d3a3b&
        var addressvue_type_template_id_594d3a3b_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-address' },
            [
              _c(
                'nut-popup',
                {
                  staticClass: 'choose-address',
                  attrs: { round: '', position: 'bottom' },
                  on: {
                    close: _vm.close,
                    'click-overlay': _vm.clickOverlay,
                    open: function ($event) {
                      _vm.closeWay = 'self';
                    },
                  },
                  model: {
                    value: _vm.showPopup,
                    callback: function ($$v) {
                      _vm.showPopup = $$v;
                    },
                    expression: 'showPopup',
                  },
                },
                [
                  _c('div', { staticClass: 'title' }, [
                    _vm.showModule == 'custom' && _vm.type == 'exist' && _vm.backBtnIcon
                      ? _c(
                          'span',
                          { staticClass: 'arrow', on: { click: _vm.switchModule } },
                          [_c('nut-icon', { attrs: { type: 'self', url: _vm.backBtnIcon } })],
                          1
                        )
                      : _c('span', { staticClass: 'arrow' }),
                    _vm._v(' '),
                    _vm.type == 'custom' ? _c('span', [_vm._v(_vm._s(_vm.customAddressTitle))]) : _vm._e(),
                    _vm._v(' '),
                    _vm.type == 'exist' ? _c('span', [_vm._v(_vm._s(_vm.existAddressTitle))]) : _vm._e(),
                    _vm._v(' '),
                    _c(
                      'span',
                      {
                        on: {
                          click: function ($event) {
                            return _vm.handClose('cross');
                          },
                        },
                      },
                      [_vm.closeBtnIcon ? _c('nut-icon', { attrs: { size: '18px', type: 'self', url: _vm.closeBtnIcon } }) : _vm._e()],
                      1
                    ),
                  ]),
                  _vm._v(' '),
                  _vm.showModule == 'custom'
                    ? _c('div', { staticClass: 'custom-address' }, [
                        _c(
                          'div',
                          { staticClass: 'region-tab' },
                          [
                            _vm._l(_vm.selectedRegion, function (item, key, index) {
                              return _c(
                                'div',
                                {
                                  key: index,
                                  ref: 'tab-item-' + key,
                                  refInFor: true,
                                  staticClass: 'tab-item',
                                  class: [index == _vm.tabIndex ? 'active' : ''],
                                  on: {
                                    click: function ($event) {
                                      return _vm.changeRegionTab(item, key, index);
                                    },
                                  },
                                },
                                [_c('span', [_vm._v(_vm._s(_vm.getTabName(item, index)))])]
                              );
                            }),
                            _vm._v(' '),
                            _c('span', { ref: 'regionLine', staticClass: 'region-tab-line', style: { left: _vm.lineDistance + 'px' } }),
                          ],
                          2
                        ),
                        _vm._v(' '),
                        _c('div', { staticClass: 'region-con' }, [
                          _c(
                            'ul',
                            { staticClass: 'region-group' },
                            _vm._l(_vm.regionList[_vm.tabName[_vm.tabIndex]], function (item, index) {
                              return _c(
                                'li',
                                {
                                  key: index,
                                  staticClass: 'region-item',
                                  class: [_vm.selectedRegion[_vm.tabName[_vm.tabIndex]].id == item.id ? 'active' : ''],
                                  on: {
                                    click: function ($event) {
                                      return _vm.nextAreaList(item);
                                    },
                                  },
                                },
                                [
                                  _vm.selectedRegion[_vm.tabName[_vm.tabIndex]].id == item.id
                                    ? _c('nut-icon', { attrs: { type: 'self', url: __webpack_require__(19) } })
                                    : _vm._e(),
                                  _vm._v(_vm._s(item.name)),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(' '),
                  _vm.showModule == 'exist'
                    ? _c('div', { staticClass: 'exist-address' }, [
                        _c('div', { staticClass: 'exist-address-group' }, [
                          _c(
                            'ul',
                            { staticClass: 'exist-ul' },
                            _vm._l(_vm.existAddress, function (item, index) {
                              return _c(
                                'li',
                                {
                                  key: index,
                                  staticClass: 'exist-item',
                                  class: [item.selectedAddress ? 'active' : ''],
                                  on: {
                                    click: function ($event) {
                                      return _vm.selectedExist(item);
                                    },
                                  },
                                },
                                [
                                  _c('nut-icon', { attrs: { type: 'self', url: item.selectedAddress ? _vm.selectedIcon : _vm.defaultIcon } }),
                                  _vm._v(' '),
                                  _c('span', [
                                    _vm._v(_vm._s(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail)),
                                  ]),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]),
                        _vm._v(' '),
                        _vm.isShowCustomAddress && _vm.showModule == 'exist'
                          ? _c('div', { staticClass: 'choose-other', on: { click: _vm.switchModule } }, [
                              _c('div', { staticClass: 'btn' }, [_vm._v(_vm._s(_vm.customAndExistTitle))]),
                            ])
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ]
              ),
            ],
            1
          );
        };
        var addressvue_type_template_id_594d3a3b_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/address/address.vue?vue&type=template&id=594d3a3b&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/address/address.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var addressvue_type_script_lang_js_ = {
          name: 'nut-address',
          props: {
            value: {
              type: Boolean,
              default: false,
            },
            type: {
              type: String,
              default: 'custom',
            },
            customAddressTitle: {
              type: String,
              default: '请选择所在地区',
            },
            province: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            // 省
            city: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            // 市
            country: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            // 县
            town: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            // 镇
            isShowCustomAddress: {
              type: Boolean,
              default: true,
            },
            // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
            existAddress: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            // 现存地址列表
            existAddressTitle: {
              type: String,
              default: '配送至',
            },
            customAndExistTitle: {
              type: String,
              default: '选择其他地址',
            },
            defaultIcon: {
              // 地址选择列表前 - 默认的图标
              type: String,
              default: __webpack_require__(16),
            },
            selectedIcon: {
              // 地址选择列表前 - 选中的图标
              type: String,
              default: __webpack_require__(22),
            },
            closeBtnIcon: {
              // 关闭弹框按钮 icon
              type: String,
              default: __webpack_require__(18),
            },
            backBtnIcon: {
              // 选择其他地址左上角返回 icon
              type: String,
              default: __webpack_require__(17),
            },
          },
          data: function data() {
            return {
              showPopup: false,
              showModule: 'exist',
              //展示 exist 还是 custom 主要用于‘选择其他地址’
              tabIndex: 0,
              tabName: ['province', 'city', 'country', 'town'],
              regionList: {
                province: this.province,
                city: this.city,
                country: this.country,
                town: this.town,
              },
              //省、市、县、镇列表,地址id字符串,地址字符串
              selectedRegion: {
                province: {},
                city: {},
                country: {},
                town: {},
              },
              //已选择的 省、市、县、镇

              selectedExistAddress: {},
              // 当前选择的地址
              lineDistance: 20,
            };
          },
          components: {
            'nut-popup': popup,
            'nut-icon': icon,
          },
          watch: {
            value: function value(newVal, oldVal) {
              this.showPopup = newVal;
            },
            showPopup: function showPopup(newVal, oldVal) {
              if (newVal == false) this.$emit('input', false);
              if (newVal == true) {
                this.showModule = this.type;
              }
            },
            province: function province(newVal, oldVal) {
              this.regionList.province = newVal;
            },
            city: function city(newVal, oldVal) {
              this.regionList.city = newVal;
            },
            country: function country(newVal, oldVal) {
              this.regionList.country = newVal;
            },
            town: function town(newVal, oldVal) {
              this.regionList.town = newVal;
            },
            existAddress: function existAddress(newVal, oldVal) {
              var _this = this;
              this.existAddress = newVal;
              newVal.forEach(function (item, index) {
                if (item.selectedAddress) {
                  _this.selectedExistAddress = item;
                }
              });
            },
          },
          mounted: function mounted() {},
          methods: {
            //获取已选地区列表名称
            getTabName: function getTabName(item, index) {
              if (item.name) return item.name;
              if (this.tabIndex < index) {
                return item.name;
              } else {
                return '请选择';
              }
            },
            // 切换下一级列表
            nextAreaList: function nextAreaList(item) {
              // onchange 接收的参数
              var calBack = {
                custom: this.tabName[this.tabIndex],
              };
              this.selectedRegion[this.tabName[this.tabIndex]] = item;
              for (var i = this.tabIndex; i < this.tabName.length - 1; i++) {
                this.selectedRegion[this.tabName[i + 1]] = {};
              }
              if (this.tabIndex < 3) {
                this.tabIndex = this.tabIndex + 1;
                this.lineAnimation();

                // 切换下一个
                calBack.next = this.tabName[this.tabIndex];
                calBack.value = item;
                this.$emit('onChange', calBack);
                this.$emit('on-change', calBack);
              } else {
                this.handClose();
              }
            },
            //切换地区Tab
            changeRegionTab: function changeRegionTab(item, key, index) {
              this.tabIndex = index;
              this.lineAnimation();
            },
            // 移动下面的红线
            lineAnimation: function lineAnimation() {
              var _this2 = this;
              var name = 'tab-item-' + this.tabName[this.tabIndex];
              this.$nextTick(function () {
                if (_this2.$refs[name] && _this2.$refs[name][0]) {
                  var distance = _this2.$refs[name][0].offsetLeft;
                  // TweenMax.to(this.$refs.regionLine, 0.5, { left: distance });
                  _this2.lineDistance = distance;
                }
              });
            },
            // 选择现有地址
            selectedExist: function selectedExist(item) {
              var copyExistAdd = this.existAddress;
              var prevExistAdd = {};
              copyExistAdd.forEach(function (list, index) {
                if (list.selectedAddress) {
                  prevExistAdd = list;
                }
                list.selectedAddress = false;
              });
              item.selectedAddress = true;
              this.selectedExistAddress = item;
              this.$emit('selected', prevExistAdd, item, copyExistAdd);
              this.handClose();
            },
            // 关闭
            close: function close() {
              var that = this;
              var resCopy = extends_default()({}, this.selectedRegion);
              var res = {
                type: this.showModule,
                data: {},
              };
              if (this.showModule == 'custom') {
                var province = resCopy.province,
                  city = resCopy.city,
                  country = resCopy.country,
                  town = resCopy.town;
                resCopy.addressIdStr = [province.id || 0, city.id || 0, country.id || 0, town.id || 0].join('_');
                resCopy.addressStr = [province.name, city.name, country.name, town.name].join('');
                res.data = resCopy;
              } else {
                res.data = this.selectedExistAddress;
              }
              this.initAddress();
              if (this.closeWay == 'self') {
                this.$emit('close', res);
              } else {
                this.$emit('closeMask', {
                  closeWay: this.closeWay,
                });
                this.$emit('close-mask', {
                  closeWay: this.closeWay,
                });
              }
            },
            // 手动关闭 点击叉号(cross)，或者蒙层(mask)
            handClose: function handClose() {
              var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'self';
              if (!this.closeBtnIcon) return;
              this.closeWay = type == 'cross' ? 'cross' : 'self';
              this.showPopup = false;
            },
            // 点击遮罩层关闭
            clickOverlay: function clickOverlay() {
              this.closeWay = 'mask';
            },
            // 初始化
            initAddress: function initAddress() {
              for (var i = 0; i < this.tabName.length; i++) {
                this.selectedRegion[this.tabName[i]] = {};
              }
              this.tabIndex = 0;
              this.lineAnimation();
            },
            // 选择其他地址
            switchModule: function switchModule() {
              if (this.showModule == 'exist') {
                this.showModule = 'custom';
              } else {
                this.showModule = 'exist';
              }
              this.initAddress();
              this.$emit('switchModule', {
                type: this.showModule,
              });
              this.$emit('switch-module', {
                type: this.showModule,
              });
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/address/address.vue?vue&type=script&lang=js&
        /* harmony default export */ var address_addressvue_type_script_lang_js_ = addressvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/address/address.vue

        /* normalize component */

        var address_component = normalizeComponent(
          address_addressvue_type_script_lang_js_,
          addressvue_type_template_id_594d3a3b_render,
          addressvue_type_template_id_594d3a3b_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var address = address_component.exports;
        // EXTERNAL MODULE: ./src/packages/address/address.scss
        var address_address = __webpack_require__(77);

        // CONCATENATED MODULE: ./src/packages/address/index.js

        address.install = function (Vue) {
          Vue.component(address.name, address);
        };
        /* harmony default export */ var packages_address = address;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/notify/notify.vue?vue&type=template&id=365511a8&
        var notifyvue_type_template_id_365511a8_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'nut-popup',
            {
              class: ['nut-notify', 'nut-notify--' + _vm.type, { className: _vm.className }],
              style: { color: _vm.color, background: _vm.background },
              attrs: { position: 'top', overlay: false, lockScroll: false },
              on: { click: _vm.handleClick, opened: _vm.handleOpened, closed: _vm.handleClosed },
              model: {
                value: _vm.curVisible,
                callback: function ($$v) {
                  _vm.curVisible = $$v;
                },
                expression: 'curVisible',
              },
            },
            [_vm.$slots.default ? [_vm._t('default')] : [_vm._v(_vm._s(_vm.msg))]],
            2
          );
        };
        var notifyvue_type_template_id_365511a8_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/notify/notify.vue?vue&type=template&id=365511a8&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/notify/notify.vue?vue&type=script&lang=js&

        function notifyvue_type_script_lang_js_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function notifyvue_type_script_lang_js_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? notifyvue_type_script_lang_js_ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : notifyvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var notifyvue_type_script_lang_js_ = {
          name: 'nut-notify',
          props: notifyvue_type_script_lang_js_objectSpread(
            notifyvue_type_script_lang_js_objectSpread({}, overlayProps),
            {},
            {
              color: {
                type: String,
                default: '',
              },
              msg: {
                type: [Number, String],
                default: '',
              },
              duration: {
                type: [Number, String],
                default: 3000,
              },
              className: {
                type: String,
                default: '',
              },
              background: {
                type: String,
                default: '',
              },
              type: {
                type: String,
                default: 'danger',
              },
              showPopup: {
                type: Boolean,
                default: false,
              },
            }
          ),
          watch: {
            showPopup: {
              handler: function handler(val) {
                if (val) {
                  this.curVisible = val;
                  this.show();
                }
              }, // immediate: true
            },
          },
          data: function data() {
            return {
              timer: null,
              curVisible: false,
            };
          },
          components: {
            'nut-popup': popup,
          },
          methods: {
            handleClick: function handleClick() {
              typeof this.onClick === 'function' && this.onClick();
            },
            handleOpened: function handleOpened() {
              typeof this.onOpened === 'function' && this.onOpened();
            },
            handleClosed: function handleClosed() {
              typeof this.onClosed === 'function' && this.onClosed();
            },
            show: function show(force) {
              var _this = this;
              this.clearTimer();
              clearTimeout(this.textTimer);
              if (this.duration) {
                this.timer = setTimeout(function () {
                  _this.hide(force);
                }, this.duration);
              }
            },
            hide: function hide(force) {
              var _this2 = this;
              this.clearTimer();
              this.curVisible = false;
              if (force) {
                clearTimeout(this.textTimer);
              } else {
                this.textTimer = setTimeout(function () {
                  clearTimeout(_this2.textTimer);
                }, 300);
              }
            },
            clearTimer: function clearTimer() {
              if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
              }
            },
          },
          destroyed: function destroyed() {
            this.textTimer = null;
            this.timer = null;
          },
        };
        // CONCATENATED MODULE: ./src/packages/notify/notify.vue?vue&type=script&lang=js&
        /* harmony default export */ var notify_notifyvue_type_script_lang_js_ = notifyvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/notify/notify.vue

        /* normalize component */

        var notify_component = normalizeComponent(
          notify_notifyvue_type_script_lang_js_,
          notifyvue_type_template_id_365511a8_render,
          notifyvue_type_template_id_365511a8_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var notify = notify_component.exports;
        // CONCATENATED MODULE: ./src/packages/notify/_notify.js

        function _notify_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _notify_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? _notify_ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : _notify_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }

        // 扩展为类
        var NotifyConstructor = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(notify);
        var timer,
          _notify_instance,
          _notify_instanceArr = [];
        var _notify_defaultOptionsMap = {};
        var id = '0';
        // 默认传入值
        var _notify_defaultOptions = {
          type: 'danger',
          showPopup: false,
          msg: '',
          color: undefined,
          background: undefined,
          duration: 3000,
          className: '',
          onClosed: null,
          onClick: null,
          onOpened: null,
          textTimer: null,
        };
        // 当前传入值
        var _notify_currentOptions = _notify_objectSpread({}, _notify_defaultOptions);
        // 展示，挂载
        function _showNotify() {
          _notify_instance.vm = _notify_instance.$mount();
          document.body.appendChild(_notify_instance.$el);
          external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.nextTick(function () {
            _notify_instance.showPopup = true;
          });
        }
        function _notify_getInstance(obj) {
          // 默认传递的值
          var opt = {
            id: id,
          };
          extends_default()(opt, _notify_currentOptions, _notify_defaultOptionsMap[obj.type], obj);
          // console.log(opt, obj, 'obj');
          //有相同id者共用一个实例，否则新增实例
          if (opt['id'] && _notify_instanceArr[opt['id']]) {
            _notify_instance = _notify_instanceArr[opt['id']];
            _notify_instance.hide(true);
            _notify_instance = extends_default()(_notify_instance, opt);
          } else {
            _notify_instance = new NotifyConstructor({
              propsData: opt,
            });
            _notify_instance = extends_default()(_notify_instance, obj);
            opt['id'] && (_notify_instanceArr[opt['id']] = _notify_instance);
          }
          _showNotify();
          return _notify_instance;
        }
        function _notify_errorMsg(msg) {
          if (!msg) {
            console.warn('[NutUI Toast]: msg不能为空');
            return;
          }
        }
        var Notify = {
          text: function text(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _notify_errorMsg(msg);
            return _notify_getInstance(
              _notify_objectSpread(
                _notify_objectSpread({}, obj),
                {},
                {
                  msg: msg,
                }
              )
            );
          },
          primary: function primary(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _notify_errorMsg(msg);
            return _notify_getInstance(
              _notify_objectSpread(
                _notify_objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'primary',
                }
              )
            );
          },
          success: function success(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _notify_errorMsg(msg);
            return _notify_getInstance(
              _notify_objectSpread(
                _notify_objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'success',
                }
              )
            );
          },
          danger: function danger(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _notify_errorMsg(msg);
            return _notify_getInstance(
              _notify_objectSpread(
                _notify_objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'danger',
                }
              )
            );
          },
          warn: function warn(msg) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _notify_errorMsg(msg);
            return _notify_getInstance(
              _notify_objectSpread(
                _notify_objectSpread({}, obj),
                {},
                {
                  msg: msg,
                  type: 'warning',
                }
              )
            );
          },
          // 全局设置默认内容
          setDefaultOptions: function setDefaultOptions(type, options) {
            if (typeof type === 'string') {
              _notify_defaultOptionsMap[type] = options;
            } else {
              extends_default()(_notify_currentOptions, type);
            }
          },
          // 重置默认内容
          resetDefaultOptions: function resetDefaultOptions(type) {
            if (typeof type === 'string') {
              _notify_defaultOptionsMap[type] = null;
            } else {
              _notify_currentOptions = _notify_objectSpread({}, _notify_defaultOptions);
              _notify_defaultOptionsMap = {};
            }
          },
        };
        /* harmony default export */ var _notify = Notify;
        // EXTERNAL MODULE: ./src/packages/notify/notify.scss
        var notify_notify = __webpack_require__(78);

        // CONCATENATED MODULE: ./src/packages/notify/index.js

        var NotifyArr = [_notify, notify];
        NotifyArr.install = function (Vue) {
          Vue.prototype['$notify'] = _notify;
          Vue.component(notify.name, notify);
        };
        /* harmony default export */ var packages_notify = NotifyArr;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/countup/countup.vue?vue&type=template&id=77fb34c6&
        var countupvue_type_template_id_77fb34c6_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-countup' },
            [
              _vm.customBgImg != ''
                ? [
                    _vm.type == 'machine'
                      ? [
                          _c(
                            'ul',
                            { staticClass: 'run-number-machine-img', style: { height: _vm.numHeight + 'px' } },
                            _vm._l(_vm.machineNum, function (val, index) {
                              return _c('li', {
                                key: 'mImg' + index,
                                ref: 'run-number-machine-img-li',
                                refInFor: true,
                                staticClass: 'run-number-machine-img-li',
                                style: {
                                  width: _vm.numWidth + 'px',
                                  height: _vm.numHeight + 'px',
                                  backgroundImage: 'url(' + _vm.customBgImg + ')',
                                  backgroundPositionY: _vm.prizeY[index] + 'px',
                                },
                              });
                            }),
                            0
                          ),
                        ]
                      : [
                          _c(
                            'ul',
                            { staticClass: 'run-number-img', style: { height: _vm.numHeight + 'px' } },
                            [
                              _vm._l(_vm.num_total_len, function (val, index) {
                                return _c('li', {
                                  key: 'cImg' + index,
                                  staticClass: 'run-number-img-li',
                                  style: {
                                    width: _vm.numWidth + 'px',
                                    height: _vm.numHeight + 'px',
                                    left:
                                      _vm.numWidth *
                                        (index > _vm.num_total_len - _vm.pointNum - 1
                                          ? index == _vm.num_total_len - _vm.pointNum
                                            ? index * 1.5
                                            : index * 1.3
                                          : index) +
                                      'px',
                                    backgroundImage: 'url(' + _vm.customBgImg + ')',
                                    backgroundPosition:
                                      '0 ' + -(String(_vm.relNum)[index] * _vm.numHeight + _vm.customSpacNum * String(_vm.relNum)[index]) + 'px',
                                    transition: 'all linear ' + _vm.during / 10 + 'ms',
                                  },
                                });
                              }),
                              _vm._v(' '),
                              _vm.pointNum > 0
                                ? _c(
                                    'div',
                                    {
                                      staticClass: 'pointstyl',
                                      style: {
                                        width: _vm.numWidth / 2 + 'px',
                                        bottom: 0,
                                        left: _vm.numWidth * (_vm.num_total_len - _vm.pointNum) * 1.1 + 'px',
                                        fontSize: '30px',
                                      },
                                    },
                                    [_vm._v('.')]
                                  )
                                : _vm._e(),
                            ],
                            2
                          ),
                        ],
                  ]
                : [
                    _vm.scrolling
                      ? _c(
                          'ul',
                          {
                            staticClass: 'run-number',
                            style: {
                              width: _vm.numWidth * _vm.num_total_len + _vm.numWidth / 3 + 'px',
                              height: _vm.numHeight + 'px',
                              lineHeight: _vm.numHeight + 'px',
                            },
                          },
                          [
                            _vm._l(_vm.num_total_len, function (val, index) {
                              return _c(
                                'li',
                                {
                                  key: val,
                                  ref: 'numberItem',
                                  refInFor: true,
                                  style: {
                                    top: _vm.topNumber(index),
                                    left: _vm.numWidth * (index > _vm.num_total_len - _vm.pointNum - 1 ? index * 1.1 : index) + 'px',
                                  },
                                  attrs: { 'turn-number': _vm.turnNumber(index) },
                                },
                                _vm._l(_vm.to0_10, function (item, idx) {
                                  return _c(
                                    'span',
                                    {
                                      key: 'dote' + idx,
                                      style: { width: _vm.numWidth + 'px', height: _vm.numHeight + 'px', lineHeight: _vm.numHeight + 'px' },
                                    },
                                    [_vm._v('\n          ' + _vm._s(item) + '\n        ')]
                                  );
                                }),
                                0
                              );
                            }),
                            _vm._v(' '),
                            _vm.pointNum > 0
                              ? _c(
                                  'div',
                                  {
                                    staticClass: 'pointstyl',
                                    style: {
                                      width: _vm.numWidth / 3 + 'px',
                                      height: _vm.numHeight + 'px',
                                      lineHeight: _vm.numHeight + 'px',
                                      top: 0,
                                      left: _vm.numWidth * (_vm.num_total_len - _vm.pointNum) + 'px',
                                    },
                                  },
                                  [_vm._v('.')]
                                )
                              : _vm._e(),
                          ],
                          2
                        )
                      : [_vm._v('\n      ' + _vm._s(_vm.current) + '\n    ')],
                  ],
            ],
            2
          );
        };
        var countupvue_type_template_id_77fb34c6_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/countup/countup.vue?vue&type=template&id=77fb34c6&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/countup/countup.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var countupvue_type_script_lang_js_ = {
          name: 'nut-countup',
          props: {
            initNum: {
              type: Number,
              default: 0,
            },
            endNum: {
              type: Number,
              default: 0,
            },
            speed: {
              type: Number,
              default: 1,
            },
            toFixed: {
              type: Number,
              default: 0,
            },
            during: {
              type: Number,
              default: 1000,
            },
            startFlag: {
              type: Boolean,
              default: true,
            },
            // 数字滚动
            numWidth: {
              type: Number,
              default: 20,
            },
            numHeight: {
              type: Number,
              default: 20,
            },
            scrolling: {
              type: Boolean,
              default: false,
            },
            // 自定义图片
            customBgImg: {
              type: String,
              default: '',
            },
            customSpacNum: {
              type: Number,
              default: 0,
            },
            customChangeNum: {
              type: Number,
              default: 1,
            },
            // 抽奖
            type: {
              type: String,
              default: '',
            },
            machineNum: {
              type: Number,
              default: 3,
            },
            machinePrizeNum: {
              type: Number,
              default: 0,
            },
            machinePrizeLevel: {
              type: Number,
              default: 0,
            },
            machineTrunMore: {
              type: Number,
              default: 0,
            },
          },
          data: function data() {
            return {
              valFlag: false,
              current: 0,
              sortFlag: 'add',
              initDigit1: 0,
              initDigit2: 0,
              to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
              to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
              timer: null,
              totalCount: 0,
              //正整数
              pointNum: 0,
              //小数位
              numberVal: 0,
              //数字
              num_total_len: 0,
              //数字长度
              relNum: 0,
              //去除小数点
              customNumber: 1,
              prizeLevelTrun: 0,
              prizeY: [],
              prizeYPrev: [],
              // machineTransition: 'none',
              finshMachine: 0,
              notPrize: [],
              typeMachine: '',
            };
          },
          computed: {},
          watch: {
            customChangeNum: function customChangeNum(n, o) {
              this.customNumber = n;
              this.countGo();
            },
            machinePrizeLevel: function machinePrizeLevel(n, o) {
              this.prizeLevelTrun = n;
            },
            initNum: function initNum(val, oldVal) {
              this.current = val;
              this.valFlag = false;
              this.valChange();
            },
            endNum: function endNum(val, oldVal) {
              this.current = this.initNum;
              this.valFlag = false;
              this.valChange();
            },
          },
          mounted: function mounted() {
            this.current = this.initNum;
            this.valChange();
          },
          beforeDestroy: function beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null;
          },
          methods: {
            // 值变化
            valChange: function valChange() {
              var _this = this;
              if (this.valFlag) {
                return false;
              }
              if (this.startFlag) {
                if (this.scrolling || this.customBgImg) {
                  if (this.type != 'machine') {
                    this.countGo();
                  }
                } else {
                  this.countChange();
                  setTimeout(function () {
                    _this.valFlag = true;
                  }, 300);
                }
              }
            },
            // 清空定时器
            clearInterval: (function (_clearInterval) {
              function clearInterval() {
                return _clearInterval.apply(this, arguments);
              }
              clearInterval.toString = function () {
                return _clearInterval.toString();
              };
              return clearInterval;
            })(function () {
              clearInterval(this.timer);
              this.timer = null;
            }),
            // 精确计算
            calculation: function calculation(num1, num2, type) {
              var num1Digits = (num1.toString().split('.')[1] || '').length;
              var num2Digits = (num2.toString().split('.')[1] || '').length;
              var baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
              if (type == '-') {
                return (num1 * baseNum - num2 * baseNum).toFixed(0) / baseNum;
              } else {
                return (num1 * baseNum + num2 * baseNum).toFixed(0) / baseNum;
              }
            },
            // 基本用法
            countChange: function countChange() {
              var _this2 = this;
              var endNum = this.endNum,
                initNum = this.initNum,
                speed = this.speed,
                toFixed = this.toFixed;
              var countTimer = setInterval(function () {
                if (initNum > endNum) {
                  //减少
                  if (_this2.current <= endNum || _this2.current <= speed) {
                    //数字减小，有可能导致current小于speed
                    _this2.current = endNum.toFixed(toFixed);
                    clearInterval(countTimer);
                    _this2.$emit('scroll-end');
                    _this2.valFlag = false;
                  } else {
                    _this2.current = (parseFloat(_this2.current) - parseFloat(speed)).toFixed(toFixed);
                  }
                } else {
                  //增加
                  if (_this2.current >= endNum) {
                    _this2.current = endNum.toFixed(toFixed);
                    clearInterval(countTimer);
                    _this2.$emit('scroll-end');
                    _this2.valFlag = false;
                  } else {
                    _this2.current = (parseFloat(_this2.current) + parseFloat(speed)).toFixed(toFixed);
                  }
                }
              }, this.during);
            },
            // 数字滚动-top值
            topNumber: function topNumber(index) {
              var num_total_len = this.num_total_len,
                pointNum = this.pointNum,
                initDigit1 = this.initDigit1,
                initDigit2 = this.initDigit2,
                sortFlag = this.sortFlag;
              var idx1 =
                sortFlag == 'add' || sortFlag == 'equal'
                  ? initDigit2[index - (num_total_len - pointNum)]
                  : 10 - initDigit2[index - (num_total_len - pointNum)];
              var idx2 = sortFlag == 'add' || sortFlag == 'equal' ? initDigit1[index] : 10 - initDigit1[index];
              var num = index > num_total_len - pointNum - 1 ? -idx1 * 100 + '%' : index <= initDigit1.length - 1 ? -idx2 * 100 + '%' : 0;
              if (num == '-1000%') {
                num = 0;
              }
              return num;
            },
            // 数字滚动-到哪里了
            turnNumber: function turnNumber(index) {
              var num_total_len = this.num_total_len,
                pointNum = this.pointNum,
                initDigit1 = this.initDigit1,
                initDigit2 = this.initDigit2,
                sortFlag = this.sortFlag;
              var idx1 = initDigit2[index - (num_total_len - pointNum)];
              var num = index > num_total_len - pointNum - 1 ? (idx1 ? idx1 : 0) : index <= initDigit1.length - 1 ? initDigit1[index] : 0;
              return num;
            },
            countGo: function countGo() {
              var _this3 = this;
              // let val = null;
              // if (this.toFixed != 0) {
              // val = this.endNum.toFixed(this.toFixed);
              // this.initNum = this.initNum.toFixed(this.toFixed);
              // this.endNum = this.endNum.toFixed(this.toFixed);
              // }
              var initNum = this.initNum,
                endNum = this.endNum,
                toFixed = this.toFixed,
                customBgImg = this.customBgImg;
              if (customBgImg) {
                initNum = this.customNumber;
              }
              // --------------
              var startNumber1, startNumber2, endNumber1, endNumber2;
              if (initNum != 0) {
                if (toFixed != 0) {
                  initNum = initNum.toFixed(toFixed);
                }
                if (String(initNum).indexOf('.') > -1) {
                  startNumber1 = String(initNum).split('.')[0].length;
                  startNumber2 = String(initNum).split('.')[1].length;
                } else {
                  startNumber1 = String(initNum).length;
                  startNumber2 = 0;
                }
              } else {
                startNumber1 = 1;
                startNumber2 = 0;
              }
              if (endNum != 0) {
                if (toFixed != 0) {
                  endNum = endNum.toFixed(toFixed);
                }
                if (String(endNum).indexOf('.') > -1) {
                  endNumber1 = String(endNum).split('.')[0].length;
                  endNumber2 = String(endNum).split('.')[1].length;
                } else {
                  endNumber1 = String(endNum).length;
                  endNumber2 = 0;
                }
              } else {
                endNumber1 = 1;
                endNumber2 = 0;
              }
              var len1 = startNumber1 >= endNumber1 ? startNumber1 : endNumber1;
              var len2 = startNumber2 >= endNumber2 ? startNumber2 : endNumber2;
              this.num_total_len = len1 + len2;
              this.pointNum = len2;
              // --------------
              if (initNum > endNum) {
                //减少
                this.sortFlag = 'reduce';
                this.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
                this.totalCount = this.calculation(initNum, endNum, '-');
                this.numberVal = String(initNum);
              } else if (initNum < endNum) {
                //增加
                this.sortFlag = 'add';
                this.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                this.totalCount = this.calculation(endNum, initNum, '-');
                this.numberVal = String(endNum);
              } else {
                this.sortFlag = 'equal';
              }
              //将小数位数计算后，补0
              var unit = 1;
              for (var i = 0; i < this.pointNum; i++) {
                unit *= 10;
              }
              var rel_big = this.numberVal * unit; // 去除小数点后的数，unit几个零表示有几个小数
              this.relNum = rel_big;
              // this.totalCount = rel_big;
              if (toFixed != 0) {
                //计算小数点后的位数，小数位
                this.pointNum = this.numberVal.split('.')[1] ? this.numberVal.split('.')[1].length : 0;
                //数字长度
                this.num_total_len = String(rel_big).length;
              }
              if (String(initNum).indexOf('.') > -1) {
                var n = String(initNum).split('.');
                this.initDigit1 = n[0];
                this.initDigit2 = n[1];
              } else {
                this.initDigit1 = String(initNum);
                this.initDigit2 = '0';
              }
              if (this.scrolling && !customBgImg) {
                this.$nextTick(function () {
                  // 数字都是从小加到大的，所以我们循环转动最后一个数字，传入最后一个数字的DOM
                  if (_this3.sortFlag == 'equal') {
                    return false;
                  }
                  var element = _this3.$refs.numberItem[_this3.num_total_len - 1];
                  _this3.runTurn(element);
                });
              } else {
                this.imgNumberScroll();
              }
            },
            runTurn: function runTurn(el) {
              var _this4 = this;
              var that = this;
              that.clearInterval();
              var m = 1;
              if (this.pointNum != 0) {
                m = 1 / Math.pow(10, this.pointNum);
              }
              //设置定时器
              that.timer = setInterval(function () {
                that.runStep(el);
                that.totalCount = that.calculation(that.totalCount, m, '-');
                // that.totalCount--;
                if (that.totalCount <= 0) {
                  that.clearInterval();
                  _this4.$emit('scroll-end');
                  _this4.valFlag = false;
                }
              }, that.during);
            },
            runStep: function runStep(el) {
              var that = this;
              var currentTurn = el.getAttribute('turn-number');
              var turningNum = null;
              if (that.sortFlag == 'add') {
                turningNum = parseInt(currentTurn) + 1;
              } else {
                turningNum = parseInt(currentTurn) - 1 >= 0 ? parseInt(currentTurn) - 1 : 9;
              }
              // if(el.getAttribute('flag')) {el.removeAttribute('flag');}
              // let flag = parseInt(currentTurn) - 1;
              // el.setAttribute('flag', flag);
              // if(turningNum == 0) {
              //     el.setAttribute('flag', -1);
              // }
              el.setAttribute('turn-number', turningNum);
              if (el.style.transition == 'none 0s ease 0s' || turningNum == 1 || !el.style.transition) {
                el.style.transition = 'all linear '.concat(that.during, 'ms');
              }
              if (turningNum == 10 || (that.sortFlag == 'reduce' && turningNum == 0)) {
                var timeOut = null;
                // el.style.top = `-${turningNum * 100}%`;
                el.style.top = '-'.concat(that.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100, '%');
                el.setAttribute('turn-number', 0);
                timeOut = setTimeout(function () {
                  timeOut && clearTimeout(timeOut);
                  el.style.transition = 'none';
                  el.style.top = 0;
                  // 前面数字的滚动，用于递增
                  if (turningNum == 10) {
                    if (el.previousSibling) {
                      that.runStep(el.previousSibling);
                    }
                  }
                }, 0.975 * that.during);
              } else {
                // el.style.top = `-${(10-turningNum)*100}%`;
                el.style.top = '-'.concat(that.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100, '%');
              }
              // 用于递减的时候
              if (el.style.top == '-100%' && that.sortFlag == 'reduce') {
                that.runStep(el.previousSibling);
              }
            },
            // 自定义图片
            imgNumberScroll: function imgNumberScroll() {
              var _this5 = this;
              var that = this;
              var m = 1;
              if (that.pointNum != 0) {
                m = Math.pow(10, that.pointNum);
              }
              this.$nextTick(function () {
                var f = that.$el.querySelector('.run-number-img');
                setTimeout(function () {
                  that.relNum = that.calculation(that.relNum, m * that.speed, '+');
                }, that.during);
                f.addEventListener('webkitTransitionEnd', function () {
                  _this5.$emit('scroll-end');
                  _this5.valFlag = false;
                  setTimeout(function () {
                    that.relNum = that.calculation(that.relNum, m * that.speed, '+');
                  }, that.during);
                });
              });
            },
            // 不中奖设置随机数
            generateRandom: function generateRandom() {
              this.notPrize = [];
              while (this.notPrize.length < 3) {
                var rand = Math.floor(Math.random() * this.machinePrizeNum + 1);
                if (this.notPrize.indexOf(rand) == -1) {
                  this.notPrize.push(rand);
                }
              }
            },
            // 抽奖
            machineLuck: function machineLuck() {
              var _this6 = this;
              this.machineTrunMore = this.machineTrunMore < 0 ? 0 : this.machineTrunMore;
              var distance = this.numHeight * this.machinePrizeNum; // 所有奖品的高度，雪碧图的高度
              if (this.prizeLevelTrun < 0) {
                this.generateRandom();
              }
              var _loop = function _loop(i) {
                setTimeout(function () {
                  var turn = distance * (i + 1 + parseFloat(_this6.machineTrunMore));
                  if (_this6.prizeYPrev.length != 0) {
                    // this.machineTransition = 'none';
                    // console.log(this.prizeYPrev[i]-(this.numHeight * this.machinePrizeNum));
                    _this6.$set(_this6.prizeY, i, _this6.prizeYPrev[i]);
                  }
                  var local = _this6.prizeYPrev[i] ? _this6.prizeYPrev[i] : 0;
                  var newLocation = turn + local + (_this6.machinePrizeNum - _this6.prizeLevelTrun + 1) * _this6.numHeight + (distance - local);
                  if (_this6.prizeLevelTrun < 0) {
                    newLocation += _this6.numHeight * _this6.notPrize[i];
                  }
                  _this6.scrollTime(
                    i,
                    // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
                    newLocation,
                    local
                  );
                }, 500 * i);
              };
              for (var i = 0; i < this.machineNum; i++) {
                _loop(i);
              }
            },
            scrollTime: function scrollTime(index, total, num) {
              var _this7 = this;
              // this.machineTransition = `all linear ${this.during/this.machinePrizeNum}ms`;
              var t = setInterval(function () {
                if (num <= total) {
                  num += 10;
                  _this7.$set(_this7.prizeY, index, parseFloat(num));
                } else {
                  clearInterval(t);
                  t = null;
                  _this7.finshMachine += 1;
                  _this7.$set(_this7.prizeY, index, total);
                  // 动画未完成的时候触发了判断，需要加个延时或者监听最后一个动画执行结束，保证在动画执行结束
                  // this.$nextTick(() => {
                  //     var f = document.getElementsByClassName('run-number-machine-img-li');
                  //     f[f.length-1].addEventListener('webkitTransitionEnd', () => {
                  //         setTimeout(() => {
                  //             if(this.finshMachine == this.machineNum) {
                  //                 this.finshMachine = 0;
                  //             }
                  //         },200)
                  //     });
                  // })
                  if (_this7.finshMachine == _this7.machineNum) {
                    var distance = _this7.numHeight * _this7.machinePrizeNum;
                    _this7.prizeYPrev = [];
                    var prevAry = JSON.parse(JSON.stringify(_this7.prizeY));
                    prevAry.forEach(function (item) {
                      var n = item;
                      while (n > distance) {
                        n -= distance;
                      }
                      _this7.prizeYPrev.push(n);
                    });
                    setTimeout(function () {
                      _this7.finshMachine = 0;
                      if (_this7.prizeLevelTrun < 0) {
                        _this7.$emit('scroll-end', false);
                        _this7.valFlag = false;
                      } else {
                        _this7.$emit('scroll-end', true);
                        _this7.valFlag = false;
                      }
                    }, 130);
                  }
                }
              }, 30);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/countup/countup.vue?vue&type=script&lang=js&
        /* harmony default export */ var countup_countupvue_type_script_lang_js_ = countupvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/countup/countup.vue

        /* normalize component */

        var countup_component = normalizeComponent(
          countup_countupvue_type_script_lang_js_,
          countupvue_type_template_id_77fb34c6_render,
          countupvue_type_template_id_77fb34c6_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var countup = countup_component.exports;
        // EXTERNAL MODULE: ./src/packages/countup/countup.scss
        var countup_countup = __webpack_require__(79);

        // CONCATENATED MODULE: ./src/packages/countup/index.js

        countup.install = function (Vue) {
          Vue.component(countup.name, countup);
        };
        /* harmony default export */ var packages_countup = countup;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/fixednav/fixednav.vue?vue&type=template&id=18b3b575&
        var fixednavvue_type_template_id_18b3b575_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-fixednav', class: _vm.styled },
            [
              _c(
                'div',
                { staticStyle: { position: 'relative', 'z-index': '1' } },
                [
                  _c('nut-popup', {
                    model: {
                      value: _vm.defaultActive,
                      callback: function ($$v) {
                        _vm.defaultActive = $$v;
                      },
                      expression: 'defaultActive',
                    },
                  }),
                ],
                1
              ),
              _vm._v(' '),
              _vm._t('list', [
                _c(
                  'ul',
                  { staticClass: 'fixed-list' },
                  _vm._l(_vm.navList, function (item, index) {
                    return _c(
                      'li',
                      {
                        key: item.id || index,
                        on: {
                          click: function ($event) {
                            return _vm.selected(item, $event);
                          },
                        },
                      },
                      [
                        _c('img', { attrs: { src: item.icon } }),
                        _vm._v(' '),
                        _c('span', [_vm._v(_vm._s(item.text))]),
                        _vm._v(' '),
                        item.num ? _c('b', [_vm._v(_vm._s(item.num))]) : _vm._e(),
                      ]
                    );
                  }),
                  0
                ),
              ]),
              _vm._v(' '),
              _c(
                'div',
                {
                  staticClass: 'fixed-btn',
                  on: {
                    click: function ($event) {
                      _vm.defaultActive = !_vm.defaultActive;
                    },
                  },
                },
                [
                  _vm._t('btn', [
                    _c('img', {
                      attrs: { src: 'https://img14.360buyimg.com/imagetools/jfs/t1/149975/30/1615/368/5ef86176Eb75bae46/5f70ae80a2d567b4.png' },
                    }),
                    _vm._v(' '),
                    _c('span', [_vm._v(_vm._s(_vm.defaultActive ? _vm.activeText : _vm.unActiveText))]),
                  ]),
                ],
                2
              ),
            ],
            2
          );
        };
        var fixednavvue_type_template_id_18b3b575_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/fixednav/fixednav.vue?vue&type=template&id=18b3b575&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/fixednav/fixednav.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var fixednavvue_type_script_lang_js_ = {
          name: 'nut-fixednav',
          props: {
            active: {
              type: Boolean,
              default: false,
            },
            navList: {
              default: function _default() {
                return [];
              },
              type: Array,
            },
            activeText: {
              default: '收起导航',
              type: String,
            },
            unActiveText: {
              default: '快速导航',
              type: String,
            },
            type: {
              default: 'right',
              type: String,
            },
          },
          computed: {
            styled: function styled() {
              return defineProperty_default()(
                {
                  active: this.defaultActive,
                },
                this.defaultType,
                true
              );
            },
          },
          watch: {
            active: function active(newV, oldV) {
              this.defaultActive = newV;
            },
            defaultActive: function defaultActive(newV, oldV) {
              this.$emit('update:active', newV);
            },
          },
          data: function data() {
            return {
              defaultActive: false,
              defaultType: '',
            };
          },
          mounted: function mounted() {
            this.defaultActive = this.active;
            this.defaultType = this.type;
          },
          methods: {
            selected: function selected(item, $event) {
              this.$emit('selected', {
                item: item,
                $event: $event,
              });
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/fixednav/fixednav.vue?vue&type=script&lang=js&
        /* harmony default export */ var fixednav_fixednavvue_type_script_lang_js_ = fixednavvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/fixednav/fixednav.vue

        /* normalize component */

        var fixednav_component = normalizeComponent(
          fixednav_fixednavvue_type_script_lang_js_,
          fixednavvue_type_template_id_18b3b575_render,
          fixednavvue_type_template_id_18b3b575_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var fixednav = fixednav_component.exports;
        // EXTERNAL MODULE: ./src/packages/fixednav/fixednav.scss
        var fixednav_fixednav = __webpack_require__(80);

        // CONCATENATED MODULE: ./src/packages/fixednav/index.js

        fixednav.install = function (Vue) {
          Vue.component(fixednav.name, fixednav);
        };
        /* harmony default export */ var packages_fixednav = fixednav;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/collapse/collapse.vue?vue&type=template&id=0f2e097d&
        var collapsevue_type_template_id_0f2e097d_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-collapse' }, [_vm._t('default')], 2);
        };
        var collapsevue_type_template_id_0f2e097d_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/collapse/collapse.vue?vue&type=template&id=0f2e097d&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/collapse/collapse.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //

        /* harmony default export */ var collapsevue_type_script_lang_js_ = {
          name: 'nut-collapse',
          model: {
            prop: 'value',
            event: 'change-active',
          },
          props: {
            value: {
              type: String | Number,
            },
            accordion: {
              type: Boolean,
            },
            expandIconPosition: {
              type: String,
              default: 'right',
            },
            icon: {
              type: String,
              default: '',
            },
            rotate: {
              type: Number | String,
              default: 180,
            },
          },
          watch: {
            value: function value(newVal, oldVal) {
              this.accordionFun(newVal);
            },
          },
          data: function data() {
            return {};
          },
          methods: {
            changeEvt: function changeEvt(name) {
              if (this.$parent.change && typeof this.$parent.change == 'function') {
                this.$parent.change(name);
              } else {
                this.$emit('change', name);
              }
            },
            changeValAry: function changeValAry(name) {
              var index = -1;
              this.value.forEach(function (item, idx) {
                if (String(item) == String(name)) {
                  index = idx;
                }
              });
              var v = JSON.parse(JSON.stringify(this.value));
              index > -1 ? v.splice(index, 1) : v.push(name);
              this.$emit('change-active', v);
              this.changeEvt(v);
            },
            changeVal: function changeVal(val) {
              this.$emit('change-active', val);
              this.changeEvt(val);
            },
            // 手风琴模式将所有的item收起，然后对应的展开（默认）
            // 对于展开的再次点击的将其设置成收起，动画效果在item组件中执行
            accordionFun: function accordionFun(val) {
              if (val instanceof Array) {
              } else {
                this.$children.forEach(function (item) {
                  if (item.name == val && item.openExpanded) {
                    item.changeOpen(false);
                  } else {
                    item.name == val ? item.changeOpen(true) : item.changeOpen(false);
                    item.animation();
                  }
                });
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/collapse/collapse.vue?vue&type=script&lang=js&
        /* harmony default export */ var collapse_collapsevue_type_script_lang_js_ = collapsevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/collapse/collapse.vue

        /* normalize component */

        var collapse_component = normalizeComponent(
          collapse_collapsevue_type_script_lang_js_,
          collapsevue_type_template_id_0f2e097d_render,
          collapsevue_type_template_id_0f2e097d_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var collapse = collapse_component.exports;
        // EXTERNAL MODULE: ./src/packages/collapse/collapse.scss
        var collapse_collapse = __webpack_require__(81);

        // CONCATENATED MODULE: ./src/packages/collapse/index.js

        collapse.install = function (Vue) {
          Vue.component(collapse.name, collapse);
        };
        /* harmony default export */ var packages_collapse = collapse;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/luckycard/luckycard.vue?vue&type=template&id=1a2402ac&
        var luckycardvue_type_template_id_1a2402ac_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'nut-luckycard', style: { height: _vm.height + 'px', width: _vm.width + 'px' } }, [
            _c('div', {
              staticClass: 'nut-content',
              style: { backgroundColor: _vm.backgroundColor, fontSize: _vm.fontSize + 'px' },
              domProps: { innerHTML: _vm._s(_vm.content) },
            }),
          ]);
        };
        var luckycardvue_type_template_id_1a2402ac_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/luckycard/luckycard.vue?vue&type=template&id=1a2402ac&

        // CONCATENATED MODULE: ./src/packages/luckycard/luckycard.js
        /*
         * lucky-card.js - Scratch CARDS based on HTML5 Canvas
         *
         * Copyright (c) 2015 Frans Lee dmon@foxmail.com
         *
         * Licensed under the MIT license:
         *   http://www.opensource.org/licenses/mit-license.php
         *
         * Version:  1.0.3
         */

        /**
         * Instantiate parameters
         *
         * @constructor
         */

        function LuckyCard(settings, callback) {
          this.cover = null;
          this.ctx = null;
          this.scratchDiv = settings.scratchDiv;
          this.cardDiv = null;
          this.cHeight = 0;
          this.cWidth = 0;
          this.supportTouch = false;
          this.events = [];
          this.startEventHandler = null;
          this.moveEventHandler = null;
          this.endEventHandler = null;
          this.opt = {
            coverColor: '#C5C5C5',
            coverImg: '',
            ratio: 0.8,
            callback: null,
          };
          this.init(settings, callback);
        }
        function _calcArea(ctx, callback, ratio) {
          var pixels = ctx.getImageData(0, 0, this.cWidth, this.cHeight);
          var transPixels = [];
          _forEach(pixels.data, function (item, i) {
            var pixel = pixels.data[i + 3];
            if (pixel === 0) {
              transPixels.push(pixel);
            }
          });
          if (transPixels.length / pixels.data.length > ratio) {
            callback && typeof callback === 'function' && callback();
          }
        }
        function _forEach(items, callback) {
          return Array.prototype.forEach.call(items, function (item, idx) {
            callback(item, idx);
          });
        }
        function _isCanvasSupported() {
          var elem = document.createElement('canvas');
          return !!(elem.getContext && elem.getContext('2d'));
        }

        /**
         * touchstart/mousedown event handler
         */
        function _startEventHandler(event) {
          event.preventDefault();
          this.moveEventHandler = _moveEventHandler.bind(this);
          this.cover.addEventListener(this.events[1], this.moveEventHandler, false);
          this.endEventHandler = _endEventHandler.bind(this);
          document.addEventListener(this.events[2], this.endEventHandler, false);
        }
        /**
         * touchmove/mousemove event handler
         */
        function _moveEventHandler(event) {
          event.preventDefault();
          var evt = this.supportTouch ? event.touches[0] : event;
          var coverPos = this.cover.getBoundingClientRect();
          var pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
          var mouseX = evt.pageX - coverPos.left - pageScrollLeft;
          var mouseY = evt.pageY - coverPos.top - pageScrollTop;
          this.ctx.beginPath();
          this.ctx.fillStyle = '#FFFFFF';
          this.ctx.globalCompositeOperation = 'destination-out';
          this.ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
          this.ctx.fill();
        }
        /**
         * touchend/mouseup event handler
         */
        function _endEventHandler(event) {
          event.preventDefault();
          if (this.opt.callback && typeof this.opt.callback === 'function') _calcArea.call(this, this.ctx, this.opt.callback, this.opt.ratio);
          this.cover.removeEventListener(this.events[1], this.moveEventHandler, false);
          document.removeEventListener(this.events[2], this.endEventHandler, false);
        }
        /**
         * Create Canvas element
         */
        LuckyCard.prototype.createCanvas = function () {
          this.cover = document.createElement('canvas');
          this.cover.className = 'nut-cover';
          this.cover.height = this.cHeight;
          this.cover.width = this.cWidth;
          this.ctx = this.cover.getContext('2d');
          if (this.opt.coverImg) {
            var _this = this;
            var coverImg = new Image();
            coverImg.src = this.opt.coverImg;
            coverImg.onload = function () {
              _this.ctx.drawImage(coverImg, 0, 0, _this.cover.width, _this.cover.height);
            };
          } else {
            this.ctx.fillStyle = this.opt.coverColor;
            this.ctx.fillRect(0, 0, this.cover.width, this.cover.height);
          }
          this.scratchDiv.appendChild(this.cover);
          this.cardDiv.style.opacity = 1;
        };

        /**
         * To detect whether support touch events
         */
        LuckyCard.prototype.eventDetect = function () {
          if ('ontouchstart' in window) this.supportTouch = true;
          this.events = this.supportTouch ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup'];
          this.addEvent();
        };

        /**
         * Add touchstart/mousedown event listener
         */
        LuckyCard.prototype.addEvent = function () {
          this.startEventHandler = _startEventHandler.bind(this);
          this.cover.addEventListener(this.events[0], this.startEventHandler, false);
        };

        /**
         * Clear pixels of canvas
         */
        LuckyCard.prototype.clearCover = function () {
          this.ctx.clearRect(0, 0, this.cover.width, this.cover.height);
          this.cover.removeEventListener(this.events[0], this.startEventHandler);
          this.cover.removeEventListener(this.events[1], this.moveEventHandler);
          this.cover.removeEventListener(this.events[2], this.endEventHandler);
        };

        /**
         * LuckyCard initializer
         *
         * @param {Object} settings  Settings for LuckyCard
         * @param {function} callback  callback function
         */
        LuckyCard.prototype.init = function (settings, callback) {
          if (!_isCanvasSupported()) {
            alert('对不起，当前浏览器不支持Canvas，无法使用本控件！');
            return;
          }
          var _this = this;
          _forEach(arguments, function (item) {
            if (typeof_default()(item) === 'object') {
              for (var k in item) {
                if (k === 'callback' && typeof item[k] === 'function') {
                  _this.opt.callback = item[k].bind(_this);
                } else {
                  k in _this.opt && (_this.opt[k] = item[k]);
                }
              }
            } else if (typeof item === 'function') {
              _this.opt.callback = item.bind(_this);
            }
          });
          /* this.scratchDiv = document.getElementById('scratch');*/
          if (!this.scratchDiv) return;
          this.cardDiv = this.scratchDiv.querySelector('.nut-content');
          if (!this.cardDiv) return;
          this.cHeight = this.cardDiv.clientHeight;
          this.cWidth = this.cardDiv.clientWidth;
          this.cardDiv.style.opacity = 0;
          this.createCanvas();
          this.eventDetect();
        };

        /**
         * To generate an instance of object
         *
         * @param {Object} settings  Settings for LuckyCard
         * @param {function} callback  callback function
         */
        LuckyCard.case = function (settings, callback) {
          return new LuckyCard(settings, callback);
        };
        /* harmony default export */ var luckycard = LuckyCard.case;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/luckycard/luckycard.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var luckycardvue_type_script_lang_js_ = {
          name: 'nut-luckycard',
          props: {
            content: {
              type: String,
              default: '',
            },
            height: {
              type: [String, Number],
              default: 50,
            },
            width: {
              type: [String, Number],
              default: 300,
            },
            coverColor: {
              type: String,
              default: '#C5C5C5',
            },
            coverImg: {
              type: String,
              default: '',
            },
            fontSize: {
              type: [String, Number],
              default: 20,
            },
            backgroundColor: {
              type: String,
              default: '#FFFFFF',
            },
            ratio: {
              type: [String, Number],
              default: 0.5,
            },
          },
          data: function data() {
            return {
              luckcard: null,
            };
          },
          methods: {
            clearCover: function clearCover() {
              console.log(this.luckcard);
              this.luckcard.clearCover();
            },
          },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              var _vm = _this;
              _this.luckcard = luckycard({
                scratchDiv: _this.$el,
                coverColor: _this.coverColor,
                coverImg: _this.coverImg,
                ratio: Number(_this.ratio),
                callback: function callback() {
                  //console.log(this);
                  this.clearCover();
                  _vm.$emit('open', this);
                },
              });
            });
          },
        };
        // CONCATENATED MODULE: ./src/packages/luckycard/luckycard.vue?vue&type=script&lang=js&
        /* harmony default export */ var luckycard_luckycardvue_type_script_lang_js_ = luckycardvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./src/packages/luckycard/luckycard.vue?vue&type=style&index=0&id=1a2402ac&prod&lang=scss&
        var luckycardvue_type_style_index_0_id_1a2402ac_prod_lang_scss_ = __webpack_require__(129);

        // CONCATENATED MODULE: ./src/packages/luckycard/luckycard.vue

        /* normalize component */

        var luckycard_component = normalizeComponent(
          luckycard_luckycardvue_type_script_lang_js_,
          luckycardvue_type_template_id_1a2402ac_render,
          luckycardvue_type_template_id_1a2402ac_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var luckycard_luckycard = luckycard_component.exports;
        // EXTERNAL MODULE: ./src/packages/luckycard/luckycard.scss
        var packages_luckycard_luckycard = __webpack_require__(83);

        // CONCATENATED MODULE: ./src/packages/luckycard/index.js

        luckycard_luckycard.install = function (Vue) {
          Vue.component(luckycard_luckycard.name, luckycard_luckycard);
        };
        /* harmony default export */ var packages_luckycard = luckycard_luckycard;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/numberkeyboard/numberkeyboard.vue?vue&type=template&id=fd18319c&
        var numberkeyboardvue_type_template_id_fd18319c_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('transition', { attrs: { name: 'nut-board-slide-up' }, on: { 'after-enter': _vm.afterEnter, 'after-leave': _vm.afterLeave } }, [
            _c(
              'div',
              { directives: [{ name: 'show', rawName: 'v-show', value: _vm.visible, expression: 'visible' }], staticClass: 'nut-numberkeyboard' },
              [
                _vm.title
                  ? _c('div', { staticClass: 'number-board-header' }, [
                      _c('h3', { staticClass: 'tit' }, [_vm._v(_vm._s(_vm.title))]),
                      _vm._v(' '),
                      _c(
                        'span',
                        {
                          staticClass: 'keyboard-close',
                          on: {
                            click: function () {
                              return _vm.closeBoard();
                            },
                          },
                        },
                        [_vm._v('完成')]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(' '),
                _c('div', { staticClass: 'number-board-body' }, [
                  _c(
                    'div',
                    { staticClass: 'number-board' },
                    _vm._l(_vm.keysList, function (item) {
                      return _c(
                        'div',
                        {
                          key: 'key' + item.id,
                          class: [
                            'key-board-wrapper',
                            {
                              'key-board-wrapper-large':
                                item.id == 0 && _vm.type == 'rightColumn' && Array.isArray(_vm.customKey) && _vm.customKey.length == 1,
                            },
                          ],
                        },
                        [
                          _c(
                            'div',
                            {
                              class: [
                                'key',
                                { active: item.id == _vm.clickKeyIndex },
                                { lock: item.type == 'lock' },
                                { delete: item.type == 'delete' },
                              ],
                              on: {
                                touchstart: function (event) {
                                  return _vm.onTouchstart(item, event);
                                },
                                touchmove: function (event) {
                                  return _vm.onTouchMove(item, event);
                                },
                                touchend: _vm.onTouchEnd,
                              },
                            },
                            [
                              item.type == 'number' || item.type == 'custom' ? [_vm._v(_vm._s(item.id))] : _vm._e(),
                              _vm._v(' '),
                              item.type == 'lock'
                                ? _c('img', {
                                    attrs: {
                                      src: 'https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png',
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(' '),
                              item.type == 'delete'
                                ? _c('img', {
                                    attrs: {
                                      src: 'https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png',
                                    },
                                  })
                                : _vm._e(),
                            ],
                            2
                          ),
                        ]
                      );
                    }),
                    0
                  ),
                  _vm._v(' '),
                  _vm.type == 'rightColumn'
                    ? _c('div', { staticClass: 'number-board-sidebar' }, [
                        _c('div', { staticClass: 'key-board-wrapper' }, [
                          _c(
                            'div',
                            {
                              class: ['key', { active: _vm.clickKeyIndex == 'delete' }],
                              on: {
                                touchstart: function (event) {
                                  return _vm.onTouchstart({ id: 'delete', type: 'delete' }, event);
                                },
                                touchmove: function (event) {
                                  return _vm.onTouchMove({ id: 'delete', type: 'delete' }, event);
                                },
                                touchend: _vm.onTouchEnd,
                              },
                            },
                            [
                              _c('img', {
                                attrs: {
                                  src: 'https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png',
                                },
                              }),
                            ]
                          ),
                        ]),
                        _vm._v(' '),
                        _vm.title == ''
                          ? _c(
                              'div',
                              {
                                staticClass: 'key-board-wrapper',
                                on: {
                                  click: function () {
                                    return _vm.closeBoard();
                                  },
                                },
                              },
                              [
                                _c('div', { class: ['key', 'finish', { activeFinsh: _vm.clickKeyIndex == 'finish' }] }, [
                                  _vm._v('\n            完成\n          '),
                                ]),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ]),
              ]
            ),
          ]);
        };
        var numberkeyboardvue_type_template_id_fd18319c_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/numberkeyboard/numberkeyboard.vue?vue&type=template&id=fd18319c&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/numberkeyboard/numberkeyboard.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var numberkeyboardvue_type_script_lang_js_ = {
          name: 'nut-numberkeyboard',
          props: {
            title: {
              type: String,
              default: '',
            },
            visible: {
              type: Boolean,
              default: false,
            },
            type: {
              type: String,
              default: 'default',
            },
            customKey: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
            value: {
              type: String,
              default: '',
            },
            maxlength: {
              type: [Number, String],
              default: 6,
            },
          },
          model: {
            prop: 'value',
            event: 'update:value',
          },
          computed: {
            keysList: function keysList() {
              if (this.type == 'rightColumn' || this.title != '') {
                return this.genCustomKeys();
              }
              return this.defaultKey();
            },
          },
          data: function data() {
            return {
              once: 0,
              keys: [],
              clickKeyIndex: undefined,
            };
          },
          beforeDestroy: function beforeDestroy() {
            document.getElementsByTagName('body')[0].removeEventListener('click', function () {});
          },
          mounted: function mounted() {
            var that = this;
            this.$nextTick(function () {
              var targetArea = that.$el;
              document.getElementsByTagName('body')[0].addEventListener('click', function (event) {
                var e = event || window.event;
                var elem = e.target;
                if (targetArea.contains(elem)) {
                  var text = elem.innerText;
                  // console.log("在区域内");
                  if (text == '完成') {
                    that.$emit('close');
                  }
                } else {
                  // console.log("在区域外");
                  if (that.once == 0 && that.visible) {
                    that.once += 1;
                    return false;
                  }
                  that.closeBoard();
                }
              });
            });
          },
          created: function created() {
            if (this.visible) {
              this.once += 1;
            }
          },
          methods: {
            getBasicKeys: function getBasicKeys() {
              var keys = [];
              for (var i = 1; i <= 9; i++) {
                keys.push({
                  id: i,
                  type: 'number',
                });
              }
              return keys;
            },
            defaultKey: function defaultKey() {
              return [].concat(toConsumableArray_default()(this.getBasicKeys()), [
                {
                  id: 'lock',
                  type: 'lock',
                },
                {
                  id: 0,
                  type: 'number',
                },
                {
                  id: 'delete',
                  type: 'delete',
                },
              ]);
            },
            genCustomKeys: function genCustomKeys() {
              var keys = this.getBasicKeys();
              var customKey = this.customKey;
              var customKeys = Array.isArray(customKey) ? customKey : [customKey];
              if (customKeys.length > 2) {
                customKeys = [customKeys[0], customKeys[1]];
              }
              if (customKeys.length === 1) {
                if (this.title) {
                  keys.push(
                    {
                      id: customKeys[0],
                      type: 'custom',
                    },
                    {
                      id: 0,
                      type: 'number',
                    },
                    {
                      id: 'delete',
                      type: 'delete',
                    }
                  );
                } else {
                  keys.push(
                    {
                      id: 0,
                      type: 'number',
                    },
                    {
                      id: customKeys[0],
                      type: 'custom',
                    }
                  );
                }
              } else if (customKeys.length === 2) {
                keys.push(
                  {
                    id: customKeys[0],
                    type: 'custom',
                  },
                  {
                    id: 0,
                    type: 'number',
                  },
                  {
                    id: customKeys[1],
                    type: 'custom',
                  }
                );
                if (this.title) {
                  keys.push({
                    id: 'delete',
                    type: 'delete',
                  });
                }
              } else {
                keys.push({
                  id: 0,
                  type: 'number',
                });
              }
              return keys;
            },
            afterEnter: function afterEnter() {
              this.$emit('enter');
            },
            afterLeave: function afterLeave() {
              this.$emit('leave');
            },
            onTouchstart: function onTouchstart(item, event) {
              event.stopPropagation();
              this.clickKeyIndex = item.id;
              if (item.type == 'number' || item.type == 'custom') {
                this.$emit('input', item.id);
                if (this.value.length < this.maxlength) {
                  this.$emit('update:value', this.value + item.id);
                }
              }
              if (item.type == 'lock') {
                this.closeBoard();
              }
              if (item.type == 'delete') {
                this.$emit('delete');
                this.$emit('update:value', this.value.slice(0, this.value.length - 1));
              }
            },
            onTouchMove: function onTouchMove(id, event) {
              event.stopPropagation();
              // this.clickKeyIndex = id;
            },
            onTouchEnd: function onTouchEnd() {
              this.clickKeyIndex = undefined;
            },
            closeBoard: function closeBoard() {
              if (this.once > 0) {
                this.once = 0;
                this.$emit('close');
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/numberkeyboard/numberkeyboard.vue?vue&type=script&lang=js&
        /* harmony default export */ var numberkeyboard_numberkeyboardvue_type_script_lang_js_ = numberkeyboardvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/numberkeyboard/numberkeyboard.vue

        /* normalize component */

        var numberkeyboard_component = normalizeComponent(
          numberkeyboard_numberkeyboardvue_type_script_lang_js_,
          numberkeyboardvue_type_template_id_fd18319c_render,
          numberkeyboardvue_type_template_id_fd18319c_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var numberkeyboard = numberkeyboard_component.exports;
        // EXTERNAL MODULE: ./src/packages/numberkeyboard/numberkeyboard.scss
        var numberkeyboard_numberkeyboard = __webpack_require__(84);

        // CONCATENATED MODULE: ./src/packages/numberkeyboard/index.js

        numberkeyboard.install = function (Vue) {
          Vue.component(numberkeyboard.name, numberkeyboard);
        };
        /* harmony default export */ var packages_numberkeyboard = numberkeyboard;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/collapseitem/collapseitem.vue?vue&type=template&id=db6f3b10&
        var collapseitemvue_type_template_id_db6f3b10_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              class: [
                'nut-collapse-item',
                { 'nut-collapse-item-left': _vm.classDirection == 'left' },
                { 'nut-collapse-item-icon': this.$parent.icon },
              ],
            },
            [
              _c(
                'div',
                {
                  class: ['collapse-item', { 'item-expanded': _vm.openExpanded }, { 'nut-collapse-item-disabled': _vm.disabled }],
                  on: { click: _vm.toggleOpen },
                },
                [
                  _c('div', { staticClass: 'collapse-title' }, [_c('span', { domProps: { innerHTML: _vm._s(_vm.title) } })]),
                  _vm._v(' '),
                  _vm.subTitle ? _c('span', { staticClass: 'subTitle', domProps: { innerHTML: _vm._s(_vm.subTitle) } }) : _vm._e(),
                  _vm._v(' '),
                  this.$parent.icon
                    ? _c('i', {
                        class: ['collapse-icon', { 'col-expanded': _vm.openExpanded }, { 'collapse-icon-disabled': _vm.disabled }],
                        style: _vm.iconStyle,
                      })
                    : _c('i', { class: ['collapse-icon', { 'col-expanded': _vm.openExpanded }, { 'collapse-icon-disabled': _vm.disabled }] }),
                ]
              ),
              _vm._v(' '),
              _c('div', { ref: 'wrapper', class: ['collapse-wrapper'], on: { transitionend: _vm.onTransitionEnd } }, [
                _c('div', { ref: 'content', staticClass: 'collapse-content' }, [_vm._t('default')], 2),
              ]),
            ]
          );
        };
        var collapseitemvue_type_template_id_db6f3b10_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/collapseitem/collapseitem.vue?vue&type=template&id=db6f3b10&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/collapseitem/collapseitem.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var collapseitemvue_type_script_lang_js_ = {
          name: 'nut-collapse-item',
          props: {
            title: {
              type: String,
              default: '',
            },
            subTitle: {
              type: String,
              default: '',
            },
            disabled: {
              type: Boolean,
              default: false,
            },
            name: {
              type: Number | String,
              default: -1,
              required: true,
            },
          },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              var active = _this.$parent && _this.$parent.value;
              if (typeof active == 'number' || typeof active == 'string') {
                if (_this.name == active) {
                  _this.defaultOpen();
                }
              }
              if (active instanceof Array) {
                var f = active.filter(function (item) {
                  return item == _this.name;
                });
                if (f.length > 0) {
                  _this.defaultOpen();
                }
              }
            });
            this.classDirection = this.$parent.expandIconPosition;
            if (this.$parent.icon) {
              this.$set(this.iconStyle, 'background-image', 'url(' + this.$parent.icon + ')');
            }
          },
          data: function data() {
            return {
              openExpanded: false,
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
            defaultOpen: function defaultOpen() {
              this.$parent.accordion ? this.$parent.accordionFun(this.name) : this.open();
              if (this.$parent.icon) {
                this.$set(this.iconStyle, 'transform', 'rotate(' + this.$parent.rotate + 'deg)');
              }
            },
            toggleOpen: function toggleOpen() {
              // this.$parent.changeEvt(this.name);
              if (this.$parent.accordion) {
                if (this.$parent.value == this.name) {
                  this.$parent.accordionFun(this.name);
                }
                this.animation();
                this.$parent.changeVal(this.name);
              } else {
                this.$parent.changeValAry(this.name);
                this.open();
              }
            },
            open: function open() {
              this.openExpanded = !this.openExpanded;
              this.animation();
            },
            // 手风琴模式
            animation: function animation() {
              var _this2 = this;
              this.$nextTick(function () {
                var _this2$$refs = _this2.$refs,
                  content = _this2$$refs.content,
                  wrapper = _this2$$refs.wrapper;
                if (!content || !wrapper) {
                  return;
                }
                var offsetHeight = content.offsetHeight;
                if (offsetHeight) {
                  var contentHeight = ''.concat(offsetHeight, 'px');
                  wrapper.style.willChange = 'height';
                  if (!_this2.openExpanded) {
                    wrapper.style.height = contentHeight;
                    requestAnimationFrame(function () {
                      requestAnimationFrame(function () {
                        wrapper.style.height = 0;
                      });
                    });
                  } else {
                    wrapper.style.height = contentHeight;
                  }
                  if (_this2.$parent.icon && !_this2.openExpanded) {
                    _this2.$set(_this2.iconStyle, 'transform', 'rotate(0deg)');
                  } else {
                    _this2.$set(_this2.iconStyle, 'transform', 'rotate(' + _this2.$parent.rotate + 'deg)');
                  }
                }
                if (!_this2.openExpanded) {
                  _this2.onTransitionEnd();
                }
              });
            },
            // 更改子组件展示
            changeOpen: function changeOpen(bol) {
              this.openExpanded = bol;
            },
            // 清除 willChange 减少性能浪费
            onTransitionEnd: function onTransitionEnd() {
              if (this.openExpanded) {
                this.$refs.wrapper.style.height = 'auto';
              }
              this.$refs.wrapper.style.willChange = 'auto';
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/collapseitem/collapseitem.vue?vue&type=script&lang=js&
        /* harmony default export */ var collapseitem_collapseitemvue_type_script_lang_js_ = collapseitemvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/collapseitem/collapseitem.vue

        /* normalize component */

        var collapseitem_component = normalizeComponent(
          collapseitem_collapseitemvue_type_script_lang_js_,
          collapseitemvue_type_template_id_db6f3b10_render,
          collapseitemvue_type_template_id_db6f3b10_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var collapseitem = collapseitem_component.exports;
        // EXTERNAL MODULE: ./src/packages/collapseitem/collapseitem.scss
        var collapseitem_collapseitem = __webpack_require__(85);

        // CONCATENATED MODULE: ./src/packages/collapseitem/index.js

        collapseitem.install = function (Vue) {
          Vue.component(collapseitem.name, collapseitem);
        };
        /* harmony default export */ var packages_collapseitem = collapseitem;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/coupon/coupon.vue?vue&type=template&id=62060ee0&
        var couponvue_type_template_id_62060ee0_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              class: [
                'nut-coupon',
                'nut-coupon-' + _vm.type,
                _vm.cImage == true ? 'nut-coupon-image' : '',
                'nut-coupon-' + ['get', 'use', 'ban'][_vm.state],
              ],
              on: { click: _vm.clickHandler },
            },
            [
              _c('div', { staticClass: 'nut-coupon-info' }, [
                _vm.type == 2 && _vm.cImage
                  ? _c('div', { staticClass: 'nut-coupon-imgbox' }, [_c('img', { staticClass: 'nut-coupon-img', attrs: { src: _vm.cImage } })])
                  : _vm._e(),
                _vm._v(' '),
                _c(
                  'div',
                  { staticClass: 'nut-coupon-desc' },
                  [
                    _vm.type != '1'
                      ? [
                          typeof +_vm.discount == 'number' && !isNaN(+_vm.discount)
                            ? [
                                _c('div', { staticClass: 'nut-coupon-discount' }, [
                                  _c('span', { staticClass: 'rmb' }, [_vm._v('¥')]),
                                  _vm._v('\n            ' + _vm._s(_vm.discount) + '\n          '),
                                ]),
                              ]
                            : [_c('div', { staticClass: 'nut-coupon-discount' }, [_vm._v('\n            ' + _vm._s(_vm.discount) + '\n          ')])],
                        ]
                      : _vm._e(),
                    _vm._v(' '),
                    _c('div', { staticClass: 'nut-coupon-quota' }, [_vm._v(_vm._s(_vm.cleanZero(_vm.cText1)))]),
                  ],
                  2
                ),
              ]),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-coupon-limitStr' }, [_vm._v(_vm._s(_vm.cleanZero(_vm.cText2)))]),
              _vm._v(' '),
              _c('div', { staticClass: 'nut-coupon-btn' }, [
                _vm.state == 0
                  ? _c('div', [_vm._v('立即领取')])
                  : _vm.state == 1
                  ? _c('div', [_vm._v('去使用')])
                  : _vm.state == 2
                  ? _c('div', [_vm._v('已抢光')])
                  : _vm._e(),
              ]),
            ]
          );
        };
        var couponvue_type_template_id_62060ee0_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/coupon/coupon.vue?vue&type=template&id=62060ee0&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/coupon/coupon.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var couponvue_type_script_lang_js_ = {
          name: 'nut-coupon',
          props: {
            item: {
              type: Object,
              default: null,
            },
            type: {
              type: [String, Number],
              default: '1',
            },
            discount: {
              type: [String, Number],
              default: null,
            },
            cText1: {
              type: [String, Number],
              default: null,
            },
            cText2: {
              type: [String, Number],
              default: null,
            },
            cImage: {
              type: [Boolean, String],
              default: false,
            },
            state: {
              type: [String, Number],
              default: '0',
            },
          },
          data: function data() {
            return {};
          },
          components: {},
          mounted: function mounted() {
            // console.log('item', this.item)
          },
          methods: {
            clickHandler: function clickHandler(event) {
              this.$emit('click', event);
            },
            cleanZero: function cleanZero(value) {
              value = value;
              var res = /\.0+$/.exec(value);
              if (res) {
                return value.slice(0, res.index);
              }
              return value;
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/coupon/coupon.vue?vue&type=script&lang=js&
        /* harmony default export */ var coupon_couponvue_type_script_lang_js_ = couponvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/coupon/coupon.vue

        /* normalize component */

        var coupon_component = normalizeComponent(
          coupon_couponvue_type_script_lang_js_,
          couponvue_type_template_id_62060ee0_render,
          couponvue_type_template_id_62060ee0_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var coupon = coupon_component.exports;
        // EXTERNAL MODULE: ./src/packages/coupon/coupon.scss
        var coupon_coupon = __webpack_require__(86);

        // CONCATENATED MODULE: ./src/packages/coupon/index.js

        coupon.install = function (Vue) {
          Vue.component(coupon.name, coupon);
        };
        /* harmony default export */ var packages_coupon = coupon;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/magic.vue?vue&type=template&id=601c4726&scoped=true&
        var magicvue_type_template_id_601c4726_scoped_true_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _vm.data && _vm.data.length >= 8
            ? _c('Cube', { attrs: { dataMagic: _vm.data, type: _vm.type, autoplay: _vm.autoplay }, on: { clickItem: _vm.clickItem } })
            : _vm._e();
        };
        var magicvue_type_template_id_601c4726_scoped_true_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/magic/magic.vue?vue&type=template&id=601c4726&scoped=true&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/Cube/index.vue?vue&type=template&id=002ab09b&
        var Cubevue_type_template_id_002ab09b_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c('div', { staticClass: 'cube' }, [
            _c('div', { ref: 'container', staticClass: 'adjust-position cube-container' }, [
              _c(
                'div',
                { ref: 'wrapper', staticClass: 'cube-wrapper', on: { transitionend: _vm.transitionEndHandler } },
                [
                  _vm._l(_vm.clone, function (i) {
                    return _c(
                      'div',
                      { key: 'clone-prev-' + i, staticClass: 'cube-col' },
                      [
                        _c('CubeItem', {
                          staticClass: 'cube-item-wrap',
                          attrs: { item: _vm.data_top[i + _vm.data_bottom.length - _vm.clone - 1] },
                          on: { clickEvent: _vm.clickEvent },
                        }),
                        _vm._v(' '),
                        _c('CubeItem', {
                          staticClass: 'cube-item-wrap',
                          attrs: { item: _vm.data_bottom[i + _vm.data_bottom.length - _vm.clone - 1] },
                          on: { clickEvent: _vm.clickEvent },
                        }),
                      ],
                      1
                    );
                  }),
                  _vm._v(' '),
                  _vm._l(_vm.data_bottom, function (item, i) {
                    return _c(
                      'div',
                      { key: i, staticClass: 'cube-col cube-col--anime' },
                      [
                        _c('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: _vm.data_top[i] }, on: { clickEvent: _vm.clickEvent } }),
                        _vm._v(' '),
                        _c('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: _vm.data_bottom[i] }, on: { clickEvent: _vm.clickEvent } }),
                      ],
                      1
                    );
                  }),
                  _vm._v(' '),
                  _vm._l(_vm.data_bottom.slice(0, _vm.clone), function (item, i) {
                    return _c(
                      'div',
                      { key: 'clone-next-' + i, staticClass: 'cube-col' },
                      [
                        _c('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: _vm.data_top[i] }, on: { clickEvent: _vm.clickEvent } }),
                        _vm._v(' '),
                        _c('CubeItem', { staticClass: 'cube-item-wrap', attrs: { item: _vm.data_bottom[i] }, on: { clickEvent: _vm.clickEvent } }),
                      ],
                      1
                    );
                  }),
                ],
                2
              ),
            ]),
          ]);
        };
        var Cubevue_type_template_id_002ab09b_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/magic/Cube/index.vue?vue&type=template&id=002ab09b&

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/Cube/CubeItem.vue?vue&type=template&id=12be9f58&
        var CubeItemvue_type_template_id_12be9f58_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            {
              class: 'cube-item cube-item--' + _vm.item.type,
              on: {
                click: function ($event) {
                  return _vm.cubeClick(_vm.item);
                },
              },
            },
            [
              _c('div', { staticClass: 'cube-item-box' }, [
                _c('div', { staticClass: 'sub-image', style: { backgroundImage: 'url(' + _vm.item.pictureUrl + ')' } }),
              ]),
              _vm._v(' '),
              _vm.item.desc ? _c('div', { staticClass: 'sub-desc' }, [_c('span', [_vm._v(_vm._s(_vm.item.desc))])]) : _vm._e(),
              _vm._v(' '),
              _vm.item.name ? _c('div', { staticClass: 'sub-name' }, [_c('span', [_vm._v(_vm._s(_vm.item.name))])]) : _vm._e(),
            ]
          );
        };
        var CubeItemvue_type_template_id_12be9f58_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/magic/Cube/CubeItem.vue?vue&type=template&id=12be9f58&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/Cube/CubeItem.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var CubeItemvue_type_script_lang_js_ = {
          name: 'CubeItem',
          props: {
            item: {
              type: Object,
              default: null,
            },
          },
          data: function data() {
            return {};
          },
          methods: {
            cubeClick: function cubeClick(item) {
              this.$emit('clickEvent', item);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/magic/Cube/CubeItem.vue?vue&type=script&lang=js&
        /* harmony default export */ var Cube_CubeItemvue_type_script_lang_js_ = CubeItemvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/magic/Cube/CubeItem.vue

        /* normalize component */

        var CubeItem_component = normalizeComponent(
          Cube_CubeItemvue_type_script_lang_js_,
          CubeItemvue_type_template_id_12be9f58_render,
          CubeItemvue_type_template_id_12be9f58_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var CubeItem = CubeItem_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/Cube/index.vue?vue&type=script&lang=js&

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        // 贝赛尔缓冲曲线计算公式
        function sineEaseOut(t, b, c, d) {
          return c * Math.sin((t / d) * (Math.PI / 2)) + b;
        }
        function cubicEaseOut(t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        }
        // 获取计算属性
        function getPropertyValue(el, attr) {
          var st = window.getComputedStyle(el, null);
          var tr =
            st.getPropertyValue('-webkit-' + attr) ||
            st.getPropertyValue('-moz-' + attr) ||
            st.getPropertyValue('-ms-' + attr) ||
            st.getPropertyValue('-o-' + attr) ||
            st.getPropertyValue(attr);
          if (tr && tr != 'none') {
            return tr;
          }
          return null;
        }
        /* harmony default export */ var Cubevue_type_script_lang_js_ = {
          props: {
            dataMagic: {
              type: [Object, Array],
              default: null,
            },
            type: {
              type: String,
              default: 'rank',
            },
            // 溢出可滑动的倍数
            overflow: {
              type: [String, Number],
              default: 1.4,
              validator: function validator(value) {
                return value >= 1 && value < 1.5;
              },
            },
            autoplay: {
              type: Boolean,
              default: false,
            },
            interval: {
              type: [String, Number],
              default: 3000,
            },
          },
          components: {
            CubeItem: CubeItem,
          },
          data: function data() {
            return {
              // 克隆数目
              clone: 4,
            };
          },
          computed: {
            data_top: function data_top() {
              return this.dataMagic.filter(function (item, i) {
                return i % 2 == 0;
              });
            },
            data_bottom: function data_bottom() {
              return this.dataMagic.filter(function (item, i) {
                return i % 2 == 1;
              });
            },
          },
          watch: {
            autoplay: function autoplay(value) {
              value ? this.startPlay() : this.clearPlayer();
            },
          },
          // computed: {
          //   ...mapGetters([
          //     'xHeight'
          //   ]),
          //   styleTop() {
          //     let top = (this.xHeight * 0.244) + 12
          //     return {
          //       marginTop: `${this.xHeight}px`,
          //     }
          //   }
          // },
          mounted: function mounted() {
            var _this = this;
            this.$nextTick(function () {
              _this.canMove = true;
              _this.$wrapper = _this.$refs.wrapper;
              _this.$cubes = toConsumableArray_default()(_this.$wrapper.children);
              // 单元大小
              _this.ITEM_WIDTH = _this.$wrapper.clientWidth / 4;
              _this.computeWidth = {
                '-2': -_this.ITEM_WIDTH * 2,
                '-1': -_this.ITEM_WIDTH,
                0: 0,
                1: _this.ITEM_WIDTH,
                2: _this.ITEM_WIDTH * 2,
                3: _this.ITEM_WIDTH * 3,
                4: _this.ITEM_WIDTH * 4,
                5: _this.ITEM_WIDTH * 5,
              };
              // 起始索引
              _this.current = _this.clone;
              // 起始位置
              _this.endX = -_this.ITEM_WIDTH * _this.current;
              _this.offsetX = _this.endX;
              // 设置魔方样式
              _this.$wrapper.style.transitionDuration = null;
              _this.$cubes.forEach(function (cube, idx) {
                cube.style.transition && (cube.style.transition = null);
              });
              _this.setWrapper(_this.endX);
              _this.setCube(_this.endX);
              _this.$wrapper.style.webkitPerspectiveOrigin = ''.concat(
                _this.current * _this.ITEM_WIDTH + _this.$wrapper.clientWidth / 2,
                'px center'
              );
              // 自动播放
              setTimeout(function () {
                _this.startPlay();
                _this.$wrapper.classList.add('cube-wrapper--inited');
              }, 1000);
              _this.bindEvent();
            });
            this.initWQVisibleEvent();
            // 防止关闭屏幕/跳出时仍在执行动画
            document.addEventListener('visibilitychange', function (e) {
              e.hidden ? _this.clearPlayer() : _this.startPlay();
            });
          },
          methods: {
            clickEvent: function clickEvent(item) {
              this.$emit('clickItem', item);
            },
            bindEvent: function bindEvent() {
              this.$wrapper.addEventListener('touchstart', this.touchStartHandler);
              this.$wrapper.addEventListener('touchmove', this.touchMoveHandler);
              this.$wrapper.addEventListener('touchend', this.touchEndHandler);
            },
            // 初始化微信手q的展示隐藏事件
            initWQVisibleEvent: function initWQVisibleEvent() {
              document.addEventListener(
                'qbrowserVisibilityChange',
                function (e) {
                  var evt = document.createEvent('HTMLEvents');
                  evt.initEvent('visibilitychange', false, false);
                  evt.hidden = e.hidden;
                  document.dispatchEvent(evt);
                },
                true
              );
              document.addEventListener(
                'visibilitychange',
                function (e) {
                  e.hidden = e.hidden === undefined ? document.hidden : e.hidden;
                },
                true
              );
            },
            // 播放
            startPlay: function startPlay() {
              var _this2 = this;
              if (!this.autoplay) return;
              this.clearPlayer();
              this.player = setInterval(function () {
                // 防止关闭屏幕/跳出时仍在执行
                _this2.canMove = true;
                _this2.goto(_this2.current + 1, 600, true);
              }, this.interval);
            },
            clearPlayer: function clearPlayer() {
              clearInterval(this.player);
              this.player = null;
            },
            touchStartHandler: function touchStartHandler(e) {
              if (!this.canMove) return;
              this.clearPlayer();
              this.touching = true;

              // 追随到当前过渡位置
              if (this.$wrapper.style.transitionDuration) {
                // 正在过渡
                // this.continueTransition()
              }

              // 记录起始坐标
              this.startX = e.touches[0].pageX;
              this.startY = e.touches[0].pageY;
              this.$wrapper.style.transitionDuration = null;
              this.$cubes.forEach(function (cube, idx) {
                cube.style.transition && (cube.style.transition = null);
              });
            },
            touchMoveHandler: function touchMoveHandler(e) {
              if (!this.canMove || !this.touching) return;
              var moveX = e.touches[0].pageX - this.startX;
              var moveY = e.touches[0].pageY - this.startY;
              // 防止上下滑动对影响魔方水平滚动的影响
              if (!(Math.abs(moveY) > Math.abs(moveX) * 1.5)) {
                e.cancelable && e.preventDefault();
              }
              // sineEaseOut曲线: 当前x、 起始x、目标y、目标x
              moveX = moveX / 3;
              if (moveX > 0) {
                // moveX = sineEaseOut(moveX, 0, this.ITEM_WIDTH * this.overflow , this.ITEM_WIDTH * 6)
                this.direction = -1;
              } else if (moveX < 0) {
                // moveX = -sineEaseOut(-moveX, 0, this.ITEM_WIDTH * this.overflow , this.ITEM_WIDTH * 6)
                this.direction = 1;
              } else {
                return;
              }
              // 滑动偏移量
              this.offsetX = moveX + this.endX;
              // 设置魔方样式

              var rotate = this.getMiddleRotate(moveX);
              this.setWrapper(this.offsetX);
              this.setCube(this.offsetX, this.offsetX > 0 ? moveX : -moveX);
            },
            touchEndHandler: function touchEndHandler(e) {
              if (!this.canMove || !this.touching) return;
              var cur;
              var overX = (this.offsetX % this.ITEM_WIDTH) * this.direction;
              // 计算目标索引
              if (overX == 0) {
                cur = this.offsetX / this.ITEM_WIDTH;
              } else if ((overX > 0 && overX < this.ITEM_WIDTH * (3 / 4)) || (overX < 0 && overX >= -this.ITEM_WIDTH * (1 / 4))) {
                cur = Math.ceil(this.offsetX / this.ITEM_WIDTH);
              } else {
                cur = Math.floor(this.offsetX / this.ITEM_WIDTH);
              }
              cur = -cur;
              // 达到循环边界了，需要禁止滑动，等切换结束才允许继续滑
              if (cur >= this.data_bottom.length + this.clone || cur <= this.clone - 1) {
                this.canMove = false;
              }

              // 调整到边界目标距离
              this.goto(cur, 400);
              // this.goto(cur, Math.abs(cur * this.ITEM_WIDTH - Math.abs(this.offsetX)) / this.ITEM_WIDTH * 400)

              // 继续自动播放
              this.startPlay();
              this.touching = false;
            },
            /**
             * 中断过渡
             */
            continueTransition: function continueTransition() {
              var _wrapperTr = getPropertyValue(this.$wrapper, 'transform');
              var _wrapperPo = getPropertyValue(this.$wrapper, 'perspective-origin');
              if (_wrapperTr && this.$wrapper.style.transitionDuration) {
                (this.$wrapper.style.transform = _wrapperTr), (this.$wrapper.style.perspectiveOrigin = _wrapperPo);
                this.$cubes.forEach(function (cube) {
                  cube.style.transform = getPropertyValue(cube, 'transform');
                  cube.style.opacity = +getPropertyValue(cube, 'opacity');
                  cube.style.transformOrigin = getPropertyValue(cube, 'transform-origin');
                });
                // 记录当前位置
                this.endX = 0;
              }
            },
            /**
             * 设置容器滚动
             * nowX: 目标位置
             * time: 过渡时长
             * wait: 运动是否需要滞后
             */
            setWrapper: function setWrapper(nowX, time, wait) {
              var _this3 = this;
              this.offsetX = nowX;
              if (time > 0) {
                this.$wrapper.style.transitionDuration = ''.concat(time, 'ms');
              }
              if (wait) {
                setTimeout(function () {
                  _this3.$wrapper.style.transform = 'translate3d('.concat(nowX, 'px, 0, 0)');
                }, 0);
              } else {
                this.$wrapper.style.transform = 'translate3d('.concat(nowX, 'px, 0, 0)');
              }
            },
            /**
             * 设置魔方样式
             * nowX: 目标位置
             * rotate: 角度正负
             */
            setCube: function setCube(nowX) {
              var _this4 = this;
              var rotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              // 关闭所有过渡
              this.$cubes.forEach(function (cube, idx) {
                cube.style.transition && (cube.style.transition = null);
                var _offset = idx * _this4.ITEM_WIDTH + nowX;
                if (_offset > _this4.computeWidth[-1] && _offset < _this4.computeWidth[0]) {
                  // 左边元素
                  var bezier_offset = cubicEaseOut(_offset % _this4.ITEM_WIDTH, 0, -_this4.ITEM_WIDTH, -_this4.ITEM_WIDTH);
                  cube.style.transform = 'rotateY('
                    .concat(_this4.getBetweenRotate(_offset), 'deg) translate3d(0, ')
                    .concat(_this4.getTranslate(_offset), 'px, 0)');
                  cube.style.opacity = _this4.getOpacity(bezier_offset);
                } else if (_offset > _this4.computeWidth[3] && _offset < _this4.computeWidth[4]) {
                  // 右边元素
                  var _bezier_offset = cubicEaseOut(_offset % _this4.ITEM_WIDTH, 0, _this4.ITEM_WIDTH, _this4.ITEM_WIDTH);
                  cube.style.transform = 'rotateY('
                    .concat(_this4.getBetweenRotate(_offset), 'deg) translate3d(0, ')
                    .concat(_this4.getTranslate(_offset), 'px, 0)');
                  cube.style.opacity = _this4.getOpacity(_bezier_offset);
                } else if (_offset >= _this4.computeWidth[4] && _offset < _this4.computeWidth[5]) {
                  // 最右边元素（自动播放时的预备状态）
                  cube.style.transform = 'rotateY(60deg) translate3d(0, '.concat(_this4.getTranslate(_offset), 'px, 0)');
                  cube.style.opacity = 0;
                } else if (_offset > _this4.computeWidth[-2] && _offset <= _this4.computeWidth[-1]) {
                  // 最左边元素（自动播放时的预备状态）
                  cube.style.transform = 'rotateY(-60deg) translate3d(0, '.concat(_this4.getTranslate(_offset), 'px, 0)');
                  cube.style.opacity = 0;
                } else if (_offset >= _this4.computeWidth[0] && _offset <= _this4.computeWidth[3]) {
                  // 中间元素
                  cube.style.transform = 'rotateY('
                    .concat(_this4.getMiddleRotate(rotate), 'deg) translate3d(0, ')
                    .concat(_this4.getTranslate(_offset), 'px, 0)');
                  cube.style.opacity = 1;
                }
                cube.style.transformOrigin = _this4.getTransformOrigin(_offset);
              });
            },
            // 设置魔方的变化基准点
            getTransformOrigin: function getTransformOrigin(d, overflow) {
              if (d >= this.computeWidth[-1] && d <= this.computeWidth[4]) {
                var to = this.ITEM_WIDTH - d / 3;
                if (to < this.computeWidth[0]) {
                  to = this.computeWidth[0];
                } else if (to > this.computeWidth[1]) {
                  to = this.computeWidth[1];
                }
                return ''.concat(to, 'px center');
              }
            },
            // 设置两侧魔方的旋转
            getBetweenRotate: function getBetweenRotate(d) {
              return ((d % this.ITEM_WIDTH) * (360 / this.$wrapper.clientWidth) * 70) / 90;
            },
            // 设置中间魔方的旋转， 假设临界值交点为5 * 魔方宽度，减缓数率a为0.4
            getMiddleRotate: function getMiddleRotate(d) {
              var mid = 5;
              var a = 0.35;
              // 下降曲线：y2 = bx + k  得出 b = -7/3、k = 7/3 所以：y2 = -7/3x + 7/3w
              if (d > (this.ITEM_WIDTH * mid) / 10) {
                return ((a * mid) / (10 - mid)) * (this.ITEM_WIDTH - d);
              } else if (d < (-this.ITEM_WIDTH * mid) / 10) {
                return ((-a * mid) / (10 - mid)) * (this.ITEM_WIDTH + d);
              } else {
                // 上升曲线：y1 = ax 设 a = 0.2
                return a * d;
              }
            },
            // 设置透明度
            getOpacity: function getOpacity(d) {
              return 1 - ((Math.abs(d) / this.ITEM_WIDTH) % 1);
            },
            // 设置偏移量
            getTranslate: function getTranslate(d) {
              var slow = 7; // 减缓倍率
              if (d > this.computeWidth[2]) {
                if (d > this.computeWidth[3]) {
                  return (this.computeWidth[3] - d) / 5;
                }
                return (this.computeWidth[3] - d) / slow;
              } else if (d < this.computeWidth[1]) {
                if (d < 0) {
                  return d / 5;
                }
                return d / slow;
              } else {
                return this.ITEM_WIDTH / slow;
              }
            },
            // 检测无限循环
            transitionEndHandler: function transitionEndHandler(event) {
              var _this5 = this;
              if (event.target === this.$wrapper) {
                this.$wrapper.style.transitionDuration = null;
                this.$cubes.forEach(function (cube, idx) {
                  cube.style.transition && (cube.style.transition = null);
                });
                this.$wrapper.style.webkitPerspectiveOrigin = ''.concat(this.current * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2, 'px center');
                if (this.current >= this.data_bottom.length + this.clone) {
                  this.goto(this.current % this.data_bottom.length, 0);
                  setTimeout(function () {
                    _this5.canMove = true;
                  }, 0);
                } else if (this.current <= this.clone - 1) {
                  this.goto(this.data_bottom.length + this.current, 0);
                  setTimeout(function () {
                    _this5.canMove = true;
                  }, 0);
                }
              }
            },
            /**
             * 跳转到某个索引的位置
             * cur: 目标魔方索引
             * duration: 过渡时长
             */
            goto: function goto(cur) {
              var _this6 = this;
              var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
              var isAutoPlay = arguments.length > 2 ? arguments[2] : undefined;
              var nextCur = isAutoPlay ? cur - 0.5 : cur;
              this.$wrapper.style.webkitPerspectiveOrigin = ''.concat(nextCur * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2, 'px center');
              this.current = cur;
              this.endX = -cur * this.ITEM_WIDTH;
              if (!duration) {
                this.$wrapper.style.transitionDuration = null;
                this.$wrapper.style.transitionDuration = null;
                this.$cubes.forEach(function (cube, idx) {
                  cube.style.transition && (cube.style.transition = null);
                });
                this.setCube(this.endX, 0);
                this.setWrapper(this.endX, 0, true);
              } else {
                // 执行过渡
                this.setWrapper(this.endX, duration);
                this.$cubes.forEach(function (cube, idx) {
                  var _offset = idx * _this6.ITEM_WIDTH + _this6.endX;
                  cube.style.transformOrigin = _this6.getTransformOrigin(_offset);
                  if (cur - 1 == idx) {
                    // 左边过渡
                    cube.style.transition = 'all '.concat(duration, 'ms cubic-bezier(0.215, 0.610, 0.355, 1.000)');
                    cube.style.transform = 'rotateY(-60deg) translate3d(0, '.concat(_this6.getTranslate(cube.offsetLeft + _this6.endX), 'px, 0)');
                    cube.style.opacity = 0;
                  } else if (cur + 4 == idx) {
                    // 右边过渡
                    cube.style.transition = 'all '.concat(duration, 'ms cubic-bezier(0.215, 0.610, 0.355, 1.000)');
                    cube.style.transform = 'rotateY(60deg) translate3d(0, '.concat(_this6.getTranslate(cube.offsetLeft + _this6.endX), 'px, 0)');
                    cube.style.opacity = 0;
                  } else if (idx > cur - 1 && idx < cur + 4) {
                    // 中间过渡
                    if (isAutoPlay) {
                      cube.style.transition = 'transform '
                        .concat(duration, 'ms cubic-bezier(0.22, 0.01, 0.68, 1.00), opacity ')
                        .concat(duration * 0.9, 'ms cubic-bezier(0.62, 0.02, 0.68, 1.00)');
                    } else {
                      cube.style.transition = 'all '.concat(duration, 'ms cubic-bezier(0.390, 0.575, 0.565, 1.000)');
                    }
                    cube.style.transform = 'rotateY(0.1deg) translate3d(0, '.concat(_this6.getTranslate(cube.offsetLeft + _this6.endX), 'px, 0)');
                    cube.style.opacity = 1;
                  } else {
                    cube.style.transition = null;
                    cube.style.transform = null;
                    cube.style.opacity = null;
                    cube.style.transformOrigin = null;
                  }
                });
              }
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/magic/Cube/index.vue?vue&type=script&lang=js&
        /* harmony default export */ var magic_Cubevue_type_script_lang_js_ = Cubevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/magic/Cube/index.vue

        /* normalize component */

        var Cube_component = normalizeComponent(
          magic_Cubevue_type_script_lang_js_,
          Cubevue_type_template_id_002ab09b_render,
          Cubevue_type_template_id_002ab09b_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var Cube = Cube_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/magic/magic.vue?vue&type=script&lang=js&
        //
        //
        //
        //

        /* harmony default export */ var magicvue_type_script_lang_js_ = {
          name: 'nut-magic',
          components: {
            Cube: Cube,
          },
          props: {
            data: {
              type: [Object, Array],
              default: function _default() {
                return [];
              },
            },
            // dataSpecial: {
            //   type: [Object, Array],
            //   default: null
            // },
            type: {
              type: String,
              default: 'rank',
            },
            autoplay: {
              default: true,
            },
          },
          computed: {},
          data: function data() {
            return {};
          },
          watch: {
            data: function data(newV, old) {
              // this.init();
            },
          },
          methods: {
            clickItem: function clickItem(item) {
              this.$emit('click', item);
            },
          },
        };
        // CONCATENATED MODULE: ./src/packages/magic/magic.vue?vue&type=script&lang=js&
        /* harmony default export */ var magic_magicvue_type_script_lang_js_ = magicvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/magic/magic.vue

        /* normalize component */

        var magic_component = normalizeComponent(
          magic_magicvue_type_script_lang_js_,
          magicvue_type_template_id_601c4726_scoped_true_render,
          magicvue_type_template_id_601c4726_scoped_true_staticRenderFns,
          false,
          null,
          '601c4726',
          null
        );

        /* harmony default export */ var magic = magic_component.exports;
        // EXTERNAL MODULE: ./src/packages/magic/magic.scss
        var magic_magic = __webpack_require__(87);

        // CONCATENATED MODULE: ./src/packages/magic/index.js

        magic.install = function (Vue) {
          Vue.component(magic.name, magic);
          Vue.component('Cube', Cube);
          Vue.component('CubeItem', CubeItem);
        };
        /* harmony default export */ var packages_magic = magic;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ninegrid/ninegrid.vue?vue&type=template&id=3daa6113&
        var ninegridvue_type_template_id_3daa6113_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c(
            'div',
            { staticClass: 'nut-ninegrid' },
            _vm._l(_vm.gridList, function (item, index) {
              return _c(
                'div',
                {
                  key: index,
                  staticClass: 'item',
                  class: [{ active: _vm.activeState && index != 4 }, { shake: _vm.shakeIndexs.includes(index + 1) }],
                },
                [
                  index == 4
                    ? _c(
                        'div',
                        {
                          staticClass: 'center',
                          on: {
                            click: function ($event) {
                              return _vm.refresh(true);
                            },
                          },
                        },
                        [
                          _c('img', {
                            class: { rotate: _vm.loadingDataState },
                            attrs: {
                              src: '//img13.360buyimg.com/imagetools/jfs/t1/190805/24/20092/1136/6126fce9E6c61cf21/acd44eec9fc694bd.png',
                              alt: 'refresh.png',
                            },
                          }),
                          _vm._v(' '),
                          _c('span', [_vm._v('换一换')]),
                          _vm._v(' '),
                          _c('p', [_vm._v(_vm._s(_vm.countDown) + 'S 后自动换')]),
                        ]
                      )
                    : [
                        _c(
                          'div',
                          {
                            staticClass: 'front',
                            on: {
                              click: function ($event) {
                                return _vm.toDetail(item.front);
                              },
                            },
                          },
                          [
                            _c('p', [_vm._v(_vm._s(item.front.name))]),
                            _vm._v(' '),
                            _c('nut-price', { staticClass: 'price', attrs: { price: item.front.price, thousands: true } }),
                            _vm._v(' '),
                            _c('img', { attrs: { src: item.front.pictureUrl } }),
                          ],
                          1
                        ),
                        _vm._v(' '),
                        _c(
                          'div',
                          {
                            staticClass: 'back',
                            on: {
                              click: function ($event) {
                                return _vm.toDetail(item.back);
                              },
                            },
                          },
                          [
                            _c('p', [_vm._v(_vm._s(item.back.name))]),
                            _vm._v(' '),
                            _c('nut-price', { staticClass: 'price', attrs: { price: item.back.price, thousands: true } }),
                            _vm._v(' '),
                            _c('img', { attrs: { src: item.back.pictureUrl } }),
                          ],
                          1
                        ),
                      ],
                ],
                2
              );
            }),
            0
          );
        };
        var ninegridvue_type_template_id_3daa6113_staticRenderFns = [];

        // CONCATENATED MODULE: ./src/packages/ninegrid/ninegrid.vue?vue&type=template&id=3daa6113&

        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ninegrid/ninegrid.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */ var ninegridvue_type_script_lang_js_ = {
          name: 'nut-ninegrid',
          props: {
            data: {
              type: [Object, Array],
              default: function _default() {
                return [];
              },
            },
          },
          data: function data() {
            return {
              gridList: [],
              // 数据list
              activeState: false,
              // 去掉中间的换一换方块
              shakeIndexs: [],
              // 动画抖一抖的下标
              loadingDataState: false,
              // 换一换的小图标是否旋转  并且等它旋转完才可以再次点击
              countDown: 10,
              // 倒计时时间
              number: 0,
            };
          },
          watch: {
            data: {
              handler: function handler(value) {
                if (value) {
                  this.resResponse(value);
                }
              },
            },
          },
          methods: {
            resResponse: function resResponse(sudoku_goodsG) {
              if (!(sudoku_goodsG.length > 15)) {
                return;
              }
              var list = sudoku_goodsG;
              var spArrs = this.spArray(8, list);
              var front = spArrs[0];
              var back = spArrs[1];
              var filterData = [];
              front.forEach(function (element, index) {
                filterData.push({
                  front: element,
                  back: back[index],
                });
              });
              filterData.splice(4, 0, {});
              this.gridList = filterData;
            },
            beginTimeIntervar: function beginTimeIntervar() {
              var _this = this;
              this.timeIntervar = setInterval(function () {
                _this.countDown--;
                if (_this.countDown == 0) {
                  _this.refresh();
                }
                if (_this.countDown == 7) {
                  _this.shakeIndexs = [2, 4, 6, 8];
                } else if (_this.countDown == 3) {
                  _this.shakeIndexs = [1, 3, 7, 9];
                }
              }, 1000);
            },
            refresh: function refresh() {
              var _this2 = this;
              var manual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (this.loadingDataState) return;
              this.number += 1;
              this.countDown = 10;
              this.shakeIndexs = [];
              this.activeState = !this.activeState;

              // 检查点击次数
              if (this.number % 2 === 0) {
                console.log(123);
                this.$emit('refresh');
              } else {
                this.loadingDataState = true;
                setTimeout(function () {
                  _this2.loadingDataState = false;
                }, 1000);
              }
            },
            /**
             * 跳转详情
             * @param item skuItem
             */
            toDetail: function toDetail(item) {
              // 跳转商详
              this.$emit('toDetail', item);
            },
            /**
             *
             * 数组拆分函数
             * @static
             * @param {number} N 拆分长度
             * @param {any[]} Q 将要拆分的数组
             * @returns {Array}
             * @memberof Utils
             */
            spArray: function spArray(N, Q) {
              var R = [],
                F;
              for (F = 0; F < Q.length; ) {
                R.push(Q.slice(F, (F += N)));
              }
              return R;
            },
          },
          mounted: function mounted() {
            this.resResponse(this.data);
            this.beginTimeIntervar();
          },
        };
        // CONCATENATED MODULE: ./src/packages/ninegrid/ninegrid.vue?vue&type=script&lang=js&
        /* harmony default export */ var ninegrid_ninegridvue_type_script_lang_js_ = ninegridvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/packages/ninegrid/ninegrid.vue

        /* normalize component */

        var ninegrid_component = normalizeComponent(
          ninegrid_ninegridvue_type_script_lang_js_,
          ninegridvue_type_template_id_3daa6113_render,
          ninegridvue_type_template_id_3daa6113_staticRenderFns,
          false,
          null,
          null,
          null
        );

        /* harmony default export */ var ninegrid = ninegrid_component.exports;
        // EXTERNAL MODULE: ./src/packages/ninegrid/ninegrid.scss
        var ninegrid_ninegrid = __webpack_require__(88);

        // CONCATENATED MODULE: ./src/packages/ninegrid/index.js

        ninegrid.install = function (Vue) {
          Vue.component(ninegrid.name, ninegrid);
        };
        /* harmony default export */ var packages_ninegrid = ninegrid;
        // CONCATENATED MODULE: ./src/nutui.js

        function nutui_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function nutui_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? nutui_ownKeys(Object(source), !0).forEach(function (key) {
                  defineProperty_default()(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : nutui_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
          }
          return target;
        }

        // import VueQr from "./packages/qart/index.js";
        // import "./packages/qart/qart.scss";

        // import Gesture from './packages/gesture/index.js';
        // import './packages/gesture/gesture.scss';

        var nutui_packages = {
          Cell: packages_cell,
          Dialog: packages_dialog,
          Icon: packages_icon,
          Toast: packages_toast,
          ActionSheet: packages_actionsheet,
          Tab: packages_tab,
          TabPanel: packages_tabpanel,
          TabBar: packages_tabbar,
          Calendar: packages_calendar,
          DatePicker: packages_datepicker,
          NavBar: packages_navbar,
          NoticeBar: packages_noticebar,
          Switch: packages_switch,
          Slider: packages_slider,
          Range: packages_range,
          Picker: packages_picker,
          Progress: packages_progress,
          Price: packages_price,
          Flex: packages_flex,
          Col: packages_col,
          Row: packages_row,
          Steps: packages_steps,
          Button: packages_button,
          Badge: packages_badge,
          Rate: packages_rate,
          Swiper: packages_swiper,
          Menu: packages_menu,
          Stepper: packages_stepper,
          ButtonGroup: packages_buttongroup,
          SearchBar: packages_searchbar,
          ImagePicker: packages_imagepicker,
          Radio: packages_radio,
          RadioGroup: packages_radiogroup,
          CheckBox: packages_checkbox,
          CheckBoxGroup: packages_checkboxgroup,
          ShortPassword: packages_shortpassword,
          Skeleton: packages_skeleton,
          Scroller: packages_scroller,
          BackTop: packages_backtop,
          CountDown: packages_countdown,
          InfiniteLoading: packages_infiniteloading,
          Uploader: packages_uploader,
          TextInput: packages_textinput,
          TextBox: packages_textbox,
          Avatar: packages_avatar,
          Elevator: packages_elevator,
          Popup: packages_popup,
          LeftSlip: packages_leftslip,
          TabSelect: packages_tabselect,
          LuckDraw: packages_luckdraw,
          Video: packages_video,
          Signature: packages_signature,
          CircleProgress: packages_circleprogress,
          TimeLine: packages_timeline,
          TimeLineItem: packages_timelineitem,
          SideNavBar: packages_sidenavbar,
          SubSideNavBar: packages_subsidenavbar,
          SideNavBarItem: packages_sidenavbaritem,
          Drag: packages_drag,
          Address: packages_address,
          Notify: packages_notify,
          CountUp: packages_countup,
          FixedNav: packages_fixednav,
          // Gesture: Gesture
          Collapse: packages_collapse,
          Luckycard: packages_luckycard,
          NumberKeyboard: packages_numberkeyboard,
          CollapseItem: packages_collapseitem,
          Coupon: packages_coupon,
          Magic: packages_magic,
          NineGrid: packages_ninegrid,
        };
        var components = {};
        var methods = {};
        var filters = {};
        var directives = {};
        src_config['a' /* packages */].map(function (item) {
          var pkg = nutui_packages[item.name];
          if (!pkg) return;
          if (item.type == 'component') {
            if (pkg.name) {
              components[pkg.name] = pkg;
            } else {
              for (var n in pkg) {
                components[n] = pkg[n];
              }
            }
          } else if (item.type == 'method') {
            methods[item.name] = pkg;
          } else if (item.type == 'filter') {
            filters[item.name] = pkg;
          } else if (item.type == 'directive') {
            directives[item.name] = pkg;
          }
        });
        var nutui_install = function install(Vue) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (install.installed) return;
          if (opts.locale) {
            Vue.config.lang = opts.locale;
          }
          if (opts.lang) locale(Vue.config.lang, opts.lang);
          for (var cptName in methods) {
            if (Array.isArray(methods[cptName])) {
              Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName][0];
              Vue.component(methods[cptName][1].name, methods[cptName][1]);
            } else {
              Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName];
            }
          }
          for (var _cptName in components) {
            if (components[_cptName] && components[_cptName].name) {
              Vue.component(components[_cptName].name, components[_cptName]);
            }
          }
          for (var _cptName2 in filters) {
            if (filters[_cptName2] && filters[_cptName2].name) {
              Vue.filter(_cptName2, filters[_cptName2]);
            }
          }
          for (var _cptName3 in directives) {
            if (directives[_cptName3] && directives[_cptName3].name) {
              Vue.directive(directives[_cptName3].name, directives[_cptName3]);
            }
          }
          Vue.use(packages_lazyload, {
            lazyComponent: true,
            loading: '//img12.360buyimg.com/imagetools/jfs/t1/73967/28/14561/916/5dc142e4E0666555b/bf33454553c6035e.png',
          });
        };
        if (typeof window !== 'undefined' && window.Vue) {
          nutui_install(window.Vue);
        }
        /* harmony default export */ var nutui = (__webpack_exports__['default'] = nutui_objectSpread(
          nutui_objectSpread(
            nutui_objectSpread(
              nutui_objectSpread(
                {
                  version: package_0['a' /* version */],
                  locale: locale,
                  install: nutui_install,
                  Lazyload: packages_lazyload,
                },
                components
              ),
              filters
            ),
            directives
          ),
          methods
        ));

        /***/
      },
      /******/
    ]
  );
});
//# sourceMappingURL=nutui.js.map
