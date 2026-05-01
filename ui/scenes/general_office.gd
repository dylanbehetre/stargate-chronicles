extends Control

## General's Office Hub Scene
## Handles keyboard-only navigation and signals room changes.

@onready var general_button: Button = %GeneralButton
@onready var control_button: Button = %ControlButton
@onready var briefing_button: Button = %BriefingButton
@onready var science_button: Button = %ScienceButton
@onready var arch_button: Button = %ArchButton
@onready var logistics_button: Button = %LogisticsButton
@onready var version_label: Label = %VersionLabel
@onready var infra_panel: Control = %InfrastructurePanel

func _ready() -> void:
	# Update version
	version_label.text = "v%s" % Constants.VERSION
	
	# Connect signals
	general_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.GENERAL))
	control_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.CONTROL))
	briefing_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.BRIEFING))
	science_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.SCIENCE))
	arch_button.pressed.connect(_on_room_button_pressed.bind(Constants.Room.ARCHAEOLOGY))
	logistics_button.pressed.connect(_on_infra_button_pressed)
	
	EventBus.infrastructure_built.connect(_on_infra_built)
	
	# Initial UI state
	_update_menu_visibility()
	_update_room_display(Constants.Room.GENERAL)
	general_button.grab_focus()
	
	LogManager.info("General's Office Hub initialized - Command Level 1")


func _unhandled_input(event: InputEvent) -> void:
	if event.is_action_pressed("nav_general"):
		general_button.grab_focus()
		_on_room_button_pressed(Constants.Room.GENERAL)
	elif event.is_action_pressed("nav_control") and control_button.visible:
		control_button.grab_focus()
		_on_room_button_pressed(Constants.Room.CONTROL)
	elif event.is_action_pressed("nav_briefing") and briefing_button.visible:
		briefing_button.grab_focus()
		_on_room_button_pressed(Constants.Room.BRIEFING)
	elif event.is_action_pressed("nav_science") and science_button.visible:
		science_button.grab_focus()
		_on_room_button_pressed(Constants.Room.SCIENCE)
	elif event.is_action_pressed("nav_archaeology") and arch_button.visible:
		arch_button.grab_focus()
		_on_room_button_pressed(Constants.Room.ARCHAEOLOGY)
	elif event.is_action_pressed("nav_logistics"):
		logistics_button.grab_focus()
		_on_infra_button_pressed()

func _update_menu_visibility() -> void:
	# En début de partie, on n'a accès qu'au Bureau et au Briefing (par exemple)
	# Les labos se débloquent avec les infrastructures
	briefing_button.visible = GameState.is_menu_unlocked("briefing")
	science_button.visible = GameState.is_menu_unlocked("science")
	arch_button.visible = GameState.is_menu_unlocked("archaeology")
	control_button.visible = GameState.is_menu_unlocked("control")

func _on_room_button_pressed(room_id: Constants.Room) -> void:
	infra_panel.hide()
	_update_room_display(room_id)
	LogManager.info("Accessing Sector: %s" % Constants.Room.keys()[room_id])
	EventBus.room_changed.emit(room_id)

func _update_room_display(room_id: Constants.Room) -> void:
	var title = ""
	var desc = ""
	var img_path = "res://assets/illustrations/sgc/general_office.jpg"
	
	match room_id:
		Constants.Room.GENERAL:
			title = "BUREAU DU GÉNÉRAL (NIVEAU 27)"
			desc = "Centre de commandement administratif. Accès direct à la salle de briefing."
			img_path = "res://assets/illustrations/sgc/general_office.jpg"
		Constants.Room.CONTROL:
			title = "SALLE DE CONTRÔLE (NIVEAU 27)"
			desc = "Surveillance active de la Porte des Étoiles. Système de numérotation opérationnel."
			img_path = "res://assets/illustrations/sgc/control_room.jpg"
		Constants.Room.BRIEFING:
			title = "SALLE DE BRIEFING (NIVEAU 28)"
			desc = "Planification des missions et débriefing des équipes SG. Table de conférence principale."
			img_path = "res://assets/illustrations/sgc/briefing_room.jpg"
		Constants.Room.SCIENCE:
			title = "LABORATOIRES SCIENTIFIQUES (NIVEAU 19)"
			desc = "Étude des technologies extra-terrestres et analyse énergétique par les équipes scientifiques."
			img_path = "res://assets/illustrations/sgc/science_lab.jpg"
		Constants.Room.ARCHAEOLOGY:
			title = "LABORATOIRE D'ARCHÉOLOGIE (NIVEAU 21)"
			desc = "Traduction des glyphes et étude des artefacts des civilisations anciennes par les spécialistes."
			img_path = "res://assets/illustrations/sgc/arch_lab.jpg"
	
	%RoomTitle.text = title
	%Description.text = desc
	var tex = load(img_path)
	if tex:
		%OfficeIllustration.texture = tex


func _on_infra_button_pressed() -> void:
	# Note: On garde le panel infra accessible via un raccourci interne ou un bouton invisible pour le dev ?
	# Pour l'instant, on peut l'ouvrir depuis l'Archéologie par exemple.
	infra_panel.visible = !infra_panel.visible

func _on_infra_built(_id: String) -> void:
	_update_menu_visibility()
