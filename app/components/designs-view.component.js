"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var design_service_1 = require('../services/design.service');
var DesignsViewComponent = (function () {
    function DesignsViewComponent(designService) {
        this.designService = designService;
    }
    DesignsViewComponent.prototype.ngOnInit = function () {
        this.getDesigns();
    };
    DesignsViewComponent.prototype.getDesigns = function () {
        var _this = this;
        this.designService.getDesigns()
            .then(function (designs) {
            _this.designs = designs;
            _this.activePhotos = _this.initializePhotos(designs);
        });
    };
    DesignsViewComponent.prototype.initializePhotos = function (designs) {
        var active;
        console.log('Initializing Photos');
        console.log('length' + designs.length);
        for (var i = 0; i < designs.length; i++) {
            console.log('initialization loop...' + i);
            var obj = new State(designs[i].name, 0, designs[i].photos.length);
            if (i === 0) {
                active = [obj];
            }
            else {
                active.push(obj);
            }
        }
        console.log('Active is: ');
        console.log(active);
        return active;
    };
    DesignsViewComponent.prototype.findActive = function (design_name) {
        var selection = this.activePhotos.find(function (elem) {
            return elem.design === design_name;
        });
        return selection.selected;
    };
    DesignsViewComponent.prototype.cycleNextImage = function (design_name) {
        var design = this.activePhotos.find(function (elem) {
            return elem.design === design_name;
        });
        if (design.selected + 1 < design.count) {
            design.selected += 1;
        }
        else {
            design.selected = 0;
        }
    };
    DesignsViewComponent.prototype.cyclePrevImage = function (design_name) {
        var design = this.activePhotos.find(function (elem) {
            return elem.design === design_name;
        });
        console.log('Prev clicked');
        if (design.selected - 1 < 0) {
            console.log('Go to end of array');
            design.selected = design.count - 1;
        }
        else {
            console.log('Go one back ( idx > 0)');
            design.selected -= 1;
        }
    };
    DesignsViewComponent = __decorate([
        core_1.Component({
            selector: 'designs-view',
            templateUrl: 'html/designs-view.component.html'
        }), 
        __metadata('design:paramtypes', [design_service_1.DesignService])
    ], DesignsViewComponent);
    return DesignsViewComponent;
}());
exports.DesignsViewComponent = DesignsViewComponent;
var State = (function () {
    function State(design, selected, count) {
        this.design = design;
        this.selected = selected;
        this.count = count;
    }
    return State;
}());
//# sourceMappingURL=designs-view.component.js.map