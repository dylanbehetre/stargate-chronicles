---
stepsCompleted: [ 1, 2, 3, 4, 5, 6 ]
inputDocuments:
  - "_bmad-output/planning-artifacts/game-brief.md"
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 0
  projectDocs: 0
workflowType: "gdd"
lastStep: 2
project_name: "stargate-command"
user_name: "Dylan"
date: "2026-04-18"
game_type: "rpg"
game_name: "Stargate Chronicles"
classification:
  gameType: "rpg"
  platforms: [ "PC_Windows", "PC_Linux", "PC_Mac" ]
  genreComplexity: "haute"
---

# Stargate Chronicles - Game Design Document

**Auteur :** Dylan
**Type de jeu :** RPG de Gestion (Management-RPG)
**Plateforme(s) cible(s) :** PC (Windows / Linux / Mac) — itch.io, Steam v2

---

## Executive Summary

### Nom du jeu

Stargate Chronicles

### Concept Central

Stargate Chronicles est un jeu de **Gestion-RPG solo** développé sous Godot 4 où le joueur prend la tête du Programme de
la Porte des Étoiles. Partant du film originel de 1994 — la Porte encore muette, les glyphes indéchiffrés — il recrute
et façonne ses propres équipes SG, développe l'**infrastructure du SGC** — du cœur de Cheyenne Mountain aux *
*installations externes** débloquées par la progression —, et explore un univers hybride de planètes canoniques aux
événements narratifs fixes et de planètes procédurales aux opportunités aléatoires.

Toute la progression — nouvelles technologies, nouvelles races, nouvelles galaxies — se débloque via l'exploration et
les compétences, jamais par le temps réel. Deux tensions permanentes structurent chaque partie : la **survie des équipes
sur le terrain** (permadeath) et la **survie institutionnelle du SGC** (budget, ressources, menaces planétaires).

Projet passion à budget zéro, développé en solo avec l'IA comme co-pilote, ciblant une distribution gratuite sur itch.io
pour une communauté de fans Stargate internationale.

### Type de jeu

**Type :** RPG de Gestion (Management-RPG)
**Framework :** Ce GDD utilise le template RPG avec des sections spécialisées pour la gestion de base (infrastructure,
ressources, équipes), la progression narrative par exploration, et le système de personnages à permadeath.

---

## Plateformes Cibles

### Plateforme Principale

PC (Windows / Linux / Mac) — Distribution gratuite via itch.io au lancement ; Steam envisageable en v2.

### Considérations Plateforme

- Interface pensée pour **souris + clavier** : navigation clavier complète avec raccourcis personnalisables, menus de
  gestion navigables entièrement au clavier
- Pas de support contrôleur prévu en v1
- Performance PC moderne standard — pas de contrainte hardware particulière
- Sauvegarde locale uniquement (pas de cloud en v1)
- Interface texte claire, taille de police ajustable — priorité à la lisibilité

### Plateforme Secondaire (v2)

Mobile (iOS / Android) — Après validation du concept PC. Nécessitera une adaptation UI/UX pour le tactile.

---

## Audience Cible

### Audience Primaire — Le Commandant Passionné

Joueurs qui **connaissent et aiment l'univers Stargate** (SG-1, Atlantis, Universe), core gamers appétents pour la
profondeur systémique (gestion, RPG, narratif).

- **Profil :** Connaît les races, les lieux, les événements clés — veut vivre SA version de la saga
- **Âge indicatif :** 18–55 ans (cœur de la fan-base historique)
- **Sessions :** Longues (1h+), planification et immersion assumées
- **Plateforme :** PC, soirées et week-ends
- **Jeux de référence :** XCOM 2, Rimworld, FTL, Mass Effect

### Audience Secondaire — Le Stratège Narratif

Joueurs de RPG de gestion tactique et narratif, **pas nécessairement fans Stargate**, attirés par la profondeur des
systèmes et la tension survie/ressources.

- **Point d'entrée :** Les mécaniques (permadeath, gestion d'équipe, choix narratifs) — pas le lore
- **Pont vers le jeu :** Tags "management RPG", "sci-fi", "narrative" sur itch.io
- **Conversion :** L'univers Stargate devient un bonus découvert en jouant

### Audience Tertiaire — Les Rôlistes (À Confirmer)

Joueurs de JDR de simulation/militaire (Twilight 2000, Delta Green, Stargate Coalition JDR), sensibles à la profondeur
des personnages et aux choix à conséquences réelles.

- **Vecteur principal :** Bouche-à-oreille, forums JDR, communauté Stargate Coalition
- **Attente spécifique :** Richesse du système de personnages (stats, compétences, traits)
- **Statut :** À valider lors des premiers playtesters — aucune décision de design impactante dépendante de ce segment.

---

## Objectifs du Projet

1. **Expérimenter le SDD (Software-Driven Development)** *(objectif principal)*
   Valider une pipeline de développement IA-assisté — BMAD, GitHub Copilot, génération d'assets —
   comme méthode viable pour un développeur solo sans formation game dev formelle.
   Ce projet est autant un laboratoire méthodologique qu'un jeu.

2. **Offrir aux fans Stargate leur jeu de gestion-RPG**
   Créer l'expérience que la communauté Stargate attend depuis 30 ans :
   jouer SA version du Programme, avec ses propres héros, ses propres décisions.

3. **Provoquer l'attachement et la fierté stratégique**
   Faire en sorte que le joueur s'investisse émotionnellement dans ses équipes SG,
   ressente le poids de chaque mort et la satisfaction de chaque percée technologique.

4. **Distribuer et partager**
   Publier sur itch.io pour la communauté internationale de fans Stargate.
   Succès = joueurs qui partagent spontanément leur partie dans les forums.

---

## Contexte et Rationale

Stargate Chronicles est né en 2026, lors d'un moment de peau à peau avec sa fille
nouveau-née. Un épisode de Stargate SG-1 passait à l'écran. L'idée a germé là,
dans cette bulle de calme — *et si on pouvait vraiment commander le Programme ?*

Trente ans de franchise Stargate. Des centaines d'épisodes, quatre séries, deux films.
Et pas un seul jeu de gestion-RPG dans cet univers. Le vide est inexplicable pour une
franchise aussi riche et une communauté aussi fidèle.

Parallèlement, l'émergence des outils de développement IA (GitHub Copilot, BMAD,
génération d'assets) rend pour la première fois réalisable ce qui aurait nécessité
une équipe entière il y a cinq ans. Dylan n'est pas game developer de formation —
il est développeur Java/Angular avec une passion pour Stargate et l'envie d'expérimenter
ce que le SDD peut accomplir sur un projet qui a du sens.

Ce jeu n'est pas un contrat. C'est une lettre d'amour à un univers, développée
avec les outils de demain, pour prouver qu'un développeur solo passionné peut
accomplir quelque chose de remarquable.

---

## Points de Différenciation (USPs)

### 1. L'univers Stargate enfin jouable comme jamais

Le seul jeu de gestion-RPG dans l'univers Stargate. Pas une reconstitution fidèle
à subir — une saga à s'approprier, avec ses propres héros recrutés et façonnés de
toutes pièces. Les fans de 30 ans de franchise jouent enfin *leur* version du Programme.

### 2. Progression 100% organique — zéro timer, zéro paywall

Tout se débloque par l'exploration et la compétence. Jamais par le temps réel ou
l'argent réel. Dans un genre gangréné par les timers et les IAP, c'est une promesse
radicale tenue.

### 3. Double tension permanente — terrain ET institution

Permadeath des membres d'équipe ET survie budgétaire du SGC. Les deux niveaux
s'alimentent mutuellement : un mort affaiblit le moral et le budget, un budget serré
force des missions risquées. Cette dualité n'existe ni dans XCOM pur ni dans FTL pur.

### 4. Exploration narrative à prérequis dans un univers canonique riche

Choix grisés si les compétences sont insuffisantes (FTL-style), mais dans un univers
avec des planètes canoniques aux événements narratifs fixes et mémorables. La fidélité
au lore Stargate transforme chaque découverte en récompense pour les connaisseurs.

### Positionnement Concurrentiel

| Jeu      | Ce qu'il apporte                              | Ce qui manque                                              |
|----------|-----------------------------------------------|------------------------------------------------------------|
| XCOM 2   | Gestion de base + permadeath                  | Pas de narration canonique, pas de survie institutionnelle |
| FTL      | Exploration narrative + prérequis             | Pas de progression persistante, roguelike pur              |
| Rimworld | Attachement personnages + narration émergente | Pas d'univers préécrit, trop sandbox                       |
| 80 Days  | Format texte illustré à choix                 | Pas de gestion de base ni progression RPG                  |

**Stargate Chronicles occupe l'intersection vide** de ces quatre références.

---

## Core Gameplay

### Pilliers de Design

**1. Appropriation Narrative** *(priorité absolue)*
Le joueur écrit SA saga — ses héros créés et façonnés, ses choix d'exploration, ses
conséquences. Jamais un chemin unique imposé. Chaque partie est unique parce que chaque
commandant est unique. Les événements canoniques offrent de vrais choix, pas de la lecture.

**2. Progression Organique & Émerveillement de la Découverte**
Rien ne se débloque par le temps — tout s'obtient par la curiosité et l'exploration.
La complexité de gestion croît organiquement avec le SGC. Chaque nouvelle Porte ouverte
réserve une surprise : technologie, race, menace, opportunité.

**3. Fidélité à l'Univers**
L'univers Stargate est reconnaissable et respecté — canonique là où c'est important,
procédural là où ça enrichit. Les planètes sont classifiées en 3 Tiers internes de richesse narrative
(Tier 1 canoniques majeures, Tier 2 secondaires, Tier 3 procédurales), **mais cette classification est invisible pour le
joueur
et ne conditionne pas l'ordre des découvertes** : les trois Tiers se mêlent librement dans le graphe d'exploration.

