/**
 * UI Component for displaying planet details.
 */
export class PlanetInfoPanel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  update(planet) {
    if (!planet) {
      this.container.innerHTML = 'Sélectionnez une destination.';
      return;
    }

    const isScouted = planet.status !== 'unexplored';
    
    this.container.innerHTML = `
      <div class="planet-detail" style="animation: flicker 0.2s 1;">
        <h3 style="color: var(--terminal-amber); text-shadow: 0 0 5px var(--terminal-amber);">${planet.name.toUpperCase()}</h3>
        
        <div class="biome-preview" style="width: 100%; height: 150px; background: #000; border: 1px solid var(--glass-border); margin: 10px 0; overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative;">
          ${isScouted ? `<img src="./src/ui/assets/biomes/${planet.biome}.webp" style="width: 100%; height: 100%; object-fit: cover;">` : '<div style="color: var(--terminal-red); font-size: 0.8rem;">[DONNÉES VISUELLES INDISPONIBLES]</div>'}
          <div class="overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background: repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px); pointer-events: none;"></div>
        </div>

        <p style="margin: 10px 0; font-size: 0.9rem; line-height: 1.4; color: #aaa;">
          ${planet.description}
        </p>
        
        <div class="stats" style="${isScouted ? '' : 'filter: blur(4px); opacity: 0.5; pointer-events: none;'}">
          <div class="stat-row" style="display: flex; justify-content: space-between; margin-top: 10px; border-top: 1px solid var(--glass-border); padding-top: 5px;">
            <span>BIOME:</span>
            <span style="color: var(--terminal-green);">${planet.biome.toUpperCase()}</span>
          </div>
          <div class="stat-row" style="display: flex; justify-content: space-between; margin-top: 5px;">
            <span>DANGER:</span>
            <span style="color: ${this.getDangerColor(planet.danger)};">${planet.danger.toUpperCase()}</span>
          </div>
        </div>

        <div class="stat-row" style="display: flex; justify-content: space-between; margin-top: 5px;">
          <span>STATUT:</span>
          <span style="color: var(--terminal-green);">${planet.status.toUpperCase()}</span>
        </div>
        
        <div class="actions" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
          <button id="btn-lock-gate" style="width: 100%;">ÉTABLIR VORTEX</button>
          ${!isScouted ? '<button id="btn-deploy-malp" class="warning" style="width: 100%;">ENVOYER MALP</button>' : ''}
          ${isScouted ? '<button id="btn-deploy-sg" style="width: 100%; background: var(--terminal-green); color: black;">DÉPLOYER ÉQUIPE SG</button>' : ''}
        </div>
      </div>
    `;
    
    // Event will be handled by parent or passed via callback
  }

  getDangerColor(level) {
    switch(level) {
      case 'none': return 'var(--terminal-green)';
      case 'low': return '#99ff33';
      case 'moderate': return 'var(--terminal-amber)';
      case 'high': return '#ff6600';
      case 'extreme': return 'var(--terminal-red)';
      default: return '#fff';
    }
  }
}
