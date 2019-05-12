import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-bar',
  template: `
  <div class="progress mb-1"  (click)="onClick($event)">
    <div class="progress-bar" [style.width]="barWidth">{{ value }}</div>
  </div>
  `,
 
  styles: []
})
export class BarComponent implements OnInit {

  private barValue: number;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  get value(){
    return this.barValue;
  }

  set value(val){
    this.barValue = val;
  }

  get barWidth(){
    return Math.ceil(this.barValue * 100 / 255) + '%'
  }

  onClick(event){
    let offset = event.offsetX * 100 / event.currentTarget.offsetWidth
    this.barValue = Math.ceil(offset * 255 / 100)
    this.valueChange.emit(this.barValue)
  }

}
