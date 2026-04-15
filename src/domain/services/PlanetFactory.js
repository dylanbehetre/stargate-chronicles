export class PlanetFactory {
  static BIOMES = [
    { id: 'Foresta', name: 'Forêt Tempérée', baseDanger: 1 },
    { id: 'Deserto', name: 'Désert Aride', baseDanger: 3 },
    { id: 'Ghiaccio', name: 'Plaines Glaciaires', baseDanger: 4 },
    { id: 'Vulcanico', name: 'Enfer Volcanique', baseDanger: 7 },
    { id: 'Oceanico', name: 'Monde Océanique', baseDanger: 2 }
  ];

  /**
   * Generates exploration data for a planet
   * @returns {Object}
   */
  static generateDiscoveryData() {
    const biomeTemplate = this.BIOMES[Math.floor(Math.random() * this.BIOMES.length)];
    const variance = Math.floor(Math.random() * 3); // 0-2
    const dangerLevel = Math.min(10, biomeTemplate.baseDanger + variance);

    return {
      biome: biomeTemplate.id,
      dangerLevel,
      environment: {
        atmosphere: 'Type I (Breathable)',
        temperature: this._generateTemperature(biomeTemplate.id),
        radiation: dangerLevel > 6 ? 'High' : 'Normal'
      }
    };
  }

  static _generateTemperature(biomeId) {
    switch (biomeId) {
      case 'Deserto': return '45°C';
      case 'Ghiaccio': return '-60°C';
      case 'Vulcanico': return '85°C';
      case 'Foresta': return '22°C';
      default: return '20°C';
    }
  }
}
