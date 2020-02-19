(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-great-grandparent></app-great-grandparent>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/child/child.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/child/child.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream,'gotMessageDown':messageFromParent && !upstream}\">\n    <span>CHILD</span><i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span>{{message}}</span><i class=\"fa fa-arrow-down fa-lg down\" [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span>{{messageFromParent}}</span>\n    <app-grandchild [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"messageFromParent\" (passDataToChild)=\"handleData($event)\"></app-grandchild>\n    </p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grandchild/grandchild.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grandchild/grandchild.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream, 'gotMessageDown':messageFromParent && !upstream}\">\n    <span>GRANDCHILD</span><i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span>{{message}}</span><i class=\"fa fa-arrow-down fa-lg down\" [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span>{{messageFromParent}}</span>\n    <app-great-grandchild [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"messageFromParent\" (passDataToGrandchild)=\"handleData($event)\"></app-great-grandchild>\n    <app-great-grandchild [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"messageFromParent\" (passDataToGrandchild)=\"handleData($event)\"></app-great-grandchild>   \n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grandparent/grandparent.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grandparent/grandparent.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream,'gotMessageDown':messageFromParent && !upstream}\">\n   <span>GRANDPARENT</span><i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span>{{message}}</span><i class=\"fa fa-arrow-down fa-lg down\" [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span>{{messageFromParent}}</span>\n    <app-parent [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"messageFromParent\" (passDataToGrandParent)=\"handleData($event)\"></app-parent>\n    </p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/great-grandchild/great-grandchild.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/great-grandchild/great-grandchild.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream, 'gotMessageDown':messageFromParent && !upstream }\">\n    GREAT-GRANDCHILD<i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span><input\n            name=\"message\" [(ngModel)]=\"message\"></span><button  class=\"btn btn-info\"  (click)=\"handleClick($event)\">Send Message\n        Upstream</button> <i class=\"fa fa-arrow-down fa-lg down\"\n        [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span>{{messageFromParent}}</span>\n\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/great-grandparent/great-grandparent.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/great-grandparent/great-grandparent.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream,'gotMessageDown':downstreamMessageGreatGrandparent && !upstream}\">\n    <span>GREAT-GRANDPARENT</span><i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span>{{message}}</span><i class=\"fa fa-arrow-down fa-lg down\" [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span><input name=\"message\" [(ngModel)]=\"downstreamMessageGreatGrandparent\"></span>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"handleClick($event)\">Send Message Downstream</button>\n    <app-grandparent [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"downstreamMessage\" (passDataToGreatGrandParent)=\"handleData($event)\">\n      </app-grandparent>\n      \n    </p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/parent/parent.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/parent/parent.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"container\" [ngClass]=\"{'gotMessage':upstream, 'gotMessageDown':messageFromParent && !upstream}\">\n    <span>PARENT</span><i class=\"fa fa-arrow-up fa-lg up\" [ngClass]=\"{'highlighted':upstream}\"></i><span>{{message}}</span><i class=\"fa fa-arrow-down fa-lg down\" [ngClass]=\"{'highlighted':!upstream && isSendMessageDownButtonClicked}\"></i><span>{{messageFromParent}}</span>\n    <app-child [isSendMessageDownButtonClicked]=\"isSendMessageDownButtonClicked\" [messageFromParent]=\"messageFromParent\" (passDataToParent)=\"handleData($event)\"></app-child>\n    </p>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-nesting';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_child_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/child/child.component */ "./src/app/components/child/child.component.ts");
/* harmony import */ var _components_grandchild_grandchild_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/grandchild/grandchild.component */ "./src/app/components/grandchild/grandchild.component.ts");
/* harmony import */ var _components_grandparent_grandparent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/grandparent/grandparent.component */ "./src/app/components/grandparent/grandparent.component.ts");
/* harmony import */ var _components_great_grandchild_great_grandchild_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/great-grandchild/great-grandchild.component */ "./src/app/components/great-grandchild/great-grandchild.component.ts");
/* harmony import */ var _components_great_grandparent_great_grandparent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/great-grandparent/great-grandparent.component */ "./src/app/components/great-grandparent/great-grandparent.component.ts");
/* harmony import */ var _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parent/parent.component */ "./src/app/components/parent/parent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"],
            _components_grandchild_grandchild_component__WEBPACK_IMPORTED_MODULE_6__["GrandChildComponent"],
            _components_grandparent_grandparent_component__WEBPACK_IMPORTED_MODULE_7__["GrandparentComponent"],
            _components_great_grandchild_great_grandchild_component__WEBPACK_IMPORTED_MODULE_8__["GreatGrandchildComponent"],
            _components_great_grandparent_great_grandparent_component__WEBPACK_IMPORTED_MODULE_9__["GreatGrandparentComponent"],
            _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_10__["ParentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/child/child.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/child/child.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:#CDBB79;\r\n    padding:20px;\r\n    height:70vh;\r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGlsZC9jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGlsZC9jaGlsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0NEQkI3OTtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGhlaWdodDo3MHZoO1xyXG4gIH1cclxuICBcclxuICAuZ290TWVzc2FnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzA2NDI1QztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5nb3RNZXNzYWdlRG93bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQyNWMwNjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/child/child.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/child/child.component.ts ***!
  \*****************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChildComponent = class ChildComponent {
    constructor() {
        this.passDataToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handleData(event) {
        this.message = event;
        setTimeout(() => {
            this.passDataToParent.emit(event);
            this.upstream = true;
        }, 1000);
    }
    ngOnChanges(changes) {
        if (changes['messageFromParent']) {
            this.upstream = false;
        }
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChildComponent.prototype, "messageFromParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChildComponent.prototype, "isSendMessageDownButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChildComponent.prototype, "passDataToParent", void 0);
ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-child",
        template: __webpack_require__(/*! raw-loader!./child.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/child/child.component.html"),
        styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/components/child/child.component.css")]
    })
], ChildComponent);



/***/ }),

/***/ "./src/app/components/grandchild/grandchild.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/grandchild/grandchild.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:#F2F2F2;\r\n    padding:20px;\r\n    height:60vh;\r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFuZGNoaWxkL2dyYW5kY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhbmRjaGlsZC9ncmFuZGNoaWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjJGMkYyO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgaGVpZ2h0OjYwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb3RNZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDY0MjVDO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmdvdE1lc3NhZ2VEb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDI1YzA2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/grandchild/grandchild.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/grandchild/grandchild.component.ts ***!
  \***************************************************************/
/*! exports provided: GrandChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrandChildComponent", function() { return GrandChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrandChildComponent = class GrandChildComponent {
    constructor() {
        this.passDataToChild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleData(event) {
        this.message = event;
        setTimeout(() => { this.passDataToChild.emit(event); this.upstream = true; }, 1000);
    }
    ngOnChanges(changes) {
        if (changes['messageFromParent']) {
            this.upstream = false;
        }
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GrandChildComponent.prototype, "messageFromParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GrandChildComponent.prototype, "isSendMessageDownButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GrandChildComponent.prototype, "passDataToChild", void 0);
GrandChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grandchild',
        template: __webpack_require__(/*! raw-loader!./grandchild.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grandchild/grandchild.component.html"),
        styles: [__webpack_require__(/*! ./grandchild.component.css */ "./src/app/components/grandchild/grandchild.component.css")]
    })
], GrandChildComponent);



