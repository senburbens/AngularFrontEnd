import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeureAppendedChildComponent } from './agenda-heure-appended-child.component';

describe('AgendaHeureAppendedChildComponent', () => {
  let component: AgendaHeureAppendedChildComponent;
  let fixture: ComponentFixture<AgendaHeureAppendedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaHeureAppendedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHeureAppendedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
