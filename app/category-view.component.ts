import { Component } from '@angular/core';

import { InventoryListComponent } from './inventory-list.component';
import { Category } from './category';

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
export class CategoryViewComponent {
    public categories = categories; // exposes categories for binding
    selectedCategory: Category; // Track which category is selected
    initialSelection: Category = this.selectedCategory || categories[0];
    onSelect(category: Category) {
        this.selectedCategory = category;
    }
}

 let categories: Category[] = [
     { id: 0, name: 'all' },
     { id: 1, name: 'flowers'},
     { id: 2, name: 'shrubs'},
     { id: 3, name: 'trees'}
 ];