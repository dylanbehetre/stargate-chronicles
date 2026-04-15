import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MALPService } from '../../../src/domain/services/MALPService.js';
import { Planet, PlanetStatus } from '../../../src/domain/entities/Planet.js';
import { PlanetFactory } from '../../../src/domain/services/PlanetFactory.js';

describe('MALPService', () => {
  let malpService;
  let mockRepo;

  beforeEach(() => {
    mockRepo = {
      get: vi.fn(),
      set: vi.fn()
    };
    malpService = new MALPService(mockRepo);
  });

  it('should scout an unknown planet and resolve after delay', async () => {
    const planetId = 'P3X-999';
    const planet = new Planet({ id: planetId, name: 'Abydos' });
    
    // Mock factory to return controlled data
    vi.spyOn(PlanetFactory, 'generateDiscoveryData').mockReturnValue({
      biome: 'Deserto',
      dangerLevel: 3,
      environment: { atmosphere: 'Breathable' }
    });

    const promise = malpService.deployMALP(planet);
    
    // Fast-forward 3 seconds simulate (manually calling resolve if needed or just wait)
    const result = await promise;

    expect(result.status).toBe(PlanetStatus.SCOUTED);
    expect(result.biome).toBe('Deserto');
    expect(mockRepo.set).toHaveBeenCalled();
  }, 10000); // 10s timeout because of the 3s simulation
});
