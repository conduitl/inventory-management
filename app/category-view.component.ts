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
            <inventory-list [category]="selectedCategory"></inventory-list>
        </div>
    </section>`,
    directives: [InventoryListComponent]
})
export class CategoryViewComponent {
    public categories = categories; // exposes categories for binding
    selectedCategory: Category; // Track which category is selected
    onSelect(category: Category) {
        this.selectedCategory = category;
    }
}

 let categories: Category[] = [
     { id: 1, name: 'flowers'},
     { id: 2, name: 'shrubs'},
     { id: 3, name: 'trees'}
 ];