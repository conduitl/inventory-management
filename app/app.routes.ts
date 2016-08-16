import { provideRouter, RouterConfig } from '@angular/router';
import { CategoryViewComponent } from './components/category-view.component';
import { GalleryViewComponent } from './components/gallery-view.component';
import { DesignsViewComponent } from './components/designs-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';
import { PlantDetailComponent } from './components/plant-detail.component';

import { InventoryListComponent } from './components/inventory-list.component'
import { ListLayoutComponent } from './components/list-layout.component';
import { GridLayoutComponent } from './components/grid-layout.component';

const routes: RouterConfig = [
    {
        path: 'categories',
        component: CategoryViewComponent,
        children: [{
            path: '',
            component: InventoryListComponent,
            children: [{
                path: 'grid',
                component: GridLayoutComponent
            }, {
                path: 'list',
                component: ListLayoutComponent
            }]
        }]
    },
    {
        path: 'categories',
        redirectTo: '/categories/list',
        pathMatch: 'full'
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

export const appRouterProviders = [
    provideRouter(routes)
];