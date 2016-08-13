import { provideRouter, RouterConfig } from '@angular/router';
import { CategoryViewComponent } from './components/category-view.component';
import { GalleryViewComponent } from './components/gallery-view.component';
import { SupplierViewComponent } from './components/supplier-view.component';
import { PlantDetailComponent } from './components/plant-detail.component';

const routes: RouterConfig = [
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