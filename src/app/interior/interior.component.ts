import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent implements OnInit {

  constructor(public car: CarService) { }

  ngOnInit() {
  }

}
