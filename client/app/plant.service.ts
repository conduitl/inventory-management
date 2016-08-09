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
    filterPlant(query: string) {
        // TODO - catch invalid regexp entries to avoid crashing app
        let rx = new RegExp(query, 'ig');
        return this.getPlants()
            .then(plants => {
                return plants.filter(plant => rx.test(plant.name));
            });
    }
}