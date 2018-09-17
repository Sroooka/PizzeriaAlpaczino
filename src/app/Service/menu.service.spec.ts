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


  it('should menu will be equal mocked', fakeAsync(() => {
    let dishes: MenuEntry[] = [];
    const mockMenu: MenuEntry[] = [pizza, pizza, pizza, pizza, pizza, pizza, pizza];

    // when
    service.getMenu().subscribe(x => dishes = x);
    const req = testingController.expectOne('/api/MenuEntry');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMenu);

    expect(dishes).toEqual(mockMenu);

    testingController.verify();
  }));
});
