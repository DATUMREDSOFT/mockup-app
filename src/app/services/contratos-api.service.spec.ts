import { TestBed } from '@angular/core/testing';

import { ContratosApiService } from './contratos-api.service';

describe('ContratosApiService', () => {
  let service: ContratosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
