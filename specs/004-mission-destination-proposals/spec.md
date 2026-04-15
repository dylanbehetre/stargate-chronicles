# Feature Specification: Mission Destination Proposals

**Feature Branch**: `004-mission-destination-proposals`  
**Created**: 2026-04-15  
**Status**: Draft  
**Input**: User description: "je n'ai pas de destination proposé" (I don't have a proposed destination)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Recommended Destinations (Priority: P1)

As a Commander at the SGC, I want to see a list of suggested planetary destinations so that I don't have to manually look up addresses for every mission.

**Why this priority**: Core gameplay loop improvement. Reduces friction in starting new exploration missions.

**Independent Test**: Can be tested by opening the mission control panel and verifying that 3 planet suggestions are visible without manual input.

**Acceptance Scenarios**:

1. **Given** the Mission Control interface is open, **When** no mission is active, **Then** 3 distinct planetary destinations from the database are displayed as "Proposed Targets".
2. **Given** the mission proposals are visible, **When** a mission is completed or the list is refreshed, **Then** 3 new distinct destinations are generated.

---

### User Story 2 - One-Click Dialing from Proposals (Priority: P1)

As a Commander, I want to be able to select a proposed destination and have the Stargate dialing sequence automatically configured for that address.

**Why this priority**: Essential for UX efficiency. Connects the proposal system to the core dialing mechanic.

**Independent Test**: Can be tested by clicking a "Dial" button on a proposal and verifying the address symbols are correctly sent to the dialing service.

**Acceptance Scenarios**:

1. **Given** a list of proposed destinations, **When** I click "Select/Dial" on a specific planet, **Then** the Stargate dialing console is populated with that planet's 7-symbol address.

---

### User Story 3 - Narrative Mission Objectives (Priority: P2)

As a Commander, I want each proposed destination to include a brief "Intelligence Briefing" so that the exploration feels contextually motivated.

**Why this priority**: Enhances immersion and supports the narrative-driven nature of "Stargate: Chronicles".

**Independent Test**: Verify that each proposal has a non-empty "Objective" or "Intel" field with randomized or templated content.

**Acceptance Scenarios**:

1. **Given** the proposed destinations, **When** viewed on the console, **Then** each planet displays a short narrative reason for the mission (e.g., "Anomalous readings", "Follow-up on SG-3 report").

---

### Edge Cases

- **What happens when the planet database is empty?**: The system should display a "No data available" message and a fallback instruction to manual dial.
- **How does system handle duplicate proposals?**: Logic must ensure the 3 proposed planets are unique within the same set.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST retrieve planet data from `src/data/planets.json`.
- **FR-002**: System MUST select 3 unique planets at random (or based on exploration status) to present as proposals.
- **FR-003**: System MUST provide a mechanism to populate the `DialingService` or equivalent with the symbols of the selected planet.
- **FR-004**: System MUST generate a random mission objective from a list of predefined templates for each proposal.
- **FR-005**: The Mission Control UI component MUST be updated to include a "Proposed Destinations" section.

### Key Entities *(include if feature involves data)*

- **MissionProposal**: Represents a candidate destination with metadata.
  - `planetId`: Reference to the planet.
  - `objective`: Narrative description of the mission goal.
  - `priority`: (Optional) visual indicator of mission urgency.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can initiate a dialing sequence to a suggested destination in under 2 clicks.
- **SC-002**: 100% of proposals contain valid addresses existing in the `planets.json` file.
- **SC-003**: No duplicate planets are shown in a single set of 3 proposals.

## Assumptions

- **Assumption about data**: `planets.json` contains at least 3 planets.
- **Assumption about scope**: This feature focuses on the *selection* and *UI display* of proposals, not the actual mission resolution (which is handled by SGTeam/Narrative services).
- **Dependency**: Requires integration with the existing `DialingService` and `PlanetStore/Repository`.
