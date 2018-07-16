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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/baseClass */ \"./src/modules/baseClass.js\");\n\r\n\r\nconst instance = new _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"](4,[[\"Zoe\",1],[\"Yvo\",5],[\"Xin\",3],[\"Wil\",7]]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbGxPZkZhbWUgfSBmcm9tICcuL21vZHVsZXMvYmFzZUNsYXNzJztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gbmV3IEhhbGxPZkZhbWUoNCxbW1wiWm9lXCIsMV0sW1wiWXZvXCIsNV0sW1wiWGluXCIsM10sW1wiV2lsXCIsN11dKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n\r\n\r\nconst add = function (player) {\r\n    let isSameName = false;\r\n    // если игрок был добавлен\r\n    if (player && this.players) {\r\n\r\n        // перебираем массив игроков которые уже есть\r\n        this.players.forEach((thePlayer, i) => {\r\n            //Проверяем одинаковые ли имена у того игрока что мы добавили и тех которые уже есть  \r\n            if (thePlayer[0] == player[0]) {\r\n\r\n                isSameName = true;\r\n\r\n                //Если добавленный игрок с таким же именем как и уже существующий имеет больше очков чем он, \r\n                //то ми заменяем очки уже существующего игрока на очки добавленного игрока \r\n                if (thePlayer[1] < player[1]) {\r\n\r\n                    this.players[i][1] = player[1];\r\n                }\r\n            }\r\n        });\r\n        //добавляем нового игрока в массив и вызываем сортировку\r\n        if (!isSameName) {\r\n\r\n            this.players.push(player);\r\n            this.sort();\r\n        }\r\n    }\r\n    // инициализируем this.getlist() \r\n    this.list = this.getlist();\r\n    return this;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hZGQuanM/NDI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGFkZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIGxldCBpc1NhbWVOYW1lID0gZmFsc2U7XHJcbiAgICAvLyDQtdGB0LvQuCDQuNCz0YDQvtC6INCx0YvQuyDQtNC+0LHQsNCy0LvQtdC9XHJcbiAgICBpZiAocGxheWVyICYmIHRoaXMucGxheWVycykge1xyXG5cclxuICAgICAgICAvLyDQv9C10YDQtdCx0LjRgNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQs9GA0L7QutC+0LIg0LrQvtGC0L7RgNGL0LUg0YPQttC1INC10YHRgtGMXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHRoZVBsYXllciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAvL9Cf0YDQvtCy0LXRgNGP0LXQvCDQvtC00LjQvdCw0LrQvtCy0YvQtSDQu9C4INC40LzQtdC90LAg0YMg0YLQvtCz0L4g0LjQs9GA0L7QutCwINGH0YLQviDQvNGLINC00L7QsdCw0LLQuNC70Lgg0Lgg0YLQtdGFINC60L7RgtC+0YDRi9C1INGD0LbQtSDQtdGB0YLRjCAgXHJcbiAgICAgICAgICAgIGlmICh0aGVQbGF5ZXJbMF0gPT0gcGxheWVyWzBdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNTYW1lTmFtZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtNC+0LHQsNCy0LvQtdC90L3Ri9C5INC40LPRgNC+0Log0YEg0YLQsNC60LjQvCDQttC1INC40LzQtdC90LXQvCDQutCw0Log0Lgg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQuNC80LXQtdGCINCx0L7Qu9GM0YjQtSDQvtGH0LrQvtCyINGH0LXQvCDQvtC9LCBcclxuICAgICAgICAgICAgICAgIC8v0YLQviDQvNC4INC30LDQvNC10L3Rj9C10Lwg0L7Rh9C60Lgg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC40LPRgNC+0LrQsCDQvdCwINC+0YfQutC4INC00L7QsdCw0LLQu9C10L3QvdC+0LPQviDQuNCz0YDQvtC60LAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhlUGxheWVyWzFdIDwgcGxheWVyWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tpXVsxXSA9IHBsYXllclsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v0LTQvtCx0LDQstC70Y/QtdC8INC90L7QstC+0LPQviDQuNCz0YDQvtC60LAg0LIg0LzQsNGB0YHQuNCyINC4INCy0YvQt9GL0LLQsNC10Lwg0YHQvtGA0YLQuNGA0L7QstC60YNcclxuICAgICAgICBpZiAoIWlzU2FtZU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10LwgdGhpcy5nZXRsaXN0KCkgXHJcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldGxpc3QoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQge2FkZH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/add.js\n");

/***/ }),

/***/ "./src/modules/baseClass.js":
/*!**********************************!*\
  !*** ./src/modules/baseClass.js ***!
  \**********************************/
