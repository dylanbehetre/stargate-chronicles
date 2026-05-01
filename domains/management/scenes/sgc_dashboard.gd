extends MarginContainer

## UI Dashboard for Budget and Resources.
## Listens to EventBus for updates.

@onready var budget_label: Label = %BudgetValue
@onready var naquadah_label: Label = %NaquadahValue
@onready var trinium_label: Label = %TriniumValue
@onready var zpm_label: Label = %ZpmValue

func _ready() -> void:
	# Initial display
	_update_budget(ResourceManager.get_budget())
	_update_resource_visibility(Constants.ResourceType.NAQUADAH)
	_update_resource_visibility(Constants.ResourceType.TRINIUM)
	_update_resource_visibility(Constants.ResourceType.ZPM)
	
	_update_resource(Constants.ResourceType.NAQUADAH, ResourceManager.get_resource_amount(Constants.ResourceType.NAQUADAH))
	_update_resource(Constants.ResourceType.TRINIUM, ResourceManager.get_resource_amount(Constants.ResourceType.TRINIUM))
	_update_resource(Constants.ResourceType.ZPM, ResourceManager.get_resource_amount(Constants.ResourceType.ZPM))

	
	# Connect signals
	EventBus.budget_changed.connect(_update_budget)
	EventBus.resource_changed.connect(_update_resource)
	
	LogManager.info("SgcDashboard UI initialized")

func _update_budget(amount: int) -> void:
	# Format with separators (simple approach for now)
	budget_label.text = "$%s" % _format_number(amount)

func _update_resource(type: int, amount: int) -> void:
	match type:
		Constants.ResourceType.NAQUADAH:
			naquadah_label.text = str(amount)
			_update_resource_visibility(type)
		Constants.ResourceType.TRINIUM:
			trinium_label.text = str(amount)
			_update_resource_visibility(type)
		Constants.ResourceType.ZPM:
			zpm_label.text = str(amount)
			_update_resource_visibility(type)

func _update_resource_visibility(type: int) -> void:
	var unlocked = ResourceManager.is_resource_unlocked(type)
	match type:
		Constants.ResourceType.NAQUADAH:
			naquadah_label.get_parent().visible = unlocked
		Constants.ResourceType.TRINIUM:
			trinium_label.get_parent().visible = unlocked
		Constants.ResourceType.ZPM:
			zpm_label.get_parent().visible = unlocked


func _format_number(n: int) -> String:
	var s = str(n)
	var out = ""
	var count = 0
	for i in range(s.length() - 1, -1, -1):
		out = s[i] + out
		count += 1
		if count == 3 and i > 0:
			out = "," + out
			count = 0
	return out
