import { TestBed } from '@angular/core/testing';

import { DetailsDataService } from './details-data.service';

describe('DetailsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsDataService = TestBed.get(DetailsDataService);
    expect(service).toBeTruthy();
  });
});
