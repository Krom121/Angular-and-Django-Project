import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


const NAVIGATION = [
  '/engine',
  '/exterior',
  '/interior',
  '/autopilot',
  '/payment',
]


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNext() {
    //this.router.navigate(['/exterior'])
    let ind = NAVIGATION.findIndex( (i) => i == this.router.url);
    if (ind < NAVIGATION.length){
      let nextUrl = NAVIGATION[ind+1];
      this.router.navigate([nextUrl]);
    }
  }

}
