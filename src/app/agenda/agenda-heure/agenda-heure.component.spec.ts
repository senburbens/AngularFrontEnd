import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeureComponent } from './agenda-heure.component';

describe('AgendaHeureComponent', () => {
  let component: AgendaHeureComponent;
  let fixture: ComponentFixture<AgendaHeureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaHeureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
