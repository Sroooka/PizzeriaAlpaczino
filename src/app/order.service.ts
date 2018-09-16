import {Injectable} from '@angular/core';
import {MenuEntry} from './Model/MenuEntry.Model';
import {FormGroup} from '@angular/forms';
import {Order} from './Model/Order.Model';
import {CartService} from './cart.service';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {RequestOptions} from '@angular/http';
import {OrderStatus} from './Model/OrderStatus.Enum';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cart: MenuEntry[] = [];
  total = 0;
  order: Order;
  orders: Order[] = [];
  sub: Subscription;
  dishIds = [];

  setCart(newCart: MenuEntry[]) {
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
    readonly router: Router,
  ) {  }

  generateNewOrder(orderForm: FormGroup) {
    //this.sub = this.http.get<Order[]>('/api/Orders')
    //  .subscribe(list => this.orders = list);

    //console.log('Orders length: ' + this.orders.length);

    this.cart.forEach((item) => {
      this.dishIds.push(item.id);
      console.log('Added Dish Id: ' + item.id);
    });

    this.order = {
      id: null,
      name: orderForm.get('name').value,
      surname: orderForm.get('surname').value,
      address: orderForm.get('address').value,
      city: orderForm.get('city').value,
      postalCode: orderForm.get('postalCode').value,
      telephone: orderForm.get('telephone').value,
      dishIds: this.dishIds,
      price: this.total,
      status: OrderStatus.NEW
    };

    this.postOrder(this.order).subscribe();

    console.log('Added new Order!');
    console.log('Customer: ' + this.order.name + ' ' + this.order.surname);
    console.log('Price: ' + this.order.price);

    this.router.navigate(['/orderdone']);
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/Orders',
      {
        'id': null,
        'name': order.name,
        'surname': order.surname,
        'address': order.address,
        'city': order.city,
        'postalCode': order.postalCode,
        'telephone': order.telephone,
        'dishIds': order.dishIds,
        'price': order.price,
        'status': order.status
      }
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/Orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`/api/Orders/${id}`);
  }

  setOrderStatus(order: Order) {
    return this.http.put<Order>(`/api/Orders/${order.id}`, order);
  }
}

