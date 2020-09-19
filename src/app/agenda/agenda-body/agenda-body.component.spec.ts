import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaBodyComponent } from './agenda-body.component';

describe('AgendaBodyComponent', () => {
  let component: AgendaBodyComponent;
  let fixture: ComponentFixture<AgendaBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
