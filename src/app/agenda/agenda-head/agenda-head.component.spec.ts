import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeadComponent } from './agenda-head.component';

describe('AgendaHeadComponent', () => {
  let component: AgendaHeadComponent;
  let fixture: ComponentFixture<AgendaHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
