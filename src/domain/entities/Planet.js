export const PlanetStatus = Object.freeze({
  UNKNOWN: 'UNKNOWN',
  SCOUTED: 'SCOUTED',
  EXPLORED: 'EXPLORED'
});

export class Planet {
  /**
   * @param {Object} data
   * @param {string} data.id - 7-chevron address
   * @param {string} data.name
   * @param {string} [data.status]
   * @param {string} [data.biome]
   * @param {number} [data.dangerLevel]
   * @param {Date} [data.scannedAt]
   * @param {Object} [data.environment]
   */
  constructor({ id, name, status = PlanetStatus.UNKNOWN, biome = null, dangerLevel = 0, scannedAt = null, environment = {} }) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.biome = biome;
    this.dangerLevel = dangerLevel;
    this.scannedAt = scannedAt;
    this.environment = environment;
  }

  isScouted() {
    return this.status !== PlanetStatus.UNKNOWN;
  }

  isExplored() {
    return this.status === PlanetStatus.EXPLORED;
  }

  markAsScouted(biome, dangerLevel, environment) {
    this.status = PlanetStatus.SCOUTED;
    this.biome = biome;
    this.dangerLevel = dangerLevel;
    this.environment = environment;
    this.scannedAt = new Date();
  }

  markAsExplored() {
    this.status = PlanetStatus.EXPLORED;
  }
}
