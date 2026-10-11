# Architecture

> For the full game design vision, see the root [IDEE.md](../../IDEE.md) (exploratory brainstorm, not a binding
> specification).

## Repository layout

The repository hosts two independent products:

```
stargate-chronicles/
├── specs/                                                      # Documentation (this is where you are)
├── stargate-chronicles-game/                                   # The playable game
│   └── stargate-chronicles-ui/                                 # Angular app: 100% client-side game
└── stargate-chronicles-resources-manager/
    └── stargate-chronicles-resource-manager/                   # Angular app: resource manager frontend
    └── stargate-chronicles-resource-manager-backend/           # Spring Boot app: resource manager API
```

## Applications

### `stargate-chronicles-ui` (Game)

- **Stack:** Angular 22 (standalone components, signals, Vitest for unit tests).
- **Role:** the player-facing interface for the game (base management, squad/RPG screens, exploration, combat UI).
- **Architecture:** the game is **100% Angular, with no backend of its own**, so it can be ported to mobile easily
  later (e.g. Capacitor/Cordova wrapper around the same Angular app). All game content (characters, planets,
  equipment, rules data, etc.) is read **client-side** from the read-only SQLite database produced and pushed by
  `stargate-chronicles-resource-manager-backend` (see below), e.g. via a SQLite WASM build loaded in the browser.
  There is no game server to deploy or keep online.
- **Status:** project scaffold generated with Angular CLI, no feature screens implemented yet.
- **Conventions:** see the app's own
  [`AGENTS.md`](../../stargate-chronicles-game/stargate-chronicles-ui/AGENTS.md) for Angular/TypeScript/accessibility
  rules that apply to all code in this app.

### `stargate-chronicles-resource-manager` (Resource manager frontend)

- **Stack:** Angular 22 (standalone components, signals, Vitest for unit tests).
- **Role:** tooling for the community/maintainer to create and manage all game content (characters, planets,
  equipment, etc.), backed by `stargate-chronicles-resource-manager-backend`.
- **Status:** project scaffold generated with Angular CLI, no feature screens implemented yet.

### `stargate-chronicles-resource-manager-backend` (Resource manager backend)

- **Stack:** Spring Boot 4.1.1, Java 25, Spring Data JPA, Actuator.
- **Role:** the API consumed by `stargate-chronicles-resource-manager` to author/update every game resource.
- **Data flow (source of truth → game):**
  1. **PostgreSQL** is the system of record. Every create/update/delete of a game resource (characters, planets,
     equipment, rules data, ...) goes through this backend and is persisted in PostgreSQL.
  2. An **publish step** (run from this backend) reads the current state from PostgreSQL and (re)generates a
     **SQLite** database file — a denormalized, read-only snapshot of all resources.
  3. That generated SQLite file is the artifact **pushed to/bundled with the game**
     (`stargate-chronicles-ui`), which loads it client-side. The game never talks to PostgreSQL or to this backend
     directly; it only consumes the exported SQLite snapshot.
- **Status:** project scaffold generated with Spring Initializr (moved from the former `game-backend` scaffold), no
  domain code, PostgreSQL schema, or SQLite export pipeline implemented yet.

## Tooling

- Tool versions (Java, Node) are pinned via [`mise.toml`](../../mise.toml) at the repository root.
- Each Angular app has its own `package.json`, `.editorconfig`, and `.prettierrc`.
- The backend uses Maven (via the `mvnw` wrapper), PostgreSQL (`spring.datasource`, runtime driver
  `org.postgresql:postgresql`) as its primary database, and SQLite (`org.xerial:sqlite-jdbc`) solely as the
  generated export format consumed by the game.
- **UI component library:** Angular Material is installed in both Angular apps and is the exclusive component
  library (see [Conventions](./conventions.md#ui-component-library)). Tailwind CSS remains available for layout
  and utility styling, but components (buttons, dialogs, forms controls, tables, etc.) must come from Angular
  Material.

## Related documentation

- [Getting started](./getting-started.md) — how to install tools and run each application.
- [Conventions](./conventions.md) — coding and contribution conventions.
- [Features](../features/README.md) — functional specifications, organized by business domain.
