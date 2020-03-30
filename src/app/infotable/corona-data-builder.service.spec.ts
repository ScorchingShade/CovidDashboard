import { TestBed } from '@angular/core/testing';

import { CoronaDataBuilderService } from './corona-data-builder.service';

describe('CoronaDataBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronaDataBuilderService = TestBed.get(CoronaDataBuilderService);
    expect(service).toBeTruthy();
  });
});
