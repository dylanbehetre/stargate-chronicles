extends Node

var game_time: float = 0.0
var time_scale: float = 1.0
var is_paused: bool = false

signal second_passed(total_seconds: float)
signal timer_completed(timer_id: String)

var _active_timers: Dictionary = {} # id: String -> { "duration": float, "elapsed": float, "callback": Callable }

func _ready() -> void:
	LogManager.info("TimelineManager initialized")

func _process(delta: float) -> void:
	if is_paused:
		return
	
	var effective_delta = delta * time_scale
	game_time += effective_delta
	
	# Process timers
	var completed = []
	for id in _active_timers:
		var timer = _active_timers[id]
		timer.elapsed += effective_delta
		if timer.elapsed >= timer.duration:
			completed.append(id)
	
	for id in completed:
		var timer = _active_timers[id]
		if timer.callback.is_valid():
			timer.callback.call()
		_active_timers.erase(id)
		timer_completed.emit(id)
		LogManager.info("Timer completed: %s" % id)

func add_timer(id: String, duration: float, callback: Callable) -> void:
	if _active_timers.has(id):
		LogManager.warning("Timer already exists and cannot be overwritten: %s" % id)
		return
	_active_timers[id] = {
		"duration": duration,
		"elapsed": 0.0,
		"callback": callback
	}
	LogManager.info("Timer added: %s (Duration: %.1fs)" % [id, duration])

func get_timer_progress(id: String) -> float:
	if not _active_timers.has(id):
		return 1.0
	var timer = _active_timers[id]
	return clamp(timer.elapsed / timer.duration, 0.0, 1.0)

func get_timer_remaining(id: String) -> float:
	if not _active_timers.has(id):
		return 0.0
	var timer = _active_timers[id]
	return max(0.0, timer.duration - timer.elapsed)

func fast_forward_to_timer(id: String) -> void:
	if not _active_timers.has(id):
		return
	
	LogManager.info("Fast forwarding to timer: %s" % id)
	# For the MVP, we just finish it. In a real game, we'd check for interruptions.
	var timer = _active_timers[id]
	var remaining = timer.duration - timer.elapsed
	# We "advance" the game time by the remaining amount
	game_time += remaining
	timer.elapsed = timer.duration
	# The _process loop will handle the completion in the next frame
