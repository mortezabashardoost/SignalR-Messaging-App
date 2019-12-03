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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav></nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home.component.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<messages></messages>\r\n<new-message></new-message>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"register-card\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required=\"\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    </mat-form-field>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\">Login</button>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages.component.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"message-list\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n  <div *ngFor=\"let message of webService.messages\">\r\n    <mat-card class=\"message-card\">\r\n      <mat-card-title [routerLink]=\"['/messages',message.owner]\">{{ message.owner }} </mat-card-title>\r\n      <mat-card-content>{{ message.text }}</mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <button mat-button routerLink=\"/\" class=\"home-title\">InstaMessage</button>\r\n  <span style=\"flex: 1 1;\"></span>\r\n  <button *ngIf=\"!auth.isAuthenticated\" mat-button routerLink=\"/login\">Login</button>\r\n  <button *ngIf=\"!auth.isAuthenticated\" mat-button routerLink=\"/register\">Register</button>\r\n  <button *ngIf=\"auth.isAuthenticated\" mat-button routerLink=\"/profile\">Welcome {{auth.name}}</button>\r\n  <button *ngIf=\"auth.isAuthenticated\" mat-button (click)=\"auth.logout()\">Logout</button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-message.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-message.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"message-card\" id=\"new-message\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Leave a message\" autocomplete=\"off\" [(ngModel)]=\"message.text\" (keyup.enter)=\"post()\">\r\n  </mat-form-field>\r\n    <button type=\"submit\" (click)=\"post()\" mat-raised-button color=\"primary\">Post</button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"register-card\">\r\n <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"profileData.firstname\" required=\"\">\r\n    </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"profileData.lastname\" required=\"\">\r\n  </mat-form-field>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" (click)=\"saveProfile(profileData)\">Save</button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register.component.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"register-card\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required=\"\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n    </mat-form-field>\r\n    <br/>\r\n    <span *ngIf=\"form.errors?.mismatchFields\"> Passwords do not match</span>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\">Register</button>\r\n  </form>\r\n</mat-card>\r\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
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
/* harmony import */ var _new_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-message.component */ "./src/app/new-message.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.component */ "./src/app/messages.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");






















