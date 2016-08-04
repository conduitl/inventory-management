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
var inventory_list_component_1 = require('./inventory-list.component');
var CategoryViewComponent = (function () {
    function CategoryViewComponent() {
        this.categories = categories; // exposes categories for binding
    }
    CategoryViewComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    CategoryViewComponent = __decorate([
        core_1.Component({
            selector: 'category-view',
            template: "    \n    <section class=\"row\">\n        <div class=\"col-md-3\">\n            <h2>Categories</h2>\n            <ul class=\"categories list-group\">\n                <li *ngFor=\"let category of categories\"\n                    class=\"list-group-item\"\n                    [class.active]=\"category === selectedCategory\"\n                    (click)=\"onSelect(category)\">\n                    <span>{{category.id}}</span>\n                    <span>{{category.name}}</span>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-9\">\n            <!--Add List Component-->\n            <inventory-list [category]=\"selectedCategory\"></inventory-list>\n        </div>\n    </section>",
            directives: [inventory_list_component_1.InventoryListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryViewComponent);
    return CategoryViewComponent;
}());
exports.CategoryViewComponent = CategoryViewComponent;
var categories = [
    { id: 1, name: 'flowers' },
    { id: 2, name: 'shrubs' },
    { id: 3, name: 'trees' }
];
//# sourceMappingURL=category-view.component.js.map