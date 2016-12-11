"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AhievementsComponent = (function () {
    function AhievementsComponent(achievementsApiService) {
        this.isAuthorized = false;
        this.achievementsApiService = achievementsApiService;
    }
    AhievementsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('api_key')) {
            this.isAuthorized = true;
        }
    };
    AhievementsComponent.prototype.onAutorized = function (apiKey) {
        var _this = this;
        this.error = undefined;
        this.achievementsApiService.getAccount(apiKey).subscribe(function () { }, function (err) { _this.error = err; return console.log(_this.error); }, function () {
            _this.isAuthorized = true;
            localStorage.setItem('api_key', apiKey);
            return console.log('done');
        });
    };
    AhievementsComponent.prototype.onLogout = function () {
        localStorage.removeItem('api_key');
        this.isAuthorized = false;
    };
    AhievementsComponent.prototype.onGreeting = function () {
        var _this = this;
        this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(function (res) { return _this.account = res; });
    };
    AhievementsComponent.prototype.onLoadData = function () {
        var _this = this;
        this.achievementsApiService.getAchievements().subscribe(function (res) { return _this.categoryGroups = res; });
    };
    AhievementsComponent = __decorate([
        core_1.Component({
            selector: 'app-ahievements',
            templateUrl: './ahievements.component.html',
            styleUrls: ['./ahievements.component.scss']
        })
    ], AhievementsComponent);
    return AhievementsComponent;
}());
exports.AhievementsComponent = AhievementsComponent;
