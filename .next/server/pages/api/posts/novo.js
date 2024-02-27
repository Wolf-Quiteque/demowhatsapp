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
exports.id = "pages/api/posts/novo";
exports.ids = ["pages/api/posts/novo"];
exports.modules = {

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

/***/ "(api)/./pages/api/posts/novo.js":
/*!*********************************!*\
  !*** ./pages/api/posts/novo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  var data = req.body;\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const db = client.db(\"anje\");\n\n  try {\n    await db.collection(\"posts\").insertOne(data);\n    res.status(200).json({\n      message: \"success\"\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(422).json({\n      message: \"Houve um erro!\"\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvbm92by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELE1BQUlDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1QLG9EQUFyQjtBQUVBLFFBQU1RLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFQLENBQVUsTUFBVixDQUFYOztBQUVBLE1BQUk7QUFDRixVQUFNQSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxTQUF2QixDQUFpQ0wsSUFBakMsQ0FBTjtBQUNBRixJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQVgsSUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGOztBQUVELGlFQUFlWixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3RzL25vdm8uanM/MTM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciBkYXRhID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJhbmplXCIpO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInBvc3RzXCIpLmluc2VydE9uZShkYXRhKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJIb3V2ZSB1bSBlcnJvIVwiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/novo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/novo.js"));
module.exports = __webpack_exports__;

})();