**4. Tension Duale & Conséquences Permanentes**
Deux niveaux de survie permanente : l'équipe SG sur le terrain et le SGC comme institution.
Les membres morts le restent. Les succès renforcent le programme, les échecs l'affaiblissent.

**Priorité en cas de conflit :**
Appropriation narrative > Progression organique > Fidélité à l'univers > Tension duale

> *Note de conception — évolution depuis le Game Brief :* Le Brief initial classait "Progression Organique" en premier
> pilier. La rédaction du GDD a révélé que l'**Appropriation Narrative** — le fait que le joueur écrive SA saga avec SES
> héros — est le moteur émotionnel primaire qui donne son sens à toute la progression. La progression organique reste le
> pilier mécanique structurant, mais elle sert l'appropriation narrative, pas l'inverse. Ce changement de priorité est
> intentionnel et définitif pour la v1.

---

### Boucle de Jeu Centrale

```
┌─────────────────────────────────────┐
│         GÉRER LE SGC                │ ← ~20 min
│  Infrastructure · Budget · Équipes  │
│  Dashboard : priorités urgentes     │
│  Indicateur : Confiance Gouv. 🟢    │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│    ÉQUIPER & FORMER LES ÉQUIPES SG  │ ← ~10 min
│  Compétences · Matériel · Archétype │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│   EXPLORER (MISSION)                │ ← ~20 min
│  Choisir planète → Niveau de risque │
│  visible AVANT départ               │
│  Événements narratifs à prérequis   │
└──────────────┬──────────────────────┘
               ↓
┌──────────────────────────────────────────────────────┐
│                   RETOUR DE MISSION                  │
│  • Découvertes (tech, lore, coordonnées, alliances)  │
│  • Ressources récupérées / perdues                   │
│  • Blessures graves → soins ou risque mort perm.     │
│  • Pertes définitives (permadeath si non soigné)     │
│  • Impact galactique : ±influence des factions       │
│    → Seuils déclenchent événements narratifs réactifs│
│    ex : "Influence Goa'uld −15% en Chulak →          │
│           Bra'tac demande une audience urgente"      │
└──────────────┬───────────────────────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  NOUVELLES POSSIBILITÉS DÉBLOQUÉES  │
│  Techs · Races · Galaxies · Succès  │
│  Succès majeurs = récompenses méca. │
└──────────────┬──────────────────────┘
               │
               └──────────► GÉRER UN SGC ENRICHI
```

**Durée d'un cycle complet :** ~50 min (mission 20 + gestion 20 + évolution personnages 10)
**Variation entre cycles :** Composition d'équipe, état budget, type de planète (interne),
niveau d'influence des factions, objectifs en progression, alertes actives.

**Sauvegarde :** Libre à tout moment — sessions courtes (20 min gestion seule) viables.

---

### Mécanique de Survie des Personnages

> *"La mort doit être juste — annoncée, évitable en théorie, permanente en pratique."*

**Palier Blessure Grave** (avant la mort permanente) :

- Un membre gravement blessé est **hors mission** pendant X cycles
- Peut être soigné à l'Infirmerie (coût : ressources + temps)
- Sans soin, risque de **séquelles permanentes** puis mort définitive
- Évite la mort instantanée arbitraire — le joueur a une fenêtre de décision

**Niveau de Risque Mission** (visible AVANT départ) :

- Indicateur de dangers connus : forces ennemies, environnement hostile, lore connu
- Les missions à risque élevé sont identifiées clairement
- Les missions procédurales peuvent révéler des dangers imprévus (tension maintenue)

---

### Conditions de Victoire & de Défaite

#### Système d'Objectifs & Succès — "Les Annales du Programme"

Progression par **succès tirés du lore**, organisés en catégories extensibles.
Les succès complétés débloquent narration, contenu ou **récompenses mécaniques permanentes**.
Format extensible : `[Catégorie] · [Nom] · [Condition] · [Récompense]`

---

##### 🌌 CARTOGRAPHIE — Explorer l'univers

**Voie Lactée**

- [ ] Franchir la Porte pour la première fois
- [ ] Explorer 10 / 25 / 50 / 75 / 100% des planètes canoniques de la Voie Lactée
- [ ] Découvrir le poste avancé antarctique
- [ ] Localiser les ruines de Dakara
- [ ] Découvrir une planète avec un Miroir Quantique
- [ ] Traverser un trou noir via la Porte *(succès rare)*
- [ ] 🎯 "Premier Saut" — Composer une adresse intergalactique à 8 chevrons

**Pégase** *(débloquée via Atlantis)*

- [ ] Activer Atlantis *(succès majeur — déblocage galaxie Pégase + récompense : tech Ancienne)*
- [ ] Explorer 10 / 25 / 50 / 75 / 100% des planètes canoniques de Pégase
- [ ] Découvrir le monde-origine des Wraith

**Univers & Dimensions**

- [ ] Accéder à un univers parallèle via Miroir Quantique
- [ ] Établir un contact via le réseau de communication des Anciens

---

##### 🤝 DIPLOMATIE — Relations avec les peuples

**Les 4 Grandes Races** *(Anciens, Asgards, Nox, Furlings)*

- [ ] Premier contact avec les Asgards
- [ ] Premier contact avec les Nox
- [ ] Premier contact avec les Furlings *(rare / caché)*
- [ ] Rencontrer les 4 Grandes Races *(succès composite — récompense : accès technologie exclusive)*

**Alliés Majeurs**

- [ ] Établir une alliance avec les Tok'ra *(récompense : accès opérations infiltration)*
- [ ] Établir une alliance avec les Tollan *(avant leur chute)*
- [ ] Fonder ou rejoindre la Nation Jaffa Libre *(récompense : bonus recrutement Jaffa)*
- [ ] Établir une alliance avec les Athosiens *(Pégase)*
- [ ] Diplomatie avec les Genii *(Pégase)*
- [ ] Rejoindre la Coalition des Planètes *(Pégase)*

**Peuples Secondaires**

- [ ] Premier contact avec les Orbaniennes
- [ ] Alliance avec les Langariens *(monde du naquadria)*
- [ ] Premier contact avec les Unas
- [ ] Établir une relation pacifique avec un Unas
- [ ] Contact avec les Voyageurs *(Pégase)*
- [ ] Établir 1 / 2 / 3 / 5 / 10 alliances actives simultanées

**Recrutement Inter-espèces**

- [ ] Recruter un Jaffa dans une équipe SG
- [ ] Recruter un hôte Tok'ra dans une équipe SG
- [ ] Recruter un Tollan dans une équipe SG *(avant leur chute)*
- [ ] Recruter un Athosien dans une équipe SG *(Pégase)*
- [ ] Recruter un Nox dans une équipe SG *(succès rare)*
- [ ] Recruter un membre porteur du Gène ATA naturel
- [ ] Recruter un membre de chaque race jouable disponible *(5 races en v1 ; 7 races avec Athosiens + Satédans en v2)*
- [ ] Avoir une équipe SG intégralement composée de non-Tau'ri

---

##### ⚔️ COMBAT & MENACES — Neutraliser les dangers

**Goa'uld**

