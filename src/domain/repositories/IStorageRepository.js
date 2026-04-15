/**
 * @interface IStorageRepository
 */
export class IStorageRepository {
  /**
   * @param {string} key
   * @returns {Promise<any>}
   */
  async get(key) { throw new Error('Not implemented'); }

  /**
   * @param {string} key
   * @param {any} value
   * @returns {Promise<void>}
   */
  async set(key, value) { throw new Error('Not implemented'); }

  /**
   * @param {string} key
   * @returns {Promise<void>}
   */
  async remove(key) { throw new Error('Not implemented'); }
}
