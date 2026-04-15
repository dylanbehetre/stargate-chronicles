# GateContract

Primary interface for Stargate operations.

## Methods

### `dial(address: String[]): SuccessResponse`
- **Description**: Attempts to engage the Stargate with the provided 7-symbol address.
- **Rules**:
    - Must validate address against the known planet list.
    - If valid: Engage spin animation -> Established wormhole.
    - If invalid: Fail activation -> Visual/Audio feedback.
- **Response**: `{ success: boolean, planetId?: string, error?: string }`

### `deactivate(): void`
- **Description**: Closes the active wormhole and resets the gate state.
