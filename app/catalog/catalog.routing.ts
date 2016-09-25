import { Routes, RouterModule } from '@angular/router';

import { CategoryViewComponent } from './category-view.component';
import { PlantDetailComponent } from './plant-detail.component';


const routes: Routes = [
    {
        path: '/:layout',
        component: CategoryViewComponent
    },
    {
        path: '',
        redirectTo: '/list'
    },
    {
        path: 'detail/:id',
        component: PlantDetailComponent
    }
]

export const routing = RouterModule.forChild(routes);