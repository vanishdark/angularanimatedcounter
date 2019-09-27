(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-animated-counter/src/lib/ngx-animated-counter.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-animated-counter/src/lib/ngx-animated-counter.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"raw\" [ngClass]=\"{'center' : isToCenter}\">\n  <div *ngFor=\"let item of list\" class=\"raw-col\">\n    <div class=\"card-counter\">\n      <div class=\"card-counter-body {{color}}\">\n        <div (countChange)=\"item.result = $event\"\n             (countEnd)=\"onCountEndFinish($event)\"\n             [countFrom]=\"0\"\n             [countTo]=\"item.value\"\n             [duration]=\"duration\"\n             [step]=\"step\" ngxACounter>\n          {{item.result}}\n        </div>\n      </div>\n      <div class=\"card-counter-footer {{color}}\">\n        {{item.name}}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<h1>Ngx-Animated-Counter</h1>\n<div class=\"row\">\n  <ngx-a-counter [alignBlock]=\"'center'\" [duration]=\"1\" [list]=\"listOfObjects\" [step]=\"30\" [theme]=\"'grass'\" [title]=\"'name'\"></ngx-a-counter>\n</div>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ngx-animated-counter/src/lib/ngx-animated-counter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NgxAnimatedCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAnimatedCounterComponent", function() { return NgxAnimatedCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgxAnimatedCounterComponent = /** @class */ (function () {
    function NgxAnimatedCounterComponent() {
        this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.list = [];
        this.isToCenter = false;
    }
    NgxAnimatedCounterComponent.prototype.ngOnInit = function () {
        this.checkAlignment();
        this.checkTheme();
    };
    NgxAnimatedCounterComponent.prototype.onCountEndFinish = function ($event) {
        this.countEnd.emit($event);
        console.log($event, 'finish count');
    };
    NgxAnimatedCounterComponent.prototype.checkAlignment = function () {
        switch (this.alignBlock) {
            case 'center':
                this.isToCenter = true;
                break;
            case 'left':
                this.isToCenter = false;
                break;
            default:
                this.isToCenter = false;
        }
    };
    NgxAnimatedCounterComponent.prototype.checkTheme = function () {
        switch (this.theme) {
            case 'cantaloupe':
                this.color = 'cantaloupe';
                break;
            case 'clump':
                this.color = 'clump';
                break;
            case 'kind':
                this.color = 'kind';
                break;
            case 'grass':
                this.color = 'grass';
                break;
            default:
                this.color = 'clump';
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxAnimatedCounterComponent.prototype, "countChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxAnimatedCounterComponent.prototype, "countEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NgxAnimatedCounterComponent.prototype, "duration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NgxAnimatedCounterComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgxAnimatedCounterComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxAnimatedCounterComponent.prototype, "alignBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxAnimatedCounterComponent.prototype, "theme", void 0);
    NgxAnimatedCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-a-counter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-animated-counter.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-animated-counter/src/lib/ngx-animated-counter.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-animated-counter.scss */ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxAnimatedCounterComponent);
    return NgxAnimatedCounterComponent;
}());



/***/ }),

