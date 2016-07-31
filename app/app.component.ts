import { Component } from '@angular/core';

export class Plant { 
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Plants</h2>
    <ul class="plants">
        <li *ngFor="let plant of plants">
          {{plant.id}} | {{plant.name}}
        </li>
    </ul>
    `
})
export class AppComponent {
    title = 'Plant Catalog';
    public plants = PLANTS; // exposes the plants for binding
 }

 const PLANTS: Plant[] = [
     { id: 1, name: 'cyclamen' },
     { id: 2, name: 'alyssum'  },
     { id: 3, name: 'dianthus' },
     { id: 4 ,name: 'sweet william' },
     { id: 5, name: 'juncus' },
     { id: 6, name: 'kale'   },
     { id: 7, name: 'maidenhair' },
     { id: 8, name: 'dracaena'   },
     { id: 9, name: 'creeping jenny' },
     { id: 10, name: 'English ivy'   }
 ];