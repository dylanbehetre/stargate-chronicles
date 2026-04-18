---
name: image-art-direction
description: Directives de direction artistique pour la génération d'images du projet Stargate Chronicles (Style Concept Art Graphic Novel).
---

# Skill : Image Art Direction — Stargate: Chronicles

> **Usage** : Ce skill est la référence absolue pour toute génération d'image dans le projet.
> L'agent DOIT consulter ce document avant de produire, commander ou valider un asset graphique.
> L'objectif est de garantir une cohérence visuelle totale entre tous les assets du jeu et de **respecter scrupuleusement le canon visuel Stargate**.

---

## 🎨 Identité Visuelle Globale — Style Canonique

**"Concept Art Graphic Novel"**
*(Peinture Numérique AAA × Manhwa coréen)*

Le style du jeu est un hybride entre :
- La **peinture numérique cinématique AAA** de Mass Effect 2/3, Halo Reach, Destiny 2 :
  profondeur atmosphérique, éclairages volumétriques, environnements épiques et détaillés
- Le **style manhwa coréen** (Solo Leveling, Tower of God) :
  contours nets et expressifs sur les éléments clés, couleurs vives bien délimitées,
  forts contrastes ombre/lumière, compositions dynamiques et dramatiques

> 🔍 Références visuelles à garder en tête :
> `"Mass Effect 2 environmental concept art"` · `"Halo Reach splash art"` · `"Solo Leveling chapter cover art"` · `"Tower of God panoramic background"` · `"StarCraft 2 cinematic concept art"`

### Les 6 Principes Fondamentaux

| Principe | Description |
|---|---|
| **Contours Graphiques** | Les éléments clés (Porte, personnages, artefacts) ont des contours nets et expressifs façon manhwa. Les fonds restent peints et atmosphériques. |
| **Fort Contraste Clair-Obscur** | Les zones d'ombre sont profondes et franches. Les sources lumineuses (Porte active, technologie alien, soleil) créent des halos intenses. |
| **À-plats de Couleurs Vives** | Les zones de couleur sont nettes et saturées sur les éléments graphiques (tenues, artefacts), fondues et atmosphériques sur les environnements. |
| **Compositions Dynamiques** | Angles dramatiques : contre-plongée sur la Porte, plongée sur les soldats, lignes directrices qui guident l'œil vers le point focal. |
| **Profondeur Atmosphérique** | Premier plan sombre et net, plans intermédiaires détaillés, arrière-plan atmosphérique avec brume/haze. Crée la profondeur cinématique. |
| **Silhouettes Lisibles** | Les personnages sont toujours des silhouettes reconnaissables (casque SGC, armure Jaffa) — jamais de visages. Met en valeur l'environnement. |

---

## 🌌 Stargate Lore Accuracy & Canon Enforcement

> **IMPORTANT** : Les générateurs d'images (Midjourney, DALL-E, etc.) hallucinent ou déforment systématiquement les éléments propres à Stargate s'ils ne sont pas encadrés fermement. L'agent DOIT toujours utiliser CES structures exactes pour forcer l'imagerie canon de la franchise.

### 1. La Porte des Étoiles (Stargate) & L'Horizon
Les IA ont tendance à dessiner des cercles de néons simples ou des anneaux lisses ou magiques.
- **Porte (Voie Lactée)** : `6-meters diameter standing ring made of dark metallic Naquadah, 9 distinct chevron blocks on the outer edge, inner ring covered in intricate constellation symbols`
- **Porte (Pégase)** : `sleek metallic stargate ring, digital glowing cyan constellation symbols, blue luminous chevron blocks`
- **Horizon des événements (Puddle/Kawoosh)** : `shimmering liquid water puddle event horizon, outward ripple effect, glowing blue liquid surface`
- **Negative Prompts obligatoires** : `magic portal, floating magical ring, generic sci-fi hoop, neon circle, energy vortex without metallic ring`

### 2. Le DHD (Dial-Home Device)
L'IA a tendance à faire des claviers ou des socles étranges.
- **Prompt** : `stone pedestal with a slanted circular top, glowing orange central dome surrounded by concentric rings of etched glyph buttons`
- **Negative Prompts obligatoires** : `modern keyboard, computer screen, magical crystal ball`

### 3. Les Équipes SG (Tau'ri)
Ne JAMAIS laisser l'IA générer des Space Marines du futur en armure blindée intégrale ou avec des blasters lasers. SG-1 est militaire/tactique (années 90s-2000s).
- **Prompt Base** : `late 1990s US military gear, P90 submachine guns, olive drab tactical combat vests, PASGT helmets, realistic Earth military combat uniforms, tactical goggles`
- **Negative Prompts obligatoires** : `futuristic space armor, laser blasters, space marine suits, glowing helmet visors, generic sci-fi soldier, mass effect armor`

