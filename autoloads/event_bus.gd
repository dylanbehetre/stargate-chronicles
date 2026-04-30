extends Node

## Centralized EventBus for cross-system communication.

signal error_occurred(error_code: int, context: String)
signal game_saved(slot: int)
signal game_loaded(slot: int)
signal room_changed(room_id: Constants.Room)

func _ready() -> void:
	LogManager.info("EventBus initialized")
