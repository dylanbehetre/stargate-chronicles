class_name SgcBaseView
extends Control

const ROOM_NODE_SCENE = preload("res://domains/management/scenes/room_node.tscn")

# Preload Illustrations
const TEX_GATEROOM = preload("res://assets/illustrations/sgc/control_room.jpg") # Using control room for gateroom as placeholder
const TEX_OFFICE = preload("res://assets/illustrations/sgc/general_office.jpg")
const TEX_SCIENCE = preload("res://assets/illustrations/sgc/science_lab.jpg")
const TEX_ARCH = preload("res://assets/illustrations/sgc/arch_lab.jpg")
const TEX_CONTROL = preload("res://assets/illustrations/sgc/control_room.jpg")
const TEX_INFIRMARY = preload("res://assets/illustrations/sgc/briefing_room.jpg") # placeholder

@onready var scroll_container: ScrollContainer = $ScrollContainer
@onready var levels_container: VBoxContainer = %LevelsContainer

var _general_office_node: RoomNode
var _camera_tween: Tween

func _ready() -> void:
	_generate_base_structure()
	EventBus.room_focused.connect(_on_room_focused)
	
	if _general_office_node:
		_general_office_node.grab_focus.call_deferred()

func _on_room_focused(node: Control) -> void:
	center_view_on(node)

func _generate_base_structure() -> void:
	for child in levels_container.get_children():
		child.queue_free()
	
	for i in range(1, 29):
		var level_hbox = HBoxContainer.new()
		level_hbox.name = "Level_%d" % i
		level_hbox.add_theme_constant_override("separation", 15)
		levels_container.add_child(level_hbox)
		
		# Level Indicator Styling
		var level_panel = PanelContainer.new()
		level_panel.custom_minimum_size = Vector2(100, 180)
		level_hbox.add_child(level_panel)
		
		var level_label = Label.new()
		level_label.text = "LVL %d" % i
		level_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		level_label.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
		level_label.add_theme_font_size_override("font_size", 24)
		level_label.add_theme_color_override("font_color", Color(0.7, 0.7, 0.8))
		level_panel.add_child(level_label)
		
		_add_rooms_for_level(i, level_hbox)

func _add_rooms_for_level(level_num: int, container: HBoxContainer) -> void:
	match level_num:
		21:
			_create_room(container, "INFIRMARY", "Infirmerie", TEX_INFIRMARY, RoomNode.State.OPERATIONAL)
		22:
			_create_room(container, "SECURITY", "Sécurité", null, RoomNode.State.OPERATIONAL)
		25:
			_create_room(container, "RD_PHYSICS", "R&D Physique", TEX_SCIENCE, RoomNode.State.OPERATIONAL)
		26:
			_create_room(container, "RD_BIO", "R&D Bio", TEX_SCIENCE, RoomNode.State.CONSTRUCTION)
		27:
			var office = _create_room(container, "GENERAL_OFFICE", "Bureau du Général", TEX_OFFICE, RoomNode.State.OPERATIONAL)
			_general_office_node = office
			_create_room(container, "CONTROL_ROOM", "Salle de Contrôle", TEX_CONTROL, RoomNode.State.OPERATIONAL)
		28:
			_create_room(container, "GATEROOM", "Salle de la Porte", TEX_GATEROOM, RoomNode.State.OPERATIONAL)
		_:
			_create_room(container, "STORAGE_%d" % level_num, "Secteur %d" % level_num, null, RoomNode.State.ABANDONED)

func _create_room(container: HBoxContainer, id: String, room_name: String, tex: Texture2D = null, state: int = 0) -> RoomNode:
	var room = ROOM_NODE_SCENE.instantiate()
	room.room_id = id
	room.state = state
	if tex:
		room.room_texture = tex
	container.add_child(room)
	room.set_room_name(room_name)
	return room

func center_view_on(target: Control) -> void:
	if _camera_tween:
		_camera_tween.kill()
	
	_camera_tween = create_tween()
	var target_scroll = target.position.y + target.get_parent().position.y
	var center_offset = target_scroll - (size.y / 2.0) + (target.size.y / 2.0)
	
	_camera_tween.tween_property(scroll_container, "scroll_vertical", center_offset, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

func get_level_count() -> int:
	return 28
