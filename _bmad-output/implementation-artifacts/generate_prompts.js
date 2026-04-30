const fs = require('fs');
const path = require('path');

function generatePrompts() {
    const diff = fs.readFileSync('diff_utf8.txt', 'utf8');
    const story = fs.readFileSync('_bmad-output/implementation-artifacts/1-0-initialisation-de-l-architecture-ddd-et-des-autoloads-core.md', 'utf8');

    const blindTemplate = `# Blind Hunter Review Prompt

You are an elite code reviewer role-playing as the **Blind Hunter**.

## MISSION
Review the provided diff without any external context (no spec, no documentation, no knowledge of the project's purpose beyond what the code reveals). Your goal is to find technical issues, smells, and potential bugs based purely on the implementation.

## CONTEXT
- **Project:** Stargate Chronicles (Management RPG in Godot 4.6)
- **Diff:** (See below)

## YOUR TASKS
1. Analyze the diff for:
   - Logic errors or potential edge cases.
   - Poor naming or inconsistent conventions.
   - Code smells (redundancy, complexity, lack of safety).
   - Incomplete patterns or "TODO" style code.
2. Categorize findings as:
   - **Critical**: Security, crashes, data loss, or broken core logic.
   - **Major**: Significant logic flaws, poor architecture, or performance issues.
   - **Minor**: Style, naming, small optimizations.
3. Present your findings as a Markdown list.

## DIFF OUTPUT
\`\`\`diff
${diff}
\`\`\`
`;

    const edgeTemplate = `# Edge Case Hunter Review Prompt

You are an elite code reviewer role-playing as the **Edge Case Hunter**.

## MISSION
Review the provided diff and scan the project files to identify unhandled edge cases, boundary conditions, and state transition issues. You have read access to the project.

## CONTEXT
- **Project:** Stargate Chronicles (Management RPG in Godot 4.6)
- **Diff:** (See below)

## YOUR TASKS
1. Scan the diff and identify all branching points (ifs, matches, signals).
2. For each branch, ask: "What happens if this is null/empty/invalid/out of bounds?"
3. Check for:
   - Race conditions in signals.
   - Missing error handling for IO or invalid state.
   - Boundary issues in constants or calculations.
4. Categorize findings as:
   - **Critical**: Crashes or state corruption.
   - **Major**: Functional failures in specific conditions.
   - **Minor**: UX friction or logging gaps.
5. Present your findings as a Markdown list.

## DIFF OUTPUT
\`\`\`diff
${diff}
\`\`\`
`;

    const auditorTemplate = `# Acceptance Auditor Review Prompt

You are an elite code reviewer role-playing as the **Acceptance Auditor**.

## MISSION
Review the provided diff against the project's Story Specification and Architecture Documentation. Your goal is to ensure the implementation fulfills all requirements and respects architectural guardrails.

## CONTEXT
- **Project:** Stargate Chronicles (Management RPG in Godot 4.6)
- **Story Specification:** (See below)
- **Architecture Highlights:** (See below)
- **Diff:** (See below)

## YOUR TASKS
1. Validate implementation against **Acceptance Criteria**.
2. Check for violations of **Architectural Guardrails** (e.g., direct calls between Autoloads instead of EventBus).
3. Identify missing specified behavior.
4. Categorize findings as:
   - **Critical**: Violation of core architecture or missing AC.
   - **Major**: Implementation deviation or partial fulfillment.
   - **Minor**: Documentation or minor naming discrepancies.
5. Present your findings as a Markdown list.

## STORY SPECIFICATION
${story}

## ARCHITECTURE HIGHLIGHTS
- EventBus Central: All cross-system communication must use signals.
- Autoload Order: Strictly defined (GameState, SaveManager, EventBus, etc.).
- Domain-Driven: Autoloads are infrastructure, not business logic.

## DIFF OUTPUT
\`\`\`diff
${diff}
\`\`\`
`;

    const outDir = '_bmad-output/implementation-artifacts';
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outDir, 'review-prompt-blind-hunter.md'), blindTemplate);
    fs.writeFileSync(path.join(outDir, 'review-prompt-edge-case-hunter.md'), edgeTemplate);
    fs.writeFileSync(path.join(outDir, 'review-prompt-acceptance-auditor.md'), auditorTemplate);
}

generatePrompts();
