import { IStorageRepository } from '../domain/repositories/IStorageRepository.js';

/**
 * LocalStorage implementation of IStorageRepository.
 */
export class LocalStorageRepository extends IStorageRepository {
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  delete(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
