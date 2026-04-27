---
title: 'Game Architecture'
project: 'stargate-command'
date: '2026-04-26'
author: 'Dylan'
version: '1.0'
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
status: 'complete'
engine: 'Godot 4.6.2'
platform: 'PC (Windows/Linux/Mac)'

# Source Documents
gdd: '_bmad-output/gdd.md'
epics: null
brief: '_bmad-output/planning-artifacts/game-brief.md'
narrative: '_bmad-output/narrative-design.md'
---

# Game Architecture — Stargate Chronicles

## Document Status

Document d'architecture finalisé via le Workflow GDS Architecture.

**Étapes complétées :** 9 sur 9 ✅ — **Statut : Complet**

---

## Executive Summary

**Stargate Chronicles** est un RPG de Gestion solo conçu dans Godot 4.6.2 (GDScript typé)
ciblant PC Windows/Linux/Mac.

**Décisions Architecturales Clés :**

- **EventBus Central** : toute communication inter-systèmes passe exclusivement par un bus
  de signaux global — élimine le couplage circulaire entre les 7 Autoloads.
- **ECA Déclaratif JSON** : les règles de débloquage organique sont externalisées en JSON
  évalué par un moteur GDScript — l'IA co-pilote peut ajouter des règles sans toucher au code.
- **Pause Automatique sur Événements Narratifs** : la Chronologie s'arrête de manière
  déterministe à chaque événement narratif via pile `_pending_pauses` — race conditions
  éliminées par design.

**Structure du Projet :** Organisation Domain-Driven avec 9 domaines métier isolés,
7 Autoloads d'infrastructure, données JSON externalisées (`data/rules/` et `data/balance/`).

**Patterns d'Implémentation :** 7 patterns définis (3 originaux + 4 standard) garantissant
la cohérence entre tous les agents IA.

**Prêt pour :** Phase de création des Epics et implémentation.

---

## Contexte du Projet

### Vue d'Ensemble

**Stargate Chronicles** — RPG de Gestion solo dans l'univers Stargate.
Le joueur commande le Programme de la Porte des Étoiles : gestion du SGC bâtiment par bâtiment,
recrutement et formation d'équipes SG, exploration d'un univers hybride canonique/procédural.
Progression 100% organique (jamais par temps réel), double tension permanente (terrain + institution), permadeath.

### Portée Technique

**Moteur :** Godot 4 + GDScript
**Plateforme :** PC (Windows/Linux/Mac) — solo, sauvegarde locale
**Genre :** Management-RPG
**Développement :** Solo + IA co-pilote (GitHub Copilot)
**Niveau de complexité :** Haute — 3 systèmes majeurs imbriqués (gestion, RPG, narration)

### Systèmes Principaux

| Système | Complexité | Priorité MVP |
|---|---|---|
| Gestion SGC (infrastructure, budget, ressources) | Haute | ✅ Core |
| Système de personnages (stats, traits, progression) | Haute | ✅ Core |
| Exploration narrative (événements, prérequis, choix illustrés) | Haute | ✅ Core |
| Chronologie (temps continu, pause auto, vitesses x1/x4/x16) | Moyenne | ✅ Core |
| Graphe de débloquage conditionnel organique | Moyenne | ✅ Core |
| Système de combat (résolution narrative probabiliste) | Moyenne | ✅ Core |
| Sauvegarde d'état complet (JSON + schéma versionné) | Moyenne | ✅ Core |
| Confiance Gouvernementale & conditions game over | Moyenne | ✅ Core |
| UI dashboard + carte stellaire + clavier personnalisable | Moyenne | ✅ Core |
| Système de Journal / Base de données in-game | Faible | ✅ Core |
| Diplomatie & factions (influence, alliances) | Moyenne | Post-MVP |
| Génération procédurale de planètes | Haute | Post-MVP |
| Architecture multi-galaxies (Pégase, Univers) | Faible | Post-MVP |
| Audio adaptatif (boucles selon contexte) | Faible | Post-MVP |

### Exigences Techniques

- **Plateforme :** PC Windows/Linux/Mac (v1), Mobile iOS/Android (v2 — hors scope architecture v1)
- **Réseau :** Aucun — solo uniquement, sauvegarde locale
- **Format de sauvegarde :** JSON structuré + schéma versionné (lisible, debuggable par LLM, extensible sans migration)
- **Performance :** PC moderne standard — chargement fluide des illustrations narratives haute qualité
- **Accessibilité :** Police ajustable (3 niveaux min), mode contraste élevé optionnel, tooltips universels
- **Raccourcis clavier :** Entièrement personnalisables

### Décisions de Design à Impact Architectural (validées)

> Ces décisions ont des conséquences directes sur l'architecture — elles sont définitives pour la v1.

1. **Pause automatique sur événements narratifs** — Le temps (Chronologie) ne s'écoule que pendant les phases de gestion SGC. Tout déclenchement d'événement narratif, d'alerte ou de choix entraîne une pause automatique et explicite. Élimine les race conditions narratives et protège le pilier d'Appropriation Narrative.

2. **Architecture des Autoloads Godot définie en amont** — Les systèmes globaux (GameState, TimelineManager, ResourceManager, NarrativeEngine, SaveManager, FactionManager) sont définis avec leurs interfaces et leur ordre d'initialisation avant toute implémentation. Diagramme de dépendances obligatoire.

3. **Format de sauvegarde JSON versionné** — Décision prise dès la phase d'architecture, pas improvisée plus tard. Chaque objet sérialisable (membre, planète, faction, infrastructure, recherche) a un schéma documenté et un numéro de version.

### Drivers de Complexité

1. **Moteur de conditions organiques (ECA)** — Chaque débloquage est une règle déclarative (Event-Condition-Action), pas du code procédural. Doit être extensible par l'IA co-pilote sans toucher à l'architecture centrale.
2. **État persistant massif** — Sérialisation complète : membres (stats, traits, santé, histoire), factions, planètes, recherches en cours, chronologie, succès, confiance gouvernementale.
3. **Narration à prérequis dynamiques** — Calcul temps réel des options disponibles selon les stats réelles de l'équipe active ; options grisées visibles mais inaccessibles.
4. **Chronologie continue avec interruptions événementielles** — Boucle non-bloquante, multi-vitesse (×1/×4/×16), pause automatique sur tout événement narratif ou alerte.
5. **Double tension terrain/institution couplée** — Permadeath des membres + Confiance Gouvernementale : deux systèmes de survie qui s'alimentent mutuellement via des événements partagés.

