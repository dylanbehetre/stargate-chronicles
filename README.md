# 🌌 Stargate: Chronicles (Fan Game & Projet IA)

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

> **⚠️ AVERTISSEMENT LÉGAL (DISCLAIMER) :**
> Ce projet est un "fan game" à but non lucratif développé uniquement pour le divertissement et l'apprentissage. 
> Il n'est en aucun cas affilié à, approuvé par, ou soutenu par Metro-Goldwyn-Mayer (MGM), Amazon Studios, ou les créateurs de la franchise Stargate. 
> Tous les noms, logos, designs de portes, personnages et musiques de l'univers Stargate sont la propriété exclusive de leurs détenteurs respectifs.

---

## 🚀 À propos du projet

Bienvenue sur le repository de **Stargate: Chronicles** ! 
Ce jeu, né d'une passion pour l'univers de la Porte des Étoiles, a un double objectif :
1. **Créer une expérience de jeu hybride** (Gestion / RPG / Stratégie tactique) gratuite pour la communauté.
2. **Expérimenter le développement assisté par IA** avec l'aide d'**Antigravity** et l'écosystème de **Spec Kit** dans un domaine exploratoire (le développement de jeu vidéo).

**Le Gameplay :**
**Stargate: Chronicles** vous met aux commandes du SGC. Le gameplay est un mélange de :
- **Gestion Stratégique (60%)** : Développement de la Terre, relations politiques (CIS/Pentagone), recherche technologique.
- **Combat Tactique / RPG (40%)** : Commandement de l'escouade SG-Prime en temps réel avec pause (RTwP).
- **Univers Sandbox** : Factions dynamiques et système Nemesis.

👉 **Veuillez consulter le Game Design Document [IDEE.md](./IDEE.md) pour la vision complète.**

---

## 🤖 Développement Dirigé par AI (Spec Kit & Antigravity)

Ce projet est expérimentalement guidé de bout en bout par l'Agent Antigravity.

## 🚀 État d'avancement (Phase 1 - MVP)

**Dernière mise à jour (14/04/2026) :** 
L'interface de commandement du SGC (Phase 1) est désormais fonctionnelle et implémentée.

### Ce qui est opérationnel :
- **Dialing Computer** : Sélection de planètes canoniques et numérotation manuelle (7 chevrons).
- **Sondage MALP** : Reconnaissance automatisée, révélation de biomes et animations de transmission.
- **Missions SG** : Déploiement d'équipes, gestion du danger (MIA) et génération de rapports narratifs.
- **Système de Diagnostic** : 100% de couverture de tests sur le domaine logique.

---

## 🛠️ Installation et Jeu

### Prérequis
- [Node.js 22 LTS](https://nodejs.org/) ou supérieur.

### Démarrage rapide
1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Ouvrez votre navigateur sur `http://localhost:5173`.

### Tests
Pour lancer la suite de tests unitaires (Vitest) :
```bash
npm test
```

---

## ⚙️ Stack Technique (Phase 1)

- **Moteur/Bundler** : [Vite 6.x](https://vitejs.dev/) (Vanilla JS / ES Modules)
- **Styling** : Vanilla CSS3 (Custom properties, Keyframes, CRT Filters)
- **Logique Domaine** : Plain JavaScript (Clean Architecture)
- **Persistance** : `localStorage` via Repository Pattern
- **Testing** : [Vitest 2.x](https://vitest.dev/)
- **Outils AI** : Antigravity, GitHub Spec Kit

---

## ⚖️ Licence et Propriété Intellectuelle

### 1. Code Source et Assets Originaux
Le code source de ce projet et les assets créés spécifiquement pour ce jeu sont mis à disposition selon les termes de la licence **Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International (CC BY-NC 4.0)**.

**Cela signifie que :**
- ✅ Vous pouvez jouer, modifier et redistribuer le code gratuitement.
- ❌ **Usage Commercial Interdit :** Personne n'a l'autorisation de vendre ce jeu, de l'utiliser pour générer des revenus publicitaires, ou d'inclure des micro-transactions.

### 2. Droits des Ayants Droit (Stargate)
L'entité légale détentrice de la licence **Stargate** (MGM/Amazon) conserve tous les droits sur l'univers. En tant qu'auteur de ce fan-game, je m'engage à :
- Ne jamais monétiser ce projet.
- Supprimer ce dépôt immédiatement sur simple demande officielle des ayants droit.
- Reconnaître que seule l'entité possédant la licence officielle Stargate a le droit de commercialiser un produit basé sur cet univers.

---

## 🤝 Crédits
- **Développement :** [@dylanbehetre](https://github.com/dylanbehetre) & Agent Antigravity
- **Inspiré par :** L'oeuvre de Brad Wright et Jonathan Glassner.
- **Remerciements :** À tous les fans de la franchise !
