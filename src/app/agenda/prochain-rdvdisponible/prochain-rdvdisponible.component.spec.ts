import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainRDVDisponibleComponent } from './prochain-rdvdisponible.component';

describe('ProchainRDVDisponibleComponent', () => {
  let component: ProchainRDVDisponibleComponent;
  let fixture: ComponentFixture<ProchainRDVDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProchainRDVDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProchainRDVDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
