/**
 * Service handling Stargate dialing and address resolution.
 */
export class GateService {
  constructor(planets, state) {
    this.planets = planets;
    this.state = state;
  }

  /**
   * Resolve an address to a planet entity.
   * @param {number[]} address - Array of symbol IDs.
   * @returns {Planet|null}
   */
  findPlanetByAddress(address) {
    return this.planets.find(p => 
      p.address.length === address.length && 
      p.address.every((val, index) => val === address[index])
    ) || null;
  }

  /**
   * Attempt to dial a destination.
   * @param {number[]} address - Array of symbol IDs.
   * @returns {boolean} Success
   */
  dial(address) {
    this.state.dialedAddress = address;
    const dest = this.findPlanetByAddress(address);
    
    if (dest) {
      this.state.isGateActive = true;
      this.state.setDestination(dest);
      return true;
    } else {
      this.state.isGateActive = false;
      this.state.lockedDestination = null;
      return false;
    }
  }

  /**
   * Close the wormhole.
   */
  deactivate() {
    this.state.isGateActive = false;
    this.state.lockedDestination = null;
    this.state.dialedAddress = [];
  }
}
