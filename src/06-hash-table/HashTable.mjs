import { DoublyLinkedList } from '../02-doubly-linked-list/DoublyLinkedList.mjs';

const TABLE_SIZE = 173;
const PRIME = 37;

class HashTable {
  constructor() {
    this.table = new Array(TABLE_SIZE);
    this.count = 0;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  put(key, value) {
    const hashedIndex = this.#hash(key);
    let bucket = this.table[hashedIndex];
    if (bucket) {
      const existingData = bucket.find((data) => data.key === key);

      if (existingData) {
        existingData.value = value;
        return;
      }

      bucket.insertAtBack({ key, value });
    } else {
      bucket = new DoublyLinkedList();
      this.table[hashedIndex] = bucket;
      bucket.insertAtBack({ key, value });
    }

    this.count++;
  }

  get(key) {
    const hashedIndex = this.#hash(key);
    const bucket = this.table[hashedIndex];

    if (!bucket) {
      return null;
    }

    const data = bucket.find((data) => data.key === key);
    return data ? data.value : null;
  }

  remove(key) {
    const hashedIndex = this.#hash(key);
    const bucket = this.table[hashedIndex];

    if (!bucket) {
      return null;
    }

    const data = bucket.find((data) => data.key === key);

    if (!data) {
      return null;
    }

    const removeIndex = bucket.indexOf(data);
    const removedData = bucket.removeAt(removeIndex);

    this.count--;
    return removedData.value;
  }

  contains(key) {
    const hashedIndex = this.#hash(key);
    const bucket = this.table[hashedIndex];

    if (bucket) {
      const existingData = bucket.find((data) => data.key === key);

      if (existingData) {
        return true;
      }
    }

    return false;
  }

  get size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.table = new Array(TABLE_SIZE);
    this.count = 0;
  }
}

export { HashTable };
