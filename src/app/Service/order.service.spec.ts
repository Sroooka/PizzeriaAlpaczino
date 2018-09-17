import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import {MenuService} from './menu.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderService', () => {
  let service: MenuService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });

    service = TestBed.get(MenuService);
    testingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([OrderService], (orderService: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
