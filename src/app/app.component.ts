import { Component } from '@angular/core';
import { CarService } from './car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-order';

  constructor(private car: CarService) {
    
  }
}
