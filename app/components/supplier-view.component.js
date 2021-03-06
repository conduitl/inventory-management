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
var supplier_service_1 = require('../services/supplier.service');
var SupplierViewComponent = (function () {
    function SupplierViewComponent(supplierService) {
        this.supplierService = supplierService;
    }
    SupplierViewComponent.prototype.ngOnInit = function () {
        this.getSuppliers();
    };
    SupplierViewComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.supplierService.getSuppliers()
            .then(function (suppliers) {
            _this.suppliers = suppliers;
        });
    };
    SupplierViewComponent = __decorate([
        core_1.Component({
            selector: 'supplier-view',
            template: "\n        <h1>Suppliers</h1>\n        <ul>\n            <li *ngFor=\"let supplier of suppliers\">\n                {{supplier.name}}\n            </li>\n        </ul>\n        "
        }), 
        __metadata('design:paramtypes', [supplier_service_1.SupplierService])
    ], SupplierViewComponent);
    return SupplierViewComponent;
}());
exports.SupplierViewComponent = SupplierViewComponent;
//# sourceMappingURL=supplier-view.component.js.map