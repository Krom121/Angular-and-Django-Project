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
      ],
      wheels: [
        {id: 1, name: "18", image: "/assets/wheels-18.png", price: 300},
        {id: 2, name: "19", image: "/assets/wheels-19.png", price: 500},
      ],
      interiors: [
        {id: 1, name: "Black", image: "/assets/interior-black.png", price: 0},
        {id: 2, name: "Brown", image: "/assets/interior-brown.png", price: 500},
      ],
    };

    this.order = {
      engine: this.model.engines[0],
      wheels:this.model.wheels[0],
      exterior_color: "#ffffff",
      interior: this.model.interiors[0],
      autopilot: false,
    }


   }
}
