import { TestBed } from '@angular/core/testing';

import { RecetasApiService } from './recetas-api.service';

describe('RecetasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetasApiService = TestBed.get(RecetasApiService);
    expect(service).toBeTruthy();
  });
});
