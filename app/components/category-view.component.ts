import { Component, OnInit } from '@angular/core';

import { InventoryListComponent } from './inventory-list.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';

@Component({
    selector: 'category-view',
    templateUrl: 'html/category-view.component.html',
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