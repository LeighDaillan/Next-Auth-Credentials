"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/navbar.js":
/*!*************************************!*\
  !*** ./components/layout/navbar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar Navbar = function Navbar() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data, status = ref.status;\n    var ref1 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), push = ref1.push, asPath = ref1.asPath;\n    var handleSignout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                                redirect: false,\n                                callbackUrl: \"/\"\n                            })\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        push(data.url);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSignout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSignin = function handleSignin() {\n        push(\"/authentication/signin?callbackUrl=\".concat(asPath));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"text-center font-bold bg-slate-700 grid grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-self-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Next-Auth\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" py-2 justify-self-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-between text-xl text-white \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/authentication\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"HOME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/authentication/dashboard\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"DASHBOARD\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/authentication/news\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"NEWS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/authentication/blogs\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"BLOGS SECTION\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        status === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSignin,\n                                children: \"SIGN IN\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSignout,\n                                children: \"SIGN OUT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\next-auth-credentials\\\\Next-Auth-Credentials\\\\components\\\\layout\\\\navbar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Navbar, \"ChTXaGGEAfrQoM5KZnTUi7gBteI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBekRLTixNQUFNOztRQUN3QkYsdURBQVU7UUFDbkJDLGtEQUFTOzs7QUFGOUJDLEtBQUFBLE1BQU07QUEyRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIuanM/ZWJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgeyBwdXNoLCBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWdub3V0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UsIGNhbGxiYWNrVXJsOiBcIi9cIiB9KTtcclxuXHJcbiAgICBwdXNoKGRhdGEudXJsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWduaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwdXNoKGAvYXV0aGVudGljYXRpb24vc2lnbmluP2NhbGxiYWNrVXJsPSR7YXNQYXRofWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBiZy1zbGF0ZS03MDAgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1zdGFydFwiPlxyXG4gICAgICAgIDxzcGFuPk5leHQtQXV0aDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB5LTIganVzdGlmeS1zZWxmLWVuZFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhsIHRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgICAgICAgICA8YT5IT01FPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTUgcHktMlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhlbnRpY2F0aW9uL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxhPkRBU0hCT0FSRDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoZW50aWNhdGlvbi9uZXdzXCI+XHJcbiAgICAgICAgICAgICAgPGE+TkVXUzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoZW50aWNhdGlvbi9ibG9nc1wiPlxyXG4gICAgICAgICAgICAgIDxhPkJMT0dTIFNFQ1RJT048L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25pbn0+U0lHTiBJTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25vdXR9PlNJR04gT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIk5hdmJhciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicHVzaCIsImFzUGF0aCIsImhhbmRsZVNpZ25vdXQiLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwidXJsIiwiaGFuZGxlU2lnbmluIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsInVsIiwibGkiLCJocmVmIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/navbar.js\n"));

/***/ })

});