import { Injectable } from '@angular/core';

import { PLANTS } from '../data/mock-data';

@Injectable()
export class PlantService {
    getPlants() {
        return Promise.resolve(PLANTS);
    }
    getPlant(id: number) {
        return this.getPlants()
            .then(plants => plants.find(plant => plant.id === id ));
    }
    filterPlant(query: string) {
        let rx = new RegExp(query, 'ig');
        return this.getPlants()
            .then(plants => {
                return plants.filter(plant => rx.test(plant.name));
            });
    }
}