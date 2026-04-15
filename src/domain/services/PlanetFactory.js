import { Planet, ExplorationStatus } from '../entities/Planet.js';

export class PlanetFactory {
  static BIOMES = ['forest', 'desert', 'ice', 'volcanic', 'ancient'];

  /**
   * Generates exploration data for an unknown planet.
   * @param {Planet} basePlanet - The original planet entity (from data or manual entry)
   * @returns {Planet}
   */
  static createScoutedPlanet(basePlanet) {
    const biome = this.BIOMES[Math.floor(Math.random() * this.BIOMES.length)];
    const dangerLevel = Math.floor(Math.random() * 11);
    
    const descriptions = {
      forest: "Un monde verdoyant couvert de forêts denses. Des ruines de bas-reliefs suggèrent une présence jaffa passée.",
      desert: "Un désert aride où le vent sculpte des dunes de verre. Forte concentration de minéraux.",
      ice: "Une sphère gelée. Des structures artificielles sont visibles sous 10 mètres de glace.",
      volcanic: "Activité géothermique intense. Atmosphère instable mais riche en ressources énergétiques.",
      ancient: "Site archéologique majeur. Les relevés indiquent des signatures énergétiques de type Anciens."
    };

    return new Planet({
      ...basePlanet,
      status: ExplorationStatus.SCOUTED,
      description: basePlanet.description || descriptions[biome],
      biome: basePlanet.biome || biome,
      dangerLevel: basePlanet.dangerLevel || dangerLevel,
      scannedAt: new Date(),
    });
  }

}