### Risques Techniques Identifiés

| Risque | Impact | Mitigation |
|---|---|---|
| Scope creep (univers immense) | Critique | MVP ultra-strict : 1 planète canonique + systèmes core uniquement |
| Couplage fort entre systèmes (gestion/RPG/narration) | Haute | Architecture ECA découplée + interfaces autoloads définies en amont |
| Cohérence narrative (canonique + procédural) | Haute | Post-MVP — données JSON externalisées, pas de logique narrative hardcodée |
| Sérialisation de l'état complexe | Moyenne | JSON schéma versionné décidé maintenant, pas improvisé |
| Race conditions sur la Chronologie | Moyenne | Pause automatique sur tout événement — élimine le problème par design |

---

## Moteur & Framework

### Moteur Sélectionné

**Godot 4.6.2** (version stable confirmée par Dylan — 2026-04-25)

**Rationale :** Décision prise dès le Game Brief. Open-source/MIT, zéro royalties, export multi-plateforme PC natif (Windows/Linux/Mac), GDScript optimal pour développement IA-assisté (Python-like, excellente couverture LLM), architecture scalable 2D, écosystème adapté au développement solo.

### Architecture Fournie par le Moteur

| Composant | Solution Godot 4 | Notes |
|---|---|---|
| Rendu 2D | CanvasItem + Viewport | Layers, shaders, haute qualité illustrations |
| Input | InputMap + actions rebindables | Raccourcis personnalisables natifs via code |
| Gestion des scènes | SceneTree + instanciation | UI modulaire par scènes réutilisables |
| Signaux | Système natif Godot 4 | Découplage UI/état, pattern observateur |
| Autoloads | Singletons préchargés | Managers globaux accessibles partout |
| Sauvegarde | FileAccess + JSON + Resources | Base du schéma JSON versionné |
| Export | Templates intégrés | Windows / Linux / Mac natif |
| Internationalisation | TranslationServer | Texte narratif multilingue ready |

### Initialisation du Projet

```bash
# Godot Project Manager → New Project
# Renderer sélectionné selon décision Step 4
# Structure de dossiers définie dès le départ (voir Step 5 – Structure du Projet)
```

### Outils IA (MCP Servers)

| Outil | Repo | Rôle |
|---|---|---|
| **Godot MCP** | `bradypp/godot-mcp` | Accès direct scènes/nœuds/debug pour l'IA co-pilote |
| **Context7** | `upstash/context7` | Documentation Godot 4 à jour (évite les APIs obsolètes) |

### Décisions Architecturales Résolues

Toutes les décisions ont été traitées — voir la section **Décisions Architecturales** pour le détail complet.

| Décision | Résolution |
|---|---|
| Renderer | Compatibility (OpenGL) |
| Autoloads/Managers | 7 Autoloads définis avec ordre d'initialisation + EventBus |
| Schéma JSON sauvegarde | Schéma versionné — 7 objets documentés |
| Moteur ECA | Pattern ECA-EventBus déclaratif JSON |
| Architecture Chronologie | Pattern Interruptible Timeline + pile _pending_pauses |
| Chargement assets | Lazy loading threaded + fondu 0.3s |
| Pattern UI | Signal-based via EventBus + scènes instanciées |
| Audio | Godot natif AudioBus (4 bus : Master/Music/SFX/Voice) |

---

## Décisions Architecturales

### Résumé des Décisions

| Catégorie | Décision | Rationale |
|---|---|---|
| Renderer | Compatibility (OpenGL) | 2D pur, poids minimal, compatible mobile v2 |
| Langage | GDScript typé statiquement | Natif Godot, optimal LLM, pas d'overhead .NET |
| Sauvegarde | JSON versionné (FileAccess) | Lisible, debuggable LLM, extensible sans migration |
| State Management | Autoloads + EventBus central | Découplage total, interfaces claires, extensible IA |
| Débloquage organique | ECA déclaratif JSON | Règles externalisées, IA peut ajouter sans toucher au code |
| Chronologie | Timer continu + pause automatique | Élimine les race conditions narratives par design |
| Assets | Lazy loading + transition légère | Démarrage rapide, mémoire contrôlée |
| Audio | Godot natif (AudioBus) | Budget zéro, boucles adaptatives suffisantes |
| Réseau | Aucun | Solo uniquement |

### Renderer

**Choix : Compatibility (OpenGL)**

