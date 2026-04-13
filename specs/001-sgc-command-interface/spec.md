# Feature Specification: SGC Command Interface

**Feature Branch**: `[001-sgc-command-interface]`  
**Created**: 2026-04-13  
**Status**: Draft  
**Input**: User description: "commencçons le mvp, je souhaite une interface correspondant à la salle de commande du SGC avec les codes graphiques de la serie me permettant de selectionner une coordonnées parmi un ensemble puis de voir les informations disponible dessus (au début rien), puis d'avoir un onglet d'action avec les otpions "Envoyer MALP" et "Envoyer équipe SG".  "Envoyer MALP" permet de récupérer des informations sur la biome de la planète et ce qu'il y a près de la porte. Elle permet d'avoir une image avec un rendu animé de la biome. Je veux que le rendu global de tout visuelle soit cohérent et resemble à celui d'un animé. On peut creuser ce sujet au besoin. "Envoyer équipe SG" permet d'accéder au comtpe rendu et MAJ les informations associé aux coordonées en affichant un historique permettant de voir les précédants envoie avec l'accès au CR"

## Clarifications
### Session 2026-04-13
- Q: Comment l'opérateur interagit-il pour sélectionner ou entrer les coordonnées ? → A: Option combinée : Liste interactive (avec filtres Tous/Explorés/Non-Explorés et origine des adresses) ET saisie manuelle (7 chevrons Voie Lactée) déclenchant des animations (ouverture porte, envoi MALP, envoi équipe).
- Q: Comment les données de jeu (historique, adresses) doivent-elles persister entre les sessions ? → A: Persistance locale automatique — sauvegarde automatique sans action utilisateur.
- Q: Que se passe-t-il si on envoie une équipe SG sans MALP ou sur une destination dangereuse ? → A: Confirmation requise avant envoi sans MALP. Si la destination est dangereuse ou non viable, l'équipe meurt — résultat répercuté dans le CR et l'historique.
- Q: Comment le niveau de danger d'une destination est-il déterminé ? → A: Les planètes canoniques ont un profil de danger défini selon les données Stargate. Les destinations non-canoniques ont un profil de danger déterminé une fois pour toutes à leur génération (pas aléatoire à chaque mission). La dangerosité pourra évoluer dans le temps avec une future mécanique de temporalité.
- Q: Comment le texte d'un CR de mission est-il généré et que contient-il ? → A: Templates narratifs contextuels. Contenu : (1) Résumé narré du résultat, (2) Illustration anime-style d'un moment fort, (3) Bilan structuré : infos découvertes, état de santé de l'équipe, technologies/ressources/connaissances rapportées.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sélection et saisie de coordonnées (Priority: P1)

En tant qu'opérateur du SGC, je veux pouvoir sélectionner une adresse dans une liste filtrable ou composer manuellement une adresse à 7 chevrons, afin de verrouiller une destination et décider des prochaines actions.

**Why this priority**: C'est la base de l'interface et le point d'entrée pour toute mission. Sans coordonnées sélectionnées ou composées avec succès, aucune action ne peut être entreprise.

**Independent Test**: Can be fully tested by selecting from the list and applying filters, or by entering a known 7-chevron sequence and observing the gate open and the address being added to the list.

**Acceptance Scenarios**:

