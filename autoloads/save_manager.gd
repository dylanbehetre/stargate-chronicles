extends Node

## Handles saving and loading the game.

func _ready() -> void:
	LogManager.info("SaveManager initialized")

func save_game(slot: int) -> void:
	pass

func load_game(slot: int) -> void:
	pass
