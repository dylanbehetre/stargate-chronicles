Design overview — Stargate: Chronicles

1) High-level architecture

- Engine: Godot 4 (recommended) or Unity (C#) if preferred. Godot chosen for lightweight footprint and rapid prototyping.
- Layers:
  - Strategic Manager: calendar, faction state, global resource map, AI event generator.
  - Tactical Manager: RTwP combat scenes, squad positioning, RNG-backed attack resolution.
  - Fleet Manager: simple 3D/3D-lite tactical view for advanced phases.
  - Persistence: JSON or SQLite save system for prototype.

2) Core systems

- Calendar/Operations: discrete days/ticks drive research timers and expeditions. Pauses on critical events.
- Resource system: three resources (Naquadah, Trinium, EPPZ). Passive income via fleet deployments; active via planetary bases.
- Research/Retro-engineering: research tree split into Infantry, Infrastructure, Aerospace. Research requires captured artifacts and rare resources.
- RPG squad model:
  - Entities: Character {id, name, race, class, level, stats: {Combativité, Physiologie, Ingénierie, Ascendance}, traits}
  - Classes: Tactician, Scientist, Engineer, Medic
  - Races: Human, Jaffa, Tok'ra, Humans of Pegasus — each with passive traits.
- Combat: RTwP on isometric gridless or low-grid map. Orders queued during pause; on resume AI executes. RNG influenced by stats; optional possession/FPS bypasses RNG but is off for MVP.

3) Data-driven design

- Use scriptable or JSON-driven definitions for races, classes, weapons, items, research nodes and faction rules to enable fast tuning.

4) UI / Art direction

- Minimal, grounded UI. Two stylistic palettes: SGC (CRT green, utilitarian), Alien/Ancient (rich, ornate colors).
- Low-poly, stylized assets; placeholder tiles and icons for prototype.

5) Networking / scope

- Single-player only for MVP. No networking.

6) Tools & tech decisions

- Godot 4 (GDScript or C#) for rapid iteration and light runtime.
- Optional use of C# in Unity if user prefers existing pipelines.
- Source layout (prototype):
  - /game/strategic/
  - /game/tactical/
  - /game/common/
  - /data/definitions/
  - /art/placeholders/
  - /tools/editor-scripts/

7) Performance & optimization

- Prioritize combat logic and AI; keep visuals simple.
- Use multithreading for heavy simulation tasks if necessary (Godot jobs or background threads in engine of choice).

8) Risks & mitigations

- Scope creep: emphasize sandbox MVP and defer optional features (possession FPS, advanced shaders).
- AI complexity: start with simple state machines, iterate toward more advanced behavior.

---

Notes: follow IDEE.md constraints (do not copy IDEE.md blocks into shipped artifacts; use as inspiration).