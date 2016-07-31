import { Component } from '@angular/core';

export class Plant { 
    id: number;
    name: string;
    type: string;
    image: string;
    description: string;
}

export class Category {
    id: number;
    name: string;
    plants: Plant[];
}

@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html'
})
export class AppComponent {
    title = 'Plant Catalog';
    public plants = PLANTS; // exposes the plants for binding
    public categories = categories; // exposes categories for binding
    selectedCategory: Category; // Track which category is selected
    onSelect(category: Category) {
        this.selectedCategory = category;
    }
 }
 
 let categories: Category[] = [
     { id: 1, name: 'flowers', plants: null },
     { id: 2, name: 'shrubs',  plants: null },
     { id: 3, name: 'trees',   plants: null }
 ];

 const PLANTS: Plant[] = [
     { id: 1, name: 'cyclamen', type: 'flowers', image: 'img/cyclamen.jpg', 
     description: 'Cyclamen is a genus of 23 species of perennial flowering plants in the family Primulaceae. Cyclamen species are native to Europe and the Mediterranean Basin east to Iran, with one species in Somalia. They grow from tubers and are valued for their flowers with upswept petals and variably patterned leaves. (Wikipedia)' },
     { id: 2, name: 'alyssum', type: 'flowers', image: 'img/alyssum.jpg', 
     description: 'Alyssum is a genus of about 100–170 species of flowering plants in the family Brassicaceae, native to Europe, Asia, and northern Africa, with the highest species diversity in the Mediterranean region. The genus comprises annual and perennial herbaceous plants or (rarely) small shrubs, growing to 10–100 cm tall, with oblong-oval leaves and yellow or white flowers (pink to purple in a few species). (Wikipedia)'  },
     { id: 3, name: 'dianthus', type: 'flowers', image: 'img/dianthus.jpg', description: '' },
     { id: 4 ,name: 'sweet william', type: 'flowers', image: null, description: '' },
     { id: 5, name: 'juncus', type: 'flowers', image: null, description: '' },
     { id: 6, name: 'kale', type: 'flowers', image: null, description: ''   },
     { id: 7, name: 'maidenhair', type: 'flowers', image: null, description: '' },
     { id: 8, name: 'dracaena', type: 'flowers', image: null, description: ''   },
     { id: 9, name: 'creeping jenny', type: 'flowers', image: null, description: '' },
     { id: 10, name: 'English ivy', type: 'flowers', image: null, description: ''   },
     { id: 11, name: 'tipu tree', type: 'trees', image: null, description: ''},
     { id: 12, name: 'cathedral oak', type: 'trees', image: null, description: ''},
     { id: 13, name: 'cottonwood', type: 'trees', image: null, description: ''},
     { id: 14, name: 'tru-green elm', type: 'trees', image: null, description: '' },
     { id: 15, name: 'camphor', type: 'trees', image: null, description: '' },
     { id: 16, name: 'shumard red oak', type: 'trees', image: null, description: '' },
     { id: 17, name: 'azaleas', type: 'shrubs', image: null, description: '' },
     { id: 18, name: 'redbud', type: 'shrubs', image: null, description: '' },
     { id: 19, name: 'foxtail', type: 'shrubs', image: null, description: ''},
     { id: 20, name: 'monrovia', type: 'shrubs', image: null, description: ''},
     { id: 21, name: 'jatropha', type: 'shrubs', image: null, description: ''},
     { id: 22, name: 'thryallis', type: 'shrubs', image: null, description: ''}
 ];

