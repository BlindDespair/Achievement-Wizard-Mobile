"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GreetingUserComponent = (function () {
    function GreetingUserComponent() {
        this.greeting = new core_1.EventEmitter();
        this.logedout = new core_1.EventEmitter();
    }
    GreetingUserComponent.prototype.ngOnInit = function () {
        this.greeting.emit();
    };
    GreetingUserComponent.prototype.logout = function () {
        this.logedout.emit();
    };
    __decorate([
        core_1.Input()
    ], GreetingUserComponent.prototype, "account", void 0);
    __decorate([
        core_1.Output()
    ], GreetingUserComponent.prototype, "greeting", void 0);
    __decorate([
        core_1.Output()
    ], GreetingUserComponent.prototype, "logedout", void 0);
    GreetingUserComponent = __decorate([
        core_1.Component({
            selector: 'app-greeting-user',
            templateUrl: 'greeting-user.component.html',
            styleUrls: ['greeting-user.component.scss']
        })
    ], GreetingUserComponent);
    return GreetingUserComponent;
}());
exports.GreetingUserComponent = GreetingUserComponent;
