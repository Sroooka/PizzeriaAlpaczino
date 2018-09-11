import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {Menu} from '../Model/Menu.Model';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    postalCode: new FormControl(),
    telephone: new FormControl(),
  });

  cart: Menu[] = [];
  total = 0;

  constructor(
    public orderService: OrderService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  onFormSubmit(): void {
    console.log(this.orderForm.get('name').value);
    this.orderService.generateNewOrder(this.orderForm);
    this.cartService.clearCart();
  }

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
