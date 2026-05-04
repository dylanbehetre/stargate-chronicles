extends CanvasLayer

## Modale d'interaction avec une salle du SGC.

var _was_paused_before: bool = false

func _ready() -> void:
	visible = false
	EventBus.room_modal_requested.connect(_on_room_modal_requested)
	%CloseButton.pressed.connect(hide_modal)
	%RehabButton.pressed.connect(_on_rehab_pressed)
	%AccessButton.pressed.connect(_on_access_pressed)

func _on_room_modal_requested(data: Dictionary) -> void:
	%Title.text = data["name"]
	%Description.text = "Identifiant : %s\nÉtat actuel : %s" % [data["id"], data["state_label"]]
	
	# Logic for button visibility based on state
	# Using integer values for simplicity in this MVP, but ideally should use the Enum
	%RehabButton.visible = (data["state"] == 0) # ABANDONED
	%AccessButton.visible = (data["state"] == 2) # OPERATIONAL
	
	show_modal()

func show_modal() -> void:
	_was_paused_before = get_tree().paused
	visible = true
	get_tree().paused = true
	%CloseButton.grab_focus()

func hide_modal() -> void:
	visible = false
	# Only unpause if the game wasn't already paused before opening the modal
	if not _was_paused_before:
		get_tree().paused = false

func _on_rehab_pressed() -> void:
	LogManager.info("Réhabilitation demandée")
	# In a real scenario, this would check budget and start a timer
	hide_modal()

func _on_access_pressed() -> void:
	LogManager.info("Accès à la salle demandé")
	hide_modal()

