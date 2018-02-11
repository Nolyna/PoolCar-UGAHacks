webpackJsonp([0],{

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverDetailsPage = (function () {
    function DriverDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DriverDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-details',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\driver-details\driver-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Driver details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <ion-list id="driverDetails-list10">\n    <ion-item id="driverDetails-input13">\n      <ion-label stacked>\n        ID\n      </ion-label>\n      <ion-input type="text" placeholder="John Doe" name="name"></ion-input>\n    </ion-item>\n    <ion-item id="driverDetails-input14">\n      <ion-label stacked>\n        Car Model\n      </ion-label>\n      <ion-input type="text" placeholder="Email" name="email"></ion-input>\n    </ion-item>\n    <ion-item id="driverDetails-input15">\n      <ion-label stacked>\n        Car make\n      </ion-label>\n      <ion-input type="text" placeholder="4047893398" name="phone"></ion-input>\n    </ion-item>\n    <ion-item id="driverDetails-input16">\n      <ion-label stacked>\n        Car color\n      </ion-label>\n      <ion-input type="text" placeholder="Black" name="password"></ion-input>\n    </ion-item>\n    <ion-item id="driverDetails-input17">\n      <ion-label stacked>\n        Car VIN\n      </ion-label>\n      <ion-input type="number" placeholder="WVGAV3AX0DW620607" name="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button id="driverDetails-button9" ion-button color="positive" block>\n    Update\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\driver-details\driver-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], DriverDetailsPage);
    return DriverDetailsPage;
}());

//# sourceMappingURL=driver-details.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var PlanningPage = (function () {
    function PlanningPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.req = {};
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]();
        this.UID = localStorage.getItem('uid');
        console.log(this.UID);
    }
    PlanningPage.prototype.writeRequete = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('request/').push({
                    user: this.UID,
                    arrivalCity: req.arrivalCity,
                    arrivalZip: req.arrivalZip,
                    date: req.datesplan,
                    departCity: req.departCity,
                    departZip: req.departZip
                });
                showAlert();
                return [2 /*return*/];
            });
        });
    };
    PlanningPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Great!',
            subTitle: 'Your request has been submit!',
            buttons: ['OK']
        });
        alert.present();
    };
    PlanningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-planning',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\planning\planning.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Plan Your trip\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="planning-form6">\n    <ion-item id="planning-input26">\n      <ion-label stacked>\n        Departure Date\n      </ion-label>\n      <ion-input type="date" placeholder="" name="datesplan" [(ngModel)]="req.datesplan"></ion-input>\n    </ion-item>\n    <ion-item-divider color="light" id="planning-list-item-divider2">\n      Departure\n    </ion-item-divider>\n    <ion-item id="planning-input29">\n      <ion-label>\n        City\n      </ion-label>\n      <ion-input type="text" placeholder="" name="departCity" [(ngModel)]="req.departCity"></ion-input>\n    </ion-item>\n    <ion-item id="planning-input30">\n      <ion-label>\n        Zip Code\n      </ion-label>\n      <ion-input type="text" placeholder="" name="departZip" [(ngModel)]="req.departZip"></ion-input>\n    </ion-item>\n    <ion-item-divider color="light" id="planning-list-item-divider1">\n      Destination\n    </ion-item-divider>\n    <ion-item id="planning-input31">\n      <ion-label>\n        City\n      </ion-label>\n      <ion-input type="text" placeholder="" name="arrivalCity" [(ngModel)]="req.arrivalCity"></ion-input>\n    </ion-item>\n    <ion-item id="planning-input32">\n      <ion-label>\n        Zip Code\n      </ion-label>\n      <ion-input type="text" placeholder="" name="arrivalZip" [(ngModel)]="req.arrivalZip"></ion-input>\n    </ion-item>\n    <button id="planning-button12" ion-button color="positive" block on-click="writeRequete(req)">\n      Submit\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\planning\planning.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], PlanningPage);
    return PlanningPage;
    var _a, _b;
}());

