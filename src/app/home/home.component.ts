import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { StarRatingComponent } from 'ng-starrating';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
}
