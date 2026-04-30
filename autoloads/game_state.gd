extends Node

## Manages the global state of the game.

func _ready() -> void:
	LogManager.info("GameState initialized")

func get_state() -> Dictionary:
	return {}

func update_state(new_state: Dictionary) -> void:
	pass
