import { TestBed } from '@angular/core/testing';

import { FormulaireDynamiqueService } from './formulaire-dynamique.service';

describe('FormulaireDynamiqueService', () => {
  let service: FormulaireDynamiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireDynamiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
