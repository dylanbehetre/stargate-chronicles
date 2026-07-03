# Story 1.0b : Scène SGC Base Builder 2D — Vue en Coupe Réaliste

## Statut
**Statut :** todo
**Epic :** 1 - Initialisation du Commandement SGC et Infrastructure
**Priorité :** Haute

## Description
En tant que Commandant du SGC, je souhaite voir le SGC en **vue en coupe 2D réaliste et scrollable** inspirée de *Fallout Shelter* et *XCOM 2*, afin de naviguer et d'interagir physiquement avec mes infrastructures dans un environnement immersif représentant fidèlement le complexe souterrain de Cheyenne Mountain.

## Vision Visuelle Cible

La vue en coupe doit afficher (de haut en bas) :
1. **Surface de Cheyenne Mountain** : Silhouette de montagne, bâtiment NORAD, antennes.
2. **28 niveaux souterrains** avec pour chaque niveau :
   - Une **dalle béton épaisse** (28px) + **poutre métallique** (12px) séparant les niveaux
   - Un **couloir arrondi** (style silo cylindrique) en béton beige-gris
   - Des **tuyauteries et câblages apparents** sous le plafond
   - Des **tracés au sol** rouges et verts (indication direction/zone)
   - Des **salles cliquables** reliées par des **portes blindées à deux battants**
3. Un **puits d'ascenseur principal** traversant tous les niveaux (cage grillage + cabine animée)
4. Des **ascenseurs secondaires** couvrant des plages N01-10, N10-20, N20-28
5. Des **marquages obliques noir/jaune** devant les zones sensibles (Gateroom, Confinement, Armurerie)

**Référence de style** : `stargate-sgc-base-builder` SKILL.md — section "Éléments Architecturaux Obligatoires"

## Critères d'Acceptation

### CA-01 : Architecture de scène Node2D (remplace ScrollContainer)
**Given** La scène `SgcBaseView.tscn` est chargée.
**When** Le rendu est effectué.
**Then** La scène utilise une hiérarchie `Node2D` avec `Camera2D` (et non un `ScrollContainer` UI).
**And** Tous les éléments visuels de la base sont positionnés dans l'espace monde 2D (coordonnées absolues).
**And** La navigation se fait par déplacement de la `Camera2D` (pan vertical + zoom optionnel).

### CA-02 : Surface de Cheyenne Mountain
**Given** La scène est affichée.
**When** Le joueur scrolle vers le haut.
**Then** La surface de Cheyenne Mountain est visible au-dessus du Niveau 01.
**And** La surface affiche au minimum : silhouette de montagne, bâtiment d'entrée NORAD, guérites de sécurité.

### CA-03 : Séparations inter-niveau réalistes
**Given** La scène affiche les 28 niveaux.
**When** Le rendu de chaque tranche niveau est effectué.
**Then** Chaque niveau est séparé du précédent par une **dalle béton** (couleur `#2E2E2E`, hauteur 28px).
**And** Une **poutre métallique** (`#3A4A5A`, hauteur 12px) est visible sur le dessus de chaque dalle.
**And** Des tuyauteries apparentes sont rendues sous le plafond de chaque niveau (bande de 20px en haut du couloir).

