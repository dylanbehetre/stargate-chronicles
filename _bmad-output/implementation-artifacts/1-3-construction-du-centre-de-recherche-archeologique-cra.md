> ⚠️ **[SUPERSEDED — PIVOT BASE BUILDER 2D — 2026-05-01]**
> Cette story est annulée. La salle "Centre de Recherche Archéologique" est renommée en **"Bureaux des Recherches Culturelles"**.
> L'interaction via menu est remplacée par un clic sur la salle dans la vue en coupe 2D + modale contextuelle.
> Se référer à : `sprint-change-proposal-2026-05-01.md` — Story 1.3 refondue.

# Story 1.3: Construction du Centre de Recherche Archéologique (CRA) [ARCHÍVÉ]

Status: done

## Story

As a Commandant du SGC,
I want construire le Centre de Recherche Archéologique,
so that permettre à mes experts de commencer l'analyse des glyphes de la Porte.

## Acceptance Criteria

1. **Menu Infrastructure :** Le joueur accède à une interface de gestion des infrastructures depuis le Bureau du Général (Hub).
2. **Données CRA :** Le "Centre de Recherche Archéologique" (CRA) est listé avec un coût de 50,000 USD et une durée de construction de 24h (temps in-game).
3. **Transaction Financière :** Le coût est déduit du budget USD via le `ResourceManager` lors de la validation.
4. **Gestion du Temps :** Un timer est lancé et géré par le `TimelineManager`. La construction progresse même si le joueur change de salle.
5. **Notification & Signal :** Une fois terminé, une notification s'affiche et le signal `infrastructure_built("cra")` est émis via l' `EventBus`.
6. **Débloquage Fonctionnel :** Les menus "Recrutement" (pour les archéologues) et "Recherche" (pour les glyphes) deviennent accessibles après la construction.
7. **Bouton "⚡ Finaliser" :** Un bouton permet d'accélérer le temps jusqu'à la fin de la construction, s'arrêtant automatiquement en cas d'événement prioritaire (Alerte/Narration).

## Tasks / Subtasks

- [x] 1. Configuration des données d'infrastructure (AC: 2)
  - [x] Créer `data/balance/infrastructure_data.json` avec les paramètres du CAA (coût, durée).
  - [x] Définir la règle ECA de débloquage dans `data/rules/infrastructure_rules.json`.
- [x] 2. Création de l'interface de construction (AC: 1, 2, 7)
  - [x] Créer `domains/management/scenes/infrastructure_panel.tscn` (Style Slate Industrial).
  - [x] Implémenter la liste des infrastructures avec barre de progression.
  - [x] Ajouter le bouton "⚡ Finaliser" interactif.
- [x] 3. Logique métier et coordination (AC: 3, 4, 5, 7)
  - [x] Connecter le panel au `ResourceManager` pour vérifier et déduire les fonds.
  - [x] Implémenter le suivi du timer via le `TimelineManager`.
  - [x] Implémenter la logique d'avance rapide (Fast Forward) jusqu'à l'échéance du timer.
  - [x] Émettre le signal `infrastructure_built` à la complétion.
- [x] 4. Intégration et Débloquage (AC: 6)
  - [x] Ajouter l'accès au panel d'infrastructure dans `GeneralOffice`.
  - [x] Mettre à jour les conditions de visibilité des menus Recrutement et Recherche.

## Dev Notes

- **Architecture DDD :** La logique de construction doit résider dans `domains/management/`.
- **Event-Driven :** Ne pas coupler l'UI directement aux managers. Passer par l' `EventBus` pour les notifications de complétion.
- **Persistence :** L'état de construction (en cours, terminé) doit être sérialisable via le `SaveManager`.
- **UI UX :** Utiliser `sgc_theme.tres` et respecter la palette `Slate Industrial` (#2b2d31, #f5b914). Navigation au clavier obligatoire.

### Project Structure Notes

- **Autoloads :** Utiliser `ResourceManager` pour le budget et `TimelineManager` pour le flux temporel.
- **Signals :** Utiliser `EventBus.budget_changed` pour mettre à jour le dashboard lors du paiement.

### Project Context Rules

- Aucun fichier `project-context.md` détecté, se référer aux standards `game-architecture.md`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 1.3]
- [Source: _bmad-output/game-architecture.md#Decisions Architecturales]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Visual Design Foundation]

## Dev Agent Record

### Agent Model Used

Gemini 3 Flash

### Debug Log References

### Completion Notes List

### File List

- `autoloads/event_bus.gd`
- `autoloads/game_state.gd`
- `autoloads/timeline_manager.gd`
- `data/balance/infrastructure_data.json`
- `data/rules/infrastructure_rules.json`
- `domains/management/scenes/infrastructure_panel.gd`
- `domains/management/scenes/infrastructure_panel.tscn`
- `ui/scenes/general_office.gd`
- `ui/scenes/general_office.tscn`
- `project.godot`
- `tests/unit/test_infrastructure.gd`
