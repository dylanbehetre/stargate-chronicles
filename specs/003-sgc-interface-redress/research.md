# Research: SGC Command Interface Redress (Anime-Style)

## Visual Research: Anime UI Aesthetic

### Goal
Transition from a 1980s monochrome terminal to a "high-end movie anime" aesthetic (e.g., *Psycho-Pass*, *Ghost in the Shell*, *Evangelion*).

### UI Tokens & Styles
- **Primary Color**: `#00e5ff` (Vibrant Cyan) for interactive elements and data glows.
- **Secondary Color**: `#ff9100` (Cyber Amber) for warnings and secondary readouts.
- **Background**: `#0a141a` (Deep Space Blue).
- **Panels**: Semi-transparent backgrounds (`rgba(10, 20, 26, 0.7)`) with `backdrop-filter: blur(10px)`.
- **Typography**: `Outfit` or `Inter` for general UI; `Share Tech Mono` limited to small data blocks.

### Asset requirements
- **Background Room**: Stylized anime-style SGC control room image.
- **Biomes**: Static anime illustrations with vibrant colors (High saturation).
- **Mission Moments**: "Moment" illustrations with grain and lighting effects to simulate a film frame.

## Technical Research: Service Fixes

### 1. Missing Services & 404s
- **Problem**: `main.js` imports `PlanetGeneratorService.js` and `PlanetDiscoveryService.js` which were not found on disk.
- **Decision**: Consolidate "discovery" logic into a `CosmosService`.
- **Rationale**: Reduces complexity and ensures all "planet-finding" logic is in one place.

### 2. Manual Dialing Logic
- **Problem**: Confusion over whether non-canon addresses should be dialable.
- **Decision**: Reject unknown addresses (échec d'activation) as per the original specification (FR-002c).
- **Rationale**: Ensures fidelity to the "MVP context" where only a fixed set of planets is available.

### 3. Mission Reports (CR)
- **Problem**: Missing narrations and illustrations in the current UI.
- **Decision**:
    - Use `NarrativeEngine` to pick a template based on `planet.danger` and `mission.type`.
    - Generate a `MissionReport` entity that stores the result and the moment illustration path.

### 4. Persistence
- **Decision**: Implement a `StorageService` wrapper around `LocalStorageRepository` to automatically save every time the `GameState` changes (Atomic updates).

## Decision Summary

| Topic | Decision | Rationale |
|-------|----------|-----------|
| **UI Style** | Modern Glassmorphism | Matches "anime-style" high-tech aesthetic better than flat designs. |
| **Color Palette** | Cyan / Amber / Dark Blue | Standard high-tech anime palette for readability and mood. |
| **Logic** | Static Address Validation | Adheres to FR-002c and restricts MVP scope to defined data. |
| **Architecture** | Service Consolidation | Fixes build errors and simplifies state management. |
