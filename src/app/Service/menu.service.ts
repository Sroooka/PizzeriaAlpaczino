import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {Order} from '../Model/Order.Model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    readonly http: HttpClient,
  ) {}

  getMenu(): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>('/api/MenuEntry')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getFullMenu(): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>('/api/MenuEntry');
  }

  getPizza(): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>('/api/MenuEntry/?type=pizza')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getPasta(): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>('/api/MenuEntry/?type=pasta')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getDrink(): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>('/api/MenuEntry/?type=drink')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getDish(id: number): Observable<MenuEntry> {
    return this.http.get<MenuEntry>(`/api/MenuEntry/${id}`);
  }

  setAvaliability(newDish: MenuEntry) {
    return this.http.put<MenuEntry>(`/api/MenuEntry/${newDish.id}`, newDish);
  }
}
