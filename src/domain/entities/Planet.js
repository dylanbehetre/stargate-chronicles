export const ExplorationStatus = Object.freeze({
  UNKNOWN: 'UNKNOWN',
  SCOUTED: 'SCOUTED',
  EXPLORED: 'EXPLORED'
});

export class Planet {
  constructor({
    id,
    name,
    address = [],
    status = ExplorationStatus.UNKNOWN,
    biome = null,
    dangerLevel = 0,
    description = '',
    scannedAt = null,
    environment = {}
  }) {
    if (!id) {
      throw new Error('Planet ID is required.');
    }
    this.id = id;
    this.name = name || id;
    this.address = address;
    this.status = status;
    this.biome = biome;
    this.dangerLevel = dangerLevel;
    this.description = description;
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

