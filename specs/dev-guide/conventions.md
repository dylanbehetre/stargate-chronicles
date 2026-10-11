# Conventions

## Angular applications (`stargate-chronicles-ui`, `stargate-chronicles-resource-manager`)

Both Angular apps follow the same conventions, enforced for AI agents via
[`stargate-chronicles-ui/AGENTS.md`](../../stargate-chronicles-game/stargate-chronicles-ui/AGENTS.md). Highlights:

- Standalone components only (no NgModules); `standalone: true` must **not** be set explicitly (default since
  Angular v20).
- Signals for state (`signal()`, `computed()`, `linkedSignal()`); no `mutate()`, use `update()`/`set()`.
- `input()` / `output()` / `model()` functions instead of decorators.
- Native control flow (`@if`, `@for`, `@switch`); no `*ngIf`/`*ngFor`/`*ngSwitch`, no `ngClass`/`ngStyle`.
- `inject()` instead of constructor injection; services use `providedIn: 'root'`.
- Accessibility: must pass AXE checks and meet WCAG 2.2 AA.
- Unit tests run with Vitest (`ng test`).

Refer directly to the instruction files above for the full, authoritative list — do not duplicate it here; update
this section only if the convention changes at the repository level.

### UI component library

**Angular Material is the exclusive UI component library** for both Angular apps. Installed via
`ng add @angular/material` (custom M3 theme, typography enabled, animations enabled — see each app's
`src/material-theme.scss`). Do not introduce another component library (e.g. PrimeNG, NG-ZORRO, Bootstrap
components); use Angular Material components first, and fall back to custom components built with Tailwind
utility classes only when Material has no equivalent.

## Backend (`game-backend`)

- Java 25, Spring Boot 4.1.1.
- Persistence via Spring Data JPA against SQLite.
- Favor constructor injection and immutable domain objects.
- Tests use the Spring Boot test starters and Testcontainers already declared in `pom.xml`.

## Game design / rules content (`specs/features`)

- Rules content (characters, races, skills, equipment, ...) is adapted from the *Stargate Coalition* tabletop RPG
  ruleset for reference lore/rules material.
- Keep feature specs implementation-agnostic: describe the rules/behavior, not a specific UI or API shape, unless
  the shape itself is the feature.

## Documentation

- See [Documentation workflow](./documentation-workflow.md) for where to document what, and when.