//# sourceMappingURL=planning.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagePage = (function () {
    function MessagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.UID = localStorage.getItem('uid');
    }
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\message\message.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Message\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <div id="message-container1">\n    <form id="message-form8">\n      <ion-item id="message-input33">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Type message here" name="message"></ion-input>\n      </ion-item>\n      <button id="message-button18" ion-button color="positive">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\message\message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryPage = (function () {
    function HistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\history\history.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <ion-list id="history-list14">\n    <ion-item color="none" id="history-list-item30">\n      <ion-avatar item-left>\n        <img src="assets/img/ninja.png"/>\n      </ion-avatar>\n      <h2>\n        John Doe\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="history-list-item28">\n      <ion-avatar item-left>\n        <img src="assets/img/ninja.png"/>\n      </ion-avatar>\n      <h2>\n        Jane Doe\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="history-list-item27">\n      <ion-avatar item-left>\n        <img src="assets/img/ninja.png"/>\n      </ion-avatar>\n      <h2>\n        Alice Doe\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\help\help.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Help\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n\n  <ion-list id="help-list13">\n\n    <ion-item color="none" id="help-list-item11">\n\n      <ion-card>\n  <ion-card-header>\n    How to reset my password\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American <br>\n    term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n\n\n    </ion-item>\n    <ion-item color= "red" id="help-list-item12">\n      <ion-card>\n  <ion-card-header>\n    How to Login\n  </ion-card-header>\n  <ion-card-content>\n    how to loginhow to loginhow to loginhow to login<br>\n    how to loginhow to loginhow to loginhow to login\n  </ion-card-content>\n</ion-card>\n    </ion-item>\n\n\n    <ion-item color="blue" id="help-list-item17">\n      <ion-card>\n  <ion-card-header>\n    How to know who are the riders and drivers?\n  </ion-card-header>\n  <ion-card-content>\n    How to know who are the riders and drivers?<br>\n  How to know who are the riders and drivers?How to know <br>\n  who are the riders and drivers?\n  </ion-card-content>\n</ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    SettingsPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    SettingsPage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    SettingsPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <ion-list id="settings-list6">\n    <ion-item color="none" id="settings-list-item20">\n      Favorite\n      <ion-icon name="star-outline" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="settings-list-item21">\n      Saved Place\n    </ion-item>\n    <ion-item color="none" id="settings-list-item22">\n      Privacy Settings\n    </ion-item>\n    <ion-item color="none" on-click="goToLogin()" id="settings-list-item29">\n      Signout\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.phone = "";
        this.UID = localStorage.getItem('uid');
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]();
        this.email = localStorage.getItem('email');
        this.name = localStorage.getItem('name');
        this.type = localStorage.getItem('type');
        this.db.ref(this.UID + '/profile/name/').on('value', function (result) {
            this.name = result.val();
        });
        this.db.ref(this.UID + '/profile/type/').on('value', function (result) {
            this.type = result.val();
        });
        this.db.ref(this.UID + '/profile/phone/').on('value', function (result) {
            console.log(result.val());
            //this.phone = result.val() || "";
        });
    }
    ProfilePage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <img src="assets/img/wZ5J3OCjRLFYsadL0JQw_user.svg" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <ion-list id="profile-list9">\n    <ion-item id="profile-input6">\n      <ion-label stacked>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="{{name}}" name="name"> {{ name }}</ion-input>\n    </ion-item>\n    <ion-item id="profile-input7">\n      <ion-label stacked>\n        Email\n      </ion-label>\n      <ion-input type="text" name="email" placeholder="{{email}}"> {{ email }}</ion-input>\n    </ion-item>\n    <ion-item id="profile-input8">\n      <ion-label stacked>\n        Phone\n      </ion-label>\n      <ion-input type="text" name="phone" placeholder="4679982734"> {{ phone}} </ion-input>\n    </ion-item>\n    <ion-item id="profile-input12">\n      <ion-label stacked>\n        Password\n      </ion-label>\n      <ion-input type="password" name="password" placeholder="*********"> *********</ion-input>\n    </ion-item>\n  </ion-list>\n  <button *ngIf = "type == \'driver\'" id="profile-button8" ion-button color="positive" block on-click="goToDriverDetails()">\n    Next\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MatchingPage = (function () {
    function MatchingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MatchingPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MatchingPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    MatchingPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    MatchingPage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    MatchingPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    MatchingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matching',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\matching\matching.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Any Matches ???\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n\n  <ion-list id="help-list13">\n\n    <ion-item color="none" id="help-list-item11">\n\n      <ion-card>\n      <ion-card-header>\n        <p>Sorry, you don\'t have any match yet !!!</p>\n      </ion-card-header>\n      <ion-card-content>\n      </ion-card-content>\n    </ion-card>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\matching\matching.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MatchingPage);
    return MatchingPage;
}());

