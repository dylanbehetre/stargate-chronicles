# Research: SGC Interface Redress & Service Repair

This research phase defines the visual and technical guidelines for transforming the SGC interface and repairing the core logic services.

## Visual Systems (Anime-Style Redress)

### Decisions

1. **Color Palette (Anime SF)**: 
   - Primary BG: `#0a192f` (Deep space navy)
   - Primary Accent: `#00fff2` (Cyber Cyan / Gate Horizon)
   - Secondary Accent: `#ffaa00` (Cyber Amber / Warning/Warning)
   - Neutral UI: `rgba(255, 255, 255, 0.15)` for translucent glass effects.
2. **Glassmorphism Strategy**: Use `backdrop-filter: blur(12px)` with thin `1px solid rgba(255, 255, 255, 0.2)` borders. Add a `linear-gradient` top-down with 5% opacity to simulate glass shine.
3. **Typography**: Replace terminal fonts with **`Eurostile`** (for headers) and **`Rajdhani`** (for interactive elements) to maintain a military-tech feel compatible with anime aesthetics.
4. **Glow Effects**: Use `box-shadow: 0 0 10px var(--cyan-glow)` and `filter: drop-shadow(...)` for vector-like frames and icons.

### Rationale
Anime SF (e.g., *Ghost in the Shell*, *Evangelion*, *Macross*) favors high contrast, vibrant glows, and clean vector shapes over the gritty scanlines of retro-CRT terminals. This shift addresses the user's primary rejection of the current "terminal monochrome" style.

---

## Domain Service Repairs (Logic Repair)

### Decisions

1. **Planet Factory (FR-004)**: Move biome/danger generation logic from `Planet` entity constructor to a `PlanetService` or `PlanetFactory`. The first MALP scan or SG team deployment will trigger the "discovery" phase, populating the planet with static data if it's currently "UNKNOWN".
2. **Mission Outcome Engine**: Implement a probability-based model in `SGTeamService` that considers planet danger level. 
   - Outcomes: SUCCESS (all alive), PARTIAL (wounded), TRAGIC (casualties).
3. **Narrative Engine Templates (FR-006)**: Update templates to include slot placeholders for:
   - `{biome}`: Environmental description.
   - `{health_status}`: Formatted text based on team condition.
   - `{moment_illustration}`: Key for mapping to a static WebP asset.

### Alternatives considered
- **Backend procedural generation**: Rejected. Pre-defined static templates and assets provide better visual consistency and lower complexity for MVP.
- **Real-time mission duration**: Rejected for now. Use a simulated delay (3-5s) with a loading state/animation to fulfill FR-009 without complex state management.

---

## Technical Feasibility

1. **Vanilla CSS Glassmorphism**: High-performance on modern browsers. Requires `backdrop-filter` support. Fallback will be high-opacity fills.
2. **Asset Management**: Biome and mission illustrations will be stored in `assets/illustrations/` and mapped via JSON in `src/data/`.

---

## Resolved NEEDS CLARIFICATION

- **Static vs Procedural Illustrations**: All illustrations will be static assets carefully chosen to match the biome/moment type. No real-time AI generation during gameplay (pre-rendered assets).
- **Service Imports**: Build errors will be resolved by strictly following Clean Architecture paths and ensuring all entities are exported before service consumption.
