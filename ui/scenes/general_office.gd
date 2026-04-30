extends Control

## General's Office Hub Scene
## Handles keyboard-only navigation and signals room changes.

@onready var gate_button: Button = %GateButton
@onready var characters_button: Button = %CharactersButton
@onready var lab_button: Button = %LabButton
@onready var bureau_button: Button = %BureauButton
@onready var version_label: Label = %VersionLabel

func _ready() -> void:
	# Update version
	version_label.text = "v%s" % Constants.VERSION
	
	# Apply theme if not already set globally
	# theme = preload("res://ui/theme/sgc_theme.tres")
	
	# Connect signals
	gate_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.PORTE))
	characters_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.CASERNE))
	lab_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.LABO))
	bureau_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.BUREAU))
	
	# Initial focus
	bureau_button.grab_focus()
	
	LogManager.info("General's Office Hub initialized")

func _unhandled_input(event: InputEvent) -> void:
	if event.is_action_pressed("nav_gate"):
		gate_button.grab_focus()
		_on_room_button_pressed(Constants.Room.PORTE)
	elif event.is_action_pressed("nav_characters"):
		characters_button.grab_focus()
		_on_room_button_pressed(Constants.Room.CASERNE)
	elif event.is_action_pressed("nav_lab"):
		lab_button.grab_focus()
		_on_room_button_pressed(Constants.Room.LABO)
	elif event.is_action_pressed("nav_bureau"):
		bureau_button.grab_focus()
		_on_room_button_pressed(Constants.Room.BUREAU)

func _on_room_button_pressed(room_id: Constants.Room) -> void:
	LogManager.info("Navigating to room: %s" % Constants.Room.keys()[room_id])
	EventBus.room_changed.emit(room_id)
	# Logic to switch scenes would go here in a full implementation
