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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/baseClass */ \"./src/modules/baseClass.js\");\n\r\n\r\nconst instance = new _modules_baseClass__WEBPACK_IMPORTED_MODULE_0__[\"HallOfFame\"](4,[[\"Zoe\",1],[\"Yvo\",5],[\"Xin\",3],[\"Wil\",7]]);\r\nconsole.log(instance);\r\n\r\nconst add = instance.add([\"Bob\",9]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbGxPZkZhbWUgfSBmcm9tICcuL21vZHVsZXMvYmFzZUNsYXNzJztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gbmV3IEhhbGxPZkZhbWUoNCxbW1wiWm9lXCIsMV0sW1wiWXZvXCIsNV0sW1wiWGluXCIsM10sW1wiV2lsXCIsN11dKTtcclxuY29uc29sZS5sb2coaW5zdGFuY2UpO1xyXG5cclxuY29uc3QgYWRkID0gaW5zdGFuY2UuYWRkKFtcIkJvYlwiLDldKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _parseList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseList */ \"./src/modules/parseList.js\");\n\r\n\r\nconst add = function (player) {\r\n    const list = Object(_parseList__WEBPACK_IMPORTED_MODULE_0__[\"parseList\"])(this.list);\r\n    const playerName = player[0];\r\n    const playerScore = player[1];\r\n    const lastPlayerScore = list[this.list.length - 1][1];\r\n    const existingPlayerIndex = list.findIndex(_player => _player[0] === playerName);\r\n\r\n    if (existingPlayerIndex > -1) {\r\n        const updatedList = Array.prototype.slice.call(list);\r\n        updatedList[existingPlayerIndex][1] = playerScore;\r\n        this.list = this.updateList(updatedList);\r\n    } else {\r\n        const unshiftedList = [player].concat(list);\r\n        this.list = this.updateList(unshiftedList);\r\n    }\r\n\r\n    if (playerScore < lastPlayerScore) {\r\n        return this;\r\n    }\r\n\r\n    return this;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hZGQuanM/NDI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhcnNlTGlzdH0gZnJvbSAnLi9wYXJzZUxpc3QnO1xyXG5cclxuY29uc3QgYWRkID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgY29uc3QgbGlzdCA9IHBhcnNlTGlzdCh0aGlzLmxpc3QpO1xyXG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllclswXTtcclxuICAgIGNvbnN0IHBsYXllclNjb3JlID0gcGxheWVyWzFdO1xyXG4gICAgY29uc3QgbGFzdFBsYXllclNjb3JlID0gbGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV1bMV07XHJcbiAgICBjb25zdCBleGlzdGluZ1BsYXllckluZGV4ID0gbGlzdC5maW5kSW5kZXgoX3BsYXllciA9PiBfcGxheWVyWzBdID09PSBwbGF5ZXJOYW1lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdQbGF5ZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0KTtcclxuICAgICAgICB1cGRhdGVkTGlzdFtleGlzdGluZ1BsYXllckluZGV4XVsxXSA9IHBsYXllclNjb3JlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMudXBkYXRlTGlzdCh1cGRhdGVkTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVuc2hpZnRlZExpc3QgPSBbcGxheWVyXS5jb25jYXQobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy51cGRhdGVMaXN0KHVuc2hpZnRlZExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5ZXJTY29yZSA8IGxhc3RQbGF5ZXJTY29yZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQge2FkZH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/add.js\n");

/***/ }),

/***/ "./src/modules/baseClass.js":
/*!**********************************!*\
  !*** ./src/modules/baseClass.js ***!
  \**********************************/
