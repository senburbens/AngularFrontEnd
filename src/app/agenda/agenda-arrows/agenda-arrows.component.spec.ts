import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaArrowsComponent } from './agenda-arrows.component';

describe('AgendaArrowsComponent', () => {
  let component: AgendaArrowsComponent;
  let fixture: ComponentFixture<AgendaArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
