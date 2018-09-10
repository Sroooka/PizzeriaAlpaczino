import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Menu} from './Model/Menu.Model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    readonly http: HttpClient,
  ) {}

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/Menu')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getPizza(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/Menu/?type=pizza')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getPasta(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/Menu/?type=pasta')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getDrink(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/Menu/?type=drink')
      .pipe(map(menu => menu.filter(m => m.isAvailable)));
  }

  getDish(id: number): Observable<Menu> {
    return this.http.get<Menu>(`/api/Menu/${id}`);
  }
}
