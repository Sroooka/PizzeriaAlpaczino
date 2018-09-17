import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MenuService} from '../menu.service';
import {HttpClientModule} from '@angular/common/http';
import {CartComponent} from '../cart/cart.component';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {of} from 'rxjs';

fdescribe('MenuComponent', () => {

    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [MenuComponent,
          CartComponent],
        imports: [
          HttpClientModule
        ],
        providers: [
          MenuService,
          CartService,
          OrderService
        ]
      })
        .compileComponents();
      const menuService = TestBed.get(MenuService);
      const getMenuSpy = spyOn(menuService, 'getMenu').and.returnValue(of([]));
      const getPizzaSpy = spyOn(menuService, 'getPizza').and.returnValue(of([]));
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should open getPizza on ngOnInit', () => {
    const getPizzaSpyComponent = spyOn(component, 'getPizza').and.returnValue(of(null));

    component.ngOnInit();

    expect(getPizzaSpyComponent).toHaveBeenCalled();
  });

});
