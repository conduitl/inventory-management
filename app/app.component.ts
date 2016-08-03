import { Component } from '@angular/core';


import { CategoryView } from './category-view.component';
import { PlantService } from './plant.service';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [CategoryView],
  providers: [PlantService]
})
export class AppComponent {
    title = 'Plant Catalog';
 }
 




