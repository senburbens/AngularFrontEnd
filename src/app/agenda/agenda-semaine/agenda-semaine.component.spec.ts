import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaSemaineComponent } from './agenda-semaine.component';

describe('AgendaSemaineComponent', () => {
  let component: AgendaSemaineComponent;
  let fixture: ComponentFixture<AgendaSemaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaSemaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
