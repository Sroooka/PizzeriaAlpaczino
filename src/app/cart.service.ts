import { Injectable } from '@angular/core';
import {Menu} from './Model/Menu.Model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Menu[] = [];
  total = 0;

  constructor() {
  }

  addToCart(dish: Menu) {
    this.cart.push(dish);
    this.total += parseFloat(String(dish.price));
  }

  removeFromCart(dish: Menu) {
    for (let i = 0; i < this.cart.length; i++){
      if (this.cart[i] === dish) {
        this.cart.splice(i, 1);
        this.total = this.total - parseFloat(String(dish.price));
        return;
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.total;
  }
}
