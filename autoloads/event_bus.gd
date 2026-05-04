extends Node

## Centralized EventBus for cross-system communication.

signal error_occurred(error_code: int, context: String)
signal game_saved(slot: int)
signal game_loaded(slot: int)
signal room_changed(room_id: Constants.Room)
signal budget_changed(new_amount: int)
signal resource_changed(type: int, new_amount: int)
signal infrastructure_built(infra_id: String)
signal infrastructure_unlocked(infra_id: String)
signal infrastructure_started(infra_id: String)
signal room_modal_requested(room_data: Dictionary)
signal room_focused(node: Control)

func _ready() -> void:
	LogManager.info("EventBus initialized")
