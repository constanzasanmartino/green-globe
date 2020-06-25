(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evento-detail-evento-detail-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evento-detail/evento-detail.page.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evento-detail/evento-detail.page.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"greenglobe\">\r\n        <ion-title>Evento</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-evento\">\r\n    <ion-slides *ngIf=\"imagnesEvento.length > 0\" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let imagen of imagnesEvento\">\r\n            <div class=\"imagen-container\">\r\n                <ion-img [src]=\"imagen.urlImagen\"></ion-img>\r\n            </div>\r\n        </ion-slide>\r\n    </ion-slides>\r\n    <ion-card mode=\"ios\" class=\"evento\">\r\n        <ion-card-header>\r\n            <ion-card-subtitle>{{evento.fechaInicio | date: 'dd/MM/yyyy HH:mm'}}</ion-card-subtitle>\r\n            <ion-card-title>{{ evento.nombre }}</ion-card-title>\r\n            <ion-card-subtitle>{{ evento.ubicacion }}</ion-card-subtitle>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n            <ion-card-subtitle> <b class=\"b-size\">Descripción</b> </ion-card-subtitle>\r\n            {{ evento.descripcion }}\r\n            <br>\r\n            <ion-chip color=\"{{tipos[evento.tipo -1].color}}\">\r\n                <ion-label color=\"{{tipos[evento.tipo -1].color}}\">\r\n                    <ion-icon name=\"{{tipos[evento.tipo -1].icono}}\"></ion-icon>\r\n                    {{ tipos[evento.tipo -1].descripcion}}\r\n                </ion-label>\r\n            </ion-chip>\r\n            <br>\r\n            <br>\r\n            <ion-card-subtitle> <b class=\"b-size\">Contacto</b> </ion-card-subtitle>\r\n            <div *ngIf=\"evento.linkContacto || evento.celularContacto \">\r\n                <div>\r\n                    {{ evento.nombreContacto }}\r\n                </div>\r\n                <div>\r\n                    {{ evento.mailContacto }}\r\n                </div>\r\n                <div>\r\n                    {{ evento.celularContacto }}\r\n                </div>\r\n                <a *ngIf=\"evento.linkContacto\" href=\"{{evento.linkContacto}}\">\r\n                    <ion-icon *ngIf=\"instagram\" size=\"large\" name=\"logo-instagram\"></ion-icon>\r\n                    <ion-icon *ngIf=\"facebook\" size=\"large\" name=\"logo-facebook\"></ion-icon>\r\n                </a>\r\n\r\n            </div>\r\n        </ion-card-content>\r\n\r\n    </ion-card>\r\n    <div *ngFor=\"let comentario of comentariosEvento\">\r\n        <app-comentario-card  [comentarioEvento]=\"comentario\"></app-comentario-card>\r\n    </div>\r\n    \r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/evento-detail/evento-detail.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/evento-detail/evento-detail.module.ts ***!
          \*************************************************************/
        /*! exports provided: EventoDetailPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoDetailPageModule", function () { return EventoDetailPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _evento_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evento-detail.page */ "./src/app/pages/evento-detail/evento-detail.page.ts");
            /* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
            var routes = [
                {
                    path: '',
                    component: _evento_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventoDetailPage"]
                }
            ];
            var EventoDetailPageModule = /** @class */ (function () {
                function EventoDetailPageModule() {
                }
                return EventoDetailPageModule;
            }());
            EventoDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_evento_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventoDetailPage"]]
                })
            ], EventoDetailPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/evento-detail/evento-detail.page.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/evento-detail/evento-detail.page.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n  padding-left: 0px;\n  margin-left: -30px;\n}\n\n.content-evento {\n  border-bottom: 40px;\n}\n\nion-card-title {\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n\nion-card-subtitle {\n  font-size: 13px;\n}\n\n.evento {\n  margin-bottom: 20px;\n  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);\n}\n\n.b-size {\n  font-size: 19px;\n  color: black;\n}\n\n.label-button {\n  font-size: 15px;\n}\n\n.cant-personas {\n  font-size: 12;\n}\n\na {\n  color: #666666;\n}\n\nion-slides {\n  --bullet-background-active: white;\n  border-color: #666666;\n}\n\n.imagen-container {\n  width: 100%;\n  height: 200px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRvLWRldGFpbC9EOlxcTHVjYXNcXEdpdEh1YlxcZ3JlZW4tZ2xvYmUvc3JjXFxhcHBcXHBhZ2VzXFxldmVudG8tZGV0YWlsXFxldmVudG8tZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRvLWRldGFpbC9ldmVudG8tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFHQSxnREFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRvLWRldGFpbC9ldmVudG8tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1ldmVudG8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNDBweFxyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uZXZlbnRvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uYi1zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxhYmVsLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jYW50LXBlcnNvbmFzIHtcclxuICAgIGZvbnQtc2l6ZTogMTI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM2NjY2NjZcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbi5pbWFnZW4tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vLyBpb24taW1nIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uY29udGVudC1ldmVudG8ge1xuICBib3JkZXItYm90dG9tOiA0MHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZXZlbnRvIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5iLXNpemUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxhYmVsLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNhbnQtcGVyc29uYXMge1xuICBmb250LXNpemU6IDEyO1xufVxuXG5hIHtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzY2NjY2Njtcbn1cblxuLmltYWdlbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/evento-detail/evento-detail.page.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/evento-detail/evento-detail.page.ts ***!
          \***********************************************************/
        /*! exports provided: EventoDetailPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoDetailPage", function () { return EventoDetailPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/evento.service */ "./src/app/services/evento.service.ts");
            var EventoDetailPage = /** @class */ (function () {
                function EventoDetailPage(route, eventoService) {
                    var _this = this;
                    this.route = route;
                    this.eventoService = eventoService;
                    this.tipos = [
                        {
                            id: 1,
                            descripcion: 'Recoleccion de basura',
                            color: 'warning',
                            icono: 'trash'
                        },
                        {
                            id: 2,
                            descripcion: 'Reduccion de recursos',
                            color: 'danger',
                            icono: 'flashlight'
                        },
                        {
                            id: 3,
                            descripcion: 'Reforestacion',
                            color: 'success',
                            icono: 'pulse'
                        },
                        {
                            id: 4,
                            descripcion: 'Running',
                            color: 'primary',
                            icono: 'walk'
                        },
                        {
                            id: 5,
                            descripcion: 'Reciclaje',
                            color: 'tertiary',
                            icono: 'sync'
                        }
                    ];
                    this.slideOpts = {
                        initialSlide: 0,
                        speed: 400
                    };
                    this.imagnesEvento = [];
                    this.comentariosEvento = [];
                    this.instagram = false;
                    this.facebook = false;
                    if (this.route.getCurrentNavigation() != null) {
                        var evento = this.route.getCurrentNavigation().extras.state;
                        this.evento = {
                            id: evento.id,
                            nombre: evento.nombre,
                            descripcion: evento.descripcion,
                            descripcionCorta: evento.descripcionCorta,
                            fechaInicio: evento.fechaInicio,
                            fechaFin: evento.fechaFin,
                            ubicacion: evento.ubicacion,
                            foto: evento.foto,
                            tipo: evento.tipo,
                            linkContacto: evento.linkContacto,
                            mailContacto: evento.mailContacto,
                            nombreContacto: evento.nombreContacto,
                            celularContacto: evento.celularContacto
                        };
                        if (evento.linkContacto) {
                            if (evento.linkContacto.includes('instagram'))
                                this.instagram = true;
                            if (evento.linkContacto.includes('facebook'))
                                this.facebook = true;
                        }
                        this.imagnesEvento = [
                            {
                                id: 0,
                                urlImagen: '../assets/default.jpg'
                            }
                        ];
                        this.eventoService.getImagenes(evento.id).subscribe(function (response) {
                            if (response.length > 0) {
                                _this.imagnesEvento = response;
                            }
                            else {
                                _this.imagnesEvento = [
                                    {
                                        id: 0,
                                        urlImagen: _this.evento.foto
                                    }
                                ];
                            }
                        });
                        this.eventoService.getComentarios(evento.id).subscribe(function (response) {
                            if (response.length > 0) {
                                _this.comentariosEvento = response;
                            }
                        });
                    }
                }
                return EventoDetailPage;
            }());
            EventoDetailPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"] }
            ]; };
            EventoDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-event',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evento-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evento-detail/evento-detail.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evento-detail.page.scss */ "./src/app/pages/evento-detail/evento-detail.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"]])
            ], EventoDetailPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-evento-detail-evento-detail-module-es2015.js.map
//# sourceMappingURL=pages-evento-detail-evento-detail-module-es5.js.map
//# sourceMappingURL=pages-evento-detail-evento-detail-module-es5.js.map