class_name MountainSurface
extends Node2D

## Affiche la surface de Cheyenne Mountain au-dessus du SGC.

func _draw() -> void:
	# 1. Silhouette de la montagne (Polygon2D ou Draw)
	var mountain_points = PackedVector2Array([
		Vector2(-1000, 0),
		Vector2(-200, -300),
		Vector2(200, -500),
		Vector2(600, -450),
		Vector2(900, -200),
		Vector2(2000, 0)
	])
	draw_polygon(mountain_points, [Color("#3D3D3D")])
	
	# 2. Entrée NORAD (Bunker)
	draw_rect(Rect2(600, -60, 200, 60), Color("#2E2E2E"))
	draw_rect(Rect2(650, -40, 100, 40), Color("#1A1A1A")) # Portail
	
	# 3. Antennes
	draw_line(Vector2(700, -60), Vector2(700, -120), Color.GRAY, 2.0)
	draw_arc(Vector2(700, -130), 20, 0, PI, 12, Color.GRAY, 2.0)

func _ready() -> void:
	# On s'assure d'être au-dessus de tout
	z_index = -5
