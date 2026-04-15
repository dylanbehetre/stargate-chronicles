import { describe, it, expect, beforeEach } from 'vitest';
import { GateService } from '../../../src/domain/services/GateService.js';

describe('GateService', () => {
  let planets;
  let state;
  let gateService;

  beforeEach(() => {
    planets = [
      { id: 'abydos', name: 'Abydos', address: [1, 2, 3, 4, 5, 6, 7] },
      { id: 'chulak', name: 'Chulak', address: [10, 11, 12, 13, 14, 15, 7] }
    ];
    state = {
      lockedDestination: null,
      isGateActive: false,
      setDestination: (p) => { state.lockedDestination = p; }
    };
    gateService = new GateService(planets, state);
  });

  it('should successfully dial a valid canon address', () => {
    const success = gateService.dial([1, 2, 3, 4, 5, 6, 7]);
    expect(success).toBe(true);
    expect(state.lockedDestination.id).toBe('abydos');
  });

  it('should fail when dialing an incomplete address', () => {
    const success = gateService.dial([1, 2, 3]);
    expect(success).toBe(false);
  });

  it('should fail when dialing an unknown address', () => {
    const success = gateService.dial([9, 9, 9, 9, 9, 9, 9]);
    expect(success).toBe(false);
  });
});
