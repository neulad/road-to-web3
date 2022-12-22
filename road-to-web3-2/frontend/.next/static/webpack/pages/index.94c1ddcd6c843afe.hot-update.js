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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/BuyMeAcoffee.json */ \"./constants/BuyMeAcoffee.json\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BuyCoffee = ()=>{\n    _s();\n    let provider;\n    let buyMeACoffee;\n    let signer;\n    const { publicRuntimeConfig: config  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [memos, setMemos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) {\n                console.error(\"Install Metamask!\");\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setAccount(accounts[0]);\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(\"Error while connecting: \".concat(err.message));\n            } else console.error(err);\n        }\n    };\n    const getMemos = async ()=>{\n        try {\n            if (window.ethereum) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                const memos = await buyMeACoffee.getMemos();\n                console.log(memos);\n                setMemos(memos);\n            } else {\n                console.log(\"Metamask is not connected\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const isWalletConnected = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length > 0) {\n                setAccount(accounts[0]);\n            } else {\n                console.error(\"No accounts found!\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyCoffee = async (name, comment)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            const txRes = await buyMeACoffee.buyCoffee(name ? name : \"anon\", comment ? comment : \"nocomment\", {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.001\")\n            });\n            setName(\"\");\n            setComment(\"\");\n            await txRes.wait(1);\n            alert(\"Coffee is bought\");\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyHugeCoffee = async (name, comment)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            const txRes = await buyMeACoffee.buyCoffee(name ? name : \"anon\", comment ? comment : \"nocomment\", {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.01\")\n            });\n            setName(\"\");\n            setComment(\"\");\n            await txRes.wait(1);\n            alert(\"Coffee is bought\");\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const onNewMemo = (from, timestamp, name, message)=>{\n        setMemos((prev)=>[\n                ...prev,\n                {\n                    address: from,\n                    timestamp: new Date(timestamp * 1000),\n                    message,\n                    name\n                }\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!account) return;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        signer = provider.getSigner();\n        buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n        getMemos();\n        isWalletConnected();\n        buyMeACoffee.on(\"NewMemo\", onNewMemo);\n        return ()=>{\n            buyMeACoffee.off(\"NewMemo\", onNewMemo);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl font-bold my-5\",\n                children: \"Please, buy me a coffee!\"\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"flex flex-col items-center mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 186,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                type: \"text\",\n                                value: name,\n                                placeholder: \"Name\",\n                                onChange: (e)=>{\n                                    setName(e.target.value);\n                                },\n                                className: \"p-2 border-2 border-r-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 200,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"comment\",\n                                type: \"text\",\n                                value: comment,\n                                onChange: (e)=>{\n                                    setComment(e.target.value);\n                                },\n                                placeholder: \"Comment\",\n                                className: \"p-2 border-2 border-r-2 mb-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 203,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    buyCoffee(name, comment);\n                                },\n                                className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                                children: \"Buy coffee!\"\n                            }, void 0, false, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 213,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center gap-4 p-2\",\n                        children: memos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 bg-stone-600 text-white rounded-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Address: \",\n                                            memo.from\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                        lineNumber: 229,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Name: \",\n                                            memo.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                        lineNumber: 230,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Comment: \",\n                                            memo.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                        lineNumber: 231,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, memo.timestamp, true, {\n                                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                                lineNumber: 225,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                        lineNumber: 223,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 184,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectWallet,\n                    className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                    children: \"Connect wallet!\"\n                }, void 0, false, {\n                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                    lineNumber: 238,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 237,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BuyCoffee, \"5j06SOuffsKCu7x5m7VRMPNmVvU=\");\n_c = BuyCoffee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuyCoffee);\nvar _c;\n$RefreshReg$(_c, \"BuyCoffee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQ1pQLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ1c7Z0NBQ0NMLE1BQUs7Z0NBQ0xNLFNBQVMsSUFBTTtvQ0FDYjlCLFVBQVV4QixNQUFNRTtnQ0FDbEI7Z0NBQ0F3QyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUNaNUMsTUFBTXlELEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNoQjtnQ0FFQ0UsV0FBVTs7a0RBRVYsOERBQUNlOzs0Q0FBRTs0Q0FBVUQsS0FBS3ZCLElBQUk7Ozs7Ozs7a0RBQ3RCLDhEQUFDd0I7OzRDQUFFOzRDQUFPRCxLQUFLeEQsSUFBSTs7Ozs7OztrREFDbkIsOERBQUN5RDs7NENBQUU7NENBQVVELEtBQUsxQyxPQUFPOzs7Ozs7OzsrQkFMcEIwQyxLQUFLdEIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OzBDQVczQiw4REFBQ007Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNXO29CQUNDQyxTQUFTbEQ7b0JBQ1RzQyxXQUFVOzhCQUNYOzs7Ozs7Ozs7O3lCQUlKOzs7Ozs7O0FBR1A7R0E3T01wRDtLQUFBQTtBQStPTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1eUNvZmZlZS50c3g/MDY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV5TWVBQ29mZmVlQWJpIGZyb20gJy4uL2NvbnN0YW50cy9CdXlNZUFjb2ZmZWUuanNvbic7XG5cbmludGVyZmFjZSBFdGhlcmV1bVdpbmRvdyB7XG4gIGV0aGVyZXVtOiBhbnk7XG59XG5cbmNvbnN0IEJ1eUNvZmZlZSA9ICgpID0+IHtcbiAgbGV0IHByb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcjtcbiAgbGV0IGJ1eU1lQUNvZmZlZTogZXRoZXJzLkNvbnRyYWN0O1xuICBsZXQgc2lnbmVyOiBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNTaWduZXI7XG5cbiAgY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOiBjb25maWcgfSA9IGdldENvbmZpZygpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWVtb3MsIHNldE1lbW9zXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc3RhbGwgTWV0YW1hc2shJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QhKHtcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hpbGUgY29ubmVjdGluZzogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE1lbW9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBidXlNZUFDb2ZmZWUgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICAgIEJ1eU1lQUNvZmZlZUFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtZW1vcyA9IGF3YWl0IGJ1eU1lQUNvZmZlZS5nZXRNZW1vcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1vcyk7XG4gICAgICAgIHNldE1lbW9zKG1lbW9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBpcyBub3QgY29ubmVjdGVkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0ISh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9hY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCEnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV5Q29mZmVlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5lcnJvcignTWV0YU1hc2sgbm90IGNvbm5lY3RlZCEnKTtcbiAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgY29uc3QgdHhSZXMgPSBhd2FpdCBidXlNZUFDb2ZmZWUuYnV5Q29mZmVlKFxuICAgICAgICBuYW1lID8gbmFtZSA6ICdhbm9uJyxcbiAgICAgICAgY29tbWVudCA/IGNvbW1lbnQgOiAnbm9jb21tZW50JyxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcignMC4wMDEnKSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHNldE5hbWUoJycpO1xuICAgICAgc2V0Q29tbWVudCgnJyk7XG4gICAgICBhd2FpdCB0eFJlcy53YWl0KDEpO1xuXG4gICAgICBhbGVydCgnQ29mZmVlIGlzIGJvdWdodCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBidXlIdWdlQ29mZmVlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5lcnJvcignTWV0YU1hc2sgbm90IGNvbm5lY3RlZCEnKTtcbiAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgY29uc3QgdHhSZXMgPSBhd2FpdCBidXlNZUFDb2ZmZWUuYnV5Q29mZmVlKFxuICAgICAgICBuYW1lID8gbmFtZSA6ICdhbm9uJyxcbiAgICAgICAgY29tbWVudCA/IGNvbW1lbnQgOiAnbm9jb21tZW50JyxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcignMC4wMScpLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgc2V0TmFtZSgnJyk7XG4gICAgICBzZXRDb21tZW50KCcnKTtcbiAgICAgIGF3YWl0IHR4UmVzLndhaXQoMSk7XG5cbiAgICAgIGFsZXJ0KCdDb2ZmZWUgaXMgYm91Z2h0Jyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uTmV3TWVtbyA9IChmcm9tOiBhbnksIHRpbWVzdGFtcDogYW55LCBuYW1lOiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgIHNldE1lbW9zKHByZXYgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgYWRkcmVzczogZnJvbSwgdGltZXN0YW1wOiBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKSwgbWVzc2FnZSwgbmFtZSB9LFxuICAgIF0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhY2NvdW50KSByZXR1cm47XG4gICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBidXlNZUFDb2ZmZWUgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgY29uZmlnLkJ1eU1lQUNvZmZlZUFkZHJlc3MsXG4gICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICBzaWduZXJcbiAgICApO1xuXG4gICAgZ2V0TWVtb3MoKTtcbiAgICBpc1dhbGxldENvbm5lY3RlZCgpO1xuXG4gICAgYnV5TWVBQ29mZmVlLm9uKCdOZXdNZW1vJywgb25OZXdNZW1vKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBidXlNZUFDb2ZmZWUub2ZmKCdOZXdNZW1vJywgb25OZXdNZW1vKTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2FjY291bnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIG15LTVcIj5cbiAgICAgICAgUGxlYXNlLCBidXkgbWUgYSBjb2ZmZWUhXG4gICAgICA8L2gxPlxuICAgICAge2FjY291bnQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXItMiBib3JkZXItci0yXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgIENvbW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTIgYm9yZGVyLXItMiBtYi01XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV5Q29mZmVlKG5hbWUsIGNvbW1lbnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtNTAwIHJvdW5kZWQtbWQgZ3Jvdy0wIGhvdmVyOmJnLXdoaXRlIGhvdmVyOiB0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJ1eSBjb2ZmZWUhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBwLTJcIj5cbiAgICAgICAgICAgIHttZW1vcy5tYXAobWVtbyA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e21lbW8udGltZXN0YW1wfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1zdG9uZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwPkFkZHJlc3M6IHttZW1vLmZyb219PC9wPlxuICAgICAgICAgICAgICAgIDxwPk5hbWU6IHttZW1vLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkNvbW1lbnQ6IHttZW1vLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTUwMCByb3VuZGVkLW1kIGdyb3ctMCBob3ZlcjpiZy13aGl0ZSBob3ZlcjogdGV4dC1ibGFjayBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3Qgd2FsbGV0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXlDb2ZmZWU7XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiZ2V0Q29uZmlnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXlNZUFDb2ZmZWVBYmkiLCJCdXlDb2ZmZWUiLCJwcm92aWRlciIsImJ1eU1lQUNvZmZlZSIsInNpZ25lciIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25maWciLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsIm1lbW9zIiwic2V0TWVtb3MiLCJuYW1lIiwic2V0TmFtZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImVycm9yIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZ2V0TWVtb3MiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsIkJ1eU1lQUNvZmZlZUFkZHJlc3MiLCJsb2ciLCJpc1dhbGxldENvbm5lY3RlZCIsImxlbmd0aCIsImJ1eUNvZmZlZSIsInR4UmVzIiwidmFsdWUiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ3YWl0IiwiYWxlcnQiLCJidXlIdWdlQ29mZmVlIiwib25OZXdNZW1vIiwiZnJvbSIsInRpbWVzdGFtcCIsInByZXYiLCJhZGRyZXNzIiwiRGF0ZSIsIm9uIiwib2ZmIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJtZW1vIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BuyCoffee.tsx\n"));

/***/ })

});