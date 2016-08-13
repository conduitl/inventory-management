import { Injectable } from '@angular/core';
import { CATEGORIES } from '../data/mock-data';

@Injectable()
export class CategoryService {
    getCategories() {
        return Promise.resolve(CATEGORIES)
    }
}