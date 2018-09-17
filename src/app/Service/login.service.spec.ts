import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {MenuService} from './menu.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginService', () => {
  let service: LoginService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });

    service = TestBed.get(MenuService);
    testingController = TestBed.get(HttpTestingController);
  });


  it('should be created', inject([LoginService], (loginService: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
