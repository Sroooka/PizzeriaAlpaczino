import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {OrdersService} from '../orders.service';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {Subscription} from 'rxjs';
import {Order} from '../Model/Order.Model';

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
    readonly ordersService: OrdersService,
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
    this.subOrder = this.ordersService.getOrders()
      .subscribe(order => this.orders = order);
  }

  getMenu(): void {
    this.subMenu = this.menuService.getFullMenu()
      .subscribe(menu => this.menuEntries = menu);
  }

  getProductListByOrderId(id: number) {
    this.simpleOrderMenu = [];
    if (this.menuEntries) {
      const order = this.orders.find(i => i.id === id);
      for (let i = 0; i < order.dishIds.length; i++) {
        this.simpleOrderMenu.push(
          this.menuEntries.find(x => x.id === order.dishIds[i])
        );
      }
    }
    return this.simpleOrderMenu;
  }
}
