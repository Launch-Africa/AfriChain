"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/data/MenuData.ts":
/*!******************************!*\
  !*** ./src/data/MenuData.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n[];\nconst menu_data = [\n    {\n        id: 1,\n        page: \"nav_1\",\n        has_dropdown: true,\n        title: \"Home\",\n        link: \"#\",\n        sub_menus: [\n            {\n                link: \"/\",\n                title: \"Education\"\n            },\n            {\n                link: \"/\",\n                title: \"Partner\"\n            }\n        ]\n    },\n    {\n        id: 2,\n        page: \"nav_1\",\n        has_dropdown: false,\n        title: \"About\",\n        link: \"/#about\"\n    },\n    {\n        id: 3,\n        page: \"nav_1\",\n        has_dropdown: false,\n        title: \"RoadMap\",\n        link: \"/#roadMap\"\n    },\n    {\n        id: 4,\n        page: \"nav_1\",\n        has_dropdown: true,\n        title: \"Blog\",\n        link: \"#\",\n        sub_menus: [\n            {\n                link: \"/blog\",\n                title: \"Our Blog\"\n            },\n            {\n                link: \"/blog-details\",\n                title: \"Blog-Details\"\n            }\n        ]\n    },\n    {\n        id: 5,\n        page: \"nav_1\",\n        has_dropdown: false,\n        title: \"Contact\",\n        link: \"/contact\"\n    },\n    {\n        id: 1,\n        page: \"nav_2\",\n        has_dropdown: true,\n        title: \"Home\",\n        link: \"#\",\n        sub_menus: [\n            {\n                link: \"/\",\n                title: \"ICO Investment\"\n            },\n            {\n                link: \"/home-two\",\n                title: \"Blockchain\"\n            }\n        ]\n    },\n    {\n        id: 2,\n        page: \"nav_2\",\n        has_dropdown: false,\n        title: \"Why Blockchain\",\n        link: \"/home-two/#blockchain\"\n    },\n    {\n        id: 3,\n        page: \"nav_2\",\n        has_dropdown: false,\n        title: \"Feature\",\n        link: \"/home-two/#feature\"\n    },\n    {\n        id: 4,\n        page: \"nav_2\",\n        has_dropdown: true,\n        title: \"Blog\",\n        link: \"#\",\n        sub_menus: [\n            {\n                link: \"/blog\",\n                title: \"Our Blog\"\n            },\n            {\n                link: \"/blog-details\",\n                title: \"Blog-Details\"\n            }\n        ]\n    },\n    {\n        id: 5,\n        page: \"nav_2\",\n        has_dropdown: false,\n        title: \"Contact\",\n        link: \"/contact\"\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_data);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhL01lbnVEYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFVQyxFQUFFO0FBRUgsTUFBTUEsWUFBd0I7SUFFMUI7UUFDSUMsSUFBSTtRQUNKQyxNQUFLO1FBQ0xDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFdBQVc7WUFDUDtnQkFBRUQsTUFBTTtnQkFBS0QsT0FBTztZQUFZO1lBQ2hDO2dCQUFFQyxNQUFNO2dCQUFLRCxPQUFPO1lBQVc7U0FDbEM7SUFDTDtJQUNBO1FBQ0lILElBQUk7UUFDSkMsTUFBSztRQUNMQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBQ0E7UUFDSUosSUFBSTtRQUNKQyxNQUFLO1FBQ0xDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJSixJQUFJO1FBQ0pDLE1BQUs7UUFDTEMsY0FBYztRQUNkQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsV0FBVztZQUNQO2dCQUFFRCxNQUFNO2dCQUFTRCxPQUFPO1lBQVc7WUFDbkM7Z0JBQUVDLE1BQU07Z0JBQWlCRCxPQUFPO1lBQWdCO1NBQ25EO0lBQ0w7SUFDQTtRQUNJSCxJQUFJO1FBQ0pDLE1BQUs7UUFDTEMsY0FBYztRQUNkQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUVBO1FBQ0lKLElBQUk7UUFDSkMsTUFBSztRQUNMQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxXQUFXO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQUtELE9BQU87WUFBaUI7WUFDckM7Z0JBQUVDLE1BQU07Z0JBQWFELE9BQU87WUFBYztTQUM3QztJQUNMO0lBQ0E7UUFDSUgsSUFBSTtRQUNKQyxNQUFLO1FBQ0xDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJSixJQUFJO1FBQ0pDLE1BQUs7UUFDTEMsY0FBYztRQUNkQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUNBO1FBQ0lKLElBQUk7UUFDSkMsTUFBSztRQUNMQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxXQUFXO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVNELE9BQU87WUFBVztZQUNuQztnQkFBRUMsTUFBTTtnQkFBaUJELE9BQU87WUFBZ0I7U0FDbkQ7SUFDTDtJQUNBO1FBQ0lILElBQUk7UUFDSkMsTUFBSztRQUNMQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0NBQ0g7QUFDRCxpRUFBZUwsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2NvbmZpZGVuY2VueWlyZW5kYS93b3Jrc3BhY2UvQWZyaUNoYWluL3NyYy9kYXRhL01lbnVEYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBNZW51SXRlbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcGFnZTpzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgaGFzX2Ryb3Bkb3duOiBib29sZWFuO1xyXG4gICAgc3ViX21lbnVzPzoge1xyXG4gICAgICAgIGxpbms6IHN0cmluZztcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG59W107XHJcblxyXG5jb25zdCBtZW51X2RhdGE6IE1lbnVJdGVtW10gPSBbXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBwYWdlOlwibmF2XzFcIixcclxuICAgICAgICBoYXNfZHJvcGRvd246IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgIGxpbms6IFwiI1wiLFxyXG4gICAgICAgIHN1Yl9tZW51czogW1xyXG4gICAgICAgICAgICB7IGxpbms6IFwiL1wiLCB0aXRsZTogXCJFZHVjYXRpb25cIiB9LFxyXG4gICAgICAgICAgICB7IGxpbms6IFwiL1wiLCB0aXRsZTogXCJQYXJ0bmVyXCIsIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgcGFnZTpcIm5hdl8xXCIsXHJcbiAgICAgICAgaGFzX2Ryb3Bkb3duOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJBYm91dFwiLFxyXG4gICAgICAgIGxpbms6IFwiLyNhYm91dFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBwYWdlOlwibmF2XzFcIixcclxuICAgICAgICBoYXNfZHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIlJvYWRNYXBcIixcclxuICAgICAgICBsaW5rOiBcIi8jcm9hZE1hcFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBwYWdlOlwibmF2XzFcIixcclxuICAgICAgICBoYXNfZHJvcGRvd246IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiQmxvZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiI1wiLFxyXG4gICAgICAgIHN1Yl9tZW51czogW1xyXG4gICAgICAgICAgICB7IGxpbms6IFwiL2Jsb2dcIiwgdGl0bGU6IFwiT3VyIEJsb2dcIiB9LFxyXG4gICAgICAgICAgICB7IGxpbms6IFwiL2Jsb2ctZGV0YWlsc1wiLCB0aXRsZTogXCJCbG9nLURldGFpbHNcIiwgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBwYWdlOlwibmF2XzFcIixcclxuICAgICAgICBoYXNfZHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcclxuICAgICAgICBsaW5rOiBcIi9jb250YWN0XCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgcGFnZTpcIm5hdl8yXCIsXHJcbiAgICAgICAgaGFzX2Ryb3Bkb3duOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgICAgICBsaW5rOiBcIiNcIixcclxuICAgICAgICBzdWJfbWVudXM6IFtcclxuICAgICAgICAgICAgeyBsaW5rOiBcIi9cIiwgdGl0bGU6IFwiSUNPIEludmVzdG1lbnRcIiB9LFxyXG4gICAgICAgICAgICB7IGxpbms6IFwiL2hvbWUtdHdvXCIsIHRpdGxlOiBcIkJsb2NrY2hhaW5cIiwgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBwYWdlOlwibmF2XzJcIixcclxuICAgICAgICBoYXNfZHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIldoeSBCbG9ja2NoYWluXCIsXHJcbiAgICAgICAgbGluazogXCIvaG9tZS10d28vI2Jsb2NrY2hhaW5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgcGFnZTpcIm5hdl8yXCIsXHJcbiAgICAgICAgaGFzX2Ryb3Bkb3duOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgbGluazogXCIvaG9tZS10d28vI2ZlYXR1cmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgcGFnZTpcIm5hdl8yXCIsXHJcbiAgICAgICAgaGFzX2Ryb3Bkb3duOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIkJsb2dcIixcclxuICAgICAgICBsaW5rOiBcIiNcIixcclxuICAgICAgICBzdWJfbWVudXM6IFtcclxuICAgICAgICAgICAgeyBsaW5rOiBcIi9ibG9nXCIsIHRpdGxlOiBcIk91ciBCbG9nXCIgfSxcclxuICAgICAgICAgICAgeyBsaW5rOiBcIi9ibG9nLWRldGFpbHNcIiwgdGl0bGU6IFwiQmxvZy1EZXRhaWxzXCIsIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgcGFnZTpcIm5hdl8yXCIsXHJcbiAgICAgICAgaGFzX2Ryb3Bkb3duOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXHJcbiAgICAgICAgbGluazogXCIvY29udGFjdFwiLFxyXG4gICAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgbWVudV9kYXRhO1xyXG4iXSwibmFtZXMiOlsibWVudV9kYXRhIiwiaWQiLCJwYWdlIiwiaGFzX2Ryb3Bkb3duIiwidGl0bGUiLCJsaW5rIiwic3ViX21lbnVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data/MenuData.ts\n"));

/***/ })

});