/*! exports provided: HallOfFame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HallOfFame\", function() { return HallOfFame; });\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ \"./src/modules/sort.js\");\n/* harmony import */ var _parseList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseList */ \"./src/modules/parseList.js\");\n/* harmony import */ var _prints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prints */ \"./src/modules/prints.js\");\n/* harmony import */ var _updateList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateList */ \"./src/modules/updateList.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add */ \"./src/modules/add.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst HallOfFame = (() => {\r\n    function HallOfFameCtor(size, players = []) {\r\n        this.list = [];\r\n        this.size = Number.isNaN(size) ? 5 : size;\r\n\r\n        if (Array.isArray(players) && players.length === 0) {\r\n            this.list = Array.from(new Array(this.size), () => '');\r\n        } else {\r\n            //console.log(this.list);\r\n            this.list = this.updateList(players);\r\n            //console.log(this.list);\r\n        }\r\n    }\r\n    \r\n    HallOfFameCtor.prototype.sortPlayers = function (players) {\r\n        //this.list = players;\r\n        _sort__WEBPACK_IMPORTED_MODULE_0__[\"sortPlayers\"].call(this,players);\r\n    }\r\n\r\n    HallOfFameCtor.prototype.parseList = function (list) {\r\n       // this.list = list;\r\n        _parseList__WEBPACK_IMPORTED_MODULE_1__[\"parseList\"].call(this);\r\n    }\r\n    HallOfFameCtor.prototype.printPlayer = function (player) {\r\n        this.list = player;\r\n        \r\n        _prints__WEBPACK_IMPORTED_MODULE_2__[\"printPlayer\"].call(this,player);\r\n    }\r\n    HallOfFameCtor.prototype.printList = function (list) {\r\n        this.list = list;\r\n        _prints__WEBPACK_IMPORTED_MODULE_2__[\"printList\"].call(this,list);\r\n    }\r\n    \r\n    HallOfFameCtor.prototype.updateList = function (oldList) {\r\n         this.list = oldList;\r\n        \r\n\r\n        const newList =  _updateList__WEBPACK_IMPORTED_MODULE_3__[\"updateList\"].call(this,oldList);\r\n        //console.log(oldList);\r\n\r\n        return newList;\r\n        \r\n    }\r\n    \r\n    HallOfFameCtor.prototype.add = function (player) {\r\n        //this.list = player;\r\n        _add__WEBPACK_IMPORTED_MODULE_4__[\"add\"].call(this,player);\r\n    }\r\n   \r\n    \r\n\r\n    return HallOfFameCtor;\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9iYXNlQ2xhc3MuanM/NWQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzb3J0UGxheWVycyB9IGZyb20gJy4vc29ydCc7XHJcbmltcG9ydCB7IHBhcnNlTGlzdCB9IGZyb20gJy4vcGFyc2VMaXN0JztcclxuaW1wb3J0IHsgcHJpbnRQbGF5ZXIgfSBmcm9tICcuL3ByaW50cyc7XHJcbmltcG9ydCB7IHByaW50TGlzdCB9IGZyb20gJy4vcHJpbnRzJztcclxuaW1wb3J0IHt1cGRhdGVMaXN0fSBmcm9tICcuL3VwZGF0ZUxpc3QnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuL2FkZCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBIYWxsT2ZGYW1lID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIEhhbGxPZkZhbWVDdG9yKHNpemUsIHBsYXllcnMgPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IE51bWJlci5pc05hTihzaXplKSA/IDUgOiBzaXplO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwbGF5ZXJzKSAmJiBwbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBBcnJheS5mcm9tKG5ldyBBcnJheSh0aGlzLnNpemUpLCAoKSA9PiAnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLnVwZGF0ZUxpc3QocGxheWVycyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEhhbGxPZkZhbWVDdG9yLnByb3RvdHlwZS5zb3J0UGxheWVycyA9IGZ1bmN0aW9uIChwbGF5ZXJzKSB7XHJcbiAgICAgICAgLy90aGlzLmxpc3QgPSBwbGF5ZXJzO1xyXG4gICAgICAgIHNvcnRQbGF5ZXJzLmNhbGwodGhpcyxwbGF5ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBIYWxsT2ZGYW1lQ3Rvci5wcm90b3R5cGUucGFyc2VMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgcGFyc2VMaXN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBIYWxsT2ZGYW1lQ3Rvci5wcm90b3R5cGUucHJpbnRQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gcGxheWVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaW50UGxheWVyLmNhbGwodGhpcyxwbGF5ZXIpO1xyXG4gICAgfVxyXG4gICAgSGFsbE9mRmFtZUN0b3IucHJvdG90eXBlLnByaW50TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgICAgICBwcmludExpc3QuY2FsbCh0aGlzLGxpc3QpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBIYWxsT2ZGYW1lQ3Rvci5wcm90b3R5cGUudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChvbGRMaXN0KSB7XHJcbiAgICAgICAgIHRoaXMubGlzdCA9IG9sZExpc3Q7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSAgdXBkYXRlTGlzdC5jYWxsKHRoaXMsb2xkTGlzdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvbGRMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0xpc3Q7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEhhbGxPZkZhbWVDdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgICAgICAgLy90aGlzLmxpc3QgPSBwbGF5ZXI7XHJcbiAgICAgICAgYWRkLmNhbGwodGhpcyxwbGF5ZXIpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBIYWxsT2ZGYW1lQ3RvcjtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEhhbGxPZkZhbWUgfTtcclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/baseClass.js\n");

/***/ }),

/***/ "./src/modules/parseList.js":
/*!**********************************!*\
  !*** ./src/modules/parseList.js ***!
  \**********************************/
/*! exports provided: parseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseList\", function() { return parseList; });\nconst parseList = (list) => {\r\n    return list.map(item => {\r\n        const parsedItem = item.split(': ');\r\n        return [\r\n            parsedItem[0].trim(),\r\n            Number(parsedItem[1])\r\n        ];\r\n    });\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wYXJzZUxpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXJzZUxpc3QuanM/MDJlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJzZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgcmV0dXJuIGxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBpdGVtLnNwbGl0KCc6ICcpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlZEl0ZW1bMF0udHJpbSgpLFxyXG4gICAgICAgICAgICBOdW1iZXIocGFyc2VkSXRlbVsxXSlcclxuICAgICAgICBdO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHtwYXJzZUxpc3R9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/parseList.js\n");

/***/ }),

/***/ "./src/modules/prints.js":
/*!*******************************!*\
  !*** ./src/modules/prints.js ***!
  \*******************************/
