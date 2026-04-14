import { ExplorationStatus } from '../entities/Planet.js';

/**
 * Service handling MALP (Mobile Analytic Laboratory Probe) operations.
 */
export class MALPService {
  constructor(state) {
    this.state = state;
  }

  /**
   * Deploy a MALP to the currently locked destination.
   * @returns {boolean} Success
   */
  deploy() {
    const dest = this.state.lockedDestination;
    
    if (!dest || !this.state.isGateActive) {
      return false;
    }

    // Update planet status
    dest.status = ExplorationStatus.SCOUTED;
    
    return true;
  }
}
