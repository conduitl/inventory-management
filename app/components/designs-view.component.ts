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
    activePhotos: [State]; // not yet in use... for cycling through photos

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
    initializePhotos(designs: Design[] ):[State] {
        let active: [State];
        console.log('Initializing Photos');
        console.log('length' + designs.length);
        for (let i = 0; i < designs.length; i++ ) {
            console.log('initialization loop...' + i);
            let obj = new State(
                designs[i].name,
                0,
                designs[i].photos.length );
            if ( i === 0 ) {
                active = [obj];
            } else {
                active.push(obj);
            }
        }
        console.log( 'Active is: ');
        console.log(active);
        return active;
    }
    findActive(design_name: string){
        let selection: State = this.activePhotos.find( (elem: State) => {
            return elem.design === design_name;
        });
        return selection.selected;
    }

    cycleNextImage(design_name: string){
        let design: State = this.activePhotos.find( (elem: State) => {
            return elem.design === design_name;
        });
        if (design.selected + 1 < design.count) {
            design.selected+= 1;
        } else {
            design.selected = 0;
        }
    }
    cyclePrevImage(design_name: string) {
        let design: State = this.activePhotos.find( (elem: State ) => {
            return elem.design === design_name;
        });
        console.log('Prev clicked');
        if (design.selected - 1 < 0 ) {
            console.log('Go to end of array');
            design.selected = design.count - 1;
        } else {
            console.log('Go one back ( idx > 0)');
            design.selected -= 1;
        }
    }
}

class State {
    design: string;
    selected: number;
    count: number;
    constructor(design: string, selected: number, count: number) {
        this.design = design;
        this.selected = selected;
        this.count = count;
    }
}