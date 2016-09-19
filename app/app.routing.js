"use strict";
var router_1 = require('@angular/router');
var designs_view_component_1 = require('./components/designs-view.component');
var supplier_view_component_1 = require('./components/supplier-view.component');
// catalog module
var category_view_component_1 = require('./catalog/category-view.component');
var plant_detail_component_1 = require('./catalog/plant-detail.component');
var appRoutes = [
    {
        path: 'categories/:layout',
        component: category_view_component_1.CategoryViewComponent
    },
    {
        path: 'categories',
        redirectTo: '/categories/list'
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
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: plant_detail_component_1.PlantDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map