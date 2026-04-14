# Data Model: SGC Command Interface

**Feature**: 001-sgc-command-interface  
**Date**: 2026-04-14

---

## Entities

### Planet

Représente une destination accessible depuis la Porte des Étoiles du SGC.

| Field | Type | Required | Description |
|-------|------|----------|--------------|
| `id` | `string` | ✅ | Clé naturelle unique = adresse encodée (ex: `"CRATER-VIRGO-BOOTES-CENTAURUS-LIBRA-SERPENS_CAPUT-SCORPIUS"`). Dérivée de `gateAddress`, garantit l'unicité physique de la destination dans la galaxie. |
| `designation` | `string \| null` | ❌ | Désignation militaire SGC (ex: `"P3X-888"`). Générée par le SGC pour les planètes connues. |
| `gateAddress` | `GateSymbol[7]` | ✅ | Les 7 glyphes de l'adresse de porte — source de vérité pour l'`id` |
| `name` | `string \| null` | ❌ | Nom conventionnel (ex: `"Abydos"`, `"Chulak"`) |
| `addressOrigin` | `string \| null` | ❌ | Source de l'adresse (ex: `"Cartouche d'Abydos"`, `"Bibliothèque des Anciens"`) |
| `isCanon` | `boolean` | ✅ | `true` si issue de la franchise, `false` si découverte via CR |
| `biomeType` | `BiomeType \| null` | ❌ | Null tant que MALP non envoyé |
| `gateEnvironment` | `string \| null` | ❌ | Description textuelle proche de la porte |
| `dangerLevel` | `DangerLevel` | ✅ | Fixé au canon ou généré une seule fois à la découverte |
| `explorationStatus` | `ExplorationStatus` | ✅ | États : `UNKNOWN → MALP_SCOUTED → SG_DEPLOYED` |
| `discoveredInfo` | `string[]` | ✅ | Informations collectées au fil des missions |
| `biomeImageId` | `string` | ✅ | Référence à l'asset image biome (`biomes/[id]/biome.webp` pour les planètes canoniques, `biomes/_types/[biomeType].webp` pour les générées) |
| `momentImageIds` | `string[]` | ✅ | Pool d'illustrations moments forts (`moments/[id]/01.webp`…). Sélection contextuelle selon le type de mission et le résultat. |
| `canonNarrativeKey` | `string \| null` | ❌ | Clé de surcharge narrative pour les planètes canoniques (référence les templates dans `planet-narratives.json`) |
| `canonFaction` | `string \| null` | ❌ | Faction/peuple canonique associé (ex: `"Abydonniens"`, `"Jaffa de Chulak"`) |
| `createdAt` | `string` | ✅ | ISO 8601 — date d'ajout dans le carnet d'adresses |

#### BiomeType (enum)

Noms en anglais, style SCREAMING_SNAKE_CASE. Basé sur les environnements effectivement rencontrés dans le canon Stargate (SG-1, Atlantis, Universe).

```
// Biomes naturels
ARID_DESERT         // Désert de sable sec (Abydos, Abydos-like)
ROCKY_DESERT        // Désert de roche et canyon
TROPICAL_JUNGLE     // Jungle dense et humide
TEMPERATE_FOREST    // Forêt tempérée / boréale (Chulak)
ARCTIC_TUNDRA       // Toundra glacée / monde de glace
ICE_WORLD           // Planète entièrement recouverte de glace
PLAINS_GRASSLAND    // Plaines et prairies ouvertes
HIGHLAND_PLATEAU    // Hauts plateaux rocailleux
SWAMP_MARSHLAND     // Marécages / zones humides
OCEAN_WORLD         // Planète majoritairement couverte d'eau
VOLCANIC_WASTELAND  // Monde volcanique / géothermique
TOXIC_ATMOSPHERE    // Atmosphère respirable avec équipement seulement

// Biomes artificiels / mixtes
ANCIENT_RUINS       // Vestiges d'une civilisation avancée (Anciens, Goa'uld)
GOAULD_TERRITORY    // Territoire sous contrôle ou anciennement sous contrôle Goa'uld
JAFFA_SETTLEMENT    // Territoire Jaffa / camp militaire
ALIEN_CITY_RUINS    // Ruines de cité extra-terrestre non-identifiée
ACTIVE_SETTLEMENT   // Planète habitée avec civilisation active
UNDERGROUND_COMPLEX // Complexe souterrain (naturel ou artificiel)
CAVERN_NETWORK      // Réseau de cavernes
BARREN              // Planète stérile, sans atmosphère notable
```

#### DangerLevel (enum)

```
SAFE      → Aucune menace connue
LOW       → Dangers mineurs (faune hostile, météo difficile)
MEDIUM    → Présence Goa'uld ou faction ennemie faible
HIGH      → Forte présence ennemie ou conditions létales
LETHAL    → Mort quasi-certaine sans préparation
UNKNOWN   → Planète jamais sondée
```

#### ExplorationStatus (enum)

```
UNKNOWN       → Adresse connue mais jamais explorée
MALP_SCOUTED  → MALP envoyé, données de biome disponibles
SG_DEPLOYED   → Au moins une équipe SG envoyée
```

