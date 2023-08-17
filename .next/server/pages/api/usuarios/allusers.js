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
exports.id = "pages/api/usuarios/allusers";
exports.ids = ["pages/api/usuarios/allusers"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (false) {}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyw0RkFBbUM7QUFDL0MsTUFBTUcsT0FBTyxHQUFHLEVBQUU7QUFFbEIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSSxLQUFvQyxFQUFFLEVBRXpDO0FBRUQsSUFBSUwsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNJLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7S0FDL0M7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0NBQzVDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7fTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/allusers.js":
/*!****************************************!*\
  !*** ./pages/api/usuarios/allusers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return;\n    }\n    const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const data = req.body;\n    const { page , info  } = data;\n    var perPage = 6;\n    const db = cliente.db(\"anje\");\n    // total number of records from database\n    var total = await db.collection(\"usuarios\").count();\n    // Calculating number of pagination links required\n    var pages = Math.ceil(total / perPage);\n    // get current page number\n    var pageNumber = page == null ? 1 : page;\n    // get records to skip\n    var startFrom = (pageNumber - 1) * perPage;\n    // get data from mongo DB using pagination\n    var resul = await db.collection(\"usuarios\").find(info).sort({\n        id: -1\n    }).skip(startFrom).limit(perPage).toArray();\n    res.json({\n        pages: pages,\n        usuarios: resul\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFFbEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTztLQUNSO0lBRUQsTUFBTUMsT0FBTyxHQUFHLE1BQU1MLG9EQUFhO0lBRW5DLE1BQU1NLElBQUksR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxJQUFJLEdBQUUsR0FBR0gsSUFBSTtJQUUzQixJQUFJSSxPQUFPLEdBQUcsQ0FBQztJQUVmLE1BQU1DLEVBQUUsR0FBR04sT0FBTyxDQUFDTSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzdCLHdDQUF3QztJQUN4QyxJQUFJQyxLQUFLLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssRUFBRTtJQUVuRCxrREFBa0Q7SUFDbEQsSUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQ0wsS0FBSyxHQUFHRixPQUFPLENBQUM7SUFFdEMsMEJBQTBCO0lBQzFCLElBQUlRLFVBQVUsR0FBR1YsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUdBLElBQUk7SUFFeEMsc0JBQXNCO0lBQ3RCLElBQUlXLFNBQVMsR0FBRyxDQUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUdSLE9BQU87SUFFMUMsMENBQTBDO0lBRTFDLElBQUlVLEtBQUssR0FBRyxNQUFNVCxFQUFFLENBQ2pCRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ3RCUSxJQUFJLENBQUNaLElBQUksQ0FBQyxDQUNWYSxJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FDaEJDLElBQUksQ0FBQ0wsU0FBUyxDQUFDLENBQ2ZNLEtBQUssQ0FBQ2YsT0FBTyxDQUFDLENBQ2RnQixPQUFPLEVBQUU7SUFFWnZCLEdBQUcsQ0FBQ3dCLElBQUksQ0FBQztRQUFFWixLQUFLLEVBQUVBLEtBQUs7UUFBRWEsUUFBUSxFQUFFUixLQUFLO0tBQUUsQ0FBQyxDQUFDO0NBQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzdWFyaW9zL2FsbHVzZXJzLmpzP2Y4NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGllbnRlID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gIGNvbnN0IHsgcGFnZSwgaW5mbyB9ID0gZGF0YTtcclxuXHJcbiAgdmFyIHBlclBhZ2UgPSA2O1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudGUuZGIoXCJhbmplXCIpO1xyXG4gIC8vIHRvdGFsIG51bWJlciBvZiByZWNvcmRzIGZyb20gZGF0YWJhc2VcclxuICB2YXIgdG90YWwgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIikuY291bnQoKTtcclxuXHJcbiAgLy8gQ2FsY3VsYXRpbmcgbnVtYmVyIG9mIHBhZ2luYXRpb24gbGlua3MgcmVxdWlyZWRcclxuICB2YXIgcGFnZXMgPSBNYXRoLmNlaWwodG90YWwgLyBwZXJQYWdlKTtcclxuXHJcbiAgLy8gZ2V0IGN1cnJlbnQgcGFnZSBudW1iZXJcclxuICB2YXIgcGFnZU51bWJlciA9IHBhZ2UgPT0gbnVsbCA/IDEgOiBwYWdlO1xyXG5cclxuICAvLyBnZXQgcmVjb3JkcyB0byBza2lwXHJcbiAgdmFyIHN0YXJ0RnJvbSA9IChwYWdlTnVtYmVyIC0gMSkgKiBwZXJQYWdlO1xyXG5cclxuICAvLyBnZXQgZGF0YSBmcm9tIG1vbmdvIERCIHVzaW5nIHBhZ2luYXRpb25cclxuXHJcbiAgdmFyIHJlc3VsID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIilcclxuICAgIC5maW5kKGluZm8pXHJcbiAgICAuc29ydCh7IGlkOiAtMSB9KVxyXG4gICAgLnNraXAoc3RhcnRGcm9tKVxyXG4gICAgLmxpbWl0KHBlclBhZ2UpXHJcbiAgICAudG9BcnJheSgpO1xyXG5cclxuICByZXMuanNvbih7IHBhZ2VzOiBwYWdlcywgdXN1YXJpb3M6IHJlc3VsIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNsaWVudGUiLCJkYXRhIiwiYm9keSIsInBhZ2UiLCJpbmZvIiwicGVyUGFnZSIsImRiIiwidG90YWwiLCJjb2xsZWN0aW9uIiwiY291bnQiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZU51bWJlciIsInN0YXJ0RnJvbSIsInJlc3VsIiwiZmluZCIsInNvcnQiLCJpZCIsInNraXAiLCJsaW1pdCIsInRvQXJyYXkiLCJqc29uIiwidXN1YXJpb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/allusers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/allusers.js"));
module.exports = __webpack_exports__;

})();