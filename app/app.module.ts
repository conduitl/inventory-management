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

/* Modules */
import { CatalogModule } from './catalog/catalog.module';

/* Services */
import { PlantService } from './services/plant.service';
import { CategoryService } from './services/category.service';
import { DesignService } from './services/design.service';
import { SupplierService } from './services/supplier.service';

@NgModule({
    imports: [ 
        BrowserModule,
        CatalogModule,
        routing
    ],
    declarations: [
        AppComponent,
        ListLayoutComponent,
        GridLayoutComponent,
        DesignsViewComponent,
        SupplierViewComponent,
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