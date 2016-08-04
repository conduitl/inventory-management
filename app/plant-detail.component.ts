import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PlantService } from './plant.service';
import { Plant } from './plant';

@Component({
    selector: 'plant-detail',
    template: `
        <div *ngIf="plant">
            <h2>{{plant.name}} details</h2>
        </div>
    `
})
export class PlantDetailComponent implements OnInit, OnDestroy {
    constructor(
        private plantService: PlantService,
        private route: ActivatedRoute) {}
    )

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.plantService.getPlant(id)
                .then(plant => this.plant = plant);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}