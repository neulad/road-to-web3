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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/BuyMeAcoffee.json */ \"./constants/BuyMeAcoffee.json\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BuyCoffee = ()=>{\n    _s();\n    let provider;\n    let buyMeACoffee;\n    let signer;\n    const { publicRuntimeConfig: config  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [memos, setMemos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) {\n                console.error(\"Install Metamask!\");\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setAccount(accounts[0]);\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(\"Error while connecting: \".concat(err.message));\n            } else console.error(err);\n        }\n    };\n    const getMemos = async ()=>{\n        try {\n            if (window.ethereum) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                const memos = await buyMeACoffee.getMemos();\n                setMemos(memos);\n            } else {\n                console.log(\"Metamask is not connected\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const isWalletConnected = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length > 0) {\n                setAccount(accounts[0]);\n            } else {\n                console.error(\"No accounts found!\");\n            }\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const buyCoffee = async (name, message)=>{\n        try {\n            if (!window.ethereum) return console.error(\"MetaMask not connected!\");\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n            signer = provider.getSigner();\n            buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.buyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n            await buyMeACoffee.buyCoffee(name, message, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(\"0.001\")\n            });\n        } catch (err) {\n            if (err instanceof Error) {\n                console.error(err.message);\n            } else {\n                console.error(err);\n            }\n        }\n    };\n    const onNewMemo = (from, timestamp, name, message)=>{\n        setMemos((prev)=>[\n                ...prev,\n                {\n                    address: from,\n                    timestamp: new Date(timestamp * 1000),\n                    message,\n                    name\n                }\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!account) return;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        signer = provider.getSigner();\n        buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(config.BuyMeACoffeeAddress, _constants_BuyMeAcoffee_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n        getMemos();\n        isWalletConnected();\n        buyMeACoffee.on(\"NewMemo\", onNewMemo);\n        return ()=>{\n            buyMeACoffee.off(\"NewMemo\", onNewMemo);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl font-bold my-5\",\n                children: \"Please, buy me a cigarette!\"\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"account: \",\n                    account\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectWallet,\n                    className: \"p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black\",\n                    children: \"Connect wallet!\"\n                }, void 0, false, {\n                    fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neulad/codes/Solidity/training/road-to-web-2/frontend/components/BuyCoffee.tsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BuyCoffee, \"c+myUpyZT4Tj8ZejB/zVjvshtCI=\");\n_c = BuyCoffee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuyCoffee);\nvar _c;\n$RefreshReg$(_c, \"BuyCoffee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0JBQ0xQLFFBQVFDLEtBQUssQ0FBQ0k7WUFDaEIsQ0FBQztRQUNIO0lBQ0Y7SUFFQSxNQUFNa0IsWUFBWSxDQUFDQyxNQUFXQyxXQUFnQlAsTUFBV1gsVUFBaUI7UUFDeEVYLFNBQVM4QixDQUFBQSxPQUFRO21CQUNaQTtnQkFDSDtvQkFBRUMsU0FBU0g7b0JBQU1DLFdBQVcsSUFBSUcsS0FBS0gsWUFBWTtvQkFBT2xCO29CQUFTVztnQkFBSzthQUN2RTtJQUNIO0lBRUFsQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDUyxTQUFTO1FBQ2RMLFdBQVcsSUFBSU4saUVBQTZCLENBQUNnQixPQUFPQyxRQUFRO1FBQzVEVCxTQUFTRixTQUFTdUIsU0FBUztRQUMzQnRCLGVBQWUsSUFBSVAsbURBQWUsQ0FDaENVLE9BQU9xQixtQkFBbUIsRUFDMUIzQix5REFBZUEsRUFDZkk7UUFHRmtCO1FBQ0FPO1FBRUExQixhQUFhd0MsRUFBRSxDQUFDLFdBQVdOO1FBRTNCLE9BQU8sSUFBTTtZQUNYbEMsYUFBYXlDLEdBQUcsQ0FBQyxXQUFXUDtRQUM5QjtJQUNBLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUM5QjtLQUFRO0lBRVoscUJBQ0UsOERBQUNzQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzQzs7Ozs7O1lBR25EeEMsd0JBQ0MsOERBQUNzQzs7b0JBQUk7b0JBQVV0Qzs7Ozs7OzBDQUVmLDhEQUFDc0M7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUNDQyxTQUFTdEM7b0JBQ1RvQyxXQUFVOzhCQUNYOzs7Ozs7Ozs7O3lCQUlKOzs7Ozs7O0FBR1A7R0E5SU05QztLQUFBQTtBQWdKTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1eUNvZmZlZS50c3g/MDY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV5TWVBQ29mZmVlQWJpIGZyb20gJy4uL2NvbnN0YW50cy9CdXlNZUFjb2ZmZWUuanNvbic7XG5cbmludGVyZmFjZSBFdGhlcmV1bVdpbmRvdyB7XG4gIGV0aGVyZXVtOiBhbnk7XG59XG5cbmNvbnN0IEJ1eUNvZmZlZSA9ICgpID0+IHtcbiAgbGV0IHByb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcjtcbiAgbGV0IGJ1eU1lQUNvZmZlZTogZXRoZXJzLkNvbnRyYWN0O1xuICBsZXQgc2lnbmVyOiBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNTaWduZXI7XG5cbiAgY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOiBjb25maWcgfSA9IGdldENvbmZpZygpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWVtb3MsIHNldE1lbW9zXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW5zdGFsbCBNZXRhbWFzayEnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCEoe1xuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGlsZSBjb25uZWN0aW5nOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TWVtb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29uZmlnLkJ1eU1lQUNvZmZlZUFkZHJlc3MsXG4gICAgICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lbW9zID0gYXdhaXQgYnV5TWVBQ29mZmVlLmdldE1lbW9zKCk7XG4gICAgICAgIHNldE1lbW9zKG1lbW9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBpcyBub3QgY29ubmVjdGVkJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0ISh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9hY2NvdW50cycsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCEnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV5Q29mZmVlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5lcnJvcignTWV0YU1hc2sgbm90IGNvbm5lY3RlZCEnKTtcbiAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbmZpZy5idXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgICBCdXlNZUFDb2ZmZWVBYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgYXdhaXQgYnV5TWVBQ29mZmVlLmJ1eUNvZmZlZShuYW1lLCBtZXNzYWdlLCB7XG4gICAgICAgIHZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcignMC4wMDEnKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbk5ld01lbW8gPSAoZnJvbTogYW55LCB0aW1lc3RhbXA6IGFueSwgbmFtZTogYW55LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICBzZXRNZW1vcyhwcmV2ID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGFkZHJlc3M6IGZyb20sIHRpbWVzdGFtcDogbmV3IERhdGUodGltZXN0YW1wICogMTAwMCksIG1lc3NhZ2UsIG5hbWUgfSxcbiAgICBdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgYnV5TWVBQ29mZmVlID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbmZpZy5CdXlNZUFDb2ZmZWVBZGRyZXNzLFxuICAgICAgQnV5TWVBQ29mZmVlQWJpLFxuICAgICAgc2lnbmVyXG4gICAgKTtcblxuICAgIGdldE1lbW9zKCk7XG4gICAgaXNXYWxsZXRDb25uZWN0ZWQoKTtcblxuICAgIGJ1eU1lQUNvZmZlZS5vbignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYnV5TWVBQ29mZmVlLm9mZignTmV3TWVtbycsIG9uTmV3TWVtbyk7XG4gICAgfTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFthY2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBteS01XCI+XG4gICAgICAgIFBsZWFzZSwgYnV5IG1lIGEgY2lnYXJldHRlIVxuICAgICAgPC9oMT5cbiAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICA8ZGl2PmFjY291bnQ6IHthY2NvdW50fTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtNTAwIHJvdW5kZWQtbWQgZ3Jvdy0wIGhvdmVyOmJnLXdoaXRlIGhvdmVyOiB0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXQhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1eUNvZmZlZTtcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJnZXRDb25maWciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1eU1lQUNvZmZlZUFiaSIsIkJ1eUNvZmZlZSIsInByb3ZpZGVyIiwiYnV5TWVBQ29mZmVlIiwic2lnbmVyIiwicHVibGljUnVudGltZUNvbmZpZyIsImNvbmZpZyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwibWVtb3MiLCJzZXRNZW1vcyIsImNvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJlcnJvciIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsImdldE1lbW9zIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJCdXlNZUFDb2ZmZWVBZGRyZXNzIiwibG9nIiwiaXNXYWxsZXRDb25uZWN0ZWQiLCJsZW5ndGgiLCJidXlDb2ZmZWUiLCJuYW1lIiwiYnV5TWVBQ29mZmVlQWRkcmVzcyIsInZhbHVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwib25OZXdNZW1vIiwiZnJvbSIsInRpbWVzdGFtcCIsInByZXYiLCJhZGRyZXNzIiwiRGF0ZSIsIm9uIiwib2ZmIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BuyCoffee.tsx\n"));

/***/ })

});