Pour un jeu 2D de gestion avec UI et illustrations narratives, le renderer Compatibility est le choix optimal :
- Aucune dépendance aux shaders avancés (pas de 3D, pas d'effets complexes)
- Consommation mémoire réduite, démarrage plus rapide
- Prépare la transition mobile v2 sans aucun coût en v1
- Compatible avec les PC modestes de certains fans Stargate (ancienne base de joueurs)

### State Management — Architecture des Autoloads

**Pattern : Autoloads Godot + EventBus central**

Communication entre systèmes exclusivement via `EventBus` — aucun Manager n'appelle directement un autre.

```
AUTOLOADS (ordre d'initialisation strict)

1. GameState          ← Phase de jeu courante, partie active, mode (menu/gestion/exploration)
                         Dépendances : aucune

2. SaveManager        ← Lecture/écriture JSON versionné, sérialisation/désérialisation
                         Dépendances : aucune

3. EventBus           ← Hub de signaux global — tous les événements du jeu passent ici
                         Dépendances : aucune

4. TimelineManager    ← Chronologie (timer, vitesses ×1/×4/×16, pause automatique)
                         Dépendances : EventBus (émet timeline_paused, timeline_resumed)

5. ResourceManager    ← Budget $, Naquadah, Trinium, ZPM, E2PZ — revenus/dépenses
                         Dépendances : EventBus, SaveManager

6. NarrativeEngine    ← Chargement événements JSON, évaluation prérequis, orchestration choix
                         Dépendances : EventBus, GameState

7. FactionManager     ← Relations diplomatiques, influence par faction, seuils d'événements
                         Dépendances : EventBus, SaveManager
```

**Règle d'or :** Un Manager publie des événements sur `EventBus`, il ne modifie jamais directement l'état d'un autre Manager.

### Persistence — Sauvegarde JSON Versionnée

**Format :** JSON structuré avec `schema_version` dans chaque objet sérialisable.

**Objets sérialisables (schéma documenté avant implémentation) :**

| Objet | Champs principaux |
|---|---|
| `GameSave` | `schema_version`, `save_date`, `playtime`, `timeline`, `sgc_state` |
| `Member` | `id`, `name`, `race`, `archetype`, `stats{}`, `traits[]`, `aptitudes[]`, `health_state`, `mission_count` |
| `Infrastructure` | `id`, `level`, `built_date`, `is_active` |
| `Research` | `id`, `status`, `progress`, `assigned_member_id`, `start_date` |
| `Planet` | `id`, `designation`, `true_name`, `explored`, `visit_count`, `narrative_state{}` |
| `Faction` | `id`, `relationship`, `influence`, `unlocked_recruits[]` |
| `GovernmentTrust` | `value`, `history[]` |

### Débloquage Organique — Moteur ECA

**Format JSON d'une règle ECA :**

```json
{
  "id": "unlock_infirmerie",
  "trigger": "infrastructure_built",
  "conditions": [
    {"type": "infrastructure_exists", "id": "salle_embarquement"},
    {"type": "resource_gte", "resource": "budget", "value": 5000}
  ],
  "action": {"type": "unlock_infrastructure", "id": "infirmerie"},
  "description": "L'Infirmerie devient disponible après la Salle d'Embarquement avec budget suffisant"
}
```

**Avantages :** L'IA co-pilote peut générer et ajouter des règles sans toucher au code GDScript. Le moteur ECA évalue les règles concernées à chaque événement reçu depuis `EventBus`.

### Chronologie — Architecture Timer

**Boucle principale :**

```
TimelineManager._process(delta)
│
├── SI pause_active → rien
├── SINON → avancer le temps (delta × vitesse_courante)
│           vérifier les timers actifs (recherches, constructions)
│           SI timer complété → émettre EventBus.timer_completed(id)
│
EventBus.narrative_event_triggered → TimelineManager.pause()
EventBus.alert_triggered           → TimelineManager.pause()
EventBus.narrative_event_resolved  → TimelineManager.resume()  [si aucun autre event en attente]
```

**Vitesses :** `NORMAL = 1.0` / `FAST = 4.0` / `VERY_FAST = 16.0` / `PAUSED = 0.0`

### Assets — Stratégie de Chargement

**Lazy loading + transition légère :**

- Les illustrations narratives (PNG haute résolution) se chargent à la demande via `ResourceLoader.load_threaded_request()`
- Une transition de fondu (0.3s) masque le temps de chargement
- Les assets UI du dashboard (icônes, polices) sont préchargés au démarrage
- Les portraits de membres sont chargés par lot lors de l'ouverture des écrans d'équipe

### Audio — Architecture Native Godot

**Structure AudioBus :**

| Bus | Usage | Contenu |
|---|---|---|
| `Master` | Volume global | — |
| `Music` | Boucles musicales adaptatives | Gestion calme / Exploration tendue / Combat |
| `SFX` | Effets sonores | Activation Porte (kawoosh), UI, ambiances planétaires |
| `Voice` | Réservé v2 | Voix synthétique Assistant SGC |

**Transitions musicales :** fade-out/fade-in via `Tween` selon le contexte (GameState change → Music bus change).

### Architecture Decision Records

**ADR-001 : Compatibility Renderer**
- *Contexte :* Jeu 2D pur, fans Stargate sur PC variés, mobile v2 envisagé
- *Décision :* Renderer Compatibility (OpenGL)
- *Conséquences :* Pas de shaders avancés — acceptable pour le style concept art ; mobile v2 facilité

**ADR-002 : EventBus Central**
- *Contexte :* 7 Autoloads avec risque de couplage circulaire
- *Décision :* Communication uniquement via EventBus — aucun Manager n'appelle directement un autre
- *Conséquences :* Découplage total, testabilité améliorée, extension par l'IA sans risque

**ADR-003 : ECA Déclaratif JSON**
- *Contexte :* Graphe de débloquage organique avec centaines de conditions possibles
- *Décision :* Règles ECA en JSON externalisé, moteur d'évaluation en GDScript
- *Conséquences :* L'IA co-pilote peut générer des règles sans toucher au code ; schéma de règle versionné

**ADR-004 : Pause Automatique sur Événements Narratifs**
- *Contexte :* Chronologie continue risquait des race conditions avec les événements narratifs
- *Décision :* TimelineManager écoute EventBus et se pause immédiatement sur tout événement narratif ou alerte
- *Conséquences :* Élimine les race conditions par design ; protège le pilier Appropriation Narrative

---

## Préoccupations Transversales

Ces patterns s'appliquent à **TOUS les systèmes**. Toute implémentation doit les respecter.

### Gestion des Erreurs

**Stratégie : Signal via EventBus + ErrorHandler autoload**

- Erreurs **récupérables** → `EventBus.error_occurred.emit(system, message, false)` — le système gère localement
- Erreurs **critiques** → `ErrorHandler` autoload capture, logue, tente recovery, notifie le joueur discrètement
- **Aucune erreur silencieuse** — tout est loggué
- Jamais de crash visible joueur en production

```gdscript
# Exemple — NarrativeEngine
func load_event(event_id: String) -> NarrativeEvent:
    var path := "res://data/events/%s.json" % event_id
    if not FileAccess.file_exists(path):
        EventBus.error_occurred.emit("NarrativeEngine", "Event not found: %s" % event_id, false)
        return null  # Le caller gère le null
    # ... chargement normal
```

### Logging

**Format :** `[YYYY-MM-DDThh:mm:ss][LEVEL][Système] Message`
**Debug :** console Godot (`push_warning`/`push_error` pour couleurs MCP) + fichier `user://logs/sgc_debug.log`
**Production :** WARN et ERROR uniquement

**Niveaux et usage :**

| Niveau | Usage | Exemples |
|---|---|---|
| `DEBUG` | Tous les événements/actions | EventBus fires, ECA evaluations, narrative checks, prerequisite checks |
| `WARN` | Comportements anormaux | Mort sans blessure préalable, budget en limite critique, règle ECA sans action valide |
| `ERROR` | Échecs système | Save failed, fichier manquant, ECA rule invalide, JSON corrompu |

**Flag :** `LOG_TIMELINE_EVENTS: bool = false` dans `Constants.gd` — désactive le logging des ticks Chronologie en ×16 pour éviter le flood.

**Événements toujours loggués (avec timestamp ISO-8601) :**
`saves/loads`, `member_died`, `research_completed`, `infrastructure_built`,
`government_trust_changed`, `narrative_event_triggered`, `eca_rule_evaluated` (id + résultat),
`narrative_prerequisite_check` (stats équipe vs prérequis), `save_failed`, `faction_relationship_changed`

```gdscript
# autoloads/logger.gd
enum Level { DEBUG, INFO, WARN, ERROR }

static func log(level: Level, system: String, message: String) -> void:
    var timestamp := Time.get_datetime_string_from_system()
    var prefix := "[%s][%s][%s]" % [timestamp, Level.keys()[level], system]
    var line := "%s %s" % [prefix, message]
    match level:
        Level.DEBUG: if OS.is_debug_build(): print(line)
        Level.INFO:  print(line)
        Level.WARN:  push_warning(line)
        Level.ERROR: push_error(line)
    if OS.is_debug_build():
        _write_to_file(line)
```

### Configuration — 3 Couches

| Couche | Contenu | Format | Modifiable |
|---|---|---|---|
| `Constants.gd` | Valeurs immuables (caps, formules, flags debug) | GDScript `const` | ❌ |
| `data/balance/*.json` | Chiffres de balancing (coûts, durées, probabilités) | JSON externalisé | IA sans toucher au code |
| `user://settings.cfg` | Préférences joueur (volume, police, raccourcis) | ConfigFile Godot | ✅ |

> **Important :** `data/balance/` (valeurs numériques) est distinct de `data/rules/` (règles ECA). Ne pas mélanger.

**Validation au boot :** `validate_config()` vérifie l'intégrité JSON de tous les fichiers de balance et rules au démarrage — erreur fatale si JSON invalide.

### Système d'Événements

**Pattern :** EventBus central (Autoload) — signaux Godot typés
**Nommage :** verbe passé, `snake_case` → `member_died`, `research_completed`, `infrastructure_built`
**Règle :** signaux typés obligatoires (pas de `emit("string")`), traitement synchrone

```gdscript
# autoloads/event_bus.gd — signaux clés
signal member_health_changed(member_id: String, old_state: String, new_state: String)
signal member_died(member_id: String, cause: String)
signal research_completed(research_id: String, result: Dictionary)
signal infrastructure_built(infra_id: String)
signal narrative_event_triggered(event_id: String, team_id: String)
signal narrative_event_resolved(event_id: String, choice_id: String)
signal timeline_paused(reason: String)
signal timeline_resumed
signal government_trust_changed(old_value: float, new_value: float)
signal eca_rule_evaluated(rule_id: String, passed: bool)
signal error_occurred(system: String, message: String, is_critical: bool)
```

### Outils de Debug

**Désactivés en production (`OS.is_debug_build()` = false)**

| Outil | Activation | Usage |
|---|---|---|
| Console debug | `F12` | Commandes : `add_resource naquadah 100`, `trigger_event abydos_001`, `god_mode` |
| Overlay d'état | `F2` | GameState, vitesse Chronologie, budget, events en queue |
| Event injector | `fire_event <id>` | Déclencher n'importe quel événement ECA pour tester |
| `dump_save` | Console | Affiche le JSON de sauvegarde complet dans les logs |
| `validate_save` | Console | Vérifie l'intégrité du schéma versionné de la sauvegarde |
| `validate_config` | Auto au boot | Vérifie tous les JSON balance + rules au démarrage |

---

## Structure du Projet

### Pattern d'Organisation

**Pattern : Domain-Driven**

**Rationale :** Avec 8 domaines métier distincts, 7 Autoloads, un moteur ECA externalisé et des données JSON séparées du code, le pattern Domain-Driven offre la cohésion maximale. Chaque agent IA travaillant sur un domaine sait exactement où créer, modifier et tester ses fichiers — sans risque de couplage accidentel inter-domaines.

---

### Structure de Répertoires

```
stargate-command/               ← Racine du projet Godot (project.godot ici)
│
├── autoloads/                  # Singletons globaux (chargés avant toute scène)
│   ├── game_state.gd               # Phase courante, mode actif
│   ├── save_manager.gd             # Lecture/écriture JSON versionné
│   ├── event_bus.gd                # Hub de signaux global
│   ├── timeline_manager.gd         # Chronologie, vitesses, pause auto
│   ├── resource_manager.gd         # Budget, Naquadah, ZPM, etc.
│   ├── narrative_engine.gd         # Chargement events, éval prérequis
│   ├── faction_manager.gd          # Diplomatie, influence [Post-MVP]
│   ├── error_handler.gd            # Capture erreurs critiques
│   └── logger.gd                   # Logging structuré
│
├── domains/
│   ├── management/                 # 🏛️ Gestion SGC
│   │   ├── scenes/
│   │   │   ├── sgc_dashboard.tscn
│   │   │   ├── infrastructure_panel.tscn
│   │   │   └── research_panel.tscn
│   │   ├── infrastructure_manager.gd
│   │   ├── research_manager.gd
│   │   └── models/
│   │       ├── infrastructure.gd       # Resource sérialisable
│   │       └── research_project.gd     # Resource sérialisable
│   │
│   ├── characters/                 # 👤 Membres SG
│   │   ├── scenes/
│   │   │   ├── team_roster.tscn
│   │   │   ├── member_card.tscn
│   │   │   └── recruitment_panel.tscn
│   │   ├── member_manager.gd
│   │   ├── progression_system.gd
│   │   └── models/
│   │       ├── member.gd               # Resource sérialisable
│   │       ├── member_stats.gd
│   │       └── member_traits.gd
│   │
│   ├── narrative/                  # 📖 Exploration & événements
│   │   ├── scenes/
│   │   │   ├── event_screen.tscn
│   │   │   ├── choice_panel.tscn
│   │   │   └── consequence_screen.tscn
│   │   ├── prerequisite_checker.gd
│   │   ├── choice_resolver.gd
│   │   └── models/
│   │       └── narrative_event.gd
│   │
│   ├── eca/                        # ⚙️ Moteur ECA (débloquage organique)
│   │   ├── eca_engine.gd
│   │   ├── eca_condition_checker.gd
│   │   ├── eca_action_executor.gd
│   │   └── models/
│   │       └── eca_rule.gd
│   │
│   ├── combat/                     # ⚔️ Résolution de combat
│   │   ├── scenes/
│   │   │   └── combat_report.tscn
│   │   ├── combat_resolver.gd
│   │   └── models/
│   │       └── combat_outcome.gd
│   │
│   ├── government/                 # 🏦 Confiance Gouvernementale
│   │   ├── scenes/
│   │   │   └── trust_indicator.tscn
│   │   ├── trust_manager.gd
│   │   └── models/
│   │       └── government_trust.gd     # Resource sérialisable
│   │
│   ├── exploration/                # 🌌 Carte stellaire & missions
│   │   ├── scenes/
│   │   │   ├── star_map.tscn
│   │   │   └── planet_detail.tscn
│   │   ├── planet_manager.gd
│   │   └── models/
│   │       └── planet.gd               # Resource sérialisable
│   │
│   ├── journal/                    # 📚 Journal & Base de données in-game
│   │   ├── scenes/
│   │   │   ├── journal_screen.tscn
│   │   │   └── codex_screen.tscn
│   │   └── journal_manager.gd
│   │
│   └── factions/                   # 🤝 Diplomatie [Post-MVP]
│       ├── scenes/
│       │   └── faction_panel.tscn
│       ├── faction_ui_controller.gd
│       └── models/
│           └── faction.gd              # Resource sérialisable
│
├── ui/                             # 🖥️ UI transversale (non liée à un domaine)
│   ├── scenes/
│   │   ├── main_menu.tscn
│   │   ├── settings_screen.tscn
│   │   ├── pause_menu.tscn
│   │   ├── loading_overlay.tscn        # Transition fondu 0.3s
│   │   └── debug_overlay.tscn          # F2 — overlay état [debug only]
│   ├── components/
│   │   ├── tooltip.tscn
│   │   ├── confirm_dialog.tscn
│   │   ├── notification_bar.tscn
│   │   └── debug_console.tscn          # F12 — console [debug only]
│   └── theme/
│       └── sgc_theme.tres
│
├── shared/                         # 🔧 Utilitaires transversaux
│   ├── constants.gd                    # Constantes immuables (UPPER_SNAKE_CASE)
│   ├── utils/
│   │   ├── json_validator.gd           # validate_config() au boot
│   │   ├── save_schema_validator.gd    # validate_save()
│   │   └── math_utils.gd
│   └── components/
│       └── health_component.gd
│
├── data/                           # 📦 Données externalisées JSON
│   ├── rules/                          # Règles ECA (débloquage)
│   │   ├── infrastructure_rules.json
│   │   ├── research_rules.json
│   │   └── narrative_rules.json
│   ├── balance/                        # Valeurs balancing (≠ règles ECA)
│   │   ├── costs.json
│   │   ├── durations.json
│   │   └── probabilities.json
│   ├── events/                         # Événements narratifs par planète
│   │   ├── sgc/
│   │   │   └── sgc_001_premiere_mission.json
│   │   └── abydos/
│   │       └── abydos_001_arrivee.json
│   ├── planets/
│   │   └── abydos.json
│   └── factions/
│       ├── goa_uld.json
│       └── tollan.json
│
├── assets/                         # 🎨 Assets binaires
│   ├── illustrations/               # PNG narratifs haute résolution (lazy load)
│   │   ├── abydos/
│   │   └── sgc/
│   ├── portraits/                   # Portraits membres (chargés par lot)
│   ├── ui/                          # Icônes, boutons, fonds
│   ├── fonts/
│   └── audio/
│       ├── music/
│       │   ├── management_calm.ogg
│       │   ├── exploration_tense.ogg
│       │   └── combat.ogg
│       └── sfx/
│           ├── stargate_kawoosh.ogg
│           └── ui_click.ogg
│
├── tests/                          # 🧪 Tests GUT
│   ├── unit/
│   │   ├── test_eca_engine.gd
│   │   ├── test_prerequisite_checker.gd
│   │   ├── test_combat_resolver.gd
│   │   ├── test_timeline_manager.gd
│   │   └── test_save_manager.gd
│   └── integration/
│       ├── test_narrative_flow.gd
│       ├── test_eca_full_chain.gd
│       └── test_save_load_cycle.gd
│
├── project.godot
└── export_presets.cfg
```

---

### Localisation des Systèmes

| Système | Répertoire | Autoload associé |
|---|---|---|
| Gestion SGC (infra, budget) | `domains/management/` | `ResourceManager` |
| Membres & progression | `domains/characters/` | — |
| Événements narratifs | `domains/narrative/` | `NarrativeEngine` |
| Débloquage ECA | `domains/eca/` | — |
| Chronologie | `autoloads/` (service pur) | `TimelineManager` |
| Combat probabiliste | `domains/combat/` | — |
| Sauvegarde JSON | `autoloads/` (service pur) | `SaveManager` |
| Confiance Gouvernementale | `domains/government/` | — |
| Carte stellaire & planètes | `domains/exploration/` | — |
| Journal / Codex | `domains/journal/` | — |
| Diplomatie factions | `domains/factions/` | `FactionManager` |
| UI dashboard / menus | `ui/` | `GameState` |
| Règles ECA JSON | `data/rules/` | — |
| Valeurs de balancing | `data/balance/` | — |

---

### Conventions de Nommage

#### Fichiers & Dossiers

- Tous en `snake_case` → `member_manager.gd`, `sgc_dashboard.tscn`
- Dossiers de domaine : nom métier court → `management/`, `characters/`, `narrative/`
- Models (Resources) : nom de l'entité seule → `member.gd`, `faction.gd`

#### Code GDScript

| Élément | Convention | Exemple |
|---|---|---|
| Classe | `PascalCase` | `class_name MemberManager` |
| Fonction | `snake_case` | `func load_event()` |
| Variable | `snake_case` | `var current_trust: float` |
| Constante | `UPPER_SNAKE_CASE` | `const MAX_TEAM_SIZE: int = 4` |
| Signal | `snake_case` passé | `signal member_died` |
| Privé | préfixe `_` | `var _internal_state` |
| Autoload | `PascalCase` | `EventBus`, `GameState` |

#### Assets

| Catégorie | Format | Exemple |
|---|---|---|
| Illustrations | `{planète}_{id}_{slug}.png` | `abydos_001_arrivee.png` |
| Portraits | `{nom_slug}.png` | `jack_oneill.png` |
| Musique | `{contexte}_{ambiance}.ogg` | `management_calm.ogg` |
| SFX | `{objet}_{action}.ogg` | `stargate_kawoosh.ogg` |
| Events JSON | `{planète}_{id}_{slug}.json` | `abydos_001_arrivee.json` |
| Règles ECA | `{catégorie}_rules.json` | `infrastructure_rules.json` |

---

### Frontières Architecturales

> Ces règles sont immuables. Toute violation constitue un écart architectural.

1. **Un domaine ne lit jamais directement l'état d'un autre domaine** — communication uniquement via `EventBus`
2. **`data/rules/` et `data/balance/` ne se mélangent jamais** — règles ECA ≠ valeurs numériques
3. **Les Autoloads ne contiennent pas de logique de domaine** — ce sont des services d'infrastructure
4. **`shared/` ne dépend d'aucun domaine** — flux à sens unique : domaines → shared, jamais l'inverse
5. **Les tests unitaires ne touchent qu'au domaine testé** — pas de dépendances cross-domaine en unit tests

---

## Patterns d'Implémentation

Ces patterns garantissent que tous les agents IA produisent du code compatible et cohérent.

---

### Patterns Originaux

#### Pattern Original 1 : ECA-EventBus (Event-Condition-Action Réactif)

**Objectif :** Évaluer les règles de débloquage de manière déclarative, en réaction aux événements du jeu, sans couplage entre le moteur ECA et les domaines.

**Composants :**
- `EventBus` — émet les événements déclencheurs
- `EcaEngine` — écoute EventBus, charge les règles JSON, évalue conditions, exécute actions
- `EcaConditionChecker` — évalue chaque condition unitairement
- `EcaActionExecutor` — réinjecte sur EventBus les actions résultantes

**Flux de données :**
```
[Domaine] → EventBus.infrastructure_built.emit("salle_embarquement")
                ↓
         EcaEngine._on_event_received("infrastructure_built")
                ↓
         Filtre règles JSON dont trigger == "infrastructure_built"
                ↓
         EcaConditionChecker.check_all(rule.conditions)
                ↓ (si toutes OK)
         EcaActionExecutor.execute(rule.action)
                ↓
         EventBus.infrastructure_unlocked.emit("infirmerie")
                ↓
         [Domaine management] reçoit et débloque visuellement
```

**Guide d'implémentation :**

```gdscript
# domains/eca/eca_engine.gd
class_name EcaEngine
extends Node

var _rules: Array[Dictionary] = []

func _ready() -> void:
    _load_all_rules()
    EventBus.infrastructure_built.connect(func(_id): _on_event("infrastructure_built"))
    EventBus.research_completed.connect(func(_id, _r): _on_event("research_completed"))
    EventBus.member_died.connect(func(_id, _c): _on_event("member_died"))

func _load_all_rules() -> void:
    var paths := ["res://data/rules/infrastructure_rules.json",
                  "res://data/rules/research_rules.json"]
    for path in paths:
        var data := JsonValidator.load_json(path)
        if data:
            _rules.append_array(data)

func _on_event(trigger_type: String) -> void:
    var matching := _rules.filter(func(r): return r["trigger"] == trigger_type)
    for rule in matching:
        var passed := EcaConditionChecker.check_all(rule["conditions"])
        Logger.log(Logger.Level.DEBUG, "EcaEngine",
            "Rule %s: %s" % [rule["id"], "PASS" if passed else "FAIL"])
        EventBus.eca_rule_evaluated.emit(rule["id"], passed)
        if passed:
            EcaActionExecutor.execute(rule["action"])
```

**Règle d'usage :** Jamais de logique ECA dans un domaine. Toute condition de débloquage = une règle JSON dans `data/rules/`.

---

#### Pattern Original 2 : Prérequis Narratifs Dynamiques (Prerequisite-Gating)

**Objectif :** Calculer en temps réel quels choix narratifs sont accessibles (actifs) ou verrouillés (grisés) selon les stats réelles de l'équipe active — sans modifier les données de l'événement.

**Composants :**
- `NarrativeEvent` (Resource) — déclare les prérequis de chaque choix
- `PrerequisiteChecker` — évalue prérequis vs état courant, retourne `CheckResult[]`
- `ChoicePanel` (scène UI) — affiche actif/grisé selon résultats

**Flux de données :**
```
NarrativeEngine.trigger_event(event_id, team_id)
        ↓
Charge NarrativeEvent depuis data/events/
        ↓
Pour chaque choice dans event.choices :
    PrerequisiteChecker.evaluate(choice.prerequisites, team_id)
        → CheckResult { passed: bool, reason: String }
        ↓
EventBus.narrative_event_triggered.emit(event_id, choices_with_results)
        ↓
ChoicePanel : bouton actif si passed, grisé + tooltip reason si !passed
```

**Guide d'implémentation :**

```gdscript
# domains/narrative/prerequisite_checker.gd
class_name PrerequisiteChecker
extends RefCounted

static func evaluate(prerequisites: Array, team_id: String) -> Array:
    var results: Array = []
    var team := _get_team_members(team_id)
    for prereq in prerequisites:
        var result := { "passed": false, "reason": "" }
        match prereq["type"]:
            "min_stat":
                var best := _best_stat(team, prereq["stat"])
                result["passed"] = best >= prereq["value"]
                result["reason"] = "%s %d requis (équipe : %d)" % [
                    prereq["stat"], prereq["value"], best]
            "member_count":
                result["passed"] = team.size() >= prereq["value"]
                result["reason"] = "%d membres requis (%d disponibles)" % [
                    prereq["value"], team.size()]
            "infrastructure_exists":
                result["passed"] = InfrastructureManager.is_built(prereq["id"])
                result["reason"] = "Requiert : %s" % prereq["id"]
        Logger.log(Logger.Level.DEBUG, "PrerequisiteChecker",
            "narrative_prerequisite_check: %s → %s" % [prereq["type"], result["passed"]])
        results.append(result)
    return results

static func _best_stat(team: Array, stat: String) -> int:
    var best := 0
    for member in team:
        best = max(best, member.stats.get(stat, 0))
    return best
```

**Règle d'usage :** Les options grisées sont **toujours affichées** avec le `reason` en tooltip. Ne jamais filtrer ni masquer les choix verrouillés.

---

#### Pattern Original 3 : Chronologie Interruptible (Interruptible Timeline)

**Objectif :** Faire avancer le temps de jeu en continu à vitesse variable, tout en garantissant l'arrêt immédiat et déterministe sur tout événement narratif ou alerte — sans race conditions.

**Composants :**
- `TimelineManager` — boucle `_process`, compteur multi-vitesse, pile d'interruptions
- `EventBus` — déclenche pauses/reprises
- `_pending_pauses: Array[String]` — garantit reprise propre si plusieurs événements simultanés

**Flux de données :**
```
_process(delta)
    → SI _pending_pauses non vide : skip
    → SINON : avancer game_time (delta × current_speed)
    → Vérifier timers actifs → SI complété : émettre timer_completed

EventBus.narrative_event_triggered → _push_pause(event_id)
EventBus.alert_triggered           → _push_pause(event_id)
EventBus.narrative_event_resolved  → _pop_pause(event_id)
    → SI pile vide : émettre timeline_resumed
```

**Guide d'implémentation :**

```gdscript
# autoloads/timeline_manager.gd
class_name TimelineManager
extends Node

enum Speed { PAUSED = 0, NORMAL = 1, FAST = 4, VERY_FAST = 16 }

var current_speed: Speed = Speed.NORMAL
var game_time: float = 0.0
var _pending_pauses: Array[String] = []
var _active_timers: Dictionary = {}  # id → { duration, elapsed }

func _ready() -> void:
    EventBus.narrative_event_triggered.connect(
        func(event_id, _team): _push_pause(event_id))
    EventBus.alert_triggered.connect(
        func(event_id): _push_pause(event_id))
    EventBus.narrative_event_resolved.connect(
        func(event_id, _choice): _pop_pause(event_id))

func _process(delta: float) -> void:
    if not _pending_pauses.is_empty():
        return
    var dt := delta * float(current_speed)
    game_time += dt
    _tick_timers(dt)

func _push_pause(reason: String) -> void:
    if reason not in _pending_pauses:
        _pending_pauses.append(reason)
    EventBus.timeline_paused.emit(reason)

func _pop_pause(reason: String) -> void:
    _pending_pauses.erase(reason)
    if _pending_pauses.is_empty():
        EventBus.timeline_resumed.emit()

func _tick_timers(dt: float) -> void:
    for id in _active_timers.keys():
        _active_timers[id]["elapsed"] += dt
        if _active_timers[id]["elapsed"] >= _active_timers[id]["duration"]:
            EventBus.timer_completed.emit(id)
            _active_timers.erase(id)
            break  # Évite modification dict pendant itération
```

**Règle d'usage :** Ne jamais appeler `_push_pause()` directement depuis un domaine. Toujours passer par `EventBus.narrative_event_triggered` ou `EventBus.alert_triggered`.

---

### Patterns Standard

#### Communication — Event-Based (EventBus)

**Pattern :** Toute communication inter-domaines passe exclusivement par `EventBus`. Appels directs autorisés uniquement parent→enfant dans la même scène.

```gdscript
# ✅ Correct — communication via EventBus
EventBus.infrastructure_built.emit("infirmerie")

# ✅ Correct — parent configure son enfant direct
$MemberCard.setup(member_data)

# ❌ Interdit — domaine A appelle domaine B directement
ResourceManager.deduct(500)   # depuis InfrastructureManager → INTERDIT
```

---

#### Création d'Entités — Factory (Membres) + Prefab Godot (Scènes)

**Membres → Factory pattern :**

```gdscript
# domains/characters/member_factory.gd
class_name MemberFactory
extends RefCounted

static func create(archetype: String, race: String) -> Member:
    var member := Member.new()
    var templates: Dictionary = JsonValidator.load_json(
        "res://data/balance/archetypes.json")
    var template: Dictionary = templates[archetype]
    member.id = _generate_id()
    member.archetype = archetype
    member.race = race
    member.stats = template["base_stats"].duplicate()
    member.traits = []
    member.health_state = Member.HealthState.HEALTHY
    member.mission_count = 0
    Logger.log(Logger.Level.DEBUG, "MemberFactory",
        "Created member %s (%s/%s)" % [member.id, archetype, race])
    return member

static func _generate_id() -> String:
    return "mbr_%d" % Time.get_ticks_msec()
```

**Infrastructures → Prefab instantiation Godot :**

```gdscript
# Instanciation via SceneTree — jamais new() pour les nœuds UI
var panel := load("res://domains/management/scenes/infrastructure_panel.tscn").instantiate()
panel.setup(infra_id)
$InfraContainer.add_child(panel)
```

---

#### Transitions d'État — State Machine (GameState) + Flags (Membres)

**`GameState` global → State machine :**

```gdscript
# autoloads/game_state.gd
enum Phase { MAIN_MENU, MANAGEMENT, EXPLORATION, NARRATIVE, COMBAT }

var current_phase: Phase = Phase.MAIN_MENU

func transition_to(new_phase: Phase) -> void:
    Logger.log(Logger.Level.INFO, "GameState",
        "Transition: %s → %s" % [Phase.keys()[current_phase], Phase.keys()[new_phase]])
    current_phase = new_phase
    EventBus.game_phase_changed.emit(new_phase)
```

**Membres → Flag-based (état de santé) :**

```gdscript
# domains/characters/models/member.gd
class_name Member
extends Resource

enum HealthState { HEALTHY, WOUNDED, KO, DEAD }

@export var id: String
@export var health_state: HealthState = HealthState.HEALTHY

func set_health(new_state: HealthState, cause: String = "") -> void:
    var old := health_state
    health_state = new_state
    EventBus.member_health_changed.emit(
        id, HealthState.keys()[old], HealthState.keys()[new_state])
    if new_state == HealthState.DEAD:
        EventBus.member_died.emit(id, cause)
```

---

#### Accès aux Données — Resources Godot + Accès Centralisé

**Règle :** Les domaines n'ouvrent **jamais** `FileAccess` directement. Tout JSON passe par `JsonValidator`.

```gdscript
# shared/utils/json_validator.gd
class_name JsonValidator
extends RefCounted

static func load_json(path: String) -> Variant:
    if not FileAccess.file_exists(path):
        EventBus.error_occurred.emit("JsonValidator", "File not found: %s" % path, false)
        return null
    var file := FileAccess.open(path, FileAccess.READ)
    var json := JSON.new()
    if json.parse(file.get_as_text()) != OK:
        EventBus.error_occurred.emit("JsonValidator", "Invalid JSON: %s" % path, true)
        return null
    return json.data

# ✅ Usage correct dans un domaine
var rules: Array = JsonValidator.load_json("res://data/rules/infrastructure_rules.json")

# ❌ Interdit — FileAccess direct dans un domaine
var file := FileAccess.open("res://data/rules/...", FileAccess.READ)
```

---

### Règles de Cohérence

| Pattern | Convention | ❌ Anti-pattern interdit |
|---|---|---|
| Communication inter-domaines | `EventBus` uniquement | Appel direct Manager→Manager |
| Création de membres | `MemberFactory.create(archetype, race)` | `Member.new()` direct |
| Lecture JSON | `JsonValidator.load_json(path)` | `FileAccess` dans un domaine |
| Transitions GameState | `GameState.transition_to(Phase.X)` | Modifier `current_phase` directement |
| État membre | `member.set_health(state, cause)` | Modifier `health_state` directement |
| Pause Chronologie | Via `EventBus.narrative_event_triggered` | Appeler `_push_pause()` directement |
| Nouvelles règles ECA | JSON dans `data/rules/` | Logique ECA hardcodée en GDScript |
| Signaux | Typés obligatoires (`signal x(id: String)`) | `emit("string")` non typé |

---

## Architecture Validation

### Résumé de Validation

| Vérification | Résultat | Notes |
|---|---|---|
| Compatibilité des décisions | ✅ PASS | Renderer Compatibility + EventBus + ECA cohérents |
| Couverture GDD | ✅ PASS | 11/11 systèmes core couverts |
| Complétude des patterns | ✅ PASS | 7 patterns — création, communication, état, erreurs, données, événements, transitions |
| Complétude du document | ✅ PASS | Aucun placeholder, aucune section vide |

### Rapport de Couverture

**Systèmes couverts :** 11/11
**Patterns définis :** 7 (3 originaux + 4 standard)
**Décisions actées :** 9 + 4 ADRs

### Date de Validation

2026-04-26

---

## Development Environment

### Prérequis

| Outil | Version | Installation |
|---|---|---|
| **Godot Engine** | 4.6.2 stable | [godotengine.org/download](https://godotengine.org/download) |
| **Git** | ≥ 2.40 | [git-scm.com](https://git-scm.com) |
| **GUT (Godot Unit Testing)** | ≥ 7.4 | Asset Library Godot ou [bitwes/gut](https://github.com/bitwes/gut) |
| **VS Code** (optionnel) | ≥ 1.88 | Extension `godot-tools` recommandée |

### Outils IA (MCP Servers)

Les MCP servers suivants ont été sélectionnés pour augmenter les capacités de
l'IA co-pilote sur ce projet :

| MCP Server | Dépôt | Rôle |
|---|---|---|
| **Godot MCP** | `bradypp/godot-mcp` | Accès direct scènes/nœuds/debug Godot pour l'IA |
| **Context7** | `upstash/context7` | Documentation Godot 4 à jour — évite les APIs obsolètes |

**Configuration MCP (`.mcp.json` ou équivalent IDE) :**

```json
{
  "mcpServers": {
    "godot": {
      "command": "npx",
      "args": ["-y", "bradypp/godot-mcp"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

Ces serveurs donnent à l'IA un accès direct à Godot pour l'inspection de scènes,
les requêtes d'assets et la génération de code contextualisé.

### Initialisation du Projet Godot

```bash
# 1. Cloner le dépôt
git clone https://github.com/dylanbehetre/stargate-command.git
cd stargate-command

# 2. Ouvrir le projet dans Godot 4.6.2
#    → Godot Project Manager → Import → sélectionner project.godot

# 3. Configurer les Autoloads (Project Settings → Autoloads) — ordre strict :
#    1. autoloads/game_state.gd        → GameState
#    2. autoloads/save_manager.gd      → SaveManager
#    3. autoloads/event_bus.gd         → EventBus
#    4. autoloads/timeline_manager.gd  → TimelineManager
#    5. autoloads/resource_manager.gd  → ResourceManager
#    6. autoloads/narrative_engine.gd  → NarrativeEngine
#    7. autoloads/faction_manager.gd   → FactionManager
#    8. autoloads/error_handler.gd     → ErrorHandler
#    9. autoloads/logger.gd            → Logger

# 4. Renderer : Project Settings → Rendering → Renderer → Compatibility

# 5. Installer GUT via l'Asset Library Godot
#    → AssetLib → chercher "GUT" → installer dans addons/gut/
#    → Project Settings → Plugins → GUT → Enable
```

### Premières Étapes d'Implémentation

1. Créer la structure de dossiers définie dans la section **Structure du Projet**
2. Implémenter `event_bus.gd` en premier (dépendance de tous les autres Autoloads)
3. Implémenter `logger.gd` (disponible dès le boot pour tous les systèmes)
4. Valider le boot avec `validate_config()` retournant OK sur des JSON vides
5. Commencer par le domaine **ECA** — colonne vertébrale du débloquage organique
