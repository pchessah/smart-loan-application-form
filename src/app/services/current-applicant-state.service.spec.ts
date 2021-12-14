import { TestBed } from '@angular/core/testing';

import { CurrentApplicantStateService } from './current-applicant-state.service';

describe('CurrentApplicantStateService', () => {
  let service: CurrentApplicantStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentApplicantStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