### CA-04 : Couloirs arrondis style silo
**Given** L'intérieur d'un niveau est rendu.
**When** Le fond du couloir est affiché.
**Then** Le fond du couloir est en béton beige-gris (`#4A4A40`) avec des coins supérieurs légèrement arrondis (rappelant l'intérieur cylindrique du silo).
**And** Les murs latéraux du silo (40px de chaque côté) sont visibles en béton courbe.

### CA-05 : Tracés de sol rouge et vert
**Given** Un niveau est rendu.
**When** Le sol du couloir est affiché.
**Then** Une **ligne verte** (4px, `#2ECC71`) est tracée en continu le long du couloir, indiquant la route d'évacuation vers l'ascenseur.
**And** Une **ligne rouge** (4px, `#E74C3C`) délimite les zones restreintes (près des portes sensibles).

### CA-06 : Portes blindées avec marquages
**Given** Deux salles sont adjacentes dans un niveau.
**When** Leur jonction est rendue.
**Then** Une **porte blindée à deux battants** (`60px × 180px`, métal gris `#3A3A3A`) est affichée entre les salles.
**And** La porte affiche une étiquette USAF avec le numéro de niveau et le secteur en texte blanc ou noir.
**And** Des traits obliques (45°) sont visibles sur les montants de porte des zones sensibles.
**And** Un indicateur lumineux (vert/rouge) est visible sur le côté de chaque porte.

### CA-07 : Marquages obliques noir/jaune zones sensibles
**Given** Une salle sensible est rendue (Gateroom N28, Confinement N23-24, Armurerie N20/N28, Décontamination N19).
**When** L'entrée de la zone est affichée.
**Then** Des **bandes obliques alternées noir/jaune** (45°, 20px chacune) sont visibles sur le sol et les montants de la porte.

### CA-08 : Puits d'ascenseur principal animé
**Given** La scène est chargée.
**When** Le puits d'ascenseur est affiché.
**Then** Une colonne verticale traversant tous les 28 niveaux est rendue, avec une cage en grillage métallique sombre et des câbles Line2D verticaux.
**And** Une **cabine d'ascenseur** (`90×160px`) se déplace fluidement (Tween, durée ~0.6s) vers le niveau contenant la salle actuellement focalisée.

### CA-09 : Ascenseurs secondaires
**Given** La scène est chargée.
**When** Le rendu latéral est effectué.
**Then** Des ascenseurs secondaires (cage `60px` de large) sont présents pour les plages N01-N10, N10-N20, et N20-N28.
**And** Ces ascenseurs secondaires sont positionnés latéralement (côté gauche ou droit selon la plage).

### CA-10 : Salles cliquables avec 3 états visuels
**Given** Les salles canoniques sont générées.
**When** Une salle est rendue.
**Then** Elle est représentée par un `Area2D` cliquable contenant un `Sprite2D` d'illustration et un `Label` de nom.
**And** Les 3 états sont visuellement distincts :
  - **Abandonné** : désaturé, sombre, indicateur rouge
  - **En chantier** : teinté orange/jaune, indicateur orange clignotant
  - **Opérationnel** : clair, coloré, indicateur vert
**And** L'état des salles génériques (non-canon) est **Abandonné** par défaut.

### CA-11 : Salles spéciales multi-hauteur
**Given** La Gateroom (N28) est rendue.
**When** Le niveau 28 est affiché.
**Then** La salle Gateroom occupe visuellement **2 niveaux de hauteur** (N27 + N28) avec un Sprite2D de hauteur double.
**And** La Salle de Contrôle (N27) est visible avec une fenêtre vitrée inclinée donnant sur la Gateroom en contrebas.

### CA-12 : Navigation Camera2D
**Given** La scène est active.
**When** Le joueur appuie sur `Tab` ou les touches directionnelles.
**Then** La `Camera2D` se centre sur la prochaine salle avec une animation Tween fluide (TRANS_SINE, ~0.4s).
**And** Le focus par défaut au démarrage est la salle **Bureau du Général / Salle de Contrôle** (Niveau 27).

### CA-13 : Interaction — Modale de salle
**Given** Une salle est focalisée.
**When** Le joueur clique dessus ou appuie sur `Entrée`.
**Then** La modale `RoomModal.tscn` s'ouvre via `EventBus.room_modal_requested`.
**And** La modale affiche : nom de la salle, état actuel, description canonique, et les actions disponibles (Réhabiliter / Accéder).

### CA-14 : Performances
**Given** Les 28 niveaux sont générés.
**When** Le rendu est actif.
**Then** Le framerate reste à **60 FPS stable** sur une machine de référence (PC 3-5 ans).
**And** Le temps de chargement initial de la scène est inférieur à **2 secondes**.

## Contexte Technique

### Architecture Cible
- **Paradigme** : `Node2D` + `Camera2D` (rendu monde 2D, pas UI-only)
- **Navigation** : Déplacement `Camera2D` via Tween sur focus d'une salle
- **Modale** : `RoomModal` gérée via `EventBus`
- **Architecture** : Respect du pattern DDD et EventBus

### Spécifications de grille (issues du skill `stargate-sgc-base-builder`)
```
Hauteur niveau     : 220px
Dalle béton        : 28px
Poutre acier       : 12px
Tranche totale     : 260px (220 + 28 + 12)
Salle standard     : 280×180px
Ascenseur principal: 90px large
Murs latéraux      : 40px (chaque côté)
```

### Fichiers Godot Cibles
- **`domains/management/scenes/sgc_base_view.tscn`** — Scène principale (Node2D)
- **`domains/management/scenes/sgc_base_view.gd`** — Logique de construction et navigation
- **`domains/management/scenes/sgc_level.tscn`** — Composant d'un niveau (dalle, poutre, couloir, tracés)
- **`domains/management/scenes/sgc_level.gd`** — Logique de rendu d'un niveau
- **`domains/management/scenes/room_node.tscn`** — Salle cliquable (Area2D)
- **`domains/management/scenes/room_node.gd`** — 3 états visuels
- **`domains/management/scenes/elevator_shaft.tscn`** — Puits d'ascenseur avec cabine
- **`domains/management/scenes/elevator_shaft.gd`** — Animation de cabine
- **`domains/management/scenes/door_node.tscn`** — Porte blindée entre salles
- **`ui/components/room_modal.tscn`** — Modale d'interaction (inchangée)

### Assets Graphiques Requis
Tous les assets sont en `.webp`, générés via `generate_image` selon les directives du skill `image-art-direction` :

| Asset | Chemin | Description |
|---|---|---|
| Surface Cheyenne Mountain | `assets/illustrations/sgc/cheyenne_mountain_surface.webp` | Silhouette montagne + bâtiment NORAD |
| Fond couloir béton (tileable) | `assets/illustrations/sgc/corridor_background.webp` | Couloir arrondi SGC, tileable |
| Porte blindée standard | `assets/illustrations/sgc/door_standard.webp` | Porte 2 battants métal gris |
| Porte zone restreinte | `assets/illustrations/sgc/door_restricted.webp` | Porte + marquages noir/jaune |
| Cabine ascenseur | `assets/illustrations/sgc/elevator_cabin.webp` | Cabine métallique |
| Cage ascenseur (tileable) | `assets/illustrations/sgc/elevator_shaft_tile.webp` | Grillage métallique vertical |
| Gateroom | `assets/illustrations/sgc/room_gateroom.webp` | Salle de la Porte (hauteur ×2) |
| Salle de Contrôle | `assets/illustrations/sgc/room_control_room.webp` | Vitre sur Gateroom |
| Infirmerie | `assets/illustrations/sgc/room_infirmary.webp` | Lits médicaux, blanc froid |
| Laboratoire R&D | `assets/illustrations/sgc/room_lab_rd.webp` | Artéfacts aliens, écrans |

## Tasks/Subtasks

- [ ] 0. Génération des assets graphiques
    - [ ] Générer `cheyenne_mountain_surface.webp`
    - [ ] Générer `corridor_background.webp` (tileable)
    - [ ] Générer les assets de portes (`door_standard.webp`, `door_restricted.webp`)
    - [ ] Générer les assets d'ascenseur (`elevator_cabin.webp`, `elevator_shaft_tile.webp`)
    - [ ] Générer les assets de salles prioritaires (Gateroom, Salle de Contrôle, Infirmerie, R&D)

- [ ] 1. Refonte de `SgcBaseView` en architecture Node2D
    - [ ] Créer la scène `sgc_base_view.tscn` avec `Node2D` + `Camera2D`
    - [ ] Implémenter la logique de construction des niveaux dans `sgc_base_view.gd`
    - [ ] Gérer la navigation Camera2D via EventBus
    - [ ] Intégrer `MountainSurface` au-dessus du N01
    - [ ] Intégrer les murs latéraux du silo (Polygon2D)

- [ ] 2. Créer le composant `SgcLevel` (dalle + couloir + tracés)
    - [ ] Créer `sgc_level.tscn` avec Polygon2D pour dalle béton et poutre
    - [ ] Implémenter le fond de couloir arrondi
    - [ ] Ajouter les tuyauteries plafond (Polygon2D/Sprite2D)
    - [ ] Implémenter les tracés sol rouge et vert (Line2D)
    - [ ] Ajouter les labels de niveau standardisés USAF

- [ ] 3. Créer le composant `ElevatorShaft` (ascenseur principal)
    - [ ] Créer `elevator_shaft.tscn` avec cage grillage et câbles Line2D
    - [ ] Implémenter la cabine (Polygon2D ou Sprite2D)
    - [ ] Animer le déplacement de cabine vers le niveau focalisé (Tween)
    - [ ] Ajouter les 3 ascenseurs secondaires (plages N01-10, N10-20, N20-28)

- [ ] 4. Refonte du composant `RoomNode` (Area2D)
    - [ ] Migrer `room_node.tscn` de `MarginContainer` vers `Area2D`
    - [ ] Mettre à jour les 3 états visuels avec les nouvelles couleurs
    - [ ] Implémenter `DoorNode` (porte entre salles adjacentes)
    - [ ] Ajouter les marquages obliques noir/jaune sur salles sensibles

- [ ] 5. Peupler les 28 niveaux avec les salles canoniques
    - [ ] Implémenter la data des salles (dictionnaire GDScript ou JSON)
    - [ ] Salle spéciale Gateroom (hauteur ×2, niveaux N27-N28)
    - [ ] Focus par défaut sur Bureau du Général / Salle de Contrôle (N27)
    - [ ] Niveaux génériques (salles abandonnées) pour les niveaux non-clés

- [ ] 6. Tests et Validation
    - [ ] Valider les 14 Critères d'Acceptation
    - [ ] Vérifier le framerate (objectif 60 FPS, ≥ 28 niveaux rendus)
    - [ ] Vérifier le temps de chargement (< 2 secondes)
    - [ ] Valider la navigation clavier (Tab + flèches + Entrée)
    - [ ] Valider l'ouverture de la modale depuis Room Node

## Dev Agent Record

### Implementation Notes
- **Privilégier `Polygon2D` pour les éléments structurels** (dalle, poutre, murs) pour des performances optimales vs Sprite2D étirés
- **`CanvasItem.draw_*` methods** peuvent être utilisées dans `_draw()` si Polygon2D devient trop verbeux
- **`TileMapLayer`** recommandé pour la cage de l'ascenseur (pattern grillage tileable)
- **La Gateroom doit être traitée comme un cas spécial** dans la boucle de génération : sauter le niveau N28 standard et rendre la Gateroom en double hauteur depuis le N27

## File List
- `domains/management/scenes/sgc_base_view.tscn`
- `domains/management/scenes/sgc_base_view.gd`
- `domains/management/scenes/sgc_level.tscn`
- `domains/management/scenes/sgc_level.gd`
- `domains/management/scenes/room_node.tscn`
- `domains/management/scenes/room_node.gd`
- `domains/management/scenes/elevator_shaft.tscn`
- `domains/management/scenes/elevator_shaft.gd`
- `domains/management/scenes/door_node.tscn`
- `domains/management/scenes/door_node.gd`
- `ui/components/room_modal.tscn`
- `ui/components/room_modal.gd`
- `autoloads/event_bus.gd`
- `assets/illustrations/sgc/cheyenne_mountain_surface.webp`
- `assets/illustrations/sgc/corridor_background.webp`
- `assets/illustrations/sgc/door_standard.webp`
- `assets/illustrations/sgc/door_restricted.webp`
- `assets/illustrations/sgc/elevator_cabin.webp`
- `assets/illustrations/sgc/elevator_shaft_tile.webp`
- `assets/illustrations/sgc/room_gateroom.webp`
- `assets/illustrations/sgc/room_control_room.webp`
- `assets/illustrations/sgc/room_infirmary.webp`
- `assets/illustrations/sgc/room_lab_rd.webp`
- `tests/unit/test_base_view.gd`

## Change Log
- 2026-05-01: Initialisation de la story (Pivot Base Builder 2D).
- 2026-05-01: Implémentation initiale v1 (ScrollContainer + VBoxContainer).
- 2026-05-04: **Refonte complète** — Passage en architecture Node2D/Camera2D pour un rendu réaliste en vue de coupe (dalles béton, poutres, ascenseur animé, couloirs arrondis, portes blindées, tracés sol rouge/vert, marquages noir/jaune).
