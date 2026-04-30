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
