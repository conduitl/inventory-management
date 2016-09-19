import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './components/app.component';
import { routing } from './app.routing';

/* Components */
import { ListLayoutComponent } from './components/list-layout.component';
import { GridLayoutComponent } from './components/grid-layout.component';

// accessed through routing
import { DesignsViewComponent } from './components/designs-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';


// catalog module
import { CategoryViewComponent } from './catalog/category-view.component';
import { InventoryListComponent } from './catalog/inventory-list.component';
import { PlantDetailComponent } from './catalog/plant-detail.component';

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
        GridLayoutComponent,
        CategoryViewComponent,
        DesignsViewComponent,
        SupplierViewComponent,
        PlantDetailComponent
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