import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoginService} from '../../Service/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Model/User.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentUser: User;
  users: User[];

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private location: Location,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    this.loginService.getUsers().subscribe(user => this.users = user);
  }

  goBack(): void {
    this.location.back();
  }

  validateLogin() {
    this.currentUser = {
      id: 0,
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    };

    this.users.forEach((item, index) => {
      if (this.currentUser.login === item.login && this.currentUser.password === item.password) {
        this.loginService.login(
          {
            'id': 0,
            'login': this.currentUser.login,
            'password': this.currentUser.password
          }
        );
      }
    });

    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
