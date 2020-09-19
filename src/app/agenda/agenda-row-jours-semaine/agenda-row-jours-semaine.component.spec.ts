import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRowJoursSemaineComponent } from './agenda-row-jours-semaine.component';

describe('AgendaRowJoursSemaineComponent', () => {
  let component: AgendaRowJoursSemaineComponent;
  let fixture: ComponentFixture<AgendaRowJoursSemaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaRowJoursSemaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaRowJoursSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
