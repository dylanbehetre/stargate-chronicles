import { describe, it, expect } from 'vitest';
import { Planet, ExplorationStatus } from '../../../src/domain/entities/Planet.js';

describe('Planet Entity', () => {
  it('should create a valid planet from data', () => {
    const p = new Planet({
      id: 'abydos',
      name: 'Abydos',
      address: [26, 6, 14, 31, 11, 29, 1],
      status: ExplorationStatus.EXPLORED
    });
    expect(p.id).toBe('abydos');
    expect(p.address).toHaveLength(7);
  });

  it('should default to UNKNOWN status', () => {
    const p = new Planet({ id: 'PX-123', name: 'Unknown' });
    expect(p.status).toBe(ExplorationStatus.UNKNOWN);
  });

  it('should allow numeric danger levels', () => {
    const p = new Planet({ id: 'test', dangerLevel: 5 });
    expect(p.dangerLevel).toBe(5);
  });
});
