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
var category_1 = require('./category');
var plant_service_1 = require('./plant.service');
var InventoryListComponent = (function () {
    function InventoryListComponent(plantService) {
        this.plantService = plantService;
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        this.getPlants();
    };
    InventoryListComponent.prototype.getPlants = function () {
        var _this = this;
        this.plantService.getPlants().then(function (plants) { return _this.plants = plants; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', category_1.Category)
    ], InventoryListComponent.prototype, "category", void 0);
    InventoryListComponent = __decorate([
        core_1.Component({
            selector: 'inventory-list',
            templateUrl: 'html/inventory-list.component.html',
            providers: [plant_service_1.PlantService]
        }), 
        __metadata('design:paramtypes', [plant_service_1.PlantService])
    ], InventoryListComponent);
    return InventoryListComponent;
}());
exports.InventoryListComponent = InventoryListComponent;
//# sourceMappingURL=inventory-list.component.js.map