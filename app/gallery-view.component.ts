import { Component, OnInit } from '@angular/core';

import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
    selector: 'gallery-view',
    templateUrl: 'html/gallery-view.component.html'
})
export class GalleryViewComponent implements OnInit { 
    plants: Plant[] = [];

    constructor(private plantService: PlantService){}

    ngOnInit() {
        this.plantService.getPlants()
            .then(plants => this.plants = plants);
    }
}