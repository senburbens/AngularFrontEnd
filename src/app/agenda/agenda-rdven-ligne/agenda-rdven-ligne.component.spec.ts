import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRDVEnLigneComponent } from './agenda-rdven-ligne.component';

describe('AgendaRDVEnLigneComponent', () => {
  let component: AgendaRDVEnLigneComponent;
  let fixture: ComponentFixture<AgendaRDVEnLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaRDVEnLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaRDVEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
