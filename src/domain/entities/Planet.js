export const BiomeType = {
  DESERT: 'desert',
  JUNGLE: 'jungle',
  FOREST: 'forest',
  ICE: 'ice',
  VOLCANIC: 'volcanic',
  OCEANIC: 'oceanic',
  URBAN: 'urban',
  WASTELAND: 'wasteland',
  UNKNOWN: 'unknown'
};

export const DangerLevel = {
  NONE: 'none',
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high',
  EXTREME: 'extreme'
};

export const ExplorationStatus = {
  UNEXPLORED: 'unexplored',
  SCOUTED: 'scouted',
  EXPLORED: 'explored',
  COLONIZED: 'colonized'
};

export class Planet {
  constructor({
    id,
    name,
    address, // Array of 7 symbols
    biome = BiomeType.UNKNOWN,
    danger = DangerLevel.NONE,
    status = ExplorationStatus.UNEXPLORED,
    description = '',
    imageUrl = ''
  }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.biome = biome;
    this.danger = danger;
    this.status = status;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  isLocked() {
    return this.status !== ExplorationStatus.UNEXPLORED;
  }
}
