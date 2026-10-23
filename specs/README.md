# Specifications

This folder is the single source of truth for **Stargate: Chronicles**' documentation. It contains everything
needed to understand the project, onboard on it, and keep it evolving in a consistent way.

## Structure

| Folder                        | Purpose                                                                                     |
|--------------------------------|-----------------------------------------------------------------------------------------------|
| [`dev-guide/`](./dev-guide)    | Everything a developer (human or AI agent) needs to work on the project: architecture, setup, conventions, and the documentation workflow itself. |
| [`features/`](./features)      | Functional/business specifications, organized **one folder per business domain**, **one `.md` file per feature**. |

## Navigating

Start from this page, pick the folder index ([`features/`](./features/README.md) or
[`dev-guide/`](./dev-guide/README.md)), and follow links to the files you need.

## Keeping the documentation up to date

Documentation must evolve with the code. **At the end of every working session** (feature added, behavior changed,
decision made), the relevant files under `dev-guide/` and/or `features/` must be updated.

The full process, templates, and rules for naming/cross-linking are described in
[`dev-guide/documentation-workflow.md`](./dev-guide/documentation-workflow.md). Start there if you are not sure
where to document something.
