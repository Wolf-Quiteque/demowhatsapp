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
exports.id = "pages/api/posts/comment";
exports.ids = ["pages/api/posts/comment"];
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

/***/ "(api)/./pages/api/posts/comment.js":
/*!************************************!*\
  !*** ./pages/api/posts/comment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function handler(req, res) {\n  const {\n    id\n  } = req.body;\n  var data = req.body;\n  delete data.id;\n  delete data.avatar;\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const db = client.db(\"anje\");\n\n  try {\n    // Update the post's comments array\n    const su = await db.collection(\"posts\").updateOne({\n      _id: new bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n    }, {\n      $push: {\n        comments: data\n      }\n    });\n    console.log(su);\n    res.status(200).json({\n      message: \"Comment added successfully\"\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(422).json({\n      message: \"Houve um erro! \" + error\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvY29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVNGLEdBQUcsQ0FBQ0csSUFBbkI7QUFFQSxNQUFJQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0csSUFBZjtBQUNBLFNBQU9DLElBQUksQ0FBQ0YsRUFBWjtBQUNBLFNBQU9FLElBQUksQ0FBQ0MsTUFBWjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNVCxvREFBckI7QUFDQSxRQUFNVSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLE1BQVYsQ0FBWDs7QUFFQSxNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxFQUFFLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFILENBQWMsT0FBZCxFQUF1QkMsU0FBdkIsQ0FDZjtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsSUFBSWIsMENBQUosQ0FBYUksRUFBYjtBQUFQLEtBRGUsRUFFZjtBQUNFVSxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsUUFBUSxFQUFFVDtBQURMO0FBRFQsS0FGZSxDQUFqQjtBQVFBVSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsRUFBWjtBQUNBUCxJQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBWkQsQ0FZRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDQWxCLElBQUFBLEdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRSxvQkFBb0JDO0FBQS9CLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxpRUFBZXBCLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdHMvY29tbWVudC5qcz9lM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJic29uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIHZhciBkYXRhID0gcmVxLmJvZHk7XHJcbiAgZGVsZXRlIGRhdGEuaWQ7XHJcbiAgZGVsZXRlIGRhdGEuYXZhdGFyO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiYW5qZVwiKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcG9zdCdzIGNvbW1lbnRzIGFycmF5XHJcbiAgICBjb25zdCBzdSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgY29tbWVudHM6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHN1KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJDb21tZW50IGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiSG91dmUgdW0gZXJybyEgXCIgKyBlcnJvciB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiT2JqZWN0SWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJib2R5IiwiZGF0YSIsImF2YXRhciIsImNsaWVudCIsImRiIiwic3UiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiX2lkIiwiJHB1c2giLCJjb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/comment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/comment.js"));
module.exports = __webpack_exports__;

})();