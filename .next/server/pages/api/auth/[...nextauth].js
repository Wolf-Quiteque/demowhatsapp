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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n}\nasync function auth(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session) {\n        res.json({\n            content: \"ok\"\n        });\n    } else {\n        res.json({\n            error: \"error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0k7QUFDdEMsZUFBZUcsWUFBWSxDQUFDQyxRQUFRLEVBQUU7SUFDM0MsTUFBTUMsY0FBYyxHQUFHLE1BQU1MLDhDQUFJLENBQUNJLFFBQVEsRUFBRSxFQUFFLENBQUM7SUFDL0MsT0FBT0MsY0FBYyxDQUFDO0NBQ3ZCO0FBRU0sZUFBZUMsY0FBYyxDQUFDRixRQUFRLEVBQUVDLGNBQWMsRUFBRTtJQUM3RCxNQUFNRSxPQUFPLEdBQUcsTUFBTU4saURBQU8sQ0FBQ0csUUFBUSxFQUFFQyxjQUFjLENBQUM7SUFDdkQsT0FBT0UsT0FBTyxDQUFDO0NBQ2hCO0FBRU0sZUFBZUMsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuQyxNQUFNQyxPQUFPLEdBQUcsTUFBTVQsMkRBQVUsQ0FBQztRQUFFTyxHQUFHO0tBQUUsQ0FBQztJQUV6QyxJQUFJRSxPQUFPLEVBQUU7UUFDWEQsR0FBRyxDQUFDRSxJQUFJLENBQUM7WUFDUEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7S0FDSixNQUFNO1FBQ0xILEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1lBQ1BFLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXMuanNvbih7XG4gICAgICBjb250ZW50OiBcIm9rXCIsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgZXJyb3I6IFwiZXJyb3JcIixcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiZ2V0U2Vzc2lvbiIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImlzVmFsaWQiLCJhdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImpzb24iLCJjb250ZW50IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (false) {}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyw0RkFBbUM7QUFDL0MsTUFBTUcsT0FBTyxHQUFHLEVBQUU7QUFFbEIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSSxLQUFvQyxFQUFFLEVBRXpDO0FBRUQsSUFBSUwsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNJLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7S0FDL0M7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0NBQzVDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7fTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decrypt\": () => (/* binding */ decrypt),\n/* harmony export */   \"deleteCookie\": () => (/* binding */ deleteCookie),\n/* harmony export */   \"encrypt\": () => (/* binding */ encrypt),\n/* harmony export */   \"getDecryptedCookie\": () => (/* binding */ getDecryptedCookie),\n/* harmony export */   \"setEncryptedCookie\": () => (/* binding */ setEncryptedCookie)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst SECRET_KEY = \"your-secret-key\"; // Replace with your secret key\nfunction encrypt(data) {\n    const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(JSON.stringify(data), SECRET_KEY);\n    return encryptedData.toString();\n}\nfunction decrypt(encryptedText) {\n    const decryptedBytes = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(encryptedText, SECRET_KEY);\n    const decryptedData = decryptedBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8));\n    return JSON.parse(decryptedData);\n}\nfunction setEncryptedCookie(name, value) {\n    const encryptedValue = encrypt(value);\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(name, encryptedValue, {\n        expires: 7\n    });\n}\nfunction deleteCookie(name) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(name);\n}\nfunction getDecryptedCookie(name) {\n    const encryptedValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(name);\n    if (encryptedValue) {\n        const decryptedValue = decrypt(encryptedValue);\n        return decryptedValue;\n    }\n    return null;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBRWpDLE1BQU1FLFVBQVUsR0FBRyxpQkFBaUIsRUFBRSwrQkFBK0I7QUFFOUQsU0FBU0MsT0FBTyxDQUFDQyxJQUFJLEVBQUU7SUFDNUIsTUFBTUMsYUFBYSxHQUFHSiw0REFBb0IsQ0FBQ00sSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQyxFQUFFRixVQUFVLENBQUM7SUFDNUUsT0FBT0csYUFBYSxDQUFDSSxRQUFRLEVBQUUsQ0FBQztDQUNqQztBQUVNLFNBQVNDLE9BQU8sQ0FBQ0MsYUFBYSxFQUFFO0lBQ3JDLE1BQU1DLGNBQWMsR0FBR1gsNERBQW9CLENBQUNVLGFBQWEsRUFBRVQsVUFBVSxDQUFDO0lBQ3RFLE1BQU1XLGFBQWEsR0FBR0QsY0FBYyxDQUFDSCxRQUFRLENBQUNSLDJEQUFpQixDQUFDO0lBQ2hFLE9BQU9NLElBQUksQ0FBQ1MsS0FBSyxDQUFDSCxhQUFhLENBQUMsQ0FBQztDQUNsQztBQUVNLFNBQVNJLGtCQUFrQixDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtJQUM5QyxNQUFNQyxjQUFjLEdBQUdqQixPQUFPLENBQUNnQixLQUFLLENBQUM7SUFFckNuQixxREFBVyxDQUFDa0IsSUFBSSxFQUFFRSxjQUFjLEVBQUU7UUFBRUUsT0FBTyxFQUFFLENBQUM7S0FBRSxDQUFDLENBQUM7Q0FDbkQ7QUFFTSxTQUFTQyxZQUFZLENBQUNMLElBQUksRUFBRTtJQUNqQ2xCLHdEQUFjLENBQUNrQixJQUFJLENBQUMsQ0FBQztDQUN0QjtBQUdNLFNBQVNPLGtCQUFrQixDQUFDUCxJQUFJLEVBQUU7SUFDdkMsTUFBTUUsY0FBYyxHQUFHcEIscURBQVcsQ0FBQ2tCLElBQUksQ0FBQztJQUN4QyxJQUFJRSxjQUFjLEVBQUU7UUFDbEIsTUFBTU8sY0FBYyxHQUFHakIsT0FBTyxDQUFDVSxjQUFjLENBQUM7UUFDOUMsT0FBT08sY0FBYyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9zZXNzaW9uLmpzP2ZmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IENyeXB0b0pTIGZyb20gXCJjcnlwdG8tanNcIjtcblxuY29uc3QgU0VDUkVUX0tFWSA9IFwieW91ci1zZWNyZXQta2V5XCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlY3JldCBrZXlcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHQoZGF0YSkge1xuICBjb25zdCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFNFQ1JFVF9LRVkpO1xuICByZXR1cm4gZW5jcnlwdGVkRGF0YS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdChlbmNyeXB0ZWRUZXh0KSB7XG4gIGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVGV4dCwgU0VDUkVUX0tFWSk7XG4gIGNvbnN0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0ZWRCeXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gIHJldHVybiBKU09OLnBhcnNlKGRlY3J5cHRlZERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RW5jcnlwdGVkQ29va2llKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGVuY3J5cHRlZFZhbHVlID0gZW5jcnlwdCh2YWx1ZSk7XG5cbiAgQ29va2llcy5zZXQobmFtZSwgZW5jcnlwdGVkVmFsdWUsIHsgZXhwaXJlczogNyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKSB7XG4gIENvb2tpZXMucmVtb3ZlKG5hbWUpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWNyeXB0ZWRDb29raWUobmFtZSkge1xuICBjb25zdCBlbmNyeXB0ZWRWYWx1ZSA9IENvb2tpZXMuZ2V0KG5hbWUpO1xuICBpZiAoZW5jcnlwdGVkVmFsdWUpIHtcbiAgICBjb25zdCBkZWNyeXB0ZWRWYWx1ZSA9IGRlY3J5cHQoZW5jcnlwdGVkVmFsdWUpO1xuICAgIHJldHVybiBkZWNyeXB0ZWRWYWx1ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiQ3J5cHRvSlMiLCJTRUNSRVRfS0VZIiwiZW5jcnlwdCIsImRhdGEiLCJlbmNyeXB0ZWREYXRhIiwiQUVTIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwiZGVjcnlwdCIsImVuY3J5cHRlZFRleHQiLCJkZWNyeXB0ZWRCeXRlcyIsImRlY3J5cHRlZERhdGEiLCJlbmMiLCJVdGY4IiwicGFyc2UiLCJzZXRFbmNyeXB0ZWRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJlbmNyeXB0ZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJkZWxldGVDb29raWUiLCJyZW1vdmUiLCJnZXREZWNyeXB0ZWRDb29raWUiLCJnZXQiLCJkZWNyeXB0ZWRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/session.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/session */ \"(api)/./lib/session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_5__]);\n_lib_session__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    site: \"http://localhost:3000\",\n    secret: \"shinobi777\",\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            async authorize (credentials) {\n                const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n                const usersCollection = client.db(\"anje\").collection(\"usuarios\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"usuario n\\xe3o existe.\");\n                }\n                const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"verifique a senha.\");\n                }\n                return user;\n            }\n        }), \n    ]\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDQztBQUVnQztBQUNmO0FBQ0Y7QUFDUztBQUUxRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0Qk0sSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsTUFBTSxFQUFFQyxZQUE4QjtJQUN0Q0csT0FBTyxFQUFFO1FBQ1BDLEdBQUcsRUFBRSxJQUFJO0tBQ1Y7SUFFREMsU0FBUyxFQUFFO1FBQ1RYLHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1ZLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixNQUFNQyxNQUFNLEdBQUcsTUFBTVosb0RBQWE7Z0JBQ2xDLE1BQU1hLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUNDLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hFLE1BQU1DLElBQUksR0FBRyxNQUFNSCxlQUFlLENBQUNJLE9BQU8sQ0FBQztvQkFDekNDLEtBQUssRUFBRVAsV0FBVyxDQUFDTyxLQUFLO2lCQUN6QixDQUFDO2dCQUVGLElBQUksQ0FBQ0YsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUFxQixDQUFDLENBQUM7aUJBQ3hDO2dCQUVELE1BQU1DLE9BQU8sR0FBRyxNQUFNckIseURBQWMsQ0FDbENZLFdBQVcsQ0FBQ1UsUUFBUSxFQUNwQkwsSUFBSSxDQUFDSyxRQUFRLENBQ2Q7Z0JBRUQsSUFBSSxDQUFDRCxPQUFPLEVBQUU7b0JBQ1osTUFBTSxJQUFJRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztpQkFDdkM7Z0JBRUQsT0FBT0gsSUFBSSxDQUFDO2FBQ2I7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IHsgc2V0RW5jcnlwdGVkQ29va2llIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2l0ZTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRUNSRVQsXG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWUsXG4gIH0sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKFwiYW5qZVwiKS5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIik7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c3VhcmlvIG7Do28gZXhpc3RlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlQYXNzd29yZChcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmVyaWZpcXVlIGEgc2VuaGEuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJ1c2VFZmZlY3QiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidmVyaWZ5UGFzc3dvcmQiLCJjbGllbnRQcm9taXNlIiwic2V0RW5jcnlwdGVkQ29va2llIiwic2l0ZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRUNSRVQiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiRXJyb3IiLCJpc1ZhbGlkIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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