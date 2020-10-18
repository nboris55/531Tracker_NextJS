webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links */ "./src/components/layout/links.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "G:\\Documents - Storage\\Nick's Documents\\Programming\\Code\\ReactJS\\531_tracker\\src\\components\\layout\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Navbar(props) {
  var name = props.name;
  var showLinks = false;

  if (!props.name) {
    showLinks = true;
  }

  showLinks = false;
  return __jsx("nav", {
    className: "flex items-center justify-between bg-gray-800 p-3 h-16 nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "font-semibold text-2xl tracking-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDumbbell"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), " 531 TRACKER")), __jsx("div", {
    className: "flex text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, showLinks ? __jsx(_links__WEBPACK_IMPORTED_MODULE_1__["AuthLinks"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 22
    }
  }) : __jsx(_links__WEBPACK_IMPORTED_MODULE_1__["NavbarName"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "flex text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "text-white space-x-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-310 hover:text-teal-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-310 hover:text-teal-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-310 hover:text-teal-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
}
_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsIm5hbWUiLCJzaG93TGlua3MiLCJmYUR1bWJiZWxsIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYUZhY2Vib29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxLQUFoQjs7QUFFQSxNQUFJLENBQUNGLEtBQUssQ0FBQ0MsSUFBWCxFQUFpQjtBQUNmQyxhQUFTLEdBQUcsSUFBWjtBQUNEOztBQUNEQSxXQUFTLEdBQUcsS0FBWjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsNERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyx1Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQyw0RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGlCQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFNBQVMsR0FBRyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFtQixNQUFDLGlEQUFEO0FBQVksUUFBSSxFQUFFRCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRC9CLENBTkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyx1SEFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFRyw0RUFBdkI7QUFBa0MsUUFBSSxFQUFDLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxhQUFTLEVBQUMsdUhBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsOEVBQXZCO0FBQW9DLFFBQUksRUFBQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQVEsYUFBUyxFQUFDLHVIQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDZFQUF2QjtBQUFtQyxRQUFJLEVBQUMsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FERixDQVRGLENBREY7QUF5QkQ7S0FsQ3VCUCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyNGRmNWE0ZmJmZDU0YjE1ZThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoTGlua3MsIE5hdmJhck5hbWUgfSBmcm9tICcuL2xpbmtzJztcclxuaW1wb3J0IHsgZmFEdW1iYmVsbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhRmFjZWJvb2ssIGZhVHdpdHRlciwgZmFJbnN0YWdyYW0gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xyXG4gIGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gIGxldCBzaG93TGlua3MgPSBmYWxzZTtcclxuXHJcbiAgaWYgKCFwcm9wcy5uYW1lKSB7XHJcbiAgICBzaG93TGlua3MgPSB0cnVlO1xyXG4gIH1cclxuICBzaG93TGlua3MgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctZ3JheS04MDAgcC0zIGgtMTYgbmF2Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtMnhsIHRyYWNraW5nLXRpZ2h0Jz5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEdW1iYmVsbH0gLz4gNTMxIFRSQUNLRVJcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB0ZXh0LXdoaXRlJz5cclxuICAgICAgICB7c2hvd0xpbmtzID8gPEF1dGhMaW5rcyAvPiA6IDxOYXZiYXJOYW1lIG5hbWU9e25hbWV9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHNwYWNlLXgtMyAnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzY2FsZS0zMTAgaG92ZXI6dGV4dC10ZWFsLTIwMCc+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSBzaXplPScyeCcgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzY2FsZS0zMTAgaG92ZXI6dGV4dC10ZWFsLTIwMCc+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19IHNpemU9JzJ4JyAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOnNjYWxlLTMxMCBob3Zlcjp0ZXh0LXRlYWwtMjAwJz5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBzaXplPScyeCcgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=