import { AssetMapper } from '../utils/AssetMapper.js';
import { createGlassPanel } from './GlassPanel.js';

/**
 * UI Component for displaying planet monitor details in Anime style.
 */
export class PlanetMonitor {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  update(planet) {
    if (!planet) {
      this.container.innerHTML = '<div class="glass-panel" style="padding: 20px; color: var(--color-glass-border);">AWAITING DESTINATION DATA...</div>';
      return;
    }

    const isScouted = planet.status !== 'UNKNOWN';
    const illustration = isScouted ? AssetMapper.getBiomeIllustration(planet.biome) : '';
    const description = isScouted ? AssetMapper.getBiomeDescription(planet.biome) : 'SCAN REQUIRED TO DECRYPT PLANETARY CONDITIONS.';

    this.container.innerHTML = '';
    const panel = createGlassPanel({
      id: `monitor-${planet.id}`,
      title: `LOCATION: ${planet.name}`,
      className: 'glow-border-cyan'
    });

    const body = panel.querySelector('.panel-body');
    body.innerHTML = `
      <div class="planet-display">
        <div class="biome-visual" style="width: 100%; height: 180px; background: #000; border: 1px solid var(--color-cyan); overflow: hidden; position: relative; margin-bottom: 15px;">
          ${isScouted 
            ? `<img src="${illustration}" style="width: 100%; height: 100%; object-fit: cover; filter: contrast(1.1) brightness(1.1);">` 
            : '<div style="color: var(--color-amber); height: 100%; display: flex; align-items: center; justify-content: center; font-family: Eurostile; text-align: center; padding: 10px;">[ VISUAL FEED ENCRYPTED ]</div>'
          }
          <div class="glass-grid" style="position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none;"></div>
        </div>

        <p style="font-family: var(--font-ui); font-size: 0.9rem; line-height: 1.5; color: rgba(255,255,255,0.8); margin-bottom: 20px;">
          ${description}
        </p>

        <div class="status-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; ${isScouted ? '' : 'opacity: 0.3; filter: blur(2px);'}">
          <div style="border-left: 2px solid var(--color-cyan); padding-left: 8px;">
            <div style="font-size: 0.7rem; color: var(--color-cyan);">BIOME</div>
            <div style="font-family: Eurostile; font-size: 1.1rem;">${isScouted ? planet.biome.toUpperCase() : '---'}</div>
          </div>
          <div style="border-left: 2px solid ${this.getDangerColor(planet.dangerLevel)}; padding-left: 8px;">
            <div style="font-size: 0.7rem; color: ${this.getDangerColor(planet.dangerLevel)};">THREAT LVL</div>
            <div style="font-family: Eurostile; font-size: 1.1rem;">${isScouted ? planet.dangerLevel : '--'} / 10</div>
          </div>
        </div>

        <div class="monitor-actions" style="display: flex; flex-direction: column; gap: 10px;">
          ${!isScouted 
            ? '<button id="btn-deploy-malp" class="glow-border-cyan glow-interactive">DEPLOY MALP PROBE</button>' 
            : '<button id="btn-deploy-sg" class="glow-border-amber glow-interactive" style="color: var(--color-amber); border-color: var(--color-amber);">AUTHORIZE SG TEAM</button>'
          }
        </div>
      </div>
    `;

    this.container.appendChild(panel);
  }

  getDangerColor(level) {
    if (level < 3) return '#00ff00';
    if (level < 6) return 'var(--color-amber)';
    if (level < 9) return '#ff4400';
    return '#ff0000';
  }
}
