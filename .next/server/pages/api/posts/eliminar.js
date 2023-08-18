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
exports.id = "pages/api/posts/eliminar";
exports.ids = ["pages/api/posts/eliminar"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (false) {}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyw0RkFBbUM7QUFDL0MsTUFBTUcsT0FBTyxHQUFHLEVBQUU7QUFFbEIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSSxLQUFvQyxFQUFFLEVBRXpDO0FBRUQsSUFBSUwsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNJLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7S0FDL0M7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0NBQzVDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7fTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/eliminar.js":
/*!*************************************!*\
  !*** ./pages/api/posts/eliminar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return;\n    }\n    const data = req.body;\n    const { id  } = data;\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"anje\");\n    const result = await db.collection(\"posts\").deleteOne({\n        _id: new bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n    });\n    res.json({\n        message: \"Eliminado com sucesso\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvZWxpbWluYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNqQjtBQUVoQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPO0tBQ1I7SUFDRCxNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNyQixNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHRixJQUFJO0lBRW5CLE1BQU1HLE1BQU0sR0FBRyxNQUFNVCxvREFBYTtJQUNsQyxNQUFNVSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM1QixNQUFNQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUNwQkUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUNuQkMsU0FBUyxDQUFDO1FBQUVDLEdBQUcsRUFBRSxJQUFJYiwwQ0FBUSxDQUFDTyxFQUFFLENBQUM7S0FBRSxDQUFDO0lBQ3ZDSixHQUFHLENBQUNXLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsdUJBQXVCO0tBQUUsQ0FBQyxDQUFDO0NBQ2hEO0FBRUQsaUVBQWVkLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0cy9lbGltaW5hci5qcz9iZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJic29uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBjb25zdCB7IGlkIH0gPSBkYXRhO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiYW5qZVwiKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJwb3N0c1wiKVxyXG4gICAgLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9KTtcclxuICByZXMuanNvbih7IG1lc3NhZ2U6IFwiRWxpbWluYWRvIGNvbSBzdWNlc3NvXCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiT2JqZWN0SWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJpZCIsImNsaWVudCIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImRlbGV0ZU9uZSIsIl9pZCIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/eliminar.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/eliminar.js"));
module.exports = __webpack_exports__;

})();