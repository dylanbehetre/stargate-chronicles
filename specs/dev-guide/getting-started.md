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

The game is 100% client-side Angular: it has no backend of its own and loads the read-only SQLite snapshot
exported by `stargate-chronicles-resource-manager-backend` directly in the browser.

## Resource manager frontend (`stargate-chronicles-resource-manager`)

```bash
cd stargate-chronicles-resources-manager/stargate-chronicles-resource-manager
npm install

npx ng serve
npx ng build
npx ng test
```

## Resource manager backend (`stargate-chronicles-resource-manager-backend`)

```bash
cd stargate-chronicles-resources-manager/stargate-chronicles-resource-manager-backend

# Windows
./mvnw.cmd spring-boot:run
./mvnw.cmd test

# Unix-like shells
./mvnw spring-boot:run
./mvnw test
```

The backend persists all resources to a local **PostgreSQL** database (`spring.datasource` in
`src/main/resources/application.yaml`) and exports the published state to a **SQLite** file that is pushed to the
game. A running PostgreSQL instance is required to start the app and to run tests (see
[Architecture](./architecture.md) for the full data flow).

## Next steps

- Read [Conventions](./conventions.md) before writing code.
- Read [Documentation workflow](./documentation-workflow.md) before finishing any task.
