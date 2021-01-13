/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/modalCallback.js":
/*!**************************************!*\
  !*** ./src/modules/modalCallback.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar modalCallback = function modalCallback() {\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var callback = document.getElementById('callback');\n  var mobMenuBtn = document.querySelector('.mob-menu-btn');\n  document.addEventListener('click', function (_ref) {\n    var target = _ref.target;\n\n    if (target === mobMenuBtn) {\n      alert('попал прям в кнопку');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallback);\n\n//# sourceURL=webpack://diplom/./src/modules/modalCallback.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "be48228f76c5a1688d53"
/******/ 	})();
/******/ 	
/******/ }
);