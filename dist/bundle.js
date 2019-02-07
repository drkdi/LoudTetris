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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\n/* harmony import */ var _temp_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp_piece */ \"./lib/temp_piece.js\");\n// import {piece} from './piece';\n\n\n\nconst game = () => {\n   // piece\n   Object(_temp_piece__WEBPACK_IMPORTED_MODULE_0__[\"piece\"])();\n\n};\n\n//  get currPiece back, returned as both pos and piece\n\n\nfunction merge(arena, player) {\n   // iterate player matrix \n   // if value > 0, arena[y+player.pos.y][x+player.pos.x]  = value\n}\n\n\n\n\n\n\n\nfunction gameLoop() {\n   const timeDelta = time - this.lastTime;\n   this.game.step(timeDelta);\n   this.game.draw(this.ctx);\n   this.lastTime = time;\n   requestAnimationFrame(this.animate.bind(this));\n} \n\n// another version\nlet dropCounter = 0;\nlet dropInterval = 1000;\nlet lastTime = 0;\n\nfunction update(time = 0) {\n   const timeDelta = time - lastTime;\n   dropCounter += timeDelta;\n   if (dropCounter > dropInterval) {\n      playerDrop();\n   }\n   lastTime = time;\n   draw();\n   requestAnimationFrame(update);\n}\n\n\n\n\n\n\n// document.onkeydown = function(e) {\n//       switch (e.keyCode) {\n//          case 37:\n//             alert('left');\n//             break;\n\n\n//       }\n//       // Left37, Up38, Right39, Down,40\n//    // add for voice commands\n//    };\n\n   document.addEventListener('keydown', event => {\n      switch (event.keyCode) {\n         case 37:\n            // move -1\n         case 39:\n            // move =1\n         case 38:\n            // rotate\n         case 39:\n            // drop 1\n      }\n      \n   });\n\n\n\n   const moveHorizontal = (piece) => {\n\n   }\n\n   const moveVertical = (piece) => {\n\n   }\n\n\n\n   const rotate = (piece) => {\n\n   }\n\n   const handleCollision = () => {\n\n   }\n\n   const handleWallCollision = () => {\n\n   }\n\n\n   const autoDrop = () => {\n\n   }\n\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/temp_piece.js":
/*!***************************!*\
  !*** ./lib/temp_piece.js ***!
  \***************************/
