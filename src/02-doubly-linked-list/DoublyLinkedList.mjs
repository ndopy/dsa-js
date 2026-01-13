const ACTION_TYPE = Object.freeze({
  INSERT: 'insert',
  REMOVE: 'remove',
  GET: 'get',
});

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  #head;
  #tail;
  #length;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  #validateIndex(type, index) {
    const validateMaxIndex =
      type === ACTION_TYPE.INSERT ? this.#length : this.#length - 1;

    if (index < 0) {
      throw new Error('인덱스는 0보다 작을 수 없습니다.');
    }

    if (index > validateMaxIndex) {
      throw new Error(
        `인덱스 범위를 초과했습니다. (입력값: ${index}, 최대 허용값: ${validateMaxIndex})`,
      );
    }
  }

  #getNodeAt(index) {
    this.#validateIndex(ACTION_TYPE.GET, index);

    let currentNode = null;

    // 인덱스가 전체 길이의 절반보다 앞이라면 head부터, 뒤라면 tail부터 순회한다.
    if (index < this.#length / 2) {
      currentNode = this.#head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.#tail;

      for (let i = this.#length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }

  isEmpty() {
    return this.#length === 0;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  insertAtFront(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#head.prev = newNode;
      newNode.next = this.#head;
      this.#head = newNode;
    }

    this.#length += 1;
  }

  insertAtBack(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.prev = this.#tail;
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.#length += 1;
  }

  insertAt(index, data) {
    this.#validateIndex(ACTION_TYPE.INSERT, index);

    if (index === 0) {
      this.insertAtFront(data);
    } else if (index === this.#length) {
      this.insertAtBack(data);
    } else {
      const newNode = new Node(data);

      const currentNode = this.#getNodeAt(index);
      const prevNode = currentNode.prev;
      const nextNode = currentNode;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      this.#length += 1;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      throw new Error('리스트가 비어있습니다. 삭제할 노드가 없습니다.');
    }

    const removeNode = this.#head;

    if (this.#length === 1) {
      this.clear();
      return removeNode.data;
    }

    this.#head = removeNode.next;
    this.#head.prev = null;

    removeNode.prev = null;
    removeNode.next = null;

    this.#length -= 1;
    return removeNode.data;
  }

  removeBack() {
    if (this.isEmpty()) {
      throw new Error('리스트가 비어있습니다. 삭제할 노드가 없습니다.');
    }

    const removeNode = this.#tail;

    if (this.#length === 1) {
      this.clear();
      return removeNode.data;
    }

    this.#tail = removeNode.prev;
    this.#tail.next = null;

    removeNode.prev = null;
    removeNode.next = null;

    this.#length -= 1;
    return removeNode.data;
  }

  removeAt(index) {
    this.#validateIndex(ACTION_TYPE.REMOVE, index);

    if (index === 0) {
      return this.removeFront();
    } else if (index === this.#length - 1) {
      return this.removeBack();
    }

    const removeNode = this.#getNodeAt(index);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removeNode.prev = null;
    removeNode.next = null;

    this.#length -= 1;
    return removeNode.data;
  }

  get(index) {
    return this.#getNodeAt(index).data;
  }

  get length() {
    return this.#length;
  }

  indexOf(data) {
    let currentNode = this.#head;

    for (let idx = 0; idx < this.#length; idx++) {
      if (currentNode.data === data) {
        return idx;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  toArray() {
    const result = [];
    let currentNode = this.#head;

    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }

  printAll() {
    console.log(this.toArray());
  }
}

export { DoublyLinkedList };
