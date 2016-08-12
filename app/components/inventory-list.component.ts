import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Plant } from '../model/plant';
import { Category } from '../model/category';
import { PlantService } from '../services/plant.service';

@Component({
    selector: 'inventory-list',
    templateUrl: 'html/inventory-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class InventoryListComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private plantService: PlantService){}

    @Input()
    category: Category;

    plants: Plant[];
    term: string;
    search: string = '';
    sub: any;
    layout: string;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.layout = params['layout'];
        });
        this.getPlants();
    }

    getPlants() {
        this.plantService.getPlants().then(plants => this.plants = plants);
    }

    gotoDetail(plant: Plant) {
        this.router.navigate(['/detail', plant.id]);
    }

    onKey(event: any) {
        this.term = event.target.value;
        if (this.term === '') {
            this.search = '';
        } else {
            this.search = "| Search term '" + this.term + "'";
        }
        this.filterPlant(this.term);
    }

    filterPlant(query: string) {
        this.plantService.filterPlant(query).then(plants => this.plants = plants);
    }
}