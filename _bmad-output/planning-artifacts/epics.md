---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - "_bmad-output/gdd.md"
  - "_bmad-output/game-architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
---

# stargate-command - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for stargate-command, decomposing the requirements from the GDD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Développement de l'Infrastructure (Construction/Amélioration de sections).
FR2: Recrutement des Membres (Nom, Race, Archétype, Stats, Traits).
FR3: Composition des Équipes SG (2 à 4 membres).
FR4: Gestion Budgétaire (USD) et Ressources (Naquadah, Trinium, ZPM).
FR5: Recherche et Fabrication (Progression organique ECA).
FR6: Formation des Membres (Amélioration des stats hors mission).
FR7: Chronologie du Programme (Temps continu, vitesses, pause auto).
FR8: Confiance Gouvernementale (Indicateur permanent et impact budget).
FR9: Gestion de la Santé (États de santé et soins de base).
FR10: Cadençage de la Porte (Sélection d'adresse et visualisation glyphes).
FR11: Saisie Manuelle de Coordonnées (DHD diégétique).
FR12: Événements Narratifs (Choix illustrés avec prérequis).
FR13: Combat Narratif Probabiliste (Résolution sans grille tactique).
FR14: Diplomatie (Postures et influence des factions).
FR15: Collecte de Terrain (Ressources, artefacts, coordonnées).
FR16: Évacuation de Mission (Retrait volontaire pour protéger l'équipe).
FR17: Mort Permanente (Permadeath).
FR18: Succès "Annales du Programme" (Objectifs et récompenses).
FR19: Machine d'État des Arcs Narratifs (Persistance des états d'arcs).
FR20: Sauvegarde et Chargement (JSON local et autosave).

### NonFunctional Requirements

NFR1: Performance : 60 FPS stable sur PC de 3-5 ans.
NFR2: Mémoire : < 2 Go RAM ; Stockage : < 500 Mo.
NFR3: Plateforme : PC Windows/Linux/Mac (Godot 4).
NFR4: Accessibilité : Navigation 100% clavier, taille de police ajustable, mode contraste élevé.
NFR5: Sauvegarde : Format JSON local structuré et versionné.
NFR6: Langue : Français (prioritaire), architecture i18n prête pour l'anglais.
NFR7: Temps : Écoulement du temps continu avec pause automatique sur événements.

### Additional Requirements

- **Starter Template**: Architecture Domain-Driven Design avec 9 domaines métier isolés.
- **EventBus Central**: Communication inter-systèmes via bus de signaux global.
- **ECA (Event-Condition-Action)**: Moteur de débloquage déclaratif basé sur des fichiers JSON.
- **Interruptible Timeline**: Gestion du temps avec pile de pauses prioritaires.
- **Sauvegarde Versionnée**: Schéma JSON documenté pour chaque objet sérialisable.
- **Architecture Godot**: Utilisation de 7 Autoloads spécifiques (GameState, SaveManager, EventBus, etc.).
- **Moteur Godot**: Version 4.6.2 (GDScript typé).

### UX Design Requirements

UX-DR1: Système de couleurs "Slate Industrial" (Gris ardoise #2b2d31, Jaune industriel #f5b914).
UX-DR2: Pop-up narratif tripartite (Illustration Paysage / Narration & Choix / Squad Bar).
UX-DR3: Navigation "Keyboard-Only" (Touches G/C/L/B pour les salles, 1-9 pour les choix).
UX-DR4: Interface de composition (DHD) diégétique avec verrouillage des chevrons.
UX-DR5: Squad Bar réactive (Mise en évidence des membres lors des mentions narratives).
UX-DR6: Effets visuels de terminal (Scanlines, flicker léger, transitions vortex).
UX-DR7: Bureau du Général comme Hub central de commandement et de notifications.
UX-DR8: Typographie hybride (Roboto Mono pour les données, Plus Jakarta Sans pour la narration).

### FR Coverage Map

- **FR1** : Epic 1 - Infrastructure (Stories 1.3, 1.4)
- **FR2** : Epic 1 & 2 - Recrutement (Story 1.4, 2.1)
- **FR3** : Epic 2 - Composition (Story 2.3)
- **FR4** : Epic 1 & 6 - Budget (Story 1.2, 6.1)
- **FR5** : Epic 1 & 5 - Recherche & Fabrication (Story 1.5, 5.2, 5.3)
- **FR6** : Epic 2 - Formation (Story 2.4)
- **FR7** : Epic 1 & 6 - Chronologie (TimelineManager)
- **FR8** : Epic 6 - Confiance Gouvernementale (Story 6.1)
- **FR9** : Epic 1 & 4 - Santé (Story 1.3, 4.2, 4.3)
- **FR10** : Epic 3 - Cadençage (Story 3.1)
- **FR11** : Epic 3 - Saisie Manuelle (Story 3.1)
- **FR12** : Epic 3 - Événements Narratifs (Story 3.2)
- **FR13** : Epic 4 - Combat Probabiliste (Story 4.1)
- **FR14** : Epic 6 - Diplomatie (Story 6.2)
- **FR15** : Epic 3 - Collecte Terrain (Story 3.3)
- **FR16** : Epic 3 - Évacuation (Story 3.4)
- **FR17** : Epic 4 - Permadeath (Story 4.4)
- **FR18** : Epic 6 - Annales (Story 6.3)
- **FR19** : Epic 5 - Machine d'État (Story 5.2)
- **FR20** : Epic 1 - Sauvegarde/Chargement (Story 1.6)

## Epic List

### Epic 1: Commandement du SGC & Gestion Initiale
Objectif: Permettre au joueur de piloter le programme depuis son bureau (Hub), de gérer son budget et de construire les premières infrastructures indispensables (Salle d'embarquement, Infirmerie).
**FRs covered:** FR1, FR4, FR14, FR15.

### Epic 2: Constitution et Expertise des Équipes SG
Objectif: Permettre au joueur de recruter, personnaliser (races, archétypes) et entraîner ses membres d'équipes pour préparer ses missions sur le terrain.
**FRs covered:** FR2, FR3, FR6.

### Epic 3: Exploration Stellaire & Narration Interplanétaire
Objectif: Permettre au joueur d'activer la Porte (DHD), de voyager vers Abydos et de vivre ses premiers événements narratifs avec des choix basés sur les compétences de son équipe.
**FRs covered:** FR7, FR8, FR11, FR12.

### Epic 4: Combat & Survie (Gestion des Risques)
Objectif: Gérer les affrontements sur le terrain et leurs conséquences physiques sur les membres SG, incluant la guérison et la perte définitive.
**FRs covered:** FR9, FR15.

### Epic 5: Avancées Technologiques (Recherche & Artisanat)
Objectif: Mettre en place le système de recherche technologique et de fabrication d'équipements hybrides basés sur le loot alien.
**FRs covered:** FR5.

### Epic 6: Influence Galactique & Survie Institutionnelle
Objectif: Permettre au joueur de gérer les alliances diplomatiques, de maintenir la confiance du gouvernement face aux menaces et d'accomplir les grands objectifs des "Annales".
**FRs covered:** FR10, FR13.

<!-- Repeat for each epic in epics_list (N = 1, 2, 3...) -->

## Epic 1: Commandement du SGC & Gestion Initiale

Objectif: Initialiser le projet selon l'architecture DDD, permettre au joueur de piloter le programme depuis son bureau, de gérer son budget et de construire les premières infrastructures incluant l'Infirmerie (soins de base).

### Story 1.0: Initialisation de l'Architecture DDD et des Autoloads Core

As a Développeur Solo,
I want mettre en place la structure de dossiers Domain-Driven et les Autoloads d'infrastructure,
So that disposer d'un cadre technique robuste conforme à l'Architecture validée.

**Acceptance Criteria:**

**Given** Un nouveau projet Godot 4.6.2.
**When** Je crée la structure de dossiers (/autoloads, /domains, /data, /assets).
**Then** Les 9 Autoloads (GameState, SaveManager, EventBus, TimelineManager, ResourceManager, NarrativeEngine, FactionManager, ErrorHandler, Logger) sont créés et configurés dans l'ordre strict de l'architecture.
**And** Le script constants.gd est accessible globalement.

### Story 1.1: Initialisation du Bureau du Général (Hub Principal)

As a Commandant du SGC,
I want accéder à mon bureau central avec une interface "Slate Industrial",
So that disposer d'un hub de commandement immersif pour piloter le programme.

**Acceptance Criteria:**

**Given** Le lancement d'une nouvelle partie de Stargate Chronicles.
**When** Le jeu initialise la scène principale du SGC.
**Then** Le bureau du Général s'affiche avec la palette de couleurs "Slate Industrial" (Gris #2b2d31 et Jaune #f5b914).
**And** Les polices Roboto Mono (données) et Plus Jakarta Sans (narration) sont correctement appliquées.
**And** Le menu latéral de navigation (G, C, L, B) est visible et réagit au focus clavier.

### Story 1.2: Système de Dashboard Financier (Budget USD et Ressources)

As a Commandant du SGC,
I want visualiser l'état de mon budget et de mes ressources (Naquadah) sur un dashboard,
So that prendre des décisions financières éclairées pour le programme.

**Acceptance Criteria:**

**Given** Le joueur est sur le Dashboard principal du SGC.
**When** Le système de ressources est initialisé.
**Then** Le montant du budget disponible s'affiche en dollars (USD) dans la barre supérieure.
**And** Les stocks de Naquadah, Trinium et ZPM sont visibles (à 0 par défaut en début de partie).
**And** Les valeurs se mettent à jour automatiquement via l'EventBus lors d'une transaction.

### Story 1.3: Construction du Centre de Recherche Archéologique (CRA)

As a Commandant du SGC,
I want construire le Centre de Recherche Archéologique,
So that permettre à mes experts de commencer l'analyse des glyphes de la Porte.

**Acceptance Criteria:**

**Given** La Salle de la Porte existe mais n'a aucune coordonnée (DHD inactif).
**When** Le joueur valide la construction du "Centre de Recherche Archéologique" dans le menu Infrastructure.
**Then** Le coût est déduit et le timer est lancé.
**And** Une fois terminé, le menu "Recrutement/Création" et "Recherche" deviennent accessibles.

### Story 1.4: Création et Recrutement du premier expert (Archéologue)

As a Commandant du SGC,
I want créer de toutes pièces un nouveau membre archéologue,
So that assigner mon propre expert au décodage de la Porte.

**Acceptance Criteria:**

**Given** Le joueur accède au menu de recrutement.
**When** Le joueur définit le nom, choisit l'archétype "Archéologue" et distribue ses points de caractéristiques (PHY, INT, etc.).
**Then** Le membre est sauvegardé dans le roster avec le statut "Indemne".
**And** Le budget est impacté par le coût de recrutement.

### Story 1.5: Recherche initiale et découverte de la "Coordonnée Gizeh"

As a Commandant du SGC,
I want assigner mon archéologue à la recherche sur les glyphes,
So that débloquer la première destination de la Porte.

**Acceptance Criteria:**

**Given** Un membre "Archéologue" est disponible.
**When** Le joueur lance la recherche "Déchiffrer les glyphes de la Porte".
**Then** Une fois la recherche terminée, la destination "Coordonnée Gizeh" (Abydos) apparaît dans la Carte Stellaire.
**And** L'interface de composition de la Porte (DHD) devient opérationnelle pour cette adresse.

### Story 1.6: Système de Sauvegarde et Chargement (Persistance JSON)

As a Commandant du SGC,
I want sauvegarder ma progression à tout moment et disposer d'une sauvegarde automatique,
So that reprendre ma partie là où je l'ai laissée sans perte de données.

**Acceptance Criteria:**

**Given** Le joueur est dans n'importe quel menu de gestion.
**When** Le joueur utilise le raccourci Ctrl+S ou accède au menu "Sauvegarder".
**Then** L'état complet du jeu est sérialisé au format JSON versionné via le SaveManager.
**And** Une notification visuelle confirme le succès de la sauvegarde.
**And** Le système de sauvegarde automatique (autosave) se déclenche toutes les 10 minutes via le TimelineManager.

## Epic 2: Expansion du Personnel et Logistique des Équipes

Objectif: Mettre en place les structures de commandement et d'hébergement pour gérer plusieurs équipes SG (3-6 membres) et définir les règles de résolution d'actions.

### Story 2.1: Construction de la Salle de Briefing

As a Commandant du SGC,
I want construire la Salle de Briefing (Niveau 28),
So that organiser le recrutement et la planification des nouvelles recrues.

**Acceptance Criteria:**

**Given** L'Épic 1 est complété.
**When** Le joueur construit la "Salle de Briefing".
**Then** L'interface de création/recrutement des membres est débloquée.

### Story 2.2: Aménagement du Niveau 25 (Quartiers du SGC)

As a Commandant du SGC,
I want aménager les Quartiers du Niveau 25,
So that augmenter le nombre d'équipes SG (slots) que je peux maintenir simultanément.

**Acceptance Criteria:**

**Given** La Salle de Briefing est opérationnelle.
**When** Le joueur améliore le "Niveau 25".
**Then** Un nouveau slot d'équipe (ex: SG-2) devient disponible.

### Story 2.3: Système de Composition et Résolution Tactique (3-6 membres)

As a Commandant du SGC,
I want former des équipes de 3 à 6 membres et appliquer des règles de résolution d'actions différenciées,
So that simuler l'expertise individuelle et l'effort collectif sur le terrain.

**Acceptance Criteria:**

**Given** Une équipe de 3 à 6 membres est formée.
**When** Une action solitaire est requise (ex: piratage, traduction).
**Then** Le système utilise la valeur la plus élevée parmi les membres de l'équipe pour le jet de dés.
**When** Une action collective est requise (ex: combat, survie en milieu hostile).
**Then** Le système effectue un jet de dés individuel pour chaque membre de l'équipe.
**And** L'équipe est rejetée si elle compte moins de 3 ou plus de 6 membres.

### Story 2.4: Entraînement et Spécialisation des Membres

As a Commandant du SGC,
I want assigner mes membres à des sessions d'entraînement (Caserne/Gymnase),
So that améliorer leurs statistiques (PHY, INT, etc.) entre deux missions.

**Acceptance Criteria:**

**Given** Un membre est présent au SGC (pas en mission, pas à l'infirmerie).
**When** Le joueur l'assigne à un programme d'entraînement spécifique.
**Then** Le membre devient "Occupé" pour une durée définie par le TimelineManager.
**And** Une fois terminé, la statistique ciblée augmente (selon un barème de progression organique).
**And** Un membre ne peut pas s'entraîner s'il est blessé.

## Epic 3: Exploration Stellaire & Narration Interplanétaire

Objectif: Permettre au joueur d'activer la Porte (DHD), de voyager vers Abydos et de vivre ses premiers événements narratifs avec le système de "Field-Feed".

### Story 3.1: Interface de Composition (DHD) et Séquence d'Activation

As a Commandant du SGC,
I want manipuler une interface de composition diégétique pour activer la Porte,
So that ressentir la tension et la satisfaction du verrouillage des chevrons.

**Acceptance Criteria:**

**Given** Le joueur possède les coordonnées "Gizeh" et une équipe prête.
**When** Le joueur ouvre l'interface du DHD et saisit la séquence de 7 glyphes.
**Then** Chaque chevron se verrouille avec un feedback visuel (orange fixe) et sonore.
**And** En cas de succès, la séquence de transition "Vortex" se déclenche.
**And** Le jeu passe en mode "Exploration" (Timeline en pause automatique).

### Story 3.2: Le "Field-Feed" Narratif (Abydos)

As a Équipe SG sur le terrain,
I want réagir aux événements via des choix basés sur mon expertise,
So that mener à bien ma mission et assurer la survie de mes membres.

**Acceptance Criteria:**

**Given** L'équipe a traversé la Porte vers Abydos.
**When** Le premier événement narratif "Arrivée sur Abydos" se déclenche.
**Then** Le pop-up affiche l'illustration paysage, le texte descriptif et les choix disponibles.
**And** Les choix sont filtrés selon les compétences réelles de l'équipe (ex: un choix "Archéologie" n'est cliquable que si un membre possède l'archétype ou la stat INT requise).
**And** Le choix sélectionné déclenche un jet de dés (solitaire ou collectif selon l'action) dont le résultat est immédiatement narré.
**And** La "Squad Bar" reflète les changements d'état (santé, moral) suite à la décision.

### Story 3.3: Collecte de Ressources et Transmission du code GDO

As a Équipe SG sur le terrain,
I want transmettre mon code d'identification GDO,
So that le SGC ouvre l'Iris et me permette de rentrer avec les ressources collectées.

**Acceptance Criteria:**

**Given** L'événement narratif de fin de mission est atteint.
**When** Le joueur valide l'action "Transmettre code GDO".
**Then** Une notification "GDO_CODE_RECEIVED" s'affiche côté SGC et l'Iris s'ouvre (feedback sonore).
**And** Les ressources (Naquadah, Artefacts) collectées sont ajoutées à l'inventaire global.
**And** Le Rapport de Mission final s'affiche, récapitulant les gains (XP, loot) et les pertes (PV, membres décédés).

### Story 3.4: Système d'Évacuation de Mission (Retrait Volontaire)

As a Équipe SG sur le terrain,
I want pouvoir évacuer la zone à tout moment via la Porte,
So that protéger la vie de mes membres si la situation devient trop dangereuse.

**Acceptance Criteria:**

**Given** L'équipe est en exploration sur une planète (Field-Feed actif).
**When** Le joueur choisit l'option d'action critique "Évacuer la mission".
**Then** Un écran de confirmation s'affiche (pour éviter les erreurs).
**And** Une fois validé, la mission s'arrête immédiatement sans gains de ressources supplémentaires.
**And** L'équipe rentre au SGC et les blessures acquises sont conservées.

## Epic 4: Combat & Survie (Gestion des Risques)

Objectif: Gérer les affrontements sur le terrain et leurs conséquences physiques sur les membres SG, incluant la guérison et la perte définitive.

### Story 4.1: Résolution de Combat Probabiliste

As a Équipe SG,
I want résoudre les affrontements via des jets de dés narratifs,
So that simuler l'action tactique sans interface de combat complexe.

**Acceptance Criteria:**

**Given** Un événement de type "Combat" ou "Menace".
**When** Le joueur valide une option offensive ou défensive.
**Then** Le système effectue un jet de dés individuel pour chaque membre (Action Collective).
**And** Le succès global dépend du nombre de membres ayant réussi leur jet vs difficulté.

### Story 4.2: Système d'États de Santé et Blessures Graves

As a Commandant du SGC,
I want que chaque membre possède un état de santé dynamique,
So that gérer la vulnérabilité de mes troupes.

**Acceptance Criteria:**

**Given** Un membre rate un jet de dés lors d'un danger.
**When** Le système calcule les dommages.
**Then** Le statut passe à "Blessé" (malus léger) ou "Blessure Grave" (malus lourd + impossibilité de repartir immédiatement).
**And** L'état est persistant et sauvegardé dans le profil du membre.

### Story 4.3: L'Infirmerie et le Personnel Médical

As a Commandant du SGC,
I want assigner des scientifiques spécialisés en médecine à l'Infirmerie,
So that optimiser la vitesse de guérison et réduire les complications pour mes membres blessés.

**Acceptance Criteria:**

**Given** Un membre blessé est à l'Infirmerie.
**When** Le joueur assigne un Scientifique (Spécialité : Médecine) à la supervision des soins.
**Then** Le temps de guérison est réduit (selon la stat INT/Médecine du soignant).
**And** Le coût en ressources médicales (USD/Matériel) est ajusté selon l'expertise du soignant.
**And** Si aucun médecin n'est assigné, la guérison est plus lente et présente un risque de "Séquelles" (malus permanent à une stat).

### Story 4.4: Permadeath et Mémorial du SGC

As a Commandant du SGC,
I want marquer la perte définitive d'un membre,
So that ressentir le poids du sacrifice et ses conséquences sur le programme.

**Acceptance Criteria:**

**Given** Un membre meurt sur le terrain (échec critique) ou suite à ses blessures.
**When** La mort est confirmée.
**Then** Le membre est retiré définitivement du roster actif.
**And** Son nom est ajouté au "Mémorial du SGC" (accessible via le Dashboard).
**And** Un malus immédiat à la "Confiance Gouvernementale" est appliqué.

## Epic 5: Avancées Technologiques (Recherche & Artisanat)

Objectif: Mettre en place le système de recherche technologique et de fabrication d'équipements hybrides basés sur le loot alien.

### Story 5.1: Construction du Laboratoire de Recherche (Niveau 19)

As a Commandant du SGC,
I want construire le Laboratoire de Recherche,
So that lancer des projets technologiques complexes basés sur le Naquadah et le Trinium.

**Acceptance Criteria:**

**Given** Le joueur a assez de budget et possède déjà le Centre de Recherche Archéologique.
**When** Le joueur valide la construction du "Laboratoire de Recherche".
**Then** Le coût est déduit et le bâtiment apparaît dans le système d'infrastructure.
**And** Le menu "Fabrication" devient accessible.

### Story 5.2: Système de Recherche Dynamique (Moteur ECA)

As a Commandant du SGC (et concepteur du jeu),
I want que l'arbre de recherche soit piloté par des fichiers de configuration externes (ECA JSON),
So that pouvoir ajouter de nouvelles technologies et dépendances sans modifier le code source du moteur de jeu.

**Acceptance Criteria:**

**Given** Le NarrativeEngine et le EcaEngine sont fonctionnels.
**When** Le système charge les règles depuis data/rules/research_rules.json.
**Then** Il génère dynamiquement la liste des recherches disponibles selon les prérequis (ex: "Avoir ramené du Naquadah de mission" ET "Avoir un Laboratoire").
**And** L'ajout d'une nouvelle technologie consiste simplement à ajouter un bloc JSON définissant son coût, sa durée et son action (ex: débloquer un nouvel objet).

### Story 5.3: Fabrication d'Équipements et Inventaire d'Équipe

As a Équipe SG,
I want m'équiper d'objets fabriqués au SGC (ex: Trousse de soins améliorée, Gilet pare-balles),
So that augmenter mes chances de survie et mes bonus lors des missions.

**Acceptance Criteria:**

**Given** Une technologie a été recherchée (ex: "Protection Balistique").
**When** Le joueur dépense les ressources nécessaires dans le menu "Fabrication".
**Then** L'objet est ajouté au stock global du SGC.
**And** Lors de la préparation d'une mission, le joueur peut assigner ces objets à l'équipe.
**And** Les bonus de l'objet (ex: +2 en jet de survie) sont automatiquement pris en compte par le système de résolution de l'Épic 4.

## Epic 6: Influence Galactique & Survie Institutionnelle

Objectif: Gérer les relations avec les puissances galactiques et assurer la survie politique du programme Stargate sur Terre.

### Story 6.1: Confiance Gouvernementale et Cycle Budgétaire

As a Commandant du SGC,
I want que mes succès augmentent la confiance du gouvernement pour garantir mon budget,
So that assurer la pérennité financière du programme.

**Acceptance Criteria:**

**Given** Un cycle de 30 jours (in-game) s'écoule via le TimelineManager.
**When** Le cycle se termine.
**Then** Le budget de la période suivante est calculé selon le niveau de Confiance Gouvernementale actuel.
**And** La Confiance augmente lors de réussites critiques : découverte de technologie alien, alliance diplomatique, ou retour d'équipe indemne avec du Naquadah.
**And** La Confiance diminue lors de pertes humaines, d'échecs de mission ou de dépenses jugées inutiles (ex: surcharge de personnel sans résultat).
**And** Une notification de "Rapport Budgétaire" s'affiche pour informer le joueur de l'ajustement de ses crédits.

### Story 6.2: Diplomatie et Alliances (Factions)

As a Commandant du SGC,
I want développer des relations diplomatiques avec d'autres factions,
So that débloquer des alliés, des recrues spéciales (ex: Tok'ra) et des routes commerciales.

**Acceptance Criteria:**

**Given** L'équipe rencontre une faction lors d'une mission narrative.
**When** Le joueur fait des choix diplomatiques favorables.
**Then** L'influence auprès de la faction augmente (sauvegardée dans le FactionManager).
**And** Atteindre certains seuils d'influence débloque des récompenses uniques (ex: coordonnées secrètes, technologies partagées).

### Story 6.3: Les Annales du Programme (Succès et Victoire)

As a Commandant du SGC,
I want suivre l'accomplissement des grands objectifs du programme,
So that marquer ma progression vers la victoire finale.

**Acceptance Criteria:**

**Given** Le joueur consulte l'écran "Annales du Programme" (FR13).
**When** Des conditions majeures sont remplies (ex: "Établir une alliance avec la Tok'ra", "Vaincre un Grand Maître Goa'uld").
**Then** Le succès est débloqué et affiché avec une illustration commémorative.
**And** L'accomplissement de tous les objectifs majeurs déclenche la séquence de fin de jeu (Victoire).

<!-- End story repeat -->
