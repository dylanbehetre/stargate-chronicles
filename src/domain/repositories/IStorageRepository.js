/**
 * Interface for storage repositories.
 * Concrete implementations must provide these methods.
 */
export class IStorageRepository {
  save(key, data) {
    throw new Error('Method not implemented');
  }

  load(key) {
    throw new Error('Method not implemented');
  }

  delete(key) {
    throw new Error('Method not implemented');
  }

  clear() {
    throw new Error('Method not implemented');
  }
}
