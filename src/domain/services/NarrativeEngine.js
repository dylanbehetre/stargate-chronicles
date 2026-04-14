/**
 * Engine for generating narrative mission reports.
 */
export class NarrativeEngine {
  constructor(templates) {
    this.templates = templates;
  }

  /**
   * Generate a report summary and debrief.
   * @param {Planet} planet 
   * @returns {Object} { summary, debrief }
   */
  generateReport(planet) {
    const template = this.getRandom(this.templates.exploration);
    const discovery = this.getRandom(this.templates.discoveries);
    
    const debrief = template.replace('{discovery}', discovery);
    const summary = `Exploration de ${planet.name} réussie.`;
    
    return { summary, debrief };
  }

  getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
