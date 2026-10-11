# Architecture

> For the full game design vision, see the root [IDEE.md](../../IDEE.md) (exploratory brainstorm, not a binding
> specification).

## Repository layout

The repository hosts two independent products, each with its own frontend (and, for the game, a backend):

```
stargate-chronicles/
├── specs/                                              # Documentation (this is where you are)
├── stargate-chronicles-game/                            # The playable game
│   ├── stargate-chronicles-ui/                          # Angular app: player-facing game interface
│   └── stargate-chronicles-backend/
│       └── game-backend/                               # Spring Boot app: game API and persistence
└── stargate-chronicles-resources-manager/
    └── stargate-chronicles-resource-manager/             # Angular app: community content/resource manager
```

## Applications

### `stargate-chronicles-ui` (Game frontend)

- **Stack:** Angular 22 (standalone components, signals, Vitest for unit tests).
- **Role:** the player-facing interface for the game (base management, squad/RPG screens, exploration, combat UI).
- **Status:** project scaffold generated with Angular CLI, no feature screens implemented yet.
- **Conventions:** see the app's own
  [`AGENTS.md`](../../stargate-chronicles-game/stargate-chronicles-ui/AGENTS.md) for Angular/TypeScript/accessibility
  rules that apply to all code in this app.

### `game-backend` (Game backend)

- **Stack:** Spring Boot 4.1.1, Java 25, SQLite (via `sqlite-jdbc`), Spring Data JPA, Actuator.
- **Role:** exposes the game API (rules engine, persistence of characters/campaigns, etc.) consumed by
  `stargate-chronicles-ui`.
- **Status:** project scaffold generated with Spring Initializr, no domain code implemented yet.

### `stargate-chronicles-resource-manager` (Community resource manager)

- **Stack:** Angular 22 (standalone components, signals, Vitest for unit tests).
- **Role:** tooling for the community to create/manage game content (characters, planets, equipment, etc.) that
  feeds into the game.
- **Status:** project scaffold generated with Angular CLI, no feature screens implemented yet.
- **Note:** the root `README.md` roadmap anticipates a dedicated backend for this app; it does not exist yet. Keep
  this document and the root `README.md` progress table in sync once it is created.

## Tooling

- Tool versions (Java, Node) are pinned via [`mise.toml`](../../mise.toml) at the repository root.
- Each Angular app has its own `package.json`, `.editorconfig`, and `.prettierrc`.
- The backend uses Maven (via the `mvnw` wrapper) and SQLite as its embedded database.
- **UI component library:** Angular Material is installed in both Angular apps and is the exclusive component
  library (see [Conventions](./conventions.md#ui-component-library)). Tailwind CSS remains available for layout
  and utility styling, but components (buttons, dialogs, forms controls, tables, etc.) must come from Angular
  Material.

## Related documentation

- [Getting started](./getting-started.md) — how to install tools and run each application.
- [Conventions](./conventions.md) — coding and contribution conventions.
- [Features](../features/README.md) — functional specifications, organized by business domain.
