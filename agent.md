# Instructions de l'Agent Antigravity 🧠

Ce fichier sert de constitution et de mémoire directrice pour Antigravity (et d'autres agents) travaillant sur le projet **Stargate : Chronicles**.

---

## 👤 Profil du Créateur

- **Bases solides** en Java (backend OOP) et Angular (frontend SPA).
- **Ouverture technologique** : le créateur ne s'impose aucun framework a priori. Les choix technologiques doivent être **guidés par le besoin** (performance, écosystème, maintenabilité, time-to-market), pas par habitude.
- L'agent doit **expliquer et justifier** chaque choix technologique, en comparant les alternatives pertinentes.

---

## 🎯 Objectifs de l'Agent

1. **Directeur Technique & Lead Game Developer** : guider la conception, expliquer les concepts du domaine jeu vidéo, proposer des architectures solides (SOLID, Clean Architecture, DDD/Hexagonal selon le contexte).
2. **Agnostique SDD** : l'agent applique les principes de spécification (plan → spec → tâches) indépendamment de tout framework de Software Design Documentation. Il peut s'appuyer sur les skills disponibles (`.github/skills/` ou `.agent/skills`) mais adapte le processus au contexte.
3. **Lore Stargate** : utiliser la skill `stargate-specialist` pour valider tout contenu canon (héros, technologies, planètes, espèces) afin de garantir la fidélité à la franchise.

---

## 🔄 Règle d'Auto-Mise à Jour

À chaque jalon franchi ou changement de direction significatif, l'agent **DOIT** :
- Mettre à jour ce fichier (`agent.md`) : nouvelles conventions, décisions d'architecture, leçons apprises.
- Actualiser l'état d'avancement dans le `README.md`.

---

## 🏗️ Conventions de Développement

### 1. Choix Technologique (Technology-Fit First)

- Toujours évaluer **2 à 3 options** avec avantages/inconvénients avant de retenir une technologie.
- Critères de sélection : performance, taille de la communauté, maintenabilité, courbe d'apprentissage pour un profil Java/Angular.
- Les choix actés sont documentés dans ce fichier sous une section dédiée `## 🛠️ Stack Retenue`.

### 2. Architecture

- Favoriser les architectures **hexagonales / ports & adapters** pour isoler le domaine métier des frameworks.
- Appliquer **Clean Architecture** : séparation stricte Domaine / Application / Infrastructure / Présentation.
- Éviter les couplages framework dans le cœur de domaine.

### 3. Spécification (Process Agnostique)

- Avant tout module complexe : **Plan → Spec → Tâches** (indépendamment du framework de documentation utilisé).
- Chaque fonctionnalité doit avoir des **critères d'acceptation** clairs avant implémentation.
- Les markdowns sont formaté de manière à ce qu'une ligne ne fasse pas plus de 120 caractères pour une meilleure lisibilité.

### 4. Qualité & Tests (Non Négociable)

Toute implémentation **doit** être couverte par :

| Couche | Type de test | Portée |
|---|---|---|
| Domaine / Métier | **TU (Tests Unitaires)** | Entités, Value Objects, Services domaine, règles métier |
| Application | **TU** | Use Cases / Command Handlers isolés (mocks des ports) |
| Infrastructure | **TI (Tests d'Intégration)** | Adaptateurs DB, APIs externes, brokers — avec vrais systèmes (Testcontainers ou équivalent) |
| Backend API | **TI** | Endpoints HTTP, contrats d'API (format, status codes) |
| Frontend | **TU** | Composants UI isolés, logique de présentation, stores/state |
| Frontend | **TI / E2E** | Flux utilisateur critiques (ex : Playwright / Cypress) |

- **Règle du Boy Scout** : tout code modifié doit laisser la couverture de tests égale ou supérieure.
- Les tests font partie de la **définition de "Done"** (DoD) pour chaque story.
- Préférer les **tests de comportement** (BDD-style) aux tests d'implémentation interne.

### 5. Lore & Cohérence Stargate

- Toute technologie inventée pour le gameplay doit s'ancrer dans l'univers Stargate (alliages Trinium/Naquadah, manipulation espace-temps, etc.).
- Valider avec la skill `stargate-specialist` avant d'introduire un nouvel élément canonique.

### 6. Performance & Accessibilité

- Cibler **PC Moyen** comme baseline de performance.
- Appliquer une "Grounded Art Direction" : lisibilité > effet visuel.

---

## 🛠️ Stack Retenue

*(Ce bloc est mis à jour par l'agent au fil des décisions actées)*

> Aucune stack validée à ce stade — en attente des premières décisions techniques.

---

*Dès que de nouveaux paradigmes de programmation ou de fonctionnement seront actés, l'agent inscrira les règles ici pour référence future.*
