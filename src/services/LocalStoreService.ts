export namespace LocalStoreService {
  /**
   * Get values by key from local storage.
   * @param key The key by which the value is stored.
   * @returns Return null if there is no value or key, otherwise return value corresponding.
   */
  export function getValue<T>(key: string): T | null {
    const localValue = localStorage.getItem(key);
    if (localValue != null) {
      return JSON.parse(localValue);
    }
    return null;
  }

  /**
   * Add or write values by key to local storage.
   * @param key The key by which the value is stored.
   * @param value Value that needs to be stored.
   */
  export function setValue<T>(key: string, value: T): void {
    if (value != null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Remove key from local storage.
   * @param key The key that need to be removed.
   */
  export function remove(key: string): void {
    localStorage.removeItem(key);
  }
}
