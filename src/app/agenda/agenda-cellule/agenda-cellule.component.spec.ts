import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCelluleComponent } from './agenda-cellule.component';

describe('AgendaCelluleComponent', () => {
  let component: AgendaCelluleComponent;
  let fixture: ComponentFixture<AgendaCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaCelluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
