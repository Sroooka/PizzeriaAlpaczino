import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsDetailsComponent } from './menu-settings-details.component';

describe('MenuSettingsDetailsComponent', () => {
  let component: MenuSettingsDetailsComponent;
  let fixture: ComponentFixture<MenuSettingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSettingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
