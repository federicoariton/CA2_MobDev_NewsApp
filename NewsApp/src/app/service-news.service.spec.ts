import { TestBed } from '@angular/core/testing';

import { ServiceNewsService } from './service-news.service';

describe('ServiceNewsService', () => {
  let service: ServiceNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
