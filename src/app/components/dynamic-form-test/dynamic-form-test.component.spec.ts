import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFOrmTestComponent } from './dynamic-form-test.component';

describe('DynamicFOrmTestComponent', () => {
  let component: DynamicFOrmTestComponent;
  let fixture: ComponentFixture<DynamicFOrmTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFOrmTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFOrmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
