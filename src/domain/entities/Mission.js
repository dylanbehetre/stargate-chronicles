export class Mission {
  constructor({
    id,
    planetId,
    team = 'SG-1',
    timestamp = Date.now(),
    type = 'exploration'
  }) {
    this.id = id;
    this.planetId = planetId;
    this.team = team;
    this.timestamp = timestamp;
    this.type = type;
  }
}

export class MissionReport {
  constructor({
    missionId,
    planetName,
    summary,
    debrief,
    teamStatus = 'active',
    resourcesFound = []
  }) {
    this.missionId = missionId;
    this.planetName = planetName;
    this.summary = summary;
    this.debrief = debrief;
    this.teamStatus = teamStatus;
    this.resourcesFound = resourcesFound;
  }
}
