import {Injectable} from '@angular/core';
import {Menu} from './Model/Menu.Model';
import {FormGroup} from '@angular/forms';
import {Order} from './Model/Order.Model';
import {CartService} from './cart.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cart: Menu[] = [];
  total = 0;
  order: Order;
  orders: Order[] = [];
  sub: Subscription;
  dishIds = [];

  setCart(newCart: Menu[]) {
    this.cart = newCart;
  }

  setTotal(newTotal: number) {
    this.total = newTotal;
  }

  getCart() {
    return this.cart;
  }

  public getTotal() {
    return this.total;
  }

  constructor(
    readonly http: HttpClient,
  ) {  }

  generateNewOrder(orderForm: FormGroup) {
    this.sub = this.http.get<Order[]>('/api/Orders')
      .subscribe(list => this.orders = list);

    this.cart.forEach((item) => {
      this.dishIds.push(item.id);
      console.log(item.id);
    });

    this.order = {
      id: this.orders.length + 1,
      name: orderForm.get('name').value,
      surname: orderForm.get('surname').value,
      address: orderForm.get('address').value,
      city: orderForm.get('city').value,
      postalCode: orderForm.get('postalCode').value,
      telephone: orderForm.get('telephone').value,
      dishIds: this.dishIds,
      price: this.total,
    };
  }
}

