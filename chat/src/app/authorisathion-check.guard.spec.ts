import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorisathionCheckGuard } from './authorisathion-check.guard';

describe('AuthorisathionCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorisathionCheckGuard]
    });
  });

  it('should ...', inject([AuthorisathionCheckGuard], (guard: AuthorisathionCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
