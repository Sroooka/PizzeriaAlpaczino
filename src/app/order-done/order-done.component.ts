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

  counter = 10;
  counterTimeout = 10;

  countDown() {
    for(let i = 0; i < this.counterTimeout; i++) {

    }
    while (this.counter > 0) {
      this.counter--;
      this.delay(1000);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  constructor(
    readonly router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 10000);
    this.counter = 0;
    this.countDown();
  }



}
