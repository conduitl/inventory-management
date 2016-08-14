import { Component, OnInit } from '@angular/core';

import { DesignService } from '../services/design.service';
import { Design } from '../model/design';

@Component({
    selector: 'designs-view',
    template: `
        <h1>Designs</h1>
        <ul>
            <li *ngFor="let design of designs">
                {{design.name}}
            </li>
        </ul>
    `
})

export class DesignsViewComponent implements OnInit {
    constructor(
        private designService: DesignService
    ){}
    designs: Design[];

    ngOnInit() {
        this.getDesigns();
    }
    getDesigns() {
        this.designService.getDesigns()
            .then(designs => {
                this.designs = designs;
            });
    }
}