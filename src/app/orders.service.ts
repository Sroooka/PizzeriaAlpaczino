import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './Model/Order.Model';
import {OrderStatus} from './Model/OrderStatus.Enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    readonly http: HttpClient,
  ) { }

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
