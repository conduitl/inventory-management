import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { PlantService } from '../services/plant.service';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [PlantService]
})
export class AppComponent {
    title = 'Plant Catalog';
 }