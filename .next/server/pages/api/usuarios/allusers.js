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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUVsQixJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztDQUM1RDtBQUVELElBQUlOLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JKLE1BQU0sR0FBRyxJQUFJTixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDSSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU8sRUFBRSxDQUFDO0tBQy9DO0lBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQztDQUM1QyxNQUFNLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/allusers.js":
/*!****************************************!*\
  !*** ./pages/api/usuarios/allusers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return;\n    }\n    const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const data = req.body;\n    const { page , info  } = data;\n    var perPage = 6;\n    const db = cliente.db(\"myFirstDatabase\");\n    // total number of records from database\n    var total = await db.collection(\"usuarios\").count();\n    // Calculating number of pagination links required\n    var pages = Math.ceil(total / perPage);\n    // get current page number\n    var pageNumber = page == null ? 1 : page;\n    // get records to skip\n    var startFrom = (pageNumber - 1) * perPage;\n    // get data from mongo DB using pagination\n    var resul = await db.collection(\"usuarios\").find(info).sort({\n        id: -1\n    }).skip(startFrom).limit(perPage).toArray();\n    res.json({\n        pages: pages,\n        usuarios: resul\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFFbEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTztLQUNSO0lBRUQsTUFBTUMsT0FBTyxHQUFHLE1BQU1MLG9EQUFhO0lBRW5DLE1BQU1NLElBQUksR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxJQUFJLEdBQUUsR0FBR0gsSUFBSTtJQUUzQixJQUFJSSxPQUFPLEdBQUcsQ0FBQztJQUVmLE1BQU1DLEVBQUUsR0FBR04sT0FBTyxDQUFDTSxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsd0NBQXdDO0lBQ3hDLElBQUlDLEtBQUssR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSyxFQUFFO0lBRW5ELGtEQUFrRDtJQUNsRCxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTCxLQUFLLEdBQUdGLE9BQU8sQ0FBQztJQUV0QywwQkFBMEI7SUFDMUIsSUFBSVEsVUFBVSxHQUFHVixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSTtJQUV4QyxzQkFBc0I7SUFDdEIsSUFBSVcsU0FBUyxHQUFHLENBQUNELFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBR1IsT0FBTztJQUUxQywwQ0FBMEM7SUFDMUMsSUFBSVUsS0FBSyxHQUFHLE1BQU1ULEVBQUUsQ0FDakJFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdEJRLElBQUksQ0FBQ1osSUFBSSxDQUFDLENBQ1ZhLElBQUksQ0FBQztRQUFFQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQUUsQ0FBQyxDQUNoQkMsSUFBSSxDQUFDTCxTQUFTLENBQUMsQ0FDZk0sS0FBSyxDQUFDZixPQUFPLENBQUMsQ0FDZGdCLE9BQU8sRUFBRTtJQUVadkIsR0FBRyxDQUFDd0IsSUFBSSxDQUFDO1FBQUVaLEtBQUssRUFBRUEsS0FBSztRQUFFYSxRQUFRLEVBQUVSLEtBQUs7S0FBRSxDQUFDLENBQUM7Q0FDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanM/Zjg2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjbGllbnRlID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblxuICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gIGNvbnN0IHsgcGFnZSwgaW5mbyB9ID0gZGF0YTtcblxuICB2YXIgcGVyUGFnZSA9IDY7XG5cbiAgY29uc3QgZGIgPSBjbGllbnRlLmRiKFwibXlGaXJzdERhdGFiYXNlXCIpO1xuICAvLyB0b3RhbCBudW1iZXIgb2YgcmVjb3JkcyBmcm9tIGRhdGFiYXNlXG4gIHZhciB0b3RhbCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKS5jb3VudCgpO1xuXG4gIC8vIENhbGN1bGF0aW5nIG51bWJlciBvZiBwYWdpbmF0aW9uIGxpbmtzIHJlcXVpcmVkXG4gIHZhciBwYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIHBlclBhZ2UpO1xuXG4gIC8vIGdldCBjdXJyZW50IHBhZ2UgbnVtYmVyXG4gIHZhciBwYWdlTnVtYmVyID0gcGFnZSA9PSBudWxsID8gMSA6IHBhZ2U7XG5cbiAgLy8gZ2V0IHJlY29yZHMgdG8gc2tpcFxuICB2YXIgc3RhcnRGcm9tID0gKHBhZ2VOdW1iZXIgLSAxKSAqIHBlclBhZ2U7XG5cbiAgLy8gZ2V0IGRhdGEgZnJvbSBtb25nbyBEQiB1c2luZyBwYWdpbmF0aW9uXG4gIHZhciByZXN1bCA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKVxuICAgIC5maW5kKGluZm8pXG4gICAgLnNvcnQoeyBpZDogLTEgfSlcbiAgICAuc2tpcChzdGFydEZyb20pXG4gICAgLmxpbWl0KHBlclBhZ2UpXG4gICAgLnRvQXJyYXkoKTtcblxuICByZXMuanNvbih7IHBhZ2VzOiBwYWdlcywgdXN1YXJpb3M6IHJlc3VsIH0pO1xufVxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2xpZW50ZSIsImRhdGEiLCJib2R5IiwicGFnZSIsImluZm8iLCJwZXJQYWdlIiwiZGIiLCJ0b3RhbCIsImNvbGxlY3Rpb24iLCJjb3VudCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJwYWdlTnVtYmVyIiwic3RhcnRGcm9tIiwicmVzdWwiLCJmaW5kIiwic29ydCIsImlkIiwic2tpcCIsImxpbWl0IiwidG9BcnJheSIsImpzb24iLCJ1c3VhcmlvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/allusers.js\n");

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