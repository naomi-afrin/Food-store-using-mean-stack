import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{      // in future connect to backend to get data
    return sample_foods;  // takes sample_food from data.ts
  } 
}
