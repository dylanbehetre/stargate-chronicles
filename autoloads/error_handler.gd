extends Node

## Centralized error handling.

func _ready() -> void:
	LogManager.info("ErrorHandler initialized")

func handle_error(error_code: int, context: String) -> void:
	var message = "Error %d in %s" % [error_code, context]
	LogManager.error(message)
	if has_node("/root/EventBus"):
		var event_bus = get_node("/root/EventBus")
		if event_bus.has_signal("error_occurred"):
			event_bus.error_occurred.emit(error_code, context)
