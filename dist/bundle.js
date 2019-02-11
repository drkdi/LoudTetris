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

/***/ "./lib/board.js":
/*!**********************!*\
  !*** ./lib/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Board {\n\n   constructor(width, height) {\n      this.matrix = [];\n      // debugger\n      \n\n      while (height > 0) {\n         this.matrix.push(new Array(width).fill(0));\n         height -= 1;\n      }\n      // return this.matrix;\n      // debugger\n\n\n   }\n\n\n   // drawArena() {\n   //    // this.ctx.clearRect(0, 0, 50,50);\n   //    // let ctx = canvas.getContext('2d');\n   //    debugger\n   //    for (let i = 0; i < 10; i++) {\n   //       for (let j = 0; j < 20; j++) {\n   //          if (this.matrix[j][i] > 0) {\n   //             debugger\n   //             this.ctx.fillStyle = 'blue';\n   //             // debugger\n   //             // this.ctx.fillRect(j + 5, i + 5, 1, 1);\n   //             this.ctx.fillRect(j, i, 1, 1);\n   //          }\n   //       }\n   //    }\n   // }\n   \n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/game2.js":
/*!**********************!*\
  !*** ./lib/game2.js ***!
  \**********************/
/*! exports provided: drawBoard, startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBoard\", function() { return drawBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony import */ var _temp_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp_piece */ \"./lib/temp_piece.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./lib/board.js\");\n\n\n// const Piece = require(\"./temp_piece.js\");\n\n// class Game {\n//    constructor(ctx) {\n//       ctx = ctx;\n//    }\n\n//    drawBoard(ctx) {\n//       ctx.fillStyle = \"rgba(0, 0, 0,0.85)\";\n//       ctx.fillRect(0, 0, canvas.width, canvas.height);\n//    }\n\n//    startGame() {\n      \n//       drawBoard(ctx);\n//       let piece = new Piece(ctx);\n      \n//       // piece.draw({x: 10, y: 10});\n\n//       // debugger\n//       piece.update();\n\n\n      \n//       gameLoop(piece)\n\n//    }\n\n\n//    gameLoop(piece) {\n//       setInterval(function () { piece.update() }, 500)\n//    }\n\n// }\n\n// export default Game; \n\n\n\nlet arena = new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](12, 20);\n\n\n\nfunction drawBoard() {\n   \n   let canvas = document.getElementById(\"canvas\");\n   let ctx = canvas.getContext('2d');\n   ctx.fillStyle = \"rgba(0, 0, 0,0.85)\";\n   ctx.fillRect(0, 0, 400, 800);\n   // ctx.fillStyle = \"rgba(0, 0, 0,0.85)\";\n   // ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n   // for (let i = 0; i < 10; i++) {\n   //    for (let j = 0; j < 20; j++) {\n      arena.matrix.forEach((row, y) => {\n         row.forEach((value, x) => {\n         if (value > 0) {\n            debugger\n            ctx.fillStyle = 'blue';\n            // debugger\n            // ctx.fillRect(j + 5, i + 5, 1, 1);\n            ctx.fillRect(x, y, 1, 1);\n         }\n      });\n      });\n   }\n\nlet piece;\n\nfunction getPiece() {\n   piece = new _temp_piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n}\n\n\n\nfunction startGame(ctx) {\n   getPiece();\n   drawBoard(ctx); \n   piece.update();\n\n\n   // gameLoop(piece)\n   setInterval(function () { gameLoop() }, 1000)\n}\n\n\n\n\n// need to change board height / width\n\nfunction combine(arena, piece) {\n   piece.matrix.forEach((row, y) => {\n      row.forEach((value, x) => {\n         debugger\n         if (value > 0) {\n            arena.matrix[y + piece.currPos.y][x + piece.currPos.x] = value;\n         }\n      });\n   }\n   );\n   drawBoard();\n}\n\nfunction collide(arena, piece) {\n   for (let y = 0; y < piece.matrix.length; ++y) {\n      for (let x = 0; x < piece.matrix[y].length; ++x) {\n         // debugger\n\n         if (piece.matrix[y][x] !== 0 &&\n            (arena.matrix[y + piece.currPos.y] &&\n            arena.matrix[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {\n            console.log(\"collide\")\n               return true;\n         }\n      }\n   }\n   return false;\n}\n\n// let dropCounter = 0;\n// let dropInterval = 1000;\n// let lastTime = 0;\n\n\n\n\n\n\n\n\n\nfunction gameLoop(time = 0) {\n  \n   // debugger\n   // const deltaTime = time - lastTime;\n\n   // dropCounter = dropCounter + deltaTime;\n\n   // if (dropCounter > dropInterval) {\n   //    piece.drop()\n   // }\n   \n   // lastTime = time;\n   \n   // piece.render();\n   // console.log(dropCounter);\n\n   // setInterval(function () { piece.update() }, 1000)\n   // requestAnimationFrame(gameLoop);\n  \n  \n//    move to piece functions\n\n   debugger\n\n\n   if (piece.collide(arena)) {\n      piece.currPos.y -= 1;\n      piece.render();\n      // debugger\n      combine(arena, piece);\n      // break\n      // get new piece\n\n      drawBoard(arena);\n      getPiece();\n      piece.update();\n\n      // piece reset\n   }\n   else {\n   drawBoard(arena)\n   piece.drop();\n   piece.render();\n   // arena.drawArena();\n\n   }\n}\n\ndocument.addEventListener('keydown', event => {\n   switch (event.keyCode) {\n      case 37:\n         piece.moveLeft();\n         piece.render()\n         break;\n      case 39:\n         piece.moveRight();\n         piece.render();\n         break;\n      case 38:\n         // console.log(\"rotate\")\n         piece.rotate();\n         piece.render();\n         break;\n      case 40:\n         piece.drop();\n         piece.render();\n         break;\n         // console.log(\"bananas\")\n   }\n});\n\n//# sourceURL=webpack:///./lib/game2.js?");

