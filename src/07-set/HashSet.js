import { HashTable } from '../06-hash-table/HashTable.mjs';

const SET_VALUE = true;

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    this.hashTable.put(data, SET_VALUE);
  }

  remove(data) {
    return this.hashTable.remove(data) !== null;
  }

  contains(data) {
    return this.hashTable.contains(data);
  }

  clear() {
    this.hashTable.clear();
  }

  isEmpty() {
    return this.hashTable.isEmpty();
  }

  get size() {
    return this.hashTable.size;
  }
}

export { HashSet };
