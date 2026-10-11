# Documentation Workflow

This document describes **how and when to update `specs/`**. It is the entry point to consult whenever you are
unsure where a piece of information belongs, and it is the reference for the end-of-session documentation rule.

## Golden rule

> **Every working session that changes behavior, architecture, or decisions must end with the corresponding
> documentation update, in the same session/PR.** Documentation is not an afterthought: a task is not complete
> until `specs/` reflects the new state of the project.

This applies equally to human contributors and AI coding agents working on this repository.

## End-of-session checklist

Before considering a task done, go through this checklist:

1. **Did I add/change a user-facing or gameplay feature?** → Create or update the relevant file(s) under
   `specs/features/<domain>/`.
2. **Did I add/change a business domain** (a new area of game functionality that doesn't fit existing folders)?
   → Create a new folder under `specs/features/` and add it to [`features/README.md`](../features/README.md).
3. **Did I change the architecture, tech stack, repo layout, or tooling?** → Update
   [`dev-guide/architecture.md`](./architecture.md) and/or [`dev-guide/getting-started.md`](./getting-started.md).
4. **Did I introduce/change a coding convention?** → Update [`dev-guide/conventions.md`](./conventions.md).
5. **Did I create cross-cutting links between features?** → Add explicit Markdown links between the affected
   `.md` files (see rules below).
6. **Did I change the roadmap/milestones?** → Update the progress table in the root
   [`README.md`](../../README.md).

If none of the above applies (e.g. pure refactor with no behavior change), no documentation update is required,
but say so explicitly rather than skipping the check silently.

## `specs/features/` rules

- **One folder per business domain** (e.g. `characters`, `galaxy`, `base-management`, `combat`, `research`, ...).
- **One `.md` file per feature** inside that domain folder (e.g. `characters/races.md`,
  `characters/equipments.md`).
- A domain folder should get a short intro file (e.g. `characters/characters.md`) when a feature acts as the
  natural entry point for the domain; otherwise a `README.md` can be added if no single feature is the entry point.
- **Cross-link related features** with regular Markdown links instead of duplicating content, for example:

  ```markdown
  Races are described in the [Races specifications](races.md) file.
  ```

  Link to another domain the same way, using a relative path (e.g. `../combat/weapons.md`).
- Keep feature specs focused on *what* the feature is and *how it behaves* (rules, data, constraints). Avoid
  restating the overall game vision already covered in [`IDEE.md`](../../IDEE.md).

### Adding a new feature doc — minimal template

```markdown
# <Feature Name> Specifications

This file describes <feature> specifications.

## Overview
<!-- What the feature is, why it exists -->

## Rules / Behavior
<!-- The actual rules, mechanics, constraints -->

## Related features
- [<Other feature>](../<domain>/<file>.md)
```

## `specs/dev-guide/` rules

- Keep it **task-oriented**: a new developer should be able to go from zero to running the project, and understand
  how to contribute, by reading this folder alone.
- Split by concern (architecture, getting started, conventions, this workflow document) rather than growing a
  single large file; add a new file and link it from [`dev-guide/README.md`](./README.md) if a new concern
  emerges.

## Why this matters

The project is community-extensible by design (see root [`README.md`](../../README.md)). Specs are the contract
between the design intent, the codebase, and future contributors (human or AI). Letting them drift from the code
defeats that purpose.
