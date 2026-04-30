---
title: 'Story 1.1: Initialisation du Bureau du Général (Hub Principal)'
epic: '1'
story_id: '1.1'
status: 'review'
date: '2026-04-30'
---

# Story 1.1: Initialisation du Bureau du Général (Hub Principal)

## 📝 Story Requirements

**User Story:**
En tant que Commandant du SGC, je veux accéder à mon bureau central avec une interface "Slate Industrial", afin de disposer d'un hub de commandement immersif pour piloter le programme.

**Critères d'Acceptation :**
- **Given** Le lancement d'une nouvelle partie ou le chargement du Hub.
- **When** La scène du Bureau du Général est chargée.
- **Then** L'interface s'affiche avec la palette "Slate Industrial" (Gris #2b2d31 et Jaune #f5b914).
- **And** Les polices Roboto Mono (données) et Plus Jakarta Sans (narration) sont appliquées via un Theme Godot global.
- **And** Le menu latéral de navigation (G, C, L, B) est fonctionnel et navigable à 100% au clavier.
- **And** Le système de focus visuel est clairement identifiable (surbrillance jaune).

---

## 🛠️ Developer Context & Guardrails

### ⚙️ Technical Requirements
- **Moteur :** Godot 4.6.2 (GDScript typé).
- **Thème :** Créer une ressource `.theme` globale dans `ui/theme/sgc_theme.tres`.
- **Palette :** 
  - Fond : `#2b2d31` (Slate)
  - Accents/Focus : `#f5b914` (Jaune Industriel)
  - Texte Données : Roboto Mono
  - Texte Narration : Plus Jakarta Sans
- **Navigation :** Système "Keyboard-Only". Utiliser les raccourcis natifs :
  - `G` : Salle de la Porte (Gate)
  - `C` : Caserne (Characters/Caserne)
  - `L` : Laboratoire (Lab)
  - `B` : Bureau (Bureau)

### 🏗️ Architecture Compliance
- **Domaine :** Cette scène appartient au domaine `ui/` (transversal) mais sert de point d'entrée pour `domains/management/`.
- **EventBus :** Utiliser `EventBus` pour signaler les changements de salle (ex: `EventBus.room_changed.emit("lab")`).
- **GameState :** Mettre à jour `GameState.current_room` lors de la navigation.

### 📦 File Structure Requirements
- **Scène principale :** `ui/scenes/main_hub.tscn` (ou `general_office.tscn`).
- **Thème :** `ui/theme/sgc_theme.tres`.
- **Assets :** Placer les icônes de navigation dans `assets/ui/icons/`.

### 🧪 Testing Requirements
- Valider que chaque touche de raccourci (G, C, L, B) déclenche le bon signal sur l'EventBus.
- Vérifier que le focus clavier ne se "perd" jamais (utiliser `focus_mode = Control.FOCUS_ALL`).

---

## 💡 Previous Story Intelligence (Story 1.0)
- L'architecture DDD est en place.
- Tous les Autoloads (Logger, EventBus, GameState) sont initialisés et prêts.
- **Attention :** Ne pas oublier d'utiliser le `Logger` pour tracer les changements de salle.

---

## 🌐 Latest Tech Information (Godot 4.6.2)
- Utiliser `shortcut_feedback` sur les boutons pour afficher visuellement la touche associée.
- Favoriser les `Container` (VBox, HBox, PanelContainer) pour garantir la responsivité 1080p/720p.
- Le focus management se gère via `grab_focus()` dans le `_ready()` de la scène principale.

---

## ✅ Story Completion Status
*Status: ready-for-dev*

### Tasks/Subtasks
- [x] Créer le thème global `sgc_theme.tres` avec les couleurs et polices spécifiées.
- [x] Créer la scène du Bureau du Général (`general_office.tscn`).
- [x] Implémenter le menu latéral avec les 4 boutons (G, C, L, B).
- [x] Configurer les raccourcis clavier (`InputMap` ou gestion locale des `_unhandled_key_input`).
- [x] Connecter les boutons à l'EventBus pour la navigation.

### File List
- `assets/illustrations/sgc/general_office.jpg` (New)
- `ui/theme/sgc_theme.tres` (New)
- `ui/scenes/general_office.tscn` (New)
- `ui/scenes/general_office.gd` (New)
- `autoloads/event_bus.gd` (Modified)
- `shared/constants.gd` (Modified)
- `project.godot` (Modified)

### Dev Agent Record
**Completion Notes:**
- Thème 'Slate Industrial' implémenté avec StyleBoxFlat pour respecter la palette #2b2d31 / #f5b914.
- Scène du Bureau du Général créée avec menu latéral et navigation 100% clavier.
- Raccourcis `nav_gate`, `nav_characters`, `nav_lab`, `nav_bureau` ajoutés à l'InputMap.
- EventBus mis à jour avec le signal `room_changed`.
- Constants mis à jour avec l'énumération `Room`.

### Change Log
- 2026-04-30: Implémentation complète du hub principal et du système de navigation au clavier.
