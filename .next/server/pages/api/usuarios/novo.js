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
exports.id = "pages/api/usuarios/novo";
exports.ids = ["pages/api/usuarios/novo"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUVsQixJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztDQUM1RDtBQUVELElBQUlOLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JKLE1BQU0sR0FBRyxJQUFJTixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDSSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU8sRUFBRSxDQUFDO0tBQy9DO0lBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQztDQUM1QyxNQUFNLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/novo.js":
/*!************************************!*\
  !*** ./pages/api/usuarios/novo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return;\n    }\n    const data = req.body;\n    const { email , cargo , nome  } = data;\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    const db = client.db(\"aef\");\n    const existingUser = await db.collection(\"usuarios\").findOne({\n        email: email\n    });\n    if (existingUser) {\n        res.status(422).json({\n            message: \"usuarioexiste\"\n        });\n        return;\n    }\n    const userpassword = \"demo2023\";\n    const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.hashPassword)(userpassword);\n    const response = await db.collection(\"usuarios\").insertOne({\n        email: email,\n        password: hashedPassword,\n        cargo: cargo,\n        nome: nome\n    });\n    res.status(200).json(response);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3Mvbm92by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDQTtBQUVqRCxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPO0tBQ1I7SUFFRCxNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUVyQixNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBR0osSUFBSTtJQUVuQyxNQUFNSyxNQUFNLEdBQUcsTUFBTVYsb0RBQWE7SUFFbEMsTUFBTVcsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFFM0IsTUFBTUMsWUFBWSxHQUFHLE1BQU1ELEVBQUUsQ0FDMUJFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdEJDLE9BQU8sQ0FBQztRQUFFUCxLQUFLLEVBQUVBLEtBQUs7S0FBRSxDQUFDO0lBRTVCLElBQUlLLFlBQVksRUFBRTtRQUNoQlQsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsZUFBZTtTQUFFLENBQUMsQ0FBQztRQUNuRCxPQUFPO0tBQ1I7SUFFRCxNQUFNQyxZQUFZLEdBQUcsVUFBVTtJQUMvQixNQUFNQyxjQUFjLEdBQUcsTUFBTXBCLHVEQUFZLENBQUNtQixZQUFZLENBQUM7SUFFdkQsTUFBTUUsUUFBUSxHQUFHLE1BQU1ULEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDUSxTQUFTLENBQUM7UUFDekRkLEtBQUssRUFBRUEsS0FBSztRQUNaZSxRQUFRLEVBQUVILGNBQWM7UUFDeEJYLEtBQUssRUFBRUEsS0FBSztRQUNaQyxJQUFJLEVBQUVBLElBQUk7S0FDWCxDQUFDO0lBRUZOLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0NBQ2hDO0FBRUQsaUVBQWVuQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpb3Mvbm92by5qcz9hM2I0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHsgZW1haWwsIGNhcmdvLCBub21lIH0gPSBkYXRhO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJhZWZcIik7XG5cbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcInVzdWFyaW9zXCIpXG4gICAgLmZpbmRPbmUoeyBlbWFpbDogZW1haWwgfSk7XG5cbiAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJ1c3VhcmlvZXhpc3RlXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXNlcnBhc3N3b3JkID0gXCJkZW1vMjAyM1wiO1xuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZCh1c2VycGFzc3dvcmQpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzdWFyaW9zXCIpLmluc2VydE9uZSh7XG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICBjYXJnbzogY2FyZ28sXG4gICAgbm9tZTogbm9tZSxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsImNhcmdvIiwibm9tZSIsImNsaWVudCIsImRiIiwiZXhpc3RpbmdVc2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwicmVzcG9uc2UiLCJpbnNlcnRPbmUiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/novo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/novo.js"));
module.exports = __webpack_exports__;

})();