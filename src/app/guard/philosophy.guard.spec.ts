import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { philosophyGuard } from './philosophy.guard';

describe('philosophyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => philosophyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
