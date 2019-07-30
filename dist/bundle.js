/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Ball.js":
/*!************************!*\
  !*** ./src/js/Ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions */ \"./src/js/directions.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\nclass Ball {\n  constructor(newSpeed) {\n    this.width = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.ball.width;\n    this.height = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.ball.height;\n    this.x = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width / 2;\n    this.y = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height / 2;\n    this.moveX = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stopped;\n    this.moveY = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stopped;\n    this.speed = newSpeed;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/js/Ball.js?");

/***/ }),

/***/ "./src/js/Paddle.js":
/*!**************************!*\
  !*** ./src/js/Paddle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions */ \"./src/js/directions.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\nclass Paddle {\n  constructor(side) {\n    this.width = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.paddle.width;\n    this.height = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.paddle.height;\n    this.x =\n      side === _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.directions.labels.left\n        ? 150\n        : _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width - 150;\n    this.y = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height / 2;\n    this.score = 0;\n    this.move = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stopped;\n    this.speed = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.paddle.speed;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n\n//# sourceURL=webpack:///./src/js/Paddle.js?");

/***/ }),

/***/ "./src/js/canvasElement.js":
/*!*********************************!*\
  !*** ./src/js/canvasElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _playerPaddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerPaddle */ \"./src/js/playerPaddle.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\nconst canvasElement = {\n  init() {\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas = document.getElementById('my-canvas');\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.getContext('2d');\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.canvas.width;\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height = _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.element.canvas.height;\n  },\n  listeners: {\n    set() {\n      document.addEventListener('keydown', _playerPaddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].move);\n      document.addEventListener('keyup', _playerPaddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stop);\n    }\n  },\n  delay: {\n    set() {\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delayAmount = new Date().getTime();\n    }\n  },\n  draw() {\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.clearRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height);\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillStyle = 'black';\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height);\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillStyle = 'white';\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillRect(\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.x,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.width,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.height\n    );\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillRect(\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.x,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.width,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height\n    );\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillRect(\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.width,\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.height\n    );\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.font = '80px Arial';\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.textAlign = 'center';\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillText(\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.score.toString(),\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width / 2 - 300,\n      100\n    );\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillText(\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.score.toString(),\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width / 2 + 300,\n      100\n    );\n  },\n  check: {\n    hasWinner() {\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.score === _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.score.win) {\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillText('Player Wins', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width / 2, 300);\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = true;\n      }\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.score === _settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].game.score.win) {\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillText('AI Wins', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width / 2, 300);\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = true;\n      }\n    }\n  },\n  update() {\n    canvasElement.draw();\n    canvasElement.check.hasWinner();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (canvasElement);\n\n\n//# sourceURL=webpack:///./src/js/canvasElement.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet config = {\n  canvas: null,\n  ctx: null,\n  player: null,\n  aiPlayer: null,\n  ball: null,\n  running: false,\n  gameOver: false,\n  delayAmount: null,\n  targetForBall: null,\n  beepSound: null\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/cpuPaddle.js":
/*!*****************************!*\
  !*** ./src/js/cpuPaddle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions */ \"./src/js/directions.js\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paddle */ \"./src/js/Paddle.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\n\nconst cpuPaddle = {\n  init() {\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer = new _Paddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_settings__WEBPACK_IMPORTED_MODULE_3__[\"default\"].game.directions.labels.right);\n  },\n  speed: {\n    set() {\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.speed = _settings__WEBPACK_IMPORTED_MODULE_3__[\"default\"].game.element.ball.aiPlayerSpeed;\n    }\n  },\n  check: {\n    movement() {\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y > _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height / 2) {\n        if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.moveX === _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].right) {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y -= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.speed;\n        } else {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y -= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.speed;\n        }\n      }\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y < _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height / 2) {\n        if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.moveX === _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].right) {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.speed;\n        } else {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.speed;\n        }\n      }\n\n      // If AI tries to move off the board handle that\n      if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y < 0) {\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y = 0;\n      } else if (\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y >=\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height\n      ) {\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height;\n      }\n\n      if (\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.width <= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.x &&\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.x - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.width\n      ) {\n        if (\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y <= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y + _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.height &&\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y + _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.height >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y\n        ) {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.x + _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.width;\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.moveX = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].right;\n          //beepSound.play();\n        }\n      }\n\n      // Handle ball collison with AI paddle\n      if (\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.width <= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.x &&\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.x - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.width\n      ) {\n        if (\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y <= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y + _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.height &&\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.y + _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.height >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.y\n        ) {\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.x = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiPlayer.x - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.width;\n          _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ball.moveX = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].left;\n          //beepSound.play();\n        }\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cpuPaddle);\n\n\n//# sourceURL=webpack:///./src/js/cpuPaddle.js?");

/***/ }),

