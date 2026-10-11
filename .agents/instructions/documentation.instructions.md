---
applyTo: '**'
description: 'End-of-session rule: keep specs/ documentation in sync with code and design changes.'
---

# Documentation Sync

This project's documentation lives entirely under [`specs/`](../../specs). It must stay in sync with the code and
with design decisions.

**Before finishing any task/session, check whether `specs/` needs an update:**

- New or changed gameplay/business feature → update or create the matching file under
  `specs/features/<domain>/<feature>.md`.
- New business domain → create `specs/features/<domain>/` and reference it from `specs/features/README.md`.
- Architecture, tech stack, tooling, or setup change → update `specs/dev-guide/architecture.md` and/or
  `specs/dev-guide/getting-started.md`.
- New/changed coding convention → update `specs/dev-guide/conventions.md`.
- Related features should link to each other with relative Markdown links rather than duplicating content.

Follow the detailed process, templates, and rules in
[`specs/dev-guide/documentation-workflow.md`](../../specs/dev-guide/documentation-workflow.md).

If a change truly has no documentation impact (e.g. a pure refactor), state that explicitly instead of silently
skipping the check.
