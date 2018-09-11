import { Injectable } from '@angular/core';
import {Menu} from './Model/Menu.Model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cart: Menu[] = [];
  total = 0;

  setCart(newCart: Menu[]) {
    this.cart = newCart;
  }

  setTotal(newTotal: number){
    this.total = newTotal;
  }

  getCart() {
    return this.cart;
  }

  public getTotal() {
    return this.total;
  }

  constructor() { }
}
