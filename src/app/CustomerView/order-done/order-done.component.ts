import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-done',
  templateUrl: './order-done.component.html',
  styleUrls: ['./order-done.component.scss']
})
export class OrderDoneComponent implements OnInit {

  constructor(
    readonly router: Router,
  ) {
  }

  ngOnInit() {
  }
}