1. **Given** l'interface ouverte sur la liste, **When** j'applique un filtre (ex: "Non explorées"), **Then** la liste ne montre que les adresses correspondantes avec leur origine (ex: Cartouche d'Abydos).
2. **Given** l'interface de composition manuelle, **When** je saisis une adresse valide à 7 chevrons, **Then** une animation d'ouverture de porte se joue, l'adresse est ajoutée à la liste et l'onglet d'actions est accessible.
3. **Given** l'interface de composition manuelle, **When** je saisis une adresse invalide, **Then** la porte ne s'ouvre pas (échec d'activation) et aucune action n'est accessible.

---

### User Story 2 - Envoi d'un MALP (Priority: P1)

En tant qu'opérateur du SGC, je veux pouvoir envoyer un MALP vers des coordonnées sélectionnées afin de récupérer des informations préliminaires (biome, environnement près de la porte) et voir une illustration statique du biome dans un style anime (film d'animation).

**Why this priority**: L'exploration par MALP est essentielle avant l'envoi d'une équipe pour des raisons de sécurité et pour peupler les informations de base de la planète.

**Independent Test**: Can be fully tested by clicking "Envoyer MALP", verifying the loading state, and seeing mock biome data and an anime-style static biome image appear in the information panel.

**Acceptance Scenarios**:

1. **Given** une coordonnée sélectionnée et la porte ouverte, **When** je clique sur "Envoyer MALP" dans l'onglet d'actions, **Then** une animation de l'envoi du MALP se joue, et le système met à jour les informations de la planète avec les détails du biome et de l'environnement immédiat de la porte.
2. **Given** qu'un MALP a été envoyé, **When** je consulte les informations, **Then** une illustration statique avec un rendu style anime du biome est visible.

---

### User Story 3 - Envoi d'une équipe SG et historique (Priority: P2)

En tant qu'opérateur du SGC, je veux pouvoir envoyer une équipe SG, voir un compte rendu (CR) de mission, et consulter l'historique des missions précédentes pour ces coordonnées avec leurs CR associés.

**Why this priority**: Une fois la planète sécurisée, l'envoi d'équipes permet de faire avancer l'exploration et de mettre à jour la base de données. L'historique permet le suivi au fil du temps.

**Independent Test**: Can be fully tested by clicking "Envoyer équipe SG", which should produce a mock mission report, update planet details, and add an entry to the planet's mission history list.

**Acceptance Scenarios**:

1. **Given** une coordonnée sélectionnée, **When** je clique sur "Envoyer équipe SG", **Then** une animation de l'envoi de l'équipe se joue, un compte rendu de mission est généré et les informations de la planète sont mises à jour.
2. **Given** des missions précédentes sur une planète, **When** je consulte les informations de cette coordonnée, **Then** je peux voir un historique des envois et accéder aux CR de chaque mission.
3. **Given** qu'aucun MALP n'a été envoyé sur la destination, **When** je clique sur "Envoyer équipe SG", **Then** un avertissement de confirmation apparaît avant de procéder.
4. **Given** une destination dangereuse ou non viable (hostile, atmosphère toxique, etc.), **When** une équipe SG est envoyée, **Then** l'équipe meurt, le CR enregistre le décès et l'historique de la coordonnée est mis à jour en conséquence.

### Edge Cases

- What happens when la composition manuelle échoue (adresse invalide / inexistante dans l'univers canon) ? (La porte ne s'ouvre pas, feedback d'erreur visuel/sonore).
- How does system handle l'envoi d'une équipe SG non précédé d'un MALP : un avertissement de confirmation est affiché. Si la destination est dangereuse, l'équipe meurt et le CR mentionne les pertes.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST afficher une interface visuelle cohérente reprenant les codes graphiques de la salle de commande du SGC avec une esthétique générale de type animé japonais (film d'animation).
- **FR-002a**: System MUST fournir une liste d'adresses filtrable (Tous, Explorés, Non-explorés) affichant l'origine de l'adresse (ex: "Bibliothèque des Anciens").
- **FR-002b**: System MUST fournir un mécanisme de saisie manuelle pour composer une adresse de la Voie Lactée (7 chevrons).
- **FR-002c**: System MUST valider la saisie manuelle : rejeter les adresses inconnues de l'univers Stargate, et pour les valides, jouer l'animation d'ouverture et l'ajouter à la liste si non présente.
- **FR-003**: System MUST afficher un panneau d'informations pour la coordonnée sélectionnée (vidé par défaut si aucune exploration n'a eu lieu).
- **FR-004**: System MUST fournir un onglet d'action contenant au moins deux options : "Envoyer MALP" et "Envoyer équipe SG".
- **FR-005**: System MUST, lors de l'action "Envoyer MALP", mettre à jour les données de la planète pour inclure : le type de biome, ce qui se trouve près de la porte, et une image statique illustrant le biome dans un style anime.
- **FR-006**: System MUST, lors de l'action "Envoyer équipe SG", générer un Compte Rendu (CR) de mission structuré contenant : (1) un résumé narratif du déroulement (via templates contextuels), (2) une illustration anime-style d'un moment fort de l'exploration (ruine, mine, point d'intérêt), (3) un bilan structuré : informations découvertes sur la planète, état de santé de l'équipe (vivants, blessés, morts), technologies/ressources/connaissances rapportées.
- **FR-007**: System MUST maintenir un historique des missions (MALP et Équipes SG) pour chaque coordonnée, et permettre la consultation des anciens comptes rendus.
- **FR-008**: System MUST provide pre-rendered static images of the biomes drawn in a consistent anime art style.
- **FR-009**: System MUST jouer des animations visuelles distinctes pour l'ouverture de la porte, l'envoi d'un MALP, et l'envoi d'une équipe SG.
- **FR-010**: System MUST sauvegarder automatiquement l'état de jeu (adresses explorées, historique des missions, adresses saisies manuellement) dans le stockage local de l'utilisateur, sans nécessiter d'action explicite de sauvegarde.
- **FR-011**: System MUST afficher un avertissement de confirmation lorsque l'utilisateur tente d'envoyer une équipe SG vers une destination où aucun MALP n'a préalablement été déployé.
- **FR-012**: System MUST, si une destination est évaluée comme dangereuse ou non viable, répercuter la mort de l'équipe SG dans un compte rendu dédié et dans l'historique de la coordonnée. Le danger est un attribut persistant de la planète : fixé par le canon pour les planètes connues, généré une seule fois à la création des données pour les planètes non-canoniques. Cet attribut est conçu pour pouvoir évoluer avec une future mécanique de temporalité.
- **FR-013**: System MUST associer chaque CR d'équipe SG à une illustration statique anime-style représentant un moment fort de la mission (ruine, mine, ou autre point d'intérêt en lien avec le déroulement), cohérente avec le profil de la planète.

