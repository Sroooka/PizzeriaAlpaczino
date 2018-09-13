import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './Model/User.Model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean;
  userName: string;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
    this.isLoggedIn = false;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/Users');
  }

  login(user: User) {
    this.isLoggedIn = true;
    this.userName = user.login;
    console.log('Logged in!');
    this.router.navigate(['/orders']);

  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/menuEntries']);
    console.log('Logged out!');
  }

  isLogged() {
    return this.isLoggedIn;
  }
}
