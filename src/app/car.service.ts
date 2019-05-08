import { Injectable } from '@angular/core';
import { Model } from './car';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  model: Model;
  order: Order;

  constructor() {
    this.model = {
      base_price: 30000,
      engines: [
        {id: 1, name: "Engine 1", image: "/assets/engine-1.png", price: 500},
        {id: 2, name: "Engine 2", image: "/assets/engine-2.png", price: 1000},
        {id: 3, name: "Engine 3", image: "/assets/engine-3.png", price: 2000},
      ]
    };

    this.order = {
      engine: this.model.engines[0],
    }


   }
}