- [ ] Vaincre 1 / 5 / 10 Seigneurs Goa'uld
- [ ] Vaincre Apophis *(succès canonique majeur)*
- [ ] Vaincre Ba'al *(succès canonique majeur)*
- [ ] Vaincre Anubis *(succès final arc Goa'uld — récompense : arc suivant débloqué)*
- [ ] Éliminer l'intégralité du Conseil des Seigneurs du Système
- [ ] Réduire l'influence Goa'uld à 90 / 70 / 50 / 25 / 0% en Voie Lactée
- [ ] Libérer tous les peuples Jaffa de l'emprise Goa'uld

**Réplicateurs**

- [ ] Premier contact avec un Réplicateur
- [ ] Détruire un vaisseau infesté de Réplicateurs
- [ ] Utiliser l'arme de Dakara contre les Réplicateurs
- [ ] Réduire l'influence des Réplicateurs à 0% en Voie Lactée

**Wraith** *(Pégase)*

- [ ] Survivre à la première attaque Wraith
- [ ] Détruire une Ruche Wraith *(Hive Ship)*
- [ ] Réduire l'influence des Wraith à 0% en Pégase

**Ori** *(v2)*

- [ ] Premier contact avec les Ori / un Prior
- [ ] Détruire une Superporte des Ori
- [ ] Réduire l'influence des Ori à 0%

**Défense Terrestre**

- [ ] Repousser une attaque directe sur le SGC
- [ ] Repousser une attaque sur Atlantis
- [ ] Survivre à 3 / 5 menaces de niveau extinction

---

##### 🔬 TECHNOLOGIE — Maîtriser la science alien

**Goa'uld**

- [ ] Maîtriser le fonctionnement d'un canon à plasma Jaffa
- [ ] Fabriquer des intars *(armes d'entraînement non létales)*
- [ ] Reverse-engineer un Death Glider
- [ ] Capturer et opérer un Ha'tak *(vaisseau mère Goa'uld)*

**Anciens**

- [ ] Découvrir un ZPM *(Zero Point Module)*
- [ ] Activer une technologie Ancienne via le gène ATA
- [ ] Maîtriser les drones armes des Anciens
- [ ] Uploader la Mémoire des Anciens *(Repository of Knowledge)*
- [ ] Activer l'arme de Dakara

**Humaine / Hybride**

- [ ] Construire le premier MALP amélioré
- [ ] Développer une bombe au naquadah
- [ ] Construire le premier vaisseau battle-cruiser humain *(Prométhée)*
- [ ] Finaliser un arc technologique complet *(récompense mécanique : capacité permanente)*
- [ ] Recevoir le transfert technologique complet des Asgards *(récompense : tech Asgard complète)*

**Recherche**

- [ ] Déchiffrer 10 / 25 / 50 artefacts anciens
- [ ] Traduire une langue alien inconnue
- [ ] Maîtriser 3 langues extraterrestres

---

##### 👥 PERSONNEL — Équipes et personnages

**Progression**

- [ ] Avoir un membre ayant survécu 10 / 25 / 50 missions
- [ ] Atteindre le niveau maximum avec un membre d'équipe
- [ ] Maximiser une caractéristique à son plafond absolu
- [ ] Avoir les 4 archétypes à niveau maximum simultanément

**Accomplissements collectifs**

- [ ] Constituer une équipe SG légendaire *(tous membres niveau max)*
- [ ] Avoir 5 équipes SG actives simultanément
- [ ] "Zéro perte" — compléter un arc narratif sans mort permanente

**Deuil & Résilience**

- [ ] Perdre un premier membre *(marqueur narratif — inévitable)*
- [ ] Surmonter la perte de 5 / 10 / 25 membres
- [ ] Reformer une équipe après une perte totale sur le terrain

**Easter Eggs Canoniques** *(conditions cachées)*

- [ ] 🥚 Recruter Daniel Jackson *(conditions lore cachées — récompense : arc archéologique exclusif)*
- [ ] 🥚 **"The Fifth Race"** — Un membre survit à l'upload du Répertoire des Anciens *(S2E15)*
- [ ] 🥚 **"Unscheduled Offworld Activation"** — Fermer l'iris contre 10 activations non autorisées
- [ ] 🥚 **"Hammond de Texas"** — Débloquer Bra'tac comme contact diplomatique actif
- [ ] 🥚 **"Thor's Chariot"** — Recevoir une aide d'urgence Asgard en situation désespérée *(S2E06)*
- [ ] 🥚 **"Indeed"** — Un Jaffa de l'équipe revient de 25 missions sans mourir

---

##### 🏛️ INFRASTRUCTURE — Développement du Programme

- [ ] Débloquer la première section hors Salle d'Embarquement
- [ ] Construire toutes les sections du SGC
- [ ] Établir le premier Site Alpha
- [ ] Débloquer Atlantis comme base opérationnelle *(récompense : nouvelles équipes SGA)*
- [ ] Avoir 3 bases opérationnelles simultanément

---

##### 🎯 DÉFIS — Pour commandants chevronnés

- [ ] Compléter un arc narratif sans utiliser d'arme alien récupérée
- [ ] Vaincre un Seigneur Goa'uld avec une équipe de 2 membres
- [ ] Maintenir un budget positif pendant 12 cycles consécutifs
- [ ] Explorer 10 planètes avec un seul archétype en équipe
- [ ] 🎯 **"Prudence militaire"** — Envoyer un MALP avant chaque mission sur 10 missions consécutives

---

#### Indicateur de Confiance Gouvernementale

Visible en permanence dans le dashboard. Évolue selon :

- **+** Succès de missions, nouvelles alliances, technologies maîtrisées, menaces repoussées
- **−** Membres tués, menaces ignorées, déficits budgétaires, incidents diplomatiques

**Seuils d'alerte :**

- 🟢 > 70% : Programme stable
- 🟡 50–70% : Surveillance accrue — événements narratifs d'avertissement
- 🟠 30–50% : Audiences au Sénat — missions critiques de justification
- 🔴 < 30% : Programme en danger — séquence de survie institutionnelle activée

#### Conditions de Game Over

**Fermeture du SGC** *(Game Over définitif)* :

- Confiance Gouvernementale à 0% sans redressement *(processus progressif et visible)*
- Déficit budgétaire critique couplé à des échecs répétés
- Attaque ennemie réussie sur **toutes les bases actives**

**Phase de Survie Institutionnelle** *(avant Game Over)* :
Quand la confiance passe sous 30%, une séquence de missions critiques se déclenche.
Réussir repousse la fermeture. Échouer accélère la chute. Le joueur a toujours
une dernière chance — jamais de Game Over surprise.

---

### Onboarding — Première Session (Tutoriel Narratif)

> *Le tutoriel est intégralement narratif, jamais didactique. Le Major Paul Davis — officier de liaison Pentagone/SGC,
figure canonique de SG-1 — guide le joueur via des dialogues institutionnels. Ton : professionnel et sobre. Chaque étape
débloque la suivante séquentiellement et peut être jouée en plusieurs sessions.*

#### Étape 0 — Bienvenue, Général

**Déclencheur :** Premier lancement du jeu.

- Le Major Davis accueille le joueur : *"Bienvenue, Général. Le Pentagone vous a confié le Programme de la Porte des
  Étoiles."*
- Saisie du nom du commandant (utilisé dans toute la narration).
- Présentation illustrée du contexte : découverte de la Porte en 1928, décennies de recherche infructueuse, état actuel
  du programme.

**Mécaniques introduites :** aucune — contextualisation narrative pure.

---

#### Étape 1 — Déchiffrer les glyphes

**Situation :** La Porte est là. Les symboles restent muets.

**Actions guidées :**

1. **Recruter** un spécialiste linguiste-archéologue → introduction à la **Mécanique #2 Recruter** (première création de
   personnage). Bonus canon : nommer le personnage "Daniel Jackson" débloque le trait "Génie linguistique" et un
   dialogue narratif exclusif.
2. **Construire** le Centre d'analyse archéologique → introduction à la **Mécanique #1 Construire** et aux coûts de *
   *Mécanique #4 Budget/Ressources** (implicite).
3. **Lancer la recherche** "Déchiffrer les glyphes de la Porte" → introduction à la **Mécanique #5 Rechercher**.

**Résultat :** Coordonnées identifiées comme adresse stellaire. `CARTOUCHE-GIZEH` ajouté à la Porte. Fonctionnalité
d'activation débloquée.

---

#### Étape 2 — Première activation : envoyer une sonde

**Situation :** La Porte peut être composée. Une sonde MALP est disponible.

**Actions guidées :**

- Accès Salle d'embarquement → composer `CARTOUCHE-GIZEH` → "Envoyer la sonde MALP" → introduction à la **Mécanique #7
  Cadencer la Porte**.
- Séquence narrative illustrée : premier vortex, transmission de données depuis une planète désertique inconnue.

---

#### Étape 3 — Constituer la première équipe SG

**Situation :** La destination est confirmée. Il faut préparer une équipe.

**Actions guidées :**

- **Construire Vestiaires et Dortoirs** → introduction à la capacité d'hébergement (**Mécanique #1 Construire**).
  Débloque 1 slot d'équipe SG.
- **Construire la Salle de Briefing** → débloque la gestion des équipes SG.
- **Composer la première équipe** (4 membres minimum, 6 maximum) → introduction à la **Mécanique #3 Composer Équipes**.

**Équipe recommandée par Davis** : 1 Commandant · 1 Archéologue · 1 Scientifique · 1 Combattant. L'assistant signale les
profils déséquilibrés sans bloquer le joueur.

#### Système de Bonus Canons

> *Les bonus sont intentionnellement symboliques et narratifs — ils offrent un clin d'œil fort aux fans sans créer de
déséquilibre systémique. Un personnage nommé avec un nom canonique reçoit automatiquement ses traits à la création.*

**Équipe d'origine — Film 1994 :**

