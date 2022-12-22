"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BuyCoffee.tsx":
/*!**********************************!*\
  !*** ./components/BuyCoffee.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/BuyMeAcoffee.json */ \"./constants/BuyMeAcoffee.json\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BuyCoffee = ()=>{\n    _s();\n    let provider;\n    let buyMeACoffee;\n    let signer;\n    const { publicRuntimeConfig: config  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [memos, setMemos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) {\n                console.error(\"Install Metamask!\");\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setAccount(accounts[0]);\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(\"Error while connecting: \".concat(err.message));\n            } else console.error(err);\n        }\n    };\n    const getMemos = async ()=>{\n        try {\n            if (window.ethereum) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                const memos = await buyMeACoffee.getMemos();\n                setMemos(memos);\n            } else {\n                console.log(\"Metamask is not connected\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const isWalletConnected = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length > 0) {\n                setAccount(accounts[0]);\n            } else {\n                console.error(\"No accounts found!\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyCoffee = async (name, comment)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            const txRes = await buyMeACoffee.buyCoffee(name, comment, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.001\")\n            });\n            await txRes.wait(1);\n            alert(\"Coffee is bought\");\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const onNewMemo = (from, timestamp, name, message)=>{\n        setMemos((prev)=>[\n                ...prev,\n                {\n                    address: from,\n                    timestamp: new Date(timestamp * 1000),\n                    message,\n                    name\n                }\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!account) return;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        signer = provider.getSigner();\n        buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n        getMemos();\n        isWalletConnected();\n        buyMeACoffee.on(\"NewMemo\", onNewMemo);\n        return ()=>{\n            buyMeACoffee.off(\"NewMemo\", onNewMemo);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl font-bold my-5\",\n                children: \"Please, buy me a coffee!\"\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                onChange: (e)=>{\n                                    setName(e.target.value);\n                                },\n                                className: \"p-2 border-2 border-r-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"comment\",\n                                type: \"text\",\n                                onChange: (e)=>{\n                                    setComment(e.target.value);\n                                },\n                                placeholder: \"Comment\",\n                                className: \"p-2 border-2 border-r-2 mb-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    buyCoffee(name, comment);\n                                },\n                                className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                                children: \"Buy coffee!\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, undefined),\n                    memos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Address: \",\n                                        memo.address\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Name: \",\n                                        memo.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                    lineNumber: 185,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Comment: \",\n                                        memo.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, memo.timestamp, true, {\n                            fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectWallet,\n                    className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                    children: \"Connect wallet!\"\n                }, void 0, false, {\n                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                    lineNumber: 192,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 191,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BuyCoffee, \"5j06SOuffsKCu7x5m7VRMPNmVvU=\");\n_c = BuyCoffee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuyCoffee);\nvar _c;\n$RefreshReg$(_c, \"BuyCoffee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1eUNvZmZlZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsOENBQThDLEdBQzlDOztBQUFnQztBQUNJO0FBQ1E7QUFDaUI7QUFNN0QsTUFBTUssWUFBWSxJQUFNOztJQUN0QixJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFFSixNQUFNLEVBQUVDLHFCQUFxQkMsT0FBTSxFQUFFLEdBQUdULGtEQUFTQTtJQUNqRCxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzVDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWdCLGdCQUFnQixVQUFZO1FBQ2hDLElBQUk7WUFDRixJQUFJLENBQUNDLE9BQU9DLFFBQVEsRUFBRTtnQkFDcEJDLFFBQVFDLEtBQUssQ0FBQztZQUNoQixDQUFDO1lBRUQsTUFBTUMsV0FBVyxNQUFNSixPQUFPQyxRQUFRLENBQUNJLE9BQU8sQ0FBRTtnQkFDOUNDLFFBQVE7WUFDVjtZQUVBZCxXQUFXWSxRQUFRLENBQUMsRUFBRTtRQUN4QixFQUFFLE9BQU9HLEtBQUs7WUFDWixJQUFJQSxlQUFlQyxPQUFPO2dCQUN4Qk4sUUFBUUMsS0FBSyxDQUFDLDJCQUF1QyxPQUFaSSxJQUFJRSxPQUFPO1lBQ3RELE9BQU9QLFFBQVFDLEtBQUssQ0FBQ0k7UUFDdkI7SUFDRjtJQUVBLE1BQU1HLFdBQVcsVUFBWTtRQUMzQixJQUFJO1lBQ0YsSUFBSVYsT0FBT0MsUUFBUSxFQUFFO2dCQUNuQmYsV0FBVyxJQUFJTixpRUFBNkIsQ0FBQ29CLE9BQU9DLFFBQVE7Z0JBQzVEYixTQUFTRixTQUFTMkIsU0FBUztnQkFDM0IxQixlQUFlLElBQUlQLG1EQUFlLENBQ2hDVSxPQUFPeUIsbUJBQW1CLEVBQzFCL0IseURBQWVBLEVBQ2ZJO2dCQUdGLE1BQU1LLFFBQVEsTUFBTU4sYUFBYXVCLFFBQVE7Z0JBQ3pDaEIsU0FBU0Q7WUFDWCxPQUFPO2dCQUNMUyxRQUFRYyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0gsRUFBRSxPQUFPVCxLQUFLO1lBQ1osSUFBSUEsZUFBZUMsT0FBTztnQkFDeEJOLFFBQVFDLEtBQUssQ0FBQ0ksSUFBSUUsT0FBTztZQUMzQixPQUFPO2dCQUNMUCxRQUFRQyxLQUFLLENBQUNJO1lBQ2hCLENBQUM7UUFDSDtJQUNGO0lBRUEsTUFBTVUsb0JBQW9CLFVBQVk7UUFDcEMsSUFBSTtZQUNGLE1BQU1iLFdBQVcsTUFBTUosT0FBT0MsUUFBUSxDQUFDSSxPQUFPLENBQUU7Z0JBQzlDQyxRQUFRO1lBQ1Y7WUFFQSxJQUFJRixTQUFTYyxNQUFNLEdBQUcsR0FBRztnQkFDdkIxQixXQUFXWSxRQUFRLENBQUMsRUFBRTtZQUN4QixPQUFPO2dCQUNMRixRQUFRQyxLQUFLLENBQUM7WUFDaEIsQ0FBQztRQUNILEVBQUUsT0FBT0ksS0FBSztZQUNaLElBQUlBLGVBQWVDLE9BQU87Z0JBQ3hCTixRQUFRQyxLQUFLLENBQUNJLElBQUlFLE9BQU87WUFDM0IsT0FBTztnQkFDTFAsUUFBUUMsS0FBSyxDQUFDSTtZQUNoQixDQUFDO1FBQ0g7SUFDRjtJQUVBLE1BQU1ZLFlBQVksT0FBT3hCLE1BQWNFLFVBQW9CO1FBQ3pELElBQUk7WUFDRixJQUFJLENBQUNHLE9BQU9DLFFBQVEsRUFBRSxPQUFPQyxRQUFRQyxLQUFLLENBQUM7WUFDM0NqQixXQUFXLElBQUlOLGlFQUE2QixDQUFDb0IsT0FBT0MsUUFBUTtZQUM1RGIsU0FBU0YsU0FBUzJCLFNBQVM7WUFDM0IxQixlQUFlLElBQUlQLG1EQUFlLENBQ2hDVSxPQUFPeUIsbUJBQW1CLEVBQzFCL0IseURBQWVBLEVBQ2ZJO1lBR0YsTUFBTWdDLFFBQVEsTUFBTWpDLGFBQWFnQyxTQUFTLENBQUN4QixNQUFNRSxTQUFTO2dCQUN4RHdCLE9BQU96QywyREFBdUIsQ0FBQztZQUNqQztZQUNBLE1BQU13QyxNQUFNSSxJQUFJLENBQUM7WUFFakJDLE1BQU07UUFDUixFQUFFLE9BQU9sQixLQUFLO1lBQ1osSUFBSUEsZUFBZUMsT0FBTztnQkFDeEJOLFFBQVFDLEtBQUssQ0FBQ0ksSUFBSUUsT0FBTztZQUMzQixPQUFPO2dCQUNMUCxRQUFRQyxLQUFLLENBQUNJO1lBQ2hCLENBQUM7UUFDSDtJQUNGO0lBRUEsTUFBTW1CLFlBQVksQ0FBQ0MsTUFBV0MsV0FBZ0JqQyxNQUFXYyxVQUFpQjtRQUN4RWYsU0FBU21DLENBQUFBLE9BQVE7bUJBQ1pBO2dCQUNIO29CQUFFQyxTQUFTSDtvQkFBTUMsV0FBVyxJQUFJRyxLQUFLSCxZQUFZO29CQUFPbkI7b0JBQVNkO2dCQUFLO2FBQ3ZFO0lBQ0g7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ1MsU0FBUztRQUNkTCxXQUFXLElBQUlOLGlFQUE2QixDQUFDb0IsT0FBT0MsUUFBUTtRQUM1RGIsU0FBU0YsU0FBUzJCLFNBQVM7UUFDM0IxQixlQUFlLElBQUlQLG1EQUFlLENBQ2hDVSxPQUFPeUIsbUJBQW1CLEVBQzFCL0IseURBQWVBLEVBQ2ZJO1FBR0ZzQjtRQUNBTztRQUVBOUIsYUFBYTZDLEVBQUUsQ0FBQyxXQUFXTjtRQUUzQixPQUFPLElBQU07WUFDWHZDLGFBQWE4QyxHQUFHLENBQUMsV0FBV1A7UUFDOUI7SUFDQSx1REFBdUQ7SUFDekQsR0FBRztRQUFDbkM7S0FBUTtJQUVaLHFCQUNFLDhEQUFDMkM7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBc0M7Ozs7OztZQUduRDdDLHdCQUNDLDhEQUFDMkM7O2tDQUNDLDhEQUFDRzt3QkFBS0QsV0FBVTs7MENBQ2QsOERBQUNFO2dDQUFNQyxTQUFRO2dDQUFPSCxXQUFVOzBDQUFROzs7Ozs7MENBR3hDLDhEQUFDSTtnQ0FDQ0MsSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVUMsQ0FBQUEsSUFBSztvQ0FDYmpELFFBQVFpRCxFQUFFQyxNQUFNLENBQUN6QixLQUFLO2dDQUN4QjtnQ0FDQWUsV0FBVTs7Ozs7OzBDQUdaLDhEQUFDRTtnQ0FBTUMsU0FBUTtnQ0FBT0gsV0FBVTswQ0FBUTs7Ozs7OzBDQUd4Qyw4REFBQ0k7Z0NBQ0NDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xFLFVBQVVDLENBQUFBLElBQUs7b0NBQ2IvQyxXQUFXK0MsRUFBRUMsTUFBTSxDQUFDekIsS0FBSztnQ0FDM0I7Z0NBQ0FzQixhQUFZO2dDQUNaUCxXQUFVOzs7Ozs7MENBRVosOERBQUNXO2dDQUNDTCxNQUFLO2dDQUNMTSxTQUFTLElBQU07b0NBQ2I3QixVQUFVeEIsTUFBTUU7Z0NBQ2xCO2dDQUNBdUMsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O29CQUlGM0MsTUFBTXdELEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNoQjs0QkFBeUJFLFdBQVU7OzhDQUNsQyw4REFBQ2U7O3dDQUFFO3dDQUFVRCxLQUFLcEIsT0FBTzs7Ozs7Ozs4Q0FDekIsOERBQUNxQjs7d0NBQUU7d0NBQU9ELEtBQUt2RCxJQUFJOzs7Ozs7OzhDQUNuQiw4REFBQ3dEOzt3Q0FBRTt3Q0FBVUQsS0FBS3ZELElBQUk7Ozs7Ozs7OzJCQUhkdUQsS0FBS3RCLFNBQVM7Ozs7Ozs7Ozs7MENBUTVCLDhEQUFDTTtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ1c7b0JBQ0NDLFNBQVNqRDtvQkFDVHFDLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7eUJBSUo7Ozs7Ozs7QUFHUDtHQS9MTW5EO0tBQUFBO0FBaU1OLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV5Q29mZmVlLnRzeD8wNjlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXlNZUFDb2ZmZWVBYmkgZnJvbSAnLi4vY29uc3RhbnRzL0J1eU1lQWNvZmZlZS5qc29uJztcblxuaW50ZXJmYWNlIEV0aGVyZXVtV2luZG93IHtcbiAgZXRoZXJldW06IGFueTtcbn1cblxuY29uc3QgQnV5Q29mZmVlID0gKCkgPT4ge1xuICBsZXQgcHJvdmlkZXI6IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyO1xuICBsZXQgYnV5TWVBQ29mZmVlOiBldGhlcnMuQ29udHJhY3Q7XG4gIGxldCBzaWduZXI6IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1NpZ25lcjtcblxuICBjb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWc6IGNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZW1vcywgc2V0TWVtb3NdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW5zdGFsbCBNZXRhbWFzayEnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCEoe1xuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGlsZSBjb25uZWN0aW5nOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TWVtb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29uZmlnLkJ1eU1lQUNvZmZlZUFkZHJlc3MsXG4gICAgICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lbW9zID0gYXdhaXQgYnV5TWVBQ29mZmVlLmdldE1lbW9zKCk7XG4gICAgICAgIHNldE1lbW9zKG1lbW9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBpcyBub3QgY29ubmVjdGVkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0ISh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9hY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCEnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV5Q29mZmVlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5lcnJvcignTWV0YU1hc2sgbm90IGNvbm5lY3RlZCEnKTtcbiAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgY29uc3QgdHhSZXMgPSBhd2FpdCBidXlNZUFDb2ZmZWUuYnV5Q29mZmVlKG5hbWUsIGNvbW1lbnQsIHtcbiAgICAgICAgdmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKCcwLjAwMScpLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0eFJlcy53YWl0KDEpO1xuXG4gICAgICBhbGVydCgnQ29mZmVlIGlzIGJvdWdodCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbk5ld01lbW8gPSAoZnJvbTogYW55LCB0aW1lc3RhbXA6IGFueSwgbmFtZTogYW55LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICBzZXRNZW1vcyhwcmV2ID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGFkZHJlc3M6IGZyb20sIHRpbWVzdGFtcDogbmV3IERhdGUodGltZXN0YW1wICogMTAwMCksIG1lc3NhZ2UsIG5hbWUgfSxcbiAgICBdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgYnV5TWVBQ29mZmVlID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgc2lnbmVyXG4gICAgKTtcblxuICAgIGdldE1lbW9zKCk7XG4gICAgaXNXYWxsZXRDb25uZWN0ZWQoKTtcblxuICAgIGJ1eU1lQUNvZmZlZS5vbignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYnV5TWVBQ29mZmVlLm9mZignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG4gICAgfTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFthY2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBteS01XCI+XG4gICAgICAgIFBsZWFzZSwgYnV5IG1lIGEgY29mZmVlIVxuICAgICAgPC9oMT5cbiAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTIgYm9yZGVyLXItMlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTIgYm9yZGVyLXItMiBtYi01XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV5Q29mZmVlKG5hbWUsIGNvbW1lbnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtNTAwIHJvdW5kZWQtbWQgZ3Jvdy0wIGhvdmVyOmJnLXdoaXRlIGhvdmVyOiB0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJ1eSBjb2ZmZWUhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge21lbW9zLm1hcChtZW1vID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXttZW1vLnRpbWVzdGFtcH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHA+QWRkcmVzczoge21lbW8uYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgIDxwPk5hbWU6IHttZW1vLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cD5Db21tZW50OiB7bWVtby5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTUwMCByb3VuZGVkLW1kIGdyb3ctMCBob3ZlcjpiZy13aGl0ZSBob3ZlcjogdGV4dC1ibGFjayBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3Qgd2FsbGV0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXlDb2ZmZWU7XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiZ2V0Q29uZmlnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXlNZUFDb2ZmZWVBYmkiLCJCdXlDb2ZmZWUiLCJwcm92aWRlciIsImJ1eU1lQUNvZmZlZSIsInNpZ25lciIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25maWciLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsIm1lbW9zIiwic2V0TWVtb3MiLCJuYW1lIiwic2V0TmFtZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImVycm9yIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZ2V0TWVtb3MiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsIkJ1eU1lQUNvZmZlZUFkZHJlc3MiLCJsb2ciLCJpc1dhbGxldENvbm5lY3RlZCIsImxlbmd0aCIsImJ1eUNvZmZlZSIsInR4UmVzIiwidmFsdWUiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ3YWl0IiwiYWxlcnQiLCJvbk5ld01lbW8iLCJmcm9tIiwidGltZXN0YW1wIiwicHJldiIsImFkZHJlc3MiLCJEYXRlIiwib24iLCJvZmYiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIm1lbW8iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BuyCoffee.tsx\n"));

/***/ })

});