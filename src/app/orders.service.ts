import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './Model/Order.Model';
import {MenuEntry} from './Model/MenuEntry.Model';

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
}
