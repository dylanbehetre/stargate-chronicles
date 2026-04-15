/**
 * Service to manage application state and persistence coordination.
 */
export class StateService {
  /**
   * @param {Object} state - The reactive/managed state object.
   * @param {IStorageRepository} storage - The storage adapter.
   */
  constructor(state, storage) {
    this.state = state;
    this.storage = storage;
    this.SAVE_KEY = 'sgc_global_state';
  }

  /**
   * Restores state from localStorage.
   */
  initialize() {
    const saved = this.storage.load(this.SAVE_KEY);
    if (saved) {
      Object.assign(this.state, saved);
    }
    
    // Setup auto-save (e.g., on every state change if using a Proxy, 
    // or just exposing a save method).
  }

  save() {
    this.storage.save(this.SAVE_KEY, {
      unlockedChevrons: this.state.unlockedChevrons,
      history: this.state.history,
      // Note: Full planet data is usually stored separately per ID
    });
  }
}
