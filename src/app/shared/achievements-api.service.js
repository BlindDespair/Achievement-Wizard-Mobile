"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var AchievementsApiService = (function () {
    function AchievementsApiService(http) {
        this.http = http;
    }
    AchievementsApiService.prototype.getAccount = function (apiKey) {
        return this.getAccountJson(apiKey);
    };
    AchievementsApiService.prototype.handleError = function (err) {
        return rxjs_1.Observable.throw(err.message || err);
    };
    AchievementsApiService.prototype.getAchievements = function () {
        return this.getAchievementsJson();
    };
    AchievementsApiService.prototype.getAchievementsJson = function () {
        return this.http.get('https://api.gw2efficiency.com/achievements?ids=all')
            .map(function (res) { return res.json(); })
            .do(function (res) { return console.log(res); })
            .catch(this.handleError);
    };
    AchievementsApiService.prototype.getAccountJson = function (apiKey) {
        return this.http.get("https://api.guildwars2.com/v2/account?access_token=" + apiKey)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AchievementsApiService = __decorate([
        core_1.Injectable()
    ], AchievementsApiService);
    return AchievementsApiService;
}());
exports.AchievementsApiService = AchievementsApiService;
