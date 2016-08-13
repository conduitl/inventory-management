import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { PlantService } from '../services/plant.service';
import { CategoryService } from '../services/category.service';
import { SupplierService } from '../services/supplier.service';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [PlantService, CategoryService, SupplierService]
})
export class AppComponent {
    title = 'KJ Majestic Garden';
}