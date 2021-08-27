"use strict";
(() => {
var exports = {};
exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _base)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./pages/api/_base.js

let prisma;

if (true) {
  prisma = new client_namespaceObject.PrismaClient();
} else {}

/* harmony default export */ const _base = (prisma);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(34));
module.exports = __webpack_exports__;

})();