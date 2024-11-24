import { TestBed } from '@angular/core/testing';

import { ContactSubmissionsService } from './contact-submissions.service';

describe('ContactSubmissionsService', () => {
  let service: ContactSubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
