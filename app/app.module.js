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
var platform_browser_1 = require('@angular/platform-browser');
/* App Root */
var app_component_1 = require('./components/app.component');
var app_routing_1 = require('./app.routing');
/* Components */
var inventory_list_component_1 = require('./components/inventory-list.component');
var list_layout_component_1 = require('./components/list-layout.component');
var grid_layout_component_1 = require('./components/grid-layout.component');
/* Services */
var plant_service_1 = require('./services/plant.service');
var category_service_1 = require('./services/category.service');
var design_service_1 = require('./services/design.service');
var supplier_service_1 = require('./services/supplier.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                inventory_list_component_1.InventoryListComponent,
                list_layout_component_1.ListLayoutComponent,
                grid_layout_component_1.GridLayoutComponent
            ],
            providers: [
                plant_service_1.PlantService,
                category_service_1.CategoryService,
                design_service_1.DesignService,
                supplier_service_1.SupplierService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map