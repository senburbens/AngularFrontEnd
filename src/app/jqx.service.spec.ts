import { TestBed } from '@angular/core/testing';

import { JqxService } from './jqx.service';

describe('JqxService', () => {
  let service: JqxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JqxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
