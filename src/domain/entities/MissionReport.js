export const ReportType = Object.freeze({
  MALP: 'MALP',
  SG_TEAM: 'SG-TEAM'
});

export const TeamCondition = Object.freeze({
  INTACT: 'INTACT',
  WOUNDED: 'WOUNDED',
  CASUALTIES: 'CASUALTIES'
});

export class MissionReport {
  /**
   * @param {Object} data
   * @param {string} data.id - UUID
   * @param {string} data.type - ReportType
   * @param {string} data.planetId
   * @param {string} data.narration
   * @param {string} data.illustration
   * @param {string} [data.teamStatus] - TeamCondition
   * @param {Array<string>} [data.findings]
   * @param {Date} [data.timestamp]
   */
  constructor({ id, type, planetId, narration, illustration, teamStatus = TeamCondition.INTACT, findings = [], timestamp = new Date() }) {
    this.id = id;
    this.type = type;
    this.planetId = planetId;
    this.narration = narration;
    this.illustration = illustration;
    this.teamStatus = teamStatus;
    this.findings = findings;
    this.timestamp = timestamp;
  }
}
