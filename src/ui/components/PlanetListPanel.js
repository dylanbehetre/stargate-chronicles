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
      <div class="search-box" style="margin-bottom: 15px;">
        <input type="text" id="planet-search" placeholder="RECHERCHER PLANÈTE..." 
          style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid var(--color-cyan); color: var(--color-cyan); padding: 8px; font-family: var(--font-ui); outline: none;">
      </div>
      <div class="planets-scroll" style="max-height: 480px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--color-cyan) transparent;">
        ${this.planets.map(planet => `
          <div class="planet-item transition-smooth" data-id="${planet.id}" 
            style="cursor: pointer; padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); display: flex; justify-content: space-between; align-items: center;">
            <span>${planet.name}</span>
            <span class="status-marker" style="font-size: 0.7rem; color: ${planet.status === 'UNKNOWN' ? 'rgba(255,255,255,0.3)' : 'var(--color-cyan)'}">
              ${planet.status === 'UNKNOWN' ? '[NON SCAN]' : '[SCAN POSITIF]'}
            </span>
          </div>
        `).join('')}
      </div>
    `;

    // Events
    this.container.querySelectorAll('.planet-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.background = 'rgba(0, 255, 242, 0.1)';
        item.style.color = '#fff';
      });
      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
          item.style.background = 'transparent';
          item.style.color = 'rgba(255,255,255,0.8)';
        }
      });

      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const planet = this.planets.find(p => p.id === id);
        this.onSelect(planet);
        
        // Highlight active
        this.container.querySelectorAll('.planet-item').forEach(i => {
          i.classList.remove('active');
          i.style.background = 'transparent';
          i.style.boxShadow = 'none';
        });
        item.classList.add('active');
        item.style.background = 'rgba(0, 255, 242, 0.2)';
        item.style.boxShadow = 'inset 4px 0 0 var(--color-cyan)';
      });
    });

    const searchInput = document.getElementById('planet-search');
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      this.container.querySelectorAll('.planet-item').forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(term) ? 'flex' : 'none';
      });
    });
  }
}

