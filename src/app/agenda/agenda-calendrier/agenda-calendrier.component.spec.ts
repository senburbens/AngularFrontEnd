import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendrierComponent } from './agenda-calendrier.component';

describe('AgendaCalendrierComponent', () => {
  let component: AgendaCalendrierComponent;
  let fixture: ComponentFixture<AgendaCalendrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaCalendrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
