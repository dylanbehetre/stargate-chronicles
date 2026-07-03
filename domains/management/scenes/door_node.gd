class_name DoorNode
extends Node2D

## Représente une porte blindée du SGC.

@export var is_restricted: bool = false
@export var label_text: String = ""

@onready var label: Label = %DoorLabel
@onready var light: ColorRect = $StatusLight

func _ready() -> void:
	label.text = label_text
	if is_restricted:
		_apply_restricted_style()

func _apply_restricted_style() -> void:
	# Ajoute les bandes noir/jaune visuelles
	$Markings.visible = true
	light.color = Color.RED

func set_open(is_open: bool) -> void:
	# Animation d'ouverture (battants qui s'écartent)
	var tween = create_tween().set_parallel(true)
	if is_open:
		tween.tween_property($LeftBattant, "position:x", -30, 0.5)
		tween.tween_property($RightBattant, "position:x", 30, 0.5)
		light.color = Color.GREEN
	else:
		tween.tween_property($LeftBattant, "position:x", -15, 0.5)
		tween.tween_property($RightBattant, "position:x", 15, 0.5)
		light.color = Color.RED
