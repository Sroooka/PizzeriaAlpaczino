import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {Menu} from '../Model/Menu.Model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cart: Menu[] = [];
  total = 0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getCart();
    this.getTotalPrice();
  }

  private getCart() {
    this.cart = this.cartService.getCart();
  }

  private getTotalPrice() {
    this.total = this.cartService.getTotal();
  }


  goBack(): void {
    this.location.back();
  }
}
