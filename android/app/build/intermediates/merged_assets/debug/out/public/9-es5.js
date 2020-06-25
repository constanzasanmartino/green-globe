var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js": 
        /*!***********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js ***!
          \***********************************************************************/
        /*! exports provided: ion_back_button */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_back_button", function () { return BackButton; });
            /* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            var BackButton = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    /**
                     * If `true`, the user cannot interact with the button.
                     */
                    this.disabled = false;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.onClick = function (ev) { return __awaiter(_this, void 0, void 0, function () {
                        var nav, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    nav = this.el.closest('ion-nav');
                                    ev.preventDefault();
                                    _a = nav;
                                    if (!_a) return [3 /*break*/, 2];
                                    return [4 /*yield*/, nav.canGoBack()];
                                case 1:
                                    _a = (_b.sent());
                                    _b.label = 2;
                                case 2:
                                    if (_a) {
                                        return [2 /*return*/, nav.pop({ skipIfBusy: true })];
                                    }
                                    return [2 /*return*/, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(this.defaultHref, ev, 'back')];
                            }
                        });
                    }); };
                }
                Object.defineProperty(class_1.prototype, "backButtonIcon", {
                    get: function () {
                        var icon = this.icon;
                        if (icon != null) {
                            // icon is set on the component or by the config
                            return icon;
                        }
                        if (this.mode === 'ios') {
                            // default ios back button icon
                            return _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonIcon', 'chevron-back');
                        }
                        // default md back button icon
                        return _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonIcon', 'arrow-back-sharp');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "backButtonText", {
                    get: function () {
                        var defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
                        return this.text != null ? this.text : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonText', defaultBackButtonText);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "hasIconOnly", {
                    get: function () {
                        return this.backButtonIcon && !this.backButtonText;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "rippleType", {
                    get: function () {
                        // If the button only has an icon we use the unbounded
                        // "circular" ripple effect
                        if (this.hasIconOnly) {
                            return 'unbounded';
                        }
                        return 'bounded';
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, color = _b.color, defaultHref = _b.defaultHref, disabled = _b.disabled, type = _b.type, mode = _b.mode, hasIconOnly = _b.hasIconOnly, backButtonIcon = _b.backButtonIcon, backButtonText = _b.backButtonText;
                    var showBackButton = defaultHref !== undefined;
                    return (Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_a = {}, _a[mode] = true, _a['button'] = true, _a['back-button-disabled'] = disabled, _a['back-button-has-icon-only'] = hasIconOnly, _a['in-toolbar'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toolbar', this.el), _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a['show-back-button'] = showBackButton, _a)) }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: type, disabled: disabled, class: "button-native", part: "button" }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, backButtonIcon && Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: backButtonIcon, lazy: false, part: "icon" }), backButtonText && Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-text", part: "text" }, backButtonText)), mode === 'md' && Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: this.rippleType }))));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}\@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar){color:var(--ion-toolbar-color,var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-text{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon{line-height:.67;text-align:start}\@media (any-hover:hover){:host(.ion-color:hover) .button-native:after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native:after{background:var(--ion-color-base)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=9-es2015.js.map
//# sourceMappingURL=9-es5.js.map
//# sourceMappingURL=9-es5.js.map