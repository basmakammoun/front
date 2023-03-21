import { TestBed } from '@angular/core/testing';

import { TacheRdvService } from './tache-rdv.service';

describe('TacheRdvService', () => {
  let service: TacheRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacheRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
