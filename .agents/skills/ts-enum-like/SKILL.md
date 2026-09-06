---
name: ts-enum-like
description: Generate a TypeScript "enum-like" construct (class + frozen const object + derived type). Use whenever the user asks to create an enum, an enum-like object, or a fixed set of named constants with associated data in TypeScript, instead of using the native `enum` keyword.
---

# ts-enum-like — TypeScript Enum-like Pattern Generator

## Why this pattern instead of native `enum`

This codebase avoids TypeScript's native `enum` keyword. Instead, it uses a
**class + `Object.freeze` const + derived type** trio. This gives:
- Strongly-typed instances (not just primitives)
- Extra associated data per member (label, description, nested config objects, etc.)
- A value AND a type sharing the same identifier name (`import { X } from ...` works both as a type and as a namespace-like value holder)
- Tree-shakeable, plain-object runtime representation (no TS enum compiled artifacts)

## Canonical example

```ts
export class ScheduleDefinitionFrequencyModel {
	constructor(
		public readonly code: string,
		public readonly label: string,
		public readonly description: string,
		public readonly recurrenceSettings: RecurrenceSettings,
	) {
	}
}

export const ScheduleDefinitionFrequency = Object.freeze({
	ONE_TIME: new ScheduleDefinitionFrequencyModel(
		'ONE_TIME',
		'One-time',
		'Schedule a single run at a specific date and time',
		RecurrenceSettings.builder().withDatetime().build(),
	),
	DAILY: new ScheduleDefinitionFrequencyModel(
		'DAILY',
		'Daily',
		'Runs every day at the specified time',
		RecurrenceSettings.builder().withTime().build(),
	),
	// ...other members
});

export type ScheduleDefinitionFrequency = (typeof ScheduleDefinitionFrequency)[keyof typeof ScheduleDefinitionFrequency];
```

Simpler variant with only 2 fields:

```ts
export class ScheduleDefinitionStateModel {
	constructor(
		public readonly code: string,
		public readonly label: string,
	) {
	}
}

export const ScheduleDefinitionState = Object.freeze({
	ACTIVE: new ScheduleDefinitionStateModel('ACTIVE', 'Active'),
	SUSPENDED: new ScheduleDefinitionStateModel('SUSPENDED', 'Suspended'),
});

export type ScheduleDefinitionState = (typeof ScheduleDefinitionState)[keyof typeof ScheduleDefinitionState];
```

## Structural rules to follow exactly

1. **Model class**
   - Named `<Name>Model` (PascalCase), exported.
   - Fields declared as constructor parameter properties: `public readonly <field>: <type>`.
   - One parameter per line, trailing comma, empty constructor body with `{\n\t}` on its own line (matches project formatting, tabs for indentation).

2. **Const object (the "enum" itself)**
   - Named `<Name>` (same name the type alias will reuse), exported, wrapped in `Object.freeze({ ... })`.
   - Keys are `SCREAMING_SNAKE_CASE`
   - Each value is `new <Name>Model(...)` with one argument per line when there are 3+ args, or inline when there are only 1-2 short args.
   - Preserve member order matching business/domain logical order (chronological, hierarchical, etc.), not alphabetical.

3. **Derived type alias**
   - Exported, exact same identifier as the const: `export type <Name> = (typeof <Name>)[keyof typeof <Name>];`
   - This must be the last line of the file, after the const declaration.
   - This purposely creates the "value + type sharing one name" duality — do not rename it.

4. **File naming & location**
   - kebab-case file name matching the const's semantic meaning, e.g. `schedule-definition-frequency.ts`.
   - Place alongside sibling enum-like files, typically under a feature's `model/` folder.

5. **Formatting**
   - Tabs for indentation (not spaces), single quotes for strings, trailing commas, semicolons — matches the rest of the Angular/TypeScript codebase.

## Usage pattern once generated

Consumers reference members via dot access and the type via the same import:

```ts
import { ScheduleDefinitionFrequency } from './model/schedule-definition-frequency';

const f: ScheduleDefinitionFrequency = ScheduleDefinitionFrequency.DAILY;
```

## Steps to execute this skill

1. Ask the user (if not already clear) for:
   - The enum-like name (PascalCase, e.g. `PaymentMethod`).
   - The list of members and their fields.
   - Any nested/complex config object per member (optional, mirrors `recurrenceSettings`).
2. Determine target file path: kebab-case of the name, placed in the appropriate `model/` (or equivalent) folder, following existing sibling files' location convention in the same feature.
3. Generate the model class, the frozen const object, and the type alias exactly per the structural rules above.
4. Validate with the project's linter/build if requested by the user (do not invent new tooling; reuse existing `ng lint` / `tsc` commands already configured in the repo).
