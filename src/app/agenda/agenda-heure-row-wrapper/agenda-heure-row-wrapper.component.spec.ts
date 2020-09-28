import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeureRowWrapperComponent } from './agenda-heure-row-wrapper.component';

describe('AgendaHeureRowWrapperComponent', () => {
  let component: AgendaHeureRowWrapperComponent;
  let fixture: ComponentFixture<AgendaHeureRowWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaHeureRowWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHeureRowWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
