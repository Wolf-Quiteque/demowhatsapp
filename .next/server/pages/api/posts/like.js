"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/like";
exports.ids = ["pages/api/posts/like"];
exports.modules = {

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsNEZBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDRSxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSU4sZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/like.js":
/*!*********************************!*\
  !*** ./pages/api/posts/like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function handler(req, res) {\n  const {\n    email,\n    id\n  } = req.body;\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const db = client.db(\"anje\");\n\n  try {\n    // Check if the email is already in the likes array\n    const post = await db.collection(\"posts\").findOne({\n      _id: new bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n    });\n\n    if (post.likes && post.likes.includes(email)) {\n      return res.status(200).json({\n        message: \"Email already in the likes array\"\n      });\n    } // Update the post's likes array\n\n\n    const result = await db.collection(\"posts\").updateOne({\n      _id: new bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n    }, {\n      $addToSet: {\n        likes: email\n      }\n    });\n    console.log(result);\n    res.status(200).json({\n      message: \"Email added to likes array successfully\"\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(422).json({\n      message: \"Error: \" + error\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvbGlrZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsUUFBTTtBQUFFQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBZ0JILEdBQUcsQ0FBQ0ksSUFBMUI7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTVIsb0RBQXJCO0FBQ0EsUUFBTVMsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQVAsQ0FBVSxNQUFWLENBQVg7O0FBRUEsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1ELEVBQUUsQ0FDbEJFLFVBRGdCLENBQ0wsT0FESyxFQUVoQkMsT0FGZ0IsQ0FFUjtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsSUFBSVosMENBQUosQ0FBYUssRUFBYjtBQUFQLEtBRlEsQ0FBbkI7O0FBR0EsUUFBSUksSUFBSSxDQUFDSSxLQUFMLElBQWNKLElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxRQUFYLENBQW9CVixLQUFwQixDQUFsQixFQUE4QztBQUM1QyxhQUFPRCxHQUFHLENBQ1BZLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUZELENBQVA7QUFHRCxLQVRDLENBV0Y7OztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNVixFQUFFLENBQUNFLFVBQUgsQ0FBYyxPQUFkLEVBQXVCUyxTQUF2QixDQUNuQjtBQUFFUCxNQUFBQSxHQUFHLEVBQUUsSUFBSVosMENBQUosQ0FBYUssRUFBYjtBQUFQLEtBRG1CLEVBRW5CO0FBQ0VlLE1BQUFBLFNBQVMsRUFBRTtBQUNUUCxRQUFBQSxLQUFLLEVBQUVUO0FBREU7QUFEYixLQUZtQixDQUFyQjtBQVNBaUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQWYsSUFBQUEsR0FBRyxDQUNBWSxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVE7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FGUjtBQUdELEdBekJELENBeUJFLE9BQU9NLEtBQVAsRUFBYztBQUNkRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBcEIsSUFBQUEsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLFlBQVlNO0FBQXZCLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxpRUFBZXRCLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdHMvbGlrZS5qcz80MzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJic29uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgaWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiYW5qZVwiKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBlbWFpbCBpcyBhbHJlYWR5IGluIHRoZSBsaWtlcyBhcnJheVxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKFwicG9zdHNcIilcclxuICAgICAgLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSk7XHJcbiAgICBpZiAocG9zdC5saWtlcyAmJiBwb3N0Lmxpa2VzLmluY2x1ZGVzKGVtYWlsKSkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkVtYWlsIGFscmVhZHkgaW4gdGhlIGxpa2VzIGFycmF5XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBwb3N0J3MgbGlrZXMgYXJyYXlcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkYWRkVG9TZXQ6IHtcclxuICAgICAgICAgIGxpa2VzOiBlbWFpbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICByZXNcclxuICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJFbWFpbCBhZGRlZCB0byBsaWtlcyBhcnJheSBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yOiBcIiArIGVycm9yIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsImlkIiwiYm9keSIsImNsaWVudCIsImRiIiwicG9zdCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiX2lkIiwibGlrZXMiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicmVzdWx0IiwidXBkYXRlT25lIiwiJGFkZFRvU2V0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/like.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/like.js"));
module.exports = __webpack_exports__;

})();