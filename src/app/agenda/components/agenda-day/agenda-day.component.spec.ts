import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDayComponent } from './agenda-day.component';

describe('AgendaDayComponent', () => {
  let component: AgendaDayComponent;
  let fixture: ComponentFixture<AgendaDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
