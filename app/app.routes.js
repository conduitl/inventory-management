"use strict";
var router_1 = require('@angular/router');
var category_view_component_1 = require('./components/category-view.component');
var gallery_view_component_1 = require('./components/gallery-view.component');
var supplier_view_component_1 = require('./components/supplier-view.component');
var plant_detail_component_1 = require('./components/plant-detail.component');
var routes = [
    {
        path: 'categories/:layout',
        component: category_view_component_1.CategoryViewComponent
    },
    {
        path: 'categories',
        redirectTo: '/categories/list'
    },
    {
        path: 'gallery',
        component: gallery_view_component_1.GalleryViewComponent
    },
    {
        path: 'suppliers',
        component: supplier_view_component_1.SupplierViewComponent
    },
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: plant_detail_component_1.PlantDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map