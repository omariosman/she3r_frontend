import { TestBed } from '@angular/core/testing';

import { VerseEntryService } from './verse-entry.service';

describe('VerseEntryService', () => {
  let service: VerseEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerseEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
