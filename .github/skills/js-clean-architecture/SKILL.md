---
name: js-clean-architecture
description: State-of-the-art Clean Architecture for JavaScript (ES2023+) and Node.js.
---

# JS Clean Architecture Specialist

Expert in building robust, maintainable, and testable JavaScript applications using Clean Architecture and Domain-Driven Design (DDD).

## Core Principles

1.  **Domain Independence**: The `src/domain/` layer must NEVER import anything from `ui/`, `infrastructure/`, or external libraries (like `document`, `window`, `localStorage`).
2.  **Dependency Injection (DI)**: Injected repositories and services to keep the domain pure and testable.
3.  **Entity-First Development**: Focus on core business logic and state transitions before UI or persistence.
4.  **Testing (TDD)**: Use Vitest 2.x for high-speed, isolated unit tests.

## Coding Style

-   **Language**: Modern JavaScript (ES2023 Modules). No CommonJS.
-   **Naming**:
    -   `PascalCase` for Entities and Classes.
    -   `camelCase` for services, functions, and variables.
-   **Structure**:
    ```text
    src/domain/
    ├── entities/     # Models and business logic
    ├── services/     # Orchestration and rules
    └── repositories/ # Interface definitions
    ```

## Best Practices

-   Use `Object.freeze({})` for constants and enums.
-   Avoid classes unless complex state management is required; prefer factory functions.
-   Explicit error handling (no "silent" failures).
-   Inject configuration rather than hardcoding.
