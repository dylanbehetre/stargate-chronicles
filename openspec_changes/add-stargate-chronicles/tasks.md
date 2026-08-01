Implementation tasks — Stargate: Chronicles (MVP)

Priority order (top-first). Each task is actionable and small enough for a short ticket.

1. Project setup
- Creating repo skeleton: /game, /data, /art, /docs, /tools
- Initializing Godot 4 project (or Unity) with VCS-friendly export settings

2. Core data definitions
- Defining JSON schemas for races, classes, weapons, resources, research nodes
- Populating minimal entries from IDEE.md (Human, Jaffa, Tok'ra; basic classes)

3. Strategic layer prototype
- Implementing Calendar tick system
- Implementing global resource nodes and passive/active extraction mechanics
- Simple UI for operation calendar and resource balances

4. Tactical combat prototype
- Scene for isometric map with placeholder tiles and units
- Implementing character entity with stats and basic movement
- RTwP loop: pause to issue commands; resume to simulate
- Simple attack resolution using RNG influenced by stats

5. Squad management
- Roster UI: create, assign, level up characters
- Traits & class progression hooks (leveling system)

6. Research pipeline
- Implement capture -> analyze -> prototype flow with timers
- Sample research tree for Infantry and Infrastructure

7. Persistence & saves
- Implement JSON or SQLite saves for game state

8. Basic AI/events
- Implement simple enemy spawn/events and Nemesis faction state updates

9. Fleet & late-phase stubs
- Stub Fleet Manager and resource distribution between fleet and planetary bases

10. Polish & QA
- Add placeholder art, UI skins (SGC vs alien)
- Playtest basic flows, iterate on balance

11. Optional backlog (defer)
- Possession FPS mode
- Advanced fleet combat 3D
- Full campaign/story missions

Deliverables
- Prototype playable loop: schedule -> launch expedition -> tactical encounter -> research progression
- Docs: proposal.md, design.md, tasks.md (this change)

Next steps
- Pick engine (Godot recommended). Start Project setup task.

---

Created from IDEE.md brainstorming. Ask clarifying questions before changing engine choice or scope.