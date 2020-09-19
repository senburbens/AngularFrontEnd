import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeureRowComponent } from './agenda-heure-row.component';

describe('AgendaHeureRowComponent', () => {
  let component: AgendaHeureRowComponent;
  let fixture: ComponentFixture<AgendaHeureRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaHeureRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHeureRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
