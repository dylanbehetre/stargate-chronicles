# Tasks: SGC Interface Redress (Anime-Style)

**Input**: Design documents from `specs/003-sgc-interface-redress/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `- [ ] [ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project folders: `src/ui/components`, `src/ui/animations`, `src/data/biomes`, `src/data/templates`, `src/styles`
- [ ] T002 [P] Initialize `src/data/biomes/mapping.json` with biome-to-WebP asset references from research.md
- [ ] T003 [P] Create `src/styles/theme-anime.css` with the Anime SF palette (Cyan `#00fff2`, Amber `#ffaa00`, Navy `#0a192f`)
- [ ] T004 [P] Setup base `src/styles/main.css` for layout and global typography (Eurostile/Rajdhani)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core logic and entities that must exist before UI or functional implementation

- [ ] T005 [P] Create `src/domain/entities/Planet.js` with exploration status and biome properties
- [ ] T006 [P] Create `src/domain/entities/MissionReport.js` for MALP and SG Team results
- [ ] T007 Define `IStorageRepository` interface in `src/domain/repositories/IStorageRepository.js`
- [ ] T008 Implement `LocalStorageRepository` in `src/infrastructure/LocalStorageRepository.js`
- [ ] T009 [P] Create `src/domain/services/PlanetFactory.js` for procedural biome and danger level generation

**Checkpoint**: Core domain and storage infrastructure ready.

---

## Phase 3: User Story 1 - Modern Anime Interface (Priority: P1) 🎯 MVP

**Goal**: Transform the terminal UI into a vibrant, glassmorphic anime-style interface.

**Independent Test**: Load the app and verify the absence of CRT scanlines, replaced by glowing cyan borders and translucent panels.

- [ ] T010 [P] [US1] Implement `src/ui/components/GlassPanel.js` utility for translucent background effects
- [ ] T011 [US1] Update `src/styles/main.css` to apply glassmorphism and remove all monochrome terminal styling
- [ ] T012 [P] [US1] Build `src/ui/animations/GlowEffects.css` for interactive button halos and border pulses
- [ ] T013 [US1] Redress `src/ui/components/GateDialer.js` layout and typography to match the anime SF aesthetic

**Checkpoint**: UI visual overhaul complete.

---

## Phase 4: User Story 2 - Exploration via MALP (Priority: P1)

**Goal**: Deploy MALPs to discover planetary biomes and view high-quality anime illustrations.

**Independent Test**: Dial a valid address, click "DEPLOIER MALP", and confirm the planet biome and image appear after 3s.

- [ ] T014 [P] [US2] Create unit tests for `MALPService` in `tests/domain/services/MALPService.test.js`
- [ ] T015 [US2] Implement `src/domain/services/MALPService.js` with 3-second simulation and PlanetFactory integration
- [ ] T016 [P] [US2] Implement `src/ui/utils/AssetMapper.js` to link biome names to WebP static assets
- [ ] T017 [US2] Update `src/ui/components/PlanetMonitor.js` to display biome data and illustrations

**Checkpoint**: Planetary discovery loop (MALP) functional.

---

## Phase 5: User Story 3 - SG Mission & Reports (Priority: P2)

**Goal**: Send SG teams on missions and receive detailed narrative reports with outcome-based illustrations.

**Independent Test**: Send SG-1 to a scanned planet and verify the Mission Report modal appears with a generated summary.

- [ ] T018 [P] [US3] Create unit tests for `SGTeamService` and `NarrativeEngine` in `tests/domain/services/`
- [ ] T019 [US3] Implement `src/domain/services/NarrativeEngine.js` using modular templates for mission summaries
- [ ] T020 [US3] Implement `src/domain/services/SGTeamService.js` with probability-based mission outcomes (5s duration)
- [ ] T021 [US3] Build `src/ui/components/MissionReportModal.js` with glassmorphic styling and narrative text rendering

**Checkpoint**: Full mission cycle (Scan -> Deploy -> Report) functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Persistence, final refinements, and cross-browser validation.

- [ ] T022 Implement `src/domain/services/StateService.js` to coordinate auto-save/restore across all services
- [ ] T023 Perform a dedicated visual audit for glow consistency on mobile/responsive viewports
- [ ] T024 [P] Run final test suite with `npm run test` to validate all repaired domain logic
- [ ] T025 Cross-reference implementation with quickstart.md and resolve any UX friction

---

## Dependencies & Execution Order

### Phase Dependencies
- **Phase 1 & 2**: Parallel setup. BLOCKS all functional implementation.
- **Phase 3**: Depends on Phase 1 & 2. (Visual base for US1).
- **Phase 4**: Depends on Phase 2. Can run in parallel with Phase 3 styling.
- **Phase 5**: Depends on Phase 4 (requires scanned planets).
- **Phase 6**: Depends on all functional phases.

### Parallel Opportunities
- All [P] tasks can run concurrently.
- User Story 1 (UI) and User Story 2 (MALP Logic) can proceed in parallel once Foundation (Phase 2) is ready.

---

## Implementation Strategy

### MVP First
1. Complete **Phase 1 & 2**.
2. Complete **Phase 3** (Anime UI Look & Feel).
3. Complete **Phase 4** (MALP discovery loop).
4. Validate P1 deliverables (Anime UI + Planetary Scan).

### Incremental Delivery
- Feature is usable once Phase 4 is done.
- Phase 5 adds the "Management/RPG" layer with SG teams and narrative reports.
