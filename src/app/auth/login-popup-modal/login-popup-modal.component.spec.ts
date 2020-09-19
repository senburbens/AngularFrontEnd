import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupModalComponent } from './login-popup-modal.component';

describe('LoginPopupModalComponent', () => {
  let component: LoginPopupModalComponent;
  let fixture: ComponentFixture<LoginPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
