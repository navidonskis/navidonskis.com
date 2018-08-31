(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Head = __webpack_require__(26);

var _Head2 = _interopRequireDefault(_Head);

var _Main = __webpack_require__(27);

var _Main2 = _interopRequireDefault(_Main);

var _Header = __webpack_require__(28);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(30);

var _Footer2 = _interopRequireDefault(_Footer);

var _Landscape = __webpack_require__(32);

var _Landscape2 = _interopRequireDefault(_Landscape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bg = _props.bg,
          children = _props.children,
          head = _props.head,
          attr = _objectWithoutProperties(_props, ['bg', 'children', 'head']);

      return _react2.default.createElement(
        'div',
        _extends({ className: 'layout' }, attr),
        _react2.default.createElement(_Head2.default, head),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Landscape2.default, { bg: bg }),
        _react2.default.createElement(
          _Main2.default,
          null,
          children
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

Layout.propTypes = {
  bg: _propTypes2.default.string,
  head: _propTypes2.default.object
};

exports.default = Layout;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var home = _ref.home;
  var title = home.title,
      description = home.description,
      contents = home.contents;
  // const location = typeof window !== "undefined" && window.location || {};
  // console.log(location);

  return _react2.default.createElement(
    _Layout2.default,
    { head: { title: title, description: description } },
    (0, _htmr2.default)(contents)
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _bg = __webpack_require__(34);

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var about = _ref.about;
  var title = about.title,
      description = about.description,
      contents = about.contents;


  return _react2.default.createElement(
    _Layout2.default,
    { head: { title: title, description: description }, bg: _bg2.default, className: 'layout about' },
    (0, _htmr2.default)(contents)
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.slug },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.slug + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    (0, _htmr2.default)(post.contents)
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _App2.default;

// Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    return renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(16);

var _reactStaticRoutes = __webpack_require__(17);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactGa = __webpack_require__(6);

var _reactGa2 = _interopRequireDefault(_reactGa);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FireTracking = function FireTracking() {
  return _reactGa2.default.pageview(window.location.hash);
};
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    { onUpdate: FireTracking },
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

_reactGa2.default.initialize('UA-72741925-1', { debug: true });

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(18);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(19);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(20);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _reactUniversalComponent = __webpack_require__(22);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/navidonskis/Codes/navidonskis.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/navidonskis/Codes/navidonskis.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/navidonskis/Codes/navidonskis.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/navidonskis/Codes/navidonskis.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/navidonskis/Codes/navidonskis.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(23);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(24);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = function (_Component) {
  _inherits(Head, _Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'getDefaultMeta',
    value: function getDefaultMeta() {
      return [{ name: 'twitter:card', content: 'summary' }, { name: 'twitter:site', content: '@navidonskis' }, { name: 'twitter:creator', content: '@navidonskis' }, { name: 'og:type', content: 'website' }, { name: 'og:url', content: this.props.location }];
    }

    /**
     * @return {Array}
     */

  }, {
    key: 'getMeta',
    value: function getMeta() {
      var meta = [];

      if (this.props.description) {
        meta.push({ name: 'description', content: this.props.description });
        meta.push({ name: 'og:description', content: this.props.description });
        meta.push({ name: 'twitter:description', content: this.props.description });
      }

      if (this.props.title) {
        meta.push({ name: 'og:title', content: this.props.title });
        meta.push({ name: 'twitter:title', content: this.props.title });
      }

      return [].concat(meta, _toConsumableArray(this.getDefaultMeta())).sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    }

    /**
     * @return {*}
     */

  }, {
    key: 'render',
    value: function render() {
      var meta = this.getMeta();

      return _react2.default.createElement(
        _reactStatic.Head,
        null,
        this.props.title && _react2.default.createElement(
          'title',
          null,
          this.props.title
        ),
        meta && meta.map(function (item, index) {
          return _react2.default.createElement('meta', { key: index, name: item.name, content: item.content });
        }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/apple-touch-icon.png' }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicon-32x32.png' }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicon-16x16.png' }),
        _react2.default.createElement('link', { rel: 'manifest', href: '/assets/manifest.json' }),
        _react2.default.createElement('link', { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: '#000000' }),
        _react2.default.createElement('link', { rel: 'shortcut icon', href: '/assets/favicon.ico' }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'navidonskis' }),
        _react2.default.createElement('meta', { name: 'application-name', content: 'navidonskis' }),
        _react2.default.createElement('meta', { name: 'msapplication-config', content: '/assets/browserconfig.xml' }),
        _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
        _react2.default.createElement('script', { type: 'application/ld+json', src: '/assets/structure-data.json' })
      );
    }
  }]);

  return Head;
}(_react.Component);

Head.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  location: _propTypes2.default.object
};

