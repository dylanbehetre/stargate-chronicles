---
name: stargate-arc-analysis
description: Analyzes and structures narrative arcs from Stargate (SG-1 and Atlantis). Use when the user requests to extract narrative arcs, analyze Stargate episodes, or build a campaign narrative.
---

# 🌌 Stargate Narrative Arc Analyzer

## Overview
Extract, analyze, and structure the narrative arcs of Stargate (SG-1 and Atlantis) into a format compatible with `gds-create-narrative`.

## Methodology
1. **Iterative Extraction**: Process seasons sequentially, following the broadcast order to capture cross-over dependencies (SG-1 S8+ and Atlantis S1+).
2. **Arc Identification**:
   - **Antagonists**: Goa'uld System Lords, Replicators, Ori, Wraiths, Genii, etc.
   - **Allies**: Tok'ra, Asgard, Ancient/Lantean, Nox, Rebels.
   - **Themes**: "Ancestry" (Ancient ruins), "Cultural Traces" (Earth-descended cultures), "Ascension".
3. **Step Structure**: Each episode is decomposed into one or more steps.
4. **Validation**: Use `stargate-specialist` for canon accuracy and cross-reference multiple sources (Stargate-Fusion, GateWorld, Fandom).

## Output Format (Markdown)
The output must be a Markdown file with the following structure:

# Arc : [Name]
## Introduction
[Global summary of the red thread]

## Story Beat [N] : [Beat Title]
### [UID] : [Step Name]
- **Series/Episode:** [Reference]
- **Planet:** [Name (Designation)]
- **Summary:** [Context and action]
- **Prerequisites:** [Logical links to previous steps/arcs]
- **SGC Outcomes:**
  - **Gains:** [Tech, alliances, info]
  - **Losses:** [Casualties, lost equipment, diplomatic failure]
  - **Consequences:** [Political impact, new threats]

---
## Deployment Rules
- Split multi-planet episodes into distinct steps if the narrative shift is significant.
- Identify "Filler" episodes only if they truly do not contribute to any theme or character arc (rare in Stargate).
- Maintain dependency links across different arcs (e.g., meeting the Tok'ra is a prerequisite for many Goa'uld infiltration steps).
