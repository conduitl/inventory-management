import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../model/plant';
// import { Category } from '../model/category';

@Component({
    selector: 'list-layout',
    templateUrl: 'html/list-layout.component.html'
})

export class ListLayoutComponent {
    constructor(
        private router: Router
    ){}

    // @Input()
    // category: Category;
    @Input()
    plant: Plant;

    // This method is duplicated in InventoryListCompnent
    // ..is there a way to @Input a method?
    gotoDetail(plant: Plant) {
        this.router.navigate(['/detail', plant.id]);
    }
}