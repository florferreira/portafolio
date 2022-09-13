import { TestBed } from '@angular/core/testing';

import { PoyectosDataService } from './proyectos-data.service';

describe('PoyectosDataService', () => {
  let service: PoyectosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoyectosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
