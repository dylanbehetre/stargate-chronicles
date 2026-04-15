export const MissionType = Object.freeze({
  MALP: 'MALP',
  SG_TEAM: 'SG-TEAM'
});

export const TeamStatus = Object.freeze({
  INTACT: 'INTACT',
  WOUNDED: 'WOUNDED',
  CASUALTIES: 'CASUALTIES'
});

export class MissionReport {
  constructor({
    id,
    type,
    planetId,
    timestamp = new Date(),
    narration,
    illustration,
    teamStatus = TeamStatus.INTACT,
    findings = []
  }) {
    if (!id) throw new Error('MissionReport ID is required.');
    if (!planetId) throw new Error('Planet ID reference is required.');
    if (!narration) throw new Error('Narration text is required.');
    if (!illustration) throw new Error('Illustration path is required.');

    this.id = id;
    this.type = type;
    this.planetId = planetId;
    this.timestamp = timestamp;
    this.narration = narration;
    this.illustration = illustration;
    this.teamStatus = teamStatus;
    this.findings = findings;
  }
}
