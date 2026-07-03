class_name RoomNode
extends Node2D

## Représente une salle du SGC dans la vue en coupe (Version Node2D).

enum State {
	ABANDONED,
	CONSTRUCTION,
	OPERATIONAL
}

const STATE_LABELS = {
	State.ABANDONED: "Secteur Désactivé",
	State.CONSTRUCTION: "En Travaux",
	State.OPERATIONAL: "Opérationnel"
}

@export var room_id: String = ""
@export var state: State = State.ABANDONED: set = _set_state
@export var room_texture: Texture2D: set = _set_room_texture

var _pending_name: String = ""

@onready var interaction_area: Area2D = $Area2D
@onready var sprite: Sprite2D = %Sprite2D
@onready var name_label: Label = %RoomName
@onready var status_indicator: ColorRect = %StatusIndicator
@onready var focus_border: ReferenceRect = %FocusBorder
@onready var focus_control: Control = $FocusControl # Pour le système de focus Godot

func _ready() -> void:
	focus_control.focus_entered.connect(_on_focus_entered)
	focus_control.focus_exited.connect(_on_focus_exited)
	focus_control.gui_input.connect(_on_focus_gui_input)
	
	if _pending_name != "":
		name_label.text = _pending_name
	
	_update_visuals()

func _on_focus_gui_input(event: InputEvent) -> void:
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		focus_control.grab_focus()
		_open_modal()

func _open_modal() -> void:
	if room_id == "":
		return
		
	EventBus.room_modal_requested.emit({
		"id": room_id,
		"name": name_label.text,
		"state": state,
		"state_label": STATE_LABELS[state]
	})

func _on_focus_entered() -> void:
	focus_border.visible = true
	z_index = 10 # Met la salle au premier plan quand elle est focalisée
	EventBus.room_focused.emit(self)

func _on_focus_exited() -> void:
	focus_border.visible = false
	z_index = 0

func grab_focus() -> void:
	focus_control.grab_focus()

func set_room_name(new_name: String) -> void:
	if is_node_ready():
		name_label.text = new_name
	else:
		_pending_name = new_name

func _set_state(new_state: State) -> void:
	state = new_state
	if is_node_ready():
		_update_visuals()

func _set_room_texture(tex: Texture2D) -> void:
	room_texture = tex
	if is_node_ready():
		sprite.texture = tex

func _update_visuals() -> void:
	if not is_node_ready(): return
	
	# Fond par défaut
	var bg_color = Color("#222228")
	
	match state:
		State.ABANDONED:
			sprite.self_modulate = Color(0.2, 0.2, 0.25, 1.0)
			status_indicator.color = Color.DARK_RED
			name_label.self_modulate = Color(0.5, 0.5, 0.5)
			bg_color = Color("#0F0F12")
		State.CONSTRUCTION:
			sprite.self_modulate = Color(1.0, 0.8, 0.2, 0.6)
			status_indicator.color = Color.ORANGE
			name_label.self_modulate = Color(1.0, 0.8, 0.2)
			bg_color = Color("#1A1608")
		State.OPERATIONAL:
			sprite.self_modulate = Color(1.0, 1.0, 1.0, 1.0)
			status_indicator.color = Color.GREEN
			name_label.self_modulate = Color(1.0, 1.0, 1.0)
			bg_color = Color("#1E1E24")
	
	$Background.color = bg_color
