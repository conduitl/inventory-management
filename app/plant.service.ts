import { Injectable } from '@angular/core';

import { PLANTS } from './mock-plants';

@Injectable()
export class PlantService {
    getPlants() {
        return Promise.resolve(PLANTS);
    }
    getPlant(id: number) {
        return this.getPlants()
            .then(plants => plants.find(plant => plant.id === id ));
    }
}