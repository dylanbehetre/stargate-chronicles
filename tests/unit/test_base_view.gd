extends Node

## Unit tests for SgcBaseView and RoomNode logic.

func run_tests():
	LogManager.info("--- Starting BaseView Tests ---")
	
	test_room_node_initialization()
	test_base_view_structure()
	
	LogManager.info("--- BaseView Tests Completed ---")

func test_room_node_initialization():
	var room_script = load("res://domains/management/scenes/room_node.gd")
	if not room_script:
		LogManager.error("[FAIL] RoomNode script not found")
		return
		
	var room = room_script.new()
	_assert(room.room_id == "", "Room ID should be empty by default")
	_assert(room.state == RoomNode.State.ABANDONED, "Room state should be Abandoned by default")
	_assert(room is MarginContainer, "RoomNode should inherit from MarginContainer")
	room.free()

func test_base_view_structure():
	var view_script = load("res://domains/management/scenes/sgc_base_view.gd")
	if not view_script:
		LogManager.error("[FAIL] SgcBaseView script not found")
		return
		
	var view = view_script.new()
	_assert(view.get_level_count() == 28, "BaseView should have 28 levels")
	_assert(view.has_method("center_view_on"), "BaseView should have center_view_on method")
	view.free()

func _assert(condition: bool, message: String):
	if condition:
		LogManager.info("[PASS] %s" % message)
	else:
		LogManager.error("[FAIL] %s" % message)

