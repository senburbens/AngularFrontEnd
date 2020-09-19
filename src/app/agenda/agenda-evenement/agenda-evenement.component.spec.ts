import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEvenementComponent } from './agenda-evenement.component';

describe('AgendaEvenementComponent', () => {
  let component: AgendaEvenementComponent;
  let fixture: ComponentFixture<AgendaEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
