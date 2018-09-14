import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-order-done',
  templateUrl: './order-done.component.html',
  styleUrls: ['./order-done.component.scss']
})
export class OrderDoneComponent implements OnInit {

  constructor(
    readonly router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }



}
