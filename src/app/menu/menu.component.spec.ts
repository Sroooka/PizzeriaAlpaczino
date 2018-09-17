import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MenuService} from '../menu.service';
import {HttpClientModule} from '@angular/common/http';
import {CartComponent} from '../cart/cart.component';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

fdescribe('MenuComponent', () => {
  let getMenuSpy;
  let getPizzaSpy;
  let getPastaSpy;
  let getDrinkSpy;
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        CartComponent],
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const menuService = TestBed.get(MenuService);
    getMenuSpy = spyOn(menuService, 'getMenu').and.returnValue(of([]));
    getPizzaSpy = spyOn(menuService, 'getPizza').and.returnValue(of([]));
    getPastaSpy = spyOn(menuService, 'getPasta').and.returnValue(of([]));
    getDrinkSpy = spyOn(menuService, 'getDrink').and.returnValue(of([]));
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should open getPizza on ngOnInit', () => {
    const getPizzaSpyComponent = spyOn(component, 'getPizza').and.returnValue(of(null));

    component.ngOnInit();

    expect(getPizzaSpyComponent).toHaveBeenCalled();
  });

  it('should call menu service when call getMenu', () => {

    component.getMenu();

    expect(getMenuSpy).toHaveBeenCalled();
  });

  it('should call menu service when call getPizza', () => {

    component.getPizza();

    expect(getPizzaSpy).toHaveBeenCalled();
  });

  it('should call menu service when call getPasta', () => {

    component.getPasta();

    expect(getPastaSpy).toHaveBeenCalled();
  });

  it('should call menu service when call getDrink', () => {

    component.getDrink();

    expect(getDrinkSpy).toHaveBeenCalled();
  });
});
