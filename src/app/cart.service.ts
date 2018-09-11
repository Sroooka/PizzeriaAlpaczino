import { Injectable } from '@angular/core';
import {Menu} from './Model/Menu.Model';
import {OrderService} from './order.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Menu[] = [];
  total = 0;

  constructor(
    readonly orderService: OrderService,
    readonly router: Router,
  ) {
  }

  addToCart(dish: Menu) {
    this.cart.push(dish);
    this.total += parseFloat(String(dish.price));
    this.cart.sort(function (obj1, obj2) {
      return obj1.id - obj2.id;
    });
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

  proceed() {
    if (this.total) {
      this.orderService.setCart(this.getCart());
      this.orderService.setTotal(this.getTotal());
      this.router.navigate(['/order']);
    }
  }
}
