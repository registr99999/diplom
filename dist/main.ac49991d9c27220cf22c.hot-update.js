/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  // arrow Up\n  var arrowUp = document.querySelector('.up');\n  var services = document.getElementById('services');\n  console.log(services.scrollTop);\n\n  window.onscroll = function () {\n    if (document.body.scrollTop > 1000) {\n      arrowUp.style.cssText = 'display: block;';\n    } else {\n      arrowUp.style.cssText = 'display: none;';\n    }\n  }; // smooth Scroll\n\n\n  document.querySelectorAll('a[href^=\"#\"').forEach(function (link) {\n    link.classList.add('scrollto');\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n      var href = this.getAttribute('href').substring(1);\n      var scrollTarget = document.getElementById(href);\n      var topOffset = document.querySelector('.scrollto').offsetHeight;\n      var elementPosition = scrollTarget.getBoundingClientRect().top;\n      var offsetPosition = elementPosition - topOffset;\n      window.scrollBy({\n        top: offsetPosition,\n        behavior: 'smooth'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "e7b46170ff9dde32fff4"
/******/ 	})();
/******/ 	
/******/ }
);