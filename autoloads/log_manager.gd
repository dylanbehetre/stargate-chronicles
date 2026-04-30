extends Node

## Centralized logging system.
## Emits events to EventBus if it exists.

enum LogLevel {
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL
}

func debug(message: String) -> void:
	_log(LogLevel.DEBUG, message)

func info(message: String) -> void:
	_log(LogLevel.INFO, message)

func warn(message: String) -> void:
	_log(LogLevel.WARN, message)

func error(message: String) -> void:
	_log(LogLevel.ERROR, message)

func fatal(message: String) -> void:
	_log(LogLevel.FATAL, message)

func _log(level: LogLevel, message: String) -> void:
	var prefix := ""
	match level:
		LogLevel.DEBUG: prefix = "[DEBUG]"
		LogLevel.INFO: prefix = "[INFO]"
		LogLevel.WARN: prefix = "[WARN]"
		LogLevel.ERROR: prefix = "[ERROR]"
		LogLevel.FATAL: prefix = "[FATAL]"
	
	var full_message := "%s %s" % [prefix, message]
	print(full_message)
