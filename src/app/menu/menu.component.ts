import {Component, OnDestroy, OnInit} from '@angular/core';
import {Menu} from '../Model/Menu.Model';
import {Subscription} from 'rxjs';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy {
  menu: Menu[];
  sub: Subscription;

  constructor(
    readonly menuService: MenuService,
  ) { }


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

  ngOnInit() {
    this.getPizza();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
