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
exports.id = "pages/api/noticias/allnoticias";
exports.ids = ["pages/api/noticias/allnoticias"];
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

/***/ "(api)/./pages/api/noticias/allnoticias.js":
/*!*******************************************!*\
  !*** ./pages/api/noticias/allnoticias.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const data = req.body;\n  const {\n    page,\n    info\n  } = data;\n  var perPage = 6;\n  const db = cliente.db(\"anje\"); // total number of records from database\n\n  var total = await db.collection(\"noticias\").count(); // Calculating number of pagination links required\n\n  var pages = Math.ceil(total / perPage); // get current page number\n\n  var pageNumber = page == null ? 1 : page; // get records to skip\n\n  var startFrom = (pageNumber - 1) * perPage; // get data from mongo DB using pagination\n\n  var resul = await db.collection(\"noticias\").find(info).sort({\n    id: -1\n  }).skip(startFrom).limit(perPage).toArray();\n  res.json({\n    pages: pages,\n    usuarios: resul\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aWNpYXMvYWxsbm90aWNpYXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFFBQU1DLE9BQU8sR0FBRyxNQUFNTCxvREFBdEI7QUFFQSxRQUFNTSxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBakI7QUFDQSxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFpQkgsSUFBdkI7QUFFQSxNQUFJSSxPQUFPLEdBQUcsQ0FBZDtBQUVBLFFBQU1DLEVBQUUsR0FBR04sT0FBTyxDQUFDTSxFQUFSLENBQVcsTUFBWCxDQUFYLENBWjhDLENBYTlDOztBQUNBLE1BQUlDLEtBQUssR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxLQUExQixFQUFsQixDQWQ4QyxDQWdCOUM7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHRixPQUFsQixDQUFaLENBakI4QyxDQW1COUM7O0FBQ0EsTUFBSVEsVUFBVSxHQUFHVixJQUFJLElBQUksSUFBUixHQUFlLENBQWYsR0FBbUJBLElBQXBDLENBcEI4QyxDQXNCOUM7O0FBQ0EsTUFBSVcsU0FBUyxHQUFHLENBQUNELFVBQVUsR0FBRyxDQUFkLElBQW1CUixPQUFuQyxDQXZCOEMsQ0F5QjlDOztBQUVBLE1BQUlVLEtBQUssR0FBRyxNQUFNVCxFQUFFLENBQ2pCRSxVQURlLENBQ0osVUFESSxFQUVmUSxJQUZlLENBRVZaLElBRlUsRUFHZmEsSUFIZSxDQUdWO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxDQUFDO0FBQVAsR0FIVSxFQUlmQyxJQUplLENBSVZMLFNBSlUsRUFLZk0sS0FMZSxDQUtUZixPQUxTLEVBTWZnQixPQU5lLEVBQWxCO0FBUUF2QixFQUFBQSxHQUFHLENBQUN3QixJQUFKLENBQVM7QUFBRVosSUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCYSxJQUFBQSxRQUFRLEVBQUVSO0FBQTFCLEdBQVQ7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ub3RpY2lhcy9hbGxub3RpY2lhcy5qcz8wOWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xpZW50ZSA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBjb25zdCB7IHBhZ2UsIGluZm8gfSA9IGRhdGE7XHJcblxyXG4gIHZhciBwZXJQYWdlID0gNjtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnRlLmRiKFwiYW5qZVwiKTtcclxuICAvLyB0b3RhbCBudW1iZXIgb2YgcmVjb3JkcyBmcm9tIGRhdGFiYXNlXHJcbiAgdmFyIHRvdGFsID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIm5vdGljaWFzXCIpLmNvdW50KCk7XHJcblxyXG4gIC8vIENhbGN1bGF0aW5nIG51bWJlciBvZiBwYWdpbmF0aW9uIGxpbmtzIHJlcXVpcmVkXHJcbiAgdmFyIHBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsIC8gcGVyUGFnZSk7XHJcblxyXG4gIC8vIGdldCBjdXJyZW50IHBhZ2UgbnVtYmVyXHJcbiAgdmFyIHBhZ2VOdW1iZXIgPSBwYWdlID09IG51bGwgPyAxIDogcGFnZTtcclxuXHJcbiAgLy8gZ2V0IHJlY29yZHMgdG8gc2tpcFxyXG4gIHZhciBzdGFydEZyb20gPSAocGFnZU51bWJlciAtIDEpICogcGVyUGFnZTtcclxuXHJcbiAgLy8gZ2V0IGRhdGEgZnJvbSBtb25nbyBEQiB1c2luZyBwYWdpbmF0aW9uXHJcblxyXG4gIHZhciByZXN1bCA9IGF3YWl0IGRiXHJcbiAgICAuY29sbGVjdGlvbihcIm5vdGljaWFzXCIpXHJcbiAgICAuZmluZChpbmZvKVxyXG4gICAgLnNvcnQoeyBpZDogLTEgfSlcclxuICAgIC5za2lwKHN0YXJ0RnJvbSlcclxuICAgIC5saW1pdChwZXJQYWdlKVxyXG4gICAgLnRvQXJyYXkoKTtcclxuXHJcbiAgcmVzLmpzb24oeyBwYWdlczogcGFnZXMsIHVzdWFyaW9zOiByZXN1bCB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjbGllbnRlIiwiZGF0YSIsImJvZHkiLCJwYWdlIiwiaW5mbyIsInBlclBhZ2UiLCJkYiIsInRvdGFsIiwiY29sbGVjdGlvbiIsImNvdW50IiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsInBhZ2VOdW1iZXIiLCJzdGFydEZyb20iLCJyZXN1bCIsImZpbmQiLCJzb3J0IiwiaWQiLCJza2lwIiwibGltaXQiLCJ0b0FycmF5IiwianNvbiIsInVzdWFyaW9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/noticias/allnoticias.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/noticias/allnoticias.js"));
module.exports = __webpack_exports__;

})();