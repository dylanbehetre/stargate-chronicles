class_name SgcBaseView
extends Node2D

const ROOM_NODE_SCENE = preload("res://domains/management/scenes/room_node.tscn")
const LEVEL_SCENE = preload("res://domains/management/scenes/sgc_level.tscn")
const ELEVATOR_SCENE = preload("res://domains/management/scenes/elevator_shaft.tscn")
const DOOR_NODE_SCENE = preload("res://domains/management/scenes/door_node.tscn")
const MOUNTAIN_SURFACE_SCRIPT = preload("res://domains/management/scenes/mountain_surface.gd")

# Preload Illustrations (Placeholders until images are generated)
const TEX_GATEROOM = preload("res://assets/illustrations/sgc/control_room.jpg")
const TEX_OFFICE = preload("res://assets/illustrations/sgc/general_office.jpg")

@onready var levels_container: Node2D = %LevelsContainer
@onready var camera: Camera2D = $Camera2D

var _general_office_node: RoomNode
var _elevator: ElevatorShaft
var _all_rooms: Array[RoomNode] = []

func _ready() -> void:
	_generate_base_structure()
	EventBus.room_focused.connect(_on_room_focused)
	
	if _general_office_node:
		_general_office_node.grab_focus.call_deferred()
		center_view_on.call_deferred(_general_office_node)

func _on_room_focused(node: Node2D) -> void:
	center_view_on(node)

func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_WHEEL_UP:
			camera.position.y -= 50
		elif event.button_index == MOUSE_BUTTON_WHEEL_DOWN:
			camera.position.y += 50
		# Empêcher le dépassement des limites
		camera.position.y = clamp(camera.position.y, camera.limit_top, camera.limit_bottom)

func _generate_base_structure() -> void:
	_all_rooms.clear()
	# 1. Nettoyage
	for child in levels_container.get_children():
		child.queue_free()
	
	# 2. Ajout de la surface de la montagne
	var surface = Node2D.new()
	surface.set_script(MOUNTAIN_SURFACE_SCRIPT)
	surface.position = Vector2(0, 0) # Au niveau 0
	levels_container.add_child(surface)

	# 3. Ajout de l'ascenseur central
	_elevator = ELEVATOR_SCENE.instantiate()
	_elevator.position = Vector2(700 - 45, 0) # Centré sur 1400px
	levels_container.add_child(_elevator)
	
	# 3. Génération des 28 niveaux
	for i in range(1, 29):
		var level = LEVEL_SCENE.instantiate()
		level.level_number = i
		level.position = Vector2(0, (i - 1) * 260.0) # 220 niveau + 28 dalle + 12 poutre
		levels_container.add_child(level)
		
		_add_rooms_to_level(i, level)
	
	_link_room_neighbors()

func _add_rooms_to_level(level_num: int, level_node: SgcLevel) -> void:
	# On place les salles à gauche et à droite de l'ascenseur (x=700)
	match level_num:
		21:
			_create_room(level_node, "INFIRMARY", "Infirmerie", null, 400, RoomNode.State.OPERATIONAL)
		27:
			var office = _create_room(level_node, "GENERAL_OFFICE", "Bureau du Général", TEX_OFFICE, 400, RoomNode.State.OPERATIONAL)
			_general_office_node = office
			_create_room(level_node, "CONTROL_ROOM", "Salle de Contrôle", null, 1000, RoomNode.State.OPERATIONAL)
		28:
			# Gateroom (Hauteur ×2 selon le skill)
			var gateroom = _create_room(level_node, "GATEROOM", "Salle de la Porte", TEX_GATEROOM, 700, RoomNode.State.OPERATIONAL)
			gateroom.scale = Vector2(1.5, 2.2)
			gateroom.z_index = -1 # Derrière les autres éléments
			gateroom.position.y -= 80 # Remonte légèrement sans tout cacher
		_:
			# Salles génériques avec une porte entre elles
			_create_room(level_node, "STORAGE_%d_A" % level_num, "Secteur %d-A" % level_num, null, 300, RoomNode.State.ABANDONED)
			_create_door(level_node, 450, "D-%d" % level_num)
			_create_room(level_node, "STORAGE_%d_B" % level_num, "Secteur %d-B" % level_num, null, 1100, RoomNode.State.ABANDONED)

func _create_door(level_node: SgcLevel, pos_x: float, label: String, restricted: bool = false) -> DoorNode:
	var door = DOOR_NODE_SCENE.instantiate()
	door.label_text = label
	door.is_restricted = restricted
	level_node.add_child(door)
	door.position = Vector2(pos_x, level_node.height / 2.0)
	return door

func _create_room(level_node: SgcLevel, id: String, room_name: String, tex: Texture2D, pos_x: float, state: int) -> RoomNode:
	var room = ROOM_NODE_SCENE.instantiate()
	room.room_id = id
	room.state = state
	if tex:
		room.room_texture = tex
	
	level_node.add_room(room, pos_x)
	room.set_room_name(room_name)
	_all_rooms.append(room)
	return room

func center_view_on(target: Node2D) -> void:
	var tween = create_tween()
	# On centre la caméra sur la position globale de la salle
	tween.tween_property(camera, "global_position:y", target.global_position.y, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

func _link_room_neighbors() -> void:
	for room in _all_rooms:
		var best_up: RoomNode = null
		var best_down: RoomNode = null
		var best_left: RoomNode = null
		var best_right: RoomNode = null
		
		var my_pos = room.global_position
		
		for other in _all_rooms:
			if other == room: continue
			var other_pos = other.global_position
			var diff = other_pos - my_pos
			
			# Horizontal
			if abs(diff.y) < 50:
				if diff.x > 0:
					if !best_right or diff.x < (best_right.global_position.x - my_pos.x):
						best_right = other
				elif diff.x < 0:
					if !best_left or abs(diff.x) < abs(best_left.global_position.x - my_pos.x):
						best_left = other
			
			# Vertical
			if abs(diff.x) < 200:
				if diff.y > 0:
					if !best_down or diff.y < (best_down.global_position.y - my_pos.y):
						best_down = other
				elif diff.y < 0:
					if !best_up or abs(diff.y) < abs(best_up.global_position.y - my_pos.y):
						best_up = other
		
		var focus_ctrl = room.focus_control
		if best_up: focus_ctrl.focus_neighbor_top = focus_ctrl.get_path_to(best_up.focus_control)
		if best_down: focus_ctrl.focus_neighbor_bottom = focus_ctrl.get_path_to(best_down.focus_control)
		if best_left: focus_ctrl.focus_neighbor_left = focus_ctrl.get_path_to(best_left.focus_control)
		if best_right: focus_ctrl.focus_neighbor_right = focus_ctrl.get_path_to(best_right.focus_control)
