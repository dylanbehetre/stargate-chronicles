import { Mission, MissionReport } from '../entities/Mission.js';
import { ExplorationStatus } from '../entities/Planet.js';

/**
 * Service handling SG Team deployments and mission lifecycle.
 */
export class SGTeamService {
  constructor(state, narrativeEngine) {
    this.state = state;
    this.narrativeEngine = narrativeEngine;
  }

  /**
   * Deploy an SG team to the locked destination.
   * @returns {MissionReport|null}
   */
  deploy() {
    const dest = this.state.lockedDestination;
    
    if (!dest || !this.state.isGateActive) {
      return null;
    }

    const missionId = `M-${Date.now()}`;
    const mission = new Mission({ id: missionId, planetId: dest.id });
    
    // Danger Logic: If not scouted and danger is High/Extreme, risk of status 'MIAs'
    let teamStatus = 'active';
    if (dest.status !== ExplorationStatus.SCOUTED) {
      if (dest.danger === 'high' || dest.danger === 'extreme') {
        if (Math.random() > 0.5) teamStatus = 'MIA';
      }
    }

    const reportContent = this.narrativeEngine.generateReport(dest);
    
    const report = new MissionReport({
      missionId,
      planetName: dest.name,
      summary: reportContent.summary,
      debrief: teamStatus === 'MIA' ? "CONTACT PERDU AVEC L'ÉQUIPE APRÈS LA TRAVERSÉE." : reportContent.debrief,
      teamStatus
    });

    // Update planet status
    dest.status = ExplorationStatus.EXPLORED;
    
    // Save to history
    this.state.history.push(report);
    
    return report;
  }
}