/***/ }),

/***/ "./src/app/components/grandparent/grandparent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/grandparent/grandparent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:#51A39D;\r\n    padding:20px;\r\n    height:90vh;\r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFuZHBhcmVudC9ncmFuZHBhcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmFuZHBhcmVudC9ncmFuZHBhcmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzUxQTM5RDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGhlaWdodDo5MHZoO1xyXG4gIH1cclxuICBcclxuICAuZ290TWVzc2FnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzA2NDI1QztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmdvdE1lc3NhZ2VEb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDI1YzA2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/grandparent/grandparent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/grandparent/grandparent.component.ts ***!
  \*****************************************************************/
/*! exports provided: GrandparentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrandparentComponent", function() { return GrandparentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrandparentComponent = class GrandparentComponent {
    constructor() {
        this.passDataToGreatGrandParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handleData(event) {
        this.message = event;
        setTimeout(() => {
            this.passDataToGreatGrandParent.emit(event);
            this.upstream = true;
        }, 1000);
    }
    ngOnChanges(changes) {
        if (changes['messageFromParent']) {
            this.upstream = false;
        }
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GrandparentComponent.prototype, "passDataToGreatGrandParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GrandparentComponent.prototype, "messageFromParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GrandparentComponent.prototype, "isSendMessageDownButtonClicked", void 0);
GrandparentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-grandparent",
        template: __webpack_require__(/*! raw-loader!./grandparent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grandparent/grandparent.component.html"),
        styles: [__webpack_require__(/*! ./grandparent.component.css */ "./src/app/components/grandparent/grandparent.component.css")]
    })
], GrandparentComponent);



/***/ }),

