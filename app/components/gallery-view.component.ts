import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../model/plant';
import { PlantService } from '../services/plant.service';

@Component({
    selector: 'gallery-view',
    templateUrl: 'html/gallery-view.component.html'
})
export class GalleryViewComponent implements OnInit { 
    plants: Plant[] = [];

    constructor(
        private router: Router,
        private plantService: PlantService){}

    ngOnInit() {
        this.plantService.getPlants()
            .then(plants => this.plants = plants);
    }

    gotoDetail(plant: Plant) {
        let link = ['/detail', plant.id];
        this.router.navigate(link);
    }
}