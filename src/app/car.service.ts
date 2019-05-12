import { Injectable } from '@angular/core';
import { Model } from './car';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  model: Model = null;
  order: Order = null;

  all_models: Array<Model> = [];

  constructor(private http: HttpClient) {
    //this.model = {
      //base_price: 30000,
     // engines: [
        //{id: 1, name: "Uno", image: "/assets/engine-1.png", price: 500},
        //{id: 2, name: "Duo", image: "/assets/engine-2.png", price: 1000},
        //{id: 3, name: "Tree", image: "/assets/engine-3.png", price: 2000},
      //],
      //wheels: [
       // {id: 1, name: "18", image: "/assets/wheels-18.png", price: 300},
       // {id: 2, name: "19", image: "/assets/wheels-19.png", price: 500},
      //],
      //interiors: [
        //{id: 1, name: "Black", image: "/assets/interior-black.png", price: 0},
        //{id: 2, name: "Brown", image: "/assets/interior-brown.png", price: 500},
      //],
    //};

   

  }

   loadModels(){
    let url = 'http://localhost:8000/api/models/'
    this.http.get(url).subscribe((data: Array<Model>) => {
      this.all_models = data;
    })
  }

  selectModel(model: Model){
    this.model = model;
    
     this.order = {
      engine: this.model.engines[0],
      wheels:this.model.wheels[0],
      exterior_color: "#ffffff",
      interior: this.model.interiors[0],
      autopilot: false,

      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      card_number: '',
      card_date: '',
    }
  }

}
