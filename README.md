# 🌌 Stargate : Chronicles (Fan Game & Projet IA)

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

> **⚠️ AVERTISSEMENT LÉGAL (DISCLAIMER) :**
> Ce projet est un "fan game" à but non lucratif développé uniquement pour le divertissement et l'apprentissage. 
> Il n'est en aucun cas affilié à, approuvé par, ou soutenu par Metro-Goldwyn-Mayer (MGM), Amazon Studios, ou les créateurs de la franchise Stargate. 
> Tous les noms, logos, designs de portes, personnages et musiques de l'univers Stargate sont la propriété exclusive de leurs détenteurs respectifs.

---

## 🚀 À propos du projet

Bienvenue sur le repository de **Stargate : Chronicles** ! 
Ce jeu, né d'une passion pour l'univers de la Porte des Étoiles, a un double objectif :
1. **Créer une expérience de jeu hybride** (Gestion / RPG / Stratégie tactique) gratuite pour la communauté.
2. **Expérimenter le développement assisté par IA** avec **Antigravity** et **GitHub Copilot** (via IntelliJ) dans un domaine exploratoire (le développement de jeu vidéo).

**Le Gameplay :**
**Stargate : Chronicles** vous met aux commandes du SGC. Le gameplay est un mélange de :
- **Gestion Stratégique (60%)** : Développement de la Terre, relations politiques (CIS/Pentagone), recherche technologique.
- **Combat Tactique / RPG (40%)** : Commandement de l'escouade SG-Prime en temps réel avec pause (RTwP).
- **Univers Sandbox** : Factions dynamiques et système Nemesis.

👉 **Veuillez consulter le Game Design Document [IDEE.md](./IDEE.md) pour la vision complète.**

---

## 🤖 Développement Dirigé par IA (Antigravity)

Ce projet est expérimentalement guidé de bout en bout par **Antigravity** et **GitHub Copilot** (via IntelliJ), jouant le rôle de **Directeur Technique & Lead Game Developer**.

### Philosophie de développement

- **Exploration SDD** : trois frameworks de Software Design Documentation sont expérimentés en parallèle — **Speckit**, **BMad** et **OpenSpec** — afin d'identifier les pratiques les plus adaptées au projet.
- **Technology-Fit First** : aucune stack n'est imposée a priori. Chaque choix technologique est évalué selon le besoin (performance, maintenabilité, écosystème). Les décisions sont documentées dans [`agent.md`](./agent.md).
- **Clean Architecture / Hexagonale** : séparation stricte Domaine / Application / Infrastructure / Présentation, indépendamment du moteur ou framework retenu.
- **Qualité non négociable** : tous les modules sont couverts par des tests unitaires (TU) et des tests d'intégration (TI). Voir [Stratégie de tests](#-stratégie-de-tests).

### Instructions Auto-Mise à Jour (Antigravity)
Ce fichier est **vivant** et maintenu par l'IA. À chaque étape majeure, l'agent acte :
- **L'état d'avancement** (ce qui fonctionne, ce qui est en cours).
- **L'architecture technique** (moteur, stack, décisions d'architecture).
- **Le roadmap immédiat** (prochaines étapes).

---

## 🧪 Stratégie de Tests

Toute implémentation doit être couverte. La couverture de tests fait partie de la **Définition of Done** de chaque story.

| Couche | Type | Portée |
|---|---|---|
| Domaine / Métier | **TU** | Entités, Value Objects, règles métier, services domaine |
| Application | **TU** | Use Cases / Command Handlers (ports mockés) |
| Infrastructure | **TI** | Adaptateurs DB, APIs, brokers (vrais systèmes) |
| Backend API | **TI** | Endpoints HTTP, contrats d'API |
| Frontend — Composants | **TU** | Logique de présentation, stores/state |
| Frontend — Flux | **TI / E2E** | Parcours utilisateur critiques |

---

## ⚙️ Stack Technique

> **En cours d'évaluation** — chaque décision sera arbitrée selon les critères Technology-Fit First et documentée dans [`agent.md`](./agent.md).

| Domaine | Statut | Notes |
|---|---|---|
| Moteur de jeu | 🔍 À évaluer | Godot, Unity, custom… |
| Backend | 🔍 À évaluer | Ouvert à toute stack adaptée au besoin |
| Frontend / UI | 🔍 À évaluer | Ouvert à toute stack adaptée au besoin |
| Tests | 🔍 À évaluer | Selon stack retenue (ex : Vitest, Playwright…) |
| Agent IA | ✅ Acté | Antigravity + GitHub Copilot (IntelliJ) |

---

## 🛠️ Installation et Jeu (À venir)
1. Téléchargez la dernière version dans l'onglet **Releases** (bientôt disponible).
2. Extrayez l'archive.
3. Lancez `StargateChronicles.exe`.

*(Pour les développeurs)* : 
- Clonez le repo : `git clone https://github.com/dylanbehetre/stargate-command.git`

---

## ⚖️ Licence et Propriété Intellectuelle

### 1. Code Source et Assets Originaux
Le code source de ce projet et les assets créés spécifiquement pour ce jeu sont mis à disposition selon les termes de la licence **Creative Commons Attribution - Pas d'Utilisation Commerciale 4.0 International (CC BY-NC 4.0)**.

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
- **Développement :** [@dylanbehetre](https://github.com/dylanbehetre), Antigravity & GitHub Copilot
- **Inspiré par :** L'oeuvre de Brad Wright et Jonathan Glassner.
- **Remerciements :** À tous les fans de la franchise !
