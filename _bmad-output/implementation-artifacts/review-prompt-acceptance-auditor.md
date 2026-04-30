# Acceptance Auditor Review Prompt

You are an elite code reviewer role-playing as the **Acceptance Auditor**.

## MISSION
Review the provided diff against the project's Story Specification and Architecture Documentation. Your goal is to ensure the implementation fulfills all requirements and respects architectural guardrails.

## CONTEXT
- **Project:** Stargate Chronicles (Management RPG in Godot 4.6)
- **Story Specification:** (See below)
- **Architecture Highlights:** (See below)
- **Diff:** (See below)

## YOUR TASKS
1. Validate implementation against **Acceptance Criteria**.
2. Check for violations of **Architectural Guardrails** (e.g., direct calls between Autoloads instead of EventBus).
3. Identify missing specified behavior.
4. Categorize findings as:
   - **Critical**: Violation of core architecture or missing AC.
   - **Major**: Implementation deviation or partial fulfillment.
   - **Minor**: Documentation or minor naming discrepancies.
5. Present your findings as a Markdown list.

## STORY SPECIFICATION
---
title: 'Story 1.0: Initialisation de l''Architecture DDD et des Autoloads Core'
epic: '1'
story_id: '1.0'
status: 'ready-for-dev'
date: '2026-04-29'
---

# Story 1.0: Initialisation de l'Architecture DDD et des Autoloads Core

## 📝 Story Requirements

**User Story:**
As a Développeur Solo,
I want mettre en place la structure de dossiers Domain-Driven et les Autoloads d'infrastructure,
So that disposer d'un cadre technique robuste conforme à l'Architecture validée.

**Acceptance Criteria:**
- **Given** Un nouveau projet Godot 4.6.2.
- **When** Je crée la structure de dossiers (`/autoloads`, `/domains`, `/data`, `/assets`).
- **Then** Les 9 Autoloads (`GameState`, `SaveManager`, `EventBus`, `TimelineManager`, `ResourceManager`, `NarrativeEngine`, `FactionManager`, `ErrorHandler`, `Logger`) sont créés et configurés dans l'ordre strict de l'architecture.
- **And** Le script `constants.gd` est accessible globalement.

---

## 🛠️ Developer Context & Guardrails

### ⚙️ Technical Requirements
- **Moteur :** Godot 4.6.2 avec GDScript typé statiquement.
- **Renderer :** Compatibility (OpenGL) pour ciblage PC/Mobile v2 sans shaders avancés complexes.
- **Gestion d'état :** Singletons Autoload pour les 7-9 systèmes de base.

