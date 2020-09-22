import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsIntemporelsRowComponent } from './evenements-intemporels-row.component';

describe('EvenementsIntemporelsRowComponent', () => {
  let component: EvenementsIntemporelsRowComponent;
  let fixture: ComponentFixture<EvenementsIntemporelsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementsIntemporelsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementsIntemporelsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