/*! exports provided: HallOfFame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HallOfFame\", function() { return HallOfFame; });\n/* harmony import */ var _getList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getList */ \"./src/modules/getList.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ \"./src/modules/sort.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add */ \"./src/modules/add.js\");\n\r\n\r\n\r\n\r\n\r\nconst HallOfFame = (() => {\r\n    function HallOfFame(size, players = []) {\r\n        this.size = size || 5;\r\n        this.players = players;\r\n        this.list = this.getlist();\r\n    }\r\n\r\n    // HallOfFame.prototype = {\r\n    //     getlist : getlist().call(HallOfFame),\r\n    //     sort : sort().call(HallOfFame),\r\n    //     add : add().call(HallOfFame)\r\n    // }\r\n\r\n    HallOfFame.prototype.getlist = function () {\r\n        _getList__WEBPACK_IMPORTED_MODULE_0__[\"getlist\"].call(this);\r\n    }\r\n    HallOfFame.prototype.sort = function () {\r\n        _sort__WEBPACK_IMPORTED_MODULE_1__[\"sort\"].call(this);\r\n    }\r\n    HallOfFame.prototype.add = function () {\r\n        _add__WEBPACK_IMPORTED_MODULE_2__[\"add\"].call(this);\r\n    }\r\n\r\n    return HallOfFame;\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanM/NWQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRsaXN0IH0gZnJvbSAnLi9nZXRMaXN0JztcclxuaW1wb3J0IHsgc29ydCB9IGZyb20gJy4vc29ydCc7XHJcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4vYWRkJztcclxuXHJcblxyXG5jb25zdCBIYWxsT2ZGYW1lID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIEhhbGxPZkZhbWUoc2l6ZSwgcGxheWVycyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZSB8fCA1O1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRsaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFsbE9mRmFtZS5wcm90b3R5cGUgPSB7XHJcbiAgICAvLyAgICAgZ2V0bGlzdCA6IGdldGxpc3QoKS5jYWxsKEhhbGxPZkZhbWUpLFxyXG4gICAgLy8gICAgIHNvcnQgOiBzb3J0KCkuY2FsbChIYWxsT2ZGYW1lKSxcclxuICAgIC8vICAgICBhZGQgOiBhZGQoKS5jYWxsKEhhbGxPZkZhbWUpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgSGFsbE9mRmFtZS5wcm90b3R5cGUuZ2V0bGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZXRsaXN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBIYWxsT2ZGYW1lLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNvcnQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIEhhbGxPZkZhbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhZGQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSGFsbE9mRmFtZTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEhhbGxPZkZhbWUgfTtcclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/baseClass.js\n");

/***/ }),

/***/ "./src/modules/getList.js":
/*!********************************!*\
  !*** ./src/modules/getList.js ***!
  \********************************/
/*! exports provided: getlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getlist\", function() { return getlist; });\n\r\n\r\nconst getlist = function () {\r\n\r\n    let res = [];\r\n    this.sort();\r\n\r\n\r\n    res = [].concat(this.players).map(a => `${a[0]}: ${a[1]}`);\r\n    console.log(res);\r\n\r\n    if (res.length >= this.size) {\r\n        return res.slice(0, this.size);\r\n    }\r\n\r\n\r\n    else {\r\n\r\n        res.push.apply(res, Array.from(new Array(this.size - res.length), () => ''))\r\n    }\r\n\r\n    return res;\r\n\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0TGlzdC5qcz8xMTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgZ2V0bGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICB0aGlzLnNvcnQoKTtcclxuXHJcblxyXG4gICAgcmVzID0gW10uY29uY2F0KHRoaXMucGxheWVycykubWFwKGEgPT4gYCR7YVswXX06ICR7YVsxXX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgaWYgKHJlcy5sZW5ndGggPj0gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBBcnJheS5mcm9tKG5ldyBBcnJheSh0aGlzLnNpemUgLSByZXMubGVuZ3RoKSwgKCkgPT4gJycpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0bGlzdCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getList.js\n");

/***/ }),

/***/ "./src/modules/sort.js":
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return sort; });\n\r\n\r\nconst sort = function () {\r\n    this.players.sort((a, b) => {\r\n        if (b[1] == a[1]) {\r\n            return a[0] > b[0];\r\n        }\r\n        return b[1] - a[1];\r\n    });\r\n    return this;\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zb3J0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydC5qcz9kNTRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3Qgc29ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucGxheWVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGJbMV0gPT0gYVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYVswXSA+IGJbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiWzFdIC0gYVsxXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5leHBvcnQge3NvcnR9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/sort.js\n");

/***/ })

/******/ });