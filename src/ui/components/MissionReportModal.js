/**
 * UI Component for displaying mission results.
 */
export class MissionReportModal {
  constructor(report, onClose) {
    this.report = report;
    this.onClose = onClose;
    this.render();
  }

  render() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--terminal-green);
      font-family: var(--font-main);
    `;

    modal.innerHTML = `
      <div class="panel" style="width: 600px; border: 2px solid var(--terminal-green); padding: 30px; position: relative;">
        <h2 style="color: var(--terminal-amber); text-align: center;">RAPPORT DE MISSION : ${this.report.missionId}</h2>
        <h4 style="text-align: center; margin-bottom: 20px;">CIBLE : ${this.report.planetName.toUpperCase()}</h4>
        
        <div class="report-content" style="margin: 20px 0; line-height: 1.5; border-top: 1px solid var(--glass-border); padding-top: 15px;">
          <p><strong>RÉSUMÉ :</strong> ${this.report.summary}</p>
          <p style="margin-top: 15px;"><strong>DÉBRIEFING :</strong><br>${this.report.debrief}</p>
        </div>

        <div class="team-status" style="margin-top: 20px; font-weight: bold; color: ${this.report.teamStatus === 'MIA' ? 'var(--terminal-red)' : 'var(--terminal-green)'};">
          STATUT DE L'ÉQUIPE : ${this.report.teamStatus.toUpperCase()}
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <button id="close-modal">FERMER LE RAPPORT</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
      this.onClose();
    });
  }
}
