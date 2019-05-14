import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  constructor(public car: CarService) { }

  ngOnInit() {
  }

}
