import { TestBed, async, inject } from '@angular/core/testing';

import { FormLoginGuard } from './form-login.guard';

describe('FormLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormLoginGuard]
    });
  });

  it('should ...', inject([FormLoginGuard], (guard: FormLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
