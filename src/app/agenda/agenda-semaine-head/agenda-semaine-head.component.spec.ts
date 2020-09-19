import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaSemaineHeadComponent } from './agenda-semaine-head.component';

describe('AgendaSemaineHeadComponent', () => {
  let component: AgendaSemaineHeadComponent;
  let fixture: ComponentFixture<AgendaSemaineHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaSemaineHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaSemaineHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
