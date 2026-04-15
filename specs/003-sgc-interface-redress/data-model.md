# Data Model: SGC Interface Redress

The core data structures for planetary exploration and mission recording.

## Planet Entity

Represents a Gate address and its associated environmental data.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `id` | `String` | Unique address (7-chevron string) | Must match `[A-Z0-9-]{7}` |
| `name` | `String` | Canon or procedural name | Required |
| `status` | `Enum` | `UNKNOWN`, `SCOUTED`, `EXPLORED` | Default: `UNKNOWN` |
| `biome` | `String` | `Foresta`, `Deserto`, `Ghiaccio`, etc. | Null if `UNKNOWN` |
| `dangerLevel` | `Number` | 0-10 (0: Safe, 10: Fatal) | Required |
| `scannedAt` | `Date` | Timestamp of first scan (MALP) | Optional |
| `environment` | `Object` | Atmosphere, Temperature, etc. | Required |

---

## MissionReport (CR) Entity

Represents the results of a MALP scan or SG Team mission.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `id` | `UUID` | Unique report identifier | Required |
| `type` | `Enum` | `MALP`, `SG-TEAM` | Required |
| `planetId` | `String` | Reference to the explored planet | Required |
| `timestamp` | `Date` | When the mission occurred | Required |
| `narration` | `String` | Generated text summary | Required |
| `illustration` | `String` | Path to the static WebP asset | Required |
| `teamStatus` | `Enum` | `INTACT`, `WOUNDED`, `CASUALTIES` | Default: `INTACT` |
| `findings` | `List` | Key discoveries (e.g., "Ancient ruins") | Optional |

---

## State Transitions

### Planet Exploration Flow
1. **UNKNOWN**: Only address is known.
2. **SCOUTED**: MALP deployed. Biome, Danger, and Basic environment revealed. Illustration available.
3. **EXPLORED**: SG Team mission completed. Detailed report (CR) generated.

### Mission Life Cycle
1. **PENDING**: SG Team in transit (3-5s).
2. **COMPLETED**: Narrative resolution calculated and stored in `localStorage`.
3. **ARCHIVED**: Record accessible via SGC Terminal history.
