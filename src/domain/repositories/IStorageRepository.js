/**
 * Interface for storage operations.
 * Must be implemented by infrastructure adapters.
 */
export class IStorageRepository {
  save(key, data) {
    throw new Error('Method not implemented.');
  }

  load(key) {
    throw new Error('Method not implemented.');
  }

  delete(key) {
    throw new Error('Method not implemented.');
  }

  clear() {
    throw new Error('Method not implemented.');
  }
}
