---
stepsCompleted: [ 1, 2, 3, 4, 5, 6 ]
inputDocuments: [ ]
documentCounts:
  brainstorming: 0
  research: 0
  notes: 0
workflowType: 'game-brief'
lastStep: 6
project_name: 'stargate-command'
user_name: 'Dylan'
date: '2026-04-17'
game_name: 'Stargate Chronicles'
---

# Game Brief: Stargate Chronicles

**Date:** 2026-04-17
**Author:** Dylan
**Status:** ✅ Validé — Prêt pour création du GDD

---

## Executive Summary

Stargate Chronicles est un jeu de gestion-RPG solo développé sous Godot 4 dans lequel le joueur incarne le commandant du
Programme de la Porte des Étoiles. Partant du film originel de 1994 — la Porte encore muette, les glyphes indéchiffrés —
il recrute ses propres héros, construit et fait évoluer le SGC bâtiment par bâtiment, et envoie ses équipes SG à travers
la Porte pour explorer un univers hybride : planètes canoniques aux événements narratifs fixes et planètes procédurales
aux opportunités aléatoires. Toute la progression — nouvelles technologies, nouvelles races, nouvelles galaxies — se
débloque par l'exploration et les compétences, jamais par le temps. Deux tensions permanentes structurent chaque
partie : la survie des équipes sur le terrain (permadeath) et la survie institutionnelle du SGC (budget, ressources,
menaces). Projet passion à budget zéro, développé en solo avec l'IA comme co-pilote, ciblant une distribution gratuite
sur itch.io pour une communauté de fans Stargate internationale.

---

## Game Vision

### Core Concept

Un jeu de Gestion-RPG où le joueur prend les commandes du Programme de la Porte des Étoiles, crée ses propres héros, et
écrit sa version de la saga à travers une progression organique débloquée par l'exploration — sans contrainte de temps,
mais avec des exigences de compétence et de ressources.

### Elevator Pitch

Stargate Chronicles est un jeu de gestion-RPG où tu prends la tête du Programme de la Porte des Étoiles. Tu crées et
fais évoluer tes équipes SG (compétences, apparence, équipement, spécialisation), alloues les ressources du SGC entre
recherche, formation, diplomatie et fabrication de matériel, puis envoies tes troupes à travers la Porte pour explorer
un univers hybride : des planètes canoniques aux événements narratifs fixes, et des planètes procédurales aux
opportunités aléatoires. La progression suit l'arc narratif de la saga — du film originel jusqu'aux confins de Pégase —
mais se débloque organiquement via les explorations et les découvertes, jamais par le temps. Deux tensions permanentes
structurent l'expérience : la survie de tes équipes sur le terrain, et la survie du SGC lui-même face aux budgets et aux
menaces.

### Vision Statement

Offrir à chaque joueur — fan de Stargate ou néophyte — la possibilité de vivre SA version du programme, avec ses propres
héros façonnés de toutes pièces, ses propres décisions stratégiques et tactiques, dans un univers qui évolue au rythme
de ses explorations. Chaque partie est unique parce que chaque commandant est unique.

---

## Target Market

### Primary Audience

Fans de la franchise Stargate âgés de 12 à 60 ans, joueurs "core" habitués aux jeux de gestion et/ou RPG. Ils jouent en
sessions moyennes à longues (15 minutes à plusieurs heures), principalement en soirée ou le week-end. Leurs motivations
principales sont l'immersion narrative et l'attachement à l'univers Stargate. Ils cherchent une expérience qui leur
permette de s'approprier la saga plutôt que de simplement la revivre.

**Démographie :** 12–60 ans, tous genres, fans de la franchise Stargate (SG-1, Atlantis, Universe)

