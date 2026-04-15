import { ExplorationStatus } from '../entities/Planet.js';
import { PlanetFactory } from './PlanetFactory.js';

/**
 * Service handling MALP (Mobile Analytic Laboratory Probe) operations.
 */
export class MALPService {
  /**
   * @param {Object} state - The application state.
   * @param {IStorageRepository} storage - The storage repository.
   */
  constructor(state, storage) {
    this.state = state;
    this.storage = storage;
    this.SCAN_DELAY_MS = 3000;
  }

  /**
   * Deploy a MALP to the currently locked destination.
   * Returns a promise that resolves after 3 seconds with the scouted planet.
   * @returns {Promise<Planet|null>}
   */
  async deploy() {
    const dest = this.state.lockedDestination;
    
    if (!dest || !this.state.isGateActive) {
      return null;
    }

    // Simulate 3-second transit/scan
    return new Promise((resolve) => {
      setTimeout(() => {
        // Use Factory to generate data if unknown
        const scoutedPlanet = PlanetFactory.createScoutedPlanet(dest.id);
        
        // Update local state if necessary (or return for caller to update)
        this.state.lockedDestination = scoutedPlanet;
        
        // Persist
        this.storage.save(`planet_${scoutedPlanet.id}`, scoutedPlanet);
        
        resolve(scoutedPlanet);
      }, this.SCAN_DELAY_MS);
    });
  }
}