### 4. Factions Extraterrestres Majeures (Goa'uld & Jaffa)
- **Garde Jaffa** : `Jaffa guard wearing metallic chainmail armor, carrying a long golden staff weapon with an almond-shaped tip, stylized metallic animal-head helmet (Anubis/Horus style)`
- **Seigneurs Goa'uld** : `opulent Ancient Egyptian motifs combined with advanced alien technology, flowing golden robes, glowing eyes, majestic and arrogant posture, dark obsidian and gold architecture`
- **Negative Prompts** : `generic aliens, plasma rifles, medieval fantasy knights`

### 5. Factions Extraterrestres Avancées (Anciens, Wraiths, Asgards, Réplicateurs)
- **Anciens (Lanteans/Atlantis)** : `Ancient Lantean technology, Atlantis-style pristine white and pale blue organic architecture, glowing aquamarine energy conduits, crystal control spires, transparent glowing data screens`
- **Les Wraiths (Pégase)** : `Wraith alien technology, terrifying gothic bio-organic architecture, dark web-like structures in space, pale blue-skinned alien vampires with long white hair, threatening dark leather and organic bone armor`
- **Asgards** : `classic grey alien with large dark eyes and highly advanced smooth grey sleek technology, floating holographic blue consoles, minimalist geometric spaceship interior`
- **Réplicateurs** : `metallic spider-like machine insects, constructed from small metallic geometric blocks, glowing cyan internal light, terrifying swarm effect`

---

## 🌍 Palettes et Mots-Clés par Contexte

### 1. SGC / Installations Terrestres (Salle de Commande & Gateroom)
> L'architecture du SGC (Niveau 28) est unique et incontournable. C'est un silo de missile reconverti.

