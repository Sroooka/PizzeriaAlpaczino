import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../Model/Menu.Model';
import {MenuService} from '../menu.service';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  @Input() dish: Menu;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getDish();
  }

  private getDish() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menuService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}
