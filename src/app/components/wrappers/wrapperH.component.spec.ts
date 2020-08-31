import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperHComponent } from './wrapperH.component';

describe('WrapperHComponent', () => {
  let component: WrapperHComponent;
  let fixture: ComponentFixture<WrapperHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperHComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
