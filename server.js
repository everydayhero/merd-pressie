(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/merd-pressie/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderDocument = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _boilerRoomRunner = __webpack_require__(2);

	var _server = __webpack_require__(3);

	var _shared = __webpack_require__(4);

	var _Document = __webpack_require__(5);

	var _Document2 = _interopRequireDefault(_Document);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderDocument = exports.renderDocument = function renderDocument(_ref) {
	  var _ref$assets = _ref.assets;
	  var assets = _ref$assets === undefined ? [] : _ref$assets;
	  var _ref$content = _ref.content;
	  var content = _ref$content === undefined ? '' : _ref$content;
	  return '<!DOCTYPE html>' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Document2.default, {
	    assets: assets,
	    content: content
	  }));
	};

	exports.default = function (_ref2) {
	  var assets = _ref2.assets;
	  return (0, _boilerRoomRunner.createServer)({
	    assets: assets,
	    routes: _routes2.default,
	    basepath: _shared.basepath,
	    renderDocument: renderDocument
	  });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("boiler-room-runner");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var basepath = exports.basepath = process.env.BASE_PATH || '';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderStyles = function renderStyles(styles) {
	  return styles.map(function (style, index) {
	    return _react2.default.createElement('link', { key: index, rel: 'stylesheet', href: style });
	  });
	};

	var renderScripts = function renderScripts(scripts) {
	  return scripts.map(function (script, index) {
	    return _react2.default.createElement('script', { key: index, src: script });
	  });
	};

	exports.default = function (_ref) {
	  var _ref$assets = _ref.assets;
	  var assets = _ref$assets === undefined ? [] : _ref$assets;
	  var _ref$title = _ref.title;
	  var title = _ref$title === undefined ? 'MERD' : _ref$title;
	  var _ref$content = _ref.content;
	  var content = _ref$content === undefined ? '' : _ref$content;
	  var _ref$state = _ref.state;
	  var state = _ref$state === undefined ? {} : _ref$state;

	  var styles = assets.filter(function (asset) {
	    return asset.match(/.css$/);
	  });
	  var scripts = assets.filter(function (asset) {
	    return asset.match(/.js$/);
	  });

	  return _react2.default.createElement(
	    'html',
	    null,
	    _react2.default.createElement(
	      'head',
	      null,
	      _react2.default.createElement(
	        'title',
	        null,
	        title
	      ),
	      _react2.default.createElement('meta', { charSet: 'utf-8' }),
	      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
	      renderStyles(styles)
	    ),
	    _react2.default.createElement(
	      'body',
	      null,
	      _react2.default.createElement('main', {
	        id: 'app',
	        dangerouslySetInnerHTML: {
	          __html: content
	        }
	      }),
	      _react2.default.createElement('script', {
	        id: 'initial-state',
	        type: 'application/json',
	        dangerouslySetInnerHTML: {
	          __html: JSON.stringify(state)
	        }
	      }),
	      renderScripts(scripts)
	    )
	  );
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	var _InternalError = __webpack_require__(14);

	var _InternalError2 = _interopRequireDefault(_InternalError);

	var _NotFound = __webpack_require__(15);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Slide = __webpack_require__(16);

	var _Slide2 = _interopRequireDefault(_Slide);

	var _Main = __webpack_require__(32);

	var _Main2 = _interopRequireDefault(_Main);

	var _reactRouter = __webpack_require__(37);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Main2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'slides/:number', component: _Slide2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '404', component: _NotFound2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '500', component: _InternalError2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '**', component: _NotFound2.default })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classes = __webpack_require__(8);

	var _styles = __webpack_require__(13);

	var styles = _interopRequireWildcard(_styles);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        backgroundImage: 'url(http://static1.gamespot.com/uploads/original/1550/15507091/2844642-1530281363-giphy.gif)',
	        backgroundSize: 'cover',
	        backgroundPosition: '50% 50%'
	      }, className: (0, _classes.classes)(styles.title) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.titleText) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading, { margin: 0 }) },
	        'Merd ... '
	      )
	    )
	  );
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.classes = undefined;

	var _traits = __webpack_require__(9);

	Object.keys(_traits).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _traits[key];
	    }
	  });
	});

	var _cxs = __webpack_require__(10);

	var _cxs2 = _interopRequireDefault(_cxs);

	var _static = __webpack_require__(11);

	var _static2 = _interopRequireDefault(_static);

	var _merge = __webpack_require__(12);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var classes = exports.classes = function classes() {
	  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	    styles[_key] = arguments[_key];
	  }

	  return (0, _cxs2.default)((0, _static2.default)(_merge2.default.apply(undefined, [{}].concat(styles))));
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var rhythm = exports.rhythm = function rhythm() {
	  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rem';
	  var basis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
	  return '' + basis * value + unit;
	};

	var scale = exports.scale = function scale() {
	  var exponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.2;
	  return Math.pow(scale, exponent) + 'rem';
	};

	var radiuses = exports.radiuses = {
	  round: rhythm(100),
	  rounded: rhythm(0.125)
	};

	var transitions = exports.transitions = {
	  easeOut: 'ease-out .25s'
	};

	var fonts = exports.fonts = {
	  interface: 'Lato, Helvetica Neue, Helvetica, sans-serif',
	  display: 'Lato, Helvetica Neue, Helvetica, sans-serif'
	};

	var colors = exports.colors = {
	  white: 'white',

	  grey: {
	    dark: '#585858',
	    light: '#b3b3b3'
	  },

	  green: {
	    primary: '#00a044',
	    secondary: '#7ec774'
	  },

	  orange: '#cf4c22'
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("cxs");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("inline-style-prefixer/static");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("lodash/merge");

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var base = exports.base = {
	  padding: '4.5em 4em'
	};

	var img = {
	  width: '100%',
	  maxWidth: '100%',
	  borderRadius: '0.25em',
	  overflow: 'hidden',
	  display: 'block'
	};

	var avatar = exports.avatar = _extends({}, img);

	var title = exports.title = _extends({}, base, {
	  display: 'flex',
	  flexFlow: 'column',
	  justifyContent: 'center',
	  ':before': {
	    content: '""',
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    backgroundColor: 'rgba(0, 0, 0, 0.6)'
	  }
	});

	var titleText = exports.titleText = {
	  fontSize: '5vw',
	  margin: '0',
	  color: 'whitesmoke',
	  position: 'relative'
	};

	var heading = exports.heading = {
	  fontWeight: 'bold',
	  lineHeight: '1.1em',
	  fontSize: '3em',
	  letterSpacing: '0.005em',
	  marginTop: '0',
	  marginBottom: '1em'
	};

	var headingSmall = exports.headingSmall = _extends({}, heading, {
	  fontSize: '2em'
	});

	var headingSmaller = exports.headingSmaller = _extends({}, heading, {
	  fontSize: '1.25em'
	});
	var content = exports.content = {
	  marginTop: 0,
	  marginBottom: '1em'
	};

	var text = exports.text = {
	  fontSize: '2vw'
	};

	var list = exports.list = {
	  marginTop: 0
	};

	var listItem = exports.listItem = {
	  lineHeight: 'inherit',
	  marginBottom: '0.5em'
	};

	var bigBlueStat = exports.bigBlueStat = {
	  backgroundColor: '#1d83f6',
	  color: 'white',
	  padding: '1.25em'
	};

	var bigBlueStatNum = exports.bigBlueStatNum = _extends({}, heading, {
	  fontSize: '3.5em',
	  marginBottom: '0.25em'
	});

	var bigBlueStatContent = exports.bigBlueStatContent = {
	  lineHeight: '1em',
	  margin: 0
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    '500 Whoops!'
	  );
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    '404 Whoops!'
	  );
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Slides = __webpack_require__(17);

	var _Slides2 = _interopRequireDefault(_Slides);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var params = _ref.params;
	  var router = _ref.router;

	  var Slide = _Slides2.default[parseInt(params.number - 1)];

	  if (!Slide) {
	    return router.replace('/404');
	  }

	  return _react2.default.createElement(Slide, null);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Grid = __webpack_require__(18);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Item = __webpack_require__(20);

	var _Item2 = _interopRequireDefault(_Item);

	var _classes = __webpack_require__(8);

	var _styles = __webpack_require__(13);

	var styles = _interopRequireWildcard(_styles);

	var _alex = __webpack_require__(23);

	var _alex2 = _interopRequireDefault(_alex);

	var _dan = __webpack_require__(24);

	var _dan2 = _interopRequireDefault(_dan);

	var _kanika = __webpack_require__(25);

	var _kanika2 = _interopRequireDefault(_kanika);

	var _keiran = __webpack_require__(26);

	var _keiran2 = _interopRequireDefault(_keiran);

	var _brad = __webpack_require__(27);

	var _brad2 = _interopRequireDefault(_brad);

	var _classic = __webpack_require__(28);

	var _classic2 = _interopRequireDefault(_classic);

	var _bikesForBibles = __webpack_require__(29);

	var _bikesForBibles2 = _interopRequireDefault(_bikesForBibles);

	var _sydneyToSurfers = __webpack_require__(30);

	var _sydneyToSurfers2 = _interopRequireDefault(_sydneyToSurfers);

	var _stAndrews = __webpack_require__(31);

	var _stAndrews2 = _interopRequireDefault(_stAndrews);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Who = function Who() {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.text) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading) },
	        'Who\'s merd?'
	      ),
	      _react2.default.createElement(
	        _Grid2.default,
	        null,
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 2 },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Alex'
	            )
	          ),
	          _react2.default.createElement('img', { className: (0, _classes.classes)(styles.avatar), src: _alex2.default })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 2 },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Dan'
	            )
	          ),
	          _react2.default.createElement('img', { className: (0, _classes.classes)(styles.avatar), src: _dan2.default })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 2 },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Kanika'
	            )
	          ),
	          _react2.default.createElement('img', { className: (0, _classes.classes)(styles.avatar), src: _kanika2.default })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 2 },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Keiran'
	            )
	          ),
	          _react2.default.createElement('img', { className: (0, _classes.classes)(styles.avatar), src: _keiran2.default })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 2 },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Me (Brad)'
	            )
	          ),
	          _react2.default.createElement('img', { className: (0, _classes.classes)(styles.avatar), src: _brad2.default })
	        )
	      )
	    )
	  );
	};

	var RobotEmma = function RobotEmma() {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.text) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading) },
	        'Robot Emma'
	      )
	    )
	  );
	};

	var BoilerRoomBuilder = function BoilerRoomBuilder() {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.text) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading) },
	        'BRB'
	      )
	    )
	  );
	};

	var EventbriteLaunch = function EventbriteLaunch() {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.text) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading) },
	        _react2.default.createElement(
	          'em',
	          null,
	          'Eventbrite Integration'
	        ),
	        ' for legacy regions launched on September the 12th'
	      )
	    )
	  );
	};

	var EventbriteUsage = function EventbriteUsage() {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.text) },
	      _react2.default.createElement(
	        'h1',
	        { className: (0, _classes.classes)(styles.heading) },
	        'Since launch we have 4 integrations in the wild'
	      ),
	      _react2.default.createElement(
	        _Grid2.default,
	        null,
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 3 },
	          _react2.default.createElement('img', { src: _classic2.default, className: (0, _classes.classes)(styles.avatar) })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 3 },
	          _react2.default.createElement('img', { src: _bikesForBibles2.default, className: (0, _classes.classes)(styles.avatar) })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 3 },
	          _react2.default.createElement('img', { src: _sydneyToSurfers2.default, className: (0, _classes.classes)(styles.avatar) })
	        ),
	        _react2.default.createElement(
	          _Item2.default,
	          { span: 3 },
	          _react2.default.createElement('img', { src: _stAndrews2.default, className: (0, _classes.classes)(styles.avatar) })
	        )
	      )
	    )
	  );
	};

	exports.default = [Who, BoilerRoomBuilder, RobotEmma, EventbriteLaunch, EventbriteUsage];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(19);

	var styles = _interopRequireWildcard(_styles);

	var _classes = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = function (_React$Component) {
	  _inherits(Grid, _React$Component);

	  function Grid() {
	    _classCallCheck(this, Grid);

	    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
	  }

	  _createClass(Grid, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        spacing: this.props.spacing
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var spacing = _props.spacing;
	      var children = _props.children;


	      var classNames = (0, _classes.classes)(styles.base, styles[spacing]);

	      return _react2.default.createElement(
	        'div',
	        { className: classNames },
	        children
	      );
	    }
	  }]);

	  return Grid;
	}(_react2.default.Component);

	Grid.childContextTypes = {
	  spacing: _react2.default.PropTypes.string
	};

	Grid.defaultProps = {
	  spacing: 'standard'
	};

	exports.default = Grid;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var base = exports.base = {
	  display: 'flex',
	  flexFlow: 'row',
	  flexWrap: 'wrap'
	};

	var loose = exports.loose = {
	  margin: '-2em'
	};

	var standard = exports.standard = {
	  margin: '-1em'
	};

	var tight = exports.tight = {
	  margin: '-0.5em'
	};

	var none = exports.none = {
	  margin: 0
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(21);

	var styles = _interopRequireWildcard(_styles);

	var _object = __webpack_require__(22);

	var _classes = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _object.merge)(function (_ref, _ref2) {
	  var _ref$span = _ref.span;
	  var span = _ref$span === undefined ? 6 : _ref$span;
	  var _ref$columns = _ref.columns;
	  var columns = _ref$columns === undefined ? 12 : _ref$columns;
	  var children = _ref.children;
	  var spacing = _ref2.spacing;

	  var classNames = (0, _classes.classes)(styles.division(span, columns), styles[spacing]);

	  return _react2.default.createElement(
	    'div',
	    { className: classNames },
	    children
	  );
	}, {
	  contextTypes: {
	    spacing: _react2.default.PropTypes.string
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var division = exports.division = function division(a, b) {
	  return {
	    boxSizing: 'border-box',
	    flex: '0 0 ' + a / b * 100 + '%'
	  };
	};

	var loose = exports.loose = { padding: '2em' };
	var standard = exports.standard = { padding: '1em' };
	var tight = exports.tight = { padding: '0.5em' };
	var none = exports.none = { padding: 0 };

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("lodash/object");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1b7984e31fdd9480b043a9e8978bee80.jpg";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5f284712f72108ef08447e2a08d951d0.jpg";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b7dbc4e21d188c0e070402ca53f7e7ca.jpg";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8868c984f6273e91ed72965a6d531f66.jpg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "722823123df48379faca71692084bdd5.jpg";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8bfcf0d1ad80b96a2fbee07a757a9cf5.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b0bbc8e614f4ce20813f8a8d0d154f8d.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1037db332165de0095fc62d51ef39db5.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "445a20a7fffbb4712674c3256c93a173.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SlideInSlideOut = __webpack_require__(33);

	var _SlideInSlideOut2 = _interopRequireDefault(_SlideInSlideOut);

	var _Nav = __webpack_require__(35);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Slides = __webpack_require__(17);

	var _Slides2 = _interopRequireDefault(_Slides);

	__webpack_require__(39);

	var _classes = __webpack_require__(8);

	var _styles = __webpack_require__(40);

	var styles = _interopRequireWildcard(_styles);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COUNT = _Slides2.default.length;

	exports.default = function (_ref) {
	  var children = _ref.children;
	  var location = _ref.location;
	  var params = _ref.params;
	  return _react2.default.createElement(
	    'article',
	    { className: (0, _classes.classes)(styles.base) },
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.slide) },
	      _react2.default.createElement(
	        _SlideInSlideOut2.default,
	        { location: location },
	        (0, _react.cloneElement)(children, { key: location.pathname })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classes.classes)(styles.nav) },
	      _react2.default.createElement(_Nav2.default, { count: COUNT, current: params.number })
	    )
	  );
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _velocityReact = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var freeze = {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0
	};

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    _velocityReact.VelocityTransitionGroup,
	    {
	      enter: {
	        animation: { translateX: '0' },
	        style: _extends({}, freeze, {
	          translateX: '100vw'
	        })
	      },
	      leave: {
	        animation: { translateX: '-100vw' },
	        style: {
	          translateX: '0'
	        }
	      }
	    },
	    children
	  );
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("velocity-react");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(36);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _classes = __webpack_require__(8);

	var _styles = __webpack_require__(38);

	var styles = _interopRequireWildcard(_styles);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderLinks = function renderLinks(count, current) {
	  return [_react2.default.createElement(
	    _NavLink2.default,
	    {
	      className: (0, _classes.classes)(current === 0 ? styles.activeLink : styles.link),
	      key: 'home',
	      to: '/' },
	    'Start'
	  ), _react2.default.createElement(
	    _NavLink2.default,
	    {
	      className: (0, _classes.classes)(styles.link),
	      key: 0,
	      to: current === 0 || current === '1' ? '' : '/slides/' + (parseInt(current) - 1) },
	    'Prev'
	  )].concat(Array.from({ length: count }).map(function (n, i) {
	    return _react2.default.createElement(
	      _NavLink2.default,
	      {
	        className: (0, _classes.classes)(current === (i + 1).toString() ? styles.activeLink : styles.link),
	        key: i + 1,
	        to: '/slides/' + (i + 1) },
	      i + 1
	    );
	  })).concat(_react2.default.createElement(
	    _NavLink2.default,
	    {
	      className: (0, _classes.classes)(styles.link),
	      key: count + 1,
	      to: current === count.toString() ? '/slides/' + current : '/slides/' + (parseInt(current) + 1) },
	    'Next'
	  ));
	};

	exports.default = function (_ref) {
	  var _ref$count = _ref.count;
	  var count = _ref$count === undefined ? 0 : _ref$count;
	  var _ref$current = _ref.current;
	  var current = _ref$current === undefined ? 0 : _ref$current;
	  return _react2.default.createElement(
	    'nav',
	    { className: (0, _classes.classes)(styles.base) },
	    renderLinks(count, current)
	  );
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(37);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  return _react2.default.createElement(_reactRouter.Link, props);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var base = exports.base = {
	  fontSize: '0.9em',
	  backgroundColor: '#262626',
	  padding: '0.5em',
	  overflow: 'auto',
	  whiteSpace: 'nowrap'
	};

	var link = exports.link = {
	  display: 'inline-block',
	  lineHeight: '1em',
	  textDecoration: 'none',
	  padding: '0.75em 1.25em',
	  color: 'white',
	  borderRadius: '0.25em',
	  backgroundColor: 'rgba(255, 255, 255, 0.125)',
	  transition: 'background-color 0.3s ease',
	  marginRight: '0.25em',
	  ':hover': {
	    backgroundColor: 'rgba(255, 255, 255, 0.25)'
	  }
	};

	var activeLink = exports.activeLink = _extends({}, link, {
	  backgroundColor: 'rgba(255, 255, 255, 0.5)',
	  color: '#262626'
	});

/***/ },
/* 39 */
/***/ function(module, exports) {

	// empty (null-loader)

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var base = exports.base = {
	  display: 'flex',
	  flexFlow: 'column',
	  height: '100vh'
	};

	var slide = exports.slide = {
	  flex: '1 0 auto',
	  position: 'relative',
	  overflow: 'hidden'
	};

	var nav = exports.nav = {
	  flex: '0 0 auto'
	};

/***/ }
/******/ ])));