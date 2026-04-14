# Quickstart: SGC Command Interface

**Feature**: 001-sgc-command-interface  
**Date**: 2026-04-14

---

## Prérequis

- Node.js 22 LTS
- npm ou pnpm
- Un navigateur moderne (Chrome/Firefox/Edge)

---

## Installation

```bash
# À la racine du dépôt, initialiser le projet web
npm create vite@latest . -- --template vanilla
npm install

# Installer Vitest pour les tests du domaine
npm install --save-dev vitest
```

---

## Lancer en développement

```bash
npm run dev
# → http://localhost:5173
```

---

## Lancer les tests du domaine

```bash
npm run test
# ou en mode watch
npm run test -- --watch
```

---

## Structure du projet

Voir `plan.md` section "Source Code" pour la structure complète.

---

## Ajout de données planètes

Les planètes canoniques sont définies dans `src/data/planets.json`. Format d'une entrée :

```json
{
  "id": "CRATER-VIRGO-BOOTES-CENTAURUS-LIBRA-SERPENS_CAPUT-SCORPIUS",
  "designation": "P3X-308",
  "gateAddress": ["CRATER", "VIRGO", "BOOTES", "CENTAURUS", "LIBRA", "SERPENS_CAPUT", "SCORPIUS"],
  "name": "Abydos",
  "addressOrigin": "Découverte originale SGC",
  "canonNarrativeKey": "abydos",
  "canonFaction": "Abydonniens",
  "isCanon": true,
  "biomeType": "ARID_DESERT",
  "gateEnvironment": "Sable fin, vent constant, Grande Pyramide visible à 200m",
  "dangerLevel": "LOW",
  "explorationStatus": "UNKNOWN",
  "discoveredInfo": [],
  "biomeImageId": "biomes/abydos/biome.webp",
  "momentImageIds": [
    "moments/abydos/01.webp",
    "moments/abydos/02.webp",
    "moments/abydos/03.webp"
  ],
  "createdAt": "1997-07-27T00:00:00Z"
}
```

---

## Ajout de templates narratifs

## Structure des données narratives (CR)

Le système de narration utilise **deux sources** :
1. `src/data/narrative-templates.json` — Templates génériques (fallback pour toutes les planètes)
2. `src/data/planet-narratives.json` — Narratifs spécifiques par planète canonique (prioritaires)

### Format `narrative-templates.json` (exemple)

```json
{
  "MALP_SUCCESS": {
    "intro": [
      "RAPPORT DE SONDE — {{planetDesignation}} | {{deployedAt}}\n\nTransmission MALP établie. Atmosphère : respirable. Environnement : {{biomeType}}. {{gateEnvironment}}.",
      "TRANSMISSION SONDE — {{planetDesignation}}\n\nContact confirmé. {{gateEnvironment}}. Niveau de menace estimé : {{dangerAssessment}}."
    ],
    "conclusion": [
      "RECOMMANDATION : Site évalué comme {{dangerAssessment}}. La sonde reste en position d'observation."
    ]
  },
  "SG_SUCCESS": {
    "intro": [
      "COMPTE RENDU DE MISSION — {{planetDesignation}} | {{deployedAt}}\nÉquipe : {{teamName}}\n\nL'équipe {{teamName}} a franchi la porte et est revenue après {{missionDuration}}."
    ],
    "terrain": [
      "Observations terrain :\n\u2022 {{gateEnvironment}}\n\u2022 Points d'intérêt : {{pointsOfInterest}}\n\u2022 Contacts : {{contacts}}"
    ],
    "bilan": [
      "BILAN OPÉRATIONNEL\nÉquipe : {{teamAlive}} vivant(s) \u00b7 {{teamWounded}} blessé(s) \u00b7 {{teamDeceased}} décédé(s)\nRessources : {{resourceSummary}}\nConnaissances : {{knowledgeGained}}\nNouvelles adresses : {{newCoordinates}}"
    ],
    "conclusion": ["RECOMMANDATION : {{recommendation}}"]
  },
  "SG_DEATH": {
    "intro": [
      "RAPPORT D'INCIDENT — {{planetDesignation}} | {{deployedAt}} | TOP SECRET\n\nContact perdu avec l'équipe {{teamName}}. Présumée morte en mission."
    ],
    "conclusion": [
      "RECOMMANDATION : Classement de {{planetDesignation}} en ZONE INTERDITE. MALP de confirmation requis avant toute opération future."
    ]
  }
}
```

### Format `planet-narratives.json` (extraits canon)

```json
{
  "abydos": {
    "MALP_SUCCESS": {
      "intro": [
        "RAPPORT DE SONDE — Abydos (P3X-308) | {{deployedAt}}\n\nLa sonde émerge dans la Grande Pyramide. 52\u00b0C. Les pictogrammes Goa'uld sont clairement visibles sur les colonnes. Aucun Jaffa détecté.",
        "RAPPORT DE SONDE — Abydos | {{deployedAt}}\n\nLes dunes s'étendent sous un double soleil. Le temple marque la porte de son ombre colossale. La population Abydonnienne semble absente des environs."
      ]
    },
    "SG_SUCCESS": {
      "intro": [
        "COMPTE RENDU DE MISSION — Abydos | {{deployedAt}}\nÉquipe : {{teamName}}\n\nL'équipe {{teamName}} a été accueillie par les Abydonniens menés par le Conseil des anés. Des artefacts Goa'uld ont été localisés dans les sous-niveaux de la pyramide."
      ]
    }
  },
  "chulak": {
    "MALP_SUCCESS": {
      "intro": [
        "RAPPORT DE SONDE — Chulak | {{deployedAt}}\n\nLa sonde émerge en lisire de la forêt dense. Lumière filtrée, ombres épaisses. Les temples Jaffa sont visibles à 400 mètres. Aucun contact détecté."
      ]
    }
  }
}
```

---

## Notes sur les assets visuels

- Les images de biomes canoniques sont dans `src/ui/assets/biomes/[planetId]/biome.webp`.
- Les biomes pour planètes générées sont dans `src/ui/assets/biomes/_types/[BiomeType].webp`.
- Les moments forts (CR) canoniques : `src/ui/assets/moments/[planetId]/[01-04].webp`.
- Les moments forts génériques sont dans `src/ui/assets/moments/_types/[BiomeType]/[01-03].webp`.
- Résolution minimale : 800×450px pour les biomes, 600×400px pour les moments forts.

---

## Palette de design (SGC Anime Style)

```css
/* Variables CSS à inclure dans styles/main.css */
:root {
  /* Couleurs SGC / CRT */
  --sgc-bg-dark: #0a0e14;
  --sgc-bg-panel: #0d1520;
  --sgc-border: #1e3a5f;
  --sgc-accent: #00c8ff;
  --sgc-accent-dim: #00608a;
  --sgc-text-primary: #c8e8ff;
  --sgc-text-secondary: #7aa8cc;
  --sgc-danger: #ff4444;
  --sgc-warning: #ffaa00;
  --sgc-success: #00ff88;

  /* Chevrons */
  --chevron-inactive: #1a3050;
  --chevron-active: #00c8ff;
  --chevron-locked: #ff8800;

  /* Typographie */
  --font-primary: 'Rajdhani', 'Eurostile', monospace;  /* Style militaire/sci-fi */
  --font-narrative: 'Noto Serif JP', serif;              /* Style narratif anime */
}
```
