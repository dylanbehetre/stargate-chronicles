import { Planet, ExplorationStatus } from '../entities/Planet.js';

export class PlanetFactory {
  static BIOMES = ['Foresta', 'Deserto', 'Ghiaccio', 'Vulcanico', 'Antico'];

  /**
   * Generates exploration data for an unknown planet.
   * @param {string} id - The 7-chevron gate address.
   * @returns {Planet}
   */
  static createScoutedPlanet(id) {
    const biome = this.BIOMES[Math.floor(Math.random() * this.BIOMES.length)];
    const dangerLevel = Math.floor(Math.random() * 11); // 0 to 10
    
    // Simulate some environmental data
    const environment = {
      atmosphere: dangerLevel < 8 ? 'Breathable' : 'Toxic',
      temperature: biome === 'Ghiaccio' ? '-40°C' : (biome === 'Vulcanico' ? '55°C' : '22°C'),
      dayLength: '24h'
    };

    return new Planet({
      id,
      name: `P${id.replace(/-/g, '')}`, // Procedural name
      status: ExplorationStatus.SCOUTED,
      biome,
      dangerLevel,
      scannedAt: new Date(),
      environment
    });
  }
}
