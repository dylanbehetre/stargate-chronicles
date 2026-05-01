extends Node

## Manages the global state of the game.

var built_infrastructure: Array[String] = []
var unlocked_menus: Array[String] = ["general", "briefing"]

func _ready() -> void:
	LogManager.info("GameState initialized")

func is_infrastructure_built(id: String) -> bool:
	return id in built_infrastructure

func mark_infrastructure_built(id: String) -> void:
	if not id in built_infrastructure:
		built_infrastructure.append(id)
		LogManager.info("Infrastructure marked as built: %s" % id)

func is_menu_unlocked(menu_id: String) -> bool:
	return menu_id in unlocked_menus

func unlock_menu(menu_id: String) -> void:
	if not menu_id in unlocked_menus:
		unlocked_menus.append(menu_id)
		LogManager.info("Menu unlocked: %s" % menu_id)

func get_state() -> Dictionary:
	return {
		"built_infrastructure": built_infrastructure,
		"unlocked_menus": unlocked_menus
	}

func update_state(new_state: Dictionary) -> void:
	built_infrastructure = new_state.get("built_infrastructure", [])
	unlocked_menus = new_state.get("unlocked_menus", ["bureau", "gate"])
