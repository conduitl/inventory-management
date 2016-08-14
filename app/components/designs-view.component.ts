import { Component, OnInit } from '@angular/core';

import { DesignService } from '../services/design.service';
import { Design } from '../model/design';

@Component({
    selector: 'designs-view',
    templateUrl: 'html/designs-view.component.html'
})

export class DesignsViewComponent implements OnInit {
    constructor(
        private designService: DesignService
    ){}
    designs: Design[];
    activePhotos: [{}]; // not yet in use... for cycling through photos

    ngOnInit() {
        this.getDesigns();
    }
    getDesigns() {
        this.designService.getDesigns()
            .then(designs => {
                this.designs = designs;
                this.activePhotos = this.initializePhotos(designs);
            });
    }
    initializePhotos(designs: Design[] ):[{}] {
        let active: [{}];
        for (let i = 0; i < designs.length; i++ ) {
            active.push({
                design   : designs[i].name,
                selected : 0,
                count    : designs[i].photos.length 
            });
        }
        return active;
    }
}