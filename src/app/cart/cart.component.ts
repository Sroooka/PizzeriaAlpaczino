import { Component, OnInit } from '@angular/core';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    readonly cartService: CartService
  ) { }

  ngOnInit() {
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
