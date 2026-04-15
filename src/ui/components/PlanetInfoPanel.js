/**
 * UI Component for displaying planet details.
 */
export class PlanetInfoPanel {
  constructor(containerId, symbols = []) {
    this.container = document.getElementById(containerId);
    this.symbols = symbols;
  }

  update(planet) {
    if (!planet) {
      this.container.innerHTML = `
        <div class="glass-panel" style="height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(0, 255, 242, 0.4); text-align: center; border-style: dashed;">
          <div>
            <div style="font-size: 2rem; margin-bottom: 10px;">⚡</div>
            SIGNALEZ UNE DESTINATION POUR LANCER LA TÉLÉMÉTRIE
          </div>
        </div>
      `;
      return;
    }

    const isExplored = planet.status === 'EXPLORED';
    const isScouted = planet.status === 'SCOUTED' || isExplored;
    
    // Address symbols
    const addressHtml = planet.address && planet.address.length > 0 
      ? planet.address.map(id => {
          const sym = this.symbols.find(s => s.id === id);
          return `<span class="address-symbol" title="${sym ? sym.name : ''}" style="color: var(--color-cyan); font-size: 1.5rem; margin: 0 5px; text-shadow: 0 0 10px var(--color-cyan);">${sym ? sym.symbol : '?'}</span>`;
        }).join('')
      : '<span style="color: var(--color-amber);">COORDONNÉES REQUISES</span>';

    this.container.innerHTML = `
      <div class="planet-detail transition-smooth" style="animation: slideInRight 0.4s ease-out; height: 100%; display: flex; flex-direction: column;">
        
        <div class="monitor-header" style="margin-bottom: 20px;">
          <h3 style="color: var(--color-cyan); font-size: 1.6rem; margin: 0; text-shadow: var(--glow-cyan); letter-spacing: 2px;">${planet.name.toUpperCase()}</h3>
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: rgba(255,255,255,0.4); font-family: monospace; margin-top: 5px;">
            <span>SYSTEM_UID: ${planet.id}</span>
            <span style="color: ${isExplored ? '#00ffaa' : 'var(--color-amber)'}">STATUS: ${planet.status}</span>
          </div>
        </div>

        <div class="address-band glass-panel" style="padding: 15px; margin-bottom: 20px; background: rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; border-color: rgba(0, 255, 242, 0.3);">
           <div style="font-size: 0.6rem; color: var(--color-cyan); margin-bottom: 8px; letter-spacing: 2px;">VECTEUR DE NUMÉROTATION</div>
           <div style="display: flex; justify-content: center;">${addressHtml}</div>
        </div>

        <div class="visual-feed glass-panel" style="flex: 1; min-height: 200px; background: #000; position: relative; overflow: hidden; border-radius: 4px; border: 1px solid rgba(0, 255, 242, 0.1);">
          ${isScouted && planet.biome ? `<img src="./src/ui/assets/biomes/${planet.biome.toLowerCase()}.webp" style="width: 100%; height: 100%; object-fit: cover; animation: subtleZoom 20s infinite alternate;">` : 
            '<div style="height: 100%; display: flex; align-items: center; justify-content: center; color: var(--color-amber); font-family: var(--font-ui); text-align: center; font-size: 0.8rem; letter-spacing: 1px;">[ SIGNAL VIDÉO INDISPONIBLE ]<br>DÉPLOYEZ UNE SONDE MALP</div>'}
          <div class="scanline" style="position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; background: linear-gradient(to bottom, transparent 50%, rgba(0,255,242,0.05) 50%); background-size: 100% 4px;"></div>
          <div style="position: absolute; top: 10px; right: 10px; color: var(--color-cyan); font-size: 0.6rem; font-family: monospace; background: rgba(0,0,0,0.5); padding: 2px 5px;">LIVE_FEED_REC</div>
        </div>

        <div class="intel-briefing" style="margin: 20px 0; padding: 15px; background: rgba(0, 255, 242, 0.05); border-left: 3px solid var(--color-cyan);">
           <h4 style="font-size: 0.7rem; color: var(--color-cyan); margin-bottom: 8px; letter-spacing: 1px;">RENSEIGNEMENTS TERRAIN</h4>
           <p style="font-family: var(--font-narrative); font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.9); margin: 0;">
             ${planet.description || 'Les données de surface sont incomplètes. Une reconnaissance par probe robotisée est impérative avant tout déploiement humain.'}
           </p>
        </div>

        <div class="planetary-specs" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; ${isScouted ? '' : 'filter: blur(5px); pointer-events: none;'}">
          <div class="spec-box" style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2);">
             <div style="font-size: 0.6rem; color: rgba(255,255,255,0.4); margin-bottom: 4px;">ÉCOSYSTÈME</div>
             <div style="color: var(--color-cyan); font-weight: bold; font-family: var(--font-ui);">${(planet.biome || 'N/A').toUpperCase()}</div>
          </div>
          <div class="spec-box" style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2);">
             <div style="font-size: 0.6rem; color: rgba(255,255,255,0.4); margin-bottom: 4px;">NIVEAU DE MENACE</div>
             <div style="color: ${this.getDangerColor(planet.dangerLevel)}; font-weight: bold; font-family: var(--font-ui);">${this.getDangerLabel(planet.dangerLevel)}</div>
          </div>
        </div>

        <div class="control-actions" style="display: flex; flex-direction: column; gap: 10px;">
          <button id="btn-lock-gate" class="glow-border-cyan" style="width: 100%; font-weight: bold; padding: 12px; background: rgba(0, 255, 242, 0.1);">ÉTABLIR VORTEX</button>
          <div style="display: flex; gap: 10px;">
            ${!isScouted ? '<button id="btn-deploy-malp" style="flex: 1; border-color: var(--color-amber); color: var(--color-amber); font-size: 0.8rem;">ENVOYER SONDE</button>' : ''}
            ${isScouted ? '<button id="btn-deploy-sg" class="glow-border-cyan" style="flex: 1; background: rgba(0, 255, 242, 0.2); font-weight: bold; font-size: 0.8rem;">DÉPLOYER SG-1</button>' : ''}
          </div>
        </div>

      </div>
    `;
  }



  getDangerColor(level) {
    if (level === 0) return 'var(--color-cyan)';
    if (level < 3) return '#00ffaa';
    if (level < 6) return 'var(--color-amber)';
    if (level < 9) return '#ff6600';
    return '#ff4444';
  }

  getDangerLabel(level) {
    if (level === 0) return 'NUL';
    if (level < 3) return 'FAIBLE';
    if (level < 6) return 'MODÉRÉ';
    if (level < 9) return 'ÉLEVÉ';
    return 'CRITIQUE';
  }
}

