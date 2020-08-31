import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperVComponent } from './wrapperV.component';

describe('WrapperComponent', () => {
  let component: WrapperVComponent;
  let fixture: ComponentFixture<WrapperVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperVComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
