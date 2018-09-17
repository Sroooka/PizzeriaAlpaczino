import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartService} from '../../Service/cart.service';
import {OrderService} from '../../Service/order.service';
import {MenuEntry} from '../../Model/MenuEntry.Model';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
  });

  cart: MenuEntry[] = [];
  total = 0;

  constructor(
    public orderService: OrderService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  onFormSubmit(): void {
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
