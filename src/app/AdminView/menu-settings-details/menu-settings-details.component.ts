import {Component, Input, OnInit} from '@angular/core';
import {MenuEntry} from '../../Model/MenuEntry.Model';
import {MenuService} from '../../Service/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-menu-settings-details',
  templateUrl: './menu-settings-details.component.html',
  styleUrls: ['./menu-settings-details.component.scss']
})
export class MenuSettingsDetailsComponent implements OnInit {

  @Input() dish: MenuEntry;
  subAvaliability: Subscription;
  form = new FormGroup({
    avaliability: new FormControl()
  });

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

  changeAvaliability() {
    this.dish.isAvailable = this.form.get('avaliability').value;
    this.subAvaliability = this.menuService.setAvaliability(this.dish).subscribe();
  }


}
