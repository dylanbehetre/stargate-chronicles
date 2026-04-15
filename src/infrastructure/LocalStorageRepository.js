import { IStorageRepository } from '../domain/repositories/IStorageRepository.js';

export class LocalStorageRepository extends IStorageRepository {
  async get(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  async set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key) {
    localStorage.removeItem(key);
  }
}
