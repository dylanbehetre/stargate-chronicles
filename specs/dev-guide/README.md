# Developer Guide

This guide gathers everything a developer needs to get productive on **Stargate: Chronicles** quickly.

## Contents

- [Architecture](./architecture.md) — repository layout, applications, and technology stack.
- [Getting started](./getting-started.md) — prerequisites and commands to run, build, and test each application.
- [Conventions](./conventions.md) — coding, testing, and contribution conventions.
- [Documentation workflow](./documentation-workflow.md) — how and when to update `specs/` (read this before
  starting any task).

## Project structure (quick view)

```
stargate-chronicles/
├── specs/                                          # Project specifications and documentation
│   ├── dev-guide/                                  # Development guide (this folder)
│   └── features/                                   # Feature specifications, one folder per business domain
├── stargate-chronicles-game/                        # Source code of the playable game
│   └── stargate-chronicles-ui/                      # Game player interface (100% Angular, no backend)
└── stargate-chronicles-resources-manager/           # Source code of the resource manager
    ├── stargate-chronicles-resource-manager/         # Resource manager interface (Angular)
    └── stargate-chronicles-resource-manager-backend/ # Resource manager API (Spring Boot + PostgreSQL)
```

See [Architecture](./architecture.md) for details on each application and its responsibilities.

