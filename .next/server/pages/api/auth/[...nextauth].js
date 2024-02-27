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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function hashPassword(password) {\n  const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n  return isValid;\n}\nasync function auth(req, res) {\n  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n\n  if (session) {\n    res.json({\n      content: \"ok\"\n    });\n  } else {\n    res.json({\n      error: \"error\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLGVBQWVHLFlBQWYsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQzNDLFFBQU1DLGNBQWMsR0FBRyxNQUFNTCw4Q0FBSSxDQUFDSSxRQUFELEVBQVcsRUFBWCxDQUFqQztBQUNBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJGLFFBQTlCLEVBQXdDQyxjQUF4QyxFQUF3RDtBQUM3RCxRQUFNRSxPQUFPLEdBQUcsTUFBTU4saURBQU8sQ0FBQ0csUUFBRCxFQUFXQyxjQUFYLENBQTdCO0FBQ0EsU0FBT0UsT0FBUDtBQUNEO0FBRU0sZUFBZUMsSUFBZixDQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQ25DLFFBQU1DLE9BQU8sR0FBRyxNQUFNVCwyREFBVSxDQUFDO0FBQUVPLElBQUFBO0FBQUYsR0FBRCxDQUFoQzs7QUFFQSxNQUFJRSxPQUFKLEVBQWE7QUFDWEQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDUEMsTUFBQUEsT0FBTyxFQUFFO0FBREYsS0FBVDtBQUdELEdBSkQsTUFJTztBQUNMSCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUztBQUNQRSxNQUFBQSxLQUFLLEVBQUU7QUFEQSxLQUFUO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XHJcbiAgcmV0dXJuIGhhc2hlZFBhc3N3b3JkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcclxuICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgaWYgKHNlc3Npb24pIHtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgY29udGVudDogXCJva1wiLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiZXJyb3JcIixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJnZXRTZXNzaW9uIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiaXNWYWxpZCIsImF1dGgiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwianNvbiIsImNvbnRlbnQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsNEZBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDRSxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSU4sZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decrypt\": () => (/* binding */ decrypt),\n/* harmony export */   \"deleteCookie\": () => (/* binding */ deleteCookie),\n/* harmony export */   \"encrypt\": () => (/* binding */ encrypt),\n/* harmony export */   \"getDecryptedCookie\": () => (/* binding */ getDecryptedCookie),\n/* harmony export */   \"setEncryptedCookie\": () => (/* binding */ setEncryptedCookie)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst SECRET_KEY = \"your-secret-key\"; // Replace with your secret key\n\nfunction encrypt(data) {\n  const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(JSON.stringify(data), SECRET_KEY);\n  return encryptedData.toString();\n}\nfunction decrypt(encryptedText) {\n  const decryptedBytes = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(encryptedText, SECRET_KEY);\n  const decryptedData = decryptedBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8));\n  return JSON.parse(decryptedData);\n}\nfunction setEncryptedCookie(name, value) {\n  const encryptedValue = encrypt(value);\n  js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(name, encryptedValue, {\n    expires: 7\n  });\n}\nfunction deleteCookie(name) {\n  js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(name);\n}\nfunction getDecryptedCookie(name) {\n  const encryptedValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(name);\n\n  if (encryptedValue) {\n    const decryptedValue = decrypt(encryptedValue);\n    return decryptedValue;\n  }\n\n  return null;\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxVQUFVLEdBQUcsaUJBQW5CLEVBQXNDOztBQUUvQixTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUM1QixRQUFNQyxhQUFhLEdBQUdKLDREQUFBLENBQXFCTSxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUFyQixFQUEyQ0YsVUFBM0MsQ0FBdEI7QUFDQSxTQUFPRyxhQUFhLENBQUNJLFFBQWQsRUFBUDtBQUNEO0FBRU0sU0FBU0MsT0FBVCxDQUFpQkMsYUFBakIsRUFBZ0M7QUFDckMsUUFBTUMsY0FBYyxHQUFHWCw0REFBQSxDQUFxQlUsYUFBckIsRUFBb0NULFVBQXBDLENBQXZCO0FBQ0EsUUFBTVcsYUFBYSxHQUFHRCxjQUFjLENBQUNILFFBQWYsQ0FBd0JSLDJEQUF4QixDQUF0QjtBQUNBLFNBQU9NLElBQUksQ0FBQ1MsS0FBTCxDQUFXSCxhQUFYLENBQVA7QUFDRDtBQUVNLFNBQVNJLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDOUMsUUFBTUMsY0FBYyxHQUFHakIsT0FBTyxDQUFDZ0IsS0FBRCxDQUE5QjtBQUVBbkIsRUFBQUEscURBQUEsQ0FBWWtCLElBQVosRUFBa0JFLGNBQWxCLEVBQWtDO0FBQUVFLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQWxDO0FBQ0Q7QUFFTSxTQUFTQyxZQUFULENBQXNCTCxJQUF0QixFQUE0QjtBQUNqQ2xCLEVBQUFBLHdEQUFBLENBQWVrQixJQUFmO0FBQ0Q7QUFHTSxTQUFTTyxrQkFBVCxDQUE0QlAsSUFBNUIsRUFBa0M7QUFDdkMsUUFBTUUsY0FBYyxHQUFHcEIscURBQUEsQ0FBWWtCLElBQVosQ0FBdkI7O0FBQ0EsTUFBSUUsY0FBSixFQUFvQjtBQUNsQixVQUFNTyxjQUFjLEdBQUdqQixPQUFPLENBQUNVLGNBQUQsQ0FBOUI7QUFDQSxXQUFPTyxjQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9zZXNzaW9uLmpzP2ZmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgQ3J5cHRvSlMgZnJvbSBcImNyeXB0by1qc1wiO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IFwieW91ci1zZWNyZXQta2V5XCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlY3JldCBrZXlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0KGRhdGEpIHtcclxuICBjb25zdCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFNFQ1JFVF9LRVkpO1xyXG4gIHJldHVybiBlbmNyeXB0ZWREYXRhLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyeXB0KGVuY3J5cHRlZFRleHQpIHtcclxuICBjb25zdCBkZWNyeXB0ZWRCeXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGVuY3J5cHRlZFRleHQsIFNFQ1JFVF9LRVkpO1xyXG4gIGNvbnN0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0ZWRCeXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGVjcnlwdGVkRGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbmNyeXB0ZWRDb29raWUobmFtZSwgdmFsdWUpIHtcclxuICBjb25zdCBlbmNyeXB0ZWRWYWx1ZSA9IGVuY3J5cHQodmFsdWUpO1xyXG5cclxuICBDb29raWVzLnNldChuYW1lLCBlbmNyeXB0ZWRWYWx1ZSwgeyBleHBpcmVzOiA3IH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICBDb29raWVzLnJlbW92ZShuYW1lKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWNyeXB0ZWRDb29raWUobmFtZSkge1xyXG4gIGNvbnN0IGVuY3J5cHRlZFZhbHVlID0gQ29va2llcy5nZXQobmFtZSk7XHJcbiAgaWYgKGVuY3J5cHRlZFZhbHVlKSB7XHJcbiAgICBjb25zdCBkZWNyeXB0ZWRWYWx1ZSA9IGRlY3J5cHQoZW5jcnlwdGVkVmFsdWUpO1xyXG4gICAgcmV0dXJuIGRlY3J5cHRlZFZhbHVlO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iXSwibmFtZXMiOlsiQ29va2llcyIsIkNyeXB0b0pTIiwiU0VDUkVUX0tFWSIsImVuY3J5cHQiLCJkYXRhIiwiZW5jcnlwdGVkRGF0YSIsIkFFUyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsImRlY3J5cHQiLCJlbmNyeXB0ZWRUZXh0IiwiZGVjcnlwdGVkQnl0ZXMiLCJkZWNyeXB0ZWREYXRhIiwiZW5jIiwiVXRmOCIsInBhcnNlIiwic2V0RW5jcnlwdGVkQ29va2llIiwibmFtZSIsInZhbHVlIiwiZW5jcnlwdGVkVmFsdWUiLCJzZXQiLCJleHBpcmVzIiwiZGVsZXRlQ29va2llIiwicmVtb3ZlIiwiZ2V0RGVjcnlwdGVkQ29va2llIiwiZ2V0IiwiZGVjcnlwdGVkVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/session.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/session */ \"(api)/./lib/session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_5__]);\n_lib_session__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  site: \"http://localhost:3000\",\n  secret: \"shinobi777\",\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n    async authorize(credentials) {\n      const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      const usersCollection = client.db(\"anje\").collection(\"usuarios\");\n      const user = await usersCollection.findOne({\n        email: credentials.email\n      });\n\n      if (!user) {\n        throw new Error(\"usuario não existe.\");\n      }\n\n      const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n\n      if (!isValid) {\n        throw new Error(\"verifique a senha.\");\n      }\n\n      return user;\n    }\n\n  })]\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0Qk0sRUFBQUEsSUFBSSxFQUFFLHVCQURnQjtBQUV0QkMsRUFBQUEsTUFBTSxFQUFFQyxZQUZjO0FBR3RCRyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsR0FBRyxFQUFFO0FBREUsR0FIYTtBQU90QkMsRUFBQUEsU0FBUyxFQUFFLENBQ1RYLHNFQUFtQixDQUFDO0FBQ2xCLFVBQU1ZLFNBQU4sQ0FBZ0JDLFdBQWhCLEVBQTZCO0FBQzNCLFlBQU1DLE1BQU0sR0FBRyxNQUFNWixvREFBckI7QUFDQSxZQUFNYSxlQUFlLEdBQUdELE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLE1BQVYsRUFBa0JDLFVBQWxCLENBQTZCLFVBQTdCLENBQXhCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLE1BQU1ILGVBQWUsQ0FBQ0ksT0FBaEIsQ0FBd0I7QUFDekNDLFFBQUFBLEtBQUssRUFBRVAsV0FBVyxDQUFDTztBQURzQixPQUF4QixDQUFuQjs7QUFJQSxVQUFJLENBQUNGLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSUcsS0FBSixDQUFVLHFCQUFWLENBQU47QUFDRDs7QUFFRCxZQUFNQyxPQUFPLEdBQUcsTUFBTXJCLHlEQUFjLENBQ2xDWSxXQUFXLENBQUNVLFFBRHNCLEVBRWxDTCxJQUFJLENBQUNLLFFBRjZCLENBQXBDOztBQUtBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osY0FBTSxJQUFJRCxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEOztBQUVELGFBQU9ILElBQVA7QUFDRDs7QUF0QmlCLEdBQUQsQ0FEVjtBQVBXLENBQUQsQ0FBdkIsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBzZXRFbmNyeXB0ZWRDb29raWUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBzaXRlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VDUkVULFxyXG4gIHNlc3Npb246IHtcclxuICAgIGp3dDogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYihcImFuamVcIikuY29sbGVjdGlvbihcInVzdWFyaW9zXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXN1YXJpbyBuw6NvIGV4aXN0ZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoXHJcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgICAgIHVzZXIucGFzc3dvcmRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZlcmlmaXF1ZSBhIHNlbmhhLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInVzZUVmZmVjdCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJ2ZXJpZnlQYXNzd29yZCIsImNsaWVudFByb21pc2UiLCJzZXRFbmNyeXB0ZWRDb29raWUiLCJzaXRlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFQ1JFVCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsInVzZXJzQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJFcnJvciIsImlzVmFsaWQiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();