import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from './plant';
import { Category } from './category';
import { PlantService } from './plant.service';



@Component({
    selector: 'inventory-list',
    templateUrl: 'html/inventory-list.component.html'
})

export class InventoryListComponent implements OnInit {
    ngOnInit() {
        this.getPlants();
    }

    constructor(
        private router: Router,
        private plantService: PlantService){}
    @Input()
    category: Category;
    plants: Plant[];

    getPlants() {
        this.plantService.getPlants().then(plants => this.plants = plants);
    }

    gotoDetail(plant: Plant) {
        this.router.navigate(['/detail', plant.id]);
    }
}