**Préférences de jeu :** Jeux de gestion (XCOM, Rimworld, FTL), RPG narratifs (Mass Effect, Baldur's Gate), jeux à
progression organique

**Motivations :** Narration immersive, univers Stargate, construction et évolution d'équipe, sentiment d'appropriation
de la saga

### Secondary Audience

Joueurs de RPG narratifs et de jeux de gestion tactique (XCOM, Rimworld, FTL) non familiers de Stargate, attirés par la
profondeur des systèmes de construction d'équipe, la tension survie/ressources et la richesse de la narration
procédurale.

### Market Context

Aucun jeu de gestion-RPG officiel n'existe dans l'univers Stargate malgré une communauté de fans fidèle et toujours
active. Le projet naît d'une motivation personnelle de son créateur et d'une volonté d'expérimenter le développement
assisté par IA (SDD + génération IA) pour pallier un manque de compétences techniques. La découverte reposera sur le
bouche-à-oreille et les communautés de fans existantes (forums, Reddit, Discord Stargate).

**Jeux similaires ayant prouvé leur audience :** XCOM 2, Rimworld, FTL: Faster Than Light, Battlestar Galactica Deadlock

**Opportunité de marché :** Un vide inexplicable dans l'offre de jeux vidéo Stargate pour une franchise de 30 ans avec
une base de fans internationale passionnée ; le développement IA-assisté rend le projet réalisable pour un développeur
solo.

---

## Game Fundamentals

### Core Gameplay Pillars

**1. Progression organique & Émerveillement de la découverte** *(priorité absolue)*
Rien ne se débloque par le temps — tout s'obtient par la curiosité et l'exploration. La complexité de gestion croît
organiquement avec la progression du SGC. Chaque nouvelle Porte ouverte réserve une surprise : technologie, race,
menace, opportunité.

**2. Fidélité à l'univers**
L'univers Stargate est reconnaissable et respecté — canonique là où c'est important, procédural là où ça enrichit. Les
moments clés de la saga sont des événements narratifs mémorables distincts.

**3. Appropriation narrative**
Le joueur écrit SA saga — ses héros recrutés et façonnés, ses choix d'exploration, ses conséquences. Jamais un chemin
unique imposé.

**4. Tension duale & Conséquences permanentes**
Deux niveaux de survie permanente : l'équipe SG sur le terrain et le SGC comme institution. Les membres morts le
restent. Les succès renforcent le programme, les échecs l'affaiblissent durablement.

**Priorité en cas de conflit :** Progression organique > Fidélité à l'univers > Appropriation narrative > Tension duale

### Primary Mechanics

**Côté SGC — Gestion (profondeur croissante) :**

### Archetypes des membres d'équipe

Quatre archétypes de base, directement calqués sur SG-1, avec une distinction stratégie/exécution claire :

| Archétype | Rôle SGC (hors terrain) | Rôle terrain | Référence canon |
|---|---|---|---|
| **Commandant** | Leadership, moral de toutes les équipes, déblocage de financements exceptionnels, gestion de crises institutionnelles | Commandement, négociation d'autorité, coordination multi-équipes | Jack O'Neill |
| **Archéologue** | Accélère les recherches archéologiques, déchiffre les artefacts récupérés | Déchiffrement, analyse alien, diplomatie culturelle, options de compréhension | Daniel Jackson |
| **Scientifique** | Réduit les coûts de fabrication, améliore les infrastructures, entretien tech | Réparation d'équipement alien, piratage technologique, analyse d'artefacts techno | Samantha Carter |
| **Combattant** | Forme les recrues plus vite (mentor), réduit les pertes à l'entraînement | Combat avancé, survie en milieu hostile, recon furtif, couverture de retraite | Teal'c |

**Distinction clé Commandant / Combattant :**
- Le **Commandant** parle, décide, motive — peu de combat direct, maximum d'influence stratégique.
- Le **Combattant** agit, frappe, protège — peu de parole, maximum d'efficacité physique sur le terrain.

 (nom, apparence, compétences, caractéristiques, traits — référence
  Stargate Coalition). Pool de recrutement par race : 10 humains disponibles par défaut + 2/mois, plafonné par le
  développement des vestiaires. Autres races débloquables via explorations et relations diplomatiques, avec un plafond
  dépendant de la compréhension de la race et des relations entretenues.
- **Créer, modifier, dissoudre** des équipes SG et les affecter à des missions
- **Construire & faire évoluer** les infrastructures clés avec des choix de priorité actifs : Infirmerie, Centre de
  recherche scientifique, Centre d'analyse archéologique, Armurerie, Salle de briefing/debriefing, Centre de formation,
  Salle d'embarquement, et autres lieux phares de la série
- **Lancer des recherches** scientifiques et culturelles/archéologiques
- **Fabriquer du matériel** canonique de la saga (MALP, armes, équipements)
- **Équiper les équipes** via les technologies maîtrisées et le matériel fabriqué
- **Gérer le budget et les ressources :**
    - *Dollars* : couvrent les frais mensuels (coût de gestion des structures) et les coûts uniques (formation,
      fabrication, recherches). Budget augmente via succès (nouvelles technologies, races découvertes, relations
      améliorées) et diminue via échecs (membres tués, opportunités perdues, menaces non traitées). Fonds spéciaux
      débloquables en cas de menace sur la Terre.
    - *Ressources rares* (naquadah, trinium) : nécessaires pour les coûts uniques — obtenues via explorations,
      infrastructures et relations avec les autres peuples (revenu mensuel plafonné par race)

**Côté terrain — Exploration :**

- **Explorer** des planètes canoniques (événements narratifs fixes) et procédurales (opportunités aléatoires) via la
  Porte
- **Décider** lors d'explorations narratives interactives (texte à choix illustré — certains choix nécessitent des
  prérequis de compétence et sont grisés si non atteints)
- **Découvrir** nouvelles technologies, races, alliances, menaces et coordonnées de Porte
- **Négocier & diplomatie** avec les races extraterrestres rencontrées
- **Combattre** avec une dimension tactique

**Boucle de jeu principale :** Gérer le SGC → Équiper & former les équipes → Explorer → Découvrir → Débloquer nouvelles
possibilités → Gérer le SGC enrichi

**MVP :** 1 équipe SG + Salle d'embarquement permettant les explorations narratives. La profondeur de gestion s'ajoute
progressivement à mesure que le SGC se développe.

### Player Experience Goals

- **Curiosité & Émerveillement** — *"Qu'est-ce qu'il y a derrière cette nouvelle Porte ?"* — chaque exploration nourrit
  l'envie d'aller plus loin
- **Attachement & Satisfaction de la progression** — investissement émotionnel dans les membres recrutés et façonnés ;
  leur mort a du poids, leur montée en compétence procure de la fierté
- **Tension & Soulagement** — chaque mission à risque crée de l'anxiété ; le retour de l'équipe (ou son absence) est un
  moment fort
- **Nostalgie & Reconnaissance** — retrouver des lieux, personnages et événements canoniques de la série procure un
  plaisir particulier aux fans
- **Fierté stratégique** — réussir grâce à une préparation minutieuse : le bon équipement, les bonnes compétences, la
  bonne équipe

**Parcours émotionnel d'une session :** Anticipation (planification) → Tension (exploration) → Soulagement ou Deuil (
retour) → Satisfaction (progression débloquée) → Curiosité (prochaine Porte)

---

## Scope and Constraints

### Target Platforms

