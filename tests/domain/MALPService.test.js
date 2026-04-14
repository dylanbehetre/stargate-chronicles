import { describe, it, expect, beforeEach } from 'vitest';
import { MALPService } from '../../src/domain/services/MALPService.js';
import { Planet, ExplorationStatus } from '../../src/domain/entities/Planet.js';
import { GameState } from '../../src/domain/entities/GameState.js';

describe('MALPService', () => {
  let malpService;
  let state;
  let planet;

  beforeEach(() => {
    state = new GameState();
    planet = new Planet({ id: 'p1', name: 'Abydos', status: ExplorationStatus.UNEXPLORED });
    state.setDestination(planet);
    malpService = new MALPService(state);
  });

  it('should scout a planet', () => {
    state.isGateActive = true;
    const success = malpService.deploy();
    expect(success).toBe(true);
    expect(planet.status).toBe(ExplorationStatus.SCOUTED);
  });

  it('should fail if no destination is locked', () => {
    state.lockedDestination = null;
    const success = malpService.deploy();
    expect(success).toBe(false);
  });
});
