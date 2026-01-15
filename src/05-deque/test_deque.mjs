import { Deque } from './Deque.mjs';

const deque = new Deque();

console.log(`isEmpty: ${deque.isEmpty()}`);

deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.printAll();

deque.addLast(4);
deque.addLast(5);
deque.printAll();

console.log(`isEmpty: ${deque.isEmpty()}`);
console.log(`size: ${deque.size}`);

console.log(`peekFirst: ${deque.peekFirst()}`);
console.log(`peekLast: ${deque.peekLast()}`);

console.log(`removeFirst: ${deque.removeFirst()}`);
deque.printAll();

console.log(`removeLast: ${deque.removeLast()}`);
deque.printAll();

while (!deque.isEmpty()) {
  console.log(`removeFirst: ${deque.removeFirst()}`);
}
deque.printAll();

console.log(`peekFirst: ${deque.peekFirst()}`);
console.log(`peekLast: ${deque.peekLast()}`);

try {
  deque.removeFirst();
} catch (e) {
  console.log(e.message);
}
