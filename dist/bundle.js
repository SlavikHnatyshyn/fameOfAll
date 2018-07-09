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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_baseClass__ = __webpack_require__(/*! ./modules/baseClass */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_getList__ = __webpack_require__(/*! ./modules/getList */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_sort__ = __webpack_require__(/*! ./modules/sort */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_add__ = __webpack_require__(/*! ./modules/add */ 4);\n\n\n\n\n\n\nModule({\n    HallOfFame: __WEBPACK_IMPORTED_MODULE_0__modules_baseClass__[\"a\" /* HallOfFame */],\n    getlist: __WEBPACK_IMPORTED_MODULE_1__modules_getList__[\"a\" /* getlist */],\n    sort: __WEBPACK_IMPORTED_MODULE_2__modules_sort__[\"a\" /* sort */],\n    add: __WEBPACK_IMPORTED_MODULE_3__modules_add__[\"a\" /* add */]\n}) //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYWxsT2ZGYW1lIH0gZnJvbSAnLi9tb2R1bGVzL2Jhc2VDbGFzcyc7XG5pbXBvcnQgeyBnZXRsaXN0IH0gZnJvbSAnLi9tb2R1bGVzL2dldExpc3QnO1xuaW1wb3J0IHsgc29ydCB9IGZyb20gJy4vbW9kdWxlcy9zb3J0JztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4vbW9kdWxlcy9hZGQnO1xuXG5cbk1vZHVsZSh7XG4gICAgSGFsbE9mRmFtZSxcbiAgICBnZXRsaXN0LFxuICAgIHNvcnQsXG4gICAgYWRkXG59KSBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/modules/baseClass.js ***!
  \**********************************/
/*! exports provided: HallOfFame */
/*! exports used: HallOfFame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return HallOfFame; });\nconst HallOfFame = (() => {\r\n    function HallOfFame(size, players = []) {\r\n        this.size = size || 5;\r\n        this.players = players;\r\n        this.list = this.getlist();\r\n    }\r\n\r\n    return HallOfFame;\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Jhc2VDbGFzcy5qcz9jMTEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhhbGxPZkZhbWUgPSAoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gSGFsbE9mRmFtZShzaXplLCBwbGF5ZXJzID0gW10pIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplIHx8IDU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldGxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSGFsbE9mRmFtZTtcclxufSkoKTtcclxuXHJcbmV4cG9ydHtIYWxsT2ZGYW1lfTtcclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/modules/getList.js ***!
  \********************************/
/*! exports provided: getlist */
/*! exports used: getlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getlist; });\nHallOfFame.prototype.getlist = function () {\r\n\r\n           \r\n    let res = [];\r\n    this.sort();\r\n\r\n    // здесь в новый массив res мы скопируем 'свойство:значение' из массива players\r\n    res = [].concat(this.players).map(a => `${a[0]}: ${a[1]}`);\r\n    console.log(res);\r\n\r\n    // если длина массива больше допустимого количества значения (this.size), то мы возвращаем массив, где скопируем элементы до допустимого значения     \r\n    if (res.length >= this.size) {\r\n        return res.slice(0, this.size);\r\n\r\n\r\n    }\r\n\r\n    // вычисляем сколько значений мы еще можем заполнить, и отправляем на их место пустую строку\r\n    else {\r\n\r\n        res.push.apply(res, Array.from(new Array(this.size - res.length), () => ''))\r\n    }\r\n\r\n    return res;\r\n\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dldExpc3QuanM/MzQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJIYWxsT2ZGYW1lLnByb3RvdHlwZS5nZXRsaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICBcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHRoaXMuc29ydCgpO1xyXG5cclxuICAgIC8vINC30LTQtdGB0Ywg0LIg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIgcmVzINC80Ysg0YHQutC+0L/QuNGA0YPQtdC8ICfRgdCy0L7QudGB0YLQstC+OtC30L3QsNGH0LXQvdC40LUnINC40Lcg0LzQsNGB0YHQuNCy0LAgcGxheWVyc1xyXG4gICAgcmVzID0gW10uY29uY2F0KHRoaXMucGxheWVycykubWFwKGEgPT4gYCR7YVswXX06ICR7YVsxXX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgLy8g0LXRgdC70Lgg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCDQsdC+0LvRjNGI0LUg0LTQvtC/0YPRgdGC0LjQvNC+0LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDQt9C90LDRh9C10L3QuNGPICh0aGlzLnNpemUpLCDRgtC+INC80Ysg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LzQsNGB0YHQuNCyLCDQs9C00LUg0YHQutC+0L/QuNGA0YPQtdC8INGN0LvQtdC80LXQvdGC0Ysg0LTQviDQtNC+0L/Rg9GB0YLQuNC80L7Qs9C+INC30L3QsNGH0LXQvdC40Y8gICAgIFxyXG4gICAgaWYgKHJlcy5sZW5ndGggPj0gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCB0aGlzLnNpemUpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LLRi9GH0LjRgdC70Y/QtdC8INGB0LrQvtC70YzQutC+INC30L3QsNGH0LXQvdC40Lkg0LzRiyDQtdGJ0LUg0LzQvtC20LXQvCDQt9Cw0L/QvtC70L3QuNGC0YwsINC4INC+0YLQv9GA0LDQstC70Y/QtdC8INC90LAg0LjRhSDQvNC10YHRgtC+INC/0YPRgdGC0YPRjiDRgdGC0YDQvtC60YNcclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIEFycmF5LmZyb20obmV3IEFycmF5KHRoaXMuc2l6ZSAtIHJlcy5sZW5ndGgpLCAoKSA9PiAnJykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuXHJcbn07XHJcblxyXG5leHBvcnQge2dldGxpc3R9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ2V0TGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/*! exports provided: sort */
/*! exports used: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return sort; });\nHallOfFame.prototype.sort = function () {\r\n    this.players.sort((a, b) => {\r\n        if (b[1] == a[1]) {\r\n            return a[0] > b[0];\r\n        }\r\n        return b[1] - a[1];\r\n    });\r\n    return this;\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NvcnQuanM/NWQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJIYWxsT2ZGYW1lLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYlsxXSA9PSBhWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhWzBdID4gYlswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJbMV0gLSBhWzFdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbmV4cG9ydCB7c29ydH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/*! exports used: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return add; });\nHallOfFame.prototype.add = function (player) {\r\n    let isSameName = false;\r\n    // если игрок был добавлен\r\n    if (player && this.players) {\r\n\r\n        // перебираем массив игроков которые уже есть\r\n        this.players.forEach((thePlayer, i) => {\r\n            //Проверяем одинаковые ли имена у того игрока что мы добавили и тех которые уже есть  \r\n            if (thePlayer[0] == player[0]) {\r\n\r\n                isSameName = true;\r\n\r\n                //Если добавленный игрок с таким же именем как и уже существующий имеет больше очков чем он, \r\n                //то ми заменяем очки уже существующего игрока на очки добавленного игрока \r\n                if (thePlayer[1] < player[1]) {\r\n\r\n                    this.players[i][1] = player[1];\r\n                }\r\n            }\r\n        });\r\n        //добавляем нового игрока в массив и вызываем сортировку\r\n        if (!isSameName) {\r\n\r\n            this.players.push(player);\r\n            this.sort();\r\n        }\r\n    }\r\n    // инициализируем this.getlist() \r\n    this.list = this.getlist();\r\n    return this;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FkZC5qcz8zYjU4Il0sInNvdXJjZXNDb250ZW50IjpbIkhhbGxPZkZhbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIGxldCBpc1NhbWVOYW1lID0gZmFsc2U7XHJcbiAgICAvLyDQtdGB0LvQuCDQuNCz0YDQvtC6INCx0YvQuyDQtNC+0LHQsNCy0LvQtdC9XHJcbiAgICBpZiAocGxheWVyICYmIHRoaXMucGxheWVycykge1xyXG5cclxuICAgICAgICAvLyDQv9C10YDQtdCx0LjRgNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQs9GA0L7QutC+0LIg0LrQvtGC0L7RgNGL0LUg0YPQttC1INC10YHRgtGMXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHRoZVBsYXllciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAvL9Cf0YDQvtCy0LXRgNGP0LXQvCDQvtC00LjQvdCw0LrQvtCy0YvQtSDQu9C4INC40LzQtdC90LAg0YMg0YLQvtCz0L4g0LjQs9GA0L7QutCwINGH0YLQviDQvNGLINC00L7QsdCw0LLQuNC70Lgg0Lgg0YLQtdGFINC60L7RgtC+0YDRi9C1INGD0LbQtSDQtdGB0YLRjCAgXHJcbiAgICAgICAgICAgIGlmICh0aGVQbGF5ZXJbMF0gPT0gcGxheWVyWzBdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNTYW1lTmFtZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtNC+0LHQsNCy0LvQtdC90L3Ri9C5INC40LPRgNC+0Log0YEg0YLQsNC60LjQvCDQttC1INC40LzQtdC90LXQvCDQutCw0Log0Lgg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQuNC80LXQtdGCINCx0L7Qu9GM0YjQtSDQvtGH0LrQvtCyINGH0LXQvCDQvtC9LCBcclxuICAgICAgICAgICAgICAgIC8v0YLQviDQvNC4INC30LDQvNC10L3Rj9C10Lwg0L7Rh9C60Lgg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC40LPRgNC+0LrQsCDQvdCwINC+0YfQutC4INC00L7QsdCw0LLQu9C10L3QvdC+0LPQviDQuNCz0YDQvtC60LAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhlUGxheWVyWzFdIDwgcGxheWVyWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tpXVsxXSA9IHBsYXllclsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v0LTQvtCx0LDQstC70Y/QtdC8INC90L7QstC+0LPQviDQuNCz0YDQvtC60LAg0LIg0LzQsNGB0YHQuNCyINC4INCy0YvQt9GL0LLQsNC10Lwg0YHQvtGA0YLQuNGA0L7QstC60YNcclxuICAgICAgICBpZiAoIWlzU2FtZU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10LwgdGhpcy5nZXRsaXN0KCkgXHJcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldGxpc3QoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQge2FkZH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hZGQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);