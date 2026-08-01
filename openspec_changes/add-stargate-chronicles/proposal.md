# Change: add-stargate-chronicles

Location: openspec_changes\add-stargate-chronicles

Summary

Stargate: Chronicles — a hybrid Management / RPG / Strategy (4X + Tactics) game. This change captures the initial game proposal from IDEE.md: vision, target platform (PC, mid-range), core loop (60% strategy/40% tactical), and high-level features (SGC command, SG-Prime squad, resource economy, research/retro-engineering, spatial combat and fleet management, political meters and Nemesis system).

Motivation

Provide a single canonical design proposal to bootstrap development: clear MVP scope, tech choices, and implementation tasks so the project can move from idea to implementation.

Scope (MVP)

- Strategic layer: Operation calendar, resource nodes, research tree backbone.
- Tactical layer: RTwP (real-time with pause) squad combat on isometric maps with RPG stats.
- Squad management: roster, leveling, traits, classes (Tactician, Scientist, Engineer, Medic).
- Resource model: Naquadah + two extras, passive/active extraction, simple structures.
- Proto research: capture-and-analyze pipeline for Ancient artifacts.
- UI shells for SGC vs alien terminals; minimal art (low-poly) & placeholders.

Non-goals (MVP)

- Full FPS possession mode (defer as optional feature).
- Advanced shaders or heavy physics.
- Full campaign scripting — sandbox mode only.

Acceptance criteria

- Proposal, design and tasks files created in the change folder.
- Clear, actionable task list enabling starting a prototype repository (tech choice & skeleton).

---

Created from IDEE.md (brainstorm). This document is exploratory — not a formal spec.