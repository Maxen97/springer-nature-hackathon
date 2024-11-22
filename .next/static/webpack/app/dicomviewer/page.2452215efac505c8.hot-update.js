"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dicomviewer/page",{

/***/ "(app-pages-browser)/./app/components/DicomViewer/DicomViewer.js":
/*!***************************************************!*\
  !*** ./app/components/DicomViewer/DicomViewer.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst DicomViewer = (param)=>{\n    let { dicomUrls } = param;\n    _s();\n    const viewerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const dwvApp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentTool, setCurrentTool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ZoomAndPan\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let dwv = null;\n        const initializeDWV = async ()=>{\n            try {\n                // Import DWV module\n                const dwvModule = await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_dwv_dist_dwv_min_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! dwv */ \"(app-pages-browser)/./node_modules/dwv/dist/dwv.min.js\", 23));\n                dwv = dwvModule.default || dwvModule;\n                if (!dwv || !dwv.App) {\n                    throw new Error(\"Failed to load DWV module\");\n                }\n                // Create app\n                const app = new dwv.App();\n                dwvApp.current = app;\n                // Initialize with proper view configuration\n                const viewConfig0 = new dwv.ViewConfig(\"layerGroup0\");\n                const viewConfigs = {\n                    \"*\": [\n                        viewConfig0\n                    ]\n                };\n                const options = new dwv.AppOptions(viewConfigs);\n                // Add tools to options\n                options.tools = {\n                    WindowLevel: {},\n                    ZoomAndPan: {},\n                    Scroll: {},\n                    Draw: {\n                        options: [\n                            \"Ruler\",\n                            \"Circle\",\n                            \"Rectangle\"\n                        ]\n                    }\n                };\n                // Initialize the app\n                await app.init(options);\n                // Add event listeners\n                app.addEventListener(\"load-start\", ()=>setIsLoading(true));\n                app.addEventListener(\"load-end\", ()=>setIsLoading(false));\n                app.addEventListener(\"error\", (event)=>{\n                    var _event_error;\n                    return setError(((_event_error = event.error) === null || _event_error === void 0 ? void 0 : _event_error.message) || \"Unknown error\");\n                });\n                // Set initial tool\n                app.setTool(currentTool);\n                app.setTool(currentTool);\n                // Load DICOM file if URL is provided\n                if (dicomUrls) {\n                    await app.loadURLs(dicomUrls);\n                }\n            } catch (error) {\n                console.error(\"DWV initialization error:\", error);\n                setError(error.message);\n                setIsLoading(false);\n            }\n        };\n        initializeDWV();\n        return ()=>{\n            if (dwvApp.current) {\n                try {\n                    dwvApp.current.reset();\n                    dwvApp.current = null;\n                } catch (error) {\n                    console.error(\"Cleanup error:\", error);\n                }\n            }\n        };\n    }, [\n        dicomUrls,\n        currentTool\n    ]);\n    const handleToolChange = (toolName)=>{\n        if (dwvApp.current) {\n            dwvApp.current.setTool(toolName);\n            setCurrentTool(toolName);\n        }\n    };\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 bg-red-50 text-red-600 rounded-lg\",\n            children: [\n                \"Error loading DICOM viewer: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-2 bg-gray-100 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleToolChange(\"ZoomAndPan\"),\n                        className: \"px-4 py-2 rounded \".concat(currentTool === \"ZoomAndPan\" ? \"bg-blue-500 text-white\" : \"bg-white hover:bg-gray-50\"),\n                        children: \"Zoom/Pan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleToolChange(\"WindowLevel\"),\n                        className: \"px-4 py-2 rounded \".concat(currentTool === \"WindowLevel\" ? \"bg-blue-500 text-white\" : \"bg-white hover:bg-gray-50\"),\n                        children: \"Brightness\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleToolChange(\"Scroll\"),\n                        className: \"px-4 py-2 rounded \".concat(currentTool === \"Scroll\" ? \"bg-blue-500 text-white\" : \"bg-white hover:bg-gray-50\"),\n                        children: \"Scroll\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[600px] bg-black relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"layerGroup0\",\n                    className: \"layer-container\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n                lineNumber: 142,\n                columnNumber: 8\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\A\\\\Documents\\\\Coding\\\\Projects\\\\bitmark-hack\\\\app\\\\components\\\\DicomViewer\\\\DicomViewer.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DicomViewer, \"f+LOsqoXCTqHcIApxXHlOsnw6tU=\");\n_c = DicomViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DicomViewer);\nvar _c;\n$RefreshReg$(_c, \"DicomViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0RpY29tVmlld2VyL0RpY29tVmlld2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUUzRCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUNoQyxNQUFNQyxZQUFZSiw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNSyxTQUFTTCw2Q0FBTUEsQ0FBQztJQUN0QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQ0YsZ0RBQVNBLENBQUM7UUFDUixJQUFJYSxNQUFNO1FBRVYsTUFBTUMsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0Ysb0JBQW9CO2dCQUNwQixNQUFNQyxZQUFZLE1BQU0sMk5BQU87Z0JBQy9CRixNQUFNRSxVQUFVQyxPQUFPLElBQUlEO2dCQUUzQixJQUFJLENBQUNGLE9BQU8sQ0FBQ0EsSUFBSUksR0FBRyxFQUFFO29CQUNwQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLGFBQWE7Z0JBQ2IsTUFBTUMsTUFBTSxJQUFJTixJQUFJSSxHQUFHO2dCQUN2QlgsT0FBT2MsT0FBTyxHQUFHRDtnQkFFakIsNENBQTRDO2dCQUM1QyxNQUFNRSxjQUFjLElBQUlSLElBQUlTLFVBQVUsQ0FBQztnQkFDdkMsTUFBTUMsY0FBYztvQkFBQyxLQUFLO3dCQUFDRjtxQkFBWTtnQkFBQTtnQkFDdkMsTUFBTUcsVUFBVSxJQUFJWCxJQUFJWSxVQUFVLENBQUNGO2dCQUVuQyx1QkFBdUI7Z0JBQ3ZCQyxRQUFRRSxLQUFLLEdBQUc7b0JBQ2RDLGFBQWEsQ0FBQztvQkFDZEMsWUFBWSxDQUFDO29CQUNiQyxRQUFRLENBQUM7b0JBQ1RDLE1BQU07d0JBQ0pOLFNBQVM7NEJBQUM7NEJBQVM7NEJBQVU7eUJBQVk7b0JBQzNDO2dCQUNGO2dCQUVBLHFCQUFxQjtnQkFDckIsTUFBTUwsSUFBSVksSUFBSSxDQUFDUDtnQkFFZixzQkFBc0I7Z0JBQ3RCTCxJQUFJYSxnQkFBZ0IsQ0FBQyxjQUFjLElBQU14QixhQUFhO2dCQUN0RFcsSUFBSWEsZ0JBQWdCLENBQUMsWUFBWSxJQUFNeEIsYUFBYTtnQkFDcERXLElBQUlhLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ0M7d0JBQW1CQTsyQkFBVHZCLFNBQVN1QixFQUFBQSxlQUFBQSxNQUFNeEIsS0FBSyxjQUFYd0IsbUNBQUFBLGFBQWFDLE9BQU8sS0FBSTs7Z0JBRTFFLG1CQUFtQjtnQkFDbkJmLElBQUlnQixPQUFPLENBQUN4QjtnQkFDWlEsSUFBSWdCLE9BQU8sQ0FBQ3hCO2dCQUVaLHFDQUFxQztnQkFDckMsSUFBSVAsV0FBVztvQkFDYixNQUFNZSxJQUFJaUIsUUFBUSxDQUFDaEM7Z0JBQ3JCO1lBRUYsRUFBRSxPQUFPSyxPQUFPO2dCQUNkNEIsUUFBUTVCLEtBQUssQ0FBQyw2QkFBNkJBO2dCQUMzQ0MsU0FBU0QsTUFBTXlCLE9BQU87Z0JBQ3RCMUIsYUFBYTtZQUNmO1FBQ0Y7UUFFQU07UUFFQSxPQUFPO1lBQ0wsSUFBSVIsT0FBT2MsT0FBTyxFQUFFO2dCQUNsQixJQUFJO29CQUNGZCxPQUFPYyxPQUFPLENBQUNrQixLQUFLO29CQUNwQmhDLE9BQU9jLE9BQU8sR0FBRztnQkFDbkIsRUFBRSxPQUFPWCxPQUFPO29CQUNkNEIsUUFBUTVCLEtBQUssQ0FBQyxrQkFBa0JBO2dCQUNsQztZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNMO1FBQVdPO0tBQVk7SUFFM0IsTUFBTTRCLG1CQUFtQixDQUFDQztRQUN4QixJQUFJbEMsT0FBT2MsT0FBTyxFQUFFO1lBQ2xCZCxPQUFPYyxPQUFPLENBQUNlLE9BQU8sQ0FBQ0s7WUFDdkI1QixlQUFlNEI7UUFDakI7SUFDRjtJQUVBLElBQUkvQixPQUFPO1FBQ1QscUJBQ0UsOERBQUNnQztZQUFJQyxXQUFVOztnQkFBd0M7Z0JBQ3hCakM7Ozs7Ozs7SUFHbkM7SUFFQSxxQkFDRSw4REFBQ2dDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxTQUFTLElBQU1MLGlCQUFpQjt3QkFDaENHLFdBQVcscUJBSVYsT0FIQy9CLGdCQUFnQixlQUNaLDJCQUNBO2tDQUVQOzs7Ozs7a0NBR0QsOERBQUNnQzt3QkFDQ0MsU0FBUyxJQUFNTCxpQkFBaUI7d0JBQ2hDRyxXQUFXLHFCQUlWLE9BSEMvQixnQkFBZ0IsZ0JBQ1osMkJBQ0E7a0NBRVA7Ozs7OztrQ0FHRCw4REFBQ2dDO3dCQUNDQyxTQUFTLElBQU1MLGlCQUFpQjt3QkFDaENHLFdBQVcscUJBSVYsT0FIQy9CLGdCQUFnQixXQUNaLDJCQUNBO2tDQUVQOzs7Ozs7Ozs7Ozs7MEJBZ0JGLDhEQUFDOEI7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJSSxJQUFHO29CQUFjSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQWxKTXZDO0tBQUFBO0FBb0pOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0RpY29tVmlld2VyL0RpY29tVmlld2VyLmpzP2Y2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERpY29tVmlld2VyID0gKHsgZGljb21VcmxzIH0pID0+IHtcclxuICBjb25zdCB2aWV3ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHd2QXBwID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjdXJyZW50VG9vbCwgc2V0Q3VycmVudFRvb2xdID0gdXNlU3RhdGUoJ1pvb21BbmRQYW4nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkd3YgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVEV1YgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gSW1wb3J0IERXViBtb2R1bGVcclxuICAgICAgICBjb25zdCBkd3ZNb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ2R3dicpO1xyXG4gICAgICAgIGR3diA9IGR3dk1vZHVsZS5kZWZhdWx0IHx8IGR3dk1vZHVsZTtcclxuXHJcbiAgICAgICAgaWYgKCFkd3YgfHwgIWR3di5BcHApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgRFdWIG1vZHVsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFwcFxyXG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBkd3YuQXBwKCk7XHJcbiAgICAgICAgZHd2QXBwLmN1cnJlbnQgPSBhcHA7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgd2l0aCBwcm9wZXIgdmlldyBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgY29uc3Qgdmlld0NvbmZpZzAgPSBuZXcgZHd2LlZpZXdDb25maWcoJ2xheWVyR3JvdXAwJyk7XHJcbiAgICAgICAgY29uc3Qgdmlld0NvbmZpZ3MgPSB7JyonOiBbdmlld0NvbmZpZzBdfTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IGR3di5BcHBPcHRpb25zKHZpZXdDb25maWdzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgdG9vbHMgdG8gb3B0aW9uc1xyXG4gICAgICAgIG9wdGlvbnMudG9vbHMgPSB7XHJcbiAgICAgICAgICBXaW5kb3dMZXZlbDoge30sXHJcbiAgICAgICAgICBab29tQW5kUGFuOiB7fSxcclxuICAgICAgICAgIFNjcm9sbDoge30sXHJcbiAgICAgICAgICBEcmF3OiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFsnUnVsZXInLCAnQ2lyY2xlJywgJ1JlY3RhbmdsZSddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgYXBwXHJcbiAgICAgICAgYXdhaXQgYXBwLmluaXQob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICBhcHAuYWRkRXZlbnRMaXN0ZW5lcignbG9hZC1zdGFydCcsICgpID0+IHNldElzTG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQtZW5kJywgKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGV2ZW50KSA9PiBzZXRFcnJvcihldmVudC5lcnJvcj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicpKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgdG9vbFxyXG4gICAgICAgIGFwcC5zZXRUb29sKGN1cnJlbnRUb29sKTtcclxuICAgICAgICBhcHAuc2V0VG9vbChjdXJyZW50VG9vbCk7XHJcblxyXG4gICAgICAgIC8vIExvYWQgRElDT00gZmlsZSBpZiBVUkwgaXMgcHJvdmlkZWRcclxuICAgICAgICBpZiAoZGljb21VcmxzKSB7XHJcbiAgICAgICAgICBhd2FpdCBhcHAubG9hZFVSTHMoZGljb21VcmxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RXViBpbml0aWFsaXphdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0aWFsaXplRFdWKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGR3dkFwcC5jdXJyZW50KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGR3dkFwcC5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgICBkd3ZBcHAuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZWFudXAgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbZGljb21VcmxzLCBjdXJyZW50VG9vbF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUb29sQ2hhbmdlID0gKHRvb2xOYW1lKSA9PiB7XHJcbiAgICBpZiAoZHd2QXBwLmN1cnJlbnQpIHtcclxuICAgICAgZHd2QXBwLmN1cnJlbnQuc2V0VG9vbCh0b29sTmFtZSk7XHJcbiAgICAgIHNldEN1cnJlbnRUb29sKHRvb2xOYW1lKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXJlZC01MCB0ZXh0LXJlZC02MDAgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgIEVycm9yIGxvYWRpbmcgRElDT00gdmlld2VyOiB7ZXJyb3J9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgIHsvKiBUb29sYmFyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHAtMiBiZy1ncmF5LTEwMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9vbENoYW5nZSgnWm9vbUFuZFBhbicpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHJvdW5kZWQgJHtcclxuICAgICAgICAgICAgY3VycmVudFRvb2wgPT09ICdab29tQW5kUGFuJyBcclxuICAgICAgICAgICAgICA/ICdiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlJyBcclxuICAgICAgICAgICAgICA6ICdiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwJ1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWm9vbS9QYW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb29sQ2hhbmdlKCdXaW5kb3dMZXZlbCcpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHJvdW5kZWQgJHtcclxuICAgICAgICAgICAgY3VycmVudFRvb2wgPT09ICdXaW5kb3dMZXZlbCcgXHJcbiAgICAgICAgICAgICAgPyAnYmctYmx1ZS01MDAgdGV4dC13aGl0ZScgXHJcbiAgICAgICAgICAgICAgOiAnYmctd2hpdGUgaG92ZXI6YmctZ3JheS01MCdcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJyaWdodG5lc3NcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb29sQ2hhbmdlKCdTY3JvbGwnKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkICR7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUb29sID09PSAnU2Nyb2xsJyBcclxuICAgICAgICAgICAgICA/ICdiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlJyBcclxuICAgICAgICAgICAgICA6ICdiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwJ1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2Nyb2xsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvb2xDaGFuZ2UoJ0RyYXcnKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkICR7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUb29sID09PSAnRHJhdycgXHJcbiAgICAgICAgICAgICAgPyAnYmctYmx1ZS01MDAgdGV4dC13aGl0ZScgXHJcbiAgICAgICAgICAgICAgOiAnYmctd2hpdGUgaG92ZXI6YmctZ3JheS01MCdcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERyYXdcclxuICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFZpZXdlciBDb250YWluZXIgKi99XHJcbiAgICAgIHs8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs2MDBweF0gYmctYmxhY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibGF5ZXJHcm91cDBcIiBjbGFzc05hbWU9XCJsYXllci1jb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiBEV1Ygd2lsbCBpbmplY3QgaXRzIGVsZW1lbnRzIGhlcmUgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNvbVZpZXdlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRpY29tVmlld2VyIiwiZGljb21VcmxzIiwidmlld2VyUmVmIiwiZHd2QXBwIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImN1cnJlbnRUb29sIiwic2V0Q3VycmVudFRvb2wiLCJkd3YiLCJpbml0aWFsaXplRFdWIiwiZHd2TW9kdWxlIiwiZGVmYXVsdCIsIkFwcCIsIkVycm9yIiwiYXBwIiwiY3VycmVudCIsInZpZXdDb25maWcwIiwiVmlld0NvbmZpZyIsInZpZXdDb25maWdzIiwib3B0aW9ucyIsIkFwcE9wdGlvbnMiLCJ0b29scyIsIldpbmRvd0xldmVsIiwiWm9vbUFuZFBhbiIsIlNjcm9sbCIsIkRyYXciLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsInNldFRvb2wiLCJsb2FkVVJMcyIsImNvbnNvbGUiLCJyZXNldCIsImhhbmRsZVRvb2xDaGFuZ2UiLCJ0b29sTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/DicomViewer/DicomViewer.js\n"));

/***/ })

});