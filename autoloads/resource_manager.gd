extends Node

## Manages game resources (Budget USD and Alien Resources).

var _budget: int = Constants.STARTING_FUNDS
var _resources: Dictionary = {
	Constants.ResourceType.NAQUADAH: 0,
	Constants.ResourceType.TRINIUM: 0,
	Constants.ResourceType.ZPM: 0
}

func _ready() -> void:
	LogManager.info("ResourceManager initialized with budget: %d" % _budget)

# --- Budget Management ---

func get_budget() -> int:
	return _budget

func add_budget(amount: int) -> void:
	_budget += amount
	EventBus.budget_changed.emit(_budget)
	LogManager.info("Budget added: %d, New total: %d" % [amount, _budget])

func consume_budget(amount: int) -> bool:
	if _budget >= amount:
		_budget -= amount
		EventBus.budget_changed.emit(_budget)
		LogManager.info("Budget consumed: %d, New total: %d" % [amount, _budget])
		return true
	LogManager.warn("Insufficient budget: required %d, available %d" % [amount, _budget])
	return false

# --- Resource Management ---

func get_resource_amount(type: Constants.ResourceType) -> int:
	return _resources.get(type, 0)

func add_resource(type: Constants.ResourceType, amount: int) -> void:
	_resources[type] = _resources.get(type, 0) + amount
	EventBus.resource_changed.emit(type, _resources[type])
	LogManager.info("Resource added: %d (Type: %d), New total: %d" % [amount, type, _resources[type]])

func consume_resource(type: Constants.ResourceType, amount: int) -> bool:
	var current = _resources.get(type, 0)
	if current >= amount:
		_resources[type] = current - amount
		EventBus.resource_changed.emit(type, _resources[type])
		LogManager.info("Resource consumed: %d (Type: %d), New total: %d" % [amount, type, _resources[type]])
		return true
	LogManager.warn("Insufficient resource (Type %d): required %d, available %d" % [type, amount, current])
	return false
