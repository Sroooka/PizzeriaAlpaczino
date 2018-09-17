import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private readonly loginService: LoginService,
    private readonly route: Router) {
  }

  canActivate(): boolean {
    const isLoggedIn = this.loginService.isLoggedIn;
    if (!isLoggedIn) {
      alert('Nie masz dostępu do tej strony!');
      this.route.navigate(['/login']);
    }

    return isLoggedIn;
  }
}
