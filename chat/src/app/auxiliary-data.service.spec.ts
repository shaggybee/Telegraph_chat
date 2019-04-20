import { TestBed } from '@angular/core/testing';

import { AuxiliaryDataService } from './auxiliary-data.service';

describe('AuxiliaryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuxiliaryDataService = TestBed.get(AuxiliaryDataService);
    expect(service).toBeTruthy();
  });
});
