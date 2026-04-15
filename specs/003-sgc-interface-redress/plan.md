# Implementation Plan: 003-sgc-interface-redress

**Branch**: `003-sgc-interface-redress` | **Date**: 2026-04-15 | **Spec**: [spec.md](file:///C:/workspace/github/stargate-command/specs/003-sgc-interface-redress/spec.md)
**Input**: Feature specification for "SGC Interface Redress (Anime-Style)"

## Summary

This feature aims to overhaul the existing terminal-style interface into a vibrant, modern "anime-style" UI using glassmorphism, glowing effects, and a cyanide/amber palette. Simultaneously, it fixes the broken/incomplete domain services for planetary exploration (MALP), mission resolution (SG Teams), and narrative report generation (CR).

## Technical Context

**Language/Version**: JavaScript (ES2023 Modules)
**Primary Dependencies**: Vite 6.x, Vitest 2.x, Capacitor.js (Phase 1 encapsulation)
**Storage**: `localStorage` via `IStorageRepository` implementation
**Testing**: Vitest 2.x (Domain logic focus)
**Target Platform**: Web (Responsive) / Mobile (Capacitor)
**Project Type**: Web application (Vanilla JS/CSS)
**Performance Goals**: 60 fps animations, smooth glassmorphism transitions
**Constraints**: Pure Clean Architecture (no DOM in `domain/`), Vanilla CSS3 (no Tailwind), offline-first
**Scale/Scope**: Redress of UI and 3 core services (MALP, SGTeam, Narrative)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Optimization/Justification |
|-----------|--------|----------------------------|
| I. Spec-Driven Development | PASS | Plan being established before implementation. |
| II. Stargate Canon Fidelity | PASS | Using SGC themes and military jargon (CR, MALP). |
| III. MVP First | PASS | Focusing on the core loop: Scan -> Deploy -> Report. |
| IV. Clean Architecture | PASS | Logic in `domain/`, UI in `ui/`. |
| V. Fan Work Ethics | PASS | Non-monetized fan project. |

## Project Structure

### Documentation (this feature)

```text
specs/003-sgc-interface-redress/
├── spec.md              # Requirements and User Stories
├── plan.md              # This file
├── research.md          # Visual tokens and service repair patterns
├── data-model.md        # Planet and MissionReport entities
├── quickstart.md        # Setup for the new anime-style UI
├── contracts/           # UI Event and Service contracts
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)

```text
src/
├── domain/
│   ├── entities/        # Planet.js, MissionReport.js
│   ├── services/        # MALPService.js, SGTeamService.js, NarrativeEngine.js
│   └── repositories/    # IStorageRepository.js
├── infrastructure/
│   └── LocalStorageRepository.js
├── ui/
│   ├── components/      # GlassPanel.js, GateDialer.js, MissionMonitor.js
│   └── animations/      # GlowEffects.css, Transitions.js
├── data/
│   ├── biomes/          # JSON mapping biomes to WebP assets
│   └── templates/       # Narrative CR templates
└── styles/
    ├── theme-anime.css  # Main color palette and glassmorphism
    └── main.css         # Reset and base layout
```

**Structure Decision**: Standard Clean Architecture structure as defined in the constitution, with a focus on splitting `ui/` into functional components and modular CSS for the new theme.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
