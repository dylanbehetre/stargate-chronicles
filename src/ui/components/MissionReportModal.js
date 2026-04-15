import { createGlassPanel } from './GlassPanel.js';

/**
 * UI Component for displaying mission results (CR).
 */
export class MissionReportModal {
  constructor() {
    this.element = null;
  }

  show(report, onDismiss) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center; z-index: 1000;
    `;

    const panel = createGlassPanel({
      id: report.id,
      title: `MISSION REPORT: ${report.type}`,
      className: 'glow-border-amber'
    });
    panel.style.width = '600px';
    panel.style.maxHeight = '80vh';
    panel.style.overflowY = 'auto';

    const body = panel.querySelector('.panel-body');
    body.innerHTML = `
      <div class="report-content">
        <div class="report-header" style="display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid rgba(0,255,242,0.3); padding-bottom: 10px;">
          <span style="font-family: Eurostile; color: var(--color-cyan);">${report.planetId}</span>
          <span style="font-size: 0.8rem; opacity: 0.6;">${new Date(report.timestamp).toLocaleString()}</span>
        </div>

        <div class="report-visual" style="width: 100%; height: 250px; border: 1px solid var(--color-amber); overflow: hidden; margin-bottom: 20px;">
          <img src="${report.illustration}" style="width: 100%; height: 100%; object-fit: cover;">
          <div class="glass-grid" style="position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none;"></div>
        </div>

        <div class="report-narrative" style="font-family: var(--font-narrative); line-height: 1.6; color: #fff; margin-bottom: 20px; font-size: 1.1rem; padding: 15px; background: rgba(0,0,0,0.2); border-left: 3px solid var(--color-amber);">
          ${report.narration}
        </div>

        <div class="report-status" style="margin-bottom: 20px;">
          <h4 style="font-size: 0.8rem; color: var(--color-amber); margin-bottom: 5px;">UNIT STATUS</h4>
          <div style="font-family: Eurostile; font-size: 1.2rem; color: ${this.getStatusColor(report.teamStatus)};">
            ${report.teamStatus}
          </div>
        </div>

        <button id="btn-close-report" class="glow-border-cyan glow-interactive" style="width: 100%;">ACKNOWLEDGE & FILE</button>
      </div>
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    overlay.querySelector('#btn-close-report').onclick = () => {
      document.body.removeChild(overlay);
      if (onDismiss) onDismiss();
    };

    this.element = overlay;
  }

  getStatusColor(status) {
    if (status === 'INTACT') return '#00ff41';
    if (status === 'WOUNDED') return 'var(--color-amber)';
    return '#ff0000';
  }
}