//# sourceMappingURL=matching.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_emergency_emergency__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_updatde_details_updatde_details__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_planning_planning__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_email_update_email_update__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_phone_update_phone_update__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_password_update_password_update__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_history_history__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_help_help__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_matching_matching__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_message_message__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_start_trip_start_trip__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_end_trip_end_trip__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_end_trip2_end_trip2__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__environments_environment__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_database__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//add


//added

//addded 2

//import { FIREBASE_CREDENTIALS } from "./firebase.credentials";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_emergency_emergency__["a" /* EmergencyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_driver_details_driver_details__["a" /* DriverDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_updatde_details_updatde_details__["a" /* UpdatdeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_planning_planning__["a" /* PlanningPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_email_update_email_update__["a" /* EmailUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_phone_update_phone_update__["a" /* PhoneUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_password_update_password_update__["a" /* PasswordUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_matching_matching__["a" /* MatchingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_start_trip_start_trip__["a" /* StartTripPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_end_trip_end_trip__["a" /* EndTripPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_end_trip2_end_trip2__["a" /* EndTrip2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_26__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_emergency_emergency__["a" /* EmergencyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_driver_details_driver_details__["a" /* DriverDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_updatde_details_updatde_details__["a" /* UpdatdeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_planning_planning__["a" /* PlanningPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_email_update_email_update__["a" /* EmailUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_phone_update_phone_update__["a" /* PhoneUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_password_update_password_update__["a" /* PasswordUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_matching_matching__["a" /* MatchingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_start_trip_start_trip__["a" /* StartTripPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_end_trip_end_trip__["a" /* EndTripPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_end_trip2_end_trip2__["a" /* EndTrip2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_start_trip_start_trip__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_planning_planning__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_message_message__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_help__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_matching_matching__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    MyApp.prototype.goToPlanning = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_planning_planning__["a" /* PlanningPage */]);
    };
    MyApp.prototype.goToMessage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */]);
    };
    MyApp.prototype.goToMatching = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_matching_matching__["a" /* MatchingPage */]);
    };
    MyApp.prototype.goToHistory = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */]);
    };
    MyApp.prototype.goToTrip = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_start_trip_start_trip__["a" /* StartTripPage */]);
    };
    MyApp.prototype.goToHelp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */]);
    };
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title *ngIf="!name; then logout">\n        Menu\n      </ion-title>\n      <ng-template #logout>Hi {{name}}</ng-template>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item7">\n        Home\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToProfile()" id="menu-list-item1">\n        Profile\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToPlanning()" id="menu-list-item5">\n        Plan trip\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToTrip()" id="menu-list-item5">\n        Trip\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMatching()" id="menu-list-item5">\n        Match\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMessage()" id="menu-list-item6">\n        Messages\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToHistory()" id="menu-list-item4">\n        History\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToHelp()" id="menu-list-item2">\n        Help\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item3">\n        Settings\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_details_driver_details__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmergencyPage = (function () {
    function EmergencyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EmergencyPage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    EmergencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emergency',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\emergency\emergency.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Emergency\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page19">\n  <ion-list id="emergency-list12">\n    <ion-item id="emergency-input9">\n      <ion-label stacked>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="John Doe" name="name"></ion-input>\n    </ion-item>\n    <ion-item id="emergency-input25">\n      <ion-label stacked>\n        Email\n      </ion-label>\n      <ion-input type="text" placeholder="Email" name="email"></ion-input>\n    </ion-item>\n    <ion-item id="emergency-input27">\n      <ion-label stacked>\n        Phone\n      </ion-label>\n      <ion-input type="text" placeholder="4047893398" name="phone"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button id="emergency-button17" ion-button color="positive" block on-click="goToDriverDetails()">\n    Update\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\emergency\emergency.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EmergencyPage);
    return EmergencyPage;
}());

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatdeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatdeDetailsPage = (function () {
    function UpdatdeDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UpdatdeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatde-details',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\updatde-details\updatde-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      updatde details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <ion-list id="updatdeDetails-list11">\n    <ion-item id="updatdeDetails-input18">\n      <ion-label stacked>\n        ID\n      </ion-label>\n      <ion-input type="text" placeholder="John Doe" name="name"></ion-input>\n    </ion-item>\n    <ion-item id="updatdeDetails-input19">\n      <ion-label stacked>\n        Car Model\n      </ion-label>\n      <ion-input type="text" placeholder="Email" name="email"></ion-input>\n    </ion-item>\n    <ion-item id="updatdeDetails-input20">\n      <ion-label stacked>\n        Car make\n      </ion-label>\n      <ion-input type="text" placeholder="4047893398" name="phone"></ion-input>\n    </ion-item>\n    <ion-item id="updatdeDetails-input21">\n      <ion-label stacked>\n        Car color\n      </ion-label>\n      <ion-input type="text" placeholder="Black" name="password"></ion-input>\n    </ion-item>\n    <ion-item id="updatdeDetails-input22">\n      <ion-label stacked>\n        Car VIN\n      </ion-label>\n      <ion-input type="text" placeholder="WVGAV3AX0DW620607" name="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button id="updatdeDetails-button10" ion-button color="positive" block>\n    Save\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\updatde-details\updatde-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], UpdatdeDetailsPage);
    return UpdatdeDetailsPage;
}());

