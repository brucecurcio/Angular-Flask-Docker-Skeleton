import { TestBed, inject } from '@angular/core/testing';

import { EscalationService } from './escalation.service';

describe('EscalationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscalationService]
    });
  });

  it('should be created', inject([EscalationService], (service: EscalationService) => {
    expect(service).toBeTruthy();
  }));
});