**Primaire :** PC (Windows/Linux/Mac) via distribution gratuite (itch.io en priorité, Steam envisageable ultérieurement)
**Secondaire :** Mobile (iOS/Android) — v2, après validation du concept PC

### Development Timeline

Projet passion conduit sur temps libre. Pas de deadline imposée — progression pilotée par les jalons de contenu et la
disponibilité.

### Budget Considerations

**Budget : zéro à quasi-zéro.**

- **Moteur :** Godot 4 (gratuit, open-source, sans royalties)
- **Assets visuels :** Illustrations générées par IA (skill image-art-direction disponible)
- **Audio / Musique :** Générés par IA, sources libres de droits
- **Distribution :** itch.io (gratuit) pour le lancement ; Steam (100$ unique) envisageable en v2
- **Développement :** GitHub Copilot + Antigravity (déjà en place)
- **Outils :** VS Code / IntelliJ (gratuits), GitHub (gratuit)

### Team Resources

**Équipe :** Développeur solo (Dylan) + IA générative (GitHub Copilot + Antigravity) comme co-pilote technique et
créatif.

**Compétences couvertes :**

- Développement : Java/Angular (base solide) → adaptation GDScript guidée par IA
- Game design : ✅ (porté par Dylan + IA)
- Direction artistique : ✅ (illustrations IA)
- Narration : ✅ (Dylan + IA)
- Audio : ✅ (génération IA)

**Lacunes identifiées :**

- GDScript / Godot (à apprendre — compensé par IA)
- Systèmes de jeu complexes (game systems design) — compensé par l'accompagnement IA
- Marketing / communauté — bouche à oreille + communauté fans

**Approche :** L'IA prend en charge le maximum de l'implémentation technique. Dylan valide, oriente et itère.

### Technical Constraints

- **Moteur :** Godot 4 — architecture évolutive 2D → 3D (exploration narrative d'abord, exploration 3D possible en v2
  sans migration de projet)
- **Langage :** GDScript (Python-like, optimal pour Godot, très bien supporté par IA générative)
- **Performance :** PC moderne standard — pas de contrainte hardware particulière pour la v1
- **Pas de multijoueur** — solo uniquement
- **Sauvegarde locale** — pas de serveur, pas de cloud requis en v1
- **Accessibilité :** Interface texte claire, taille de police ajustable — priorité à la lisibilité

### Scope Realities

- Le scope complet (toutes les sagas, toutes les infrastructures, combat tactique) est ambitieux pour un solo — le MVP
  volontairement réduit (1 équipe SG + salle d'embarquement + explorations narratives) permet de valider la boucle de
  jeu centrale avant d'étendre.
- L'approche "progression organique" du design s'applique aussi au développement : chaque feature débloquée dans le jeu
  correspond à une feature développée dans le code.
- La dépendance à l'IA générative est un atout et un risque : accélérateur majeur, mais nécessite une supervision
  humaine constante pour la cohérence.

---

## Reference Framework

### Inspiration Games

**XCOM 2**

- *Prenant :* Gestion de base (recherche, fabrication, infrastructures), permadeath des soldats, tension permanente sur
  les ressources, progression technologique par recherche
- *Pas prenant :* Combat tactique au tour par tour sur grille, structure roguelike, ambiance post-apocalyptique

**FTL: Faster Than Light**

- *Prenant :* Explorations sous forme d'événements narratifs à choix, prérequis de compétence sur certains choix (grisés
  si non atteints), gestion multi-ressources, permadeath de l'équipage
- *Pas prenant :* Structure roguelike (recommencer à zéro), pas de progression persistante de base

**Rimworld**

- *Prenant :* Traits de personnalité uniques par personnage, gestion d'infrastructures par bâtiment, narration émergente
  issue des décisions du joueur, attachement aux colons