//# sourceMappingURL=updatde-details.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailUpdatePage = (function () {
    function EmailUpdatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EmailUpdatePage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    EmailUpdatePage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    EmailUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email-update',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\email-update\email-update.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Email update\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="emailUpdate-form4">\n    <ion-item id="emailUpdate-input11">\n      <ion-label stacked>\n        Email\n      </ion-label>\n      <ion-input type="text" placeholder="johndoe@gmail.com"></ion-input>\n    </ion-item>\n    <button id="emailUpdate-button7" ion-button color="positive" block on-click="goToProfile()">\n      Save\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\email-update\email-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EmailUpdatePage);
    return EmailUpdatePage;
}());

//# sourceMappingURL=email-update.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneUpdatePage = (function () {
    function PhoneUpdatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhoneUpdatePage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    PhoneUpdatePage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    PhoneUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone-update',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\phone-update\phone-update.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Phone update\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="phoneUpdate-form3">\n    <ion-item id="phoneUpdate-input10">\n      <ion-label stacked>\n        Phone\n      </ion-label>\n      <ion-input type="text" placeholder="4047652894"></ion-input>\n    </ion-item>\n    <button id="phoneUpdate-button6" ion-button color="positive" block on-click="goToProfile()">\n      Save\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\phone-update\phone-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PhoneUpdatePage);
    return PhoneUpdatePage;
}());

