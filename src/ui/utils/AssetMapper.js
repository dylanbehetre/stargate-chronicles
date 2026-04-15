import assetMapping from '../../data/biomes/mapping.json';

/**
 * Maps biomes and mission outcomes to their corresponding anime illustrations.
 */
export class AssetMapper {
  static getBiomeIllustration(biomeName) {
    const biome = assetMapping.biomes[biomeName];
    return biome ? biome.illustration : '/assets/illustrations/biome-default.webp';
  }

  static getMomentIllustration(momentKey) {
    const moment = assetMapping.moments[momentKey];
    return moment ? moment : '/assets/illustrations/moment-default.webp';
  }

  static getBiomeDescription(biomeName) {
    const biome = assetMapping.biomes[biomeName];
    return biome ? biome.description : 'Ambiente sconosciuto.';
  }
}