/***/ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.directive.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ngx-animated-counter/src/lib/ngx-animated-counter.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: NgxAnimatedCounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAnimatedCounterDirective", function() { return NgxAnimatedCounterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgxAnimatedCounterDirective = /** @class */ (function () {
    function NgxAnimatedCounterDirective() {
        this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgxAnimatedCounterDirective.prototype, "duration", {
        /**
         * Duration of animation
         * @param duration - set duration in millisecond
         */
        set: function (duration) {
            this._duration = duration;
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxAnimatedCounterDirective.prototype, "countTo", {
        /**
         * Any start number
         * @param countTo - set countTo by number
         */
        set: function (countTo) {
            this._countTo = countTo;
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxAnimatedCounterDirective.prototype, "countFrom", {
        /**
         * Any end number
         * @param countFrom - set countFrom by number
         */
        set: function (countFrom) {
            this._countFrom = countFrom;
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxAnimatedCounterDirective.prototype, "step", {
        /**
         * How fast counter is updated
         * @param step - set step in millisecond
         */
        set: function (step) {
            this._step = step;
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    NgxAnimatedCounterDirective.prototype.run = function () {
        var _this = this;
        clearInterval(_this._timer);
        if (isNaN(_this._duration)) {
            return false;
        }
        if (isNaN(_this._step)) {
            return false;
        }
        if (isNaN(_this._countFrom)) {
            return false;
        }
        if (isNaN(_this._countTo)) {
            return false;
        }
        if (_this._step <= 0) {
            console.warn('Step tem de ser maior que 0.');
            return false;
        }
        if (_this._duration <= 0) {
            console.warn('Duration tem de ser maior que 0.');
            return false;
        }
        if (_this._step > _this._duration * 1000) {
            console.warn('Step tem de ser menor ou igual que a Duration.');
        }
        var intermediate = _this._countFrom;
        var increment = Math.round(Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step));
        increment = increment !== 0 ? increment : _this._countTo;
        _this.countChange.emit(intermediate);
        _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
                if (intermediate <= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countChange.emit(_this._countTo);
                    _this.countEnd.emit();
                }
                else {
                    _this.countChange.emit(intermediate);
                    intermediate -= increment;
                }
            }
            else {
                if (intermediate >= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countChange.emit(_this._countTo);
                    _this.countEnd.emit();
                }
                else {
                    _this.countChange.emit(intermediate);
                    intermediate += increment;
                }
            }
        }, _this._step);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxAnimatedCounterDirective.prototype, "countChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxAnimatedCounterDirective.prototype, "countEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxAnimatedCounterDirective.prototype, "duration", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxAnimatedCounterDirective.prototype, "countTo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxAnimatedCounterDirective.prototype, "countFrom", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxAnimatedCounterDirective.prototype, "step", null);
    NgxAnimatedCounterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxACounter]'
        })
    ], NgxAnimatedCounterDirective);
    return NgxAnimatedCounterDirective;
}());



/***/ }),

/***/ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.module.ts":
/*!******************************************************************************!*\
  !*** ./projects/ngx-animated-counter/src/lib/ngx-animated-counter.module.ts ***!
  \******************************************************************************/
/*! exports provided: NgxAnimatedCounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAnimatedCounterModule", function() { return NgxAnimatedCounterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_animated_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-animated-counter.component */ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.component.ts");
/* harmony import */ var _ngx_animated_counter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-animated-counter.directive */ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NgxAnimatedCounterModule = /** @class */ (function () {
    function NgxAnimatedCounterModule() {
    }
    NgxAnimatedCounterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngx_animated_counter_component__WEBPACK_IMPORTED_MODULE_2__["NgxAnimatedCounterComponent"], _ngx_animated_counter_directive__WEBPACK_IMPORTED_MODULE_3__["NgxAnimatedCounterDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            providers: [],
            exports: [_ngx_animated_counter_component__WEBPACK_IMPORTED_MODULE_2__["NgxAnimatedCounterComponent"]]
        })
    ], NgxAnimatedCounterModule);
    return NgxAnimatedCounterModule;
}());



/***/ }),

