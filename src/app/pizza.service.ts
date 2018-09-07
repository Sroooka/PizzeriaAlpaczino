import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class PizzaService {
  private url = './menu-database.json';

  constructor(private http: HttpClient) {}

  getPizzas () {
    return this.http.get(this.url).pipe(map((response: Response) => response.json()));
  }
}