/***/ "./src/app/components/great-grandchild/great-grandchild.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/great-grandchild/great-grandchild.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: grey;\r\n    padding:22px;\r\n    height:22vh; \r\n    color:black;   \r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmVhdC1ncmFuZGNoaWxkL2dyZWF0LWdyYW5kY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyZWF0LWdyYW5kY2hpbGQvZ3JlYXQtZ3JhbmRjaGlsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBwYWRkaW5nOjIycHg7XHJcbiAgICBoZWlnaHQ6MjJ2aDsgXHJcbiAgICBjb2xvcjpibGFjazsgICBcclxuICB9XHJcbiAgXHJcbiAgLmdvdE1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjQyNUM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZ290TWVzc2FnZURvd257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MjVjMDY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/great-grandchild/great-grandchild.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/great-grandchild/great-grandchild.component.ts ***!
  \***************************************************************************/
/*! exports provided: GreatGrandchildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreatGrandchildComponent", function() { return GreatGrandchildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GreatGrandchildComponent = class GreatGrandchildComponent {
    constructor() {
        this.passDataToGrandchild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = "";
        this.isClicked = false;
    }
    ngOnInit() { }
    handleClick(event) {
        setTimeout(() => {
            this.passDataToGrandchild.emit(this.message);
            this.upstream = true;
            this.isClicked = true;
        }, 1000);
    }
    ngOnChanges(changes) {
        if (changes['messageFromParent']) {
            this.upstream = false;
        }
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GreatGrandchildComponent.prototype, "messageFromParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GreatGrandchildComponent.prototype, "isSendMessageDownButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GreatGrandchildComponent.prototype, "passDataToGrandchild", void 0);
GreatGrandchildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-great-grandchild",
        template: __webpack_require__(/*! raw-loader!./great-grandchild.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/great-grandchild/great-grandchild.component.html"),
        styles: [__webpack_require__(/*! ./great-grandchild.component.css */ "./src/app/components/great-grandchild/great-grandchild.component.css")]
    })
], GreatGrandchildComponent);



/***/ }),

/***/ "./src/app/components/great-grandparent/great-grandparent.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/great-grandparent/great-grandparent.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:#814374;\r\n    padding:20px;\r\n    height:100vh;\r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmVhdC1ncmFuZHBhcmVudC9ncmVhdC1ncmFuZHBhcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsc0JBQXNCOztFQUV4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JlYXQtZ3JhbmRwYXJlbnQvZ3JlYXQtZ3JhbmRwYXJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MTQzNzQ7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb3RNZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDY0MjVDO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ290TWVzc2FnZURvd257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MjVjMDY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/great-grandparent/great-grandparent.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/great-grandparent/great-grandparent.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GreatGrandparentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreatGrandparentComponent", function() { return GreatGrandparentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GreatGrandparentComponent = class GreatGrandparentComponent {
    constructor() {
        this.isSendMessageDownButtonClicked = false;
    }
    ngOnInit() {
    }
    handleData(event) {
        this.message = event;
        this.upstream = true;
    }
    handleClick(event) {
        this.isSendMessageDownButtonClicked = true;
        this.upstream = false;
        setTimeout(() => {
            this.downstreamMessage = this.downstreamMessageGreatGrandparent;
        }, 1000);
    }
};
GreatGrandparentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-great-grandparent',
        template: __webpack_require__(/*! raw-loader!./great-grandparent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/great-grandparent/great-grandparent.component.html"),
        styles: [__webpack_require__(/*! ./great-grandparent.component.css */ "./src/app/components/great-grandparent/great-grandparent.component.css")]
    })
], GreatGrandparentComponent);



/***/ }),

/***/ "./src/app/components/parent/parent.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/parent/parent.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:#B7695C;\r\n    padding:20px;\r\n    height:80vh;\r\n  }\r\n  \r\n  .gotMessage{\r\n    background-color:#06425C;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n  \r\n  .gotMessageDown{\r\n    background-color:#425c06;\r\n    color:white;\r\n    border:2px solid white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCNzY5NUM7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBoZWlnaHQ6ODB2aDtcclxuICB9XHJcbiAgXHJcbiAgLmdvdE1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjQyNUM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5nb3RNZXNzYWdlRG93bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQyNWMwNjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/parent/parent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/parent/parent.component.ts ***!
  \*******************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParentComponent = class ParentComponent {
    constructor() {
        this.passDataToGrandParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleData(event) {
        this.message = event;
        setTimeout(() => { this.passDataToGrandParent.emit(event); this.upstream = true; }, 1000);
    }
    ngOnChanges(changes) {
        if (changes['messageFromParent']) {
            this.upstream = false;
        }
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ParentComponent.prototype, "passDataToGrandParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ParentComponent.prototype, "messageFromParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ParentComponent.prototype, "isSendMessageDownButtonClicked", void 0);
ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parent',
        template: __webpack_require__(/*! raw-loader!./parent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/parent/parent.component.html"),
        styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/components/parent/parent.component.css")]
    })
], ParentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\AngularNesting\angular-nesting\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map