//# sourceMappingURL=phone-update.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordUpdatePage = (function () {
    function PasswordUpdatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordUpdatePage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    PasswordUpdatePage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    PasswordUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-update',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\password-update\password-update.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Password update\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <form id="passwordUpdate-form5">\n    <ion-item id="passwordUpdate-input23">\n      <ion-label stacked>\n        Current Password\n      </ion-label>\n      <ion-input type="text" placeholder="4047652894"></ion-input>\n    </ion-item>\n    <ion-item id="passwordUpdate-input24">\n      <ion-label stacked>\n        New password\n      </ion-label>\n      <ion-input type="text" placeholder="4047652894"></ion-input>\n    </ion-item>\n    <button id="passwordUpdate-button11" ion-button color="positive" block on-click="goToProfile()">\n      Save\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\password-update\password-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PasswordUpdatePage);
    return PasswordUpdatePage;
}());

//# sourceMappingURL=password-update.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__end_trip_end_trip__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__end_trip2_end_trip2__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartTripPage = (function () {
    function StartTripPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.type = localStorage.getItem('type');
    }
    StartTripPage.prototype.started = function () {
        if (localStorage.getItem('type') == "rider") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__end_trip_end_trip__["a" /* EndTripPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__end_trip2_end_trip2__["a" /* EndTrip2Page */]);
        }
    };
    StartTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-trip',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\start-trip\start-trip.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Start trip\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page16">\n  <img src="assets/img/eszi1JHGTZShlyZJXxNG_GoogleMap.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <button id="startTrip-button13" ion-button color="positive" block on-click="started()">\n    Start Trip !!!\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\start-trip\start-trip.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], StartTripPage);
    return StartTripPage;
    var _a;
}());

//# sourceMappingURL=start-trip.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndTripPage = (function () {
    function EndTripPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndTripPage.prototype.finish = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EndTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-end-trip',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\end-trip\end-trip.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      End trip\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page17">\n  <img src="assets/img/eszi1JHGTZShlyZJXxNG_GoogleMap.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <button id="endTrip-button14" ion-button color="positive" block on-click="finish()">\n    End Trip !\n  </button>\n  <button id="endTrip-button16" ion-button color="assertive" block>\n    HELP !!!\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\end-trip\end-trip.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], EndTripPage);
    return EndTripPage;
    var _a;
}());

//# sourceMappingURL=end-trip.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndTrip2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndTrip2Page = (function () {
    function EndTrip2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndTrip2Page.prototype.finish = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EndTrip2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-end-trip2',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\end-trip2\end-trip2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      End trip\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page18">\n  <img src="assets/img/eszi1JHGTZShlyZJXxNG_GoogleMap.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <button id="endTrip2-button15" ion-button color="positive" block on-click="finish()">\n    End Trip !!!\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\end-trip2\end-trip2.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], EndTrip2Page);
    return EndTrip2Page;
    var _a;
}());

