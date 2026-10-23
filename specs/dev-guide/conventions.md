# Conventions

## Angular applications (`stargate-chronicles-ui`, `stargate-chronicles-resource-manager`)

Both Angular apps follow the same conventions, enforced for AI agents via
[`stargate-chronicles-ui/AGENTS.md`](../../stargate-chronicles-game/stargate-chronicles-ui/AGENTS.md). Highlights:

### UI component library

**Angular Material is the exclusive UI component library** for both Angular apps. Installed via
`ng add @angular/material` (custom M3 theme, typography enabled, animations enabled — see each app's
`src/material-theme.scss`). Do not introduce another component library (e.g. PrimeNG, NG-ZORRO, Bootstrap
components); use Angular Material components first, and fall back to custom components built with Tailwind
utility classes only when Material has no equivalent.

## Backend (`stargate-chronicles-resource-manager-backend`)

- Persistence via Spring Data JPA against **PostgreSQL** (system of record for all game resources).
- Publishes resources by exporting the PostgreSQL state to a **SQLite** file, which is the artifact pushed to and
  read client-side by the game (`stargate-chronicles-ui`). The game itself has no backend.
- Favor constructor injection and immutable domain objects.
- Tests use the Spring Boot test starters and Testcontainers already declared in `pom.xml`.

## Game design / rules content (`specs/features`)

- Rules content (characters, races, skills, equipment, ...) is adapted from the *Stargate Coalition* tabletop RPG
  ruleset for reference lore/rules material.
- Keep feature specs implementation-agnostic: describe the rules/behavior, not a specific UI or API shape, unless
  the shape itself is the feature.

## Documentation

- See [Documentation workflow](./documentation-workflow.md) for where to document what, and when.
