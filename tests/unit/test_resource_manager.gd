extends Node

## Simple test script for ResourceManager and EventBus.
## Can be run by attaching to a scene or calling manually.

func run_tests():
	LogManager.info("--- Starting ResourceManager Tests ---")
	
	# Test Initial Budget
	var initial_budget = ResourceManager.get_budget()
	_assert(initial_budget == Constants.STARTING_FUNDS, "Initial budget should be %d" % Constants.STARTING_FUNDS)
	
	# Test Add Budget
	var added = 500
	ResourceManager.add_budget(added)
	_assert(ResourceManager.get_budget() == initial_budget + added, "Budget should increase by %d" % added)
	
	# Test Consume Budget
	var consumed = 200
	var success = ResourceManager.consume_budget(consumed)
	_assert(success, "Budget consumption should succeed")
	_assert(ResourceManager.get_budget() == initial_budget + added - consumed, "Budget should decrease correctly")
	
	# Test Insufficient Budget
	var too_much = 1000000000
	success = ResourceManager.consume_budget(too_much)
	_assert(!success, "Budget consumption should fail for excessive amount")
	
	# Test Resources
	var naq_add = 10
	ResourceManager.add_resource(Constants.ResourceType.NAQUADAH, naq_add)
	_assert(ResourceManager.get_resource_amount(Constants.ResourceType.NAQUADAH) == naq_add, "Naquadah should be %d" % naq_add)
	
	LogManager.info("--- ResourceManager Tests Completed ---")

func _assert(condition: bool, message: String):
	if condition:
		LogManager.info("[PASS] %s" % message)
	else:
		LogManager.error("[FAIL] %s" % message)
