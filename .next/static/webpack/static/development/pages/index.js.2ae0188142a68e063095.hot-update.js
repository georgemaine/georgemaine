webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, useKeyPress, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useKeyPress\", function() { return useKeyPress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation/index.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/georgemaine/Sites/georgemaine/pages/index.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  top: 0;\\n  background-color: #fafafa;\\n  color: #111;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar menuListItems = [\"Slide 0\", \"Slide 1\", \"Slide 2\", \"Slide 3\", \"Slide 4\", \"Slide 5\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeMenuItem = _useState[0],\n      setActiveMenuItem = _useState[1];\n\n  function handleIndexChange(index) {\n    setActiveMenuItem(index);\n  }\n\n  var ArrowRightDown = useKeyPress(\"ArrowRight\");\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, ArrowRightDown && \"Hello\", __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"StickyNavigation\"], {\n    name: \"Georgemaine Lourens\",\n    role: \"Product Designer\",\n    list: menuListItems,\n    button: \"Get in touch\",\n    active: activeMenuItem,\n    onClick: handleIndexChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(Slides, {\n    active: ArrowRightDown ? activeMenuItem + 1 : activeMenuItem,\n    list: menuListItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }));\n}, \"dWSe7jCmmdyX1xI+CIDnbyvswwU=\", false, function () {\n  return [useKeyPress];\n}));\nfunction useKeyPress(targetKey) {\n  _s2();\n\n  var onPressDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n  var onPressUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n\n  // State for keeping track of whether key is pressed\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      keyPressed = _useState2[0],\n      setKeyPressed = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // If pressed key is our target key then set to true\n    function downHandler(_ref) {\n      var key = _ref.key;\n\n      if (key === targetKey) {\n        setKeyPressed(true);\n        onPressDown();\n      }\n    } // If released key is our target key then set to false\n\n\n    var upHandler = function upHandler(_ref2) {\n      var key = _ref2.key;\n\n      if (key === targetKey) {\n        setKeyPressed(false);\n        onPressUp();\n      }\n    }; // Add event listeners\n\n\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  });\n  return keyPressed;\n}\n\n_s2(useKeyPress, \"vmDSD7h68k9Z7B48/eX82jyokKU=\");\n\nfunction Slides(_ref3) {\n  var _this2 = this;\n\n  var list = _ref3.list,\n      active = _ref3.active;\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].ul, {\n    style: {\n      margin: 0,\n      padding: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }\n  }, list.map(function (listItem, index) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].li, {\n      animate: {\n        opacity: index === active ? 1 : 0,\n        x: active === index ? \"0vw\" : index < active ? \"-100vw\" : index > active ? \"calc(\".concat(index - active, \" * 100vw)\") : \"calc(\".concat(index, \" * 100vw)\"),\n        scale: index === active ? 1 : 0.8\n      },\n      key: index,\n      transition: {\n        type: \"spring\",\n        damping: 74,\n        stiffness: 120\n      },\n      style: {\n        cursor: \"grab\",\n        display: \"inline-block\",\n        position: \"fixed\",\n        top: 168,\n        right: 0,\n        left: 0,\n        bottom: 0,\n        textAlign: \"center\",\n        background: \"var(--red)\"\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }, __jsx(\"h1\", {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }\n    }, listItem));\n  }));\n}\n\n_c = Slides;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n_c2 = Wrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Slides\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJtZW51TGlzdEl0ZW1zIiwidXNlU3RhdGUiLCJhY3RpdmVNZW51SXRlbSIsInNldEFjdGl2ZU1lbnVJdGVtIiwiaGFuZGxlSW5kZXhDaGFuZ2UiLCJpbmRleCIsIkFycm93UmlnaHREb3duIiwidXNlS2V5UHJlc3MiLCJ0YXJnZXRLZXkiLCJvblByZXNzRG93biIsIm9uUHJlc3NVcCIsImtleVByZXNzZWQiLCJzZXRLZXlQcmVzc2VkIiwidXNlRWZmZWN0IiwiZG93bkhhbmRsZXIiLCJrZXkiLCJ1cEhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlNsaWRlcyIsImxpc3QiLCJhY3RpdmUiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWFwIiwibGlzdEl0ZW0iLCJvcGFjaXR5IiwieCIsInNjYWxlIiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJjdXJzb3IiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwiV3JhcHBlciIsInN0eWxlZCIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEIsU0FEb0IsRUFFcEIsU0FGb0IsRUFHcEIsU0FIb0IsRUFJcEIsU0FKb0IsRUFLcEIsU0FMb0IsRUFNcEIsU0FOb0IsQ0FBdEI7QUFTZSw4RUFBTTtBQUFBOztBQUFBLGtCQUN5QkMsc0RBQVEsQ0FBQyxDQUFELENBRGpDO0FBQUEsTUFDWkMsY0FEWTtBQUFBLE1BQ0lDLGlCQURKOztBQUVuQixXQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBMEM7QUFDeENGLHFCQUFpQixDQUFDRSxLQUFELENBQWpCO0FBQ0Q7O0FB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QUssRUFBRXhCLEtBQUssS0FBS2lCLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUI7QUFWdkIsT0FEWDtBQWFFLFNBQUcsRUFBRWpCLEtBYlA7QUFjRSxnQkFBVSxFQUFFO0FBQ1Z5QixZQUFJLEVBQUUsUUFESTtBQUVWQyxlQUFPLEVBQUUsRUFGQztBQUdWQyxpQkFBUyxFQUFFO0FBSEQsT0FkZDtBQW1CRSxXQUFLLEVBQUU7QUFDTEMsY0FBTSxFQUFFLE1BREg7QUFFTEMsZUFBTyxFQUFFLGNBRko7QUFHTEMsZ0JBQVEsRUFBRSxPQUhMO0FBSUxDLFdBQUcsRUFBRSxHQUpBO0FBS0xDLGFBQUssRUFBRSxDQUxGO0FBTUxDLFlBQUksRUFBRSxDQU5EO0FBT0xDLGNBQU0sRUFBRSxDQVBIO0FBUUxDLGlCQUFTLEVBQUUsUUFSTjtBQVNMQyxrQkFBVSxFQUFFO0FBVFAsT0FuQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtmLFFBQUwsQ0EvQkYsQ0FERjtBQW1DRCxHQXBDQSxDQU5ILENBREY7QUE4Q0Q7O0tBL0NRTixNO0FBaURGLElBQU1zQixPQUFPLEdBQUdDLHlEQUFNLENBQUNDLElBQVYsbUJBQWI7TUFBTUYsTyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgU3RpY2t5TmF2aWdhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmNvbnN0IG1lbnVMaXN0SXRlbXMgPSBbXG4gIFwiU2xpZGUgMFwiLFxuICBcIlNsaWRlIDFcIixcbiAgXCJTbGlkZSAyXCIsXG4gIFwiU2xpZGUgM1wiLFxuICBcIlNsaWRlIDRcIixcbiAgXCJTbGlkZSA1XCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVNZW51SXRlbSwgc2V0QWN0aXZlTWVudUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGZ1bmN0aW9uIGhhbmRsZUluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRBY3RpdmVNZW51SXRlbShpbmRleCk7XG4gIH1cblxuICBjb25zdCBBcnJvd1JpZ2h0RG93biA9IHVzZUtleVByZXNzKFwiQXJyb3dSaWdodFwiKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIHtBcnJvd1JpZ2h0RG93biAmJiBcIkhlbGxvXCJ9XG4gICAgICA8U3RpY2t5TmF2aWdhdGlvblxuICAgICAgICBuYW1lPVwiR2VvcmdlbWFpbmUgTG91cmVuc1wiXG4gICAgICAgIHJvbGU9XCJQcm9kdWN0IERlc2lnbmVyXCJcbiAgICAgICAgbGlzdD17bWVudUxpc3RJdGVtc31cbiAgICAgICAgYnV0dG9uPVwiR2V0IGluIHRvdWNoXCJcbiAgICAgICAgYWN0aXZlPXthY3RpdmVNZW51SXRlbX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlSW5kZXhDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPFNsaWRlc1xuICAgICAgICBhY3RpdmU9e0Fycm93UmlnaHREb3duID8gYWN0aXZlTWVudUl0ZW0gKyAxIDogYWN0aXZlTWVudUl0ZW19XG4gICAgICAgIGxpc3Q9e21lbnVMaXN0SXRlbXN9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBTbGlkZXNQcm9wcyB7XG4gIGxpc3Q6IHN0cmluZ1tdO1xuICBhY3RpdmU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleVByZXNzKFxuICB0YXJnZXRLZXksXG4gIG9uUHJlc3NEb3duID0gKCkgPT4ge30sXG4gIG9uUHJlc3NVcCA9ICgpID0+IHt9XG4pIHtcbiAgLy8gU3RhdGUgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciBrZXkgaXMgcHJlc3NlZFxuICBjb25zdCBba2V5UHJlc3NlZCwgc2V0S2V5UHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJZiBwcmVzc2VkIGtleSBpcyBvdXIgdGFyZ2V0IGtleSB0aGVuIHNldCB0byB0cnVlXG4gICAgZnVuY3Rpb24gZG93bkhhbmRsZXIoeyBrZXkgfSkge1xuICAgICAgaWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICAgIHNldEtleVByZXNzZWQodHJ1ZSk7XG4gICAgICAgIG9uUHJlc3NEb3duKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgcmVsZWFzZWQga2V5IGlzIG91ciB0YXJnZXQga2V5IHRoZW4gc2V0IHRvIGZhbHNlXG4gICAgY29uc3QgdXBIYW5kbGVyID0gKHsga2V5IH0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09IHRhcmdldEtleSkge1xuICAgICAgICBzZXRLZXlQcmVzc2VkKGZhbHNlKTtcbiAgICAgICAgb25QcmVzc1VwKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBrZXlQcmVzc2VkO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMoeyBsaXN0LCBhY3RpdmUgfTogU2xpZGVzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnVsXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbmRleCA9PT0gYWN0aXZlID8gMSA6IDAsXG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgYWN0aXZlID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgPyBgMHZ3YFxuICAgICAgICAgICAgICAgICAgOiBpbmRleCA8IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBgLTEwMHZ3YFxuICAgICAgICAgICAgICAgICAgOiBpbmRleCA+IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBgY2FsYygke2luZGV4IC0gYWN0aXZlfSAqIDEwMHZ3KWBcbiAgICAgICAgICAgICAgICAgIDogYGNhbGMoJHtpbmRleH0gKiAxMDB2dylgLFxuICAgICAgICAgICAgICBzY2FsZTogaW5kZXggPT09IGFjdGl2ZSA/IDEgOiAwLjgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgICAgZGFtcGluZzogNzQsXG4gICAgICAgICAgICAgIHN0aWZmbmVzczogMTIwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogXCJncmFiXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgIHRvcDogMTY4LFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tcmVkKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+e2xpc3RJdGVtfTwvaDE+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L21vdGlvbi51bD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubWFpbmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMTExO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})