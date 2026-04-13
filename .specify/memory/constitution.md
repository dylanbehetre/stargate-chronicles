<!-- 
Sync Impact Report:
- Version change: 0.0.0 (Template) → 1.0.0
- Modified principles:
  1. I. Spec-Driven Development
  2. II. Stargate Canon Fidelity & AI Utilization
  3. III. MVP First (Iterative Complexity)
  4. IV. Clean, Decoupled Architecture
  5. V. Fan Work Ethics & Compliance
- Added sections:
  - Game Design & Gameplay Balance
  - Technical & Testing Standards
- Removed sections: N/A
- Templates requiring updates: 
  ✅ plan-template.md (verified)
  ✅ spec-template.md (verified)
  ✅ tasks-template.md (verified)
- Follow-up TODOs: N/A
-->
# Stargate - Legacy (Fan Game) Constitution
<!-- Core Constitution for the Stargate - Legacy AI development project -->

## Core Principles

### I. Spec-Driven Development
Every new feature, architecture change, or major refactor MUST follow the Spec-Driven Development process via Spec Kit. No code is written before a specification and implementation plan are established and approved by the user.

### II. Stargate Canon Fidelity & AI Utilization
The project serves as a love letter to the franchise while exploring AI-driven game development. Core lore MUST be strictly respected (utilizing the Stargate Specialist skill when in doubt), while acknowledging the game relies heavily on exploratory AI collaboration (Antigravity).

### III. MVP First (Iterative Complexity)
Development MUST follow the phases outlined in IDEE.md. We prioritize core functional loops (management, UI flow, auto-resolving combat) over visually complex tactical layers until the logic foundation is proven and robust.

### IV. Clean, Decoupled Architecture
Game rules and domain logic MUST remain entirely independent from the presentation layer (UI) and the overarching engine framework. This ensures the domain is perfectly testable in pure code (e.g., standard Java 21) without having to launch the graphical engine.

### V. Fan Work Ethics & Compliance
Stargate - Legacy is a strictly non-profit fan-game project under the CC BY-NC 4.0 license. It MUST NOT include any form of monetization and must respect the intellectual property of MGM/Amazon.

## Game Design & Gameplay Balance

The gameplay loop is balanced around 60% macro-management (SGC, diplomacy, R&D) and 40% tactical ground operations. Tactical combat emphasizes Real-Time with Pause (RTwP) squad control. All AI-driven design adjustments must refer back to `IDEE.md`.

## Technical & Testing Standards

- Logic changes must be strictly validated through test specifications (TDD is highly encouraged for domain logic).
- Changes affecting Game Design must refer back to and potentially update `IDEE.md` if the vision mutates after user approval.
- Stargate Specialist skill MUST be used for verifying coordinates, character names, and lore elements.

## Governance

This constitution supersedes all other documentation. The AI agent (Antigravity) and the user must consult it before architectural decisions or spec generations. Any amendment to these principles requires a semantic version bump and an update to this document via the `speckit-constitution` workflow.

**Version**: 1.0.0 | **Ratified**: 2026-04-13 | **Last Amended**: 2026-04-13
