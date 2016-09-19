import { Routes, RouterModule } from '@angular/router';

import { DesignsViewComponent } from './components/designs-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';

// catalog module
import { CategoryViewComponent } from './catalog/category-view.component';
import { PlantDetailComponent } from './catalog/plant-detail.component';

const appRoutes: Routes = [
    {
        path: 'categories/:layout',
        component: CategoryViewComponent
    },
    {
        path: 'categories',
        redirectTo: '/categories/list'
    },
    {
        path: 'designs',
        component: DesignsViewComponent
    },
    {
        path: 'suppliers',
        component: SupplierViewComponent
    },
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: PlantDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);