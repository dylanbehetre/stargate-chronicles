/**
 * UI Component for the filtrable planet list.
 */
export class PlanetListPanel {
  constructor(containerId, planets, onSelect) {
    this.container = document.getElementById(containerId);
    this.planets = planets;
    this.onSelect = onSelect;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="search-box">
        <input type="text" id="planet-search" placeholder="RECHERCHER PLANÈTE..." style="width: 100%; background: transparent; border: 1px solid var(--terminal-green); color: var(--terminal-green); padding: 5px; font-family: var(--font-main);">
      </div>
      <div class="planets-scroll" style="margin-top: 10px; max-height: 400px; overflow-y: auto;">
        ${this.planets.map(planet => `
          <div class="planet-item" data-id="${planet.id}" style="cursor: pointer; padding: 5px; border-bottom: 1px solid var(--glass-border); transition: all 0.2s;">
            <span class="status-marker">[${planet.status === 'unexplored' ? ' ' : 'X'}]</span>
            ${planet.name}
          </div>
        `).join('')}
      </div>
    `;

    // Events
    this.container.querySelectorAll('.planet-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const planet = this.planets.find(p => p.id === id);
        this.onSelect(planet);
        
        // Highlight active
        this.container.querySelectorAll('.planet-item').forEach(i => i.style.background = 'transparent');
        item.style.background = 'var(--terminal-green-dim)';
      });
    });

    const searchInput = document.getElementById('planet-search');
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      this.container.querySelectorAll('.planet-item').forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(term) ? 'block' : 'none';
      });
    });
  }
}
