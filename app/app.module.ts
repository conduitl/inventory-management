import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './components/app.component';

import { routing } from './app.routing';

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
        AppComponent
    ],
    providers: [
        PlantService, 
        CategoryService, 
        DesignService, 
        SupplierService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }