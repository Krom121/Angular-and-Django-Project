import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(public car: CarService) { }

  ngOnInit() {
  }

  get selectedWheelsLayer() {
    return this.car.model.wheels.find((wh) => {
      return wh == this.car.order.wheels;
    }).image
  }

}
