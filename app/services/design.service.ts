import { Injectable } from '@angular/core';
import { DESIGNS } from '../data/mock-data';

@Injectable()
export class DesignService {
    getDesigns() {
        return Promise.resolve(DESIGNS);
    }
}