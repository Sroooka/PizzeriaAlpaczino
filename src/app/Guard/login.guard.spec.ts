import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('LoginGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
      ]
    })
      .compileComponents();
  }));


  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