/*! exports provided: printPlayer, printList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printPlayer\", function() { return printPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printList\", function() { return printList; });\nconst printPlayer = player => {\r\n    return Number.isNaN(player[1]) ? '' : player.join(': ');\r\n};\r\n\r\nconst printList = (list) => {\r\n   // console.log(list.map(printPlayer));\r\n    return list.map(printPlayer);\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wcmludHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wcmludHMuanM/NDBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmludFBsYXllciA9IHBsYXllciA9PiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHBsYXllclsxXSkgPyAnJyA6IHBsYXllci5qb2luKCc6ICcpO1xyXG59O1xyXG5cclxuY29uc3QgcHJpbnRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgLy8gY29uc29sZS5sb2cobGlzdC5tYXAocHJpbnRQbGF5ZXIpKTtcclxuICAgIHJldHVybiBsaXN0Lm1hcChwcmludFBsYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydHtwcmludFBsYXllcn07XHJcbmV4cG9ydCB7cHJpbnRMaXN0fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/prints.js\n");

/***/ }),

/***/ "./src/modules/sort.js":
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/*! exports provided: sortPlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortPlayers\", function() { return sortPlayers; });\n\r\nconst sortPlayers = (players) => {\r\n    return players.sort((a, b) => {\r\n        if (a.length !== 2 || b.length !== 2) {\r\n            console.log('[sortPlayers:except]', a, b);\r\n            return -1;\r\n        }\r\n\r\n        const playerA = a[0];\r\n        const pointsA = a[1];\r\n        const playerB = b[0];\r\n        const pointsB = b[1];\r\n\r\n        if (Number.isNaN(pointsA)) {\r\n            return -1;\r\n        }\r\n        if (Number.isNaN(pointsB)) {\r\n            return -1\r\n        }\r\n\r\n        if (pointsA > pointsB) {\r\n            return -1;\r\n        } else if (pointsA < pointsB) {\r\n            return 1;\r\n        } else {\r\n            if (playerA > playerB) {\r\n                return 1;\r\n            } else if (playerA < playerB) {\r\n                return -1;\r\n            } else {\r\n                return 0;\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zb3J0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydC5qcz9kNTRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzb3J0UGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XHJcbiAgICByZXR1cm4gcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSAyIHx8IGIubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc29ydFBsYXllcnM6ZXhjZXB0XScsIGEsIGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJBID0gYVswXTtcclxuICAgICAgICBjb25zdCBwb2ludHNBID0gYVsxXTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCID0gYlswXTtcclxuICAgICAgICBjb25zdCBwb2ludHNCID0gYlsxXTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihwb2ludHNBKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocG9pbnRzQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocG9pbnRzQSA+IHBvaW50c0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzQSA8IHBvaW50c0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBsYXllckEgPiBwbGF5ZXJCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJBIDwgcGxheWVyQikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtzb3J0UGxheWVyc307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/sort.js\n");

/***/ }),

/***/ "./src/modules/updateList.js":
/*!***********************************!*\
  !*** ./src/modules/updateList.js ***!
  \***********************************/
/*! exports provided: updateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateList\", function() { return updateList; });\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ \"./src/modules/sort.js\");\n/* harmony import */ var _prints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prints */ \"./src/modules/prints.js\");\n\r\n\r\n//import {printPlayer} from './prints';\r\n\r\nconst updateList = function (oldList) {\r\n    \r\n    //console.log(oldList);\r\n\r\n    const newList = Object(_sort__WEBPACK_IMPORTED_MODULE_0__[\"sortPlayers\"])(oldList).slice(0, this.size);\r\n  \r\n    //console.log(printList(newList))\r\n    \r\n    //console.log(newList); \r\n\r\n    return Object(_prints__WEBPACK_IMPORTED_MODULE_1__[\"printList\"])(newList);\r\n\r\n     \r\n    \r\n    \r\n       \r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy91cGRhdGVMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXBkYXRlTGlzdC5qcz9jOTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c29ydFBsYXllcnN9IGZyb20gJy4vc29ydCc7XHJcbmltcG9ydCB7cHJpbnRMaXN0fSBmcm9tICcuL3ByaW50cyc7XHJcbi8vaW1wb3J0IHtwcmludFBsYXllcn0gZnJvbSAnLi9wcmludHMnO1xyXG5cclxuY29uc3QgdXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChvbGRMaXN0KSB7XHJcbiAgICBcclxuICAgIC8vY29uc29sZS5sb2cob2xkTGlzdCk7XHJcblxyXG4gICAgY29uc3QgbmV3TGlzdCA9IHNvcnRQbGF5ZXJzKG9sZExpc3QpLnNsaWNlKDAsIHRoaXMuc2l6ZSk7XHJcbiAgXHJcbiAgICAvL2NvbnNvbGUubG9nKHByaW50TGlzdChuZXdMaXN0KSlcclxuICAgIFxyXG4gICAgLy9jb25zb2xlLmxvZyhuZXdMaXN0KTsgXHJcblxyXG4gICAgcmV0dXJuIHByaW50TGlzdChuZXdMaXN0KTtcclxuXHJcbiAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVMaXN0IH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/updateList.js\n");

/***/ })

/******/ });