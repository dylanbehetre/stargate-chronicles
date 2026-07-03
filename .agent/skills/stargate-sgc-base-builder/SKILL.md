---
name: stargate-sgc-base-builder
description: Guide de référence architectural et de Game Design pour la modélisation du SGC en vue de coupe (mode "Fallout Shelter" / XCOM) dans Godot. Inclut les spécifications visuelles complètes pour un rendu réaliste.
---

# stargate-sgc-base-builder

Ce skill fournit une référence exhaustive et canonique de la structure du **Stargate Command (SGC)**, conçue pour guider le développement du mode « Base Builder » (vue en coupe 2D façon *Fallout Shelter* / *XCOM 2*) du projet *Stargate Chronicles*.

## 🎯 Objectif du Skill

Fournir aux agents de développement et d'UX design les données nécessaires pour :
1. **Générer des scènes Godot réalistes** qui représentent fidèlement la structure cylindrique enfouie de Cheyenne Mountain.
2. **Rendre chaque niveau avec une structure architecturale visible** : dalles béton, poutres métalliques, couloirs arrondis, ascenseurs, portes blindées.
3. **Respecter la verticalité canonique**, notamment pour les salles multi-niveaux et le puits d'ascenseur principal.
4. **Lier l'infrastructure aux mécaniques de gestion** (Budget, Recherche, Gestion du Personnel, Sécurité).

---

## 📐 Grille de Référence 2D (Coordonnées Godot)

Le SGC est un ancien silo à missiles nucléaires reconverti. L'architecture globale est un **cylindre de béton armé profond de 28 niveaux** creusé dans Cheyenne Mountain.

### Dimensions standards

| Élément | Hauteur (px) | Largeur (px) | Notes |
|---|---|---|---|
| **Niveau standard** | `220` | `1400` (total) | Espace intérieur d'un niveau |
| **Dalle béton inter-niveau** | `28` | `1400` | Séparation entre deux niveaux |
| **Poutre métallique** | `12` | `1400` | Posée sur la dalle, couleur acier |
| **Hauteur totale par tranche** | `260` | — | Niveau (220) + Dalle (28) + Poutre (12) |
| **Salle standard** | `180` | `280` | 1 cellule = 1 salle moyenne |
| **Grande salle (×2)** | `180` | `580` | Ex: Mess, Gymnase |
| **Salle spéciale (×3)** | `180` | `880` | Ex: Gateroom (largeur) |
| **Gateroom (hauteur ×2)** | `460` | `880` | Couvre N27+N28 visuellement |
| **Couloir inter-salle** | `180` | `60` | Espace entre deux salles + porte |
| **Ascenseur principal** | `220` (par niveau) | `90` | Colonne centrale traversante |
| **Ascenseurs secondaires** | `220` (par niveau) | `60` | Colonne latérale sur plage de niveaux |
| **Murs latéraux silo** | `220` (par niveau) | `40` | Béton courbe, chaque côté |
| **Tuyauteries plafond** | `20` | — | Band de tuyaux sous dalle, haut de chaque niveau |

### Layout horizontal d'un niveau (de gauche à droite)

```
[Mur silo 40px] [Salles + Couloirs] [Ascenseur principal 90px] [Salles + Couloirs] [Mur silo 40px]
```

---

## 🏗️ Éléments Architecturaux Obligatoires

### 1. Surface — Cheyenne Mountain (Au-dessus de N01)

**Rendu requis :**
- Silhouette de montagne rocheuse stylisée (vue de face, gris-brun)
- Bâtiment d'entrée NORAD : structure en béton avec portail sécurisé, barrières et guérites militaires
- Antennes radar et satellites dish sur le toit
- Arbres conifères sur les flancs de la montagne
- Ciel (dégradé du jour/nuit selon le chronomètre in-game)

**Asset requis :** `assets/illustrations/sgc/cheyenne_mountain_surface.webp`

---

### 2. Dalle Béton Inter-Niveau

**Rendu requis :**
- Bande horizontale épaisse (`28px`) en béton brut (`#2A2A2A` à `#3A3A3A` — granulé)
- Texture légèrement granuleuse (bruit de Perlin ou texture WebP tileable)
- Fissures légères pour donner de l'âge à la structure
- **Poutre métallique** (`12px`) posée sur le dessus, couleur acier brossé (`#3A4A5A`)
- Des boulons/rivets apparents sur la poutre (petits cercles sombres)

**Code couleurs :**
```
Béton :  #2E2E2E (base) + #3A3838 (variation claire)
Poutre : #3A4A5A (acier foncé) + #4A5A6A (reflets)
Boulons: #1A1A1A
```

---

### 3. Couloir — Style SGC Canonique

