webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: StickyNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StickyNavigation\", function() { return StickyNavigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./components/Navigation/style.tsx\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Typography */ \"./components/Typography/index.tsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.tsx\");\nvar _jsxFileName = \"/Users/georgemaine/Sites/georgemaine/components/Navigation/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // Declare Props\n\n// Create Function\nfunction StickyNavigation(_ref) {\n  var _this = this;\n\n  var name = _ref.name,\n      role = _ref.role,\n      list = _ref.list,\n      button = _ref.button,\n      _onClick = _ref.onClick,\n      active = _ref.active;\n  var convertedActive = active >= 1 && active <= 4 ? 1 : active;\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__[\"StickyNav\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_Typography__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], {\n    color: \"#111\",\n    align: \"left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, name), __jsx(_Typography__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], {\n    color: \"#bbb\",\n    align: \"left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, role)), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__[\"StickyNavList\"], {\n    whileHover: {\n      backgroundColor: \"#f7f7f7\"\n    },\n    whileTap: {\n      backgroundColor: \"#e5e5e5\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, list.map(function (ListItem, index) {\n    return __jsx(\"li\", {\n      key: index,\n      onClick: function onClick() {\n        return _onClick(index === 2 ? 5 : index === 3 ? 6 : index);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      style: {\n        opacity: index != active && 0.6\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }, ListItem));\n  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__[\"RedButton\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, button));\n}\n_c = StickyNavigation;\n\nvar _c;\n\n$RefreshReg$(_c, \"StickyNavigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4PzgxYzEiXSwibmFtZXMiOlsiU3RpY2t5TmF2aWdhdGlvbiIsIm5hbWUiLCJyb2xlIiwibGlzdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhY3RpdmUiLCJjb252ZXJ0ZWRBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJMaXN0SXRlbSIsImluZGV4Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFVQTtBQUNPLFNBQVNBLGdCQUFULE9BT1k7QUFBQTs7QUFBQSxNQU5qQkMsSUFNaUIsUUFOakJBLElBTWlCO0FBQUEsTUFMakJDLElBS2lCLFFBTGpCQSxJQUtpQjtBQUFBLE1BSmpCQyxJQUlpQixRQUpqQkEsSUFJaUI7QUFBQSxNQUhqQkMsTUFHaUIsUUFIakJBLE1BR2lCO0FBQUEsTUFGakJDLFFBRWlCLFFBRmpCQSxPQUVpQjtBQUFBLE1BRGpCQyxNQUNpQixRQURqQkEsTUFDaUI7QUFDakIsTUFBTUMsZUFBZSxHQUFHRCxNQUFNLElBQUksQ0FBVixJQUFlQSxNQUFNLElBQUksQ0FBekIsR0FBNkIsQ0FBN0IsR0FBaUNBLE1BQXpEO0FBQ0EsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFPLFNBQUssRUFBQyxNQUFiO0FBQW9CLFNBQUssRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLElBREgsQ0FERixFQUlFLE1BQUMsaURBQUQ7QUFBTyxTQUFLLEVBQUMsTUFBYjtBQUFvQixTQUFLLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxJQURILENBSkYsQ0FERixFQVNFLE1BQUMsb0RBQUQ7QUFDRSxjQUFVLEVBQUU7QUFBRU0scUJBQWUsRUFBRTtBQUFuQixLQURkO0FBRUUsWUFBUSxFQUFFO0FBQUVBLHFCQUFlLEVBQUU7QUFBbkIsS0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUM3QixXQUNFO0FBQ0UsU0FBRyxFQUFFQSxLQURQO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTU4sUUFBTyxDQUFDTSxLQUFLLEtBQUssQ0FBVixHQUFjLENBQWQsR0FBa0JBLEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsS0FBckMsQ0FBYjtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsOENBQUQ7QUFBUSxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFRCxLQUFLLElBQUlMLE1BQVQsSUFBbUI7QUFBOUIsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dJLFFBREgsQ0FKRixDQURGO0FBVUQsR0FYQSxDQUpILENBVEYsRUEwQkUsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlOLE1BQVosQ0ExQkYsQ0FERjtBQThCRDtLQXZDZUosZ0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RpY2t5TmF2TGlzdCwgU3RpY2t5TmF2IH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgUmVkQnV0dG9uIH0gZnJvbSBcIi4uL0J1dHRvblwiO1xuXG4vLyBEZWNsYXJlIFByb3BzXG5pbnRlcmZhY2UgU3RpY2t5TmF2UHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgbGlzdDogc3RyaW5nW107XG4gIGJ1dHRvbjogc3RyaW5nO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgYWN0aXZlOiBudW1iZXI7XG59XG5cbi8vIENyZWF0ZSBGdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIFN0aWNreU5hdmlnYXRpb24oe1xuICBuYW1lLFxuICByb2xlLFxuICBsaXN0LFxuICBidXR0b24sXG4gIG9uQ2xpY2ssXG4gIGFjdGl2ZSxcbn06IFN0aWNreU5hdlByb3BzKSB7XG4gIGNvbnN0IGNvbnZlcnRlZEFjdGl2ZSA9IGFjdGl2ZSA+PSAxICYmIGFjdGl2ZSA8PSA0ID8gMSA6IGFjdGl2ZTtcbiAgcmV0dXJuIChcbiAgICA8U3RpY2t5TmF2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPExhYmVsIGNvbG9yPVwiIzExMVwiIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8TGFiZWwgY29sb3I9XCIjYmJiXCIgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAge3JvbGV9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTdGlja3lOYXZMaXN0XG4gICAgICAgIHdoaWxlSG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmN2Y3ZjdcIiB9fVxuICAgICAgICB3aGlsZVRhcD17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U1ZTVlNVwiIH19XG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgoTGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ID09PSAyID8gNSA6IGluZGV4ID09PSAzID8gNiA6IGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBvcGFjaXR5OiBpbmRleCAhPSBhY3RpdmUgJiYgMC42IH19PlxuICAgICAgICAgICAgICAgIHtMaXN0SXRlbX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TdGlja3lOYXZMaXN0PlxuICAgICAgPFJlZEJ1dHRvbj57YnV0dG9ufTwvUmVkQnV0dG9uPlxuICAgIDwvU3RpY2t5TmF2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})