"use strict";
(() => {
var exports = {};
exports.id = 95;
exports.ids = [95,723];
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

/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./pages/api/_base.js + 1 modules
var _base = __webpack_require__(34);
;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
;// CONCATENATED MODULE: ./pages/api/fighters/[fighter].js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
  let {
    fighter
  } = req.query;
  const fights = await _base.default.fights.findMany();
  res.status(200).json(fights);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(83));
module.exports = __webpack_exports__;

})();