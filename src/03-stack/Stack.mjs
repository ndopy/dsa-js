import { DoublyLinkedList } from '../02-doubly-linked-list/DoublyLinkedList.mjs';

class Stack {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  push(data) {
    this.list.insertAtBack(data);
  }

  pop() {
    return this.list.removeBack();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.get(this.list.length - 1);
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.length;
  }

  printAll() {
    this.list.printAll();
  }
}

export { Stack };
