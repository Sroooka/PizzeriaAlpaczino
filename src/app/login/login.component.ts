import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../Model/User.Model';
import {forEach} from '@angular/router/src/utils/collection';

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
  ) { }

  ngOnInit() {
    this.loginService.getUsers().subscribe(user => this.users = user);
  }

  goBack(): void {
    this.location.back();
  }

  validateLogin() {
    console.log('Trying to log in');
    console.log('Number of users in db: ' + this.users.length)

    this.currentUser = {
      id: 0,
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    };

    this.users.forEach((item, index) => {
      console.log(this.currentUser.login + ' vs ' + item.login);
      console.log(this.currentUser.password + ' vs ' + item.password);
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
  }
}
