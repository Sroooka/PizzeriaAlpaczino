import {Injectable} from '@angular/core';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {OrderService} from './order.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: MenuEntry[] = [];
  total = 0;

  constructor(
    readonly orderService: OrderService,
    readonly router: Router,
  ) {
  }

  addToCart(dish: MenuEntry) {
    this.cart.push(dish);
    this.total += parseFloat(String(dish.price));
    this.cart.sort(function (obj1, obj2) {
      return obj1.id - obj2.id;
    });
  }

  removeFromCart(dish: MenuEntry) {
    for (let i = 0; i < this.cart.length; i++) {
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

  clearCart() {
    this.cart = [];
    this.total = 0;
  }
}
