import { Injectable } from '@angular/core';
import { CATEGORIES } from '../data/mock-plants';

@Injectable()
export class CategoryService {
    getCategories() {
        return Promise.resolve(CATEGORIES)
    }
}