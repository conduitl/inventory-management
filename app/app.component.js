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
var Plant = (function () {
    function Plant() {
    }
    return Plant;
}());
exports.Plant = Plant;
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Plant Catalog';
        this.plants = PLANTS; // exposes the plants for binding
        this.categories = categories; // exposes categories for binding
    }
    AppComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'html/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var categories = [
    { id: 1, name: 'flowers', plants: null },
    { id: 2, name: 'shrubs', plants: null },
    { id: 3, name: 'trees', plants: null }
];
var PLANTS = [
    { id: 1, name: 'cyclamen' },
    { id: 2, name: 'alyssum' },
    { id: 3, name: 'dianthus' },
    { id: 4, name: 'sweet william' },
    { id: 5, name: 'juncus' },
    { id: 6, name: 'kale' },
    { id: 7, name: 'maidenhair' },
    { id: 8, name: 'dracaena' },
    { id: 9, name: 'creeping jenny' },
    { id: 10, name: 'English ivy' }
];
//# sourceMappingURL=app.component.js.map