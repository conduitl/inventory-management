"use strict";
var router_1 = require('@angular/router');
var category_view_component_1 = require('./components/category-view.component');
var gallery_view_component_1 = require('./components/gallery-view.component');
var designs_view_component_1 = require('./components/designs-view.component');
var supplier_view_component_1 = require('./components/supplier-view.component');
var plant_detail_component_1 = require('./components/plant-detail.component');
var inventory_list_component_1 = require('./components/inventory-list.component');
var list_layout_component_1 = require('./components/list-layout.component');
var grid_layout_component_1 = require('./components/grid-layout.component');
var routes = [
    {
        path: 'categories',
        component: category_view_component_1.CategoryViewComponent,
        children: [{
                path: '',
                component: inventory_list_component_1.InventoryListComponent,
                children: [{
                        path: 'grid',
                        component: grid_layout_component_1.GridLayoutComponent
                    }, {
                        path: 'list',
                        component: list_layout_component_1.ListLayoutComponent
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
        component: gallery_view_component_1.GalleryViewComponent
    },
    {
        path: 'designs',
        component: designs_view_component_1.DesignsViewComponent
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