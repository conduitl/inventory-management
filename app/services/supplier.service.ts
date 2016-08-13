import { Injectable } from '@angular/core';
import { SUPPLIERS } from '../data/mock-data';

@Injectable()
export class SupplierService {
    getSuppliers() {
        return Promise.resolve(SUPPLIERS);
    }
}