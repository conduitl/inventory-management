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
var category_service_1 = require('../services/category.service');
var CategoryViewComponent = (function () {
    function CategoryViewComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryViewComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryViewComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .then(function (categories) {
            _this.categories = categories;
            _this.initialSelection = _this.selectedCategory || _this.categories[0];
        });
    };
    CategoryViewComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    CategoryViewComponent = __decorate([
        core_1.Component({
            selector: 'category-view',
            templateUrl: 'html/category-view.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoryViewComponent);
    return CategoryViewComponent;
}());
exports.CategoryViewComponent = CategoryViewComponent;
//# sourceMappingURL=category-view.component.js.map