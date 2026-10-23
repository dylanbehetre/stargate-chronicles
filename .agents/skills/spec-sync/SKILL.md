---
name: spec-sync
description: End-of-session skill. Use before finishing any task that changed code, behavior, architecture, tooling or conventions, to synchronize the documentation under specs/ (and the roadmap in README.md) with the changes made.
---

# spec-sync — End-of-session documentation sync

Reference process and templates: [
`specs/dev-guide/documentation-workflow.md`](../../../specs/dev-guide/documentation-workflow.md).

## Steps

1. **Inspect the changes**: `git --no-pager status` and `git --no-pager diff` (plus what was discussed/decided
   during the session).
2. **Map changes to docs**:

   | Change                                     | Update                                                               |
         |--------------------------------------------|----------------------------------------------------------------------|
   | Gameplay/business feature added or changed | `specs/features/<domain>/<feature>.md`                               |
   | New business domain                        | new `specs/features/<domain>/` + entry in `specs/features/README.md` |
   | Architecture, stack, repo layout, tooling  | `specs/dev-guide/architecture.md`, `getting-started.md`              |
   | Coding/testing convention                  | `specs/dev-guide/conventions.md`                                     |
   | Roadmap/milestone progress                 | progress table in root `README.md`                                   |
   | Design decision with a "why" worth keeping | `Rationale / Open questions` section of the related spec             |

3. **Edit the docs** minimally, focused on what/how (not history). Link related specs with relative Markdown
   links instead of duplicating content.
4. **Check links**: every relative link added or touched must resolve to an existing file.
5. **Report** in the final message: the `specs/` files updated, or an explicit
   "No documentation impact: <reason>" (e.g. pure refactor).

## Do not

- Create changelogs or decision logs (git history covers them).
- Document details the code already expresses clearly.
