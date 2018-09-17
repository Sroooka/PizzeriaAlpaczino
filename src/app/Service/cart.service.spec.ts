import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuService} from './menu.service';

describe('CartService', () => {
  let service: CartService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });

    service = TestBed.get(MenuService);
    testingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([CartService], (cartService: CartService) => {
    expect(service).toBeTruthy();
  }));
});
