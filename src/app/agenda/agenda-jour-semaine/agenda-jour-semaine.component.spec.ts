import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaJourSemaineComponent } from './agenda-jour-semaine.component';

describe('AgendaJourSemaineComponent', () => {
  let component: AgendaJourSemaineComponent;
  let fixture: ComponentFixture<AgendaJourSemaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaJourSemaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaJourSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
