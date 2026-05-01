class_name Constants
extends RefCounted

## Global constants for the Stargate game.

const VERSION = "0.1.0"
const STARTING_FUNDS = 1000000

enum Room {
	GENERAL,
	CONTROL,
	BRIEFING,
	SCIENCE,
	ARCHAEOLOGY
}

enum Faction {
	TAU_RI,
	TOK_RA,
	GOA_ULD,
	ASGARD,
	NOX,
}

enum ResourceType {
	NAQUADAH,
	TRINIUM,
	ZPM
}
