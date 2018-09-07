import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  // pizzas = [];

  pizza: Pizza = {
    id: 1,
    type: 'pizza',
    name: 'Margharita',
    avaliable: true,
    price: 29,
    description: 'Sos, ser',
  };

  getPizzas(): void {
    // this.pizzas = this.pizzaService.getPizzas();
  }
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

}
