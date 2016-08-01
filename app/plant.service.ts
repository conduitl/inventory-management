import { Injectable } from '@angular/core';

import { PLANTS } from './mock-plants';

@Injectable()
export class PlantService {
    getPlants() {
        return Promise.resolve(PLANTS);
    }
}