/***/ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.scss":
/*!*************************************************************************!*\
  !*** ./projects/ngx-animated-counter/src/lib/ngx-animated-counter.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 768px) {\n  .raw-col {\n    flex: 0 0 33%;\n    max-width: 350px;\n  }\n}\n.raw {\n  display: flex;\n  width: auto;\n  max-width: 1500px;\n  flex-wrap: wrap;\n}\n.raw.center {\n  justify-content: center;\n}\n.raw-col {\n  position: relative;\n  padding: 10px;\n  width: 100%;\n  max-width: 350px;\n}\n.card-counter {\n  max-width: 350px;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.24);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  font-size: 0.875rem;\n  opacity: 1;\n}\n.card-counter-body {\n  padding: 0.75rem;\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center !important;\n}\n.card-counter-body.cantaloupe {\n  background-color: #FFFFFF;\n  color: #FF6B33;\n}\n.card-counter-body.clump {\n  background-color: #F2F2F2;\n  color: #299CB4;\n}\n.card-counter-body.kind {\n  background-color: #F6F3F7;\n  color: #EB81BD;\n}\n.card-counter-body.grass {\n  background-color: #F2F2F2;\n  color: #91C46C;\n}\n.card-counter-footer {\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  background-clip: padding-box;\n  text-align: center !important;\n  text-transform: uppercase;\n}\n.card-counter-footer.cantaloupe {\n  background-color: #FFFFFF;\n  color: #373737;\n  border-bottom: 4px solid #FF6B33;\n}\n.card-counter-footer.clump {\n  background-color: #F2F2F2;\n  color: #1E3340;\n  border-bottom: 4px solid #299CB4;\n}\n.card-counter-footer.kind {\n  background-color: #F6F3F7;\n  border-bottom: 4px solid #EB81BD;\n}\n.card-counter-footer.grass {\n  background-color: #F2F2F2;\n  color: #1C344C;\n  border-bottom: 4px solid #91C46C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC92YW5pc2hkYXJrL2FuZ3VsYXJhbmltYXRlZGNvdW50ZXIvcHJvamVjdHMvbmd4LWFuaW1hdGVkLWNvdW50ZXIvc3JjL2xpYi9uZ3gtYW5pbWF0ZWQtY291bnRlci5zY3NzIiwicHJvamVjdHMvbmd4LWFuaW1hdGVkLWNvdW50ZXIvc3JjL2xpYi9uZ3gtYW5pbWF0ZWQtY291bnRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VDckNGO0FBQ0Y7QUR5Q0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ3ZDRjtBRDBDQTtFQUNFLHVCQUFBO0FDdkNGO0FEMENBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdkNGO0FEMkNBO0VBQ0UsZ0JBakVrQjtFQWtFbEIsZ0JBQUE7RUFDQSwyQ0E3RGlCO0VBOERqQiw0QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQXRFa0I7RUF1RWxCLFVBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxnQkExRWtCO0VBMkVsQixlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3hDRjtBRDJDQTtFQUNFLHlCQW5FeUI7RUFvRXpCLGNBakVzQjtBQ3lCeEI7QUQyQ0E7RUFDRSx5QkE5RW9CO0VBK0VwQixjQTlFa0I7QUNzQ3BCO0FEMkNBO0VBQ0UseUJBdEVtQjtFQXVFbkIsY0FuRWtCO0FDMkJwQjtBRDJDQTtFQUNFLHlCQXBFb0I7RUFxRXBCLGNBbkVtQjtBQzJCckI7QUQyQ0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDeENGO0FEMkNBO0VBQ0UseUJBL0Z5QjtFQWdHekIsY0E5RndCO0VBK0Z4QixnQ0FBQTtBQ3hDRjtBRDJDQTtFQUNFLHlCQTNHb0I7RUE0R3BCLGNBeEdtQjtFQXlHbkIsZ0NBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSx5QkFwR21CO0VBcUduQixnQ0FBQTtBQ3hDRjtBRDJDQTtFQUNFLHlCQWxHb0I7RUFtR3BCLGNBL0ZtQjtFQWdHbkIsZ0NBQUE7QUN4Q0YiLCJmaWxlIjoicHJvamVjdHMvbmd4LWFuaW1hdGVkLWNvdW50ZXIvc3JjL2xpYi9uZ3gtYW5pbWF0ZWQtY291bnRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVkFSSUFCTEVTXG4kY291bnRlci1tYXgtd2lkdGg6IDM1MHB4O1xuJGNvdW50ZXItZm9udC1zaXplOiAuODc1cmVtO1xuJGNvdW50ZXItcGFkZGluZy14OiAuNzVyZW07XG4kY291bnRlci1wYWRkaW5nLXk6IDAuMjVyZW07XG5cbi8vIENPTE9SU1xuJGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4kYm94LXNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuLy8gQ2x1bXAgVGhlbWVcbiRjb2xvci1jbHVtcC1saWdodGVyOiAjRjJGMkYyO1xuJGNvbG9yLWNsdW1wLWxpZ2h0OiAjMjk5Q0I0O1xuJGNvbG9yLWNsdW1wLW1lZGl1bTogIzYzOUFBNjtcbiRjb2xvci1jbHVtcC1EYXJrOiAjMzY2MjczO1xuJGNvbG9yLWNsdW1wLURhcmtlcjogIzFFMzM0MDtcbi8vIENhbnRhbG91cGUgVGhlbWVcbiRjb2xvci1jYW50YWxvdXBlLWxpZ2h0ZXI6ICNGRkZGRkY7XG4kY29sb3ItY2FudGFsb3VwZS1saWdodDogI0M0QzRDNDtcbiRjb2xvci1jYW50YWxvdXBlLW1lZGl1bTogIzM3MzczNztcbiRjb2xvci1jYW50YWxvdXBlLWRhcms6ICNGRjZCMzM7XG4kY29sb3ItY2FudGFsb3VwZS1kYXJrZXI6ICNBNzIyMzg7XG5cbi8vIEtpbmQgVGhlbWVcbiRjb2xvci1raW5kLWxpZ2h0ZXI6ICNGNkYzRjc7XG4kY29sb3Ita2luZC1saWdodDogI0Y1Q0JERTtcbiRjb2xvci1raW5kLW1lZGl1bTogI0VFQjlEMztcbiRjb2xvci1raW5kLWRhcms6ICNFNTlDQzQ7XG4kY29sb3Ita2luZC1kYXJrZXI6ICNFQjgxQkQ7XG5cbi8vIEdyYXNzIFRoZW1lXG4kY29sb3ItZ3Jhc3MtbGlnaHRlcjogI0YyRjJGMjtcbiRjb2xvci1ncmFzcy1saWdodDogI0M2RTA3MDtcbiRjb2xvci1ncmFzcy1tZWRpdW06ICM5MUM0NkM7XG4kY29sb3ItZ3Jhc3MtZGFyazogIzI4N0Q3RDtcbiRjb2xvci1ncmFzcy1kYXJrZXI6ICMxQzM0NEM7XG5cbi8vIE1FRElBXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJhdy1jb2wge1xuICAgIGZsZXg6IDAgMCAzMyU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxufVxuXG4vLyBCT0RZXG4ucmF3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yYXcuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yYXctY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxuLy8gQ0FSRFxuLmNhcmQtY291bnRlciB7XG4gIG1heC13aWR0aDogJGNvdW50ZXItbWF4LXdpZHRoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gJGJveC1zaGFkb3ctY29sb3I7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgZm9udC1zaXplOiAkY291bnRlci1mb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keSB7XG4gIHBhZGRpbmc6ICRjb3VudGVyLXBhZGRpbmcteDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keS5jYW50YWxvdXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNhbnRhbG91cGUtbGlnaHRlcjtcbiAgY29sb3I6ICRjb2xvci1jYW50YWxvdXBlLWRhcms7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keS5jbHVtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jbHVtcC1saWdodGVyO1xuICBjb2xvcjogJGNvbG9yLWNsdW1wLWxpZ2h0O1xufVxuXG4uY2FyZC1jb3VudGVyLWJvZHkua2luZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1raW5kLWxpZ2h0ZXI7XG4gIGNvbG9yOiAkY29sb3Ita2luZC1kYXJrZXI7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keS5ncmFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmFzcy1saWdodGVyO1xuICBjb2xvcjogJGNvbG9yLWdyYXNzLW1lZGl1bTtcbn1cblxuLmNhcmQtY291bnRlci1mb290ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAkY291bnRlci1wYWRkaW5nLXkgJGNvdW50ZXItcGFkZGluZy14O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmQtY291bnRlci1mb290ZXIuY2FudGFsb3VwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jYW50YWxvdXBlLWxpZ2h0ZXI7XG4gIGNvbG9yOiAkY29sb3ItY2FudGFsb3VwZS1tZWRpdW07XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkY29sb3ItY2FudGFsb3VwZS1kYXJrO1xufVxuXG4uY2FyZC1jb3VudGVyLWZvb3Rlci5jbHVtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jbHVtcC1saWdodGVyO1xuICBjb2xvcjogJGNvbG9yLWNsdW1wLURhcmtlcjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRjb2xvci1jbHVtcC1saWdodDtcbn1cblxuLmNhcmQtY291bnRlci1mb290ZXIua2luZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1raW5kLWxpZ2h0ZXI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkY29sb3Ita2luZC1kYXJrZXI7XG59XG5cbi5jYXJkLWNvdW50ZXItZm9vdGVyLmdyYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXNzLWxpZ2h0ZXI7XG4gIGNvbG9yOiAkY29sb3ItZ3Jhc3MtZGFya2VyO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJGNvbG9yLWdyYXNzLW1lZGl1bTtcbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucmF3LWNvbCB7XG4gICAgZmxleDogMCAwIDMzJTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG59XG4ucmF3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yYXcuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yYXctY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxuLmNhcmQtY291bnRlciB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhcmQtY291bnRlci1ib2R5IHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keS5jYW50YWxvdXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICNGRjZCMzM7XG59XG5cbi5jYXJkLWNvdW50ZXItYm9keS5jbHVtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGNvbG9yOiAjMjk5Q0I0O1xufVxuXG4uY2FyZC1jb3VudGVyLWJvZHkua2luZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkYzRjc7XG4gIGNvbG9yOiAjRUI4MUJEO1xufVxuXG4uY2FyZC1jb3VudGVyLWJvZHkuZ3Jhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBjb2xvcjogIzkxQzQ2Qztcbn1cblxuLmNhcmQtY291bnRlci1mb290ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZC1jb3VudGVyLWZvb3Rlci5jYW50YWxvdXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjRkY2QjMzO1xufVxuXG4uY2FyZC1jb3VudGVyLWZvb3Rlci5jbHVtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGNvbG9yOiAjMUUzMzQwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzI5OUNCNDtcbn1cblxuLmNhcmQtY291bnRlci1mb290ZXIua2luZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkYzRjc7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjRUI4MUJEO1xufVxuXG4uY2FyZC1jb3VudGVyLWZvb3Rlci5ncmFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGNvbG9yOiAjMUMzNDRDO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzkxQzQ2Qztcbn0iXX0= */");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'y';
        this.listOfObjects = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var input = { name: 'nome', value: 100000 };
        var input2 = { name: 'nome', value: 200000 };
        var input3 = { name: 'nome', value: 300000 };
        var input4 = { name: 'nome', value: 400000 };
        var input5 = { name: 'nome', value: 500000 };
        var input6 = { name: 'nome', value: 600000 };
        this.listOfObjects.push(input);
        this.listOfObjects.push(input2);
        this.listOfObjects.push(input3);
        this.listOfObjects.push(input4);
        this.listOfObjects.push(input5);
        this.listOfObjects.push(input6);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_animated_counter_src_lib_ngx_animated_counter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/ngx-animated-counter/src/lib/ngx-animated-counter.module */ "./projects/ngx-animated-counter/src/lib/ngx-animated-counter.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _projects_ngx_animated_counter_src_lib_ngx_animated_counter_module__WEBPACK_IMPORTED_MODULE_5__["NgxAnimatedCounterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/vanishdark/angularanimatedcounter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map