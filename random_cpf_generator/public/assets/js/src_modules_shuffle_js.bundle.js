"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_modules_shuffle_js"],{

/***/ "./src/modules/shuffle.js":
/*!********************************!*\
  !*** ./src/modules/shuffle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shuffleArray)
/* harmony export */ });
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

/***/ })

}]);
//# sourceMappingURL=src_modules_shuffle_js.bundle.js.map