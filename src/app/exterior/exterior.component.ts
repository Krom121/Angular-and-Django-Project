import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.css']
})
export class ExteriorComponent implements OnInit {

  constructor(public car: CarService) { }

  ngOnInit() {
  }

}
