import { Component } from '@angular/core';

import { CategoryView } from './category-view.component';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [CategoryView]
})
export class AppComponent {
    title = 'Plant Catalog';
 }
 




