import { TestBed } from '@angular/core/testing';
import { NekoService } from './neko-service';

describe('NekoService', () => {
  let service: NekoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NekoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
