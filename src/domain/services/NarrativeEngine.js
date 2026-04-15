import templates from '../../data/templates/narrative.json';

/**
 * Engine for generating narrative mission reports using templates.
 */
export class NarrativeEngine {
  /**
   * Generates a narrative report based on planet data and mission outcome.
   * @param {Planet} planet 
   * @param {string} teamStatus - INTACT, WOUNDED, CASUALTIES
   * @returns {string} The narrated summary.
   */
  static generateReport(planet, teamStatus) {
    let text = this.getRandom(templates.exploration);
    const detail = this.getRandom(templates.details);
    const healthNote = templates.health[teamStatus];

    text = text.replace('{biome}', planet.biome || 'sconosciuto')
               .replace('{planet_id}', planet.id)
               .replace('{climate}', planet.environment.temperature || 'variabile')
               .replace('{visibility}', 'ottimale')
               .replace('{details}', detail);

    return `${text} ${healthNote}`;
  }

  static getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