/***/ "./src/js/directions.js":
/*!******************************!*\
  !*** ./src/js/directions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet direction = {\n  stopped: 0,\n  up: 1,\n  down: 2,\n  left: 3,\n  right: 4\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (direction);\n\n\n//# sourceURL=webpack:///./src/js/directions.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvasElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasElement */ \"./src/js/canvasElement.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _cpuPaddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpuPaddle */ \"./src/js/cpuPaddle.js\");\n/* harmony import */ var _gameBall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBall */ \"./src/js/gameBall.js\");\n/* harmony import */ var _playerPaddle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerPaddle */ \"./src/js/playerPaddle.js\");\n\n\n\n\n\n\nconst game = {\n  init() {\n    _canvasElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n    _playerPaddle__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n    _cpuPaddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n    _gameBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n    _cpuPaddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speed.set();\n    _gameBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"].target.set();\n    _canvasElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delay.set();\n    _canvasElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listeners.set();\n    _canvasElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update();\n  },\n  update() {\n    if (!_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver) {\n      _gameBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"].check.collisions();\n      _gameBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"].move();\n      _gameBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"].check.movement();\n      _playerPaddle__WEBPACK_IMPORTED_MODULE_4__[\"default\"].constrainToBoard();\n      _cpuPaddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"].check.movement();\n    }\n  },\n  loop() {\n    game.update();\n    _canvasElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update();\n    if (!_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver) requestAnimationFrame(game.loop);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameBall.js":
/*!****************************!*\
  !*** ./src/js/gameBall.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/js/Ball.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directions */ \"./src/js/directions.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\n\nconst gameBall = {\n  init() {\n    _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_settings__WEBPACK_IMPORTED_MODULE_3__[\"default\"].game.element.ball.playerSpeed);\n  },\n  target: {\n    set() {\n      _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetForBall = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player;\n    }\n  },\n  move() {\n    if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.move === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].down) {\n      _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.y += _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.speed;\n    } else if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.move === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].up) {\n      _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.y -= _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player.speed;\n    }\n  },\n  reset(whoScored, whoLost) {\n    whoScored.score++;\n    let newBallSpeed = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.speed + 0.2;\n    _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newBallSpeed);\n    _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetForBall = whoLost;\n    _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delayAmount = new Date().getTime();\n  },\n  check: {\n    movement() {\n      if (gameBall.check.delay() && _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetForBall) {\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveX =\n          _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetForBall === _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player\n            ? _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].left\n            : _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].right;\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveY = [_directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].up, _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].down][\n          Math.round(Math.random())\n        ];\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.y = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / 2;\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetForBall = null;\n      }\n      if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveY === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].up) {\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.y -= _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.speed;\n      } else if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveY === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].down) {\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.y += _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.speed;\n      }\n      if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveX === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].left) {\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.x -= _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.speed;\n      } else if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveX === _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].right) {\n        _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.x += _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.speed;\n      }\n    },\n    delay() {\n      return new Date().getTime() - _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delayAmount >= 1000;\n    },\n    collisions() {\n      gameBall.check.collision.hasPlayerMissed();\n      gameBall.check.collision.hasCpuMissed();\n      gameBall.check.collision.hasBoundaryHit();\n    },\n    collision: {\n      hasPlayerMissed() {\n        if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.x <= 0) {\n          gameBall.reset(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aiPlayer, _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player);\n        }\n      },\n      hasCpuMissed() {\n        if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.x >= _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.width - _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.width) {\n          gameBall.reset(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player, _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aiPlayer);\n        }\n      },\n      hasBoundaryHit() {\n        if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.y <= 0) {\n          _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveY = _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].down;\n        }\n        if (_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.y >= _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height - _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.height) {\n          _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ball.moveY = _directions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].up;\n        }\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBall);\n\n\n//# sourceURL=webpack:///./src/js/gameBall.js?");

/***/ }),

/***/ "./src/js/playerPaddle.js":
/*!********************************!*\
  !*** ./src/js/playerPaddle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions */ \"./src/js/directions.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paddle */ \"./src/js/Paddle.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n\n\n\n\n\n\nconst playerPaddle = {\n  init() {\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player = new _Paddle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"].game.directions.labels.left);\n  },\n  constrainToBoard() {\n    if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y < 0) {\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y = 0;\n    } else if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.height) {\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.y = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.height;\n    }\n  },\n  move(key) {\n    if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].running === false) {\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].running = true;\n      window.requestAnimationFrame(_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loop);\n    }\n    if (key.keyCode === 38 || key.keyCode === 87)\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.move = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].up;\n    if (key.keyCode === 40 || key.keyCode === 83)\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.move = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].down;\n  },\n  stop(evt) {\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.move = _directions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stopped;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerPaddle);\n\n\n//# sourceURL=webpack:///./src/js/playerPaddle.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\n\n// Initialize game when the page loads:\ndocument.addEventListener('DOMContentLoaded', _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init);\n\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst settings = {\n  game: {\n    score: {\n      win: 5\n    },\n    directions: {\n      labels: {\n        left: 'left',\n        right: 'right'\n      }\n    },\n    element: {\n      ball: {\n        height: 15,\n        width: 15,\n        playerSpeed: 7,\n        aiPlayerSpeed: 6.8\n      },\n      canvas: {\n        width: 1400,\n        height: 800\n      },\n      paddle: {\n        width: 15,\n        height: 65,\n        speed: 11\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\n\n\n//# sourceURL=webpack:///./src/js/settings.js?");

/***/ })

/******/ });