### Key Entities *(include if feature involves data)*

- **Planet / Coordinates**: Represents a destination. Key attributes: Address (Coordinates), Biome type, Gate environment, Discovered Information, Danger Level (canon-defined for known planets; generated once at data creation for non-canon planets — designed to evolve with future temporality mechanic), Exploration Status (unexplored / MALP scouted / SG team deployed).
- **Mission / Deployment**: Represents an action taken (MALP or SG Team). Key attributes: Type (MALP/SG), Timestamp, Resulting Mission Report (CR), Reference to Planet.
- **Mission Report (CR)**: Textual and visual document produced after each MALP or SG team deployment. Key attributes: Mission type, Narrative summary (template-generated), Illustration (anime-style static image of a key moment), Structured debrief (discovered planet info, team health status: alive/wounded/dead, resources/technologies/knowledge retrieved), Reference to Planet, Timestamp.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can successfully navigate the interface, select a coordinate, and send a MALP or SG team without encountering visual inconsistencies or errors.
- **SC-002**: The interface visually matches the specified "SGC Command Room in anime style" aesthetic as verified by stakeholder review.
- **SC-003**: Planet information states transition correctly from "empty" to "populated with biome data" to "updated from mission reports" based on sequential user actions.
- **SC-004**: Users can retrieve and read historical mission reports for any explored coordinate within 3 clicks.
- **SC-005**: Les données de progression (planètes explorées, historique des missions) sont intégralement restaurées après fermeture et réouverture de l'application, sans aucune action de la part de l'utilisateur.

## Assumptions

- Les coordonnées (adresses des planètes) sont pré-définies dans un fichier statique embarqué dans l'application pour le MVP. Les données de chaque planète connue (biome, danger, environnement) sont issues du canon Stargate.
- Les adresses non-canoniques (saisies manuellement et absent du corpus canon) ont un profil de planète (biome, niveau de danger, environnement) généré une seule fois à la création des données de la planète, pas à chaque mission. La dangerosité est conçue pour évoluer dans le futur via une mécanique de temporalité.
- Les données de progression (historique des missions, adresses découvertes, statut des planètes) sont sauvegardées automatiquement dans le stockage local de l'appareil de l'utilisateur.
- Les données des planètes (biomes, événements des missions de l'équipe SG, environnements de la porte) seront générées ou simulées aléatoirement pour le moment si aucun backend n'existe.
- Le terme "rendu animé" (anime-style) fait référence à l'esthétique visuelle (dessin de type animation japonaise) et non à des images en mouvement. Les assets visuels (biomes, UI) seront des images statiques au style cohérent.
- L'équipe SG envoyée est générique pour l'instant (ex: "SG-1" par défaut) sans gestion détaillée du personnel de l'équipe.