| Personnage canon     | Archétype   | Bonus                                                                                                                                                                                                                                                     |
|----------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Jack O'Neill**     | Commandant  | Trait *"Bonne étoile"* : +20% chance qu'un choix risqué tourne bien, option "coup de chance" exclusive · Trait *"Charme désarmant"* : options de dialogue exclusives avec les races aliens, +15% diplomatie · répliques canoniques                        |
| **Daniel Jackson**   | Archéologue | *(Bonus introduit à l'Étape 1 — voir ci-dessus)* Trait *"Génie linguistique"* : +compétence déchiffrement · dialogue narratif exclusif sur Abydos                                                                                                         |
| **Charles Kawalsky** | Combattant  | Trait *"Vieux de la vieille"* : +15% moral de l'équipe si O'Neill est dans la même équipe · Trait *"Courage au feu"* : +25% résistance au stress de combat, bonus en situations désespérées · arc narratif tragique propre (S1) déclenché automatiquement |
| **Louis Ferretti**   | Combattant  | Trait *"Éclaireur confirmé"* : +20% efficacité reconnaissance, réduit les chances d'embuscade · Trait *"Mémoire des glyphes"* : mémorise automatiquement les coordonnées stellaires après chaque visite (économise 1 ressource habituellement requise)    |

**Équipe SG-1 — Série (extension recommandée) :**

| Personnage canon    | Archétype                            | Bonus                                                                                                                                            |
|---------------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **Samantha Carter** | Scientifique                         | Trait *"Génie astrophysique"* : +compétence technologie · +25% vitesse recherche technologique · déblocage anticipé des technologies alien       |
| **Teal'c**          | Combattant                           | Trait *"Guerrier Primta"* : +20% force au combat · connaissance innée des Goa'ulds (révèle les menaces plus tôt) · résistance physique augmentée |
| **Janet Fraiser**   | Scientifique *(médecine de terrain)* | Trait *"Chirurgienne de combat"* : soins améliorés en mission · +50% efficacité Infirmerie · réduit la mortalité post-blessure grave             |

---

#### Étape 4 — À travers la Porte !

**Situation :** L'équipe est formée et équipée avec le matériel de base.

**Actions guidées :**

- Salle d'embarquement → sélection équipe → "Envoyer en exploration" vers `CARTOUCHE-GIZEH` → confirmation de la *
  *Mécanique #7 Cadencer**.
- Première séquence narrative illustrée → introduction aux **Mécaniques #8 Décider** (choix à conséquences), **#9
  Combattre** (confrontation éventuelle) et **#11 Collecter** (récupération d'artefacts, adresses supplémentaires).
- Le vrai nom de la planète — **Abydos** — est révélé par les habitants lors de l'exploration.

**Fin du tutoriel guidé.** Le joueur est désormais autonome.

---

#### Mécaniques Introduites par Étape — Récapitulatif

| Étape           | Mécaniques Introduites                                                                 |
|-----------------|----------------------------------------------------------------------------------------|
| Étape 0         | *(aucune — contextualisation)*                                                         |
| Étape 1         | #1 Construire · #2 Recruter · #4 Budget (implicite) · #5 Rechercher                    |
| Étape 2         | #7 Cadencer la Porte                                                                   |
| Étape 3         | #1 Construire (x2) · #3 Composer Équipes                                               |
| Étape 4         | #7 Cadencer · #8 Décider · #9 Combattre · #11 Collecter                                |
| Post-onboarding | #6 Former · #10 Diplomatiser · #12 Évacuer *(introduction progressive, hors tutoriel)* |

> *Les mécaniques #6, #10 et #12 s'introduisent naturellement dans les premières missions post-Abydos, sans didacticiel
forcé — cohérent avec le pilier "Progression Organique".*

---

## Mécaniques de Jeu

### Mécaniques Primaires

#### Côté SGC — Gestion

**1. Construire / Développer l'Infrastructure**
Déverrouiller et améliorer les sections du SGC (infirmerie, armurerie, labo, salle de briefing…).
Coûts en ressources + durée en temps de Chronologie. *Pilier : Progression Organique*

**2. Recruter — Créer un Membre**
Créer un nouveau membre de toutes pièces depuis le pool de recrutement disponible par race :
nom, apparence, archétype (Commandant / Archéologue / Scientifique / Combattant),
répartition des stats de base et traits initiaux.
La capacité du pool est conditionnée par l'infrastructure (Vestiaires & Dortoirs) et,
pour les races non-humaines, par les relations diplomatiques établies avec chaque race.
*Pilier : Appropriation Narrative*

**3. Composer les Équipes SG**
Assigner des membres à des équipes nommées par le joueur (2 à 4 membres, archétypes variés).
*Pilier : Appropriation Narrative*

**4. Gérer le Budget & les Ressources**
Allouer budget (USD simulé) et ressources rares (Naquadah, Trinium, ZPM…).
Revenus : missions, alliances, technologie. Dépenses : infrastructure, équipement, incidents.
*Pilier : Tension Duale*

**5. Rechercher & Fabriquer** *(passif)*
Lancer une recherche ou fabrication : coût ressources + durée en Chronologie.
Résolution automatique à l'échéance — pas d'interaction pendant la durée.
*Pilier : Progression Organique*

**6. Former les Membres**
Investir des points d'entraînement entre les missions pour améliorer stats et compétences.
*Pilier : Appropriation Narrative*

#### Côté Terrain — Exploration

**7. Cadencer la Porte**
Choisir une adresse parmi les coordonnées débloquées (ou en saisir une manuellement).
Affiche : nom de la planète, glyphes canoniques, niveau de risque connu, dernière date de visite, source de découverte,
description si déjà visitée.
Le Tier de la planète est une **métadonnée interne** — jamais affiché, jamais utilisé pour brider l'ordre d'accès.
*Pilier : Progression Organique*

**8. Décider (Événements Narratifs)**
Résolution par choix illustrés — certains grisés si prérequis manquants.
Feedback : % de réussite calculé depuis stats de l'équipe (combat / diplomatie / science).
Résultat narré sous forme de récit court + conséquences mécaniques immédiates.
*Pilier : Appropriation Narrative + Fidélité à l'Univers*

**9. Combattre** *(résolution narrative probabiliste)*
Pas de grille tactique — calcul stats + aléatoire pondéré.
Choix tactiques selon compétences (flanquer, négocier, retraite).
Résultat narré : victoire / fuite / blessures graves / mort.
*Pilier : Tension Duale*

**10. Diplomatiser**
Postures disponibles : alliance, commerce, observation, recrutement.
Résultat modifié par compétences Diplomatiques de l'équipe.
*Pilier : Fidélité à l'Univers*

**11. Collecter**
Récupérer ressources rares, artefacts, coordonnées, technologies alien.
Déclencheur de recherches et fabrications au retour.
*Pilier : Progression Organique*

**12. Évacuer**
Retrait volontaire d'une mission — perd les gains potentiels, protège l'équipe.
Toujours disponible — jamais une décision piégée.
*Pilier : Tension Duale*

---

### Interactions entre Mécaniques

| Mécanique A | Mécanique B          | Interaction                                                       |
|-------------|----------------------|-------------------------------------------------------------------|
| Collecter   | Rechercher/Fabriquer | Artefacts collectés débloquent de nouvelles recherches            |
| Recruter    | Former               | Membres à potentiel élevé progressent plus vite                   |
| Budget      | Construire           | Ressources rares débloquent ou accélèrent certaines constructions |
| Chronologie | Rechercher/Fabriquer | Le temps s'écoule — avance rapide ou Finaliser pour complétion    |
| Décider     | Confiance Gouv.      | Choix narratifs majeurs impactent la confiance                    |
| Combat      | Blessure Grave       | Combat raté peut déclencher le palier blessure grave              |

---

### Progression des Mécaniques

- **Phase d'Éveil :** 1 équipe, infrastructure de base auto-achevée, Cadencer + Décider uniquement
- **Phase d'Expansion :** Multi-équipes, budget actif, Recherche/Fabrication actives, Chronologie visible
- **Phase de Maturité :** Multi-bases, alliances actives, menaces galactiques, Chronologie avancée

---

### Chronologie du Programme — Système de Temps

**Format d'affichage permanent (barre supérieure) :**
`📅 25 Juillet 1995 · 12h15m45s`
*(Date réelle du monde Stargate, démarrant à l'activation initiale du Programme)*

**Écoulement du temps :**

- **Continu et naturel** — le temps s'écoule en permanence, même sans action du joueur
- Vitesse par défaut : lente (adaptée à la gestion)
- Tout événement déclenché stoppe l'avance automatiquement — le joueur doit le traiter avant de reprendre

**Contrôles de vitesse (persistants, coin supérieur droit) :**

| Contrôle | Action                                    |
|----------|-------------------------------------------|
| ⏸ Pause  | Fige le temps                             |
| ▶ Normal | Vitesse standard                          |
| ▶▶ ×4    | Avance rapide                             |
| ▶▶▶ ×16  | Avance très rapide                        |
| ⚠        | Stoppe automatiquement sur tout événement |

**Bouton contextuel "⚡ Finaliser"** :
Affiché à côté de chaque tâche en cours (construction, recherche, fabrication).
Avance le temps jusqu'à la complétion de cette tâche spécifique.
Se stoppe sur tout événement galactique ou alerte survenant avant l'échéance.

**Onboarding de la Chronologie :**

- Les premières constructions du SGC (Salle d'Embarquement) sont **achevées instantanément** — pas de friction en early
  game
- La **première Recherche sur les Glyphes** introduit la mécanique avec un tutoriel contextuel :
  activation du bouton ⚡ Finaliser, découverte de l'avance rapide, premier événement qui stoppe l'avance

---

### Contrôles & Input — PC (Souris + Clavier)

**Paradigme :** Jeu entièrement au tour/action — aucun réflexe requis.

| Action                  | Souris               | Clavier         |
|-------------------------|----------------------|-----------------|
| Naviguer entre sections | Clic sur onglet/menu | Tab / Flèches   |
| Sélectionner un élément | Clic gauche          | Entrée          |
| Confirmer une action    | Clic sur bouton      | Espace / Entrée |
| Annuler / Retour        | Clic Retour          | Échap           |
| Dashboard SGC           | Clic icône           | D               |
| Carte Stellaire         | Clic icône           | M               |
| Équipes SG              | Clic icône           | E               |
| Recherche / Fabrication | Clic icône           | R               |
| Pause / Reprendre       | Clic ⏸               | P               |
| Avance rapide           | Clic ▶▶ / ▶▶▶        | + / ++          |
| Finaliser tâche         | Clic ⚡               | F               |
| Sauvegarder             | —                    | Ctrl+S          |

**Raccourcis entièrement personnalisables.**

**Accessibilité :**

- Taille de police ajustable (3 niveaux minimum)
- Mode contraste élevé optionnel
- Tooltips descriptifs sur tous les éléments interactifs
- Zones de clic généreuses — aucune précision de pointeur requise

---

## Système de Personnages

### Caractéristiques (Stats)

Chaque membre d'équipe possède **7 caractéristiques** définissant ses capacités sur le terrain et en gestion.

| Code  | Nom              | Ancrage lore                                                | Rôle mécanique                                                                     |
|-------|------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| `PHY` | **Physique**     | Teal'c, guerriers Jaffa, symbiote                           | Dommages combat, port équipement lourd, seuil blessure grave, vitesse récupération |
| `HAB` | **Habileté**     | Précision SG au tir, furtivité, manipulation technique      | Précision à distance, sabotage, furtivité, acrobaties                              |
| `INS` | **Instinct**     | Le "gut feeling" de O'Neill, réflexes de soldat             | Initiative combat, choix tactiques, pilotage, improvisation                        |
| `INT` | **Intelligence** | Carter, Daniel, analyse scientifique                        | Recherche, déchiffrement artefacts, technologie alien, langues                     |
| `PER` | **Perception**   | Reconnaissance terrain SG                                   | Détection embuscades, dangers cachés, ressources dissimulées                       |
| `VOL` | **Volonté**      | Résistance à l'emprise Goa'uld, *"on n'abandonne personne"* | Résistance alien, **choix narratifs héroïques exclusifs**                          |
| `CHA` | **Charisme**     | Diplomatie Daniel, autorité O'Neill                         | Négociation, alliances, moral d'équipe, autorité diplomatique                      |

**Échelle des valeurs :**

| Valeur | Modificateur | Profil                                |
|--------|--------------|---------------------------------------|
| 6–7    | −2           | Déficient                             |
| 8–9    | −1           | Faible                                |
| 10–11  | 0            | Moyen                                 |
| 12–13  | +1           | Bon                                   |
| 14–15  | +2           | Excellent                             |
| 16–17  | +3           | Exceptionnel                          |
| 18+    | +4           | Légendaire *(progression uniquement)* |

---

### Création d'un Membre

**Étape 1 — Identité**
Nom, race, apparence (portrait parmi une sélection par race).

**Races jouables :**

- **Tau'ri** — disponible dès le départ *(certains porteurs du Gène ATA naturel)*
- **Jaffa** — débloqué via Alliance Jaffa
- **Tok'ra** — débloqué via Alliance Tok'ra
- **Tollan** — débloqué via Alliance Tollan *(fenêtre temporelle limitée)*
- **Athosien** — débloqué via Atlantis + Alliance Athosiens *(Pégase)*
- **Nox** — débloqué via conditions narratives rares *(recrutement exceptionnel)*

**Étape 2 — Archétype de rôle**
Choisir ou laisser vide. Le tag de rôle est **librement modifiable** à tout moment — il n'affecte pas les stats,
seulement les capacités spéciales disponibles et la sélection narrative automatique.

| Tag de rôle      | Capacités spéciales disponibles                                    | Stats prioritaires pour checks narratifs |
|------------------|--------------------------------------------------------------------|------------------------------------------|
| **Commandant**   | Coordination multi-équipes, briefing moral, autorité diplomatique  | CHA + VOL                                |
| **Archéologue**  | Analyse artefact, traduction langue alien, déchiffrement ruines    | INT + PER                                |
| **Scientifique** | Reverse-engineering, recherche accélérée, activation tech Ancienne | INT + HAB                                |
| **Combattant**   | Flanquement avancé, arts martiaux (Jaffa), suppression             | PHY + HAB                                |

*Si plusieurs membres partagent le même tag de rôle, le système sélectionne automatiquement celui dont les stats
prioritaires sont les plus élevées pour les checks narratifs concernés.*

> **Officier de Commandement de Base** *(rôle spécial — v2 Atlantis)*
> Un membre archétype **Commandant** avec `CHA ≥ 12` peut être désigné *Officier de commandement de base* lors de la
> transition Atlantis (Option A — le général migre vers Atlantis).
> Ce rôle débloque un accès réduit aux fonctions de gestion SGC : il peut valider les constructions et les missions en
> attente, mais ne peut pas initier de nouvelles recherches ou modifier les alliances diplomatiques actives.
> Le membre désigné n'est plus disponible pour les missions terrain tant qu'il occupe ce rôle.

**Étape 3 — Répartition des stats**

- Base fixe : **8** dans chacune des 7 caractéristiques
- **21 points libres** à distribuer librement *(3 points par stat en moyenne)*
- Plafonds à la création : **14 max**
- **Preset d'archétype** disponible (pré-distribue les 21 points de façon thématique, modifiable après)

**Presets de référence** *(base 8 × 7 + 21 pts = 77 total)* :

| Preset       | PHY    | HAB    | INS | INT    | PER | VOL | CHA    | Total |
|--------------|--------|--------|-----|--------|-----|-----|--------|-------|
| Commandant   | 10     | 10     | 11  | 10     | 10  | 12  | **14** | 77    |
| Archéologue  | 8      | 10     | 10  | **14** | 13  | 11  | 11     | 77    |
| Scientifique | 9      | 12     | 10  | **14** | 12  | 10  | 10     | 77    |
| Combattant   | **13** | **13** | 12  | 8      | 11  | 10  | 10     | 77    |

**Étape 4 — Bonus raciaux** *(appliqués après la création, peuvent dépasser les plafonds)*

> Les races disponibles au recrutement dépendent des alliances diplomatiques établies et de la progression narrative.
> «Porteur du gène Ancien» n'est **pas une race** — c'est une aptitude spéciale attribuable à n'importe quel Tau'ri (
> voir
> section Aptitudes Spéciales).

| Race               | Bonus                         | Malus                                        | Condition de recrutement                                                 |
|--------------------|-------------------------------|----------------------------------------------|--------------------------------------------------------------------------|
| **Tau'ri**         | +1 VOL                        | —                                            | Disponible dès le départ                                                 |
| **Jaffa**          | +2 PHY, +1 INS                | −1 CHA *(méfiance initiale mutuelle)*        | Alliance Jaffa active                                                    |
| **Tok'ra**         | +2 INT, +1 VOL                | −1 PHY *(symbiose prioritaire sur le corps)* | Alliance Tok'ra active                                                   |
| **Tollan**         | +2 INT, Aptitude Tech Tollan  | −1 INS *(prudence excessive)*                | Alliance Tollan active *(avant leur chute — fenêtre limitée)*            |
| **Athosien**       | +1 PER, +1 CHA                | —                                            | Alliance Athosiens active *(Pégase — débloqué via Atlantis)*             |
| **Nox**            | +2 VOL, Aptitude Guérison Nox | −2 PHY *(physiquement fragiles)*             | Contact prolongé Nox *(recrutement rare, conditions narratives cachées)* |
| **Satédan** *(v2)* | +2 PHY, +1 INS                | −1 CHA *(méfiance des survivants)*           | Pégase — Alliance Athosiens active + Arc ARC-A1/A2 *(v2)*                |

**Étape 5 — Traits initiaux** *(1 trait tiré aléatoirement, optionnellement remplacé)*
Voir section Traits & Aptitudes Spéciales.

---

### Traits & Aptitudes Spéciales

Les traits sont des **modificateurs narratifs et mécaniques permanents** liés à l'histoire du membre ou à sa race.

> **Règle de plafonnement (cohérence)** :
> Un membre peut avoir au maximum **1 trait de création + 2 traits de progression + 3 aptitudes spéciales**.
> Certains traits et aptitudes sont **mutuellement exclusifs** (indiqué dans chaque entrée).
> Ce plafond empêche l'accumulation de toutes les synergies sur un seul "supersoldat".

---

#### 🎲 Traits de Personnalité — Création

*(Tirés aléatoirement à la création, 1 par membre. Non modifiable après création.)*

| Trait                   | Effet mécanique                                                           | Exclusions                          |
|-------------------------|---------------------------------------------------------------------------|-------------------------------------|
| **Sang-froid**          | +10% taux de réussite sur les choix de retraite et évacuation             | —                                   |
| **Téméraire**           | +15% en combat risqué, −10% en négociation diplomatique                   | Exclusif avec *Sang-froid*          |
| **Empathique**          | +1 CHA effectif lors des premiers contacts avec une nouvelle race         | Exclusif avec *Intimidant*          |
| **Méthodique**          | Durée de recherche −10% quand assigné à une tâche scientifique            | Exclusif avec *Instinct de Terrain* |
| **Survivant**           | Seuil blessure grave +1 (encaisse davantage avant d'être mis hors combat) | —                                   |
| **Leader naturel**      | Bonus moral +5% à toute l'équipe quand il est désigné chef de mission     | Exclusif avec *Solitaire*           |
| **Intimidant**          | +15% en interrogatoire/intimidation, −10% en diplomatie douce             | Exclusif avec *Empathique*          |
| **Solitaire**           | +10% en mission solo ou équipe de 2, −5% en équipe de 4                   | Exclusif avec *Leader naturel*      |
| **Instinct de Terrain** | Détection danger +10% en environnement inconnu                            | Exclusif avec *Méthodique*          |

---

#### ⏫ Traits de Progression

*(Débloqués par l'expérience en jeu — impossibles à l'obtenir à la création)*

| Trait                        | Condition de déblocage                           | Effet mécanique                                                                                  |
|------------------------------|--------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Vétéran**                  | Survie à 25 missions                             | +1 à toutes les stats ; confère *Sang-froid* si non possédé                                      |
| **Sang-froid Opérationnel**  | Retour de 5 missions avec blessure grave soignée | Réduction 20% du malus en état Légèrement Blessé                                                 |
| **Instructeur**              | INT ≥ 14 + 10 missions complétées                | Peut transmettre un bonus d'entraînement (+10% efficacité) à un autre membre au SGC              |
| **Signe de Caste** *(Jaffa)* | Jaffa, PHY ≥ 15, 15 missions                     | Respect accru — +CHA diplomatique avec autres Jaffa ; reconnaissance sur le terrain Jaffa ennemi |
| **Héroïsme Reconnu**         | Réussir 3 choix héroïques consécutifs (VOL ≥ 13) | Accès à des choix narratifs exclusifs "Sacrifice" ; +Confiance Gouvernementale ponctuelle        |

---

#### ✨ Aptitudes Spéciales

*(Débloquées par la race, la progression narrative ou des événements — impossibles à obtenir toutes sur un même membre)*

| Aptitude                           | Source                                                                                                                             | Effet                                                                                                                                                                                                                   | Exclusions                             |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| **Gène ATA naturel**               | Tau'ri porteur de naissance *(tiré à la création ou découvert en mission)*                                                         | Active les technologies Anciennes sans interface — prérequis de nombreux événements Anciens                                                                                                                             | Exclusif avec *Gène ATA thérapeutique* |
| **Gène ATA thérapeutique**         | Recherche SGC débloquée *(traitement Beckett)*                                                                                     | Même effet ATA naturel, mais activation plus longue, VOL ≥ 11 requis                                                                                                                                                    | Exclusif avec *Gène ATA naturel*       |
| **Gène Wraith**                    | Pégase — événement narratif rare                                                                                                   | Utilisation technologie Wraith ; résistance mentale accrue contre les Wraith                                                                                                                                            | Incompatible avec *Symbiose Tok'ra*    |
| **Ancien Hôte**                    | Survie à une possession Goa'uld ou Tok'ra résolue                                                                                  | +1 Savoir Goa'uld (compétence narrative), peut utiliser certains artefacts Goa'uld sans adaptateur                                                                                                                      | —                                      |
| **Tech Tollan**                    | Tollan uniquement                                                                                                                  | Options technologiques uniques dans les événements + Recherche accélérée ×0,8                                                                                                                                           | —                                      |
| **Module T.E.R.** *(entraînement)* | Formation débloquée après Alliance SGC / coalition                                                                                 | Maîtrise du Trans-Phase Eradication Rifle — seule arme infligeant des dégâts aux soldats Kull d'Anubis                                                                                                                  | —                                      |
| **Guérison Nox**                   | Nox uniquement                                                                                                                     | Stabilise *sur le terrain* un membre en Blessure Grave sans Infirmerie — sans consommation de ressources, mais le membre conserve le statut Blessé Grave au retour (soins Infirmerie toujours requis) — 1 usage/mission | —                                      |
| **Basha'ak**                       | Jaffa, PHY ≥ 16 en progression                                                                                                     | Arts martiaux Jaffa — attaque de corps à corps supplémentaire avec malus −3 sur chaque attaque                                                                                                                          | —                                      |
| **Lok'nel**                        | Jaffa, INS ≥ 15 en progression                                                                                                     | Lecture du champ de bataille — +15% initiative et détection d'embuscade                                                                                                                                                 | —                                      |
| **Symbiose Tok'ra**                | Tok'ra, ou Tau'ri hôte d'un symbiote Tok'ra actif *(condition déclenchée par événement narratif diplomatique — ex : Jacob Carter)* | +2 INT permanent, choix narratifs d'infiltration exclusifs                                                                                                                                                              | Incompatible avec *Gène Wraith*        |
| **Mémoire des Anciens**            | Survie à l'upload du Répertoire                                                                                                    | +3 INT temporaire (3 missions), VOL ≥ 12 requis pour survivre à l'upload                                                                                                                                                | —                                      |
| **Mémoire de Langara**             | Langarien ou événement narratif psychique                                                                                          | Apprentissage accéléré — coût formation réduit de 20% ; 1 aptitude psychique (lecture superficielle)                                                                                                                    | —                                      |
| **Traqué** *(v2)*                  | Satédan — survie extrême *(conditions narratives ARC-P Pégase)*                                                                    | Seuil avant Blessure Grave +1 (encaisse un impact supplémentaire avant d'être mis hors combat) ; tentative de fuite d'une mission toujours réussie                                                                      | —                                      |
| **Médecin de Guerre** *(v2)*       | Tau'ri Scientifique (médecine) — Formation médicale avancée débloquée *(ex : Carson Beckett)*                                      | Stabilise *et réduit à Légèrement Blessé* un membre en Blessure Grave sans Infirmerie — coût 1 ressource médicale — 1 usage/mission                                                                                     | —                                      |

---

### Progression des Membres

#### Canal 1 — Progression par Usage *(automatique)*

Les caractéristiques progressent lentement à chaque utilisation significative en mission :

- Chaque check réussi d'une stat accumule de l'expérience dans cette stat
- Seuil de progression : environ 5–8 utilisations réussies → +1 dans la stat concernée
- Plafond de progression par usage : **16** (au-delà, formation active requise)

#### Canal 2 — Formation Active *(Mécanique #6)*

Au SGC entre les missions :

- Investir du **temps en jeu** (Chronologie) + **ressources** dans l'entraînement ciblé
- Permet de dépasser le plafond 16 jusqu'au maximum absolu **18**
- L'infrastructure (Centre de Formation, Laboratoire) augmente l'efficacité selon les stats réelles du membre formé
- Durée indicative : 7–14 jours en jeu selon la stat et le niveau cible

#### Compétences Spécialisées *(3–5 par archétype)*

En complément des stats, des compétences spécialisées s'améliorent indépendamment :

| Archétype        | Compétences disponibles                                           |
|------------------|-------------------------------------------------------------------|
| **Commandant**   | Tactique de terrain · Leadership en crise · Négociation politique |
| **Archéologue**  | Linguistique alien · Archéologie de terrain · Analyse culturelle  |
| **Scientifique** | Physique appliquée · Ingénierie alien · Médecine de terrain       |
| **Combattant**   | Tir de précision · Combat rapproché · Furtivité & Infiltration    |

Les compétences progressent uniquement par usage — pas de formation active.
Chaque compétence a 5 niveaux (Novice → Initié → Compétent → Expert → Maître).

---

### États de Santé & Blessures

> *"La mort doit être juste — annoncée, évitable en théorie, permanente en pratique."*

```
⬜ INDEMNE
   ↓ (impact mineur en mission)
🟡 LÉGÈREMENT BLESSÉ
   • Malus −10% sur tous les checks
   • Résolution auto : 3–5 jours en jeu (repos)
   • Infirmerie : résolution en 1 jour, malus supprimé immédiatement
   ↓ (impact grave en mission)
🔴 BLESSURE GRAVE — HORS MISSION
   • Sans infirmerie : 3–6 semaines, risque séquelles permanentes / mort
   • Avec infirmerie  : 1–2 semaines, risque supprimé
   • Séquelles possibles : −1 permanent dans une stat (si non soigné correctement)
   ↓ (sans soin ou séquelles aggravées)
💀 MORT PERMANENTE
   • Irréversible — le membre disparaît définitivement
   • Génère un événement mémoriel dans le journal du SGC
   • Impact : −Confiance Gouvernementale, −moral des autres membres
```

**L'Infirmerie** est donc utile en continu :

- Blessure légère → optionnel (accélère et supprime le malus)
- Blessure grave → obligatoire pour survivre sans séquelles

**Visibilité du risque :** Le niveau de risque de blessure d'une mission est affiché **avant le départ**, calculé depuis
la difficulté connue et les stats de l'équipe.

---

## Progression et Équilibre

### Progression du Joueur

La progression suit trois axes simultanés :

**1. Progression du SGC** *(institutionnelle)*

- Nouvelles sections d'infrastructure débloquées → nouvelles capacités de gestion
- Nouvelles races alliées → nouveaux pools de recrutement
- Nouvelles technologies maîtrisées → options d'équipement et de mission

**2. Progression des Membres** *(personnelle)*

- Stats qui montent par usage et formation
- Compétences spécialisées qui progressent par mission
- Traits et aptitudes débloqués par événements narratifs

**3. Progression de la Connaissance** *(narrative)*

- Planètes cartographiées, événements canoniques déclenchés
- Relations avec les factions (influence ±)
- Succès "Annales du Programme" complétés

**Philosophie centrale :** Rien ne se débloque par le temps réel — tout s'obtient par l'exploration et la compétence.

---

### Courbe de Difficulté

> La progression n'est pas mesurée en années ni en temps réel : elle se mesure en **jalons de découverte et de capacité
**. La difficulté n'augmente pas de manière automatique ou forcée — elle découle directement des choix et des résultats
> du joueur.

**Phase d'Éveil** *(de l'activation du Programme au premier arc narratif)*

- 1 équipe SG, infrastructure de base auto-achevée lors du départ
- Premières constructions instantanées — pas de friction
- Planètes peu explorées — rencontres légères, dangers locaux (Goa'uld de faible rang)
- Apprentissage : Cadencer + Décider, introduction Chronologie via 1ère Recherche Glyphes
- Aucune pression budgétaire imposée — elle grandit avec les ambitions du joueur

**Phase d'Expansion** *(déblocage de 2+ équipes, budget actif)*

- 2–3 équipes actives, Recherche/Fabrication actives, budget en jeu
- Planètes variées débloquées via exploration — Tiers 1/2/3 mélangés, invisibles, surprises croissantes
- Menaces croissantes : factions adverses plus organisées, Apophis, premiers Réplicateurs
- Tension budget vs. développement infrastructure
- Premières morts possibles — apprentissage permadeath

**Phase de Maturité** *(multi-bases, alliances galactiques actives)*

- Multi-bases (SGC + Site Alpha ± Atlantis)
- Toutes zones accessibles, influence factions galactiques, planètes procédurales en nombre
- Menaces existentielles : Anubis, invasion Réplicateurs
- Confiance Gouvernementale sous surveillance accrue **si et seulement si** les résultats du joueur l'exigent
- Gestion d'urgence multi-front selon les priorités choisies par le joueur

---

### Économie et Ressources

### I. Revenus : La Dotation Mensuelle
Le budget du SGC repose sur une dotation versée le **1er de chaque mois** (temps de jeu).

**Formule :** `Dotation = Base Statut × Facteur Confiance × Facteur Menace`

| Statut Programme | Déclencheur Narratif | Dotation Base (mensuelle) |
|------------------|----------------------|---------------------------|
| **Sommeil**      | Début de partie      | 2 000 000 $               |
| **Actif**        | 1ère activation Porte| 8 000 000 $               |
| **Stratégique**  | 1er contact alien    | 20 000 000 $              |
| **Priorité Nat.**| Menace Apophis/Anubis| 50 000 000 $              |

**Multiplicateurs :**
- **Confiance Gouvernementale :** De 0.5x (Confiance < 30%) à 1.5x (Confiance > 85%).
- **Menace Galactique :** De 1.0x (Nulle) à 1.25x (Critique). Actif uniquement à partir du Statut Stratégique.

---

### II. Structure des Dépenses

| Type | Poste | Impact |
|------|-------|--------|
| **Fixes** | Personnel de base | Lié au statut du programme (non gérable directement). |
| **Fixes** | Salaires équipes SG | Coût par équipe active (incite à optimiser le roster). |
| **Fixes** | Maintenance Infra | Coût par section construite au SGC. |
| **Variables** | Recherche | Coût de lancement (one-shot) + Burn Rate mensuel. |
| **Variables** | Fabrication | Coût USD (one-shot) + Ressources (Naquadah/Trinium). |
| **Variables** | Infrastructure | Coût de construction ou d'amélioration. |
| **Variables** | Infirmerie | Coût des soins en cas de blessure grave. |

---

### III. Recherche vs Fabrication (Distinction Nette)

#### 1. Système de Recherche (Le Savoir)
La recherche produit de la **connaissance** (blueprints, capacités narratives).
- **Coûts :** Lancement (USD) + Burn Rate mensuel (USD) + Artefact prérequis (optionnel).
- **Modificateurs :** Traits de membres (ex: *Méthodique*), Alliances (Tok'ra, Jaffa).

#### 2. Système de Fabrication (Le Matériel)
La fabrication produit des **objets tangibles** assignables.
- **Coûts :** Blueprint (issu de la recherche) + Coût USD (one-shot) + Ressources brutes.
- **Produits :** P90 améliorés, Zat'nik'tel, Armures au Trinium, MALP améliorés, etc.
- **Limite :** Nombre de fabrications simultanées limité par le niveau de l'Armurerie.

---

### IV. Gestion du Déficit : L'Ultimatum de Kinsey

Si le solde devient négatif au 1er du mois, le programme entre en **Phase de Crise**.

1. **Le Premier Mois (Déficit) :** Intervention du Sénateur Kinsey.
   - **Contraintes :** Interdiction totale de construire, fabriquer, recruter ou lancer des recherches.
   - **Gel :** La Confiance Gouvernementale ne peut plus augmenter.
2. **Le Deuxième Mois (Déficit persistant) :** **Game Over Narratif**.
   - **Illustration :** La Porte des Étoiles éteinte, couverte d'une bâche du NID.
   - **Épilogue :** Kinsey place un général à sa solde. Le programme est démantelé ou détourné. La Terre est aveugle.

#### Actions de Survie (Pour repasser dans le vert) :
- **Mise en sommeil d'infrastructure :** Désactiver une section pour supprimer sa maintenance (met en pause les projets associés).
- **Dissolution d'équipe SG :** Licencier ou réaffecter une équipe pour supprimer son salaire.
- **Annulation :** Stopper une recherche ou une fabrication en cours.

#### Solutions d'Urgence (Axe Canon) :
- **Le Pacte de Maybourne :** Vendre un artefact non-étudié au NID (Cash immédiat, baisse massive de Confiance).
- **Extraction Forcée :** Mission spéciale de minage (Naquadah) sous haute pression politique (Risque élevé).
- **Requête Tok'ra :** Aide en ressources en échange d'un service diplomatique/militaire dangereux.

---

### V. Ressources Spécifiques (Inventaire)

| Ressource | Source | Usage |
|-----------|--------|-------|
| **Naquadah** | Missions de minage, Alliances | Énergie, Armement, Fabrication avancée. |
| **Trinium** | Missions planètes spécifiques | Blindages, Armures, MALP avancés. |
| **Cristaux Anciens** | Ruines, Arcs Narratifs | Technologie Ancienne, ZPM (rare). |
| **Naquadria** | Arc Langara | Armes de destruction massive (Instable). |
> Le transfert ou l'échange de technologie avec des alliés n'est **jamais une ligne budgétaire ordinaire**.
> C'est un **événement diplomatique exceptionnel** : une négociation scénarisée avec enjeux narratifs,
> fidèle à la série où ce type d'accord était rare, tendu et à double tranchant.
> Mécaniquement, le bénéfice économique est réel mais ponctuel — jamais récurrent automatiquement.

---

## Level Design — Planètes & Missions

### Classification des Planètes *(metadata interne — invisible pour le joueur)*

> **Principe fondateur :** Le Tier n'est jamais affiché au joueur et n'impose aucun ordre de découverte. C'est une
> étiquette interne qui guide le moteur dans la génération des événements. Le joueur explore l'inconnu — il ne sait pas
> ce
> qu'il trouve de l'autre côté avant d'y aller.

**Tier 1 — Planètes Canoniques Majeures**
Planètes à fort poids narratif : Abydos, Chulak, Kheb, Dakara, Hanka, Tollana…

- Événements narratifs riches et scénarisés, fidèles au lore
- Plusieurs visites possibles avec évolution selon les actions du joueur
- Certaines déclenchent des arcs narratifs complets (série de missions liées)
- Traitement visuel et textuel exceptionnel

> **Exemple Tier 1 — Abydos** *(P8X-873)*
> Glyphes canoniques affichés sous le nom.
> *Source de découverte : planète racine — première activation du Programme, 1994.*
> *Description après 1ère exploration : Désert aride, peuple des Abydoniens descendants des anciens Égyptiens. Temple de
Ra. Chambre des hiéroglyphes contenant des milliers d'adresses stellaires.*
> Arc multi-missions : ouverture du Programme (film), retour de Daniel Jackson (S1), destruction par Anubis (S6) —
> chaque visite fait évoluer la description et les options disponibles selon les choix du joueur.
> Contenu mécanique : artefacts, déverrouillage d'adresses vers d'autres planètes, recrutement possible.

**Tier 2 — Planètes Canoniques Secondaires**
Planètes nommées dans la série avec lore de surface :

- 1–3 événements narratifs légers
- Ressources ou contacts spécifiques
- Peuvent évoluer selon les factions actives

> **Exemple Tier 2 — Hanka** *(P8X-987)*
> Glyphes canoniques affichés sous le nom.
> *Source de découverte : coordonnées transmises par les Nox après premier contact.*
> *Description après 1ère exploration : Planète de colons humains. Présence d'une ancienne équipe de recherche SGC.
Atmosphère normale, faune locale peu hostile.*
> 1 événement narratif fort — l'épidémie Goa'uld et Cassandra (S1E15 "Singularity"). Après cet événement, la planète est
> déserte et classée zone de danger biologique dans le journal du SGC.
> Contenu mécanique : ressources biologiques, lore médical, déclencheur d'alliance potentielle.

**Tier 3 — Planètes Procédurales**
Générées aléatoirement, contextualisées par la menace galactique active :

- Opportunités aléatoires : ressources, contacts, technologie
- Dangers proportionnels au niveau de menace actuel
- Peuvent révéler des surprises non anticipées (tension maintenue)
- Nombre illimité — constituent le "bruit de fond" de l'exploration

### Graphe de Découverte des Planètes

Les planètes ne sont pas débloquées par un palier de progression ou selon un ordre de Tier, mais par un **graphe de
découverte interne** gérant la cohérence canonique :

- **Planètes racines** : accessibles dès le départ (ex : Abydos — première mission canonique)
- **Planètes enfants** : débloquées en explorant leurs voisines canoniques (ex : Abydos → découverte de l'adresse de
  Chulak via les Jaffa d'Apophis)
- **Découvertes secondaires** : coordonnées trouvées dans des artefacts, transmises par des alliés ou des informateurs
  PNJ, ou calculées via des recherches SGC
- **Découverte via coordonnées manuelles** : voir section Carte Stellaire ci-dessous
- Les Tiers 1, 2 et 3 sont **mélangés dans le graphe** : une planète Tier 3 peut être voisine d'une Tier 1 — l'ordre de
  rencontre dépend du chemin d'exploration du joueur, pas du Tier

```
Abydos — Tier 1 (racine)
  ├── Chulak — Tier 1  ← adresse trouvée sur Abydos
  │     ├── Hak'tyl — Tier 2
  │     └── Delmak — Tier 2  ← rencontres Tok'ra
  ├── P3X-888 — Tier 3  ← procédurale liée à l'arc Unas
  └── [planète procédurale] — Tier 3
```

> Ce graphe est entièrement géré en données externalisées (format de données structuré), extensible sans modification du
> code.

### Sélection de Mission — Carte Stellaire

Interface de la Carte Stellaire — pour chaque planète disponible dans l'annuaire du joueur :

- **Nom de la planète** (désignation connue ou code SGC)
- **Glyphes canoniques** *(affichés en plus petit sous le nom, selon les coordonnées canoniques de la série)*
- **Niveau de risque connu** (calculé depuis menaces connues + stats équipe)
- **Dernière date de visite** (Chronologie)
- **Tags de contenu** : ressources attendues, race présente, menace détectée
- **Source de découverte** : comment le joueur a obtenu ces coordonnées *(ex : "Découverte lors de l'exploration d'
  Abydos", "Transmis par les Tok'ra", "Artefact déchiffré par [Membre]")*
- **Description** : absente avant la première visite ; se complète progressivement après chaque exploration, pouvant
  évoluer selon la narration *(ex : une planète pacifique peut devenir dangereuse après une invasion Goa'uld)*
- **Favoris** : marquer des planètes pour retour prioritaire

#### Saisie Manuelle de Coordonnées

> *Pour le fan qui connaît ses adresses par cœur — une triche affectueuse.*

Le joueur peut à tout moment **saisir manuellement une séquence de glyphes** (adresse à 7 symboles) dans l'interface de
la Porte.

- Si l'adresse correspond à une planète non encore découverte : **la Porte s'ouvre** — la planète est accessible comme
  si le joueur l'avait trouvée normalement
- La planète est marquée dans la Carte Stellaire avec la source : *"Coordonnées saisies manuellement"*
- Aucune restriction narrative : le jeu assume que certains joueurs-fans sont plus informés que leurs personnages
- Les adresses inconnues (hors canon) génèrent une planète procédurale ou un message "Adresse non résolue"

---

### Machine d'État des Arcs Narratifs

Chaque arc narratif (série de missions liées à une planète ou une faction) possède un état formel persistant entre les
sessions. Cette machine d'état est la référence pour la phase Architecture.

#### États Possibles

| État                      | Identifiant    | Description                                                                                                                                                                                           |
|---------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Non découvert**         | `UNDISCOVERED` | L'arc existe mais la planète/faction n'a pas encore été trouvée par le joueur. Invisible dans la Carte Stellaire.                                                                                     |
| **Disponible**            | `AVAILABLE`    | La planète est découverte. Les prérequis narratifs de l'arc sont remplis. L'arc peut être commencé à la prochaine visite.                                                                             |
| **En cours**              | `IN_PROGRESS`  | Le joueur a engagé au moins une mission liée à cet arc. Des choix précédents influencent les options futures.                                                                                         |
| **Complété**              | `COMPLETED`    | Toutes les missions de l'arc ont été résolues. La planète reste accessible mais sans nouvel arc principal actif — visites de suivi possibles (ressources, lore supplémentaire).                       |
| **Échoué définitivement** | `FAILED`       | Applicable aux arcs dont l'issue peut être définitivement compromise (ex : échec de la défense d'une planète alliée, mort d'un PNJ clé). La planète reste accessible mais l'arc ne peut être relancé. |

#### Règles de Persistance entre Sessions

- L'état de chaque arc est sauvegardé dans le fichier de sauvegarde du joueur.
- Un arc `COMPLETED` ou `FAILED` ne peut jamais être remis à `AVAILABLE` dans la même partie — les conséquences sont
  permanentes.
- Un arc `IN_PROGRESS` conserve l'historique des choix effectués. Un retour sur la planète reprend là où le joueur s'est
  arrêté.
- Plusieurs arcs peuvent être `IN_PROGRESS` simultanément (arcs parallèles sur plusieurs planètes).
- La progression d'un arc peut déverrouiller l'état `AVAILABLE` d'un autre arc sur une planète différente (ex : Arc
  Abydos `COMPLETED` → Arc Chulak passe de `UNDISCOVERED` à `AVAILABLE`).

#### Exemple — Arc Abydos

```
UNDISCOVERED  →  AVAILABLE        →  IN_PROGRESS      →  COMPLETED
(avant Étape 2)  (après sonde MALP)  (1ère mission)      (arc du film résolu)
                                                               ↓
                                               Découverte de l'adresse Chulak
                                               → Arc Chulak : UNDISCOVERED → AVAILABLE
```

#### Note sur les Arcs Multi-Actes (Tier 1)

Les planètes Tier 1 (Abydos, Chulak…) peuvent avoir **plusieurs arcs successifs** sur la même planète. Chaque acte est
une entrée distincte dans la machine d'état :

- `ARC_ABYDOS_ACTE_1` (Film 1994) → `COMPLETED`
- `ARC_ABYDOS_ACTE_2` (Retour Daniel, S1) → `AVAILABLE` une fois l'acte 1 `COMPLETED`
- `ARC_ABYDOS_ACTE_3` (Destruction Anubis, S6) → `AVAILABLE` selon prérequis lore

---

## Direction Artistique & Audio

### Style Visuel

**Direction artistique :** Concept art graphic novel — illustrations semi-réalistes à encrage marqué, palette de
couleurs désaturées avec accents lumineux (bleu Porte, orange naquadah, vert Goa'uld).

**UI/UX :** Interface sobre et militaire — inspiration design de salle de commandement, terminaux SGC. Typographie
claire, lisibilité prioritaire sur l'esthétique décorative.

**Illustrations :** Concept art pour les événements narratifs clés (une illustration par événement canonique majeur),
portraits de membres générés par archétype/race, vues schématiques des sections SGC.

**Animations :** Minimales et fonctionnelles — activation de la Porte (séquence iconique), effets de transition entre
sections, indicateurs d'état animés.

### Audio et Musique

**Musique :** Orchestrale ambient, inspirée des compositions de Joel Goldsmith pour SG-1 et Atlantis. Thèmes distincts
par contexte :

- SGC en gestion : ambient calme, basses militaires
- Mission en cours : tension montante
- Événement critique : urgence orchestrale
- Victoire/découverte : motif mélodique court

**Effets sonores :**

- Activation de la Porte (canonique — effet de référence)
- Stases et Zat, P90 (effets de référence)
- Interface SGC : sons de terminal militaire
- Notifications : sons discrets, distinctifs par type d'alerte

**Accessibilité audio :** Sous-titres pour tous les textes narratifs, indicateurs visuels pour toutes les alertes
sonores.

---

## Spécifications Techniques

### Moteur et Performances

**Moteur :** Godot 4 (GDScript)
**Cible performance :** 60 FPS stable sur PC moderne (3–5 ans)
**RAM :** < 2 Go
**Stockage :** < 500 Mo (v1)
**Résolution :** 1080p natif, mise à l'échelle 720p–4K

### Architecture Technique

**Sauvegarde :** JSON local, sauvegarde libre à tout moment (Ctrl+S), autosave configurable toutes les X minutes en jeu.

**Modularité du contenu :** Planètes, événements narratifs et succès stockés en fichiers de données (JSON/ressource
Godot) — extensibles sans modification du code core.

**Localisation :** Architecture i18n dès le départ — textes externalisés, support multilingue prévu (FR prioritaire, EN
v2).

**Accessibilité :**

- Police ajustable (3 niveaux : Normal / Grand / Très grand)
- Mode contraste élevé (optionnel)
- Navigation clavier 100% complète
- Raccourcis personnalisables (sauvegardés dans le profil)

### Plateformes

**PC Windows/Linux/Mac :** Export Godot natif. Distribution itch.io (v1), Steam (v2).
**Mobile :** Non prévu en v1 — architecture UI pensée pour adaptation future.

---

## Épics de Développement

### Structure des Épics

**Épic 0 — Fondations Techniques**
Mise en place Godot 4, architecture projet, pipeline CI/CD, système de sauvegarde/chargement, infrastructure de
données (JSON).

**Épic 1 — SGC Core (Gestion)**
Dashboard SGC, gestion infrastructure (construction/amélioration), système budgétaire, Chronologie du Programme,
interface équipes.

**Épic 2 — Recrutement & Personnages**
Création de membre (stats, archétype, traits), fiche personnage, progression par usage, formation active, système
blessures/infirmerie.

**Épic 3 — Exploration (Terrain)**
Carte Stellaire, sélection mission, système événements narratifs (choix illustrés, prérequis, résolutions), combat
narratif probabiliste, retour de mission.

**Épic 4 — Contenu Canonique v1**
Planètes Arc Goa'uld (Abydos, Chulak, Kheb, Dakara, Hanka, Tollana…), arcs narratifs Apophis et Anubis, succès "Annales
du Programme" complets. *(Note : Cheyenne Mountain est le QG du SGC sur Terre — c'est une section d'infrastructure, pas
une destination de mission.)*

**Épic 5 — Factions & Diplomatie**
Système d'influence factions, alliances actives/passives, recrutement inter-espèces, événements réactifs (seuils
d'influence).

**Épic 6 — Menaces & End Game**
Gestion Confiance Gouvernementale, Phase de Survie Institutionnelle, conditions Game Over, menaces galactiques (
Réplicateurs).

**Épic 7 — Polish & Distribution**
Accessibilité complète, audio final, localisation EN, export multi-plateforme, publication itch.io.

---

## Métriques de Succès

### Métriques Techniques

- **60 FPS stable** en gestion multi-équipes (5 équipes actives, 20+ membres) — *mesuré via Godot Profiler sur la
  configuration de référence (PC ~3–5 ans : Intel Core i5-8e gen. / AMD Ryzen 5 3600, 16 Go RAM, GPU milieu de gamme)*
- **Temps de chargement initial < 3 secondes** — *mesuré via Godot Profiler, du lancement à l'affichage du dashboard
  principal*
- **Zéro perte de données sauvegarde** sur 100 cycles test — *validé par suite de tests automatisés : 100 cycles
  save/load consécutifs, vérification d'intégrité des données*
- **Interface navigable 100% au clavier** sans souris — *validé par checklist de navigation manuelle sur chaque écran*

### Métriques Gameplay

- **Session moyenne > 45 minutes** — *mesuré lors de sessions de playtest formelles : 5 joueurs minimum, enregistrement
  manuel du timestamp début/fin de session, moyenne calculée sur ≥ 10 sessions totales*
- **Taux de mort de la 1ère équipe complète < 30%** au premier arc (Abydos) — *mesuré sur 10 sessions playtest avec
  joueurs novices : ratio sessions ayant perdu l'équipe complète / total sessions arc Abydos*
- **Succès "Annales" complété ≥ 1** par joueur ayant joué > 2h — *validé via rapport post-partie (export manuel des
  succès débloqués en fin de session playtest)*
- **Présence communautaire organique** dans les 30 jours post-lancement — *cible : ≥ 2 mentions spontanées sur
  r/Stargate ou un Discord Stargate actif (captures d'écran, threads, partages)*

### Protocole de Mesure — Playtest

> *Dispositif prévu pour les métriques gameplay (DG-005, 006, 007) :*
> - **Sessions :** 10 sessions minimum, recrutement via Discord Stargate et réseaux fans, joueurs novices (n'ayant pas
    testé le jeu)
> - **Tracking :** Fiche de session : timestamp début/fin · succès débloqués · mort équipe 1ère mission (oui/non) ·
    commentaire libre
> - **Seuil de validation :** Résultats conformes sur ≥ 7/10 sessions pour chaque métrique gameplay

---

## Hors Scope (v1)

- Support contrôleur / gamepad
- Multijoueur de toute forme
- Galaxie Pégase / Atlantis *(v2)*
- Arc Ori *(v2)*
- Mobile *(v2)*
- Sauvegarde cloud
- Éditeur de mission / mod support
- Doublage audio
- Cinématiques animées

---

## Hypothèses et Dépendances

**Hypothèses :**

- L'univers Stargate est utilisé dans un cadre non-commercial (fan game gratuit) — pas de licence requise pour itch.io
- Godot 4 est stable et suffisant pour les besoins du projet
- Les assets visuels sont générés via IA (Stable Diffusion / Midjourney) ou dessinés — pas d'achat d'assets
- Le développement est solo — pas de dépendance équipe externe

**Dépendances :**

- Compétences GDScript à acquérir progressivement (Dylan est développeur Java/Angular)
- Pipeline BMAD + GitHub Copilot comme co-développeur IA
- Communauté Stargate comme premier public test (forums, Discord)


