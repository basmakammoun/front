import { TestBed } from '@angular/core/testing';

import { TachePersonnelService } from './tache-personnel.service';

describe('TachePersonnelService', () => {
  let service: TachePersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachePersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
