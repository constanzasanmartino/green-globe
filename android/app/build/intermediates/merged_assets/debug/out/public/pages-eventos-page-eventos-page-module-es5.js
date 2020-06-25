(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eventos-page-eventos-page-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos-page/eventos-page.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos-page/eventos-page.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"greenglobe\">\r\n        <ion-title>\r\n            Eventos\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <br>\r\n    <ion-button color=\"medium\" expand=\"full\" fill=\"outline\" (click)=\"showFilter()\">Tipo de evento</ion-button>\r\n    <div *ngIf=\"showFilters\">\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-label>Todos</ion-label>\r\n                <ion-checkbox [(ngModel)]=\"all\" (ionChange)=\"selectAllTypes()\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>Ninguno</ion-label>\r\n                <ion-checkbox [(ngModel)]=\"none\" (ionChange)=\"selectNoneTypes()\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item *ngFor=\"let tipo of tipos\">\r\n                <ion-label>{{tipo.descripcion}}</ion-label>\r\n                <ion-checkbox [(ngModel)]=\"tipo.cheked\" (ionChange)=\"selectAnType(tipo)\"></ion-checkbox>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n        <ion-button expand=\"block\" color=\"medium\" (ionFocus)=\"filtrar()\">Filtrar</ion-button>\r\n    </div>\r\n    <!-- <ion-list>\r\n        <ion-item>\r\n            <ion-label>Tipo de evento</ion-label>\r\n            <ion-select [(ngModel)]=\"selectedValues\" cancel-text=\"CANCELAR\" multiple=\"true\" (ionChange)=\"OnChange($event)\" interface=\"alert\">\r\n                <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">{{tipo.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n    </ion-list>-->\r\n\r\n    <ion-progress-bar *ngIf=\"loading\" color=\"light\" type=\"indeterminate\"></ion-progress-bar>\r\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event.target.value)\" value=\"enProgreso\">\r\n        <ion-segment-button value=\"enProgreso\">\r\n            <ion-label>En Progreso</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"finalizados\">\r\n            <ion-label>Finalizados</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button color=\"dark\">\r\n            <ion-icon name=\"add\" (click)=\"newEvent()\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <div *ngFor=\"let evento of eventos\">\r\n        <app-evento-card [evento]=\"evento\"></app-evento-card>\r\n    </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/eventos-page/eventos-page.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/eventos-page/eventos-page.module.ts ***!
          \***********************************************************/
        /*! exports provided: EventosPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function () { return EventosPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos-page */ "./src/app/pages/eventos-page/eventos-page.ts");
            /* harmony import */ var _components_evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/evento-card/evento-card.component */ "./src/app/components/evento-card/evento-card.component.ts");
            /* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
            var EventosPageModule = /** @class */ (function () {
                function EventosPageModule() {
                }
                return EventosPageModule;
            }());
            EventosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"] }])
                    ],
                    entryComponents: [
                        _components_evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_7__["EventoCardComponent"]
                    ],
                    declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
                })
            ], EventosPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/eventos-page/eventos-page.scss": 
        /*!******************************************************!*\
          !*** ./src/app/pages/eventos-page/eventos-page.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-progress-bar {\n  background-color: #379b80;\n}\n\n::ng-deep .alert-wrapper.sc-ion-alert-md {\n  width: -webkit-fill-available;\n}\n\n::ng-deep .alert-button.sc-ion-alert-md {\n  color: #379b80;\n}\n\n::ng-deep [aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md {\n  border-color: #379b80;\n  background-color: #379b80;\n}\n\nion-checkbox {\n  --background-checked: #379b80;\n  --border-color-checked: #379b80;\n}\n\nion-fab {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRvcy1wYWdlL0Q6XFxMdWNhc1xcR2l0SHViXFxncmVlbi1nbG9iZS9zcmNcXGFwcFxccGFnZXNcXGV2ZW50b3MtcGFnZVxcZXZlbnRvcy1wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50b3MtcGFnZS9ldmVudG9zLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRvcy1wYWdlL2V2ZW50b3MtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzliODA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBjb2xvcjogIzM3OWI4MDtcclxufVxyXG5cclxuOjpuZy1kZWVwIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzNzliODA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5YjgwO1xyXG59XHJcblxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMzNzliODA7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjMzc5YjgwO1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5YjgwO1xufVxuXG46Om5nLWRlZXAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIGNvbG9yOiAjMzc5YjgwO1xufVxuXG46Om5nLWRlZXAgW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzc5YjgwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5YjgwO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzM3OWI4MDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzM3OWI4MDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/eventos-page/eventos-page.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/eventos-page/eventos-page.ts ***!
          \****************************************************/
        /*! exports provided: EventosPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function () { return EventosPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/evento.service */ "./src/app/services/evento.service.ts");
            var EventosPage = /** @class */ (function () {
                function EventosPage(eventoService, router) {
                    var _this = this;
                    this.eventoService = eventoService;
                    this.router = router;
                    this.selectedValues = [];
                    this.eventosFinalizados = [];
                    this.eventosEnProgreso = [];
                    this.cantidadDeTiposDeEventosSeleccionados = 0;
                    this.all = false;
                    this.none = false;
                    this.loading = true;
                    this.showFilters = false;
                    this.esEnProgreso = true;
                    this.eventoService.getEventos().subscribe(function (response) {
                        _this.eventos = response;
                        _this.listaCompletaDeEventos = response;
                        _this.eventosEnProgreso = _this.listaCompletaDeEventos.filter(function (e) { return new Date(e.fechaInicio) > new Date; });
                        _this.eventos = _this.eventosEnProgreso;
                        _this.loading = false;
                    });
                    this.eventoService.getTiposEvento().subscribe(function (response) {
                        _this.tipos = response;
                    });
                }
                EventosPage.prototype.segmentChanged = function (event) {
                    var fechaHoy = new Date;
                    if (event == 'finalizados') {
                        this.eventosFinalizados = this.listaCompletaDeEventos.filter(function (e) { return new Date(e.fechaInicio) < new Date; });
                        this.eventos = this.eventosFinalizados;
                        this.esEnProgreso = false;
                    }
                    if (event == 'enProgreso') {
                        this.eventosEnProgreso = this.listaCompletaDeEventos.filter(function (e) { return new Date(e.fechaInicio) > new Date; });
                        this.eventos = this.eventosEnProgreso;
                        this.esEnProgreso = true;
                    }
                };
                /* OnChange(event: any) {
                   console.log(event);
                   if (this.selectedValues.length > 0) {
                     
                     this.eventos = this.listaCompletaDeEventos.filter(item => {
                       for (let index = 0; index < this.selectedValues.length; index++) {
                         const element = this.selectedValues[index];
                         if (item.tipo == element) {
                           return true;
                         };
                       }
                       return false;
                     });
                   }
               
                  else {
                     this.eventos = this.listaCompletaDeEventos;
                   }
                   */
                EventosPage.prototype.filtrar = function () {
                    var _this = this;
                    this.selectedValues = [];
                    for (var index = 0; index < this.tipos.length; index++) {
                        if (this.tipos[index].cheked) {
                            this.selectedValues.push(this.tipos[index].id);
                        }
                    }
                    if (this.esEnProgreso) {
                        this.eventos = this.eventosEnProgreso.filter(function (item) {
                            for (var index = 0; index < _this.selectedValues.length; index++) {
                                var element = _this.selectedValues[index];
                                if (item.tipo == element) {
                                    return true;
                                }
                                ;
                            }
                            return false;
                        });
                    }
                    else {
                        this.eventos = this.eventosFinalizados.filter(function (item) {
                            for (var index = 0; index < _this.selectedValues.length; index++) {
                                var element = _this.selectedValues[index];
                                if (item.tipo == element) {
                                    return true;
                                }
                                ;
                            }
                            return false;
                        });
                    }
                    this.showFilters = !this.showFilters;
                };
                EventosPage.prototype.selectAllTypes = function () {
                    if (this.all) {
                        for (var index = 0; index < this.tipos.length; index++) {
                            this.tipos[index].cheked = this.all;
                        }
                        this.none = false;
                    }
                    else {
                        if (this.cantidadDeTiposDeEventosSeleccionados == this.tipos.length) {
                            for (var index = 0; index < this.tipos.length; index++) {
                                this.tipos[index].cheked = this.all;
                            }
                        }
                    }
                };
                EventosPage.prototype.selectNoneTypes = function () {
                    if (this.none) {
                        for (var index = 0; index < this.tipos.length; index++) {
                            this.tipos[index].cheked = false;
                        }
                        this.cantidadDeTiposDeEventosSeleccionados = 0;
                        this.all = false;
                    }
                };
                EventosPage.prototype.selectAnType = function (type) {
                    if (type.cheked) {
                        this.cantidadDeTiposDeEventosSeleccionados += 1;
                        this.none = false;
                    }
                    else {
                        this.cantidadDeTiposDeEventosSeleccionados -= 1;
                        this.all = false;
                    }
                };
                EventosPage.prototype.showFilter = function () {
                    this.showFilters = !this.showFilters;
                };
                EventosPage.prototype.newEvent = function () {
                    this.router.navigate(['/nuevo-evento']);
                };
                return EventosPage;
            }());
            EventosPage.ctorParameters = function () { return [
                { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EventosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-eventos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eventos-page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos-page/eventos-page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eventos-page.scss */ "./src/app/pages/eventos-page/eventos-page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], EventosPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-eventos-page-eventos-page-module-es2015.js.map
//# sourceMappingURL=pages-eventos-page-eventos-page-module-es5.js.map
//# sourceMappingURL=pages-eventos-page-eventos-page-module-es5.js.map