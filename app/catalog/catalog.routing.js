"use strict";
var router_1 = require('@angular/router');
var category_view_component_1 = require('./category-view.component');
var plant_detail_component_1 = require('./plant-detail.component');
var routes = [
    {
        path: '/:layout',
        component: category_view_component_1.CategoryViewComponent
    },
    {
        path: '',
        redirectTo: '/list'
    },
    {
        path: 'detail/:id',
        component: plant_detail_component_1.PlantDetailComponent
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=catalog.routing.js.map