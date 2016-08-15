import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../model/plant';

@Component({
    selector: 'grid-layout',
    templateUrl: 'html/grid-layout.component.html'
})

export class GridLayoutComponent {
    constructor(
        private router: Router
    ){}

    @Input()
    plant: Plant;

    // This method is duplicated in InventoryListCompnent
    // ..is there a way to @Input a method?
    gotoDetail(plant: Plant) {
        this.router.navigate(['/detail', plant.id]);
    }
}