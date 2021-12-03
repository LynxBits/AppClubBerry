/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthProviderService } from './auth-provider.service';

describe('Service: AuthProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthProviderService]
    });
  });

  it('should ...', inject([AuthProviderService], (service: AuthProviderService) => {
    expect(service).toBeTruthy();
  }));
});
