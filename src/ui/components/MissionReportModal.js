import { createGlassPanel } from './GlassPanel.js';

/**
 * UI Component for displaying mission results (CR).
 */
export class MissionReportModal {
  constructor(report, onDismiss) {
    this.report = report;
    this.onDismiss = onDismiss;
    this.element = null;
    this.show();
  }

  show() {
    const report = this.report;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay transition-smooth';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(5, 10, 20, 0.9); backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center; z-index: 1000;
      animation: fadeIn 0.3s ease-out;
    `;

    const panel = createGlassPanel({
      id: `report-${report.id}`,
      title: `RAPPORT DE MISSION : ${report.type}`,
      className: 'glow-border-amber'
    });
    panel.style.width = '650px';
    panel.style.maxHeight = '90vh';
    panel.style.overflowY = 'auto';

    const body = panel.querySelector('.panel-body');
    body.innerHTML = `
      <div class="report-content" style="padding: 10px;">
        <div class="report-header" style="display: flex; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(0,255,242,0.2); padding-bottom: 12px;">
          <span style="font-family: var(--font-header); color: var(--color-cyan); font-weight: bold; letter-spacing: 1px;">ZONE: ${report.planetId}</span>
          <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4); font-family: monospace;">STAMP: ${new Date(report.timestamp).toLocaleString()}</span>
        </div>

        <div class="report-visual glass-panel" style="width: 100%; height: 280px; border: 1px solid rgba(255,170,0,0.3); overflow: hidden; margin-bottom: 25px; position: relative;">
          ${report.illustration ? `<img src="${report.illustration}" style="width: 100%; height: 100%; object-fit: cover; filter: sepia(0.2) contrast(1.1);">` : '<div style="background: #000; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--color-amber);">[DONNÉES VISUELLES SCANNEÉS]</div>'}
          <div class="scanline" style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to bottom, transparent 50%, rgba(255,170,0,0.03) 50%); background-size: 100% 4px; pointer-events: none;"></div>
        </div>

        <div class="report-narrative glass-panel" style="font-family: var(--font-narrative); line-height: 1.8; color: rgba(255,255,255,0.95); margin-bottom: 25px; font-size: 1.15rem; padding: 20px; background: rgba(0,0,0,0.3); border-left: 4px solid var(--color-amber);">
          ${report.narration}
        </div>

        <div class="report-status" style="margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 0.7rem; color: var(--color-amber); letter-spacing: 2px; text-transform: uppercase;">ÉTAT DE L\'UNITÉ</h4>
            <div style="font-family: var(--font-header); font-size: 1.4rem; color: ${this.getStatusColor(report.teamStatus)}; font-weight: bold;">
              ${report.teamStatus}
            </div>
          </div>
          <div style="text-align: right;">
             <h4 style="font-size: 0.7rem; color: var(--color-cyan); letter-spacing: 2px; text-transform: uppercase;">OBJECTIF</h4>
             <div style="font-family: var(--font-header); font-size: 1.4rem; color: var(--color-cyan); font-weight: bold;">COMPLÉTÉ</div>
          </div>
        </div>

        <button id="btn-close-report" class="glow-border-cyan" style="width: 100%; padding: 15px; font-weight: bold; font-size: 1rem;">ARCHIVER LE RAPPORT ET CLOTURER LA MISSION</button>
      </div>
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    overlay.querySelector('#btn-close-report').onclick = () => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (this.onDismiss) this.onDismiss();
      }, 300);
    };

    this.element = overlay;
  }

  getStatusColor(status) {
    if (status === 'INTACT') return '#00ffaa';
    if (status === 'WOUNDED') return 'var(--color-amber)';
    return '#ff4444';
  }
}

