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
exports.id = "pages/api/posts/allcoments";
exports.ids = ["pages/api/posts/allcoments"];
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

/***/ "(api)/./pages/api/posts/allcoments.js":
/*!***************************************!*\
  !*** ./pages/api/posts/allcoments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  const data = req.body;\n  const {\n    id\n  } = data;\n  const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const db = cliente.db(\"anje\");\n  const resul = await db.collection(\"posts\").aggregate([// Match the post with the specified ID\n  {\n    $match: {\n      _id: (0,bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(id)\n    }\n  }, // Unwind the comments array to separate each comment into its own document\n  {\n    $unwind: \"$comments\"\n  }, // Lookup the user information based on the email in each comment\n  {\n    $lookup: {\n      from: \"usuarios\",\n      localField: \"comments.email\",\n      foreignField: \"email\",\n      as: \"commentUser\"\n    }\n  }, // Project to shape the final output\n  {\n    $project: {\n      _id: 0,\n      // Exclude the _id field\n      commentario: \"$comments.commentario\",\n      // Rename the comment field\n      timestamp: \"$comments.timestamp\",\n      // Rename the timestamp field\n      avatar: \"$commentUser.avatar\",\n      // Get the avatar field from the user document\n      nome: \"$commentUser.nome\",\n      classe: \"$commentUser.classe\"\n    }\n  }]).toArray();\n  res.json(resul);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvYWxsY29tZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFFBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUNBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFTRixJQUFmO0FBRUEsUUFBTUcsT0FBTyxHQUFHLE1BQU1ULG9EQUF0QjtBQUNBLFFBQU1VLEVBQUUsR0FBR0QsT0FBTyxDQUFDQyxFQUFSLENBQVcsTUFBWCxDQUFYO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1ELEVBQUUsQ0FDbkJFLFVBRGlCLENBQ04sT0FETSxFQUVqQkMsU0FGaUIsQ0FFUCxDQUNUO0FBQ0E7QUFDRUMsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLEdBQUcsRUFBRWQsOENBQVEsQ0FBQ08sRUFBRDtBQUFmO0FBRFYsR0FGUyxFQUtUO0FBQ0E7QUFDRVEsSUFBQUEsT0FBTyxFQUFFO0FBRFgsR0FOUyxFQVNUO0FBQ0E7QUFDRUMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1BQUFBLFVBQVUsRUFBRSxnQkFGTDtBQUdQQyxNQUFBQSxZQUFZLEVBQUUsT0FIUDtBQUlQQyxNQUFBQSxFQUFFLEVBQUU7QUFKRztBQURYLEdBVlMsRUFrQlQ7QUFDQTtBQUNFQyxJQUFBQSxRQUFRLEVBQUU7QUFDUlAsTUFBQUEsR0FBRyxFQUFFLENBREc7QUFDQTtBQUNSUSxNQUFBQSxXQUFXLEVBQUUsdUJBRkw7QUFFOEI7QUFDdENDLE1BQUFBLFNBQVMsRUFBRSxxQkFISDtBQUcwQjtBQUNsQ0MsTUFBQUEsTUFBTSxFQUFFLHFCQUpBO0FBSXVCO0FBQy9CQyxNQUFBQSxJQUFJLEVBQUUsbUJBTEU7QUFNUkMsTUFBQUEsTUFBTSxFQUFFO0FBTkE7QUFEWixHQW5CUyxDQUZPLEVBZ0NqQkMsT0FoQ2lCLEVBQXBCO0FBaUNBeEIsRUFBQUEsR0FBRyxDQUFDeUIsSUFBSixDQUFTbEIsS0FBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3RzL2FsbGNvbWVudHMuanM/MDRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwiYnNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gIGNvbnN0IHsgaWQgfSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IGNsaWVudGUgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50ZS5kYihcImFuamVcIik7XHJcbiAgY29uc3QgcmVzdWwgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJwb3N0c1wiKVxyXG4gICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgIC8vIE1hdGNoIHRoZSBwb3N0IHdpdGggdGhlIHNwZWNpZmllZCBJRFxyXG4gICAgICB7XHJcbiAgICAgICAgJG1hdGNoOiB7IF9pZDogT2JqZWN0SWQoaWQpIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFVud2luZCB0aGUgY29tbWVudHMgYXJyYXkgdG8gc2VwYXJhdGUgZWFjaCBjb21tZW50IGludG8gaXRzIG93biBkb2N1bWVudFxyXG4gICAgICB7XHJcbiAgICAgICAgJHVud2luZDogXCIkY29tbWVudHNcIixcclxuICAgICAgfSxcclxuICAgICAgLy8gTG9va3VwIHRoZSB1c2VyIGluZm9ybWF0aW9uIGJhc2VkIG9uIHRoZSBlbWFpbCBpbiBlYWNoIGNvbW1lbnRcclxuICAgICAge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IFwidXN1YXJpb3NcIixcclxuICAgICAgICAgIGxvY2FsRmllbGQ6IFwiY29tbWVudHMuZW1haWxcIixcclxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgYXM6IFwiY29tbWVudFVzZXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBQcm9qZWN0IHRvIHNoYXBlIHRoZSBmaW5hbCBvdXRwdXRcclxuICAgICAge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDAsIC8vIEV4Y2x1ZGUgdGhlIF9pZCBmaWVsZFxyXG4gICAgICAgICAgY29tbWVudGFyaW86IFwiJGNvbW1lbnRzLmNvbW1lbnRhcmlvXCIsIC8vIFJlbmFtZSB0aGUgY29tbWVudCBmaWVsZFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBcIiRjb21tZW50cy50aW1lc3RhbXBcIiwgLy8gUmVuYW1lIHRoZSB0aW1lc3RhbXAgZmllbGRcclxuICAgICAgICAgIGF2YXRhcjogXCIkY29tbWVudFVzZXIuYXZhdGFyXCIsIC8vIEdldCB0aGUgYXZhdGFyIGZpZWxkIGZyb20gdGhlIHVzZXIgZG9jdW1lbnRcclxuICAgICAgICAgIG5vbWU6IFwiJGNvbW1lbnRVc2VyLm5vbWVcIixcclxuICAgICAgICAgIGNsYXNzZTogXCIkY29tbWVudFVzZXIuY2xhc3NlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbiAgICAudG9BcnJheSgpO1xyXG4gIHJlcy5qc29uKHJlc3VsKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiaWQiLCJjbGllbnRlIiwiZGIiLCJyZXN1bCIsImNvbGxlY3Rpb24iLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJfaWQiLCIkdW53aW5kIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkcHJvamVjdCIsImNvbW1lbnRhcmlvIiwidGltZXN0YW1wIiwiYXZhdGFyIiwibm9tZSIsImNsYXNzZSIsInRvQXJyYXkiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/allcoments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/allcoments.js"));
module.exports = __webpack_exports__;

})();