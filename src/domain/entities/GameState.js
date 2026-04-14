export class GameState {
  constructor() {
    this.currentPlanetId = null;
    this.history = [];
    this.dialedAddress = []; // Current address being composed
    this.isGateActive = false;
    this.lockedDestination = null; // Planet object
  }

  resetDialing() {
    this.dialedAddress = [];
    this.isGateActive = false;
  }

  setDestination(planet) {
    this.lockedDestination = planet;
    this.currentPlanetId = planet.id;
  }
}
