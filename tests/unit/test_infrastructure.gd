extends "res://addons/gut/test.gd"

## Tests for the Infrastructure construction logic.

func before_each():
	GameState.built_infrastructure = []
	GameState.unlocked_menus = ["bureau", "gate"]
	ResourceManager.add_budget(100000)

func test_infrastructure_data_loading():
	var panel = load("res://domains/management/scenes/infrastructure_panel.gd").new()
	panel._load_data()
	assert_true(panel._infra_data.has("cra"), "Infrastructure data should contain 'cra'")
	panel.free()

func test_construction_starts_timer():
	var panel = load("res://domains/management/scenes/infrastructure_panel.gd").new()
	panel._load_data()
	panel._selected_id = "cra"
	
	var initial_budget = ResourceManager.get_budget()
	panel._on_build_button_pressed()
	
	assert_eq(ResourceManager.get_budget(), initial_budget - 50000, "Budget should be deducted")
	assert_true(TimelineManager.get_timer_remaining("build_cra") > 0, "Timer should be active")
	panel.free()

func test_finalize_completes_construction():
	var panel = load("res://domains/management/scenes/infrastructure_panel.gd").new()
	panel._load_data()
	panel._selected_id = "cra"
	panel._on_build_button_pressed()
	
	TimelineManager.fast_forward_to_timer("build_cra")
	# Force a process update to trigger completion
	TimelineManager._process(0.1)
	
	assert_true(GameState.is_infrastructure_built("cra"), "CRA should be marked as built")
	assert_true(GameState.is_menu_unlocked("recruitment"), "Recruitment should be unlocked")
	assert_true(GameState.is_menu_unlocked("research"), "Research should be unlocked")
	panel.free()
