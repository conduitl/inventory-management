import { Component } from '@angular/core';

import { InventoryListComponent } from './list.component';

import { Plant } from './plant';
import { Category } from './category';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [InventoryListComponent]
})
export class AppComponent {
    title = 'Plant Catalog';

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



