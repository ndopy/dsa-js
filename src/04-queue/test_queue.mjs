import { Queue } from './Queue.mjs';

const queue = new Queue();

console.log('=== Queue Test Start ===');

// 1. enqueue 테스트
console.log('\n1. enqueue(1), enqueue(2), enqueue(3)');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(`Queue size: ${queue.size}`); // 3
console.log(`Queue peek: ${queue.peek()}`); // 1 (가장 먼저 들어간 1이 보여야 함)

// 2. dequeue 테스트
console.log('\n2. dequeue()');
console.log(`Dequeue: ${queue.dequeue()}`); // 1
console.log(`Queue size: ${queue.size}`); // 2
console.log(`Queue peek: ${queue.peek()}`); // 2 (그 다음인 2가 보여야 함)

console.log(`Dequeue: ${queue.dequeue()}`); // 2
console.log(`Dequeue: ${queue.dequeue()}`); // 3
console.log(`Queue isEmpty: ${queue.isEmpty()}`); // true

// 3. 빈 큐 테스트 (Edge Case)
console.log('\n3. 빈 큐 테스트');
console.log(`Peek on empty queue: ${queue.peek()}`); // null

try {
  queue.dequeue();
} catch (e) {
  console.log(`Dequeue on empty queue error: ${e.message}`); // 에러 발생 예상
}

// 4. clear 테스트
console.log('\n4. clear() 테스트');
queue.enqueue(10);
queue.enqueue(20);
console.log(`Before clear size: ${queue.size}`); // 2

queue.clear();
console.log(`After clear size: ${queue.size}`); // 0
console.log(`After clear isEmpty: ${queue.isEmpty()}`); // true

console.log('\n=== Queue Test End ===');
