import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuEntry} from '../../Model/MenuEntry.Model';
import {Subscription} from 'rxjs';
import {MenuService} from '../../Service/menu.service';
import {CartService} from '../../Service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy {
  menu: MenuEntry[];
  sub: Subscription;

  constructor(
    readonly menuService: MenuService,
    readonly cartService: CartService,
  ) {
  }

  getMenu(): void {
    this.sub = this.menuService.getMenu()
      .subscribe(menu => this.menu = menu);
  }

  getPizza(): void {
    this.sub = this.menuService.getPizza()
      .subscribe(pizza => this.menu = pizza);
  }

  getPasta(): void {
    this.sub = this.menuService.getPasta()
      .subscribe(pasta => this.menu = pasta);
  }

  getDrink(): void {
    this.sub = this.menuService.getDrink()
      .subscribe(drink => this.menu = drink);
  }

  addToCart(dish: MenuEntry) {
    this.cartService.addToCart(dish);
  }

  ngOnInit() {
    this.getPizza();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
