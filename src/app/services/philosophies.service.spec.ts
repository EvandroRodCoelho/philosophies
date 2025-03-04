import { TestBed } from '@angular/core/testing';

import { PhilosophiesService } from './philosophies.service';

describe('PhilosophiesService', () => {
  let service: PhilosophiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilosophiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
