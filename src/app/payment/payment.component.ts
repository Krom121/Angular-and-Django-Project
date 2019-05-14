import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CarService } from '../car.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;

  constructor(private car: CarService) { }

  ngOnInit() {
    let o = this.car.order;
    this.form = new FormGroup({
      firstname: new FormControl(o.firstname, Validators.required),
      lastname: new FormControl(o.lastname, Validators.required),
      email: new FormControl(o.email, [
                  Validators.required,
                  Validators.email,
      ]),
      phone: new FormControl(o.phone, Validators.required),
      card_number: new FormControl(o.card_number, [
                    Validators.required,
                    Validators.pattern('[0-9]{16}')
      ]),
      card_date: new FormControl(o.card_date, Validators.required),
    })

    this.form.valueChanges.subscribe(() => {
      Object.keys(this.form.value).forEach((k) => {
        this.car.order[k] = this.form.value[k]
      })
    })
  }

  saveOrder(){
    this.car.saveOrder()

    
  }


}
