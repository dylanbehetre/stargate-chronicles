import { MissionReport, MissionType, TeamStatus } from '../entities/MissionReport.js';
import { ExplorationStatus } from '../entities/Planet.js';
import { NarrativeEngine } from './NarrativeEngine.js';
import { AssetMapper } from '../../ui/utils/AssetMapper.js'; // Note: UI import in domain (CA Violation warning!)

/**
 * Service handling SG Team deployments.
 * NOTE: UI imports (AssetMapper) are usually avoided in domain. 
 * We will return keys instead of paths to maintain purity if needed, 
 * but following the task specifically for now.
 */
export class SGTeamService {
  constructor(state, storage) {
    this.state = state;
    this.storage = storage;
    this.MISSION_DELAY_MS = 5000;
  }

  /**
   * Deploy an SG team.
   * @returns {Promise<MissionReport|null>}
   */
  async deploy() {
    const dest = this.state.lockedDestination;
    
    if (!dest || !this.state.isGateActive) {
      return null;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        // Calculate Outcome
        const teamStatus = this._calculateOutcome(dest.dangerLevel);
        const narration = NarrativeEngine.generateReport(dest, teamStatus);
        
        // Map Illustration based on outcome or discovery
        const illustration = AssetMapper.getMomentIllustration(this._mapStatusToMoment(teamStatus));

        const report = new MissionReport({
          id: `RPT-${Date.now()}`,
          type: MissionType.SG_TEAM,
          planetId: dest.id,
          timestamp: new Date(),
          narration,
          illustration,
          teamStatus,
          findings: ['Ancient Artifact', 'Local Alliance'] // Mock findings
        });

        // Update Planet Status
        dest.status = ExplorationStatus.EXPLORED;
        
        // Persist
        this.storage.save(`report_${report.id}`, report);
        this.storage.save(`planet_${dest.id}`, dest);
        
        // Update state history
        this.state.history.push(report);
        
        resolve(report);
      }, this.MISSION_DELAY_MS);
    });
  }

  _calculateOutcome(dangerLevel) {
    const roll = Math.random() * 10;
    if (roll < dangerLevel - 2) return TeamStatus.CASUALTIES;
    if (roll < dangerLevel) return TeamStatus.WOUNDED;
    return TeamStatus.INTACT;
  }

  _mapStatusToMoment(status) {
    if (status === TeamStatus.CASUALTIES) return 'TRAGIC';
    if (status === TeamStatus.WOUNDED) return 'PARTIAL';
    return 'SUCCESS';
  }
}
