import { TestBed } from '@angular/core/testing';

import { PeliculaServService } from './pelicula-serv.service';

describe('PeliculaServService', () => {
  let service: PeliculaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
