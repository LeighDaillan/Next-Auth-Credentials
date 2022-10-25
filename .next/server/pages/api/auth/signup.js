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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
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

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/conn */ \"(api)/./database/conn.js\");\n/* harmony import */ var _model_Schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/Schema */ \"(api)/./model/Schema.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    (0,_database_conn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch((error)=>res.json({\n            error: \"Connection Failed...!\"\n        }));\n    // only post method is accepted\n    if (req.method === \"POST\") {\n        if (!req.body) return res.status(404).json({\n            error: \"Don't have form data...!\"\n        });\n        const { username , email , password  } = req.body;\n        // check duplicate users\n        const checkexisting = await _model_Schema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (checkexisting) return res.status(422).json({\n            message: \"User Already Exists...!\"\n        });\n        // hash password\n        _model_Schema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            username,\n            email,\n            password: await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.hash)(password, 12)\n        }, function(err, data) {\n            if (err) return res.status(404).json({\n                err\n            });\n            res.status(201).json({\n                status: true,\n                user: data\n            });\n        });\n    } else {\n        res.status(500).json({\n            message: \"HTTP method not valid only POST Accepted\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Q7QUFDUjtBQUNWO0FBRWpCLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNMLDBEQUFZLEVBQUUsQ0FBQ00sS0FBSyxDQUFDLENBQUNDLEtBQUssR0FBS0YsR0FBRyxDQUFDRyxJQUFJLENBQUM7WUFBRUQsS0FBSyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTlFLCtCQUErQjtJQUMvQixJQUFJSCxHQUFHLENBQUNLLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDTCxHQUFHLENBQUNNLElBQUksRUFDWCxPQUFPTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO1lBQUVELEtBQUssRUFBRSwwQkFBMEI7U0FBRSxDQUFDLENBQUM7UUFDckUsTUFBTSxFQUFFSyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdWLEdBQUcsQ0FBQ00sSUFBSTtRQUU5Qyx3QkFBd0I7UUFDeEIsTUFBTUssYUFBYSxHQUFHLE1BQU1kLDZEQUFhLENBQUM7WUFBRVksS0FBSztTQUFFLENBQUM7UUFDcEQsSUFBSUUsYUFBYSxFQUNmLE9BQU9WLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7WUFBRVMsT0FBTyxFQUFFLHlCQUF5QjtTQUFFLENBQUMsQ0FBQztRQUV0RSxnQkFBZ0I7UUFDaEJoQiw0REFBWSxDQUNWO1lBQUVXLFFBQVE7WUFBRUMsS0FBSztZQUFFQyxRQUFRLEVBQUUsTUFBTVosOENBQUksQ0FBQ1ksUUFBUSxFQUFFLEVBQUUsQ0FBQztTQUFFLEVBQ3ZELFNBQVVLLEdBQUcsRUFBRUMsSUFBSSxFQUFFO1lBQ25CLElBQUlELEdBQUcsRUFBRSxPQUFPZCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFVyxHQUFHO2FBQUUsQ0FBQyxDQUFDO1lBQzlDZCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFRyxNQUFNLEVBQUUsSUFBSTtnQkFBRVUsSUFBSSxFQUFFRCxJQUFJO2FBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FDRixDQUFDO0lBQ0osT0FBTztRQUNMZixHQUFHLENBQ0FNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEgsSUFBSSxDQUFDO1lBQUVTLE9BQU8sRUFBRSwwQ0FBMEM7U0FBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtY3JlZGVudGlhbHMvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanM/YTJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9jb25uXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vLi4vLi4vbW9kZWwvU2NoZW1hXCI7XHJcbmltcG9ydCB7IGhhc2ggfSBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25uZWN0TW9uZ28oKS5jYXRjaCgoZXJyb3IpID0+IHJlcy5qc29uKHsgZXJyb3I6IFwiQ29ubmVjdGlvbiBGYWlsZWQuLi4hXCIgfSkpO1xyXG5cclxuICAvLyBvbmx5IHBvc3QgbWV0aG9kIGlzIGFjY2VwdGVkXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBpZiAoIXJlcS5ib2R5KVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJEb24ndCBoYXZlIGZvcm0gZGF0YS4uLiFcIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgLy8gY2hlY2sgZHVwbGljYXRlIHVzZXJzXHJcbiAgICBjb25zdCBjaGVja2V4aXN0aW5nID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKGNoZWNrZXhpc3RpbmcpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBBbHJlYWR5IEV4aXN0cy4uLiFcIiB9KTtcclxuXHJcbiAgICAvLyBoYXNoIHBhc3N3b3JkXHJcbiAgICBVc2Vycy5jcmVhdGUoXHJcbiAgICAgIHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZDogYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnIgfSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdGF0dXM6IHRydWUsIHVzZXI6IGRhdGEgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkhUVFAgbWV0aG9kIG5vdCB2YWxpZCBvbmx5IFBPU1QgQWNjZXB0ZWRcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nbyIsIlVzZXJzIiwiaGFzaCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjYXRjaCIsImVycm9yIiwianNvbiIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGVja2V4aXN0aW5nIiwiZmluZE9uZSIsIm1lc3NhZ2UiLCJjcmVhdGUiLCJlcnIiLCJkYXRhIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.js"));
module.exports = __webpack_exports__;

})();