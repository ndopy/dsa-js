import { DoublyLinkedList } from '../02-doubly-linked-list/DoublyLinkedList.mjs';

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAtBack(data);
  }

  dequeue() {
    return this.list.removeFront();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.get(0);
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  clear() {
    this.list.clear();
  }

  get size() {
    return this.list.length;
  }
}

export { Queue };