exports.default = Head;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "main",
        { className: "main", role: "main" },
        this.props.children
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Navigation = __webpack_require__(29);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _reactGa = __webpack_require__(6);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.handleLogoClick = _this.handleLogoClick.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'handleLogoClick',
    value: function handleLogoClick() {
      _reactGa2.default.event({
        category: 'Logo',
        action: 'Clicked Link'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        _extends({ className: 'header', role: 'banner' }, this.props),
        _react2.default.createElement(
          'div',
          { className: 'header--logo' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/', onClick: this.handleLogoClick },
            'navidonskis'
          )
        ),
        _react2.default.createElement(_Navigation2.default, null)
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactGa = __webpack_require__(6);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'handleClick',
    value: function handleClick() {
      _reactGa2.default.event({
        category: 'Navigation',
        action: 'Clicked Link'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { role: 'navigation', className: 'navigation', itemScope: true, itemType: 'https://schema.org/SiteNavigationElement' },
        _react2.default.createElement(
          _reactStatic.NavLink,
          { exact: true, to: '/', className: 'navigation--link', onClick: this.handleClick },
          _react2.default.createElement(
            'span',
            { itemProp: 'name' },
            'Home'
          )
        ),
        _react2.default.createElement(
          _reactStatic.NavLink,
          { to: '/about', className: 'navigation--link', onClick: this.handleClick },
          _react2.default.createElement(
            'span',
            { itemProp: 'name' },
            'About'
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Networks = __webpack_require__(31);

var _Networks2 = _interopRequireDefault(_Networks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    _extends({ className: 'footer', role: 'contentinfo' }, props),
    _react2.default.createElement(_Networks2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'footer__info' },
      _react2.default.createElement(
        'span',
        { className: 'footer__info--col' },
        '\xA9 navidonskis.com'
      ),
      _react2.default.createElement(
        'span',
        { className: 'footer__info--col' },
        _react2.default.createElement(
          'a',
          { href: 'mailto:donatas@navidonskis.com' },
          'donatas@navidonskis.com'
        )
      ),
      _react2.default.createElement(
        'span',
        { className: 'footer__info--col' },
        _react2.default.createElement(
          'a',
          { href: 'tel:+37067078495' },
          '+370 670 78495'
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sn = [{
  type: 'linkedin',
  url: 'https://www.linkedin.com/in/navidonskis'
}, {
  type: 'facebook',
  url: 'https://www.facebook.com/donatas.navidonskis'
}, {
  type: 'twitter',
  url: 'https://twitter.com/navidonskis'
}, {
  type: 'github',
  url: 'https://github.com/doniz'
}];

var Networks = function Networks() {
  return _react2.default.createElement(
    'nav',
    { className: 'footer__networks', itemScope: true, itemType: 'http://schema.org/Person' },
    sn.map(function (item, index) {
      return _react2.default.createElement(
        'a',
        { itemProp: 'sameAs', className: 'footer__networks--link', href: item.url, key: index },
        _react2.default.createElement('i', { className: 'icons icons__' + item.type })
      );
    })
  );
};

exports.default = Networks;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bg = __webpack_require__(33);

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landscape = function (_Component) {
  _inherits(Landscape, _Component);

  function Landscape() {
    _classCallCheck(this, Landscape);

    return _possibleConstructorReturn(this, (Landscape.__proto__ || Object.getPrototypeOf(Landscape)).apply(this, arguments));
  }

  _createClass(Landscape, [{
    key: 'render',
    value: function render() {
      var styles = {
        backgroundImage: 'url(' + this.props.bg + ')'
      };

      return _react2.default.createElement(
        'section',
        { className: 'landscape' },
        _react2.default.createElement(
          'div',
          { className: 'landscape__overlay' },
          _react2.default.createElement('div', { className: 'landscape--background', style: styles })
        )
      );
    }
  }]);

  return Landscape;
}(_react.Component);

Landscape.propTypes = {
  bg: _propTypes2.default.string
};

Landscape.defaultProps = {
  bg: _bg2.default
};

exports.default = Landscape;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-01.3f80f12f.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-02.108501f2.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(36);
exports = module.exports = __webpack_require__(37)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700);", ""]);

// module
exports.push([module.i, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.icons {\n  content: ' ';\n  background-size: 256px 96px;\n  background-repeat: no-repeat;\n  display: block;\n  background: url(" + escape(__webpack_require__(38)) + ");\n  background: linear-gradient(transparent, transparent), url(" + escape(__webpack_require__(39)) + ");\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .icons__linkedin {\n    background-position: 0 -96px;\n    width: 32px;\n    height: 32px; }\n  .icons__twitter {\n    background-position: -32px -96px;\n    width: 32px;\n    height: 32px; }\n  .icons__googleplus {\n    background-position: -64px -96px;\n    width: 32px;\n    height: 32px; }\n  .icons__facebook {\n    background-position: -96px -96px;\n    width: 32px;\n    height: 32px; }\n  .icons__github {\n    background-position: -160px -96px;\n    width: 32px;\n    height: 32px; }\n\na:hover .icons__linkedin, a:focus .icons__linkedin {\n  background-position: 0 -32px; }\n  a:hover .icons__linkedin.icons__colored, a:focus .icons__linkedin.icons__colored {\n    background-position: 0 -64px; }\n\na:hover .icons__twitter, a:focus .icons__twitter {\n  background-position: -32px -32px; }\n  a:hover .icons__twitter.icons__colored, a:focus .icons__twitter.icons__colored {\n    background-position: -32px -64px; }\n\na:hover .icons__googleplus, a:focus .icons__googleplus {\n  background-position: -64px -32px; }\n  a:hover .icons__googleplus.icons__colored, a:focus .icons__googleplus.icons__colored {\n    background-position: -64px -64px; }\n\na:hover .icons__facebook, a:focus .icons__facebook {\n  background-position: -96px -32px; }\n  a:hover .icons__facebook.icons__colored, a:focus .icons__facebook.icons__colored {\n    background-position: -96px -64px; }\n\na:hover .icons__github, a:focus .icons__github {\n  background-position: -160px -32px; }\n  a:hover .icons__github.icons__colored, a:focus .icons__github.icons__colored {\n    background-position: -160px -64px; }\n\nhtml, body, #root {\n  -webkit-text-size-adjust: 100%;\n  height: 100%; }\n\nbody {\n  animation: fadein 1s;\n  background-color: #ffffff;\n  color: #000000;\n  font-size: 17px;\n  font-weight: 300;\n  font-family: \"Montserrat\", sans-serif;\n  min-width: 320px;\n  margin: 0;\n  line-height: 28px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\n::-moz-selection {\n  background: #b5ffeb; }\n\n::selection {\n  background: #b5ffeb; }\n\nh1 {\n  color: #a0a0a0;\n  font-size: 32px;\n  line-height: 36px; }\n\nh2 {\n  color: #a0a0a0;\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 400;\n  text-transform: uppercase; }\n\nh3 {\n  color: #a0a0a0;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  text-transform: uppercase; }\n\nh1, h2, h3, h4, h5, h6 {\n  padding: 15px 0 25px 0; }\n\nstrong {\n  color: #000000;\n  font-weight: 400; }\n\na, a:visited {\n  color: #015bff;\n  transition: color .3s; }\n\na:hover, a:focus, a:active {\n  color: #3e7ff6;\n  text-decoration: none; }\n\n.vertical-center {\n  align-items: center;\n  display: flex; }\n\np {\n  margin-bottom: 20px; }\n\nhr {\n  border: 0;\n  background-color: #dedede;\n  height: 1px;\n  margin-bottom: 25px; }\n\n.tagname {\n  display: inline-flex;\n  background-color: #b5ffeb;\n  padding: 5px 10px;\n  font-weight: 300;\n  margin: 3px;\n  white-space: pre-wrap; }\n  .tagname::-moz-selection {\n    background: #ffffff; }\n  .tagname::selection {\n    background: #ffffff; }\n\n.layout {\n  width: 50%;\n  margin-left: 50%; }\n  @media screen and (max-width: 986px) {\n    .layout {\n      width: 100%;\n      margin: 0 auto; } }\n\n.header {\n  display: flex;\n  align-content: stretch; }\n  .header--logo {\n    font-size: 24px;\n    font-weight: 400; }\n    .header--logo a, .header--logo a:visited {\n      color: #000000;\n      text-decoration: none; }\n    .header--logo a:hover, .header--logo a:focus, .header--logo a:active {\n      color: #505050; }\n  @media screen and (min-width: 987px) {\n    .header--logo {\n      position: fixed;\n      left: 3rem;\n      top: 1rem;\n      height: 3rem;\n      width: 12rem;\n      z-index: 6; } }\n  @media screen and (max-width: 986px) {\n    .header {\n      background-color: #FFF;\n      z-index: 15;\n      width: calc(100% - 2rem);\n      height: 30px;\n      margin: 0;\n      padding: 1rem 2rem; } }\n\n.navigation {\n  width: 100%;\n  text-align: right; }\n  .navigation a, .navigation a:visited {\n    color: #a0a0a0;\n    text-decoration: none; }\n  .navigation a:hover, .navigation a:active, .navigation a:focus, .navigation a.active {\n    color: #000000; }\n  .navigation--link {\n    margin: 0 30px; }\n  @media screen and (min-width: 987px) {\n    .navigation {\n      padding: 0.8rem 2rem 1.25rem;\n      margin-bottom: 1.5rem; } }\n\n.landscape {\n  border: none;\n  padding: 0;\n  margin: 0; }\n  .landscape--background {\n    background-size: cover;\n    background-position-x: 50%;\n    background-repeat: no-repeat;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    padding: 0;\n    position: fixed;\n    width: calc(50% - 3rem);\n    z-index: 5; }\n  .landscape__overlay {\n    width: 100%;\n    height: 100%; }\n    .landscape__overlay:after {\n      background-color: rgba(255, 255, 255, 0.56);\n      content: '';\n      position: fixed;\n      width: calc(50% - 3rem);\n      height: 100%;\n      top: 0;\n      z-index: 5;\n      left: 0; }\n  @media screen and (max-width: 986px) {\n    .landscape__overlay {\n      position: relative; }\n      .landscape__overlay:after {\n        position: absolute;\n        width: 100%; }\n    .landscape--background {\n      position: relative;\n      padding-top: 50%;\n      width: 100%;\n      background-position-y: 50%; } }\n\n@media screen and (max-width: 986px) {\n  .about .landscape--background {\n    background-position-y: 10%; } }\n\n.main {\n  max-width: 45em;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1rem 2rem; }\n  @media screen and (max-width: 986px) {\n    .main {\n      max-width: 100%; } }\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3rem;\n  margin: 1.5rem 0;\n  width: calc(100% - 6rem); }\n  .footer__networks {\n    left: 3rem;\n    z-index: 5; }\n    .footer__networks--link {\n      display: inline-block;\n      white-space: nowrap;\n      margin: 0 10px 0 0; }\n  .footer__info {\n    color: #666666;\n    font-size: 14px;\n    font-weight: 200;\n    border-top: 1px solid #dedede;\n    padding-top: 10px;\n    width: 100%; }\n    .footer__info--col {\n      margin: 0 20px;\n      position: relative;\n      white-space: nowrap; }\n      .footer__info--col:after {\n        content: '';\n        position: absolute;\n        width: 1px;\n        height: 100%;\n        background-color: #dedede;\n        right: -20px;\n        top: 0; }\n      .footer__info--col:first-child {\n        margin-left: 0; }\n      .footer__info--col:last-child {\n        margin-right: 0; }\n        .footer__info--col:last-child:after {\n          display: none; }\n      .footer__info--col a, .footer__info--col a:visited {\n        color: #666666;\n        text-decoration: underline; }\n      .footer__info--col a:hover, .footer__info--col a:focus, .footer__info--col a:active {\n        color: #000000;\n        text-decoration: none; }\n  @media screen and (min-width: 987px) {\n    .footer__networks {\n      bottom: 1rem;\n      position: fixed; } }\n  @media screen and (max-width: 986px) {\n    .footer {\n      padding: 0 2rem;\n      width: calc(100% - 4rem); }\n      .footer__networks {\n        position: absolute;\n        margin-top: 50%;\n        top: 0; } }\n  @media screen and (max-width: 545px) {\n    .footer__info--col {\n      display: block;\n      margin: 0 auto; } }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACECAMAAABI+gUuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFcHBw2eDrdMjrcLnSUWCAXr/pMDAwxsrVyOj1paWl5dXWwtLYGJjKuLi4KqrhA4Sx3Us4f39/s7Ozy8vLICAgv7+/z8/P7+/v39/fenp6QEBA7OzssrKyn5+fjY2N9fX1+fn5np6e2dnZ4uLi5eXl2NjYgcHYEBAQxsbG8vLyqqqqq6ur7qWbr6+vYGBgxcXFUFBQoKCghISEztXl5nhqj4+P0tLSgICAI5O7ldTwl5eXRbXlQqPFr9/0vLy8nKvM4WJRVG6m+d3a/fTz8vr97JqP9tLN7/f68ru0oNHi3/D11+/5++jmHi1N31ZE5ury0Ojw8/X5tcHZ5PT7N6/j6IN2ollQ9MfBSYmkOHWJFVVx6o+DbyYchHuNAkJZ8LCoVmJ6iFJrvOT2E4y2421diM/ub4a109ffkMndUbHXwODrsNjno5yqd6e7zN3iUICV28nG4N7iYHisUqvJuYN8qbbSk1xVzMzMaJipfYigqX2PO1mZmJiYZ2dnAAAA////bWKF3QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAASX0lEQVR42uxd+X/bthVnk9mN2skxJZGiKJK6LVnyJcfWbMVxnLh10yRNeqTLum5r12v30e5eZPNfHwHiBiiyJhzl8+neD1roRxB4X7wb6GdGyNB6rwyotx6qad2J+fWr4qfNn8K/DBn06+XCDFOhLM/RnDD8bf381Pk5flM3AM3tGU/bwhTlFs+3msLy5vNTx6fML36/pQsCBEC9MBOpwCpqfSTxW90UvvN9xsP5R9tOt9t1tkdZ5h/VNQLQm6moR95yWmn8kYeodZnxcH6LSlS3MoznEM4HgFp+ugInhb9ernfXFa9mHQ/mL3S5dXULGcY7mgCoz5Io3pN6a5aygkn072IzbBaxAhTKHuWnjQfzj0STbo7S52/VtQDQjO2/5ckz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"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sprite.8c860238.svg";

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.2f49de15.js.map