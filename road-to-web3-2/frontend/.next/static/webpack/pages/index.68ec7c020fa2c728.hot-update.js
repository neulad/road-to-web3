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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/BuyMeAcoffee.json */ \"./constants/BuyMeAcoffee.json\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BuyCoffee = ()=>{\n    _s();\n    let provider;\n    let buyMeACoffee;\n    let signer;\n    const { publicRuntimeConfig: config  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [memos, setMemos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) {\n                console.error(\"Install Metamask!\");\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setAccount(accounts[0]);\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(\"Error while connecting: \".concat(err.message));\n            } else console.error(err);\n        }\n    };\n    const getMemos = async ()=>{\n        try {\n            if (window.ethereum) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                const memos = await buyMeACoffee.getMemos();\n                setMemos(memos);\n            } else {\n                console.log(\"Metamask is not connected\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const isWalletConnected = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length > 0) {\n                setAccount(accounts[0]);\n            } else {\n                console.error(\"No accounts found!\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyCoffee = async (name, message)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.buyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            await buyMeACoffee.buyCoffee(name, message, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.001\")\n            });\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const onNewMemo = (from, timestamp, name, message)=>{\n        setMemos((prev)=>[\n                ...prev,\n                {\n                    address: from,\n                    timestamp: new Date(timestamp * 1000),\n                    message,\n                    name\n                }\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!account) return;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        signer = provider.getSigner();\n        buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n        getMemos();\n        isWalletConnected();\n        buyMeACoffee.on(\"NewMemo\", onNewMemo);\n        return ()=>{\n            buyMeACoffee.off(\"NewMemo\", onNewMemo);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl font-bold my-5\",\n                children: \"Please, buy me a cigarette!\"\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                onChange: (e)=>{\n                                    setName(e.target.value);\n                                },\n                                className: \"p-2 border-2 border-r-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"comment\",\n                                type: \"text\",\n                                onChange: (e)=>{\n                                    setMessage(e.target.value);\n                                },\n                                placeholder: \"Comment\",\n                                className: \"p-2 border-2 border-r-2 mb-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onC: true,\n                                className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                                children: \"Buy cigarette!\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, undefined),\n                    memos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"memo\"\n                        }, 1, false, {\n                            fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectWallet,\n                    className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                    children: \"Connect wallet!\"\n                }, void 0, false, {\n                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 181,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BuyCoffee, \"gjZa+Cq24p7ticCFhfRlxMvEluw=\");\n_c = BuyCoffee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuyCoffee);\nvar _c;\n$RefreshReg$(_c, \"BuyCoffee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBDQUdaLDhEQUFDRTtnQ0FBTUMsU0FBUTtnQ0FBT0gsV0FBVTswQ0FBUTs7Ozs7OzBDQUd4Qyw4REFBQ0k7Z0NBQ0NDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xFLFVBQVVDLENBQUFBLElBQUs7b0NBQ2I1QyxXQUFXNEMsRUFBRUMsTUFBTSxDQUFDdkIsS0FBSztnQ0FDM0I7Z0NBQ0FvQixhQUFZO2dDQUNaUCxXQUFVOzs7Ozs7MENBRVosOERBQUNXO2dDQUNDQyxHQUFHO2dDQUNIWixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7b0JBSUZ4QyxNQUFNcUQsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ2hCO3NDQUFZOzJCQUFIOzs7Ozs7Ozs7OzBDQUlkLDhEQUFDQTtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ1c7b0JBQ0NJLFNBQVNqRDtvQkFDVGtDLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7eUJBSUo7Ozs7Ozs7QUFHUDtHQXJMTWhEO0tBQUFBO0FBdUxOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV5Q29mZmVlLnRzeD8wNjlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXlNZUFDb2ZmZWVBYmkgZnJvbSAnLi4vY29uc3RhbnRzL0J1eU1lQWNvZmZlZS5qc29uJztcblxuaW50ZXJmYWNlIEV0aGVyZXVtV2luZG93IHtcbiAgZXRoZXJldW06IGFueTtcbn1cblxuY29uc3QgQnV5Q29mZmVlID0gKCkgPT4ge1xuICBsZXQgcHJvdmlkZXI6IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyO1xuICBsZXQgYnV5TWVBQ29mZmVlOiBldGhlcnMuQ29udHJhY3Q7XG4gIGxldCBzaWduZXI6IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1NpZ25lcjtcblxuICBjb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWc6IGNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZW1vcywgc2V0TWVtb3NdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW5zdGFsbCBNZXRhbWFzayEnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCEoe1xuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGlsZSBjb25uZWN0aW5nOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TWVtb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29uZmlnLkJ1eU1lQUNvZmZlZUFkZHJlc3MsXG4gICAgICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lbW9zID0gYXdhaXQgYnV5TWVBQ29mZmVlLmdldE1lbW9zKCk7XG4gICAgICAgIHNldE1lbW9zKG1lbW9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBpcyBub3QgY29ubmVjdGVkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0ISh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9hY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCEnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV5Q29mZmVlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5lcnJvcignTWV0YU1hc2sgbm90IGNvbm5lY3RlZCEnKTtcbiAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbmZpZy5idXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgYXdhaXQgYnV5TWVBQ29mZmVlLmJ1eUNvZmZlZShuYW1lLCBtZXNzYWdlLCB7XG4gICAgICAgIHZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcignMC4wMDEnKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbk5ld01lbW8gPSAoZnJvbTogYW55LCB0aW1lc3RhbXA6IGFueSwgbmFtZTogYW55LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICBzZXRNZW1vcyhwcmV2ID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGFkZHJlc3M6IGZyb20sIHRpbWVzdGFtcDogbmV3IERhdGUodGltZXN0YW1wICogMTAwMCksIG1lc3NhZ2UsIG5hbWUgfSxcbiAgICBdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgYnV5TWVBQ29mZmVlID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgc2lnbmVyXG4gICAgKTtcblxuICAgIGdldE1lbW9zKCk7XG4gICAgaXNXYWxsZXRDb25uZWN0ZWQoKTtcblxuICAgIGJ1eU1lQUNvZmZlZS5vbignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYnV5TWVBQ29mZmVlLm9mZignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG4gICAgfTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFthY2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBteS01XCI+XG4gICAgICAgIFBsZWFzZSwgYnV5IG1lIGEgY2lnYXJldHRlIVxuICAgICAgPC9oMT5cbiAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTIgYm9yZGVyLXItMlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTIgYm9yZGVyLXItMiBtYi01XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtNTAwIHJvdW5kZWQtbWQgZ3Jvdy0wIGhvdmVyOmJnLXdoaXRlIGhvdmVyOiB0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJ1eSBjaWdhcmV0dGUhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge21lbW9zLm1hcChtZW1vID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXsxfT5tZW1vPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtNTAwIHJvdW5kZWQtbWQgZ3Jvdy0wIGhvdmVyOmJnLXdoaXRlIGhvdmVyOiB0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXQhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1eUNvZmZlZTtcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJnZXRDb25maWciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1eU1lQUNvZmZlZUFiaSIsIkJ1eUNvZmZlZSIsInByb3ZpZGVyIiwiYnV5TWVBQ29mZmVlIiwic2lnbmVyIiwicHVibGljUnVudGltZUNvbmZpZyIsImNvbmZpZyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwibWVtb3MiLCJzZXRNZW1vcyIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJjb25zb2xlIiwiZXJyb3IiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnIiLCJFcnJvciIsImdldE1lbW9zIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJCdXlNZUFDb2ZmZWVBZGRyZXNzIiwibG9nIiwiaXNXYWxsZXRDb25uZWN0ZWQiLCJsZW5ndGgiLCJidXlDb2ZmZWUiLCJidXlNZUFDb2ZmZWVBZGRyZXNzIiwidmFsdWUiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJvbk5ld01lbW8iLCJmcm9tIiwidGltZXN0YW1wIiwicHJldiIsImFkZHJlc3MiLCJEYXRlIiwib24iLCJvZmYiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DIiwibWFwIiwibWVtbyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BuyCoffee.tsx\n"));

/***/ })

});