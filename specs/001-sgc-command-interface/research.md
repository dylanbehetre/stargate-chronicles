# Research: SGC Command Interface

**Feature**: 001-sgc-command-interface  
**Date**: 2026-04-14  
**Status**: Complete — all unknowns resolved

---

## Decision 1: Technology Stack (UI Layer)

**Decision**: Web application — HTML5 + CSS3 + Vanilla JavaScript (ES Modules) via Vite

**Rationale**:
- Le MVP est purement une interface de gestion (Phase 1 IDEE.md) : aucun moteur 3D n'est requis.
- Les animations de porte, MALP, et équipe SG (CSS keyframes + Web Animations API) sont parfaitement adaptées au web.
- Le localStorage natif du navigateur répond exactement à FR-010 (persistance locale automatique) sans aucune configuration.
- Le style "SGC terminal CRT + anime" est idéalement servi par CSS custom properties, filters et gradients.
- Vite (build tool) offre un démarrage rapide, des modules ES natifs, et une courbe d'apprentissage minimale pour ce MVP solo.
- Pas de framework UI lourd (React/Vue) : le DOM est directement manipulé via des composants JS purs, restant aligné avec le principe IV de la constitution (domaine découplé de l'UI).

**Alternatives considérées**:
- **Godot 4** : Candidat sérieux pour l'ensemble du projet (Phase 1 → Phase 7). Gère la 2D managériale ET la 3D tactique, exporte sur PC et mobile. Écarté pour le MVP car la courbe d'apprentissage initiale est plus élevée pour une UI pure de type CRT/terminal. À réévaluer à partir de la Phase 3.
- JavaFX : Java 21 natif, bon pour le bureau. Peu adapté aux animations CSS-like et à la richesse visuelle anime visée ici.
- LibGDX : Excellent pour la Phase 7 (RTwP 3D). Trop complexe pour un MVP de gestion textuelle pur.
- React/Vue SPA : Framework non justifié pour l'échelle de ce MVP solo.

> **⚠️ Note** : Pour la portabilité mobile future, Vite + web tech permet un portage vers Capacitor.js (wrapper natif mobile) sans réécriture. La migration vers Godot reste une option viable à partir de la Phase 3 si la complexité de gestion le justifie.

---

## Decision 2: Architecture — Séparation Domaine / UI

**Decision**: Architecture en couches strictes au sein du projet web

```
src/domain/       → Logique pure (entités, services, règles métier). Aucune référence au DOM.
src/infrastructure/ → Adaptateurs (LocalStorage). Implémente les interfaces définies dans domain/.
src/ui/           → Composants d'affichage, animations, manipulation DOM.
src/data/         → Fichiers JSON statiques (base de données planètes canon).
```

**Rationale**: La Constitution IV exige que le domaine soit testable sans lancer l'interface graphique. En JS, cela se traduit par des modules purs sans import de DOM APIs. Les services de domaine prennent des dépôts (repositories) en injection de dépendance.

**Alternatives considérées**:
- Tout dans un seul fichier : Rejeté — violation directe de la Constitution IV.
- Séparation frontend / backend (Node.js API) : Prématurée pour ce MVP sans besoin réseau.

---

## Decision 3: Persistance des données

**Decision**: `localStorage` natif du navigateur, sérialisé en JSON

**Rationale**: FR-010 demande une sauvegarde automatique sans action utilisateur. `localStorage` est synchrone, disponible sans serveur, et parfaitement adapté au volume de données du MVP (quelques centaines de planètes + historique). Une interface `IStorageRepository` dans le domaine permet de l'échanger plus tard (IndexedDB, fichier Electron, etc.) sans toucher au domaine.

**Schema de clé** : `sgc-legacy:game-state` (objet JSON unique sérialisé)

---

## Decision 4: Base de données des planètes (Canon Stargate)

**Decision**: Fichier `src/data/planets.json` embarqué dans l'app, structuré selon le modèle de données Planet.

**Rationale**: Le canon Stargate dispose de ~200+ adresses et planètes référencées (SG-1, Atlantis, Universe). Fidèle à l'objectif d'exhaustivité, le MVP intégrera l'intégralité des adresses canoniques identifiables dans la franchise (issue de la compilation des données de Stargate Fusion, Hypnoweb et des wikis). Le profil de danger, le nom SGC (P3X-...) et le biome seront extraits pour chaque entrée afin de garantir une fidélité totale au lore.

**Règle des adresses non-canoniques** : Seules les adresses présentes dans le corpus canon Stargate peuvent être composées manuellement avec succès. Si l'opérateur compose une séquence de 7 chevrons absente de la base canonique, la porte ne s'ouvre pas (échec d'activation). Il n'y a pas d'exploration aléatoire par composition manuelle.

Les planètes non-canoniques (adresses inconnues du SGC) sont **exclusivement découvertes** via les Comptes Rendus des équipes SG : lorsqu'une équipe récupère des coordonnées sur le terrain (cartouche alien, base de données, contact avec des peuples), ces adresses sont ajoutées au carnet et deviennent accessibles. Leur profil est généré une seule fois à leur découverte, puis persist dans le `GameState`.

**Validation de saisie manuelle** : Une adresse de 7 chevrons est valide uniquement si :
1. Exactement 7 symboles distincts (aucun doublon)
2. La séquence des 6 premiers symboles correspond à une adresse référencée dans `planets.json` (base canon)
3. Sinon → porte non activée, feedback d'erreur "Adresse inconnue des registres du SGC"

---

## Decision 5: Illustrations anime-style

**Decision**: Assets statiques pré-rendus (PNG/WebP) par planète, cohérents avec le canon Stargate, multiples par planète pour varier les visites.

**Rationale**: FR-008 et FR-013 demandent des illustrations dans un style anime cohérent et immersif. Les images doivent refléter l'apparence réelle de chaque planète telle qu'elle est connue dans la série (Abydos = désert ocre avec temple-pyramide Goa'uld ; Chulak = forêt dense avec architecture Jaffa ; Tollana = cité futuriste Tollan, etc.).

**Structure des assets** :
- **Biome** : chaque planète canonique a 1 image de biome spécifique à la planète dans `biomes/[planetId]/biome.webp`. Les planètes générées (non-canoniques) utilisent une image de biome par `BiomeType` dans `biomes/_types/[biomeType].webp`.
- **Moments forts** (illustrations de CR) : chaque planète canonique dispose d'un pool de 2 à 4 images de moments forts dans `moments/[planetId]/[01..04].webp`. Elles représentent des lieux ou événements spécifiques à la planète (ruines du temple Ra sur Abydos, arènes de combat sur Chulak, etc.). La sélection se fait selon le contexte (premier envoi, retour, mort de l'équipe). Les planètes générées utilisent un pool de moments forts par `BiomeType` dans `moments/_types/[biomeType]/[01..03].webp`.

**Génération** : Les images seront générées via l'outil de génération d'images d'Antigravity avec un brief par planète/moment issu des données canoniques (Stargate Specialist skill).

---

## Decision 6: Animations

**Decision**: CSS keyframe animations + Web Animations API pour les transitions

**Rationale**: FR-009 demande 3 animations distinctes (ouverture porte, envoi MALP, envoi équipe). CSS keyframes sont performantes (GPU-accelerated), ne nécessitent pas de bibliothèque tierce, et s'intègrent parfaitement avec l'esthétique CRT/hologramme du SGC.

- **Ouverture de porte** : Rotation séquentielle des 7 chevrons + effet vortex d'horizon d'événements (CSS radial gradient animé + blur).
- **Envoi MALP** : Animation de glissement + feedback de transmission (scanlines).
- **Envoi équipe SG** : Animation de silhouettes entrant dans le vortex.

---

## Decision 7: Génération des Comptes Rendus (CR)

**Decision**: Système de templates narratifs structurés en sections, avec surcharge par planète canonique

**Rationale**: FR-006 demande des CR textuels riches, narratifs et immersifs. Le `NarrativeEngine` utilise deux niveaux de templates :
1. **Templates génériques** par type de résultat + biome (fallback universel pour toutes les planètes)
2. **Templates canon-spécifiques** : pour les planètes connues de la franchise, des narratifs dédiés reflètent le lore (Abydonniens sur Abydos, architecture Goa'uld sur Chulak, technologies Tollan sur Tollana, etc.), stockés dans `planet-narratives.json`

**Structure d'un CR complet (format multi-sections)** :

```
EN-TÊTE
  Désignation · Date · Équipe · Type de mission · Classification

RAPPORT INITIAL
  3-5 phrases narratives décrivant la mission depuis le franchissement jusqu'au retour
  ou l'incident final. Pool de 4-6 variants par résultat, avec surcharge planet-specific
  pour les planètes canoniques. Ton : rapport militaire factuel mais vivant.

OBSERVATIONS TERRAIN
  • Environnement immédiat de la porte (issu des données biome)
  • Points d'intérêt identifiés (lieux, artefacts, structures)
  • Contacts et rencontres (peuples, factions, technologies, créatures)

BILAN OPÉRATIONNEL
  État de l'équipe : [N] vivants · [N] blessés · [N] décédés
  Ressources récupérées : [type · quantité · description]
  Technologies / Connaissances : [liste]
  Nouvelles adresses obtenues : [liste des coordonnées découvertes]

CONCLUSION DU COMMANDEMENT
  Évaluation du potentiel (exploitation, contact diplomatique, menace)
  Niveau de risque pour missions futures
  Recommandation : [Exploration approfondie | Retour non conseillé | Site à sécuriser | ...]
```

**Variables disponibles** : `{{planetName}}`, `{{planetDesignation}}`, `{{biomeType}}`, `{{biomeDesc}}`, `{{gateEnvironment}}`, `{{teamName}}`, `{{dangerAssessment}}`, `{{resourceSummary}}`, `{{technologyFound}}`, `{{knowledgeGained}}`, `{{newCoordinates}}`, `{{teamAlive}}`, `{{teamWounded}}`, `{{teamDeceased}}`, `{{missionOutcome}}`, `{{canonFaction}}`

---

## Decision 8: Validation des adresses à 7 chevrons

**Decision**: Saisie via interface de composition (clic sur symboles) + validation contre dictionnaire canon

Le sélecteur de chevrons affichera les 36 glyphes Stargate canoniques (Voie Lactée). L'utilisateur clique sur 7 symboles dans l'ordre. La validation vérifie :
1. Exactement 7 symboles sélectionnés
2. Aucun symbole dupliqué
3. La séquence des 6 premiers chevrons correspond exactement à une adresse présente dans le catalogue canonique (`planets.json`)

**Résultats possibles** :
- ✅ Adresse reconnue → animation d'ouverture → planète sélectionnée (déjà connue ou nouvellement activée depuis le catalogue)
- ❌ Adresse inconnue → échec d'activation systématique → feedback "Adresse inconnue des registres du SGC"

**Planètes non-canoniques** : Ces adresses ne peuvent être obtenues qu'à travers les CR d'équipes SG (`knowledgeGained`). Elles sont alors ajoutées automatiquement au carnet d'adresses. Leur profil est généré une seule fois à la découverte.
