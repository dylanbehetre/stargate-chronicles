# Feature Specification: Stargate: Chronicles - SGC Interface Redress (Anime-Style)

**Feature Branch**: `[003-sgc-interface-redress]`  
**Created**: 2026-04-14  
**Status**: Draft  
**Input**: User description: "Rectifier l'implémentation de l'interface du SGC pour qu'elle corresponde aux attentes : esthétique 'anime-style' (vibrante, moderne, stylisée) au lieu du terminal monochrome, et correction des services métier (biome, MALP, SG Team, comptes rendus avec illustrations) qui sont actuellement cassés ou incomplets."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Modern Anime Interface (Priority: P1)

En tant qu'opérateur du SGC, je veux interagir avec une interface visuelle moderne et vibrante inspirée des films d'animation de science-fiction (style anime), afin de ressentir l'immersion technologique du Commandement Stargate.

**Why this priority**: C'est la demande principale de l'utilisateur. L'esthétique actuelle (terminal monochrome) est rejetée. L'immersion visuelle est le socle de l'expérience utilisateur.

**Independent Test**: Peut être testé en ouvrant l'application et en vérifiant la palette de couleurs (bleus, ambres, transparences), la typographie moderne et les effets lumineux (glows) sans éléments de type "terminal CRT".

**Acceptance Scenarios**:

1. **Given** l'interface chargée, **When** je regarde les panneaux de contrôle, **Then** ils utilisent un style "glassmorphism" avec des bordures lumineuses et des couleurs vibrantes.
2. **Given** les éléments interactifs, **When** je survole un bouton, **Then** une micro-animation fluide et un effet de halo (glow) apparaissent.

---

### User Story 2 - Exploration via MALP et Rendu Visuel (Priority: P1)

En tant qu'opérateur du SGC, je veux envoyer un MALP vers une destination afin de découvrir son biome et voir une illustration statique de haute qualité dans un style anime.

**Why this priority**: L'exploration est le cœur du gameplay. Les illustrations biomes sont essentielles pour l'identité visuelle "anime" demandée.

**Independent Test**: Peut être testé en sélectionnant une planète, en cliquant sur "Envoyer MALP" et en vérifiant que les données (biome, environnement) se peuplent et que l'illustration correspondante s'affiche.

**Acceptance Scenarios**:

1. **Given** une porte ouverte, **When** je déploie un MALP, **Then** une animation stylisée se joue et les informations de la planète sont mises à jour avec un biome (ex: Désert, Forêt) et une image anime-style associée.

---

### User Story 3 - Rapport de Mission SG et Historique (Priority: P2)

En tant qu'opérateur du SGC, je veux envoyer une équipe SG et recevoir un compte rendu (CR) détaillé incluant une illustration de mission et un bilan de santé de l'équipe.

**Why this priority**: C'est l'aboutissement de la boucle de jeu. La correction du service de rapport est une attente explicite.

**Independent Test**: Peut être testé en envoyant une équipe sur une planète scannée, en validant l'apparition d'une modale de rapport avec texte narré et image d'un moment fort.

**Acceptance Scenarios**:

1. **Given** une planète scannée, **When** j'envoie une équipe SG, **Then** un rapport de mission (CR) est généré avec un résumé narratif et une illustration statique d'un moment fort de la mission.
2. **Given** une planète dangereuse sans MALP préalable, **When** j'envoie l'équipe malgré l'avertissement, **Then** l'équipe subit des pertes et le CR reflète le statut "DÉCÉDÉ" ou "BLESSÉ".

### Edge Cases

- Que se passe-t-il si la composition manuelle échoue (adresse invalide / inexistante dans le corpus) ? (La porte ne s'ouvre pas, feedback d'échec visuel/sonore, comme spécifié dans le FR-002c).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST utiliser une palette de couleurs inspirée des anime SF (Bleu profond `#0a192f`, Cyan lumineux `#00fff2`, Ambre cyber `#ffaa00`) avec des effets de flou d'arrière-plan (glassmorphism).
- **FR-002**: System MUST supprimer tous les éléments de type "terminal CRT" (lignes de balayage, monochrome vert, police de type matricielle uniquement) au profit d'une interface vectorielle moderne.
- **FR-003**: System MUST corriger les imports des services (`MALPService`, `SGTeamService`, `NarrativeEngine`) pour éviter les erreurs de build/chargement.
- **FR-004**: System MUST générer un profil de planète complet (Biome, Danger, Environnement de porte) lors du premier envoi d'un MALP ou d'une équipe.
- **FR-005**: System MUST afficher des illustrations statiques anime-style pour chaque biome.
- **FR-006**: System MUST générer un Compte Rendu (CR) après chaque mission SG, incluant : un texte narratif, l'état de santé de l'équipe (Vivant/Blessé/Mort) et une illustration d'un moment fort (ruines, forêt dense, rencontre).
- **FR-007**: System MUST sauvegarder automatiquement et restaurer l'état (planètes explorées, rapports de mission) via le stockage local (localStorage).
- **FR-008**: System MUST afficher un avertissement de confirmation si une équipe SG est envoyée sans scan MALP préalable sur une zone à risque.

### Key Entities *(include if feature involves data)*

- **Planet**: Adresse (7 chevrons), Nom, Biome, Niveau de Danger, Statut Exploration (Inconnu/Scanné/Exploré).
- **MissionReport (CR)**: Type (MALP/SG), Date, Narration, Illustration (Moment fort), Bilan santé, Planète associée.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: L'application se charge sans aucune erreur dans la console (0 erreur 404, 0 erreur JS).
- **SC-002**: L'utilisateur peut accéder à un rapport de mission détaillé en moins de 2 clics après la fin de l'animation.
- **SC-003**: 100% des illustrations biomes et moments forts sont conformes au style anime défini (vérifié par revue visuelle).
- **SC-004**: Les données de progression sont persistantes à 100% après un rafraîchissement complet de la page (F5).

## Assumptions

- Les assets graphiques (illustrations anime) seront intégrés en tant que fichiers statiques WebP pour optimiser le chargement.
- Le moteur narratif utilisera des templates modulaires pour varier les comptes rendus sans backend complexe.
- Le rendu anime-style se base sur des images statiques fixes et non des animations de personnages complexes (focus sur l'environnement et l'interface).
