import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsComponent } from './menu-settings.component';
import {MenuComponent} from '../../CustomerView/menu/menu.component';
import {CartComponent} from '../../CustomerView/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuService} from '../../Service/menu.service';
import {CartService} from '../../Service/cart.service';
import {OrderService} from '../../Service/order.service';

describe('MenuSettingsComponent', () => {
  let component: MenuSettingsComponent;
  let fixture: ComponentFixture<MenuSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        CartComponent,
        MenuSettingsComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        MenuService,
        CartService,
        OrderService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
