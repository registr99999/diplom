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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\ndocument.addEventListener('click', function (_ref) {\n  var target = _ref.target;\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var callback = document.getElementById('callback');\n  var feedback = document.getElementById('feedback');\n\n  if (target.closest('.callback-btn')) {\n    modalOverlay.style.cssText = 'display:block; opacity:1; transition: all .9s ease 3s;';\n    callback.style.cssText = 'display:block; opacity:1; transform: scale(1) translate(-50%, 0) rotate(0deg); transition: all .9s ease 1s;';\n  }\n\n  if (target.closest('.modal-overlay') || target.closest('.modal-close')) {\n    modalOverlay.style.cssText = 'display:none; opacity:0; transform:translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';\n    callback.style.cssText = 'display:none; opacity:0; transform:scale(1) translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallback);\n\n//# sourceURL=webpack://diplom/./src/modules/modalCallback.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c07211079557387b4a36"
/******/ 	})();
/******/ 	
/******/ }
);