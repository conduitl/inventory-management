import { Component } from '@angular/core';

export class Plant { 
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{plant.name}} details</h2>
    <div>id: {{plant.id}}</div>
    <div>name: {{plant.name}}</div>
    `
})
export class AppComponent {
    title = 'Plant Catalog';
    plant: Plant = {
        id: 1,
        name: 'cyclamen'
    };
 }