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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./database/conn.js":
/*!**************************!*\
  !*** ./database/conn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        if (connection.readyState == 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZLEdBQUcsVUFBWTtJQUMvQixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxVQUFVLEdBQUUsR0FBRyxNQUFNRix1REFBZ0IsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztRQUVwRSxJQUFJSixVQUFVLENBQUNLLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDOUIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ2QsT0FBT0YsT0FBTyxDQUFDRyxNQUFNLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVULFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1jcmVkZW50aWFscy8uL2RhdGFiYXNlL2Nvbm4uanM/ZWM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ28gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG5cclxuICAgIGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/conn.js\n");

/***/ }),

/***/ "(api)/./model/Schema.js":
/*!*************************!*\
  !*** ./model/Schema.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: String,\n    email: String,\n    password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9TY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLFVBQVUsR0FBRyxJQUFJSCw0Q0FBTSxDQUFDO0lBQzVCSSxRQUFRLEVBQUVDLE1BQU07SUFDaEJDLEtBQUssRUFBRUQsTUFBTTtJQUNiRSxRQUFRLEVBQUVGLE1BQU07Q0FDakIsQ0FBQztBQUVGLE1BQU1HLEtBQUssR0FBR04saURBQVcsSUFBSUQsK0NBQUssQ0FBQyxNQUFNLEVBQUVFLFVBQVUsQ0FBQztBQUV0RCxpRUFBZUssS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLWNyZWRlbnRpYWxzLy4vbW9kZWwvU2NoZW1hLmpzP2E2YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogU3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlcnMgPSBtb2RlbHMudXNlciB8fCBtb2RlbChcInVzZXJcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwidXNlclNjaGVtYSIsInVzZXJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwYXNzd29yZCIsIlVzZXJzIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./model/Schema.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/conn */ \"(api)/./database/conn.js\");\n/* harmony import */ var _model_Schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/Schema */ \"(api)/./model/Schema.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // Google Provider\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                (0,_database_conn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().catch((error)=>{\n                    error: \"Connection Failed...!\";\n                });\n                // check user existance\n                const result = await _model_Schema__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    throw new Error(\"No user Found with Email Please Sign Up...!\");\n                }\n                // compare()\n                const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_6__.compare)(credentials.password, result.password);\n                // incorrect password\n                if (!checkPassword || result.email !== credentials.email) {\n                    throw new Error(\"Username or Password doesn't match\");\n                }\n                return result;\n            }\n        }), \n    ],\n    secret: \"Hjnhe55czjLLG9KRZkDojpvMUR55wQ/63i+tdgmzFTg=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUNVO0FBQ2hCO0FBQ1I7QUFDUDtBQUVuQyxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0Qk8sU0FBUyxFQUFFO1FBQ1Qsa0JBQWtCO1FBQ2xCTixpRUFBYyxDQUFDO1lBQ2JPLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQy9DLENBQUM7UUFDRlgsaUVBQWMsQ0FBQztZQUNiTSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxTQUFTO1lBQy9CRixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhO1NBQ3hDLENBQUM7UUFDRlosc0VBQW1CLENBQUM7WUFDbEJhLElBQUksRUFBRSxhQUFhO1lBQ25CLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFQyxHQUFHLEVBQUU7Z0JBQ2hDZiwwREFBWSxFQUFFLENBQUNnQixLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO29CQUM5QkEsS0FBSyxFQUFFLHVCQUF1QixDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFFSCx1QkFBdUI7Z0JBQ3ZCLE1BQU1DLE1BQU0sR0FBRyxNQUFNakIsNkRBQWEsQ0FBQztvQkFBRW1CLEtBQUssRUFBRU4sV0FBVyxDQUFDTSxLQUFLO2lCQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNYLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRUQsWUFBWTtnQkFDWixNQUFNQyxhQUFhLEdBQUcsTUFBTXBCLGlEQUFPLENBQ2pDWSxXQUFXLENBQUNTLFFBQVEsRUFDcEJMLE1BQU0sQ0FBQ0ssUUFBUSxDQUNoQjtnQkFFRCxxQkFBcUI7Z0JBQ3JCLElBQUksQ0FBQ0QsYUFBYSxJQUFJSixNQUFNLENBQUNFLEtBQUssS0FBS04sV0FBVyxDQUFDTSxLQUFLLEVBQUU7b0JBQ3hELE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsT0FBT0gsTUFBTSxDQUFDO1lBQ2hCLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFDRE0sTUFBTSxFQUFFLDhDQUE4QztDQUN2RCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtY3JlZGVudGlhbHMvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL2Nvbm5cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi8uLi9tb2RlbC9TY2hlbWFcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gR29vZ2xlIFByb3ZpZGVyXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICBjb25uZWN0TW9uZ28oKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGVycm9yOiBcIkNvbm5lY3Rpb24gRmFpbGVkLi4uIVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB1c2VyIGV4aXN0YW5jZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgRm91bmQgd2l0aCBFbWFpbCBQbGVhc2UgU2lnbiBVcC4uLiFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb21wYXJlKClcclxuICAgICAgICBjb25zdCBjaGVja1Bhc3N3b3JkID0gYXdhaXQgY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgcmVzdWx0LnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gaW5jb3JyZWN0IHBhc3N3b3JkXHJcbiAgICAgICAgaWYgKCFjaGVja1Bhc3N3b3JkIHx8IHJlc3VsdC5lbWFpbCAhPT0gY3JlZGVudGlhbHMuZW1haWwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXJuYW1lIG9yIFBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2hcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZWNyZXQ6IFwiSGpuaGU1NWN6akxMRzlLUlprRG9qcHZNVVI1NXdRLzYzaSt0ZGdtekZUZz1cIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdE1vbmdvIiwiVXNlcnMiLCJjb21wYXJlIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsImNhdGNoIiwiZXJyb3IiLCJyZXN1bHQiLCJmaW5kT25lIiwiZW1haWwiLCJFcnJvciIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsInNlY3JldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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