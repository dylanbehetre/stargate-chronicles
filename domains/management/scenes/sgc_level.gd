class_name SgcLevel
extends Node2D

## Représente un niveau structurel du SGC.
## Gère le rendu de la dalle béton, de la poutre métallique et du couloir.

@export var level_number: int = 1
@export var width: float = 1400.0
@export var height: float = 220.0
@export var slab_height: float = 28.0
@export var beam_height: float = 12.0

@onready var rooms_container: Node2D = $Rooms
@onready var corridor: Polygon2D = $Corridor
@onready var floor_slab: Polygon2D = $FloorSlab
@onready var metal_beam: Polygon2D = $MetalBeam
@onready var level_label: Label = %LevelLabel

func _ready() -> void:
	setup_visuals()
	level_label.text = "LEVEL %02d" % level_number

func setup_visuals() -> void:
	# 1. Dalle Béton (en bas du niveau)
	var slab_points = PackedVector2Array([
		Vector2(0, height),
		Vector2(width, height),
		Vector2(width, height + slab_height),
		Vector2(0, height + slab_height)
	])
	floor_slab.polygon = slab_points
	floor_slab.color = Color("#2E2E2E")
	
	# 2. Poutre Métallique (sur la dalle)
	var beam_points = PackedVector2Array([
		Vector2(0, height),
		Vector2(width, height),
		Vector2(width, height - beam_height),
		Vector2(0, height - beam_height)
	])
	metal_beam.polygon = beam_points
	metal_beam.color = Color("#3A4A5A")
	
	# 3. Couloir (Fond arrondi)
	var corridor_points = PackedVector2Array([
		Vector2(40, 0),
		Vector2(width - 40, 0),
		Vector2(width - 40, height),
		Vector2(40, height)
	])
	corridor.polygon = corridor_points
	corridor.color = Color("#4A4A40")
	
	# 4. Tuyauteries (Plafond)
	_draw_pipes()
	
	# 5. Tracés de sol (Lignes verte et rouge)
	_draw_floor_markings()

func _draw_pipes() -> void:
	var pipes_node = Node2D.new()
	add_child(pipes_node)
	
	# Tuyau principal
	var pipe1 = Line2D.new()
	pipe1.width = 8.0
	pipe1.default_color = Color("#5A5A5A")
	pipe1.add_point(Vector2(40, 20))
	pipe1.add_point(Vector2(width - 40, 20))
	pipes_node.add_child(pipe1)
	
	# Tuyau secondaire (couleur alerte)
	var pipe2 = Line2D.new()
	pipe2.width = 4.0
	pipe2.default_color = Color("#8B6A3A") # Marron/ocre
	pipe2.add_point(Vector2(40, 35))
	pipe2.add_point(Vector2(width - 40, 35))
	pipes_node.add_child(pipe2)

func _draw_floor_markings() -> void:
	# Ligne verte (Sécurité)
	var green_line = Line2D.new()
	green_line.width = 4.0
	green_line.default_color = Color("#2ECC71")
	green_line.add_point(Vector2(40, height - 10))
	green_line.add_point(Vector2(width - 40, height - 10))
	add_child(green_line)
	
	# Ligne rouge (Restreint - au milieu si nécessaire ou devant certaines zones)
	# Pour l'instant on met juste la verte par défaut.

func add_room(room_node: Node2D, pos_x: float) -> void:
	rooms_container.add_child(room_node)
	room_node.position = Vector2(pos_x, height / 2.0)
