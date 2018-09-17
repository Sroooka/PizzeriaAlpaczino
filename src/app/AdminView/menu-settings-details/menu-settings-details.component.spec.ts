import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsDetailsComponent } from './menu-settings-details.component';
import {MenuComponent} from '../../CustomerView/menu/menu.component';
import {CartComponent} from '../../CustomerView/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuService} from '../../Service/menu.service';
import {CartService} from '../../Service/cart.service';
import {OrderService} from '../../Service/order.service';
import {DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule, By} from '@angular/platform-browser';

describe('MenuSettingsDetailsComponent', () => {
  let component: MenuSettingsDetailsComponent;
  let fixture: ComponentFixture<MenuSettingsDetailsComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        CartComponent,
        MenuSettingsDetailsComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
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
    fixture = TestBed.createComponent(MenuSettingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
