import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../Service/menu.service';
import {OrderService} from '../../Service/order.service';
import {MenuEntry} from '../../Model/MenuEntry.Model';
import {Subscription} from 'rxjs';
import {Order} from '../../Model/Order.Model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[];
  menuEntries: MenuEntry[];
  simpleOrderMenu: MenuEntry[];
  subOrder: Subscription;
  subMenu: Subscription;

  constructor(
    readonly orderService: OrderService,
    readonly menuService: MenuService,
  ) {
  }

  ngOnInit() {
    this.getOrders();
    this.getMenu();
  }

  ngOnDestroy(): void {
    this.subOrder.unsubscribe();
    this.subMenu.unsubscribe();
  }

  getOrders(): void {
    this.subOrder = this.orderService.getOrders()
      .subscribe(order => this.orders = order);
  }

  getMenu(): void {
    this.subMenu = this.menuService.getFullMenu()
      .subscribe(menu => this.menuEntries = menu);
  }
}
