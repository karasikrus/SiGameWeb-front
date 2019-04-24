import { TestBed } from '@angular/core/testing';

import { DataMoveService } from './data-move.service';

describe('DataMoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMoveService = TestBed.get(DataMoveService);
    expect(service).toBeTruthy();
  });
});
