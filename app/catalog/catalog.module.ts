import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// catalog module
import { CategoryViewComponent } from './category-view.component';
import { InventoryListComponent } from './inventory-list.component';
import { PlantDetailComponent } from './plant-detail.component';


//routing
import { routing } from './catalog.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        CategoryViewComponent,
        InventoryListComponent,
        PlantDetailComponent
    ],
    exports: [
        CategoryViewComponent
    ]
})
export class CatalogModule { }