/***/ }),

/***/ "./lib/temp_piece.js":
/*!***************************!*\
  !*** ./lib/temp_piece.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// export const block = () => {\n//    let canvas = document.getElementById(\"canvas\")\n//    let ctx = canvas.getContext(\"2d\");\n//    piece.scale(25,25);\n//    ctx.fillStyle = 'blue';\n//    ctx.fillRect(5, 0, 1, 1);\n//    pieces();\n// };\nclass Piece {\n   constructor() {   \n      this.canvas = document.getElementById('canvas');\n      \n      this.ctx = this.canvas.getContext('2d');\n\n      this.matrix = [\n         [0, 1, 0],\n         [1, 1, 1],\n         [0, 0, 0],\n      ];\n      \n      this.currPos = {\n         x: 6,\n         y: 0,\n      };\n      // this.draw = this.draw.bind(this);\n      // debugger\n      this.ctx.fillStyle = 'violet';\n      this.ctx.scale(20, 20);\n\n   }\n   // have matrix\n   // iterate through matrix, select blocks === 1\n   // function(selected blocks) => return canvas objects\n\n   render() {\n      // this.drawBoard(this.ctx);\n      this.drawPiece(this.currPos);\n\n   }\n\n   update() {\n      this.render()\n      // this.drop()\n      // requestAnimationFrame(this.update());\n   }\n\n   // reassign matrix to take in, for context if it doesnt change\n   drawPiece(currPos) {\n      // this.ctx.clearRect(0, 0, 50,50);\n      // let ctx = canvas.getContext('2d');\n      for (let i = 0; i < this.matrix.length; i++) {\n         for (let j = 0; j < this.matrix.length; j++) {\n            if (this.matrix[i][j] > 0) {\n               this.ctx.fillStyle = 'violet';\n               // debugger\n               // this.ctx.fillRect(j + 5, i + 5, 1, 1);\n               this.ctx.fillRect(j + currPos.x, i + currPos.y, 1, 1);            \n            }\n         }  \n      }\n   }\n\n   moveRight() {\n      // console.log(currPos.x);\n      // debugger\n      this.currPos.x = this.currPos.x + 1;\n      // if collide => other\n   }\n   \n   moveLeft() {\n      // console.log(currPos.x);\n      // debugger\n      this.currPos.x = this.currPos.x - 1;\n      // if collide => other\n   }\n\n   drop() {\n      this.currPos.y = this.currPos.y + 1;\n      // if collide => other\n      // this.draw.apply(this);\n      // this.draw(this.currPos);\n      // debugger\n   }\n   \n   drawBoard(ctx) {\n      ctx.fillStyle = \"rgba(0, 0, 0,0.85)\";\n      ctx.fillRect(0, 0, 400,800);\n   }\n\n   rotate() {\n      // rotate array\n      for (let i = 0; i < this.matrix.length; i++) {\n         for (let j = 0; j < i; j++) {\n            [this.matrix[i][j], this.matrix[j][i]] = [this.matrix[j][i], this.matrix[i][j]];\n         }\n      }\n      // reverse array\n      this.matrix.forEach(row => row.reverse());\n   }\n\n   collide(arena) {\n      \n      for (let y = 0; y < this.matrix.length - 1; ++y) {\n         for (let x = 0; x < this.matrix[y].length; ++x) {\n            // debugger\n\n            if (this.matrix[y][x] !== 0 &&\n               (arena.matrix[y + this.currPos.y] &&\n                  arena.matrix[y + this.currPos.y][x + this.currPos.x]) !== 0) {\n               console.log(\"collide\")\n               return true;\n            }\n         }\n      }\n         return false;\n      }  \n\n\n\n\n   // for more pieces\n   // function createPiece(type) {\n   //    switch(type) {\n   //       case \"T\": \n   //          return [\n   //             [0,1,0,0],\n   //          ]\n   //    }\n   // }\n\n\n\n\n\n\n   // function creatematrix(width, height) {\n   //    const matrix = [];\n   //    while (h--) {\n   //       matrix.push(new Array(w).fill(0));\n   //    }\n   //    return matrix;\n   // }\n\n\n\n\n\n\n\n\n\n   // const nextPiece = () => {\n      \n   // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece);\n\n//# sourceURL=webpack:///./lib/temp_piece.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_game2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/game2 */ \"./lib/game2.js\");\n// import Game from '../lib/game2';  \n  \n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n   let canvas = document.getElementById(\"canvas\");\n   canvas.width = 240;\n   canvas.height= 400;\n   \n\n   var ctx = canvas.getContext('2d');\n   \n   \n   // const newGame = new Game(ctx);\n   // newGame.drawBoard(ctx);\n   // newGame.startGame();\n\n   \n   Object(_lib_game2__WEBPACK_IMPORTED_MODULE_0__[\"drawBoard\"])(ctx);\n   Object(_lib_game2__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"])(ctx);\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });