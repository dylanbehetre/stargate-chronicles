# Implementation Plan: SGC Command Interface

**Branch**: `feature/speckit_game_specs` | **Date**: 2026-04-14 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-sgc-command-interface/spec.md`

---

## Summary

Implémenter l'interface de commandement du SGC (Phase 1 MVP de Stargate - Legacy) : une application web permettant de sélectionner/composer des adresses de porte des étoiles, d'envoyer un MALP (reconnaissance) ou une équipe SG (mission auto-résolue), et de consulter les comptes rendus historisés. L'interface adopte une esthétique cohérente style anime japonais avec animations CSS pour les événements clés (ouverture porte, MALP, équipe SG).

L'approche technique est une application web statique (HTML5/CSS3/Vanilla JS via Vite) avec une architecture en couches propre (Domain / Infrastructure / UI) conforme à la Constitution IV, utilisant `localStorage` pour la persistance automatique.

---

## Technical Context

**Language/Version**: JavaScript (ES2023 Modules) — Vanilla JS sans framework
**Build Tool**: Vite 6.x (bundler rapide, modules ES natifs, zero-config)
**Styling**: Vanilla CSS3 (custom properties, keyframes, filters) — aucun framework CSS
**Storage**: `localStorage` (navigateur) via interface `IStorageRepository`
**Testing**: Vitest 2.x (unit tests pour le domaine, sans DOM)
**Target Platform**: Navigateur web moderne (Chrome/Firefox/Edge) sur PC — portage mobile via Capacitor.js envisageable
**Project Type**: Web application (single-page, statique, sans backend)
**Runtime**: Node.js 22 LTS (dev/build uniquement)
**Performance Goals**: Rendu initial <2s, animations à 60fps, localStorage sync <10ms
**Constraints**: Zéro dépendance réseau pour le MVP, offline-capable, <50MB assets inclus
**Scale/Scope**: ~200+ planètes canon initiales (intégralité du corpus identifié dans la franchise)
**Future (Phase 3+)**: Réévaluer migration vers **Godot 4** pour les phases impliquant la 3D tactique (RTwP Phase 7) et un meilleur support mobile natif

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| **I. Spec-Driven Development** | ✅ PASS | Spec + clarifications complètes avant tout code |
| **II. Stargate Canon Fidelity** | ✅ PASS | Données planètes tirées du canon (Stargate Specialist à consulter pour validation des adresses) |
| **III. MVP First** | ✅ PASS | Aligné Phase 1 IDEE.md : gestion porte, MALP, équipe SG, CR |
| **IV. Clean Architecture** | ✅ PASS | Domaine pur (services JS sans DOM), infrastructure (LocalStorage adapter), UI découplée |
| **V. Fan Work Ethics** | ✅ PASS | Projet non-commercial, CC BY-NC 4.0, aucun asset MGM embarqué |

*Re-check post-Phase 1 design* : Architecture en couches validée via `ui-contracts.md`, domaine testable sans DOM (Vitest). ✅ Aucune violation détectée.

---

## Project Structure

### Documentation (this feature)

```text
specs/001-sgc-command-interface/
├── spec.md              ✅ Complété
├── plan.md              ✅ Ce fichier
├── research.md          ✅ Complété (Phase 0)
├── data-model.md        ✅ Complété (Phase 1)
├── quickstart.md        ✅ Complété (Phase 1)
├── contracts/
│   └── ui-contracts.md  ✅ Complété (Phase 1)
├── checklists/
│   └── requirements.md  ✅ Validé
└── tasks.md             ⏳ À générer via /speckit.tasks
```

### Source Code (repository root)

```text
src/
├── domain/
│   ├── entities/
│   │   ├── Planet.js           # Entité Planet + enums BiomeType, DangerLevel, ExplorationStatus
│   │   ├── Mission.js          # Entité Mission + enum MissionType
│   │   ├── MissionReport.js    # Entité MissionReport + MissionDebrief, TeamStatus, Resource
│   │   └── GameState.js        # Racine de l'état global
│   ├── services/
│   │   ├── GateService.js      # IGateService — composition et validation adresses
│   │   ├── MALPService.js      # IMALPService — envoi MALP, profil biome
│   │   ├── SGTeamService.js    # ISGTeamService — envoi équipe, CR, historique
│   │   └── NarrativeEngine.js  # Génération des textes de CR par templates
│   └── repositories/
│       └── IStorageRepository.js  # Interface (contrat) de persistance
│
├── infrastructure/
│   └── LocalStorageRepository.js  # Implémente IStorageRepository via localStorage
│
├── data/
│   ├── planets.json            # Base de données planètes canoniques (~200+ entrées)
│   ├── narrative-templates.json # Templates narratifs pour les CR
│   └── gate-symbols.json       # Les 36 glyphes Stargate Voie Lactée
│
├── ui/
│   ├── components/
│   │   ├── PlanetListPanel.js  # Liste filtrable des planètes
│   │   ├── ManualDialingPanel.js # Composition 7 chevrons
│   │   ├── PlanetInfoPanel.js  # Panneau d'infos planète sélectionnée
│   │   ├── ActionPanel.js      # Boutons MALP / Équipe SG
│   │   ├── MissionReportModal.js # Modale CR complet
│   │   └── ConfirmModal.js     # Modale d'avertissement (envoi sans MALP)
│   ├── animations/
│   │   ├── GateAnimation.js    # Ouverture porte (rotation chevrons + vortex)
│   │   ├── MALPAnimation.js    # Animation envoi MALP
│   │   └── SGTeamAnimation.js  # Animation envoi équipe
│   └── assets/
│       ├── biomes/             # Images anime-style des biomes (PNG/WebP)
│       │   ├── desert.webp
│       │   ├── jungle.webp
│       │   └── ...
│       └── moments/            # Illustrations moments forts pour les CR
│           ├── ruins.webp
│           ├── mine.webp
│           └── ...
│
├── styles/
│   ├── main.css                # Variables design + reset
│   ├── sgc-theme.css           # Thème SGC (couleurs, terminaux CRT, scanlines)
│   ├── animations.css          # Toutes les keyframe animations
│   └── components.css          # Styles des composants UI
│
├── main.js                     # Point d'entrée + bootstrap de l'app
└── index.html                  # Shell HTML de l'application

tests/
├── domain/
│   ├── GateService.test.js
│   ├── MALPService.test.js
│   ├── SGTeamService.test.js
│   └── NarrativeEngine.test.js
└── infrastructure/
    └── LocalStorageRepository.test.js

public/                         # Assets statiques copiés tels quels par Vite
└── favicon.ico

vite.config.js
package.json
```

**Structure Decision**: Single project web application (Option 1). Pas de séparation frontend/backend nécessaire pour ce MVP statique. La couche domaine est en JS pur (sans DOM), ce qui garantit la testabilité conforme à la Constitution IV, et permet une migration vers Java 21 (backend Spring Boot) lors des phases futures (Phase 3+) si nécessaire.

---

## Complexity Tracking

*Aucune violation des gates de constitution détectée. Section vide.*
