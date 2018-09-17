import {fakeAsync, TestBed} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuEntry} from '../Model/MenuEntry.Model';
import {MenuType} from '../Model/MenuType.Enum';
import {Observable, of} from 'rxjs';


fdescribe('MenuService', () => {
  let service: MenuService;
  let testingController: HttpTestingController;
  const URL = 'http://localhost:3000/MenuEntry';

  const pizza: MenuEntry = {
    id: 31,
    name: 'Pizza',
    isAvailable: true,
    description: 'Zwykła pizza',
    type: MenuType.PIZZA,
    price: 32,
  };

  const unavaliablePizza: MenuEntry = {
    id: 31,
    name: 'Pizza',
    isAvailable: false,
    description: 'Zwykła pizza',
    type: MenuType.PIZZA,
    price: 32,
  };

  const mockMenu: MenuEntry[] = [pizza, pizza, pizza, pizza, pizza, pizza, pizza];
  const mockUnavaliableMenu: MenuEntry[] = [unavaliablePizza, unavaliablePizza];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });

    service = TestBed.get(MenuService);
    testingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should menu will be equal mocked after calling getMenu', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getMenu().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));

  it('should menu will be equal mocked after calling getFullMenu', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getFullMenu().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));

  it('should menu will be equal mocked after calling getPizza', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getPizza().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry/?type=pizza');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));

  it('should menu will be equal mocked after calling getPasta', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getPasta().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry/?type=pasta');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));

  it('should menu will be equal mocked after calling getDrink', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getDrink().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry/?type=drink');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));

  it('should return nothing when returning unavaliable dishes', fakeAsync(() => {
    let dishes: MenuEntry[] = [];

    // when
    service.getMenu().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUnavaliableMenu);

    expect(dishes.length).toBe(0);

    testingController.verify();
  }));

  it('should find element by id', fakeAsync(() => {
    let dish: MenuEntry = null;

    // when
    service.getDish(pizza.id).subscribe(x => dish = x);
    const req = testingController.expectOne('/api/MenuEntry/' + pizza.id);
    expect(req.request.method).toEqual('GET');
    req.flush(pizza);

    expect(dish).toEqual(pizza);

    testingController.verify();
  }));

  it('should set status', fakeAsync(() => {
    let dish: MenuEntry = null;

    // when
    service.setAvaliability(pizza).subscribe(x => dish = x);
    const req = testingController.expectOne('/api/MenuEntry/' + pizza.id);
    expect(req.request.method).toEqual('PUT');
    req.flush(pizza);

    expect(dish).toEqual(pizza);

    testingController.verify();
  }));
});
