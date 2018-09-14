import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Order} from '../Model/Order.Model';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {Subscription} from 'rxjs';
import {OrdersService} from '../orders.service';
import {OrderStatus} from '../Model/OrderStatus.Enum';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: Order;
  menuEntries: MenuEntry[];
  simpleOrderMenu: MenuEntry[];
  subOrder: Subscription;
  subMenu: Subscription;
  statusNew = OrderStatus.NEW;
  statusInProgress = OrderStatus.IN_PROGRESS;
  statusSent = OrderStatus.SENT;
  statusDelivered = OrderStatus.DELIVERED;
  statusCanceled = OrderStatus.CANCELED;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private location: Location,
    readonly ordersService: OrdersService,
  ) {
  }

  ngOnInit() {
    this.getOrder();
    this.getMenu();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subOrder.unsubscribe();
    this.subMenu.unsubscribe();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subOrder = this.ordersService.getOrder(id)
      .subscribe(order => this.order = order);
  }

  getMenu(): void {
    this.subMenu = this.menuService.getFullMenu()
      .subscribe(menu => this.menuEntries = menu);
  }

  getProductList() {
    this.simpleOrderMenu = [];
    if (this.menuEntries && this.order) {
      for (let i = 0; i < this.order.dishIds.length; i++) {
        this.simpleOrderMenu.push(
          this.menuEntries.find(x => x.id === this.order.dishIds[i])
        );
      }
    }
    return this.simpleOrderMenu;
  }

  setStatus(status: OrderStatus) {
    this.order.status = status;
    this.subOrder = this.ordersService.setOrderStatus(this.order).subscribe();
  }
}
