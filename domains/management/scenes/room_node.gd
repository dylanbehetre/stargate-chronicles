class_name RoomNode
extends MarginContainer

## Représente une salle du SGC dans la vue en coupe.

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

func _ready() -> void:
	focus_entered.connect(_on_focus_entered)
	focus_exited.connect(_on_focus_exited)
	mouse_entered.connect(_on_mouse_entered)
	
	custom_minimum_size = Vector2(320, 180) # Format 16:9 plus grand
	
	if _pending_name != "":
		%RoomName.text = _pending_name
	
	_update_visuals()

func _gui_input(event: InputEvent) -> void:
	if event.is_action_pressed("ui_accept") or (event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT):
		_open_modal()

func _open_modal() -> void:
	if room_id == "":
		return
		
	EventBus.room_modal_requested.emit({
		"id": room_id,
		"name": %RoomName.text,
		"state": state,
		"state_label": STATE_LABELS[state]
	})

func _on_focus_entered() -> void:
	%FocusBorder.visible = true
	EventBus.room_focused.emit(self)

func _on_focus_exited() -> void:
	%FocusBorder.visible = false

func _on_mouse_entered() -> void:
	grab_focus()

func set_room_name(new_name: String) -> void:
	if is_node_ready():
		%RoomName.text = new_name
	else:
		_pending_name = new_name

func _set_state(new_state: State) -> void:
	state = new_state
	if is_node_ready():
		_update_visuals()

func _set_room_texture(tex: Texture2D) -> void:
	room_texture = tex
	if is_node_ready():
		%Sprite2D.texture = tex

func _update_visuals() -> void:
	if not is_node_ready(): return
	
	if room_texture:
		%Sprite2D.texture = room_texture
	
	match state:
		State.ABANDONED:
			# Look: Dark, desaturated, offline
			%Sprite2D.self_modulate = Color(0.3, 0.3, 0.4, 1.0)
			%StatusIndicator.color = Color.DARK_RED
			%RoomName.self_modulate = Color(0.6, 0.6, 0.6)
		State.CONSTRUCTION:
			# Look: Tinted yellow/orange, blinking potential
			%Sprite2D.self_modulate = Color(1.0, 0.9, 0.4, 0.8)
			%StatusIndicator.color = Color.ORANGE
			%RoomName.self_modulate = Color(1.0, 0.8, 0.2)
		State.OPERATIONAL:
			# Look: Clear, bright, active
			%Sprite2D.self_modulate = Color(1.2, 1.2, 1.2, 1.0) # Slight glow if using HDR
			%StatusIndicator.color = Color.GREEN
			%RoomName.self_modulate = Color(1.0, 1.0, 1.0)