/*! exports provided: block, piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"block\", function() { return block; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"piece\", function() { return piece; });\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vm */ \"./node_modules/vm-browserify/index.js\");\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst block = () => {\n   let canvas = document.getElementById(\"canvas\")\n   let ctx = canvas.getContext(\"2d\");\n   piece.scale(25,25);\n   ctx.fillStyle = 'blue';\n   ctx.fillRect(5, 0, 1, 1);\n   pieces();\n};\n\nlet matrix = [\n   [0, 0, 0, 0],\n   [0, 1, 1, 1],\n   [0, 0, 1, 0],\n   [0, 0, 0, 0],\n];\n\n\n// have matrix\n// iterate through matrix, select blocks === 1\n// function(selected blocks) => return canvas objects\n\n\nconst piece = () => {\n   // let canvas = document.getElementById(\"canvas\")\n   let piece = canvas.getContext('2d');\n   let ctx = canvas.getContext(\"2d\");\n   ctx.fillStyle = 'red';\n   piece.scale(25, 25);\n\n   \n   for (let i = 0; i < matrix.length; i++) {\n      for (let j = 0; j < matrix.length; j++) {\n         // console.log(matrix[i][j]);\n         if (matrix[i][j] > 0) {\n            // ctx[i][j] = block();\n            piece.fillStyle = 'red';\n            piece.fillRect(i, j, 1, 1);\n         }\n      }  \n   }\n};\n\n   const currPiece = {\n      // make pos x middle\n      pos: {x:0, y:0},\n      piece: null,\n   };\n\n\n\n\n// for more pieces\n// function createPiece(type) {\n//    switch(type) {\n//       case \"T\": \n//          return [\n//             [0,1,0,0],\n//          ]\n//    }\n// }\n\n\n\n\n\n\nfunction creatematrix(width, height) {\n   const matrix = [];\n   while (h--) {\n      matrix.push(new Array(w).fill(0));\n   }\n   return matrix;\n}\n\n\n\n\n\n\n\n\n\nconst nextPiece = () => {\n   \n}\n\n//# sourceURL=webpack:///./lib/temp_piece.js?");

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nvar indexOf = [].indexOf;\n\nmodule.exports = function(arr, obj){\n  if (indexOf) return arr.indexOf(obj);\n  for (var i = 0; i < arr.length; ++i) {\n    if (arr[i] === obj) return i;\n  }\n  return -1;\n};\n\n//# sourceURL=webpack:///./node_modules/indexof/index.js?");

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexOf = __webpack_require__(/*! indexof */ \"./node_modules/indexof/index.js\");\n\nvar Object_keys = function (obj) {\n    if (Object.keys) return Object.keys(obj)\n    else {\n        var res = [];\n        for (var key in obj) res.push(key)\n        return res;\n    }\n};\n\nvar forEach = function (xs, fn) {\n    if (xs.forEach) return xs.forEach(fn)\n    else for (var i = 0; i < xs.length; i++) {\n        fn(xs[i], i, xs);\n    }\n};\n\nvar defineProp = (function() {\n    try {\n        Object.defineProperty({}, '_', {});\n        return function(obj, name, value) {\n            Object.defineProperty(obj, name, {\n                writable: true,\n                enumerable: false,\n                configurable: true,\n                value: value\n            })\n        };\n    } catch(e) {\n        return function(obj, name, value) {\n            obj[name] = value;\n        };\n    }\n}());\n\nvar globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',\n'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',\n'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',\n'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',\n'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];\n\nfunction Context() {}\nContext.prototype = {};\n\nvar Script = exports.Script = function NodeScript (code) {\n    if (!(this instanceof Script)) return new Script(code);\n    this.code = code;\n};\n\nScript.prototype.runInContext = function (context) {\n    if (!(context instanceof Context)) {\n        throw new TypeError(\"needs a 'context' argument.\");\n    }\n    \n    var iframe = document.createElement('iframe');\n    if (!iframe.style) iframe.style = {};\n    iframe.style.display = 'none';\n    \n    document.body.appendChild(iframe);\n    \n    var win = iframe.contentWindow;\n    var wEval = win.eval, wExecScript = win.execScript;\n\n    if (!wEval && wExecScript) {\n        // win.eval() magically appears when this is called in IE:\n        wExecScript.call(win, 'null');\n        wEval = win.eval;\n    }\n    \n    forEach(Object_keys(context), function (key) {\n        win[key] = context[key];\n    });\n    forEach(globals, function (key) {\n        if (context[key]) {\n            win[key] = context[key];\n        }\n    });\n    \n    var winKeys = Object_keys(win);\n\n    var res = wEval.call(win, this.code);\n    \n    forEach(Object_keys(win), function (key) {\n        // Avoid copying circular objects like `top` and `window` by only\n        // updating existing context properties or new properties in the `win`\n        // that was only introduced after the eval.\n        if (key in context || indexOf(winKeys, key) === -1) {\n            context[key] = win[key];\n        }\n    });\n\n    forEach(globals, function (key) {\n        if (!(key in context)) {\n            defineProp(context, key, win[key]);\n        }\n    });\n    \n    document.body.removeChild(iframe);\n    \n    return res;\n};\n\nScript.prototype.runInThisContext = function () {\n    return eval(this.code); // maybe...\n};\n\nScript.prototype.runInNewContext = function (context) {\n    var ctx = Script.createContext(context);\n    var res = this.runInContext(ctx);\n\n    forEach(Object_keys(ctx), function (key) {\n        context[key] = ctx[key];\n    });\n\n    return res;\n};\n\nforEach(Object_keys(Script.prototype), function (name) {\n    exports[name] = Script[name] = function (code) {\n        var s = Script(code);\n        return s[name].apply(s, [].slice.call(arguments, 1));\n    };\n});\n\nexports.createScript = function (code) {\n    return exports.Script(code);\n};\n\nexports.createContext = Script.createContext = function (context) {\n    var copy = new Context();\n    if(typeof context === 'object') {\n        forEach(Object_keys(context), function (key) {\n            copy[key] = context[key];\n        });\n    }\n    return copy;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vm-browserify/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/game */ \"./lib/game.js\");\n  \n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n   let canvas = document.getElementById(\"canvas\")\n   let ctx = canvas.getContext(\"2d\");\n      ctx.fillStyle = \"rgba(0, 0, 0,0.85)\";\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n      \n   const newGame = Object(_lib_game__WEBPACK_IMPORTED_MODULE_0__[\"game\"])();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });