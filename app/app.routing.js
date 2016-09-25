"use strict";
var router_1 = require('@angular/router');
var designs_view_component_1 = require('./components/designs-view.component');
var supplier_view_component_1 = require('./components/supplier-view.component');
// catalog module
var appRoutes = [
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map