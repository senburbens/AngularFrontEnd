import { TestBed } from '@angular/core/testing';

import { TestListeUserService } from './test-liste-user.service';

describe('TestListeUserService', () => {
  let service: TestListeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestListeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