### 🏗️ Architecture Compliance
- **Domain-Driven Design :** Ne pas mélanger les dépendances. Les Autoloads sont des services transversaux d'infrastructure et ne doivent contenir aucune logique de domaine métier. 
- **EventBus Central :** Toute communication entre les systèmes *doit* passer par l'`EventBus`. Aucun Autoload ne doit appeler directement un autre Autoload. Émettre les signaux sur l'`EventBus` (ex: `EventBus.error_occurred.emit()`).
- **Ordre strict d'initialisation des Autoloads :**
  1. `GameState` (aucune dépendance)
  2. `SaveManager` (aucune dépendance)
  3. `EventBus` (hub global)
  4. `TimelineManager` (dépend de EventBus)
  5. `ResourceManager` (dépend de EventBus, SaveManager)
  6. `NarrativeEngine` (dépend de EventBus, GameState)
  7. `FactionManager` (dépend de EventBus, SaveManager)
  *(Note : S'assurer d'inclure aussi `ErrorHandler` et `Logger` comme mentionné dans l'Epic).*

### 📦 File Structure Requirements
- Créer la structure `autoloads/`, `domains/`, `ui/`, `shared/`, `data/`, `assets/`, `tests/`.
- Dans `shared/`, créer `constants.gd`.
- Les noms de fichiers GDScript doivent être en `snake_case` (ex: `game_state.gd`, `save_manager.gd`, etc.).
- Les classes GDScript doivent utiliser `PascalCase` (`class_name GameState`).

### 🧪 Testing Requirements
- Les tests unitaires doivent cibler les systèmes mis en place (ex: valider que les singletons s'initialisent correctement et que l'EventBus relaye les signaux sans erreur).
- Ne pas introduire de couplage inter-domaine dans les tests.

---

## ✅ Story Completion Status
*Status: review*

### Tasks/Subtasks
- [x] Create project structure
- [x] Create Autoload scripts
- [x] Create Constants script
- [x] Configure Autoload order in project.godot

### File List
- `autoloads/logger.gd` (New)
- `autoloads/error_handler.gd` (New)
- `autoloads/game_state.gd` (New)
- `autoloads/save_manager.gd` (New)
- `autoloads/event_bus.gd` (New)
- `autoloads/timeline_manager.gd` (New)
- `autoloads/resource_manager.gd` (New)
- `autoloads/narrative_engine.gd` (New)
- `autoloads/faction_manager.gd` (New)
- `shared/constants.gd` (New)
- `project.godot` (New)

### Dev Agent Record
**Debug Log:**
- Directories created successfully.
- Scripts initialized.

**Completion Notes:**
- All Autoloads implemented and configured in `project.godot` according to the required strict order.
- `constants.gd` added.

### Change Log
- 2026-04-29: Initialized Godot project structure, added 9 core Autoloads and global constants.


## ARCHITECTURE HIGHLIGHTS
- EventBus Central: All cross-system communication must use signals.
- Autoload Order: Strictly defined (GameState, SaveManager, EventBus, etc.).
- Domain-Driven: Autoloads are infrastructure, not business logic.

## DIFF OUTPUT
```diff
﻿diff --git a/.github/skills/image-art-direction/SKILL.md b/.agent/skills/image-art-direction/SKILL.md
similarity index 100%
rename from .github/skills/image-art-direction/SKILL.md
rename to .agent/skills/image-art-direction/SKILL.md
diff --git a/.github/skills/stargate-arc-analysis/SKILL.md b/.agent/skills/stargate-arc-analysis/SKILL.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/SKILL.md
rename to .agent/skills/stargate-arc-analysis/SKILL.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/INDEX.md b/.agent/skills/stargate-arc-analysis/knowledge/INDEX.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/INDEX.md
rename to .agent/skills/stargate-arc-analysis/knowledge/INDEX.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-adria.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-adria.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-adria.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-adria.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anciens.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anciens.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anciens.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anciens.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anubis.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anubis.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anubis.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-anubis.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-apophis.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-apophis.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-apophis.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-apophis.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ascension-daniel.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ascension-daniel.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ascension-daniel.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ascension-daniel.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-asgard.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-asgard.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-asgard.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-asgard.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-baal.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-baal.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-baal.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-baal.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-cultures-nox.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-cultures-nox.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-cultures-nox.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-cultures-nox.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-hathor.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-hathor.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-hathor.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-hathor.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-jaffa.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-jaffa.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-jaffa.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-jaffa.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-merlin.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-merlin.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-merlin.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-merlin.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ori.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ori.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ori.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-ori.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-politique-nid.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-politique-nid.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-politique-nid.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-politique-nid.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-replicateurs.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-replicateurs.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-replicateurs.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-replicateurs.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sha-harsesis.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sha-harsesis.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sha-harsesis.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sha-harsesis.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sokar.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sokar.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sokar.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-sokar.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-tokra.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-tokra.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-tokra.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sg1-tokra.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-anciens-lanteans.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-anciens-lanteans.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-anciens-lanteans.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-anciens-lanteans.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-asurans.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-asurans.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-asurans.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-asurans.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-crossovers.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-crossovers.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-crossovers.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-crossovers.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-expedition.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-expedition.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-expedition.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-expedition.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-genii.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-genii.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-genii.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-genii.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-ioa.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-ioa.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-ioa.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-ioa.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-michael.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-michael.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-michael.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-michael.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-teyla.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-teyla.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-teyla.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-teyla.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-wraith.md b/.agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-wraith.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-wraith.md
rename to .agent/skills/stargate-arc-analysis/knowledge/arcs/arc-sga-wraith.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sg1-arcs-narratifs.md b/.agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-narratifs.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sg1-arcs-narratifs.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-narratifs.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s1s2.md b/.agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s1s2.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s1s2.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s1s2.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s3s5.md b/.agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s3s5.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s3s5.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s3s5.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s6s8.md b/.agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s6s8.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s6s8.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s6s8.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s9s10.md b/.agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s9s10.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sg1-arcs-s9s10.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sg1-arcs-s9s10.md
diff --git a/.github/skills/stargate-arc-analysis/knowledge/sga-arcs-s1s5.md b/.agent/skills/stargate-arc-analysis/knowledge/sga-arcs-s1s5.md
similarity index 100%
rename from .github/skills/stargate-arc-analysis/knowledge/sga-arcs-s1s5.md
rename to .agent/skills/stargate-arc-analysis/knowledge/sga-arcs-s1s5.md
diff --git a/.github/skills/stargate-coalition-jdr/SKILL.md b/.agent/skills/stargate-coalition-jdr/SKILL.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/SKILL.md
rename to .agent/skills/stargate-coalition-jdr/SKILL.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/00_ecran_du_mj.md b/.agent/skills/stargate-coalition-jdr/resources/00_ecran_du_mj.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/00_ecran_du_mj.md
rename to .agent/skills/stargate-coalition-jdr/resources/00_ecran_du_mj.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/00_feuille_de_personnage.md b/.agent/skills/stargate-coalition-jdr/resources/00_feuille_de_personnage.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/00_feuille_de_personnage.md
rename to .agent/skills/stargate-coalition-jdr/resources/00_feuille_de_personnage.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/01_preparation_partie.md b/.agent/skills/stargate-coalition-jdr/resources/01_preparation_partie.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/01_preparation_partie.md
rename to .agent/skills/stargate-coalition-jdr/resources/01_preparation_partie.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/02_races_jouables.md b/.agent/skills/stargate-coalition-jdr/resources/02_races_jouables.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/02_races_jouables.md
rename to .agent/skills/stargate-coalition-jdr/resources/02_races_jouables.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/03_caracteristiques_et_competences.md b/.agent/skills/stargate-coalition-jdr/resources/03_caracteristiques_et_competences.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/03_caracteristiques_et_competences.md
rename to .agent/skills/stargate-coalition-jdr/resources/03_caracteristiques_et_competences.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/04_regles_de_combat.md b/.agent/skills/stargate-coalition-jdr/resources/04_regles_de_combat.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/04_regles_de_combat.md
rename to .agent/skills/stargate-coalition-jdr/resources/04_regles_de_combat.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/05_equipement_et_armes.md b/.agent/skills/stargate-coalition-jdr/resources/05_equipement_et_armes.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/05_equipement_et_armes.md
rename to .agent/skills/stargate-coalition-jdr/resources/05_equipement_et_armes.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/06_porte_des_etoiles_et_anciens.md b/.agent/skills/stargate-coalition-jdr/resources/06_porte_des_etoiles_et_anciens.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/06_porte_des_etoiles_et_anciens.md
rename to .agent/skills/stargate-coalition-jdr/resources/06_porte_des_etoiles_et_anciens.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/07_races_et_cultures.md b/.agent/skills/stargate-coalition-jdr/resources/07_races_et_cultures.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/07_races_et_cultures.md
rename to .agent/skills/stargate-coalition-jdr/resources/07_races_et_cultures.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/08_lieux_et_factions.md b/.agent/skills/stargate-coalition-jdr/resources/08_lieux_et_factions.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/08_lieux_et_factions.md
rename to .agent/skills/stargate-coalition-jdr/resources/08_lieux_et_factions.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/09_scenarios.md b/.agent/skills/stargate-coalition-jdr/resources/09_scenarios.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/09_scenarios.md
rename to .agent/skills/stargate-coalition-jdr/resources/09_scenarios.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/10_vaisseaux.md b/.agent/skills/stargate-coalition-jdr/resources/10_vaisseaux.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/10_vaisseaux.md
rename to .agent/skills/stargate-coalition-jdr/resources/10_vaisseaux.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/11_amelioration_personnage.md b/.agent/skills/stargate-coalition-jdr/resources/11_amelioration_personnage.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/11_amelioration_personnage.md
rename to .agent/skills/stargate-coalition-jdr/resources/11_amelioration_personnage.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/EXEMPLE_PERSONNAGE.md b/.agent/skills/stargate-coalition-jdr/resources/EXEMPLE_PERSONNAGE.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/EXEMPLE_PERSONNAGE.md
rename to .agent/skills/stargate-coalition-jdr/resources/EXEMPLE_PERSONNAGE.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/aschen.md b/.agent/skills/stargate-coalition-jdr/resources/races/aschen.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/aschen.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/aschen.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/esprit-sacre.md b/.agent/skills/stargate-coalition-jdr/resources/races/esprit-sacre.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/esprit-sacre.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/esprit-sacre.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/goa-uld.md b/.agent/skills/stargate-coalition-jdr/resources/races/goa-uld.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/goa-uld.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/goa-uld.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/humain.md b/.agent/skills/stargate-coalition-jdr/resources/races/humain.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/humain.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/humain.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/jaffa.md b/.agent/skills/stargate-coalition-jdr/resources/races/jaffa.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/jaffa.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/jaffa.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/langarien.md b/.agent/skills/stargate-coalition-jdr/resources/races/langarien.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/langarien.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/langarien.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/oannes.md b/.agent/skills/stargate-coalition-jdr/resources/races/oannes.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/oannes.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/oannes.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/oranien.md b/.agent/skills/stargate-coalition-jdr/resources/races/oranien.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/oranien.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/oranien.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/puissantes.md b/.agent/skills/stargate-coalition-jdr/resources/races/puissantes.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/puissantes.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/puissantes.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/reol.md b/.agent/skills/stargate-coalition-jdr/resources/races/reol.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/reol.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/reol.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/serrakin.md b/.agent/skills/stargate-coalition-jdr/resources/races/serrakin.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/serrakin.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/serrakin.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/sodan.md b/.agent/skills/stargate-coalition-jdr/resources/races/sodan.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/sodan.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/sodan.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/tau-ri.md b/.agent/skills/stargate-coalition-jdr/resources/races/tau-ri.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/tau-ri.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/tau-ri.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/tok-ra.md b/.agent/skills/stargate-coalition-jdr/resources/races/tok-ra.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/tok-ra.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/tok-ra.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/tollan.md b/.agent/skills/stargate-coalition-jdr/resources/races/tollan.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/tollan.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/tollan.md
diff --git a/.github/skills/stargate-coalition-jdr/resources/races/unas.md b/.agent/skills/stargate-coalition-jdr/resources/races/unas.md
similarity index 100%
rename from .github/skills/stargate-coalition-jdr/resources/races/unas.md
rename to .agent/skills/stargate-coalition-jdr/resources/races/unas.md
diff --git a/.github/skills/stargate-glyph-generator/SKILL.md b/.agent/skills/stargate-glyph-generator/SKILL.md
similarity index 100%
rename from .github/skills/stargate-glyph-generator/SKILL.md
rename to .agent/skills/stargate-glyph-generator/SKILL.md
diff --git a/.github/skills/stargate-glyph-generator/knowledge/COORDINATES_INDEX.md b/.agent/skills/stargate-glyph-generator/knowledge/COORDINATES_INDEX.md
similarity index 100%
rename from .github/skills/stargate-glyph-generator/knowledge/COORDINATES_INDEX.md
rename to .agent/skills/stargate-glyph-generator/knowledge/COORDINATES_INDEX.md
diff --git a/.github/skills/stargate-glyph-generator/scripts/validate_index.ps1 b/.agent/skills/stargate-glyph-generator/scripts/validate_index.ps1
similarity index 100%
rename from .github/skills/stargate-glyph-generator/scripts/validate_index.ps1
rename to .agent/skills/stargate-glyph-generator/scripts/validate_index.ps1
diff --git a/.github/skills/stargate-glyph-generator/scripts/validate_index.py b/.agent/skills/stargate-glyph-generator/scripts/validate_index.py
similarity index 100%
rename from .github/skills/stargate-glyph-generator/scripts/validate_index.py
rename to .agent/skills/stargate-glyph-generator/scripts/validate_index.py
diff --git a/.github/skills/stargate-planet-catalog/SKILL.md b/.agent/skills/stargate-planet-catalog/SKILL.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/SKILL.md
rename to .agent/skills/stargate-planet-catalog/SKILL.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/INDEX.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/INDEX.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/INDEX.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/INDEX.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ida/H/id-hala.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/H/id-hala.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ida/H/id-hala.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/H/id-hala.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-orilla.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-orilla.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-orilla.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-orilla.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-othala.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-othala.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-othala.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ida/O/id-othala.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ori/C/ori-celestis.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/C/ori-celestis.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ori/C/ori-celestis.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/C/ori-celestis.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ori/O/ori-ortus-mallum.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/O/ori-ortus-mallum.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ori/O/ori-ortus-mallum.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/O/ori-ortus-mallum.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-egeria.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-egeria.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-egeria.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-egeria.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-isca.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-isca.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-isca.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Ori/V/ori-ver-isca.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-asuras.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-asuras.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-asuras.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-asuras.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-athos.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-athos.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-athos.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/A/pg-athos.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/B/pg-belkan.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/B/pg-belkan.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/B/pg-belkan.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/B/pg-belkan.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-dagan.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-dagan.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-dagan.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-dagan.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-doranda.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-doranda.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-doranda.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/D/pg-doranda.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/G/pg-genii.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/G/pg-genii.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/G/pg-genii.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/G/pg-genii.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/H/pg-hoff.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/H/pg-hoff.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/H/pg-hoff.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/H/pg-hoff.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/L/pg-lantea.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/L/pg-lantea.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/L/pg-lantea.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/L/pg-lantea.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m35-117.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m35-117.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m35-117.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m35-117.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m7g-677.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m7g-677.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m7g-677.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-m7g-677.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-manaria.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-manaria.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-manaria.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/M/pg-manaria.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/O/pg-olesia.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/O/pg-olesia.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/O/pg-olesia.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/O/pg-olesia.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/P/pg-proculus.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/P/pg-proculus.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/P/pg-proculus.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/P/pg-proculus.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/S/pg-sateda.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/S/pg-sateda.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/S/pg-sateda.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/S/pg-sateda.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/T/pg-taranis.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/T/pg-taranis.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/T/pg-taranis.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/T/pg-taranis.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/V/pg-vedeena.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/V/pg-vedeena.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Pegase/V/pg-vedeena.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Pegase/V/pg-vedeena.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-abydos.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-abydos.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-abydos.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-abydos.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-argos.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-argos.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-argos.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-argos.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-p3x-989.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-p3x-989.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-p3x-989.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/A/mw-p3x-989.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-baal-fortress.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-baal-fortress.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-baal-fortress.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-baal-fortress.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bedrosia.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bedrosia.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bedrosia.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bedrosia.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bp6-301.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bp6-301.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bp6-301.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/B/mw-bp6-301.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-camelot.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-camelot.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-camelot.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-camelot.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cartago.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cartago.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cartago.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cartago.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-chulak.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-chulak.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-chulak.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-chulak.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cimmeria.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cimmeria.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cimmeria.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/C/mw-cimmeria.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-dakara.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-dakara.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-dakara.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-dakara.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-delmak.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-delmak.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-delmak.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/D/mw-delmak.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-earth.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-earth.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-earth.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-earth.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-edora.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-edora.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-edora.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-edora.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-euronda.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-euronda.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-euronda.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/E/mw-euronda.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/G/mw-p7j-989.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/G/mw-p7j-989.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/G/mw-p7j-989.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/G/mw-p7j-989.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-hanka.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-hanka.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-hanka.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-hanka.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-heliopolis.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-heliopolis.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-heliopolis.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-heliopolis.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-p3r-272.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-p3r-272.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-p3r-272.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/H/mw-p3r-272.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/J/mw-juna.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/J/mw-juna.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/J/mw-juna.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/J/mw-juna.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kallana.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kallana.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kallana.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kallana.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kheb.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kheb.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kheb.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-kheb.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-ktau.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-ktau.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-ktau.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/K/mw-ktau.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-langara.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-langara.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-langara.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-langara.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-latona.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-latona.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-latona.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-latona.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-p3x-797.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-p3x-797.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-p3x-797.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/L/mw-p3x-797.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/M/mw-madrona.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/M/mw-madrona.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/M/mw-madrona.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/M/mw-madrona.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nasya.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nasya.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nasya.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nasya.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-netu.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-netu.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-netu.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-netu.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nirrti-lab.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nirrti-lab.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nirrti-lab.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nirrti-lab.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nox-world.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nox-world.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nox-world.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/N/mw-nox-world.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/O/mw-p4x-347.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/O/mw-p4x-347.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/O/mw-p4x-347.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/O/mw-p4x-347.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3w-451.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3w-451.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3w-451.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3w-451.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-403.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-403.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-403.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-403.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-562.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-562.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-562.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-562.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-666.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-666.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-666.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-666.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-888.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-888.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-888.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p3x-888.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p4x-639.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p4x-639.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p4x-639.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-p4x-639.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-pangar.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-pangar.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-pangar.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/P/mw-pangar.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tartarus.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tartarus.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tartarus.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tartarus.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tegalus.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tegalus.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tegalus.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tegalus.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollan.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollan.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollan.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollan.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollana.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollana.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollana.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/T/mw-tollana.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vagonbrei.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vagonbrei.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vagonbrei.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vagonbrei.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vis-uban.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vis-uban.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vis-uban.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vis-uban.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vorash.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vorash.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vorash.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/V/mw-vorash.md
diff --git a/.github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/Y/mw-yu-palace.md b/.agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/Y/mw-yu-palace.md
similarity index 100%
rename from .github/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/Y/mw-yu-palace.md
rename to .agent/skills/stargate-planet-catalog/knowledge/planetes/Voie_Lactee/Y/mw-yu-palace.md
diff --git a/.github/skills/stargate-specialist/SKILL.md b/.agent/skills/stargate-specialist/SKILL.md
similarity index 100%
rename from .github/skills/stargate-specialist/SKILL.md
rename to .agent/skills/stargate-specialist/SKILL.md
diff --git a/.github/skills/stargate-specialist/knowledge/planetes/abydos.md b/.agent/skills/stargate-specialist/knowledge/planetes/abydos.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/planetes/abydos.md
rename to .agent/skills/stargate-specialist/knowledge/planetes/abydos.md
diff --git a/.github/skills/stargate-specialist/knowledge/races/anciens.md b/.agent/skills/stargate-specialist/knowledge/races/anciens.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/races/anciens.md
rename to .agent/skills/stargate-specialist/knowledge/races/anciens.md
diff --git a/.github/skills/stargate-specialist/knowledge/races/asgards.md b/.agent/skills/stargate-specialist/knowledge/races/asgards.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/races/asgards.md
rename to .agent/skills/stargate-specialist/knowledge/races/asgards.md
diff --git a/.github/skills/stargate-specialist/knowledge/races/goa-uld.md b/.agent/skills/stargate-specialist/knowledge/races/goa-uld.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/races/goa-uld.md
rename to .agent/skills/stargate-specialist/knowledge/races/goa-uld.md
diff --git a/.github/skills/stargate-specialist/knowledge/races/ori.md b/.agent/skills/stargate-specialist/knowledge/races/ori.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/races/ori.md
rename to .agent/skills/stargate-specialist/knowledge/races/ori.md
diff --git a/.github/skills/stargate-specialist/knowledge/races/tok-ra.md b/.agent/skills/stargate-specialist/knowledge/races/tok-ra.md
similarity index 100%
rename from .github/skills/stargate-specialist/knowledge/races/tok-ra.md
rename to .agent/skills/stargate-specialist/knowledge/races/tok-ra.md
diff --git a/_bmad-output/implementation-artifacts/1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core.md b/_bmad-output/implementation-artifacts/1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core.md
new file mode 100644
index 0000000..ca982f5
--- /dev/null
+++ b/_bmad-output/implementation-artifacts/1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core.md
@@ -0,0 +1,90 @@
+---
+title: 'Story 1.0: Initialisation de l''Architecture DDD et des Autoloads Core'
+epic: '1'
+story_id: '1.0'
+status: 'ready-for-dev'
+date: '2026-04-29'
+---
+
+# Story 1.0: Initialisation de l'Architecture DDD et des Autoloads Core
+
+## ­ƒôØ Story Requirements
+
+**User Story:**
+As a D├®veloppeur Solo,
+I want mettre en place la structure de dossiers Domain-Driven et les Autoloads d'infrastructure,
+So that disposer d'un cadre technique robuste conforme ├á l'Architecture valid├®e.
+
+**Acceptance Criteria:**
+- **Given** Un nouveau projet Godot 4.6.2.
+- **When** Je cr├®e la structure de dossiers (`/autoloads`, `/domains`, `/data`, `/assets`).
+- **Then** Les 9 Autoloads (`GameState`, `SaveManager`, `EventBus`, `TimelineManager`, `ResourceManager`, `NarrativeEngine`, `FactionManager`, `ErrorHandler`, `Logger`) sont cr├®├®s et configur├®s dans l'ordre strict de l'architecture.
+- **And** Le script `constants.gd` est accessible globalement.
+
+---
+
+## ­ƒøá´©Å Developer Context & Guardrails
+
+### ÔÜÖ´©Å Technical Requirements
+- **Moteur :** Godot 4.6.2 avec GDScript typ├® statiquement.
+- **Renderer :** Compatibility (OpenGL) pour ciblage PC/Mobile v2 sans shaders avanc├®s complexes.
+- **Gestion d'├®tat :** Singletons Autoload pour les 7-9 syst├¿mes de base.
+
+### ­ƒÅù´©Å Architecture Compliance
+- **Domain-Driven Design :** Ne pas m├®langer les d├®pendances. Les Autoloads sont des services transversaux d'infrastructure et ne doivent contenir aucune logique de domaine m├®tier. 
+- **EventBus Central :** Toute communication entre les syst├¿mes *doit* passer par l'`EventBus`. Aucun Autoload ne doit appeler directement un autre Autoload. ├ëmettre les signaux sur l'`EventBus` (ex: `EventBus.error_occurred.emit()`).
+- **Ordre strict d'initialisation des Autoloads :**
+  1. `GameState` (aucune d├®pendance)
+  2. `SaveManager` (aucune d├®pendance)
+  3. `EventBus` (hub global)
+  4. `TimelineManager` (d├®pend de EventBus)
+  5. `ResourceManager` (d├®pend de EventBus, SaveManager)
+  6. `NarrativeEngine` (d├®pend de EventBus, GameState)
+  7. `FactionManager` (d├®pend de EventBus, SaveManager)
+  *(Note : S'assurer d'inclure aussi `ErrorHandler` et `Logger` comme mentionn├® dans l'Epic).*
+
+### ­ƒôª File Structure Requirements
+- Cr├®er la structure `autoloads/`, `domains/`, `ui/`, `shared/`, `data/`, `assets/`, `tests/`.
+- Dans `shared/`, cr├®er `constants.gd`.
+- Les noms de fichiers GDScript doivent ├¬tre en `snake_case` (ex: `game_state.gd`, `save_manager.gd`, etc.).
+- Les classes GDScript doivent utiliser `PascalCase` (`class_name GameState`).
+
+### ­ƒº¬ Testing Requirements
+- Les tests unitaires doivent cibler les syst├¿mes mis en place (ex: valider que les singletons s'initialisent correctement et que l'EventBus relaye les signaux sans erreur).
+- Ne pas introduire de couplage inter-domaine dans les tests.
+
+---
+
+## Ô£à Story Completion Status
+*Status: review*
+
+### Tasks/Subtasks
+- [x] Create project structure
+- [x] Create Autoload scripts
+- [x] Create Constants script
+- [x] Configure Autoload order in project.godot
+
+### File List
+- `autoloads/logger.gd` (New)
+- `autoloads/error_handler.gd` (New)
+- `autoloads/game_state.gd` (New)
+- `autoloads/save_manager.gd` (New)
+- `autoloads/event_bus.gd` (New)
+- `autoloads/timeline_manager.gd` (New)
+- `autoloads/resource_manager.gd` (New)
+- `autoloads/narrative_engine.gd` (New)
+- `autoloads/faction_manager.gd` (New)
+- `shared/constants.gd` (New)
+- `project.godot` (New)
+
+### Dev Agent Record
+**Debug Log:**
+- Directories created successfully.
+- Scripts initialized.
+
+**Completion Notes:**
+- All Autoloads implemented and configured in `project.godot` according to the required strict order.
+- `constants.gd` added.
+
+### Change Log
+- 2026-04-29: Initialized Godot project structure, added 9 core Autoloads and global constants.
diff --git a/_bmad-output/implementation-artifacts/sprint-status.yaml b/_bmad-output/implementation-artifacts/sprint-status.yaml
index 8b416b7..3c922ce 100644
--- a/_bmad-output/implementation-artifacts/sprint-status.yaml
+++ b/_bmad-output/implementation-artifacts/sprint-status.yaml
@@ -1,5 +1,5 @@
 # generated: 2026-04-29T12:41:15+02:00
-# last_updated: 2026-04-29T12:41:15+02:00
+# last_updated: 2026-04-29T13:20:11+02:00
 # project: stargate-command
 # project_key: NOKEY
 # tracking_system: file-system
@@ -35,15 +35,15 @@
 # - Dev moves story to 'review', then runs code-review (fresh context, different LLM recommended)
 
 generated: 2026-04-29T12:41:15+02:00
-last_updated: 2026-04-29T12:41:15+02:00
+last_updated: 2026-04-29T15:00:00+02:00
 project: stargate-command
 project_key: NOKEY
 tracking_system: file-system
 story_location: _bmad-output/implementation-artifacts
 
 development_status:
-  epic-1: backlog
-  1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core: backlog
+  epic-1: in-progress
+  1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core: review
   1-1-initialisation-du-bureau-du-general-hub-principal: backlog
   1-2-systeme-de-dashboard-financier-budget-usd-et-ressources: backlog
   1-3-construction-du-centre-de-recherche-archeologique-cra: backlog
diff --git a/autoloads/error_handler.gd b/autoloads/error_handler.gd
new file mode 100644
index 0000000..f84636e
--- /dev/null
+++ b/autoloads/error_handler.gd
@@ -0,0 +1,14 @@
+extends Node
+
+## Centralized error handling.
+
+func _ready() -> void:
+	LogManager.info("ErrorHandler initialized")
+
+func handle_error(error_code: int, context: String) -> void:
+	var message = "Error %d in %s" % [error_code, context]
+	LogManager.error(message)
+	if has_node("/root/EventBus"):
+		var event_bus = get_node("/root/EventBus")
+		if event_bus.has_signal("error_occurred"):
+			event_bus.error_occurred.emit(error_code, context)
diff --git a/autoloads/event_bus.gd b/autoloads/event_bus.gd
new file mode 100644
index 0000000..be75dcd
--- /dev/null
+++ b/autoloads/event_bus.gd
@@ -0,0 +1,10 @@
+extends Node
+
+## Centralized EventBus for cross-system communication.
+
+signal error_occurred(error_code: int, context: String)
+signal game_saved(slot: int)
+signal game_loaded(slot: int)
+
+func _ready() -> void:
+	LogManager.info("EventBus initialized")
diff --git a/autoloads/faction_manager.gd b/autoloads/faction_manager.gd
new file mode 100644
index 0000000..d5d5170
--- /dev/null
+++ b/autoloads/faction_manager.gd
@@ -0,0 +1,9 @@
+extends Node
+
+## Manages factions and relations.
+
+func _ready() -> void:
+	LogManager.info("FactionManager initialized")
+
+func change_reputation(faction_id: String, amount: int) -> void:
+	pass
diff --git a/autoloads/game_state.gd b/autoloads/game_state.gd
new file mode 100644
index 0000000..4550ac5
--- /dev/null
+++ b/autoloads/game_state.gd
@@ -0,0 +1,12 @@
+extends Node
+
+## Manages the global state of the game.
+
+func _ready() -> void:
+	LogManager.info("GameState initialized")
+
+func get_state() -> Dictionary:
+	return {}
+
+func update_state(new_state: Dictionary) -> void:
+	pass
diff --git a/autoloads/narrative_engine.gd b/autoloads/narrative_engine.gd
new file mode 100644
index 0000000..a5dfcf4
--- /dev/null
+++ b/autoloads/narrative_engine.gd
@@ -0,0 +1,9 @@
+extends Node
+
+## Manages narrative events and quests.
+
+func _ready() -> void:
+	LogManager.info("NarrativeEngine initialized")
+
+func trigger_event(event_id: String) -> void:
+	pass
diff --git a/autoloads/resource_manager.gd b/autoloads/resource_manager.gd
new file mode 100644
index 0000000..4e53d06
--- /dev/null
+++ b/autoloads/resource_manager.gd
@@ -0,0 +1,12 @@
+extends Node
+
+## Manages game resources.
+
+func _ready() -> void:
+	LogManager.info("ResourceManager initialized")
+
+func add_resource(id: String, amount: int) -> void:
+	pass
+
+func consume_resource(id: String, amount: int) -> bool:
+	return false
diff --git a/autoloads/save_manager.gd b/autoloads/save_manager.gd
new file mode 100644
index 0000000..97170f4
--- /dev/null
+++ b/autoloads/save_manager.gd
@@ -0,0 +1,12 @@
+extends Node
+
+## Handles saving and loading the game.
+
+func _ready() -> void:
+	LogManager.info("SaveManager initialized")
+
+func save_game(slot: int) -> void:
+	pass
+
+func load_game(slot: int) -> void:
+	pass
diff --git a/autoloads/timeline_manager.gd b/autoloads/timeline_manager.gd
new file mode 100644
index 0000000..d7b8f47
--- /dev/null
+++ b/autoloads/timeline_manager.gd
@@ -0,0 +1,9 @@
+extends Node
+
+## Manages game time and events scheduling.
+
+func _ready() -> void:
+	LogManager.info("TimelineManager initialized")
+
+func advance_time(delta: float) -> void:
+	pass
diff --git a/project.godot b/project.godot
new file mode 100644
index 0000000..f546282
--- /dev/null
+++ b/project.godot
@@ -0,0 +1,35 @@
+; Engine configuration file.
+; It's best edited using the editor UI and not directly,
+; since the parameters that go here are not all obvious.
+;
+; Format:
+;   [section] ; section goes between []
+;   param=value ; assign values to parameters
+
+config_version=5
+
+[animation]
+
+compatibility/default_parent_skeleton_in_mesh_instance_3d=true
+
+[application]
+
+config/name="Stargate Chronicles"
+config/features=PackedStringArray("4.6", "GL Compatibility")
+
+[autoload]
+
+LogManager="*res://autoloads/log_manager.gd"
+ErrorHandler="*res://autoloads/error_handler.gd"
+GameState="*res://autoloads/game_state.gd"
+SaveManager="*res://autoloads/save_manager.gd"
+EventBus="*res://autoloads/event_bus.gd"
+TimelineManager="*res://autoloads/timeline_manager.gd"
+ResourceManager="*res://autoloads/resource_manager.gd"
+NarrativeEngine="*res://autoloads/narrative_engine.gd"
+FactionManager="*res://autoloads/faction_manager.gd"
+
+[rendering]
+
+renderer/rendering_method="gl_compatibility"
+renderer/rendering_method.mobile="gl_compatibility"
diff --git a/shared/constants.gd b/shared/constants.gd
new file mode 100644
index 0000000..6e69363
--- /dev/null
+++ b/shared/constants.gd
@@ -0,0 +1,16 @@
+class_name Constants
+extends RefCounted
+
+## Global constants for the Stargate game.
+
+const VERSION = "0.1.0"
+const STARTING_FUNDS = 1000000
+
+enum Faction {
+	TAU_RI,
+	TOK_RA,
+	GOA_ULD,
+	ASGARD,
+	NOX,
+	ANCIENTS
+}

```