**Rendu requis (vue en coupe) :**
- Fond de couloir en béton **légèrement arrondi sur les côtés hauts** (rappelle l'intérieur du silo cylindrique)
- Couleur murs : beige/gris militaire (`#4A4A40`)
- **Tuyauteries apparentes** sous le plafond : tubes horizontaux de diamètres variés (gris, certains avec bandes jaunes de danger)
- **Câblage électrique** longeant les parois le long du haut des murs (faisceau de câbles noirs)
- **Néons tubulaires** au plafond : éclairage blanc froid, légère flickering animation possible
- **Numérotation de porte** standardisée USAF : petits panneaux blancs avec texte noir `"LEVEL XX / SECTOR Y"`

**Tracés sol (obligatoires) :**
- **Ligne verte** (épaisseur 4px) : tracé continu le long du centre du couloir vers l'ascenseur — indique la route d'évacuation et la zone sécurisée
- **Ligne rouge** (épaisseur 4px) : tracé longeant le bord des zones restreintes

---

### 4. Portes Blindées SGC

**Rendu requis :**
- Porte **à deux battants** coulissants horizontalement (style porte militaire hydraulique)
- Matériau : métal gris foncé épais (`#3A3A3A`) avec renfort diagonal visible
- **Inscriptions** en lettres blanches ou noires : numéro de salle USAF (ex: `"LEVEL 27 / CONTROL ROOM"`)
- **Traits obliques** (45°) en bas et en haut de chaque battant (style porte de sécurité industrielle)
- **Indicateur lumineux latéral** : rectangle LED (vert = ouvert/accessible, rouge = verrouillé/alerte)
- Pour les zones sensibles (Gateroom, Confinement, Armurerie) : ajout de **marquages chevron noir/jaune** sur les montants de la porte et le sol devant

**Marquages Sécurité (Noir/Jaune) :**
- Bandes obliques (45°, alterner noir `#1A1A1A` et jaune `#F5B914`)
- Largeur bande : `20px`
- Présents sur : montants de porte, sol devant entrée zones restreintes, bord des zones danger

---

### 5. Puits d'Ascenseur — Colonne Vertébrale

**Ascenseur Principal (traverse tous les 28 niveaux) :**
- **Cage** : structure en grillage métallique sombre (`#2A2A2A`), avec montants verticaux visibles
- **Câbles** : 2-3 câbles fins verticaux (Line2D, couleur gris métallisé)
- **Cabine** : rectangle métallique (`90×160px`), porte coulissante centrale, petite fenêtre, éclairage intérieur chaud
- **Animation** : cabine se déplace en douceur vers le niveau actif (Tween)
- Position : colonne centrale (ou légèrement décentrée selon le niveau)

**Ascenseurs Secondaires :**
- Même style mais plus petit (`60px` de large)
- Plages : N01-N10 (côté gauche), N10-N20 (côté droit), N20-N28 (côté gauche)

---

### 6. Murs Latéraux du Silo

**Rendu requis :**
- Bandes verticales de béton courbe sur chaque côté de la vue (`40px` de large)
- Rappellent visuellement l'intérieur cylindrique du silo de missile
- Légère courbure simulée par une ombre portée vers le centre
- Quelques tuyaux et câbles longeant les parois verticalement

---

### 7. Zones Délimitées (Marquages Obliques)

Pour les zones sensibles, délimiter visuellement par :
- **Lignes obliques noir/jaune** à 45° formant des bandes sur le sol et les montants
- Utilisé pour : Gateroom (N28), Confinement (N23-24), Armurerie (N20, N28), Zone Décontamination (N19)
- Style identique aux marquages industriels de chantier OSHA

---

## 🎨 Direction Artistique

Pour la génération d'images, de sprites et la définition des ambiances visuelles, **vous devez obligatoirement consulter et utiliser le skill `image-art-direction`**. Ce skill garantit que les assets respectent le style « Concept Art Graphic Novel » et « Military Industrial » du projet.

### Palette de Référence — Intérieur SGC

| Élément | Couleur | Code Hex |
|---|---|---|
| Béton brut | Gris-brun sombre | `#2E2E2E` |
| Poutres acier | Bleu acier | `#3A4A5A` |
| Murs couloir | Beige militaire | `#4A4A40` |
| Portes | Gris métal foncé | `#3A3A3A` |
| Marquages danger | Jaune industriel | `#F5B914` |
| Tracé sol vert | Vert sécurité | `#2ECC71` |
| Tracé sol rouge | Rouge alerte | `#E74C3C` |
| Éclairage néon | Blanc froid | `#E8F4FF` |
| Fond couloir | Beige-gris | `#4A4A40` |
| Indicateur ON | Vert vif | `#00FF7F` |
| Indicateur OFF | Rouge sombre | `#8B0000` |

---

## 🏛️ Architecture Godot — Scène Recommandée

### Changement de paradigme (vs implémentation précédente)

L'implémentation précédente utilisait une hiérarchie UI (`Control > ScrollContainer > VBoxContainer > HBoxContainer`) qui produisait une grille uniforme sans profondeur architecturale. La nouvelle implémentation utilise **Node2D + Camera2D** pour un rendu World 2D.

### Hiérarchie Cible

```
SgcBaseView (Node2D)
├── Background (ColorRect)           — fond noir #050508
├── MountainSurface (Node2D)         — surface Cheyenne Mountain
│   └── SurfaceSprite (Sprite2D)     — asset cheyenne_mountain_surface.webp
├── SiloWalls (Node2D)               — murs latéraux béton courbe
│   ├── LeftWall (Polygon2D)
│   └── RightWall (Polygon2D)
├── ElevatorShaft (Node2D)           — puits ascenseur central
│   ├── ShaftCage (TileMapLayer)     — texture cage grillage, tileable
│   ├── Cables (Line2D × 2)          — câbles verticaux
│   └── ElevatorCabin (Node2D)       — cabine animée
│       ├── CabinBody (Polygon2D)
│       └── CabinLight (PointLight2D)
├── Levels (Node2D)                  — conteneur de tous les niveaux
│   ├── Level_01 (SgcLevel.tscn)
│   │   ├── FloorSlab (Polygon2D)    — dalle béton
│   │   ├── MetalBeam (Polygon2D)    — poutre acier
│   │   ├── Pipes (Node2D)           — tuyauteries plafond
│   │   ├── Corridor (Polygon2D)     — fond couloir arrondi
│   │   ├── FloorMarkings (Node2D)   — tracés rouge et vert
│   │   ├── LevelLabel (Label)       — "N01"
│   │   └── Rooms (Node2D)
│   │       ├── RoomNode (Area2D)    — salle cliquable
│   │       └── DoorNode (Sprite2D)  — porte entre salles
│   └── Level_02 (SgcLevel.tscn)
│       └── ...
└── Camera2D                         — scroll + zoom
    └── HUD (CanvasLayer)            — header permanent
```

### Composant `SgcLevel.tscn` — Interface GDScript

```gdscript
class_name SgcLevel
extends Node2D

@export var level_number: int = 1
@export var rooms_data: Array[Dictionary] = []

# Génère dynamiquement les éléments visuels du niveau :
# - Dalle béton + poutre métallique
# - Couloir arrondi
# - Tracés de sol
# - Salles et portes
func build_level() -> void: ...
```

---

## 📂 Base de Connaissances (Knowledge Base)

Les données canoniques, niveau par niveau et salle par salle :

- `knowledge/niveaux_01_10.md` : Surface, Administration et Stockage.
- `knowledge/niveaux_11_20.md` : Personnel, Recherche générale et Vie dans la base.
- `knowledge/niveaux_21_28.md` : Commandement, Confinement, Salle de la Porte et Infrastructures critiques.

### Niveaux Prioritaires (Showcase Sprint 1)

| Niveau | Salle(s) | Particularité visuelle |
|---|---|---|
| N27 | Salle de Contrôle + Salle de Briefing | Vitre donnant sur Gateroom (N28) |
| N28 | **Gateroom** (SPÉCIALE) | 2 niveaux de hauteur, couloir arrondi de silo |
| N21 | Infirmerie | Lits médicaux, éclairage blanc froid |
| N25-26 | R&D Principal | Artéfacts aliens, écrans holographiques |
| N08 | Salle des Générateurs | Turbines massives, câbles haute tension |
| N01-03 | Surface/NORAD | Vue sur l'entrée de la montagne |

---

## ⚙️ Mécaniques de Gameplay Associées (Intégration)

Lors de l'implémentation d'une salle en jeu, liez-la aux systèmes existants :
- **Ressources / Budget (`ResourceManager`)** : Les salles nécessitent un coût d'entretien. Certaines salles génèrent du revenu ou débloquent des budgets.
- **Points de Recherche** : Générés par les Laboratoires (Niveaux 15, 17, 25, 26).
- **Personnel / Capacité** : Les quartiers (Niveaux 9-10) et le Mess (Niveaux 12-13) déterminent la capacité d'accueil et le moral de la base.
- **Défense / Sécurité** : L'armurerie (Niveau 20, 28) et l'Iris sont cruciaux pour contrer les invasions lors des événements aléatoires.
- **Énergie** : La Salle des Générateurs (N08) alimente toute la base. Consommation massive à chaque activation de la Porte.
