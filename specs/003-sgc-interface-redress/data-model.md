# Data Model: SGC Command Interface

## Entities

### Planet
Represents a destination in the Stargate network.
- `address`: `String[]` (7 symbols) - Primary key.
- `name`: `String` - Human readable name (e.g., Abydos).
- `biome`: `String` (Desert, Forest, Ice, Jungle, Ruins).
- `dangerLevel`: `String` (Safe, Moderate, High, Extreme).
- `status`: `String` (Unexplored, Scouted, Explored).
- `gateEnvironment`: `String` - Brief description of the immediate area.
- `hasMALP`: `Boolean` - Whether a MALP is currently active on site.

### Mission
An operation performed through the gate.
- `id`: `String` (UUID).
- `type`: `String` (MALP, SG_TEAM).
- `planetAddress`: `String[]`.
- `timestamp`: `Number` (Epoch).
- `report`: `MissionReport` - The result of the mission.

### MissionReport (CR)
The generated document after a mission completion.
- `text`: `String` - Narrative summary.
- `illustrationUrl`: `String` - Path to the anime moment image.
- `healthStatus`: `Object` - Status of the team members (if SG_TEAM).
- `discoveries`: `String[]` - List of items or info found.

### GameState
Global state maintained across sessions.
- `lockedAddress`: `String[] | null` - Current selection.
- `activeWormhole`: `Boolean`.
- `discoveredAddresses`: `String[]` - List of addresses known to the SGC.
- `history`: `Mission[]` - Global log of all missions.

## Relationships
- **Planet** has many **Missions**.
- **Mission** has one **MissionReport**.
- **GameState** tracks all **Planets** and **Missions**.
