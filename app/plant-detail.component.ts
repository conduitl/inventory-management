import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PlantService } from './plant.service';
import { Plant } from './plant';

@Component({
    selector: 'plant-detail',
    template: `
        <div *ngIf="plant">
            <h2>{{plant.name}} details</h2>
            <div class="row">
                <div class="col-md-9">
                    <p>{{plant.description}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                    <img class="img-responsive center-block" src="{{plant.image | slice:0:-4 }}-lg.jpg"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                    <p>{{lorem}}</p>
                </div>
            </div>
            <div>
                <button (click)="goBack()">Back</button>
            </div>
        </div>
    `
})
export class PlantDetailComponent implements OnInit, OnDestroy {
    constructor(
        private plantService: PlantService,
        private route: ActivatedRoute) {}
    sub: any;
    plant: Plant;
    lorem: string = getLorem();
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.plantService.getPlant(id)
                .then(plant => {
                    this.plant = plant
                });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
function getLorem(){
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus sem. Donec accumsan vitae eros at pulvinar. Etiam auctor turpis felis, ac pharetra nisi sodales vitae. Fusce ex odio, commodo id metus eget, malesuada efficitur arcu. Etiam commodo vehicula cursus. Donec ultrices neque sed augue eleifend, id luctus erat semper. Vestibulum tellus metus, cursus nec posuere quis, imperdiet dapibus diam. Quisque ut risus ac magna ullamcorper facilisis vitae eu diam. Ut congue tincidunt risus efficitur aliquam. Duis viverra est elit, nec fermentum turpis scelerisque eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam a diam lorem. Aliquam molestie laoreet aliquet. Curabitur lectus nisi, fringilla condimentum nunc consectetur, rhoncus porttitor dui. Fusce pulvinar suscipit dolor, non dignissim mauris.

Suspendisse mauris ligula, lacinia a tortor non, accumsan pellentesque turpis. Donec a pulvinar nunc. Nullam ut nunc eget tortor interdum pulvinar. Curabitur in luctus diam. Sed dignissim euismod pellentesque. Sed et libero massa. Nullam ornare commodo risus porta dapibus. Nulla sit amet dolor eu urna fermentum condimentum id sed magna. Sed iaculis, justo at consectetur lobortis, augue lorem suscipit enim, et accumsan nisl risus nec lacus.
`;
}