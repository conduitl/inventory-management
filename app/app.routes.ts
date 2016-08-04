import { provideRouter, RouterConfig } from '@angular/router';
import { CategoryViewComponent } from './category-view.component';
import { GalleryViewComponent } from './gallery-view.component';

const routes: RouterConfig = [
    {
        path: 'categories',
        component: CategoryViewComponent
    },
    {
        path: 'gallery',
        component: GalleryViewComponent
    },
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];