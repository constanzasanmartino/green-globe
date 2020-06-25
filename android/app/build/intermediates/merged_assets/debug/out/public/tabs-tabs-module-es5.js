(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\" color=\"greenGlobe\">\r\n        <ion-tab-button>\r\n            <!-- <ion-tab-button tab=\"tab1\"> -->\r\n            <ion-icon name=\"home\"></ion-icon>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"eventos\">\r\n            <ion-icon name=\"planet\"></ion-icon>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button>\r\n            <!-- <ion-tab-button tab=\"tab3\"> -->\r\n            <ion-icon name=\"person\"></ion-icon>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n</ion-tabs>");
            /***/ 
        }),
        /***/ "./src/app/tabs/tabs-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/tabs/tabs-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: TabsPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () { return TabsPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
            var routes = [
                {
                    path: 'tabs',
                    component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
                    children: [
                        {
                            path: 'tab1',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-tab1-tab1-module */ "pages-tab1-tab1-module").then(__webpack_require__.bind(null, /*! ../pages/tab1/tab1.module */ "./src/app/pages/tab1/tab1.module.ts")).then(function (m) { return m.Tab1PageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'eventos',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-eventos-page-eventos-page-module */ [__webpack_require__.e("common"), __webpack_require__.e("pages-eventos-page-eventos-page-module")]).then(__webpack_require__.bind(null, /*! ../pages/eventos-page/eventos-page.module */ "./src/app/pages/eventos-page/eventos-page.module.ts")).then(function (m) { return m.EventosPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'tab3',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-tab3-tab3-module */ "pages-tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../pages/tab3/tab3.module */ "./src/app/pages/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; }); }
                                }
                            ]
                        },
                        {
                            path: '',
                            redirectTo: '/tabs/eventos',
                            pathMatch: 'full'
                        }
                    ]
                },
                {
                    path: '',
                    redirectTo: '/tabs/eventos',
                    pathMatch: 'full'
                }
            ];
            var TabsPageRoutingModule = /** @class */ (function () {
                function TabsPageRoutingModule() {
                }
                return TabsPageRoutingModule;
            }());
            TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TabsPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/tabs/tabs.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/tabs/tabs.module.ts ***!
          \*************************************/
        /*! exports provided: TabsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () { return TabsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
            /* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
            var TabsPageModule = /** @class */ (function () {
                function TabsPageModule() {
                }
                return TabsPageModule;
            }());
            TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
                    ],
                    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
                })
            ], TabsPageModule);
            /***/ 
        }),
        /***/ "./src/app/tabs/tabs.page.scss": 
        /*!*************************************!*\
          !*** ./src/app/tabs/tabs.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  transition: background-color 0.5s ease;\n  background-color: #379b80;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcTHVjYXNcXEdpdEh1YlxcZ3JlZW4tZ2xvYmUvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzliODA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCJpb24tdGFiLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5YjgwO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/tabs/tabs.page.ts": 
        /*!***********************************!*\
          !*** ./src/app/tabs/tabs.page.ts ***!
          \***********************************/
        /*! exports provided: TabsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function () { return TabsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TabsPage = /** @class */ (function () {
                function TabsPage() {
                }
                return TabsPage;
            }());
            TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tabs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TabsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
//# sourceMappingURL=tabs-tabs-module-es5.js.map
//# sourceMappingURL=tabs-tabs-module-es5.js.map