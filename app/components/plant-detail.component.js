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
var plant_service_1 = require('../services/plant.service');
var PlantDetailComponent = (function () {
    function PlantDetailComponent(plantService, route) {
        this.plantService = plantService;
        this.route = route;
        this.lorem = getLorem();
    }
    PlantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.plantService.getPlant(id)
                .then(function (plant) {
                _this.plant = plant;
            });
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
            template: "\n        <div *ngIf=\"plant\">\n            <h2>{{plant.name}} details</h2>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <p>{{plant.description}}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <img class=\"img-responsive center-block\" src=\"{{plant.image | slice:0:-4 }}-lg.jpg\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <p>{{lorem}}</p>\n                </div>\n            </div>\n            <div>\n                <button (click)=\"goBack()\">Back</button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [plant_service_1.PlantService, router_1.ActivatedRoute])
    ], PlantDetailComponent);
    return PlantDetailComponent;
}());
exports.PlantDetailComponent = PlantDetailComponent;
function getLorem() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus sem. Donec accumsan vitae eros at pulvinar. Etiam auctor turpis felis, ac pharetra nisi sodales vitae. Fusce ex odio, commodo id metus eget, malesuada efficitur arcu. Etiam commodo vehicula cursus. Donec ultrices neque sed augue eleifend, id luctus erat semper. Vestibulum tellus metus, cursus nec posuere quis, imperdiet dapibus diam. Quisque ut risus ac magna ullamcorper facilisis vitae eu diam. Ut congue tincidunt risus efficitur aliquam. Duis viverra est elit, nec fermentum turpis scelerisque eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam a diam lorem. Aliquam molestie laoreet aliquet. Curabitur lectus nisi, fringilla condimentum nunc consectetur, rhoncus porttitor dui. Fusce pulvinar suscipit dolor, non dignissim mauris.\n\nSuspendisse mauris ligula, lacinia a tortor non, accumsan pellentesque turpis. Donec a pulvinar nunc. Nullam ut nunc eget tortor interdum pulvinar. Curabitur in luctus diam. Sed dignissim euismod pellentesque. Sed et libero massa. Nullam ornare commodo risus porta dapibus. Nulla sit amet dolor eu urna fermentum condimentum id sed magna. Sed iaculis, justo at consectetur lobortis, augue lorem suscipit enim, et accumsan nisl risus nec lacus.\n";
}
//# sourceMappingURL=plant-detail.component.js.map