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
exports.id = "pages/api/usuarios/novomembro";
exports.ids = ["pages/api/usuarios/novomembro"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function hashPassword(password) {\n  const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n  return isValid;\n}\nasync function auth(req, res) {\n  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n\n  if (session) {\n    res.json({\n      content: \"ok\"\n    });\n  } else {\n    res.json({\n      error: \"error\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLGVBQWVHLFlBQWYsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQzNDLFFBQU1DLGNBQWMsR0FBRyxNQUFNTCw4Q0FBSSxDQUFDSSxRQUFELEVBQVcsRUFBWCxDQUFqQztBQUNBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJGLFFBQTlCLEVBQXdDQyxjQUF4QyxFQUF3RDtBQUM3RCxRQUFNRSxPQUFPLEdBQUcsTUFBTU4saURBQU8sQ0FBQ0csUUFBRCxFQUFXQyxjQUFYLENBQTdCO0FBQ0EsU0FBT0UsT0FBUDtBQUNEO0FBRU0sZUFBZUMsSUFBZixDQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQ25DLFFBQU1DLE9BQU8sR0FBRyxNQUFNVCwyREFBVSxDQUFDO0FBQUVPLElBQUFBO0FBQUYsR0FBRCxDQUFoQzs7QUFFQSxNQUFJRSxPQUFKLEVBQWE7QUFDWEQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDUEMsTUFBQUEsT0FBTyxFQUFFO0FBREYsS0FBVDtBQUdELEdBSkQsTUFJTztBQUNMSCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUztBQUNQRSxNQUFBQSxLQUFLLEVBQUU7QUFEQSxLQUFUO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XHJcbiAgcmV0dXJuIGhhc2hlZFBhc3N3b3JkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcclxuICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgaWYgKHNlc3Npb24pIHtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgY29udGVudDogXCJva1wiLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiZXJyb3JcIixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJnZXRTZXNzaW9uIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiaXNWYWxpZCIsImF1dGgiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwianNvbiIsImNvbnRlbnQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsNEZBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDRSxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSU4sZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/novomembro.js":
/*!******************************************!*\
  !*** ./pages/api/usuarios/novomembro.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n\n\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  var data = req.body;\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const newpassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(data.password);\n  data.password = newpassword;\n  const db = client.db(\"anje\");\n  const existingUser = await db.collection(\"usuarios\").findOne({\n    email: data.email\n  });\n\n  if (existingUser) {\n    res.status(422).json({\n      message: \"Email já existe\"\n    });\n    return;\n  }\n\n  try {\n    await db.collection(\"usuarios\").insertOne(data);\n    res.status(200).json({\n      message: \"success\"\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(422).json({\n      message: \"Houve um erro!\"\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3Mvbm92b21lbWJyby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELE1BQUlDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1SLG9EQUFyQjtBQUdBLFFBQU1TLFdBQVcsR0FBRyxNQUFNUix1REFBWSxDQUFDSyxJQUFJLENBQUNJLFFBQU4sQ0FBdEM7QUFDQUosRUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCRCxXQUFoQjtBQUNBLFFBQU1FLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLENBQVUsTUFBVixDQUFYO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1ELEVBQUUsQ0FDMUJFLFVBRHdCLENBQ2IsVUFEYSxFQUV4QkMsT0FGd0IsQ0FFaEI7QUFBRUMsSUFBQUEsS0FBSyxFQUFFVCxJQUFJLENBQUNTO0FBQWQsR0FGZ0IsQ0FBM0I7O0FBSUEsTUFBSUgsWUFBSixFQUFrQjtBQUNoQlIsSUFBQUEsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUNELE1BQUk7QUFDRixVQUFNUCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxVQUFkLEVBQTBCTSxTQUExQixDQUFvQ2IsSUFBcEMsQ0FBTjtBQUNBRixJQUFBQSxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxpRUFBZWhCLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpb3Mvbm92b21lbWJyby5qcz8xMWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciBkYXRhID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbiBcclxuICBjb25zdCBuZXdwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChkYXRhLnBhc3N3b3JkKTtcclxuICBkYXRhLnBhc3N3b3JkID0gbmV3cGFzc3dvcmRcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihcImFuamVcIik7XHJcbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIilcclxuICAgIC5maW5kT25lKHsgZW1haWw6IGRhdGEuZW1haWwgfSk7XHJcblxyXG4gIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJFbWFpbCBqw6EgZXhpc3RlXCIgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIikuaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkhvdXZlIHVtIGVycm8hXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhc2hQYXNzd29yZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIm5ld3Bhc3N3b3JkIiwicGFzc3dvcmQiLCJkYiIsImV4aXN0aW5nVXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImluc2VydE9uZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/novomembro.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/novomembro.js"));
module.exports = __webpack_exports__;

})();