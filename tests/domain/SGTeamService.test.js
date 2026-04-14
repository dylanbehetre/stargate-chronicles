import { describe, it, expect, beforeEach } from 'vitest';
import { SGTeamService } from '../../src/domain/services/SGTeamService.js';
import { NarrativeEngine } from '../../src/domain/services/NarrativeEngine.js';
import { GameState } from '../../src/domain/entities/GameState.js';
import { Planet, ExplorationStatus } from '../../src/domain/entities/Planet.js';

describe('SGTeamService', () => {
  let sgTeamService;
  let state;
  let planet;
  const mockTemplates = {
    exploration: ["Test template {discovery}"],
    discoveries: ["Test discovery"]
  };

  beforeEach(() => {
    state = new GameState();
    planet = new Planet({ id: 'p1', name: 'Abydos', status: ExplorationStatus.SCOUTED });
    state.setDestination(planet);
    state.isGateActive = true;
    
    const engine = new NarrativeEngine(mockTemplates);
    sgTeamService = new SGTeamService(state, engine);
  });

  it('should deploy team and generate report', () => {
    const report = sgTeamService.deploy();
    expect(report).not.toBeNull();
    expect(report.planetName).toBe('Abydos');
    expect(state.history.length).toBe(1);
    expect(planet.status).toBe(ExplorationStatus.EXPLORED);
  });

  it('should fail if gate is not active', () => {
    state.isGateActive = false;
    const report = sgTeamService.deploy();
    expect(report).toBeNull();
  });
});
