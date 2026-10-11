# Getting Started

This page lists the prerequisites and the commands required to run, build, and test each application of the
repository. See [Architecture](./architecture.md) for an overview of what each application does.

## Prerequisites

Tool versions are pinned in [`mise.toml`](../../mise.toml) at the repository root:

- **Java:** Temurin 25
- **Node.js:** 26.8.1

If you use [mise](https://mise.jdx.dev/), simply run the following from the repository root to install the pinned
versions:

```bash
mise install
```

Otherwise, install matching Java 25 and Node 26 toolchains manually. Maven is provided via the wrapper (`mvnw` /
`mvnw.cmd`), no local Maven installation is required. The Angular CLI is available via each app's local
`node_modules` (use `npx ng ...` or the npm scripts below).

## Game frontend (`stargate-chronicles-ui`)

```bash
cd stargate-chronicles-game/stargate-chronicles-ui
npm install

npx ng serve          # Dev server on http://localhost:4200
npx ng build           # Production build in dist/
npx ng test            # Unit tests (Vitest)
```

## Game backend (`game-backend`)

```bash
cd stargate-chronicles-game/stargate-chronicles-backend/game-backend

# Windows
./mvnw.cmd spring-boot:run
./mvnw.cmd test

# Unix-like shells
./mvnw spring-boot:run
./mvnw test
```

The backend persists to a local SQLite database (see `src/main/resources` for configuration).

## Resource manager frontend (`stargate-chronicles-resource-manager`)

```bash
cd stargate-chronicles-resources-manager/stargate-chronicles-resource-manager
npm install

npx ng serve
npx ng build
npx ng test
```

## Next steps

- Read [Conventions](./conventions.md) before writing code.
- Read [Documentation workflow](./documentation-workflow.md) before finishing any task.
