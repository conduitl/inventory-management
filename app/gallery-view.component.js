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
var plant_service_1 = require('./plant.service');
var GalleryViewComponent = (function () {
    function GalleryViewComponent(router, plantService) {
        this.router = router;
        this.plantService = plantService;
        this.plants = [];
    }
    GalleryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plantService.getPlants()
            .then(function (plants) { return _this.plants = plants; });
    };
    GalleryViewComponent.prototype.gotoDetail = function (plant) {
        var link = ['/detail', plant.id];
        this.router.navigate(link);
    };
    GalleryViewComponent = __decorate([
        core_1.Component({
            selector: 'gallery-view',
            templateUrl: 'html/gallery-view.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, plant_service_1.PlantService])
    ], GalleryViewComponent);
    return GalleryViewComponent;
}());
exports.GalleryViewComponent = GalleryViewComponent;
//# sourceMappingURL=gallery-view.component.js.map