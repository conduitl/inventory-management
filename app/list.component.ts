import { Component, Input, OnInit } from '@angular/core';

import { Plant } from './plant';
import { Category } from './category';

import { PlantService } from './plant.service'

@Component({
    selector: 'inventory-list',
    templateUrl: 'html/list.component.html',
    providers: [PlantService]
})

export class InventoryListComponent implements OnInit {
    ngOnInit() {
        this.getPlants();
    }

    constructor(private plantService: PlantService){}
    @Input()
    category: Category;
    plants: Plant[];

    getPlants() {
        this.plantService.getPlants().then(plants => this.plants = plants);
    }
}
