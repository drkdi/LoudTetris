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

/***/ "./lib/game2.js":
/*!**********************!*\
  !*** ./lib/game2.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import Piece from './temp_piece';\n// import Board from './board';\n\n// let arena = new Board(10, 20);\n\n// export function drawBoard() {\n   \n//    let canvas = document.getElementById('canvas');\n//    let ctx = canvas.getContext('2d');\n//    ctx.fillStyle = \"rgb(0,0,0,0.7)\";\n//    ctx.fillRect(0,0, 200, 400);\n\n//       arena.matrix.forEach((row, y) => {\n//          row.forEach((value, x) => {\n//          if (value > 0) {\n//             // debugger\n//             ctx.fillStyle = 'blue';\n//             // debugger\n//             // ctx.fillRect(j + 5, i + 5, 1, 1);\n//             ctx.fillRect(x + 0, y + 0, 1, 1);\n//             // canvas = ctx; \n//             // ???????\n//          }\n//       });\n//       });\n// }\n\n// let piece;\n\n// function getPiece() {\n//    piece = new Piece();\n// }\n\n\n\n// export function startGame(ctx) {\n//    getPiece();\n//    drawBoard(); \n//    piece.update();\n\n\n//    // gameLoop(piece)\n//    setInterval(function () { gameLoop() }, 500)\n// }\n\n\n\n\n// // need to change board height / width\n\n// function combine(arena, piece) {\n//    for (let y = 0; y < piece.matrix.length; ++y) {\n//       for (let x = 0; x < piece.matrix[y].length; ++x) {\n\n//          console.log(\"combine\")\n//          if ( piece.matrix[y][x] > 0) {\n//             // console.log([piece.currPos.y - y - 1], [piece.currPos.x - x])\n//             arena.matrix[piece.currPos.y - y][piece.currPos.x] = 1;\n            \n//          }\n//          // debugger\n//       }\n//    }\n//    drawBoard();\n//    getPiece();\n//    piece.update();\n//    piece.render();\n\n//    debugger\n// }\n\n// function collide(arena, piece) {\n\n//    for (let y = 0; y < piece.matrix.length; ++y) {\n//       for (let x = 0; x < piece.matrix[y].length; ++x) {\n//          // if ((piece.matrix[y][x] > 0) && (piece.currPos.y + y - 1 === 20))\n//          if (piece.matrix[y][x] !== 0 && arena.matrix[y + piece.currPos.y] && arena.matrix[y + piece.currPos.y][x + piece.currPos.x] !== 0 ) \n//          {\n\n//             // (arena.matrix[y + piece.currPos.y] &&\n//             // arena.matrix[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {\n//             console.log(\"collide\")\n//             return true;\n//          }\n//       }\n//    }\n//    return false;\n\n\n// /////////  if (piece.y pos -1).value === 0, arena.combine\n// ///////////// || if iterate through arena and any block of piece.position.y === 20 , combine\n// //  ||x===0, 10, arena, -1 or +1\n// // if piece.collide && piece.position.y < 0, game over\n\n// // check if collision, else (drop, drawboard, drawpiece)\n\n\n\n\n\n\n\n\n\n// }\n\n\n// // let dropCounter = 0;\n// // let dropInterval = 1000;\n// // let lastTime = 0;\n\n\n\n\n\n\n\n\n\n// function gameLoop(time = 0) {\n  \n//    // const deltaTime = time - lastTime;\n\n//    // dropCounter = dropCounter + deltaTime;\n\n//    // if (dropCounter > dropInterval) {\n//    //    piece.drop()\n//    // }\n   \n//    // lastTime = time;\n   \n//    // piece.render();\n//    // console.log(dropCounter);\n\n//    // setInterval(function () { piece.update() }, 1000)\n//    // requestAnimationFrame(gameLoop);\n  \n  \n// //    move to piece functions\n\n// debugger\n//    if (collide(arena, piece)) {\n//       console.log(\"collide in gameloop\")\n//       // piece.currPos.y -= 1;\n//       piece.render();\n//       combine(arena, piece);\n//       // break\n//       // get new piece\n\n//       getPiece();\n//       gameLoop();\n\n//       // piece.update();\n\n//       // piece reset\n//    }\n//    else {\n//    drawBoard();\n//    piece.drop();\n//    piece.render();\n//    // arena.drawArena();\n\n//    }\n// }\n\n// document.addEventListener('keydown', event => {\n//    switch (event.keyCode) {\n//       case 37:\n//          piece.moveLeft();\n//          piece.render()\n//          break;\n//       case 39:\n//          piece.moveRight();\n//          piece.render();\n//          break;\n//       case 38:\n//          // console.log(\"rotate\")\n//          piece.rotate();\n//          piece.render();\n//          break;\n//       case 40:\n//          piece.drop();\n//          piece.render();\n//          break;\n//          // console.log(\"bananas\")\n//    }\n// });\n\n\n\n//# sourceURL=webpack:///./lib/game2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_game2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/game2 */ \"./lib/game2.js\");\n/* harmony import */ var _lib_game2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_game2__WEBPACK_IMPORTED_MODULE_0__);\n// import Game from '../lib/game2';  \n  \n\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//    // let canvas = document.getElementById(\"canvas\");\n//    // canvas.width = 200;\n//    // canvas.height= 400;\n//    // canvas.fillStyle = \"rgba(0, 0, 0,0.85)\";\n   \n//    // const newGame = new Game(ctx);\n//    // newGame.drawBoard(ctx);\n//    // newGame.startGame();\n\n   \n//    drawBoard();\n//    startGame();\n\n\n// });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });