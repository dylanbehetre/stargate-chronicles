extends Control

## Panel for managing SGC infrastructure construction.

const DATA_PATH = "res://data/balance/infrastructure_data.json"

@onready var infra_list = %InfraList
@onready var details_panel = %DetailsPanel
@onready var build_button = %BuildButton
@onready var finalize_button = %FinalizeButton
@onready var progress_bar = %ProgressBar
@onready var status_label = %StatusLabel
@onready var illustration_rect = %InfraIllustration

var _infra_data: Dictionary = {}
var _selected_id: String = ""

func _ready() -> void:
	_load_data()
	_update_list()
	
	EventBus.infrastructure_built.connect(_on_infra_built)
	EventBus.infrastructure_started.connect(_on_infra_started)
	
	# Zoom effect signals
	illustration_rect.mouse_entered.connect(_on_illustration_hover.bind(true))
	illustration_rect.mouse_exited.connect(_on_illustration_hover.bind(false))
	illustration_rect.resized.connect(_on_illustration_resized)
	
	# Initial UI state
	details_panel.hide()

func _on_illustration_resized() -> void:
	# Centre le pivot dynamiquement
	illustration_rect.pivot_offset = illustration_rect.size / 2

func _on_illustration_hover(is_hovered: bool) -> void:
	var target_scale = Vector2(1.3, 1.3) if is_hovered else Vector2(1.0, 1.0)
	var tween = create_tween()
	# Transition plus rapide (0.1s) et élastique pour l'effet "violent"
	tween.tween_property(illustration_rect, "scale", target_scale, 0.1).set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)

func _process(_delta: float) -> void:
	if _selected_id != "" and _is_building(_selected_id):
		_update_progress_ui()

func _load_data() -> void:
	if FileAccess.file_exists(DATA_PATH):
		var file = FileAccess.open(DATA_PATH, FileAccess.READ)
		var json = JSON.parse_string(file.get_as_text())
		if json is Dictionary:
			_infra_data = json
			LogManager.info("Infrastructure data loaded: %d items" % _infra_data.size())
	else:
		LogManager.error("Infrastructure data file missing: %s" % DATA_PATH)

func _update_list() -> void:
	# Clear list
	for child in infra_list.get_children():
		child.queue_free()
	
	for id in _infra_data:
		var data = _infra_data[id]
		
		# Skip if requirements not met
		var requirements_met = true
		if data.has("requires"):
			for req_id in data.requires:
				if not GameState.is_infrastructure_built(req_id):
					requirements_met = false
					break
		
		if not requirements_met:
			continue

		var btn = Button.new()
		btn.text = data.name
		btn.clip_text = true
		btn.text_overrun_behavior = TextServer.OVERRUN_TRIM_ELLIPSIS
		if GameState.is_infrastructure_built(id):
			btn.text += " [OPÉRATIONNEL]"
			btn.disabled = true
		
		btn.pressed.connect(_select_infra.bind(id))
		infra_list.add_child(btn)


func _select_infra(id: String) -> void:
	_selected_id = id
	var data = _infra_data[id]
	
	details_panel.show()
	%InfraName.text = data.name
	%InfraDesc.text = data.description
	
	# Mise à jour des valeurs (en jaune via le thème du node dans le .tscn)
	%InfraCostValue.text = _format_currency(data.cost_usd) + " USD"
	%InfraTimeValue.text = str(data.build_duration_seconds / 3600) + " h"
	
	if data.has("illustration"):
		var tex = load(data.illustration)
		if tex:
			illustration_rect.texture = tex
		else:
			illustration_rect.texture = null
	else:
		illustration_rect.texture = null

	
	_update_progress_ui()

func _update_progress_ui() -> void:
	var is_building = _is_building(_selected_id)
	var is_built = GameState.is_infrastructure_built(_selected_id)
	
	build_button.visible = not is_building and not is_built
	finalize_button.visible = is_building
	progress_bar.visible = is_building
	
	if is_building:
		var remaining_sec = TimelineManager.get_timer_remaining("build_" + _selected_id)
		var progress = TimelineManager.get_timer_progress("build_" + _selected_id)
		progress_bar.value = progress * 100
		
		var hours = int(remaining_sec) / 3600
		var mins = (int(remaining_sec) % 3600) / 60
		status_label.text = "Réhabilitation en cours... Temps restant: %dh %dm" % [hours, mins]
		build_button.text = "EN COURS"
	elif is_built:
		status_label.text = "Secteur: Opérationnel"
	else:
		status_label.text = "Secteur: En attente d'autorisation"
		build_button.text = "AUTORISER LE BUDGET"


func _is_building(id: String) -> bool:
	return TimelineManager.get_timer_remaining("build_" + id) > 0

func _on_build_button_pressed() -> void:
	if _selected_id == "": return
	
	var data = _infra_data[_selected_id]
	if ResourceManager.consume_budget(data.cost_usd):
		var timer_id = "build_" + _selected_id
		TimelineManager.add_timer(timer_id, data.build_duration_seconds, _complete_build.bind(_selected_id))
		EventBus.infrastructure_started.emit(_selected_id)
		_update_progress_ui()
	else:
		status_label.text = "FONDS INSUFFISANTS"

func _on_finalize_button_pressed() -> void:
	if _selected_id == "": return
	TimelineManager.fast_forward_to_timer("build_" + _selected_id)

func _complete_build(id: String) -> void:
	GameState.mark_infrastructure_built(id)
	EventBus.infrastructure_built.emit(id)
	
	# Execute ECA rules (simplified for MVP)
	var data = _infra_data.get(id, {})
	if data.has("unlocks_menus"):
		for menu_id in data.unlocks_menus:
			GameState.unlock_menu(menu_id)
			LogManager.info("Menu unlocked via infra: %s" % menu_id)

func _on_infra_built(_id: String) -> void:
	_update_list()
	if _selected_id == _id:
		_update_progress_ui()

func _on_infra_started(_id: String) -> void:
	if _selected_id == _id:
		_update_progress_ui()

func _format_currency(value: int) -> String:
	var s = str(value)
	var result = ""
	var count = 0
	for i in range(s.length() - 1, -1, -1):
		if count > 0 and count % 3 == 0:
			result = " " + result
		result = s[i] + result
		count += 1
	return result
