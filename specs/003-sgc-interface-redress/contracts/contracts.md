# UI Event Contracts: SGC Interface

Defines the events handled between components for the SGC Command Interface.

## Event Payloads

### `MISSION_DEPLOY` (From SG-Terminal to MissionControl)
- `planetId`: `String` (7-chevron address)
- `teamId`: `String` (e.g., "SG-1")
- `requiresMalp`: `Boolean` (True if pre-scan was recommended)

### `MISSION_COMPLETED` (From SGTeamService to UI)
- `reportId`: `UUID`
- `status`: `Enum` (SUCCESS, FAILURE)

### `GATE_DIAL_REQUEST` (From AddressPad to GateService)
- `glyphs`: `Array[String]` (7 coordinates)
- `autoLock`: `Boolean` (True if fast-dialing)

---

# Service API Contracts: Internal Logic

## MALPService Interface
- `deployMALP(planetId)`: `Promise<PlanetData>`
  - Resolves after 3s simulation.
  - Triggers planet property population.

## SGTeamService Interface
- `resolveMission(planetId, teamId)`: `Promise<MissionReport>`
  - Resolves after 5s simulation.
  - Considers planet danger level for outcome.
  - Saves result to `IStorageRepository`.

## NarrativeEngine Interface
- `generateCR(planet, outcome)`: `String` (Markdown-formatted)
- `getMomentIllustration(planet, outcome)`: `String` (Path to WebP)
