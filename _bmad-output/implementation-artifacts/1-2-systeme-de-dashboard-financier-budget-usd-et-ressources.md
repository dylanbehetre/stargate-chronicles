# Story 1.2 : Système de Dashboard Financier (Budget USD et Ressources)

## Statut
**Statut :** REVIEW
**Epic :** 1 - Initialisation du Commandement SGC et Infrastructure
**Priorité :** Haute

## Description
En tant que Commandant du SGC, je souhaite visualiser l'état de mon budget et de mes ressources (Naquadah, Trinium, ZPM) sur un dashboard permanent, afin de prendre des décisions financières éclairées pour le programme.

## Critères d'Acceptation
1. **Initialisation des Ressources :** Le système démarre avec le budget défini dans `Constants.STARTING_FUNDS` (1,000,000 USD).
2. **Affichage Permanent :** Le montant du budget est visible dans une barre supérieure (Top Bar) sur l'écran du Bureau du Général.
3. **Formatage :** Le budget est affiché avec le symbole "$" et des séparateurs de milliers (ex: "$1,000,000").
4. **Ressources Alien :** Les stocks de Naquadah, Trinium et ZPM sont affichés (initialement à 0).
5. **Réactivité (Event-Driven) :** L'UI se met à jour instantanément dès que le `ResourceManager` émet un signal via l'`EventBus`.
6. **Esthétique :** Utilisation de la police `Roboto Mono` pour les chiffres et respect de la palette `Slate Industrial` (#f5b914 pour les valeurs).

## Contexte Technique
- **Autoload Central :** `ResourceManager` gère la logique de stockage et de transaction.
- **Communication :** Utilisation exclusive de l'`EventBus` pour notifier les changements (`budget_changed`, `resource_changed`).
- **UI :** Création d'un composant `SgcDashboard` (`sgc_dashboard.tscn`) intégré dans la scène `GeneralOffice`.
- **Thème :** Utilisation du `sgc_theme.tres` pour la cohérence visuelle.

## Architecture & Fichiers
### 1. `shared/constants.gd`
Ajouter les définitions des types de ressources :
```gdscript
enum ResourceType {
    NAQUADAH,
    TRINIUM,
    ZPM
}
```

### 2. `autoloads/event_bus.gd`
Ajouter les signaux de notification :
```gdscript
signal budget_changed(new_amount: int)
signal resource_changed(type: int, new_amount: int) # Utilise int pour ResourceType pour éviter les cycles
```

### 3. `autoloads/resource_manager.gd`
Implémenter la gestion d'état :
- `_budget: int`
- `_resources: Dictionary` (mapping ResourceType -> int)
- Méthodes `add_budget`, `consume_budget`, `add_resource`, `consume_resource`.

### 4. `domains/management/scenes/sgc_dashboard.tscn`
Composant UI (`HBoxContainer`) :
- `BudgetLabel`: "$1,000,000"
- `NaquadahLabel`: "NAQ: 0"
- `TriniumLabel`: "TRI: 0"
- `ZpmLabel`: "ZPM: 0"

### 5. `ui/scenes/general_office.tscn`
Intégrer le `SgcDashboard` dans un `TopBar` (MarginContainer en haut de l'écran).

## Notes de Design (UX)
- **Police :** Roboto Mono pour les valeurs numériques (look terminal).
- **Couleur :** Jaune Industriel (#f5b914) pour les montants, Blanc cassé (#e0e0e0) pour les labels.
- **Navigation :** Pas d'interaction clavier spécifique pour le dashboard (affichage passif), mais il doit rester lisible lors de la navigation latérale.

## Dépendances
- Story 1.0 (Architecture Core) - TERMINE
- Story 1.1 (Bureau du Général) - EN REVUE

## Tasks/Subtasks
- [x] 1. Mettre à jour `Constants` et `EventBus`
    - [x] Ajouter `ResourceType` dans `Constants`
    - [x] Ajouter les signaux `budget_changed` et `resource_changed` dans `EventBus`
- [x] 2. Implémenter le `ResourceManager`
    - [x] Initialiser le budget avec `STARTING_FUNDS`
    - [x] Implémenter les méthodes de transaction (add/consume)
    - [x] Émettre les signaux lors des changements
- [x] 3. Créer le composant UI `SgcDashboard`
    - [x] Créer la scène `.tscn` avec `HBoxContainer` et labels
    - [x] Connecter le script aux signaux de l'EventBus
    - [x] Appliquer le thème `sgc_theme.tres` et les styles (Roboto Mono, Jaune Industriel)
- [x] 4. Intégrer le Dashboard dans le Hub
    - [x] Ajouter le Dashboard à `general_office.tscn` dans une TopBar
    - [x] Vérifier le rendu et la lisibilité
- [x] 5. Tests et Validation
    - [x] Vérifier l'initialisation du budget ($1,000,000)
    - [x] Simuler un changement de ressource via console/code et vérifier la mise à jour UI

## Dev Agent Record
### Implementation Plan
- Création des types et signaux.
- Logique métier dans le ResourceManager.
- UI réactive via signaux.

### Debug Log
- ResourceManager initialisé avec 1,000,000 USD.
- Signaux EventBus fonctionnels.
- Dashboard intégré dans la TopBar du SGC.

### Completion Notes
- Logique métier implémentée dans `resource_manager.gd`.
- UI réactive via signaux dans `sgc_dashboard.gd`.
- Intégration visuelle dans `general_office.tscn`.

## File List
- `shared/constants.gd`
- `autoloads/event_bus.gd`
- `autoloads/resource_manager.gd`
- `domains/management/scenes/sgc_dashboard.tscn`
- `domains/management/scenes/sgc_dashboard.gd`
- `ui/scenes/general_office.tscn`

## Change Log
- 2026-04-30: Initialisation de la story.
