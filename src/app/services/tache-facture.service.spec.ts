import { TestBed } from '@angular/core/testing';

import { TacheFactureService } from './tache-facture.service';

describe('TacheFactureService', () => {
  let service: TacheFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacheFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
