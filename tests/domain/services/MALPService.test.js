import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MALPService } from '../../../src/domain/services/MALPService.js';
import { PlanetFactory } from '../../../src/domain/services/PlanetFactory.js';
import { ExplorationStatus } from '../../../src/domain/entities/Planet.js';

describe('MALPService', () => {
  let malpService;
  let mockStorage;
  let mockState;

  beforeEach(() => {
    mockStorage = {
      save: vi.fn(),
      load: vi.fn()
    };
    mockState = {
      lockedDestination: { id: 'CHV-001', status: ExplorationStatus.UNKNOWN },
      isGateActive: true
    };
    malpService = new MALPService(mockState, mockStorage);
    vi.useFakeTimers();
  });

  it('should transition planet to SCOUTED after 3 seconds', async () => {
    const deployment = malpService.deploy();
    
    // Fast-forward 3 seconds
    vi.advanceTimersByTime(3000);
    
    const result = await deployment;
    
    expect(result.status).toBe(ExplorationStatus.SCOUTED);
    expect(result.biome).toBeDefined();
    expect(mockStorage.save).toHaveBeenCalled();
  });

  it('should fail if gate is not active', async () => {
    mockState.isGateActive = false;
    const result = await malpService.deploy();
    expect(result).toBeNull();
  });
});
