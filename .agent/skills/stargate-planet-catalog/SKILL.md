---
name: stargate-planet-catalog
description: Extraie et structure de manière exhaustive une base de données de planètes par galaxie dans l'univers Stargate (SG-1, Atlantis, Universe). À utiliser lorsque l'utilisateur demande une liste de planètes ou un catalogage planétaire.
---

# 🪐 Stargate Planet Cataloger

## Vue d'ensemble
L'objectif de ce skill est d'extraire, analyser et structurer une base de données exhaustive des planètes explorées ou évoquées dans l'univers Stargate. Le format de sortie doit être hautement structuré pour permettre une lecture fluide par un humain et un traitement incrémental / parsing par une IA dans divers contextes.

## Méthodologie
1. **Index de Suivi (Reprise)** : Il est formellement interdit de recommencer au début ou de recréer un nouveau fichier orphelin partiel à chaque exécution. L'agent DOIT d'abord lire un fichier `INDEX.md` (situé à la racine du dossier d'export) pour savoir exactement à quelle galaxie, lettre et planète s'est arrêté le dernier lot. Le fichier `INDEX.md` doit être mis à jour systématiquement en fin de tâche.
2. **Arborescence Stricte** : La sortie textuelle n'est pas produite de manière éphémère. Chaque planète doit avoir **son propre fichier Markdown** enregistré physiquement dans l'arborescence : `knowledge/planetes/[Nom_de_la_Galaxie]/[Lettre_Initiale]/[ID_Planete].md` (ex: `knowledge/planetes/Voie_Lactee/A/mw-abydos.md`). L'organisation se fait d'abord par galaxie, puis par lettre.
3. **Exactitude Canonique via Stargate Fusion** : N'extraire les informations que si elles sont sûres à 100% (basées sur le lore canon). Pour les coordonnées DHD, tu **dois impérativement** utiliser la séquence des glyphes indiquée sur le site **Stargate-Fusion.com**. Ne jamais inventer de glyphes.
4. **Calcul de l'ID Planétaire** : Un identifiant unique et calculable doit être généré pour la désignation du fichier Markdown.
   - *Règle* : `[initiales_galaxie]-[nom_kebab_case_ou_designation]`
   - *Exemples* : `mw-chulak` (Milky Way), `mw-p3x-595`, `pg-lantea` (Pegasus), `id-othala` (Ida).

## Format de Sortie des Fichiers Planètes (Markdown Structuré)
Chaque fichier markdown de planète généré doit respecter scrupuleusement la structure suivante :

# 🌍 [Nom de la Planète / Désignation]

- **ID :** `[ID Calculé]`
- **Galaxie :** [Galaxie]
- **Coordonnées (DHD) :** [Glyphe 1, Glyphe 2, 3, 4, 5, 6 | Inconnu]
- **Description :** [Description concise de l'environnement, du climat, de la géographie]

##### 👥 Habitants
*Si aucune population, inscrire "Abandonnée" ou "Inhabitée".*
- **Nom du peuple :** [Race / Nom | Aucun]
- **Description :** [Culture, niveau technologique, type de société]

##### 🎬 Historique Épisodique
*Tu dois être **totalement exhaustif**. L'historique doit lister **TOUS** les épisodes sans exception où la planète est explorée ou mentionnée de manière importante.*
*⚠️ **EXCEPTION MAJEURE** : Ne génère **aucun** historique épisodique pour la **Terre** (Tau'ri, `mw-earth`) ni pour **Lantea** (`pg-lantea`). Laisse la section vide ou inscris "Voir archives dédiées" pour ces deux planètes.*

- **[Série] S[XX]E[YY] - [Titre de l'épisode]**
  - **Protagonistes principaux :** [Membres de SG, expédition, etc. impliqués]
  - **Moments clés (Exploration) :**
    - *EXIGENCE CRITIQUE : Interdiction formelle d'être abstrait ou de faire un résumé global de 2 phrases. Tu dois utiliser ici une liste ou des paragraphes très fournis.*
    - *Liste chronologiquement et minutieusement chaque rebondissement survenu sur cette planète (ex: arrivée, découverte des ruines, infiltration de la base, dialogues/révélations clés, affrontement final, manœuvres d'évasion).*
    - *Le niveau de détail doit être digne d'une encyclopédie spécialisée.*
  - **Bilan de l'exploration :**
    - **Gains :** [Technologies acquises, nouvelles alliances, renseignements]
    - **Pertes :** [Pertes humaines, matériel détruit, échec diplomatique]
    - **Conséquences :** [Impact à long terme, nouveaux ennemis éveillés]
  - **Évaluation des Menaces :**
    - **Niveau de dangerosité :** [Faible | Modéré | Élevé | Critique]
    - **Raison :** [Ex: Environnement toxique, présence Goa'uld massive, zone de sélection Wraith]
    - **Faction propriétaire :** [Goa'uld (préciser le Grand Maître), Wraiths, Anciens, Genii, Neutre, etc.]

---
## Directives pour l'Agent IA
- **Exhaustivité absolue :** Ne pas faire de "sélection" ou de raccourci. Si une planète apparaît dans 14 épisodes, tu dois lister et décrire ces 14 épisodes dans l'historique épisodique.
- **Profondeur narrative (Moments clés) :** Les résumés légers sont STRICTEMENT INTERDITS. Tu dois faire preuve d'une exhaustivité absolue. Rédige un compte rendu très détaillé qui reprend la trame sur la planète minute par minute s'il le faut. Le lecteur doit pouvoir revivre l'épisode en te lisant.
- **Continuité et Indexation :** Obligation stricte de lire `INDEX.md` avant toute création, et de mettre à jour ce fichier d'index après la génération pour que le prochain lot reprenne au bon endroit de l'alphabet.
- **Exceptions d'Historique :** Aucun historique épisodique ne doit être rédigé pour la Terre et pour Lantea (listes démesurées).
- **Coordonnées DHD (Stargate Fusion) :** Renseigne systématiquement l'adresse à 6 glyphes en utilisant les données de l'encyclopédie *Stargate-Fusion.com*. Si et seulement si Stargate Fusion ne possède pas l'adresse officielle, tu pourras indiquer `Inconnu`.
- **Ciblage narratif :** Le résumé épisodique doit se concentrer sur ce qu'il s'est passé *sur / autour de* cette planète, et pas le résumé global de l'épisode en dehors.
- **Rigueur structurelle :** L'imbrication des tailles de titres (`###`, `####`, `#####`) et des listes à puces doit toujours être identique afin de permettre son ingestion programmatique.
