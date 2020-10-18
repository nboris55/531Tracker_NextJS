webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Navbar */ "./src/components/layout/Navbar.js");
var _jsxFileName = "G:\\Documents - Storage\\Nick's Documents\\Programming\\Code\\ReactJS\\531_tracker\\src\\pages\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), ' ', __jsx("div", {
    "class": "w-full max-w-6xl m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h1", {
    "class": "text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Dashboard - Welcome John Doe")), __jsx("div", {
    "class": "w-full my-auto mt-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("ul", {
    "class": "flex border-b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("li", {
    "class": "-mb-px mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    "class": "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Week at a glance")), __jsx("li", {
    "class": "mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("a", {
    "class": "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Daily routine")), __jsx("li", {
    "class": "mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("a", {
    "class": "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Progress Chart")))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUNhLEdBRGIsRUFFRTtBQUFLLGFBQU0seUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBTSxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsQ0FGRixFQUtFO0FBQUssYUFBTSxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFNLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBTSxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQU0sa0dBRFI7QUFFRSxRQUFJLEVBQUMsR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsRUFTRTtBQUFJLGFBQU0sTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFNLGlGQURSO0FBRUUsUUFBSSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQVRGLEVBaUJFO0FBQUksYUFBTSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQU0saUZBRFI7QUFFRSxRQUFJLEVBQUMsR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBakJGLENBREYsQ0FMRixDQURGO0FBZ0hEO0tBakh1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuOTNiYWQ2ZmMxMmRmZTVlNjEzZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIgLz57JyAnfVxyXG4gICAgICA8ZGl2IGNsYXNzPSd3LWZ1bGwgbWF4LXctNnhsIG0tYXV0byc+XHJcbiAgICAgICAgPGgxIGNsYXNzPSd0ZXh0LTZ4bCc+RGFzaGJvYXJkIC0gV2VsY29tZSBKb2huIERvZTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSd3LWZ1bGwgbXktYXV0byBtdC0xNic+XHJcbiAgICAgICAgPHVsIGNsYXNzPSdmbGV4IGJvcmRlci1iJz5cclxuICAgICAgICAgIDxsaSBjbGFzcz0nLW1iLXB4IG1yLTEnPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPSdiZy13aGl0ZSBpbmxpbmUtYmxvY2sgYm9yZGVyLWwgYm9yZGVyLXQgYm9yZGVyLXIgcm91bmRlZC10IHB5LTIgcHgtNCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQnXHJcbiAgICAgICAgICAgICAgaHJlZj0nIydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWsgYXQgYSBnbGFuY2VcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz0nbXItMSc+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9J2JnLXdoaXRlIGlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGQnXHJcbiAgICAgICAgICAgICAgaHJlZj0nIydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhaWx5IHJvdXRpbmVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz0nbXItMSc+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9J2JnLXdoaXRlIGlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGQnXHJcbiAgICAgICAgICAgICAgaHJlZj0nIydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFByb2dyZXNzIENoYXJ0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8dGFibGUgY2xhc3M9J3RhYmxlJz5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz0nbGlmdC1oZHInPkxpZnQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UmVwIE1heDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UcmFpbmluZyBNYXg8L3RoPlxyXG4gICAgICAgICAgICA8dGg+NjUlPC90aD5cclxuICAgICAgICAgICAgPHRoPjc1JTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD44NSU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+NzAlPC90aD5cclxuICAgICAgICAgICAgPHRoPjgwJTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD45MCU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+NzUlPC90aD5cclxuICAgICAgICAgICAgPHRoPjg1JTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD45NSU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPSdsaWZ0LWhkcic+QmVuY2g8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjI1PC90ZD5cclxuICAgICAgICAgICAgPHRkPjIwMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yMDA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjAwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjIwMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yMDA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjAwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjIwMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yMDA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjAwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjIwMDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9J2xpZnQtaGRyJz5PdmVyaGVhZCBQcmVzczwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4xMzU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MTIwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjEyMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4xMjA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MTIwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjEyMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4xMjA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MTIwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjEyMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4xMjA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MTIwPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz0nbGlmdC1oZHInPlNxdWF0PC90ZD5cclxuICAgICAgICAgICAgPHRkPjMxNTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yODA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjgwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjI4MDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yODA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjgwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjI4MDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yODA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MjgwPC90ZD5cclxuICAgICAgICAgICAgPHRkPjI4MDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4yODA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPSdsaWZ0LWhkcic+RGVhZGxpZnQ8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+NDA1PC90ZD5cclxuICAgICAgICAgICAgPHRkPjM2NTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4zNjU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MzY1PC90ZD5cclxuICAgICAgICAgICAgPHRkPjM2NTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4zNjU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MzY1PC90ZD5cclxuICAgICAgICAgICAgPHRkPjM2NTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4zNjU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+MzY1PC90ZD5cclxuICAgICAgICAgICAgPHRkPjM2NTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+ICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=