**Règles structurelles strictes du SGC :**
1. **La vitre blindée** : Sépare la salle de commande (dans l'obscurité relative) de la salle d'embarquement (fortement éclairée). Elle est toujours inclinée vers le bas.
2. **Le pupitre de composition** : Ordinateurs massifs des années 90 (moniteurs CRT cathodiques), écrans affichant des *symboles de chevrons rouges sur fond noir*. Pas d'hologrammes. Un gros micro sur pied rouge ou noir.
3. **La carte stellaire** : Un immense panneau lumineux gravé en verre affichant une constellation galactique.
4. **La rampe de la Porte** : La Porte ne touche pas le sol, elle trône au sommet d'une lourde rampe métallique en pente grillagée.

| | Couleur | Hex |
|---|---|---|
| Primaire | Béton brut bunker | `#2A2A2A` |
| Primaire | Vert militaire olive | `#4A5A3A` |
| Secondaire | Acier bleuté des portes blindées | `#3A4A5A` |
| Accent danger | Chevrons et alarmes DEFCON rouges | `#FF2200` |
| Accent lumière | Blancheur puissante de la rampe en titane | `#E0E0E0` |

**Mots-clés prompt** :
`SGC underground military bunker interior, raw concrete walls, thick angled glass window overlooking the gateroom, huge glowing glass star map on the back wall, bulky 1990s CRT computer monitors displaying red constellation symbols on black screens, DEFCON warning lights, heavy metal boarding ramp leading up to the Stargate in the background`

---

### 2. Biome — Désert / Planète Aride
> Soleil brutal, ruines ensablées, vent de sable.

| | Couleur | Hex |
|---|---|---|
| Primaire | Sable ocre brûlé | `#C8864A` |
| Primaire | Pierre érodée | `#8B6A3A` |
| Secondaire | Ciel coucher de soleil | `#D4501A` |
| Secondaire | Ombre froide | `#2A3A5A` |
| Accent | Reflet doré intense | `#FFD07A` |

**Mots-clés prompt** :
`alien desert planet, scorching sun, vast sand dunes, ancient crumbling ruins half-buried, heat shimmer, dramatic sunset sky, two moons, harsh shadows, AAA concept art style, manhwa bold linework on foreground elements, cinematic composition`

---

### 3. Biome — Forêt / Jungle Alien
> Végétation dense non-terrestre, mystère et danger caché.

| | Couleur | Hex |
|---|---|---|
| Primaire | Vert émeraude profond | `#1A4A2A` |
| Primaire | Vert mousse | `#3A6A4A` |
| Secondaire | Lumière filtrée jaune-vert | `#B8D870` |
| Accent | Bioluminescence cyan | `#00D4AA` |
| Accent | Violet alien | `#7A3A9A` |

**Mots-clés prompt** :
`alien jungle planet, towering ancient trees, dense canopy, god rays piercing through leaves, bioluminescent plants, morning mist at ground level, mysterious atmosphere, non-terrestrial flora, AAA concept art, manhwa high contrast lighting, cinematic wide shot`

---

### 4. Biome — Arctique / Planète Glaciale
> Vents hurlants, glace millénaire, technologie enfouie.

| | Couleur | Hex |
|---|---|---|
| Primaire | Blanc glacier | `#D8ECFF` |
| Primaire | Bleu glace profond | `#2A5A8A` |
| Secondaire | Gris tempête | `#6A7A8A` |
| Accent | Énergie Ancienne | `#00FFF2` |

**Mots-clés prompt** :
`frozen alien tundra, blizzard, towering ice formations, buried ancient structure glowing beneath ice, cyan energy glow, arctic storm sky, desolate, AAA digital painting, manhwa style strong contrast`

---

### 5. Biome — Volcanique / Monde en Feu
> Chaleur infernale, lave, cendres, monde condamné.

| | Couleur | Hex |
|---|---|---|
| Primaire | Noir basalte | `#1A1010` |
| Primaire | Rouge lave | `#C83010` |
| Secondaire | Orange incandescent | `#FF6820` |
| Accent | Jaune soufre | `#D4B000` |

**Mots-clés prompt** :
`volcanic alien planet, rivers of lava, ash clouds, oppressive heat, cracked obsidian ground, apocalyptic sky, dramatic hellish lighting, AAA concept art digital painting, manhwa bold silhouettes against fire`

---

### 6. Technologie Goa'uld
> Pyramides colossales, or massif, hiéroglyphes aliens, opulence menaçante.

| | Couleur | Hex |
|---|---|---|
| Primaire | Or Goa'uld | `#C9A227` |
| Primaire | Noir obsidienne | `#150A05` |
| Secondaire | Rouge sang rituel | `#7A1010` |
| Accent | Éclat doré | `#FFD700` |
| Accent | Yeux Goa'uld | `#FFEE00` |

**Mots-clés prompt** :
`Goa'uld pyramid interior, massive gold and black Egyptian-alien architecture, glowing hieroglyphs, torchlight and braziers casting long shadows, oppressive grandeur, alien god aesthetic, AAA concept art, manhwa dramatic lighting and bold gold outlines`

---

### 7. Technologie des Anciens (Lantéens)
> Sérénité transcendante, architecture organique, énergie pure, cristaux vivants.

| | Couleur | Hex |
|---|---|---|
| Primaire | Blanc-bleu lumineux | `#E0F4FF` |
| Primaire | Aquamarine | `#00D4AA` |
| Secondaire | Gris perle | `#B8C8D8` |
| Accent | Lumière ZPM | `#00FFF2` |

**Mots-clés prompt** :
`Ancient Lantean technology, Atlantis-style white-blue organic architecture, aquamarine energy conduits, crystalline spires, inner glow, transcendent calm, advanced beyond comprehension, AAA concept art, manhwa clean bold lines on architectural details`

---

### 8. Moments de Mission — Tension Dramatique
> Scènes d'action, découvertes, rencontres. Le cœur narratif.

**Règles spécifiques aux moments de mission** :
- La **Porte des Étoiles** doit être visible quand la scène s'y prête (rappelle toujours le contexte)
- Les soldats SGC sont en **BDU (Battle Dress Uniform)** — tenue de combat kaki/vert, casque PASGT
- Les **silhouettes** doivent être reconnaissables et expressives (posture de combat, de découverte, de fuite)
- L'éclairage doit refléter l'**émotion** de la scène (tension = rouge/orange, découverte = cyan/blanc, danger = contre-jour dur)

**Mots-clés prompt communs** :
`SGC soldiers in military BDU uniforms, silhouettes, dramatic pose, cinematic composition, rule of thirds, [CONTEXTE SPÉCIFIQUE], AAA concept art digital painting, manhwa high contrast bold outlines, atmospheric depth, movie poster quality`

---

## 📝 Templates de Prompt Complets

### Template Universel (Intégrant le Canon)
```
[STYLE_BASE], [SUJET_PRINCIPAL/MOMENT], [PRECISION_CANON], [LIEU/BIOME],
[DÉTAILS_LUMIERE_AMBIANCE], [COMPOSITION], [PRÉSENCE_PERSONNAGES_CANON],
AAA concept art digital painting, manhwa style bold outlines on key elements,
high contrast lighting, atmospheric depth, cinematic, detailed background,
no text, no watermark, no UI elements
```

### Exemple 1 — `desert.webp` (Découverte de Porte)
```
AAA concept art digital painting, manhwa bold linework, alien desert planet,
6-meters diameter standing ring made of dark metallic Naquadah, 9 distinct chevron blocks, 
shimmering liquid water puddle event horizon with blue outward ripples,
scorching orange-red sky with two visible moons, heat shimmer rising from cracked ground,
two SGC soldier silhouettes in late 1990s olive drab US military gear approaching the ring, 
deep cold shadows contrasting warm sunlight, cinematic composition,
no text, no watermark
```

### Exemple 2 — `forest.webp` (Embuscade)
```
AAA concept art digital painting, manhwa high contrast style, alien jungle planet,
ancient towering non-terrestrial trees, dense alien canopy, god rays of light,
bioluminescent cyan moss on bark, thick morning mist at ground level,
SGC team silhouettes cautiously moving between trees, weapons raised,
deep emerald and teal palette with cyan accent glows, mysterious threatening atmosphere,
cinematic wide shot, atmospheric depth, detailed foreground foliage,
no futuristic armor, no neon circles, no text
```

### Exemple 3 — `ruins.webp` (Exploration SG)
```
AAA concept art digital painting, manhwa dramatic linework, alien ruins discovery,
crumbling stone temple, stone pedestal with a slanted circular top and orange central glowing dome,
crepuscular golden light breaking through storm clouds,
four SGC soldiers silhouetted in BDU gear and PASGT helmets exploring cautiously,
teal energy Ancient glyph faintly glowing on a stone pillar,
sense of wonder mixed with danger, cinematic rule of thirds,
no futuristic armor, no neon circles, no text
```

---

## 🚫 Negative Prompts Universels (À toujours inclure)

```
photorealistic, photograph, real photo, chibi, super deformed, simple cartoon,
western comic flat colors, sketch, pencil only, watercolor wash (without paint detail),
low quality, blurry, oversaturated neon without context, cluttered composition,
text in image, watermark, signature, logo, UI elements, HUD,
modern human architecture, cars, contemporary Earth objects,
magic portal, floating magical ring, generic sci-fi hoop, neon circle, energy vortex without metallic ring,
modern keyboard, magic crystal ball, generic aliens, futuristic space marines, laser blasters, generic spaceship corridor, fantasy armor, medieval knights
```

---

## 📁 Convention de Nommage et Organisation

```
src/ui/assets/
├── biomes/
│   ├── desert.webp          # Planètes désertiques / arides
│   ├── forest.webp          # Planètes forestières / jungles
│   ├── arctic.webp          # Planètes glaciales
│   ├── volcanic.webp        # Planètes volcaniques
│   ├── swamp.webp           # Planètes marécageuses
│   └── ocean.webp           # Planètes océaniques / aquatiques
├── moments/
│   ├── ruins.webp           # Découverte de ruines
│   ├── ambush.webp          # Embuscade ennemie
│   ├── artifact.webp        # Activation d'artefact alien
│   ├── extraction.webp      # Extraction sous le feu
│   └── first-contact.webp   # Premier contact avec une espèce
└── factions/
    ├── goa-uld-pyramid.webp  # Décor intérieur Goa'uld
    ├── ancient-chamber.webp  # Salle des Anciens
    └── asgard-ship.webp      # Vaisseau Asgard
```

**Règles fichiers :**
- Format : `.webp` obligatoire
- Résolution biomes : `1280×720` minimum (ratio 16:9)
- Résolution moments : `1024×576` minimum (ratio 16:9)
- Poids cible : < 400 Ko par image (optimisation WebP)

---

## ✅ Checklist de Validation Avant Intégration

- [ ] Le style est reconnaissablement **"Concept Art Graphic Novel"** (peinture numérique + contours manhwa)
- [ ] La **palette de couleurs** correspond au contexte (biome ou faction concerné)
- [ ] L'**éclairage est dramatique** et à fort contraste (manhwa)
- [ ] La **composition est cinématique** (règle des tiers, profondeur atmosphérique)
- [ ] Les **personnages sont en silhouettes** — aucun visage identifiable
- [ ] **Aucun élément photo-réaliste** ni chibi/cartoon simple visible
- [ ] Les éléments de la franchise (Porte, DHD, Armes, Soldats) respectent les directives strictes de **Canon Enforcement**
- [ ] **Aucune hallucination générique d'IA** (pas d'armure de Space Marine, pas de portail magique flottant)
- [ ] Les soldats sont bien des **SGC équipés fin années 1990s**
- [ ] Le fichier est en `.webp`, < 400 Ko, nom conforme à la convention
- [ ] L'image est **cohérente** avec les autres assets déjà intégrés
