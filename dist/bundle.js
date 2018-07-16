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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/baseClass */ \"./src/modules/baseClass.js\");\n/* harmony import */ var _modules_getList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getList */ \"./src/modules/getList.js\");\n/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sort */ \"./src/modules/sort.js\");\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add */ \"./src/modules/add.js\");\n\n\n\n\n\n\nModule({\n    HallOfFame: _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"],\n    getlist: _modules_getList__WEBPACK_IMPORTED_MODULE_1__[\"getlist\"],\n    sort: _modules_sort__WEBPACK_IMPORTED_MODULE_2__[\"sort\"],\n    add: _modules_add__WEBPACK_IMPORTED_MODULE_3__[\"add\"]\n}) //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbGxPZkZhbWUgfSBmcm9tICcuL21vZHVsZXMvYmFzZUNsYXNzJztcbmltcG9ydCB7IGdldGxpc3QgfSBmcm9tICcuL21vZHVsZXMvZ2V0TGlzdCc7XG5pbXBvcnQgeyBzb3J0IH0gZnJvbSAnLi9tb2R1bGVzL3NvcnQnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi9tb2R1bGVzL2FkZCc7XG5cblxuTW9kdWxlKHtcbiAgICBIYWxsT2ZGYW1lLFxuICAgIGdldGxpc3QsXG4gICAgc29ydCxcbiAgICBhZGRcbn0pICJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseClass */ \"./src/modules/baseClass.js\");\n\r\n\r\n_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"].prototype.add = function (player) {\r\n    let isSameName = false;\r\n    // если игрок был добавлен\r\n    if (player && this.players) {\r\n\r\n        // перебираем массив игроков которые уже есть\r\n        this.players.forEach((thePlayer, i) => {\r\n            //Проверяем одинаковые ли имена у того игрока что мы добавили и тех которые уже есть  \r\n            if (thePlayer[0] == player[0]) {\r\n\r\n                isSameName = true;\r\n\r\n                //Если добавленный игрок с таким же именем как и уже существующий имеет больше очков чем он, \r\n                //то ми заменяем очки уже существующего игрока на очки добавленного игрока \r\n                if (thePlayer[1] < player[1]) {\r\n\r\n                    this.players[i][1] = player[1];\r\n                }\r\n            }\r\n        });\r\n        //добавляем нового игрока в массив и вызываем сортировку\r\n        if (!isSameName) {\r\n\r\n            this.players.push(player);\r\n            this.sort();\r\n        }\r\n    }\r\n    // инициализируем this.getlist() \r\n    this.list = this.getlist();\r\n    return this;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hZGQuanM/NDI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYWxsT2ZGYW1lIH0gZnJvbSAnLi9iYXNlQ2xhc3MnO1xyXG5cclxuSGFsbE9mRmFtZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgbGV0IGlzU2FtZU5hbWUgPSBmYWxzZTtcclxuICAgIC8vINC10YHQu9C4INC40LPRgNC+0Log0LHRi9C7INC00L7QsdCw0LLQu9C10L1cclxuICAgIGlmIChwbGF5ZXIgJiYgdGhpcy5wbGF5ZXJzKSB7XHJcblxyXG4gICAgICAgIC8vINC/0LXRgNC10LHQuNGA0LDQtdC8INC80LDRgdGB0LjQsiDQuNCz0YDQvtC60L7QsiDQutC+0YLQvtGA0YvQtSDRg9C20LUg0LXRgdGC0YxcclxuICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgodGhlUGxheWVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8v0J/RgNC+0LLQtdGA0Y/QtdC8INC+0LTQuNC90LDQutC+0LLRi9C1INC70Lgg0LjQvNC10L3QsCDRgyDRgtC+0LPQviDQuNCz0YDQvtC60LAg0YfRgtC+INC80Ysg0LTQvtCx0LDQstC40LvQuCDQuCDRgtC10YUg0LrQvtGC0L7RgNGL0LUg0YPQttC1INC10YHRgtGMICBcclxuICAgICAgICAgICAgaWYgKHRoZVBsYXllclswXSA9PSBwbGF5ZXJbMF0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpc1NhbWVOYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC00L7QsdCw0LLQu9C10L3QvdGL0Lkg0LjQs9GA0L7QuiDRgSDRgtCw0LrQuNC8INC20LUg0LjQvNC10L3QtdC8INC60LDQuiDQuCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INC40LzQtdC10YIg0LHQvtC70YzRiNC1INC+0YfQutC+0LIg0YfQtdC8INC+0L0sIFxyXG4gICAgICAgICAgICAgICAgLy/RgtC+INC80Lgg0LfQsNC80LXQvdGP0LXQvCDQvtGH0LrQuCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LjQs9GA0L7QutCwINC90LAg0L7Rh9C60Lgg0LTQvtCx0LDQstC70LXQvdC90L7Qs9C+INC40LPRgNC+0LrQsCBcclxuICAgICAgICAgICAgICAgIGlmICh0aGVQbGF5ZXJbMV0gPCBwbGF5ZXJbMV0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldWzFdID0gcGxheWVyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0L3QvtCy0L7Qs9C+INC40LPRgNC+0LrQsCDQsiDQvNCw0YHRgdC40LIg0Lgg0LLRi9C30YvQstCw0LXQvCDRgdC+0YDRgtC40YDQvtCy0LrRg1xyXG4gICAgICAgIGlmICghaXNTYW1lTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuICAgICAgICAgICAgdGhpcy5zb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCB0aGlzLmdldGxpc3QoKSBcclxuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0bGlzdCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/add.js\n");

/***/ }),

