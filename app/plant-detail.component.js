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
var PlantDetailComponent = (function () {
    function PlantDetailComponent(plantService, route) {
        this.plantService = plantService;
        this.route = route;
    }
    PlantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.plantService.getPlant(id)
                .then(function (plant) { return _this.plant = plant; });
        });
    };
    PlantDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlantDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PlantDetailComponent = __decorate([
        core_1.Component({
            selector: 'plant-detail',
            template: "\n        <div *ngIf=\"plant\">\n            <h2>{{plant.name}} details</h2>\n            <p>{{plant.description}}</p>\n            <img src=\"{{plant.image | slice:0:-4 }}-lg.jpg\"/>\n            <div>\n                <button (click)=\"goBack()\">Back</button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [plant_service_1.PlantService, router_1.ActivatedRoute])
    ], PlantDetailComponent);
    return PlantDetailComponent;
}());
exports.PlantDetailComponent = PlantDetailComponent;
//# sourceMappingURL=plant-detail.component.js.map