- *Pas prenant :* Absence de narration canonique préécrite, trop sandbox (pas d'arc narratif dirigé)

**80 Days**

- *Prenant :* Format texte à choix illustré, prérequis de ressources visibles sur les options, narration riche et
  contextuelle
- *Pas prenant :* Absence de gestion de base et de progression RPG des personnages

**Fire Emblem**

- *Prenant :* Personnages uniques profondément personnalisables, conversations et interactions entre personnages entre
  les missions
- *Pas prenant :* Combat tactique au tour par tour sur grille, univers fantasy

**Mass Effect**

- *Prenant :* Hub de gestion entre missions, personnages à histoires uniques, narration à choix conséquents, univers SF
  épique
- *Pas prenant :* Action à la 3ème personne en temps réel *(envisagé comme alternative future à l'exploration narrative
  textuelle)*

### Competitive Analysis

**Concurrents directs :**

- *Stargate SG-1: The Alliance* (annulé 2006) et *Stargate Worlds* (annulé 2010) — les deux seules tentatives de jeu
  Stargate AA/AAA, toutes deux abandonnées. **Aucun concurrent actif direct dans l'espace gestion-RPG Stargate.**

**Concurrents indirects :**

- XCOM 2 : gestion de base + missions tactiques — fort sur le tactical, faible sur la narration
- FTL: Faster Than Light : exploration narrative + gestion équipage — fort sur la tension, absence de base persistante
- Battlestar Galactica Deadlock : stratégie dans l'univers d'une série TV SF culte — fort sur la licence, faible sur la
  personnalisation

**Forces des concurrents :** Systèmes tactiques profonds, polish technique élevé, licences établies

**Faiblesses des concurrents :** Aucun ne combine gestion de base + narration à choix riche + personnalisation profonde
des équipes dans l'univers Stargate

### Key Differentiators

**1. Le seul jeu de gestion-RPG dans l'univers Stargate**
Un vide de marché de 30 ans pour une franchise avec une base de fans internationale passionnée. Aucun concurrent actif.

**2. Personnages façonnés par le joueur dont l'histoire s'écrit à travers les explorations**
Chaque membre SG est créé, nommé, équipé et fait évoluer par le joueur. Les explorations les transforment — gains de
traits, montées de niveau, cicatrices narratives. Leur mort définitive a du poids parce qu'ils appartiennent au joueur.

**3. Progression narrative organique — jamais le temps, toujours la découverte**
Aucun timer, aucune saison imposée. La saga se débloque par l'exploration et les compétences. La complexité du SGC
grandit au rythme du joueur.

**4. Univers hybride canonique + procédural**
Planètes fixes de la saga avec événements narratifs précrits + planètes procédurales à opportunités aléatoires.
Rejouabilité infinie dans un cadre familier et respectueux de la licence.

**Proposition de valeur unique :** *"Stargate Chronicles est le seul jeu qui te permet de vivre ta propre version du
Programme SG, avec tes héros façonnés de toutes pièces, dans un univers qui te récompense pour ta curiosité plutôt que
pour ton temps."*

---

## Starting Period & Onboarding Flow

### Période de départ : Le Film (1994)

**Contexte lore :** La Porte des Étoiles a été découverte en 1928 à Gizeh (Égypte) lors de fouilles archéologiques.
Conservée et étudiée pendant des décennies par une installation militaire secrète de l'US Air Force, sous la direction
du Colonel Frank Maybourne et du Général W.O. West (USAF), la Porte n'a jamais fonctionné faute de déchiffrement des
symboles.

**Atmosphère dominante :** Aventure et Découverte — mystère énigmatique de l'objet, émerveillement de la première
activation, tension de la première mission hors-monde.

**Note de conception :** Les mécaniques spécifiques aux bases d'Atlantis et d'Universe seront introduites uniquement
lorsque les infrastructures correspondantes seront débloquées par la progression. Le lore de base peut être passé par le
joueur à tout moment.

---

### Flux d'onboarding guidé (Tutoriel narratif)

Le tutoriel est intégralement narratif, porté par le **Major Paul Davis**, officier de liaison entre le SGC et le
Pentagone. Figure canonique récurrente de SG-1 dès la saison 1, Davis incarne la voix institutionnelle du programme :
il apporte les budgets, signale les risques, valide les décisions opérationnelles. Ton : professionnel, sobre, légèrement
bureaucratique — il contraint autant qu'il conseille. Chaque étape se débloque séquentiellement et peut être jouée en
une ou plusieurs sessions.

---

#### Étape 0 — Bienvenue, Général

**Déclencheur :** Premier lancement du jeu.

**Déroulement :**

- Le Major Davis accueille le joueur : *"Bienvenue, Général. Le Pentagone vous a confié le Programme de la Porte des
  Étoiles."*
- **Saisie du nom du commandant** — sera sauvegardé et utilisé dans toute la narration.
- **Personnalisation de l'avatar** du commandant (apparence).
- Brève présentation illustrée du contexte historique : la découverte de la Porte en 1928, les décennies de recherche
  infructueuse, l'état actuel du programme.

---

#### Étape 1 — Déchiffrer les glyphes

**Situation :** La Porte est là. Les symboles restent muets.

**Guidance du Major Davis :**
> *"Il nous faut comprendre comment la Porte fonctionne. Je vous recommande de recruter un spécialiste en langues
> anciennes et en archéologie."*

**Actions guidées :**

1. **Recruter un spécialiste** — première création de personnage assistée, orientée vers un profil de
   linguiste-archéologue (équivalent Dr Daniel Jackson).
    - Si le joueur nomme le personnage **"Daniel Jackson"** : débloque un **bonus canon** (à définir en phase GDD —
      suggestion : bonus de compétence en déchiffrement, trait unique "Génie linguistique", dialogue narratif spécial).
    - Le système de création guide le joueur sur la distribution des points de compétence pour un profil archeologue.

2. **Construire le Centre d'analyse archéologique** — première infrastructure débloquée, introduction au système de
   construction.

3. **Lancer la recherche "Déchiffrer les glyphes de la Porte"** — sélection dans l'inventaire de recherches du Centre 
d'analyse archéologique ; introduction au système de recherche et de coût en ressources/temps.

**Résultat :** À la fin de la recherche, un compte-rendu illustré et narré révèle que les symboles sont des 
**coordonnées stellaires**. Le spécialiste a réussi à les déchiffrer.

**Récompenses débloquées :**

- 📍 **Coordonnées `CARTOUCHE-GIZEH`** dans la Salle d'embarquement
  *(le vrai nom "Abydos" sera révélé par l'équipe SG après la première exploration)*
- ⚙️ **Fonctionnalité de composition de la Porte** (activation de la Porte pour la première fois)

---

#### Étape 2 — Première activation : envoyer une sonde

**Situation :** La Porte peut désormais être composée. Une sonde MALP est disponible en réserve.

**Guidance du Major Davis :**
> *"Nous avons une sonde en réserve. Je vous recommande de l'envoyer avant tout déploiement humain pour évaluer
> l'environnement à destination."*

**Actions guidées :**

- Accès à la **Salle d'embarquement** → composer les coordonnées `CARTOUCHE-GIZEH` → **"Envoyer la sonde MALP"**.
- Séquence narrative illustrée : activation de la Porte pour la première fois (illustration emblématique du vortex),
  transmission des données de la sonde depuis une planète désertique inconnue.
- Introduction au concept de sonde comme outil de reconnaissance préalable à toute exploration.

---

#### Étape 3 — Constituer la première équipe SG

**Situation :** La destination est confirmée. Il faut préparer une équipe.

**Guidance du Major Davis — deux étapes de construction :**

**3a. Construire les Vestiaires et Dortoirs**
> *"Pour accueillir et préparer une équipe SG, nous devons disposer d'infrastructures adaptées."*

- Débloque **1 slot d'équipe SG**.
- Introduction au concept de capacité d'hébergement et au pool de recrutement.

**3b. Construire la Salle de Briefing**
> *"La Salle de Briefing est le cœur opérationnel du programme — c'est là que les équipes sont formées, briefées et
envoyées en mission."*

- Débloque la **création et gestion des équipes SG**.

**Composition de l'équipe :**

- **Minimum 4 membres, maximum 6 membres.**
- Les personnages déjà créés et non affectés sont disponibles à l'ajout.
- Il est possible de créer les membres manquants directement depuis cet écran.
- **Bonus canon** : tout personnage nommé avec un nom canonique de la saga reçoit un bonus spécifique à définir (ex : "
  Jack O'Neill", "Samantha Carter", "Teal'c").
- **Recommandation d'équipe équilibrée** affichée par Davis :
    - 1 **Commandant** (leadership, moral, commandement, négociation d'autorité)
    - 1 **Archéologue** (déchiffrement, langues, diplomatie culturelle, recherche archéo)
    - 1 **Scientifique** (technologie, fabrication, analyse alien, recherche techno)
    - 1 **Combattant** (combat, survie, recon, protection de l'équipe)
    - *(slots 5–6 optionnels : médecin, diplomate, spécialiste alien...)*
- L'assistant signale les profils déséquilibrés sans bloquer le joueur.

---

#### Étape 4 — À travers la Porte !

**Situation :** L'équipe est formée, équipée avec le matériel de base, prête pour la première exploration.

**Guidance du Major Davis :**
> *"Votre équipe est prête, Général. La Porte vous attend. C'est un grand pas pour l'humanité."*

**Actions guidées :**

- Accès à la **Salle d'embarquement** → sélection de l'équipe SG → **"Envoyer en exploration"** vers
  `CARTOUCHE-GIZEH`.
- Début de la **première séquence d'exploration narrative** (texte à choix illustré) — introduction au format complet
  de jeu. Le vrai nom de la planète — **Abydos** — est révélé lors de l'exploration (dialogue avec les habitants).
- Fin du tutoriel guidé. Le joueur est désormais autonome.

---

### Système de Bonus Canons

Les bonus accordés aux noms canoniques sont intentionnellement symboliques et narratifs pour ne pas créer de
déséquilibre, mais offrir un clin d'œil fort aux fans.

| Personnage canon   | Archétype    | Bonus validés                                                                                 |
|--------------------|--------------|-----------------------------------------------------------------------------------------------|
| Daniel Jackson     | Archéologue  | Trait "Génie linguistique" (+compétence déchiffrement) · dialogue narratif exclusif sur Abydos |
| Jack O'Neill       | Commandant   | Trait "Bonne étoile" (+20% chance qu'un choix risqué tourne bien, option "coup de chance" exclusive) · Trait "Charme désarmant" (options de dialogue exclusives avec les races aliens, +15% diplomatie) · répliques canoniques |
| Samantha Carter    | Scientifique | Trait "Génie astrophysique" (+compétence technologie) · +25% vitesse recherche techno · déblocage anticipé des technologies alien |
| Teal'c             | Combattant   | Trait "Guerrier Primta" (+20% force au combat) · connaissance innée des Goa'ulds (révèle les menaces plus tôt) · résistance physique augmentée |
| Janet Fraiser      | *(médecin)*  | Trait "Chirurgienne de combat" (soins améliorés en mission) · +50% efficacité Infirmerie · réduit la mortalité des blessés |
| *Autres à définir* | —            | *À compléter lors de la phase GDD*                                                            |

---

### Système de Galaxies & Ressources E2PZ

**MVP (Voie Lactée uniquement) :** Au lancement, seule la Voie Lactée est accessible.

**Vision long terme (toutes galaxies disponibles dès le début, accessibilité conditionnelle) :**

- **8e coordonnée** (Voie Lactée → autre destination stellaire) : coût = 1 cristal E2PZ
- **9e coordonnée** (voyage intergalactique — Pégase, Univers) : coût = 5 cristaux E2PZ

**Obtention des E2PZ :**

- Via l'exploration (découverte aléatoire ou événement narratif fixe)
- Via la complétion d'un arc de recherche technologique avancé (fin d'arc)

**Note de conception :** Les E2PZ sont intentionnellement rares en début de partie pour que l'accès à Pégase et au-delà
reste un événement exceptionnel et émotionnellement fort.

---

## Content Framework

### World and Setting

**Univers de référence :** La franchise Stargate — film (1994), SG-1 (saisons 1–10), Atlantis, Universe — constitue le
canon de base. L'univers est traité avec respect et fidélité lore sur les éléments canoniques, avec liberté créative sur
les éléments procéduraux.

**Structure géographique :**

- **Voie Lactée** *(accessible dès le début — MVP)* : planètes canoniques du film et de SG-1, planètes procédurales
  générées. Civilisations Goa'ulds, Asgards, Tollaniens, Nox, Abydosiens, Jaffa...
- **Pégase** *(débloquable — 5 E2PZ)* : planètes d'Atlantis, menace Wraith, civilisations Pegasiennes. Débloquée via
  progression avancée.
- **Voie du Destin / Espace intergalactique** *(débloquable — 5 E2PZ + arc narratif spécifique)* : inspiré de SGU.

**Le SGC :** Hub central du jeu — installation militaire souterraine sous Cheyenne Mountain. Se développe bâtiment par
bâtiment au fil de la progression du joueur. Chaque infrastructure ouvre de nouvelles mécaniques.

**Atmosphères planétaires :** Chaque planète a une identité visuelle, climatique et culturelle propre — désert, jungle,
monde glacé, cité antique, station spatiale abandonnée... Illustrées par des visuels IA conformes à la direction
artistique du projet.

**Système de dénomination des planètes :**
Avant toute exploration, chaque planète est identifiée uniquement par sa désignation de catalogue SGC :
format `PXX-XXX` (ex : `P8X-873`). Le vrai nom de la planète est une **information à découvrir** :
- **Révélé immédiatement** si un peuple allié ou une autre source fournit l'information lors du premier contact.
- **Révélé après exploration** si aucune source externe n'est disponible.

*Exception canonique — Abydos :* avant la première mission, la planète n'a pas encore de désignation `P`
officielle. Elle est référencée dans les archives du programme sous le nom **`CARTOUCHE-GIZEH`**, en référence
à la cartouche hiéroglyphique découverte lors des fouilles de 1928. C'est sous ce nom qu'elle apparaît dans
la Salle d'embarquement jusqu'à ce que Daniel Jackson en rapporte le vrai nom après la mission.

**La Porte des Étoiles :** Élément visuel central et iconique — toujours représentée avec soin, lumière du vortex bleu
utilisée comme signature visuelle du jeu.

### Narrative Approach

**Format principal :** Narration textuelle interactive illustrée (style "livre dont vous êtes le héros" / visual novel
tactique).

- Chaque exploration est une séquence de scènes narratives avec choix.
- Certains choix nécessitent des prérequis de compétence (affichés, grisés si non atteints) ou de ressources.
- Les choix influencent le déroulement immédiat ET la relation avec les races/planètes rencontrées.

**Progression narrative organique :**

- Point de départ fixe : le Film (1994) — la Porte encore muette.
- Débloquage de la saga par l'exploration : chaque planète canonique introduit un arc narratif de la série (Goa'ulds →
  Asgards → Replicants → Ori...).
- Aucun timer, aucune saison imposée.

**Planètes canoniques :** Événements narratifs fixes, inspirés fidèlement des épisodes clés, jouables dans un ordre
variable selon les coordonnées découvertes.

**Planètes procédurales :** Événements générés aléatoirement à partir d'une banque de situations, de races mineures et
d'opportunités. Rejouabilité infinie.

**Impact des personnages sur la narration :**

- Les compétences et traits des membres de l'équipe ouvrent ou ferment des options narratives.
- Les personnages évoluent après chaque exploration : gain de traits, montée de niveau, cicatrices narratives.
- La mort permanente d'un membre a un impact narratif (compte-rendu de mission, deuil possible, mémorial).

**Diplomatie active :** Les races rencontrées ont un niveau de relation (neutre, alliée, hostile). Les choix narratifs
lors des explorations influencent cette relation. Les alliances ouvrent de nouvelles ressources, technologies et
coordonnées.

**Lore intégré :** Un système de journal (base de données in-game) référence toutes les races, technologies et planètes
découvertes. Le lore peut être consulté ou passé librement.

### Content Volume

**MVP (Phase 1) :**

- 1 planète canonique complète : `CARTOUCHE-GIZEH` / Abydos (arc narratif du Film — le nom est découvert en jeu)
- 3–5 planètes procédurales générées
- 4 infrastructures SGC opérationnelles : Centre d'analyse archéologique, Salle d'embarquement, Vestiaires & Dortoirs,
  Salle de Briefing
- 1 arc de recherche : Déchiffrement des glyphes
- Flux d'onboarding complet (Étapes 0–4)
- **Recruter & personnaliser** des membres d'équipe
**Phase 2 (post-MVP) :**

- 5–10 planètes canoniques supplémentaires (arcs SG-1 saison 1)
- Introduction des Goa'ulds comme menace principale
- Nouvelles infrastructures : Infirmerie, Centre de recherche scientifique, Armurerie, Centre de formation
- Système de fabrication de matériel (MALP, armes)
- Système de budget et ressources complet (naquadah, trinium)

**Phase 3+ (long terme) :**

- Arcs narratifs complets SG-1 → Atlantis → Universe
- Accès Pégase (E2PZ)
- Combat tactique avancé
- Exploration 3D optionnelle (Godot 4 — v2)

---

## Art and Audio Direction

### Visual Style

**Style général :** Concept art de graphic novel — illustrations semi-réalistes, contrastes dramatiques, ambiance SF
militaire avec touches d'émerveillement. Référence directe : direction artistique développée dans le skill
`image-art-direction` du projet.

**Interface utilisateur :**

- UI sombre et militaire (inspirée XCOM / Mass Effect) avec des accents dorés/ambrés évoquant les glyphes de la Porte.
- Icônes claires, typographie lisible, taille de police ajustable.
- Illustrations pleine page pour les moments narratifs clés (première activation de la Porte, découverte d'une race,
  mort d'un membre).

**Portraits de personnages :** Illustrations IA générées en cohérence stylistique avec la direction artistique. Chaque
membre d'équipe a un portrait unique.

**Planètes et environnements :** Chaque planète dispose d'une illustration d'ambiance et de visuels pour les scènes
d'exploration. Style constant, palette adaptée à l'environnement (désert ocre, jungle émeraude, monde glacé bleuté...).

**La Porte des Étoiles :** Élément visuel central et iconique — toujours représentée avec soin, lumière du vortex bleu
utilisée comme signature visuelle du jeu.

### Audio Style

**Musique :** Générée par IA — orchestrale épique à dominante militaire et aventurière, avec des thèmes reconnaissables
pour chaque galaxie/arc narratif. Inspirée de la bande originale de Joel Goldsmith (SG-1/Atlantis). Boucles adaptatives
selon le contexte (gestion calme / exploration tendue / combat).

**Effets sonores :** Générés par IA et/ou sources libres de droits — sons d'activation de la Porte (le kawoosh
iconique), ambiances planétaires, sons d'interface, combat. La fidélité sonore à l'univers Stargate est une priorité.

**Voix :** Pas de doublage en v1 — narration textuelle uniquement. Système de voix synthétique IA possible en v2 pour
l'assistant du SGC.

### Production Approach

- **Workflow IA :** Illustrations générées via le skill `image-art-direction` (prompts optimisés pour la cohérence
  stylistique). Chaque asset est validé avant intégration.
- **Pipeline audio IA :** Outils de génération musicale IA (Suno, Udio ou équivalent gratuit) + banques de sons libres
  de droits.
- **Intégration Godot 4 :** Assets importés directement dans le projet. Pas de dépendance à des outils payants.
- **Cohérence visuelle :** Une fiche de direction artistique de référence (style, palette, typographie) maintenue et
  mise à jour pour guider toutes les générations IA.

---

## Risk Assessment

### Key Risks

1. **Scope creep** — L'univers Stargate est immense. Le risque de vouloir tout intégrer dès le début est réel et
   pourrait bloquer le projet indéfiniment.
2. **Motivation solo** — Projet passion sans deadline ni équipe : risque d'essoufflement sur la durée.
3. **Complexité des systèmes imbriqués** — Gestion + RPG + narration interactive = trois systèmes qui doivent
   s'articuler sans friction ; la complexité d'intégration est sous-estimable.
4. **Cohérence narrative** — Maintenir la cohérence lore sur des centaines d'événements canoniques + procéduraux est un
   défi de game design.
5. **Qualité des assets IA** — La génération IA peut produire des incohérences stylistiques ; sans pipeline rigoureux,
   la direction artistique peut dériver.

### Technical Challenges

- **Système de progression organique en Godot 4** — Architecting un système de débloquage par conditions (compétences,
  ressources, explorations) qui reste maintenable et extensible.
- **Génération procédurale équilibrée** — Les planètes et événements procéduraux doivent être variés, cohérents avec le
  lore et difficultés calibrées.
- **Sauvegarde & état du monde** — Persister l'état complet du SGC, des équipes, des relations diplomatiques, des
  planètes explorées et des recherches en cours sans corruption.
- **Architecture évolutive 2D → 3D** — Concevoir l'architecture dès le départ pour permettre l'ajout d'exploration 3D
  sans refactoring majeur.
- **Performance des scènes narratives illustrées** — Afficher des illustrations en haute qualité dans des séquences
  fluides sans impact sur les performances.

### Market Risks

- **Droits de propriété intellectuelle** — Stargate est une franchise commerciale active (MGM/Amazon). Un projet fan
  non-commercial gratuit rest dans une zone grise tolérée mais non garantie. Le jeu doit rester clairement
  non-commercial et sans monétisation.
- **Audience diffuse** — La communauté Stargate est passionnée mais dispersée sur plusieurs plateformes (Reddit, forums
  anciens, Discord). L'atteindre efficacement sans budget marketing est difficile.
- **Concurrence de l'indifférence** — Le principal risque n'est pas un concurrent direct, mais l'absence de visibilité
  dans un marché saturé de jeux indés.

### Mitigation Strategies

- **MVP strict** : Se limiter au flux onboarding + Abydos + boucle de jeu de base avant d'étendre. *"Fait et jouable
  vaut mieux que parfait et non livré."*
- **Architecture scalable dès le départ** : Investir en phase 1 dans une architecture Godot bien structurée (systèmes
  découplés, données JSON/ressources Godot) pour faciliter l'extension.
- **Pipeline IA rigoureux** : Fiche de direction artistique de référence + validation systématique des assets avant
  intégration.
- **Engager la communauté tôt** : Partager des devlogs et screenshots sur Reddit r/Stargate et Discord Stargate dès les
  premières versions jouables pour créer de l'engagement et du feedback.
- **Positionnement fan-project explicite** : Crédits clairs, aucune monétisation, approche transparente avec la
  communauté pour minimiser le risque IP.
- **Jalons de motivation** : Définir des jalons de contenu jouables régulièrement (MVP jouable, Abydos complet, première
  saison SG-1...) pour maintenir la dynamique.

---

## Success Criteria

### MVP Definition

**Le MVP est atteint quand :**

1. ✅ **Onboarding complet jouable** — Les 4 étapes du tutoriel narratif (Bienvenue → Déchiffrer les glyphes → Envoyer la
   sonde → Constituer l'équipe → Explorer) sont fonctionnelles et fluides.
2. ✅ **Création de personnage** — Le joueur peut créer, nommer, personnaliser et affecter un membre d'équipe avec
   compétences et traits.
3. ✅ **Infrastructures de base opérationnelles** — Centre d'analyse archéologique, Salle d'embarquement, Vestiaires &
   Dortoirs, Salle de Briefing sont construisibles et fonctionnels.
4. ✅ **Recherche fonctionnelle** — Lancer "Déchiffrer les glyphes", attendre la complétion, recevoir le rapport narratif
   et débloquer les coordonnées d'Abydos.
5. ✅ **Première exploration narrative** — Envoyer une équipe SG sur Abydos et jouer une séquence de narration à choix
   avec au moins 3 scènes et des prérequis de compétences.
6. ✅ **Sauvegarde & chargement** — L'état de la partie est persisté et restauré sans perte.

### Success Metrics

**Métriques qualitatives (fan-test) :**

- Un fan de Stargate reconnaît l'univers et se sent "chez lui" dès les premières minutes.
- Un novice comprend les mécaniques sans documentation externe.
- Le joueur ressent une tension réelle lors de la première exploration.

**Métriques quantitatives (post-lancement itch.io) :**

- 500 téléchargements dans les 3 premiers mois
- 50 commentaires/reviews sur itch.io
- Présence organique mentionnée sur r/Stargate ou un Discord Stargate
- Taux de complétion de l'onboarding > 70% des joueurs ayant démarré une partie

### Launch Goals

- **v0.1 (MVP interne)** : Onboarding complet + exploration Abydos — Dylan seul, tests personnels.
- **v0.2 (Alpha fans)** : Partage discret sur r/Stargate / Discord pour feedback communauté.
- **v0.5 (Beta publique)** : Publication sur itch.io — au moins 2 planètes canoniques + système de ressources de base.
- **v1.0 (Release)** : Arc narratif complet du Film + début de SG-1 saison 1, toutes infrastructures de base, système de
  ressources complet.

---

## Next Steps

### Immediate Actions

1. ✅ **Valider le Game Brief** *(terminé)* — Toutes les sections validées, questions ouvertes résolues.
2. **Lancer la création du GDD** — Utiliser le skill `gds-create-gdd` pour produire le Game Design Document détaillé à
   partir de ce Brief.
3. **Initier la direction artistique** — Produire les premières illustrations de référence via le skill
   `image-art-direction` (Porte des Étoiles, SGC, portrait type de membre d'équipe).

### Research Needs

- **Stargate Coalition** — Référence citée pour le système de compétences/caractéristiques/traits des personnages :
  localiser et analyser les mécaniques de ce système pour l'adapter au projet.
- **Bonnes pratiques Godot 4 pour jeux de gestion** — Architecture de référence pour les systèmes de ressources,
  recherches et infrastructures en GDScript.
- **Outils de génération musicale IA gratuits** — Comparer Suno, Udio et alternatives pour le pipeline audio.
- **Cadre légal fan-games Stargate** — S'assurer que le positionnement non-commercial est suffisant pour éviter les
  risques IP.

### Open Questions

*Questions résolues :*
- ✅ **Assistant du SGC** → Major Paul Davis (officier de liaison Pentagone/SGC, canonique SG-1)
- ✅ **Bonus canons** → Validés pour Daniel Jackson, Jack O'Neill, Samantha Carter, Teal'c, Janet Fraiser
- ✅ **Archetypes d'équipe** → Commandant / Archéologue / Scientifique / Combattant

*Questions ouvertes restantes (à traiter en phase GDD) :*

- **Système de traits — référence "Stargate Coalition"** : identifier ce système (jeu de plateau ? fan-RPG ?)
  pour adapter ses mécaniques de compétences/traits au projet.
- **Échec de recherche** : une recherche peut-elle échouer, ou le temps est-il simplement garanti ? Quelle
  tension introduire dans ce système ?
- **Mort du chercheur en cours de recherche** : que se passe-t-il si le membre affecté à une recherche meurt
  en mission avant la fin de ses travaux ?

---

## Appendices

### A. Research Summary

*Aucune recherche formelle conduite à ce stade — le Brief repose sur la connaissance approfondie de la franchise
Stargate du créateur et sur les conventions du genre gestion-RPG. Des recherches ciblées seront conduites en phase GDD (
Stargate Coalition, architecture Godot 4, pipeline IA).*

### B. Stakeholder Input

**Créateur & Game Designer :** Dylan

- Vision complète définie lors de sessions de discovery guidées (onboarding, mécanique, univers, contraintes techniques
  et budgétaires).
- Priorités confirmées : progression organique > fidélité univers > appropriation narrative > tension duale.
- Choix technologiques validés : Godot 4 + GDScript + développement IA-assisté.
- Engagement sur l'architecture évolutive 2D → 3D pour ne pas bloquer une future exploration 3D.

### C. References

**Franchise source :**

- *Stargate* — Film (Roland Emmerich, 1994)
- *Stargate SG-1* — 10 saisons (MGM, 1997–2007)
- *Stargate Atlantis* — 5 saisons (MGM, 2004–2009)
- *Stargate Universe* — 2 saisons (MGM, 2009–2011)

**Jeux de référence :**

- XCOM 2 (Firaxis, 2016)
- FTL: Faster Than Light (Subset Games, 2012)
- Rimworld (Ludeon Studios, 2018)
- 80 Days (Inkle Studios, 2014)
- Fire Emblem: Three Houses (Intelligent Systems, 2019)
- Mass Effect 2 (BioWare, 2010)

**Outils du projet :**

- Godot 4 — https://godotengine.org
- itch.io — https://itch.io
- Skill `image-art-direction` — C:\workspace\github\stargate-command\.github\skills\image-art-direction\SKILL.md
- Skill `stargate-specialist` — C:\workspace\github\stargate-command\.github\skills\stargate-specialist\SKILL.md

---

_This Game Brief serves as the foundational input for Game Design Document (GDD) creation._

_Next Steps: Use the `gds-create-gdd` skill to create detailed game design documentation._
