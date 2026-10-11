> ⚠️ **Note importante** : Ce document est une **feuille de route exploratoire** de la vision du jeu, découpée en
> MVP (Minimum Viable Product) et lots successifs, du socle minimal jusqu'à la cible idéale.
> Il ne constitue pas une spécification officielle figée : les spécifications fonctionnelles détaillées vivent dans
> [`specs/features/`](./specs/features) et doivent être consultées/mises à jour en priorité. Ce document sert de
> vision globale et de backlog organisé par domaine.

---

# Stargate: Chronicles — Vision & Roadmap

## Sommaire

- [Principes transverses](#principes-transverses)
- [1. Création de personnage](#1-création-de-personnage)
- [2. Exploration](#2-exploration)
- [3. Influence galactique](#3-influence-galactique)
- [4. Gestion de base](#4-gestion-de-base)
- [5. Manageur — contenu, workflow & accès](#5-manageur--contenu-workflow--accès)
- [6. Multi-plateforme & sauvegarde](#6-multi-plateforme--sauvegarde)
- [7. Idées à creuser](#7-idées-à-creuser)

## Principes transverses

- Chaque fonctionnalité existe potentiellement des deux côtés du produit :
  - **Jeu** : ce que le joueur vit/voit en jouant.
  - **Manageur** : l'outil d'administration permettant de créer/configurer le contenu (races, compétences,
    planètes, arbres de recherche, etc.).
- **Tout ce qui est créé côté manageur doit être accessible via API et via MCP**, afin qu'un agent (humain ou IA)
  puisse créer/modifier du contenu par ce biais, en plus de l'interface graphique du manageur. Ce principe
  s'applique à chaque domaine ci-dessous, pas seulement au manageur lui-même.
- Quand une spécification détaillée existe déjà dans `specs/features/`, ce document pointe dessus plutôt que de la
  dupliquer.

---

## 1. Création de personnage

### MVP — Fondations RPG (Point-Buy)

Spécification détaillée existante : [`specs/features/characters/`](./specs/features/characters)
([characters.md](./specs/features/characters/characters.md),
[races.md](./specs/features/characters/races.md), [skills.md](./specs/features/characters/skills.md),
[equipments.md](./specs/features/characters/equipments.md)).

- **Jeu** : création d'un personnage en mode **Point-Buy** (répartition de points sur les caractéristiques),
  gestion de l'expérience (XP) à la création, application des ajustements raciaux, liste des personnages créés.
- **Manageur** : création/édition des races, des compétences et des équipements disponibles pour la création de
  personnage (via UI, API et MCP).

### Lot 2 — Mode Dice Roll

- **Jeu** : alternative au Point-Buy, génération des caractéristiques par lancer de dés (4D6 en gardant les 3
  meilleurs), avec possibilité de relancer un nombre limité de fois avant validation.
- **Manageur** : aucun contenu spécifique à créer (règle de jeu), paramétrage éventuel du nombre de relances
  autorisées.

### Lot 3 — Avatar de base

- **Jeu** : création d'un avatar visuel du personnage : couleur de peau, sexe, couleur des yeux, couleur des
  cheveux, coupe de cheveux.
- **Manageur** : gestion du catalogue des options d'avatar disponibles (palettes de couleurs, coupes de cheveux)
  via UI/API/MCP.

### Lot 4 — Variation d'avatar selon la race

- **Jeu** : les options d'avatar disponibles (morphologie, couleurs, caractéristiques visuelles propres) varient
  selon la race choisie.
- **Manageur** : association, par race, des variantes d'avatar autorisées/spécifiques.

### Lot 5 — Personnages iconiques de la série

- **Jeu** : si le joueur nomme son personnage comme un personnage connu de la série (ex. "O'Neill"), il débloque
  automatiquement le personnage tel que défini côté manageur (compétences exclusives, bonus particuliers).
- **Manageur** : création de « fiches personnages iconiques » (nom déclencheur, compétences exclusives, bonus,
  contraintes) via UI, API et MCP.

---

## 2. Exploration

### MVP — Chroniques & explorations

- **Jeu** : consultation de la première exploration disponible, lancement d'une exploration, déblocage et accès
  aux explorations suivantes une fois les conditions remplies.
- **Manageur** (via UI, API et MCP) :
  - Création d'une **chronique** (regroupement d'explorations).
  - Création d'une **planète** (nom, liste de lieux), chaque lieu ayant son propre nom.
  - Création d'une **exploration**, rattachée à une planète, composée d'**étapes**, chaque étape se déroulant sur
    un lieu de la planète.
  - Création d'**actions** au sein d'une étape, chacune définie par :
    - une condition de succès (ex. test d'Agilité ≥ 15) ;
    - un **bilan de succès** : fin de l'exploration (gain d'équipement, gain d'expérience, déblocage d'une
      nouvelle chronique) ou enchaînement vers une autre étape ;
    - un **bilan d'échec** : perte de l'équipe, retour anticipé de l'équipe, perte de matériel.

### Lot 2 — Historique des actions (rapport d'équipe SG)

- **Jeu** : consultation de l'historique des actions réalisées lors des explorations, présenté sous forme de
  rapport de mission façon « rapport d'équipe SG ».
- **Manageur** : aucun contenu à créer, cette fonctionnalité s'appuie sur les données générées en jeu.

### Lot 3 — Illustrations immersives des lieux

- **Jeu** : chaque lieu d'une planète affiche une illustration immersive ; l'image peut changer en fonction du
  bilan d'une action (ex. lieu endommagé après un échec).
- **Manageur** : association d'images à un lieu et à des bilans d'action spécifiques, via UI, API et MCP.

### Lot 4 — Infrastructures débloquables sur une planète

- **Jeu** : un bilan d'exploration peut débloquer une infrastructure sur la planète explorée (ex. mine de
  Naquadah).
- **Manageur** : définition des infrastructures disponibles et des bilans d'action/exploration permettant de les
  débloquer.

### Lot 5 — Blessures & infections en exploration

- **Jeu** : un bilan d'échec (ou un bilan de succès à risque) peut provoquer la **blessure** ou l'**infection**
  d'un ou plusieurs membres de l'équipe, nécessitant une prise en charge à l'infirmerie au retour
  (voir [Gestion de base — Infirmerie](#lot-11--infirmerie)).
- **Manageur** : association, à une action ou à un bilan d'exploration, d'un type de blessure/infection parmi
  ceux définis côté Infirmerie, avec sa probabilité d'occurrence.

---

## 3. Influence galactique

### MVP — Factions & possession

- **Jeu** : visualisation de la répartition des planètes d'une galaxie entre factions (carte de possession) ;
  chaque bilan d'exploration (ou d'action) peut influencer la faction possédant un lieu ou une planète.
- **Manageur** (via UI, API et MCP) :
  - Création de **factions**.
  - Association d'une ou plusieurs factions à une planète (une faction par lieu, donc multi-factions possible à
    l'échelle planète si ses lieux appartiennent à des factions différentes).
  - Configuration, sur un bilan d'exploration/action, de l'effet d'influence sur la faction concernée.

### Lot 2 — Relations inter-factions & recrutement

- **Jeu** : suivi du niveau de relation entre la faction du joueur et les autres factions, avec seuils :
  - Ennemie : < 30 %
  - Hostile : 30–40 %
  - Favorable : 60–70 %
  - Alliée : > 70 %

  Au-delà d'un certain seuil de bonne relation, des événements spéciaux permettent de recruter des membres (races)
  de la faction, utilisables à la création de personnage.
- **Manageur** : paramétrage des seuils, des événements de recrutement associés et des races/personnages
  recrutables par faction.

### Lot 3 — Renforts ennemis après combat

- **Jeu** : si, après un combat, la faction ennemie reste propriétaire du lieu/planète, le nombre d'ennemis présents
  augmente progressivement pendant une durée calendaire définie.
- **Manageur** : configuration du taux d'augmentation et de la durée de renforcement par type de faction/lieu.

---

## 4. Gestion de base

### MVP — Calendrier & quartiers d'équipe

- **Jeu** : écoulement du temps calendaire (jours, affectant recherches, expéditions, etc.) ; construction des
  quartiers d'équipe, chaque unité construite débloquant la possibilité de former une nouvelle équipe SG (3 à 6
  membres).
- **Manageur** : paramétrage du coût/temps de construction des quartiers via UI, API et MCP.

### Lot 2 — Recherche & archéologie

- **Jeu** : centre de recherche et centre d'archéologie permettant de rechercher l'usage de la Porte, de faire des
  découvertes et des améliorations technologiques, avec affectation d'un membre SG adapté à la recherche en cours.
- **Manageur** : création, modification et suppression de l'**arbre de recherche**, avec possibilité de
  restreindre l'accès à une fonctionnalité ou un équipement à une recherche donnée, et de définir les améliorations
  d'équipement associées.

### Lot 3 — Amélioration des structures existantes

- **Jeu** : amélioration des structures déjà construites pour augmenter leur efficacité, débloquer de nouvelles
  possibilités ou obtenir des bonus.
- **Manageur** : définition des paliers d'amélioration, coûts et effets par structure.

### Lot 4 — Gestion budgétaire

- **Jeu** : revenu fixe mensuel (financement), dépenses liées aux infrastructures et au personnel.
- **Manageur** : paramétrage des montants de financement de base et des coûts d'entretien par infrastructure/poste.

### Lot 5 — Objectifs du Président / Pentagone

- **Jeu** : objectifs donnés par le président ou le Pentagone (inspiré de la série), influençant le financement
  (hausse ou baisse) ou permettant de gagner des récompenses.
- **Manageur** : création d'objectifs aléatoires ou prédéterminés, avec déclencheurs (bilan de chronique ou
  déclencheur calendaire).

### Lot 6 — Attaque de la base

- **Jeu** : possibilité d'attaque de la base depuis l'extérieur, avec infrastructures de défense à opposer.
- **Manageur** : paramétrage d'une attaque en bilan d'exploration, avec conséquence différée (ex. « attaque dans N
  jours avec X soldats »).

### Lot 7 — Évènements opportuns

- **Jeu** : déclenchement d'évènements opportuns en bilan de chronique ou de manière calendaire.
- **Manageur** : création et paramétrage de ces évènements et de leurs déclencheurs.

### Lot 8 — Armurerie

- **Jeu** : bâtiment armurerie permettant de commander une arme moyennant monnaie, et de l'améliorer (si débloqué)
  moyennant temps, argent et matériel.
- **Manageur** : définition du coût (dollars ou Naquadah) de chaque arme et de son arbre d'évolution.

### Lot 9 — Visuels des bâtiments

- **Jeu** : illustration visuelle pour chaque bâtiment et chaque palier d'évolution.
- **Manageur** : association des illustrations aux bâtiments et à leurs paliers.

### Lot 10 — Nouveaux bâtiments d'entraînement/formation

- **Jeu** :
  - Salle d'entraînement : augmentation dans le temps de l'XP ou des compétences de combat.
  - Salle de formation : gain d'XP ou de compétence associée (configurable).
  - Camp d'entraînement : bonus d'XP à la création d'un nouveau personnage.
- **Manageur** : paramétrage des gains, durées et coûts pour chacun de ces bâtiments.

### Lot 11 — Infirmerie

- **Jeu** : bâtiment infirmerie permettant de soigner les membres d'équipe revenus **blessés** ou **infectés**
  d'une exploration (voir [Exploration — Lot 5 : Blessures & infections en exploration](#lot-5--blessures--infections-en-exploration)).
  Le temps/taux de guérison et les risques
  (séquelles, mise en quarantaine, décès si non soigné à temps) dépendent du type de blessure/infection et du
  niveau de la technologie de soin débloquée via la recherche dédiée.
- **Manageur** : définition des types de blessures/infections, de leurs effets (malus temporaires sur
  caractéristiques/compétences, durée d'indisponibilité) et des traitements associés, ainsi que des technologies de
  soin débloquées par la recherche (voir [Gestion de base — Lot 2 : Recherche & archéologie](#lot-2--recherche--archéologie)),
  inspirées de l'univers Stargate, par exemple :
  - **Sarcophage Goa'uld** : guérison quasi instantanée, y compris de la mort, mais avec des effets secondaires
    (addiction, ralentissement du vieillissement perçu comme non éthique côté politique/confiance).
  - **Dispositif de guérison Ancien** : soin rapide et sans effet secondaire, mais nécessite le Gène ATA pour être
    utilisé et reste rare/coûteux à faire fonctionner.
  - **Technologies de soin Asgard** : traitements avancés (régénération cellulaire, traitement de maladies
    complexes) obtenus via une bonne relation avec la faction Asgard.
  - **Techniques de soin Tok'ra** : utilisation de symbiotes ou de connaissances médicales Tok'ra pour soigner
    poisons et maladies.
  - **Rétrovirus/enzyme Wraith (Pégase)** : traitements spécifiques aux infections d'origine Wraith, avec un risque
    de mutation ou d'effets secondaires si mal maîtrisés.
  - **Quarantaine** : capacité à isoler un membre infecté pour éviter la propagation à l'équipe/la base, en
    attendant un traitement.

---

## 5. Manageur — contenu, workflow & accès

Ces lots sont transverses à tous les domaines ci-dessus : ils s'appliquent à l'ensemble du contenu créé côté
manageur (races, compétences, planètes, factions, arbre de recherche, etc.).

### Lot — API & MCP (fondation transverse)

- **Manageur** : toute création/modification de contenu doit être possible via une **API** et via un serveur
  **MCP**, en plus de l'UI, pour permettre à un agent de créer du contenu de façon autonome.

### Lot — Authentification

- **Manageur** : mise en place de l'authentification des utilisateurs du manageur (comptes, rôles).

### Lot — Workflow Draft → Revue → Approbation

- **Manageur** :
  - Toute création ou modification de contenu passe d'abord par un statut **Draft**.
  - Un système de revue permet d'ajouter des remarques et de donner une **approbation**.
  - Après **deux approbations**, la création/modification devient effective dans les données de jeu.
  - Tout nouveau créateur de contenu commence avec le statut **relecteur** et doit effectuer un nombre défini de
    relectures avant d'obtenir le droit de création.
  - Seul le **mainteneur** (moi) peut supprimer du contenu.
  - L'auteur d'un contenu peut faire une **demande de suppression**, qui notifie les mainteneurs.

---

## 6. Multi-plateforme & sauvegarde

- **Jeu** : portage visé sur mobile, en plus du PC.
- Sauvegarde **locale** systématique, permettant de jouer **hors ligne** dans tous les cas.
- Possibilité de créer un **compte** pour bénéficier d'une **sauvegarde distante automatique**, permettant de
  passer facilement d'un terminal à un autre (synchronisation multi-appareils).

---

## 7. Idées à creuser

- **Exploration et combat spatial** : piste non encore détaillée, à approfondir ultérieurement (gestion de
  flotte, combats spatiaux, synergie avec les explorations planétaires).
