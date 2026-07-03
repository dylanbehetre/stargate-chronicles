class_name ElevatorShaft
extends Node2D

## Gère le puits d'ascenseur principal et le mouvement de la cabine.

@export var level_height: float = 260.0
@export var shaft_width: float = 90.0
@export var total_levels: int = 28

@onready var cabin: Node2D = $Cabin
@onready var cage: Line2D = $CageLines

func _ready() -> void:
	_setup_shaft()
	EventBus.room_focused.connect(_on_room_focused)

func _setup_shaft() -> void:
	# Dessiner les montants de la cage
	cage.clear_points()
	cage.add_point(Vector2(0, 0))
	cage.add_point(Vector2(0, total_levels * level_height))
	
	var cage_right = cage.duplicate()
	add_child(cage_right)
	cage_right.position = Vector2(shaft_width, 0)

func _on_room_focused(room: Node2D) -> void:
	# Note: On reçoit un Control car l'ancien RoomNode était un Control.
	# Dans la nouvelle version, on recevra un Node2D. On gère les deux.
	var target_y = room.global_position.y
	move_to_y(target_y)

func move_to_y(y_pos: float) -> void:
	var tween = create_tween()
	# On ajuste pour centrer la cabine sur le niveau
	tween.tween_property(cabin, "global_position:y", y_pos, 0.6).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN_OUT)
