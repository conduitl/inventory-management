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
var router_1 = require('@angular/router');
var plant_1 = require('../model/plant');
var GridLayoutComponent = (function () {
    function GridLayoutComponent(router) {
        this.router = router;
    }
    // This method is duplicated in InventoryListCompnent
    // ..is there a way to @Input a method?
    GridLayoutComponent.prototype.gotoDetail = function (plant) {
        this.router.navigate(['/detail', plant.id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', plant_1.Plant)
    ], GridLayoutComponent.prototype, "plant", void 0);
    GridLayoutComponent = __decorate([
        core_1.Component({
            selector: 'grid-layout',
            templateUrl: 'html/grid-layout.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], GridLayoutComponent);
    return GridLayoutComponent;
}());
exports.GridLayoutComponent = GridLayoutComponent;
//# sourceMappingURL=grid-layout.component.js.map