import { provideRouter, RouterConfig } from '@angular/router';
import { CategoryViewComponent } from './category-view.component';

const routes: RouterConfig = [
    {
        path: 'categories',
        component: CategoryViewComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];