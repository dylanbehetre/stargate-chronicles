# Agent guide — Stargate: Chronicles

Fan game (strategic management + narrative RPG) set in the Stargate universe. Vision: [`IDEE.md`](./IDEE.md).
The documentation lives entirely under [`specs/`](./specs) and is the **single source of truth**.

Sub-projects have their own `AGENTS.md` (Angular rules) that apply in addition to this file:
- `stargate-chronicles-game/stargate-chronicles-ui/`
- `stargate-chronicles-resources-manager/stargate-chronicles-resource-manager/`

## Start of session

1. Read [`specs/README.md`](./specs/README.md), then the index of the relevant area:
   [`specs/features/README.md`](./specs/features/README.md) (gameplay/business) and/or
   [`specs/dev-guide/README.md`](./specs/dev-guide/README.md) (architecture, setup, conventions).
2. Open only the files relevant to the task (follow the links between specs). Do not assume behavior the specs
   already define; if specs and code disagree, flag it.
3. Use the matching skill when one applies (`.agents/skills/`), e.g. Angular work, Stargate lore, enum-like types.

## End of session

Before declaring a task done, run the **`spec-sync`** skill (`.agents/skills/spec-sync/SKILL.md`): map the changes
to the affected `specs/` files, update them, and state explicitly when there is no documentation impact.
Rules and templates: [`specs/dev-guide/documentation-workflow.md`](./specs/dev-guide/documentation-workflow.md).
