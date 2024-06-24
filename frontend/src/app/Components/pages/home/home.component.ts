import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];  // foods field // Hold tHe data tHat receive from food service
  constructor(private foodService:FoodService){
    this.foods = foodService.getAll(); // foodService: new FoodService() [new instance]
    this.foods = foodService.getAll(); // filled wit data from foodService
  }
}
