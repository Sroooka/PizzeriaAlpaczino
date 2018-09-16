import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {Subscription} from 'rxjs';
import {MenuService} from '../menu.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.scss']
})
export class MenuSettingsComponent implements OnInit, OnDestroy {

  menu: MenuEntry[];
  sub: Subscription;

  constructor(
    readonly menuService: MenuService,
    readonly cartService: CartService,
  ) { }

  getFullMenu(): void {
    this.sub = this.menuService.getFullMenu()
      .subscribe(menu => this.menu = menu);
  }

  ngOnInit() {
    this.getFullMenu();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
