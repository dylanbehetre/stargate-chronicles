---
trigger: always_on
---

# stargate-command Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-04-15

## Active Technologies
- JavaScript (ES2023 Modules) + Vite 6.x, Vitest 2.x, Capacitor.js (Phase 1 encapsulation) (003-sgc-interface-redress)
- `localStorage` via `IStorageRepository` implementation (003-sgc-interface-redress)

- **Language**: JavaScript (ES2023 Modules) — Vanilla JS sans framework, domaine pur testable sans DOM
- **Build Tool**: Vite 6.x
- **Testing**: Vitest 2.x
- **Runtime**: Node.js 22 LTS (dev/build uniquement)
- **Storage**: `localStorage` (navigateur) via interface `IStorageRepository`
- **Styling**: Vanilla CSS3 (custom properties, keyframe animations)
- **Portage mobile Phase 1** : Encapsulation Capacitor.js sans réécriture (la web app est responsive + offline-first).
- **Future Phase 3+** : Réévaluer **Godot 4** une fois la logique de gestion stabilisée. Godot exporte vers PC, mobile (Android/iOS) et web, et gère la 2D managériale ET la 3D tactique (RTwP Phase 7). La séparation domaine/UI déjà en place facilite la migration.

## Project Structure

```text
src/
├── domain/         # Logique pure — aucune référence DOM autorisée
│   ├── entities/
│   ├── services/
│   └── repositories/
├── infrastructure/ # Adaptateurs (LocalStorage)
├── data/           # JSON statiques (planètes canon, templates CR, glyphes)
├── ui/             # Composants, animations, assets
└── styles/         # CSS thème SGC + animations

tests/
├── domain/         # Tests Vitest — purement JS, sans DOM
└── infrastructure/

specs/001-sgc-command-interface/  # Documentation de la feature active
```

## Commands

```bash
npm run dev       # Lancer en développement (Vite)
npm run build     # Build de production
npm run test      # Tests Vitest (domaine + infrastructure)
npm run preview   # Prévisualiser le build
```

## Code Style

- Modules ES (`import`/`export`) — pas de CommonJS
- Domaine (domain/) : aucun import de `document`, `window`, `localStorage` — injectés par DI
- Conventions de nommage : PascalCase pour les entités, camelCase pour les services et fonctions
- Les enums sont des objets `Object.freeze({})` en JS pur

## Architecture Rules (Constitution IV)

- `domain/` ne doit JAMAIS importer depuis `ui/` ou `infrastructure/`
- `infrastructure/` implémente les interfaces de `domain/repositories/`
- `ui/` orchestre les services via injection, sans logique métier propre
- Toute logique de règle du jeu (danger, mission résolution, validation adresse) → `domain/services/`

## Design Theme

- **Couleurs SGC canon** :
  - **`#00c8ff`** — Bleu cyan : couleur de l'horizon d'événements de la porte ET des systèmes holographiques de la salle de commande (SG-1 saisons 6+, Atlantis). Correspond au bleu de l'eau du vortex.
  - **`#0a0e14`** — Noir spatial profond : fond des écrans de la salle de commande du SGC (terminaux noirs typiques des bases militaires de la série).
  - **Alternative CRT** : Si l'époquenarrée correspond aux premières saisons de SG-1, le vert terminal `#00ff41` (phosphore) peut être utilisé pour les panneaux texte uniquement, en ode aux vieux écrans du SGC de 1997-2002.
  - **Conclusion** : Les deux choix sont cohérents avec le canon. Le bleu cyan privilégié dans le plan reflète l'ambiance générale de la franchise (porte, hologrammes) ; le vert CRT est préféré pour les systèmes texte anciens.
- **Typographie UI**: `'Rajdhani'` ou `'Eurostile'` (style militaire/sci-fi)
- **Typographie narrative (CR)**: `'Noto Serif JP'` (style anime)
- **Esthétique**: Terminaux CRT + scanlines + style anime japonais cohérent

## Recent Changes
- 003-sgc-interface-redress: Added JavaScript (ES2023 Modules) + Vite 6.x, Vitest 2.x, Capacitor.js (Phase 1 encapsulation)

- feature/speckit_game_specs: SGC Command Interface MVP — spec + plan + data-model + contracts établis (2026-04-14)

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
