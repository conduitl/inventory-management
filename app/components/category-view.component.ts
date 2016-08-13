import { Component, OnInit } from '@angular/core';

import { InventoryListComponent } from './inventory-list.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';

@Component({
    selector: 'category-view',
    template: `    
    <section class="row">
        <div class="col-md-3">
            <h2>Categories</h2>
            <ul class="categories list-group">
                <li *ngFor="let category of categories"
                    class="list-group-item"
                    [class.active]="category === selectedCategory"
                    (click)="onSelect(category)">
                    <span>{{category.id}}</span>
                    <span>{{category.name}}</span>
                </li>
            </ul>
        </div>
        <div class="col-md-9">
            <!--Add List Component-->
            <inventory-list [category]="selectedCategory || initialSelection"></inventory-list>
        </div>
    </section>`,
    directives: [InventoryListComponent]
})
export class CategoryViewComponent implements OnInit {
    constructor(
        private categoryService: CategoryService
    ){}
    categories: Category[];
    selectedCategory: Category; // Track which category is selected
    initialSelection: Category; // Define selection on load

    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.categoryService.getCategories()
            .then(categories => {
                this.categories = categories;
                this.initialSelection = this.selectedCategory || this.categories[0];
            });
    }
    onSelect(category: Category) {
        this.selectedCategory = category;
    }
}