#### GateSymbol (enum — 36 glyphes canoniques Voie Lactée)

```
CRATER | VIRGO | BOOTES | CENTAURUS | LIBRA | SERPENS_CAPUT |
NORMA | SCORPIUS | CRUS | ORION | LEPUS | MONOCEROS |
SAGITTARIUS | AQUARIUS | CAPRICORNUS | PISCIS | EQUULEUS | AQUILA |
SCUTUM | SERPENS_CAUDA | OPHIUCHUS | HERCULES | CORONA_BOREALIS |
ARIES | CASSIOPEIA | ORION2 | TAURUS | AURIGA | ERIDANUS |
ANDROMEDA | TRIANGULUM | GEMINI | CANCER | LEO | COMA_BERENICES | GEMINI2
```

*(Point d'origine — 7ème chevron — est toujours `EARTH_ORIGIN` pour le SGC)*

---

### Mission

Représente un déploiement effectué depuis le SGC vers une planète.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | UUID unique |
| `planetId` | `string` | ✅ | Référence vers `Planet.id` |
| `type` | `MissionType` | ✅ | `MALP` ou `SG_TEAM` |
| `deployedAt` | `string` | ✅ | ISO 8601 — date et heure du déploiement |
| `missionReportId` | `string` | ✅ | Référence vers `MissionReport.id` |

#### MissionType (enum)

```
MALP    → Sonde de reconnaissance
SG_TEAM → Équipe d'intervention
```

---

### MissionReport (CR)

Compte rendu structuré produit après chaque déploiement.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | UUID unique |
| `missionId` | `string` | ✅ | Référence vers `Mission.id` |
| `planetId` | `string` | ✅ | Référence vers `Planet.id` |
| `type` | `MissionType` | ✅ | Type du déploiement |
| `narrativeSummary` | `string` | ✅ | Texte narratif généré par templates |
| `illustrationId` | `string \| null` | ❌ | Référence vers asset anime-style (moment fort) |
| `debrief` | `MissionDebrief` | ✅ | Bilan structuré de la mission |
| `reportedAt` | `string` | ✅ | ISO 8601 — date et heure de rédaction du rapport |

#### MissionDebrief

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discoveredInfo` | `string[]` | ✅ | Nouvelles informations sur la planète |
| `teamStatus` | `TeamStatus \| null` | ❌ | Null pour les missions MALP |
| `resourcesRetrieved` | `Resource[]` | ✅ | Ressources/technologies rapportées |
| `knowledgeGained` | `string[]` | ✅ | Ex: nouvelles coordonnées découvertes |
| `isTeamDeceased` | `boolean` | ✅ | `true` si toute l'équipe est morte |

#### TeamStatus

| Field | Type | Description |
|-------|------|-------------|
| `alive` | `number` | Membres indemnes |
| `wounded` | `number` | Membres blessés |
| `deceased` | `number` | Membres décédés |

#### Resource

| Field | Type | Description |
|-------|------|-------------|
| `type` | `ResourceType` | `NAQUADAH \| TRINIUM \| EPPZ \| ARTIFACT \| KNOWLEDGE \| OTHER` |
| `quantity` | `number` | Quantité récupérée |
| `description` | `string` | Description textuelle |

---

### GameState

L'objet racine persisté dans `localStorage`. Clé: `sgc-legacy:game-state`.

| Field | Type | Description |
|-------|------|-------------|
| `version` | `string` | Version du schéma (ex: `"1.0.0"`) pour migrations futures |
| `planets` | `Planet[]` | Liste complète des planètes connues |
| `missions` | `Mission[]` | Historique de tous les déploiements |
| `missionReports` | `MissionReport[]` | Tous les comptes rendus |
| `lastSaved` | `string` | ISO 8601 — timestamp de la dernière sauvegarde |

---

## State Transitions

### Planet.explorationStatus

```
UNKNOWN
  │
  ├──[Envoyer MALP → succès]──→ MALP_SCOUTED
  │                               │
  │                               └──[Envoyer équipe SG]──→ SG_DEPLOYED
  │
  └──[Envoyer équipe SG sans MALP + confirmation]──→ SG_DEPLOYED
```

### Planet.dangerLevel

```
Planète canonique → Valeur fixée à la création depuis planets.json (immuable en MVP)
Planète non-canonique → Valeur générée une fois à la composition manuelle (stockée, immuable en MVP)
Future (Phase 2) → Pourra évoluer via mécanique de temporalité
```

---

## Validation Rules

| Rule | Description |
|------|-------------|
| VR-001 | `gateAddress` DOIT contenir exactement 7 symboles distincts (pas de doublons) |
| VR-002 | `dangerLevel` ne peut pas être `UNKNOWN` après un envoi de MALP |
| VR-003 | `MissionReport.debrief.teamStatus` DOIT être non-null pour `MissionType.SG_TEAM` |
| VR-004 | `Planet.biomeType` DOIT être non-null après `explorationStatus = MALP_SCOUTED` |
| VR-005 | `Mission.missionReportId` DOIT référencer un `MissionReport` existant dans `GameState` |
| VR-006 | Un `Planet` avec `isCanon=false` DOIT avoir un `dangerLevel` ≠ `UNKNOWN` après sa première composition |
