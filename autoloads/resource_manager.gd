extends Node

## Manages game resources.

func _ready() -> void:
	LogManager.info("ResourceManager initialized")

func add_resource(id: String, amount: int) -> void:
	pass

func consume_resource(id: String, amount: int) -> bool:
	return false
