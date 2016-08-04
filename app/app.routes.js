"use strict";
var router_1 = require('@angular/router');
var category_view_component_1 = require('./category-view.component');
var gallery_view_component_1 = require('./gallery-view.component');
var routes = [
    {
        path: 'categories',
        component: category_view_component_1.CategoryViewComponent
    },
    {
        path: 'gallery',
        component: gallery_view_component_1.GalleryViewComponent
    },
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map