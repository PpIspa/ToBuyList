import { TestBed } from '@angular/core/testing';

import { ToBuyService } from './to-buy.service';

describe('ToBuyService', () => {
  let service: ToBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
