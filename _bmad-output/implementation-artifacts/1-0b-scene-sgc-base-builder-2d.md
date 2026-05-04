# Story 1.0b : Scène SGC Base Builder 2D

## Statut
**Statut :** review
**Epic :** 1 - Initialisation du Commandement SGC et Infrastructure
**Priorité :** Haute

## Description
En tant que Commandant du SGC, je souhaite voir le SGC en vue de coupe 2D scrollable, afin de naviguer et d'interagir physiquement avec mes infrastructures (style Fallout Shelter).

## Critères d'Acceptation
1. **Scène de Base :** `SgcBaseView.tscn` charge un `ScrollContainer` vertical représentant les niveaux du SGC.
2. **Niveaux et Salles :** Chaque niveau contient N salles représentées par des `Area2D` (implémentées en `MarginContainer` pour Godot Focus) cliquables avec un `Sprite2D` (3 états : Abandonné / En chantier / Opérationnel).
3. **Focus et Navigation :** Le `Camera2D` se centre sur la salle focalisée lors de la navigation clavier (`Tab`).
4. **Interaction :** Cliquer ou appuyer sur `Entrée` sur une salle instancie la modale `RoomModal.tscn`.
5. **Défaut :** Le focus par défaut est sur la salle "Bureau du Général" (Niveau 27).
6. **Esthétique :** Respect de la palette "Slate Industrial" et de la structure en vue de coupe.

## Contexte Technique
- **Nœuds Godot :** `ScrollContainer` > `VBoxContainer` > `HBoxContainer` > `RoomNode`.
- **Navigation :** Utilisation du système de focus natif de Godot 4.
- **Modale :** `RoomModal` gérée via `EventBus`.
- **Architecture :** Respect du pattern DDD et EventBus.

## Architecture & Fichiers
### 1. `domains/management/scenes/sgc_base_view.tscn`
Scène principale de la vue en coupe :
- `ScrollContainer` (Vertical)
- `VBoxContainer` (Niveaux)
- `HBoxContainer` (Salles par niveau)

### 2. `domains/management/scenes/room_node.tscn`
Représentation d'une salle :
- `MarginContainer` avec `focus_mode = 2`.
- `Sprite2D` pour l'illustration de la salle.
- `Label` pour le nom de la salle.

### 3. `ui/components/room_modal.tscn`
Modale d'interaction :
- Description de la salle.
- Actions disponibles (Réhabiliter, Accéder).

## Tasks/Subtasks
- [x] 1. Création de la structure de scène `SgcBaseView`
    - [x] Mettre en place le `ScrollContainer` et la hiérarchie des niveaux.
    - [x] Configurer la `Camera2D` pour suivre le focus.
- [x] 2. Implémenter le composant `RoomNode`
    - [x] Créer la scène `room_node.tscn` avec `Area2D` et `Sprite2D`.
    - [x] Gérer les 3 états visuels (Abandonné, En chantier, Opérationnel).
    - [x] Connecter les signaux de clic.
- [x] 3. Gérer la Navigation Clavier
    - [x] Implémenter le cycle de focus entre les salles.
    - [x] Centrer la caméra sur la salle active.
- [x] 4. Implémenter la Modale de Salle
    - [x] Créer `room_modal.tscn` de base.
    - [x] Connecter l'EventBus pour déclencher l'ouverture de la modale.
- [x] 5. Tests et Validation
    - [x] Vérifier le scroll vertical.
    - [x] Vérifier le changement visuel des salles.
    - [x] Valider l'ouverture de la modale.

## Dev Agent Record
### Implementation Plan
- Création de la structure dynamique des 28 niveaux du SGC.
- Implémentation du focus clavier avec centrage de caméra fluide.
- Système de modale via EventBus pour les interactions de salles.

### Debug Log
- Utilisation de `MarginContainer` pour `RoomNode` afin de bénéficier du focus Godot.
- Caméra centrée via `Tween` sur le `focus_entered` des salles.
- Modale instanciée directement dans `SgcBaseView` pour le MVP.

### Completion Notes
- SGC généré dynamiquement avec les salles canoniques (Infirmerie, R&D, Gateroom, etc.).
- Navigation clavier fonctionnelle (Tab/Flèches).
- Modale interactive (Fermer, Réhabiliter, Accéder).

## File List
- `domains/management/scenes/sgc_base_view.tscn`
- `domains/management/scenes/sgc_base_view.gd`
- `domains/management/scenes/room_node.tscn`
- `domains/management/scenes/room_node.gd`
- `ui/components/room_modal.tscn`
- `ui/components/room_modal.gd`
- `autoloads/event_bus.gd`
- `tests/unit/test_base_view.gd`

## Change Log
- 2026-05-01: Initialisation de la story (Pivot Base Builder 2D).
- 2026-05-01: Implémentation complète de la vue en coupe et du système de focus.
