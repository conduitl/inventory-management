import { Routes, RouterModule } from '@angular/router';

import { DesignsViewComponent } from './components/designs-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';

// catalog module


const appRoutes: Routes = [
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
    }
];

export const routing = RouterModule.forRoot(appRoutes);