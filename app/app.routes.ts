import { Routes, RouterModule } from '@angular/router';

import { CategoryViewComponent } from './components/category-view.component';
import { GalleryViewComponent } from './components/gallery-view.component';
import { DesignsViewComponent } from './components/designs-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';
import { PlantDetailComponent } from './components/plant-detail.component';

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
        path: 'gallery',
        component: GalleryViewComponent
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
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: PlantDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);