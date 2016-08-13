import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../model/supplier';

@Component({
    selector: 'supplier-view',
    template: `
        <h1>Suppliers</h1>
        <ul>
            <li *ngFor="let supplier of suppliers">
                {{supplier.name}}
            </li>
        </ul>
        `
})
export class SupplierViewComponent {
    constructor(
        private supplierService: SupplierService
    ){}
    suppliers: Supplier[];

    ngOnInit() {
        this.getSuppliers();
    }
    getSuppliers() {
        this.supplierService.getSuppliers()
            .then(suppliers => {
                this.suppliers = suppliers;
            });
    }
}