---
name: stargate-arc-analysis
description: Analyzes and structures narrative arcs from Stargate (SG-1 and Atlantis). Use when the user requests to extract narrative arcs, analyze Stargate episodes, or build a campaign narrative.
---

# 🌌 Stargate Narrative Arc Analyzer

## Overview
Extract, analyze, and structure the narrative arcs of Stargate (SG-1 and Atlantis) into a format compatible with `gds-create-narrative`.

## Methodology
1. **Iterative Extraction**: Process seasons sequentially, following the broadcast order to capture cross-over dependencies (SG-1 S8+ and Atlantis S1+).
2. **Arc Identification**:
   - **Antagonists**: Goa'uld System Lords, Replicators, Ori, Wraiths, Genii, etc.
   - **Allies**: Tok'ra, Asgard, Ancient/Lantean, Nox, Rebels.
   - **Themes**: "Ancestry" (Ancient ruins), "Cultural Traces" (Earth-descended cultures), "Ascension".
3. **Step Structure**: Each episode is decomposed into one or more steps.
4. **Validation**: Use `stargate-specialist` for canon accuracy and cross-reference multiple sources (Stargate-Fusion, GateWorld, Fandom).

## Output Format (Markdown)
The output must be a Markdown file with the following structure:

# Arc : [Name]
## Introduction
[Global summary of the red thread]

## Story Beat [N] : [Beat Title]
### [UID] : [Step Name]
- **Series/Episode:** [Reference]
- **Planet:** [Name (Designation)]
- **Summary:** [Context and action]
- **Prerequisites:** [Logical links to previous steps/arcs]
- **SGC Outcomes:**
  - **Gains:** [Tech, alliances, info]
  - **Losses:** [Casualties, lost equipment, diplomatic failure]
  - **Consequences:** [Political impact, new threats]

---
## Knowledge Base

> Toujours lire `knowledge/INDEX.md` en premier pour identifier le code d'arc, puis ouvrir le fichier correspondant dans `knowledge/arcs/`.  
> ⚠️ Les anciens fichiers de période (`sg1-arcs-s*.md`) sont **archivés** — ne pas les utiliser.

### Index

| Fichier | Rôle |
| :--- | :--- |
| `knowledge/INDEX.md` | Index maître : codes d'arcs, carte de dépendances, statistiques |

### Arcs SG-1 (`knowledge/arcs/`)

| Fichier | Arc | Code | Portée |
| :--- | :--- | :--- | :--- |
| `arc-sg1-apophis.md` | Apophis | `APO` | S1E01 → S5E01 |
| `arc-sg1-anciens.md` | Anciens — Éveil de l'Héritage | `ANC` | S1E11 → S8E18 |
| `arc-sg1-ascension-daniel.md` | Ascension de Daniel | `ASC` | S3E20 → S7E02 |
| `arc-sg1-asgard.md` | Asgard | `ASG` | S1E10 → S10E20 |
| `arc-sg1-anubis.md` | Anubis | `ANB` | S5E15 → S8E18 |
| `arc-sg1-baal.md` | Ba'al | `BAL` | S6E06 → Film *Continuum* |
| `arc-sg1-cultures-nox.md` | Cultures Terriennes & Nox | `CUL` | S1E04 → S1E16 |
| `arc-sg1-hathor.md` | Hathor | `HAT` | S1E14 → S3E02 |
| `arc-sg1-politique-nid.md` | NID / Politique internationale | `NID` | S2E14 → S8 |
| `arc-sg1-adria.md` | Adria / Orici | `ADR` | S9E20 → S10E19 |
| `arc-sg1-ori.md` | Ori | `ORI` | S9E01 → Film *Ark of Truth* |
| `arc-sg1-merlin.md` | Merlin / Sangraal | `MER` | S9E19 → Film *Ark of Truth* |
| `arc-sg1-replicateurs.md` | Réplicateurs | `REP` | S3E22 → S8E17 |
| `arc-sg1-sha-harsesis.md` | Sha're & Harsèsis | `SHA` | S1E01 → S4E17 |
| `arc-sg1-sokar.md` | Sokar | `SOK` | S2E18 → S3E13 |
| `arc-sg1-jaffa.md` | Rébellion Jaffa / Teal'c | `TEA` | S1E02 → S10 |
| `arc-sg1-tokra.md` | Tok'ra | `TOK` | S2E02 → S8E19 |

### Arcs Atlantis (`knowledge/arcs/`)

| Fichier | Arc | Code | Portée |
| :--- | :--- | :--- | :--- |
| `arc-sga-anciens-lanteans.md` | Anciens Lantéens | `SGA-ANC` · `SGA-ATL` | S1E01 → S5 |
| `arc-sga-asurans.md` | Asurans / Réplicateurs Pégase | `SGA-ASU` | S3E05 → S4E12 |
| `arc-sga-expedition.md` | Expédition Atlantis — Fondation | `SGA-EXP` | S1E01 → S2E01 |
| `arc-sga-genii.md` | Genii | `SGA-GNI` | S1E08 → S3E17 |
| `arc-sga-ioa.md` | IOA / Commandement | `SGA-IOA` | S2E12 → S5 |
| `arc-sga-michael.md` | Michael | `SGA-MCH` | S2E18 → S5E19 |
| `arc-sga-teyla.md` | Teyla / Athosiens | `SGA-TEY` | S1E01 → S5 |
| `arc-sga-wraith.md` | Wraith | `SGA-WR` | S1E01 → S5E20 |
| `arc-sga-crossovers.md` | Crossovers SG-1 / SGA | `CROSS` | S8 SG-1 / S10 SG-1 / S4 SGA |

---
## Deployment Rules

> Ces règles sont **obligatoires** — elles s'appliquent à toute lecture, analyse ou production d'arcs narratifs.

1. **Source exclusive** : N'utiliser que les fichiers dans `knowledge/arcs/`. Les anciens fichiers de période (`sg1-arcs-s*.md`, `sga-arcs-s1s5.md`, `sg1-arcs-narratifs.md`) sont archivés et ne doivent pas être consultés.
2. **Navigation obligatoire par l'index** : Toujours commencer par lire `knowledge/INDEX.md` pour identifier le code d'arc et le fichier cible avant d'ouvrir un fichier arc.
3. **Découpage multi-planètes** : Décomposer les épisodes multi-planètes en étapes distinctes si le changement de lieu implique un changement narratif ou d'enjeu significatif.
4. **Épisodes "filler"** : Ne qualifier un épisode de filler que s'il ne contribue à aucun thème ni à aucun arc de personnage — cas rare dans Stargate. Présenter une justification explicite.
5. **Liens de dépendance** : Maintenir systématiquement les liens de prérequis entre arcs (ex. : rencontrer les Tok'ra est un prérequis à de nombreuses étapes d'infiltration Goa'uld). Utiliser les codes d'arc (`APO`, `TOK`, `SGA-WR`…) pour les références croisées.
6. **Validation canonique** : Croiser avec `stargate-specialist` en cas de doute sur la précision canonique (sources : Stargate-Fusion, GateWorld, Fandom).
