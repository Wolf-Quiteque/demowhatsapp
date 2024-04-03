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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function hashPassword(password) {\n  const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n  return isValid;\n}\nasync function auth(req, res) {\n  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n\n  if (session) {\n    res.json({\n      content: \"ok\"\n    });\n  } else {\n    res.json({\n      error: \"error\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLGVBQWVHLFlBQWYsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQzNDLFFBQU1DLGNBQWMsR0FBRyxNQUFNTCw4Q0FBSSxDQUFDSSxRQUFELEVBQVcsRUFBWCxDQUFqQztBQUNBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJGLFFBQTlCLEVBQXdDQyxjQUF4QyxFQUF3RDtBQUM3RCxRQUFNRSxPQUFPLEdBQUcsTUFBTU4saURBQU8sQ0FBQ0csUUFBRCxFQUFXQyxjQUFYLENBQTdCO0FBQ0EsU0FBT0UsT0FBUDtBQUNEO0FBRU0sZUFBZUMsSUFBZixDQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQ25DLFFBQU1DLE9BQU8sR0FBRyxNQUFNVCwyREFBVSxDQUFDO0FBQUVPLElBQUFBO0FBQUYsR0FBRCxDQUFoQzs7QUFFQSxNQUFJRSxPQUFKLEVBQWE7QUFDWEQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDUEMsTUFBQUEsT0FBTyxFQUFFO0FBREYsS0FBVDtBQUdELEdBSkQsTUFJTztBQUNMSCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUztBQUNQRSxNQUFBQSxLQUFLLEVBQUU7QUFEQSxLQUFUO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXMuanNvbih7XG4gICAgICBjb250ZW50OiBcIm9rXCIsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgZXJyb3I6IFwiZXJyb3JcIixcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiZ2V0U2Vzc2lvbiIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImlzVmFsaWQiLCJhdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImpzb24iLCJjb250ZW50IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsNEZBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDRSxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSU4sZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decrypt\": () => (/* binding */ decrypt),\n/* harmony export */   \"deleteCookie\": () => (/* binding */ deleteCookie),\n/* harmony export */   \"encrypt\": () => (/* binding */ encrypt),\n/* harmony export */   \"getDecryptedCookie\": () => (/* binding */ getDecryptedCookie),\n/* harmony export */   \"setEncryptedCookie\": () => (/* binding */ setEncryptedCookie)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst SECRET_KEY = \"your-secret-key\"; // Replace with your secret key\n\nfunction encrypt(data) {\n  const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(JSON.stringify(data), SECRET_KEY);\n  return encryptedData.toString();\n}\nfunction decrypt(encryptedText) {\n  const decryptedBytes = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(encryptedText, SECRET_KEY);\n  const decryptedData = decryptedBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8));\n  return JSON.parse(decryptedData);\n}\nfunction setEncryptedCookie(name, value) {\n  const encryptedValue = encrypt(value);\n  js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(name, encryptedValue, {\n    expires: 7\n  });\n}\nfunction deleteCookie(name) {\n  js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(name);\n}\nfunction getDecryptedCookie(name) {\n  const encryptedValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(name);\n\n  if (encryptedValue) {\n    const decryptedValue = decrypt(encryptedValue);\n    return decryptedValue;\n  }\n\n  return null;\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxVQUFVLEdBQUcsaUJBQW5CLEVBQXNDOztBQUUvQixTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUM1QixRQUFNQyxhQUFhLEdBQUdKLDREQUFBLENBQXFCTSxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUFyQixFQUEyQ0YsVUFBM0MsQ0FBdEI7QUFDQSxTQUFPRyxhQUFhLENBQUNJLFFBQWQsRUFBUDtBQUNEO0FBRU0sU0FBU0MsT0FBVCxDQUFpQkMsYUFBakIsRUFBZ0M7QUFDckMsUUFBTUMsY0FBYyxHQUFHWCw0REFBQSxDQUFxQlUsYUFBckIsRUFBb0NULFVBQXBDLENBQXZCO0FBQ0EsUUFBTVcsYUFBYSxHQUFHRCxjQUFjLENBQUNILFFBQWYsQ0FBd0JSLDJEQUF4QixDQUF0QjtBQUNBLFNBQU9NLElBQUksQ0FBQ1MsS0FBTCxDQUFXSCxhQUFYLENBQVA7QUFDRDtBQUVNLFNBQVNJLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDOUMsUUFBTUMsY0FBYyxHQUFHakIsT0FBTyxDQUFDZ0IsS0FBRCxDQUE5QjtBQUVBbkIsRUFBQUEscURBQUEsQ0FBWWtCLElBQVosRUFBa0JFLGNBQWxCLEVBQWtDO0FBQUVFLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQWxDO0FBQ0Q7QUFFTSxTQUFTQyxZQUFULENBQXNCTCxJQUF0QixFQUE0QjtBQUNqQ2xCLEVBQUFBLHdEQUFBLENBQWVrQixJQUFmO0FBQ0Q7QUFHTSxTQUFTTyxrQkFBVCxDQUE0QlAsSUFBNUIsRUFBa0M7QUFDdkMsUUFBTUUsY0FBYyxHQUFHcEIscURBQUEsQ0FBWWtCLElBQVosQ0FBdkI7O0FBQ0EsTUFBSUUsY0FBSixFQUFvQjtBQUNsQixVQUFNTyxjQUFjLEdBQUdqQixPQUFPLENBQUNVLGNBQUQsQ0FBOUI7QUFDQSxXQUFPTyxjQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9zZXNzaW9uLmpzP2ZmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IENyeXB0b0pTIGZyb20gXCJjcnlwdG8tanNcIjtcblxuY29uc3QgU0VDUkVUX0tFWSA9IFwieW91ci1zZWNyZXQta2V5XCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlY3JldCBrZXlcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHQoZGF0YSkge1xuICBjb25zdCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFNFQ1JFVF9LRVkpO1xuICByZXR1cm4gZW5jcnlwdGVkRGF0YS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdChlbmNyeXB0ZWRUZXh0KSB7XG4gIGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVGV4dCwgU0VDUkVUX0tFWSk7XG4gIGNvbnN0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0ZWRCeXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gIHJldHVybiBKU09OLnBhcnNlKGRlY3J5cHRlZERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RW5jcnlwdGVkQ29va2llKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGVuY3J5cHRlZFZhbHVlID0gZW5jcnlwdCh2YWx1ZSk7XG5cbiAgQ29va2llcy5zZXQobmFtZSwgZW5jcnlwdGVkVmFsdWUsIHsgZXhwaXJlczogNyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKSB7XG4gIENvb2tpZXMucmVtb3ZlKG5hbWUpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWNyeXB0ZWRDb29raWUobmFtZSkge1xuICBjb25zdCBlbmNyeXB0ZWRWYWx1ZSA9IENvb2tpZXMuZ2V0KG5hbWUpO1xuICBpZiAoZW5jcnlwdGVkVmFsdWUpIHtcbiAgICBjb25zdCBkZWNyeXB0ZWRWYWx1ZSA9IGRlY3J5cHQoZW5jcnlwdGVkVmFsdWUpO1xuICAgIHJldHVybiBkZWNyeXB0ZWRWYWx1ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiQ3J5cHRvSlMiLCJTRUNSRVRfS0VZIiwiZW5jcnlwdCIsImRhdGEiLCJlbmNyeXB0ZWREYXRhIiwiQUVTIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwiZGVjcnlwdCIsImVuY3J5cHRlZFRleHQiLCJkZWNyeXB0ZWRCeXRlcyIsImRlY3J5cHRlZERhdGEiLCJlbmMiLCJVdGY4IiwicGFyc2UiLCJzZXRFbmNyeXB0ZWRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJlbmNyeXB0ZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJkZWxldGVDb29raWUiLCJyZW1vdmUiLCJnZXREZWNyeXB0ZWRDb29raWUiLCJnZXQiLCJkZWNyeXB0ZWRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/session.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/session */ \"(api)/./lib/session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_5__]);\n_lib_session__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  site: \"http://localhost:3000\",\n  secret: \"shinobi777\",\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n    async authorize(credentials) {\n      const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      const usersCollection = client.db(\"anje\").collection(\"usuarios\");\n      const user = await usersCollection.findOne({\n        email: credentials.email\n      });\n\n      if (!user) {\n        throw new Error(\"usuario não existe.\");\n      }\n\n      const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n\n      if (!isValid) {\n        throw new Error(\"verifique a senha.\");\n      }\n\n      return user;\n    }\n\n  })]\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0Qk0sRUFBQUEsSUFBSSxFQUFFLHVCQURnQjtBQUV0QkMsRUFBQUEsTUFBTSxFQUFFQyxZQUZjO0FBR3RCRyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsR0FBRyxFQUFFO0FBREUsR0FIYTtBQU90QkMsRUFBQUEsU0FBUyxFQUFFLENBQ1RYLHNFQUFtQixDQUFDO0FBQ2xCLFVBQU1ZLFNBQU4sQ0FBZ0JDLFdBQWhCLEVBQTZCO0FBQzNCLFlBQU1DLE1BQU0sR0FBRyxNQUFNWixvREFBckI7QUFDQSxZQUFNYSxlQUFlLEdBQUdELE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLE1BQVYsRUFBa0JDLFVBQWxCLENBQTZCLFVBQTdCLENBQXhCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLE1BQU1ILGVBQWUsQ0FBQ0ksT0FBaEIsQ0FBd0I7QUFDekNDLFFBQUFBLEtBQUssRUFBRVAsV0FBVyxDQUFDTztBQURzQixPQUF4QixDQUFuQjs7QUFJQSxVQUFJLENBQUNGLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSUcsS0FBSixDQUFVLHFCQUFWLENBQU47QUFDRDs7QUFFRCxZQUFNQyxPQUFPLEdBQUcsTUFBTXJCLHlEQUFjLENBQ2xDWSxXQUFXLENBQUNVLFFBRHNCLEVBRWxDTCxJQUFJLENBQUNLLFFBRjZCLENBQXBDOztBQUtBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osY0FBTSxJQUFJRCxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEOztBQUVELGFBQU9ILElBQVA7QUFDRDs7QUF0QmlCLEdBQUQsQ0FEVjtBQVBXLENBQUQsQ0FBdkIsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyBzZXRFbmNyeXB0ZWRDb29raWUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nlc3Npb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzaXRlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVCxcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcblxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoXCJhbmplXCIpLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzdWFyaW8gbsOjbyBleGlzdGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2ZXJpZmlxdWUgYSBzZW5oYS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInVzZUVmZmVjdCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJ2ZXJpZnlQYXNzd29yZCIsImNsaWVudFByb21pc2UiLCJzZXRFbmNyeXB0ZWRDb29raWUiLCJzaXRlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFQ1JFVCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsInVzZXJzQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJFcnJvciIsImlzVmFsaWQiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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