/*! sw.js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020, Webrecorder Software. Licensed under the Affero General Public License v3. */
(function(e, a) { for(var i in a) e[i] = a[i]; }(self, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<!doctype html>\\n<html class=\\\"no-overflow\\\">\\n<head>\\n<link rel=\\\"manifest\\\" href=\\\"/webmanifest.json\\\">\\n<link rel=\\\"icon\\\" href=\\\"build/icon.png\\\" type=\\\"image/png\\\" />\\n<title>ReplayWeb.page</title>\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n<script src=\\\"./ui.js\\\"></script>\\n</head>\\n<body>\\n<replay-app-main></replay-app-main>\\n</body>\\n</html>\\n\");\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n\n\n\n\nif (self.registration) {\n  const staticData = new Map();\n\n  const prefix = self.registration.scope;\n\n  staticData.set(prefix, {type: \"text/html\", content: _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]});\n  staticData.set(prefix + \"index.html\", {type: \"text/html\", content: _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]});\n  //staticData.set(prefix + \"ui.js\", {type: \"application/javascript\", content: UI_JS});\n\n  const { SWReplay } = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@webrecorder/wabac/src/swmain'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  self.sw = new SWReplay(staticData);\n\n} else if (self.postMessage) {\n// Inited as Web Worker\n  const { WorkerLoader } = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@webrecorder/wabac/src/loaders'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  const loader = new WorkerLoader(self);\n}\n\n//# sourceURL=webpack:///./src/sw.js?");

/***/ })

/******/ })));