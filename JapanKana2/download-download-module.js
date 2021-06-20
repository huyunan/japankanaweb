(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-download-module"],{

/***/ "FUuC":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "cCCl");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.service */ "UneP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ZYVA");



function DownloadComponent_ng_container_50_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const download_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](download_r4.alt);
} }
function DownloadComponent_ng_container_50_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_50_ng_container_7_Template_a_click_2_listener() { const download_r5 = ctx.$implicit; return download_r5(download_r5.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const download_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", download_r5.alt);
} }
function DownloadComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DownloadComponent_ng_container_50_ng_container_4_Template, 3, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DownloadComponent_ng_container_50_ng_container_7_Template, 4, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1);
} }
class DownloadComponent {
    constructor(downloadService) {
        this.downloadService = downloadService;
        this.downloadData = [];
        this.downloadService.viewer().subscribe(() => {
            console.log('viewer success');
        }, (error) => {
            throw error;
        });
        this.downloadData.push([
            {
                url: 'http://www.japankana.cn/dist/win/japankana-1.0.2.exe',
                alt: 'Win (免安装)',
            },
            {
                url: 'http://www.japankana.cn/dist/win/japankana-1.0.2-Setup.exe',
                alt: 'Win (exe)',
            },
        ]);
        this.downloadData.push([
            {
                url: 'http://www.japankana.cn/dist/mac/japankana-1.0.2.dmg',
                alt: 'Mac (免安装)',
            },
            {
                url: 'http://www.japankana.cn/dist/mac/japankana-1.0.2-arm64.dmg',
                alt: 'Mac (免安装-arm64)',
            },
            {
                url: 'http://www.japankana.cn/dist/mac/mac/japankana.zip',
                alt: 'Mac (exe)',
            },
            {
                url: 'http://www.japankana.cn/dist/mac/mac-arm64/japankana.zip',
                alt: 'Mac (exe)',
            },
        ]);
        this.downloadData.push([
            {
                url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.AppImage',
                alt: 'Linux (免安装)',
            },
            {
                url: 'http://www.japankana.cn/dist/linux/japankana_1.0.2_amd64.deb',
                alt: 'Linux (deb)',
            },
            {
                url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.freebsd',
                alt: 'Linux (freebsd)',
            },
            {
                url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.x86_64.rpm',
                alt: 'Linux (rpm)',
            },
        ]);
    }
    download(url) {
        this.downloadService.downLoad(url);
        this.insert();
    }
    insert() {
        this.downloadService.insert().subscribe(() => {
            console.log('insert success');
        }, (error) => {
            throw error;
        });
    }
    ngOnDestroy() {
        this.downloadData = [];
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"])); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["kana-download"]], decls: 73, vars: 1, consts: [[1, "PRIMER-REMOVE-ME", "px-3", "px-md-6"], [1, "py-6", "py-md-7", "py-lg-8"], [1, "container-xl", "media-fluid"], [1, "clearfix", "pt-md-6"], [1, "col-md-3", "float-md-left", "pr-md-5", "mb-3", "mb-md-0"], [1, "CircleBadge", "CircleBadge--large", "mx-auto", "box-shadow-large", "mt-1", 2, "background-color", "#ffffff"], ["src", "assets/imgs/japankana256.ico", "alt", "Meteorman", 1, "CircleBadge-icon"], [1, "col-md-9", "float-md-left", "pl-md-5", "text-center", "text-md-left"], [1, "f00-light", "lh-condensed", "mb-3"], [1, "text-mono", "text-normal", "text-gray-light"], [1, "app-container"], [1, "left-bar"], [1, "app-meta", "sticky"], [1, "app-meta-entry"], [1, "mb-2", "text-mono", "text-normal", "text-gray-light"], ["href", "http://www.japankana.cn/apps?category=developer-tools", 1, "topic-tag", "topic-tag-link", "topic-tag-outline", "f6"], [1, "app-meta-entry", "app-meta-entry-downloads"], ["href", "http://www.japankana.cn/", 1, "app-download", "linux", 2, "display", "none"], ["href", "http://www.japankana.cn/", 1, "app-download", "darwin", 2, "display", "none"], ["href", "javascript: void(0);", 1, "app-download", "win32", 2, "display", "inline-block", 3, "click"], ["href", "http://www.japankana.cn/q=japankana", 1, "app-keyword"], ["href", "http://www.japankana.cn/"], [1, "app-tagname"], [1, "app-boxes"], ["id", "readme", 1, "app-box", "app-readme", "markdown-body"], ["id", "readme", "data-path", "README.md", 1, "md"], ["itemprop", "text", 1, "markdown-body", "entry-content", "container-lg"], ["id", "user-content-neutron-", "aria-hidden", "true", "href", "https://github.com/webcatalog/neutron/blob/master/#neutron-", 1, "anchor"], ["viewBox", "0 0 16 16", "version", "1.1", "width", "16", "height", "16", "aria-hidden", "true", 1, "octicon", "octicon-link"], ["fill-rule", "evenodd", "d", "M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"], [4, "ngFor", "ngForOf"], ["align", "center"], ["color", "#6a737d", "align", "center"], ["id", "user-content-starting-", "aria-hidden", "true", "href", "http://www.japankana.cn/", 1, "anchor"], [1, "app-box", "app-screenshots", 2, "display", "none"], [1, "active-screenshot"], ["alt", "not_used"], [1, "all-screenshots"], [1, "center"], ["href", "javascript: void(0);", 3, "click"], ["src", "./assets/svg/download.svg", 2, "max-width", "100%", 3, "alt"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "JapanKana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Japanese Kanji to Katakana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5206\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Developer Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u4E0B\u8F7D (1.0.2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Meteorman-1.1.1.AppImage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Meteorman-1.1.1.dmg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_Template_a_click_27_listener() { return ctx.download("http://www.japankana.cn/dist/win/japankana-1.0.2-Setup.exe"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Download for Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u5173\u952E\u8BCD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "japankana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u6700\u65B0\u53D1\u5E03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " JapanKana 1.0.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(1.0.2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "main", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "article", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Japanese Kanji to Katakana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DownloadComponent_ng_container_50_Template, 8, 2, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Japanese Kanji to Katakana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Starting \uD83D\uDE80 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u8FD8\u8BB0\u5F97 japanhr\u7FFB\u8BD1\u5668 \u5417\uFF1F\u8FD9\u53EF\u662F windows 7 \u65F6\u4EE3\u6700\u597D\u7684\u65E5\u6587\u6C49\u5B57\u8F6C\u5E73\u5047\u540D\u5DE5\u5177\u3002\u4F46\u662F\u5230 windows 10\u540E\uFF0C\u4FBF\u4E0D\u80FD\u4F7F\u7528\u4E86 \u4E0D\u514D\u6709\u4E9B\u9057\u61BE\u3002\u6240\u4EE5\u6211\u5229\u7528\u95F2\u6687\u65F6\u95F4\u505A\u4E86\u8FD9\u4E2A\u8F6F\u4EF6\u5E0C\u671B\u5927\u5BB6\u559C\u6B22\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u4F7F\u7528\u65B9\u6CD5\u4E5F\u548C japanhr\u7FFB\u8BD1\u5668 \u4E00\u6837\uFF0C\u5728\u7B2C\u4E00\u4E2A\u8F93\u5165\u6846\u8F93\u5165 \u65E5\u6587\u6C49\u5B57 \u56DE\u8F66\u540E\uFF0C\u7B2C\u4E8C\u4E2A\u8F93\u5165\u6846\u4FBF\u4F1A\u8F93\u51FA\u8F6C\u6362\u540E\u7684\u5E73\u5047\u540D\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u6709\u4EC0\u4E48\u95EE\u9898\u53EF\u4EE5\u53D1\u9001\u5230\u6211\u90AE\u7BB1 styunan@163.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.downloadData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "KcLm":
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/*! exports provided: DownloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ZYVA");
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component */ "FUuC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "NY1e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "cCCl");





class DownloadModule {
}
DownloadModule.ɵfac = function DownloadModule_Factory(t) { return new (t || DownloadModule)(); };
DownloadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DownloadModule });
DownloadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _download_component__WEBPACK_IMPORTED_MODULE_1__["DownloadComponent"],
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DownloadModule, { declarations: [_download_component__WEBPACK_IMPORTED_MODULE_1__["DownloadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "UneP":
/*!**********************************************!*\
  !*** ./src/app/download/download.service.ts ***!
  \**********************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "cCCl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "GrC6");


class DownloadService {
    constructor(http) {
        this.http = http;
    }
    insert() {
        return this.http.get('http://www.japankana.cn/download.php', {
            responseType: 'blob'
        });
    }
    viewer() {
        return this.http.get('http://www.japankana.cn/viewer.php', {
            responseType: 'blob'
        });
    }
    downLoad(url) {
        const aTag = document.createElement('a');
        aTag.style.display = 'none';
        aTag.href = url;
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
        URL.revokeObjectURL(aTag.href);
    }
}
DownloadService.ɵfac = function DownloadService_Factory(t) { return new (t || DownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DownloadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DownloadService, factory: DownloadService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=download-download-module.js.map