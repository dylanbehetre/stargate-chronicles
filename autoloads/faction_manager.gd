extends Node

## Manages factions and relations.

func _ready() -> void:
	LogManager.info("FactionManager initialized")

func change_reputation(faction_id: String, amount: int) -> void:
	pass
