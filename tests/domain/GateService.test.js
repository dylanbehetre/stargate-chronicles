import { describe, it, expect, beforeEach } from 'vitest';
import { GateService } from '../../src/domain/services/GateService.js';
import { Planet } from '../../src/domain/entities/Planet.js';
import { GameState } from '../../src/domain/entities/GameState.js';

describe('GateService', () => {
  let gateService;
  let state;
  const mockPlanets = [
    new Planet({ id: 'p1', name: 'Abydos', address: [1, 2, 3, 4, 5, 6, 7] }),
    new Planet({ id: 'p2', name: 'Chulak', address: [8, 9, 10, 11, 12, 13, 14] })
  ];

  beforeEach(() => {
    state = new GameState();
    gateService = new GateService(mockPlanets, state);
  });

  it('should find a planet by its address', () => {
    const planet = gateService.findPlanetByAddress([1, 2, 3, 4, 5, 6, 7]);
    expect(planet.name).toBe('Abydos');
  });

  it('should return null for an invalid address', () => {
    const planet = gateService.findPlanetByAddress([9, 9, 9, 9, 9, 9, 9]);
    expect(planet).toBeNull();
  });

  it('should dial and activate the gate for a valid planet', () => {
    const success = gateService.dial([1, 2, 3, 4, 5, 6, 7]);
    expect(success).toBe(true);
    expect(state.isGateActive).toBe(true);
    expect(state.lockedDestination.id).toBe('p1');
  });

  it('should fail to activate for an unknown address', () => {
    const success = gateService.dial([9, 9, 9, 9, 9, 9, 9]);
    expect(success).toBe(false);
    expect(state.isGateActive).toBe(false);
  });
});