var routes = [
    {
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
    },
    {
        path: "login",
        component: _login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
    },
    {
        path: "register",
        component: _register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
    },
    {
        path: "profile",
        component: _profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]
    },
    {
        path: "messages/:name",
        component: _messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _new_message_component__WEBPACK_IMPORTED_MODULE_1__["NewMessageComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [
                _web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:5000/auth';
        this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]().withUrl("http://localhost:5000/echo").build();
        this.TOKEN_KEY = 'token';
        this.NAME_KEY = 'name';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "tokenHeader", {
        get: function () {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ 'headers': header });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "connectionStarted", {
        get: function () {
            return this.hubConnection.state === _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionState"].Connected;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (user) {
        var _this = this;
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(function (response) {
            _this.authenticateUser(response);
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        this.http.post(this.BASE_URL + '/login', credentials).subscribe(function (response) {
            _this.authenticateUser(response);
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        if (this.connectionStarted) {
            this.hubConnection.stop()
                .then(function () {
                console.log("Connection stopped");
            })
                .catch(function (err) { console.error(err); });
        }
        this.router.navigate(['/login']);
    };
    AuthService.prototype.authenticateUser = function (response) {
        var authResponse = response.json();
        if (!authResponse.token) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        if (!this.connectionStarted) {
            this.hubConnection.start()
                .then(function () {
                console.log("Connection started");
            })
                .catch(function (err) { console.error(err); });
        }
        this.router.navigate(['/']);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(webService, auth) {
        this.webService = webService;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.auth.isAuthenticated) {
            this.auth.logout();
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.login = function () {
        var credentials = { 'email': this.form.value['email'], 'password': this.form.value['password'] };
        this.auth.login(credentials);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages.component.ts":
/*!***************************************!*\
  !*** ./src/app/messages.component.ts ***!
  \***************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(auth, webService, route) {
        this.auth = auth;
        this.webService = webService;
        this.route = route;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.auth.hubConnection.on("Send", function (msg) {
            _this.webService.getMessages(_this.route.snapshot.params.name);
        });
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/new-message.component.ts":
/*!******************************************!*\
  !*** ./src/app/new-message.component.ts ***!
  \******************************************/
/*! exports provided: NewMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageComponent", function() { return NewMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var NewMessageComponent = /** @class */ (function () {
    function NewMessageComponent(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.message = {
            owner: this.auth.name,
            text: ""
        };
    }
    NewMessageComponent.prototype.post = function () {
        var _this = this;
        if (this.message.text > "" && this.auth.isAuthenticated) {
            this.webService.postMessage(this.message).subscribe(function (response) {
                if (_this.auth.connectionStarted) {
                    _this.auth.hubConnection.invoke("Echo", _this.message.text);
                }
            }, function (error) {
                _this.webService.handleError("Unable to post message");
            });
            ;
            this.message.text = "";
        }
    };
    NewMessageComponent.ctorParameters = function () { return [
        { type: _web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    NewMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'new-message',
            template: __webpack_require__(/*! raw-loader!./new-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-message.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NewMessageComponent);
    return NewMessageComponent;
}());



/***/ }),

/***/ "./src/app/profile.component.ts":
/*!**************************************!*\
  !*** ./src/app/profile.component.ts ***!
  \**************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.profileData = {
            firstname: "",
            lastname: ""
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isAuthenticated) {
            this.auth.logout();
        }
        this.webService.getUser().subscribe(function (res) {
            _this.profileData.firstname = res.json().firstName;
            _this.profileData.lastname = res.json().lastName;
        });
    };
    ProfileComponent.prototype.saveProfile = function (profileData) {
        var _this = this;
        this.webService.saveUser(profileData).subscribe(function (res) {
            _this.webService.alert("saved..");
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register.component.ts":
/*!***************************************!*\
  !*** ./src/app/register.component.ts ***!
  \***************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, emailValid()]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: matchingFields('password', 'confirmPassword')
        });
    }
    RegisterComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        this.auth.register(this.form.value);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

function matchingFields(field1, field2) {
    return function (form) {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return { mismatchFields: true };
        }
    };
}
function emailValid() {
    return function (control) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}


/***/ }),

/***/ "./src/app/web.service.ts":
/*!********************************!*\
  !*** ./src/app/web.service.ts ***!
  \********************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var WebService = /** @class */ (function () {
    function WebService(http, sb, auth) {
        this.http = http;
        this.sb = sb;
        this.auth = auth;
        this.BASE_URL = 'http://localhost:5000/api';
        this.getMessages(null);
    }
    WebService.prototype.getMessages = function (name) {
        var _this = this;
        name = (name) ? "/" + name : "";
        this.http.get(this.BASE_URL + '/messages' + name).subscribe(function (response) {
            _this.messages = response.json();
        }, function (error) {
            _this.handleError("Unable to get messages");
        });
    };
    WebService.prototype.postMessage = function (message) {
        return this.http.post(this.BASE_URL + '/messages', message);
    };
    WebService.prototype.getUser = function () {
        return this.http.get(this.BASE_URL + "/users/me", this.auth.tokenHeader);
    };
    WebService.prototype.saveUser = function (profileData) {
        return this.http.post(this.BASE_URL + "/users/me", profileData, this.auth.tokenHeader);
    };
    WebService.prototype.handleError = function (error) {
        this.sb.open(error, "Close", { duration: 4000, });
        console.error(error);
    };
    WebService.prototype.alert = function (message) {
        this.sb.open(message, "Close", { duration: 4000, });
    };
    WebService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], WebService);
    return WebService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Tutorials\.Net Core and Angular and Authentication\MessageBoardBackend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map