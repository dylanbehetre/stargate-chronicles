/**
 * Creates a Glassmorphic Panel element
 */
export class GlassPanel {
  /**
   * @param {Object} options
   * @param {string} [options.id]
   * @param {string[]} [options.classes]
   * @param {string} [options.title]
   */
  static create({ id, classes = [], title = '' } = {}) {
    const panel = document.createElement('div');
    if (id) panel.id = id;
    panel.className = `glass-panel ${classes.join(' ')}`;
    
    if (title) {
      const header = document.createElement('div');
      header.className = 'panel-header text-cyan';
      header.textContent = title;
      panel.appendChild(header);
    }
    
    const content = document.createElement('div');
    content.className = 'panel-content';
    panel.appendChild(content);
    
    return panel;
  }
}
