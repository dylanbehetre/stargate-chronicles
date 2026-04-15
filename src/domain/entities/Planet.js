export const ExplorationStatus = Object.freeze({
  UNKNOWN: 'UNKNOWN',
  SCOUTED: 'SCOUTED',
  EXPLORED: 'EXPLORED'
});

export class Planet {
  constructor({
    id,
    name,
    status = ExplorationStatus.UNKNOWN,
    biome = null,
    dangerLevel = 0,
    scannedAt = null,
    environment = {}
  }) {
    if (!id || !id.match(/^[A-Z0-9-]{7}$/)) {
      throw new Error('Invalid Planet ID: Must be 7 characters [A-Z0-9-].');
    }
    this.id = id;
    this.name = name;
    this.status = status;
    this.biome = biome;
    this.dangerLevel = dangerLevel;
    this.scannedAt = scannedAt;
    this.environment = environment;
  }

  isUnknown() {
    return this.status === ExplorationStatus.UNKNOWN;
  }

  isScouted() {
    return this.status === ExplorationStatus.SCOUTED || this.status === ExplorationStatus.EXPLORED;
  }

  isExplored() {
    return this.status === ExplorationStatus.EXPLORED;
  }
}
