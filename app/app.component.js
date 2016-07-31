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
    { id: 1, name: 'cyclamen', type: 'flowers', image: 'img/cyclamen.jpg',
        description: 'Cyclamen is a genus of 23 species of perennial flowering plants in the family Primulaceae. Cyclamen species are native to Europe and the Mediterranean Basin east to Iran, with one species in Somalia. They grow from tubers and are valued for their flowers with upswept petals and variably patterned leaves. (Wikipedia)' },
    { id: 2, name: 'alyssum', type: 'flowers', image: 'img/alyssum.jpg',
        description: 'Alyssum is a genus of about 100–170 species of flowering plants in the family Brassicaceae, native to Europe, Asia, and northern Africa, with the highest species diversity in the Mediterranean region. The genus comprises annual and perennial herbaceous plants or (rarely) small shrubs, growing to 10–100 cm tall, with oblong-oval leaves and yellow or white flowers (pink to purple in a few species). (Wikipedia)' },
    { id: 3, name: 'dianthus', type: 'flowers', image: 'img/dianthus.jpg', description: '' },
    { id: 4, name: 'sweet william', type: 'flowers', image: null, description: '' },
    { id: 5, name: 'juncus', type: 'flowers', image: null, description: '' },
    { id: 6, name: 'kale', type: 'flowers', image: null, description: '' },
    { id: 7, name: 'maidenhair', type: 'flowers', image: null, description: '' },
    { id: 8, name: 'dracaena', type: 'flowers', image: null, description: '' },
    { id: 9, name: 'creeping jenny', type: 'flowers', image: null, description: '' },
    { id: 10, name: 'English ivy', type: 'flowers', image: null, description: '' },
    { id: 11, name: 'tipu tree', type: 'trees', image: null, description: '' },
    { id: 12, name: 'cathedral oak', type: 'trees', image: null, description: '' },
    { id: 13, name: 'cottonwood', type: 'trees', image: null, description: '' },
    { id: 14, name: 'tru-green elm', type: 'trees', image: null, description: '' },
    { id: 15, name: 'camphor', type: 'trees', image: null, description: '' },
    { id: 16, name: 'shumard red oak', type: 'trees', image: null, description: '' },
    { id: 17, name: 'azaleas', type: 'shrubs', image: null, description: '' },
    { id: 18, name: 'redbud', type: 'shrubs', image: null, description: '' },
    { id: 19, name: 'foxtail', type: 'shrubs', image: null, description: '' },
    { id: 20, name: 'monrovia', type: 'shrubs', image: null, description: '' },
    { id: 21, name: 'jatropha', type: 'shrubs', image: null, description: '' },
    { id: 22, name: 'thryallis', type: 'shrubs', image: null, description: '' }
];
//# sourceMappingURL=app.component.js.map