import { DoublyLinkedList } from '../02-doubly-linked-list/DoublyLinkedList.mjs';

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  addFirst(data) {
    this.list.insertAtFront(data);
  }

  addLast(data) {
    this.list.insertAtBack(data);
  }

  removeFirst() {
    return this.list.removeFront();
  }

  removeLast() {
    return this.list.removeBack();
  }

  peekFirst() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.get(0);
  }

  peekLast() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.get(this.list.length - 1);
  }

  isEmpty() {
    return this.list.length === 0;
  }

  get size() {
    return this.list.length;
  }

  printAll() {
    console.log(this.list.toArray());
  }
}

export { Deque };
