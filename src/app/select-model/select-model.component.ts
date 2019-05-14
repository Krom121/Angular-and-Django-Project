import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.css']
})
export class SelectModelComponent implements OnInit {

  constructor(private car: CarService) { }

  ngOnInit() {
    this.car.loadModels()
  }
  selectModel(model) {
    this.car.selectModel(model)
  }
}
