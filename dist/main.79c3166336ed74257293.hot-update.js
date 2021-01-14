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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar modalCallback = function modalCallback() {\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var callback = document.getElementById('callback');\n  var callbackBtn = document.getElementById('callback-btn');\n\n  var handleToggle = function handleToggle() {\n    menu.classList.toggle('active-menu');\n  };\n\n  var handleClick = function handleClick(_ref) {\n    var target = _ref.target;\n\n    if (target === menuItems || target.closest('div') === btnMenu || target === btnClose) {\n      handleToggle();\n      return;\n    } else if (target) {\n      menuItems.forEach(function (item) {\n        if (target === item) {\n          handleToggle();\n        }\n      });\n    }\n\n    if (menu.classList.contains('active-menu') && !target.closest('menu')) {\n      handleToggle();\n    }\n  };\n\n  document.addEventListener('click', handleClick);\n  document.addEventListener('click', function (_ref2) {\n    var target = _ref2.target;\n\n    if (target.classList.contains('callback-btn')) {\n      modalOverlay.style.display = 'block';\n      callback.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallback);\n\n//# sourceURL=webpack://diplom/./src/modules/modalCallback.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "eb19178c34971fb325d3"
/******/ 	})();
/******/ 	
/******/ }
);