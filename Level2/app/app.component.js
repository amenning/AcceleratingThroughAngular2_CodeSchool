"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [{
                "id": 1,
                "name": "Super Tires",
                "description": "These tires are the very best",
                "inStock": 5
            },
            {
                "id": 2,
                "name": "Reinforced Shocks",
                "description": "Shocks made from kryptonite",
                "inStock": 4
            },
            {
                "id": 3,
                "name": "Padded Seats",
                "description": "Super soft seats for a smooth ride",
                "inStock": 0
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <ul>\n            <li *ngFor=\"let carPart of carParts\">\n                <h2>{{carPart.name}}</h2>\n                <p>{{carPart.description}}</p>\n                <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n                <p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n            </li>\n        <ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map