//# sourceMappingURL=end-trip2.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDtgsmUUDC5S-tZzHL0_DU33vmtvs0g7IQ",
        authDomain: "ugahacks-feb2018.firebaseapp.com",
        databaseURL: "https://ugahacks-feb2018.firebaseio.com",
        projectId: "ugahacks-feb2018",
        storageBucket: "ugahacks-feb2018.appspot.com",
        messagingSenderId: "303417157653"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.lists = [];
        this.UID = localStorage.getItem('uid');
        this.email = localStorage.getItem('email');
        var testlists = [];
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]();
        this.db.ref(this.UID + '/profile/name').on('value', function (result) {
            localStorage.setItem('name', result.val());
        });
        this.db.ref(this.UID + '/profile/type').on('value', function (result) {
            localStorage.setItem('type', result.val());
        });
        //dpc = departure city, dpzc = departure zip code,arc = arrival city, arzc = arrival city zip code
        this.db.ref('request/').on('value', function (result) {
            result.forEach(function (data) {
                var value = data.val();
                var Rname = "";
                var Rtype = "";
                var db = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]();
                db.ref(value.user + '/profile/name').on('value', function (res) {
                    localStorage.setItem('tmp_name', res.val());
                    console.log(res.val());
                });
                db.ref(value.user + '/profile/type').on('value', function (res) {
                    localStorage.setItem('tmp_type', res.val());
                });
                Rname = localStorage.getItem('tmp_name');
                Rtype = localStorage.getItem('tmp_type');
                console.log(Rname);
                testlists.push({ date: value.date, dpc: value.departCity, dpzc: value.departZip, arc: value.arrivalCity, arzc: value.arrivalZip, key: data.key, name: Rname, type: Rtype });
            });
        });
        //driver@uga.com
        this.lists = testlists;
        console.log(this.lists);
    } // end costructor
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      PoolCar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1" style="background-color:default;">\n  <form id="home-form7">\n    <ion-searchbar placeholder="" name="" id="home-search2"></ion-searchbar>\n  </form>\n\n  <div class="spacer" style="width:300px;height:49px;" id="home-spacer2"></div>\n  <div *ngIf = "lists.length == 0">\n      <p padding> There is no request. Please come back later.</p>\n    </div>\n\n\n  <ion-list id="home-list5">\n    <ng-container *ngFor = "let element of lists">\n\n      <!--ion-item *ngIf = "element.type == \'driver\'" color="royal" id="home-list-item">\n      <ion-item *ngIf = "element.type == \'rider\'" color="energized" id="home-list-item"-->\n      <ion-item color="energized" id="home-list-item">\n        <ion-avatar item-left>\n          <img src="assets/img/ninja.png" />\n        </ion-avatar>\n        <h2>\n          {{element.name}}\n          <ion-icon *ngIf = "element.type == \'driver\'" name="car"></ion-icon>\n          <ion-icon *ngIf = "element.type == \'rider\'" name="walk"></ion-icon>\n\n        </h2>\n        <p>Date: {{element.date}} <br/>\n          Arrival City: {{element.arc}}   Zip Code:{{element.arzc}}<br/>\n          Departure City: {{element.dpc}}   Zip Code:{{element.dpzc}}</p>\n        </ion-item >\n      <!--/ion-item *ngIf = "element.type == rider" >\n      </ion-item *ngIf = "element.type == driver"-->\n\n    </ng-container>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__driver_details_driver_details__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



//import { LoginPage } from '../login/login';




var LoginPage = (function () {
    //before, navctrl only
    function LoginPage(afAuth, navCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        //addded
        this.user = {};
    }
    LoginPage_1 = LoginPage;
    //add
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            localStorage.setItem('email', user.email);
                            localStorage.setItem('uid', result.uid);
                            console.log("id", result.uid);
                            //replaced 'HomePage' with HomePage
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //add
    /*
      async register(user: User) {
          try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(
              user.email,
              user.password
            );
            if (result) {
              this.navCtrl.setRoot('HomePage');
            }
    
          } catch (e) {
            console.error(e);
          }
        }
    
    */
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="login-form1">\n    <img src="assets/img/UAnSTfzBR2mIncXKhWhw_goroad.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" name = "email" [(ngModel)]="user.email"> driver@uga.com</ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" name = "password" [(ngModel)]="user.password"> 123456 </ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="stable" block on-click="login(user)">\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block on-click="goToSignup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SignupPage } from '../signup/signup';



var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage_1 = SignupPage;
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage_1);
    };
    SignupPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    SignupPage.prototype.goToDriverDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_details_driver_details__["a" /* DriverDetailsPage */]);
    };
    SignupPage = SignupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Windows\ugahacks\myApp\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <img src="assets/img/hawTERBZTiyfUXpucHlp_legs-car.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="signup-form2">\n    <ion-list id="signup-list3">\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" name="email" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="text" placeholder="" name="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-item id="signup-radio6">\n      <ion-label>\n        Are you:\n      </ion-label>\n      <ion-radio name="type"></ion-radio>\n    </ion-item>\n    <button id="signup-button3" ion-button color="stable" block on-click="register(user)">\n      Sign up\n    </button>\n    <button id="signup-button5" ion-button clear color="positive" block on-click="goToLogin()">\n      Or log in\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\ugahacks\myApp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
    var SignupPage_1;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map