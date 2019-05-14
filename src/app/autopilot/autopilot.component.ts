import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-autopilot',
  templateUrl: './autopilot.component.html',
  styleUrls: ['./autopilot.component.css']
})
export class AutopilotComponent implements OnInit {

  constructor(public car: CarService) { }

  ngOnInit() {
  }

}
