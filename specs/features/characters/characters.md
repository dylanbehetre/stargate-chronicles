# Characters Specifications

This file describes characters specifications.

## Creation rules

These rules are based on the Stargate Coalition 3.1 rules
and are adapted when needed to be adapted to Stargate Chronicles mechanisms.

### Races

Races are described in the [Races specifications](races.md) file.
Each Character belongs to a race, which defines adjustments to characteristics and skills,
as well as access to specific equipment.

### Experience Points

At creation, a character has **30 XP** to spend on characteristics and skills.
See following section for more details on how to spend XP :

- [Adjusting Characteristics](#adjusting-characteristics)

### Base Characteristics

#### List of Characteristics

Character are defined by eight attributes :

- **Strength (Str):** combat ability and muscular power.
- **Dexterity (Dex):** skill at using objects and reacting to events.
- **Constitution (Con):** resistance to disease, damage, and intense activities.
- **Cunning (Cun):** application of more technical knowledge in action.
- **Intelligence (Int):** reasoning power and character knowledge.
- **Perception (Per):** alertness regarding external events.
- **Willpower (Wil):** psychic power and resistance of the character.
- **Charisma (Cha):** ability to convince others. The character's charm.

#### Determining Characteristic Values

At the start of character creation, the player chooses one of the following two modes.

##### Mode 1: Dice Roll

For each characteristic, roll 4D6, drop the lowest value, and sum the remaining three.
This produces a pool of eight values.

The player assigns each rolled value to one of the eight characteristics, each value used exactly once.

The player may reroll the whole pool up to **3 times** before validating.

##### Mode 2: Point-Buy

Every characteristic starts at a base value of **10**.
The player has a budget of **20 points** to raise or lower characteristics.

The budget is calibrated on Dice Roll mode: 4D6 (drop lowest) averages about 12.25 per characteristic (about 98 in
total), and up to 3 rerolls raise the expected best pool to about 104. Point-Buy targets a total of about 100
(80 base + 20 points).

Raising a characteristic costs, per step:

| Step    | Cost per step | Cumulative cost from 10 |
|---------|---------------|-------------------------|
| 10 → 14 | 1 point       | 4 (value 14)            |
| 15 → 16 | 2 points      | 8 (value 16)            |
| 17 → 18 | 3 points      | 14 (value 18)           |

Lowering a characteristic by 1 step below 10 refunds 1 point. Lowering from above 10 refunds the cost of the step
being undone.

> *Raising a characteristic from 10 to 16 costs 8 points. Raising it to 18 costs 14 points in total.*

##### Point-Buy Interface

- A "remaining points" counter with a gauge is always visible, relative to the 20-point budget.
- Each increase button shows the cost of the next step and is disabled when it is unaffordable or the value is 18.
- Each decrease button is disabled at value 3 or when it would break the "four characteristics below 10" rule.
- Since a 1-point step always exists while any characteristic is below 14, remaining points are never stranded. If
  every characteristic is at 14 or more, the leftover points are simply unspendable and validation is allowed.

#### Common Rules

Characteristic values are impacted by racial adjustments (see Races specifications).

##### Rules before Racial Adjustments

- A character cannot have more than four characteristics below 10.
- A characteristic value cannot be higher than 18.
- A characteristic value cannot be lower than 3.

##### Rules after Racial Adjustments

- A characteristic cannot be lower than 1. If it is, adjust this number to 1.

> *An Asgard character who put 3 in Strength, -3 Racial thus yields 0. It is adjusted to 1 at the end.*

#### Bonus/Malus

Characteristics values are used to apply bonuses or maluses to dice rolls in the game.
The following table specifies the modifier associated to each value.

| Value | Bonus/Malus |
|:-----:|:-----------:|
| 20/21 |     +5      |
| 18/19 |     +4      |
| 16/17 |     +3      |
| 14/15 |     +2      |
| 12/13 |     +1      |
| 10/11 |      0      |
|  8/9  |     -1      |
|  6/7  |     -2      |
|  4/5  |     -3      |
|  2/3  |     -4      |
|   1   |     -5      |

#### Adjusting Characteristics

Characteristics can be adjusted at the end of character creation, after all characteristics have been determined and
racial adjustments applied.
To adjust a characteristic, the player must spend XP points equal to the new value of the characteristic.

### Skills

Skills are described in the [Skills specifications](skills.md) file.

To each characteristic is associated a set of skills.

Each skill has a level which is used to modify dice rolls on related actions in the game.

Skill levels are impacted by racial adjustments (see Races specifications).

#### Skill Improvement

Skill levels can be increased by spending Characteristic Points (CP).
For each characteristic, Characteristic Points (CP) are calculated by multiplying the characteristic modifier by 3.
If the characteristic modifier is negative, the Characteristic Points (CP) are negative and SHOULD BE used to reduce the
skill level of the associated skills.

A maximum of 50% of all available Characteristic Points (CP) can be spent on a single skill
so you cannot use all your Characteristic Points (CP) to increase a single skill.

### Equipment

Equipment are described in the [Equipment specifications](equipments.md) file.

At creation, a character could choose equipments from the list of equipments :

- maximum 2 weapons
- maximum 1 armor
- character should match requirements if existing
- Find Rating of the equipment should be 3 at maximum (4 if dedicated to character race)

