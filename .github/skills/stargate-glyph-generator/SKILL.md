---
name: stargate-glyph-generator
description: Génère et gère les coordonnées (glyphes) des planètes dans l'univers Stargate en assurant l'unicité et la cohérence via un index interne. À utiliser pour toute recherche ou création d'adresse de Porte des Étoiles.
---

# 🌌 Stargate Glyph Generator

## 🎯 Objectif
Ce skill est le garant de la cohérence cartographique du réseau des Portes des Étoiles. Il permet de retrouver ou de générer des adresses à 6 glyphes (coordonnées spatiales) pour n'importe quelle planète, en évitant strictement les doublons et en respectant le lore canonique.

## 🛠️ Méthodologie Opérationnelle

### 1. Initialisation & Lecture de l'Index
Avant toute opération, l'agent **DOIT** lire le fichier de référence :
`file:///.github/skills/stargate-glyph-generator/knowledge/COORDINATES_INDEX.md`

### 2. Recherche d'Adresse
- Si la planète demandée est déjà dans l'index, retourner l'adresse stockée.
- Si la planète n'est pas dans l'index :
    - Vérifier si une adresse **canonique** existe (via connaissances internes ou recherche Stargate-Fusion).
    - Si oui, l'utiliser.
    - Si non (planète personnalisée ou adresse inconnue), passer à la **Génération**.

### 3. Protocole de Génération (Algorithme "Gate-Lock")
Pour garantir l'unicité sans base de données complexe, l'agent suit ces règles :
1. **Set de Glyphes** : Utiliser le set correspondant à la galaxie (38 pour Voie Lactée, 36 pour Pégase).
2. **Calcul** : Choisir 6 glyphes **différents**.
3. **Vérification de Collision** : Comparer la séquence générée avec TOUTES les adresses de l'index pour cette galaxie.
4. **Cohérence P-Number** : Si la planète a une désignation (ex: `P3X-451` ou `M35-117`), l'adresse doit être liée de manière persistante à cet ID.

### 4. Mise à jour de l'Index
Après chaque nouvelle génération, l'agent **DOIT** mettre à jour le fichier `COORDINATES_INDEX.md`.

---

## 📜 Référentiels des Glyphes

### Voie Lactée (38 glyphes)

| ID | Constellation | ID | Constellation | ID | Constellation |
|----|---------------|----|---------------|----|---------------|
| 01 | Crater | 14 | Capricornus | 27 | Auriga |
| 02 | Virgo | 15 | Piscis Austrinus | 28 | Eridanus |
| 03 | Boötes | 16 | Equuleus | 29 | Orion |
| 04 | Centaurus | 17 | Aquarius | 30 | Canis Minor |
| 05 | Libra | 18 | Pegasus | 31 | Monoceros |
| 06 | Serpens Caput | 19 | Sculptor | 32 | Gemini |
| 07 | Norma | 20 | Pisces | 33 | Hydra |
| 08 | Scorpius | 21 | Andromeda | 34 | Lynx |
| 09 | Corona Australis | 22 | Triangulum | 35 | Cancer |
| 10 | Scutum | 23 | Aries | 36 | Sextans |
| 11 | Sagittarius | 24 | Perseus | 37 | Leo Minor |
| 12 | Aquila | 25 | Cetus | 38 | Leo |
| 13 | Microscopium | 26 | Taurus | | |

### Pégase (36 glyphes)
Dans la galaxie de Pégase, les glyphes sont représentés par des constellations stylisées souvent identifiées par des codes numériques de 01 à 36 (ou des noms arbitraires s'ils sont connus). Par défaut, utiliser les IDs `PG-01` à `PG-36`.


---

## 📤 Format de Sortie Standard
L'agent doit présenter les coordonnées de la manière suivante :

**📍 Coordonnées de [Nom de la Planète] ([ID])**
- **Séquence :** `[G1] - [G2] - [G3] - [G4] - [G5] - [G6]`
- **Symboles :** `[Nom G1], [Nom G2], [Nom G3], [Nom G4], [Nom G5], [Nom G6]`
- **Source :** [Canon (Stargate-Fusion) | Généré par Antigravity]

---
*Note : Le 7ème glyphe (Point d'Origine) n'est pas inclus car il est spécifique à la planète d'origine du voyage.*
