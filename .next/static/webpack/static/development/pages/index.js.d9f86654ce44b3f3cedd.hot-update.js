webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: StickyNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StickyNavigation\", function() { return StickyNavigation; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./components/Navigation/style.tsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/georgemaine/Sites/georgemaine/components/Navigation/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n // Declare Props\n\n// Create Function\nfunction StickyNavigation(_ref) {\n  var _this = this;\n\n  var list = _ref.list,\n      _onClick = _ref.onClick,\n      active = _ref.active;\n  var convertedActive = active >= 1 && active <= 4 ? 1 : active === 5 ? 2 : active === 6 ? 3 : active;\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_0__[\"StickyNav\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_0__[\"StickyNavList\"], {\n    whileHover: {\n      backgroundColor: \"#f7f7f7\"\n    },\n    whileTap: {\n      backgroundColor: \"#e5e5e5\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, list.map(function (ListItem, index) {\n    return __jsx(\"li\", {\n      key: index,\n      onClick: function onClick() {\n        return _onClick(index === 2 ? 5 : index === 3 ? 6 : index);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      style: {\n        opacity: index != convertedActive && 0.6\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }, ListItem));\n  })));\n}\n_c = StickyNavigation;\n\nvar _c;\n\n$RefreshReg$(_c, \"StickyNavigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4PzgxYzEiXSwibmFtZXMiOlsiU3RpY2t5TmF2aWdhdGlvbiIsImxpc3QiLCJvbkNsaWNrIiwiYWN0aXZlIiwiY29udmVydGVkQWN0aXZlIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiTGlzdEl0ZW0iLCJpbmRleCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBOztBQVVBO0FBQ08sU0FBU0EsZ0JBQVQsT0FLWTtBQUFBOztBQUFBLE1BSmpCQyxJQUlpQixRQUpqQkEsSUFJaUI7QUFBQSxNQUZqQkMsUUFFaUIsUUFGakJBLE9BRWlCO0FBQUEsTUFEakJDLE1BQ2lCLFFBRGpCQSxNQUNpQjtBQUNqQixNQUFNQyxlQUFlLEdBQ25CRCxNQUFNLElBQUksQ0FBVixJQUFlQSxNQUFNLElBQUksQ0FBekIsR0FDSSxDQURKLEdBRUlBLE1BQU0sS0FBSyxDQUFYLEdBQ0EsQ0FEQSxHQUVBQSxNQUFNLEtBQUssQ0FBWCxHQUNBLENBREEsR0FFQUEsTUFQTjtBQVNBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLGNBQVUsRUFBRTtBQUFFRSxxQkFBZSxFQUFFO0FBQW5CLEtBRGQ7QUFFRSxZQUFRLEVBQUU7QUFBRUEscUJBQWUsRUFBRTtBQUFuQixLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQzdCLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNTixRQUFPLENBQUNNLEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCQSxLQUFyQyxDQUFiO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyw4Q0FBRDtBQUFRLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUVELEtBQUssSUFBSUosZUFBVCxJQUE0QjtBQUF2QyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csUUFESCxDQUpGLENBREY7QUFVRCxHQVhBLENBSkgsQ0FERixDQURGO0FBcUJEO0tBcENlUCxnQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGlja3lOYXZMaXN0LCBTdGlja3lOYXYgfSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBSZWRCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIERlY2xhcmUgUHJvcHNcbmludGVyZmFjZSBTdGlja3lOYXZQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBsaXN0OiBzdHJpbmdbXTtcbiAgYnV0dG9uOiBzdHJpbmc7XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICBhY3RpdmU6IG51bWJlcjtcbn1cblxuLy8gQ3JlYXRlIEZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gU3RpY2t5TmF2aWdhdGlvbih7XG4gIGxpc3QsXG5cbiAgb25DbGljayxcbiAgYWN0aXZlLFxufTogU3RpY2t5TmF2UHJvcHMpIHtcbiAgY29uc3QgY29udmVydGVkQWN0aXZlID1cbiAgICBhY3RpdmUgPj0gMSAmJiBhY3RpdmUgPD0gNFxuICAgICAgPyAxXG4gICAgICA6IGFjdGl2ZSA9PT0gNVxuICAgICAgPyAyXG4gICAgICA6IGFjdGl2ZSA9PT0gNlxuICAgICAgPyAzXG4gICAgICA6IGFjdGl2ZTtcblxuICByZXR1cm4gKFxuICAgIDxTdGlja3lOYXY+XG4gICAgICA8U3RpY2t5TmF2TGlzdFxuICAgICAgICB3aGlsZUhvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjdmN2Y3XCIgfX1cbiAgICAgICAgd2hpbGVUYXA9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNlNWU1ZTVcIiB9fVxuICAgICAgPlxuICAgICAgICB7bGlzdC5tYXAoKExpc3RJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhpbmRleCA9PT0gMiA/IDUgOiBpbmRleCA9PT0gMyA/IDYgOiBpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgb3BhY2l0eTogaW5kZXggIT0gY29udmVydGVkQWN0aXZlICYmIDAuNiB9fT5cbiAgICAgICAgICAgICAgICB7TGlzdEl0ZW19XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3RpY2t5TmF2TGlzdD5cbiAgICA8L1N0aWNreU5hdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})