/***/ "./src/modules/baseClass.js":
/*!**********************************!*\
  !*** ./src/modules/baseClass.js ***!
  \**********************************/
/*! exports provided: HallOfFame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HallOfFame\", function() { return HallOfFame; });\nconst HallOfFame = (() => {\r\n    function HallOfFame(size, players = []) {\r\n        this.size = size || 5;\r\n        this.players = players;\r\n        this.list = this.getlist();\r\n    }\r\n\r\n    return HallOfFame;\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanM/NWQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIYWxsT2ZGYW1lID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIEhhbGxPZkZhbWUoc2l6ZSwgcGxheWVycyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZSB8fCA1O1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRsaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEhhbGxPZkZhbWU7XHJcbn0pKCk7XHJcblxyXG5leHBvcnR7SGFsbE9mRmFtZX07XHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/baseClass.js\n");

/***/ }),

/***/ "./src/modules/getList.js":
/*!********************************!*\
  !*** ./src/modules/getList.js ***!
  \********************************/
/*! exports provided: getlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getlist\", function() { return getlist; });\n/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseClass */ \"./src/modules/baseClass.js\");\n\r\n\r\n\r\n_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"].prototype.getlist = function () {\r\n\r\n    let res = [];\r\n    this.sort();\r\n\r\n\r\n    res = [].concat(this.players).map(a => `${a[0]}: ${a[1]}`);\r\n    console.log(res);\r\n\r\n    if (res.length >= this.size) {\r\n        return res.slice(0, this.size);\r\n    }\r\n\r\n\r\n    else {\r\n\r\n        res.push.apply(res, Array.from(new Array(this.size - res.length), () => ''))\r\n    }\r\n\r\n    return res;\r\n\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2V0TGlzdC5qcz8xMTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbGxPZkZhbWUgfSBmcm9tICcuL2Jhc2VDbGFzcyc7XHJcblxyXG5cclxuSGFsbE9mRmFtZS5wcm90b3R5cGUuZ2V0bGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICB0aGlzLnNvcnQoKTtcclxuXHJcblxyXG4gICAgcmVzID0gW10uY29uY2F0KHRoaXMucGxheWVycykubWFwKGEgPT4gYCR7YVswXX06ICR7YVsxXX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgaWYgKHJlcy5sZW5ndGggPj0gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBBcnJheS5mcm9tKG5ldyBBcnJheSh0aGlzLnNpemUgLSByZXMubGVuZ3RoKSwgKCkgPT4gJycpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0bGlzdCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/getList.js\n");

/***/ }),

/***/ "./src/modules/sort.js":
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return sort; });\n/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseClass */ \"./src/modules/baseClass.js\");\n\r\n\r\n_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"].prototype.sort = function () {\r\n    this.players.sort((a, b) => {\r\n        if (b[1] == a[1]) {\r\n            return a[0] > b[0];\r\n        }\r\n        return b[1] - a[1];\r\n    });\r\n    return this;\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zb3J0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydC5qcz9kNTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbGxPZkZhbWUgfSBmcm9tICcuL2Jhc2VDbGFzcyc7XHJcblxyXG5IYWxsT2ZGYW1lLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYlsxXSA9PSBhWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhWzBdID4gYlswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJbMV0gLSBhWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbmV4cG9ydCB7c29ydH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/sort.js\n");

/***/ })

/******/ });