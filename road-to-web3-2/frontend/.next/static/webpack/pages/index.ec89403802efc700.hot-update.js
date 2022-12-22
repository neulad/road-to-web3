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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/BuyMeAcoffee.json */ \"./constants/BuyMeAcoffee.json\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BuyCoffee = ()=>{\n    _s();\n    let provider;\n    let buyMeACoffee;\n    let signer;\n    const { publicRuntimeConfig: config  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [memos, setMemos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) {\n                console.error(\"Install Metamask!\");\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setAccount(accounts[0]);\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(\"Error while connecting: \".concat(err.message));\n            } else console.error(err);\n        }\n    };\n    const getMemos = async ()=>{\n        try {\n            if (window.ethereum) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                const memos = await buyMeACoffee.getMemos();\n                setMemos(memos);\n            } else {\n                console.log(\"Metamask is not connected\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const isWalletConnected = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length > 0) {\n                setAccount(accounts[0]);\n            } else {\n                console.error(\"No accounts found!\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyCoffee = async (name, message)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.buyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            await buyMeACoffee.buyCoffee(name, message, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.001\")\n            });\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const onNewMemo = (from, timestamp, name, message)=>{\n        setMemos((prev)=>[\n                ...prev,\n                {\n                    address: from,\n                    timestamp: new Date(timestamp * 1000),\n                    message,\n                    name\n                }\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!account) return;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        signer = provider.getSigner();\n        buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n        getMemos();\n        isWalletConnected();\n        buyMeACoffee.on(\"NewMemo\", onNewMemo);\n        return ()=>{\n            buyMeACoffee.off(\"NewMemo\", onNewMemo);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl font-bold my-5\",\n                children: \"Please, buy me a coffee!\"\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                onChange: (e)=>{\n                                    setName(e.target.value);\n                                },\n                                className: \"p-2 border-2 border-r-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"comment\",\n                                type: \"text\",\n                                onChange: (e)=>{\n                                    setComment(e.target.value);\n                                },\n                                placeholder: \"Comment\",\n                                className: \"p-2 border-2 border-r-2 mb-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: buyCoffe,\n                                className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                                children: \"Buy coffee!\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, undefined),\n                    memos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"memo\"\n                        }, 1, false, {\n                            fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectWallet,\n                    className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                    children: \"Connect wallet!\"\n                }, void 0, false, {\n                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 181,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BuyCoffee, \"5j06SOuffsKCu7x5m7VRMPNmVvU=\");\n_c = BuyCoffee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuyCoffee);\nvar _c;\n$RefreshReg$(_c, \"BuyCoffee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBDQUdaLDhEQUFDRTtnQ0FBTUMsU0FBUTtnQ0FBT0gsV0FBVTswQ0FBUTs7Ozs7OzBDQUd4Qyw4REFBQ0k7Z0NBQ0NDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xFLFVBQVVDLENBQUFBLElBQUs7b0NBQ2I3QyxXQUFXNkMsRUFBRUMsTUFBTSxDQUFDdkIsS0FBSztnQ0FDM0I7Z0NBQ0FvQixhQUFZO2dDQUNaUCxXQUFVOzs7Ozs7MENBRVosOERBQUNXO2dDQUNDQyxTQUFTQztnQ0FDVGIsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O29CQUlGekMsTUFBTXVELEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNqQjtzQ0FBWTsyQkFBSDs7Ozs7Ozs7OzswQ0FJZCw4REFBQ0E7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNXO29CQUNDQyxTQUFTL0M7b0JBQ1RtQyxXQUFVOzhCQUNYOzs7Ozs7Ozs7O3lCQUlKOzs7Ozs7O0FBR1A7R0FyTE1qRDtLQUFBQTtBQXVMTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1eUNvZmZlZS50c3g/MDY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV5TWVBQ29mZmVlQWJpIGZyb20gJy4uL2NvbnN0YW50cy9CdXlNZUFjb2ZmZWUuanNvbic7XG5cbmludGVyZmFjZSBFdGhlcmV1bVdpbmRvdyB7XG4gIGV0aGVyZXVtOiBhbnk7XG59XG5cbmNvbnN0IEJ1eUNvZmZlZSA9ICgpID0+IHtcbiAgbGV0IHByb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcjtcbiAgbGV0IGJ1eU1lQUNvZmZlZTogZXRoZXJzLkNvbnRyYWN0O1xuICBsZXQgc2lnbmVyOiBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNTaWduZXI7XG5cbiAgY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOiBjb25maWcgfSA9IGdldENvbmZpZygpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWVtb3MsIHNldE1lbW9zXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc3RhbGwgTWV0YW1hc2shJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QhKHtcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hpbGUgY29ubmVjdGluZzogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE1lbW9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBidXlNZUFDb2ZmZWUgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICAgIEJ1eU1lQUNvZmZlZUFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtZW1vcyA9IGF3YWl0IGJ1eU1lQUNvZmZlZS5nZXRNZW1vcygpO1xuICAgICAgICBzZXRNZW1vcyhtZW1vcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTWV0YW1hc2sgaXMgbm90IGNvbm5lY3RlZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCEoe1xuICAgICAgICBtZXRob2Q6ICdldGhfYWNjb3VudHMnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gYWNjb3VudHMgZm91bmQhJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1eUNvZmZlZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXdpbmRvdy5ldGhlcmV1bSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ01ldGFNYXNrIG5vdCBjb25uZWN0ZWQhJyk7XG4gICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBidXlNZUFDb2ZmZWUgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICBjb25maWcuYnV5TWVBQ29mZmVlQWRkcmVzcyxcbiAgICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG5cbiAgICAgIGF3YWl0IGJ1eU1lQUNvZmZlZS5idXlDb2ZmZWUobmFtZSwgbWVzc2FnZSwge1xuICAgICAgICB2YWx1ZTogZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoJzAuMDAxJyksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25OZXdNZW1vID0gKGZyb206IGFueSwgdGltZXN0YW1wOiBhbnksIG5hbWU6IGFueSwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgc2V0TWVtb3MocHJldiA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAgeyBhZGRyZXNzOiBmcm9tLCB0aW1lc3RhbXA6IG5ldyBEYXRlKHRpbWVzdGFtcCAqIDEwMDApLCBtZXNzYWdlLCBuYW1lIH0sXG4gICAgXSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWFjY291bnQpIHJldHVybjtcbiAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb25maWcuQnV5TWVBQ29mZmVlQWRkcmVzcyxcbiAgICAgIEJ1eU1lQUNvZmZlZUFiaSxcbiAgICAgIHNpZ25lclxuICAgICk7XG5cbiAgICBnZXRNZW1vcygpO1xuICAgIGlzV2FsbGV0Q29ubmVjdGVkKCk7XG5cbiAgICBidXlNZUFDb2ZmZWUub24oJ05ld01lbW8nLCBvbk5ld01lbW8pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGJ1eU1lQUNvZmZlZS5vZmYoJ05ld01lbW8nLCBvbk5ld01lbW8pO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbYWNjb3VudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgbXktNVwiPlxuICAgICAgICBQbGVhc2UsIGJ1eSBtZSBhIGNvZmZlZSFcbiAgICAgIDwvaDE+XG4gICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlci0yIGJvcmRlci1yLTJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAgQ29tbWVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlci0yIGJvcmRlci1yLTIgbWItNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtidXlDb2ZmZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTUwMCByb3VuZGVkLW1kIGdyb3ctMCBob3ZlcjpiZy13aGl0ZSBob3ZlcjogdGV4dC1ibGFjayBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCdXkgY29mZmVlIVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIHttZW1vcy5tYXAobWVtbyA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17MX0+bWVtbzwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTUwMCByb3VuZGVkLW1kIGdyb3ctMCBob3ZlcjpiZy13aGl0ZSBob3ZlcjogdGV4dC1ibGFjayBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3Qgd2FsbGV0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXlDb2ZmZWU7XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiZ2V0Q29uZmlnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXlNZUFDb2ZmZWVBYmkiLCJCdXlDb2ZmZWUiLCJwcm92aWRlciIsImJ1eU1lQUNvZmZlZSIsInNpZ25lciIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25maWciLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsIm1lbW9zIiwic2V0TWVtb3MiLCJuYW1lIiwic2V0TmFtZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImVycm9yIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZ2V0TWVtb3MiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsIkJ1eU1lQUNvZmZlZUFkZHJlc3MiLCJsb2ciLCJpc1dhbGxldENvbm5lY3RlZCIsImxlbmd0aCIsImJ1eUNvZmZlZSIsImJ1eU1lQUNvZmZlZUFkZHJlc3MiLCJ2YWx1ZSIsInV0aWxzIiwicGFyc2VFdGhlciIsIm9uTmV3TWVtbyIsImZyb20iLCJ0aW1lc3RhbXAiLCJwcmV2IiwiYWRkcmVzcyIsIkRhdGUiLCJvbiIsIm9mZiIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiYnV5Q29mZmUiLCJtYXAiLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BuyCoffee.tsx\n"));

/***/ })

});