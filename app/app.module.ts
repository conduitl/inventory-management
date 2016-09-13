import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './components/app.component';

import { routing } from './app.routing';

/* Components */
import { InventoryListComponent } from './components/inventory-list.component';
import { ListLayoutComponent } from './components/list-layout.component';
import { GridLayoutComponent } from './components/grid-layout.component';

/* Services */
import { PlantService } from './services/plant.service';
import { CategoryService } from './services/category.service';
import { DesignService } from './services/design.service';
import { SupplierService } from './services/supplier.service';

@NgModule({
    imports: [ 
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        InventoryListComponent,
        ListLayoutComponent,
        GridLayoutComponent
    ],
    providers: [
        PlantService, 
        CategoryService, 
        DesignService, 
        SupplierService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }