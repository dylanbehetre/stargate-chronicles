---
name: stargate-sgc-base-builder
description: Guide de référence architectural et de Game Design pour la modélisation du SGC en vue de coupe (mode "Fallout Shelter") dans Godot.
---

# stargate-sgc-base-builder

Ce skill fournit une référence exhaustive et canonique de la structure du **Stargate Command (SGC)**, conçue pour guider le développement du mode "Base Builder" (vue en coupe 2D façon *Fallout Shelter*) du projet *Stargate Chronicles*.

## 🎯 Objectif du Skill

Fournir aux agents de développement et d'UX design les données nécessaires pour :
1. **Générer des scènes Godot (`Sprite2D`, `TileMap`, `CollisionShape2D`)** qui respectent l'agencement exact du complexe de Cheyenne Mountain.
2. **Lier l'infrastructure aux mécaniques de gestion préexistantes** (Budget, Recherche, Gestion du Personnel, Sécurité).
3. **Respecter la verticalité canonique**, notamment pour les salles multi-niveaux et le puits d'ascenseur principal.

## 📐 Règles Architecturales et Grille 2D (Godot)

Le SGC est un ancien silo à missiles nucléaires reconverti. L'architecture globale est un cylindre de béton armé profond de 28 niveaux.

- **Unité de Cellule (Godot Grid)** : Pour le *Base Builder*, une "Cellule Standard" correspond à une salle de taille moyenne (ex: un laboratoire ou un quartier d'officier).
- **L'Ascenseur Central** : Il constitue la colonne vertébrale de l'interface. Dans Godot, il doit être l'axe Y autour duquel les salles s'étendent horizontalement (axe X).
- **Les Salles Spéciales (Multi-cellules)** :
  - *La Salle de la Porte (Gateroom)* : Elle occupe l'espace du fond du silo. Elle fait **plusieurs cellules de hauteur** (couvrant au moins le Niveau 28 et le Niveau 27). Son `Sprite2D` et son bloc de collision doivent refléter cette immensité.

## 🎨 Direction Artistique

Pour la génération d'images, de sprites et la définition des ambiances visuelles (couleurs, éclairages, décors industriels de bunker), **vous devez obligatoirement consulter et utiliser le skill `image-art-direction`**. Ce skill complémentaire garantit que les *assets* générés pour le SGC respectent le style "Concept Art Graphic Novel" et "Military Industrial" du projet.

## 📂 Base de Connaissances (Knowledge Base)

Les données canoniques, niveau par niveau et salle par salle, sont réparties dans le dossier `knowledge/` de ce skill. Chaque fichier documente l'utilité, l'historique et les liaisons gameplay des salles.

- `knowledge/niveaux_01_10.md` : Surface, Administration et Stockage.
- `knowledge/niveaux_11_20.md` : Personnel, Recherche générale et Vie dans la base.
- `knowledge/niveaux_21_28.md` : Commandement, Confinement, Salle de la Porte et Infrastructures critiques.

---

## ⚙️ Mécaniques de Gameplay Associées (Intégration)

Lors de l'implémentation d'une salle en jeu, liez-la aux systèmes existants :
- **Ressources / Budget (`ResourceManager`)** : Les salles nécessitent un coût d'entretien. Certaines salles génèrent du revenu ou débloquent des budgets (ex: Salle de Briefing via des succès diplomatiques).
- **Points de Recherche** : Générés par les Laboratoires (Niveaux 15, 17, 25, 26).
- **Personnel / Capacité** : Les quartiers (Niveaux 9-10) et le Mess (Niveaux 12-13) déterminent la capacité d'accueil et le moral de la base.
- **Défense / Sécurité** : L'armurerie (Niveau 28) et l'Iris sont cruciaux pour contrer les invasions lors des événements aléatoires (combats dans la base).
