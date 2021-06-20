(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404-404-module"],{

/***/ "UBUJ":
/*!***********************************!*\
  !*** ./src/app/404/404.module.ts ***!
  \***********************************/
/*! exports provided: P404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Module", function() { return P404Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ZYVA");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.component */ "w6Pt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "NY1e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "cCCl");





class P404Module {
}
P404Module.ɵfac = function P404Module_Factory(t) { return new (t || P404Module)(); };
P404Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: P404Module });
P404Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _404_component__WEBPACK_IMPORTED_MODULE_1__["P404Component"],
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](P404Module, { declarations: [_404_component__WEBPACK_IMPORTED_MODULE_1__["P404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "w6Pt":
/*!**************************************!*\
  !*** ./src/app/404/404.component.ts ***!
  \**************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "cCCl");

class P404Component {
    back() {
        history.back();
    }
}
P404Component.ɵfac = function P404Component_Factory(t) { return new (t || P404Component)(); };
P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P404Component, selectors: [["kana-404"]], decls: 16, vars: 0, consts: [[1, "p404"], [1, "head404"], [1, "txtbg404"], [1, "txtbox"], [1, "paddingbox"], ["href", "javascript: void();", 2, "cursor", "pointer", 3, "click"], ["href", "http://www.japankana.cn"]], template: function P404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u8BF7\u6C42\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3001\u6216\u5DF2\u88AB\u5220\u9664\u3001\u6216\u6682\u65F6\u4E0D\u53EF\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u8BF7\u70B9\u51FB\u4EE5\u4E0B\u94FE\u63A5\u7EE7\u7EED\u6D4F\u89C8\u7F51\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u300B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function P404Component_Template_a_click_10_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8FD4\u56DE\u4E0A\u4E00\u9875\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u300B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u8FD4\u56DE\u7F51\u7AD9\u9996\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".p404[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: hsl(0, 0%, 29%);\n}\n.head404[_ngcontent-%COMP%] {\n  width: 580px;\n  height: 234px;\n  margin: 50px auto 0 auto;\n  background: url('head404.png') no-repeat;\n}\n.txtbg404[_ngcontent-%COMP%] {\n  width: 499px;\n  height: 169px;\n  margin: 10px auto 0 auto;\n  background: url('txtbg404.png') no-repeat;\n}\n.txtbg404[_ngcontent-%COMP%]   .txtbox[_ngcontent-%COMP%] {\n  width: 390px;\n  position: relative;\n  top: 30px;\n  left: 60px;\n  color: #eee;\n  font-size: 13px;\n}\n.txtbg404[_ngcontent-%COMP%]   .txtbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  line-height: 18px;\n}\n.txtbg404[_ngcontent-%COMP%]   .txtbox[_ngcontent-%COMP%]   .paddingbox[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.txtbg404[_ngcontent-%COMP%]   .txtbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n  text-decoration: none;\n}\n.txtbg404[_ngcontent-%COMP%]   .txtbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fc9d1d;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjQwNC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7QUFERjtBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9BO0VBQ0UsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBTkY7QUFTQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQVBGIiwiZmlsZSI6IjQwNC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wNDA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMjklKTtcbn1cbi5oZWFkNDA0IHtcbiAgd2lkdGg6IDU4MHB4O1xuICBoZWlnaHQ6IDIzNHB4O1xuICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy80MDQvaGVhZDQwNC5wbmcpXG4gICAgbm8tcmVwZWF0O1xufVxuXG4udHh0Ymc0MDQge1xuICB3aWR0aDogNDk5cHg7XG4gIGhlaWdodDogMTY5cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzLzQwNC90eHRiZzQwNC5wbmcpXG4gICAgbm8tcmVwZWF0O1xufVxuXG4udHh0Ymc0MDQgLnR4dGJveCB7XG4gIHdpZHRoOiAzOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50eHRiZzQwNCAudHh0Ym94IHAge1xuICBtYXJnaW46IDVweCAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnR4dGJnNDA0IC50eHRib3ggLnBhZGRpbmdib3gge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnR4dGJnNDA0IC50eHRib3ggcCBhIHtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnR4dGJnNDA0IC50eHRib3ggcCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmYzlkMWQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=404-404-module.js.map